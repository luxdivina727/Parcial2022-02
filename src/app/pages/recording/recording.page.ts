import { Component, OnInit } from '@angular/core';
import { Recording } from 'src/app/recording';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.page.html',
  styleUrls: ['./recording.page.scss'],
})
export class RecordingPage {
  recording:Recording[];

  constructor(private fservice:FirestoreService) { }


  ngOnInit() {
    this.fservice.getRecordingList().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.recording = todos;
    })
  }

}
