let products = () => {
    return axios.get("https://audiophile-api.onrender.com/api/product")
    .then(res =>
        res.data
    )
}

export {products}