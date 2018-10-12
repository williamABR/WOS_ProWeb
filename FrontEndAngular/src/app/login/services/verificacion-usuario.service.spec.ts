import { TestBed } from '@angular/core/testing';

import { VerificacionUsuarioService } from './verificacion-usuario.service';

describe('VerificacionUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificacionUsuarioService = TestBed.get(VerificacionUsuarioService);
    expect(service).toBeTruthy();
  });
});
