(function() {

  var menu = document.querySelector("#sidebar");
  
  if (menu) {
    addEventListener("beforeunload", function(event) {
      localStorage.setItem("menu.scrollTop", menu.scrollTop);
    });
    menu.scrollTop = localStorage.getItem("menu.scrollTop");
  } else {
    console.log("no menu");
  }

})();
