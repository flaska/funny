(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(1),o=n.n(a),r=n(42),i=n.n(r),l={main:{textAlign:"center",padding:10,width:"100%"}};function s(){return o.a.createElement("div",{style:l.main},o.a.createElement(i.a,null))}},127:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(6),o=n(7);window.analytics={};var r=window.analytics,i=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"setFeed",value:function(e){r.feed=e}},{key:"triggerSwitchFeed",value:function(e){window.dataLayer.push({event:"switchFeedCustom",switchFeedTarget:e})}}]),e}()},152:function(e,t,n){e.exports=n(300)},292:function(e,t){var n=[{fullName:"Funny Pics & Videos",tag:"funny",icon:"md_sentiment_very_satisfied",defaultEnabled:!0},{fullName:"Aww Animals",tag:"aww",icon:"fa_paw",defaultEnabled:!0},{fullName:"Mildly Interesting",tag:"mildlyinteresting",icon:"fa_surprise",defaultEnabled:!0},{fullName:"Facepalm!",tag:"facepalm",icon:"fa_hand-paper",defaultEnabled:!0},{fullName:"Web Comics",tag:"comics",icon:"fa_book-open",defaultEnabled:!0},{fullName:"Interesting Pics",tag:"pics",icon:"md_photo_camera",defaultEnabled:!0},{fullName:"History",tag:"history",icon:"fa_clock",defaultEnabled:!0},{fullName:"Earth",tag:"earth",icon:"fa_globe-americas",defaultEnabled:!1},{fullName:"Troll Chromosomes",tag:"TrollXChromosomes",icon:"fa_dna",defaultEnabled:!1}];function a(e){return{name:e.fullName,icon:e.icon,enabled:e.defaultEnabled,tag:e.tag}}function o(e){return e.tag}t.getReactFeeds=function(){return n.map(a)},t.getNodeFeeds=function(){return n.map(o)}},300:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(29),i=n.n(r),l=n(6),s=n(7),c=n(13),u=n(11),m=n(12),h=n(146),p=n.n(h),f=n(129),d=n.n(f),g=n(96),y=n.n(g),v=n(20),b=n.n(v),k=n(44),E=n.n(k),C=n(89),w=n.n(C),O=n(138),j=n.n(O),D=n(132),S=n.n(D),_=n(42),P=n.n(_),F={content:{width:"100%",backgroundColor:"#1b1b1b"},spinner:{margin:"30px auto",display:"block"},buttons:{float:"right"}},N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderContent",value:function(e){return"image"===e.type?o.a.createElement(S.a,{src:e.url,imgProps:{style:F.content},preloader:function(){return o.a.createElement(P.a,{style:F.spinner})}}):"hosted:video"===e.type?o.a.createElement("video",{controls:!0,autoPlay:!0,style:F.content},o.a.createElement("source",{src:e.url})):void 0}},{key:"openOriginalUrl",value:function(){window.open("https://www.reddit.com"+this.props.postData.permalink,"_blank")}},{key:"render",value:function(){return o.a.createElement(E.a,{className:"postContent"},this.renderContent(this.props.postData))}}]),t}(o.a.Component),L=n(22),M=n(33),T=n.n(M),A=n(134);function x(e,t){return function(n,a){if(Object(M.isWidthUp)("sm",a))return n;var o=Object(A.a)({},n);return o[e]=t,o}}var I={main:{float:"left",cursor:"pointer",textAlign:"center",position:"relative"},img:{width:150},icon:{zoom:4,margin:10,opacity:.1},videoLogo:{position:"absolute",right:0,margin:5,color:"rgb(88, 87, 87)",background:"#ffffff9e",padding:4,borderRadius:3,paddingBottom:0}},B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getThumbnailIcon",value:function(e){return"image"===e.type?o.a.createElement(L.j,{style:I.icon}):"hosted:video"===e.type?o.a.createElement(L.m,{style:I.icon}):void 0}},{key:"getThumbnail",value:function(e){if(e.thumbnail)return o.a.createElement("img",{src:e.thumbnail,style:x("width",120)(I.img,this.props.width),className:"postThumbnail",alt:"Thumbnail for post: "+e.title})}},{key:"videoLogo",value:function(){if("hosted:video"===this.props.postData.type)return o.a.createElement("div",{style:I.videoLogo},o.a.createElement(L.m,null))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:I.main,onClick:function(){return e.props.onClick()}},this.videoLogo(),this.getThumbnail(this.props.postData))}}]),t}(o.a.Component),R=T()()(B),z=n(36),U=n(58),W=n.n(U),J=n(59),V=n(60),q=n.n(V),H=n(41),G=n(55),X=n(56),Y=(n(249),n(137)),$=n(136),K=n.n($);function Q(e){return o.a.createElement(W.a,{open:e.open,autoHideDuration:1e3,onClose:function(){return e.onClose()},message:e.children,action:[o.a.createElement(J.a,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){return e.onClose()}},o.a.createElement(q.a,null))]})}var Z=o.a.lazy(function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,458))}),ee=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={open:!0},n.requestPostCopy(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"generateShareLink",value:function(){return"https://www.4slack.com/sh/"+this.props.postData.id}},{key:"close",value:function(){this.setState({open:!1}),this.props.onClose()}},{key:"requestPostCopy",value:function(){fetch("/api/sharePersist/persistPost?postId="+this.props.postData.id,{method:"PUT"}).then(function(e){}).catch(function(e){console.log(e)})}},{key:"copyToClipboard",value:function(){K()(this.generateShareLink()),this.setState({linkCopied:!0})}},{key:"renderShareDialogContent",value:function(){var e=this;return o.a.createElement("div",null,"Share - ",this.props.postData.title.substr(0,50),"...",o.a.createElement(H.a,{loadingFallback:o.a.createElement(G.a,null),errorFallback:o.a.createElement(X.a,{message:"Offline... cannot open settings..."})},o.a.createElement(Z,{text:this.props.postData.title,url:this.generateShareLink()})),o.a.createElement(Y.a,{color:"primary",onClick:function(){e.copyToClipboard()},className:"cy_shareDialog_copyLink"},"Copy Link"),this.generateShareLink(),o.a.createElement(Q,{open:this.state.linkCopied,onClose:function(){return e.setState({linkCopied:!1})}},"Link copied to clip-board..."))}},{key:"render",value:function(){var e=this;return navigator.share?(navigator.share({title:this.props.postData.title,text:this.props.postData.title,url:this.generateShareLink()}),null):o.a.createElement(W.a,{open:this.state.open,message:this.renderShareDialogContent(),action:[o.a.createElement(J.a,{key:"close",color:"inherit",onClick:function(){return e.close()},className:"cy_shareDialog_close"},o.a.createElement(q.a,null))]})}}]),t}(o.a.Component),te={button:{display:"inline-block"}},ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showOpenCloseIcon",value:function(){return this.props.parentState.showContent?o.a.createElement(z.a,{icon:"fa_eye-slash",clickable:!0,responsive:!0},"Close"):o.a.createElement(z.a,{icon:"fa_eye",clickable:!0,color:"primary",responsive:!0},"Open")}},{key:"showToggleCommentsIcon",value:function(){return this.props.parentState.showComments?o.a.createElement(z.a,{icon:"md_comment",clickable:!0,responsive:!0},"Close"):o.a.createElement(z.a,{icon:"md_comment",clickable:!0,color:"primary",responsive:!0},"Comments")}},{key:"showToggleShareDialogIcon",value:function(){var e=this;return this.state.shareDialogOpen?o.a.createElement("div",{onClick:function(){e.toggleShareDialog()}},o.a.createElement(z.a,{icon:"fa_external-link-alt",clickable:!0,responsive:!0},"Share")):o.a.createElement("div",{className:"cy_actionBar_sharePost",onClick:function(){e.toggleShareDialog()}},o.a.createElement(z.a,{icon:"fa_external-link-alt",clickable:!0,color:"primary",responsive:!0},"Share"))}},{key:"renderShareDialog",value:function(){var e=this;if(this.state.shareDialogOpen)return o.a.createElement(ee,{onClose:function(){e.toggleShareDialog()},postData:this.props.postData})}},{key:"toggleShareDialog",value:function(){this.state.shareDialogOpen?this.setState({shareDialogOpen:!1}):this.setState({shareDialogOpen:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:te.button,className:"postActions_openContent tm_openContentEye",onClick:function(){e.props.onOpenContentClick()}},this.showOpenCloseIcon()),o.a.createElement("div",{style:te.button,className:"postActions_openComments",onClick:function(){e.props.onCommentsClick()}},this.showToggleCommentsIcon()),o.a.createElement("div",{style:te.button,className:"postActions_share"},this.showToggleShareDialogIcon(),this.renderShareDialog()))}}]),t}(o.a.Component),ae=n(126);var oe=o.a.lazy(function(){return n.e(2).then(n.bind(null,465))}),re={card:{width:"100%",position:"relative"},img:{float:"left",marginRight:10,cursor:"pointer"},datePosted:{opacity:.8},title:{cursor:"pointer"},content:{marginLeft:150,paddingBottom:40},postActions:{position:"absolute",bottom:0,right:0,display:"inline-block"},bottomPostActions:{float:"right"},bottomPostActionsAfter:{clear:"both"}},ie=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showContent:!1,showComments:!1},n.componentRef=o.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleContent",value:function(){if("link"===this.props.postData.type)return this.openLinkUrl(this.props.postData.url);this.state.showContent?(this.setState({showContent:!1}),this.scrollToComponent()):this.setState({showContent:!0})}},{key:"toggleComments",value:function(){this.state.showComments?(this.setState({showComments:!1}),this.scrollToComponent()):this.setState({showComments:!0})}},{key:"showContent",value:function(){var e=this;if(this.state.showContent)return o.a.createElement(N,{postData:this.props.postData,closeContent:function(){return e.toggleContent()}})}},{key:"openLinkUrl",value:function(e){window.open(e,"_blank")}},{key:"openOriginalLink",value:function(){this.openLinkUrl("https://www.reddit.com"+this.props.postData.permalink)}},{key:"showComments",value:function(){var e=this;if(this.state.showComments)return o.a.createElement(E.a,{style:re.commentsCard},o.a.createElement(w.a,null,o.a.createElement(H.a,{loadingFallback:o.a.createElement(ae.a,null),errorFallback:o.a.createElement(b.a,null,"Cannot load comments..")},o.a.createElement(oe,{style:re.commentList,postId:this.props.postData.id,onOpenSourceClick:function(){e.openOriginalLink()}}))))}},{key:"renderPostActions",value:function(){var e=this;return o.a.createElement(ne,{parentState:this.state,postData:this.props.postData,onCommentsClick:function(){e.toggleComments()},onOpenContentClick:function(){e.toggleContent()}})}},{key:"showBottomActionBar",value:function(){if(this.state.showComments||this.state.showContent)return o.a.createElement(E.a,{className:"bottomActionBar"},o.a.createElement("div",{style:re.bottomPostActions},this.renderPostActions()),o.a.createElement("div",{style:re.bottomPostActions}))}},{key:"scrollToComponent",value:function(){var e=this.componentRef.current.getBoundingClientRect().top,t=window.pageYOffset;window.scrollTo({top:t+e-64,behavior:"smooth"})}},{key:"showPostDateDiff",value:function(e){if(e)return o.a.createElement(b.a,{style:re.datePosted},function(e){var t=new Date(e),n=(new Date-t)/1e3/60/60;return n<.15?"now":n<.25?"15 minutes ago":n<.5?"half an hour ago":n<1.2?"an hour ago":n<22?Math.round(n)+" hours ago":n<48?"yesterday":Math.round(n/24)+" days ago"}(e))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"post",ref:this.componentRef},o.a.createElement(E.a,{style:re.card},o.a.createElement(j.a,{style:re.img,component:function(){return o.a.createElement(R,{postData:e.props.postData,onClick:function(){e.toggleContent()}})},src:"img",onClick:function(){e.toggleContent()}}),o.a.createElement(w.a,{style:x("marginLeft",120)(re.content,this.props.width)},o.a.createElement(b.a,{style:re.title,onClick:function(){e.toggleContent()},className:"postTitle"},this.props.postData.title),this.showPostDateDiff(this.props.postData.dateUtc)),o.a.createElement("div",{style:re.postActions,className:"topActionBar"},this.renderPostActions())),this.showContent(),this.showComments(),this.showBottomActionBar())}}]),t}(o.a.Component),le=T()()(ie),se=n(128),ce=n.n(se),ue=n(139),me=n.n(ue),he=n(57),pe=n.n(he),fe={main:{margin:"auto",textAlign:"center"},reload:{cursor:"pointer"}},de=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:fe.main},o.a.createElement("br",null),o.a.createElement(pe.a,null),o.a.createElement("br",null),o.a.createElement(b.a,{style:fe.loading},"offline..."),o.a.createElement("br",null),o.a.createElement(b.a,{style:fe.reload,onClick:function(){e.reloadPage()},color:"primary"},"Reload the page?"))}}]),t}(o.a.Component),ge=n(127),ye=function(){function e(){Object(l.a)(this,e);var t=localStorage.getItem("lastVisitDate"),n=new Date;if(localStorage.setItem("lastVisitDate",n.toDateString()),!t)return this.currentChannel="topweek";var a=new Date(t),o=new Date-a,r=Math.floor(o/1e3/60/60/24);return this.currentChannel=r>4?"topweek":"hot"}return Object(s.a)(e,[{key:"fetchPosts",value:function(e,t,n){var a=this;return fetch("/api/reddit/feed?subreddit=".concat(e,"&channel=").concat(this.currentChannel,"&from=").concat(t,"&size=").concat(n)).then(function(e){return e.json()}).then(function(e){return"hot"!=a.currentChannel&&e.posts.forEach(function(e){delete e.dateUtc}),e})}}]),e}(),ve={main:{maxWidth:760,margin:"auto"},listItem:{display:"block"},more:{margin:"auto",display:"block",marginBottom:50},loading:{textAlign:"center"}},be=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).chunkSize=10,n.state={posts:[],loading:!0,offline:!1},n.feedPostsProvider=new ye,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.feed.tag!==e.feed.tag&&(this.setState({posts:[]}),setTimeout(function(){t.loadMorePosts()},0))}},{key:"componentDidMount",value:function(){this.loadMorePosts()}},{key:"loadMorePosts",value:function(){var e=this;this.setState({loading:!0}),this.feedPostsProvider.fetchPosts(this.props.feed.tag,this.state.posts.length,this.chunkSize).then(function(t){e.setState({loading:!1}),0==e.state.posts.length?e.setState(t):e.setState({posts:e.state.posts.concat(t.posts)}),ge.a.setFeed(e.props.feed.tag)}).catch(function(t){e.setState({offline:!0,loading:!1})})}},{key:"showLoading",value:function(){var e=this;return this.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(me.a,null),o.a.createElement("br",null),o.a.createElement(b.a,{color:"primary",style:ve.loading},"Loading..."),o.a.createElement("br",null)):this.state.offline?o.a.createElement(de,null):this.state.posts.length<100?o.a.createElement(ce.a,{style:ve.more,variant:"contained",color:"primary",onClick:function(){return e.loadMorePosts()}},"More Fun"):void 0}},{key:"render",value:function(){return o.a.createElement("div",{style:ve.main},o.a.createElement(d.a,{style:ve.list,id:"feedList"},this.state.posts.map(function(e){return o.a.createElement(y.a,{style:ve.listItem,key:e.id},o.a.createElement(le,{postData:e}))})),this.showLoading())}}]),t}(o.a.Component),ke=n(141),Ee=n.n(ke),Ce=n(142),we=n.n(Ce),Oe=n(144),je=n.n(Oe),De=n(140),Se=n.n(De),_e=n(143),Pe={root:{flexGrow:1},logo:{height:42,marginLeft:23,marginRight:23}};function Fe(e){return o.a.createElement("div",{className:Pe.root},o.a.createElement(Se.a,null,o.a.createElement(Ee.a,{position:"static"},o.a.createElement(we.a,null,o.a.createElement(_e.a,{color:"secondary","aria-label":"Open Menu",onClick:function(){return e.openMenu()},id:"openLeftMenu"},o.a.createElement(je.a,null)),o.a.createElement("img",{alt:"4slack logo",style:Pe.logo,src:"/logo-appbar-white.png"}),o.a.createElement(b.a,{color:"inherit"},e.feed.name)))))}var Ne=n(147),Le=n.n(Ne),Me=n(61),Te=n(145),Ae=n.n(Te),xe=n(86),Ie=n.n(xe),Be=n(87),Re=n.n(Be),ze=n(78);function Ue(){var e=window.location.pathname.replace("/f/","");return"/"==e&&(e="funny"),e}var We=n(466),Je=o.a.lazy(function(){return Promise.all([n.e(7),n.e(1)]).then(n.bind(null,456))}),Ve=Object(Me.createMuiTheme)({palette:{primary:Ae.a,secondary:Ie.a,error:Re.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),qe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={leftMenuOpen:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){}},{key:"openMenu",value:function(){this.setState({leftMenuOpen:!0})}},{key:"closeMenu",value:function(){this.state.leftMenuOpen&&this.setState({leftMenuOpen:!1})}},{key:"renderLeftMenu",value:function(){var e=this;if(this.state.leftMenuOpen)return o.a.createElement(H.a,{loadingFallback:o.a.createElement(G.a,null),errorFallback:o.a.createElement(X.a,{message:"Offline... cannot open menu..."})},o.a.createElement(Je,{open:this.state.leftMenuOpen,onClose:function(){return e.closeMenu()},onSelectFeedSource:function(){return e.closeMenu()}}))}},{key:"getContent",value:function(){return o.a.createElement(be,{feed:ze.a.getFeedByName(Ue())})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:400"})),o.a.createElement(Me.MuiThemeProvider,{theme:Ve},o.a.createElement(Le.a,null),o.a.createElement(Fe,{openMenu:function(){return e.openMenu()},feed:ze.a.getFeedByName(Ue())}),o.a.createElement(We.a,null,o.a.createElement(o.a.Fragment,null,this.renderLeftMenu(),this.getContent()))))}}]),t}(o.a.Component),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&(He||window.addEventListener("load",function(){var e;e="/slackServiceWorker.js",navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}))},36:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(6),o=n(7),r=n(13),i=n(11),l=n(12),s=n(1),c=n.n(s),u=n(135),m=n.n(u),h=n(75),p=n(33),f=n.n(p),d=n(92),g=n.n(d),y={chip:{margin:5,zoom:.85},iconButton:{zoom:.85,marginLeft:3},invisibleText:{display:"none"}},v=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Object(p.isWidthUp)("sm",this.props.width)||!this.props.responsive?c.a.createElement(m.a,{className:this.props.className,icon:Object(h.a)(this.props.icon),color:this.props.color,clickable:this.props.clickable,label:this.props.children,style:y.chip}):c.a.createElement(g.a,{size:"small",color:this.props.color,"aria-label":this.props.children,style:y.iconButton},Object(h.a)(this.props.icon),c.a.createElement("span",{style:y.invisibleText},this.props.children))}}]),t}(c.a.Component),b=f()()(v)},41:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(6),i=n(7),l=n(13),s=n(11),c=n(12),u=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e),console.log(t)}},{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.a.Component);function m(e){return o.a.createElement(u,{fallback:e.errorFallback},o.a.createElement(a.Suspense,{fallback:e.loadingFallback},e.children))}n.d(t,"a",function(){return m})},55:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),o=n.n(a),r=n(42),i=n.n(r),l=n(20),s=n.n(l),c={loadingOverlay:{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",zIndex:1e4,textAlign:"center",paddingTop:200},loadingText:{color:"white!important"}};function u(){return o.a.createElement("div",{style:c.loadingOverlay},o.a.createElement(i.a,null),o.a.createElement(s.a,{variant:"h4",color:"primary",style:c.loadingText},"Loading..."))}},56:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(1),o=n.n(a),r=n(20),i=n.n(r),l=n(57),s=n.n(l);function c(e){return o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement(i.a,null,e.message))}},75:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(45),o=n(22),r=n(1),i=n.n(r),l={icon:{zoom:1.2}};function s(e){switch(e){case"md_thumb_up":return i.a.createElement(a.e,{style:l.icon});case"md_comment":return i.a.createElement(a.a,{style:l.icon});case"md_face":return i.a.createElement(a.b,{style:l.icon});case"md_sentiment_very_satisfied":return i.a.createElement(a.d,{style:l.icon});case"md_photo_camera":return i.a.createElement(a.c,{style:l.icon});case"fa_paw":return i.a.createElement(o.k,{style:l.icon});case"fa_globe-americas":return i.a.createElement(o.h,{style:l.icon});case"fa_eye":return i.a.createElement(o.f,{style:l.icon});case"fa_external-link-alt":return i.a.createElement(o.e,{style:l.icon});case"fa_eye-slash":return i.a.createElement(o.g,{style:l.icon});case"fa_comments":return i.a.createElement(o.c,{style:l.icon});case"fa_hand-paper":return i.a.createElement(o.i,{style:l.icon});case"fa_book-open":return i.a.createElement(o.a,{style:l.icon});case"fa_dna":return i.a.createElement(o.d,{style:l.icon});case"fa_clock":return i.a.createElement(o.b,{style:l.icon});case"fa_surprise":return i.a.createElement(o.l,{style:l.icon})}return i.a.createElement("div",null)}},78:function(e,t,n){"use strict";var a=n(6),o=n(7),r=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"saveData",value:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))}},{key:"getData",value:function(e){try{return JSON.parse(window.localStorage.getItem(e))}catch(t){console.error(t)}}}]),e}();n.d(t,"a",function(){return l});var i=n(292).getReactFeeds,l=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"getAllFeeds",value:function(){var e=r.getData("redditFeeds_v2");if(e){var t=i();return t.forEach(function(t){-1!=e.indexOf(t.tag)?t.enabled=!0:t.enabled=!1}),t}return i()}},{key:"saveSelectedFeeds",value:function(e){var t=e.filter(function(e){return e.enabled}).map(function(e){return e.tag});r.saveData("redditFeeds_v2",t)}},{key:"getEnabledFeeds",value:function(){return this.getAllFeeds().filter(function(e){return e.enabled})}},{key:"getDefaultFeed",value:function(){return this.getEnabledFeeds()[0]}},{key:"getFeedByName",value:function(e){return this.getEnabledFeeds().filter(function(t){return t.tag===e})[0]}}]),e}()}},[[152,9,5]]]);
//# sourceMappingURL=main.8bea33f8.chunk.js.map