function search() {
   const searchedTxt = document.getElementById('searchText').value;
   let pattern = new RegExp(searchedTxt);
   let elements = Array.from(document.getElementById('towns').children);
   elements.forEach(x => {
      x.style.textDecoration = '';
      x.style.fontWeight = '';
   });
   let numOfMatches = 0;
   for (const element of elements) {
      let match = pattern.exec(element.textContent);
      console.log(element.textContent, match);
      if(match){
         numOfMatches++;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      }
   }
   document.getElementById('result').textContent = `${numOfMatches} matches found`;
}
