(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(103),n(6)),s=n(5),l=n(84),u=n.n(l),m=(n(134),n(88)),d=n(178),f=n(180),v=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s","&:hover":{boxShadow:"0 0 10px white"}}}}}));function E(e){var t=e.text,n=e.onClick,a=e.style,c=v();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}var h=Object(d.a)((function(e){return{root:{"& > *":{backgroundColor:"#6441a5",color:"white",transition:"0.3s ease-in-out","&:hover":{color:"white",borderColor:"#6441a5"}}}}}));function b(e){var t=e.text,n=e.onClick,a=e.style,c=h();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}n(138);var g=function(e){var t=e.item,n=e.index,c=Object(a.useState)(),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(t)).then((function(e){return e.json()})).then((function(e){l(e.title)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"queueItem"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n+1,".",s||t)))},p=function(){var e=Object(a.useContext)(M).videoQueue.map((function(e,t){return r.a.createElement(g,{item:e,index:t,key:t})}));return r.a.createElement("div",{className:"queue"},e)},w=n(86),O=n.n(w),j=n(85),C=n.n(j),k=function(){var e,t=Object(a.useContext)(M),n=t.twitchUserData,c=t.websiteURL,o=t.admin,l=t.setAdmin,u=t.setCurrentVideoLink,d=t.socket,f=t.setVideoQueue,v=t.videoQueue,h=t.setMaxDelay,g=t.maxDelay,w=Object(a.useState)(),j=Object(i.a)(w,2),k=j[0],y=j[1],N=Object(s.h)().twitchStreamer;void 0===N&&(N="victorowsky_"),N=null===(e=N)||void 0===e?void 0:e.toLowerCase(),Object(a.useEffect)((function(){if(n)return n.login.toLowerCase()===N.toLowerCase()&&(o||l(!0)),function(){o&&l(!1)}}),[n,l,N,o]),Object(a.useEffect)((function(){if(o)return d.emit("adminQueueUpdate",{videoQueue:v,currentRoom:N}),function(){d.removeAllListeners("adminQueueUpdate")}}),[v,d,N,o]);var A=function(){k&&(u(k),y(""))},L=function(e){"increment"===e?h((function(e){return e+1})):"decrement"===e&&h((function(e){return e>2?e+-1:e}))};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminPanel"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:k,placeholder:"VIDEO URL",onChange:function(e){o&&y(e.target.value)}}),r.a.createElement("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),A()},type:"submit"}),r.a.createElement("div",{className:"optionButtons"},r.a.createElement(E,{text:"PLAY NOW",onClick:A}),r.a.createElement(E,{text:"ADD TO QUEUE",onClick:function(){k&&(f((function(e){return[].concat(Object(m.a)(e),[k])})),y(""))}}),r.a.createElement(E,{text:"SKIP",onClick:function(){o&&v&&(u(v[0]),f((function(e){return e.slice(1)})))}}),r.a.createElement(b,{text:"LOGOUT",onClick:function(){window.location.href="".concat(c,"/twitch/logout")}}))),n&&r.a.createElement("div",{className:"accountInfo"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"twitchImage",srcset:""})),n.login)),r.a.createElement(p,null)):r.a.createElement("div",{className:"delayInfoContainer"},r.a.createElement(p,null),r.a.createElement("div",{className:"delay"},r.a.createElement("span",{className:"delayInfo"},"Max Delay: ",g," seconds"),r.a.createElement("div",{className:"delayManage"},r.a.createElement("div",{className:"delayManageOptionDecrement",onClick:function(){return L("decrement")}},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"delayManageOptionIncrement",onClick:function(){return L("increment")}},r.a.createElement(O.a,null))),n?r.a.createElement("div",{className:"accountInfo"},r.a.createElement("a",{href:"".concat(c,"/#/").concat(n.login.toLowerCase()),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"Profile"})),n.login)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"twitchLoginButton"},r.a.createElement(b,{text:"LOGIN WITH TWITCH",onClick:function(){window.location.href="".concat(c,"/auth/twitch")}}))))))},y=n(87),N=n.n(y),A=(n(146),function(){var e=Object(s.g)(),t=Object(s.h)().twitchStreamer;void 0===t&&(t="victorowsky_"),t=t.toLowerCase();var n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(t),m=Object(i.a)(u,2),d=m[0],f=m[1],v=Object(a.useContext)(M),E=v.admin,h=v.setCurrentVideoLink,b=v.currentVideoLink,g=v.socket,p=v.setAdmin,w=v.setIsSuccess,O=v.setIsError,j=v.setErrorMessage,C=v.setSuccessMessage,k=v.videoQueue,y=v.setVideoQueue,A=v.maxDelay,L=v.setIsAdminTaken,S=Object(a.useState)(!1),x=Object(i.a)(S,2),I=x[0],D=x[1],T=Object(a.useRef)();Object(a.useEffect)((function(){var e;return E&&(e=setInterval((function(){g.emit("adminData",{currentRoom:d,currentSeconds:T.current.getCurrentTime(),videoQueue:k})}),3e3)),function(){clearInterval(e)}}),[E,g,d,k]),Object(a.useEffect)((function(){E&&g.emit("videoChange",{currentVideoLink:b,currentRoom:d})}),[b,g]),Object(a.useEffect)((function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),g.emit("leaveRoom",{currentRoom:d}),g.emit("adminLeave")})),f(t)}),[e.pathname]),Object(a.useEffect)((function(){return g.emit("joinRoom",{currentRoom:d}),function(){g.emit("leaveRoom",{currentRoom:d}),p(!1),g.emit("adminLeave")}}),[d]),Object(a.useEffect)((function(){if(g.on("onlineUsersAnswer",(function(e){var t=e.onlineUsers;l(t)})),g.on("joinRoomAnswer",(function(e){var t=e.docs;h(t.currentVideoLink)})),!E)return g.on("videoChangeAnswer",(function(e){var t=e.currentVideoLink;h(t)})),g.on("isPlayingSocketAnswer",(function(e){var t=e.isPlaying;e.currentRoom;D(t)})),g.on("joinRoomAnswer",(function(e){var t=e.docs;h(t.currentVideoLink),l(t.onlineUsers),t.admin?L(!0):L(!1)})),g.on("adminAnswer",(function(e){var t=e.isAdminTaken;L(t)})),g.on("adminDataAnswer",(function(e){var t=e.currentSeconds,n=e.videoQueue;if(y(n),T.current){var a=T.current.getDuration(),r=T.current.getCurrentTime();a>t?r-A<t&&r+A>t||T.current.seekTo(t,"seconds"):r<a+6&&r>a-6||T.current.seekTo(a,"seconds")}})),g.on("adminRequestAnswer",(function(e){var t=e.success,n=e.message;t?(w(!0),C(n),p(!0)):(O(!0),j(n))})),g.on("adminQueueUpdateAnswer",(function(e){var t=e.videoQueue;y(t)})),function(){g.removeAllListeners("adminDataAnswer"),g.removeAllListeners("joinRoomAnswer"),g.removeAllListeners("isPlayingSocketAnswer"),g.removeAllListeners("videoChangeAnswer"),g.removeAllListeners("adminAnswer"),g.removeAllListeners("adminRequestAnswer"),g.removeAllListeners("adminQueueUpdateAnswer")}}),[d,E,g,A]);return r.a.createElement("div",{className:"videoAndChat"},r.a.createElement("div",{className:"playerAndChat"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(N.a,{ref:T,onPlay:function(){E&&(D(!0),g.emit("isPlaying",{isPlaying:!0,currentRoom:d}))},onPause:function(){E&&(D(!1),g.emit("isPlaying",{isPlaying:!1,currentRoom:d}))},playing:I,onEnded:function(){E&&k&&(h(k[0]),y((function(e){return e.slice(1)})))},className:"react-player",url:b,width:"100%",height:"100%",controls:!0,volume:.1})),r.a.createElement("div",{className:"twitchChat"},r.a.createElement("span",{className:"onlineUsers"},null!==o?"".concat(o," ONLINE"):"CONNECTING"),r.a.createElement("iframe",{style:{border:"2px solid #121212"},title:"TwitchChat",id:"chat_embed",src:"https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout&parent=").concat("boiling-bastion-80662.herokuapp.com"),height:"100%",width:"100%"}))))}),L=n(182),S=n(183);function x(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}var I=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(){var e=Object(a.useContext)(M),t=e.isSuccess,n=e.setIsSuccess,c=e.successMessage,o=I(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(L.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(x,{onClose:i,severity:"success"},c)))}function T(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e))}var R=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function U(){var e=Object(a.useContext)(M),t=e.isError,n=e.setIsError,c=e.errorMessage,o=R(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(L.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(T,{onClose:i,severity:"error"},c)))}n(147);var Q=function(){var e=Object(a.useContext)(M).twitchUserData,t=Object(s.f)(),n=Object(a.useState)(),c=Object(i.a)(n,2),o=c[0],l=c[1],u="https://boiling-bastion-80662.herokuapp.com";return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null," Twitch Together"),r.a.createElement("h2",null,"Enter twitch streamer username"),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Channel",type:"text",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{type:"submit",style:{display:"none"},onClick:function(e){e.preventDefault(),o&&t.push("/".concat(o))}}),e?r.a.createElement("div",{className:"userInfo"},r.a.createElement("a",{href:"".concat(u,"/#/").concat(e.login)},r.a.createElement("img",{src:e.image,alt:"Twitch"}),e.login)):r.a.createElement("div",{onClick:function(){window.location.href="".concat(u,"/auth/twitch")},className:"twitchButton"},"Login with Twitch")))},M=r.a.createContext(),P=u()("/"),V=function(){var e=Object(s.f)(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],d=u[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),E=v[0],h=v[1],b=Object(a.useState)(!1),g=Object(i.a)(b,2),p=g[0],w=g[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),C=j[0],y=j[1],N=Object(a.useState)(""),L=Object(i.a)(N,2),S=L[0],x=L[1],I=Object(a.useState)([]),T=Object(i.a)(I,2),R=T[0],V=T[1],F=Object(a.useState)(2),_=Object(i.a)(F,2),q=_[0],B=_[1],H=Object(a.useState)(!0),W=Object(i.a)(H,2),G=W[0],J=W[1],K=Object(a.useState)(null),Y=Object(i.a)(K,2),z=Y[0],X=Y[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(m)).then((function(e){return e.json()})).then((function(e){document.title=e.title,void 0===e.title&&(document.title="Watch Together")}))}),[m]),Object(a.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&X(e.profile)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(M.Provider,{value:{websiteURL:"https://boiling-bastion-80662.herokuapp.com",twitchUserData:z,admin:c,setAdmin:o,socket:P,currentVideoLink:m,setCurrentVideoLink:d,history:e,isSuccess:E,setIsSuccess:h,isError:p,setIsError:w,successMessage:C,setSuccessMessage:y,errorMessage:S,setErrorMessage:x,videoQueue:R,setVideoQueue:V,maxDelay:q,setMaxDelay:B,isAdminTaken:G,setIsAdminTaken:J}},r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement(Q,null)),r.a.createElement(s.a,{path:"/:twitchStreamer",exact:!0},r.a.createElement(A,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(k,null)))),r.a.createElement(D,null),r.a.createElement(U,null))))},F=n(28);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement(V,null))),document.getElementById("root"))},98:function(e,t,n){e.exports=n(148)}},[[98,13,14]]]);
//# sourceMappingURL=main.11051e2e.chunk.js.map