const { localStorage } = global.window;

const cartLocal = {
  saveCart(data) {
    localStorage.carts = JSON.stringify(data);
  },

  getCart() {
    return localStorage.carts && JSON.parse(localStorage.carts);
  },

  saveTotalPrice(price) {
    localStorage.totalPrice = price;
  },

  getTotalPrice() {
    return localStorage.totalPrice && parseFloat(localStorage.totalPrice);
  },

  clearCart() {
    localStorage.clear();
  },
};

export default cartLocal;
