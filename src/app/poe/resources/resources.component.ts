import { Component, OnInit } from '@angular/core';
import PoeResources from '@assets/poeresources.json';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class PoeResourcesComponent implements OnInit {
resources = PoeResources;
  constructor() { }

  ngOnInit() {
  }

}
