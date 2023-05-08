// const form = document.getElementById('loginForm');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   if (username === '' || password === '') {
//     alert('Please enter both username and password');
//   } else {
//     // Gửi yêu cầu đăng nhập đến server ở đây
//   }
// });

// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "../index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});


