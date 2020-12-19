let events = document.querySelector('#events');
let status1, status2, status3, status4 = false

events.addEventListener('click', (event) => {
    let target = event.target.id;

    switch (target) {
        case 'one':
            status1 = !status1
            if (status1)
                one.setAttribute("class", "effect");
            else
                one.setAttribute("class", "removeEffect");
            break;
        case 'two':
            status2 = !status2
            if (status2)
                two.setAttribute("class", "effect");
            else
                two.setAttribute("class", "removeEffect");

            break;
        case 'three':
            status3 = !status3
            if (status3)
                three.setAttribute("class", "effect");
            else
                three.setAttribute("class", "removeEffect")
            break;
        case 'four':
            status4 = !status4
            if (status4)
                four.setAttribute("class", "effect");
            else
                four.setAttribute("class", "removeEffect")
            break;
    }
});