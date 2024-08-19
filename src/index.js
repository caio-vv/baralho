const express = require("express")
const naipe_controller = require("./controller/naipe.js")
const app = express()
const port = 3000

app.post("/naipe", (req, res) => {
    const naipe = req.body
    const code = naipe_controller.store(naipe)
    res.status(code).json()
})

app.get("/naipe", (req, res) => {
    const naipes = naipe_controller.index()
    res.json(naipes)
})

app.get("/naipe/:id", (req, res) => {
    const naipe = naipe_controller.show(req.params.id)
    res.json(naipe)
})

app.put("/naipe/:id", (req, res) => {
    const naipe = req.bodyconst 
    code = naipe_controller.update(req.params.id, naipe)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    naipe_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("baralho rodando")
})