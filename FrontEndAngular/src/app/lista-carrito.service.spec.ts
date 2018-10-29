import { TestBed, inject } from '@angular/core/testing';

import { ListaCarritoService } from './lista-carrito.service';

describe('ListaCarritoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaCarritoService]
    });
  });

  it('should be created', inject([ListaCarritoService], (service: ListaCarritoService) => {
    expect(service).toBeTruthy();
  }));
});
