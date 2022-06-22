function openNav() {
  document.getElementById('mySidenav').style.width = '70%';
  document.getElementById('overlay').style.display = 'block';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlay');
}

const showMoreBtn = document.querySelector('.button-show-more');
const text = document.querySelector('.show-more-pictures');

showMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('more-pictures-show-more');
  if (showMoreBtn.innerHTML === 'View More') {
    showMoreBtn.innerHTML = 'View Less';
  } else {
    showMoreBtn.innerHTML = 'View More';
  }
});
