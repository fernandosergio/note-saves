const botao = window.document.getElementById('send')
const botDelete = window.document.getElementById('delete')

botao.addEventListener('click', () => {
    const textarea = document.querySelectorAll('textarea');
    const select = document.getElementById('inpUnit').value

    const valortext = [];

    verifica(textarea, valortext);

    const [content, notes, word] = valortext

    const url = `http://localhost:3000?unit=${select}&content=${content}&notes=${notes}&words=${word}`

    if (select != '0' && content.length != 0) {
        api(url)

        textarea[0].value = ''
        textarea[1].value = ''
        textarea[2].value = ''

    } else {
        alert('Por favor, selecione uma unit e escreva algo no conteúdo')
    }
})

function verifica(lista1, lista2) {
    for (let i = 0; i < lista1.length; i++) {
        lista2.push(lista1[i].value)
    }
}

async function api(url) {
    try {
        await fetch(url)
    } catch (error) {
        alert('Não foi possivel conectar ao servidor')
    }

}