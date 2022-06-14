import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from './services/pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: PaginaService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }
  isLogin(): boolean {    
    return this.router.url === '/';
  }
}
