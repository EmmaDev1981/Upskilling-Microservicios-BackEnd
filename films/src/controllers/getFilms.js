const axios = require('axios')
// const Films = require("../data/index")

// module.exports = async (req, res) => {
//     const peliculas = await Films.list()
//     res.status(200).json(peliculas)
// }

module.exports = async (req, res) => {
    const {id} = req.params
    const peliculas = await axios.get(`http://database:8004/Film/${id}`)
    res.status(200).json(peliculas)
}