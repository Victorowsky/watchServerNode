(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(103),n(10)),l=n(5),u=n(84),s=n.n(u),m=(n(134),n(88)),d=n(178),f=n(180),v=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderColor:"white",color:"white",transition:"0.3s","&:hover":{boxShadow:"0 0 5px white"}}}}}));function E(e){var t=e.text,n=e.onClick,a=e.style,c=v();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}var h=Object(d.a)((function(e){return{root:{"& > *":{backgroundColor:"#6441a5",color:"white",transition:"0.3s ease-in-out","&:hover":{color:"white",borderColor:"#6441a5"}}}}}));function b(e){var t=e.text,n=e.onClick,a=e.style,c=h();return r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{onClick:n&&n,style:a&&a,variant:"outlined"},t||"Enter text"))}n(138);var p=function(e){var t=e.item,n=e.index,c=Object(a.useState)(),o=Object(i.a)(c,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(t)).then((function(e){return e.json()})).then((function(e){u(e.title)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"queueItem"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n+1,". ",l||t)))},w=function(){var e=Object(a.useContext)(P).videoQueue.map((function(e,t){return r.a.createElement(p,{item:e,index:t,key:t})}));return r.a.createElement("div",{className:"queue"},e)},g=n(86),O=n.n(g),j=n(85),C=n.n(j),y=function(){var e,t=Object(a.useContext)(P),n=t.twitchUserData,c=t.websiteURL,o=t.admin,u=t.setAdmin,s=t.setCurrentVideoLink,d=t.socket,f=t.setVideoQueue,v=t.videoQueue,h=t.setMaxDelay,p=t.maxDelay,g=t.chatRef,j=Object(a.useState)(),y=Object(i.a)(j,2),k=y[0],N=y[1],L=Object(l.h)().twitchStreamer;void 0===L&&(L="victorowsky_"),L=null===(e=L)||void 0===e?void 0:e.toLowerCase();var x=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(){var e;x.current.style.width=(null===g||void 0===g||null===(e=g.current)||void 0===e?void 0:e.offsetWidth)+"px"};return window.addEventListener("resize",e),x.current&&e(),function(){window.removeEventListener("resize",e)}}),[g,x.current,L]),Object(a.useEffect)((function(){if(n)return n.login.toLowerCase()===L.toLowerCase()&&(o||u(!0)),function(){o&&u(!1)}}),[n,u,L,o]),Object(a.useEffect)((function(){if(o)return d.emit("adminQueueUpdate",{videoQueue:v,currentRoom:L}),function(){d.removeAllListeners("adminQueueUpdate")}}),[v,d,L,o]);var A=function(){k&&(s(k),N(""))},R=function(e){"increment"===e?h((function(e){return e+1})):"decrement"===e&&h((function(e){return e>2?e+-1:e}))};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminPanel"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:k,placeholder:"VIDEO URL",onChange:function(e){o&&N(e.target.value)}}),r.a.createElement("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),A()},type:"submit"}),r.a.createElement("div",{className:"optionButtons"},r.a.createElement(E,{text:"PLAY NOW",onClick:A}),r.a.createElement(E,{text:"ADD TO QUEUE",onClick:function(){k&&(f((function(e){return[].concat(Object(m.a)(e),[k])})),N(""))}}),r.a.createElement(E,{text:"SKIP",onClick:function(){o&&v&&(s(v[0]),f((function(e){return e.slice(1)})))}}),r.a.createElement(b,{text:"LOGOUT",onClick:function(){window.location.href="".concat(c,"/twitch/logout")}}))),n&&r.a.createElement("div",{className:"accountInfo"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"twitchImage",srcSet:""})),n.login)),r.a.createElement(w,null)):r.a.createElement("div",{className:"delayInfoContainer"},r.a.createElement(w,null),r.a.createElement("div",{className:"delay",ref:x},r.a.createElement("span",{className:"delayInfo"},"Max Delay: ",p," seconds"),r.a.createElement("div",{className:"delayManage"},r.a.createElement("div",{className:"delayManageOptionDecrement",onClick:function(){return R("decrement")}},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"delayManageOptionIncrement",onClick:function(){return R("increment")}},r.a.createElement(O.a,null))),n?r.a.createElement("div",{className:"accountInfo"},r.a.createElement("a",{href:"".concat(c,"/#/").concat(n.login.toLowerCase()),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:n.image,alt:"Profile"})),n.login)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"twitchLoginButton"},r.a.createElement(b,{text:"LOGIN WITH TWITCH",onClick:function(){window.location.href="".concat(c,"/auth/twitch")}}))))))},k=n(87),N=n.n(k),L=(n(146),function(){var e=Object(l.g)(),t=Object(l.h)().twitchStreamer;void 0===t&&(t="victorowsky_"),t=t.toLowerCase();var n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],u=c[1],s=Object(a.useState)(t),m=Object(i.a)(s,2),d=m[0],f=m[1],v=Object(a.useContext)(P),E=v.admin,h=v.setCurrentVideoLink,b=v.currentVideoLink,p=v.socket,w=v.setAdmin,g=v.videoQueue,O=v.setVideoQueue,j=v.maxDelay,C=v.chatRef,y=Object(a.useState)(!1),k=Object(i.a)(y,2),L=k[0],x=k[1],A=Object(a.useRef)();Object(a.useEffect)((function(){var e;return E&&(e=setInterval((function(){p.emit("adminData",{currentRoom:d,currentSeconds:A.current.getCurrentTime(),videoQueue:g})}),3e3)),function(){clearInterval(e)}}),[E,p,d,g]),Object(a.useEffect)((function(){E&&p.emit("videoChange",{currentVideoLink:b,currentRoom:d})}),[b,p]),Object(a.useEffect)((function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),p.emit("leaveRoom",{currentRoom:d})})),f(t)}),[e.pathname]),Object(a.useEffect)((function(){return p.emit("joinRoom",{currentRoom:d}),function(){p.emit("leaveRoom",{currentRoom:d}),w(!1)}}),[d]),Object(a.useEffect)((function(){if(p.on("onlineUsersAnswer",(function(e){var t=e.onlineUsers;u(t)})),p.on("joinRoomAnswer",(function(e){var t=e.docs;h(t.currentVideoLink)})),!E)return p.on("videoChangeAnswer",(function(e){var t=e.currentVideoLink;h(t)})),p.on("isPlayingSocketAnswer",(function(e){var t=e.isPlaying;e.currentRoom;x(t)})),p.on("joinRoomAnswer",(function(e){var t=e.docs;h(t.currentVideoLink),u(t.onlineUsers)})),p.on("adminDataAnswer",(function(e){var t=e.currentSeconds,n=e.videoQueue;O(n),function(e,t){if(e.current){var n=e.current.getDuration(),a=e.current.getCurrentTime();n>t?a-j<t&&a+j>t||e.current.seekTo(t,"seconds"):a<n+6&&a>n-6||e.current.seekTo(n,"seconds")}}(A,t)})),p.on("adminQueueUpdateAnswer",(function(e){var t=e.videoQueue;O(t)})),function(){p.removeAllListeners("adminDataAnswer"),p.removeAllListeners("joinRoomAnswer"),p.removeAllListeners("isPlayingSocketAnswer"),p.removeAllListeners("videoChangeAnswer"),p.removeAllListeners("adminAnswer"),p.removeAllListeners("adminRequestAnswer"),p.removeAllListeners("adminQueueUpdateAnswer")}}),[d,E,p,j]);return r.a.createElement("div",{className:"videoAndChat"},r.a.createElement("div",{className:"playerAndChat"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(N.a,{ref:A,onPlay:function(){E&&(x(!0),p.emit("isPlaying",{isPlaying:!0,currentRoom:d}))},onPause:function(){E&&(x(!1),p.emit("isPlaying",{isPlaying:!1,currentRoom:d}))},playing:L,onEnded:function(){E&&g&&(h(g[0]),O((function(e){return e.slice(1)})))},className:"react-player",url:b,width:"100%",height:"100%",controls:!0,volume:.1})),r.a.createElement("div",{className:"twitchChat",ref:C},r.a.createElement("span",{className:"onlineUsers"},null!==o?"".concat(o," ONLINE"):"CONNECTING"),r.a.createElement("iframe",{style:{border:"2px solid #121212"},title:"TwitchChat",id:"chat_embed",src:"https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout&parent=").concat("boiling-bastion-80662.herokuapp.com"),height:"100%",width:"100%"}))))}),x=n(182),A=n(183);function R(e){return r.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}var S=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(){var e=Object(a.useContext)(P),t=e.isSuccess,n=e.setIsSuccess,c=e.successMessage,o=S(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(x.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(R,{onClose:i,severity:"success"},c)))}function I(e){return r.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}var T=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function U(){var e=Object(a.useContext)(P),t=e.isError,n=e.setIsError,c=e.errorMessage,o=T(),i=function(e,t){"clickaway"!==t&&n(!1)};return r.a.createElement("div",{className:o.root},r.a.createElement(x.a,{open:t,autoHideDuration:1e3,onClose:i},r.a.createElement(I,{onClose:i,severity:"error"},c)))}n(147);var Q=function(){var e=Object(a.useContext)(P).twitchUserData,t=Object(l.f)(),n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],u=c[1],s="https://boiling-bastion-80662.herokuapp.com";return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null," Twitch Together"),r.a.createElement("h2",null,"Enter twitch streamer username"),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Channel",type:"text",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",style:{display:"none"},onClick:function(e){e.preventDefault(),o&&t.push("/".concat(o))}}),e?r.a.createElement("div",{className:"userInfo"},r.a.createElement("a",{href:"".concat(s,"/#/").concat(e.login)},r.a.createElement("img",{src:e.image,alt:"Twitch"}),e.login)):r.a.createElement("div",{onClick:function(){window.location.href="".concat(s,"/auth/twitch")},className:"twitchButton"},"Login with Twitch")))},P=r.a.createContext(),V=s()("https://boiling-bastion-80662.herokuapp.com/"),M=function(){var e=Object(l.f)(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)([]),v=Object(i.a)(f,2),E=v[0],h=v[1],b=Object(a.useState)(2),p=Object(i.a)(b,2),w=p[0],g=p[1],O=Object(a.useState)(null),j=Object(i.a)(O,2),C=j[0],k=j[1];Object(a.useEffect)((function(){fetch("https://noembed.com/embed?url=".concat(m)).then((function(e){return e.json()})).then((function(e){document.title=e.title,void 0===e.title&&(document.title="Watch Together")}))}),[m]),Object(a.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&k(e.profile)}))}),[]);var N=Object(a.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.Provider,{value:{chatRef:N,websiteURL:"https://boiling-bastion-80662.herokuapp.com",twitchUserData:C,admin:c,setAdmin:o,socket:V,currentVideoLink:m,setCurrentVideoLink:d,history:e,videoQueue:E,setVideoQueue:h,maxDelay:w,setMaxDelay:g}},r.a.createElement("div",{className:"app"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0},r.a.createElement(Q,null)),r.a.createElement(l.a,{path:"/:twitchStreamer",exact:!0},r.a.createElement(L,null),r.a.createElement("div",{className:"bottomDiv"},r.a.createElement(y,null)))),r.a.createElement(D,null),r.a.createElement(U,null))))},F=n(28);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement(M,null))),document.getElementById("root"))},98:function(e,t,n){e.exports=n(148)}},[[98,13,14]]]);
//# sourceMappingURL=main.18afa3be.chunk.js.map