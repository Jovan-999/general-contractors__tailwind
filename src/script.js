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

const expertise = document.querySelector('.expertise');

for (var i = 0; i < expertise.children.length; i++) {
  if (i >= 8) {
    expertise.children[i].classList.add('hidden');
    expertise.children[i].classList.add('hidden-item');
  }
}

const button = document.querySelector('.toggle-button');
const hiddenItems = document.querySelectorAll('.hidden-item');
let isHidden = true;
button.addEventListener('click', () => {
  button.textContent = isHidden ? 'View less' : 'View more';
  isHidden = !isHidden;
  hiddenItems.forEach((item) => item.classList.toggle('hidden'));
});
