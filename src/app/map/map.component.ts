import { Component, OnInit } from '@angular/core';
import { AutocompleteServiceService } from '../autocomplete-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 
  map: any[] = [];

  map2: any[] = [];

  constructor(private mapService: AutocompleteServiceService) { }

  ngOnInit() {
    this.mapService.findMap().subscribe(data => {
      let data2 = data.json();       
      for (let i = 0; i <= data2.length - 70; i++) {
        this.map.push(data2[i]);
      }
      console.log(this.map);
    });
  }
}
