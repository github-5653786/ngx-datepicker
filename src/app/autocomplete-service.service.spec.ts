import { TestBed } from '@angular/core/testing';

import { AutocompleteServiceService } from './autocomplete-service.service';

describe('AutocompleteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutocompleteServiceService = TestBed.get(AutocompleteServiceService);
    expect(service).toBeTruthy();
  });
});
