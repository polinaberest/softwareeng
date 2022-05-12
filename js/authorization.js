const createError = (input, text) => {
  const error = document.createElement("strong");

  error.innerText = text;
  error.className = "error";

  input.classList.add("error");
  input.insertAdjacentElement("afterend", error);
};

const removeError = () => {
  const errors = document.querySelectorAll("strong.error");
  const inputs = document.querySelectorAll("input.error");

  inputs.forEach((input) => input.classList.remove("error"));
  errors.forEach((error) => error.remove());
};

window.addEventListener("click", removeError);

function authorization() {
  const form = document.forms[0];
  const auth = window.localStorage.getItem("auth");

  if (auth == AUTH_STATE.ACCESS_DENIED) {
    document.location.pathname = "moscalAlert.html";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const phoneInput = form.elements.phone;
    const phone = phoneInput.value;

    const prefix = phone.slice(0, -10);
    const phoneNumber = phone.slice(-10);

    const regexp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phone) {
      createError(phoneInput, "Поле обов'якове!");
      return;
    }
    if (!prefix) {
      createError(phoneInput, "Введіть повний номер телефону");
      return;
    }
    if (!regexp.test(phoneNumber)) {
      createError(
        phoneInput,
        "Будь ласка переконайтеся, що ввели правильний номер телефону"
      );
      return;
    }

    if (prefix == "7") {
      window.localStorage.setItem("auth", AUTH_STATE.ACCESS_DENIED);
    } else {
      window.localStorage.setItem("auth", AUTH_STATE.ACCESS_GRANTED);
    }

    window.location.pathname = "index.html";
  });
}

authorization();
