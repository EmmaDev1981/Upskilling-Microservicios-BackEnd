const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Characters", controllers.getCharacters)

router.post("/Character/:id", controllers.createCharacter)

module.exports = router;