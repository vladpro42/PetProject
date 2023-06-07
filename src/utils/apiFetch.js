const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config] = args;
    // request interceptor here
    config.headers.append(`Authorization`, `Bearer ${localStorage.getItem("token")}`)
    let response = await originalFetch(resource, config)
    // response interceptor here
    return response;
}