const userList = document.querySelector(".user-list");
const loader = document.querySelector(".loader");
const scrollToTop = document.querySelector(".Scroll-to-Top");
const scrollToBottom = document.querySelector(".Scroll-to-Bottom");

function showLoader() {
  loader.classList.add("show-loader");
  userList.classList.add("hide-user-list");
}
function removeLoader() {
  loader.classList.remove("show-loader");
  userList.classList.remove("hide-user-list");
}
async function fetchUserList() {
  showLoader();
  const response = await fetch("https://dummyjson.com/users");
  const result = await response.json();

  if (result && result.users) displayUserList(result.users);
  console.log(result);
  removeLoader();
}

fetchUserList();

function displayUserList(getUsers) {
  console.log(getUsers);
  userList.innerHTML = getUsers
    .map(
      (userItems) => `
  <li>
  <p>${userItems.firstName} ${userItems.lastName}</p>
  </li>`
    )
    .join(" ");
}

scrollToBottom.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
