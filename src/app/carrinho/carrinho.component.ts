import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  valorTotal = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaValorTotal();
  }

  removeProdutoCarrinho(produtoID: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoID);
    this.carrinhoService.removerProdutoCarrinho(produtoID);
    this.calculaValorTotal();
  }

  calculaValorTotal(){
                                      //"Reduce" percorre os itens, "prev" e "curr" pega o anterior e o atual
    this.valorTotal = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0);
  }

  removeSeIgualZero(itemCarrinho: any){
    if(itemCarrinho.quantidade == 0){
      this.removeProdutoCarrinho(itemCarrinho.id);
    }
  }

  comprar(){
    alert("Itens comprados com sucesso \n Obrigado por comprar em PragasShoop!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
