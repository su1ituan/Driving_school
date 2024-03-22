console.log("HelloWorld");
const sw1 = document.getElementById("ch1");
const sw2 = document.getElementById("ch2");
const grn1 = document.getElementById("grn1");
const grn2 = document.getElementById("grn2");
const grn3 = document.getElementById("grn3");
const grn4 = document.getElementById("grn4");
sw1.classList.add("active");
sw1.onclick = function() {if (!sw1.classList.contains("active")) {sw1.classList.add("active"); sw2.classList.remove("active"); grn1.innerText = "4990 грн"; grn2.innerText = "3999 грн"; grn3.innerText = "350грн/год"; grn4.innerText = "56 годин";}}
sw2.onclick = function() {if (!sw2.classList.contains("active")) {sw2.classList.add("active"); sw1.classList.remove("active"); grn1.innerText = "4000 грн"; grn2.innerText = "3500 грн"; grn3.innerText = "300грн/год"; grn4.innerText = "50 годин";}}
