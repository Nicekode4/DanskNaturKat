const galleri = document.querySelector('#galleri')
for (let index = 1; index < 7; index++) {
    galleri.innerHTML += `<img src="./img/${index}.jpg" alt="cat ${index}"></img>`
}