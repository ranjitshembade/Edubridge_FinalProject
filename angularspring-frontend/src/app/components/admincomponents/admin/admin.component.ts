import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../navbarcomponent/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule, FormsModule, HttpClientModule, NavbarComponent, RouterLink]
})
export class AdminComponent {

}
