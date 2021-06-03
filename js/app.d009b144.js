(function(e){function t(t){for(var n,i,o=t[0],l=t[1],s=t[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bioinfo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1b52":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"px-4"},c={class:"font-inter container mx-auto border-4 border-black my-4"},i={class:"flex items-center justify-between border-b-4 border-black px-4 py-6 bg-indigo-400"},o=Object(n["createTextVNode"])("🧬BioInfo"),l={class:"p-4"};function s(e,t){var a=Object(n["resolveComponent"])("router-link"),s=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])("div",c,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(a,{to:"/",class:"text-5xl font-extrabold font-mono"},{default:Object(n["withCtx"])((function(){return[o]})),_:1})]),Object(n["createVNode"])("div",l,[Object(n["createVNode"])(s)])])])}a("853f");const u={};u.render=s;var d=u,b=a("6c02"),p={class:"prose"},f=Object(n["createVNode"])("h1",null,"Sommaire:",-1),h=Object(n["createVNode"])("h2",null,"Comment réassembler un génome?",-1),m=Object(n["createTextVNode"])("Composition de chaine de caractères"),O=Object(n["createVNode"])("h2",null,"Comparaison de chaines de caractères",-1),v=Object(n["createTextVNode"])("Distance de Levenshtein"),j=Object(n["createTextVNode"])("Benchmark");function g(e,t,a,r,c,i){var o=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",p,[f,Object(n["createVNode"])("ul",null,[Object(n["createVNode"])("li",null,[h,Object(n["createVNode"])("ul",null,[Object(n["createVNode"])("li",null,[Object(n["createVNode"])(o,{to:"/composition"},{default:Object(n["withCtx"])((function(){return[m]})),_:1})])])]),Object(n["createVNode"])("li",null,[O,Object(n["createVNode"])("ul",null,[Object(n["createVNode"])("li",null,[Object(n["createVNode"])(o,{to:"/levenshtein"},{default:Object(n["withCtx"])((function(){return[v]})),_:1})]),Object(n["createVNode"])("li",null,[Object(n["createVNode"])(o,{to:"/levenshtein-benchmark"},{default:Object(n["withCtx"])((function(){return[j]})),_:1})])])])])])}var N={name:"Home",components:{}};N.render=g;var V=N,y={class:"prose"},x=Object(n["createVNode"])("h1",null,"Composition de chaine de caractères",-1),C=Object(n["createVNode"])("p",null," Trouver toutes les sous-chaines de caractères en fonction d'une string finale et d'un nombre de caractères par sous-chaines. ",-1),w=Object(n["createVNode"])("h2",null,"Exemple:",-1),k=Object(n["createVNode"])("h3",null,"Input:",-1),T=Object(n["createVNode"])("div",{class:"bg-gray-300 p-4"}," 5 CAATCCAAC ",-1),M=Object(n["createVNode"])("h3",null,"Output:",-1),R=Object(n["createVNode"])("div",{class:"bg-gray-300 p-4"}," CAATC AATCC ATCCA TCCAA CCAAC ",-1),A=Object(n["createVNode"])("hr",null,null,-1),D={class:"mb-4"},S=Object(n["createVNode"])("label",{for:"taille"},"Taille",-1),B={class:"mb-4"},I=Object(n["createVNode"])("label",{for:"chaine"},"Chaine de caractères",-1),L={class:"mb-4"},U={class:"mb-4"},_=Object(n["createVNode"])("label",{for:"resultat"},"Résultat",-1);function P(e,t,a,r,c,i){return Object(n["openBlock"])(),Object(n["createBlock"])("div",y,[x,C,w,k,T,M,R,A,Object(n["createVNode"])("div",D,[S,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",id:"taille",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.taille=t})},null,512),[[n["vModelText"],e.taille]])]),Object(n["createVNode"])("div",B,[I,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",id:"chaine",class:"form-input","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.chaine=t})},null,512),[[n["vModelText"],e.chaine]])]),Object(n["createVNode"])("div",L,[Object(n["createVNode"])("button",{class:"btn",onClick:t[3]||(t[3]=function(e){return i.getResultat()})}," Résultat ")]),Object(n["createVNode"])("div",U,[_,Object(n["withDirectives"])(Object(n["createVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.resultat=t}),type:"text",id:"resultat",class:"form-input",rows:"5",readonly:""},null,512),[[n["vModelText"],e.resultat]])])])}a("a15b");var F={data:function(){return{taille:5,chaine:"CAATCCAAC",resultat:""}},methods:{getResultat:function(){for(var e=this.chaine.length-this.taille+1,t=[],a=0;a<e;a++){var n=this.chaine.substr(a,this.taille);t.push(n)}this.resultat=t.join("\n")}}};F.render=P;var z=F,E=(a("498a"),Object(n["withScopeId"])("data-v-172baaf2"));Object(n["pushScopeId"])("data-v-172baaf2");var H={class:"grid grid-cols-1 xl:grid-cols-2 gap-8"},q={class:"prose"},J=Object(n["createStaticVNode"])('<h1 data-v-172baaf2>Distance de Levenshtein</h1><div data-v-172baaf2> Trouver la distance de Levenshtein, càd le nombre de modifications qu&#39;il faudrait pour obtenir une chaine de caractères à partir d&#39;une autre. Les modifications possibles sont les suivantes: <ul data-v-172baaf2><li data-v-172baaf2>Ajouter une lettre</li><li data-v-172baaf2>Supprimer une lettre</li><li data-v-172baaf2>Modifier une lettre</li></ul></div><h2 data-v-172baaf2>Exemple:</h2><h3 data-v-172baaf2>Input:</h3><div class="bg-gray-300 p-4" data-v-172baaf2> CAATCCAAC CATTTCACC </div><h3 data-v-172baaf2>Output:</h3><div class="bg-gray-300 p-4" data-v-172baaf2> 3 </div><hr data-v-172baaf2>',8),G={class:"mb-4"},$=Object(n["createVNode"])("label",{for:"chaine1"},"Chaine de caractères 1",-1),K={class:"text-sm text-gray-500"},Q={class:"font-bold"},W=Object(n["createTextVNode"])(" caractères"),X={class:"mb-4"},Y=Object(n["createVNode"])("label",{for:"chaine2"},"Chaine de caractères 2",-1),Z={class:"text-sm text-gray-500"},ee={class:"font-bold"},te=Object(n["createTextVNode"])(" caractères"),ae={class:"mb-4"},ne=Object(n["createVNode"])("label",{for:"chaine2"},"Vitesse de l'animation",-1),re={class:"mb-4"},ce={class:"mt-12 xl:mt-0 w-full"},ie=Object(n["createVNode"])("div",{class:"prose"},[Object(n["createVNode"])("h2",null,"Résultat")],-1),oe={class:"overflow-x-auto"},le={ref:"matrix"},se={class:"text-gray-600 mt-2 flex w-full space-x-4 items-center"},ue={for:"iteration-count"},de=Object(n["createTextVNode"])("Itération "),be={class:"font-bold"},pe=Object(n["createTextVNode"])(" sur "),fe={class:"font-bold"};Object(n["popScopeId"])();var he=E((function(e,t,a,r,c,i){return Object(n["openBlock"])(),Object(n["createBlock"])("div",H,[Object(n["createVNode"])("div",q,[J,Object(n["createVNode"])("div",G,[$,Object(n["withDirectives"])(Object(n["createVNode"])("input",{onInput:t[1]||(t[1]=function(t){return e.resultMatrix=[]}),type:"text",id:"chaine1",class:"form-input","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.chaine1=t})},null,544),[[n["vModelText"],e.chaine1]]),Object(n["createVNode"])("span",K,[Object(n["createVNode"])("span",Q,Object(n["toDisplayString"])(e.chaine1.trim().length),1),W])]),Object(n["createVNode"])("div",X,[Y,Object(n["withDirectives"])(Object(n["createVNode"])("input",{onInput:t[3]||(t[3]=function(t){return e.resultMatrix=[]}),type:"text",id:"chaine2",class:"form-input","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.chaine2=t})},null,544),[[n["vModelText"],e.chaine2]]),Object(n["createVNode"])("span",Z,[Object(n["createVNode"])("span",ee,Object(n["toDisplayString"])(e.chaine2.trim().length),1),te])]),Object(n["createVNode"])("div",ae,[ne,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"range",min:"10",max:"2000","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.timer=t}),id:"timer-input",class:"form-input"},null,512),[[n["vModelText"],e.timer]]),Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(e.timer/1e3)+" secondes",1)]),Object(n["createVNode"])("div",re,[Object(n["createVNode"])("button",{class:"btn",onClick:t[6]||(t[6]=Object(n["withModifiers"])((function(e){return i.getResultat()}),["prevent"]))}," Résultat ")])]),Object(n["createVNode"])("div",null,[Object(n["withDirectives"])(Object(n["createVNode"])("div",ce,[ie,Object(n["createVNode"])("div",oe,[Object(n["createVNode"])("table",le,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.resultMatrix,(function(t,a){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:a},[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.resultMatrix[a],(function(t,r){return Object(n["openBlock"])(),Object(n["createBlock"])("td",{key:r,class:[0===a||0===r?"char":"",1===a&&1===r||"init"===e.resultMatrix[a][r].type||a!==r?"":"underline",a===e.resultMatrix.length-1&&r===e.resultMatrix[0].length-1&&"init"!==e.resultMatrix[a][r].type?"bg-yellow-200 text-yellow-700":""]},Object(n["toDisplayString"])(e.resultMatrix[a][r].value),3)})),128))])})),128))],512)]),Object(n["createVNode"])("div",se,[Object(n["createVNode"])("div",null,[Object(n["createVNode"])("label",ue,[de,Object(n["createVNode"])("span",be,Object(n["toDisplayString"])(e.iteration),1),pe,Object(n["createVNode"])("span",fe,Object(n["toDisplayString"])(e.iterationCount),1)])]),Object(n["createVNode"])("meter",{class:"flex-grow",id:"iteration-count",min:"0",max:e.iterationCount,low:"33",high:"66",optimum:"80",value:e.iteration},null,8,["max","value"])])],512),[[n["vShow"],e.resultMatrix.length>0]])])])})),me=a("1da1"),Oe=(a("d3b7"),a("d81d"),a("cb29"),a("96cf"),{data:function(){return{chaine1:"CAATCCAAC",chaine2:"CATTTCACC",resultat:"",resultMatrix:[],timer:200,iterationCount:0,iteration:0}},methods:{getResultat:function(){var e=this;return Object(me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.animateLevenshtein();case 1:case"end":return t.stop()}}),t)})))()},animateLevenshtein:function(){var e=this,t=this.chaine1.trim().toLowerCase(),a=this.chaine2.trim().toLowerCase();this.createMatrix(t,a);var n=this.levensteinIter(t,a);setTimeout((function(){e.$refs.matrix.scrollIntoView({behavior:"smooth"})}),200),this.iterationCount=n.length,this.iteration=0,this.renderOperations(n)},renderOperations:function(e){var t=this;return Object(me["a"])(regeneratorRuntime.mark((function a(){var n,r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},r=0;case 2:if(!(r<t.iterationCount)){a.next=11;break}return t.iteration+=1,c=e[r],t.resultMatrix[c.y+1][c.x+1]=c,a.next=8,n(t.timer);case 8:r++,a.next=2;break;case 11:case"end":return a.stop()}}),a)})))()},createMatrix:function(e,t){for(var a=new Array(t.length+2),n=0;n<a.length;n++){a[n]=new Array(e.length+2);for(var r=0;r<a[n].length;r++)a[n][r]={value:0,type:"init"}}a[0][0]={value:"",type:"init"},a[0][1]={value:"",type:"init"},a[1][0]={value:"",type:"init"};for(var c=2;c<a[0].length;c++)a[0][c]={value:e[c-2],type:"init"};for(var i=2;i<a.length;i++)a[i][0]={value:t[i-2],type:"init"};this.resultMatrix=a},levensteinIter:function(e,t){for(var a=e.length+1,n=t.length+1,r=[],c=new Array(a).fill(0).map((function(){return new Array(n).fill(0)})),i=1;i<a;i++)c[i][0]=i,r.push(this.updateCellOperation(i,0,i));for(var o=1;o<n;o++)c[0][o]=o,r.push(this.updateCellOperation(0,o,o));console.log(c);for(var l=1;l<n;l++)for(var s=1;s<a;s++){var u=void 0;u=e.charAt(s-1)===t.charAt(l-1)?0:1;var d=Math.min(c[s-1][l]+1,c[s][l-1]+1,c[s-1][l-1]+u);c[s][l]=d,r.push(this.updateCellOperation(s,l,d))}return console.log(r),r},updateCellOperation:function(e,t,a){return{type:"update-cell",x:e,y:t,value:a}},deletionOperation:function(e,t,a){return{type:"delete",x:e,y:t,value:a}},insertionOperation:function(e,t,a){return{type:"insertion",x:e,y:t,value:a}},substitutionOperation:function(e,t,a){return{type:"substitution",x:e,y:t,value:a}}}});a("8a17");Oe.render=he,Oe.__scopeId="data-v-172baaf2";var ve=Oe,je=(a("b0c0"),{class:"grid grid-cols-1 xl:grid-cols-2 gap-8"}),ge={class:"prose"},Ne=Object(n["createStaticVNode"])('<h1>Distance de Levenshtein: Benchmark</h1> Test des 4 algorithmes suivants: <ul><li>Récursif naif 1</li><li>Récursif naif 2</li><li>Récursif mémoïsation</li><li>Itératif (bottom-up)</li></ul><h2>Exemple:</h2><h3>Input:</h3><div class="bg-gray-300 p-4"> CAATCCAAC CATTTCACC </div><h3>Output:</h3><div class="bg-gray-300 p-4"> 3 </div><hr>',9),Ve={class:"mb-4"},ye=Object(n["createVNode"])("label",{for:"chaine1"},"Chaine de caractères 1",-1),xe={class:"text-sm text-gray-500"},Ce={class:"font-bold"},we=Object(n["createTextVNode"])(" caractères"),ke={class:"mb-4"},Te=Object(n["createVNode"])("label",{for:"chaine2"},"Chaine de caractères 2",-1),Me={class:"text-sm text-gray-500"},Re={class:"font-bold"},Ae=Object(n["createTextVNode"])(" caractères"),De={class:"mb-4"},Se=Object(n["createVNode"])("label",{for:"chaine2"},"Nombre d'itérations",-1),Be={class:"flex flex-col space-y-8 mt-12 mb-6"},Ie={class:"mb-4"},Le={class:"mb-4"},Ue={for:"resultat-naif"},_e={class:"mb-4"},Pe={class:"mb-4"},Fe={for:"resultat-naif"},ze={class:"mb-4"},Ee={class:"mb-4"},He={for:"resultat-memo"},qe={key:0},Je={class:"mb-4"},Ge={class:"mb-4"},$e={for:"resultat-iter"},Ke={key:0},Qe={class:"prose"},We=Object(n["createVNode"])("h2",null,"Résultats",-1),Xe={key:0},Ye=Object(n["createVNode"])("div",{class:"grid grid-cols-10 gap-8 uppercase font-bold py-2"},[Object(n["createVNode"])("div",{class:"col-span-2 text-right"},"Itération"),Object(n["createVNode"])("div",{class:"col-span-4"},"Temps"),Object(n["createVNode"])("div",{class:"col-span-4"},"Chaines")],-1),Ze={class:"flex flex-col max-h-64"},et={class:"flex-grow overflow-y-auto"},tt={class:"col-span-2 text-right text-gray-400"},at={class:"col-span-4"},nt={class:"col-span-4 text-gray-400 text-sm flex items-center uppercase"},rt={class:"grid grid-cols-10 gap-8 uppercase font-bold py-2 text-primary-500"},ct=Object(n["createVNode"])("div",{class:"col-span-2 text-right"},"Moyenne",-1),it={class:"col-span-4"},ot={class:"col-span-4 text-sm text-gray-400 flex items-center capitalize"},lt={class:"pt-8"},st=Object(n["createVNode"])("div",{class:"prose"},[Object(n["createVNode"])("h2",null,"Graphique")],-1),ut={id:"chart",class:"h-full"};function dt(e,t,a,r,c,i){var o=Object(n["resolveComponent"])("apexchart");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("div",je,[Object(n["createVNode"])("div",ge,[Ne,Object(n["createVNode"])("div",Ve,[ye,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",id:"chaine1",name:"chaine1",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.chaine1=t})},null,512),[[n["vModelText"],e.chaine1]]),Object(n["createVNode"])("span",xe,[Object(n["createVNode"])("span",Ce,Object(n["toDisplayString"])(e.chaine1.trim().length),1),we])]),Object(n["createVNode"])("div",ke,[Te,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",id:"chaine2",name:"chaine2",class:"form-input","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.chaine2=t})},null,512),[[n["vModelText"],e.chaine2]]),Object(n["createVNode"])("span",Me,[Object(n["createVNode"])("span",Re,Object(n["toDisplayString"])(e.chaine2.trim().length),1),Ae])]),Object(n["createVNode"])("div",De,[Se,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"range",min:"1",max:"1000","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.iterations=t}),id:"iterations-input",class:"form-input"},null,512),[[n["vModelText"],e.iterations]]),Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(e.iterations)+" itérations",1)]),Object(n["createVNode"])("div",Be,[Object(n["createVNode"])("div",null,[Object(n["createVNode"])("div",Ie,[Object(n["createVNode"])("button",{class:"btn",onClick:t[4]||(t[4]=Object(n["withModifiers"])((function(e){return i.getResultatNaif()}),["prevent"]))},Object(n["toDisplayString"])(i.algoName("naif")),1)]),Object(n["createVNode"])("div",Le,[Object(n["createVNode"])("label",Ue,"Résultat "+Object(n["toDisplayString"])(i.algoName("naif"))+" (modification des strings)",1),Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",id:"resultat-naif",class:"form-input","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.resultatNaif=t}),readonly:""},null,512),[[n["vModelText"],e.resultatNaif]])]),Object(n["withDirectives"])(Object(n["createVNode"])("div",null,Object(n["toDisplayString"])(e.tempsResultatNaif),513),[[n["vShow"],e.tempsResultatNaif]])]),Object(n["createVNode"])("div",null,[Object(n["createVNode"])("div",_e,[Object(n["createVNode"])("button",{class:"btn btn-ternary",onClick:t[6]||(t[6]=Object(n["withModifiers"])((function(e){return i.getResultatNaif2()}),["prevent"]))},Object(n["toDisplayString"])(i.algoName("naif2")),1)]),Object(n["createVNode"])("div",Pe,[Object(n["createVNode"])("label",Fe,"Résultat "+Object(n["toDisplayString"])(i.algoName("naif2"))+" (indices en paramètres)",1),Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",id:"resultat-naif",class:"form-input","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.resultatNaif2=t}),readonly:""},null,512),[[n["vModelText"],e.resultatNaif2]])]),Object(n["withDirectives"])(Object(n["createVNode"])("div",null,Object(n["toDisplayString"])(e.tempsResultatNaif2),513),[[n["vShow"],e.tempsResultatNaif2]])]),Object(n["createVNode"])("div",null,[Object(n["createVNode"])("div",ze,[Object(n["createVNode"])("button",{class:"btn-primary",onClick:t[8]||(t[8]=Object(n["withModifiers"])((function(e){return i.getResultatMemoization()}),["prevent"]))},Object(n["toDisplayString"])(i.algoName("memo")),1)]),Object(n["createVNode"])("div",Ee,[Object(n["createVNode"])("label",He,"Résultat "+Object(n["toDisplayString"])(i.algoName("memo")),1),Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",id:"resultat-memo",class:"form-input","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.resultatMemo=t}),readonly:""},null,512),[[n["vModelText"],e.resultatMemo]])]),e.tempsResultatMemo?(Object(n["openBlock"])(),Object(n["createBlock"])("div",qe,Object(n["toDisplayString"])(e.tempsResultatMemo),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])("div",null,[Object(n["createVNode"])("div",Je,[Object(n["createVNode"])("button",{class:"btn-secondary",onClick:t[10]||(t[10]=Object(n["withModifiers"])((function(e){return i.getResultatIter()}),["prevent"]))},Object(n["toDisplayString"])(i.algoName("iter")),1)]),Object(n["createVNode"])("div",Ge,[Object(n["createVNode"])("label",$e,"Résultat "+Object(n["toDisplayString"])(i.algoName("iter")),1),Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",id:"resultat-iter",class:"form-input","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.resultatIter=t}),readonly:""},null,512),[[n["vModelText"],e.resultatIter]])]),e.tempsResultatIter?(Object(n["openBlock"])(),Object(n["createBlock"])("div",Ke,Object(n["toDisplayString"])(e.tempsResultatIter),1)):Object(n["createCommentVNode"])("",!0)])])]),Object(n["createVNode"])("div",Qe,[We,(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.temps,(function(t,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:a},[t.data.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])("div",Xe,[Object(n["createVNode"])("h3",null,Object(n["toDisplayString"])(i.algoName(t.name)),1),Ye,Object(n["createVNode"])("div",Ze,[Object(n["createVNode"])("div",et,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(t.data,(function(t,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"grid grid-cols-10 gap-8",key:a},[Object(n["createVNode"])("div",tt," #"+Object(n["toDisplayString"])(a+1),1),Object(n["createVNode"])("div",at,Object(n["toDisplayString"])(i.affichageTemps(t[1])),1),Object(n["createVNode"])("div",nt,Object(n["toDisplayString"])(e.inputs[t[0]]),1)])})),128))])]),Object(n["createVNode"])("div",rt,[ct,Object(n["createVNode"])("div",it,Object(n["toDisplayString"])(i.moyenneTemps(t)),1),Object(n["createVNode"])("div",ot,Object(n["toDisplayString"])(t.data.length)+" itérations ",1)])])):Object(n["createCommentVNode"])("",!0)])})),128))])]),Object(n["createVNode"])("div",lt,[st,Object(n["createVNode"])("div",ut,[Object(n["createVNode"])(o,{type:"scatter",height:"1000",options:e.chartOptions,series:e.temps},null,8,["options","series"])])])])}a("159b"),a("8ba4"),a("a9e3"),a("fb6a");var bt=a("ae27"),pt=a.n(bt),ft={components:{apexchart:pt.a},data:function(){return{chartOptions:{},chaine1:"CAATCCAAC",chaine2:"CATTTCACC",resultatNaif:"",tempsResultatNaif:0,resultatNaif2:"",tempsResultatNaif2:0,resultatMemo:"",tempsResultatMemo:0,resultatIter:"",tempsResultatIter:0,iterations:10,temps:[{name:"naif",data:[]},{name:"naif2",data:[]},{name:"memo",data:[]},{name:"iter",data:[]}],inputs:[]}},methods:{moyenneTemps:function(e){var t=0;return 0!==e.length&&(t=e.data.reduce((function(e,t){return e+t[1]}),0)/e.data.length),this.affichageTemps(t)},algoIdBySlug:function(e){var t={naif:0,naif2:1,memo:2,iter:3};return t[e]},algoSlugById:function(e){var t=["naif","naif2","memo","ite"];return t[e]},algoName:function(e){var t={naif:"Récursif naïf 1",naif2:"Récursif naïf 2",memo:"Récursif mémoïsation",iter:"Itératif (bottom-up)"};return t[e]},getResultatNaif:function(){var e=this;return Object(me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.calculerLenvenshteinDistance("naif").then(e.successCallback,e.failureCallback);case 2:case"end":return t.stop()}}),t)})))()},getResultatNaif2:function(){var e=this;return Object(me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.calculerLenvenshteinDistance("naif2").then(e.successCallback,e.failureCallback);case 2:case"end":return t.stop()}}),t)})))()},getResultatMemoization:function(){var e=this;return Object(me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.calculerLenvenshteinDistance("memo").then(e.successCallback,e.failureCallback);case 2:case"end":return t.stop()}}),t)})))()},getResultatIter:function(){var e=this;return Object(me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.calculerLenvenshteinDistance("iter").then(e.successCallback,e.failureCallback);case 2:case"end":return t.stop()}}),t)})))()},getInputIdByString:function(e){var t=null;return this.inputs.forEach((function(a,n){e===a&&(t=n)})),t},calculerLenvenshteinDistance:function(e){var t=this;return new Promise((function(a,n){var r,c,i=0,o=0,l=t.chaine1+" - "+t.chaine2,s=t.getInputIdByString(l);null===s&&(s=t.inputs.length,t.inputs.push(l));for(var u=0;u<t.iterations;u++){if(r=performance.now(),"naif"===e)i=t.levensteinRec(t.chaine1,t.chaine2);else if("naif2"===e)i=t.levensteinNaif2(t.chaine1,t.chaine2,t.chaine1.length,t.chaine2.length);else if("memo"===e){var d=new Array(t.chaine1.length+1).fill(-1).map((function(){return new Array(t.chaine2.length+1).fill(-1)}));i=t.levensteinMemo(t.chaine1,t.chaine2,t.chaine1.length,t.chaine2.length,d)}else"iter"===e&&(i=t.levensteinIter(t.chaine1,t.chaine2));c=performance.now();var b=c-r;o+=b,t.temps[t.algoIdBySlug(e)].data.push([s,b])}Number.isInteger(i)?("naif"===e?(t.resultatNaif=i,t.tempsResultatNaif=t.affichageTemps(o)):"naif2"===e?(t.resultatNaif2=i,t.tempsResultatNaif2=t.affichageTemps(o)):"memo"===e?(t.resultatMemo=i,t.tempsResultatMemo=t.affichageTemps(o)):"iter"===e&&(t.resultatIter=i,t.tempsResultatIter=t.affichageTemps(o)),a(i)):n(i)}))},successCallback:function(e){console.log("L'opération a réussi avec le message : "+e)},failureCallback:function(e){console.error("L'opération a échoué avec le message : "+e)},levensteinRec:function(e,t){return t.length?e.length?Math.min(this.levensteinRec(e.slice(1),t)+1,this.levensteinRec(t.slice(1),e)+1,this.levensteinRec(e.slice(1),t.slice(1))+(e[0]==t[0]?0:1)):t.length:e.length},levensteinNaif2:function(e,t,a,n){return 0===a?n:0===n?a:e[a-1]===t[n-1]?this.levensteinNaif2(e,t,a-1,n-1):Math.min(this.levensteinNaif2(e,t,a,n-1),this.levensteinNaif2(e,t,a-1,n),this.levensteinNaif2(e,t,a-1,n-1))+1},levensteinMemo:function(e,t,a,n,r){if(0===a)return n;if(0===n)return a;if(-1!==r[a][n])return r[a][n];if(e[a-1]===t[n-1])return r[a][n]=r[a-1][n-1],this.levensteinMemo(e,t,a-1,n-1,r);var c=Math.min(this.levensteinMemo(e,t,a,n-1,r),this.levensteinMemo(e,t,a-1,n,r),this.levensteinMemo(e,t,a-1,n-1,r))+1;return r[a][n]=c,c},affichageTemps:function(e){return e>1e3?e/1e3+" s":e+" ms"},levensteinIter:function(e,t){for(var a=e.length+1,n=t.length+1,r=new Array(a).fill(0).map((function(){return new Array(n).fill(0)})),c=1;c<a;c++)r[c][0]=c;for(var i=1;i<n;i++)r[0][i]=i;for(var o=1;o<n;o++)for(var l=1;l<a;l++){var s=void 0;s=e.charAt(l-1)===t.charAt(o-1)?0:1,r[l][o]=Math.min(r[l-1][o]+1,r[l][o-1]+1,r[l-1][o-1]+s)}return r[a-1][n-1]}},mounted:function(){var e=this;this.chartOptions={chart:{height:1e3,type:"scatter",zoom:{enabled:!0,type:"xy"}},xaxis:{title:{text:"Chaines comparées"},tickAmount:10,min:0,max:10,labels:{rotate:-70,minHeight:150,maxHeight:300,rotateAlways:!0,formatter:function(t){if(e.inputs.length>0)return e.inputs[t]}}},yaxis:{title:{text:"Temps (ms)"},tickAmount:7,labels:{formatter:function(e){return parseFloat(e)}}}}}};ft.render=dt;var ht=ft,mt=[{path:"/",name:"Home",component:V},{path:"/composition",name:"Composition",component:z},{path:"/levenshtein",name:"Levenshtein",component:ve},{path:"/levenshtein-benchmark",name:"LevenshteinBenchmark",component:ht}],Ot=Object(b["a"])({history:Object(b["b"])("/bioinfo/"),routes:mt}),vt=Ot;a("b972");Object(n["createApp"])(d).use(vt).mount("#app")},"853f":function(e,t,a){"use strict";a("bf5b")},"8a17":function(e,t,a){"use strict";a("1b52")},bf5b:function(e,t,a){}});
//# sourceMappingURL=app.d009b144.js.map