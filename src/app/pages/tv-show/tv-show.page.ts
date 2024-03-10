import { Component } from '@angular/core';
import { ShowsListComponent } from '../../components/shows-list/shows-list.component';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { TvShowsService } from '../../services/tv-shows.service';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-tv-show',
  standalone: true,
  imports: [ShowsListComponent, ShowCardComponent, ControlsComponent],
  templateUrl: './tv-show.page.html',
  styleUrl: './tv-show.page.css'
})
export class TvShowPage {
  public titulo : string = "Mi nueva aplicacion de angular";

  constructor(private TvShowsService : TvShowsService){
  }

  get tvShows(): Show[]{
    return this.TvShowsService.tvShows;
  }

  get tvShows2(): Show[]{
    return this.TvShowsService.tvShows2;
  }

  public setAllAs(value: boolean) : void{
    this.tvShows.forEach( item => item.isSelected = value);
    console.log("Accion desde el App Component");
  }

  public invertirTvShows(): void {
    console.log("Se invierten tarjetas en app component");
    this.tvShows.reverse();
  }

  public deleteTvShow(id: number): void {
    console.log("Click en eliminar tarjeta desde app component");
    this.TvShowsService.delete(id);
  }

  public search( value: string ){
    this.TvShowsService.searchByTerm(value);
  }
}
