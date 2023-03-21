import axios from "axios"

// 複数のリクエスト処理が実行されることが想定されるため、共通部分はインスタンス化して、効率化を図る。
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

