//Khi resize màn hình thì sẽ reload lại trang
window.addEventListener("resize", function () {
    "use strict";
    window.location.reload();
  });
  window.addEventListener("load", function () {
    // =============================================================Xử lý khi nhấn vào Chatbox
    let chatBoxButton = document.querySelector(".sidebar-chatbox");
    if (chatBoxButton) {
      chatBoxButton.addEventListener("click", function (e) {
        // Hiển thị Chat Box
        const chatboxTem = `<div class="chatbox">
        <div class="chatbox-header">
          <span>Chat with SNEAKER</span>
          <div class="icon-wrapper">
            <i class="fas fa-phone"></i>
            <i class="fas fa-times chatbox-times"></i>
          </div>
        </div>
        <div class="chatbox-middle">
        </div>
        <div class="chatbox-footer">
          <div class="input">
            <ion-icon name="add-circle-outline"></ion-icon>
            <input type="text" placeholder="Nhập tin nhắn..."/>
            <ion-icon name="happy-outline"></ion-icon>
          </div>
          <div class="send"><ion-icon name="paper-plane-outline"></ion-icon></div>
        </div>
        </div>`;
        let today = new Date();
        document.body.insertAdjacentHTML("beforeend", chatboxTem);
        let inputChatBox = document.querySelector(".chatbox input");
        console.log(inputChatBox);
        inputChatBox.onkeyup = (e) => {
          let textBox = e.target.value;
          let sendText = document.querySelector(".chatbox .send");
          let inputChatBox = document.querySelector(".chatbox-middle");
          sendText.onclick = () => {
            let textBoxTem = `<div class="text-box">
              <p>
                ${textBox}
              </p>
              <div class="time">
                ${today.getHours()}:${today.getMinutes()} <ion-icon name="checkmark-outline"></ion-icon>
              </div>
            </div>`;
            inputChatBox.insertAdjacentHTML("beforeend", textBoxTem);
            e.target.value = "";
          };
        };
      });
      document.body.addEventListener("click", function (event) {
        if (event.target.matches(".chatbox-times"))
          event.target.parentNode.parentNode.parentNode.remove();
      });
    }
  
    // =============================================================Xử lý slider ảnh Hero
    let heroImage = document.querySelector(".hero-image img");
    let arr = [
      "./images/HOME/HeroImage2.png",
      "./images/HOME/HeroImage3.png",
      "./images/HOME/HeroImage.png",
    ];
  
    if (heroImage) {
      setInterval(function () {
        heroImage.src = arr[Math.floor(Math.random() * arr.length)];
      }, 2000);
    }
  
    // =============================================================Xử lý Light & Dark Mode
    let lightButton = document.querySelector(".light-button");
    let darkButton = document.querySelector(".dark-button");
    darkButton.addEventListener("click", function () {
      document.body.style.backgroundColor = "#1E272D";
      document
        .querySelectorAll(".heading")
        .forEach((item) => item.classList.add("dark"));
      // ==============================Phần Header
      document.querySelector(".header").classList.add("dark");
  
      // ==============================Phần Footer
      document.querySelector("footer").classList.add("dark");
      document
        .querySelectorAll(".boxfoot h2")
        .forEach((item) => item.classList.add("dark"));
      document
        .querySelectorAll(".boxfoot li")
        .forEach((item) => item.classList.add("dark"));
      document
        .querySelectorAll(".boxfoot li a")
        .forEach((item) => item.classList.add("dark"));
      // ==============================Phần Hero
      document.querySelector("section.hero").classList.add("dark");
      document.querySelector(".hero-slogan h1").classList.add("dark");
      document
        .querySelectorAll(".hero-slogan span")
        .forEach((item) => item.classList.add("dark"));
      document.querySelector(".hero-slogan p").classList.add("dark");
      document.querySelector(".hero-slogan .button .buy").classList.add("dark");
  
      // ==============================Phần Label
      document.querySelector(".label-container").classList.add("dark");
  
      // ==============================Phần Service
      document.querySelectorAll(".service .container .box").forEach((item) => {
        item.classList.add("dark");
      });
  
      document
        .querySelectorAll(".service .container .box .image")
        .forEach((item) => {
          item.classList.add("dark");
        });
      document.querySelectorAll(".service .container h2").forEach((item) => {
        item.classList.add("dark");
      });
      document.querySelectorAll(".service .container span").forEach((item) => {
        item.classList.add("dark");
      });
  
      // ==============================Phần Feature
      document.querySelector("section.feature").classList.add("dark");
  
      document.querySelectorAll(".feature .box span").forEach((item) => {
        item.classList.add("dark");
      });
      document.querySelectorAll(".feature .box li").forEach((item) => {
        item.classList.add("dark");
      });
      document.querySelectorAll(".details-hidden label").forEach((item) => {
        item.classList.add("dark");
      });
      document.querySelectorAll(".details-unhidden h2").forEach((item) => {
        item.classList.add("dark");
      });
  
      document
        .querySelectorAll("section.review .box-container .box")
        .forEach((item) => {
          item.classList.add("dark");
        });
  
      document.querySelector(".footer-logo").classList.add("dark");
      document.querySelector(".brands-menu").classList.add("dark");
      document.querySelector("section.review").classList.add("dark");
      document.querySelector("section.feature").classList.add("dark");
      document.querySelector("section.newest").classList.add("dark");
    });
  
    lightButton.addEventListener("click", function () {
      document.body.style.backgroundColor = "#fff";
      document
        .querySelectorAll(".dark")
        .forEach((item) => item.classList.remove("dark"));
    });
  
    // =============================================================Custom con trỏ
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
    document.addEventListener("click", () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  
    // ============================================================= Scroll to top
    document
      .querySelector(".footer-logo i")
      .addEventListener("click", function () {
        console.log("scroll");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  });
  