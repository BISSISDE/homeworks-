const arrowUp = document.getElementById("arrowUp");
const arrowUp2 = document.getElementById("arrowUp2");
const nav = document.querySelector(".nav-container");
const textlogo = document.getElementById("logotext");
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    nav.style.position = "fixed";
    arrowUp.style.display = "block";
    arrowUp2.style.display = "block";
    textlogo.style.color = " rgb(113, 48, 48)";
  }
});
window.addEventListener("scroll", () => {
  if (scrollY > 250) {
    nav.style.background = "#611b1b";
    nav.style.padding = "5px";
    textlogo.style.color = "rgb(94, 100, 76)";
  } else {
    nav.style.background = "#00000000";
    nav.style.padding = "60px";
    arrowUp.style.display = "none";
    arrowUp2.style.display = "none";
    textlogo.style.color = " rgb(113, 48, 48)";
  }
});

const Exchange = document.getElementById("Exchange");

Exchange.addEventListener("click", () => {
    const svg1 = document.querySelector(".svg1");
    const svg1_color = svg1.querySelector("path");
    svg1_color.setAttribute("fill", "#000");
    document.body.classList.toggle("Exchange-2");
    svg1_color = 'white'
});


const Arrivals = document.getElementById("NewArrivals");
const product = [
  {
    image: "https://i.ebayimg.com/images/g/VJQAAOSwutVfyd36/s-l960.webp",
    name: "Wine Bottle",
    price: "£125.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/50/19/d8/5019d8470c44e8a9d267771d8c5e6d7a.jpg",
    name: "Santa Bag",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/cc/7b/85/cc7b85db79878473ed6766068c5f2dc8.jpg",
    name: "Santa Cap",
    price: "£230.00 GBP",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbTFgkCZmhnBUGeew2AiM1d6wNbxKI6EaxFenrxio87kJQq-J9",
    name: "Fried Gloves",
    price: "£60.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/5a/30/ba/5a30ba95d614335a7bef014b6e980d0a.jpg",
    name: "Door Decating",
    price: "£115.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/d1/a8/ac/d1a8ac6337da96bb576fc9c8bacd2dec.jpg",
    name: "Tree Candle",
    price: "£200.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/22/eb/51/22eb514fdea0eac2da9efe379a3366fa.jpg",
    name: "Santa",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/cb/7e/e9/cb7ee9f9732b4c3bb927dd7a12c0c3b5.jpg",
    name: "Light",
    price: "£120.00 GBP",
  },
];

const featured = [
  {
    image:
      "https://i.pinimg.com/736x/62/56/18/6256186040c7debfe644b66374b2bb18.jpg",
    name: "Candle",
    price: "£125.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/b2/e8/e4/b2e8e48a523ca90688aafbc96502c6da.jpg",
    name: "Blanket",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/ff/09/72/ff0972112e8c1c34123a9aec4da67ee6.jpg",
    name: "Garland",
    price: "£230.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/e8/9f/36/e89f36828225dc3684dca46a76a0914a.jpg",
    name: "Pine",
    price: "£60.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/db/e5/c4/dbe5c40c727a9a7804b9f9762a0b8c62.jpg",
    name: "Toys",
    price: "£115.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/ea/15/99/ea15994c34b65a174a58ae888f9e96cb.jpg",
    name: "Painting Sets",
    price: "£200.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/4e/76/c7/4e76c79afa873effa19030a938865320.jpg",
    name: "Gourds",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/a4/70/01/a47001fd9ca2ab15aed73c9160c7364f.jpg",
    name: "Cookies",
    price: "£120.00 GBP",
  },
];

const best = [
  {
    image:
      "https://i.pinimg.com/736x/46/6e/1e/466e1eef864d15bfedcf4926bc74bf16.jpg",
    name: "Stockings",
    price: "£125.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/c8/b5/43/c8b54302a2b7f265915b154b3ed23d71.jpg",
    name: "Ornaments",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/13/3b/95/133b9545051003329bf75d4dbd786dd7.jpg",
    name: "Books",
    price: "£230.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/05/0e/62/050e6209169acd9ff65567a9b05bdc9e.jpg",
    name: "Beauty",
    price: "£60.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/d1/96/bb/d196bbae65d868dd2074a98b4d3a94cb.jpg",
    name: "Cards",
    price: "£115.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/e8/83/6b/e8836bee3b8b0020974e3811ebcc06f4.jpg",
    name: "treats",
    price: "£200.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/8a/df/42/8adf4278143a32677a4c989254fcf7b3.jpg",
    name: "Gloves",
    price: "£150.00 GBP",
  },
  {
    image:
      "https://i.pinimg.com/736x/84/32/b5/8432b5f25e508db1601b410a9623f061.jpg",
    name: "Jwelery",
    price: "£120.00 GBP",
  },
];
const newProduct = document.getElementById("newProduct");
const feat = document.getElementById("FeaturedP");
const bestProduct = document.getElementById("BestSeller");
const products = document.getElementById("products");

newProduct.addEventListener("click", () => {
  renderCard(product);
  classList.add.toggle("NewArrivalsButton");
});
feat.addEventListener("click", () => {
  renderCard(featured);
  classList.add.toggle("NewArrivalsButton");
});
bestProduct.addEventListener("click", () => {
  renderCard(best);
  classList.add.toggle("NewArrivalsButton");
});
function renderCard(data = product) {
  products.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    const imgArrivals = document.createElement("img");
    const nameArrivals = document.createElement("h2");
    const priceArrivals = document.createElement("h4");

    imgArrivals.src = item.image;
    nameArrivals.textContent = item.name;
    priceArrivals.textContent = item.price;

    card.appendChild(imgArrivals);
    card.appendChild(nameArrivals);
    card.appendChild(priceArrivals);

    card.classList.add("Cards");
    nameArrivals.classList.add("CardName");
    imgArrivals.classList.add("CardImg");

    products.appendChild(card);

    // const cards = document.createElement("div");
    // cards.appendChild(card);

    card.classList.add("allcard");

    card.addEventListener("mouseenter", () => {
      card.style.background = "rgba(171, 171, 171, 0.45)";
      card.style.transition = "all 0.5s";
    });
    card.addEventListener("mouseleave", () => {
      card.style.background = "none";
    });
    products.appendChild(card);
  });
}

renderCard();

// const LarestBlog = document.getElementById("LarestBlog");
// const containerLarestBlog = document.getElementsByClassName("container");

// const cardsLB = [
//   {
//     image:
//       "https://img.freepik.com/free-photo/family-christmas-with-presents_1303-4555.jpg?t=st=1734766587~exp=1734770187~hmac=8fdd49f92539f0765874f42b53f537d254f03c00ef03dd716a109e66ac944062&w=1060",
//     title: "MORBI AT LIGULA PORTA",
//     information:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor ...",
//     button: "READ MORE",
//   },
//   {
//     image:
//       "https://img.freepik.com/free-photo/family-by-chimney-christmas_1303-4573.jpg?t=st=1734766691~exp=1734770291~hmac=8518293dc23225a57a2db0be48f9df7ab4b0fc7bb1e581c52941207ab6ed7088&w=1060",
//     title: "REMAINING ESSENTIALLY",
//     information:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor ...",
//     button: "READ MORE",
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2023/09/25/17/14/ai-generated-8275697_1280.jpg",
//     title: "MORBI AT LIGULA PORTA",
//     information:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor ...",
//     button: "READ MORE",
//   },
// ];

// cardsLB.forEach((item) => {
//       const LBimg = document.createElement("img");
//       const Lbh3 = document.createElement("h3");
//       const LBp = document.createElement("p");
//       const LBbutton = document.createElement("button");
//       const blogPost = document.createElement("div");

//       LBimg.src = item.image;
//       Lbh3.textContent = item.title;
//       LBp.textContent = item.information;
//       LBbutton.textContent = item.button;

//       blogPost.appendChild(LBimg);
//       blogPost.appendChild(Lbh3);
//       blogPost.appendChild(LBp);
//       blogPost.appendChild(LBbutton);

      
//     });

const Letter = document.getElementById("letterClick");
const Paper = document.querySelectorAll(".paper");
const DoLetter = document.getElementById("DoLetter");
const backgroundLetter = document.getElementById("backgroundLetter");

Letter.addEventListener("click", () => {
  Paper.forEach((paperElement) => {
    paperElement.style.display = "block";
  });
});
Letter.addEventListener("blur", () => {
  backgroundLetter.style.width = "1000px";
  Paper.forEach((paperElement) => {
    paperElement.style.display = "none";
  });
});

const NewArrivals = document.getElementById("NewArrivals");

window.addEventListener("scroll", () => {
  if (scrollY < 500) {
    NewArrivals.style.position = "relative";
    NewArrivals.style.zIndex = "100";
  } else {
    NewArrivals.style.position = "none";
    NewArrivals.style.zIndex = "0";
  }
});

const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

function showNextItem() {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }

  items[currentIndex].classList.add("active");

  currentIndex++;

  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
}

setInterval(showNextItem, 4000);

document.addEventListener("DOMContentLoaded", function () {
  const number = document.getElementById("number");

  function formatPhone() {
    number.addEventListener("input", () => {
      let phone = number.value.replace(/\D/g, "");

      if (phone.length <= 11) {
        let formattedPhone = phone;
        formattedPhone = "+" + phone.slice(0, 1);
        formattedPhone += "(" + phone.slice(1, 4) + ")";
        formattedPhone += phone.slice(4, 7);
        formattedPhone += "-" + phone.slice(7, 9);
        formattedPhone += "-" + phone.slice(9, 11);

        number.value = formattedPhone;
      }
    });
  }

  formatPhone();
});

const log = document.getElementById("signinForm");
const comment = document.getElementById("errorMessage");

log.addEventListener("submit", (sub) => {
  sub.preventDefault();
  const number = document.getElementById("number").value;

  if (number.replace(/\D/g, "").length == 11) {
    comment.style.color = "green";
    comment.textContent = "Thanks, please wait for our message";
  } else {
    comment.style.color = "red";
    comment.textContent = "Number is not included";
  }
  document.getElementById("number").value = "";
});

const snow = document.getElementById("snow");
const NUMBER_OF_SNOWFLAKES = 500;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = "#ddd";

const snowflakes = [];

const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.pointerEvents = "none";
canvas.style.top = "0px";
canvas.width = window.innerWidth;
canvas.height = snow.innerHeight;
snow.appendChild(canvas);

const ctx = canvas.getContext("2d");

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5,
});

const drawSnowflake = (snowflake) => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway;
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

animate();
window.addEventListener("DOMContentLoaded", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("search-2");
});

document.addEventListener("DOMContentLoaded", () => {
  // Установите конечную дату
  const deadline = new Date("2024-12-31T23:59:59");

  // Найдите элементы DOM
  const elDays = document.querySelector(".timer__days");
  const elHours = document.querySelector(".timer__hours");
  const elMinutes = document.querySelector(".timer__minutes");
  const elSeconds = document.querySelector(".timer__seconds");

  // Функция склонения числительных
  const declensionNum = (num, words) => {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  };

  // Функция обновления таймера
  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, "0");
    elHours.textContent = String(hours).padStart(2, "0");
    elMinutes.textContent = String(minutes).padStart(2, "0");
    elSeconds.textContent = String(seconds).padStart(2, "0");

    elDays.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    elHours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    elMinutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    elSeconds.dataset.title = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  // Запустите таймер
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});

