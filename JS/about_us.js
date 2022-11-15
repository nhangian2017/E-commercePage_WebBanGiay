$(".count").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
        },
      }
    );
  });
  
  let memberImgList = document.querySelectorAll(
    "section.member .left-container .box img"
  );
  memberImgList.forEach((it) => {
    let name = document.querySelector(
      "section.member .right-container .main-img .name"
    );
    it.addEventListener("click", function (event) {
      let mainImg = document.querySelector(
        "section.member .right-container .main-img img"
      );
  
      let newTextName;
      let textName = document.querySelector(
        "section.member .right-container .main-img .name h1"
      );
      newTextName = textName.textContent;
      textName.textContent = event.target.dataset.name;
  
      name.classList.add("ani1");
  
      let tempImg = event.target.src;
      event.target.src = mainImg.src;
      mainImg.src = tempImg;
  
      event.target.dataset.name = newTextName;
  
      setTimeout(function () {
        name.classList.remove("ani1");
      }, 700);
    });
  });
  