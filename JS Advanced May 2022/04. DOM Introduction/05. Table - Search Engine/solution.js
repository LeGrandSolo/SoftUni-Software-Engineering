function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchBarValue = new RegExp(document.getElementById('searchField').value);
      let cells = Array.from(document.getElementsByTagName('tbody')[0].children);
      cells.forEach(cell => {
         cell.className = '';
      });
      for (const cell of cells) {
         let match = searchBarValue.exec(cell.textContent);
         if (match) {
            cell.className = 'select';
         }
      }
   }
}