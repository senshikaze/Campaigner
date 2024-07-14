import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BattleEntity } from 'src/app/interfaces/battle-entity';
import { BattleEntitySelectedService } from '../../services/battle-entity-selected.service';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'battle-entity-description',
  template:`
  <div class="grow flex" *ngIf="entity$ | async as entity; else elseBlock">
    <div class="grow flex">
      <textbox class="m-2 grow flex" styleClass="grow" [text]="entity.description ?? ''" (textChange)="onDescriptionChanged(entity, $event)"></textbox>
    </div>
  </div>
  <ng-template #elseBlock>
    <div class="grow flex items-center"><p class="text-slate-500 text-center grow">Select Combatant</p></div>
  </ng-template>
  `,
  styles: []
})
export class BattleEntityDescriptionComponent implements OnInit {
  entity$!: Observable<BattleEntity>;

  constructor(
    private store: StoreService,
    private entitySelected: BattleEntitySelectedService
  ) {}

  ngOnInit(): void {
    this.entity$ = this.entitySelected.getEntity();
  }

  onDescriptionChanged(entity: BattleEntity, description: string): void {
    entity.description = description;
    if (entity.id) {
      this.store.saveBattleEntity(entity);
    }
  }

}