(function(){"use strict";var e={5569:function(e,n,i){var t=i(9242),o=i(3396),a=i(7139);const r={class:"Home"},s=(0,o._)("header",null,[(0,o._)("div",{class:"logo"},[(0,o._)("a",{href:""}," MAGNETIC")]),(0,o._)("nav",null,[(0,o._)("ul",null,[(0,o._)("li",null,"Home"),(0,o._)("li",null,"About"),(0,o._)("li",null,"The Team"),(0,o._)("li",null,"Journal"),(0,o._)("li",null,"Contact Us hghgfhg")])])],-1),c={class:"main"},u={class:"game-list",id:"games-list",ref:"gamesList"},l={class:"game-item__background"},d={class:"caption"},g={class:"caption__a"},m=(0,o._)("hr",null,null,-1),f={class:"genre"},p={class:"genre-list"},h={class:"genre-item"},b={class:"caption caption--white-background"},v={class:"caption__a"},_=(0,o.uE)('<div class="btn-container"><div class="btn"><input class="btn__input btn--pass" type="submit" value="Перейти"></div><div class="btn"><input class="btn__input btn--sub-link" type="submit" value="Моды"><div class="count btn-count"> 1000 </div></div><div class="btn"><input class="btn__input btn--sub-link" type="submit" value="Статьи"></div></div>',1);function w(e,n,i,w,k,y){return(0,o.wg)(),(0,o.iD)("div",r,[s,(0,o._)("main",c,[(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.gamePosts,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"game-item",style:(0,a.j5)({height:k.gameHeight+"px",backgroundImage:"url("+e.backgroundImage+")",backgroundPosition:e.backgroundPosition.x+"% "+e.backgroundPosition.y+"%"}),ref_for:!0,ref:"game"},[(0,o._)("div",l,[(0,o._)("div",d,[(0,o._)("a",g,(0,a.zw)(e.name),1)]),m,(0,o._)("div",f,[(0,o._)("p",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.genre,((e,n)=>((0,o.wg)(),(0,o.iD)("span",h,(0,a.zw)(e+","),1)))),256))])])]),(0,o._)("div",{class:"hidden-window game-item__hidden-window",onMouseover:n[0]||(n[0]=(0,t.iM)(((...e)=>y.hiddenWindowOver&&y.hiddenWindowOver(...e)),["self"])),onMouseleave:n[1]||(n[1]=(0,t.iM)(((...e)=>y.hiddenWindowLeave&&y.hiddenWindowLeave(...e)),["self"]))},[(0,o._)("div",b,[(0,o._)("a",v,(0,a.zw)(e.name),1)]),_],32)],4)))),256))],512)])])}var k={data(){return{gameHeight:0,gamePosts:[{backgroundImage:i(1884),backgroundPosition:{x:0,y:82},name:"Factorio",genre:["Стратегия","Симуляторы","Инди"]},{backgroundImage:i(4125),backgroundPosition:{x:94,y:0},name:"Rimworld",genre:["Стратегия","Симуляторы","Инди"]},{backgroundImage:i(5774),backgroundPosition:{x:50,y:0},name:"Stellaris",genre:["Стратегия","Симуляторы"]},{backgroundImage:i(6144),backgroundPosition:{x:50,y:0},name:"The Elder Scrolls V: Skyrim",genre:["Ролевая игра","Экшен"]},{backgroundImage:i(3987),backgroundPosition:{x:0,y:0},name:"Mount and Blade 2: Bannerlord",genre:["Ролевая игра","Экшен","Стратегия","Симуляторы"]},{backgroundImage:i(6796),backgroundPosition:{x:97,y:0},name:"S.T.A.L.K.E.R: Call of Pripyat",genre:["Ролевая игра","Экшен","FPS"]},{backgroundImage:i(2633),backgroundPosition:{x:58,y:0},name:"Minecraft",genre:["Песочница"]},{backgroundImage:i(5477),backgroundPosition:{x:38,y:0},name:"The Witcher 3",genre:["Ролевая игра","Экшен"]},{backgroundImage:i(3975),backgroundPosition:{x:0,y:0},name:"Fallout 4",genre:["Ролевая игра","Экшен"]}],window:{width:0,height:0},gamePost:document.querySelector(".game")}},methods:{handleResize(e){console.log(e),this.gameHeight=e},hiddenWindowOver(e){console.log(e);const n=e.target.querySelectorAll(".btn__input");setTimeout((()=>{n.forEach((e=>{e.classList.add("hover")}))}),800),e.target.classList.add("show")},hiddenWindowLeave(e){console.log(e);const n=e.target.querySelectorAll(".btn__input");setTimeout((()=>{n.forEach((e=>{e.classList.remove("hover")}))}),800),e.target.classList.remove("show")}},computed:{},created(){},destroyed(){window.removeEventListener("resize",(()=>{this.handleResize(this.$refs.game[0].clientWidth)}))},mounted(){window.addEventListener("resize",(()=>{this.handleResize(this.$refs.game[0].clientWidth)})),this.handleResize(this.$refs.game[0].clientWidth)}},y=i(89);const x=(0,y.Z)(k,[["render",w]]);var P=x;const j=(0,t.ri)(P);j.mount("#app")},3987:function(e,n,i){e.exports=i.p+"img/M&B.d5f32282.jpg"},1884:function(e,n,i){e.exports=i.p+"img/factorio.89f8431c.jpg"},3975:function(e,n,i){e.exports=i.p+"img/fallout.cdbb9a17.jpg"},2633:function(e,n,i){e.exports=i.p+"img/minecraft.05dc4791.jpg"},4125:function(e,n,i){e.exports=i.p+"img/rimworld.3ffab2ff.jpg"},6144:function(e,n,i){e.exports=i.p+"img/skyrim.f0dda738.jpg"},6796:function(e,n,i){e.exports=i.p+"img/stalker.1be7081f.jpeg"},5774:function(e,n,i){e.exports=i.p+"img/stellaris.cb68df2a.jpg"},5477:function(e,n,i){e.exports=i.p+"img/theWitcher.286c88e9.jpg"}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(n,t,o,a){if(!t){var r=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,c=0;c<t.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]}}(),function(){i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,{a:n}),n}}(),function(){i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){i.p="/MagneticVue/"}(),function(){var e={143:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,r=t[0],s=t[1],c=t[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var l=c(i)}for(n&&n(t);u<r.length;u++)a=r[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(l)},t=self["webpackChunkmagnetic_vue"]=self["webpackChunkmagnetic_vue"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(5569)}));t=i.O(t)})();
//# sourceMappingURL=app.35fb21cc.js.map