const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Planets", controllers.getPlanets);
router.get("/Planet/:id", controllers.getPlanetById);
router.post("/Planet/:id", controllers.createPlanets);

module.exports = router;