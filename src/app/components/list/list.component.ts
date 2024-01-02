import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailDTO } from '../../models/detail.dto';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(600)),
    ]),
  ],
})
export class ListComponent implements OnInit {
  details: DetailDTO[] = [];
  displayTable: boolean = true;
  loading: boolean = true;

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.listService.getAllDetails().subscribe((details) => {
      this.details = details;
      this.loading = false;
    });
  }

  displayedColumns: string[] = ['image', 'name', 'status', 'location'];

  toggleViewTable(): void {
    this.displayTable = true;
  }

  toggleViewCards(): void {
    this.displayTable = false;
  }
}
