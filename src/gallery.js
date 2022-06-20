// window.addEventListener('click', outsideClick);

function openNav() {
  document.getElementById('mySidenav').style.width = '70%';
  document.getElementById('main').style.marginLeft = '0%';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}

// // Close If Outside Click
// function outsideClick(e) {
//   if (e.target == mySidenav) {
//     mySidenav.style.width = '0';
//   }
// }

const showMoreBtn = document.querySelector('.show-more');
const text = document.querySelector('.show-more-pictures');

showMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('more-pictures-show-more');
  if (showMoreBtn.innerHTML === 'View More') {
    showMoreBtn.innerHTML = 'View Less';
  } else {
    showMoreBtn.innerHTML = 'View More';
  }
});
