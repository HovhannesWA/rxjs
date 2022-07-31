import { of } from "rxjs";

of('a', 'b', 'c').subscribe(item => console.log(item));

console.log('*'.repeat(25));

of('a', 'b', 'c').subscribe({
    next: (item) => console.log(item),
    complete: () => console.log('completed')
})