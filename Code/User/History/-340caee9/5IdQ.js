
const winLocation = window.location;
const currentWinObj = new URL(window.location.href);

maxScanPageLinks = 5;
var tabUrl;

console.log(`Written from content.js - ` + (new Date));
try{
  document.body.style.backgroundColor = "red";
  console.log('Setting bg as red');
} catch (error) {
  console.log("content.js-bgcolor-ErRRor: " + error);
}

/* chrome.runtime.sendMessage({ command: "selected-tab" }, tab => {
    //tabUrl = tab.url;
    console.log(`page url is: ${tabUrl}`, tab)
}); */


// Send event to api when document is ready / page is loaded
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let scanJobId, isPageLink;
    try {
        if (scanJobId = (new URLSearchParams(winLocation.search)).get('scanJobId')) {
            console.log(`scanJobId val "${scanJobId}" found in query string`)
        } else if (scanJobId = navigator.userAgent.split("scanJobId:")[1].split(" ")[0]) {
            console.log(`scanJobId val "${scanJobId}" found in userAgent`)
        }
        isPageLink = (new URLSearchParams(winLocation.search)).get('isPageLink')
        console.log(`isPageLink val "${isPageLink}" found in query string`)
    } catch (err) {
        console.log(`Exception looking up scanJobId from query string/userAgent. ` + err.toString())
    }

    let targetUrl, pageLinks = [];

    if (isPageLink == 0) {

        // TODO: Find all subdomains embedded

        const anchorTags = document.querySelectorAll('a');
        // loop through each anchor tag and get the href attribute
        for (let i = 0; i < anchorTags.length && pageLinks.length <= maxScanPageLinks ; i++) {
            const href = anchorTags[i].getAttribute('href');

            targetUrl = new URL(href, currentWinObj.origin);

            if (window.location.href.split('?')[0] == targetUrl.href.split('?')[0])
                continue

            if (targetUrl.href.includes( currentWinObj.hostname.split('.').slice(-2).join('.') ))
                pageLinks.push(targetUrl.href);
        }

        pageLinks = encodeURIComponent(JSON.stringify(pageLinks))
        console.log(`pageLinks stringified`, pageLinks);
    } else {
        pageLinks = ''
    }
    console.log(`pageLinks before settimeout: `, pageLinks);

    // allow time for prev requests to process before sending pageLinks
    setTimeout( () => {
        let apiEndpoint = `http://localhost:8000/pageLoaded?scanJobId=${scanJobId}&pageLinks=${pageLinks}`
        console.log(`apiEndpoint : `, apiEndpoint);
        sendRequest(apiEndpoint)
        //window.close()    // TODO: Enabling win close prevents traffic logging?
    }, 5000);
  }
};



//document.getElementById("date").textContent = new Date();
/*
async function fetchData() {
  console.log(`content.js-fetchData start.`)
  const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
  const record = await res.json();
  console.log(`content.js-fetchData: ${record}`)
  //document.getElementById("testDate").innerHTML=record.data[0].date;
}
await fetchData();
*/
/*
const logURL2 = async (requestDetails) => {

  const fetchResults = await fetchData(`http://localhost:9000`, "${requestDetails}")
  console.log(`fetchResults: ${fetchResults}`);
}

async function fetchData2(url, msgBody) {
  try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: msgBody})
      });
      const responseData = await response.text();
      return responseData;
  } catch (error) {
      console.log("conentjsErRor: " + error)
      return "";
  }
}
*/
//logURL2({"url":"testdomain.com"})


function sendRequest (url) {
  console.log(`sendRequest start..`);
  try {
    fetch(url, {cache: "no-store"})                              // "https://jsonplaceholder.typicode.com/users"
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        response.text()
      })
      .then((text) => console.log(text));
  } catch (error) {
    console.log("content.js-testnf-ErRRor: " + error)
    return "";
  }
  console.log(`sendRequest end..`);
}

