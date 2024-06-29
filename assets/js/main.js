import data from "./data.js";

// Mở - Đóng Menu-moblie
const menu_bar = document.querySelector(".bar-ic");
const popup_menu = document.querySelector(".popup-moblie");
const close_moblie = document.querySelector(".close-moblie");

menu_bar.addEventListener("click", () => {
    popup_menu.style.left = "0";
    close_moblie.style.display = "inline-block";
    menu_bar.style.opacity = "0";

    document.getElementById("overlay").style.display = "block";
    document.body.style.overflowY = "hidden";
});

close_moblie.addEventListener("click", () => {
    popup_menu.style.left = "-100%";
    close_moblie.style.display = "none";
    menu_bar.style.opacity = "1";

    document.getElementById("overlay").style.display = "none";
    document.body.style.overflowY = "scroll";
});

// Hiển thị menu-moblie con khi ấn vào icon "down"
const popupMoblie = document.querySelector(".popup-moblie");
const faDown = document.querySelectorAll(".li-moblie .fa-chevron-down");
const liMoblie = document.querySelectorAll(".li-moblie");
const listMenuMoblie = document.querySelectorAll(
    ".li-moblie .list-menu-moblie"
);

faDown.forEach((value, index) => {
    value.addEventListener("click", () => {
        if (listMenuMoblie[index].style.display === "block") {
            listMenuMoblie[index].style.display = "none";
            popupMoblie.style.overflow = "hidden";
            // liMoblie[index].style.backgroundColor = "#F3F3F3";
        } else {
            listMenuMoblie[index].style.display = "block";
            popupMoblie.style.overflowY = "scroll";
            popupMoblie.style.overflowX = "hidden";
            // liMoblie[index].style.backgroundColor = "rgb(219, 216, 216)";
        }
    });
});

// Sự kiện click nút button ở Sản phẩm mới
const buttons = document.querySelectorAll(".tabs button");
const productsNewEl = document.querySelectorAll(".products-new");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        document
            .querySelector(".button-active")
            .classList.remove("button-active");
        button.classList.add("button-active");

        productsNewEl.forEach((product) => {
            product.classList.remove("products-new-active");
        });

        const targetId = button.getAttribute("data-target");
        const targetProducts = document.getElementById(targetId);
        if (targetProducts) {
            targetProducts.classList.add("products-new-active");
        }
    });
});

// -------------------------Lấy sản phẩm ở "Sản phẩm bán chạy" ở trang chủ----------------------------------
let productsNamJS = document.querySelector(".product-nam-js");

// Hiển thị sản phẩm mảng data lên giao diện người dùng
const renderProducts = (data, listEL) => {
    const htmlEL = document.querySelector(listEL);

    let HTML = ``;
    data.forEach((item) => {
        HTML += `
           <div class="col-6 col-sm-4 col-md-3">
                <div class="product">
                    <a href="#">
                        <div class="image-container">
                            img
                                src="${item.normalImage}"
                                alt="Normal Image"
                                class="normal-img"
                            />
                            <img
                                src="${item.hoverImage}"
                                alt="Hover Image"
                                class="hover-img"
                            />
                        </div>
                    </a>
                    <a href="">
                        <h3>${item.name}</h3>
                    </a>
                    <p>${item.price} VNĐ</p>
                </div>
            </div>
        `;
    });

    htmlEL.innerHTML = HTML;
};

renderProducts(data, ".product-nam-js");