// const url = "https://www.anapioficeandfire.com/api/characters";
import { filter, Observable } from "rxjs";

import { characters } from "../../../public/characters";

const characters$ = new Observable(subscriber => {
    characters.forEach((item, index) => {
        setTimeout( _ => subscriber.next(item), index * 1000)
    })
})

const subscription = characters$
  .pipe(    
    filter(data => data.gender === 'Female')
  )
  .subscribe((data) => {
    console.log(data.aliases[0]);
  });
