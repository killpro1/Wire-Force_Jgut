function addToCart(name) {
    alert('Товар добавлен в корзину: ' + name);
  }

  function sortByName() {
    sortProducts((a, b) => {
      return a.dataset.name.localeCompare(b.dataset.name, 'ru');
    });
  }

  function sortByPriceAsc() {
    sortProducts((a, b) => {
      return parseInt(a.dataset.price) - parseInt(b.dataset.price);
    });
  }

  function sortByPriceDesc() {
    sortProducts((a, b) => {
      return parseInt(b.dataset.price) - parseInt(a.dataset.price);
    });
  }

  function sortProducts(compareFunc) {
    const list = document.getElementById('productList');
    const items = Array.from(list.children);
    items.sort(compareFunc);
    items.forEach(item => list.appendChild(item)); 
  }
