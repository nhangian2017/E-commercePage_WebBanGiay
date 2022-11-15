import { PumaData } from "./productData.js";
const endpoint = "https://6210bfd64cd3049e1783e6c5.mockapi.io/api/cart";
let tab1 = document.querySelector(".content-right .tab1");
let tab2 = document.querySelector(".content-right .tab2");
// ============================================ POST Product lên API Cart
async function addProductToCart({
  mainImg,
  brandName,
  name,
  price,
  code,
  quantity,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ mainImg, brandName, name, price, code, quantity }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

// ============================================ Load Product từ Data lên content-right
function loadProductFromDataTab1(it) {
  let newTag;
  if (it.new != undefined) {
    newTag = '<div class="new">New</div>';
  } else {
    newTag = "<div></div>";
  }

  let priceNum = parseInt(
    it.price.replaceAll(".", "").substr(0, it.price.length - 5)
  );

  let discountNum =
    parseInt(it.discount.slice(0, it.discount.length - 1)) / 100;
  let productTem = `<div class="box">
    <div class="card-image">
      <div class="tags">
        ${newTag}
        <div class="discount">${it.discount}</div>
      </div>
      <img src=${it.mainImg} data-num="${it.id}" />
    </div>
    <div class="card-details">
      <div class="details-unhidden">
        <h2 class="name">${it.name}</h2>
        <h3 class="brandName">${it.brandName}</h3>
        <div class="price">
          <h2 class="new-price">${it.price}</h2>
          <h3 class="old-price">${(priceNum + priceNum * discountNum)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</h3>
        </div>
      </div>
      <div class="details-hidden">
        <div class="addcart" data-num="${it.id}">
          <h3 data-num="${it.id}">Thêm vào giỏ hàng</h3>
        </div>
      </div>
    </div>
  </div>`;

  tab1.insertAdjacentHTML("beforeend", productTem);
}
function loadProductFromDataTab2(it) {
  let newTag;
  if (it.new != undefined) {
    newTag = '<div class="new">New</div>';
  } else {
    newTag = "<div></div>";
  }

  let priceNum = parseInt(
    it.price.replaceAll(".", "").substr(0, it.price.length - 5)
  );

  let discountNum =
    parseInt(it.discount.slice(0, it.discount.length - 1)) / 100;
  let productTem = `<div class="box">
    <div class="card-image">
      <div class="tags">
        ${newTag}
        <div class="discount">${it.discount}</div>
      </div>
      <img src=${it.mainImg} data-num="${it.id}" />
    </div>
    <div class="card-details">
      <div class="details-unhidden">
        <h2 class="name">${it.name}</h2>
        <h3 class="brandName">${it.brandName}</h3>
        <div class="price">
          <h2 class="new-price">${it.price}</h2>
          <h3 class="old-price">${(priceNum + priceNum * discountNum)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</h3>
        </div>
      </div>
      <div class="details-hidden">
        <div class="addcart" data-num="${it.id}">
          <h3 data-num="${it.id}">Thêm vào giỏ hàng</h3>
        </div>
      </div>
    </div>
  </div>`;

  tab2.insertAdjacentHTML("beforeend", productTem);
}
PumaData.slice(0, 9).forEach((it) => {
  loadProductFromDataTab1(it);
});
PumaData.slice(9).forEach((it) => {
  loadProductFromDataTab2(it);
});
handleProductDetail();
// ============================================ Xử lý cho phần Product Detail
function handleProductDetail() {
  let productImgList = document.querySelectorAll(
    ".content-right .box .card-image img"
  );
  // Xử lý khi nhấn vào ảnh
  productImgList.forEach((item) =>
    item.addEventListener("click", function (event) {
      PumaData.forEach((it) => {
        if (event.target.dataset.num == it.id) {
          let productDetail = `<div class="product-detail"> 
      <div class="product-detail_modal">
        <div class="left-container">
          <div class="main-image">
            <img src=${it.mainImg} alt="" />
          </div>
          <div class="extra-image_container">
            <div class="extra-image">
              <img src=${it.extraImgList[0]} alt="" />
            </div>
            <div class="extra-image">
              <img src=${it.extraImgList[1]} alt="" />
            </div>
            <div class="extra-image">
              <img src=${it.extraImgList[2]} alt="" />
            </div>
          </div>
        </div>
  
        <div class="right-container">
          <div class="close">
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <h1>${it.name}</h1>
          <h2 class="brand-name">${it.brandName}</h2>
          <span class="price">${it.price}</span>
          <div class="line"></div>
          <h2>Mã sản phẩm:  <span>${it.code}</span></h2>
          <h2>Kích thước: </span>
          <ul class="sizes">
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
          </ul>
          <h2>Số lượng: </span>
          <div class="quantity">
            <button class="minus">-</button>
            <span>1</span>
            <button class="plus">+</button>
          </div>
          <div class="line"></div>
          <div class="add-to-cart">
            <span>Thêm vào giỏ hàng</span>
          </div>
        </div>
      </div>
    </div> `;

          document.body.insertAdjacentHTML("beforeend", productDetail);

          // 2. Xử lý khi nhấn vào extra image
          let mainImg = document.querySelector(
            ".product-detail .product-detail_modal .left-container .main-image img"
          );
          let extraImgList = document.querySelectorAll(
            ".product-detail .product-detail_modal .left-container .extra-image_container img"
          );
          extraImgList.forEach((item) =>
            item.addEventListener("click", function (event) {
              mainImg.src = event.target.src;
            })
          );

          // 3. Xử lý khi nhấn vào nút close
          let closeButton = document.querySelector(
            ".product-detail .product-detail_modal .right-container .close"
          );

          closeButton.addEventListener("click", function (event) {
            let productDetail = document.querySelector(".product-detail");
            document.body.removeChild(productDetail);
          });

          // 4. Xử lý khi nhấn vào nút tăng giảm số lượng
          let minusButton = document.querySelector("button.minus");
          let plusButton = document.querySelector("button.plus");
          let quantity = +document.querySelector(".quantity span").textContent;
          minusButton.addEventListener("click", function (event) {
            if (quantity > 0) quantity = quantity - 1;
            document.querySelector(".quantity span").textContent = quantity;
          });
          plusButton.addEventListener("click", function (event) {
            quantity = quantity + 1;
            document.querySelector(".quantity span").textContent = quantity;
          });

          // 5. Xử lý khi nhấn vào nút thêm vào giỏ hàng
          let addCartButton = document.querySelector(
            ".product-detail .product-detail_modal .right-container .add-to-cart"
          );

          addCartButton.addEventListener("click", function (event) {
            console.log(quantity);
            let mainImg = it.mainImg;
            let brandName = it.brandName;
            let name = it.name;
            let price = it.price;
            let code = it.code;
            let product = { mainImg, brandName, name, price, code, quantity };
            addProductToCart(product);

            // 6. Thông báo đã thêm thành công
            let alertModal = ` <div class="alert">
            <div class="icon">
              <i class="fas fa-check"></i>
            </div>
            <h2>Đã thêm thành công!</h2>
            <div class="button-wrapper">
              <button class="ok">OK</button>
              <a href="./cart.html"><button><i class="fas fa-shopping-cart"></i></button></a>
            </div>
          </div>`;
            document.body.insertAdjacentHTML("beforeend", alertModal);

            // 7. Xử lý khi nhấn vào vùng khác alert và nhấn vào OK
            let alert = document.querySelector(".alert");
            document.body.addEventListener("click", function (event) {
              if (event.target.matches(".alert .ok")) {
                document.body.removeChild(alert);
              }
            });
          });
        }
      });
    })
  );

  let addCartButtonList = document.querySelectorAll(".details-hidden .addcart");
  // Xử lý khi nhấn vào Button "Thêm vào giỏ hàng"
  addCartButtonList.forEach((item) =>
    item.addEventListener("click", function (event) {
      PumaData.forEach((it) => {
        if (event.target.dataset.num == it.id) {
          let quantity = 1;
          let mainImg = it.mainImg;
          let brandName = it.brandName;
          let name = it.name;
          let price = it.price;
          let code = it.code;
          let product = { mainImg, brandName, name, price, code, quantity };
          addProductToCart(product);

          // 6. Thông báo đã thêm thành công
          let alertModal = ` <div class="alert">
        <div class="icon">
          <i class="fas fa-check"></i>
        </div>
        <h2>Đã thêm thành công!</h2>
        <div class="button-wrapper">
          <button class="ok">OK</button>
          <a href="./cart.html"><button><i class="fas fa-shopping-cart"></i></button></a>
        </div>
      </div>`;

          document.body.insertAdjacentHTML("beforeend", alertModal);

          // 7. Xử lý khi nhấn vào vùng khác alert và nhấn vào OK
          let alert = document.querySelector(".alert");
          document.body.addEventListener("click", function (event) {
            if (event.target.matches(".alert .ok")) {
              document.body.removeChild(alert);
            }
          });
        }
      });
    })
  );
}

// ============================================ Xử lý chức năng tìm kiếm sản phẩm
let searchBox = document.querySelector(".sidebar-left .search-box input");
searchBox.onkeyup = function (event) {
  let dataInput = event.target.value;
  tab1.innerHTML = "";
  PumaData.forEach((it) => {
    if (it.name.toLocaleLowerCase().includes(dataInput.toLocaleLowerCase())) {
      loadProductFromDataTab1(it);
    }
  });
  handleProductDetail();
};

// ============================================ Xử lý chức năng lọc theo giá và size
let priceList = document.querySelectorAll(
  "section.content .sidebar-left ul.price li input"
);
let sizeList = document.querySelectorAll(
  "section.content .sidebar-left ul.size li input"
);

priceList.forEach((item) => {
  item.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      let selectResultTem = `
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      <span>${event.currentTarget.value}</span>
      `;
      document.querySelector(
        "section.content .sidebar-left ul.select-result li:nth-child(1)"
      ).innerHTML = "";
      document
        .querySelector(
          "section.content .sidebar-left ul.select-result li:nth-child(1)"
        )
        .insertAdjacentHTML("afterbegin", selectResultTem);

      document.querySelector(
        "section.content .sidebar-left .remove-filter"
      ).style.display = "flex";

      tab1.innerHTML = "";
      PumaData.forEach((it) => {
        let price = parseInt(
          it.price.replaceAll(".", "").substr(0, it.price.length - 5)
        );
        if (
          (event.currentTarget.value === "Giá trên 10.000.000 đ" &&
            price > 8000000) ||
          (event.currentTarget.value === "5.000.000 đ - 10.000.000 đ" &&
            price < 8000000 &&
            price > 5000000) ||
          (event.currentTarget.value === "2.000.000 đ - 5.000.000 đ" &&
            price < 5000000 &&
            price > 2000000) ||
          (event.currentTarget.value === "Giá dưới 2.000.000 đ" &&
            price <= 2000000)
        ) {
          loadProductFromDataTab1(it);
        }
      });
      handleProductDetail();
    }
  });
});

sizeList.forEach((item) => {
  item.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      let selectResultTem = `
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      <span>${event.currentTarget.value}</span>
      `;
      document.querySelector(
        "section.content .sidebar-left ul.select-result li:nth-child(2)"
      ).innerHTML = "";
      document
        .querySelector(
          "section.content .sidebar-left ul.select-result li:nth-child(2)"
        )
        .insertAdjacentHTML("afterbegin", selectResultTem);

      document.querySelector(
        "section.content .sidebar-left .remove-filter"
      ).style.display = "flex";

      tab1.innerHTML = "";
      PumaData.forEach((it) => {
        if (it.sizes.includes(+event.target.value)) {
          loadProductFromDataTab1(it);
        }
      });
      handleProductDetail();
    }
  });
});

// ============================================ Xử lý chức năng xoá tất cả lọc đã chọn
let deleteAll = document.querySelector(
  "section.content .sidebar-left .remove-filter"
);
deleteAll.addEventListener("click", function () {
  document.querySelector(
    "section.content .sidebar-left ul.select-result li:nth-child(1)"
  ).innerHTML = "";
  document.querySelector(
    "section.content .sidebar-left ul.select-result li:nth-child(2)"
  ).innerHTML = "";

  tab1.innerHTML = "";
  tab2.innerHTML = "";
  PumaData.slice(0, 9).forEach((it) => {
    loadProductFromDataTab1(it);
  });
  PumaData.slice(9).forEach((it) => {
    loadProductFromDataTab2(it);
  });
  handleProductDetail();
});
// ============================================ Xử lý chức năng sắp xếp
let sortSelect = document.querySelector(
  "section.content .content-right .sort select"
);

sortSelect.addEventListener("change", function () {
  tab1.innerHTML = "";
  console.log(sortSelect.value);
  if (sortSelect.value === "Mới nhất") {
    PumaData.forEach((it) => {
      if (it.new != undefined) loadProductFromDataTab1(it);
    });
    handleProductDetail();
  } else if (sortSelect.value === "Tên từ A - Z") {
    let newPumaData = PumaData.sort((a, b) => (a.name > b.name ? 1 : -1));
    newPumaData.forEach((item) => {
      loadProductFromDataTab1(item);
    });
    handleProductDetail();
  } else if (sortSelect.value === "Tên từ Z - A") {
    let newPumaData = PumaData.sort((a, b) => (a.name < b.name ? 1 : -1));
    newPumaData.forEach((item) => {
      loadProductFromDataTab1(item);
    });
    handleProductDetail();
  } else if (sortSelect.value === "Giá tăng dần") {
    let newPumaData = PumaData.sort((a, b) => (a.price > b.price ? 1 : -1));
    newPumaData.forEach((item) => {
      loadProductFromDataTab1(item);
    });
    handleProductDetail();
  } else if (sortSelect.value === "Giá giảm dần") {
    let newPumaData = PumaData.sort((a, b) => (a.price < b.price ? 1 : -1));
    newPumaData.forEach((item) => {
      loadProductFromDataTab1(item);
    });
    handleProductDetail();
  }
});

// ============================================ Xử lý cho phần Next và Prev
let nextButton = document.querySelector(
  "section.content .content-right .switch_tabs button.next"
);

let prevButton = document.querySelector(
  "section.content .content-right .switch_tabs button.prev"
);

nextButton.addEventListener("click", function (event) {
  if (document.querySelector(".content-right").contains(tab1)) {
    tab1.style.display = "none";
    tab2.style.display = "flex";
    nextButton.style.display = "none";
  }
});

prevButton.addEventListener("click", function (event) {
  if (document.querySelector(".content-right").contains(tab2)) {
    tab1.style.display = "flex";
    tab2.style.display = "none";
    prevButton.style.display = "flex";
    nextButton.style.display = "flex";
  }
});
