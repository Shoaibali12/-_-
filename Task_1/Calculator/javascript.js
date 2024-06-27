let string = "";
let buttons = document.querySelectorAll("#btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action");
    const value = e.target.innerText;

    if (action === "clear") {
      string = "";
      document.querySelector("input").value = string;
    } else if (action === "erase") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (action === "sqrt") {
      string = Math.sqrt(parseFloat(string)).toString();
      document.querySelector("input").value = string;
    } else if (action === "square") {
      string = (parseFloat(string) ** 2).toString();
      document.querySelector("input").value = string;
    } else if (value === "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch {
        string = "Error";
        document.querySelector("input").value = string;
      }
    } else {
      string += value;
      document.querySelector("input").value = string;
    }
  });
});
