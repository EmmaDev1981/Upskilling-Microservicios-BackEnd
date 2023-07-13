const {Router} = require("express");
const controllers = require("../controllers")

const router = Router()

router.get("/Film/:id", controllers.getFilms)

router.post("/Film/:id", controllers.createFilms)

module.exports = router;