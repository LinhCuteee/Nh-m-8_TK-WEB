let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function toggleSearchBox() {
    var searchBox = document.getElementById('search-box');
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
}

function searchProducts() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function (box) {
        var productName = box.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const message = document.getElementById("message").value;
  
    // Validate that none of the fields are empty
    if (!fullName || !email || !phone || !address || !message) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
  
    // Display success message using alert
    alert("Gửi thành công!");
  
    // Optionally, you can clear the form fields after successful submission
    document.getElementById("contactForm").reset();
  });
  
  document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const email = document.getElementById("email1").value;
  
    // Validate that the email is not empty
    if (!email) {
      alert("Vui lòng nhập địa chỉ email");
      return;
    }
  
    // Display success message using alert
    alert("Đăng ký thành công! Cảm ơn bạn đã đăng ký.");
  
    // Optionally, you can clear the email field after successful submission
    document.getElementById("subscriptionForm").reset();
  });
  
  

