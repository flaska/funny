(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){e.exports=n(296)},296:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(23),i=n.n(r),c=n(9),l=n(10),s=n(12),u=n(11),m=n(13),p=n(120),d=n.n(p),h=n(44),f=n.n(h),y=n(48),b=n.n(y),E=n(49),g=n.n(E),v=n(15),O=n.n(v),k=n(46),j=n.n(k),C=n(47),w=n.n(C),_=n(108),D=n.n(_),M=n(101),S=n.n(M),I=n(32),F=n(24),L={icon:{zoom:1.2}};function P(e){switch(e){case"md_thumb_up":return o.a.createElement(I.e,{style:L.icon});case"md_comment":return o.a.createElement(I.a,{style:L.icon});case"md_face":return o.a.createElement(I.b,{style:L.icon});case"md_sentiment_very_satisfied":return o.a.createElement(I.d,{style:L.icon});case"md_photo_camera":return o.a.createElement(I.c,{style:L.icon});case"fa_paw":return o.a.createElement(F.f,{style:L.icon});case"fa_flask":return o.a.createElement(F.b,{style:L.icon});case"fa_gamepad":return o.a.createElement(F.c,{style:L.icon});case"fa_lightbulb":return o.a.createElement(F.e,{style:L.icon});case"fa_video":return o.a.createElement(F.h,{style:L.icon});case"fa_film":return o.a.createElement(F.a,{style:L.icon});case"fa_globe_americas":return o.a.createElement(F.d,{style:L.icon})}return o.a.createElement("div",null)}var T={main:{margin:5,zoom:.85}},N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(S.a,{icon:P(this.props.icon),color:this.props.color,clickable:this.props.clickable,label:this.props.children,style:T.main})}}]),t}(o.a.Component),R=n(103),x=n.n(R);function B(e){return e>1e3?x()(e).format("0.0a"):e}var U={main:{position:"absolute",bottom:0,right:0},div:{display:"inline-block"}},z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:U.main},o.a.createElement(N,{icon:"md_thumb_up"},B(this.props.postData.score)),o.a.createElement("div",{style:U.div,className:"feedItemMetadata_comments",onClick:function(){e.props.onCommentsClick()}},o.a.createElement(N,{icon:"md_comment",clickable:!0,color:"primary"},B(this.props.postData.numComments))))}}]),t}(o.a.Component),W=n(104),A=n.n(W),G=n(105),J=n.n(G),V=n(106),H=n.n(V),$=n(45),q=n.n($),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N,{icon:"md_face"},this.props.commentData.author),o.a.createElement(N,{icon:"md_thumb_up"},B(this.props.commentData.score)))}}]),t}(o.a.Component),Q={marginLeft:50},X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n.props.commentData.body&&(n.state.body=n.props.commentData.body.replace(/\n/g,"<br>")),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showBody",value:function(e){return e.body?o.a.createElement(o.a.Fragment,null,o.a.createElement(K,{commentData:this.props.commentData}),o.a.createElement(O.a,{dangerouslySetInnerHTML:{__html:this.state.body}}),o.a.createElement(q.a,null)):o.a.createElement("div",null)}},{key:"isIndented",value:function(e){if(e.body)return Q}},{key:"render",value:function(){return this.props.commentData&&this.props.commentData.replies?o.a.createElement(o.a.Fragment,null,this.showBody(this.props.commentData),o.a.createElement("div",{style:this.isIndented(this.props.commentData)},this.props.commentData.replies.map(function(e){return o.a.createElement(t,{commentData:e,key:e._id})}))):null}}]),t}(o.a.Component),Y={hint:{display:"inline-block"}},Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={postId:n.props.postId,dataFetched:!1},f.a.get("/api/reddit/comments?postId="+n.state.postId).then(function(e){n.setState({commentsRoot:e.data,dataFetched:!0})}),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.dataFetched?o.a.createElement("div",{className:"commentsContainer"},o.a.createElement(O.a,{color:"primary",style:Y.hint},"Top comments"),o.a.createElement(X,{commentData:this.state.commentsRoot})):null}}]),t}(o.a.Component),ee=n(34),te=n.n(ee),ne=n(107),ae=n.n(ne),oe={content:{width:"100%",backgroundColor:"#1b1b1b"},spinner:{margin:"30px auto",display:"block"},buttons:{float:"right"}},re=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderContent",value:function(e){return"image"===e.type?o.a.createElement(J.a,{src:e.url,imgProps:{style:oe.content},preloader:function(){return o.a.createElement(H.a,{style:oe.spinner})}}):"hosted:video"===e.type?o.a.createElement("video",{controls:!0,autoPlay:!0,src:e.url,style:oe.content}):void 0}},{key:"openOriginalUrl",value:function(){window.open("https://www.reddit.com"+this.props.postData.permalink,"_blank")}},{key:"render",value:function(){var e=this;return o.a.createElement(j.a,{className:"feedItemContent"},this.renderContent(this.props.postData),o.a.createElement(w.a,null,o.a.createElement(Z,{style:oe.commentList,postId:this.props.postData.id,onClick:function(t){return e.handleClick(t)}}),o.a.createElement("div",{style:oe.buttons},o.a.createElement(te.a,{color:"primary",onClick:function(){return e.openOriginalUrl()}},"More",o.a.createElement(ae.a,null)),o.a.createElement(te.a,{onClick:function(){return e.props.closeContent()},color:"secondary"},"Close",o.a.createElement(F.g,null)))))}}]),t}(o.a.Component),ie={card:{width:"100%",position:"relative"},img:{width:150,height:100,float:"left",marginRight:10,cursor:"pointer"},datePosted:{opacity:.8},title:{cursor:"pointer"},content:{marginLeft:150,paddingBottom:40}},ce=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showContent:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleContent",value:function(){return"link"===this.props.postData.type?this.openLinkUrl(this.props.postData.url):"rich:video"===this.props.postData.type?this.openLinkUrl(this.props.postData.url):void(this.state.showContent?this.setState({showContent:!1}):this.setState({showContent:!0}))}},{key:"showContent",value:function(){var e=this;if(this.state.showContent)return o.a.createElement(re,{postData:this.props.postData,closeContent:function(){return e.toggleContent()}})}},{key:"openLinkUrl",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"feedItem"},o.a.createElement(j.a,{style:ie.card},o.a.createElement(D.a,{style:ie.img,image:this.props.postData.thumbnail,onClick:function(){e.toggleContent()}}),o.a.createElement(w.a,{style:ie.content},o.a.createElement(O.a,{style:ie.title,onClick:function(){e.toggleContent()},className:"postTitle"},this.props.postData.title),o.a.createElement(O.a,{style:ie.datePosted},A.a.utc(this.props.postData.dateUtc).fromNow())),o.a.createElement(z,{onCommentsClick:function(){e.setState({showContent:!0})},postData:this.props.postData})),this.showContent())}}]),t}(o.a.Component),le=n(110),se=n.n(le),ue=n(109),me=n.n(ue),pe={main:{margin:"auto",textAlign:"center"},reload:{cursor:"pointer"}},de=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:pe.main},o.a.createElement("br",null),o.a.createElement(me.a,null),o.a.createElement("br",null),o.a.createElement(O.a,{style:pe.loading},"offline..."),o.a.createElement("br",null),o.a.createElement(O.a,{style:pe.reload,onClick:function(){e.reloadPage()},color:"primary"},"Reload the page?"))}}]),t}(o.a.Component),he={main:{maxWidth:760,margin:"auto"},listItem:{display:"block"},more:{margin:"auto",display:"block",marginBottom:50},loading:{textAlign:"center"}},fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).chunkSize=10,n.state={posts:[],loading:!0,offline:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadMorePosts()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.feed.url!==e.feed.url&&(this.setState({posts:[]}),setTimeout(function(){t.loadMorePosts()},0))}},{key:"loadMorePosts",value:function(){var e=this;this.setState({loading:!0}),f.a.get(this.props.feed.url+"&from=".concat(this.state.posts.length,"&size=").concat(this.chunkSize)).then(function(t){e.setState({loading:!1}),0==e.state.posts.length?e.setState(t.data):e.setState({posts:e.state.posts.concat(t.data.posts)})}).catch(function(t){e.setState({offline:!0,loading:!1})})}},{key:"showLoading",value:function(){var e=this;return this.state.loading?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(se.a,null),o.a.createElement("br",null),o.a.createElement(O.a,{color:"primary",style:he.loading},"Loading..."),o.a.createElement("br",null)):this.state.offline?o.a.createElement(de,null):o.a.createElement(te.a,{style:he.more,variant:"contained",color:"primary",onClick:function(){return e.loadMorePosts()}},"More Fun")}},{key:"render",value:function(){return o.a.createElement("div",{style:he.main},o.a.createElement(b.a,{style:he.list,id:"feedList"},this.state.posts.map(function(e){return o.a.createElement(g.a,{style:he.listItem,key:e.id},o.a.createElement(ce,{postData:e}))})),this.showLoading())}}]),t}(o.a.Component),ye=n(111),be=n.n(ye),Ee=n(112),ge=n.n(Ee),ve=n(113),Oe=n.n(ve),ke=n(114),je=n.n(ke),Ce={root:{flexGrow:1},logo:{height:42,marginLeft:23,marginRight:23},feedChoice:{color:"white"}},we=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:Ce.root},o.a.createElement(be.a,{position:"static"},o.a.createElement(ge.a,null,o.a.createElement(Oe.a,{color:"inherit","aria-label":"Menu",onClick:function(){return e.props.openMenu()},id:"openLeftMenu"},o.a.createElement(je.a,null)),o.a.createElement("img",{alt:"4slack logo",style:Ce.logo,src:"./logo-rect.png"}),o.a.createElement(O.a,{variant:"h5",color:"inherit"},this.props.feed.name))))}}]),t}(o.a.Component),_e=n(121),De=n.n(_e),Me=n(50),Se=n(119),Ie=n.n(Se),Fe=n(65),Le=n.n(Fe),Pe=n(66),Te=n.n(Pe),Ne=n(117),Re=n.n(Ne),xe=n(116),Be=n.n(xe),Ue=n(115),ze=n.n(Ue),We=n(118),Ae=n.n(We),Ge={feedsTitle:{marginTop:15,marginLeft:25,marginBottom:10},feedsIcon:{marginRight:10}},Je=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getFeedOptions",value:function(){var e=this;return this.props.feedOptions.map(function(t){return o.a.createElement(g.a,{button:!0,key:t.name,onClick:function(){return e.props.onSelectFeedSource(t)}},o.a.createElement(ze.a,{style:Ge.feedIcon},P(t.icon)),o.a.createElement(Be.a,{primary:t.name}))})}},{key:"render",value:function(){var e=this;return o.a.createElement(Re.a,{open:this.props.open,onClose:function(){return e.props.onClose()}},o.a.createElement(O.a,{variant:"h5",style:Ge.feedsTitle},o.a.createElement(Ae.a,{style:Ge.feedsIcon}),"Feeds"),o.a.createElement(q.a,null),o.a.createElement(b.a,null,this.getFeedOptions()))}}]),t}(o.a.Component),Ve=Object(Me.createMuiTheme)({palette:{primary:Ie.a,secondary:Le.a,error:Te.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),He=[{name:"Funny",url:"/api/reddit/feed?subreddit=funny&channel=hot",icon:"md_sentiment_very_satisfied"},{name:"World News",url:"/api/reddit/feed?subreddit=worldnews&channel=hot",icon:"fa_globe_americas"},{name:"Pics",url:"/api/reddit/feed?subreddit=pics&channel=hot",icon:"md_photo_camera"},{name:"Science",url:"/api/reddit/feed?subreddit=science&channel=hot",icon:"fa_flask"},{name:"Gaming",url:"/api/reddit/feed?subreddit=gaming&channel=hot",icon:"fa_gamepad"},{name:"Today I Learned...",url:"/api/reddit/feed?subreddit=todayilearned&channel=hot",icon:"fa_lightbulb"},{name:"Videos",url:"/api/reddit/feed?subreddit=videos&channel=hot",icon:"fa_video"},{name:"Movies",url:"/api/reddit/feed?subreddit=movies&channel=hot",icon:"fa_film"},{name:"Aww",url:"/api/reddit/feed?subreddit=aww&channel=hot",icon:"fa_paw"}],$e=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={feed:He[0],leftMenuOpen:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"openMenu",value:function(){this.setState({leftMenuOpen:!0})}},{key:"closeMenu",value:function(){this.state.leftMenuOpen&&this.setState({leftMenuOpen:!1})}},{key:"selectFeed",value:function(e){this.setState({feed:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"})),o.a.createElement(Me.MuiThemeProvider,{theme:Ve},o.a.createElement(De.a,null),o.a.createElement(we,{feedOptions:He,openMenu:function(){return e.openMenu()},feed:this.state.feed}),o.a.createElement(Je,{feedOptions:He,open:this.state.leftMenuOpen,onClose:function(){return e.closeMenu()},onSelectFeedSource:function(t){return e.selectFeed(t)}}),o.a.createElement(fe,{feed:this.state.feed})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.c1f6bb90.chunk.js.map