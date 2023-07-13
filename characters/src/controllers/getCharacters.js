const Character = require("../data/index")

module.exports = async (req, res) => {
    const personajes = await Character.list()
    res.status(200).json(personajes)
}