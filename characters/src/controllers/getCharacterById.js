const Character = require("../data/index")

module.exports = async (req, res) => {
    const {id} = req.params
    const personaje = await Character.get(id)
    res.status(200).json(personaje)
}