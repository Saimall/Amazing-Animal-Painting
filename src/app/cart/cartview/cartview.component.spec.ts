import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartviewComponent } from './cartview.component';

describe('CartviewComponent', () => {
  let component: CartviewComponent;
  let fixture: ComponentFixture<CartviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
