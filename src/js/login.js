// const TOKEN_BTN = document.querySelector(".token-btn");
// const tokenValue = sessionStorage.getItem("token");

// let h1 = document.createElement("h1");
// h1.textContent = tokenValue;
// document.body.appendChild(h1);
// // document.body.innerHTML = sessionStorage.getItem("token");

// if(TOKEN_BTN){
//   TOKEN_BTN.addEventListener("click", () =>{
//     sessionStorage.setItem("token", "12345678");
//     h1.textContent = sessionStorage.getItem("token");
//   })
// }

// function checkUserAuth(){
//   if(!tokenValue){
//     window.location.href= "login.html";
//   }
// }



//  const tokenValue = sessionStorage.getItem("token");

//  if (tokenValue) {
//    window.location.href = "index2.html"; 
//  }

//  const loginButton = document.getElementById("login-btn");

//  loginButton.addEventListener("click", () => {
//    sessionStorage.setItem("token", "12345678");
//    window.location.href = "index2.html"; 
//  });


// const USERNAME = document.querySelector(".username");
// const PASSWORD = document.querySelector(".password");
// const SIGNIN = document.querySelector(".signin");
// if(SIGNIN){
//   SIGNIN.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(USERNAME.value,PASSWORD.value);
//     sessionStorage.setItem("token",crypto.randomUUID());
//     window.location.href = "index2.html"; 
//   })
// }


document.getElementById("loginButton").addEventListener("click", async (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem("authToken", data.token);
      console.log("Login successful. Redirecting to index2.html...");
      window.location.replace("index2.html");
    } else {
      errorMessage.textContent = "Invalid username or password. Please try again.";
    }
  } catch (error) {
    console.error("Error during login:", error);
    errorMessage.textContent = "An error occurred. Please try again later.";
  }
});
