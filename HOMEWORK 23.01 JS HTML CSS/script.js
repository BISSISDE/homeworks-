async function asyncSearch() {
  try {
    const response = await fetch(
      "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films");

    const data = await response.json();

    const SearchButton = document.getElementById("SearchButton");
    const NameTextContent = document.getElementById("NameTextContent");
    const GenreTextContent = document.getElementById("GenreTextContent");
    const ImageSrc = document.getElementById("ImageSrc");
    const Info = document.getElementById("Info");

    SearchButton.addEventListener("click", (el) => {
      el.preventDefault();
      const SearchInput = document.getElementById("SearchInput").value;
      Info.style.display = "block";
      data.forEach((data) => {
        if (data.filmName.includes(SearchInput)) {
          NameTextContent.textContent = `Film name: ${data.filmName}`;
          GenreTextContent.textContent = `Genre: ${data.Genre}`;
          ImageSrc.src = data.image;
        }
      });
    });
  } catch (error) {
    console.log("Error:", error);
    NameTextContent.textContent = "Error with name movie or api is uncorrext";
  }
}

asyncSearch();
