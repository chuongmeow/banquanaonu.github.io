
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
    !mauKT.test(inputUsernameRegister.value)||
    inputPasswordRegister.value.length < 8
  ) {
    alert("vui lòng không để trống số điện thoại, nhập 10 chữ số hoặc password ít nhất 8 kí tự");
    
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


// const inputUsernameRegister = document.querySelector(".input-signup-username");
// const inputPasswordRegister = document.querySelector(".input-signup-password");
// const btnRegister = document.querySelector(".signup__signInButton");
// const mauKT = /^\d{10}$/;
// // validation form register and register user local storage

// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     inputUsernameRegister.value === "" || 
//     inputPasswordRegister.value === "" ||
//     !mauKT.test(inputUsernameRegister.value) ||
//     inputPasswordRegister.value.length < 8  // Thêm điều kiện này để kiểm tra độ dài của password
//   ) {
//     alert("vui lòng không để trống username, nhập 10 chữ số hoặc password ít nhất 8 kí tự");
    
//   } else {
//     // array user
//     const user = {
//       username: inputUsernameRegister.value,
//       password: inputPasswordRegister.value,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(inputUsernameRegister.value, json);
//     alert("Đăng Ký Thành Công");
//     window.location.href = "dangnhap.html";
//   }
// });




