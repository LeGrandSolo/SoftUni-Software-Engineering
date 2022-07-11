function getInfo() {
  const stopId = document.querySelector("#stopId");
  const ulBuses = document.getElementById("buses");
  const stopName = document.getElementById("stopName");
  fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
    .then((r) => r.json())
    .then((data) => {
      stopName.textContent = data.name;
      const buses = data.buses;
      for (const bus in buses) {
        const li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
        ulBuses.appendChild(li);
      }
    })
    .catch((e) => (stopName.textContent = "Error"));
}
