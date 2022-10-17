const containerEl = document.querySelector('.container');

containerEl.addEventListener('mouseover', (event) => {
   const x = event.pageX - containerEl.offsetLeft;
   const y = event.pageY - containerEl.offsetTop;

   containerEl.style.setProperty('--xPos', x + 'px');
   containerEl.style.setProperty('--yPos', y + 'px');
});