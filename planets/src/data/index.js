const { default: axios } = require("axios");

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/Planet")
        return results.data;
    },
    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear el personaje")
    },
    get: async (id) => {
        const result = await axios.get(`http://database:8004/Planet/${id}`)
        return result.data;
    },
}