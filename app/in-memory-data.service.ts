import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let idols = [
      { id: 11, name: 'honoka' },
      { id: 12, name: 'umi'},
      { id: 13, name: 'kotori'},
      { id: 14, name: 'maki'},
      { id: 15, name: 'rin'},
      { id: 16, name: 'hanayo'},
      { id: 17, name: 'nico'},
      { id: 18, name: 'eli'},
      { id: 19, name: 'nozomi'}
    ];
    return {idols};
  }
}
