// const down = document.getElementById("box11")


// function toggleMenu(){
//     let navItems = document.getElementById('nav-items')
//     if (navItems.style.display === 'none') {
//         navItems.style.display = 'block';
//         down.style.color = "red"
   

//     } else {
//         navItems.style.display = 'none';
//     }
// }

















function toggleMenu() {
const down = document.getElementById("box11");

  let navItems = document.getElementById('nav-items');
  if (navItems.style.display === 'none') {
    navItems.style.display = 'block';
    down.style.marginTop = "110px";

    
  } else {
    navItems.style.display = 'none';
    down.style.marginTop = "0px";

  }
}


toggleMenu()