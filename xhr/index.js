const postListContainer = document.querySelector(".posts-list-container");

// FETCH USING XHR

// function fetchUsingXHR() {
//   const XHR = new XMLHttpRequest();
//   XHR.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   XHR.responseType = "json";
//   XHR.send();
//   XHR.onload = () => {
//     if (XHR.status == 200) {
//       displayResults(XHR.response);
//     } else {
//       console.log("some error occcured");
//     }
//   };
// }

// function displayResults(posts) {
//     postListContainer.innerHTML = posts
//       .map(
//         (postItem) => `
//           <div class="post-item">
//           <h3>${postItem.title}</h3>
//           <p>${postItem.body}</p>
//           </div>`
//       )
//       .join(" ");
//   }

// fetchUsingXHR();

// FETCH USING  fetchUsingFetchMethod

// function fetchUsingFetchMethod() {
//   const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });

//   fetchRequest
//     .then((response) => response.json())
//     .then((result) => displayResults(result))
//     .catch((e) => console.log(e));
// }

// function displayResults(posts) {
//   postListContainer.innerHTML = posts
//     .map(
//       (postItem) => `
//               <div class="post-item">
//               <h3>${postItem.title}</h3>
//               <p>${postItem.body}</p>
//               </div>`
//     )
//     .join(" ");
// }

// fetchUsingFetchMethod();

// fetch using ASYNC AWAIT

// async function fetchUsingAsyncAwait() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const result = await response.json();
//   displayResults(result);
// }

// function displayResults(posts) {
//   postListContainer.innerHTML = posts
//     .map(
//       (postItem) => `
//           <div class="post-item">
//           <h3>${postItem.title}</h3>
//           <p>${postItem.body}</p>
//           </div>`
//     )
//     .join(" ");
// }

// fetchUsingAsyncAwait();
