import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// CommonModule to support directives and pipes
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week10_Angular_Basics');

  protected studentID = "100898394";
  protected myName = "James Jones";

  greetButtonClicked() {
    alert(`Hello from ${this.myName} with student ID ${this.studentID}`); 
  }

  protected readonly imageURL = "https://cdn.pixabay.com/photo/2022/01/29/10/09/magnolia-6976983_640.png";

  protected today : Date = new Date();
  protected amount = 1234567.98

  


}
