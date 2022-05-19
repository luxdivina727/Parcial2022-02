import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Recording } from 'src/app/recording';

@Component({
  selector: 'app-recording-detail',
  templateUrl: './recording-detail.page.html',
  styleUrls: ['./recording-detail.page.scss'],
})
export class RecordingDetailPage implements OnInit {

  todo: Recording = {
    nameRecoding:'',
    numberCabins:'',
    typeRecoding:'',
    owner:'',
    id:''
  };

  recordingId=null; 
 
  constructor(private route: ActivatedRoute, private nav: NavController, private fs: FirestoreService, private loadingController: LoadingController) { }

ngOnInit() {
  this.recordingId=  this.route.snapshot.params['id'];
  console.log("El id es", this.recordingId);
  if (this.recordingId){
    this.loadTodo();
  }
 
}
async loadTodo(){
  const loading = await this.loadingController.create({
    message: 'Loading....'
  });
  await loading.present();
  this.fs.getRecording(this.recordingId).subscribe(todo => {
    loading.dismiss();;
    this.todo = todo;
  });
}

}
