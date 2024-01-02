import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailDTO } from '../../models/detail.dto';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(450)),
    ]),
  ],
})
export class DetailComponent implements OnInit {
  detail!: DetailDTO;
  panelOpenState = false;
  loading: boolean = true;
  loaded: boolean = false;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier !== null) {
      this.listService.getDetailById(identifier).subscribe(
        (detail) => {
          if (!detail) {
            this.router.navigateByUrl('/');
          } else {
            this.detail = detail;
            this.loading = false;
            this.loaded = true;
          }
        },
        (error) => {
          console.error('Error al obtener los detalles:', error);
          this.router.navigateByUrl('/');
        }
      );
    } else {
      console.error('No se proporcionó un identificador en la URL.');
      this.router.navigateByUrl('/');
    }
  }
}
