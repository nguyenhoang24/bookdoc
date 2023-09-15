import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { Country } from 'src/app/_models/country.model';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { PeerOutreachWorker } from 'src/app/_models/peer-outreach-worker.model';

@Injectable({
    providedIn: 'root'
})
export class PeerOutreachWorkerService {
    constructor(private http: HttpClient, private configInitService: ConfigInitService) { }
    private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/peeroutreachworkers';
    
    paging(searchObject: SearchObject): Observable<any> {
        const url = this.END_POINT + "/paging"
        return this.http.post<any>(url, searchObject,{ responseType: "json" });
    }

    getPeerOutreachWorker(id: string): Observable<PeerOutreachWorker> {
        let url = this.END_POINT + "/" + id
        return this.http.get<PeerOutreachWorker>(url, { responseType: "json" });
    }

    savePeerOutreachWorker(country: PeerOutreachWorker): Observable<PeerOutreachWorker> {
        var requestHeaders = new HttpHeaders();
        let url = this.END_POINT + "/save";
        return this.http.post<PeerOutreachWorker>(url, country, { headers: requestHeaders, responseType: "json" });
    }

    delete(id : string): Observable<PeerOutreachWorker> {
        let url = this.END_POINT + "/" + id
        return this.http.delete<PeerOutreachWorker>(url, {responseType: "json"});
    }
}