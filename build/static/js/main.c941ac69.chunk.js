(this["webpackJsonpbcode-hash"]=this["webpackJsonpbcode-hash"]||[]).push([[0],{180:function(e){e.exports=JSON.parse('{"calculate_hash":"Calculate file\'s hash in SHA256","import_file":"Import file","calculate_new_hash":"Calculate new hash","or":"or","dragAndDrop":"Drag and drop a file","hash":"Hash","file_name":"File name","footer_version":"Version:"}')},181:function(e){e.exports=JSON.parse('{"calculate_hash":"Calcola hash di un file in SHA256","import_file":"Importa file","calculate_new_hash":"Calcola un altro hash","or":"Oppure","dragAndDrop":"Trascina un file","hash":"Hash","file_name":"Nome file","footer_version":"Versione: "}')},203:function(e,t,n){},204:function(e,t,n){},210:function(e,t){},212:function(e,t){},223:function(e,t){},225:function(e,t){},252:function(e,t){},254:function(e,t){},255:function(e,t){},260:function(e,t){},262:function(e,t){},281:function(e,t){},293:function(e,t){},296:function(e,t){},326:function(e,t,n){},327:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"changeTheme",(function(){return m}));var o={};n.r(o),n.d(o,"colors",(function(){return K}));var a=n(0),r=n.n(a),i=n(66),s=n.n(i),l=(n(203),n(350)),f=(n(204),n(26)),d=n(110),b=n.n(d),h=n(174),u=n(7),j=n(79),p=n.n(j),O=n(78),g=n(22),x="[User] Change Theme";function m(e){return{type:x,payload:e}}var C=n(344),_=n(345),S=n(349),D=n(351),k=n(346),v=n(347),w=(n(326),n(193)),y=(n(327),"#38A7B8"),N="#DCDCDC",T="#C0C0C0",E="#CD5656",A=n(113),R=n(342),F=n(180),B={it:{translation:n(181)},en:{translation:F}};A.a.use(R.a).init({resources:B,lng:"it",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}},(function(e,t){e&&console.error("i18n Error",e)}));var P=A.a,I=n(2),H={width:"80%",height:"60%",border:"2px dashed",borderColor:"".concat(N),borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"".concat(T),padding:"20px",fontSize:"30px",fontWeight:600,outline:"none",transition:"border .24s ease-in-out"},L={borderColor:"".concat(y)},z={borderColor:"".concat(y)},W={borderColor:"".concat(E)},J=function(e){var t=e.onChange,n=Object(w.a)({noClick:!0}),c=n.getRootProps,o=n.getInputProps,i=n.acceptedFiles,s=n.isDragActive,l=n.isDragAccept,d=n.isDragReject,b=Object(a.useMemo)((function(){return Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},H),s?L:{}),l?z:{}),d?W:{})}),[s,d,l]);return r.a.useEffect((function(){"undefined"!==typeof i&&i.length>0&&t(i)}),[i,t]),Object(I.jsxs)("div",Object(f.a)(Object(f.a)({},c({style:b})),{},{children:[Object(I.jsx)("input",Object(f.a)({},o())),Object(I.jsx)("p",{children:P.t("dragAndDrop")})]}))},M=n(343);var V=Object(O.b)((function(e){return{theme:e.user.theme}}),(function(e){return Object(g.b)(c,e)}))((function(e){var t=e.theme,n=e.changeTheme,c=Object(a.useState)(!1),o=Object(u.a)(c,2),r=o[0],i=o[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),d=l[0],j=l[1],O=function(){n("light"===t?"dark":"light")},g=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FileReader).onload=function(e){var t=p.a.lib.WordArray.create(e.target.result);j(p.a.SHA256(t).toString(p.a.enc.Hex))},n.readAsArrayBuffer(t),i(t.name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(M.a)(["(max-width: 1024px)"]),t=Object(u.a)(e,1)[0],n=Object(M.a)(["(max-width: 512px)"]);return Object(u.a)(n,1)[0]?"isMobile":t?"isTablet":"isDesktop"}(),m={display:"flex",alignItems:"center"};return Object(I.jsxs)(C.a,{className:"home",bg:"".concat(t,".bg"),children:[Object(I.jsxs)(C.a,{bg:"".concat(t,".topbar"),className:"topbar",children:[Object(I.jsx)(_.a,{color:"".concat(t,".logo"),className:"title",onClick:function(){window.open("https://bcode.cloud")},children:"BCode"}),"light"===t?Object(I.jsx)(k.a,{w:6,h:6,color:"".concat(t,".colorSelector"),onClick:O}):Object(I.jsx)(v.a,{w:6,h:6,color:"".concat(t,".colorSelector"),onClick:O})]}),r?Object(I.jsxs)(C.a,{className:"mainarea hash",children:[Object(I.jsxs)(C.a,{color:"".concat(t,".text"),backgroundColor:"".concat(t,".textBg"),className:"text",fontSize:"isDesktop"===x?"20px":"16px",children:[Object(I.jsx)(_.a,{fontWeight:"bold",children:"".concat(P.t("file_name"))}),Object(I.jsxs)(_.a,{children:[" ",r]})]}),Object(I.jsxs)(C.a,{color:"".concat(t,".text"),backgroundColor:"".concat(t,".textBg"),className:"text",fontSize:"isDesktop"===x?"20px":"16px",wordBreak:"isMobile"===x?"break-all":"unset",children:[Object(I.jsx)(_.a,{fontWeight:"bold",children:"".concat(P.t("hash"))}),Object(I.jsx)(_.a,{children:d})]}),Object(I.jsx)(S.a,{bg:"".concat(t,".logo"),size:"lg",onClick:function(){j(!1),i(!1)},margin:"20px",children:P.t("calculate_new_hash")})]}):Object(I.jsxs)(C.a,{className:"mainarea",children:[Object(I.jsx)(_.a,{color:"".concat(t,".text"),className:"text",children:P.t("calculate_hash")}),Object(I.jsx)(J,{onChange:function(e){g(e[0])},backgroundColor:"".concat(t,".draganddrop")}),Object(I.jsx)(_.a,{color:"".concat(t,".text"),children:P.t("or")}),Object(I.jsx)(S.a,{bg:"".concat(t,".logo"),size:"lg",children:Object(I.jsxs)("label",{children:[P.t("import_file"),Object(I.jsx)("input",{style:{display:"none"},type:"file",onChange:function(e){g(e.target.files[0])}})]})})]}),Object(I.jsx)(C.a,{className:"footer",height:"isDesktop"===x?"75px":"50px",children:Object(I.jsxs)(C.a,{className:"in",backgroundColor:"".concat(t,".topbar"),width:"isDesktop"===x?"80%":"100%",borderTopLeftRadius:"isDesktop"===x?"10px":"0",borderTopRightRadius:"isDesktop"===x?"10px":"0",justifyContent:"isDesktop"===x?"space-between":"center",children:["isMobile"!==x&&Object(I.jsxs)(C.a,{style:Object(f.a)(Object(f.a)({},m),{},{color:"white"}),children:[Object(I.jsx)(_.a,{style:{fontSize:13,marginRight:5,color:"#ffffff"},children:P.t("footer_version")}),Object(I.jsx)(_.a,{style:{fontSize:16,color:"#ffffff"},children:"0.0.1"})]}),Object(I.jsx)(C.a,{children:Object(I.jsx)("a",{href:"https://bcode.cloud",target:"_blank",rel:"noreferrer",children:Object(I.jsxs)(C.a,{style:m,children:[Object(I.jsx)(_.a,{color:"".concat(t,".logo"),children:"Powered by "}),Object(I.jsx)(D.a,{src:"/images/logo-bcode-bianco.png",h:"isDesktop"===x?"40px":"25px",marginLeft:"10px"})]})})})]})})]})})),U=n(348),K={light:{bg:"#ffffff",topbar:"#1f2223",colorSelector:"#fcec00",logo:"#1e679c",text:"#000000",textBg:"#ffffff",dragandrop:"#EDF5F6"},dark:{bg:"#1F2223",topbar:"#1f2223",colorSelector:"#fcec00",logo:"#1e679c",text:"#ffffff",textBg:"#40474a",dragandrop:"#4e5152"}},X=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CURRENT_ENV,Object(U.a)(o));var q=function(){return Object(I.jsx)(l.a,{theme:X,children:Object(I.jsx)(V,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,352)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))},Q=n(187),Y=n(80),Z=n(188),$=n.n(Z),ee=n(189),te=n(190),ne={theme:"light"},ce=Object(ee.a)(te.a,{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e.theme=t.payload,e;default:return e}}}),oe=function(e,t){return t instanceof Date?t.toISOString():t},ae=function(e,t){return"string"===typeof t&&t.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)?new Date(t):t},re={key:"root",storage:$.a,whitelist:["user"],transforms:[Object(Y.a)((function(e){return JSON.stringify(e,oe)}),(function(e){return JSON.parse(e,ae)}))]},ie=Object(Y.b)(re,ce),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,le=Object(g.e)(ie,se(g.a.apply(void 0,[]))),fe=Object(Y.c)(le);s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(O.a,{store:le,children:Object(I.jsx)(Q.a,{loading:null,persistor:fe,children:Object(I.jsx)(q,{})})})}),document.getElementById("root")),G()}},[[331,1,2]]]);
//# sourceMappingURL=main.c941ac69.chunk.js.map