(this["webpackJsonppokeshop-app"]=this["webpackJsonppokeshop-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/no-image.a25c1474.jpg"},32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(37),a(38),a(7)),l=a(27),m=a(6),s=a(3),u=a.n(s),p=a(5),d=a(2),f=a(12),v=a(13),h=a(10),k=a.n(h),b=function(e,t){var a=Math.random()*t+e;return Math.round(100*a)},E=new(function(){function e(){Object(f.a)(this,e),this.type=void 0,this.type="dragon"}return Object(v.a)(e,[{key:"getPokemons",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat("https://pokeapi.co/api/v2","/type/").concat(this.type));case 2:return t=e.sent,e.abrupt("return",t.data.pokemon);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonInfo",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),N={pokemonList:[],pokemonShow:[],pokemonInfo:[],lastSearch:""},O=function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a,n){var r,o,c,i,l,s,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().pokemonShop.pokemonInfo,o=r.filter((function(t){return e.find((function(e){return e.name===t.name}))})),c=e.filter((function(e){return!r.find((function(t){return t.name===e.name}))})),i=c.map((function(e){return k.a.get(e.url)})),t.next=6,Promise.all(i);case 6:return l=t.sent,s=l.map((function(e){return Object(d.a)(Object(d.a)({},e.data),{},{price:b(10,1e3)})})),p=[].concat(Object(m.a)(o),Object(m.a)(s)),a({type:"pokemon_shop_info_data",payload:[].concat(Object(m.a)(r),Object(m.a)(s))}),t.abrupt("return",a({type:"pokemon_shop_show_data",payload:p}));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},g={cart:[]},j=Object(i.c)({pokemonShop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"pokemon_shop_list_data":return Object(d.a)(Object(d.a)({},e),{},{pokemonList:t.payload});case"pokemon_shop_info_data":return Object(d.a)(Object(d.a)({},e),{},{pokemonInfo:t.payload});case"pokemon_shop_show_data":return Object(d.a)(Object(d.a)({},e),{},{pokemonShow:t.payload});case"pokemon_shop_last_search_data":return Object(d.a)(Object(d.a)({},e),{},{lastSearch:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cart_data":return Object(d.a)(Object(d.a)({},e),{},{cart:t.payload});default:return e}}}),y=function(e,t){return j(e,t)};var w=a(1),_=a(14),S=function(){var e=Object(w.b)(),t=Object(n.useState)(""),a=Object(_.a)(t,2),o=a[0],c=a[1],i=Object(n.useCallback)((function(t){var a;c(t.target.value),e((a=t.target.value,function(){var e=Object(p.a)(u.a.mark((function e(t,n){var r,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().pokemonShop.pokemonList,o=r.filter((function(e){return e.pokemon.name.includes(a)})),c=o.map((function(e){return e.pokemon})),t({type:"pokemon_shop_last_search_data",payload:a}),e.next=6,O(c)(t,n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}),[e]);return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"navbar-logo-container"},r.a.createElement("div",{className:"navbar-logo"})),r.a.createElement("div",{className:"navbar-input-container"},r.a.createElement("i",{className:"fa fa-search fa-lg icon"}),r.a.createElement("input",{className:"navbar-input",value:o,onChange:i,placeholder:"Pesquisar..."})),r.a.createElement("div",{className:"navbar-right-element-container"}))},x=function(e,t){var a=(e/100).toLocaleString(void 0,{minimumFractionDigits:2});return"".concat(t?"R$":"").concat(a)},C=a(29),I=a.n(C).a,M=function(e){var t=e.pokemon,a=Object(w.b)();return r.a.createElement("div",{className:"pokemon-shop-list-card-container"},r.a.createElement("div",{className:"pokemon-shop-list-card"},r.a.createElement("div",{className:"pokemon-shop-list-card-info"},r.a.createElement("img",{src:t.sprites.front_default||I,alt:t.name,className:"pokemon-shop-list-card-image"}),r.a.createElement("div",{style:{display:"flexbox"}},r.a.createElement("p",{className:"pokemon-shop-list-card-name"},t.name),r.a.createElement("p",{className:"pokemon-shop-list-card-price"},x(t.price,!0)))),r.a.createElement("div",{className:"pokemon-shop-list-card-button-container",onClick:function(){return a(function(e){return function(t,a){var n=a().cart.cart;return t({type:"cart_data",payload:[].concat(Object(m.a)(n),[e])})}}(t))}},r.a.createElement("p",{className:"pokemon-shop-list-card-button-title"},"Adicionar"))))},L=function(){var e=Object(w.c)((function(e){return e.pokemonShop.lastSearch})),t=Object(w.c)((function(e){return e.pokemonShop.pokemonList.length===e.pokemonShop.pokemonShow.length})),a=Object(w.b)();return e||!e&&t?null:r.a.createElement("div",{className:"pokemon-shop-list-load-more-container",onClick:function(){return a(function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n,r,o,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().pokemonShop,r=n.pokemonShow,o=n.pokemonList,c=r.length+20,i=o.slice(0,c).map((function(e){return e.pokemon})),e.next=5,O(i)(t,a);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("p",{className:"pokemon-shop-list-load-more-text"},"Carregar Mais"))},P=function(){var e=Object(w.c)((function(e){return e.pokemonShop.pokemonShow}));return r.a.createElement("div",{className:"pokemon-shop-list-container"},r.a.createElement("div",{className:"pokemon-shop-list-inner-container"},e.map((function(e,t){return r.a.createElement(M,{key:t,pokemon:e})}))),r.a.createElement(L,null))},R=function(e){var t=e.pokemon,a=e.index,n=Object(w.b)();return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"cart-item-image-container"},r.a.createElement("img",{src:t.sprites.front_default,className:"cart-item-image",alt:t.name})),r.a.createElement("div",{className:"cart-item-name-container"},r.a.createElement("div",{className:"cart-item-space-container"}),r.a.createElement("div",{className:"cart-item-content-container"},r.a.createElement("p",{className:"cart-item-name"},t.name))),r.a.createElement("div",{className:"cart-item-price-container"},r.a.createElement("div",{className:"cart-item-space-container"}),r.a.createElement("div",{className:"cart-item-content-container"},r.a.createElement("p",{className:"cart-item-price"},x(t.price,!0)),r.a.createElement("a",{href:"#remove",className:"cart-item-remove",onClick:function(){n(function(e){return function(t,a){var n=a().cart.cart,r=Object(m.a)(n);return r.splice(e,1),t({type:"cart_data",payload:r})}}(a))}},"Remover"))))},D=a(31),F=a(30),J=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).container=void 0,n.modalRoot=void 0,n.modalRoot=document.getElementById("root-modal")||document.createElement("div"),n.modalRoot.className="root-modal",n.container=document.createElement("div"),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.modalRoot.appendChild(this.container)}},{key:"componentWillUnmount",value:function(){this.modalRoot.removeChild(this.container)}},{key:"render",value:function(){return o.createPortal(this.props.children,this.container)}}]),a}(n.Component),B=function(e){var t=e.showModal,a=e.children,n=e.closeFunction,o=t?"modal display":"modal";return r.a.createElement(J,null,r.a.createElement("div",{id:"modal-message",className:o,onClick:n},r.a.createElement("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"modal-header"},r.a.createElement("span",{role:"button",className:"modal-btn-close",onClick:n},"\xd7")),r.a.createElement("div",{className:"modal-body"},a),r.a.createElement("div",{className:"modal-footer"}))))},T=function(e){var t=e.price,a=e.total;return r.a.createElement("div",{className:"cart-buy-modal-container"},r.a.createElement("h1",null,"Obrigado!"),r.a.createElement("h3",{className:"cart-buy-modal-text"},"Voc\xea comprou"),r.a.createElement("h2",{className:"cart-buy-modal-text"},r.a.createElement("b",null,a)," pok\xe9mon por ",r.a.createElement("b",null,x(t,!0))))},W=function(){var e=Object(w.c)((function(e){return e.cart.cart})),t=Object(w.b)(),a=Object(n.useState)(!1),o=Object(_.a)(a,2),c=o[0],i=o[1],l=e.reduce((function(e,t){return e+Math.floor(100*t.price)}),0)/100;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemon-cart-container"},r.a.createElement("div",{className:"pokemon-cart-inner-container"},r.a.createElement("div",{className:"pokemon-cart-title-container"},r.a.createElement("p",{className:"pokemon-cart-title"},"Carrinho")),r.a.createElement("div",{className:"pokemon-cart-list-container"},e.map((function(e,t){return r.a.createElement(R,{key:t,pokemon:e,index:t})}))),r.a.createElement("div",{className:"pokemon-cart-total-container"},r.a.createElement("div",{className:"pokemon-cart-total-label-container "},r.a.createElement("p",{className:"pokemon-cart-total-label-text"},"Total:")),r.a.createElement("div",{className:"pokemon-cart-total-price-container"},r.a.createElement("p",{className:"pokemon-cart-total-price-text"},x(l,!0)))),r.a.createElement("div",{className:"pokemon-cart-button-container",onClick:function(){return i(!0)}},r.a.createElement("p",{className:"pokemon-cart-button-text"},"Comprar")))),r.a.createElement(B,{showModal:c,closeFunction:function(){t((function(e){return e({type:"cart_data",payload:[]})})),i(!1)}},r.a.createElement(T,{total:e.length,price:l})))},$=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.pokemonShop.pokemonList}));return Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getPokemons();case 2:a=e.sent,t({type:"pokemon_shop_list_data",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.useEffect)((function(){if(t.length>0){var a=t.slice(0,40).map((function(e){return e.pokemon}));e(O(a))}}),[e,t]),r.a.createElement("div",{className:"page-container"},r.a.createElement(S,null),r.a.createElement("div",{className:"page-list-cart-container"},r.a.createElement("div",{className:"pokemon-list-container"},r.a.createElement(P,null)),r.a.createElement(W,null)))};a(63);var q=function(){var e=function(){try{var e=localStorage.getItem("cartState");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),t=Object(i.d)(y,e,Object(i.a)(l.a));return t.subscribe(function(e,t,a){var n,r,o,c=null,i=0;a||(a={});var l=function(){i=!1===a.leading?0:Date.now(),c=null,o=e.apply(n,r),c||(n=r=null)};return function(){var m=Date.now();i||!1!==a.leading||(i=m);var s=t-(m-i);return n=this,r=arguments,s<=0||s>t?(c&&(clearTimeout(c),c=null),i=m,o=e.apply(n,r),c||(n=r=null)):c||!1===a.trailing||(c=setTimeout(l,s)),o}}((function(){!function(e){try{var t=function(e){for(var t={},a=[],n=0;n<e.length;n++){var r=e[n].name;t[r]||(a.push(e[n]),t[r]=1)}return a}(e),a={cart:{cart:e},pokemonShop:Object(d.a)(Object(d.a)({},N),{},{pokemonInfo:t})},n=JSON.stringify(a);localStorage.setItem("cartState",n)}catch(r){}}(t.getState().cart.cart)}),1e3)),t}(),A=function(){return r.a.createElement(w.a,{store:q},r.a.createElement($,null))};a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.2eb1acf5.chunk.js.map