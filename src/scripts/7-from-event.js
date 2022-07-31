import { fromEvent } from "rxjs";
import { addNewNode, createCircle } from "./helper";

const main_block = document.getElementsByClassName("main")[0];

const handleClick = fromEvent(main_block, 'click');

const subscription = handleClick.subscribe(({pageX, pageY}) => {
    let circle = createCircle(pageX + '/' + pageY);
    addNewNode('main', circle);
})

setTimeout(_ => {
    subscription.unsubscribe();
},3000)