function request({ url, method = "GET" }) {
  return fetch(url, { method }).then(response => response.json());
}

export default request;
