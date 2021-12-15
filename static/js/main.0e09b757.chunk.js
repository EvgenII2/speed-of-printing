(this["webpackJsonpspeed-of-printing"]=this["webpackJsonpspeed-of-printing"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),o=(n(11),n(2)),u=(n(12),n(13),n(0));var r=function(e){var t=e.isOpen,n=e.message,c=e.onClick,a=e.buttonTitle,s=void 0===a?"Ok":a;return t?Object(u.jsx)("div",{className:"Popup",children:Object(u.jsxs)("div",{className:"Popup__container",children:[Object(u.jsx)("h2",{className:"Popup__title",children:n}),Object(u.jsx)("button",{"aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"Popup__button",onClick:c,children:s})]})}):Object(u.jsx)("div",{className:"Popup_unvisible"})};n(15);var l=function(e){var t=e.title,n=e.value,c=e.unit;return Object(u.jsxs)("p",{className:"InfoComponent",children:[Object(u.jsxs)("span",{className:"InfoComponent__title",children:[t,":"]}),Object(u.jsx)("span",{className:"InfoComponent__value",children:" ".concat(n&&!isNaN(n)?n:" - "," ").concat(c)})]})};n(16);var j=function(e){var t=e.printedText,n=e.textToPrint;return Object(u.jsxs)("article",{className:"TextComponent",children:[Object(u.jsx)("span",{className:"TextComponent__printed-text",children:t}),Object(u.jsx)("span",{className:"TextComponent__current-symbol",children:n.charAt(0)}),Object(u.jsx)("span",{className:"TextComponent__text-to-print",children:n.substr(1)})]})},p=n(5),b=n(6),d=new(function(){function e(t){Object(p.a)(this,e),this.options=t,this.baseUrl=this.options.baseUrl}return Object(b.a)(e,[{key:"getText",value:function(){return fetch("".concat(this.baseUrl)).then((function(e){return e.json()}))}}]),e}())({baseUrl:"https://baconipsum.com/api/?type=meat-and-filler&paras=1"}),f=[8,9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93,111,112,113,114,115,116,117,118,119,120,121,122,123,144,145];var O=function(){var e=a.a.useState(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=a.a.useState(0),i=Object(o.a)(s,2),p=i[0],b=i[1],O=a.a.useState(0),m=Object(o.a)(O,2),x=m[0],h=m[1],v=a.a.useState(!0),_=Object(o.a)(v,2),N=_[0],S=_[1],y=a.a.useState(!1),g=Object(o.a)(y,2),k=g[0],C=g[1],T=a.a.useState(0),A=Object(o.a)(T,2),E=A[0],P=A[1],I=a.a.useState(0),w=Object(o.a)(I,2),U=w[0],Y=w[1],F=a.a.useState(""),J=Object(o.a)(F,2),L=J[0],B=J[1],M=a.a.useState(""),q=Object(o.a)(M,2),z=q[0],D=q[1],G=a.a.useState(!1),H=Object(o.a)(G,2),K=H[0],Q=H[1],R=a.a.useState(!1),V=Object(o.a)(R,2),W=V[0],X=V[1],Z=a.a.useState(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=a.a.useState(0),ce=Object(o.a)(ne,2),ae=ce[0],se=ce[1],ie=a.a.useState(0),oe=Object(o.a)(ie,2),ue=oe[0],re=oe[1],le=function(){d.getText().then((function(e){var t=e.toString().replace(/\s+/g," ");D(t),P(t.length-1)})).catch((function(e){console.log("Error: ".concat(e))}))},je=function(){c(0),B(""),b(0),P(0),se(0),re(0),h(0),S(!0),C(!1),Q(!1),X(!1)},pe=a.a.useCallback((function(e){if(!f.includes(e.keyCode)){var t=e.key;t!==ee||N?(re(ue+1),Q(!0)):(B(L+t),D(null===z||void 0===z?void 0:z.substring(1)),se(ae+1),Q(!1),0!==ae&&ae===E&&(Y(n),X(!1),C(!0)))}}),[n,ee,z,L,ue,ae,N,E]);return a.a.useEffect((function(){return document.addEventListener("keydown",pe),function(){document.removeEventListener("keydown",pe)}}),[pe]),a.a.useEffect((function(){var e=null;return W&&(e=setInterval((function(){c((function(e){return e+1}))}),1e3)),function(){clearInterval(e)}}),[W,n]),a.a.useEffect((function(){le()}),[]),a.a.useEffect((function(){N||b((ae/n*60).toFixed(2))}),[ae,N,n]),a.a.useEffect((function(){void 0!==z&&te(z.charAt(0))}),[z]),a.a.useEffect((function(){h((100-ue/(ae+ue)*100).toFixed(2))}),[ae,ue]),Object(u.jsxs)("div",{className:K?"App App__error":"App",children:[Object(u.jsx)(r,{isOpen:N,message:"Are you ready?",onClick:function(){S(!1),X(!0)},buttonTitle:"Start"}),Object(u.jsx)(r,{isOpen:k,message:"You entered ".concat(ae," symbols to ").concat(U," sec. Your speed is ").concat(p," sym/min. Your accuracy is ").concat(x,"%."),onClick:function(){je(),le()}}),Object(u.jsx)("h1",{className:"App__header",children:"Test speed of printing"}),Object(u.jsxs)("div",{className:"App__main",children:[Object(u.jsx)(j,{printedText:L,textToPrint:z}),Object(u.jsxs)("div",{className:"App__info-column",children:[Object(u.jsx)(l,{title:"Time",value:n,unit:"sec."}),Object(u.jsx)(l,{title:"Speed",value:p,unit:"sym/min"}),Object(u.jsx)(l,{title:"You entered",value:ae,unit:"symbols"}),Object(u.jsx)(l,{title:"Accuracy",value:x,unit:"%"})]})]}),Object(u.jsx)("button",{className:"App__button",onClick:function(){je(),le()},children:"Another text"})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.0e09b757.chunk.js.map