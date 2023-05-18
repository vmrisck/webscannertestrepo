// Track all outgoing requests from the active tab

const apiEndpoint = 'http://localhost:8000'


function getTabById(tabId) {
    return new Promise((resolve, reject) => {
      chrome.tabs.get(tabId, (tab) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError.message);
        } else {
          resolve(tab);
        }
      });
    });
}

chrome.webRequest.onBeforeRequest.addListener(async details => {
    //console.log(details);
    let reqUrl = details?.url
    let reqMethod = details?.method;
    let reqBody = (reqMethod == "POST") ? JSON.stringify(details?.requestBody, null, 2) : "";
    let tabId = details?.tabId;
    let requestId = details?.requestId
    let winLocation = ''
    console.log('onBeforeRequest-requestId: ', details?.requestId);
    console.log(`onBeforeRequest-requestDetails: ${reqUrl}`);
    
    // TODO: Save to storage queue and process async instead of direct fetch-POST

    if (tabId < 0 || reqUrl.includes(`${apiEndpoint}/logTraffic`))
    return {cancel: false};

    if (tabId >= 0) {
        let tab = await getTabById(tabId);
        if (tab?.url)
            winLocation = encodeURIComponent(JSON.stringify(tab.url))
    }

     (async () => {
      // Ignore our own requests
      if (reqUrl.includes(`${apiEndpoint}/logTraffic`))
          return

      try {
        let fetchBody = {
            winLocation: winLocation,
            url: reqUrl,
            requestMethod: reqMethod,
            //details: details,
            responseStatus: 0,
            redirectUrl: '',
            tabId: tabId,
            requestId: requestId,
            requestHeaders: '',
            requestBody: reqBody
        }

        const response = await fetch(`${apiEndpoint}/logTraffic?listener=onBeforeRequest`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fetchBody)
        });
        const responseData = await response.text();
        console.log(`logTraffic ${responseData}`);
      } catch (error) {
          console.log("bg.js-onBeforeRequest-ERRor: " + error)
      }
    })();
      return {cancel: false};
  },
  //{urls: ["<all_urls>"], types: ["main_frame","csp_report","font","image","media","object","ping","script","stylesheet","sub_frame","websocket","xmlhttprequest","other"]},
  {urls: ["<all_urls>"]},
  ["requestBody"]
);


chrome.webRequest.onBeforeSendHeaders.addListener( async details => {
        //console.log('onBeforeSendHeaders', details);
        let reqUrl = details.url
        //let myRequestHeaders = JSON.stringify(details.requestHeaders);

        let myRequestHeaders = JSON.stringify(JSON.parse(details.requestHeaders), (key, value) => {
            if (typeof value === 'string')
                return value.trim();
            return value;
        });
        let tabId = details?.tabId;
        let requestId = details?.requestId
        let winLocation = ''
        console.log(`onBeforeSendHeaders-requestDetails: ${reqUrl}`);
        console.log('onBeforeSendHeaders-requestId: ', details?.requestId);
        //console.log(`requestHeaders: ${myRequestHeaders}`);

        if (tabId < 0 || reqUrl.includes(`${apiEndpoint}/logTraffic`))
            return {cancel: false};

        if (tabId >= 0) {
            let tab = await getTabById(tabId);
            if (tab?.url)
                winLocation = encodeURIComponent(JSON.stringify(tab.url))
        }

        (async () => {
            if (reqUrl.includes(`${apiEndpoint}/logTraffic`))
                return

            try {
                let fetchBody = {
                    winLocation: winLocation,
                    url: reqUrl,
                    requestMethod: details.method,
                    responseStatus: 0,
                    redirectUrl: '',
                    tabId: tabId,
                    requestId: requestId,
                    requestHeaders: myRequestHeaders,
                    requestBody: ''
                }

                //console.log('fetchBody is : ', fetchBody);
                const response = await fetch(`${apiEndpoint}/logTraffic?listener=onBeforeSendHeaders`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(fetchBody)
                });
                const responseData = await response.text();
                //console.log(`logTraffic ${responseData}`);
            } catch (error) {
                console.log("bg.js-onBeforeSendHeaders-ERRor: " + error)
            }
        })();
        return {cancel: false};
    },
    {urls: ["<all_urls>"]},
    ["requestHeaders", "extraHeaders"]
);


chrome.webRequest.onHeadersReceived.addListener( async details => {
        console.log('onHeadersReceived: ', details);
        let reqUrl = details.url
        let tabId = details?.tabId;
        let requestId = details?.requestId
        let winLocation = ''
        let redirectUrl = ''
        console.log(`requestDetails: ${reqUrl}`);
        //console.log(`requestHeaders: ${myRequestHeaders}`);

        if (tabId < 0 || reqUrl.includes(`${apiEndpoint}/logTraffic`))
            return {cancel: false};

        if (tabId >= 0) {
            let tab = await getTabById(tabId);
            if (tab?.url)
                winLocation = encodeURIComponent(JSON.stringify(tab.url))
        }

        if (details.statusCode > 299 && details.statusCode < 400) {
            details.responseHeaders.some((element, index) => {
                if (element.name == 'location') {
                    redirectUrl = encodeURIComponent(JSON.stringify(element.value));
                    return true
                }
                return false
            });
        }

        (async () => {
            if (reqUrl.includes(`${apiEndpoint}/logTraffic`))
                return

            try {
                let fetchBody = {
                    winLocation: winLocation,
                    url: reqUrl,
                    requestMethod: details.method,
                    responseStatus: details.statusCode,
                    redirectUrl: redirectUrl,
                    tabId: tabId,
                    requestId: requestId,
                    requestHeaders: '',
                    requestBody: ''
                }
                //console.log('fetchBody is : ', fetchBody);
                const response = await fetch(`${apiEndpoint}/logTraffic?listener=onHeadersReceived`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(fetchBody)
                });
                const responseData = await response.text();
                //console.log(`logTraffic ${responseData}`);
            } catch (error) {
                console.log("bg.js-onHeadersReceived-ERRor: " + error)
            }
        })(); 
        return {cancel: false};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);




/* chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command == "selected-tab") {
        chrome.tabs.getSelected(null, sendResponse);
    }
}); */

/* chrome.runtime.onInstalled.addListener( details => {
    // details.reason == "install" | "update"
    console.log(`onInstalled..`);
    try {
        //chrome.tabs.query({ active: true, currentWindow: true }, tabs => { ... });
        chrome.tabs.query({})
        .then( tabs => {
                let tabId = tabs[0].id;
                //let tabUrl = tabs[0].url;  // tabUrl not yet available during exn registration?
                console.log("Current tabId is: ", tabs[0]);

                chrome.tabs.get(tabId, tab => {
                    console.log(tab.url);
                    let tabUrl = tab.url;

                    fetch(`http://localhost:8000/extnRegistered?tabId=${tabId}&tabUrl=${tabUrl}`, {cache: "no-store"})
                    .then( response => {
                        if (!response?.ok) throw new Error(`Request failed with status ${response.status}`)
                        response.text()
                    })
                    .then( text => console.log(text));
                });
            },
            error => {}
        );
    } catch (error) { console.log("bg.js-onInstalled-ErRRor: " + error) }
});  */

/* function logUrl2 (requestDetails) {
  console.log(`logUrl: ${requestDetails.url}`);

  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log("bg.js-logUrl2-ErRRor: " + error)
    return "";
  }
} */
/*
const logUrl = (requestDetails) => {
  // try {
  //   const res = await fetch ("http://example.com:8000");
  //   const record = await res.text();
  //   console.log(`bg.js-logUrl-record: ${record}`)
  //   return;
  // } catch (error) {
  //   console.log("bg.js-logUrl-ErRRor: " + error)
  //   return "";
  // }
  //
  let myRequestHeaders = requestDetails.url//JSON.stringify(requestDetails, null, 2)
  (async () => {
    console.log(`logUrl: `);
    console.log(myRequestHeaders)
    const responseData = await fetchData(`http://localhost:8000/logTraffic`, myRequestHeaders)

    console.log(`logURL responseData : ${responseData}`);
  })();
  return {}
}


const fetchData = async (url, requestBody) => {
  try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: requestBody})
      });
      const responseData = await response.text();
      return responseData;
  } catch (error) {
      console.log("bg.js-fetchData-ERRor: " + error)
      return "fetching logurl failed";
  }
}

 */



////{urls: ["*:// */*"], types: ["xmlhttprequest"]},
/*       try {
        fetch("http://localhost:8000/logTraffic", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: reqUrl,
            requestBody: reqBody
          })
        })
        .then((response) => {
          if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
          response.text()
        })
        .then((text) => console.log(`logTraffic response: ${text}`))
      } catch (error) {
        console.log("bg.js-onBeforeRequest-ErRRor: " + error)
      } */


/* chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let myBody = JSON.stringify(details, null, 2)
    console.log("Request intercepted:", myBody);
    // Modify request data as needed
    return {};
  },
  {urls: ["<all_urls>"]},
  ["requestBody"]
); */


//logURL('testdata');


//chrome.tabs.onActivated.addListener((activeInfo) => {
/*   chrome.webRequest.onBeforeRequest.addListener(
    logUrl,
    //{urls: ["<all_urls>"], tabId: activeInfo.tabId},
    {urls: ["<all_urls>"]},
    []
  ); */
//});




