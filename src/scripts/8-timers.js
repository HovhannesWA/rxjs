import { timer, interval } from "rxjs";



const interval_subscription = interval(1000).subscribe(_ => console.log('interval'));

// timer(3000).subscribe(() => interval_subscription.unsubscribe());

timer(3000).subscribe(_ => console.log(8))

