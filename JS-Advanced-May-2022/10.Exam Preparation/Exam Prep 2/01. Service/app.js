window.addEventListener("load", solve);

function solve() {
  const descriptionElem = document.getElementById("description");
  const clientNameElem = document.getElementById("client-name");
  const clientPhoneElem = document.getElementById("client-phone");
  const productType = document.getElementById("type-product");
  const receivedOrders = document.getElementById("received-orders");
  const completedOrders = document.getElementById("completed-orders");
  const clearBtn = document.querySelector(".clear-btn");
  clearBtn.addEventListener("click", () => {
    let divs = completedOrders.querySelectorAll("div");
    for (const div of divs) {
      div.remove();
    }
  });
  document.querySelector("button").addEventListener("click", submit);
  function submit(e) {
    e.preventDefault();
    let description = descriptionElem.value;
    let clientName = clientNameElem.value;
    let clientPhone = clientPhoneElem.value;
    if (!(description === "" || clientName === "" || clientPhone === "")) {
      const div = document.createElement("div");
      div.className = "container";
      const h2 = createElement(
        "h2",
        `Product type for repair: ${productType.value}`
      );
      const h3 = createElement(
        "h3",
        `Client information: ${clientName}, ${clientPhone}`
      );
      const h4 = createElement(
        "h4",
        `Description of the problem: ${description}`
      );
      const btnStr = createElement("button", `Start Repair`, "start-btn");
      const btnFin = createElement("button", `Finish Repair`, "finish-btn");
      btnFin.disabled = true;
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(btnStr);
      div.appendChild(btnFin);
      receivedOrders.appendChild(div);
      btnStr.addEventListener("click", () => {
        btnStr.disabled = true;
        btnFin.disabled = false;
      });
      btnFin.addEventListener("click", () => {
        btnStr.remove();
        btnFin.remove();
        completedOrders.appendChild(div);
      });
      descriptionElem.value = "";
      clientNameElem.value = "";
      clientPhoneElem.value = "";
    }
  }
  function createElement(type, textCont, className) {
    const elem = document.createElement(type);
    elem.textContent = textCont;
    if (type === "button") {
      elem.className = className;
    }
    return elem;
  }
}
