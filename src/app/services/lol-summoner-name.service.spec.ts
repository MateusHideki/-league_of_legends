import { TestBed, inject } from '@angular/core/testing';

import { LolSummonerNameService } from './lol-summoner-name.service';

describe('LolSummonerNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LolSummonerNameService]
    });
  });

  it('should be created', inject([LolSummonerNameService], (service: LolSummonerNameService) => {
    expect(service).toBeTruthy();
  }));
});
