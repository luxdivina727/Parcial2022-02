import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { LoadingController,AlertController, NavController} from "@ionic/angular";
import {FirestoreService  } from "../../services/data/firestore.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Recording } from 'src/app/recording';

@Component({
  selector: 'app-recording-create',
  templateUrl: './recording-create.page.html',
  styleUrls: ['./recording-create.page.scss'],
})
export class RecordingCreatePage implements OnInit {
  todo: Recording = {
    nameRecoding: '',
    typeRecoding: '',
    numberCabins: '',
    owner: '',
    id: ''
  };

  todoId= null;

  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: FirestoreService, private loadingController: LoadingController) {
     }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
  }
  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
      this.todoService.createRecording(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/recording');
      });
  }
         
}

      
