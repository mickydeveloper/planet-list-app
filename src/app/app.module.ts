import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {PlanetComponent} from "./app.component";
import {PlanetListComponent} from "./components/planet-list.component";

@NgModule({
    bootstrap:    [PlanetComponent],
    declarations: [
        PlanetComponent,
        PlanetListComponent,
    ],
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
   ],
})
export class AppModule {}
