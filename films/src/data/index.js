const Films = require("../data/films.json")

module.exports = {
    list: async () => {
        return Films
    }
}