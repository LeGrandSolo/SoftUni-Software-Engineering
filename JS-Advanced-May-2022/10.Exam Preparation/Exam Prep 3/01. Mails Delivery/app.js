function solve() {
  const recipientNameElem = document.getElementById("recipientName");
  const titleElem = document.getElementById("title");
  const messageElem = document.getElementById("message");
  const mailsList = document.querySelector(".list-mails #list");
  const sentMails = document.querySelector(".sent-mails .sent-list");
  const deletedMails = document.querySelector(".trash .delete-list");
  document.getElementById("add").addEventListener("click", addMail);
  document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault();
    recipientNameElem.value = "";
    titleElem.value = "";
    messageElem.value = "";
  });
  function addMail(e) {
    e.preventDefault();
    let recipientName = recipientNameElem.value;
    let title = titleElem.value;
    let message = messageElem.value;
    if (recipientName !== "" && title !== "" && message !== "") {
      recipientNameElem.value = "";
      titleElem.value = "";
      messageElem.value = "";
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipientName}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit"id="send">Send</button>
            <button type="submit"id="delete">Delete</button>
        </div>
        `;
      mailsList.appendChild(li);
      li.querySelector("#send").addEventListener("click", () => {
        li.innerHTML = `
        <span>To: ${recipientName}</span>
        <span>Title: ${title}</span>
        <div class="btn">
             <button type="submit"class="delete">Delete</button>
        </div>`;
        sentMails.appendChild(li);
        li.querySelector(".delete").addEventListener("click", () => {
          li.innerHTML = `
          <span>To: ${recipientName}</span>
          <span>Title: ${title}</span>`;
          deletedMails.appendChild(li);
        });
      });
      li.querySelector("#delete").addEventListener("click", () => {
        li.innerHTML = `
        <span>To: ${recipientName}</span>
        <span>Title: ${title}</span>`;
        deletedMails.appendChild(li);
      });
    }
  }
}
solve();
