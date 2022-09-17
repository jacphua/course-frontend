document.addEventListener("DOMContentLoaded", function(event) {
    /* 
      - Code to execute when only the HTML document is loaded.
      - This doesn't wait for stylesheets, 
        images, and subframes to finish loading. 
    */
   console.log("Page is loading")


   const url = window.location.href
    console.log(url);
    if(url.includes("LoggedIn")){
        localStorage.setItem("IsLoggedIn",true);
        setTimeout(() => {

//            getUserProfile();
        },0)
        

    }
    let isLoggedIn = localStorage.getItem("IsLoggedIn");
    if(!isLoggedIn)
    window.location.href = "http://localhost:3000/login"
  
});

function onLogout(){
    localStorage.removeItem("IsLoggedIn");
}

