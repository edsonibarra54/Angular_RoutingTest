import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowCardComponent } from '../show-card/show-card.component';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowCardComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
  public objeto : any; //Esto no es nada recomendable, indica que puede tomar cualquier estructura

  //Este elemento significa que podra recibir informacion y la colocara como este elemento
  @Input()
  public tvShows : Show[] = []

  @Output() 
  public delete: EventEmitter<number> = new EventEmitter<number>();
  
  onDelete(id: number): void {
    console.log("Click en eliminar tarjeta desde show-list component");
    this.delete.emit(id);
  }
}
