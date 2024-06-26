import { Component,OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{

  //private reservations : Reservation [] = [];
  reservations : Reservation [] = [];
  //private reservationService : ReservationService = new ReservationService();
  
  // constructor(){
  //   let savedReservations = localStorage.getItem("reservations")
  //   this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  // }

  constructor(private reservationService:ReservationService){

  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  // getReservations() : Reservation[] {
  //   return this.reservations;
  // }

  deleteReservation(id:string): void{
    this.reservationService.deleteReservation(id);
  }

}
