async function solution() {
  const res = await fetch(
    `http://localhost:3030/jsonstore/advanced/articles/list`
  );
  const data = await res.json();
  const main = document.getElementById("main");
  for (const token of data) {
    const accordion = document.createElement("div");
    accordion.className = "accordion";
    const head = document.createElement("div");
    head.className = "head";
    const span = document.createElement("span");
    span.textContent = `${token.title}`;
    const btn = document.createElement("button");
    btn.classList.add("button");
    btn.id = `${token._id}`;
    btn.textContent = "More";
    head.append(span, btn);
    const extra = document.createElement("div");
    extra.className = "extra";
    extra.style.display = "none";
    accordion.append(head, extra);
    main.appendChild(accordion);
    btn.addEventListener("click", moreOnclick.bind(btn, extra));
  }
  async function moreOnclick(extra) {
    if (extra.style.display === "none") {
      const res = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${this.id}`
      );
      const data = await res.json();
      const p = document.createElement('p');
      p.textContent = data.content;
      extra.appendChild(p);
      extra.style.display = "block";
      this.textContent = "Less";
    } else {
      extra.style.display = "none";
      this.textContent = "More";
    }
  }
}
solution();
