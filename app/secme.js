//For operatorundan istifade
var a = document.querySelectorAll("h4");
for (i = 0; i < a.length; i++) {
  a[i].style.color = "green";
}

//sinif adlarına görə seçmə aparmaq üçün istifadə
var b = document.getElementsByClassName("b");
for (i = 0; i < b.length; i++) {
  b[i].style.color = "blue";
}

//Elementləri name atributuna görə seçmək üçün
var c = document.getElementsByName("yellow");
for (i = 0; i < c.length; i++) {
  c[i].style.color = "yellow";
}
