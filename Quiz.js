const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const lbl = document.querySelector("#soru");
let score = document.querySelector("#skor");
let point = 0;

// Sorular ve şıklar (BİR KEZ TANIMLA)
let sorular = [
    "Türkiye'nin başkenti neresidir?",
    "Türkiye’de yüz ölçümü en büyük il hangisidir?",
    "İlk Türk kadın pilot kimdir?",
    "Güneş Sistemi’nin en büyük gezegeni hangisidir?",
    "Hangi şehir “Işıklar Şehri” olarak bilinir?"
];

let siklar = [
    ["Ankara","İstanbul","Sinop","Edirne"],
    ["Konya","Sinop","İstanbul","Edirne"],
    ["Afet İnan","Sabiha Gökçen","Halide Edip","Türkan Saylan"],
    ["Mars","Jüpiter","Satürn","Dünya"],
    ["Paris","İstanbul","Roma","Moskova","Selanik"]
];

let dogruCevap = ["Ankara", "Konya","Sabiha Gökçen","Jüpiter","Paris"];

let mevcutSoruIndex = -1;

document.addEventListener("DOMContentLoaded", Load);

btn1.addEventListener("click", dogruluk);
btn2.addEventListener("click", dogruluk);
btn3.addEventListener("click", dogruluk);
btn4.addEventListener("click", dogruluk);

function dogruluk(e) {
    const tiklanan = e.target.textContent;

    if (tiklanan === dogruCevap[mevcutSoruIndex]) {
        alert("Doğru Bildin!");
        point += 5;
        score.textContent = "SKOR:" + point;

        sorular.splice(mevcutSoruIndex, 1);
        siklar.splice(mevcutSoruIndex, 1);
        dogruCevap.splice(mevcutSoruIndex, 1);

        Load();
    } 
    else {
        alert("Yanlış Bildin!");
        QuizBitti();
    }
}
function QuizBitti()
{
    
        lbl.textContent = "Quiz Bitti!";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";
        return;
}
function Load() {
    
    if (sorular.length === 0) {
        QuizBitti();
    }
    mevcutSoruIndex = Math.floor(Math.random() * sorular.length);

    lbl.textContent = sorular[mevcutSoruIndex];
    btn1.textContent = siklar[mevcutSoruIndex][0];
    btn2.textContent = siklar[mevcutSoruIndex][1];
    btn3.textContent = siklar[mevcutSoruIndex][2];
    btn4.textContent = siklar[mevcutSoruIndex][3];
}


