const express = require("express")
const naipe_controller = require("./controller/naipe.js")
const cartas_controller = require("./controller/carta.js")
const app = express()
const port = 3000

app.use(express.json())

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
    const naipe = req.body
    const code = naipe_controller.update(req.params.id, naipe)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    naipe_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("baralho rodando")
})

//cartas

app.post("/cartas", (req, res) => {
    const carta = req.body
    const code = cartas_controller.store(carta)
    res.status(code)
})

app.get("/cartas", (req, res) => {
    const cartas = cartas_controller.index()
    res.json(cartas)
})

app.get("/cartas/:id", (req, res)=> {
    const carta = cartas_controller.update(req.params.id, carta)
    res.json(carta)
})

app.put("/cartas/:id", (req, res) => {
    const carta = req.body
    const code = cartas_controller.update(req.params.id, carta)
})

app.delete("cartas/:id", (req, res) => {
    cartas_controller.destroy(req.params.id)
    res.json()
})