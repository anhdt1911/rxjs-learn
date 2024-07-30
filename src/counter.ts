import { count, fromEvent, map, scan, throttleTime } from "rxjs";

export function setupCounter(element: HTMLButtonElement) {
  fromEvent(document, "click")
    .pipe(
      throttleTime(1000),
      map((event) => new MouseEvent(event.type, event).clientX),
      scan((count, clientX) => count + clientX, 0)
    )
    .subscribe((count) => console.log(count));
}
