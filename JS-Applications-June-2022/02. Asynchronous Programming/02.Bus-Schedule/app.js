function solve() {
  const infoDiv = document.querySelector("#info span");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  let nextStop = "depot";
  let currStop = "";
  function depart() {
    fetch("http://localhost:3030/jsonstore/bus/schedule/" + nextStop)
      .then((r) => r.json())
      .then((data) => {
        infoDiv.textContent = `Next stop ${data.name}`;
        currStop = data.name;
        nextStop = data.next;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch((_) => {
        infoDiv.textContent = "Error";
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }
  function arrive() {
    infoDiv.textContent = `Arriving at ${currStop}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }
  return {
    depart,
    arrive,
  };
}

let result = solve();