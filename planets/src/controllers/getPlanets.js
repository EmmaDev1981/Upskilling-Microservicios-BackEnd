// const Planets = require("../data/index")

// module.exports = async (req, res) => {
//     const planetas = await Planets.list();
//     res.status(200).json(planetas)
// }

const axios = require('axios')

module.exports = async (req, res) => {
    const {id} = req.params
    const planetas = await axios.get(`http://database:8004/Planet/${id}`)
    res.status(200).json(planetas)
}