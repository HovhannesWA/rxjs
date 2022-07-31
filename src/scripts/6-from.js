import { from } from "rxjs";

const url = "https://random-data-api.com/api/name/random_name";

let promise = new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
})

from(promise).subscribe({
    next: data => console.log(data),
    complete: _ => console.log('completed'),
    error: err => console.log('error: ', err)
})