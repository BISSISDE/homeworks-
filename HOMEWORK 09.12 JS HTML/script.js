
const library = {
  name: "Орталық кітапхана",
  address: "Алматы қаласы, Абай көшесі, 45",
  books: [
    {
      title: "Жүз жылдық жалғыздық",
      author: "Габриэль Гарсиа Маркес",
      year: 1967,
      isAvailable: true,
    },
    {
      title: "Сиқырлы тау",
      author: "Томас Манн",
      year: 1924,
      isAvailable: false,
    },
    {
      title: "Соғыс және бейбітшілік",
      author: "Лев Толстой",
      year: 1869,
      isAvailable: true,
    },
  ],
};

function changeLibraryName() {
  const newName = prompt("Кітапхана атауын енгізініз:");
  if (newName) {
    library.name = newName;
    alert(`Кітапхананын атауы "${library.name}" болып өзгерді.`);
  }
}

function changeLibraryAddress() {
  const newAddress = prompt("Жаңа мекенжайды енгізіңіз:");
  if (newAddress) {
    library.address = newAddress;
    alert(`Кітапхананың мекенжайы "${library.address}" болып өзгерді.`);
  }
}

function listAvailableBooks() {
  const availableBooks = library.books.filter((book) => book.isAvailable);
  if (availableBooks.length > 0) {
    const bookTitles = availableBooks.map((book) => book.title).join(", ");
    alert(`Қолжетімді кітаптар: ${bookTitles}`);
  } else {
    alert("Қолжетімді кітаптар жоқ.");
  }
}

function addBook() {
  const title = prompt("Кітап атауын енгізіңіз:");
  const author = prompt("Авторын енгізіңіз:");
  const year = prompt("Басылған жылын енгізіңіз:");
  const isAvailable =
    prompt("Кітаптың қолжетімді true/false:") === "true";

  if (title && author && year) {
    library.books.push({ title, author, year: +(year), isAvailable });
    alert(`"${title}" Косылды.`);
  }
}

function toggleBookAvailability() {
  const title = prompt("Кітаптың атауын енгізіңіз:");
  const book = library.books.find((book) => book.title === title);

  if (book) {
    book.isAvailable = !book.isAvailable;
    alert(
      `"${book.title}" атты кітаптың қолжетімділік мәртебесі өзгерді. (${
        book.isAvailable ? "Қолжетімді" : "Қолжетімсіз"
      })`
    );
  } else {
    alert("Кітап табылмады.");
  }
}

function menu() {
  let choice;
  do {
    choice = prompt(
      `Мәзір:
1. Кітапхананың атауын өзгерту
2. Мекенжайын өзгерту
3. Қолжетімді кітаптарды шығару
4. Жаңа кітап қосу
5. Кітаптың қолжетімділік мәртебесін өзгерту
6. Шығу
Таңдауыңызды енгізіңіз:`
    );

    switch (choice) {
      case "1":
        changeLibraryName();
        break;
      case "2":
        changeLibraryAddress();
        break;
      case "3":
        listAvailableBooks();
        break;
      case "4":
        addBook();
        break;
      case "5":
        toggleBookAvailability();
        break;
      case "6":
        alert("Шығып жатырсыз...");
        break;
      default:
        alert("Дұрыс таңдау жасаңыз.");
    }
  } while (choice !== "6");
}

menu();
