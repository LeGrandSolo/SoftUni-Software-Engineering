function attachEvents() {
  const main = document.querySelector("#main");
  main.querySelector("#submit").addEventListener("click", submit);
  main.querySelector("#refresh").addEventListener("click", refresh);
  async function submit() {
    const author = main.querySelector("[name=author]");
    const content = main.querySelector("[name=content]");
    const data = {
      author: author.value,
      content: content.value,
    };
    try {
      const res = await fetch("http://localhost:3030/jsonstore/messenger", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function refresh() {
    const textArea = main.querySelector("#messages");
    try {
      const res = await fetch("http://localhost:3030/jsonstore/messenger");
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      textArea.value = "";
      const data = await res.json();
      Object.values(data).forEach((mess) => {
        if (textArea.value !== '') {
            textArea.value += '\n';
        }
        textArea.value += `${mess.author}: ${mess.content}`;
      });
    } catch (error) {
      alert(error.message);
    }
  }
}

attachEvents();
