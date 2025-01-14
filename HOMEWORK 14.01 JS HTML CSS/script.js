fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let MassiveForAll = "";
    data.forEach((element) => {
      const TextName = element.name;
      const TextEmail = element.email;

      MassiveForAll += `
            <div class='container'>
                <h2>Name: ${TextName}</h2>
                <h3>Email: ${TextEmail}</h3>
            </div>
            `;
    });

    document.body.innerHTML = MassiveForAll;
  })
  .catch((error) => {
    console.error("A mistake happened!", error);
    document.body.innerHTML = "<h1>Постты жүктеу сәтсіз болды.</h1>";
  });
