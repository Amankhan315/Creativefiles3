let box = document.querySelector(".box")
let bars = document.querySelector(".fa-bars")
let chlidbox2 = document.querySelector(".chlidbox2")
let bigges = document.querySelector(".bigges")




box.addEventListener("click", function () {
    console.log(box);
    if (bars.classList.contains("fa-bars")) {

        bars.classList.add("fa-bars")
        chlidbox2.classList.add("up")
        bigges.classList.add("up2")





    }

})
let fa = document.querySelector(".fa-minus")
fa.addEventListener("click", function () {
    bigges.classList.remove("up2")
    chlidbox2.classList.remove("up")
})
let submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    submenu.addEventListener('animationend', () => {
        submenu.style.animation = '';
    });
});

let lists = document.querySelectorAll('.list');

lists.forEach(list => {
    list.addEventListener('mouseover', () => {
        let submenu = list.querySelector('.submenu');
        submenu.style.animation = 'none';
        submenu.style.display = 'block';
        setTimeout(() => {
            submenu.style.animation = 'fadeIn 0.3s ease-in-out';
        }, 0);
    });
    list.addEventListener('mouseout', () => {
        let submenu = list.querySelector('.submenu');
        submenu.style.animation = '';
        submenu.style.display = 'none';
    });
});

let left = document.querySelector(".fa-chevron-left")
console.log(left);
let sli = document.querySelector(".slider")
let slid = document.querySelectorAll(".slide")
console.log(slid);

let right = document.querySelector(".fa-chevron-right")
console.log(right);

let count = 0

left.addEventListener("click", function () {

    count--

    if (count < 0) {

        count = slid.length - 1
    }
    sli.style.marginLeft = ` -${count * 100}% `

})

right.addEventListener("click", function () {

    count++

    if (count > slid.length - 1) {

        count = 0


    }
    sli.style.marginLeft = ` -${count * 100}% `

})

let btn2 = document.querySelectorAll(".btn2")
console.log(btn2.length, "btn2");

let smallbox2 = document.querySelectorAll(".smallbox2")
let chlidbox4 = document.querySelector(".chlidbox4")
// console.log(smallbox2.length, "smallbox2");


for (let i = 0; i < btn2.length; i++) {

    btn2[i].addEventListener("click", function () {
        for (let j = 0; j < smallbox2.length; j++) {
            smallbox2[j].classList.remove("down")
        }
        smallbox2[i].classList.add("down")



    })
}
chlidbox4.addEventListener("mouseleave", function () {
    for (let w = 0; w < smallbox2.length; w++) {

        smallbox2[w].classList.remove("down")
    }
})





let slidebox = document.querySelector(".slidebox")
let sliders = document.querySelector(".sliders")

let isPressedDown = false;
let cursorXSpace;

slidebox.addEventListener("mousedown", (e) => {

    isPressedDown = true;

    cursorXSpace = e.offsetX - sliders.offsetLeft;
    slidebox.style.cursor = "grabbing";

})
slidebox.addEventListener("mouseup", () => {
    slidebox.style.cursor = "grab";
})
window.addEventListener("mouseup", () => {
    isPressedDown = false;
})
slidebox.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;

    sliders.style.left = `${e.offsetX - cursorXSpace}px`;
    boundslides();
})
function boundslides() {

    let slidebox_rect = slidebox.getBoundingClientRect();
    console.log(slidebox_rect);
    let sliders_rect = sliders.getBoundingClientRect();
    if (parseInt(sliders.style.left) > 0) {
        slider.style.left = 0
    } else if (sliders_rect.right < slidebox_rect.right) {
        sliders.style.left = `-${sliders_rect.width - slidebox_rect.width}px`
    }

}
let mains = document.querySelectorAll(".mains")

window.addEventListener("scroll", checkboxe)
checkboxe()
function checkboxe() {
    let triggerbottom = window.innerHeight / 4 * 4
    mains.forEach(mains => {
        let mainstop = mains.getBoundingClientRect().top
        if (mainstop < triggerbottom) {
            mains.classList.add("show2")

        } else {
            mains.classList.remove("show2")
        }
    })

}

window.addEventListener("load", function () {
    let loaderWrapper = document.querySelector(".loader-wrapper");

    setTimeout(function () {
        loaderWrapper.style.display = "none";
    }, 1500);
});

let modeSwitch = document.getElementById("mode-switch");
let mains2 = document.querySelectorAll(".mains2");

modeSwitch.addEventListener("change", function () {
    if (this.checked) {
        mains2.forEach(el => {
            el.classList.remove("light-mode");
            el.classList.add("dark-mode");
        });
    } else {
        mains2.forEach(el => {
            el.classList.remove("dark-mode");
            el.classList.add("light-mode");
        });
    }
});





let saleEndDate = new Date('2023-11-10T23:59:59Z').getTime();


function updateCountdown() {
    let currentDate = new Date().getTime();
    let timeRemaining = saleEndDate - currentDate;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}


updateCountdown();


setInterval(updateCountdown, 1000);






