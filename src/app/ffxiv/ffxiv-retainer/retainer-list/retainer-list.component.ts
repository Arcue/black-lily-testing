import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-retainer-list',
  templateUrl: './retainer-list.component.html',
  styleUrls: ['./retainer-list.component.scss']
})
export class RetainerListComponent implements OnInit {
  @Output() selectedRetainer = new EventEmitter<string>();
  retainers = ["Arcu", "Mairae", "Aurila", "Arcue", "Sonobe", "Balladrack", "Scahrossar"]
  retainerSelected(item) {
    this.selectedRetainer.emit(item);
    this.location.replaceState('/ffxiv/retainer/' + item);
    console.log(item);
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
