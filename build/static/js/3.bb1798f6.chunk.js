(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var a=n(321),s=n(6),c=n(7),i=n(11),o=n(10),l=n(12),r=n(1),u=n.n(r),d=n(318),f=n.n(d),p=n(316),m=n.n(p),O=n(74),b=n(94),h=n.n(b),g=n(324),v=n.n(g),S=n(325),E=n.n(S),k=n(356),y=n.n(k),C=n(92),j=n.n(C),w=n(57),F=n(320),M={feedIcon:{marginRight:0,marginLeft:10},buttons:{textAlign:"right"}},_=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={feedOptions:w.a.getAllFeeds()},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getFeedOptions",value:function(){var e=this;return this.state.feedOptions.map(function(t,n){return u.a.createElement(h.a,{button:!0,key:t.name,className:"leftMenu_feedSource"},u.a.createElement(y.a,{checked:t.enabled,onChange:function(){e.state.feedOptions[n].enabled=!e.state.feedOptions[n].enabled,e.setState({feedOptions:e.state.feedOptions})},color:"primary",id:"leftMenuSettings_"+t.tag}),u.a.createElement(v.a,{style:M.feedIcon,className:"leftMenu_selectSource"},Object(O.a)(t.icon)),u.a.createElement(E.a,{primary:t.name,className:"leftMenu_selectSource"}))})}},{key:"saveSelectedFeeds",value:function(){w.a.saveSelectedFeeds(this.state.feedOptions),this.props.onClose()}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClose,s=Object(a.a)(t,["onClose"]);return u.a.createElement(m.a,Object.assign({onClose:n},s,{id:"leftMenuSettingDialog"}),u.a.createElement(f.a,null,"Show/Hide Feeds in Left Menu"),u.a.createElement(F.a,null,this.getFeedOptions(),u.a.createElement("div",{style:M.buttons},u.a.createElement(j.a,{onClick:n},"Cancel"),u.a.createElement(j.a,{onClick:function(){return e.saveSelectedFeeds()},variant:"contained",color:"secondary",id:"leftMenuSettings_save"},"Save"))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=3.bb1798f6.chunk.js.map