function popup(options) {
  Toastify({
    text: options.text,
    duration: 3000,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: options.color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function validate(element, message) {
  if (element.value === "") {
    popup({
      text: message,
      color: "red",
    });
    return false;
  } else {
    return true;
  }
}
