window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("publish-btn");
  const postTitle = document.getElementById("post-title");
  const postCategory = document.getElementById("post-category");
  const postContent = document.getElementById("post-content");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");
  const btnClear = document.getElementById("clear-btn");
  publishBtn.addEventListener("click", addPostToReviewList);
  function addPostToReviewList(e) {
    e.preventDefault();
    if (
      !(
        postTitle.value === "" ||
        postCategory.value === "" ||
        postContent.value === ""
      )
    ) {
      const li = document.createElement("li");
      li.className = "rpost";
      const article = document.createElement("article");
      const header = addElement("h4", postTitle.value);
      const p1 = addElement("p", `Category: ${postCategory.value}`);
      const p2 = addElement("p", `Content: ${postContent.value}`);
      article.appendChild(header);
      article.appendChild(p1);
      article.appendChild(p2);
      const btnEdit = addElement("button", `Edit`, "action-btn edit");
      const btnApprove = addElement("button", `Approve`, "action-btn approve");
      li.appendChild(article);
      li.appendChild(btnEdit);
      li.appendChild(btnApprove);
      reviewList.appendChild(li);
      postTitle.value = "";
      postCategory.value = "";
      postContent.value = "";
      btnEdit.addEventListener("click", () => {
        postTitle.value = header.textContent;
        postCategory.value = p1.textContent.substring(10);
        postContent.value = p2.textContent.substring(9);
        li.remove();
      });
      btnApprove.addEventListener("click", () => {
        publishedList.appendChild(li);
        btnEdit.remove();
        btnApprove.remove();
      });
      function addElement(elementType, textCont, className) {
        const newElem = document.createElement(elementType);
        newElem.textContent = textCont;
        if (elementType === "button") {
          newElem.className = className;
        }
        return newElem;
      }
    }
  }
  btnClear.addEventListener("click", () => {
    while (publishedList.lastChild) {
      publishedList.lastChild.remove();
    }
  });
}
