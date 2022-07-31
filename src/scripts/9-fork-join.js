import { forkJoin } from "rxjs";
import { ajax } from 'rxjs/ajax';

const namesUrl = ajax("https://random-data-api.com/api/name/random_name");
const nashionsUrl = ajax("https://random-data-api.com/api/nation/random_nation");
const foodsUrl = ajax("https://random-data-api.com/api/food/random_food");


forkJoin([namesUrl, nashionsUrl, foodsUrl]).subscribe(res => {
    let data = parseRes(res);
    console.log(data)
})

function parseRes(arr){
    return arr.map(item => {
        let r = item.response;
        return r.first_name || r.capital || r.dish;
    })
}





//
// function myFetch(url){
//     return () => fetch(url)
// }
// const namesUrl = myFetch("https://random-data-api.com/api/name/random_name");
// const nashionsUrl = myFetch("https://random-data-api.com/api/nation/random_nation");
// const foodsUrl = myFetch("https://random-data-api.com/api/food/random_food");
// Promise.all([namesUrl(), nashionsUrl(),foodsUrl()])
// .then(async data => {
//     let arr = []
//     for await(let item of data){
//         arr.push(await item.json().then(i => i.first_name || i.capital || i.dish))
//     }
//     return arr
// })
// .then(data => console.log(data))