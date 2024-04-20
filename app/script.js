var a = document.querySelectorAll("h2");
console.log(a);

//h3 elementini seçib üzərində əməliyyat aparmaq istəyiriksə
var a = document.querySelectorAll("h3");
a[0].style.color = "green";

//funksiyanın içərisində css-də olduğu kimi .sinif yazmalıyıq.
var a = document.querySelectorAll(".a");
a[0].style.color = "yellow";

//For operatorundan istifade
var a = document.querySelectorAll("h4");
for (i = 0; i < a.length; i++) {
  a[i].style.color = "green";
}
