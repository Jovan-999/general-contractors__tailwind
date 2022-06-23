document.getElementById('openBtn').addEventListener('click', open);
function open() {
  document.getElementById('mySidenav').style.width = '70%';
  document.getElementById('overlay').style.display = 'block';
}
document.getElementById('closeBtn').addEventListener('click', close);
function close() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('overlay').style.display = 'none';
}
document.getElementById('overlay').addEventListener('click', closeOverlay);
function closeOverlay() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('overlay').style.display = 'none';
}
