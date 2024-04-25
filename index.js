
function generateEstados(estados) {
        const h2 = document.createElement('h2')
    h2.id = "estados-label"
    h2.textContent = `Informações sobre ${UF}`

    const section = document.querySelector('#info-estados')

    section.appendChild(h2)

}


async function getEstados(estados) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`)
        .then((fetchData) => {
            return fetchData.json()
        })
        .then((jsonData) => generateEstados(jsonData.front_default, estados))
        .catch((error) => console.error(error))

    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`)

        const jsonData = await data.json()

        generateEstados(jsonData.front_default, estados)
    } catch (error) {
        console.error(error)
    }
  

}
function getSearchParams() {
    if (!location.search) {
        return 
    }

    const urlSearchParams = new URLSearchParams(location.search)

    const estados = urlSearchParams.get('estados')

}