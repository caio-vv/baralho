const db = []
let proximoID = 1


const model = (naipe, id = proximoID++) => {
    if (naipe.nome != undefined && naipe.nome != ""){
        return {
            id,
            nome: naipe.nome
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