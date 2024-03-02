import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Input()
  public tvShow: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: "",
    year: 0,
  };

  @Output() 
  public delete: EventEmitter<number> = new EventEmitter<number>();

  //public selected: boolean = false;

  public onSelect(): void{
    this.tvShow.isSelected = !this.tvShow.isSelected
  } 

  public onDeleteClick(): void {
    console.log("Click en eliminar tarjeta");
    this.delete.emit(this.tvShow.id);
  }
}
