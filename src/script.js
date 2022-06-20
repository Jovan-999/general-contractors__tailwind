// window.addEventListener('click', outsideClick);

function openNav() {
  document.getElementById('mySidenav').style.width = '70%';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.body.style.backgroundColor = 'white';
}

// // Close If Outside Click
// function outsideClick(e) {
//   if (e.target == mySidenav) {
//     mySidenav.style.width = '0';
//   }
// }
