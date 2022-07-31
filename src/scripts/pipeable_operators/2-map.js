import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { characters } from './../../../public/characters';


const characters$ = new Observable(subscriber => {
    characters.forEach((item, index) => {
        setTimeout(_ => subscriber.next(item), index * 1000)
    })
})
.pipe(map(data => data.aliases[0].toUpperCase()))


const subscription = characters$

.subscribe(data => console.log(data))