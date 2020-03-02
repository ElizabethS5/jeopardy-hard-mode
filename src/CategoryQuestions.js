//import the axios HTTP client to communicate with the API
import axios from "axios";
class CategoryQuestions {
  constructor(
    catId,
    url = "http://jservice.io/api/clues?category=",
    client = axios.create()
  ) {
    this.url = url + catId;
    this.client = client;
  }
  getQuestions() {
    return this.client.get(this.url);
  }
}
export default CategoryQuestions;
