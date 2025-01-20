import axios from "axios";

const KEY = "vTrfGBVKxKtjkoCvKwE_sjGVgU6lYDr2x8BDlSTT82Q";
const fetchSearch = async (search, page) => {
  if (search.trim() === "") {
    return;
  }
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?page=${page}&per_page=12&client_id=${KEY}&query=${search}`
  );

  return response.data;
};

export default fetchSearch;
