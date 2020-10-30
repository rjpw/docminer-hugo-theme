(function() {

  var menu = document.querySelector("aside.book-menu nav");
  
  if (menu) {
    addEventListener("beforeunload", function(event) {
      localStorage.setItem("menu.scrollTop", menu.scrollTop);
    });
    menu.scrollTop = localStorage.getItem("menu.scrollTop");
  } else {
    console.log("no menu");
  }

})();
