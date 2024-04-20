//Burada sadəcə xüsusiyyətlərdən sonra funksiyanın adını yazırıq və : qoyuruq. Sonra isə sadəcə funksiyanı yazırıq.

let insan = {
  ad: "Orxan",
  soyad: "Abdullayev",
  yas: 38,
  tevellud: function () {
    return 2023 - this.yas;
  },
};
document.write(insan.tevellud());
console.log(insan);
document.write("<br>");
//-----------------------------------------

//Burada tam adı götürmək üçün də kiçik bir funksiya yaza bilərik:
var man = {
  ad: "Cavid",
  soyad: "Abdullayev",
  yas: 36,
  tevellud: function () {
    return 2023 - this.yas;
  },
  tam: function () {
    return this.ad + " " + this.soyad;
  },
};
document.write(man.tam());
console.log(man);
document.write("<br>");
//------------------------------------------

//Obyekt daxilində yaratdığımız bir xüsusiyyəti silmək üçün delete operatoru
var person = { ad: "Arzu", soyad: "Cavansirova", yas: 30 };
delete person.yas;
document.write(person.yas);
console.log(person);
document.write("<br>");

//------------------------------------------------

//Obyekti aşağıdakı şəkildə də yarada bilərik:
function people(yas, boy, ceki) {
  this.yas = yas;
  this.boy = boy;
  this.ceki = ceki;
}
var people1 = new people(24, 180, 80);
document.write(people1.boy);

var people2 = new people(25, 175, 75);
document.write(people2.boy);

console.log(people1);
console.log(people2);
