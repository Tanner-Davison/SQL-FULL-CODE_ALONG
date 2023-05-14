
const getDogsButton = document.getElementById('get-dogs-button')
const dogList = document.getElementById('dog-section')

function getDogsButtonFunction() {
    
    console.log('getdogs clicked')

    dogList.innerHTML = ''

    axios.get('http://localhost:5432/dogs')
        .then(res => {

            res.data.forEach(element => {
                let dogCard = `
                <div class="dog-card">
                <h3>${element.dog_name}</h3>
                </div>
                
                `
                dogList.innerHTML += dogCard
            })
        })
}


getDogsButton.addEventListener('click', getDogsButtonFunction)