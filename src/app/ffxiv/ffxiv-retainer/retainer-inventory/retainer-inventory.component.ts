import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import Arcu from '../../../../assets/arcu.json';
import Mairae from '../../../../assets/mairae.json';
import Aurila from '../../../../assets/aurila.json';
import Arcue from '../../../../assets/arcue.json';
import Sonobe from '../../../../assets/sonobe.json';
import Balladrack from '../../../../assets/balladrack.json';
import Scahrossar from '../../../../assets/scahrossar.json';

@Component({
  selector: 'app-retainer-inventory',
  templateUrl: './retainer-inventory.component.html',
  styleUrls: ['./retainer-inventory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetainerInventoryComponent implements OnInit {
  @Input() cRetainer;

retainers = Arcu.concat(Mairae, Aurila, Arcue, Sonobe, Balladrack, Scahrossar);
content: object;


  constructor() {

   }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    if(this.cRetainer){
      this.content = this.retainers.find( obj => obj.retainerName === this.cRetainer);
    }
  }
}
