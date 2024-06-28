import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001"
  private reservations : Reservation [] = [];


  //Using dependency injection
  constructor(private http:HttpClient){

  }

  // CRUD operation
  getReservations() : Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
  }

  getReservation(id:string) : Observable<Reservation> | undefined{
    return this.http.get<Reservation>(this.apiUrl+"/reservation/"+id);
  }

  addReservation(reservation:Reservation) : Observable<void>{
    return this.http.post<void>(this.apiUrl+"reservation",reservation);

  }

  deleteReservation(id:string) : Observable<void> {
    return this.http.delete<void>(this.apiUrl+"/reservation/"+id);
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index,1);
  }

  updateReservation(id:string, updateReservation:Reservation):Observable<void>{
   return this.http.put<void>(this.apiUrl+"/reservation/"+id,updateReservation) 
  }
}
