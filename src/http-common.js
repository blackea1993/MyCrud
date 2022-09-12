import axios from "axios";
export default axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
  "Accept": "application/json",
    "Content-type": "application/json",
    "Authorization": "Bearer 60d2bff8168334dfee3bb37c4d8fe658473eb44efb0f2be4f31eb25e0866dbe7" 
  }
});
