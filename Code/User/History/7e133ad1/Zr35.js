
const http = new XMLHttpRequest()
http.open("GET", "https://api.lyrics.ovh/v1/toto/africa")
http.send()
http.onload = () => console.log(http.responseText)


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


//create XMLHttpRequest object
const xhr = new XMLHttpRequest()
//open a get request with the remote server URL
xhr.open("GET", "https://world.openfoodfacts.org/category/pastas/1.json")
//send the Http request
xhr.send()

//EVENT HANDLERS
//triggered when the response is completed
xhr.onload = function() {
  if (xhr.status === 200) {
    //parse JSON datax`x
    data = JSON.parse(xhr.responseText)
    console.log(data.count)
    console.log(data.products)
  } else if (xhr.status === 404) {
    console.log("No records found")
  }
}

//triggered when a network-level error occurs with the request
xhr.onerror = function() {
  console.log("Network error occurred")
}

//triggered periodically as the client receives data
//used to monitor the progress of the request
xhr.onprogress = function(e) {
  if (e.lengthComputable) {
    console.log(`${e.loaded} B of ${e.total} B loaded!`)
  } else {
    console.log(`${e.loaded} B loaded!`)
  }
}


const xhr = new XMLHttpRequest()
// open a POST request
xhr.open("POST", "/food")
// set content-type header to JSON
xhr.setRequestHeader("Content-Type", "application/json");
// send JSON data to the remote server
xhr.send(JSON.stringify(food))




fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
});

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));



fetch("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${reponse.status}`)
    }
    return response.json()
  })
  .then(data => {
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => console.log(error))


async function postData () {
    const food = {
      name: "Bread",
      weight: 450,
      quantity: 3
    }
  
    const response = await fetch("/food", {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    if (!response.ok) {
      throw new Error(`Request failed with status ${reponse.status}`)
    }
    console.log("Request successful!")
}


 //Option with catch
fetch( textURL )
.then(async r=> console.log(await r.text()))
.catch(e=>console.error('Boo...' + e));

//No fear...
(async () =>
 console.log(
         (await (await fetch( jsonURL )).json())
         )
)(); 


// Axios

axios.get("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => console.log(response.data))
.catch((error) => console.log(error));

axios.get("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // access parsed JSON response data using response.data field
    data = response.data
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
})

async function postData () {
    const food = {
      name: "Bread",
      weight: 450,
      quantity: 3
    }
  
    try {
      const response = await axios.post("/food", food)
      console.log("Request successful!")
    } catch (error) {
      if (error.response) {
        console.log(error.reponse.status)
      } else {
        console.log(error.message)
      }
    }
}


 // Superagent 
 superagent
  .get("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // get parsed JSON response data
    data = response.body
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      console.log(error.status)
    } else {
      console.log(error.message)
    }
  })

  superagent
  .post("/food")
  .send(food)
  .then(response => console.log("Request successful!"))
  .catch(error => {
    if (error.response) {
      console.log(error.status)
    } else {
      console.log(error.message)
    }
  })


// Ky
async function getData () {
    try {
        const data = await ky.get("https://jsonplaceholder.typicode.com/posts").json()
        console.log(data.count)
        console.log(data.products)
    } catch (error) {
        if (error.response) {
        console.log(error.response.status)
        } else {
        console.log(error.message)
        }
    }
}


// jQuery  
$.get(
    "somepage.php",
    {paramOne : 1, paramX : 'abc'},
    function(data) {
       alert('page content: ' + data);
    }
);


$.get("https://jsonplaceholder.typicode.com/posts/1", (data, status) => {
  console.log(data);
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    type: "GET",
    success: function (data) {
      console.log(data);
    }
});

// A version without callback
var i = document.createElement("img");
i.src = "/your/GET/url?params=here";

