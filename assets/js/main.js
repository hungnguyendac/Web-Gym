// Mở - Đóng Menu-moblie
const menu_bar = document.querySelector(".bar-ic");
const popup_menu = document.querySelector(".popup-moblie");
const close_moblie = document.querySelector(".close-moblie");


menu_bar.addEventListener('click', () => {
    popup_menu.style.left = "0";
    close_moblie.style.display = "inline-block";
    menu_bar.style.opacity = "0";

    document.getElementById("overlay").style.display = "block";
    document.body.style.overflowY = "hidden";
})

close_moblie.addEventListener('click', () => {
    popup_menu.style.left = "-100%";
    close_moblie.style.display = "none";
    menu_bar.style.opacity = "1";

    document.getElementById("overlay").style.display = "none";
    document.body.style.overflowY = "scroll";
})

// Hiển thị menu-moblie con khi ấn vào icon "down"
const popupMoblie = document.querySelector(".popup-moblie");
const faDown = document.querySelectorAll(".li-moblie .fa-chevron-down");
const liMoblie = document.querySelectorAll(".li-moblie");
const listMenuMoblie = document.querySelectorAll(".li-moblie .list-menu-moblie");

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
    })
})