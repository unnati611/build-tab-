function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("pricing").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("nav1").style.backgroundColor = "beige";
  document.getElementById("nav2").style.backgroundColor = "white";
  document.getElementById("nav3").style.backgroundColor = "white";
  document.getElementById("nav4").style.backgroundColor = "white";
}

function pricing() {
  document.getElementById("pricing").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("nav2").style.backgroundColor = "beige";
  document.getElementById("nav1").style.backgroundColor = "white";
  document.getElementById("nav3").style.backgroundColor = "white";
  document.getElementById("nav4").style.backgroundColor = "white";
}
function contact() {
  document.getElementById("pricing").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "block";
  ocument.getElementById("about").style.display = "none";
  document.getElementById("nav3").style.backgroundColor = "beige";
  document.getElementById("nav2").style.backgroundColor = "white";
  document.getElementById("nav1").style.backgroundColor = "white";
  document.getElementById("nav4").style.backgroundColor = "white";
}
function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("pricing").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("nav4").style.backgroundColor = "beige";
  document.getElementById("nav2").style.backgroundColor = "white";
  document.getElementById("nav3").style.backgroundColor = "white";
  document.getElementById("nav1").style.backgroundColor = "white";
}
