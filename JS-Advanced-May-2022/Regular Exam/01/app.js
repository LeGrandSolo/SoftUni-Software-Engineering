window.addEventListener("load", solve);

function solve() {
  const makeElem = document.getElementById("make");
  const modelElem = document.getElementById("model");
  const yearElem = document.getElementById("year");
  const fuelElem = document.getElementById("fuel");
  const originalCostElem = document.getElementById("original-cost");
  const sellingPriceElem = document.getElementById("selling-price");
  const tableBody = document.getElementById("table-body");
  const carsList = document.getElementById("cars-list");
  const profitElem = document.getElementById("profit");
  const publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", publishOffer);
  let profit = 0;
  function publishOffer(e) {
    e.preventDefault();
    let make = makeElem.value;
    let model = modelElem.value;
    let year = yearElem.value;
    let fuel = fuelElem.value;
    let originalCost = originalCostElem.value;
    let sellingPrice = sellingPriceElem.value;
    if (
      make !== "" &&
      model !== "" &&
      year !== "" &&
      fuel !== "" &&
      originalCost !== "" &&
      sellingPrice !== "" &&
      Number(originalCost) <= Number(sellingPrice)
    ) {
      makeElem.value = "";
      modelElem.value = "";
      yearElem.value = "";
      fuelElem.value = "";
      originalCostElem.value = "";
      sellingPriceElem.value = "";
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
      <td>${make}</td>
      <td>${model}</td>
      <td>${year}</td>
      <td>${fuel}</td>
      <td>${originalCost}</td>
      <td>${sellingPrice}</td>
      <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
      </td>
      `;
      tableBody.appendChild(tableRow);
      tableRow
        .querySelector(".action-btn.edit")
        .addEventListener("click", () => {
          makeElem.value = make;
          modelElem.value = model;
          yearElem.value = year;
          fuelElem.value = fuel;
          originalCostElem.value = originalCost;
          sellingPriceElem.value = sellingPrice;
          tableRow.remove();
        });
      tableRow
        .querySelector(".action-btn.sell")
        .addEventListener("click", () => {
          tableRow.remove();
          const li = document.createElement("li");
          li.className = "each-list";
          li.innerHTML = `
          <span>${make} ${model}</span>
          <span>${year}</span>
          <span>${Number(sellingPrice) - Number(originalCost)}</span>
          `;
          carsList.appendChild(li);
          profit += (Number(sellingPrice) - Number(originalCost));
          profitElem.textContent = `${profit.toFixed(2)}`;
        });
    }
  }
}
