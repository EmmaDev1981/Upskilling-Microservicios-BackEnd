const Films = require("../data/index")

module.exports = async (req, res) => {
    const {id} = req.params
    const pelicula = await Films.get(id)
    res.status(200).json(pelicula)
}
