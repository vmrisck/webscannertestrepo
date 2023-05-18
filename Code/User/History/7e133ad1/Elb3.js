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