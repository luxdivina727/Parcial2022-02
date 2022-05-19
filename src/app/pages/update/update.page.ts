import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import {FormBuilder,Validators} from "@angular/forms";
import { Song } from 'src/app/song';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  song: any={}; 
  songId:any; 
  public updateSongForm: any;  


  constructor(public lc:LoadingController,
    public ac:AlertController, 
    public fs:FirestoreService,
    public fb:FormBuilder,
    public r:Router,
    public ar:ActivatedRoute,
    private songService:FirestoreService) { 
   
    }

  ngOnInit() {
    this.songId= this.ar.snapshot.params['id'];
    if(this.songId){
      this.loadSong();
      console.log("PASO")
    }
    console.log("El id es", this.songId);
  }
  async loadSong(){
    const loading = await this.lc.create({
      message: 'Loading....'
    });
    await loading.present();

    this.songService.getSongDetail('songList',this.songId).subscribe(song => {
      loading.dismiss();;
      this.song = song;
    });
  }
  async updateSong(){
    const loading = await this.lc.create({
      message: 'Saving....'
    });
    await loading.present();
    this.fs.updateSong(this.songId,this.song).then(
      ()=>{loading.dismiss().then(()=>
       {this.r.navigateByUrl('/home'); });  },
      error =>{
        console.error(error);
      }); 
      return await loading.present();
      }
 
}
