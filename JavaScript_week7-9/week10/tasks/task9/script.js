function tellJoke() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here's a funny joke!");
    }, 3000); 
  });
}


tellJoke().then((joke) => {
  console.log(joke);
});