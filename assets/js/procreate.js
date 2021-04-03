function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginTop = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginTop= "0";
    document.body.style.backgroundColor = "white";
  }