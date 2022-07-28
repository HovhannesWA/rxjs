import { Observable } from "rxjs";
import { createCircle } from "./helper";

const observable = new Observable((subscriber) => {
  let count = 0;
  let interval = setInterval(() => {
    console.log(8)
    subscriber.next(count++);
  }, 500);
  return() => {
    clearInterval(interval)
  }
});

let sub = observable.subscribe((value) => {
  console.log(value);
});

setTimeout((_) => {
  sub.unsubscribe();
},3000);
