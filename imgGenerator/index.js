const wrapperImg = document.querySelector(".image-wrapper");
const moreImg = document.querySelector(".more-images");

let count = 1;

function fetchRandomImg(getCount) {
  for (let i = getCount; i < getCount + 4; i++) {
    let imgElement = document.createElement("img");
    imgElement.src = `https://picsum.photos/300?random=${i}`;
    wrapperImg.appendChild(imgElement);
  }
}

fetchRandomImg(count);

moreImg.addEventListener("click", () => {
  fetchRandomImg((count += 5));
});
