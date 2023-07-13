const Planets = require("../data/index")

module.exports = async (req, res) => {
    const planetas = await Planets.list();
    res.status(200).json(planetas)
}