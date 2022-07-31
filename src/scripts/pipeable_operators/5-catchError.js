
import { catchError, EMPTY, Observable, of } from 'rxjs';

const failObservable = new Observable(subscriber => {
    setTimeout( _ => subscriber.next('ok-1'), 1000)
    setTimeout( _ => subscriber.next('ok-2'), 2000)
    setTimeout( _ => subscriber.error(new Error('error-1')), 3000)
    setTimeout( _ => subscriber.next('ok-3'), 4000)
})
// .pipe(catchError(error => of(error)))
.pipe(catchError(error => EMPTY))

const subscription = failObservable.subscribe({
    next: data => console.log(data),
    complete: _ => console.log('completed'),
    error: err => console.log(err)
})