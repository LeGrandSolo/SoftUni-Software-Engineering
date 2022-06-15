function solve() {
  let text = [...document.getElementById('input').value.split('.').filter((x) =>x.length > 0 )];
  let output = document.getElementById('output');
  console.log(text);
  while (text.length > 0) {
    let textForParag = text.splice(0, 3).join('. ') + '.';
    output.innerHTML += `<p>${textForParag}</p>`;
  }
}