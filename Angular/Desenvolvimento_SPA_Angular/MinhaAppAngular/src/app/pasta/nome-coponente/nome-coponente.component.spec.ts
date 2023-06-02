import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeCoponenteComponent } from './nome-coponente.component';

describe('NomeCoponenteComponent', () => {
  let component: NomeCoponenteComponent;
  let fixture: ComponentFixture<NomeCoponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeCoponenteComponent]
    });
    fixture = TestBed.createComponent(NomeCoponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
