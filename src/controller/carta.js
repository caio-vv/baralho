const db = []
const naipe_controller = require("./naipe.js")
let proximoID = 1

const model = (carta, id = proximoID++) => {
    if (carta.nome != undefined && carta.nome != "" && carta.naipe_id != undefined && naipe_controller.show(carta.naipe_id)){
        return {
            id,
            nome: carta.nome,
            naipe_id: carta.naipe_id
        }
    }
}

const store = body => {
    const novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    } 
    return 400
}

const index = () => {
    return db
}

const show = id => db.find(el => el.id == id)

const update = (id, body) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body, parseInt(id))

    if (novo && index != -1){
        db[index] = novo;
        return 200
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id)
    if(index != -1){
        db.splice(index, 1)
        return 200
    }
    return 400
}

module.exports = {destroy, store, index, update, show}