const Planets = require("../data/index")

module.exports = async (req, res) => {
    const {id} = req.params
    const planeta = await Planets.get(id);
    res.status(200).json(planeta)
}