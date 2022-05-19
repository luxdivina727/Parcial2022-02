import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/data/firestore.service';
@Component({
  selector: 'app-singers',
  templateUrl: './singers.page.html',
  styleUrls: ['./singers.page.scss'],
})
export class SingersPage implements OnInit {
  results:Observable<any>;
  constructor(private fireStoreService: FirestoreService) { 
    this.results=this.fireStoreService.getSingers();
  }

  ngOnInit() {
  }

}
