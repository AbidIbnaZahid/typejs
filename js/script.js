let type = document.querySelector(".type")
let typeArr = type.dataset.text.split("")
let count = -1

function typeJs() {
    if (count < type.dataset.text.length) {
        count++
        type.innerHTML += type.dataset.text.charAt(count)
        typeArr = type.dataset.text.split("")

    } else {
        typeArr.pop()
        type.innerHTML = typeArr.join("");
        if (typeArr.length == 0) {
            count = -1
        }
    }
}
setInterval(() => {
    typeJs()
}, 140)
