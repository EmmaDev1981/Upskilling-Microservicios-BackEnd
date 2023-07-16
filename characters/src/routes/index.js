const {Router} = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Characters", controllers.getCharacters)
router.get("/Character/:id", controllers.getCharacterById)
router.post("/Characters", controllers.createCharacter)

module.exports = router;