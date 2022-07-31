import { concatMap,  catchError, from, switchMap, EMPTY, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const url1 = "https://random-data-api.com/api/name/random_name";
const url2 = "https://random-data-api.com/api/nation/random_nation";
const url3 = "https://random-data-api.com/api/food/random_food";

const urls = [url1, url2, url3];

//All requests will be done by same order
//Values handled one by one

// from(urls)
//   .pipe(concatMap((url) => ajax(url)))
//   .subscribe({
//     next: (data) => console.log(getEndpoint(data.request.url)),
//     complete: (_) => console.log("completed"),
//     error: (err) => console.log(err),
//   });


//each request will cancle all previous requests

// from(urls)
//   .pipe(    
//     switchMap((url) => ajax(url)),
//     catchError(_ => EMPTY)  
//     )
//   .subscribe({
//     next: (data) => console.log(getEndpoint(data?.request?.url || data)),
//     complete: (_) => console.log("completed"),
//     error: (err) => console.log(err),
//   });

//All requests will be done in random order

from(urls)
  .pipe(    
    mergeMap((url) => ajax(url)),
    catchError(_ => EMPTY)  
    )
  .subscribe({
    next: (data) => console.log(getEndpoint(data?.request?.url)),
    complete: (_) => console.log("completed"),
    error: (err) => console.log(err),
  });

function getEndpoint(url) {  
  let arr = url.split("/");
  let last_index = arr.length - 1;
  return arr[last_index];
}
