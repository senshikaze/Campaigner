import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesComponent } from './entries.component';
import { StoreService } from 'src/app/services/store.service';
import { CreateEntryButtonComponent } from '../create-button/create-entry-button.component';
import { MockComponents } from 'ng-mocks';
import { DeleteButtonComponent } from 'src/app/misc/delete-button/delete-button.component';
import { EntryComponent } from '../entry.component';

describe('EntriesComponent', () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;
  let storeSpy: jasmine.SpyObj<StoreService>;

  beforeEach(async () => {
    storeSpy = jasmine.createSpyObj('StoreService', ['getSectionEntries']);
    await TestBed.configureTestingModule({
      declarations: [
        EntriesComponent,
        MockComponents(CreateEntryButtonComponent, EntryComponent),
      ],
      providers: [
        { provide: StoreService, useValue: storeSpy },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
