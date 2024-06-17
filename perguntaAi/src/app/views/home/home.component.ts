import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
    imports: [HeaderComponent]
})
export class HomeComponent {

}
