const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Planets", controllers.getPlanets);

router.post("/Planet/:id", controllers.createPlanets);

module.exports = router;