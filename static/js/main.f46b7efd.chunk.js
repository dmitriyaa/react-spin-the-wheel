(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t.p+"static/media/wheel.5c3b18ba.png"},21:function(n,e,t){n.exports=t.p+"static/media/highlighter.1667681e.png"},22:function(n,e,t){n.exports=t.p+"static/media/button.878bb4f7.png"},25:function(n,e,t){n.exports=t(38)},37:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),a=t(4),r=t.n(a),s=t(5),c=t(6),u=t(12),l=t(7),p=t(13),d=t(40),h=t(41),m=function(){return o.a.createElement("div",null,"Footer")},b=[{id:0,name:"",bonus:"200% No Rules",spins:"",code:"WHEEL200",deposit:"",wheelPosition:0},{id:1,name:"Fire Dragon",bonus:"250%",spins:"20",code:"WHEELFD250",deposit:"",wheelPosition:45},{id:2,name:"",bonus:"350 No Max",spins:"",code:"WHEEL350",deposit:"",wheelPosition:90},{id:3,name:"Empress Wu",bonus:"275%",spins:"30",code:"WHEELEW275",deposit:"",wheelPosition:135},{id:4,name:"",bonus:"300% No Max",spins:"",code:"WHEEL300",deposit:"",wheelPosition:180},{id:5,name:"Plentiful Treasure",bonus:"320%",spins:"40",code:"WHEELPT320",deposit:"",wheelPosition:225},{id:6,name:"",bonus:"250% No Max",spins:"",code:"WHEEL250",deposit:"",wheelPosition:270},{id:7,name:"Scuba Fishing",bonus:"300%",spins:"70",code:"WHEELSF300",deposit:"",wheelPosition:315}],f=function(){return b[Math.floor(Math.random()*b.length)]},g=b,w=t(1),v=t(2);function x(){var n=Object(w.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 751px;\n  max-width: 100%;\n  height: 751px;\n  max-height: 100%;\n  @media (max-width: 751px) {\n    width: 100vw;\n    height: 100vw;\n  }\n"]);return x=function(){return n},n}var E=v.a.div(x()),P=t(20),W=t.n(P);function S(){var n=Object(w.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(",") center center / cover no-repeat;\n  transform: rotate(","deg);\n  animation-name: ",";\n  animation-duration: ","s;\n  animation-fill-mode: both;\n  /* animation-timing-function: cubic-bezier(0.27, 0.99, 1, 1.1); */\n  animation-timing-function: linear;\n"]);return S=function(){return n},n}function j(){var n=Object(w.a)(["\n    from {\n      transform: rotate(","deg);\n    }\n    to {\n      transform: rotate(","deg);\n    }\n  "]);return j=function(){return n},n}var O=v.a.div(S(),W.a,function(n){return n.currentWheelPosition},function(n){return e=n.nextWheelPosition,t=n.currentWheelPosition,Object(v.b)(j(),t,e);var e,t},function(n){return n.spinDuration}),y=t(21),k=t.n(y);function H(){var n=Object(w.a)(["\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-100%);\n  width: 751px;\n  height: calc(751px / 2);\n  background: url(",") center center / cover no-repeat;\n  @media (max-width: 751px) {\n    width: 100vw;\n    height: calc(100vw / 2);\n  }\n"]);return H=function(){return n},n}var D=v.a.div(H(),k.a),L=t(22),M=t.n(L);function z(){var n=Object(w.a)(["\n  position: absolute;\n  z-index: 2;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  display: block;\n  width: 247px;\n  height: 290px;\n  border: none;\n  outline: none;\n  background: url(",") center center / cover no-repeat;\n  box-shadow: none;\n  cursor: ",";\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 751px) {\n    width: calc(24700vw / 751);\n    height: calc((24700vw / 751) * 290 / 247);\n  }\n"]);return z=function(){return n},n}var A=v.a.button.attrs(function(n){return{disabled:n.disabled}})(z(),M.a,function(n){return n.disabled?"not-allowed":"pointer"}),F=function(n){function e(){var n,t;Object(s.a)(this,e);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=Object(u.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(o)))).state={bonus:g[0],currentWheelPosition:0,nextWheelPosition:0},t.spin=function(){var n=t.props,e=n.spinsAmount,i=n.spinDuration,o=n.setSpinningStatus,a=f(),r=t.state.nextWheelPosition,s=r<360?360*e+a.wheelPosition:360*Math.ceil(r/360)+360*e+a.wheelPosition;t.setState({bonus:a,currentWheelPosition:r,nextWheelPosition:s}),o(!0),setTimeout(function(){o(!1)},1e3*i)},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.state,e=n.nextWheelPosition,t=n.currentWheelPosition,i=this.props.isSpinning;return console.log(this.state),o.a.createElement(E,null,o.a.createElement(O,{currentWheelPosition:t,nextWheelPosition:e,spinDuration:this.props.spinDuration}),o.a.createElement(D,null),o.a.createElement(A,{onClick:this.spin,disabled:i}))}}]),e}(o.a.Component),C=function(n){function e(){var n,t;Object(s.a)(this,e);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=Object(u.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(o)))).state={isSpinning:!1},t.setSpinningStatus=function(n){t.setState({isSpinning:n})},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement(d.a,{noGutters:!0},o.a.createElement(h.a,{xs:12,style:{position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:""}},o.a.createElement("div",{style:{position:"relative",zIndex:10,marginBottom:"-100px",textAlign:"center"}},o.a.createElement("h1",null,"Spin the wheel ",o.a.createElement("br",null)," & find your fortune"),o.a.createElement("p",null,"get up to a 350% bonus")),o.a.createElement(F,{isSpinning:this.state.isSpinning,spinsAmount:100,spinDuration:300,setSpinningStatus:this.setSpinningStatus})),o.a.createElement(h.a,{xs:12,style:{background:"black"}},o.a.createElement(m,null)))}}]),e}(o.a.Component);t(36),t(37);r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f46b7efd.chunk.js.map