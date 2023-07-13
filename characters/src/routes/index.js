const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Character/:id", controllers.getCharacters)

router.post("/Character/:id", controllers.createCharacter)

module.exports = router;