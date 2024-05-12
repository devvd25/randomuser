const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const special = "I";

function generateCode() {
    let code = "";
    let randomChar;

    // Đảm bảo chữ cái luôn đứng đầu
    randomChar = lowercase[Math.floor(Math.random() * lowercase.length)];
    code += randomChar;

    for (let i = 0; i < 14; i++) {
        let randomSet = Math.floor(Math.random() * 3);

        switch (randomSet) {
            case 0:
                randomChar = lowercase[Math.floor(Math.random() * lowercase.length)];
                break;
            case 1:
                randomChar = uppercase[Math.floor(Math.random() * uppercase.length)];
                break;
            case 2:
                randomChar = digits[Math.floor(Math.random() * digits.length)];
                break;
        }

        // Kiểm tra xem ký tự đã được sử dụng hay chưa
        if (code.indexOf(randomChar) === -1) {
            code += randomChar;
        } else {
            i--; // Thử lại nếu ký tự đã được sử dụng
        }
    }

    // Đảm bảo có ký tự "I"
    if (!code.includes(special)) {
        let randomIndex = Math.floor(Math.random() * 14) + 1; // Tránh vị trí đầu tiên
        code = code.substring(0, randomIndex) + special + code.substring(randomIndex);
    }

    document.getElementById("code-display").innerText = code;
}
