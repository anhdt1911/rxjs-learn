import { count, fromEvent, map, Observable, scan, throttleTime } from "rxjs";

export function setupCounter(element: HTMLButtonElement) {
  // fromEvent(document, "click")
  //   .pipe(
  //     throttleTime(1000),
  //     map((event) => new MouseEvent(event.type, event).clientX),
  //     scan((count, clientX) => count + clientX, 0)
  //   )
  //   .subscribe((count) => console.log(count));
  // const observable = new Observable((subscriber) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 1000);
  // });

  // console.log("just before subscribe");
  // observable.subscribe({
  //   next(x) {
  //     console.log("got value " + x);
  //   },
  //   error(err) {
  //     console.error("something wrong occurred: " + err);
  //   },
  //   complete() {
  //     console.log("done");
  //   },
  // });
  // console.log("just after subscribe");
  const observable = new Observable((subscriber) => {
    const id = setInterval(() => {
      subscriber.next("hi");
    }, 1000);
    return function unsubscribe() {
      clearInterval(id);
    };
  });

  const unsub = observable.subscribe((x) => console.log(x));
  // unsub.unsubscribe();
  setTimeout(() => {
    console.log("unsubscribe");
    unsub.unsubscribe();
  }, 5000);
  const unsub1 = observable.subscribe((x) => console.log(x));
  // unsub.unsubscribe();
  setTimeout(() => {
    console.log("unsubscribe");
    unsub1.unsubscribe();
  }, 10000);
}
