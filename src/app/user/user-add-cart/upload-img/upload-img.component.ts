import { Component, OnInit} from '@angular/core';

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

  profileUrl: Observable<string | null>;

  constructor(private afStorage: AngularFireStorage,
            //  private tokenService: UploadImgService
            ) {
    // const ref = this.afStorage.ref('images/stars.jpg');
    // this.profileUrl = ref.getDownloadURL();
   }

  ngOnInit() { }

  uploadFile(event) {
    console.log(event);
    const file = event.target.files[0];
    const filePath = event.target.files[0].name;
    const task = this.afStorage.upload(filePath, file);
    console.log(filePath);


    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    // this.downloadURL =  task.downloadURL();

    task.downloadURL().subscribe(
      x => this.storURL.push(x)
    );
  }




  // readUrl(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.onload = (event:any) => {
  //       this.url = event.target.result;
  //     }

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

}
