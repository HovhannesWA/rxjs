import { catchError, concatMap, EMPTY, fromEvent, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";

import { getElById } from "../helper";

const url = "https://random-data-api.com/api/:endpoint/random_:endpoint";
const select = getElById("endpoint_select");
const btn = getElById("fetch_btn");

const clickEvent = fromEvent(btn, "click");

const subscription = clickEvent
  .pipe(
    map((_) => select.value),
    concatMap((endpoint) => {
        console.log(endpoint)
        // if(!endpoint) return endpoint;
        return ajax(url.replaceAll(':endpoint', endpoint))
        //EMPTY prevents pasing error to subscription, thats why subscription dont ends
        // .pipe(catchError(_ => EMPTY))
        //sending catched message to subscription like NEXT value
        .pipe(catchError(_ => of('wrong url')))
    })    
  )
  .subscribe({
    next: (data) => console.log(data.response || data),
    complete: _ => console.log('completed'),
    error: err => console.log(err)
  });
