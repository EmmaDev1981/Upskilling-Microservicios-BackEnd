const Planets = require("../data/planets.json")

module.exports = {
    list: async () => {
        return Planets
    }
}