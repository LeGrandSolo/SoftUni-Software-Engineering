function solve() {
  let text = document.getElementById('text').value;
  let modifier = document.getElementById('naming-convention').value;
  text = text.toLocaleLowerCase().split(' ');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].substring(0, 1).toLocaleUpperCase() + text[i].substring(1,);
  }
  if (modifier === "Camel Case") {
    text[0] = text[0].substring(0, 1).toLocaleLowerCase() + text[0].substring(1,);
  } else if (modifier !== "Pascal Case") {
    text = 'Error!';
    document.getElementById('result').textContent = text;
    return null;
  }
  document.getElementById('result').textContent = text.join('');
}