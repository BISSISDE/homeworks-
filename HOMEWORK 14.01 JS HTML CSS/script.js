fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const TextName = element.name;
      const TextEmail = element.email;

      document.body.innerHTML = `
            <div class='container'>
                <h2>Name: ${TextName}</h2>
                <h3>Email: ${TextEmail}</h3>
            </div>
            `;
    });
  })
  .catch((error) => {
    console.error("Error", error);
    document.body.innerHTML = "<h1>Error</h1>";
  });
