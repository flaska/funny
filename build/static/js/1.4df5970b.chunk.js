(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{489:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return q});var a=n(7),l=n(8),r=n(13),i=n(11),c=n(12),o=n(1),s=n.n(o),u=n(385),g=n.n(u),m=n(133),f=n.n(m),d=n(100),p=n.n(d),b=n(362),k=n.n(b),h=n(361),E=n.n(h),y=n(403),O=n.n(y),F=n(404),S=n.n(F),v=n(81),D=n(21),C=n.n(D),I=n(337),j=n.n(I),w=n(56),M=n.n(w),T=n(41),_=n(59),L=n(60),N=n(61),z=n(131),J=n(22),P=n(490),R=n(134),x=s.a.lazy(function(){return Promise.all([n.e(10),n.e(4)]).then(n.bind(null,458))}),A=s.a.lazy(function(){return Promise.all([n.e(8),n.e(5)]).then(n.bind(null,467))}),X={feedsTitle:{marginTop:15,marginLeft:25},feedsIcon:{marginRight:10,marginTop:7,display:"inline-block"},settingsIcon:{float:"right",marginRight:15,marginLeft:15},feedbackIcon:{transform:"scaleX(-1)"},about:{margin:20},link:{textDecoration:"none"}},q=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={settingsOpen:!1},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"onSelectFeedSource",value:function(e){this.props.onSelectFeedSource(),R.a.setFeed(e.tag)}},{key:"getFeedOptions",value:function(){var e=this;return N.a.getEnabledFeeds().map(function(t){return s.a.createElement(P.a,{to:"/f/".concat(t.tag),key:t.name,style:X.link},s.a.createElement(p.a,{button:!0,onClick:function(){return e.onSelectFeedSource(t)},className:"leftMenu_feedSource",id:"leftMenu_changeSourceLink_"+t.tag},s.a.createElement(E.a,{style:X.feedIcon,className:"leftMenu_selectSource"},s.a.createElement(C.a,{color:"primary"},Object(v.a)(t.icon))),s.a.createElement(k.a,{color:"primary",primary:s.a.createElement(C.a,{color:"primary"},t.name),className:"leftMenu_selectSource"})))})}},{key:"toggleSettings",value:function(){this.state.settingsOpen?this.setState({settingsOpen:!1}):this.setState({settingsOpen:!0})}},{key:"renderSettings",value:function(){var e=this;if(this.state.settingsOpen)return s.a.createElement(T.a,{loadingFallback:s.a.createElement(_.a,null),errorFallback:s.a.createElement(L.a,{message:"Offline... cannot open settings..."})},s.a.createElement(x,{open:this.state.settingsOpen,onClose:function(){return e.toggleSettings()}}))}},{key:"toggleFeedbackDialog",value:function(){this.state.feedbackDialogOpen?this.setState({feedbackDialogOpen:!1}):this.setState({feedbackDialogOpen:!0})}},{key:"renderFeedbackDialog",value:function(){var e=this;if(this.state.feedbackDialogOpen)return s.a.createElement(T.a,{loadingFallback:s.a.createElement(_.a,null),errorFallback:s.a.createElement(L.a,{message:"Offline..."})},s.a.createElement(A,{open:this.state.feedbackDialogOpen,onClose:function(){return e.toggleFeedbackDialog()}}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{open:this.props.open,onClose:function(){return e.props.onClose()},id:"leftMenu"},s.a.createElement(C.a,{variant:"h5",style:X.feedsTitle},s.a.createElement(O.a,{style:X.feedsIcon}),"Feeds",s.a.createElement(M.a,{color:"primary",id:"openLeftMenuSettings",style:X.settingsIcon,onClick:function(){return e.toggleSettings()}},s.a.createElement(S.a,null))),s.a.createElement(f.a,null,this.getFeedOptions()),s.a.createElement(j.a,null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(C.a,{variant:"h5",style:X.feedsTitle},"About 4slack"),s.a.createElement("div",{style:X.about},s.a.createElement(z.a,{color:"primary",onClick:function(){return e.toggleFeedbackDialog()},id:"#openFeedback"},s.a.createElement(J.c,{style:X.feedbackIcon}),"\xa0Feedback"))),this.renderSettings(),this.renderFeedbackDialog())}}]),t}(s.a.Component)}}]);
//# sourceMappingURL=1.4df5970b.chunk.js.map