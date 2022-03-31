import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "./produtos";

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:4200";
   
    obterProdutos() :Observable<Produto[]> {
       return this.http.
       get<Produto[]>(this.UrlServiceV1 + "produtos");


    }
}

