import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProfPage } from './vista-prof.page';

describe('VistaProfPage', () => {
  let component: VistaProfPage;
  let fixture: ComponentFixture<VistaProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
