let line1, line2, line3, i, j, temp;

line1 = prompt('Введите первое слово:');
line2 = prompt('Введите второе слово:');
line3 = prompt('Введите третье слово:');

let arr = [line1, line2, line3];

for (i = 0; i < arr.length; ++i) {
    j = Math.floor(Math.random() * (i + 1));
    console.log(Math.random());
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
document.write(arr);
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