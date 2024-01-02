import { Component, Input, OnInit } from '@angular/core';
import { DetailDTO } from '../../../models/detail.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Input() items: DetailDTO[] = [];

  @Input() item: DetailDTO = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  };

  ngOnInit(): void {}

  displayedColumns: string[] = ['image', 'name', 'status', 'location'];
}
