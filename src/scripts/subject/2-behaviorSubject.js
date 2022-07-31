import { BehaviorSubject, fromEvent } from "rxjs";
import { addNewNode, createCircle, getElById } from "../helper"

const container = getElById('container');

const value = new BehaviorSubject(20);

fromEvent(container, 'click').subscribe(e => {
    const x = e.pageX;
    const y = e.pageY;
    const text = x - y;
    value.next(text);
})


value.subscribe(data => {
    const circle = createCircle(data);
    addNewNode('main', circle);
})