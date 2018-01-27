import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Planet } from "../models/planet";
import "./../rxjs-operators";
import { PlanetService } from "./../services/planet.service";

@Component({
    providers: [
        PlanetService,
      ],
    selector: "planet-list",
    styles: [ require("./planet-list.component.scss") ],
    template: require("./planet-list.component.html"),
})
export class PlanetListComponent implements OnInit {
    public planets = [];
    constructor(
        private planetService: PlanetService,
      ) { }

    public getPlanets(pageNumber: number) {
        this.planetService.getPlanetsByPage(pageNumber)
        .subscribe(
        (planets) => {
          this.planets = planets;
        },
      );
    }

    public ngOnInit() {
        this.getPlanets(1);
    }
}
