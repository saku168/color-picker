const picker = document.querySelector("#picker");
const preview = document.querySelector("#preview");
const hex = document.querySelector("#hex");
const message = document.querySelector("#message");
const copyButton = document.querySelector("#copy");

function updateColor() {
  if (!picker) return;
  const color = picker.value.toUpperCase();
  if (preview) preview.style.backgroundColor = color;
  if (hex) hex.textContent = color;
  if (message) message.textContent = "";
}

picker?.addEventListener("input", updateColor);

copyButton?.addEventListener("click", async () => {
  if (!picker || !message) return;
  try {
    await navigator.clipboard.writeText(picker.value.toUpperCase());
    message.textContent = "HEX code copied!";
  } catch {
    message.textContent = "Clipboard access is unavailable. You can select the HEX code and copy it manually.";
  }
});

updateColor();