import { Injectable } from '@angular/core';
import Arcu from '@assets/arcu.json';
import Mairae from '@assets/mairae.json';
import Aurila from '@assets/aurila.json';
import Arcue from '@assets/arcue.json';
import Sonobe from '@assets/sonobe.json';
import Balladrack from '@assets/balladrack.json';
import Scahrossar from '@assets/scahrossar.json';
import ItemDB from '@assets/scraps/cleanItemDataCheck.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  retainers = Arcu.concat(Mairae, Aurila, Arcue, Sonobe, Balladrack, Scahrossar);

  constructor() { }
}
