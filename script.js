console.log("HelloWorld");
const sw1 = document.getElementById("ch1");
const sw2 = document.getElementById("ch2");
const grn1 = document.getElementById("grn1");
const grn2 = document.getElementById("grn2");
const grn3 = document.getElementById("grn3");
const grn4 = document.getElementById("grn4");
const ctg1 = document.getElementById("ctg1");
const ctg2 = document.getElementById("ctg2");
const ctg3 = document.getElementById("ctg3");
const ctg4 = document.getElementById("ctg4");
const ctg5 = document.getElementById("ctg5");
const txtctg = document.getElementById("txtctg");
const tr = document.getElementById("tr");
console.log(ctg1);
sw1.classList.add("active");
sw1.onclick = function () { if (!sw1.classList.contains("active")) { sw1.classList.add("active"); sw2.classList.remove("active"); grn1.innerText = "4990 грн"; grn2.innerText = "3999 грн"; grn3.innerText = "350грн/год"; grn4.innerText = "56 годин"; } }
sw2.onclick = function () { if (!sw2.classList.contains("active")) { sw2.classList.add("active"); sw1.classList.remove("active"); grn1.innerText = "4000 грн"; grn2.innerText = "3500 грн"; grn3.innerText = "300грн/год"; grn4.innerText = "50 годин"; } }
ctg2.classList.add("active");
ctg1.onclick = function () {
    if (!ctg1.classList.contains("active")) {
        sw1.classList.add("active");
        sw2.classList.remove("active");
        ctg1.classList.add("active");
        ctg2.classList.remove("active");
        ctg3.classList.remove("active");
        ctg4.classList.remove("active");
        ctg5.classList.remove("active");
        txtctg.innerText = "Категорія А";
        grn1.innerText = "3000 грн";
        grn2.innerText = "2500 грн";
        grn3.innerText = "400грн/год";
        grn4.innerText = "45 годин";
        tr.src = "images/moto2.png";
        sw1.onclick = function () {
            if (!sw1.classList.contains("active")) {
                sw1.classList.add("active");
                sw2.classList.remove("active");
                grn1.innerText = "3000 грн";
                grn2.innerText = "2500 грн";
                grn3.innerText = "400грн/год";
                grn4.innerText = "45 годин";
            }
        }
        sw2.onclick = function () {
            if (!sw2.classList.contains("active")) {
                sw2.classList.add("active");
                sw1.classList.remove("active");
                grn1.innerText = "4500 грн";
                grn2.innerText = "2900 грн";
                grn3.innerText = "330грн/год";
                grn4.innerText = "47 годин";
            }
        }
    }
}
ctg2.onclick = function () {
    if (!ctg2.classList.contains("active")) {
        sw1.classList.add("active");
        sw2.classList.remove("active");
        ctg2.classList.add("active");
        ctg1.classList.remove("active");
        ctg3.classList.remove("active");
        ctg4.classList.remove("active");
        ctg5.classList.remove("active");
        grn1.innerText = "4990 грн";
        grn2.innerText = "3999 грн";
        grn3.innerText = "350грн/год";
        grn4.innerText = "56 годин";
        txtctg.innerText = "Категорія B";
        tr.src = "images/car3.png";
        sw1.onclick = function () {
            if (!sw1.classList.contains("active")) {
                sw1.classList.add("active");
                sw2.classList.remove("active");
                grn1.innerText = "4990 грн";
                grn2.innerText = "3999 грн";
                grn3.innerText = "350грн/год";
                grn4.innerText = "56 годин";
            }
        }
        sw2.onclick = function () {
            if (!sw2.classList.contains("active")) {
                sw2.classList.add("active");
                sw1.classList.remove("active");
                grn1.innerText = "4000 грн";
                grn2.innerText = "3500 грн";
                grn3.innerText = "300грн/год";
                grn4.innerText = "50 годин";
            }
        }
    }
}
ctg3.onclick = function () {
    if (!ctg3.classList.contains("active")) {
        sw1.classList.add("active");
        sw2.classList.remove("active");
        ctg3.classList.add("active");
        ctg1.classList.remove("active");
        ctg2.classList.remove("active");
        ctg4.classList.remove("active");
        ctg5.classList.remove("active");
        grn1.innerText = "5370 грн";
        grn2.innerText = "4620 грн";
        grn3.innerText = "580грн/год";
        grn4.innerText = "63 години";
        txtctg.innerText = "Категорія C";
        tr.src = "images/truck2.png";
        sw1.onclick = function () {
            if (!sw1.classList.contains("active")) {
                sw1.classList.add("active");
                sw2.classList.remove("active");
                grn1.innerText = "5370 грн";
                grn2.innerText = "4620 грн";
                grn3.innerText = "580грн/год";
                grn4.innerText = "63 години";
            }
        }
        sw2.onclick = function () {
            if (!sw2.classList.contains("active")) {
                sw2.classList.add("active");
                sw1.classList.remove("active");
                grn1.innerText = "6200 грн";
                grn2.innerText = "5900 грн";
                grn3.innerText = "580грн/год";
                grn4.innerText = "64 години";
            }
        }
    }
}
ctg4.onclick = function () {
    if (!ctg4.classList.contains("active")) {
        sw1.classList.add("active");
        sw2.classList.remove("active");
        ctg4.classList.add("active");
        ctg1.classList.remove("active");
        ctg2.classList.remove("active");
        ctg3.classList.remove("active");
        ctg5.classList.remove("active");
        grn1.innerText = "2400 грн";
        grn2.innerText = "1900 грн";
        grn3.innerText = "270грн/год";
        grn4.innerText = "45 годин";
        txtctg.innerText = "Категорія BE";
        tr.src = "images/trailer2.png";
        sw1.onclick = function () {
            if (!sw1.classList.contains("active")) {
                sw1.classList.add("active");
                sw2.classList.remove("active");
                grn1.innerText = "2400 грн";
                grn2.innerText = "1900 грн";
                grn3.innerText = "270грн/год";
                grn4.innerText = "45 годин";
            }
        }
        sw2.onclick = function () {
            if (!sw2.classList.contains("active")) {
                sw2.classList.add("active");
                sw1.classList.remove("active");
                grn1.innerText = "2500 грн";
                grn2.innerText = "2000 грн";
                grn3.innerText = "300грн/год";
                grn4.innerText = "44 години";
            }
        }
    }
}
ctg5.onclick = function () {
    if (!ctg5.classList.contains("active")) {
        sw1.classList.add("active");
        sw2.classList.remove("active");
        ctg5.classList.add("active");
        ctg1.classList.remove("active");
        ctg2.classList.remove("active");
        ctg3.classList.remove("active");
        ctg4.classList.remove("active");
        grn1.innerText = "3000 грн";
        grn2.innerText = "3100 грн";
        grn3.innerText = "360грн/год";
        grn4.innerText = "45 годин";
        txtctg.innerText = "Категорія CE";
        tr.src = "images/container2.png";
        sw1.onclick = function () {
            if (!sw1.classList.contains("active")) {
                sw1.classList.add("active");
                sw2.classList.remove("active");
                grn1.innerText = "3000 грн";
                grn2.innerText = "3100 грн";
                grn3.innerText = "360грн/год";
                grn4.innerText = "45 годин";
            }
        }
        sw2.onclick = function () {
            if (!sw2.classList.contains("active")) {
                sw2.classList.add("active");
                sw1.classList.remove("active");
                grn1.innerText = "3600 грн";
                grn2.innerText = "3230 грн";
                grn3.innerText = "345грн/год";
                grn4.innerText = "43 години";
            }
        }
    }
}