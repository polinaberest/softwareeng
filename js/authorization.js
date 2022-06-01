class Authorization {
  #error;
  #phoneInput;

  constructor(form) {
    this.#phoneInput = form.elements.phone;

    this.#error = document.createElement("strong");
    this.#error.className = "error";

    this.showError = this.showError.bind(this);
    this.hideError = this.hideError.bind(this);
    this.validate = this.validate.bind(this);
    this.grantAccess = this.grantAccess.bind(this);
    this.denyAccess = this.denyAccess.bind(this);
  }

  showError(errorMessage) {
    this.#error.innerText = errorMessage;
    this.#phoneInput.insertAdjacentElement("afterend", this.#error);
  }

  hideError() {
    this.#error.remove();
  }

  validate() {
    const value = this.#phoneInput.value;

    const phone = value.replace(/ |-|\(|\)/g, "");

    const prefix = phone.slice(0, -10);
    const phoneWithNoPrefix = phone.slice(-10);

    console.log(prefix, phoneWithNoPrefix);

    const regexp = /^\d{10}$/;

    if (!value) {
      this.showError("Поле обов'якове!");
      return false;
    }
    if (!prefix) {
      this.showError("Введіть повний номер телефону");
      return false;
    }
    if (!regexp.test(phoneWithNoPrefix)) {
      this.showError(
        "Будь ласка переконайтеся, що ввели правильний номер телефону"
      );
      return false;
    }
    if (value[0] == "7") {
      this.denyAccess();
      return false;
    }

    return true;
  }

  denyAccess() {
    window.localStorage.setItem("auth", AUTH_STATE.ACCESS_DENIED);

    window.location.pathname = window.location.pathname.replace(
      PAGES.AUTHORIZATION,
      PAGES.MOSCAL_ALERT
    );
  }

  grantAccess() {
    window.localStorage.setItem("auth", AUTH_STATE.ACCESS_GRANTED);

    window.location.pathname = window.location.pathname.replace(
      PAGES.AUTHORIZATION,
      PAGES.MAIN
    );
  }
}

function main() {
  const auth = window.localStorage.getItem("auth");

  if (auth == AUTH_STATE.ACCESS_DENIED) {
    window.location.pathname = window.location.pathname.replace(
      PAGES.AUTHORIZATION,
      PAGES.MOSCAL_ALERT
    );
  }

  const form = document.forms[0];
  const authorization = new Authorization(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (authorization.validate()) {
      authorization.grantAccess();
    }
  });

  window.addEventListener("click", authorization.hideError());
}

main();
