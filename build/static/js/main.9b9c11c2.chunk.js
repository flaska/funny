(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){e.exports=n(298)},298:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(25),i=n.n(r),c=n(7),s=n(8),l=n(10),u=n(9),m=n(11),p=n(125),h=n.n(p),d=n(45),f=n.n(d),y=n(49),b=n.n(y),g=n(50),v=n.n(g),E=n(17),k=n.n(E),O=n(33),w=n.n(O),C=n(69),j=n.n(C),_=n(113),D=n.n(_),S=n(108),A=n.n(S),M=n(109),L=n.n(M),P=n(46),I=n.n(P),T={content:{width:"100%",backgroundColor:"#1b1b1b"},spinner:{margin:"30px auto",display:"block"},buttons:{float:"right"}},F=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(e){return"image"===e.type?o.a.createElement(L.a,{src:e.url,imgProps:{style:T.content},preloader:function(){return o.a.createElement(I.a,{style:T.spinner})}}):"hosted:video"===e.type?o.a.createElement("video",{controls:!0,autoPlay:!0,src:e.url,style:T.content}):void 0}},{key:"openOriginalUrl",value:function(){window.open("https://www.reddit.com"+this.props.postData.permalink,"_blank")}},{key:"render",value:function(){return o.a.createElement(w.a,{className:"postContent"},this.renderContent(this.props.postData))}}]),t}(o.a.Component),B=n(18),N=n(27),x=n.n(N),W=n(127);function R(e,t){return function(n,a){if(Object(N.isWidthUp)("sm",a))return n;var o=Object(W.a)({},n);return o[e]=t,o}}var U={main:{float:"left",cursor:"pointer",textAlign:"center"},img:{width:150},icon:{zoom:4,marginTop:5,opacity:.5}},z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getThumbnailIcon",value:function(e){return"image"===e.type?o.a.createElement(B.i,{style:U.icon}):"hosted:video"===e.type?o.a.createElement(B.l,{style:U.icon}):"rich:video"===e.type?o.a.createElement(B.l,{style:U.icon}):(e.type,o.a.createElement(B.h,{style:U.icon}))}},{key:"getThumbnail",value:function(e){return e.thumbnail?o.a.createElement("img",{src:e.thumbnail,style:R("width",120)(U.img,this.props.width)}):e.thumbnail?void 0:this.getThumbnailIcon(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:U.main,onClick:function(){return e.props.onClick()}},this.getThumbnail(this.props.postData))}}]),t}(o.a.Component),G=x()()(z),J=n(48),V=n.n(J),H=n(111),$=n.n(H),q=n(34),K={icon:{zoom:1.2}};function Q(e){switch(e){case"md_thumb_up":return o.a.createElement(q.e,{style:K.icon});case"md_comment":return o.a.createElement(q.a,{style:K.icon});case"md_face":return o.a.createElement(q.b,{style:K.icon});case"md_sentiment_very_satisfied":return o.a.createElement(q.d,{style:K.icon});case"md_photo_camera":return o.a.createElement(q.c,{style:K.icon});case"fa_paw":return o.a.createElement(B.k,{style:K.icon});case"fa_flask":return o.a.createElement(B.e,{style:K.icon});case"fa_gamepad":return o.a.createElement(B.f,{style:K.icon});case"fa_lightbulb":return o.a.createElement(B.j,{style:K.icon});case"fa_video":return o.a.createElement(B.l,{style:K.icon});case"fa_film":return o.a.createElement(B.d,{style:K.icon});case"fa_globe_americas":return o.a.createElement(B.g,{style:K.icon});case"fa_eye":return o.a.createElement(B.b,{style:K.icon});case"fa_external-link-alt":return o.a.createElement(B.a,{style:K.icon});case"fa_eye-slash":return o.a.createElement(B.c,{style:K.icon})}return o.a.createElement("div",null)}var X=n(47),Y=n.n(X),Z={chip:{margin:5,zoom:.85},iconButton:{zoom:.85,marginLeft:3}},ee=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return Object(N.isWidthUp)("sm",this.props.width)?o.a.createElement($.a,{icon:Q(this.props.icon),color:this.props.color,clickable:this.props.clickable,label:this.props.children,style:Z.chip}):o.a.createElement(Y.a,{size:"small",color:"primary","aria-label":this.props.children,style:Z.iconButton},Q(this.props.icon))}}]),t}(o.a.Component),te=x()()(ee),ne=n(112),ae=n.n(ne);var oe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(te,{icon:"md_face"},this.props.commentData.author),o.a.createElement(te,{icon:"md_thumb_up"},(e=this.props.commentData.score)>1e3?ae()(e).format("0.0a"):e));var e}}]),t}(o.a.Component),re={marginLeft:20},ie=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n.props.commentData.body&&(n.state.body=n.props.commentData.body.replace(/\n/g,"<br>")),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showBody",value:function(e){return e.body?o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{commentData:this.props.commentData}),o.a.createElement(k.a,{dangerouslySetInnerHTML:{__html:this.state.body}}),o.a.createElement(V.a,null)):o.a.createElement("div",null)}},{key:"isIndented",value:function(e){if(e.body)return re}},{key:"render",value:function(){return this.props.commentData&&this.props.commentData.replies?o.a.createElement(o.a.Fragment,null,this.showBody(this.props.commentData),o.a.createElement("div",{style:this.isIndented(this.props.commentData)},this.props.commentData.replies.map(function(e){return o.a.createElement(t,{commentData:e,key:e._id})}))):null}}]),t}(o.a.Component),ce={hint:{display:"inline-block"},progress:{textAlign:"center",padding:10}},se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={postId:n.props.postId,dataFetched:!1},f.a.get("/api/reddit/comments?postId="+n.state.postId).then(function(e){n.setState({commentsRoot:e.data,dataFetched:!0})}),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.dataFetched?o.a.createElement("div",{className:"commentsContainer"},o.a.createElement(k.a,{color:"primary",style:ce.hint},"Top comments"),o.a.createElement(ie,{commentData:this.state.commentsRoot})):o.a.createElement("div",{style:ce.progress},o.a.createElement(I.a,null))}}]),t}(o.a.Component),le={button:{display:"inline-block"}},ue=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showOpenCloseIcon",value:function(){return this.props.parentState.showContent?o.a.createElement(te,{icon:"fa_eye-slash",clickable:!0},"Close"):o.a.createElement(te,{icon:"fa_eye",clickable:!0,color:"primary"},"Open")}},{key:"showToggleCommentsIcon",value:function(){return this.props.parentState.showComments?o.a.createElement(te,{icon:"md_comment",clickable:!0},"Close"):o.a.createElement(te,{icon:"md_comment",clickable:!0,color:"primary"},"Comments")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:le.button,className:"postActions_openContent",onClick:function(){e.props.onOpenContentClick()}},this.showOpenCloseIcon()),o.a.createElement("div",{style:le.button,className:"postActions_openComments",onClick:function(){e.props.onCommentsClick()}},this.showToggleCommentsIcon()),o.a.createElement("div",{style:le.button,className:"postActions_openSource",onClick:function(){e.props.onOpenSourceClick()}},o.a.createElement(te,{icon:"fa_external-link-alt",clickable:!0,color:"primary"},"Source")))}}]),t}(o.a.Component),me={card:{width:"100%",position:"relative"},img:{float:"left",marginRight:10,cursor:"pointer"},datePosted:{opacity:.8},title:{cursor:"pointer"},content:{marginLeft:150,paddingBottom:40},postActions:{position:"absolute",bottom:0,right:0,display:"inline-block"},bottomPostActions:{float:"right"},bottomPostActionsAfter:{clear:"both"}},pe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showContent:!1,showComments:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleContent",value:function(){return"link"===this.props.postData.type?this.openLinkUrl(this.props.postData.url):"rich:video"===this.props.postData.type?this.openLinkUrl(this.props.postData.url):void(this.state.showContent?this.setState({showContent:!1}):this.setState({showContent:!0}))}},{key:"toggleComments",value:function(){this.state.showComments?this.setState({showComments:!1}):this.setState({showComments:!0})}},{key:"showContent",value:function(){var e=this;if(this.state.showContent)return o.a.createElement(F,{postData:this.props.postData,closeContent:function(){return e.toggleContent()}})}},{key:"openLinkUrl",value:function(e){window.open(e,"_blank")}},{key:"openOriginalLink",value:function(){this.openLinkUrl("https://www.reddit.com"+this.props.postData.permalink)}},{key:"showComments",value:function(){var e=this;if(this.state.showComments)return o.a.createElement(w.a,{style:me.commentsCard},o.a.createElement(j.a,null,o.a.createElement(se,{style:me.commentList,postId:this.props.postData.id,onClick:function(t){return e.handleClick(t)}})))}},{key:"renderPostActions",value:function(){var e=this;return o.a.createElement(ue,{parentState:this.state,postData:this.props.postData,onCommentsClick:function(){e.toggleComments()},onOpenContentClick:function(){e.toggleContent()},onOpenSourceClick:function(){e.openOriginalLink()}})}},{key:"showBottomActionBar",value:function(){if(this.state.showComments||this.state.showContent)return o.a.createElement(w.a,{className:"bottomActionBar"},o.a.createElement("div",{style:me.bottomPostActions},this.renderPostActions()),o.a.createElement("div",{style:me.bottomPostActions}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"post"},o.a.createElement(w.a,{style:me.card},o.a.createElement(D.a,{style:me.img,component:function(){return o.a.createElement(G,{postData:e.props.postData,onClick:function(){e.toggleContent()}})},src:"img",onClick:function(){e.toggleContent()}}),o.a.createElement(j.a,{style:R("marginLeft",120)(me.content,this.props.width)},o.a.createElement(k.a,{style:me.title,onClick:function(){e.toggleContent()},className:"postTitle"},this.props.postData.title),o.a.createElement(k.a,{style:me.datePosted},A.a.utc(this.props.postData.dateUtc).fromNow())),o.a.createElement("div",{style:me.postActions,className:"topActionBar"},this.renderPostActions())),this.showContent(),this.showComments(),this.showBottomActionBar())}}]),t}(o.a.Component),he=x()()(pe),de=n(116),fe=n.n(de),ye=n(115),be=n.n(ye),ge=n(114),ve=n.n(ge),Ee={main:{margin:"auto",textAlign:"center"},reload:{cursor:"pointer"}},ke=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:Ee.main},o.a.createElement("br",null),o.a.createElement(ve.a,null),o.a.createElement("br",null),o.a.createElement(k.a,{style:Ee.loading},"offline..."),o.a.createElement("br",null),o.a.createElement(k.a,{style:Ee.reload,onClick:function(){e.reloadPage()},color:"primary"},"Reload the page?"))}}]),t}(o.a.Component),Oe={main:{maxWidth:760,margin:"auto"},listItem:{display:"block"},more:{margin:"auto",display:"block",marginBottom:50},loading:{textAlign:"center"}},we=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).chunkSize=10,n.state={posts:[],loading:!0,offline:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadMorePosts()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.feed.url!==e.feed.url&&(this.setState({posts:[]}),setTimeout(function(){t.loadMorePosts()},0))}},{key:"loadMorePosts",value:function(){var e=this;this.setState({loading:!0}),f.a.get(this.props.feed.url+"&from=".concat(this.state.posts.length,"&size=").concat(this.chunkSize)).then(function(t){e.setState({loading:!1}),0==e.state.posts.length?e.setState(t.data):e.setState({posts:e.state.posts.concat(t.data.posts)})}).catch(function(t){e.setState({offline:!0,loading:!1})})}},{key:"showLoading",value:function(){var e=this;return this.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(be.a,null),o.a.createElement("br",null),o.a.createElement(k.a,{color:"primary",style:Oe.loading},"Loading..."),o.a.createElement("br",null)):this.state.offline?o.a.createElement(ke,null):o.a.createElement(fe.a,{style:Oe.more,variant:"contained",color:"primary",onClick:function(){return e.loadMorePosts()}},"More Fun")}},{key:"render",value:function(){return o.a.createElement("div",{style:Oe.main},o.a.createElement(b.a,{style:Oe.list,id:"feedList"},this.state.posts.map(function(e){return o.a.createElement(v.a,{style:Oe.listItem,key:e.id},o.a.createElement(he,{postData:e}))})),this.showLoading())}}]),t}(o.a.Component),Ce=n(117),je=n.n(Ce),_e=n(118),De=n.n(_e),Se=n(119),Ae=n.n(Se),Me={root:{flexGrow:1},logo:{height:42,marginLeft:23,marginRight:23}},Le=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:Me.root},o.a.createElement(je.a,{position:"static"},o.a.createElement(De.a,null,o.a.createElement(Y.a,{color:"inherit","aria-label":"Menu",onClick:function(){return e.props.openMenu()},id:"openLeftMenu"},o.a.createElement(Ae.a,null)),o.a.createElement("img",{alt:"4slack logo",style:Me.logo,src:"./logo-appbar-white.png"}),o.a.createElement(k.a,{color:"inherit"},this.props.feed.name))))}}]),t}(o.a.Component),Pe=n(126),Ie=n.n(Pe),Te=n(51),Fe=n(124),Be=n.n(Fe),Ne=n(67),xe=n.n(Ne),We=n(68),Re=n.n(We),Ue=n(122),ze=n.n(Ue),Ge=n(121),Je=n.n(Ge),Ve=n(120),He=n.n(Ve),$e=n(123),qe=n.n($e),Ke={feedsTitle:{marginTop:15,marginLeft:25,marginBottom:10},feedsIcon:{marginRight:10}},Qe=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getFeedOptions",value:function(){var e=this;return this.props.feedOptions.map(function(t){return o.a.createElement(v.a,{button:!0,key:t.name,onClick:function(){return e.props.onSelectFeedSource(t)}},o.a.createElement(He.a,{style:Ke.feedIcon},Q(t.icon)),o.a.createElement(Je.a,{primary:t.name}))})}},{key:"render",value:function(){var e=this;return o.a.createElement(ze.a,{open:this.props.open,onClose:function(){return e.props.onClose()},id:"leftMenu"},o.a.createElement(k.a,{variant:"h5",style:Ke.feedsTitle},o.a.createElement(qe.a,{style:Ke.feedsIcon}),"Feeds"),o.a.createElement(V.a,null),o.a.createElement(b.a,null,this.getFeedOptions()))}}]),t}(o.a.Component),Xe=Object(Te.createMuiTheme)({palette:{primary:Be.a,secondary:xe.a,error:Re.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),Ye=[{name:"Funny",url:"/api/reddit/feed?subreddit=funny&channel=hot",icon:"md_sentiment_very_satisfied"},{name:"World News",url:"/api/reddit/feed?subreddit=worldnews&channel=hot",icon:"fa_globe_americas"},{name:"Pics",url:"/api/reddit/feed?subreddit=pics&channel=hot",icon:"md_photo_camera"},{name:"Science",url:"/api/reddit/feed?subreddit=science&channel=hot",icon:"fa_flask"},{name:"Gaming",url:"/api/reddit/feed?subreddit=gaming&channel=hot",icon:"fa_gamepad"},{name:"Today I Learned...",url:"/api/reddit/feed?subreddit=todayilearned&channel=hot",icon:"fa_lightbulb"},{name:"Videos",url:"/api/reddit/feed?subreddit=videos&channel=hot",icon:"fa_video"},{name:"Movies",url:"/api/reddit/feed?subreddit=movies&channel=hot",icon:"fa_film"},{name:"Aww",url:"/api/reddit/feed?subreddit=aww&channel=hot",icon:"fa_paw"}],Ze=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={feed:Ye[0],leftMenuOpen:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"openMenu",value:function(){this.setState({leftMenuOpen:!0})}},{key:"closeMenu",value:function(){this.state.leftMenuOpen&&this.setState({leftMenuOpen:!1})}},{key:"selectFeed",value:function(e){this.setState({feed:e,leftMenuOpen:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"})),o.a.createElement(Te.MuiThemeProvider,{theme:Xe},o.a.createElement(Ie.a,null),o.a.createElement(Le,{feedOptions:Ye,openMenu:function(){return e.openMenu()},feed:this.state.feed}),o.a.createElement(Qe,{feedOptions:Ye,open:this.state.leftMenuOpen,onClose:function(){return e.closeMenu()},onSelectFeedSource:function(t){return e.selectFeed(t)}}),o.a.createElement(we,{feed:this.state.feed})))}}]),t}(o.a.Component),et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(Ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");et?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):tt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):tt(t,e)})}}()}},[[128,2,1]]]);
//# sourceMappingURL=main.9b9c11c2.chunk.js.map