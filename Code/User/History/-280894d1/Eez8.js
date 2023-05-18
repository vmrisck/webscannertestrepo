const apiBaseUrl = window.location.origin ;
console.log(apiBaseUrl)
var scanResults = {
    summary: {
        scannedRepos: 0,
        languages: [],
        scannedFiles: 0,
        totalSE: 0
    },
    recentRepos: [],
    currentRepo: {}
}
var piiIconMap = {
    "man": {
        "type": "html-code",
        "value": "&#129489;"
    },
    "name": {
        "type": "image",
        "value": "pii-person.svg"
    },
    "email": {
        "type": "image",
        "value": "pii-email.svg"
    },
    "phone": {
        "type": "image",
        "value": "pii-phone.svg"
    },
    "street": {
        "type": "image",
        "value": "pii-address-house.svg"
    },
    "credit": {
        "type": "image",
        "value": "pii-credit-card.svg"
    },
    "SSN": {
        "type": "image",
        "value": "pii-ssn.svg"
    },
    "location": {
        "type": "image",
        "value": "pii-location.svg"
    },
    "date": {
        "type": "image",
        "value": "pii-date-calendar.svg"
    },
    "IP": {
        "type": "image",
        "value": "pii-ip-pc.svg"
    },
    "MAC": {
        "type": "image",
        "value": "pii-mac-pci.svg"
    },
    "token": {
        "type": "image",
        "value": "pii-token-fingerprint.svg"
    },
    "api": {
        "type": "image",
        "value": "api-arrow.svg"
    },
}
var maxRecentRepoSize = 7

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    } catch (error) {
        console.log("ErRor: " + error)
        return "";
    }
}

// Consolidated repo scan results.
(async () => {
    while (true) {
        try {
            const repoStats = (await fetchData(`${apiBaseUrl}/repostats.txt`)).replace(/^[\s\n]+|[\s\n]+$/g, '')

            if (!repoStats) 
                throw new Error(`Ticker could not fetch ${apiBaseUrl}/repostats.txt`);

            //document.getElementById("totalScanResults").innerHTML = repoStats;//JSON.stringify(repoStats, null, 2);
            document.getElementById("total-table-row").innerHTML = "";
            let totalRepoFilesCount = 0

            for (const item of repoStats.split('\n')) {
                let [key, value] = item.split(':'); // use destructuring and discard key

                let langPercents = {}, extnPercentCount = 6, langPercentSplitup = ''
                if (!key)
                    continue
                else if (key == 'totalRepoFilesCount')
                    totalRepoFilesCount = value;
                else if (key == 'totalLangFileCountString') {
                    let langPercentSplitup = ''
                    value.split(',').forEach(element => {
                        let [lang, num] = element.split('=');
                        langPercent = +(Math.round(100*num/totalRepoFilesCount + "e+2")  + "e-2");
                        //percentSplitup += `, `+ langLookup(`.${lang}`) + ` ${langPercent}%`; // TODO: Sort by %
                        langPercents[lang] = langPercent
                    });
                    Object.entries(langPercents).sort((a, b) => b[1] - a[1]).forEach(extension => {
                        //return (--extnCount) ? repoLangExtensionsString += `,${extension[0]}` : false // .every()
                        //langPercentSplitup += ',' + langLookup(`.${extension[0]}`)
                        langPercentSplitup += `, `+ langLookup(`.${extension[0]}`) + ` ${extension[1]}%`;
                    })
                    langPercentSplitup = langPercentSplitup.slice(1);
                    value = langPercentSplitup.split(',').slice(0, extnPercentCount).join(',')
                }

                let div = document.createElement('div');
                div.innerHTML = "";
                div.classList.add("table-body-cell");
                div.innerHTML = value ?? 0 // json key value
                document.getElementById("total-table-row").appendChild(div);
            }
        } catch (error) {
            console.error(error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // pause between fetching/displaying results
    }
})();


// Recently scanned repo stats
(async () => {
    while (true) {
        try {
            const repoStats = (await fetchData(`${apiBaseUrl}/listRepoStats`)).replace(/^[\s\n]+|[\s\n]+$/g, '')
            if (!repoStats)  return;

            for (const item of repoStats.split('\n')) {
                if (! /stats\.log/.test(item) )  continue;  // Skip any unwanted files

                let [repoType, repoName] = item.split('/')[0]?.split('__');  // eg: github js_test
                let scanTime = item.split('/')[1]?.split('-stats.log')[0];

                let recentRepo = {};
                recentRepo.type = repoType;
                recentRepo.name = repoName;
                recentRepo.lastScanned = new Date(scanTime*1000).toISOString().split('T')[0];  // try-catch validation

                const repoStat = (await fetchData(`${apiBaseUrl}/${item}`)).replace(/^[\s\n]+|[\s\n]+$/g, '')
                for (const line of repoStat.split('\n')) {
                    let [key, ...value] = line.split(':');
                    if (!key) continue;
                    recentRepo[key] = value.join(':');
                }

                // TODO: Skip if no repos with API calls are already present in scanResults.recentRepos
                // Skip if no apicalls/pii found
                if ( !(recentRepo.repoApiCallsCount || recentRepo.repoPiiCount) )  continue

                scanResults.recentRepos.push(recentRepo)
                let sleepTime = 0;

                if (scanResults.recentRepos.length > maxRecentRepoSize ) {
                    scanResults.recentRepos.shift()
                    sleepTime = 2000;
                }
                // TODO: remove initial pause/interval?
                //document.getElementById("recentScanResults").innerHTML = JSON.stringify(scanResults.recentRepos, null, 2);

                //TODO: Add scanResults.recentRepos to recent repo UI table.
                document.getElementById("recent-table-body").innerHTML = '';
                scanResults.recentRepos.forEach(recent => {
                    let recentRow = '';
                    let repoNameHtml = ''
                    if (recent.repoUrl)
                        repoNameHtml = `<a target="_blank" style="color: gold" href="${recent.repoUrl}">${recent.repoName}</a>`
                    else
                        repoNameHtml = recent.repoName
                    recentRow += `<div class="table-body-cell" style="overflow-wrap: anywhere; inline-size: 200px;">${repoNameHtml}</div>`

                    if (recent.repoType == 'github')
                        recentRow += `<div class="table-body-cell"><img src="img/github-mark-white.png" class="octicon"/></div>`
                        //recentRow += `<div class="table-body-cell"><img src="img/GitHub_Logo.png" class="octicon-logo"/></div>`
                    else if (recent.repoType == 'npm')
                        recentRow += `<div class="table-body-cell"><img src="img/npm.png" class="npmicon"/></div>`
                    else
                        recentRow += `<div class="table-body-cell">${recent.repoType}</div>`

                    let repoLangCounts = {}
                    let repoLangExtensionsString = ''
                    recent.repoLangFileCountString.split(',').forEach(element => {
                        let [extension, extensionCount] = element.split('=')
                        repoLangCounts[extension] = extensionCount
                    })
                    let extnCount = 4
                    Object.entries(repoLangCounts).sort((a, b) => b[1] - a[1]).forEach(extension => {
                        // TODO: May fetch languages.color
                        //return (--extnCount) ? repoLangExtensionsString += `,${extension[0]}` : false // .every()
                        repoLangExtensionsString += ', ' + langLookup(`.${extension[0]}`)
                    })
                    repoLangExtensionsString = repoLangExtensionsString.slice(1)
                    recentRow += `<div class="table-body-cell">${repoLangExtensionsString.split(',').slice(0, 3).join(',')}</div>`

                    if (recent.repoPiiCount != 0 )
                        recentRow += `<div class="table-body-cell"><img title="${recent.repoPiiCount} PIIs found" src="img/check-circle.svg" alt="${recent.repoPiiCount}" class="piiFound"/></div>`
                    else
                        recentRow += `<div class="table-body-cell"><img src="img/x-circle.svg" alt="${recent.repoPiiCount}" class="piiFound"/></div>`

                    if (recent.repoApiCallsCount != 0)
                        recentRow += `<div class="table-body-cell"><img title="${recent.repoApiCallsCount} API calls found" src="img/check-circle.svg" alt="${recent.repoApiCallsCount}" class="piiFound"/></div>`
                    else
                        recentRow += `<div class="table-body-cell"><img src="img/x-circle.svg" alt="${recent.repoApiCallsCount}" class="piiFound"/></div>`

                    recentRow += `<div class="table-body-cell">${recent.repoLOC}</div>`
                    recentRow += `<div class="table-body-cell">${recent.repoFilesCount}</div>`

                    let repoPiiTypesHtml = ''

                    if (recent.repoApiCallsCount != 0)
                        repoPiiTypesHtml += generateHtmlForPiiText('api');

                    recent.repoPiiTypes.split(',').forEach(element => {
                        repoPiiTypesHtml += generateHtmlForPiiText(element);
                    });
                    recentRow += `<div class="table-body-cell">${repoPiiTypesHtml}</div>`

                    recentRow += `<div class="table-body-cell">${recent.lastScanned}</div>`

                    let div = document.createElement('div');
                    div.classList.add("resp-table-row");
                    div.innerHTML = recentRow ?? ''

                    document.getElementById("recent-table-body").appendChild(div);
                })

               // if (sleepTime) // TODO: ?
                    await new Promise(resolve => setTimeout(resolve, sleepTime)); // pause between displaying results
            }
        } catch (error) {
            console.error(error);
        }
    }
})();

function generateHtmlForPiiText(text) {
    let htmlText = text;
    //Object.keys(piiIconMap).every(element => {
    for (const key of Object.keys(piiIconMap)) {
        if (text.includes(key)) {
            if (piiIconMap[key]?.type == "image")
                htmlText = `<img title="${piiIconMap[key]?.desc}" src="img/${piiIconMap[key]?.value}" class="piiIcon"/> `
            else if (piiIconMap[key]?.type == "html-code")
                htmlText = `<span class="piiIcon">${piiIconMap[key]?.value}</span> `
            else if (piiIconMap[key]?.type == "text")
                htmlText = `<b>${piiIconMap[key]?.value}</b>`
            return htmlText;
        }
    }
    //});
    return htmlText;
}


// TODO: Replace with https://github.com/jonschlinkert/lang-map ?
// https://github.com/blakeembrey/language-map
function langLookup(extension) {
    for (const [key, value] of Object.entries(languages)) {
        if (value?.extensions?.includes(extension))
            return key
    }
    return extension
}

// Fetch/Display repo details
(async () => {
    while (true) {
        const logList = (await fetchData(`${apiBaseUrl}/listLogs`)).replace(/^[\s\n]+|[\s\n]+$/g, '')

        for (const item of logList.split('\n')) {
            if (item === 'repostats.txt' || /stats.log/.test(item))    continue;    // TODO: move this to backend?

            const logFile = (await fetchData(`${apiBaseUrl}/${item}`)).replace(/^[\s\n]+|[\s\n]+$/g, '')

            for (const line of logFile.split('\n')) {
                if (/FileSummary/.test(line) )
                    line.split('|').slice(1).forEach(element => {
                        let [key, value] = element.split(':')
                        if (key == 'lastScanned')
                            scanResults.currentRepo[key] = new Date(value * 1000).toISOString().split('T')[0];
                        else
                            scanResults.currentRepo[key] = value;
                    })
                else
                    scanResults.currentRepo.scanResult = line.replace(/.*:/g,'')

                await new Promise(resolve => setTimeout(resolve, 300)); // pause between displaying results


                let splitPoint = Math.trunc(Object.keys(scanResults.currentRepo).length / 3);
                let repoIndex = 1, repoStat1 = {}, repoStat2 = {}, repoStat3 = {}, fileKeyVal = '';
                
                for (const key in scanResults.currentRepo) {
                    //console.log(`${property}: ${object[property]}`);
                    if (key == 'fileName')
                        continue;

                    if (key == 'fileHash')
                        fileKeyVal = scanResults.currentRepo[key].substring(1, 16);
                    else if (key == 'scanResult')
                        fileKeyVal = scanResults.currentRepo[key].replace(/, low confidence/,'')
                    else
                        fileKeyVal = scanResults.currentRepo[key]

                    if (repoIndex <= splitPoint)
                        repoStat1[key] = fileKeyVal
                    else if (repoIndex <= splitPoint * 2)
                        repoStat2[key] = fileKeyVal
                    else
                        repoStat3[key] = fileKeyVal
                    repoIndex++
                }
                document.getElementById("scanResultsFile").innerHTML = `{ "fileName": "${scanResults.currentRepo.fileName}" }`, null, 2;
                document.getElementById("scanResultsLeft").innerHTML = JSON.stringify(repoStat1, null, 2);
                document.getElementById("scanResultsMiddle").innerHTML = JSON.stringify(repoStat2, null, 2);
                document.getElementById("scanResultsRight").innerHTML = JSON.stringify(repoStat3, null, 2);
            }
        }
    }
})();

/* function fetchDetailedLogs() {
    setTimeout(async () => {
        try {
            await getLogs()
        } catch (error) {
            console.error(error);
        }
        fetchDetailedLogs();
    }, 0)
}
fetchDetailedLogs() */
