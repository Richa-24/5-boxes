window.onload = () => {
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')

    one.addEventListener("click", handleOne)
    two.addEventListener("click", handleTwo)
    three.addEventListener("click", handleThree)
    four.addEventListener("click", handleFour)
}

let status1 = false
handleOne = () => {

    status1 = !status1

    if (status1) {
        console.log("first")
        one.setAttribute("class", "effect")
    }
    else {
        console.log("second")
        one.setAttribute("class", "removeEffect")
    }
}

let status2 = false
handleTwo = () => {
    status2 = !status2

    if (status2) {
        console.log("first")
        two.setAttribute("class", "effect")
    }
    else {
        console.log("second")
        two.setAttribute("class", "removeEffect")
    }

}

let status3 = false
handleThree = () => {
    status3 = !status3

    if (status3) {
        console.log("first")
        three.setAttribute("class", "effect")
    }
    else {
        console.log("second")
        three.setAttribute("class", "removeEffect")
    }

}

let status4 = false
handleFour = () => {
    status4 = !status4

    if (status4) {
        console.log("first")
        four.setAttribute("class", "effect")
    }
    else {
        console.log("second")
        four.setAttribute("class", "removeEffect")
    }

}