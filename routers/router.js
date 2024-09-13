const express = require('express')
const router  = express.Router()
const controller = require('../controllers/controller.js')

router.get('/listar_hero', controller.listHeroi)
router.post("/herois", controller.createHeroi)
router.post("/vilao", controller.createVilao)

router.post("/batalhar/:id/:id", controller.createBatalha)

module.exports = router