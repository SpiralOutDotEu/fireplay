import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldFromAPIComponent } from './hello-world-from-api.component';

describe('HelloWorldFromAPIComponent', () => {
  let component: HelloWorldFromAPIComponent;
  let fixture: ComponentFixture<HelloWorldFromAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldFromAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldFromAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
