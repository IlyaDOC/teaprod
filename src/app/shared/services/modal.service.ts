import {Injectable} from '@angular/core';
import {Observable, Subscriber} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public observable: Observable<void>;

  constructor() {
    this.observable = new Observable<void>((observer: Subscriber<void>) => {
      const timeout: NodeJS.Timeout = setTimeout((): void => {
        observer.next()
      }, 1000)

      return {
        unsubscribe(): void {
          clearTimeout(timeout);
        }
      }
    })
  }
}
