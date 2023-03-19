export function setupGetProducts() {

  const products = {
    url: 'data/products.json',
    getData: function (url) {
      fetch(url).then(resp => resp.json()).then(
        data => {
          this.cycleCards(data);
        }
      ).catch(error => console.error(error));
    },
    cycleCards: function (data) {
      const list = document.querySelector('.products__list');
      for (let item of data) {
        const el = document.createElement('li');
        el.classList.add('products__item', 'card');
        el.innerHTML = `<div class="card__img">
        <img src="img/Products/${item.img}.webp" alt="Картинка товара">
        </div><div class="card__text">
        <div class="card__title">
          ${item.name}
        </div>
        <div class="card__description">
          ${item.description}
        </div>
        <div class="card__price">
          <p>Цена:</p>
          <p>${item.price}<span>р.</span></p>
        </div>
      </div>`;
        list.appendChild(el);
      }
    },
    action: function () {
      this.getData(this.url);
    }
  };
  products.action();
}