import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FraseService } from './services/frase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: FraseService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }


  isLogin(): boolean {    
    return this.router.url === '/';
  }
}
