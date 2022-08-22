// Tính thể tích hình cầu

function tinhTTHCau(r) {
  return (3 / 4) * 3.14 * r ** 3;
}

console.log(tinhTTHCau(8));

//XỬ LÝ CHUỖI

// Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ

let str = "coco in the undergroud";

console.log(str.split(" "));

function uppercaseFirstChar(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(str.split(" ").map(uppercaseFirstChar));

// Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case

let xyz = "COCO iN tHe UNdeRGrOUd"

console.log(xyz.split(" "));

function toLowerCaseAll(xyz) {
    return xyz.toLowerCase();
}

console.log(xyz.split(" ").map(toLowerCaseAll).join("-"));

// Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không


