import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BoutiqueService {

    private _url = 'https://www.chocathome.fr/wp-json/wc/v1/';
    private _ck = 'ck_83f5510b3cef12ee128fda6cd0f8e6a13dd1aa3c';
    private _cs = 'cs_00a0772264a975c7b1c451adcf7e754874c7b311';

    urlBase= '?consumer_key='+this._ck+'&consumer_secret='+this._cs;

    constructor (private _http: Http) {}

    getProducts() : Observable<any> {
        let headers = new Headers();
        return this._http.get(this._url+'products'+this.urlBase, {
          headers : headers
        }).map(res => res.json());
    }
}
