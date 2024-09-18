"use strict";(self.webpackChunkprojeto_angular=self.webpackChunkprojeto_angular||[]).push([[901],{3901:(M,p,i)=>{i.r(p),i.d(p,{ProdutosModule:()=>v});var s=i(6895),d=i(9541),o=i(1571);const g=[{id:1,descricao:"Uniforme 01",preco:100,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/Uniforme01.png",quantidadeEstoque:10},{id:3,descricao:"Uniforme 02",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/Uniforme02.png",quantidadeEstoque:20}];let l=(()=>{class t{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(n){return this.produtos.find(e=>e.id==n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function _(t,r){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11," Comprar "),o.qZA()()()),2&t){const n=r.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",n.id,""),o.xp6(1),o.Q6J("src",n.imagem,o.LSH),o.xp6(2),o.hij(" ",n.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,n.preco,"BRL")," "),o.xp6(3),o.hij(" ",n.descricaoPreco," ")}}let m=(()=>{class t{constructor(n,e){this.produtosService=n,this.route=e}ngOnInit(){const n=this.produtosService.getAll();this.route.queryParamMap.subscribe(e=>{const a=e.get("descricao")?.toLowerCase();this.produtos=a?n.filter(u=>u.descricao.toLowerCase().includes(a)):n})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(d.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-descripition"],["type","button",1,"product-item__buy-button"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0),o.YNc(1,_,12,8,"div",1),o.qZA()),2&n&&(o.xp6(1),o.Q6J("ngForOf",e.produtos))},dependencies:[s.sg,d.yS,s.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--purple);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:#000}.product-item__price[_ngcontent-%COMP%]{color:#000;font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--purple);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),t})();var f=i(8881);let h=(()=>{class t{constructor(n){this.snackBar=n}notificar(n){this.snackBar.open(n,"ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(n){return new(n||t)(o.LFG(f.ux))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=i(4744),c=i(433);const x=[{path:"",component:m},{path:":id",component:(()=>{class t{constructor(n,e,a,u){this.produtosService=n,this.route=e,this.notificacaoService=a,this.carrinhoService=u,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(e)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");const n={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(d.gz),o.Y36(h),o.Y36(P.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-descripition__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque disponivel"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(u){return e.quantidade=u}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return e.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&n&&(o.xp6(2),o.Q6J("src",null==e.produto?null:e.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==e.produto?null:e.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==e.produto?null:e.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",e.quantidade),o.xp6(3),o.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,s.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-descripition__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product-descripition__container[_ngcontent-%COMP%]:hover{border-color:gray;box-shadow:0 4px 8px #0000001a;transform:scale(1.02)}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}button[_ngcontent-%COMP%]{background-color:var(--purple);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.Bz.forChild(x),d.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,C,c.u5]}),t})()}}]);