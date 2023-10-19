document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-shadow");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const boxShadowValue = button.getAttribute("data-box-shadow");

      // Create a temporary textarea to copy the style to the clipboard
      const textarea = document.createElement("textarea");
      textarea.value = boxShadowValue;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      alert("Box-shadow copied to clipboard: " + boxShadowValue);
    });
  });
});
