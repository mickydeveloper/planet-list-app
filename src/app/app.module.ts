import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {PlanetComponent} from "./app.component";

@NgModule({
    bootstrap:    [PlanetComponent],
    declarations: [PlanetComponent],
    imports:      [BrowserModule, FormsModule ],
})
export class AppModule {}
