function request({ url, method = "GET", headers=[] }) {
    const requestHeaders = new Headers();
    headers.forEach(([key, value]) => {
      requestHeaders.append(key, value);
    });

    const requestOptions = { method,
        headers: requestHeaders,
    };

    const fetchRequest = new Request(url, requestOptions);

    return fetch(fetchRequest).then(response => response.json());
}

export default request;
