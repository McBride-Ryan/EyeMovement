// Get the element with the class name 'ball' in HTML
const balls = document.getElementsByClassName('ball');

// On the mouse move pass in an event to listen where the mouse moves within the screen window
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

// Now we have a hold of our variable, we can loop through and update the style to transform our image
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
