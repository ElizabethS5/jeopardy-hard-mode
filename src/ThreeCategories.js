//import the axios HTTP client to communicate with the API
import axios from "axios";
class ThreeCategories {
  constructor(
    url = "http://jservice.io/api/categories?count=3&offset=",
    client = axios.create()
  ) {
    this.url = url + Math.floor(Math.random() * 1000).toString();
    this.client = client;
  }
  getQuestion() {
    return this.client.get(this.url);
  }
}
export default ThreeCategories;
