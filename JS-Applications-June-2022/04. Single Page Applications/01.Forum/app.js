async function solve() {
  document.querySelector(".public").addEventListener("click", publish);
  document.querySelector(".newTopic").addEventListener("submit", clearForm);
  const newTopicDiv = document.querySelector(".new-topic-border");
  const main = document.querySelector("main");
  document.querySelector("a").addEventListener("click", async () => {
    main.replaceChildren(newTopicDiv);
    await loadPosts();
  });
  await loadPosts();
  function clearForm(e) {
    e.preventDefault();
    e.target.reset();
  }
  async function publish(e) {
    const formData = new FormData(e.target.parentNode.parentNode);
    const data = {
      topicName: formData.get("topicName"),
      username: formData.get("username"),
      postText: formData.get("postText"),
    };
    if (data.topicName !== "" && data.username !== "" && data.postText !== "") {
      const res = await fetch(
        "http://localhost:3030/jsonstore/collections/myboard/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      loadPosts();
    }
  }
  async function loadPosts() {
    main.replaceChildren(newTopicDiv);
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/myboard/posts"
    );
    const data = await res.json();
    Object.entries(data).forEach((entry) => {
      const topicContainer = document.createElement("div");
      topicContainer.className = "topic-container";
      topicContainer.innerHTML = `
          <div class="topic-name-wrapper">
            <div class="topic-name">
              <a href="#" class="normal">
                <h2>${entry[1].topicName}</h2>
              </a>
              <div class="columns">
                <div>
                  <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                  <div class="nick-name">
                    <p>Username: <span>${entry[1].username}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
      topicContainer
        .querySelector("h2")
        .addEventListener("click", showTopic.bind(topicContainer, entry));
      main.appendChild(topicContainer);
    });
  }
  async function showTopic(entry) {
    this.className = "comment";
    const comment = `
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${entry[1].username}</span> posted on <time>2020-10-10 12:08:28</time></p>
        <p class="post-content">${entry[1].postText}</p>
    </div>
    `;
    this.innerHTML = comment;
    const answerComment = document.createElement("div");
    answerComment.className = "answer-comment";
    answerComment.innerHTML = `
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
    `;
    await loadComments(entry[0], this, comment);
    const form = answerComment.querySelector("form");
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const formData = new FormData(form);
      const data = {
        username: formData.get("username"),
        comment: form.querySelector("#comment").value,
      };
      const res = await fetch(
        `http://localhost:3030/jsonstore/collections/myboard/comments/${entry[0]}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await loadComments(entry[0], this, comment);
    });
    main.replaceChildren(this, answerComment);
  }
  async function loadComments(id, node, comment) {
    node.innerHTML = comment;
    try {
      const res = await fetch(
        `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`
      );
      const data = await res.json();
      Object.values(data).forEach((val) => {
        const usrComment = document.createElement("div");
        usrComment.className = "user-comment";
        usrComment.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${val.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                    <div class="post-content">
                        <p>${val.comment}</p>
                    </div>
                </div>
            </div>
            `;
        node.appendChild(usrComment);
      });
    } catch (error) {}
  }
}
solve();
