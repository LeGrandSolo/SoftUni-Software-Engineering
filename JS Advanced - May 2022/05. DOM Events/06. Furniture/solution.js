function solve() {
  document.querySelector('button').addEventListener('click', addItems)
  function addItems(e) {
    let input = document.querySelector('#exercise textarea');
    let arrOfObjItems = JSON.parse(input.value);
    for (const objItem of arrOfObjItems) {
      let { name, img, price, decFactor } = objItem;
      let tr = document.createElement('tr');
      document.querySelector('tbody').appendChild(tr);
      createImgElem(tr, img);
      let restArr = [name, price, decFactor];
      restArr.forEach(x => restElems(tr, x));
      function createImgElem(tr, img) {
        let tdImg = document.createElement('td');
        let imgElem = document.createElement('img');
        imgElem.src = img;
        tdImg.appendChild(imgElem);
        tr.appendChild(tdImg);
      }
      function restElems(tr, p1) {
        let tdp1 = document.createElement('td');
        let p1Elem = document.createElement('p');
        p1Elem.textContent = p1;
        tdp1.appendChild(p1Elem);
        tr.appendChild(tdp1);
      }
      let checkBox = document.createElement('input');
      let td = document.createElement('td');
      checkBox.type = 'checkbox';
      td.appendChild(checkBox);
      tr.appendChild(td);
    }
  }
  let buyBtn = document.querySelectorAll('button')[1];
  buyBtn.addEventListener('click', buy);
  function buy(e) {
    let tableRows = document.querySelectorAll('tbody tr');
    let furnitureBought = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let furnitureAmount = 0;
    for (const row of tableRows) {
      let isChecked = row.querySelector('input').checked;
      if (isChecked) {
        let info = row.querySelectorAll('td p');
        console.log(info);
        furnitureBought.push(info[0].textContent);
        totalPrice += Number(info[1].textContent);
        totalDecFactor += Number(info[2].textContent);
        furnitureAmount++;
      }
    }
    let avrDecFactor = totalDecFactor / furnitureAmount;
    if(Number.isNaN(avrDecFactor)) avrDecFactor= 0;
    let textArea = document.querySelectorAll('textarea')[1];
    textArea.textContent = `Bought furniture: ${furnitureBought.join(', ')}\r\nTotal price: ${totalPrice.toFixed(2)}\r\nAverage decoration factor: ${avrDecFactor}`;
  }
}