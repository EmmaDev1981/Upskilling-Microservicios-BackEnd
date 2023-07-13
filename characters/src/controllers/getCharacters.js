// const Character = require("../data/index")

// module.exports = async (req, res) => {
//     const personajes = await Character.list()
//     res.status(200).json(personajes)
// }

const axios = require('axios')

module.exports = async (req, res) => {
    const {id} = req.params
    const personajes = await axios.get(`http://database:8004/Character/${id}`)
    res.status(200).json(personajes)
}