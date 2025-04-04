import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoWhatsappComponent } from './contato-whatsapp.component';

describe('ContatoWhatsappComponent', () => {
  let component: ContatoWhatsappComponent;
  let fixture: ComponentFixture<ContatoWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoWhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
