(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(1),o=n.n(a),r=n(41),i=n.n(r),l={main:{textAlign:"center",padding:10,width:"100%"}};function s(){return o.a.createElement("div",{style:l.main},o.a.createElement(i.a,null))}},138:function(e,t,n){e.exports=n(258)},258:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(31),i=n.n(r),l=n(8),s=n(9),c=n(12),u=n(10),m=n(11),h=n(126),p=n.n(h),f=n(109),d=n.n(f),g=n(85),b=n.n(g),y=n(23),v=n.n(y),E=n(42),k=n.n(E),w=n(75),C=n.n(w),O=n(117),j=n.n(O),_=n(113),D=n.n(_),S=n(41),N=n.n(S),P={content:{width:"100%",backgroundColor:"#1b1b1b"},spinner:{margin:"30px auto",display:"block"},buttons:{float:"right"}},M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(e){return"image"===e.type?o.a.createElement(D.a,{src:e.url,imgProps:{style:P.content},preloader:function(){return o.a.createElement(N.a,{style:P.spinner})}}):"hosted:video"===e.type?o.a.createElement("video",{controls:!0,autoPlay:!0,style:P.content},o.a.createElement("source",{src:e.url})):void 0}},{key:"openOriginalUrl",value:function(){window.open("https://www.reddit.com"+this.props.postData.permalink,"_blank")}},{key:"render",value:function(){return o.a.createElement(k.a,{className:"postContent"},this.renderContent(this.props.postData))}}]),t}(o.a.Component),F=n(21),A=n(32),T=n.n(A),L=n(115);function x(e,t){return function(n,a){if(Object(A.isWidthUp)("sm",a))return n;var o=Object(L.a)({},n);return o[e]=t,o}}var B={main:{float:"left",cursor:"pointer",textAlign:"center",position:"relative"},img:{width:150},icon:{zoom:4,margin:10,opacity:.1},videoLogo:{position:"absolute",right:0,margin:5,color:"rgb(88, 87, 87)",background:"#ffffff9e",padding:4,borderRadius:3,paddingBottom:0}},I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getThumbnailIcon",value:function(e){return"image"===e.type?o.a.createElement(F.j,{style:B.icon}):"hosted:video"===e.type?o.a.createElement(F.m,{style:B.icon}):void 0}},{key:"getThumbnail",value:function(e){if(e.thumbnail)return o.a.createElement("img",{src:e.thumbnail,style:x("width",120)(B.img,this.props.width),className:"postThumbnail",alt:"Thumbnail for post: "+e.title})}},{key:"videoLogo",value:function(){if("hosted:video"===this.props.postData.type)return o.a.createElement("div",{style:B.videoLogo},o.a.createElement(F.m,null))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:B.main,onClick:function(){return e.props.onClick()}},this.videoLogo(),this.getThumbnail(this.props.postData))}}]),t}(o.a.Component),R=T()()(I),U=n(35),z=n(40),W=n(51),J=n(52),V=o.a.lazy(function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,438))}),$={button:{display:"inline-block"}},G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showOpenCloseIcon",value:function(){return this.props.parentState.showContent?o.a.createElement(U.a,{icon:"fa_eye-slash",clickable:!0,responsive:!0},"Close"):o.a.createElement(U.a,{icon:"fa_eye",clickable:!0,color:"primary",responsive:!0},"Open")}},{key:"showToggleCommentsIcon",value:function(){return this.props.parentState.showComments?o.a.createElement(U.a,{icon:"md_comment",clickable:!0,responsive:!0},"Close"):o.a.createElement(U.a,{icon:"md_comment",clickable:!0,color:"primary",responsive:!0},"Comments")}},{key:"showToggleShareDialogIcon",value:function(){var e=this;return this.state.shareDialogOpen?o.a.createElement("div",{onClick:function(){e.toggleShareDialog()}},o.a.createElement(U.a,{icon:"fa_external-link-alt",clickable:!0,responsive:!0},"Share")):o.a.createElement("div",{className:"cy_actionBar_sharePost",onClick:function(){e.toggleShareDialog()}},o.a.createElement(U.a,{icon:"fa_external-link-alt",clickable:!0,color:"primary",responsive:!0},"Share"))}},{key:"renderShareDialog",value:function(){var e=this;if(this.state.shareDialogOpen)return o.a.createElement(z.a,{loadingFallback:o.a.createElement(W.a,null),errorFallback:o.a.createElement(J.a,{message:"Offline... cannot open settings..."})},o.a.createElement(V,{onClose:function(){e.toggleShareDialog()},postData:this.props.postData}))}},{key:"toggleShareDialog",value:function(){this.state.shareDialogOpen?this.setState({shareDialogOpen:!1}):this.setState({shareDialogOpen:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:$.button,className:"postActions_openContent tm_openContentEye",onClick:function(){e.props.onOpenContentClick()}},this.showOpenCloseIcon()),o.a.createElement("div",{style:$.button,className:"postActions_openComments",onClick:function(){e.props.onCommentsClick()}},this.showToggleCommentsIcon()),o.a.createElement("div",{style:$.button,className:"postActions_share"},this.showToggleShareDialogIcon(),this.renderShareDialog()))}}]),t}(o.a.Component),H=n(108);var X=o.a.lazy(function(){return n.e(2).then(n.bind(null,436))}),Y={card:{width:"100%",position:"relative"},img:{float:"left",marginRight:10,cursor:"pointer"},datePosted:{opacity:.8},title:{cursor:"pointer"},content:{marginLeft:150,paddingBottom:40},postActions:{position:"absolute",bottom:0,right:0,display:"inline-block"},bottomPostActions:{float:"right"},bottomPostActionsAfter:{clear:"both"}},q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showContent:!1,showComments:!1},n.componentRef=o.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleContent",value:function(){if("link"===this.props.postData.type)return this.openLinkUrl(this.props.postData.url);this.state.showContent?(this.setState({showContent:!1}),this.scrollToComponent()):this.setState({showContent:!0})}},{key:"toggleComments",value:function(){this.state.showComments?(this.setState({showComments:!1}),this.scrollToComponent()):this.setState({showComments:!0})}},{key:"showContent",value:function(){var e=this;if(this.state.showContent)return o.a.createElement(M,{postData:this.props.postData,closeContent:function(){return e.toggleContent()}})}},{key:"openLinkUrl",value:function(e){window.open(e,"_blank")}},{key:"openOriginalLink",value:function(){this.openLinkUrl("https://www.reddit.com"+this.props.postData.permalink)}},{key:"showComments",value:function(){var e=this;if(this.state.showComments)return o.a.createElement(k.a,{style:Y.commentsCard},o.a.createElement(C.a,null,o.a.createElement(z.a,{loadingFallback:o.a.createElement(H.a,null),errorFallback:o.a.createElement(v.a,null,"Cannot load comments..")},o.a.createElement(X,{style:Y.commentList,postId:this.props.postData.id,onOpenSourceClick:function(){e.openOriginalLink()}}))))}},{key:"renderPostActions",value:function(){var e=this;return o.a.createElement(G,{parentState:this.state,postData:this.props.postData,onCommentsClick:function(){e.toggleComments()},onOpenContentClick:function(){e.toggleContent()}})}},{key:"showBottomActionBar",value:function(){if(this.state.showComments||this.state.showContent)return o.a.createElement(k.a,{className:"bottomActionBar"},o.a.createElement("div",{style:Y.bottomPostActions},this.renderPostActions()),o.a.createElement("div",{style:Y.bottomPostActions}))}},{key:"scrollToComponent",value:function(){var e=this.componentRef.current.getBoundingClientRect().top,t=window.pageYOffset;window.scrollTo({top:t+e-64,behavior:"smooth"})}},{key:"showPostDateDiff",value:function(e){if(e)return o.a.createElement(v.a,{style:Y.datePosted},function(e){var t=new Date(e),n=(new Date-t)/1e3/60/60;return n<.15?"now":n<.25?"15 minutes ago":n<.5?"half an hour ago":n<1.2?"an hour ago":n<22?Math.round(n)+" hours ago":n<48?"yesterday":Math.round(n/24)+" days ago"}(e))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"post",ref:this.componentRef},o.a.createElement(k.a,{style:Y.card},o.a.createElement(j.a,{style:Y.img,component:function(){return o.a.createElement(R,{postData:e.props.postData,onClick:function(){e.toggleContent()}})},src:"img",onClick:function(){e.toggleContent()}}),o.a.createElement(C.a,{style:x("marginLeft",120)(Y.content,this.props.width)},o.a.createElement(v.a,{style:Y.title,onClick:function(){e.toggleContent()},className:"postTitle"},this.props.postData.title),this.showPostDateDiff(this.props.postData.dateUtc)),o.a.createElement("div",{style:Y.postActions,className:"topActionBar"},this.renderPostActions())),this.showContent(),this.showComments(),this.showBottomActionBar())}}]),t}(o.a.Component),K=T()()(q),Q={main:{maxWidth:760,margin:"auto"},listItem:{display:"block"}};function Z(e){return o.a.createElement("div",{style:Q.main},o.a.createElement(d.a,{style:Q.list,id:"feedList"},e.posts.map(function(e){return o.a.createElement(b.a,{style:Q.listItem,key:e.id},o.a.createElement(K,{postData:e}))})))}var ee=n(119),te=n.n(ee),ne=n(120),ae=n.n(ne),oe=n(122),re=n.n(oe),ie=n(118),le=n.n(ie),se=n(121),ce={root:{flexGrow:1},logo:{height:42,marginLeft:23,marginRight:23}};function ue(e){return o.a.createElement("div",{className:ce.root},o.a.createElement(le.a,null,o.a.createElement(te.a,{position:"static"},o.a.createElement(ae.a,null,o.a.createElement(se.a,{color:"secondary","aria-label":"Open Menu",onClick:e.openMenu,id:"openLeftMenu"},o.a.createElement(re.a,null)),o.a.createElement("img",{alt:"4slack logo",style:ce.logo,src:"/logo-appbar-white.png"}),o.a.createElement(v.a,{color:"inherit"},e.feedFullName)))))}var me=n(127),he=n.n(me),pe=n(54),fe=n(123),de=n.n(fe),ge=n(72),be=n.n(ge),ye=n(124),ve=n(125),Ee=n(110),ke=n(53),we=n.n(ke),Ce={main:{margin:"auto",textAlign:"center"},reload:{cursor:"pointer"}},Oe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:Ce.main},o.a.createElement("br",null),o.a.createElement(we.a,null),o.a.createElement("br",null),o.a.createElement(v.a,{style:Ce.loading},"offline..."),o.a.createElement("br",null),o.a.createElement(v.a,{style:Ce.reload,onClick:function(){e.reloadPage()},color:"primary"},"Reload the page?"))}}]),t}(o.a.Component),je=o.a.lazy(function(){return Promise.all([n.e(7),n.e(1)]).then(n.bind(null,439))}),_e=Object(pe.createMuiTheme)({palette:{primary:de.a,secondary:be.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),De={more:{margin:"auto",display:"block",marginBottom:50},loading:{textAlign:"center"}},Se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleLeftMenu",value:function(){this.state.leftMenuOpen?this.setState({leftMenuOpen:!1}):this.setState({leftMenuOpen:!0})}},{key:"newSourceSelected",value:function(){this.toggleLeftMenu(),this.props.setSource()}},{key:"renderLeftMenu",value:function(){var e=this;if(this.state.leftMenuOpen)return o.a.createElement(z.a,{loadingFallback:o.a.createElement(W.a,null),errorFallback:o.a.createElement(J.a,{message:"Offline... cannot open menu..."})},o.a.createElement(je,{open:this.state.leftMenuOpen,onClose:function(){return e.toggleLeftMenu()},onSelectFeedSource:function(){return e.newSourceSelected()}}))}},{key:"renderMoreButton",value:function(){return this.props.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(ye.a,null),o.a.createElement("br",null),o.a.createElement(ve.a,{color:"primary",style:De.loading},"Loading..."),o.a.createElement("br",null)):this.props.state.offline?o.a.createElement(Oe,null):this.props.state.feed.posts.length<100?o.a.createElement(Ee.a,{style:De.more,variant:"contained",color:"primary",onClick:this.props.loadMorePosts},"More Fun"):void 0}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:400"})),o.a.createElement(pe.MuiThemeProvider,{theme:_e},o.a.createElement(he.a,null),o.a.createElement(ue,{openMenu:function(){return e.toggleLeftMenu()},feedFullName:this.props.state.feed.fullName,channel:this.props.state.feed.channel}),o.a.createElement(o.a.Fragment,null,this.renderLeftMenu(),o.a.createElement(Z,{posts:this.props.state.feed.posts,loadMorePosts:function(){return e.loadMorePosts()}}),this.renderMoreButton())))}}]),t}(o.a.Component),Ne=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"fetchPosts",value:function(e,t,n,a){return fetch("/api/reddit/feed?subreddit=".concat(e,"&channel=").concat(t,"&from=").concat(n,"&size=").concat(a)).then(function(e){return e.json()}).then(function(e){return"hot"!==t&&e.posts.forEach(function(e){delete e.dateUtc}),e})}}]),e}(),Pe=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"getSubredditFromUrl",value:function(){if(-1!==window.location.pathname.indexOf("/f/"))return window.location.pathname.replace("/f/","").replace(/\/.+$/,"")}},{key:"getChannelFromUrl",value:function(){if(3===(window.location.pathname.match(/\//g)||[]).length)return window.location.pathname.replace(/\/f\/.+\//,"")}}]),e}(),Me=n(437),Fe=n(74),Ae=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={feed:{posts:[]}},setTimeout(function(){return n.init()},0),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"init",value:function(){var e=Pe.getSubredditFromUrl(),t=Pe.getChannelFromUrl();this.setNewFeed(e||"funny",t||"hot")}},{key:"setNewFeed",value:function(e,t){var n=this,a=Object(Fe.getReactFeeds)().filter(function(t){return t.tag===e})[0].name;this.setState({feed:{subreddit:e,channel:t,posts:[],fullName:a}}),setTimeout(function(){return n.loadMorePosts()},0)}},{key:"loadMorePosts",value:function(){var e=this;this.setState({loading:!0}),Ne.fetchPosts(this.state.feed.subreddit,this.state.feed.channel,this.state.feed.posts.length,10).then(function(t){var n=Object(Fe.getReactFeeds)().filter(function(t){return t.tag===e.state.feed.subreddit})[0].name;t.posts=e.state.feed.posts.concat(t.posts),t.fullName=n,e.setState({loading:!1,feed:t})}).catch(function(t){e.setState({loading:!1,offline:!0})})}},{key:"render",value:function(){var e=this;return o.a.createElement(Me.a,null,o.a.createElement(Se,{state:this.state,loadMorePosts:function(){return e.loadMorePosts()},setSource:function(){return setTimeout(function(){return e.init()},0)}}))}}]),t}(o.a.Component),Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&(Te||window.addEventListener("load",function(){var e;e="/slackServiceWorker.js",navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}))},35:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n(8),o=n(9),r=n(12),i=n(10),l=n(11),s=n(1),c=n.n(s),u=n(116),m=n.n(u),h=n(64),p=n(32),f=n.n(p),d=n(82),g=n.n(d),b={chip:{margin:5,zoom:.85},iconButton:{zoom:.85,marginLeft:3},invisibleText:{display:"none"}},y=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Object(p.isWidthUp)("sm",this.props.width)||!this.props.responsive?c.a.createElement(m.a,{className:this.props.className,icon:Object(h.a)(this.props.icon),color:this.props.color,clickable:this.props.clickable,label:this.props.children,style:b.chip}):c.a.createElement(g.a,{size:"small",color:this.props.color,"aria-label":this.props.children,style:b.iconButton},Object(h.a)(this.props.icon),c.a.createElement("span",{style:b.invisibleText},this.props.children))}}]),t}(c.a.Component),v=f()()(y)},40:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(8),i=n(9),l=n(12),s=n(10),c=n(11),u=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e),console.log(t)}},{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.a.Component);function m(e){return o.a.createElement(u,{fallback:e.errorFallback},o.a.createElement(a.Suspense,{fallback:e.loadingFallback},e.children))}n.d(t,"a",function(){return m})},51:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),o=n.n(a),r=n(41),i=n.n(r),l=n(23),s=n.n(l),c={loadingOverlay:{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",zIndex:1e4,textAlign:"center",paddingTop:200},loadingText:{color:"white!important"}};function u(){return o.a.createElement("div",{style:c.loadingOverlay},o.a.createElement(i.a,null),o.a.createElement(s.a,{variant:"h4",color:"primary",style:c.loadingText},"Loading..."))}},52:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(1),o=n.n(a),r=n(23),i=n.n(r),l=n(53),s=n.n(l);function c(e){return o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement(i.a,null,e.message))}},64:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(43),o=n(21),r=n(1),i=n.n(r),l={icon:{zoom:1.2}};function s(e){switch(e){case"md_thumb_up":return i.a.createElement(a.e,{style:l.icon});case"md_comment":return i.a.createElement(a.a,{style:l.icon});case"md_face":return i.a.createElement(a.b,{style:l.icon});case"md_sentiment_very_satisfied":return i.a.createElement(a.d,{style:l.icon});case"md_photo_camera":return i.a.createElement(a.c,{style:l.icon});case"fa_paw":return i.a.createElement(o.k,{style:l.icon});case"fa_globe-americas":return i.a.createElement(o.h,{style:l.icon});case"fa_eye":return i.a.createElement(o.f,{style:l.icon});case"fa_external-link-alt":return i.a.createElement(o.e,{style:l.icon});case"fa_eye-slash":return i.a.createElement(o.g,{style:l.icon});case"fa_comments":return i.a.createElement(o.c,{style:l.icon});case"fa_hand-paper":return i.a.createElement(o.i,{style:l.icon});case"fa_book-open":return i.a.createElement(o.a,{style:l.icon});case"fa_dna":return i.a.createElement(o.d,{style:l.icon});case"fa_clock":return i.a.createElement(o.b,{style:l.icon});case"fa_surprise":return i.a.createElement(o.l,{style:l.icon});default:return i.a.createElement("div",null)}}},74:function(e,t){var n=[{fullName:"Funny Pics & Videos",tag:"funny",icon:"md_sentiment_very_satisfied",defaultEnabled:!0},{fullName:"Aww Animals",tag:"aww",icon:"fa_paw",defaultEnabled:!0},{fullName:"Mildly Interesting",tag:"mildlyinteresting",icon:"fa_surprise",defaultEnabled:!0},{fullName:"Facepalm!",tag:"facepalm",icon:"fa_hand-paper",defaultEnabled:!0},{fullName:"Web Comics",tag:"comics",icon:"fa_book-open",defaultEnabled:!0},{fullName:"Interesting Pics",tag:"pics",icon:"md_photo_camera",defaultEnabled:!0},{fullName:"History",tag:"history",icon:"fa_clock",defaultEnabled:!0},{fullName:"Earth",tag:"earth",icon:"fa_globe-americas",defaultEnabled:!1},{fullName:"Troll Chromosomes",tag:"TrollXChromosomes",icon:"fa_dna",defaultEnabled:!1}];function a(e){return{name:e.fullName,icon:e.icon,enabled:e.defaultEnabled,tag:e.tag}}function o(e){return e.tag}t.getReactFeeds=function(){return n.map(a)},t.getNodeFeeds=function(){return n.map(o)}}},[[138,9,5]]]);
//# sourceMappingURL=main.76b76cb5.chunk.js.map