import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/patient/location-list/add-location/add-location.component.spec.ts
import { AddLocationComponent } from './add-location.component';

describe('AddLocationComponent', () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocationComponent ]
=======
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
>>>>>>> a5fd070ef9024cc2bd5d1bd4af2f1665ee872eba:src/patient/register/register.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/patient/location-list/add-location/add-location.component.spec.ts
    fixture = TestBed.createComponent(AddLocationComponent);
=======
    fixture = TestBed.createComponent(RegisterComponent);
>>>>>>> a5fd070ef9024cc2bd5d1bd4af2f1665ee872eba:src/patient/register/register.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
