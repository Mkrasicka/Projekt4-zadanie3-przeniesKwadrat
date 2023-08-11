 const div = document.querySelector('div');
 let divX = 150;
 let divY = 50;
 div.style.top = `${divX}px`;
 div.style.left = `${divY}px`;

 let drawDiv = false;
 let insertDivX;
 let insertDivY;


 div.addEventListener('mousedown', function(e) {
  div.style.backgroundColor = 'gray';
  drawDiv = !drawDiv;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;


 });

 div.addEventListener('mousemove', function(e) {
  if (drawDiv) {
  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
  div.style.top = `${divX }px`;
  div.style.left = `${divY }px`;
  }
 });


 div.addEventListener('mouseup', function() {
  div.style.backgroundColor = 'black';

  drawDiv = !drawDiv;
 });
