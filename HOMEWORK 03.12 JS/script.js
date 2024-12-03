const city = {
  name: "Алматы",
  population: 2000000,
  districts: [
    { name: "Бостандық", population: 400000 },
    { name: "Алмалы", population: 550000 },
    { name: "Медеу" , population: 518000 },
    { name: "Жетісу" , population: 586000 }
  ],
};

function TotalPopulation() {
  return city.districts.reduce((total, district) => total + district.population,0);
}

const schools = [
  { name: "№1 мектеп", district: "Алмалы", students: 500 },
  { name: "№2 мектеп", district: "Бостандық", students: 700 },
  { name: "№172 мектеп-гимназия ", district: "Медеу", students: 2237 },
];
function TotalStudents() {
    return schools.reduce((total, school) => total + school.students, 0);
}

const districts = [
  { name: "Бостандық", population: 400000 },
  { name: "Алмалы", population: 550000 },
  { name: "Медеу", population: 518000 },
  { name: "Жетісу", population: 586000 },
];

function districtName(districts, name) {
  return districts.find((district) => district.name === name);
}

console.log(TotalPopulation()); 
console.log(TotalStudents()); 
console.log(districtName(districts, "Жетісу"));



