(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b4":function(e,t,r){"use strict";r("ac1f");var n=r("23e7"),a=r("da84"),c=r("c65b"),o=r("e330"),l=r("1626"),u=r("861d"),s=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),i=a.Error,d=o(/./.test);n({target:"RegExp",proto:!0,forced:!s},{test:function(e){var t=this.exec;if(!l(t))return d(this,e);var r=c(t,this,e);if(null!==r&&!u(r))throw new i("RegExp exec method returned something other than an Object or null");return!!r}})},"0841":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"notes"},c={class:"flex w-full px-8"},o={class:"w-1/3 px-4"},l={class:"w-1/3 px-4"},u={class:"w-1/3 px-4"},s={class:"w-full flex justify-center"},i={class:"border-4 border-black mt-12 w-9/12"},d=Object(n["f"])("thead",{class:"bg-black flex text-white"},[Object(n["f"])("tr",{class:"flex w-full mb-4"},[Object(n["f"])("th",{class:"p-4 w-1/4"},"English"),Object(n["f"])("th",{class:"p-4 w-1/4"},"Spanish")])],-1),b={class:"bg-grey-500 flex flex-col items-center justify-between overflow-y-scroll w-full"},f={class:"p-4 w-1/4"},v={class:"p-4 w-1/4"},p={class:"p-4 w-1/4"},O=["onClick"];function g(e,t,r,g,j,h){return Object(n["r"])(),Object(n["e"])("div",a,[Object(n["f"])("div",c,[Object(n["f"])("div",o,[Object(n["F"])(Object(n["f"])("input",{type:"text",class:"bg-gray-300 rounded-md w-full px-3",placeholder:"English","onUpdate:modelValue":t[0]||(t[0]=function(e){return g.wordEnglish=e})},null,512),[[n["C"],g.wordEnglish]])]),Object(n["f"])("div",l,[Object(n["F"])(Object(n["f"])("input",{type:"text",class:"bg-gray-300 rounded-md w-full px-3",placeholder:"Spanish","onUpdate:modelValue":t[1]||(t[1]=function(e){return g.wordSpanish=e})},null,512),[[n["C"],g.wordSpanish]])]),Object(n["f"])("div",u,[Object(n["f"])("button",{type:"button",class:"bg-blue-300 rounded-md w-full",onClick:t[2]||(t[2]=function(){return g.saveWord&&g.saveWord.apply(g,arguments)})},"Add word")])]),Object(n["f"])("section",s,[Object(n["f"])("table",i,[d,Object(n["f"])("tbody",b,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(g.notes[0].length,(function(e,t){return Object(n["r"])(),Object(n["e"])("tr",{class:"flex w-full mb-4",key:t},[Object(n["f"])("td",f,Object(n["y"])(g.notes[0][t]),1),Object(n["f"])("td",v,Object(n["y"])(g.notes[1][t]),1),Object(n["f"])("td",p,[Object(n["f"])("button",{type:"button",onClick:function(e){return g.deleteWord(t)}}," Borrar",8,O)])])})),128))])])])])}r("e9c4"),r("a434");var j={name:"Notes",setup:function(){var e=Object(n["u"])([[],[]]),t=Object(n["u"])(null),r=Object(n["u"])(null);Object(n["p"])((function(){var t=localStorage.getItem("notes");null!==t&&(e.value=JSON.parse(t))}));var a=function(){null===t.value&&null===r.value||(e.value[0].push(r.value),e.value[1].push(t.value),localStorage.setItem("notes",JSON.stringify(e.value)),r.value=null,r.value=null)},c=function(t){e.value[0].splice(t,1),e.value[1].splice(t,1),localStorage.setItem("notes",JSON.stringify(e.value))};return{notes:e,wordSpanish:t,wordEnglish:r,saveWord:a,deleteWord:c}}},h=r("6b0d"),m=r.n(h);const x=m()(j,[["render",g]]);t["default"]=x},"0b42":function(e,t,r){var n=r("da84"),a=r("e8b5"),c=r("68ee"),o=r("861d"),l=r("b622"),u=l("species"),s=n.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,c(t)&&(t===s||a(t.prototype))?t=void 0:o(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?s:t}},"107c":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("e330"),c=r("5a34"),o=r("1d80"),l=r("577e"),u=r("ab13"),s=a("".indexOf);n({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~s(l(o(this)),l(c(e)),arguments.length>1?arguments[1]:void 0)}})},"408a":function(e,t,r){var n=r("e330");e.exports=n(1..valueOf)},"44e7":function(e,t,r){var n=r("861d"),a=r("c6b6"),c=r("b622"),o=c("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("e330"),a=r("1d80"),c=r("577e"),o=r("5899"),l=n("".replace),u="["+o+"]",s=RegExp("^"+u+u+"*"),i=RegExp(u+u+"*$"),d=function(e){return function(t){var r=c(a(t));return 1&e&&(r=l(r,s,"")),2&e&&(r=l(r,i,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(e,t,r){var n=r("da84"),a=r("44e7"),c=n.TypeError;e.exports=function(e){if(a(e))throw c("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},7156:function(e,t,r){var n=r("1626"),a=r("861d"),c=r("d2bb");e.exports=function(e,t,r){var o,l;return c&&n(o=t.constructor)&&o!==r&&a(l=o.prototype)&&l!==r.prototype&&c(e,l),e}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,c(0,r)):e[o]=r}},9263:function(e,t,r){"use strict";var n=r("c65b"),a=r("e330"),c=r("577e"),o=r("ad6d"),l=r("9f7f"),u=r("5692"),s=r("7c73"),i=r("69f3").get,d=r("fce3"),b=r("107c"),f=u("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,O=a("".charAt),g=a("".indexOf),j=a("".replace),h=a("".slice),m=function(){var e=/a/,t=/b*/g;return n(v,e,"a"),n(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=l.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],w=m||y||x||d||b;w&&(p=function(e){var t,r,a,l,u,d,b,w=this,_=i(w),k=c(e),S=_.raw;if(S)return S.lastIndex=w.lastIndex,t=n(p,S,k),w.lastIndex=S.lastIndex,t;var I=_.groups,V=x&&w.sticky,E=n(o,w),C=w.source,N=0,A=k;if(V&&(E=j(E,"y",""),-1===g(E,"g")&&(E+="g"),A=h(k,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==O(k,w.lastIndex-1))&&(C="(?: "+C+")",A=" "+A,N++),r=new RegExp("^(?:"+C+")",E)),y&&(r=new RegExp("^"+C+"$(?!\\s)",E)),m&&(a=w.lastIndex),l=n(v,V?r:w,A),V?l?(l.input=h(l.input,N),l[0]=h(l[0],N),l.index=w.lastIndex,w.lastIndex+=l[0].length):w.lastIndex=0:m&&l&&(w.lastIndex=w.global?l.index+l[0].length:a),y&&l&&l.length>1&&n(f,l[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)})),l&&I)for(l.groups=d=s(null),u=0;u<I.length;u++)b=I[u],d[b[0]]=l[b[1]];return l}),e.exports=p},"9f7f":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp,o=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=o||n((function(){return!c("a","y").sticky})),u=o||n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:l,UNSUPPORTED_Y:o}},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),c=r("23cb"),o=r("5926"),l=r("07fa"),u=r("7b0b"),s=r("65f0"),i=r("8418"),d=r("1dde"),b=d("splice"),f=a.TypeError,v=Math.max,p=Math.min,O=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var r,n,a,d,b,j,h=u(this),m=l(h),x=c(e,m),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=m-x):(r=y-2,n=p(v(o(t),0),m-x)),m+r-n>O)throw f(g);for(a=s(h,n),d=0;d<n;d++)b=x+d,b in h&&i(a,d,h[b]);if(a.length=n,r<n){for(d=x;d<m-n;d++)b=d+n,j=d+r,b in h?h[j]=h[b]:delete h[j];for(d=m;d>m-n+r;d--)delete h[d-1]}else if(r>n)for(d=m-n;d>x;d--)b=d+n-1,j=d+r-1,b in h?h[j]=h[b]:delete h[j];for(d=0;d<r;d++)h[d+x]=arguments[d+2];return h.length=m-n+r,a}})},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),c=r("e330"),o=r("94ca"),l=r("6eeb"),u=r("1a2d"),s=r("7156"),i=r("3a9b"),d=r("d9b5"),b=r("c04e"),f=r("d039"),v=r("241c").f,p=r("06cf").f,O=r("9bf2").f,g=r("408a"),j=r("58a8").trim,h="Number",m=a[h],x=m.prototype,y=a.TypeError,w=c("".slice),_=c("".charCodeAt),k=function(e){var t=b(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,r,n,a,c,o,l,u,s=b(e,"number");if(d(s))throw y("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=j(s),t=_(s,0),43===t||45===t){if(r=_(s,2),88===r||120===r)return NaN}else if(48===t){switch(_(s,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+s}for(c=w(s,2),o=c.length,l=0;l<o;l++)if(u=_(c,l),u<48||u>a)return NaN;return parseInt(c,n)}return+s};if(o(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var I,V=function(e){var t=arguments.length<1?0:m(k(e)),r=this;return i(x,r)&&f((function(){g(r)}))?s(Object(t),r,V):t},E=n?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;E.length>C;C++)u(m,I=E[C])&&!u(V,I)&&O(V,I,p(m,I));V.prototype=x,x.constructor=V,l(a,h,V)}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,c=r("44d2");n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},e9c4:function(e,t,r){var n=r("23e7"),a=r("da84"),c=r("d066"),o=r("2ba4"),l=r("e330"),u=r("d039"),s=a.Array,i=c("JSON","stringify"),d=l(/./.exec),b=l("".charAt),f=l("".charCodeAt),v=l("".replace),p=l(1..toString),O=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,h=function(e,t,r){var n=b(r,t-1),a=b(r,t+1);return d(g,e)&&!d(j,a)||d(j,e)&&!d(g,n)?"\\u"+p(f(e,0),16):e},m=u((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&n({target:"JSON",stat:!0,forced:m},{stringify:function(e,t,r){for(var n=0,a=arguments.length,c=s(a);n<a;n++)c[n]=arguments[n];var l=o(i,null,c);return"string"==typeof l?v(l,O,h):l}})},f820:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"selected"},c=Object(n["f"])("hr",{class:"mt-4 border-black border-2"},null,-1),o={class:"writting"},l=Object(n["f"])("hr",{class:"mt-4 border-black border-2"},null,-1),u={class:"game"};function s(e,t,r,s,i,d){var b=Object(n["w"])("ChangesMode"),f=Object(n["w"])("GatherVerbs"),v=Object(n["w"])("WriteVerbs"),p=Object(n["w"])("GameOf60");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",a,[Object(n["h"])(b),Object(n["h"])(f)]),c,Object(n["f"])("div",o,[Object(n["h"])(v)]),l,Object(n["f"])("div",u,[Object(n["h"])(p)])],64)}var i={class:"learn_verbs"},d={class:"py-4"},b={class:"font-bold text-4xl underline"},f={class:"flex justify-evenly"},v=["onClick"],p={class:"py-6 transition-high duration-100"},O={key:0},g=Object(n["f"])("h2",{class:"font-bold text-4xl underline text-green-500"},"Exito!!",-1),j=[g],h={key:1},m=Object(n["f"])("h2",{class:"font-bold text-4xl underline text-red-400"},"Para la proxima!!",-1),x={class:"font-bold text-4xl underline text-red-400"};function y(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("section",i,[Object(n["f"])("div",d,[Object(n["f"])("h1",b,Object(n["y"])(a.selectedVerb),1)]),Object(n["f"])("div",f,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(a.tested,(function(e,t){return Object(n["r"])(),Object(n["e"])("button",{type:"button",key:t,class:"md:px-4 md:py-3 px-1 py-1 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform",onClick:function(t){return a.verifyVerb({verb:e,mode:3})}},Object(n["y"])(e),9,v)})),128))]),Object(n["f"])("div",null,[Object(n["f"])("section",p,[!0===a.success?(Object(n["r"])(),Object(n["e"])("div",O,j)):!1===a.success?(Object(n["r"])(),Object(n["e"])("div",h,[m,Object(n["f"])("h2",x,Object(n["y"])(a.currentVerbStr),1)])):Object(n["d"])("",!0)])])])}r("caad"),r("2532"),r("ac1f"),r("00b4"),r("e9c4");var w=r("91f0");function _(e,t){var r=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-r+1))+r}function k(e){var t,r=e,n=r.length;while(0!==n){t=Math.floor(Math.random()*n),n-=1;var a=[r[t],r[n]];r[n]=a[0],r[t]=a[1]}return r}function S(){var e=Object(n["l"])("general"),t=Object(n["u"])("Loading"),r=Object(n["u"])([]),a=Object(n["u"])(null),c=localStorage.getItem("general"),o=Object(n["u"])("Loading"),l=function(n){var o=n.reset,l=void 0!==o&&o;e.value.tested_verb=[],a.value=null;var u=null;if(l&&null!==c)e.value=JSON.parse(c),t.value=w["a"].verbs[e.value.mode.original][e.value.current_verb],r.value=[w["a"].verbs[e.value.mode.test][e.value.tested_verb[0]],w["a"].verbs[e.value.mode.test][e.value.tested_verb[1]],w["a"].verbs[e.value.mode.test][e.value.tested_verb[2]],w["a"].verbs[e.value.mode.test][e.value.current_verb]];else{do{u=_(1,w["a"].verbs[0].length-1),e.value.list_after_verbs.length===w["a"].verbs[0].length-1&&(e.value.list_after_verbs=[])}while(e.value.list_after_verbs.includes(u));e.value.list_after_verbs.push(u),e.value.current_verb=u,t.value=w["a"].verbs[e.value.mode.original][u];while(e.value.tested_verb.length<=2){var s=_(1,w["a"].verbs[0].length-1);s!==e.value.current_verb&&e.value.tested_verb.push(s)}r.value=[w["a"].verbs[e.value.mode.test][e.value.tested_verb[0]],w["a"].verbs[e.value.mode.test][e.value.tested_verb[1]],w["a"].verbs[e.value.mode.test][e.value.tested_verb[2]],w["a"].verbs[e.value.mode.test][u]],r.value=k(r.value),localStorage.setItem("general",JSON.stringify(e.value))}},u=function(t){var r=t.verb,n=void 0===r?"nothing":r;o.value=w["a"].verbs[e.value.mode.test][e.value.current_verb],n.toLowerCase()===o.value.toLowerCase()?(a.value=!0,e.value.record_words_current+=1,!0===e.value.streak_60.in_game&&(e.value.streak_60.current+=1)):(a.value=!1,e.value.record_words_current>e.value.record_words.record&&(e.value.record_words.record=e.value.record_words_current,e.value.record_words.record_time=new Date),!0===e.value.streak_60.in_game&&e.value.streak_60.current>e.value.streak_60.record&&(e.value.streak_60.record=e.value.streak_60.current,e.value.streak_60.record_time=new Date,e.value.streak_60.current=0),e.value.record_words_current=0),e.value.all_try+=1,setTimeout((function(){l({})}),1e3)};return{getRandomVerb:l,selectedVerb:t,tested:r,verifyVerb:u,success:a,currentVerbStr:o}}var I={name:"GatherVerbs",setup:function(){var e=S(),t=e.getRandomVerb,r=e.selectedVerb,a=e.tested,c=e.verifyVerb,o=e.success,l=e.currentVerbStr;return Object(n["p"])((function(){t({reset:!0})})),{getRandomVerb:t,selectedVerb:r,tested:a,verifyVerb:c,success:o,currentVerbStr:l}}},V=r("6b0d"),E=r.n(V);const C=E()(I,[["render",y]]);var N=C,A={class:"changes_mode"},R=Object(n["f"])("label",{for:"original"},"Verbo Original: ",-1),F=Object(n["f"])("option",{value:"0"},"Verb",-1),M=Object(n["f"])("option",{value:"1"},"Past",-1),T=Object(n["f"])("option",{value:"2"},"Participle",-1),P=Object(n["f"])("option",{value:"3"},"Spanish",-1),D=[F,M,T,P],W=Object(n["f"])("label",{for:"mode",class:"changes_mode ml-4"},"Verbos de la poll: ",-1),J=Object(n["f"])("option",{value:"0"},"Verb",-1),G=Object(n["f"])("option",{value:"1"},"Past",-1),U=Object(n["f"])("option",{value:"2"},"Participle",-1),B=Object(n["f"])("option",{value:"3"},"Spanish",-1),L=[J,G,U,B];function $(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("div",A,[Object(n["f"])("div",null,[R,Object(n["F"])(Object(n["f"])("select",{id:"original","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.original=e})},D,512),[[n["B"],a.original]])]),Object(n["f"])("div",null,[W,Object(n["F"])(Object(n["f"])("select",{id:"mode","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.mode=e})},L,512),[[n["B"],a.mode]])])])}var Y={name:"ChangeOptions",setup:function(){var e=Object(n["l"])("general"),t=Object(n["u"])(e.value.mode.original),r=Object(n["u"])(e.value.mode.test);return Object(n["p"])((function(){t.value=e.value.mode.original,r.value=e.value.mode.test})),Object(n["D"])([r,t],(function(){e.value.mode.test=parseInt(r.value,10),e.value.mode.original=parseInt(t.value,10),localStorage.setItem("general",JSON.stringify(e.value)),console.log(JSON.parse(localStorage.getItem("general")))})),{original:t,mode:r,general:e}}};const K=E()(Y,[["render",$]]);var q=K,X={class:"learn_verbs"},z={class:"py-4"},H={class:"font-bold text-4xl underline"},Q={class:"justify-evenly"},Z=["placeholder"],ee={class:"py-6"},te={key:0},re=Object(n["f"])("h2",{class:"font-bold text-4xl underline text-green-500"},"Exito!!",-1),ne=[re],ae={key:1},ce=Object(n["f"])("h2",{class:"font-bold text-4xl underline text-red-400"},"Para la proxima!!",-1),oe={class:"font-bold text-4xl underline text-red-400"};function le(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("section",X,[Object(n["f"])("div",z,[Object(n["f"])("h1",H,Object(n["y"])(a.selectedVerb),1)]),Object(n["f"])("div",Q,[Object(n["f"])("div",null,[Object(n["F"])(Object(n["f"])("input",{type:"text",class:"border-black border-b-4 | w-1/3 focus:outline-none focus:border-purple-800 transition-color duration-500","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.writeVerb=e}),placeholder:"Write the "+a.idToMode[a.general.mode.test]+" of the verb"},null,8,Z),[[n["C"],a.writeVerb]])]),Object(n["f"])("button",{type:"button",class:"px-4 py-3 bg-green-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform mt-4",onClick:t[1]||(t[1]=function(){return a.checkWord&&a.checkWord.apply(a,arguments)})},"Click For Check!!!")]),Object(n["f"])("div",null,[Object(n["f"])("section",ee,[!0===a.success?(Object(n["r"])(),Object(n["e"])("div",te,ne)):!1===a.success?(Object(n["r"])(),Object(n["e"])("div",ae,[ce,Object(n["f"])("h2",oe,Object(n["y"])(a.currentVerbStr),1)])):Object(n["d"])("",!0)])])])}var ue={name:"WriteVerbs",setup:function(){var e=S(),t=e.getRandomVerb,r=e.selectedVerb,a=e.tested,c=e.verifyVerb,o=e.success,l=e.currentVerbStr,u=Object(n["u"])(""),s=Object(n["u"])(["Verb","Past","Participle","Spanish"]),i=Object(n["l"])("general"),d=function(){c({verb:u.value}),u.value=""};return Object(n["p"])((function(){t({reset:!0}),window.addEventListener("keypress",(function(e){"Enter"===e.code&&d()}))})),{getRandomVerb:t,selectedVerb:r,tested:a,checkWord:d,success:o,currentVerbStr:l,writeVerb:u,idToMode:s,general:i}}};const se=E()(ue,[["render",le]]);var ie=se,de={class:"game flex justify-center content-center items-center"};function be(e,t,r,a,c,o){var l=Object(n["w"])("Chronometer");return Object(n["r"])(),Object(n["e"])("div",de,[Object(n["h"])(l,{stop:a.switchChronometer,time:60,onChronometerStop:t[0]||(t[0]=function(e){return a.stop()})},null,8,["stop"]),Object(n["f"])("div",null,[Object(n["f"])("button",{type:"button",class:"px-4 py-3 bg-yellow-600 rounded-md text-white shadow-lg transition-transform",onClick:t[1]||(t[1]=function(e){return a.toggleSwitch()})},Object(n["y"])(a.switchChronometer?"Start":"Stop"),1)])])}var fe={class:"chronometer"},ve={class:"flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"},pe={class:"w-40 h-40"},Oe=Object(n["f"])("circle",{class:"text-gray-300","stroke-width":"5",stroke:"currentColor",fill:"transparent",r:"60",cx:"80",cy:"80"},null,-1),ge=["stroke-dasharray","stroke-dashoffset"],je={class:"absolute text-xl font-bold text-blue-700"};function he(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("section",fe,[Object(n["f"])("div",ve,[(Object(n["r"])(),Object(n["e"])("svg",pe,[Oe,Object(n["f"])("circle",{class:"text-blue-600","stroke-width":"5","stroke-dasharray":a.circumference,"stroke-dashoffset":a.circumference-a.percent/100*a.circumference,"stroke-linecap":"round",stroke:"currentColor",fill:"transparent",r:"60",cx:"80",cy:"80"},null,8,ge)])),Object(n["f"])("span",je,Object(n["y"])(a.dif)+" Seconds",1)])])}r("a9e3");var me={name:"Chronometer",props:{time:{default:60,type:Number},stop:{default:!1,type:Boolean}},emits:["chronometerStop"],setup:function(e,t){var r=t.emit,a=Object(n["u"])(120*Math.PI),c=Object(n["u"])(100),o=Object(n["z"])(e),l=o.time,u=o.stop,s=Object(n["u"])(0),i=Object(n["u"])(l.value-s.value),d=null;return Object(n["p"])((function(){d=setInterval((function(){!1===u.value&&(l.value-s.value<0&&(s.value=0),i.value=l.value-s.value,c.value=Math.floor(100*i.value/l.value),s.value+=1,s.value>l.value&&r("chronometerStop"))}),1e3)})),Object(n["q"])((function(){clearInterval(d)})),{circumference:a,percent:c,dif:i}}};const xe=E()(me,[["render",he]]);var ye=xe,we={name:"GameOf60",components:{Chronometer:ye},setup:function(){var e=Object(n["u"])(!0),t=Object(n["l"])("general");function r(){t.value.streak_60.in_game=!1,!0===t.value.streak_60.in_game&&t.value.streak_60.current>t.value.streak_60.record&&(t.value.streak_60.record=t.value.streak_60.current,t.value.streak_60.record_time=new Date,t.value.streak_60.current=0)}Object(n["p"])((function(){t.value.streak_60.in_game=!e.value})),Object(n["q"])((function(){r()}));var a=function(){e.value=!0,r()},c=function(){e.value=!e.value,t.value.streak_60.in_game=!e.value};return{switchChronometer:e,toggleSwitch:c,stop:a}}};const _e=E()(we,[["render",be]]);var ke=_e,Se={name:"About",components:{GatherVerbs:N,ChangesMode:q,WriteVerbs:ie,GameOf60:ke}};const Ie=E()(Se,[["render",s]]);t["default"]=Ie},fce3:function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=about.fcb918d9.js.map