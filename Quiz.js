const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const lbl = document.querySelector("#soru");
let score = document.querySelector("#skor");
let point = 0;

let sorular = [
    "Türkiye'nin başkenti neresidir?",
    "Türkiye’de yüz ölçümü en büyük il hangisidir?",
    "İlk Türk kadın pilot kimdir?",
    "Güneş Sistemi’nin en büyük gezegeni hangisidir?",
    "Hangi şehir “Işıklar Şehri” olarak bilinir?",
    "Güneş Sistemi’ne en yakın yıldız hangisidir?",
    "Su kaç derecede donar?",
    "En büyük okyanus hangisidir?",
    "Hangisi bir enerji birimidir?",
    "Leonardo da Vinci’nin ünlü “Mona Lisa” eseri nerededir?",  
];

let siklar = [
    ["Ankara","İstanbul","Sinop","Edirne"],
    ["Konya","Sinop","İstanbul","Edirne"],
    ["Afet İnan","Sabiha Gökçen","Halide Edip","Türkan Saylan"],
    ["Mars","Jüpiter","Satürn","Dünya"],
    ["Paris","İstanbul","Roma","Moskova"],
    ["Sirius","Vega","Proxima Centauri","Betelgeuse"],
    ["-1","0","10","100"],
    ["Hint Okyanusu","Atlas Okyanusu","Büyük Okyanus (Pasifik)","Arktik Okyanusu"],
    ["Newton","Joule","Pascal","Hertz"],
    ["British Museum","Louvre Müzesi","Vatikan Müzesi","Prado Müzesi"],
];

let dogruCevap = ["Ankara", "Konya","Sabiha Gökçen","Jüpiter","Paris","Proxima Centauri","0","Büyük Okyanus (Pasifik)","Joule","Louvre Müzesi"];
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
    return; 
}

    mevcutSoruIndex = Math.floor(Math.random() * sorular.length);

    lbl.textContent = sorular[mevcutSoruIndex];
    btn1.textContent = siklar[mevcutSoruIndex][0];
    btn2.textContent = siklar[mevcutSoruIndex][1];
    btn3.textContent = siklar[mevcutSoruIndex][2];
    btn4.textContent = siklar[mevcutSoruIndex][3];
}


