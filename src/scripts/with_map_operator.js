import { map, Observable, pipe } from "rxjs";
import { fromFetch } from "rxjs/fetch";

const base_url = "https://jsonplaceholder.typicode.com";

export const data = fromFetch(base_url + "/todos?_limit=10", {
  selector: (response) => response.json(),
}).pipe(
  map((v) => v.map((item) => item.title)),
  map((v) => v.map((item) => item.toUpperCase()))
);

data.subscribe({
  next: (v) => console.log(v),
  error: (err) => console.log(err),
});
