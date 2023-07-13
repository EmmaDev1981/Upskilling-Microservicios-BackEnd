const {Router} = require("express");
const controllers = require("../controllers")

const router = Router()

router.get("/Films", controllers.getFilms)

router.post("/Film/:id", controllers.createFilms)

module.exports = router;