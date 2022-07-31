import { Observable, filter, tap } from "rxjs";
import { map } from "rxjs";

import { characters } from "./../../../public/characters";

const characters$ = new Observable((subscriber) => {
  characters.forEach((item, index) => {
    setTimeout((_) => subscriber.next(item), index * 1000);
  });
}).pipe(
  tap((item) => console.log('Before filter: ', item.gender)),
  filter((item) => item.gender === "Female"),
  tap((item) => console.log('After filter: ', item.gender)),
  map((item) => item.aliases[0].toUpperCase()),
  tap((item) => console.log('After map: ', item))
);

const subscription = characters$.subscribe((data) => console.log(data));
