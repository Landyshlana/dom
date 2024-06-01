import punchGoblin from "./game";


document.addEventListener("DOMContentLoaded", () => {
  let timerId = setInterval(() => punchGoblin(), 2000);
  setTimeout(() => { clearInterval(timerId); alert('stop'); }, 50000);
});