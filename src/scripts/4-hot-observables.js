import { createCircle } from "./helper";
import { Observable, subscribeOn, Subscriber } from 'rxjs';

const main_block = document.getElementsByClassName("main")[0];
const btn = document.getElementById("btn");

const handleClick = new Observable(subscriber => {
    btn.addEventListener('click', (e) => subscriber.next(e))
})

handleClick.subscribe(e => addCircle(e))

setTimeout(() => {
    console.log('console.log turned on')
    handleClick.subscribe(e => console.log(e.type))
},3000)

function addCircle(e) {
    let type = e.type;
    let circle = createCircle(type);
    main_block.appendChild(circle);
}