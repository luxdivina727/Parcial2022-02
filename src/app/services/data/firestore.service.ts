import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Song} from "../../song";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recording } from 'src/app/recording';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private todosCollection: AngularFirestoreCollection<Recording>;
  private todos: Observable<Recording[]>;

  constructor( public firestore:AngularFirestore,public http:HttpClient) { 
    this.todosCollection = firestore.collection<Recording>('todos');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getSingers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  /* SONG */
  createSong(albumName:string, artistName:string, songDescription:string,songName:string): Promise<void>
  { const id= this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({id,albumName,artistName,songDescription,songName});
  }

  getSongList():AngularFirestoreCollection<Song>{
   return this.firestore.collection('songList');
  } 

  getSongDetail(path: string, songId: string){
    const value=this.firestore.collection(path);
    return value.doc(songId).valueChanges(); 
   }
   
   deleteSong(songId: string):Promise<void>{
    return this.firestore.doc(`songList/${songId}`).delete();
   }
   
   updateSong(songId:string,song:Song){
     return this.firestore.doc(`songList/${songId}`).update(song);
   }
   
/* RECORDING */
getRecordingList(){
  return this.todos;
}
getRecording(id: string){
  return this.todosCollection.doc<Recording>(id).valueChanges();
}

createRecording(recording:Recording)
  {  
    recording.id= this.firestore.createId();
    return this.todosCollection.add(recording);
  }
  getRecordingDetail(path: string, recordingId: string){
    const value=this.firestore.collection(path);
    return value.doc(recordingId).valueChanges(); 
   }
   
   deleteRecording(recordingId: string):Promise<void>{
    return this.firestore.doc(`recordingList/${recordingId}`).delete();
   }
   
   updateRecording(recordingId:string,recording:Recording){
     return this.firestore.doc(`recordingList/${recording}`).update(recording);
   }
}
