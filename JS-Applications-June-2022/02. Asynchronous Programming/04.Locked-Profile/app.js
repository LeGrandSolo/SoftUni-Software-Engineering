async function lockedProfile() {
  const res = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
  const data = await res.json();
  const main = document.querySelector("main");
  document.querySelector(".profile").remove();
  for (let i = 0; i < Object.values(data).length; i++) {
    const value = Object.values(data)[i];
    const profile = document.createElement("div");
    profile.className = "profile";
    profile.innerHTML = `
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${value.username}" disabled readonly />
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${value.email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user1Age" value="${value.age}" disabled readonly />
				</div>
				
				<button>Show more</button> `;
    main.appendChild(profile);
    const hiddenDiv = profile.querySelector(`#user1HiddenFields`);
    const btn = profile.querySelector("button");
    hiddenDiv.style.display = "none";
    btn.addEventListener("click", (e) => {
      const lockCheck = profile.querySelector(`input`);
      if (lockCheck.checked === false) {
        if (hiddenDiv.style.display === "none") {
          hiddenDiv.style.display = "block";
          btn.textContent = "Hide it";
        } else {
          hiddenDiv.style.display = "none";
          btn.textContent = "Show more";
        }
      }
    });
  }
}
