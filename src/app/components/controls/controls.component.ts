import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  @Output()
  public evento: EventEmitter<boolean> = new EventEmitter();
  @Output()
  public invertir: EventEmitter<void> = new EventEmitter();
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public searchTerm: string = "";

  public onClickSetAll() : void{
    console.log("Click en seleccionar todos");
    this.evento.emit(true);
  }

  public onClickUnsetAll() : void{
    console.log("Click en seleccionar todos");
    this.evento.emit(false);
  }

  public onClickInvert() : void{
    console.log("Click en invertir tarjetas");
    this.invertir.emit();
  }

  public onClickSearch() :void{
    this.onSearch.emit(this.searchTerm);
  }
}
