(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,n){e.exports=n.p+"static/media/robot-prod.2ec19ca0.png"},262:function(e,t,n){"use strict";var a=n(17),r=n.n(a),o=n(14),i=n.n(o),c=n(63),s=n.n(c),l=n(441),u=n(205),d=n(101),f=n(0),p=n.n(f),m=n(76),g=n(10),v=n(86),b=n(9),h=n(2),y=n(442),S=n(30),w=n(108),O=n(107),E=S.d.model("ViewStore",{view:S.d.optional(S.d.number,1)}).views((function(e){return{get viewStore(){return e.view}}})).actions((function(e){return{setView:function(t){e.view=t},getView:function(){}}})),k=E.create({});Object(O.a)("ViewStore",k,{storage:w.a,jsonify:!0});var j=k;function q(e){return 204===e.status||205===e.status?null:e.json()}function x(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}var C=S.d.model({id:S.d.number,title:S.d.string,image:S.d.string}),T=S.d.model("SquaredStore",{squareActive:S.d.optional(S.d.number,1),squared:S.d.optional(S.d.array(C),[]),state:S.d.optional(S.d.string,"")}).views((function(e){return{}})).actions((function(e){return{saveSquared:function(t){e.squareActive=t},getSquared:Object(S.b)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.state="pending","/squared/",t.prev=2,t.next=5,fetch("http://api.appssaga.com"+"/squared/",{method:"GET"}).then(x).then(q);case 5:a=t.sent,console.log("getSquared______response!",a),a.length<1?(e.squared=a,e.state="empty"):(e.squared=a,e.state="done"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("getSquared______ERROR!"),e.state="error";case 14:case"end":return t.stop()}}),t,null,[[2,10]])}))),afterCreate:function(){}}})),B=T.create({});Object(O.a)("SquaredStore",B,{storage:w.a,jsonify:!0});var I=B,P=S.d.model("RootStore",{viewStore:S.d.optional(E,(function(){return j})),squaredStore:S.d.optional(T,(function(){return I}))}),L=n(233),A=n(79),D={tintColor:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc",tabBar:"#fefefe",errorBackground:"red",errorText:"#fff",warningBackground:"#EAEB5E",warningText:"#666804",noticeBackground:"#2f95dc",noticeText:"#fff"};function _(e){return p.a.createElement(y.a,{name:e.name,size:26,style:{marginBottom:-3},color:e.focused?D.tabIconSelected:D.tabIconDefault})}var H=n(103),M=n(37),z=n(33),V=n(19),N=n(43),R=n(11),F=n.n(R);function W(e){return p.a.createElement(V.a,F()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}var G=n(3),J=n.n(G),Y=n(5),K=n.n(Y),Q=n(7),U=n.n(Q),X=n(6),Z=n.n(X),$=n(8),ee=n.n($),te=n(263),ne=b.a.create({slide:{opacity:.6},slideActive:{opacity:1},image:{width:"100%",height:200,resizeMode:"contain"},title:{textAlign:"center",paddingTop:22,paddingBottom:30}});function ae(e){var t=e.id,n=e.title,a=e.image,r=e.save,o=e.active;return p.a.createElement(h.a,{style:[ne.slide,o===t&&ne.slideActive]},p.a.createElement(N.a,{onPress:function(){return r(t)}},p.a.createElement(M.a,{source:{uri:a},style:ne.image}),p.a.createElement(V.a,{style:ne.title},n)))}var re=b.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20,margin:20}});function oe(e){var t=e.data,n=e.save,a=e.active;return p.a.createElement(te.a,{data:t,renderItem:function(e,t){return function(e){return p.a.createElement(ae,F()({active:a,save:n},e.item))}(e)},sliderWidth:300,itemWidth:300})}var ie=function(e){function t(){return J()(this,t),U()(this,Z()(t).apply(this,arguments))}return ee()(t,e),K()(t,[{key:"componentDidMount",value:function(){(0,this.props.rootStore.squaredStore.getSquared)()}},{key:"render",value:function(){var e=this.props.rootStore.squaredStore,t=e.squared,n=e.saveSquared,a=e.squareActive,r=e.state;return p.a.createElement(h.a,{style:re.container},"pending"===r&&p.a.createElement(h.a,null,p.a.createElement(V.a,null,"Loading...")),"error"===r&&p.a.createElement(h.a,null,p.a.createElement(V.a,null,"Squared Error!")),"empty"===r&&p.a.createElement(h.a,null,p.a.createElement(V.a,null,"Squared Empty!")),t&&"done"===r&&n&&a&&p.a.createElement(oe,{data:t,save:n,active:a}))}}]),t}(p.a.Component),ce=Object(m.b)("rootStore")(Object(m.c)(ie));function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function le(){return p.a.createElement(h.a,{style:fe.container},p.a.createElement(z.a,{style:fe.container,contentContainerStyle:fe.contentContainer},p.a.createElement(h.a,{style:fe.welcomeContainer},p.a.createElement(M.a,{source:n(230),style:fe.welcomeImage})),p.a.createElement(h.a,{style:fe.getStartedContainer},p.a.createElement(ue,null),p.a.createElement(V.a,{style:fe.getStartedText},"Choose a square for today"),p.a.createElement(ce,null)),p.a.createElement(h.a,{style:fe.helpContainer},p.a.createElement(N.a,{onPress:de,style:fe.helpLink},p.a.createElement(V.a,{style:fe.helpLinkText},"Show more Square info")))),p.a.createElement(h.a,{style:fe.tabBarInfoContainer},p.a.createElement(V.a,{style:fe.tabBarInfoText},"This is a tab bar. You can edit it in:"),p.a.createElement(h.a,{style:[fe.codeHighlightContainer,fe.navigationFilename]},p.a.createElement(W,{style:fe.codeHighlightText},"navigation/MainTabNavigator.js"))))}function ue(){return p.a.createElement(V.a,{style:fe.developmentModeText},"You are not in development mode: your app will run at full speed.")}function de(){H.a("https://google.com")}le.navigationOptions={header:null};var fe=b.a.create({container:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,color:"rgba(0,0,0,0.4)",fontSize:14,lineHeight:19,textAlign:"center"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:"rgba(0,0,0,0.05)",borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({position:"absolute",bottom:0,left:0,right:0},g.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"}}),pe=n(154);function me(){return p.a.createElement(z.a,{style:ge.container},p.a.createElement(pe.b,null),p.a.createElement(h.a,{style:ge.containerInfo},p.a.createElement(V.a,null,"Go ahead and delete ExpoLinksView and replace it with your content, we just wanted to provide you with some helpful links")))}me.navigationOptions={title:"Links"};var ge=b.a.create({container:{flex:1,paddingTop:15,backgroundColor:"#fff"},containerInfo:{padding:42}});function ve(e){var t=e.data,n=e.active,a=e.save;return p.a.createElement(z.a,{style:he.container},t.map((function(e,t){return p.a.createElement(ae,F()({key:t,active:n,save:a},e))})))}var be=function(e){function t(){return J()(this,t),U()(this,Z()(t).apply(this,arguments))}return ee()(t,e),K()(t,[{key:"componentDidMount",value:function(){(0,this.props.rootStore.squaredStore.getSquared)()}},{key:"render",value:function(){var e=this.props.rootStore,t=(e.viewStore.view,e.squaredStore),n=t.squared,a=t.saveSquared,r=t.squareActive;return p.a.createElement(ve,{data:n,save:a,active:r})}}]),t}(p.a.Component);be.navigationOptions={title:"Squared"};var he=b.a.create({container:{flex:1,paddingTop:15,backgroundColor:"#fff"}}),ye=Object(m.b)("rootStore")(Object(m.c)(be));function Se(){return p.a.createElement(pe.a,null)}Se.navigationOptions={title:"app.json"};var we=g.a.select({web:{headerMode:"screen"},default:{}}),Oe=Object(A.createStackNavigator)({Home:le},we);Oe.navigationOptions={tabBarLabel:"Home",tabBarIcon:function(e){var t=e.focused;return p.a.createElement(_,{focused:t,name:"ios"===g.a.OS?"ios-information-circle"+(t?"":"-outline"):"md-information-circle"})}},Oe.path="";var Ee=Object(A.createStackNavigator)({Links:me},we);Ee.navigationOptions={tabBarLabel:"Links",tabBarIcon:function(e){var t=e.focused;return p.a.createElement(_,{focused:t,name:"ios"===g.a.OS?"ios-link":"md-link"})}},Ee.path="";var ke=Object(A.createStackNavigator)({Squared:ye},we);ke.navigationOptions={tabBarLabel:"Squared",tabBarIcon:function(e){var t=e.focused;return p.a.createElement(_,{focused:t,name:"ios"===g.a.OS?"ios-book":"md-book"})}},ke.path="";var je=Object(A.createStackNavigator)({Settings:Se},we);je.navigationOptions={tabBarLabel:"Settings",tabBarIcon:function(e){var t=e.focused;return p.a.createElement(_,{focused:t,name:"ios"===g.a.OS?"ios-options":"md-options"})}},je.path="";var qe=Object(A.createBottomTabNavigator)({HomeStack:Oe,LinksStack:Ee,SquaredStack:ke,SettingsStack:je});qe.path="";var xe=qe,Ce=Object(A.createSwitchNavigator)({Main:xe});Ce.path="";var Te=Object(L.createBrowserApp)(Ce,{history:"hash"});function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e){var t=Object(f.useState)(!1),n=s()(t,2),a=n[0],r=n[1];return a||e.skipLoadingScreen?p.a.createElement(m.a,{rootStore:P.create({})},p.a.createElement(h.a,{style:De.container},"ios"===g.a.OS&&p.a.createElement(v.a,{barStyle:"default"}),p.a.createElement(Te,null))):p.a.createElement(l.a,{startAsync:Le,onError:Ae,onFinish:function(){return function(e){e(!0)}(r)}})}function Le(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(Promise.all([u.a.loadAsync([n(424),n(230)]),d.b(Ie({},y.a.font,{"space-mono":n(425)}))]));case 2:case"end":return e.stop()}}))}function Ae(e){console.warn(e)}n.d(t,"a",(function(){return Pe}));var De=b.a.create({container:{flex:1,backgroundColor:"#fff"}})},268:function(e,t,n){n(269),e.exports=n(428)},269:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},424:function(e,t,n){e.exports=n.p+"static/media/robot-dev.c6505b75.png"},425:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[268,1,2]]]);
//# sourceMappingURL=../../d553170e80df2829a77d.map