import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    movies: { title: string }[] = [];

    constructor(private backend: BackendService) { }

    ngOnInit() {
        this.backend.getMovies()
            .then((movies: { title: string }[]) => {
                this.movies = movies;
            });
    }
}