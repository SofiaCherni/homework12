let  i, j;

let arr = [];

arr.push(prompt("Введите первое слово: "));
arr.push(prompt("Введите второе слово: "));
arr.push(prompt("Введите третье слово: "));

for (i = 0; i < arr.length; ++i) {
    j = Math.floor(Math.random() * (i + 1));
        [arr[i],arr[j]] = [arr[j], arr[i]];
}

document.write(arr.join(" "));
document.write("<br />");


let numb = prompt('Введите пятизначное число:', '12345');
let n = 5;

if (numb.length == n) {
    for (i = 0; i < n; i++) {
        numb += i;
        document.write(numb[i] + "&nbsp;&nbsp;");
    }
} else {
    alert("Вы ввели не правильное количество символов");
}