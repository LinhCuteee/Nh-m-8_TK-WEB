const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputRepeatPassword = document.querySelector(".input-signup-repeatpassword");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  const existingUser = localStorage.getItem(inputUsernameRegister.value);

  if (inputUsernameRegister.value === "" || inputPasswordRegister.value === "" || inputRepeatPassword.value === "") {
    alert("Vui lòng không để trống");
  } else if (existingUser) {
    alert("Email đã đăng ký. Vui lòng chọn email khác.");
  } else if (inputPasswordRegister.value !== inputRepeatPassword.value) {
    alert("Mật khẩu không khớp. Vui lòng nhập lại mật khẩu.");
  } else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);

    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
