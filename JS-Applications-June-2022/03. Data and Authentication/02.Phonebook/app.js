function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";
  const phonebook = document.getElementById("phonebook");
  document.getElementById("btnLoad").addEventListener("click", load);
  document.getElementById("btnCreate").addEventListener("click", create);
  phonebook.addEventListener("click", delLi);
  async function load() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      phonebook.replaceChildren();
      Object.values(data).forEach((val) => {
        const li = document.createElement("li");
        const btnDel = document.createElement("button");
        btnDel.setAttribute("id", val._id);
        li.textContent = `${val.person}: ${val.phone}`;
        btnDel.textContent = "Delete";
        li.appendChild(btnDel);
        phonebook.appendChild(li);
      });
    } catch (error) {
      alert(error.message);
    }
  }
  function create() {
    const person = document.getElementById("person");
    const phone = document.getElementById("phone");
    const data = {
      person: person.value,
      phone: phone.value,
    };
    person.value = "";
    phone.value = "";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      load();
      return res.json();
    });
  }
  function delLi(e) {
    if (e.target.nodeName === "BUTTON") {
      fetch(url + "/" + e.target.id, {
        method: "DELETE",
      }).then((res) => {
        load();
        return res.json();
      });
    }
  }
}
attachEvents();
