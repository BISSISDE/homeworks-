let allMeals = [];

async function fetchMeals() {
  try {
    const response = await fetch("meals.json");
    const data = await response.json();
    allMeals = data.meals;
    displayMeals(allMeals);
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
}

function displayMeals(meals) {
  const container = document.getElementById("meals-container");
  container.innerHTML = ""; 

  container.classList.add("cards");

  meals.forEach((meal) => {
    const mealCard = `
      <div class="card" data-name="${meal.strMeal.toLowerCase()}">
          <img class="foodImg" src="${meal.strMealThumb}" alt="${
      meal.strMeal
    }" />
          <div class="card-content">
              <h3 class="foodName">${meal.strMeal}</h3>
              <p class="deliveryTime">
                  ${meal.strTime ? meal.strTime : "N/A"} minutes
              </p>
              <p class="calories">
                  ${meal.strCalories ? meal.strCalories : "N/A"} kcal
              </p>
          </div>
      </div>
    `;
    container.innerHTML += mealCard;
  });

  document.getElementById("no-results").style.display = meals.length
    ? "none"
    : "block";
}

function filterMeals() {
  const searchInput = document
    .querySelector(".InputSearch")
    .value.toLowerCase();
  const filteredMeals = allMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchInput)
  );
  displayMeals(filteredMeals);
}

fetchMeals();
