const botEditar = window.document.querySelectorAll('.pen')
const botDeletar = window.document.querySelectorAll('.trash')
const botEnviar = window.document.querySelectorAll('.submit')
const botAdd = window.document.getElementsByClassName('add')[0]

const editando = function(element) {
    element.addEventListener('click', () => {

        const item = element.parentElement.parentElement.querySelectorAll('textarea')

        if (item[0].readOnly == true) {

            for (let i = 0; i < item.length; i++) {
                item[i].readOnly = false
            }
        } else {
            for (let i = 0; i < item.length; i++) {
                item[i].readOnly = true
            }
        }
    })
}

const deletando = function(element) {
    element.addEventListener('click', () => {
        const ddd = element.parentElement.id
        const item = element.parentElement.parentElement

        const estado = confirm('Deseja deletar?')
        if (estado) {

            item.style.display = 'none'
            const url = `http://localhost:3000?unit=${ddd}&del=1`
            api(url)
            document.location.reload(true)
        }
    })
}

const enviando = async function(element) {
    element.addEventListener('click', () => {
        const item = element.parentElement.parentElement.querySelectorAll('textarea')

        const ddd = element.parentElement.id

        const estado = confirm('Deseja enviar ?')

        if (estado) {
            const content = item[0].value
            const notes = item[1].value
            const words = item[2].value

            const url = `http://localhost:3000?unit=${ddd}&content=${content}&notes=${notes}&words=${words}`

            const del = `http://localhost:3000?unit=${ddd}&del=1`

            await api(del)

            api(url)

            for (let i = 0; i < item.length; i++) {
                item[i].readOnly = true
            }
        }
    })
}

botEditar.forEach((element) => {
    editando(element)
})


botDeletar.forEach((element) => {
    deletando(element)
})



botEnviar.forEach((element) => {
    enviando(element)
})

botAdd.addEventListener('click', () => {
    const estado = confirm('Deseja adicionar uma unit?')
    if (estado) {
        window.location.href = 'http://localhost:5000/insert-content'
    }
})

async function api(url) {
    try {
        await fetch(url)
    } catch (error) {
        alert('Não foi possivel conectar ao servidor')
    }

}