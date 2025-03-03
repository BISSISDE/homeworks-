const products = [
  { id: 1, name: "Ноутбук", price: 300000, category: "Электроника" },
  { id: 2, name: "Кітап", price: 5000, category: "Әдебиет" },
  { id: 3, name: "Кроссовки", price: 25000, category: "Спорт" },
  { id: 4, name: "Телефон", price: 150000, category: "Электроника" },
];

function ProductCard({name,price,category}) {
    return (
        <div>
        <h1>
            {name} - {price} тг. - {category}
        </h1>
        </div>
    );
}

function ProductList() {
    return (
      <div>
        <h1 className="TextList">Product List</h1>
        <div className="card">
          <ProductCard
            name={products[0].name}
            price={products[0].price}
            category={products[0].category}
          />
          <ProductCard
            name={products[1].name}
            price={products[1].price}
            category={products[1].category}
          />
          <ProductCard
            name={products[2].name}
            price={products[2].price}
            category={products[2].category}
          />
          <ProductCard
            name={products[3].name}
            price={products[3].price}
            category={products[3].category}
          />
        </div>
      </div>
    );
}

export default ProductList;