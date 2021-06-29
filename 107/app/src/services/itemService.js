var data = [
  {
    _id: "1000",
    title: "Product 1",
    description: "Code Snippets",
    image: "p1. jpg",
    price: 12.001,
    category: "Code",
    discount: 1,
  },

  {
    _id: "0111",
    title: "Product 404",
    description: "Code Snippets",
    image: "image.png",
    price: 10.01,
    category: "Code",
    discount: 1,
  },
  {
    _id: "0011",
    title: "Product 1010",
    description: "Code Snippets",
    image: "images.png",
    price: 4.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "0010",
    title: "Product 0010",
    description: "Code Snippets",
    image: "img-1.png",
    price: 5.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "1011",
    title: "Product 1011",
    description: "Code Snippets",
    image: "img.svg",
    price: 5.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "101000",
    title: "Product 1",
    description: "Code Snippets",
    image: "p1. jpg",
    price: 6.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "10101",
    title: "Product 10101",
    description: "Code Snippets",
    image: "p1. jpg",
    price: 7.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "10100",
    title: "Product 10111",
    description: "Code Snippets",
    image: "p1. jpg",
    price: 8.1,
    category: "Code",
    discount: 1,
  },
];

class ItemService {
  getCatalog() {
    // logic to connect to a server
    // retrive list of items

    // mock data
    return data;
  }

  getStock(itemId) {}
  getItemPrice(coupon) {}
}

export default ItemService;
