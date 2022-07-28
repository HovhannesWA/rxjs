import { ajax } from "rxjs/ajax";
import { createCircle } from "./helper";

const url = "https://random-data-api.com/api/name/random_name";
const main_block = document.getElementsByClassName("main")[0];

const getName = ajax(url);

getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));
getName.subscribe(data => addPerson(data));

function addPerson(data) {
  const name = data?.response?.first_name;
  const circle = createCircle(name);
  main_block.appendChild(circle);
}
