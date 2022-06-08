import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styles: [],
})
export class DataBindingComponent {
  public contadorClique: number = 7;
  public nome: string = "";

  public urlImagem: string = "";
  adicionarClique() {
    this.contadorClique++;
  }
}
