(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/arrow-active.7d360a75.svg"},function(e,a,t){e.exports=t.p+"static/media/arrow-select.cd006078.svg"},,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/rat.68c16161.svg"},,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/arrow-disabled.1aab54ce.svg"},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(13),r=t.n(c),l=(t(25),t(26),t(27),t(2)),s=t(7),o=t(8),d=function(){function e(a,t,n){Object(s.a)(this,e),this.direction="down",this.length=0,this.tail=[],this.id="snake-head",this.blockSize=n,this.x=a/2-a/2%this.blockSize,this.y=t/2-t/2%this.blockSize,window.addEventListener("keydown",this.changeDirectionWithCode),this.snakeComponent=document.getElementById("snake-head")}return Object(o.a)(e,[{key:"grow",value:function(){this.length++,console.log(this.length)}},{key:"changeDirection",value:function(e){switch(e){case"up":this.direction="up";break;case"down":this.direction="down";break;case"left":this.direction="left";break;case"right":this.direction="right"}}},{key:"start",value:function(){var e=this;setInterval((function(){e.updateLocation(),e.moveSnake()}),1e3)}},{key:"updateLocation",value:function(){"up"===this.direction&&(this.y-=this.blockSize,console.log("moving up")),"down"===this.direction&&(this.y+=this.blockSize,console.log("moving down")),"right"===this.direction&&(this.x+=this.blockSize,console.log("moving right")),"left"===this.direction&&(this.x-=this.blockSize,console.log("moving left"))}},{key:"moveSnake",value:function(){}},{key:"getLocation",value:function(){return{x:this.x,y:this.y}}}]),e}();function m(e){e.snake.direction;return i.a.createElement("div",{id:"snake-head",style:{transition:".3s linear",position:"absolute",width:"".concat(e.blockSize,"px"),height:"".concat(e.blockSize,"px"),top:"".concat(e.snake.y,"px"),left:"".concat(e.snake.x,"px")}})}var u=t(3),v=t(1),b=t(4);function g(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    z-index: 1;\n    .background-div{\n        width: 10%;\n        height: 10%;\n        border-radius: 3px;\n        box-sizing: border-box;\n        border: 1px solid rgba(25,255,255,0);\n    }\n"]);return g=function(){return e},e}function E(){var e=Object(u.a)(["\n    padding-left: 10px;\n    position: relative;\n    z-index: 10;\n    padding-top: 40px;\n    font-family: 'Press Start 2P', cursive;\n    margin-bottom: 80px;\n    span{\n        display: inline-block;\n    }\n\n"]);return E=function(){return e},e}function f(){var e=Object(u.a)(["\n    font-family: 'Press Start 2P', cursive;\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    justify-content: center;\n    position: relative;\n    z-index: 200;\n    button{\n        font-family: 'Press Start 2P', cursive;\n        outline: none;\n        border: none;\n        font-size: 20px;\n        background: none;\n    }\n    h5{\n        margin-bottom: 30px;\n    }\n"]);return f=function(){return e},e}function h(e){var a=Object(n.useState)("start"),t=Object(l.a)(a,2);t[0],t[1];return Object(n.useEffect)((function(){Object(b.a)({targets:".title-animation",translateY:20,delay:b.a.stagger(50,{start:150})}),Object(b.a)({targets:".title-animation",translateY:-6,scale:2,color:"rgb(255,25,255)",letterSpacing:10,paddingLeft:10,delay:b.a.stagger(50,{start:1400}),direction:"forwards",endDelay:10}),Object(b.a)({targets:".active-button",loop:!0,letterSpacing:10,paddingLeft:10,duration:1e3,direction:"alternate",color:"rgba(200,221,11,1)"}),Object(b.a)({targets:".background-div",loop:!0,scale:.3,delay:b.a.stagger(10,{start:1e3,from:"center"}),borderRadius:50,borderColor:"rgba(21,123,21,1)",direction:"alternate",duration:2e3})})),i.a.createElement("div",{style:{height:"100%"}},i.a.createElement(p,{id:"container-menu-background"},i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"}),i.a.createElement("div",{className:"background-div"})),i.a.createElement(N,null,i.a.createElement(k,{id:"title-container"},i.a.createElement("span",{className:"title-animation"},"S")," ",i.a.createElement("span",{className:"title-animation"},"N")," ",i.a.createElement("span",{className:"title-animation"},"A")," ",i.a.createElement("span",{className:"title-animation"},"K")," ",i.a.createElement("span",{className:"title-animation"},"E")),i.a.createElement("br",null),i.a.createElement("h5",null,"Menu"),i.a.createElement("button",{style:{color:"white",background:"none",padding:"10px",border:"none"},onClick:function(a){return e.startGame()}},i.a.createElement("span",{className:"active-button"},"START")),i.a.createElement("button",{style:{color:"white",background:"none",padding:"10px",border:"none"},onCLick:function(a){e.toggleAbout(!0),console.log("showing about")}},"ABOUT"),i.a.createElement("a",{href:"https://www.jakemiller.io"},i.a.createElement("button",{style:{color:"white",background:"none",padding:"10px",border:"none"}},"HOME"))))}var N=v.a.div(f()),k=v.a.h3(E()),p=v.a.div(g()),x=t(5),w=t.n(x),j=t(6),O=t.n(j);t(30);function y(){var e=Object(u.a)(['\n    position: relative;\n    display: grid;\n    width: 100%;\n    height: 100px;\n    grid-template-areas: \n    "left up up right"\n    "left down down right";\n    .button{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        box-sizing: border-box;\n        padding: 6px;\n    }\n    .button-up{\n        grid-area: up;\n        border-top: 1px solid blue;\n        img{\n            height: 100%;\n        }\n    }\n    .button-down{\n        grid-area: down;\n        border-bottom: 1px solid blue;\n        border-top: 1px solid blue;\n        img{\n            height: 100%;\n        }\n\n    }\n    .button-right{\n        grid-area: right;\n        border: 1px solid blue;\n        border-bottom-right-radius: 8px;\n        border-top-right-radius: 8px;\n        img{\n           width:100%;\n        }\n    }\n    .button-left{\n        grid-area: left;\n        border: 1px solid blue;\n        border-bottom-left-radius: 8px;\n        border-top-left-radius: 8px;\n        img{\n            width: 100%;\n        }\n    }\n']);return y=function(){return e},e}function S(e){return i.a.createElement(z,null,i.a.createElement("div",{className:"button-up button",onClick:function(a){return e.changeDirection(a.target)},"data-direction":"up"},i.a.createElement("img",{src:"up"===e.direction?w.a:O.a,alt:"",style:{pointerEvents:"none",transform:"rotate(180deg)"}})),i.a.createElement("div",{className:"button-left button",onClick:function(a){return e.changeDirection(a.target)},"data-direction":"left"},i.a.createElement("img",{src:"left"===e.direction?w.a:O.a,alt:"",style:{pointerEvents:"none",transform:"rotate(90deg)"}})),i.a.createElement("div",{className:"button-right button",onClick:function(a){return e.changeDirection(a.target)},"data-direction":"right"},i.a.createElement("img",{src:"right"===e.direction?w.a:O.a,alt:"",style:{pointerEvents:"none",transform:"rotate(-90deg)"}})),i.a.createElement("div",{className:"button-down button",onClick:function(a){return e.changeDirection(a.target)},"data-direction":"down"},i.a.createElement("img",{src:"down"===e.direction?w.a:O.a,alt:"",style:{pointerEvents:"none",transform:"rotate(0deg)"}})))}var z=v.a.div(y()),C=t(11),D=t.n(C),R=t(17),P=function(){function e(a,t,n){Object(s.a)(this,e),this.blockSize=n,this.width=a,this.height=t}return Object(o.a)(e,[{key:"generate",value:function(){var e=Math.floor(Math.random()*this.width-1),a=e%this.blockSize;e-=a,this.x=e,e=Math.floor(Math.random()*this.height-1),e-=a=e%this.blockSize,this.y=e,console.log("Food spawned at ".concat(this.x,", ").concat(this.y))}}]),e}(),M=t(18),L=t.n(M);function A(){var e=Object(u.a)(["\n    background: url(",");\n    animation: "," 2s ease-in-out infinite;\n    &:after{\n        content:'';\n        position: absolute;\n        top:0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        z-index: -1;\n        background: blue;\n        animation: 3s "," linear infinite;\n        box-shadow: 0 0 4px rgba(12,122,202,1);\n        border-radius: 50%;\n    }\n"]);return A=function(){return e},e}function I(){var e=Object(u.a)(["\n    from{\n        transform: scale(1);\n        opacity: .7\n    }\n    to{\n        transform: scale(3);\n        opacity: 0\n    }\n"]);return I=function(){return e},e}function T(){var e=Object(u.a)(["\n    0%{\n        transform: scale(1);\n        box-shadow: 0 0 0 rgba(255,255,255,.3);\n    }\n    50%{\n        transform: scale(1.2);\n        box-shadow: 0 0 10px rgba(255,255,255,.3);\n    }\n    100%{\n        transform: scale(1);\n        box-shadow: 0 0 0 rgba(255,255,255,.3);\n    }\n"]);return T=function(){return e},e}function B(e){return i.a.createElement(F,{style:{boxSizing:"border-box",background:"white",border:"1px solid rgba(255,255,255,.6)",borderRadius:"50%",width:"".concat(e.blockSize,"px"),height:"".concat(e.blockSize,"px"),position:"absolute",top:"".concat(e.top,"px"),left:"".concat(e.left,"px")}})}var G=Object(v.b)(T()),W=Object(v.b)(I()),F=v.a.div(A(),L.a,G,W);function H(){var e=Object(u.a)(["\n    width: 10px;\n    height: 10px;\n    background: red;\n"]);return H=function(){return e},e}v.a.div(H());function J(){var e=Object(u.a)(["\n    font-family: 'Press Start 2P', cursive;\n"]);return J=function(){return e},e}function U(e){return i.a.createElement(Y,null,"SCORE ",e.eaten)}var Y=v.a.div(J());function K(){var e=Object(u.a)(["\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: -1px;\n    right: -1px;\n    bottom: 0;\n    z-index: 3;\n    flex-direction: column;\n    justify-content: space-around;\n    font-family: 'Press Start 2P', cursive;\n    .flex{\n        position: relative;\n        z-index: 3;\n    }\n    .background{\n        position: absolute;\n        \n        z-index: 1;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n    }\n    .grid{\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n       \n    }\n    .block{\n        background: rgba(0,0,0,0);\n        border: 1px solid rgba(12,123,55,.3);\n        box-sizing: border-box;\n        height: ",";\n        width: ",";\n\n    }\n"]);return K=function(){return e},e}function Q(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],r=t[1],s=Object(n.useRef)(c);return s.current=c,Object(n.useEffect)((function(){for(var a=[],t=e.width/e.blockSize,n=e.height/e.blockSize,i=0;i<t*n;i++)a.push("");r(a),console.log(s.current)}),[]),Object(n.useEffect)((function(){Object(b.a)({targets:".block",rotateZ:b.a.stagger([0,900],{grid:[40,4],from:"center",axis:"x"}),scale:.3,background:"rgba(225,15,225,1)",delay:300,loop:!0,direction:"alternate",endDelay:1e3,easing:"easeInQuad"})}),[c]),i.a.createElement(V,{blockSize:e.blockSize},i.a.createElement("div",{className:"flex"},i.a.createElement("h2",null,"GAME OVER"),i.a.createElement("div",null,e.eaten),i.a.createElement("div",null,"FINAL SCORE")),i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"grid"},s.current.map((function(e,a){return i.a.createElement("div",{className:"block"})})))))}var V=v.a.div(K(),(function(e){return"".concat(e.blockSize,"px")}),(function(e){return"".concat(e.blockSize,"px")}));function Z(){var e=Object(u.a)(["\n    opacity: 0;\n    animation-delay: 2000ms;\n    animation: 1000 "," ease-in forwards;\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n    from {\n        opacity: 0\n    }\n    to{\n        opacity: 1;\n    }\n"]);return $=function(){return e},e}function q(e){var a=Object(n.useState)("down"),t=Object(l.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(new d(e.width,e.height,e.blockSize)),o=Object(l.a)(s,2),u=o[0],v=(o[1],Object(n.useState)(0)),b=Object(l.a)(v,2),g=b[0],E=b[1],f=Object(n.useState)([]),h=Object(l.a)(f,2),N=h[0],k=h[1],p=Object(n.useState)(e.width/2),x=Object(l.a)(p,2),w=x[0],j=(x[1],Object(n.useState)(e.height/2)),O=Object(l.a)(j,2),y=O[0],z=(O[1],Object(n.useState)(0)),C=Object(l.a)(z,2),M=C[0],L=C[1],A=Object(n.useState)(new P(e.width,e.height)),I=Object(l.a)(A,2),T=(I[0],I[1]),G=Object(n.useState)(0),W=Object(l.a)(G,2),F=W[0],H=W[1],J=Object(n.useState)(0),Y=Object(l.a)(J,2),K=Y[0],V=Y[1],Z=Object(n.useRef)(),$=Object(n.useRef)(F);$.current=F;var q=Object(n.useRef)(K);q.current=K;var X=Object(n.useRef)(g),ee=Object(n.useState)(!1),ae=Object(l.a)(ee,2),te=ae[0],ne=ae[1];X.current=g;var ie=Object(n.useRef)(N);ie.current=N;var ce=Object(n.useRef)(c);function re(e){var a=e.keyCode;if((38!==a||"down"!==ce.current)&&(40!==a||"up"!==ce.current)&&(37!==a||"right"!==ce.current)&&(39!==a||"left"!==ce.current))switch(a){case 38:r("up");break;case 40:r("down");break;case 37:r("left");break;case 39:r("right")}}function le(){return(le=Object(R.a)(D.a.mark((function a(){var t,n,i,c,r,l,s,o;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=function(e){ne(!0),clearInterval(e)},s=function(){var e=X.current;e++,E(e)},l=function(a){(u.x<0||u.x>=e.width||u.y<0||u.y>=e.height)&&(console.log("Collision with wall."),o(a)),ie.current.forEach((function(e,t){u.x==e.x&&u.y==e.y&&o(a)}))},r=function(e,a){e===u.x&&a===u.y&&(console.log("eaten"),se(),s())},c=function(e){n.unshift(e),console.log(X.current),n=n.slice(0,X.current),console.log(n),k(n)},a.next=7,new Promise((function(e,a){setTimeout((function(){e("Done waiting!")}),4e3)}));case 7:a.sent,t=0,n=[{}],console.log("waited"),i=setInterval((function(){var e={x:u.x,y:u.y};u.updateLocation(),c(e),t++,L(t),r($.current,q.current),l(i)}),300);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function se(){var a=Math.floor(Math.random()*e.width-1);console.log(a);var t=a%e.blockSize;console.log(t),H(a-=t);var n=Math.floor(Math.random()*e.height-1);n-=n%e.blockSize,console.log(e.width),console.log(e.height),console.log(a),console.log(n),V(n)}return ce.current=c,Object(n.useEffect)((function(){window.addEventListener("keydown",re)}),[]),Object(n.useEffect)((function(){u.changeDirection(c)}),[c]),Object(n.useEffect)((function(){console.log("Mounting game component."),T(new P(e.width,e.height,e.blockSize)),se(),function(){le.apply(this,arguments)}()}),[]),i.a.createElement(_,{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"100%"}},i.a.createElement("div",{id:"game-elements",ref:Z,style:{position:"relative",width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),margin:"0 auto",border:"1px solid white",borderRadius:"4px",overflow:"hidden"}},i.a.createElement(m,{frame:M,x:w,y:y,snake:u,blockSize:e.blockSize}),i.a.createElement(B,{frame:M,left:F,top:K,blockSize:e.blockSize}),N.map((function(a,t){return i.a.createElement("div",{key:t,style:{position:"absolute",width:"".concat(e.blockSize,"px"),height:"".concat(e.blockSize,"px"),background:"rgb(252, ".concat(15+10*t,", ").concat(3+5*t,")"),top:"".concat(a.y,"px"),left:"".concat(a.x,"px"),color:"white"}})})),te&&i.a.createElement(Q,{eaten:g,blockSize:e.blockSize,width:e.width,height:e.height})),i.a.createElement("div",{style:{width:"".concat(e.width,"px"),margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",height:"160px",position:"relative",boxSizing:"border-box",padding:"10px",justifyContent:"space-between"}},i.a.createElement(U,{eaten:X.current}),i.a.createElement(S,{direction:c,changeDirection:function(e){var a=e.dataset.direction;"up"!==a||"down"!==ce.current?"down"===a&&"up"===ce.current||"left"===a&&"right"===ce.current||"right"===a&&"left"===ce.current||r(a):console.log("new = "+a+"||| current= "+ce.current)}})))}var X=Object(v.b)($()),_=v.a.div(Z(),X);function ee(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: white;\n"]);return ee=function(){return e},e}function ae(){return i.a.createElement(te,{id:"page-about"},"ABOUT")}var te=v.a.div(ee());function ne(){var e=Object(u.a)(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    font-size: 30px;\n    z-index: 101;\n    font-family: 'Press Start 2P', cursive;\n"]);return ne=function(){return e},e}function ie(){var e=Object(u.a)(["\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    z-index: 100;\n    .transition-cell{\n        width: 10vw;\n        height: 10vh;\n        background: white;\n    }\n"]);return ie=function(){return e},e}function ce(){return Object(n.useEffect)((function(){Object(b.a)({targets:".transition-cell",scale:[0,1],delay:b.a.stagger(10,{from:"first"}),duration:700,endDelay:400,direction:"alternate"})}),[]),i.a.createElement("div",null,i.a.createElement(le,{className:"loading-message"},i.a.createElement("div",null,"LOADING")),i.a.createElement(re,null,i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"}),i.a.createElement("div",{className:"transition-cell"})))}var re=v.a.div(ie()),le=v.a.div(ne());function se(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),o=s[0],d=s[1],m=Object(n.useState)(),u=Object(l.a)(m,2),v=(u[0],u[1],Object(n.useState)(0)),b=Object(l.a)(v,2),g=b[0],E=b[1],f=Object(n.useState)(!1),N=Object(l.a)(f,2),k=N[0],p=N[1],x=Object(n.useState)([0,0]),w=Object(l.a)(x,2),j=(w[0],w[1],Object(n.useState)(!1)),O=Object(l.a)(j,2),y=O[0],S=O[1],z=Object(n.useState)(!1),C=Object(l.a)(z,2),D=C[0],R=C[1];return Object(n.useEffect)((function(){!function(){var e=window.innerWidth,a=window.innerHeight,t=(e-=e%40)/40;a=a-a%t-160,console.log(e),d(e),E(a),c(t)}()}),[]),i.a.createElement("div",{id:"game-container",style:{width:"100%",height:"100vh"}},y&&i.a.createElement(ae,null),D&&i.a.createElement(ce,null),!k&&i.a.createElement(h,{toggleAbout:S,startGame:function(){R(!0),setTimeout((function(){R(!1)}),4e3),p(!0)}}),k&&i.a.createElement(q,{blockSize:t,height:g,width:o}))}var oe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.98a35894.chunk.js.map