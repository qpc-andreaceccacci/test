const cursor = document.querySelector('.cursor');
const menuLink = document.querySelectorAll('a');
const hamburgerMenu = document.querySelectorAll('input');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('cursorclick')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('cursorclick')
});

menuLink.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursorhover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursorhover');
  });
})

hamburgerMenu.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursorhover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursorhover');
  });
})