import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/from';
//import 'rxjs/add/observable/of';

// Observable operators
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';

// pipeable-operators
//import { filter } from 'rxjs/operators';

import { Picture } from './models/picture';

@Injectable()
export class PictureService {

  private pictures: Picture[] = [
    new Picture('/assets/images/bing/add-repo.png', 'Bing::Image::Add che4 repo'),
    new Picture('/assets/images/bing/choose-feature.png', 'Bing::Image::Install feature'),
    new Picture('/assets/images/bing/install-anyway.png', 'Bing::Image::Install feature anyway'),
    new Picture('/assets/images/bing/restart.png', 'Bing::Image::Restart Eclipse'),
    new Picture('/assets/images/bing/here-the-splash.png', 'Bing::Image::New Bing splash'),
    new Picture('/assets/images/bing/choose-bing.png', 'Bing::Image::Select Bing view'),
    new Picture('/assets/images/bing/choose-splash.png', 'Bing::Image::Select new splash')
  ];

  constructor() { }
  getPictures(): Observable<Picture> {
    return Observable.from( this.pictures );
  }

  getPicture( caption : String ) : Observable<Picture> {
    return this.getPictures().filter( pic => pic.caption === caption );
  }

}
