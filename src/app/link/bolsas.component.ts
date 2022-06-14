// import { Component, OnInit } from "@angular/core";
// import { Observable } from "rxjs";
// import { BolsasService } from "./bolsas.service";
// import { TipoBolsa, TiposBolsa } from "../../model/constants";
//
// @Component({
//   selector: "app-bolsas",
//   templateUrl: "./bolsas.component.html",
//   styleUrls: ["./bolsas.component.scss"],
// })
// export class BolsasComponent implements OnInit {
//   bolsas$: Observable<Pa = this.bolsasService.findAll();
//   tiposBolsa = TiposBolsa;
//
//   constructor(private bolsasService: BolsasService) {}
//
//   ngOnInit(): void {}
//
//   reload() {
//     this.bolsas$ = this.bolsasService.findAll();
//   }
//
//   getTipoBolsa(tipo?: TipoBolsa) {
//     return this.tiposBolsa.find((t) => t.id === tipo)?.description;
//   }
// }
