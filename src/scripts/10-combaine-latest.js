import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { fromEvent } from 'rxjs';

import { getElById } from './helper';

const input = getElById('input-1');
let select = getElById('age_select');

const inputEvent = fromEvent(input, 'input');
const selectEvent = fromEvent(select, 'change');

const combainedSubscriber = combineLatest([inputEvent, selectEvent])
.subscribe(([input, select]) => {
    console.log(input.target.value, select.target.value)
})

setTimeout(_ => combainedSubscriber.unsubscribe(), 3000)