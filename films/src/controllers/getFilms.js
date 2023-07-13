const Films = require("../data/index")

module.exports = async (req, res) => {
    const peliculas = await Films.list()
    res.status(200).json(peliculas)
}
