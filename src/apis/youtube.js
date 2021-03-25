import axois from "axios";

const KEY = "AIzaSyB3cb_xwORfFu2_0fqtBLCJPguRX0PR1jc";

export default axois.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      type: 'video',
      maxResult: 5,
      key: KEY
  }
});
