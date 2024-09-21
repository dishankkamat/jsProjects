const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQrCodeBtn = document.querySelector(".generate-qr-code");
const errorMsgText = document.querySelector(".error-msg-text");

generateQrCodeBtn.addEventListener("click", () => {
  validateInputField();
});

function validateInputField() {
  console.log(qrTextInput.value);

  if (qrTextInput.value.trim().length > 0) {
    generateQrCode();
  } else {
    errorMsgText.textContent = "enter text or use some url";
  }
}

function generateQrCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrTextInput.value,
    height: 400,
    width: 400,
    colorlight: "#fff",
    colorDark: "#000",
  });
  qrTextInput.value = "";
  errorMsgText.textContent = "";
}
