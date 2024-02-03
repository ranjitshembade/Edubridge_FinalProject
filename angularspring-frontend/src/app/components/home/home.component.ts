import { Component } from '@angular/core';
import { NavbarComponent } from '../navbarcomponent/navbar/navbar.component';
import { DefaultnavbarComponent } from "../defaultnavbar/defaultnavbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, DefaultnavbarComponent]
})
export class HomeComponent {

}
