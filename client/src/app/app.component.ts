import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NgbCarouselModule, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Canal do Cidadão';
}
