import { Component, OnInit } from '@angular/core';

import { Lightbox,  LightboxConfig, IAlbum } from 'angular2-lightbox';
import { TranslationService } from 'angular-l10n';

import { Picture } from './models/picture';
import { PictureService } from './picture.service'; 


@Component({
  selector: 'app-bing-splash',
  templateUrl: './bing-splash.component.html',
  styleUrls: ['./bing-splash.component.css']
})
export class BingSplashComponent implements OnInit {

  //private _album: Array<IAlbum> = [];

  private picAlbum: Map<String, IAlbum> = new Map<String, IAlbum>();

  constructor(
    private _lightbox: Lightbox, 
    private _lighboxConfig: LightboxConfig,
    private pictureService : PictureService,
    private translation: TranslationService) {

      _lighboxConfig.centerVertically = true;
      _lighboxConfig.showImageNumberLabel = true;
  }

  ngOnInit() {
    this.translation.translationChanged().subscribe(
      () => {        
        this.pictureService.getPictures().subscribe ( pic => {
          const album:IAlbum = {
             src: pic.src,
             caption: this.translation.translate(pic.caption),
             thumb: pic.src
          };
          //this._album.push(album);
          this.picAlbum.set(pic.caption, album);
        });
       }
    );
  }

  private get album() : Array<IAlbum>{
    return Array.from( this.picAlbum.values() );
  }

  showPicture( key : string): void {
    let index : number = Array.from(this.picAlbum.keys()).reduce( (accum, curr, idx) => {
      if( accum < 0 && curr === key) {
        return idx;
      } else {
        return accum;
      }
    }, -1);
    if(index >= 0) this.open(index);
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
  }

}
