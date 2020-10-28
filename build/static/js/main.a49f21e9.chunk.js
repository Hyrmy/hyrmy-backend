(this["webpackJsonphyrmy-frontend"]=this["webpackJsonphyrmy-frontend"]||[]).push([[0],{52:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),l=n.n(i),o=n(7),c=n(9),s=n(16),u=n(87),m=function(){var e=Object(o.c)((function(e){return e.notification}));return e?r.a.createElement("div",null,"error"===e.type?r.a.createElement("div",{className:"container"},e.message&&r.a.createElement(u.a,{variant:"danger"},e.message)):r.a.createElement("div",{className:"container"},e.message&&r.a.createElement(u.a,{variant:"success"},e.message))):r.a.createElement("div",null)},p=n(3),h=n.n(p),d=n(6),f=n(13),g=n.n(f),E={login:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN":return t.data;case"CLEAR_LOGIN":return null;default:return e}},y=function(e){return r.a.createElement("div",{class:"row",style:{content:"",clear:"both"}},r.a.createElement("div",{class:"logoColumn",style:{float:"left",width:"33%",height:"100px",backgroundColor:"black",padding:"10px"}},r.a.createElement("div",{style:{float:"right"}},r.a.createElement("img",{alt:"hyrmy-footer",src:"../../hyrmy-footer.png",width:"80",height:"80"}))),r.a.createElement("div",{class:"middleColumn",style:{width:"33%",height:"100px",backgroundColor:"black",textColor:"white",padding:"20px",textAlign:"center"}},r.a.createElement("p",{style:{color:"white"}},"Helsingin yliopiston raskaan musiikin yst\xe4v\xe4t - HYRMY",r.a.createElement("br",null),"Ulrika klusteri, Lepp\xe4suonkatu 11, 00100 HELSINKI")),r.a.createElement("div",{class:"someColumn",style:{float:"left",width:"33%",height:"100px",backgroundColor:"black",textColor:"white",padding:"35px"}},r.a.createElement("a",{href:"https://www.facebook.com/groups/hyrmy/"},r.a.createElement("img",{border:"0",alt:"hyrmy-facebook",src:"../../facebook-icon.png",width:"30",height:"30"})),r.a.createElement("a",{href:"https://twitter.com/HYRMY"},r.a.createElement("img",{border:"0",alt:"hyrmy-twitter",src:"../../twitter-big.png",width:"30",height:"30"})),r.a.createElement("a",{href:"https://www.instagram.com/hyrmy_hki/"},r.a.createElement("img",{border:"0",alt:"instagram-big",src:"../../hyrmy-instagram-black.png",width:"30",height:"30"})),r.a.createElement("br",null)))},v=function(e){return{type:"NEW_NOTIFICATION",data:{message:e,type:"error"}}},w=function(e){return{type:"NEW_NOTIFICATION",data:{message:e,type:"success"}}},k=function(){return{type:"REMOVE_NOTIFICATION"}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},N=n(84),j={createSuccessNotification:w,clearNotification:k,createErrorNotification:v},x=Object(o.b)((function(e){return{visibleApplies:(t=e,t.applies),login:e.login};var t}),j)((function(e){return r.a.createElement("div",{style:{height:"900px"}},r.a.createElement("h2",null,"Applies"),r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Residence"),r.a.createElement("th",null,"Notes"),r.a.createElement("th",null,"Hyy-member"))),r.a.createElement("tbody",null,e.visibleApplies.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.residence),r.a.createElement("td",null,e.notes),e.hyyMember?r.a.createElement("td",null,"Yes"):r.a.createElement("td",null,"No"))})))))})),C=n(8),I=n(86),T=n(85),S={setLogin:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.login(e);case 2:a=t.sent,window.localStorage.setItem("loggedEventappLogin",JSON.stringify(a)),n({type:"SET_LOGIN",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},L=Object(o.b)((function(e){return{login:e.login}}),S)((function(e){var t=Object(a.useState)(""),n=Object(C.a)(t,2),i=n[0],l=n[1],o=Object(a.useState)(""),c=Object(C.a)(o,2),s=c[0],u=c[1],m=function(){var t=Object(d.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.setLogin({username:s,password:i});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{style:{height:"900px"}},r.a.createElement("h2",null,"Login"),r.a.createElement(I.a,{onSubmit:m},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"username:"),r.a.createElement(I.a.Control,{id:"username",name:"username",onChange:function(e){u(e.target.value)}}),r.a.createElement(I.a.Label,null,"password:"),r.a.createElement(I.a.Control,{id:"password",name:"password",type:"password",onChange:function(e){l(e.target.value)}}),r.a.createElement(T.a,{id:"login-button",variant:"primary",type:"submit"},"Login"))))})),A={clearLogin:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),t({type:"CLEAR_LOGIN"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Y=Object(o.b)((function(e){return{login:e.login}}),A)((function(e){var t={padding:5,color:"white",display:"inline"},n=function(){var t=Object(d.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.clearLogin();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{style:{backgroundColor:"black",borderWidth:5,padding:10,height:"80px",textAlign:"center"}},r.a.createElement(c.b,{style:t,to:"/"},r.a.createElement("h4",{style:{display:"inline"}},"Front Page")),r.a.createElement(c.b,{style:t,to:"/events"},r.a.createElement("h4",{style:{display:"inline"}},"Events")),r.a.createElement(c.b,{style:t,to:"/contact"},r.a.createElement("h4",{style:{display:"inline"}},"Contact us")),r.a.createElement(c.b,{style:t,to:"/applyform"},r.a.createElement("h4",{style:{display:"inline"}},"Join Hyrmy")),e.login?r.a.createElement("div",{style:{display:"inline"}},r.a.createElement(c.b,{style:t,to:"/addevent"},r.a.createElement("h4",{style:{display:"inline"}},"Add new event")),r.a.createElement(c.b,{style:t,to:"/applies"},r.a.createElement("h4",{style:{display:"inline"}},"Applies")),r.a.createElement("p",{style:{color:"white",display:"inline",float:"right"}},"Logged in as ",e.login.username,r.a.createElement("button",{style:{padding:5,float:"right",display:"inline"},onClick:n},"Logout "))):r.a.createElement(c.b,{style:t,to:"/login"},r.a.createElement("h4",{style:{display:"inline"}},"Admin login")))})),H=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Metal Club of Helsinki University"),r.a.createElement("p",null,"Hey freshers, exchange students, and other new faces!"),r.a.createElement("p",null,"The friends of heavy music of Helsinki University (abr. HYRMY) is an organization operating in the University of Helsinki domain. Our objectives are to unite the metal music enthusiasts and to promote their interests. HYRMY is a devoted bunch of people with metal music close to heart. Welcome!      "),r.a.createElement("p",null,"HYRMY offers its members neverending madness and company with every imaginable form of heavy music. We organise loud club nights where music blares, spirited discussions in the form of our music nights, our hordes roam around gigs and festivals, and on top of all that the club features vast arrays of other related activities. If you are looking for brothers and sisters on the heavy journey that is life, we are your organisation.      "),r.a.createElement("p",null,"We have crafted a tight information blast for you down below, go through it to find out more!"),r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JOgIRii1vuU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("h3",null,"A crash course in HYRMY's history and activities"),r.a.createElement("p",null,"Everything began on March 26, 2002 (at least officially) when the founding members of HYRMY sought to operate as an official organization under the student union of Helsinki university. At that time, HYRMY, i.e. Helsingin yliopiston raskaan musiikin yst","\xe4","v","\xe4","t, was only a small group of friends who had a shared love for metal music. Nowadays, the organization can barely be called small as the number of members has grown from just a handful over two hundred in the span of these 18 years. The growth is apparent in the organization's events; at the time of the organization's founding, all members could surely fit around one table to talk about music and drink beer, but in recent years, the most popular events have more often than not needed several tables - not to mention seats."),r.a.createElement("p",null,"Even though the growing number of participants and members has at times proved challenging in terms of keeping the drink from completely taking music's place from the spotlight, HYRMY ensures that the founding members' music orientated vision stays alive and well at the core of the organization. To keep the organization's activities from sliding into pure mindless drinking and to revitalize the founding members' vision, HYRMY created in 2015 the concept of music nights, where the focus is primarily on music and conversation about music. Other music orientated activities include, for example, pre-gig nights, where good company and good mood gathers to celebrate all sorts of bands' live music. HYRMY also has some former experience as a gig organizer, though admittedly there's been a few years' break from such activities. The rumors however tell that there are plans for bringing HYRMY-gigs back to life as soon as the circumstances happen to allow it."),r.a.createElement("p",null,"Despite the growing number of participants and members and the changes it has caused in the organization's activities, one thing has and will always remain the same: love for metal music. This shared passion ensures that there's no need to worry about finding company or topics for discussion in HYRMY's events. No matter the genres you prefer, your nationality, or the subject you major in - all lovers of metal are welcome to HYRMY!"))},R=n(24),M=null,_={getAll:function(){return g.a.get("/api/events").then((function(e){return e.data}))},create:function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:M}},e.next=3,g.a.post("/api/events",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat("/api/events","/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){M="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:M}};return g.a.delete("".concat("/api/events","/").concat(e),t).then((function(e){return e.data}))}},z=function(e){return function(){var t=Object(d.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.remove(e);case 2:n({type:"REMOVE_EVENT",data:{id:e}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_EVENT":return[].concat(Object(R.a)(e),[t.data]);case"REMOVE_EVENT":var n=t.data.id,a=e.filter((function(e){return e.id!==n}));return a;case"INIT_EVENTS":return t.data;default:return e}},G={removeEvent:z,createSuccessNotification:w,clearNotification:k,createErrorNotification:v},F=Object(o.b)((function(e){return{visibleEvents:(t=e,t.events),login:e.login};var t}),G)((function(e){var t={borderRadius:"25px",background:"black",padding:"25px",width:"600px"};return r.a.createElement("div",{style:{height:"900px"}},r.a.createElement("h2",null,"Events"),r.a.createElement("table",{style:{borderCollapse:"separate",borderSpacing:"50px"}},e.visibleEvents.map((function(e){return r.a.createElement("tr",{key:e.id,style:t},r.a.createElement("td",{style:t},r.a.createElement(c.b,{to:"events/".concat(e.id),style:{color:"white"}},r.a.createElement("h3",null,"".concat(e.title)))))}))))})),P={createSuccessNotification:w,createErrorNotification:v,clearNotification:k,removeEvent:z},V=Object(o.b)((function(e){return{login:e.login,events:e.events}}),P)((function(e){var t=Object(a.useState)(!1),n=Object(C.a)(t,2),i=(n[0],n[1]),l=Object(s.f)().id,o=e.events.find((function(e){return e.id===l})),c=function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("Do you really want to remove ".concat(o.title,"?"))){t.next=2;break}return t.abrupt("return");case 2:i(!0),e.createErrorNotification("Removed ".concat(o.title,".")),e.removeEvent(o.id),setTimeout((function(){e.clearNotification()}),5e3);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o?r.a.createElement("div",{style:{height:"1000px"}},r.a.createElement("h2",null,o.title),r.a.createElement("p",null,"Time: ",o.time),r.a.createElement("p",null,"Date: ",o.date),r.a.createElement("p",null,"Tapahtuma: ",o.info),e.login?r.a.createElement(T.a,{onClick:function(){return c()}},"Remove"):null):null})),D={createEvent:function(e,t){return console.log(e),console.log(t),function(){var t=Object(d.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.create(e);case 2:a=t.sent,console.log(a),n({type:"NEW_EVENT",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createSuccessNotification:w,clearNotification:k},U=Object(o.b)((function(e){return{user:e.user}}),D)((function(e){var t=Object(a.useState)(""),n=Object(C.a)(t,2),i=n[0],l=n[1],o=Object(a.useState)(""),c=Object(C.a)(o,2),s=c[0],u=c[1],m=Object(a.useState)(""),p=Object(C.a)(m,2),h=p[0],d=p[1],f=Object(a.useState)(""),g=Object(C.a)(f,2),E=g[0],b=g[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new event "),r.a.createElement(I.a,{onSubmit:function(t){t.preventDefault(),console.log("props.user: ",e.user),e.createEvent({title:i,info:E,time:s,date:h},e.user),e.createSuccessNotification("Created new event: ".concat(i,".")),setTimeout((function(){e.clearNotification()}),5e3),l(""),b(""),u(""),d("")}},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null," Title:"),r.a.createElement(I.a.Control,{id:"title",type:"text",value:i,name:"title",onChange:function(e){l(e.target.value)}}),r.a.createElement(I.a.Label,null," info:"),r.a.createElement(I.a.Control,{id:"info",type:"text",value:E,name:"info",onChange:function(e){b(e.target.value)}}),r.a.createElement(I.a.Label,null," time:"),r.a.createElement(I.a.Control,{id:"time",type:"text",value:s,name:"time",onChange:function(e){u(e.target.value)}}),r.a.createElement(I.a.Label,null," date:"),r.a.createElement(I.a.Control,{id:"date",type:"text",value:h,name:"date",onChange:function(e){d(e.target.value)}}),r.a.createElement(T.a,{id:"submit-button",variant:"primary",type:"submit"},"Create Event"))))})),J=null,q={getAll:function(){var e={headers:{Authorization:J}};return g.a.get("/api/apply",e).then((function(e){return e.data}))},create:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/apply",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){J="bearer ".concat(e)}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_APPLY":return[].concat(Object(R.a)(e),[t.data]);case"INIT_APPLIES":return t.data;default:return e}},K={createApply:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.create(e);case 2:a=t.sent,n({type:"NEW_APPLY",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createSuccessNotification:w,clearNotification:k},Q=Object(o.b)((function(e){return{login:e.login,users:e.users}}),K)((function(e){var t=Object(a.useState)(""),n=Object(C.a)(t,2),i=n[0],l=n[1],o=Object(a.useState)(""),c=Object(C.a)(o,2),s=c[0],u=c[1],m=Object(a.useState)(""),p=Object(C.a)(m,2),h=p[0],d=p[1],f=Object(a.useState)(""),g=Object(C.a)(f,2),E=g[0],b=g[1],y=Object(a.useState)(!1),v=Object(C.a)(y,2),w=v[0],k=v[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new apply "),r.a.createElement(I.a,{onSubmit:function(t){t.preventDefault(),e.createApply({name:i,email:E,residence:s,notes:h,hyyMember:w}),e.createSuccessNotification("Created new apply: ".concat(i,".")),setTimeout((function(){e.clearNotification()}),5e3),l(""),b(""),u(""),d("")}},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null," Name:"),r.a.createElement(I.a.Control,{id:"name",type:"text",value:i,name:"name",onChange:function(e){l(e.target.value)}}),r.a.createElement(I.a.Label,null," Email:"),r.a.createElement(I.a.Control,{id:"email",type:"text",value:E,name:"email",onChange:function(e){b(e.target.value)}}),r.a.createElement(I.a.Label,null,"Current city:"),r.a.createElement(I.a.Control,{id:"residence",type:"text",value:s,name:"residence",onChange:function(e){u(e.target.value)}}),r.a.createElement(I.a.Label,null,"Notes:"),r.a.createElement(I.a.Control,{id:"notes",type:"text",value:h,name:"notes",onChange:function(e){d(e.target.value)}}),r.a.createElement(I.a.Label,null,"Hyy-member: "),r.a.createElement(I.a.Check,{style:{display:"inline",padding:"30px"},id:"hyyMember",type:"checkbox",value:w,name:"hyyMember",onChange:function(){k(!w)}}),r.a.createElement("br",null),r.a.createElement(T.a,{id:"submit-button",variant:"primary",type:"submit"},"Create Apply"))))})),X=function(e){return r.a.createElement("div",{style:{height:"900px"}},r.a.createElement("h3",null,"Contact us "),r.a.createElement("h4",null,"Mailing Address"),r.a.createElement("p",null,"Helsingin yliopiston raskaan musiikin yst","\xe4","v","\xe4","t - HYRMY",r.a.createElement("br",null),"Lepp","\xe4","suonkatu 11",r.a.createElement("br",null),"00100 HELSINKI"),r.a.createElement("h4",null,"Clubroom"),r.a.createElement("p",null,"Ulrika Cluster",r.a.createElement("br",null),"Domus Gaudium, Ground floor Lepp","\xe4","suonkatu 11"),r.a.createElement("a",{href:"https://www.google.com/maps/place/Lepp%C3%A4suonkatu+11,+00100+Helsinki"},"Show in Google maps"),r.a.createElement("h4",null,"Email"),r.a.createElement("p",null,"Council: hyrmy-council (at) helsinki.fi"),r.a.createElement("p",null,"Webmaster: hyrmy.web (at) gmail.com"),r.a.createElement("h4",null,"Account Number"),r.a.createElement("p",null,"BIC: OKOYFIHH (OP)",r.a.createElement("br",null)," IBAN: FI80 5236 0420 2446 70"),r.a.createElement("h4",null,"Web Communities"),r.a.createElement("a",{href:"https://www.facebook.com/groups/hyrmy/"},r.a.createElement("img",{border:"0",alt:"hyrmy-facebook",src:"../../facebook-icon.png",width:"30",height:"30"}),"Facebook"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.instagram.com/hyrmy_hki/"},r.a.createElement("img",{border:"0",alt:"hyrmy-instagram",src:"../../instagram-icon.png",width:"30",height:"30"}),"Instagram"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://twitter.com/HYRMY"},r.a.createElement("img",{border:"0",alt:"hyrmy-twitter",src:"../../twitter-icon.png",width:"30",height:"30"}),"Twitter"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://calendar.google.com/calendar/u/0/embed?src=qnsj9k42fj11jn5deqfqg7lgp0@group.calendar.google.com&ctz=Europe/Helsinki"},r.a.createElement("img",{border:"0",alt:"hyrmy-calendar",src:"../../google-calendar-icon.png",width:"30",height:"30"}),"Google Calendar"))},Z={setLoginFromToken:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_LOGIN",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},initializeEvents:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getAll();case 2:n=e.sent,t({type:"INIT_EVENTS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},initializeApplies:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getAll();case 2:n=e.sent,t({type:"INIT_APPLIES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},$=Object(o.b)((function(e){return{login:e.login,users:e.users}}),Z)((function(e){var t=window.localStorage.getItem("loggedEventappLogin");return Object(a.useEffect)((function(){if(e.initializeEvents(),t){var n=JSON.parse(t);e.setLoginFromToken(n),_.setToken(n.token),q.setToken(n.token),e.initializeApplies()}}),[]),r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(Y,null)),r.a.createElement("div",{class:"container"},r.a.createElement(m,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/events/:id"},r.a.createElement(V,null)),r.a.createElement(s.a,{path:"/contact"},r.a.createElement(X,null)),r.a.createElement(s.a,{path:"/applyform"},r.a.createElement(Q,null)),r.a.createElement(s.a,{path:"/events"},r.a.createElement(F,null)),e.login?r.a.createElement(s.a,{path:"/addevent"},r.a.createElement(U,null)):r.a.createElement(s.a,{path:"/login"},r.a.createElement(L,null)),e.login?r.a.createElement(s.a,{path:"/applies"},r.a.createElement(x,null)):null,r.a.createElement(s.a,{path:"*"},r.a.createElement(H,null)))),r.a.createElement("div",null,r.a.createElement(y,null))))})),ee=n(17),te=n(47),ne=n(48),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},re=Object(ee.combineReducers)({events:W,login:b,notification:O,users:ae,applies:B}),ie=Object(ee.createStore)(re,Object(ne.composeWithDevTools)(Object(ee.applyMiddleware)(te.a)));l.a.render(r.a.createElement(o.a,{store:ie},r.a.createElement($,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a49f21e9.chunk.js.map