// const form = document.getElementById('registerForm');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;
//   if (username === '' || email === '' || password === '' || confirmPassword === '') {
//     alert('Please fill out all fields');
//   } else if (password !== confirmPassword) {
//     alert('Passwords do not match');
//   } else {
//     // Gửi yêu cầu đăng ký đến server ở đây
//   }
// });

//validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");
const mauKT = /^\d{10}$/;
// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" || 
    inputPasswordRegister.value === "" ||
    !mauKT.test(inputUsernameRegister.value)
    
  ) {
    alert("vui lòng không để trống, nhập 10 chữ số");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "dangnhap.html";
  }
});



