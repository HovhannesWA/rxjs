import { Observable } from "rxjs";
import { createCircle } from "./helper";

const main_block = document.getElementsByClassName("main")[0];
let arr = ["a", "b", "c"];

const observable = new Observable((subscriber) => {
  for (let x = 0; x < arr.length; x++) {
    setTimeout(() => {
      subscriber.next(arr[x]);
    }, x * 1000);
  }
});

observable.subscribe((value) => {
  let circle = createCircle(value);
  main_block.appendChild(circle);
});
