(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(103),n(7)),s=n(5),l=n(84),u=n.n(l),m=(n(134),n(88)),d=n(177),f=n(179),v=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s","&:hover":{boxShadow:"0 0 10px white"}}}}}));function E(e){var t=e.text,n=e.onClick,a=e.style,c=v();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}var b=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s ease-in-out","&:hover":{color:"#6441a5",borderColor:"#6441a5"}}}}}));function h(e){var t=e.text,n=e.onClick,a=e.style,c=b();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}n(138);var O=function(e){var t=e.item,n=e.index,c=Object(a.useState)(),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(t)).then((function(e){return e.json()})).then((function(e){l(e.title)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"queueItem"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n+1,".",s||t)))},p=function(){var e=Object(a.useContext)(Q).videoQueue.map((function(e,t){return r.a.createElement(O,{item:e,index:t,key:t})}));return r.a.createElement("div",{className:"queue"},e)},j=n(86),g=n.n(j),w=n(85),C=n.n(w),k=function(){var e=Object(a.useContext)(Q),t=e.twitchUserData,n=e.admin,c=e.setAdmin,o=e.setCurrentVideoLink,l=e.socket,u=e.setVideoQueue,d=e.videoQueue,f=e.setMaxDelay,v=e.maxDelay,b=Object(a.useState)(),O=Object(i.a)(b,2),j=O[0],w=O[1],k=Object(s.h)().twitchStreamer;void 0===k&&(k="victorowsky_"),Object(a.useEffect)((function(){if(t)return t.login.toLowerCase()===k.toLowerCase()&&(console.log("SETTING ADMIN"),n||c(!0)),function(){n&&c(!1)}}),[t,c,k,n]),Object(a.useEffect)((function(){if(n)return l.emit("adminQueueUpdate",{videoQueue:d,currentRoom:k}),function(){l.removeAllListeners("adminQueueUpdate")}}),[d,l,k,n]);var y=function(){j&&(o(j),w(""))},A=function(e){"increment"===e?f((function(e){return e+1})):"decrement"===e&&f((function(e){return e>2?e+-1:e}))};return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminPanel"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:j,placeholder:"VIDEO URL",onChange:function(e){n&&w(e.target.value)}}),r.a.createElement("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),y()},type:"submit"}),r.a.createElement("div",{className:"optionButtons"},r.a.createElement(E,{text:"PLAY NOW",onClick:y}),r.a.createElement(E,{text:"ADD TO QUEUE",onClick:function(){j&&(u((function(e){return[].concat(Object(m.a)(e),[j])})),w(""))}}),r.a.createElement(E,{text:"SKIP",onClick:function(){n&&d&&(o(d[0]),u((function(e){return e.slice(1)})))}}),r.a.createElement(h,{text:"LOGOUT",onClick:function(){window.location.href="https://boiling-bastion-80662.herokuapp.com/twitch/logout"}}))),t&&r.a.createElement("div",{className:"accountInfo"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t.image,alt:"twitchImage",srcset:""})),t.login)),r.a.createElement(p,null)):r.a.createElement("div",{className:"delayInfoContainer"},r.a.createElement(p,null),r.a.createElement("div",{className:"delay"},r.a.createElement("span",{className:"delayInfo"},"Max Delay: ",v," seconds"),r.a.createElement("div",{className:"delayManage"},r.a.createElement("div",{className:"delayManageOptionDecrement",onClick:function(){return A("decrement")}},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"delayManageOptionIncrement",onClick:function(){return A("increment")}},r.a.createElement(g.a,null))),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{text:"LOGIN WITH TWITCH",onClick:function(){window.location.href="https://boiling-bastion-80662.herokuapp.com/auth/twitch"}})))))},y=n(87),A=n.n(y),N=(n(146),function(){var e=Object(s.g)(),t=Object(s.h)().twitchStreamer;void 0===t&&(t="victorowsky_");var n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(t),m=Object(i.a)(u,2),d=m[0],f=m[1],v=Object(a.useContext)(Q),E=v.admin,b=v.setCurrentVideoLink,h=v.currentVideoLink,O=v.socket,p=v.setAdmin,j=v.setIsSuccess,g=v.setIsError,w=v.setErrorMessage,C=v.setSuccessMessage,k=v.videoQueue,y=v.setVideoQueue,N=v.maxDelay,S=v.setIsAdminTaken,x=Object(a.useState)(!1),I=Object(i.a)(x,2),L=I[0],D=I[1],T=Object(a.useRef)();Object(a.useEffect)((function(){var e;return E&&(e=setInterval((function(){O.emit("adminData",{currentRoom:d,currentSeconds:T.current.getCurrentTime(),videoQueue:k})}),3e3)),function(){clearInterval(e)}}),[E,O,d,k]),Object(a.useEffect)((function(){E&&O.emit("videoChange",{currentVideoLink:h,currentRoom:d})}),[h,O]),Object(a.useEffect)((function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),O.emit("leaveRoom",{currentRoom:d}),O.emit("adminLeave")})),f(t)}),[e.pathname]),Object(a.useEffect)((function(){return O.emit("joinRoom",{currentRoom:d}),function(){O.emit("leaveRoom",{currentRoom:d}),p(!1),O.emit("adminLeave")}}),[d]),Object(a.useEffect)((function(){if(O.on("onlineUsersAnswer",(function(e){var t=e.onlineUsers;l(t)})),!E)return O.on("videoChangeAnswer",(function(e){var t=e.currentVideoLink;b(t)})),O.on("isPlayingSocketAnswer",(function(e){var t=e.isPlaying;e.currentRoom;D(t)})),O.on("joinRoomAnswer",(function(e){var t=e.docs;b(t.currentVideoLink),l(t.onlineUsers),t.admin?S(!0):S(!1)})),O.on("adminAnswer",(function(e){var t=e.isAdminTaken;S(t)})),O.on("adminDataAnswer",(function(e){var t=e.currentSeconds,n=e.videoQueue;if(y(n),T.current){var a=T.current.getDuration(),r=T.current.getCurrentTime();a>t?r-N<t&&r+N>t||T.current.seekTo(t,"seconds"):r<a+6&&r>a-6||T.current.seekTo(a,"seconds")}})),O.on("adminRequestAnswer",(function(e){var t=e.success,n=e.message;t?(j(!0),C(n),p(!0)):(g(!0),w(n))})),O.on("adminQueueUpdateAnswer",(function(e){var t=e.videoQueue;y(t)})),function(){O.removeAllListeners("adminDataAnswer"),O.removeAllListeners("joinRoomAnswer"),O.removeAllListeners("isPlayingSocketAnswer"),O.removeAllListeners("videoChangeAnswer"),O.removeAllListeners("adminAnswer"),O.removeAllListeners("adminRequestAnswer"),O.removeAllListeners("adminQueueUpdateAnswer")}}),[d,E,O,N]);return r.a.createElement("div",{className:"videoAndChat"},r.a.createElement("div",{className:"playerAndChat"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(A.a,{ref:T,onPlay:function(){E&&(D(!0),O.emit("isPlaying",{isPlaying:!0,currentRoom:d}))},onPause:function(){E&&(D(!1),O.emit("isPlaying",{isPlaying:!1,currentRoom:d}))},playing:L,onEnded:function(){E&&k&&(b(k[0]),y((function(e){return e.slice(1)})))},className:"react-player",url:h,width:"100%",height:"100%",controls:!0,volume:.1})),r.a.createElement("div",{className:"twitchChat"},r.a.createElement("span",{className:"onlineUsers"},null!==o?"".concat(o," ONLINE"):"CONNECTING"),r.a.createElement("iframe",{style:{border:"2px solid #121212"},title:"TwitchChat",id:"chat_embed",src:"https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout&parent=").concat("boiling-bastion-80662.herokuapp.com"),height:"100%",width:"100%"}))))}),S=n(181),x=n(182);function I(e){return r.a.createElement(x.a,Object.assign({elevation:6,variant:"filled"},e))}var L=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(){var e=Object(a.useContext)(Q),t=e.isSuccess,n=e.setIsSuccess,c=e.successMessage,o=L(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(S.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(I,{onClose:i,severity:"success"},c)))}function T(e){return r.a.createElement(x.a,Object.assign({elevation:6,variant:"filled"},e))}var R=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function M(){var e=Object(a.useContext)(Q),t=e.isError,n=e.setIsError,c=e.errorMessage,o=R(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(S.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(T,{onClose:i,severity:"error"},c)))}var Q=r.a.createContext(),P=u()("/"),U=function(){var e=Object(s.f)(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],d=u[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),E=v[0],b=v[1],h=Object(a.useState)(!1),O=Object(i.a)(h,2),p=O[0],j=O[1],g=Object(a.useState)(""),w=Object(i.a)(g,2),C=w[0],y=w[1],A=Object(a.useState)(""),S=Object(i.a)(A,2),x=S[0],I=S[1],L=Object(a.useState)([]),T=Object(i.a)(L,2),R=T[0],U=T[1],V=Object(a.useState)(2),F=Object(i.a)(V,2),q=F[0],G=F[1],H=Object(a.useState)(!0),W=Object(i.a)(H,2),_=W[0],B=W[1],J=Object(a.useState)(null),K=Object(i.a)(J,2),Y=K[0],z=K[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(m)).then((function(e){return e.json()})).then((function(e){document.title=e.title,void 0===e.title&&(document.title="Watch Together")}))}),[m]),Object(a.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&z(e.profile)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Provider,{value:{twitchUserData:Y,admin:c,setAdmin:o,socket:P,currentVideoLink:m,setCurrentVideoLink:d,history:e,isSuccess:E,setIsSuccess:b,isError:p,setIsError:j,successMessage:C,setSuccessMessage:y,errorMessage:x,setErrorMessage:I,videoQueue:R,setVideoQueue:U,maxDelay:q,setMaxDelay:G,isAdminTaken:_,setIsAdminTaken:B}},r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement(N,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(k,null))),r.a.createElement(s.a,{path:"/:twitchStreamer",exact:!0},r.a.createElement(N,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(k,null)))),r.a.createElement(D,null),r.a.createElement(M,null))))},V=n(32);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V.a,null,r.a.createElement(U,null))),document.getElementById("root"))},98:function(e,t,n){e.exports=n(147)}},[[98,13,14]]]);
//# sourceMappingURL=main.d72800a4.chunk.js.map