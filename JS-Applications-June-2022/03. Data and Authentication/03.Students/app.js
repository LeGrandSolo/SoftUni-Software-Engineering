async function solve() {
  const tbody = document.querySelector("tbody");
  const url = "http://localhost:3030/jsonstore/collections/students";
  const form = document.getElementById("form");
  loadStudents(url, tbody);
  form.addEventListener("submit", submit);
  async function submit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const dataForm = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        facultyNumber: formData.get("facultyNumber"),
        grade: formData.get("grade"),
      };
      const r = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!r.ok) {
        throw new Error(r.statusText);
      }
      await loadStudents(url, tbody);
    } catch (error) {
      alert(error.message);
    }
  }
}
solve();
async function loadStudents(url, tbody) {
  tbody.replaceChildren();
  const res = await fetch(url);
  const data = await res.json();
  Object.values(data).forEach((el) => {
    const tr = document.createElement("tr");
    console.log(el);
    Object.entries(el).forEach((info) => {
      if (info[0] !== "_id") {
        const td = document.createElement("td");
        td.textContent = info[1];
        tr.appendChild(td);
      }
    });
    tbody.appendChild(tr);
  });
}
