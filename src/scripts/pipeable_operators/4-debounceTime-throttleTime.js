import { debounceTime, fromEvent, throttleTime } from "rxjs";
import { getElById } from "../helper";

import { loremText } from "../../../public/lorem_text";

const input = getElById("input-1");
const main_block = getElById("main");
const container = getElById("container");

//for scroll
main_block.textContent = loremText;
container.style.height = "200px";
container.style.overflowY = "scroll";

const inputEvent = fromEvent(input, "input").pipe(
  throttleTime(1000, undefined, { trailing: true })
  //   debounceTime(1000, undefined, { trailing: true })
);

const scrollEvent = fromEvent(container, "scroll").pipe(
  throttleTime(1000, undefined, { trailing: true })
  //   debounceTime(1000, undefined, { trailing: true })
);

const subscription = inputEvent.subscribe((e) => console.log(e.target.value));

const subscription2 = scrollEvent.subscribe((e) =>
  console.log(e.target.scrollTop)
);
