import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagines',
  templateUrl: './imagines.page.html',
  styleUrls: ['./imagines.page.scss'],
})
export class ImaginesPage implements OnInit {

  results:Observable<any>;
  constructor(private fireStoreService: FirestoreService) { 
    this.results=this.fireStoreService.getAlbums();
  }
  ngOnInit() {
  }

}
