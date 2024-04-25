function extractText() {
    let liElements = 
      document.querySelectorAll("ul#items li");
    let textarea = 
      document.querySelector("#result");
    for (let element of liElements) {
      textarea.value += element.textContent + "\n";
    }
  }
  