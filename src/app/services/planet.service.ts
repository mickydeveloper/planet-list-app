import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response  } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Planet } from "../models/planet";

@Injectable()
export class PlanetService {
    private getMessagesUrl = "https://swapi.co/api/planets/?page=";  // URL to web API
    constructor(private http: Http) { }

    public getPlanetsByPage(page: number): Observable<Planet[]> {
        return this.http.get(this.getMessagesUrl + page)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.results || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}
