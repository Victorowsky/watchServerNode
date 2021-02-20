(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(103),n(7)),s=n(5),l=n(84),u=n.n(l),m=(n(134),n(88)),d=n(177),f=n(179),v=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s","&:hover":{boxShadow:"0 0 10px white"}}}}}));function E(e){var t=e.text,n=e.onClick,a=e.style,c=v();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}var b=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s ease-in-out","&:hover":{color:"#6441a5",borderColor:"#6441a5"}}}}}));function h(e){var t=e.text,n=e.onClick,a=e.style,c=b();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}n(138);var g=function(e){var t=e.item,n=e.index,c=Object(a.useState)(),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(t)).then((function(e){return e.json()})).then((function(e){l(e.title)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"queueItem"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n+1,".",s||t)))},O=function(){var e=Object(a.useContext)(Q).videoQueue.map((function(e,t){return r.a.createElement(g,{item:e,index:t,key:t})}));return r.a.createElement("div",{className:"queue"},e)},j=n(86),p=n.n(j),w=n(85),C=n.n(w),k=function(){var e="https://boiling-bastion-80662.herokuapp.com",t=Object(a.useContext)(Q),n=t.twitchUserData,c=t.admin,o=t.setAdmin,l=t.setCurrentVideoLink,u=t.socket,d=t.setVideoQueue,f=t.videoQueue,v=t.setMaxDelay,b=t.maxDelay,g=Object(a.useState)(),j=Object(i.a)(g,2),w=j[0],k=j[1],y=Object(s.h)().twitchStreamer;void 0===y&&(y="victorowsky_"),Object(a.useEffect)((function(){if(n)return n.login.toLowerCase()===y.toLowerCase()&&(console.log("SETTING ADMIN"),c||o(!0)),function(){c&&o(!1)}}),[n,o,y,c]),Object(a.useEffect)((function(){if(c)return u.emit("adminQueueUpdate",{videoQueue:f,currentRoom:y}),function(){u.removeAllListeners("adminQueueUpdate")}}),[f,u,y,c]);var N=function(){w&&(l(w),k(""))},A=function(e){"increment"===e?v((function(e){return e+1})):"decrement"===e&&v((function(e){return e>2?e+-1:e}))};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminPanel"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:w,placeholder:"VIDEO URL",onChange:function(e){c&&k(e.target.value)}}),r.a.createElement("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),N()},type:"submit"}),r.a.createElement("div",{className:"optionButtons"},r.a.createElement(E,{text:"PLAY NOW",onClick:N}),r.a.createElement(E,{text:"ADD TO QUEUE",onClick:function(){w&&(d((function(e){return[].concat(Object(m.a)(e),[w])})),k(""))}}),r.a.createElement(E,{text:"SKIP",onClick:function(){c&&f&&(l(f[0]),d((function(e){return e.slice(1)})))}}),r.a.createElement(h,{text:"LOGOUT",onClick:function(){window.location.href="".concat(e,"/twitch/logout")}}))),n&&r.a.createElement("div",{className:"accountInfo"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"twitchImage",srcset:""})),n.login)),r.a.createElement(O,null)):r.a.createElement("div",{className:"delayInfoContainer"},r.a.createElement(O,null),r.a.createElement("div",{className:"delay"},r.a.createElement("span",{className:"delayInfo"},"Max Delay: ",b," seconds"),r.a.createElement("div",{className:"delayManage"},r.a.createElement("div",{className:"delayManageOptionDecrement",onClick:function(){return A("decrement")}},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"delayManageOptionIncrement",onClick:function(){return A("increment")}},r.a.createElement(p.a,null))),n?r.a.createElement("div",{className:"accountInfo"},r.a.createElement("a",{href:"".concat(e,"/#/").concat(n.login),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"twitchImage",srcset:""})),n.login)):r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{text:"LOGIN WITH TWITCH",onClick:function(){window.location.href="".concat(e,"/auth/twitch")}})))))},y=n(87),N=n.n(y),A=(n(146),function(){var e=Object(s.g)(),t=Object(s.h)().twitchStreamer;void 0===t&&(t="victorowsky_");var n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(t),m=Object(i.a)(u,2),d=m[0],f=m[1],v=Object(a.useContext)(Q),E=v.admin,b=v.setCurrentVideoLink,h=v.currentVideoLink,g=v.socket,O=v.setAdmin,j=v.setIsSuccess,p=v.setIsError,w=v.setErrorMessage,C=v.setSuccessMessage,k=v.videoQueue,y=v.setVideoQueue,A=v.maxDelay,S=v.setIsAdminTaken,x=Object(a.useState)(!1),I=Object(i.a)(x,2),L=I[0],D=I[1],T=Object(a.useRef)();Object(a.useEffect)((function(){var e;return E&&(e=setInterval((function(){g.emit("adminData",{currentRoom:d,currentSeconds:T.current.getCurrentTime(),videoQueue:k})}),3e3)),function(){clearInterval(e)}}),[E,g,d,k]),Object(a.useEffect)((function(){E&&g.emit("videoChange",{currentVideoLink:h,currentRoom:d})}),[h,g]),Object(a.useEffect)((function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),g.emit("leaveRoom",{currentRoom:d}),g.emit("adminLeave")})),f(t)}),[e.pathname]),Object(a.useEffect)((function(){return g.emit("joinRoom",{currentRoom:d}),function(){g.emit("leaveRoom",{currentRoom:d}),O(!1),g.emit("adminLeave")}}),[d]),Object(a.useEffect)((function(){if(g.on("onlineUsersAnswer",(function(e){var t=e.onlineUsers;l(t)})),!E)return g.on("videoChangeAnswer",(function(e){var t=e.currentVideoLink;b(t)})),g.on("isPlayingSocketAnswer",(function(e){var t=e.isPlaying;e.currentRoom;D(t)})),g.on("joinRoomAnswer",(function(e){var t=e.docs;b(t.currentVideoLink),l(t.onlineUsers),t.admin?S(!0):S(!1)})),g.on("adminAnswer",(function(e){var t=e.isAdminTaken;S(t)})),g.on("adminDataAnswer",(function(e){var t=e.currentSeconds,n=e.videoQueue;if(y(n),T.current){var a=T.current.getDuration(),r=T.current.getCurrentTime();a>t?r-A<t&&r+A>t||T.current.seekTo(t,"seconds"):r<a+6&&r>a-6||T.current.seekTo(a,"seconds")}})),g.on("adminRequestAnswer",(function(e){var t=e.success,n=e.message;t?(j(!0),C(n),O(!0)):(p(!0),w(n))})),g.on("adminQueueUpdateAnswer",(function(e){var t=e.videoQueue;y(t)})),function(){g.removeAllListeners("adminDataAnswer"),g.removeAllListeners("joinRoomAnswer"),g.removeAllListeners("isPlayingSocketAnswer"),g.removeAllListeners("videoChangeAnswer"),g.removeAllListeners("adminAnswer"),g.removeAllListeners("adminRequestAnswer"),g.removeAllListeners("adminQueueUpdateAnswer")}}),[d,E,g,A]);return r.a.createElement("div",{className:"videoAndChat"},r.a.createElement("div",{className:"playerAndChat"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(N.a,{ref:T,onPlay:function(){E&&(D(!0),g.emit("isPlaying",{isPlaying:!0,currentRoom:d}))},onPause:function(){E&&(D(!1),g.emit("isPlaying",{isPlaying:!1,currentRoom:d}))},playing:L,onEnded:function(){E&&k&&(b(k[0]),y((function(e){return e.slice(1)})))},className:"react-player",url:h,width:"100%",height:"100%",controls:!0,volume:.1})),r.a.createElement("div",{className:"twitchChat"},r.a.createElement("span",{className:"onlineUsers"},null!==o?"".concat(o," ONLINE"):"CONNECTING"),r.a.createElement("iframe",{style:{border:"2px solid #121212"},title:"TwitchChat",id:"chat_embed",src:"https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout&parent=").concat("boiling-bastion-80662.herokuapp.com"),height:"100%",width:"100%"}))))}),S=n(181),x=n(182);function I(e){return r.a.createElement(x.a,Object.assign({elevation:6,variant:"filled"},e))}var L=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(){var e=Object(a.useContext)(Q),t=e.isSuccess,n=e.setIsSuccess,c=e.successMessage,o=L(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(S.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(I,{onClose:i,severity:"success"},c)))}function T(e){return r.a.createElement(x.a,Object.assign({elevation:6,variant:"filled"},e))}var R=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function M(){var e=Object(a.useContext)(Q),t=e.isError,n=e.setIsError,c=e.errorMessage,o=R(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(S.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(T,{onClose:i,severity:"error"},c)))}var Q=r.a.createContext(),P=u()("/"),U=function(){var e=Object(s.f)(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],d=u[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),E=v[0],b=v[1],h=Object(a.useState)(!1),g=Object(i.a)(h,2),O=g[0],j=g[1],p=Object(a.useState)(""),w=Object(i.a)(p,2),C=w[0],y=w[1],N=Object(a.useState)(""),S=Object(i.a)(N,2),x=S[0],I=S[1],L=Object(a.useState)([]),T=Object(i.a)(L,2),R=T[0],U=T[1],V=Object(a.useState)(2),F=Object(i.a)(V,2),_=F[0],q=F[1],G=Object(a.useState)(!0),H=Object(i.a)(G,2),W=H[0],B=H[1],J=Object(a.useState)(null),K=Object(i.a)(J,2),Y=K[0],z=K[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(m)).then((function(e){return e.json()})).then((function(e){document.title=e.title,void 0===e.title&&(document.title="Watch Together")}))}),[m]),Object(a.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&z(e.profile)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Provider,{value:{twitchUserData:Y,admin:c,setAdmin:o,socket:P,currentVideoLink:m,setCurrentVideoLink:d,history:e,isSuccess:E,setIsSuccess:b,isError:O,setIsError:j,successMessage:C,setSuccessMessage:y,errorMessage:x,setErrorMessage:I,videoQueue:R,setVideoQueue:U,maxDelay:_,setMaxDelay:q,isAdminTaken:W,setIsAdminTaken:B}},r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement(A,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(k,null))),r.a.createElement(s.a,{path:"/:twitchStreamer",exact:!0},r.a.createElement(A,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(k,null)))),r.a.createElement(D,null),r.a.createElement(M,null))))},V=n(32);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V.a,null,r.a.createElement(U,null))),document.getElementById("root"))},98:function(e,t,n){e.exports=n(147)}},[[98,13,14]]]);
//# sourceMappingURL=main.40333677.chunk.js.map