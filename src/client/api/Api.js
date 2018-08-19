import axios from 'axios';


export default class Api {
  static get(url, data = {}, withCredentials = true, responseType = 'json') {
    axios({
      method,
      url,
      withCredentials,
      responseType,
      data,
    });
  }
}
