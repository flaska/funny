(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(319)},319:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(27),i=n.n(r),s=n(6),c=n(7),l=n(9),u=n(8),m=n(10),p=n(143),h=n.n(p),d=n(55),f=n.n(d),y=n(59),b=n.n(y),g=n(60),v=n.n(g),E=n(25),k=n.n(E),O=n(38),C=n.n(O),w=n(82),j=n.n(w),_=n(130),S=n.n(_),D=n(121),A=n.n(D),M=n(122),L=n.n(M),T=n(56),P=n.n(T),I={content:{width:"100%",backgroundColor:"#1b1b1b"},spinner:{margin:"30px auto",display:"block"},buttons:{float:"right"}},x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderContent",value:function(e){return"image"===e.type?o.a.createElement(L.a,{src:e.url,imgProps:{style:I.content},preloader:function(){return o.a.createElement(P.a,{style:I.spinner})}}):"hosted:video"===e.type?o.a.createElement("video",{controls:!0,autoPlay:!0,src:e.url,style:I.content}):void 0}},{key:"openOriginalUrl",value:function(){window.open("https://www.reddit.com"+this.props.postData.permalink,"_blank")}},{key:"render",value:function(){return o.a.createElement(C.a,{className:"postContent"},this.renderContent(this.props.postData))}}]),t}(o.a.Component),N=n(24),B=n(32),F=n.n(B),W=n(124);function R(e,t){return function(n,a){if(Object(B.isWidthUp)("sm",a))return n;var o=Object(W.a)({},n);return o[e]=t,o}}var U=n(125),z=n.n(U),G=n(39),H={icon:{zoom:1.2}};function J(e){switch(e){case"md_thumb_up":return o.a.createElement(G.e,{style:H.icon});case"md_comment":return o.a.createElement(G.a,{style:H.icon});case"md_face":return o.a.createElement(G.b,{style:H.icon});case"md_sentiment_very_satisfied":return o.a.createElement(G.d,{style:H.icon});case"md_photo_camera":return o.a.createElement(G.c,{style:H.icon});case"fa_paw":return o.a.createElement(N.l,{style:H.icon});case"fa_flask":return o.a.createElement(N.f,{style:H.icon});case"fa_gamepad":return o.a.createElement(N.g,{style:H.icon});case"fa_lightbulb":return o.a.createElement(N.k,{style:H.icon});case"fa_video":return o.a.createElement(N.m,{style:H.icon});case"fa_film":return o.a.createElement(N.e,{style:H.icon});case"fa_globe_americas":return o.a.createElement(N.h,{style:H.icon});case"fa_eye":return o.a.createElement(N.c,{style:H.icon});case"fa_external-link-alt":return o.a.createElement(N.b,{style:H.icon});case"fa_eye-slash":return o.a.createElement(N.d,{style:H.icon});case"fa_comments":return o.a.createElement(N.a,{style:H.icon})}return o.a.createElement("div",null)}var V=n(57),$=n.n(V),q={chip:{margin:5,zoom:.85},iconButton:{zoom:.85,marginLeft:3},invisibleText:{display:"none"}},K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return Object(B.isWidthUp)("sm",this.props.width)||!this.props.responsive?o.a.createElement(z.a,{icon:J(this.props.icon),color:this.props.color,clickable:this.props.clickable,label:this.props.children,style:q.chip}):o.a.createElement($.a,{size:"small",color:this.props.color,"aria-label":this.props.children,style:q.iconButton},J(this.props.icon),o.a.createElement("span",{style:q.invisibleText},this.props.children))}}]),t}(o.a.Component),Q=F()()(K),X={main:{float:"left",cursor:"pointer",textAlign:"center",position:"relative"},img:{width:150},icon:{zoom:4,marginTop:5,opacity:.5},external:{position:"absolute",right:0}},Y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getThumbnailIcon",value:function(e){return"image"===e.type?o.a.createElement(N.j,{style:X.icon}):"hosted:video"===e.type?o.a.createElement(N.m,{style:X.icon}):"rich:video"===e.type?o.a.createElement(N.m,{style:X.icon}):(e.type,o.a.createElement(N.i,{style:X.icon}))}},{key:"getThumbnail",value:function(e){return e.thumbnail?o.a.createElement("img",{src:e.thumbnail,style:R("width",120)(X.img,this.props.width),className:"postThumbnail"}):e.thumbnail?void 0:this.getThumbnailIcon(e)}},{key:"externalWatermark",value:function(){if("link"===this.props.postData.type)return o.a.createElement("div",{style:X.external},o.a.createElement(Q,{icon:"fa_external-link-alt"},"External"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:X.main,onClick:function(){return e.props.onClick()}},this.externalWatermark(),this.getThumbnail(this.props.postData))}}]),t}(o.a.Component),Z=F()()(Y),ee=n(58),te=n.n(ee),ne=n(126),ae=n.n(ne);var oe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Q,{icon:"md_face"},this.props.commentData.author),o.a.createElement(Q,{icon:"md_thumb_up"},(e=this.props.commentData.score)>1e3?ae()(e).format("0.0a"):e));var e}}]),t}(o.a.Component),re={marginLeft:20},ie=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n.props.commentData.body&&(n.state.body=n.props.commentData.body.replace(/\n/g,"<br>")),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"showBody",value:function(e){return e.body?o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{commentData:this.props.commentData}),o.a.createElement(k.a,{dangerouslySetInnerHTML:{__html:this.state.body}}),o.a.createElement(te.a,null)):o.a.createElement("div",null)}},{key:"isIndented",value:function(e){if(e.body)return re}},{key:"render",value:function(){return this.props.commentData&&this.props.commentData.replies?o.a.createElement(o.a.Fragment,null,this.showBody(this.props.commentData),o.a.createElement("div",{style:this.isIndented(this.props.commentData)},this.props.commentData.replies.map(function(e){return o.a.createElement(t,{commentData:e,key:e._id})}))):null}}]),t}(o.a.Component),se={hint:{display:"inline-block"},progress:{textAlign:"center",padding:10},seeAllButton:{display:"inline-block"}},ce=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={postId:n.props.postId,dataFetched:!1},f.a.get("/api/reddit/comments?postId="+n.state.postId).then(function(e){n.setState({commentsRoot:e.data,dataFetched:!0})}),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.dataFetched?o.a.createElement("div",{className:"commentsContainer"},o.a.createElement(Q,{style:se.hint,icon:"md_thumb_up"},"Top comments"),o.a.createElement("div",{style:se.seeAllButton,className:"comments_openSource",onClick:function(){e.props.onOpenSourceClick()}},o.a.createElement(Q,{icon:"fa_comments",clickable:!0,color:"primary",responsive:!1},"All Comments")),o.a.createElement(ie,{commentData:this.state.commentsRoot})):o.a.createElement("div",{style:se.progress},o.a.createElement(P.a,null))}}]),t}(o.a.Component),le=n(127),ue=n.n(le),me=n(128),pe=n.n(me),he=n(145),de=n(129),fe=n.n(de),ye=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(pe.a,{open:this.props.open,autoHideDuration:5e3,onClose:function(){return e.props.onClose()},message:this.props.children,action:[o.a.createElement(he.a,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){return e.props.onClose()}},o.a.createElement(fe.a,null))]})}}]),t}(o.a.Component),be={button:{display:"inline-block"}},ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"showOpenCloseIcon",value:function(){return this.props.parentState.showContent?o.a.createElement(Q,{icon:"fa_eye-slash",clickable:!0,responsive:!0},"Close"):o.a.createElement(Q,{icon:"fa_eye",clickable:!0,color:"primary",responsive:!0},"Open")}},{key:"showToggleCommentsIcon",value:function(){return this.props.parentState.showComments?o.a.createElement(Q,{icon:"md_comment",clickable:!0,responsive:!0},"Close"):o.a.createElement(Q,{icon:"md_comment",clickable:!0,color:"primary",responsive:!0},"Comments")}},{key:"shareLink",value:function(){ue()(this.props.postData.url),this.setState({shareDialogOpen:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:be.button,className:"postActions_openContent",onClick:function(){e.props.onOpenContentClick()}},this.showOpenCloseIcon()),o.a.createElement("div",{style:be.button,className:"postActions_openComments",onClick:function(){e.props.onCommentsClick()}},this.showToggleCommentsIcon()),o.a.createElement("div",{style:be.button,className:"postActions_share",onClick:function(){e.shareLink()}},o.a.createElement(Q,{icon:"fa_external-link-alt",clickable:!0,color:"primary",responsive:!0},"Share")),o.a.createElement(ye,{open:this.state.shareDialogOpen,onClose:function(){return e.setState({shareDialogOpen:!1})}},"Link copied to clip-board..."))}}]),t}(o.a.Component),ve={card:{width:"100%",position:"relative"},img:{float:"left",marginRight:10,cursor:"pointer"},datePosted:{opacity:.8},title:{cursor:"pointer"},content:{marginLeft:150,paddingBottom:40},postActions:{position:"absolute",bottom:0,right:0,display:"inline-block"},bottomPostActions:{float:"right"},bottomPostActionsAfter:{clear:"both"}},Ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showContent:!1,showComments:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleContent",value:function(){if("link"===this.props.postData.type)return this.openLinkUrl(this.props.postData.url);this.state.showContent?this.setState({showContent:!1}):this.setState({showContent:!0})}},{key:"toggleComments",value:function(){this.state.showComments?this.setState({showComments:!1}):this.setState({showComments:!0})}},{key:"showContent",value:function(){var e=this;if(this.state.showContent)return o.a.createElement(x,{postData:this.props.postData,closeContent:function(){return e.toggleContent()}})}},{key:"openLinkUrl",value:function(e){window.open(e,"_blank")}},{key:"openOriginalLink",value:function(){this.openLinkUrl("https://www.reddit.com"+this.props.postData.permalink)}},{key:"showComments",value:function(){var e=this;if(this.state.showComments)return o.a.createElement(C.a,{style:ve.commentsCard},o.a.createElement(j.a,null,o.a.createElement(ce,{style:ve.commentList,postId:this.props.postData.id,onOpenSourceClick:function(){e.openOriginalLink()}})))}},{key:"renderPostActions",value:function(){var e=this;return o.a.createElement(ge,{parentState:this.state,postData:this.props.postData,onCommentsClick:function(){e.toggleComments()},onOpenContentClick:function(){e.toggleContent()}})}},{key:"showBottomActionBar",value:function(){if(this.state.showComments||this.state.showContent)return o.a.createElement(C.a,{className:"bottomActionBar"},o.a.createElement("div",{style:ve.bottomPostActions},this.renderPostActions()),o.a.createElement("div",{style:ve.bottomPostActions}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"post"},o.a.createElement(C.a,{style:ve.card},o.a.createElement(S.a,{style:ve.img,component:function(){return o.a.createElement(Z,{postData:e.props.postData,onClick:function(){e.toggleContent()}})},src:"img",onClick:function(){e.toggleContent()}}),o.a.createElement(j.a,{style:R("marginLeft",120)(ve.content,this.props.width)},o.a.createElement(k.a,{style:ve.title,onClick:function(){e.toggleContent()},className:"postTitle"},this.props.postData.title),o.a.createElement(k.a,{style:ve.datePosted},A.a.utc(this.props.postData.dateUtc).fromNow())),o.a.createElement("div",{style:ve.postActions,className:"topActionBar"},this.renderPostActions())),this.showContent(),this.showComments(),this.showBottomActionBar())}}]),t}(o.a.Component),ke=F()()(Ee),Oe=n(133),Ce=n.n(Oe),we=n(132),je=n.n(we),_e=n(131),Se=n.n(_e),De={main:{margin:"auto",textAlign:"center"},reload:{cursor:"pointer"}},Ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:De.main},o.a.createElement("br",null),o.a.createElement(Se.a,null),o.a.createElement("br",null),o.a.createElement(k.a,{style:De.loading},"offline..."),o.a.createElement("br",null),o.a.createElement(k.a,{style:De.reload,onClick:function(){e.reloadPage()},color:"primary"},"Reload the page?"))}}]),t}(o.a.Component),Me={main:{maxWidth:760,margin:"auto"},listItem:{display:"block"},more:{margin:"auto",display:"block",marginBottom:50},loading:{textAlign:"center"}},Le=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).chunkSize=10,n.state={posts:[],loading:!0,offline:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMorePosts()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.feed.url!==e.feed.url&&(this.setState({posts:[]}),setTimeout(function(){t.loadMorePosts()},0))}},{key:"loadMorePosts",value:function(){var e=this;this.setState({loading:!0}),f.a.get(this.props.feed.url+"&from=".concat(this.state.posts.length,"&size=").concat(this.chunkSize)).then(function(t){e.setState({loading:!1}),0==e.state.posts.length?e.setState(t.data):e.setState({posts:e.state.posts.concat(t.data.posts)})}).catch(function(t){e.setState({offline:!0,loading:!1})})}},{key:"showLoading",value:function(){var e=this;return this.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(je.a,null),o.a.createElement("br",null),o.a.createElement(k.a,{color:"primary",style:Me.loading},"Loading..."),o.a.createElement("br",null)):this.state.offline?o.a.createElement(Ae,null):o.a.createElement(Ce.a,{style:Me.more,variant:"contained",color:"primary",onClick:function(){return e.loadMorePosts()}},"More Fun")}},{key:"render",value:function(){return o.a.createElement("div",{style:Me.main},o.a.createElement(b.a,{style:Me.list,id:"feedList"},this.state.posts.map(function(e){return o.a.createElement(v.a,{style:Me.listItem,key:e.id},o.a.createElement(ke,{postData:e}))})),this.showLoading())}}]),t}(o.a.Component),Te=n(135),Pe=n.n(Te),Ie=n(136),xe=n.n(Ie),Ne=n(137),Be=n.n(Ne),Fe=n(134),We=n.n(Fe),Re={root:{flexGrow:1},logo:{height:42,marginLeft:23,marginRight:23}},Ue=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:Re.root},o.a.createElement(We.a,null,o.a.createElement(Pe.a,{position:"static"},o.a.createElement(xe.a,null,o.a.createElement($.a,{color:"inherit","aria-label":"Menu",onClick:function(){return e.props.openMenu()},id:"openLeftMenu"},o.a.createElement(Be.a,null)),o.a.createElement("img",{alt:"4slack logo",style:Re.logo,src:"./logo-appbar-white.png"}),o.a.createElement(k.a,{color:"inherit"},this.props.feed.name)))))}}]),t}(o.a.Component),ze=n(144),Ge=n.n(ze),He=n(61),Je=n(142),Ve=n.n(Je),$e=n(79),qe=n.n($e),Ke=n(80),Qe=n.n(Ke),Xe=n(140),Ye=n.n(Xe),Ze=n(139),et=n.n(Ze),tt=n(138),nt=n.n(tt),at=n(141),ot=n.n(at),rt={feedsTitle:{marginTop:15,marginLeft:25,marginBottom:10},feedsIcon:{marginRight:10}},it=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getFeedOptions",value:function(){var e=this;return this.props.feedOptions.map(function(t){return o.a.createElement(v.a,{button:!0,key:t.name,onClick:function(){return e.props.onSelectFeedSource(t)},className:"leftMenu_feedSource"},o.a.createElement(nt.a,{style:rt.feedIcon,className:"leftMenu_selectSource"},J(t.icon)),o.a.createElement(et.a,{primary:t.name,className:"leftMenu_selectSource"}))})}},{key:"render",value:function(){var e=this;return o.a.createElement(Ye.a,{open:this.props.open,onClose:function(){return e.props.onClose()},id:"leftMenu"},o.a.createElement(k.a,{variant:"h5",style:rt.feedsTitle},o.a.createElement(ot.a,{style:rt.feedsIcon}),"Feeds"),o.a.createElement(te.a,null),o.a.createElement(b.a,null,this.getFeedOptions()))}}]),t}(o.a.Component),st=Object(He.createMuiTheme)({palette:{primary:Ve.a,secondary:qe.a,error:Qe.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),ct=[{name:"Funny",url:"/api/reddit/feed?subreddit=funny&channel=hot",icon:"md_sentiment_very_satisfied"},{name:"World News",url:"/api/reddit/feed?subreddit=worldnews&channel=hot",icon:"fa_globe_americas"},{name:"Pics",url:"/api/reddit/feed?subreddit=pics&channel=hot",icon:"md_photo_camera"},{name:"Science",url:"/api/reddit/feed?subreddit=science&channel=hot",icon:"fa_flask"},{name:"Gaming",url:"/api/reddit/feed?subreddit=gaming&channel=hot",icon:"fa_gamepad"},{name:"Today I Learned...",url:"/api/reddit/feed?subreddit=todayilearned&channel=hot",icon:"fa_lightbulb"},{name:"Videos",url:"/api/reddit/feed?subreddit=videos&channel=hot",icon:"fa_video"},{name:"Movies",url:"/api/reddit/feed?subreddit=movies&channel=hot",icon:"fa_film"},{name:"Aww",url:"/api/reddit/feed?subreddit=aww&channel=hot",icon:"fa_paw"}],lt=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={feed:ct[0],leftMenuOpen:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"openMenu",value:function(){this.setState({leftMenuOpen:!0})}},{key:"closeMenu",value:function(){this.state.leftMenuOpen&&this.setState({leftMenuOpen:!1})}},{key:"selectFeed",value:function(e){this.setState({feed:e,leftMenuOpen:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"})),o.a.createElement(He.MuiThemeProvider,{theme:st},o.a.createElement(Ge.a,null),o.a.createElement(Ue,{feedOptions:ct,openMenu:function(){return e.openMenu()},feed:this.state.feed}),o.a.createElement(it,{feedOptions:ct,open:this.state.leftMenuOpen,onClose:function(){return e.closeMenu()},onSelectFeedSource:function(t){return e.selectFeed(t)}}),o.a.createElement(Le,{feed:this.state.feed})))}}]),t}(o.a.Component),ut=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(lt,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ut?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):mt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):mt(t,e)})}}()}},[[146,2,1]]]);
//# sourceMappingURL=main.a96ce6a2.chunk.js.map