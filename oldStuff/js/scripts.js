
$(function(){
  $("#nav-placeholder").load("./nav.html");
});

if(document.documentElement.className === ""){
  setTheme("dark-theme");
};

function setTheme(name) {
  localStorage.setItem("theme", name);
  document.documentElement.className = name;
};

function toggleTheme() {
  if (localStorage.getItem("theme") === "dark-theme") {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
};
