import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

// import { UploadImgService } from './upload-img.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
  fileToUpload: File = null;

  uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;
  storURL = [];
  preloadurls = [];

  profileUrl: Observable<string | null>;

  constructor(private afStorage: AngularFireStorage,
            //  private tokenService: UploadImgService
            ) {

   }



  ngOnInit() { }



  preloadsImg(event) {
    console.log(event);
    for (let i = 0; i <=  event.target.files['length'] - 1; i++) {
      if (event.target.files && event.target.files[i]) {
        const reader = new FileReader();

        reader.onload = (event: any) => {
          const preloadurl = event.target.result;
          this.preloadurls.push(preloadurl);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }
  uploadFile(event) {
  //  console.log(event);

    for (let i = 0; i <=  event.target.files['length'] - 1; i++) {
      const file = event.target.files[i];
      const date = new Date();
      const filePath = `img/${date.getTime()}${date.getMilliseconds()}`;
      const customMetadata = { filename: filePath, file: 'is ok' };
      const task = this.afStorage.upload(filePath, file,  { customMetadata });

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available

    task.downloadURL().subscribe(
      x => this.storURL.push(x)
    );
    }
  }


  deletingImg() {
    console.log('deletingImg');
  }


}
