document.addEventListener('DOMContentLoaded', function () {
    var nut = document.querySelectorAll(".list");
    var slides = document.querySelectorAll(".cacslide ul li");
    var thoigian = setInterval(function () { autoSlide() }, 8000)
    // 
    for (let i = 0; i < nut.length; i++) {

        nut[i].onclick = function () {
            clearInterval(thoigian);

            for (let j = 0; j < nut.length; j++) {
                nut[j].classList.remove("kichhoat")
            }
            nut[i].classList.add("kichhoat");

            var nutkichhoat = this;
            var vitrinut = 0;
            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
            }
            // console.log("vị trí có class kích hoạt là= ", vitrinut)
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove("hienthi")
                slides[vitrinut].classList.add("hienthi")

            }
        }
    }
    // xữ lý phần slide
    function autoSlide() {
        var vitrislide = 0;
        var slidehientai = document.querySelector(".cacslide ul li.hienthi");
        for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) { }
        if (vitrislide < slides.length - 1) {
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove("hienthi");
                nut[j].classList.remove("kichhoat");
            }
            slides[vitrislide].nextElementSibling.classList.add("hienthi");
            nut[vitrislide].nextElementSibling.classList.add("kichhoat");
        }
        else {
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove("hienthi");
                nut[j].classList.remove("kichhoat");
            }
            slides[0].classList.add("hienthi");
            nut[0].classList.add("kichhoat");
        }

    }






}, false);