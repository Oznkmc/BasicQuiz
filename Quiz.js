const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const lbl = document.querySelector("#soru");
let score=document.querySelector("#skor");
const point=0;
localStorage.setItem("sorular", JSON.stringify([
    "Türkiye'nin başkenti neresidir?",
    "Geliştiricinin Adı Nedir?"
]));

localStorage.setItem("siklar", JSON.stringify([
    ["Ankara","İstanbul","Sinop","Edirne"],
    ["Ozan","Emir","Gürkan","Tamer"]
]));


document.addEventListener("DOMContentLoaded", Load);
document.addEventListener("click", dogruluk);

function dogruluk(e) {
    // tıklanan elementi alıyoruz
    const tiklanan = e.target;

    // textContent kontrolü
    if (tiklanan.textContent === "Ozan" || tiklanan.textContent === "Ankara") {
        alert("Doğru Bildin!");
        score.textContent="SKOR:"+(point+5);
        sayfaYenile();
    } else {
        alert("Yanlış Bildin!");
    }
}
function sayfaYenile()
{
    window.open("Quiz.html","_self");
}
function Load() {
    let sorular = JSON.parse(localStorage.getItem("sorular"));
    let siklar = JSON.parse(localStorage.getItem("siklar"));
    let s = Math.floor(Math.random() * 2);
    
    lbl.textContent = sorular[s];
    btn1.textContent = siklar[s][0];
    btn2.textContent = siklar[s][1];
    btn3.textContent = siklar[s][2];
    btn4.textContent = siklar[s][3];
}


