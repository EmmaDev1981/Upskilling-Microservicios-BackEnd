const { default: axios } = require("axios");

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/Character")
        return results.data;
    },
    create: async (character) => {
        const result = await axios.post(`http://database:8004/Character`, character)
        return result.data;
    },
    get: async (id) => {
        const result = await axios.get(`http://database:8004/Character/${id}`)
        return result.data;
    }
}