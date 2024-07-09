// let arr = [3, 2, 8, 5, 4, 10, 7, 6];
// // 1. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
// let output1 = ""; //tek setirde ekrana vermek ucun
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     output1 = output1 + i + " ";
//   }
// }
// console.log(output1);
// console.log(typeof output); //deyerler string oldugu ucun toplama deyil yan yana duzme emeliyyati olacaq.
//
//

// 2. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let output2 = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     output2 += arr[i] + " ";
//   }
// }
// console.log(output2);
//
//

// 3. Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let test = arr[0];
// //
// for (i = 1; i < arr.length; i++) {
//   //
//   if (arr[i] > test) {
//     test = arr[i];
//   }
//   //
// }
// console.log(" max deyer: " + test); // eyer max element arr[0] ise de hec if'e girmeden arr[0] capa verilecek
//
//

// 4. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let cutSayilar = [];
// //
// for (i = 0; i, i < arr.length; i++) {
//   //
//   if (arr[i] % 2 == 0) {
//     cutSayilar.push(arr[i]);
//   }
//   //
// }
// console.log("cut sayilar: " + cutSayilar);

// //
// enBoyukCutSayi = cutSayilar[0];
// //
// for (j = 1; j < cutSayilar.length; j++) {
//   //

//   if (cutSayilar[j] > enBoyukCutSayi) {
//     enBoyukCutSayi = cutSayilar[j];
//   }
// }
// console.log("En boyuk cut sayi: " + enBoyukCutSayi);
//
//

// // 5. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let enKicikElement = arr[0];
// let enKicikElementIndexsi = 0;
// //
// for (let i = 1; i < arr.length; i++) {
//   //
//   if (arr[i] < enKicikElement) {
//     //
//     enKicikElement = arr[i];
//     enKicikElementIndexsi = i;
//   }
// }
// console.log("En kicik elementin indexsi: "+enKicikElementIndexsi);
////
// //

// //6. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
// console.log("before: " + arr); //before
// let enKicikElement = arr[0];
// let enKicikElementIndexsi = 0;
// //
// let enBoyukElement = arr[0];
// let enBoyukElementIndexsi = 0;
// //
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > enBoyukElement) {
//     enBoyukElement = arr[i];
//     enBoyukElementIndexsi = i;
//   }
// }
// console.log(
//   "En > elementin deyeri: " +
//     enBoyukElement +
//     " indexsi: " +
//     enBoyukElementIndexsi
// );

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < enKicikElement) {
//     enKicikElement = arr[i];
//     enKicikElementIndexsi = i;
//   }
// }
// console.log(
//   "En < elementin deyeri: " +
//     enKicikElement +
//     " indexsi: " +
//     enKicikElementIndexsi
// );
// let index = arr[enKicikElementIndexsi]; //primitive tip 1 deyer oldugu ucun en < elementi index deyiskeninde saxlayiramF
// //
// arr[enKicikElementIndexsi] = arr[enBoyukElementIndexsi];
// arr[enBoyukElementIndexsi] = index;
// console.log("after: " + arr);
// //
// //

// // 7. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin
// console.log("Before: " + arr);
// //
// //

// let enKicikCutElementIndexsi = 0;
// let enBoyukTekElementIndexsi = 0;

// let enKicikCutElement = Infinity; //baslangic sertimiz daima dogru olur, eyer cut sayi olmamis olsa bele consolda infinty gorunur ve bu da arrayda cut sayi olmadigi menasina gelir
// let enBoyukTekElement = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   //
//   if (arr[i] % 2 == 0 && arr[i] < enKicikCutElement) {
//     enKicikCutElement = arr[i];
//     enKicikCutElementIndexsi = i;
//   }
// }
// console.log(
//   "En < cut elemntin deyeri: " +
//     enKicikCutElement +
//     " indexsi: " +
//     enKicikCutElementIndexsi
// );

// for (let i = 0; i < arr.length; i++) {
//   //
//   if (arr[i] % 2 !== 0 && arr[i] > enBoyukTekElement) {
//     enBoyukTekElement = arr[i];
//     enBoyukTekElementIndexsi=i
//   }
// }
// console.log(
//   "En > tek elemntin deyeri: " +
//     enBoyukTekElement +
//     " indexsi: " +
//     enBoyukTekElementIndexsi
// );

// let index = arr[enKicikCutElementIndexsi];
// arr[enKicikCutElementIndexsi] = arr[enBoyukTekElementIndexsi];
// arr[enBoyukTekElementIndexsi] = index;
// console.log("after: "+arr);
// //
// //

// // 8. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// // let daxilEdilenEded=parseInt(prompt("Test deyerini daxail edin: "));

// console.log("arraydaki ededler: "+arr);
// let daxilEdilenEded = +prompt("Test deyerini daxail edin: ");
// //
// for (let i = 0; i < arr.length; i++) {
//     if (daxilEdilenEded==arr[i]){
//       console.log("Daxil etdiyiniz eded arrayda movcuddur. Daxil edilen eded: "+daxilEdilenEded);
//     }
//     else{
//       console.log("Daxil etdiyiniz eded array-da movcud deyil. Daxil edilen eded: "+daxilEdilenEded)
//     }
// }
// //
// //

// // 9. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.
// console.log("arraydaki ededler: " + arr);

// let enKicikElement = Infinity;
// let enBoyukElement = -Infinity;
// let enBoyukElementIndexsi = 0;
// let enKicikElementIndexsi = 0;
// let ededlerinCemi = 0;
// let ededlerinCemi2 = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > enBoyukElement) {
//     enBoyukElement = arr[i];
//     enBoyukElementIndexsi = i;
//   }
//   if (arr[i] < enKicikElement) {
//     enKicikElement = arr[i];
//     enKicikElementIndexsi = i;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   ededlerinCemi2 += arr[i];
//   if (i !== enBoyukElementIndexsi && i !== enKicikElementIndexsi) {
//     ededlerinCemi += arr[i];
//   }
// }

// console.log(
//   "En > elemntin deyeri: " +
//     enBoyukElement +
//     " indexsi: " +
//     enBoyukElementIndexsi
// );
// console.log(
//   "En < elemntin deyeri: " +
//     enKicikElement +
//     " indexsi: " +
//     enKicikElementIndexsi
// );
// console.log("Ededlerin cemi evvel: " + ededlerinCemi2);
// console.log("ededlerin cemi sonra:" + ededlerinCemi);

//
//
//
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// console.log("'arr' arrayinin elementleri: '" + arr + "' deyerleridir.");

// // 10. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// let indexBool = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "boolean") {
//     indexBool = i;
//   }
// }

// console.log(
//   "Boolen elementinin qonsu elemntleri: " +
//     arr[indexBool + 1] +
//     " ve " +
//     arr[indexBool - 1] +
//     " elementleridir"
// );
// //
// //

// // 11. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
// let uzunSoz = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > uzunSoz.length) {
//     uzunSoz = arr[i]; // qarsilasdirmalar onsuz da string deyerler uzerinde olacagi ucun yeniden string olub olmadigina baxmadim.
//   }
// }
// console.log(uzunSoz);
// //
// //

// // 12. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let hamisiBoyuk = "";
// //
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i].toString().toUpperCase()) {
//     //hem deyer hem de tip olaraq baxir
//     hamisiBoyuk = arr[i];
//     break; //olmasaydi ve LENKARAN dan sonra 2-ci > herfli soz olsaydi onu alacaqdi breal oldugu ucun ilk nedirse onu alib donguyu bitirir.
//   }
// }
// console.log("Butun herfleri > olan soz: " + hamisiBoyuk);
// //
// //

// // 13. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let ikidenArtiqBoyukHerf = arr.filter((sozler) => {
//   if (typeof sozler == "string") {
//     return sozler.match(/[A-Z]/g).length > 2;
//   }
//   return false; //EGer element string deyilse ve ya boyük herf sayısı 2'den artiq deyilse, return false; ifadesi döner ve element filtrlenmez.
// });

// console.log("Ikiden artiq > herf olan sozler: " + ikidenArtiqBoyukHerf);
// //
// //
//

// 14. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method-lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// // console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]
// let yeniArray = arr.slice(0, 1);
// console.log("Yeni yaranan array:"+yeniArray);//0 yazildigi ucun 0.indeksli elementden baslayaraq (0.daxil) 1. indeksli elemente qeder (1. daxil deyil) alib yeniArray adinda yeni1 array yaradir.
// //
// //

// // 15. Write a simple JavaScript function to join all elements of the following array into a string.
// // console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// // console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20
//

// console.log(`* Ile ayrilmis arr arrayi: ${arr.join("*")}`);
// console.log(`/ Ile ayrilmis arr arrayi: ${arr.join("/")}`);
// //
// //

// // 16. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// // Example:
// // // console.log(convert('saLamNecesen)) -> SAlAMnECESEN
// //
// //
// let donder = (sozler) => {
//   let deyer = ""; //deyer deyiskeni function icinde movcuddur ancaq
//   for (let i = 0; i < sozler.length; i++) {
//     if (sozler[i] === sozler[i].toUpperCase()) {
//       deyer = deyer + sozler[i].toLowerCase(); //string deyerler oldugu ucun herfleri yan-yana birlesdirecek.
//     } else {
//       deyer = deyer + sozler[i].toUpperCase();
//     }
//   }
//   return deyer;
// };
// console.log(donder("SalaM DunYa"));
// //
// //

// // 17. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// // console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]
// //
// //

// a = [0, 1, false, 2, undefined, "", 3, null];

// const sil = (deyerler) => {
//   return deyerler.filter((x) => x); //test funksiyasi bu falsy deyerlei almaz.
// };
// console.log("Falsy deyerleri silinmis yeniarray: " + sil(a));
// //
// //

// // 18. Write a method that returns a duplicate-free array.
// // console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// // console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]
// //

// const duplicateSil = (deyer) => [...new Set(deyer)]; //tek parametr oldugu ucun bu cure istifade ettim.
// //... spread operatoru arrayi elementleine genislendirmek ucun new set ise ancaq oxsar olmayan deyerleri tutar.

// console.log(duplicateSil([1, 2, 1, 2, 3]));
// console.log(duplicateSil(["a", 2, "d", 2, "a", 14, 14, "s", false])); // Çık
// //
// //

///////////////////////////////////////////////////////////////
//ikinci defe koda baxmadan yazdigim
//
// const a = (duplicate) => {
//   let seen = {};

//   let uniqeQuery = [];
//   for (i = 0; i < duplicate.length; i++) {
//     if (!seen[duplicate[i]]) {
//       seen[duplicate[i]] = true;
//       uniqeQuery.push(duplicate[i]);
//     }
//   }
//   return uniqeQuery;
// };

// let array = [1, 2, 3, 4, 1, 1, 2, 4, 5];

// console.log(a(array));
//////////////////////////////////////////////////////////////
//
//

// // 19. Write a function that compares two arrays and returns true if they are identical.

/////////////////////////////////////////////////////////////////
//ikinci defe koda baxmadan yazdigim
// let a = [1, 3, 4, 56];
// let b = [1, 3, 4, 5,6];
// console.log(a.length);

// const c = (a1, b1) => {
//   if (a1.length !== b1.length) {
//     return false;
//   }
//   for (i = 0; i < a1.length; i++) {
//     if (a1[i] ==! b1[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(c(a, b));
///////////////////////////////////////////////////////////////////

// const isEqual = (birinciArray, ikinciArray) => {
//   if (birinciArray.length !== ikinciArray.length) {
//     return false;
//   }
//   for (let i = 0; i < birinciArray.length; i++) {
//     if (birinciArray[i] !== ikinciArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); //-> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); //-> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])); // -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])); //-> true
// //
// //

// // 20. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini
// //yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// ////////////////////////////////////////////////////////////////////
// //ikinci defe koda baxmadan yazdigim

// const a = (string, char) => {
//   let index = 0;
//   let varsa = false;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       index += i;
//       varsa = true;
//     }
//   }
//   return varsa ? index : -1;
// };
// console.log(a("salam", "s"));
// /////////////////////////////////////////////////////////////////

// const findCharIndices = (string, character) => {
//   let sumIndices = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       sumIndices += i;
//     }
//   }
//   return sumIndices === 0 ? -1 : sumIndices; //Eger sumIndices deyişkeni 0 ise, bu demekdir ki, char string içinde yoxdur,
//   // o zaman -1 döndürülür. Eks halda, sumIndices deyişkeninin deyeri döndürülür, yeni charin oldugu indekslerin cemi.
// };

// // console.log(findCharIndices("salam", "a"));
// console.log(findCharIndices("salam", "a"));
// //
// //

// // 21. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən
//göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini
//3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.

// // ////////////////////////////////////////////////////////////////////
// // //ikinci defe koda baxmadan yazdigim
// const newFunc = (array, index, string) => {
//   if (index >= array.length) {
//     array.push(string);
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (index === i) {
//       array.splice(index, 0, string);
//     }
//   }
//   return array;
// };
// console.log(newFunc(["a", "salam", "b", "world"], 2, "dev"));
// /////////////////////////////////////////////////////////////////
//
// //
// function addStringAtIndex(array, index, str) {
//   if (index >= array.length) {
//     array.push(str);
//   } else {
//     array.splice(index, 0, str);
//   }
//   return array;
// }
// console.log(addStringAtIndex(["a", "salam", "b", "world"], 3, "dev"));
// //
// //

// // 22. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir
//string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// ////////////////////////////////////////////////////////////////////
// // //ikinci defe koda baxmadan yazdigim
// const birlesdir = (array1, array2, char) => {
//   let f = array1.concat(array2);
//   return f.join(char);
// };
// console.log(birlesdir([1, 2], [3, 4], "*"));
// //////////////////////////////////////////////////////////////////
// //
// //

// function mergeArraysToString(arr1, arr2, char) {
//   let result = arr1.join(char) + char + arr2.join(char);
//   return result;
// }

// console.log(mergeArraysToString([1, 2], [3, 4], "*"));
// //
// //

// // 23.
// //   { name: "Ali", scores: [90, 85, 92] },
// //   { name: "Davud", scores: [100, 100, 100] },
// //   { name: "Mammal", scores: [75, 80, 85] },
// //   { name: "Camil", scores: [90, 95, 85] },
// // ];

// // #studentlərin ortalama score'nu yeni bir arrayda yığın
////////////////////////////////////////////////////////////////////////////
// // //ikinci defe koda baxmadan yazdigim

let telebeler = [
  { ad: "Eli", score: [90, 85, 92] },
  { ad: "Davud", score: [90, 85, 92] },
  { ad: "Mamal", score: [100, 100, 100] },
  { ad: "Kamil", score: [90, 95, 85] },
];
for(let i=0;i<telebeler.length;i++){
  telebeler[i].score.map
}

console.log(telebeler[0].score[1]);


// let a=[4,5,6,7,8,9,10,11]
// let k=a.map(i=>{
//   return i*2
// })
// console.log(k);

// let x=a.filter(i=>{
//   return i>=8
// })
// console.log(x);
// //
// //
// //
let students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Davud", scores: [100, 100, 100] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
];

let averages = students.map((student) => {
  let sum = student.scores.reduce((total, score) => total + score, 0);
  return { name: student.name, average: sum / student.scores.length };
});

console.log(averages);
// //
// //

// // 24.

// // const webTechs = [
// //   "HTML",
// //   "CSS",
// //   "JS",
// //   "React",
// //   "JS",
// //   "Redux",
// //   "Node",
// //   "JS",
// //   "MongDB",
// // ];

// // # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın
// //
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];

// const filteredTechs = webTechs.filter((tech) => tech.length > 4);

// console.log(filteredTechs);
// //
// //

// // 25.# product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];

// products.sort((a, b) => a.price - b.price);

// console.log(products);
// //
// //

// // 26. countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// let filteredCountries = countries.filter((country) => {
//   let firstChar = country.charAt(0).toLowerCase(); // Olke adının ilk herfini kiçik herfe çevir
//   let lastChar = country.charAt(country.length - 1).toLowerCase(); // Olke adının son herfini kivk herfe cevir
//   return firstChar === "a" && lastChar === "a";
// });

// console.log(filteredCountries);
