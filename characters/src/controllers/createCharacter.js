const Character = require("../data/index")

module.exports = async (req, res) => {
    const { character } = req.body
    const personaje = await Character.create(character)
    res.status(200).json(personaje)
}