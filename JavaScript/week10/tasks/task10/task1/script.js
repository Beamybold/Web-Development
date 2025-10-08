const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const newJokeBtn = document.getElementById("newJokeBtn");

async function getJoke() {
  setupEl.textContent = "Loading joke...";
  punchlineEl.textContent = "";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    // Show the setup first
    setupEl.textContent = data.setup;

    // Show punchline after 2 seconds
    setTimeout(() => {
      punchlineEl.textContent = data.punchline;
    }, 2000);
  } catch (error) {
    setupEl.textContent = "Oops! Something went wrong.";
    punchlineEl.textContent = "";
    console.error(error);
  }
}

newJokeBtn.addEventListener("click", getJoke)