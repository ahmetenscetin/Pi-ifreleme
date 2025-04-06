// Pi sayısı basamakları
const piDigits = "1415926535";

// Şifreleme fonksiyonu
function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const piDigit = parseInt(piDigits[i % piDigits.length]);
        encryptedText += String.fromCharCode(charCode + piDigit);
    }
    return encryptedText;
}

// Çözme fonksiyonu
function decrypt(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const piDigit = parseInt(piDigits[i % piDigits.length]);
        decryptedText += String.fromCharCode(charCode - piDigit);
    }
    return decryptedText;
}

// Kopyala fonksiyonu
function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
}

document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encrypted = encrypt(inputText);
    document.getElementById('resultText').value = encrypted;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decrypted = decrypt(inputText);
    document.getElementById('resultText').value = decrypted;
});

document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
