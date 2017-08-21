// Asyncronis programming using observable streams
import { Observable } from 'rxjs';

let numbers = [1, 2, 3, 4, 5, 6];
let source = Observable.from(numbers);

class MyObserver {

  next(value) {
    console.log(value);
  }
  error(err) {
    console.log(err);
  }

  complete() {
    console.log('complete');
  }

}

source.subscribe(new MyObserver());