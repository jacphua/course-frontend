function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.id} <br>
        name: ${item.name} <br>
        email: ${item.email}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    name: form.name.value,
    email: form.email.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}

// function deleteData() {
//   var requestOptions = {
//     method: "DELETE",
//   };
//   url = "http://localhost:3000/customer/delete?cid=" + form.cid.value;
//   fetch(url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => (document.getElementById("mypanel").innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

// function viewCustData() {
//   var requestOptions = {
//     method: "GET",
//   };
//   url = "http://localhost:3000/customer/id?cid=" + form.cid.value;
//   fetch(url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => (document.getElementById("mypanel").innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

function updateData() {
  var requestOptions = {
    method: "POST",
  };
  url = "http://localhost:3000/customer/change/id?cid=" + form.cid.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}


function getUserProfile() {
  let requestOptions = {
    method: "GET",
  };
  let url = "http://localhost:3000/profile";
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function getAllOrders() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/orders/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Order Id: ${item.id} <br>
        Cust name: ${item.custName} <br>
        Item name: ${item.itemName} <br>
        Quantity: ${item.quantity} <br>
        Shipping Date: ${item.shipping_date} <br>
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}
