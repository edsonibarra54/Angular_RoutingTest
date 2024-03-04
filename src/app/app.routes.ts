import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowPage } from './pages/tv-show/tv-show.page';
import { ErrorPage } from './pages/error/error.page';

export const routes: Routes = [
    { path: "", redirectTo: "tvShow", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "contact", component: ContactPage },
    { path: "about", component: AboutPage },
    { path: "tvShow", component: TvShowPage },
    { path: "error", component: ErrorPage },
    // Option 1
    //{ path: "**", component: ErrorPage }
    // Option 2 (better)
    { path: "**", redirectTo: "error", pathMatch: "full" }
];