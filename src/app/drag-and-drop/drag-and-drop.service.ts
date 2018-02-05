import {Injectable, NgZone} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-state';
import {TRAINING_ACTION_TYPE, TrainingsAction} from '../store/tranings-store/tranings.store';

@Injectable()
export class DragAndDropService {

  constructor(
    private dragulaService: DragulaService,
    private zone: NgZone,
    private store: Store<AppState>
  ) {
    this.configureTrainingBag();
    this.registerDropHandler();
  }

  configureTrainingBag() {
    this.zone.runOutsideAngular(() => {
      this.dragulaService.setOptions('training-bag', {
        moves(element: HTMLElement, container: HTMLElement, handle: HTMLElement) {
          return element.dataset.draggable === 'true';
        }
      });
     });
  }

  registerDropHandler() {
    this.dragulaService.drop
      .subscribe(([bag, element, target, source]: [string, HTMLElement, HTMLElement, HTMLElement]) => {
        this.zone.run(() => {
          this.store.dispatch<TrainingsAction>({
            type: TRAINING_ACTION_TYPE.move,
            movePayload: {
              id: parseInt(element.dataset.id, 10),
              day: parseInt(target.dataset.day, 10)
            }
          });
          element.remove();
        });
      });
  }
}
