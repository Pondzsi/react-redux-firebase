(this["webpackJsonpreact-redux-firebase-planner"]=this["webpackJsonpreact-redux-firebase-planner"]||[]).push([[0],{211:function(e,t,a){e.exports=a(406)},216:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a.n(c),l=(a(216),a(43)),s=a.n(l),o=a(208),u=a.n(o),m=a(209),d=a.n(m),h=a(21),p=a(22),E=a(25),f=a(24),b=a(42),g=a.n(b),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"brown-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},g()(e.time.toDate()).fromNow()))}))))))},v=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-4 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},g()(t.createdAt.toDate()).calendar())))},j=a(129),O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(j.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(v,{project:e}))})))},C=a(4),y=a(12),w=a(19),R=a(409),S=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(R.a,{to:"/signin"})}}]),a}(n.Component),x=Object(y.d)(Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]),Object(C.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})))(S),F=a(408),I=Object(C.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCES"})}))}))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(F.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement(F.a,{to:"/",onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(F.a,{to:"/",className:"btn btn-floating brown lighten-2"},e.profile.initials))))})),P=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(F.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(F.a,{to:"/signin"},"Login"))))},A=Object(C.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper brown darken-1"},r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{to:"/",className:"brand-logo"},"Project Planner"),t.uid?r.a.createElement(I,{profile:a}):r.a.createElement(P,null)))}));var _=Object(y.d)(Object(w.firestoreConnect)((function(){return["projects"]})),Object(C.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",null,g()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(R.a,{to:"/signin"})})),k=a(23),U=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"brown btn lighten-2 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),L=Object(C.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCES"})})).catch((function(t){e({type:"LOGIN_ERROR",error:t})}))}));var a}}}))(U),T=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"brown btn lighten-2 z-depth-0"},"Register"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),G=Object(C.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCES"})})).catch((function(e){t({type:"SIGNUP_ERROR",error:e})}))}}(t))}}}))(T),z=a(14),D=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(p.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"title"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{onChange:this.handleChange,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"brown btn lighten-2 z-depth-0"},"Create")))):r.a.createElement(R.a,{to:"/signin"})}}]),a}(n.Component),J=Object(C.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(z.a)(Object(z.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(D);var B=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(d.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}),r.a.createElement(s.a,{path:"/project/:id",component:_}),r.a.createElement(s.a,{path:"/signin",component:L}),r.a.createElement(s.a,{path:"/signup",component:G}),r.a.createElement(s.a,{path:"/create",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W={authError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCES":return Object(z.a)(Object(z.a)({},e),{},{authError:null});case"LOGIN_ERROR":return Object(z.a)(Object(z.a)({},e),{},{authError:"Login failed"});case"SIGNOUT_SUCCES":return e;case"SIGNUP_SUCCES":return Object(z.a)(Object(z.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return Object(z.a)(Object(z.a)({},e),{},{authError:t.error.message});default:return e}},V=a(58),X={projects:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return e;case"CREATE_PROJECT_ERROR":return console.log("CREATE_PROJECT_ERROR"),e;default:return e}},Q=Object(y.c)({auth:K,project:H,firebase:w.firebaseReducer,firestore:V.firestoreReducer}),Z=a(210),$=a(85),q=a.n($);a(403),a(404);q.a.initializeApp({apiKey:"AIzaSyDAU2hPKXW1cjS5oOALpDhH_xxkBEzVs-s",authDomain:"react-redux-firebase-666a1.firebaseapp.com",databaseURL:"https://react-redux-firebase-666a1.firebaseio.com",projectId:"react-redux-firebase-666a1",storageBucket:"react-redux-firebase-666a1.appspot.com",messagingSenderId:"687200999018",appId:"1:687200999018:web:5825920557746b3561dc13",measurementId:"G-62ZNS7VQX4"}),q.a.firestore();var M=q.a,Y=Object(y.e)(Q,Object(y.d)(Object(y.a)(Z.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:V.getFirestore})),Object(w.reactReduxFirebase)(M,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(V.reduxFirestore)(M)));Y.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(C.a,{store:Y},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}))}},[[211,1,2]]]);
//# sourceMappingURL=main.df88bf0f.chunk.js.map