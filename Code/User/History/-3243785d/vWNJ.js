const express = require('express');
const bodyParser = require('body-parser');
const { exec, execSync } = require("child_process");
const fs = require("fs");
const dns = require('dns');
const cors = require('cors');
//var serveStatic = require('serve-static')
const mysql = require("mysql");
const { pid } = require('process');

require('dotenv').config({ path: '../.env' })

const apiEndpoint = process.env.APIENDPOINT || 'http://localhost:8000'
const PORT = process.env.APIPORT || 8000;
const baseDir = process.env.baseDir || __dirname + '../';
const logFile = process.env.logFile || `data/logs/webscanner.log`;
const chromePath = process.env.chromePath || `google-chrome`;
const extensionDir = process.env.extensionDir || 'extension'
const extensionDataDir = process.env.extensionDataDir || 'data/extension'
//const verboseLogFile = process.env.logFile || `${baseDir}/data/logs/webscanner-detailed.log`;
const subdomainPrefixes = process.env.subdomainPrefixes.split(',').map(s => s.trim()) || ['www2', 'support', 'blog', 'docs', 'store'];
const maxSubdomains = process.env.maxSubdomains || 5;
const maxScanJobs = process.env.maxScanJobs || 3;
const maxScanJobRuntime = process.env.maxScanJobRuntime || 15
const trackerKeywords = process.env.trackerKeywords.split(',').map(s => s.trim()) || ['ads','track','analytic']
const trackerKeywordsRegex = new RegExp(trackerKeywords.join("|"));

const dbHost = process.env.dbHost || 'localhost'
const dbUser = process.env.dbUser || 'webscanner'
const dbPass = process.env.dbPass || 'webscanner'
const dbName = process.env.dbName || 'webscanner'

const app = express();

app.use((req, res, next) => {
  //clog(`Incoming: ${req.method} - ${req.hostname} ${req.url.substring(1,30)}`)
  next()
})

app.use(cors({ origin: '*' }));
app.options('*', cors());
app.use(express.static("public"))
app.use("/webscanner", express.static("../ui"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const dbConn = mysql.createConnection({
    connectionLimit: 10,
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName
});

// open the MySQL connection
dbConn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});


const clog = (...args) => console.log(new Date().toISOString(), ':' , ...args);
//const flog = (...args) => (new console.Console(fs.createWriteStream(`${baseDir}/${logFile}`, {flags: 'a'}))).log(new Date().toISOString(), ':' , ...args);

const flog = (...args) => {
    args.unshift(new Date().toISOString(), ': ')
    args.push('\n')

    try {
        fs.appendFile(`${baseDir}/${logFile}`, args.join(''), e => { if (e) throw e; })
    } catch (e) {
        console.log(e)
    }
}


dbQuery = (sql, params) =>{
    return new Promise((resolve, reject) => {
        dbConn.query(sql, params, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

/* const getQueryResults = (sql, params) => {
    return (async () => {
        try {
            const sqlResults = await dbQuery(sql, params);
            clog(sqlResults)
            return sqlResults;
        } catch (e) { clog('Sql error:\n', e) }
    })()
} */

const doesJobExist = async link => {
    sql = 'SELECT id FROM domain WHERE name=?';
    params = [link];
    sqlResults = await dbQuery(sql, params);

    if (sqlResults.length)
        return true
    return false
}

async function testFn() {
    clog('teststart')
    {
    /* try {
        dbConn.query('SELECT * FROM domain', (error, results, fields) => {
            if (error) throw error;
            clog({ error: false, data: results, message: 'domain list.', fields: fields[0].name });
        })
    } catch (e) {clog('Sql error:\n', e)} */

/*     pageLinks = [
        'https://jvns.ca/about',
        'https://jvns.ca/talks123',
        'https://jvns.ca/projects/',
        'https://social.jvns.ca/@b0rk',
        'https://jvns.ca/categories/favorite/',
        'https://jvns.ca/atom.xml'
    ] */

/*     pageLinks = pageLinks.filter(async link => {
        sql = 'SELECT id FROM domain WHERE name=?';
        params = [link];
        sqlResults = await dbQuery(sql, params);

        if (sqlResults.length)
            return false
        return true
    }); */

    //const mapResult = await Promise.all(pageLinks.map(doesJobExist));
    //pageLinks = pageLinks.filter((_, idx) => !mapResult[idx]);
    //clog(`PageLinks: `, pageLinks)
let sql, params;
    //let sql = `CALL SelectOrInsertTraffic (?, ?, @id, @requestHeaders, @requestBody, @responseStatus, @redirectUrl, @domainId, @rowStatus); SELECT @id, @requestHeaders, @requestBody, @responseStatus, @redirectUrl, @domainId, @rowStatus ;`,
    //params = [188284470, 811];

    /* sql = 'CALL SelectOrInsertTraffic (?,?);';
    params = [823092422, 5]
    let sqlResults = await dbQuery(sql, params);
    //clog('test sql results: ', sqlResults?.[0][0])

    let {trafficId='', requestId='', requestHeaders='', requestBody='', responseStatus='', redirectUrl='', domainId='', rowStatus=''} = sqlResults?.[0][0];
    clog('test sql results2: ', {trafficId, requestId, requestHeaders, requestBody, responseStatus, redirectUrl, domainId, rowStatus}) */

/*     sql = 'SELECT id, tabId FROM domain WHERE jobStatus !=?'
    params = ['SCAN_TRAFFIC_CAPTURED']
    sqlResults = await dbQuery(sql, params);
    clog(sqlResults) */


    //const execCmd = `${chromePath} --headless=new --no-first-run --user-data-dir=$(mktemp -d ${baseDir}/${extensionDataDir}/temp.XXXXXX) --load-extension='${baseDir}/${extensionDir}'  '${domain}' 2>>${baseDir}/${logFile}`;
}

// timeout 5 /usr/bin/google-chrome --no-first-run --user-data-dir=$(mktemp -d /project/riscosity/webscanner/data/extension/temp.XXXXXX) --load-extension='/project/riscosity/webscanner/extension'  'https://support.google.com/chrome/?hl=en&scanJobId=67&isPageLink=1'

     const execCmd = `/project/riscosity/webscanner/scanner/domainContentScan.sh poornam.com 2>>/project/riscosity/webscanner/data/logs/webscanner.log`

// wget download to tmp folder
// retire.js output of tmp folder to file

    clog(`test() execCmd: ${execCmd}`);

/*     const child = exec(execCmd, (error, stdout, stderr) => {
        if (error)
            clog(`error: ${error.message}`);
        if (stderr)
            clog(`stderr: ${stderr}`);
        clog(`stdout: ${stdout}`);
        return;
    });
    clog(`processed test cmd, childPid=${child.pid}`); */

    try {
        const output = execSync(execCmd);
        console.log(output.toString());
      } catch (error) {
        console.error(error);
      }

    clog('testend')
}
testFn()


app.get("/", (req, res) => { clog('Hellow World!'); res.send("Hello World!\n") });    // Testing API


/*
Find max5 subdomains.
Foreach subdomain open headless chrome with extn loaded
    extn: Post back  traffic info to api
    Find 5 links/pages
        Foreach links click/Open subpages in new tabs
        extn: Post back  traffic info to api
Update job status
*/


/* app.post('/process_post', urlencodedParser, function (req, res) {  
       // Prepare output in JSON format  
       response = {  
           first_name:req.body.first_name,  
           last_name:req.body.last_name  
       };  
       console.log(response);  
       res.end(JSON.stringify(response));  
    }) */


/* app.get('/extnRegistered', async (req, res) => {

    clog("extnRegistered - req headers: ", req.headers)
    clog("extnRegistered - req body: ", req.body)
    clog("extnRegistered - req query: ", req.query)

    let tabId = req.query?.tabId;
    let tabUrl = req.query?.tabUrl;

    if (!tabUrl) {
        res.send({status: 'error', message: `extnRegistered error with tabId: ${tabId}, tabUrl: ${tabUrl}`});
        return;
    }
    // TODO: Trycatch
    try {
        const scanJobId = (new URL(tabUrl)).searchParams.get('scanJobId');
    } catch (e) {
        clog("extnRegistered error: ", e)
        res.send({status: 'error', message: `extnRegistered error with tabId: ${tabId}, scanJobId: ${scanJobId}`})
    }

    let sql = `UPDATE domain SET tabId=? WHERE id = ?`;
    let params = [tabId, scanJobId];

    await dbQuery(sql, params);
    clog(`extnRegistered with tabId: ${tabId}, scanJobId: ${scanJobId}`);

    res.send({status: 'success', message: `extnRegistered with tabId: ${tabId}, scanJobId: ${scanJobId}`})
}); */

app.get('/contentScriptLoading', async (req, res) => {

    res.send({status:"success", message: `Jobid ${req.body?.scanJobId} has been noted.`});
    //res.end(JSON.stringify(req.body));
});

app.post('/scanDomain', async (req, res) => {

    let sql, params, sqlResults;

    clog('/scanDomain POST body is: ', req.body);
    flog('/scanDomain: ' + JSON.stringify(req.body));

    // TODO: Domain/Email validation.

    let fileContents = {
        scanJobId: new Date().valueOf(),
        scanJobRequestTime: new Date().toISOString(),
        primaryDomain: req.body.domain,
        email:req.body.email,
        jobStatus:'PENDING'
    }

    inputFileWriter = fs.createWriteStream(`${baseDir}/data/input/${req.body.domain}`)
    inputFileWriter.write(JSON.stringify(fileContents, null, 2));
    inputFileWriter.end();

    //let sql = `SELECT * FROM domain WHERE id = ?`, params = [1];
    //(name,email,jobPid,jobStatus) values ('test.com','test@test.com',1234,'PENDING')
    sql = `INSERT INTO domain (name,email,jobStatus) VALUES (?,?,?)`;
    params = [req.body.domain, req.body.email, 'PENDING'];
    try {
        sqlResults = await dbQuery(sql, params);  // affectedRows, insertId
    } catch (e) { clog('Sql error:\n', e) }

    res.send({status:"success", message: `Scanning request for domain ${req.body.domain} has been queued.`});
    //res.end(JSON.stringify(req.body));
});

app.get('/getAllTraffic', async (req, res) => {
    let sql, sqlResults, params, scanJobId, domainTree = {}, domainTraffic = {}, hostname = '', rawData = []

    let trafficStats = {
        domainTrackerMap: {},    // {domainName: url},
        trackerDomainMap: {},
        fqdnList: {},   // {name: ip},
        bareIpList: [],  // ips
    }

    scanJobId = req.query?.scanJobId;

    if (!scanJobId || scanJobId == 'null')
        res.send({status:"error", message: `Valid ScanJobId couldn't be found.`});

    clog(`getAllTraffic(): Generating traffic for scanJobId ${scanJobId}`)

    sql = `SELECT DISTINCT t.id trafficId, d2.id domainId, d2.name, d2.email, d2.parentDomainId, d2.isPageLink,requestMethod, responseStatus, SUBSTRING(redirectUrl,1,120) redirectUrl, SUBSTRING(url,1,120) trafficUrl
        FROM domain d1
        LEFT JOIN domain d2 ON d1.id=d2.parentDomainId OR d2.id = d1.id
        LEFT JOIN traffic t ON d2.id=t.domainId OR d2.tabId=t.tabId
        WHERE d1.parentDomainId= ? OR d1.id= ?
        ORDER BY d2.parentDomainId,d2.id,t.id`;
        //ORDER BY d2.id, t.id `;
        //LIMIT 45`;
    params = [scanJobId, scanJobId]

    try {
        sqlResults = await dbQuery(sql, params);
    } catch (e) { clog('Sql error:\n', e) }

    if (!sqlResults.length)
        res.send({status:"error", message: `No traffic found for scanJobId ${scanJobId}.`});

    for (let row of sqlResults) {

        // TODO: Find all FQDN, corresponding IPs & Geolocation.

        let { trafficId='', domainId='', name='', email='', parentDomainId='', isPageLink='', requestMethod='', responseStatus='', redirectUrl='', trafficUrl='' } = row;

        if ((!domainId || domainId == 'null') || (domainId != scanJobId && (!parentDomainId || parentDomainId == 'null'))) {
            clog( `domainId/parentDomainId not set ${domainId} ${parentDomainId}`)
            continue;

        }

        let traffic = {};
        traffic = {     // Create traffic obj
            trafficId: trafficId,
            domainId: domainId,
            requestMethod: requestMethod,
            responseStatus: responseStatus,
            redirectUrl: redirectUrl?.substring(0,30), // TODO: Truncated temporarily
            trafficUrl: trafficUrl?.substring(0,30),
        };

        let newNode = {};  // Create newNode
        newNode.domainId = domainId
        newNode.parentDomainId = parentDomainId
        newNode.name = name.substring(0,20) // TODO: Truncated temporarily

        if (isPageLink)
            newNode.type = 'pageLink'
        else if (domainId == scanJobId && (!parentDomainId || parentDomainId == 'null'))
            newNode.type = 'mainDomain'
        else
            newNode.type = 'subDomain'

        newNode.email = (email && email != 'null') ? email : '';
        newNode.children = {}
        newNode.traffic = []
        newNode.traffic.push(traffic)
        // TODO: Add more raw data to newNode/traffic

        // TODO: Setup trafficStats - have multiple tracker per name
        let nameHostPart = '', trackerHostPart = '';
        if (isValidHttpUrl(name)) {
            try {
                nameHostPart = new URL(name).hostname;
            } catch (e) { clog(`URL lookup error for ${name}: `, e) }
        } else if (isValidDomain(name) || isBareIP(name)) {
            nameHostPart = name;
        }

        let trackerUrl = ''
        if (trackerKeywordsRegex.test(trafficUrl) && nameHostPart) 
            trackerUrl = trafficUrl
        else if (trackerKeywordsRegex.test(redirectUrl) && nameHostPart)
            trackerUrl = redirectUrl

        if (trackerUrl.length) {
            if (!trafficStats.domainTrackerMap?.[nameHostPart])
                trafficStats.domainTrackerMap[nameHostPart] = []
            if (!trafficStats.domainTrackerMap[nameHostPart].includes(trackerUrl))    
                trafficStats.domainTrackerMap[nameHostPart].push(trackerUrl)   // trafficStats.domainTrackerMap.push({[nameHostPart]: trafficUrl})

            try {
                trackerHostPart = new URL(trackerUrl).hostname
            } catch (e) { clog(`URL lookup error for ${trackerUrl}: `, e) }
            
            if (trackerHostPart && !trafficStats.trackerDomainMap?.[trackerHostPart])
                trafficStats.trackerDomainMap[trackerHostPart] = []
            if (trackerHostPart && !trafficStats.trackerDomainMap[trackerHostPart].includes(nameHostPart))    
                trafficStats.trackerDomainMap[trackerHostPart].push(nameHostPart)
        } 

        let geolocationIp = ''

        try {
            hostname = new URL(trafficUrl).hostname
        } catch (e) { clog(`URL lookup error for ${trafficUrl}: `, e) }

        
        let ips = [], ipList = '';

        if (!trafficStats.fqdnList?.[hostname]) {

            if (hostname && isValidDomain(hostname)) {
                try {
                    ips = await dns.promises.resolve(hostname) // resolveDNS(hostname)    // TODO: use promise all for concurrency
                } catch (error) { console.error(`Couldn't resolve ${hostname}: ${error}`) }
                ipList = ips.join(',')
                geolocationIp = ips[0]
            } else if (hostname && isBareIP(hostname) ) {
                ipList = hostname
                geolocationIp = hostname
                trafficStats.bareIpList.push(hostname)
            } 

            trafficStats.fqdnList[hostname] = {
                ipList: ipList,
                count: 0,
                geolocation: {},
                rDns: []
            };

            try {
                const response = await fetch(`http://ip-api.com/json/${geolocationIp}`);
                if (!response.ok)
                    throw new Error('Geolocation lookup: Network response was not ok');
                const data = await response.json();
                trafficStats.fqdnList[hostname].geolocation = {lat: data.lat, lon: data.lon};
            } catch (e) { console.error('Geolocation fetch error:', e) }

            for (const ip of ips) {
                try {
                    const rDns = (await dns.promises.reverse(ip))[0];
                    // TODO: lookup SOA if rDns is empty?
                    const rDnsBase = rDns.match(/[^.]+\.[^.]+$/)[0]; // return last two segments of hostname
                    if (!trafficStats.fqdnList[hostname]?.rDns?.includes(rDnsBase))
                        trafficStats.fqdnList[hostname].rDns.push(rDnsBase);
                } catch (e) { clog(`DNS Reverse lookup error for ${ip} : ${e}`) }
            }
        }

        trafficStats.fqdnList[hostname].count++;

        rawData.push(newNode)

//clog('newNode: ', newNode)
//clog(`trafficId: ${trafficId}, domainId: ${domainId}, parentDomainId: ${parentDomainId}, scanJobId: ${scanJobId}`);
        if (domainId == scanJobId)
        { //clog('if (domainId == scanJobId)')
            if (Object.keys(domainTraffic).length === 0)
            {//clog('if (!domainTraffic?.length)')
                domainTraffic = newNode    // TODO: domainTraffic = newNode ? // {scanJobId: newNode}
            }
            else
            { //clog('else (!domainTraffic?.length)')
                domainTraffic.traffic.push(traffic)
            }
        }
        else if (parentDomainId == scanJobId)   // first level children - subdomains and main pagelinks
        { //clog('else if (parentDomainId == scanJobId)')
            if (domainTraffic?.children?.[`${domainId}`])
            { //clog("if (domainTraffic?.children?.[`${domainId}`])")
                domainTraffic.children[`${domainId}`].traffic.push(traffic)
            }
            else
            { //clog("else (domainTraffic?.children?.[`${domainId}`])")   // <== trafficId: 44769, domainId: 87, parent: 78, scanJobId: 78
                domainTraffic.children[`${domainId}`] = newNode
            }
        }
        else
        { //clog('top else')
            if (domainTraffic?.children?.[`${parentDomainId}`]?.children?.[`${domainId}`])
            { //clog("if (domainTraffic?.children?.[`${parentDomainId}`]?.children?.[`${domainId}`])")
                domainTraffic.children[`${parentDomainId}`].children[`${domainId}`].traffic.push(traffic)
            }
            else if (domainTraffic?.children?.[`${parentDomainId}`]) // trafficId: 45045, domainId: 90, parentDomainId: 87, scanJobId: 78
            { //clog("else if (domainTraffic?.children?.[`${parentDomainId}`])")
                domainTraffic.children[`${parentDomainId}`].children[`${domainId}`] = newNode
            }
            else {
            //clog('else - else')
                let parentNode = {}
                parentNode.domainId = parentDomainId
                parentNode.parentDomainId = scanJobId
                parentNode.name = ''    // TODO: Find parent node domain name
                parentNode.type = 'subDomain'
                parentNode.email = '';
                parentNode.children[`${domainId}`] = newNode
                domainTraffic.children[`${parentDomainId}`] = parentNode
            }
        }
//clog(`domainTraffic: `, domainTraffic)
    }

    res.send({
        status:"success", 
        message: `Jobid ${scanJobId} results generated.`, 
        data: domainTraffic, 
        stats: trafficStats, 
        rawData: rawData,
    });
    //res.send({status:"success", message: `Jobid ${scanJobId} results generated.`, data: domainTraffic, stats: trafficStats.domainTrackerMap, rawData: rawData});

/*         if (currentNode?.id && (domainId == currentNode?.id)) { // current node exists - only have to log traffic
            currentNode.traffic.push(traffic)
            continue;
        }

        if (currentNode?.id && (parentDomainId == currentNode.id)) {
            if (currentNode.children?.['`${parentDomainId}`'])
                currentNode.children['`${parentDomainId}`'].traffic.push(traffic)
            else
                currentNode.children['`${parentDomainId}`'] = newNode
        } */
/*         if (!domainTraffic.length && (domainId == scanJobId))
            parentNode.push(newNode)  // OR parentNode = newNode
        else if (newNode.parentDomainId == currentNode.id) {
            currentNode.children.push(newNode)
        } else
            parentNode = findParentNode()
            parentNode.children.push(newNode)
        } */
        //oldNode = JSON.parse(JSON.stringify(newNode)); // TODO: copy reference instead?
        //domainTraffic.push(newNode);

        //clog('result row: ', row)
        // rowStatus='',
});


const generateDomainTraffic = async (domain, scanJobId) => {

    //const jobIdFileContents = `module.exports = {extnScanJobId: ${scanJobId}}`
    const jobIdFileContents = `const extnScanJobId = ${scanJobId}`

    inputFileWriter = fs.createWriteStream(`${baseDir}/${extensionDir}/scanJobId.js`)
    inputFileWriter.write(jobIdFileContents);
    inputFileWriter.end();

    // create shell script for invoking job with copy of extn folder
    const execCmd = `timeout ${maxScanJobRuntime} ${chromePath} --headless=new --no-first-run --user-data-dir=$(mktemp -d ${baseDir}/${extensionDataDir}/temp.XXXXXX) --load-extension='${baseDir}/${extensionDir}'  '${domain}' 2>>${baseDir}/${logFile}`;

    clog(`generateDomainTraffic() execCmd: ${execCmd}`);
    const child = exec(execCmd, (error, stdout, stderr) => {
        if (error)
            clog(`error: ${error.message}`);
        if (stderr)
            clog(`stderr: ${stderr}`);
        //clog(`stdout: ${stdout}`);
        return;
    });
    clog(`processed ${domain}. scanJobId=${scanJobId}, childPid=${child.pid}`);

    try {
        sql = `UPDATE domain SET jobStatus='SCAN_INPROGRESS', jobPid=? WHERE id=?`
        params = [child.pid, scanJobId]
        sqlResults = await dbQuery(sql, params);
    } catch (e) { clog('Sql error:\n', e) }

    setTimeout(async () => {
        let childPid = child.pid, jobId = scanJobId;
        clog(`generateDomainTraffic(): Stopping browser with id ${childPid}`)
        try {
            sql = `UPDATE domain SET jobStatus='SCAN_TRAFFIC_CAPTURED' WHERE id=?`
            params = [jobId]
            sqlResults = await dbQuery(sql, params);
        } catch (e) { clog('Sql error:\n', e) }

        try {
            process.kill(childPid, 'SIGTERM');
            // initiate `http://localhost:8000/pageLoaded?scanJobId=${scanJobId}&timeout=1` ?
        } catch (e) {
            clog(`generateDomainTraffic(): Exception killing Chrome with id ${childPid}. Error: ${e.toString()}`)
        }
    }, maxScanJobRuntime * 2 * 1000);

    return child.pid
}

const startScanJob = (domain, scanJobId, isPageLink) => {
    clog(`startScanJob: `, domain);
//    const allDomains = [domain]
//    for (let str of allDomains) {
    clog(`startScanJob processing ${domain}`)

    let url
    if (isValidHttpUrl(domain))
        url = domain;
    else if (isValidDomain(domain))
        url = `https://${domain}/`;
    else
        return

    let urlObj;
    try {
        urlObj = new URL(url);
        urlObj.searchParams.set('scanJobId', scanJobId);
        urlObj.searchParams.set('isPageLink', isPageLink);
        clog(`starting job for url ${urlObj.toString()}`)
    } catch (e) {
        clog(`Error setting scanJobId ${scanJobId} as query param to ${domain}`)
    }

    generateDomainTraffic(urlObj.toString(), scanJobId).then (childPid => {
        clog(`Gentraffic PID for ${domain} with jobId ${scanJobId} is ${childPid}`)
    })
}

/* app.post('/startScanJob', (req, res) => {
    let domain = req.body?.domain;
    startScanJob(domain); // TODO: add jobid, isPageLink
    res.send({status:"success", message: `Initiated capturing traffic for scanJobId ...`})
}); */



const checkWebConnectivity = async domain => {
    try {
        let url;
        if (isValidHttpUrl(domain))
            url = domain;
        else if (isValidDomain(domain))
            url = `https://${domain}/`;

        const res = await fetch(url);
        return res.status >= 200 && res.status < 400; // either true or false - success or redirect statuses
    } catch (err) {
      return false; // unable to connect
    }
};

const findSubdomains = async domain => {
    let subdomains = [], subdomain, status;
    for (let prefix of subdomainPrefixes) {
        subdomain = `${prefix}.${domain}`
        status = await checkWebConnectivity(subdomain)
        if (status)
            subdomains.push(subdomain)
        if (subdomains.length >= maxSubdomains)
            break
    }
    return subdomains;
}

// Generate/Find subdomains for PENDING Jobs added via /scanDomain
setInterval(async () => {
    let sql, sqlResults, params;
    try {
        sql = 'SELECT id, name, parentDomainId FROM domain WHERE jobStatus=? ORDER BY id';
        params = ['PENDING'];
        sqlResults = await dbQuery(sql, params);

        if (sqlResults.length)
            clog(`PENDING jobs: `, sqlResults)


        // Update job status to READY
        for (let row of sqlResults) {
            sql = `UPDATE domain SET jobStatus='READY' WHERE id=?`
            params = [row.id]
            sqlResults = await dbQuery(sql, params);

            let subdomains = [];
            // Generate subdomains only for tlds
            if (!row.parentDomainId) {
                subdomains = await findSubdomains(row.name)
                // Check for duplication
                //clog(`Unfiltered subdomain list: `, subdomains)
                let filteredSubdomains = []
                for (const element of subdomains) {
                    sql = 'SELECT id FROM domain WHERE name=? AND (id=? OR parentDomainId=?)';
                    params = [element, row.id, row.id];
                    sqlResults = await dbQuery(sql, params);

                    if (sqlResults.length == 0)
                        filteredSubdomains.push(element);
                }
                subdomains = filteredSubdomains
                //const mapResult = await Promise.all(subdomains.map(doesJobExist));
                //subdomains = subdomains.filter((_, idx) => !mapResult[idx]);

                clog(`Filtered subdomain list: `, subdomains)

                let insertValueList = []
                subdomains.forEach( domain => insertValueList.push( `("${domain}", ${row.id}, "PENDING")` ));
                insertValueList = insertValueList.join(',')
                if (insertValueList.length) {
                    //clog(`subdomains sqlParamValues: ${insertValueList}`)
                    sql = `INSERT INTO domain (name, parentDomainId, jobStatus) VALUES ${insertValueList}`
                    params = [] //[insertValueList] // passing as param causing sql error?
                    sqlResults = await dbQuery(sql, params);
                    //clog(`subdomain insert results: `, sqlResults)
                }
            }


        }
    } catch (e) { clog('Sql error:\n', e) }
}, 2000);



// Start READY jobs
setInterval(async () => {
    // Fetch PENDING Jobs
    // Append scanJobId to domain
    // invoke startScanJob(url)
    let sql, params, sqlResults;
    try {

        sql = 'SELECT COUNT(id) count FROM domain WHERE jobStatus=?'
        params = ['SCAN_INPROGRESS']
        sqlResults = await dbQuery(sql, params);

        // TODO: Wait for no of INPROGRESS to go below MAX_SCAN_JOBS before starting new job
        if (sqlResults.length && sqlResults[0]?.count >= maxScanJobs ) {
            clog(`Current jobs in progress: ${sqlResults[0].count}. Waiting for running jobs to go below ${maxScanJobs}`)
            return
        }

        sql = 'SELECT id, name, isPageLink FROM domain WHERE jobStatus=? ORDER BY id LIMIT 1'
        params = ['READY']
        sqlResults = await dbQuery(sql, params);

        if (sqlResults.length)
            clog(`READY jobs: `, sqlResults)

        for (let row of sqlResults) {
            clog(`setInterval launching job `, row)

            sql = `UPDATE domain SET jobStatus='QUEUED' WHERE id=?`
            params = [row.id]
            sqlResults = await dbQuery(sql, params);

            startScanJob(row.name, row.id, row.isPageLink)
        }
    } catch (e) { clog('Sql error:\n', e) }
}, 2000);

// Kill runaway scanjob chrome processes
setInterval(async () => {
    let sql, params, sqlResults;
    try {
        sql = 'SELECT id, jobPid FROM domain WHERE TIMESTAMPDIFF(SECOND, jobRequestTime, NOW()) > ? AND jobStatus=?'
        params = [maxScanJobRuntime, 'SCAN_INPROGRESS']
        sqlResults = await dbQuery(sql, params);
    } catch (e) { clog('Sql error:\n', e) }

    if (!sqlResults?.length)
        return

    clog(`Lazy/delayed jobs: `, sqlResults)

    for (let row of sqlResults) {
        clog(`Updating status and stopping Lazy/delayed job `, row)
        try {
            sql = `UPDATE domain SET jobStatus='SCAN_TRAFFIC_CAPTURED' WHERE id=?`
            params = [row.id]
            sqlResults = await dbQuery(sql, params);

            // TODO: Update traffic/domain tabIds?

        } catch (e) { clog('Sql error:\n', e) }

        try {
            process.kill(row.jobPid, 'SIGTERM');
        } catch (e) {
            clog(`Lazy jobs: Exception killing Chrome with id ${row.jobPid}. Error: ${e.toString()}`)
        }
    }
}, 2000);


// Update domainId of domain/traffic tables;
setInterval(async () => {
    let sql, params = [], sqlResults, sqlResults2, sqlResults3, sqlResults4;
    try {
        sql = 'SELECT id, tabId FROM domain WHERE jobStatus=?'
        params = ['SCAN_TRAFFIC_CAPTURED']
        sqlResults = await dbQuery(sql, params);
    } catch (e) { clog('Sql error:\n', e) }

        // ` SELECT d.id dId, d.tabId dTabId, MAX(t.domainId) tDomainId FROM domain d LEFT JOIN traffic t ON d.id=t.domainId WHERE jobStatus= 'SCAN_TRAFFIC_CAPTURED'`
        // IMESTAMPDIFF(SECOND, jobRequestTime, NOW()) < maxScanJobRuntime * 4

    if (!sqlResults?.length)
        return

    for (let row of sqlResults) {
        //clog(`Updating domainId for completed Jobs`)
        try {
            params = []
            sql = `SELECT MAX(domainId) domainId, tabId FROM traffic WHERE domainId=?`
            params.push(row.id)

            if (row.tabId && row.tabId != 'null') {
                sql += ` OR tabId=?`
                params.push(row.tabId)
            }
            sql += ' GROUP BY tabId';
            sqlResults2 = await dbQuery(sql, params);

            if (!sqlResults2?.length || !sqlResults2?.[0].domainId)
                continue;

            sql = `UPDATE traffic SET domainId=? WHERE domainId = 0 AND tabId=?`
            params = [sqlResults2?.[0].domainId, sqlResults2?.[0].tabId]
            sqlResults3 = await dbQuery(sql, params);

            if (!row.tabId || row.tabId == 'null') {
                sql = `UPDATE domain SET tabId=? WHERE id=?`
                params = [sqlResults2?.[0].tabId, row.id]
                sqlResults4 = await dbQuery(sql, params);
            }
        } catch (e) { clog('Sql error:\n', e) }
    }
}, 5000);






app.post('/logTraffic', async (req, res) => {
    //clog("logTraffic req body method: ", req.body?.details?.method)
    clog("/logTraffic: ", req.query?.listener, req.body.extnScanJobId, req.body.tabId, req.body.requestId, req.body.responseStatus, req.query.redirectUrl, req.body.url.substring(0, 80))

    if (req.body.tabId < 1) {
        res.send({status:"rejected", message: `logTraffic processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`})
        return;
    }

    let sql = '', params = [], sqlResults = {}, scanJobId = 0;
    let reqMethod = req.body?.requestMethod || 'GET'

    req.body.requestId = parseInt(req.body.requestId);
    if (isNaN(req.body.requestId))
        req.body.requestId = 0


    if (req.body.url.includes(`${apiEndpoint}/contentScriptLoading?scanJobId=`)) {
        try {
            scanJobId = (new URL(req.body.url)).searchParams.get('scanJobId');
        } catch (e) {
            clog("logTraffic - pageLoaded error: ", e)
            res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
            return
        }

        if ((!scanJobId || scanJobId == 'null') && req.body?.extnScanJobId)
            scanJobId = req.body?.extnScanJobId

        if (scanJobId && scanJobId != 'null') {
            try {
                sql = `UPDATE domain SET tabId=? WHERE id=?`
                params = [req.body.tabId, scanJobId]
                sqlResults = await dbQuery(sql, params);

                sql = `UPDATE traffic SET domainId=? WHERE tabId=?`
                params = [scanJobId, req.body.tabId]
                sqlResults = await dbQuery(sql, params);

                clog(`logTraffic contentScriptLoading request processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`)
                res.send({status:"success", message: `logTraffic contentScriptLoading request processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`})
                return;
            } catch (e) {
                clog("logTraffic - contentScriptLoading domain/traffic job status update error: ", e)
                res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
                return;
            }
        } else {
            clog("logTraffic - contentScriptLoading error scanJobId not found: ")
            res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
            return;
        }
    }

    if (req.body.url.includes(`${apiEndpoint}/pageLoaded?scanJobId=`)) {

        try {
            scanJobId = (new URL(req.body.url)).searchParams.get('scanJobId');
        } catch (e) {
            clog("logTraffic - pageLoaded error: ", e)
            res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
            return
        }

        if ((!scanJobId || scanJobId == 'null') && req.body?.extnScanJobId)
            scanJobId = req.body?.extnScanJobId

        if (scanJobId && scanJobId != 'null') {
            try {
                sql = `UPDATE domain SET tabId=?, jobStatus=? WHERE id=?`
                params = [req.body.tabId, 'SCAN_TRAFFIC_CAPTURED', scanJobId]
                sqlResults = await dbQuery(sql, params);
                // TODO: Kill chrome pid?

                sql = `UPDATE traffic SET domainId=? WHERE tabId=?`
                params = [scanJobId, req.body.tabId]
                sqlResults = await dbQuery(sql, params);

                try {
                    sql = 'SELECT jobPid FROM domain WHERE jobPid IS NOT NULL AND id=?'
                    params = [scanJobId]
                    sqlResults = await dbQuery(sql, params);
                } catch (e) { clog('Sql error:\n', e) }

                if (sqlResults?.length) {
                    try {
                        process.kill(sqlResults[0]?.jobPid, 'SIGTERM');
                    } catch (e) {
                        clog(`logTraffic: pageLoaded - Exception killing Chrome with id ${sqlResults[0]?.jobPid}. Error: ${e.toString()}`)
                    }
                }

                //clog(`logTraffic pageLoaded request processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`)
                res.send({status:"success", message: `logTraffic pageLoaded request processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`})
                return;
            } catch (e) {
                clog("logTraffic - pageLoaded domain/traffic job status update error: ", e)
                res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
                return;
            }
        } else {
            clog("logTraffic - pageLoaded error scanJobId not found: ")
            res.send({status: 'error', message: `error with tabId: ${req.body.tabId}, scanJobId: ${scanJobId}`})
            return;
        }
    }


    //    sql = `SELECT d.id jobId, requestId, t.domainId, t.requestHeaders, t.requestBody FROM domain d RIGHT JOIN traffic t ON d.tabId=t.tabId WHERE (d.tabId=? AND t.requestId=?) OR t.tabId=?`
    //sql = `SELECT requestId, requestHeaders, requestBody, responseStatus, redirectUrl, domainId FROM traffic WHERE tabId=? AND requestId=?`
    sql = 'CALL SelectOrInsertTraffic (?,?);';
    params = [req.body.tabId, req.body.requestId];

    //clog("logTraffic query1: ", sql, params)
    sqlResults = await dbQuery(sql, params);
//clog(`SelectOrInsertTraffic sqlResults - ${req.query?.listener}: `, sqlResults?.[0][0])

    if (!sqlResults?.[0][0])
        sqlResults = {}
    else
        sqlResults = sqlResults?.[0][0]

    //let {requestId='', requestHeaders='', requestBody='', responseStatus='', redirectUrl='', domainId=''} = sqlResults;

    let {trafficId='', requestId='', url='', requestMethod='', requestHeaders='', requestBody='', responseStatus='', redirectUrl='', domainId='', rowStatus=''} = sqlResults;

//clog(`current db traffic data - ${req.query?.listener}: `, requestMethod, responseStatus, req.body.tabId, req.body.requestId, domainId, rowStatus, url.substring(0, 80));

    let querySlice = [];

    // If traffic is already logged, attempt to update the missing fields
    if (trafficId) {

        if (!requestHeaders && req.body?.requestHeaders)
            querySlice.push(`requestHeaders='${JSON.stringify(req.body?.requestHeaders)}'`)

        if (!requestBody && req.body?.requestBody)
            querySlice.push(`requestBody='${JSON.stringify(req.body?.requestBody)}'`)


        if (!url && req.body?.url)
            querySlice.push(`url='${req.body?.url}'`)

        if (!requestMethod && req.body?.requestMethod)
            querySlice.push(`requestMethod='${req.body?.requestMethod}'`)


        let tmpUrl = ''
        if ((!domainId || domainId == 'null')) {

            try {
                if (req.body?.url && req.body?.url.includes('scanJobId')) {
                    tmpUrl = decodeURIComponent(req.body.url)
                    scanJobId = (new URL(tmpUrl)).searchParams.get('scanJobId');
                }

                if ((!scanJobId || scanJobId == 'null')
                  && req.body?.winLocation
                  && req.body?.winLocation.includes('scanJobId')) {
                    tmpUrl = JSON.parse(decodeURIComponent(req.body.winLocation))
                    if (tmpUrl)
                        scanJobId = (new URL(tmpUrl)).searchParams.get('scanJobId');
                }
            } catch (e) { clog(e)}

            if ((!scanJobId || scanJobId == 'null') && req.body?.extnScanJobId)
                scanJobId = req.body?.extnScanJobId

            if (scanJobId && scanJobId != 'null')
                querySlice.push(`domainId=${scanJobId}`)
        }

        if (!responseStatus && req.body.responseStatus)
            querySlice.push(`responseStatus=${req.body.responseStatus}`)

        if (!redirectUrl && req.body.responseStatus > 299 && req.body.responseStatus < 400 && req.body.redirectUrl) {
            tmpUrl = JSON.parse(decodeURIComponent(req.body.redirectUrl))
            querySlice.push(`redirectUrl='${tmpUrl}'`)
        }

        if (querySlice.length) {
            sql = `UPDATE traffic SET ${querySlice.join(',')} WHERe tabId=${req.body.tabId} AND requestId=${req.body.requestId}`
            params = [req.body.tabId, req.body.requestId]
        }
        //clog('query with params', req.body.tabId, req.body.requestId, sql)
 /*        if (!sqlResults?.[0].domainId) {
            sql = `INSERT INTO traffic (url, requestHeaders, requestBody, tabId, requestId, domainId) VALUES (?,?,?,?,?,?)`;
            params = [req.body.url, req.body.requestHeaders, req.body.requestBody, req.body.tabId, req.body.requestId, sqlResults?.[0].id];
            clog(await dbQuery(sql, params));
        } */

    } else {    // Insert new traffic row, if requestId doesn't exist
        try {
            let winUrl = JSON.parse(decodeURIComponent(req.body.winLocation))
            if (winUrl)
                scanJobId = (new URL(winUrl)).searchParams.get('scanJobId');
        } catch (e) { clog(e)}

        if ((!scanJobId || scanJobId == 'null') && req.body?.extnScanJobId)
            scanJobId = req.body?.extnScanJobId

        if (!scanJobId || scanJobId == 'null')
            scanJobId = 0

        sql = `INSERT INTO traffic (url, requestMethod, requestHeaders, requestBody, responseStatus, redirectUrl, tabId, requestId, domainId) VALUES (?,?,?,?,?,?,?,?,?)`;
        params = [req.body.url, reqMethod, JSON.stringify(req.body?.requestHeaders), JSON.stringify(req.body.requestBody), req.body.responseStatus, req.body.redirectUrl, req.body.tabId, req.body.requestId, scanJobId];
        /* } else {
            sql = `INSERT INTO traffic (url, requestMethod, requestHeaders, requestBody, tabId, requestId) VALUES (?,?,?,?,?,?)`;
            params = [req.body.url, requestMethod, JSON.stringify(req.body.requestHeaders), JSON.stringify(req.body.requestBody), req.body.tabId, req.body.requestId];
        } */
    }
    //clog('body: ', requestMethod, req.body.responseStatus, `"${req.body.redirectUrl}"`, req.body.tabId, req.body.requestId, scanJobId)
    try {
//clog(`Final sql - ${req.query?.listener}: `, sql)
        //clog('sqlparams: ', params)
        sqlResults = await dbQuery(sql, params);
        //clog(`Logging Url: tabId - ${req.body.tabId}, requestId: ${req.body.requestId}`)
        res.send({status:"success", message: `logTraffic processed: tabId - ${req.body.tabId}, requestId - ${req.body.requestId}`})
    } catch (e) {
        clog("logTraffic insert/update error: ", e)
        res.send({status: 'error', message: `logTraffic insert/update error with tabId: ${req.body.tabId}, requestId - ${req.body.requestId}`})
    }
});


const pageLoaded = async (req, res) => {
    //    clog(`pageLoaded body -`, JSON.stringify(req.headers))
    //clog(`pageLoaded body -`, req.body)
      clog(`pageLoaded url - ${req.url}`)

    let scanJobId = req.query?.scanJobId;
    let pageLinks, sql, sqlResults, params;

    if ((!scanJobId || scanJobId == 'null') && req.body?.extnScanJobId)
        scanJobId = req.body?.extnScanJobId;

    clog(`pageLoaded(): scanJobId val "${scanJobId}" found.`)

    if (!scanJobId || scanJobId == 'null') {
        res.send({status:"error", message: `Couldn't find scanJobId for the pageload event.`});
        return
    }

/*     sql = `UPDATE domain SET jobStatus='SCAN_TRAFFIC_CAPTURED' WHERE id=?`
    params = [scanJobId]
    sqlResults = await dbQuery(sql, params); */

    if (!req.query?.pageLinks || !Object.keys(req.query?.pageLinks).length) {
        res.send({status:"success", message: `Received pageload event for scanJobId ${scanJobId}. Exiting no pageLinks to process`});
        return;
    }

    //clog(`Encoded pageLInks: `, req.query.pageLinks);
    try {
        //clog(`Decoded PageLinks: `, decodeURIComponent(req.query.pageLinks))
        pageLinks = JSON.parse(decodeURIComponent(req.query.pageLinks));
        //clog(`PageLinks: `, pageLinks)

        //const mapResult = await Promise.all(pageLinks.map(doesJobExist));
        //pageLinks = pageLinks.filter((_, idx) => !mapResult[idx]);

        let filteredPageLinks = []
        for (const link of pageLinks) {
            sql = 'SELECT id FROM domain WHERE name=? AND (id=? OR parentDomainId=?)';
            params = [link, scanJobId, scanJobId];
            sqlResults = await dbQuery(sql, params);

            if (!sqlResults.length)
                filteredPageLinks.push(link);
        }
        pageLinks = filteredPageLinks

        clog(`filtered pageLinks :`, pageLinks)

        // Exclude already existing/duplicate subdomain/pageLink via UNIQUE key
        for (const link of pageLinks) {
            sql = `INSERT INTO domain (name, parentDomainId, isPageLink, jobStatus) VALUES (?, ?, 1, "PENDING")`;
            params = [link, scanJobId]
            try {
                sqlResults = await dbQuery(sql, params);
            } catch (e) { clog('Sql error:\n', e) }
        }

/*
        let insertValueList = []
        pageLinks.forEach( link => insertValueList.push( `("${link}", ${scanJobId}, 1, "PENDING")` ) );
        insertValueList = insertValueList.join(',')

        if (insertValueList.length) {
            clog(`pageLinks sqlParamValues: ${insertValueList}`)
            sql = `INSERT INTO domain (name, parentDomainId, isPageLink, jobStatus) VALUES ${insertValueList}`
            params = [] //[insertValueList]
            try {
                sqlResults = await dbQuery(sql, params);
            } catch (e) { clog('Sql error:\n', e) }

            //clog(`pageLinks insert results: `, sqlResults)
        } */
        res.send({status:"success", message: `Received pageload event for scanJobId ${scanJobId}`});
        return;
    } catch (err) {
        clog(`Exception parsing and inserting pageLinks from query param: ${req.query.pageLinks} ` + err.toString())
        res.send({status:"error", message: `On Pageload: couldn't insert data - scanJobId ${scanJobId}, pageLinks: ${pageLinks}`});
        return;
    }
};
app.get('/pageLoaded', pageLoaded);



function resolveDNS(hostname) {
    return new Promise((resolve, reject) => {
        dns.resolve(hostname, (error, addresses) => {
            if (error)
                reject(error);
            else
                resolve(addresses);
        });
    });
}

function isValidDomain(str) {
    let regex = new RegExp(/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/);

    if (str == null)
        return "false";
    if (regex.test(str) == true)
        return "true"
    else
        return "false"
}

function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function isBareIP(fqdn) {
    const ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    return ipPattern.test(fqdn);
}

///////////
const server = app.listen(PORT, () => {
   const host = server.address().address
   const port = server.address().port
   flog("Starting Web Scanner api. Listening at http://%s:%s", host, port)
})

clog("Webscanner API started.")