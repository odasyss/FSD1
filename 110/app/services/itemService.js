import axios from "axios";
var data = [
  {
    _id: "1000",
    title: "indexOn",
    description:
      "Creates an object from an array, using the specified key and excluding it from each value.",
    image: "images.png",
    price: 12.001,
    category: "Code",
    discount: 1,
  },

  {
    _id: "0111",
    title: "quickSort",
    description: "Sorts an array of numbers, using the quicksort algorithm.",
    image: "images.png",
    price: 10.01,
    category: "Code",
    discount: 1,
  },
  {
    _id: "0011",
    title: "get",
    description:
      "Retrieves a set of properties indicated by the given selectors from an object.",
    image: "images.png",
    price: 4.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "0010",
    title: "functions",
    description:
      "Gets an array of function property names from own (and optionally inherited) enumerable properties of an object.",
    image: "images.png",
    price: 5.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "1011",
    title: "selectionSort",
    description:
      "Sorts an array of numbers, using the selection sort algorithm.",
    image: "images.png",
    price: 5.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "101000",
    title: "BucketSort",
    description: "Sorts an array of numbers, using the bucket sort algorithm",
    image: "images.png",
    price: 6.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "10101",
    title: "heapSort",
    description: "Sorts an array of numbers, using the heapsort algorithm.",
    image: "images.png",
    price: 7.1,
    category: "Code",
    discount: 1,
  },
  {
    _id: "10100",
    title: "mergeSort",
    description: "Sorts an array of numbers, using the merge sort algorithm.",
    image: "images.png",
    price: 8.1,
    category: "Algorithm",
    discount: 1,
  },
];

class ItemService {
  async getCatalog() {
    // logic to connect to a server
    // retrive list of items
    // URL: http://127.0.0.1:5000/api/catalog POST
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");

    // mock data
    return response.data;
  }

  // method to save a product on the server
  // "http;//127.0.0.1/api/catalog" POST
  async saveItem(item) {
    let response = await axios.post("http://127.0.0.1:5000/api/catalog", item);
    let newItem = response.data;
    // hot fix: add and id if missing
    // TODO: ensure server always returns an ID
    if (!newItem._id) {
      newItem._id = Math.random().toString();
    }
    console.log("Save Item: ", newItem);
    return newItem;
  }

  // method to get the categories from the server
  // http://127.0.0.1:5000/api/catalog GET
  async getCategories() {
    // logic to connect to a server a retrieve the list items
    // URL: http://127.0.0.1:5000/api/catalog POST
    let response = await axios.get("http://127.0.0.1:5000/api/categories");
    console.log("Response: ", response.data);
    return response.data;
    // return data;
  }

  getStock(itemId) {}
  getItemPrice(coupon) {}
}

export default ItemService;
