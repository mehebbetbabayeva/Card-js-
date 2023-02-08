const productData = () => {
 fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        json.map((item) => {
          document.querySelector(".container").innerHTML += `
      <div id="card">
      <img
      src=${item.image}
      />
      <div id="card-title">
      <p id="price">${item.price} <span>$</span></p>
      <p id="category">${item.category}</p>
      <p id="title">${item.title}</p>
  </div>
    </div>
      `;
        })
      );
  };
  
  setTimeout(() => {
    productData();
  }, 2000);
  

