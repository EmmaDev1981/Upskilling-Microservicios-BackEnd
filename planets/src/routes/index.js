const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Planet/:id", controllers.getPlanets);

router.post("/Planet/:id", controllers.createPlanets);

module.exports = router;