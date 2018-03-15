import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;


  email: string;
  password: string;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    db: AngularFireDatabase,
    private authService: AuthService) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }



  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }


  isPasswordMach(): boolean {
    const control1 = this.registrationForm.controls['password1'];
    const control2 = this.registrationForm.controls['password2'];
    
    return control1 === control2;
  }

  initForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      password2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]]
    });
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
    this.initForm();
  }

}
