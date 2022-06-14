import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PaginaService } from "../../services/pagina.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loading = false;
  link = false;
  enderecoLink = "https://www.google.com/";
  error: string | null = null;

  pagina: Pagina = {
    frase: "",
    estiloPagina: 1,
    imagemId: 0
  };

  constructor(private service: PaginaService) {}

  ngOnInit(): void {}

  reset() {
    this.loading = false;
    this.error = null;
  }

  onSubmit(): void {
    this.loading = true;
    this.service.publicar(this.pagina).subscribe({
      next: this.sucess.bind(this),
      error: this.handleError.bind(this),
    });
  }

  sucess() {
    this.link = true;
  }

  handleError(error: HttpErrorResponse) {
    this.reset();
    this.error = error.error.message;
  }
}
