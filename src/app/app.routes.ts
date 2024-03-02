import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowPage } from './pages/tv-show/tv-show.page';

export const routes: Routes = [
    { path: "home", component: HomePage },
    { path: "contact", component: ContactPage },
    { path: "about", component: AboutPage },
    { path: "tvShow", component: TvShowPage }
];