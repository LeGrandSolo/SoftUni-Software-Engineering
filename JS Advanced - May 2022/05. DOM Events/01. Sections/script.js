function create(words) {
   const content = document.getElementById('content');
   for (const word of words) {
      let newDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      newDiv.appendChild(p);
      newDiv.addEventListener('click', () => p.style.display = 'block');
      content.appendChild(newDiv);
   }
}