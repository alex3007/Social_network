(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={navbar:"Navbar_navbar__2ipYm",navbarItem:"Navbar_navbarItem__3_ln7",navbarLink:"Navbar_navbarLink__2omA1",active:"Navbar_active__3K-MB",friendsBlock:"Navbar_friendsBlock__Lvnp0"}},12:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u});var a=n(133),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"17d70425-6a66-487e-950c-b3b64159370e"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},u={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},129:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(44),r=n(4),c={dialogs:[{id:1,name:"Alex"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Vera"},{id:5,name:"Viktor"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are your?"},{id:3,message:"Yo!"},{id:4,message:"Hello!"},{id:5,message:"Good day!"}]},o=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"User_userPhoto__3Vwa_",selectedPage:"User_selectedPage__KQlGW"}},135:function(e,t,n){e.exports=n.p+"static/media/spinning-circles.9044b20b.svg"},137:function(e,t,n){e.exports=n.p+"static/media/message.f0fb1b34.png"},139:function(e,t,n){e.exports=n.p+"static/media/intro.b8c9a73e.png"},141:function(e,t,n){e.exports={container:"NewsPage_container__BOtZ2"}},142:function(e,t,n){e.exports=n.p+"static/media/news.da3433fc.jpg"},143:function(e,t,n){e.exports={container:"MusicPage_container__1ohX0"}},144:function(e,t,n){e.exports=n.p+"static/media/music.a1cbdbd6.png"},145:function(e,t,n){e.exports={container:"VideoPage_container__mQad7"}},146:function(e,t,n){e.exports=n.p+"static/media/video.06fd9117.png"},147:function(e,t,n){e.exports={container:"FriendsPage_container__3cnLL"}},173:function(e,t,n){e.exports=n(299)},178:function(e,t,n){},179:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return f});var a=n(57),r=n(0),c=n.n(r),o=n(40),i=n.n(o),u=(n(49),n(90)),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",o)}},299:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(66),o=n.n(c),i=(n(178),n(35)),u=n(36),s=n(39),l=n(38),m=(n(179),n(10)),f=n.n(m),d=n(15),p=function(){return r.a.createElement("div",{className:f.a.navbar},r.a.createElement("div",{className:f.a.navbarItem},r.a.createElement("i",{className:"fa fa-address-book"}),r.a.createElement(d.b,{to:"/profile",className:f.a.navbarLink,activeClassName:f.a.active},"Profile")),r.a.createElement("div",{className:"".concat(f.a.navbarItem," ").concat(f.a.activel)},r.a.createElement("i",{className:"fa fa-comments"}),r.a.createElement(d.b,{to:"/dialogs",className:f.a.navbarLink,activeClassName:f.a.active},"Messages")),r.a.createElement("div",{className:"".concat(f.a.navbarItem," ").concat(f.a.activel)},r.a.createElement("i",{className:"fa fa-user"}),r.a.createElement(d.b,{to:"/users",className:f.a.navbarLink,activeClassName:f.a.active},"Users")),r.a.createElement("div",{className:f.a.navbarItem},r.a.createElement("i",{className:"fa fa-newspaper-o"}),r.a.createElement(d.b,{to:"/news",className:f.a.navbarLink,activeclassName:f.a.active},"News")),r.a.createElement("div",{className:f.a.navbarItem},r.a.createElement("i",{className:"fa fa-headphones"}),r.a.createElement(d.b,{to:"/music",className:f.a.navbarLink,activeclassName:f.a.active},"Music")),r.a.createElement("div",{className:f.a.navbarItem},r.a.createElement("i",{className:"fa fa-play"}),r.a.createElement(d.b,{to:"/video",className:f.a.navbarLink,activeclassName:f.a.active}," Video")),r.a.createElement("div",{className:f.a.navbarItem},r.a.createElement("i",{className:"fa fa-user-circle "}),r.a.createElement(d.b,{to:"/friends",className:f.a.navbarLink,activeclassName:f.a.active},"Friends")))},g=n(11),E=n(18),h=n(7),b=n.n(h),v=n(14),_=n(44),O=n(4),w=n(12),j=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(O.a)(Object(O.a)({},e),a):e})},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},S=function(e){return{type:"FOLLOW",userId:e}},C=function(e){return{type:"UNFOLLOW",userId:e}},N=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},y=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},k=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(v.a)(b.a.mark(function e(t,n,a,r){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(k(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},I=n(57),x=n(70),L=n(98),A=n(72),F=n.n(A),R=n(94),G=n.n(R),z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],m=1;m<=s;m++)l.push(m);var f=Math.ceil(s/u),d=Object(a.useState)(1),p=Object(L.a)(d,2),g=p[0],E=p[1],h=(g-1)*u+1,b=g*u;return r.a.createElement("div",{className:G()(F.a.paginator)},g>1&&r.a.createElement("button",{onClick:function(){E(g-1)}},"PREV"),l.filter(function(e){return e>=h&&e<=b}).map(function(e){return r.a.createElement("span",{className:G()(Object(x.a)({},F.a.selectedPage,c===e),F.a.pageNumber),key:e,onClick:function(t){o(e)}},e)}),f>g&&r.a.createElement("button",{onClick:function(){E(g+1)}},"NEXT"))},M=n(134),D=n.n(M),H=n(67),W=n.n(H),B=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:W.a,className:D.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){c(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Name:")," ",t.name)),r.a.createElement("div",null,r.a.createElement("p",null,t.status))),r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Country:")," ","user.location.country")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"City:")," ","user.location.city")))))},V=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,o=e.users,i=Object(I.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(z,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,o.map(function(e){return r.a.createElement(B,{user:e,followingInProgress:i.followingInProgress,key:e.id,unfollow:i.unfollow,follow:i.follow})})))},Q=n(48),X=n(9),Z=n(136),K=Object(Z.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),Y=function(e){return e.usersPage.pageSize},J=function(e){return e.usersPage.totalUsersCount},q=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.isFetching},ee=function(e){return e.usersPage.followingInProgress},te=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Q.a,null):null,r.a.createElement(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),ne=Object(X.d)(Object(E.b)(function(e){return console.log("mapStateToProps USERS"),{users:K(e),pageSize:Y(e),totalUsersCount:J(e),currentPage:q(e),isFetching:$(e),followingInProgress:ee(e)}},{follow:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(n){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,w.d.follow.bind(w.d),S);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(n){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,w.d.unfollow.bind(w.d),C);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:N,toggleFollowingProgress:k,getUsers:function(e,t){return function(){var n=Object(v.a)(b.a.mark(function n(a){var r;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(y(!0)),a(N(e)),n.next=4,w.d.getUsers(e,t);case 4:r=n.sent,a(y(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(te),ae=n(45),re=n.n(ae),ce=n(137),oe=n.n(ce),ie=function(e){return r.a.createElement("header",{className:re.a.header},r.a.createElement("div",{className:re.a.headerContainer},r.a.createElement("img",{className:re.a.headerLogo,src:oe.a}),r.a.createElement("p",{className:re.a.headerTitle},"\u0421heerful conversation!"),r.a.createElement("div",{className:re.a.headerLogin},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login"))))},ue=n(26),se={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},le=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},me=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},fe=function(){return function(){var e=Object(v.a)(b.a.mark(function e(t){var n,a,r,c,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.login,o=a.email,t(le(r,o,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},de=function(){return function(){var e=Object(v.a)(b.a.mark(function e(t){var n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(me(a));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},ge=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(ie,this.props)}}]),n}(r.a.Component),Ee=Object(E.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(v.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ge),he=n(130),be=n(25),ve=n(49),_e=n(40),Oe=n.n(_e),we=Object(he.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(be.c)("Email","email",[ve.b],be.a),Object(be.c)("Password","password",[ve.b],be.a,{type:"password"}),Object(be.c)(null,"rememberMe",[],be.a,{type:"checkbox"},"remember me"),a&&r.a.createElement("img",{src:a}),a&&Object(be.c)("Symbols from image","captcha",[ve.b],be.a,{}),n&&r.a.createElement("div",{className:Oe.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),je=Object(E.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,a){return function(){var r=Object(v.a)(b.a.mark(function r(c){var o,i;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.login(e,t,n,a);case 2:0===(o=r.sent).data.resultCode?c(fe()):(10===o.data.resultCode&&c(de()),i=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(ue.a)("login",{_error:i})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",{className:Oe.a.form},r.a.createElement("h1",null,"Login"),r.a.createElement(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"For the test vuing enter:"),r.a.createElement("br",null),"Email: free@samuraijs.com",r.a.createElement("br",null),"Password: free",r.a.createElement("br",null)))}),Pe=n(139),Se=n.n(Pe),Ce={initialized:!1,globalError:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},ye=n(97),ke=n(129),Te={},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;arguments.length>1&&arguments[1];return e},Ie=n(140),xe=n(131),Le=Object(X.c)({profilePage:ye.b,dialogsPage:ke.a,sidebar:Ue,usersPage:U,auth:pe,form:xe.a,app:Ne}),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,Fe=Object(X.e)(Le,Ae(Object(X.a)(Ie.a)));window.__store__=Fe;var Re=Fe,Ge=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(e,t))}},ze=n(141),Me=n.n(ze),De=n(142),He=n.n(De),We=function(e){var t=r.a.createElement("div",null,r.a.createElement("img",{src:He.a}),r.a.createElement("h3",null,"NewsTitle"));return r.a.createElement("div",{className:Me.a.container},t,t,t)},Be=n(143),Ve=n.n(Be),Qe=n(144),Xe=n.n(Qe),Ze=function(e){var t=r.a.createElement("div",null,r.a.createElement("img",{src:Xe.a}),r.a.createElement("h3",null,"TreckTitle"));return r.a.createElement("div",{className:Ve.a.container},t,t,t)},Ke=n(145),Ye=n.n(Ke),Je=n(146),qe=n.n(Je),$e=function(e){var t=r.a.createElement("div",null,r.a.createElement("img",{src:qe.a}),r.a.createElement("h3",null,"VideoTitle"));return r.a.createElement("div",{className:Ye.a.container},t,t,t)},et=n(147),tt=n.n(et),nt=function(e){var t=r.a.createElement("div",null,r.a.createElement("img",{src:W.a}),r.a.createElement("h3",null,"FriendName"));return r.a.createElement("div",{className:tt.a.container},t,t,t)},at=r.a.lazy(function(){return n.e(4).then(n.bind(null,307))}),rt=r.a.lazy(function(){return n.e(3).then(n.bind(null,306))}),ct=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"appPage"},r.a.createElement(Ee,null),r.a.createElement("div",{className:"appPageContainer"},r.a.createElement("div",{className:"appPageNavbar"},r.a.createElement(p,null)),r.a.createElement("div",{className:"appPageContent"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(g.a,{to:"/profile"})}}),r.a.createElement(g.b,{path:"/dialogs",render:Ge(at)}),r.a.createElement(g.b,{path:"/profile/:userId?",render:Ge(rt)}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(g.b,{path:"/news",render:function(){return r.a.createElement(We,null)}}),r.a.createElement(g.b,{path:"/music",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(g.b,{path:"/video",render:function(){return r.a.createElement($e,null)}}),r.a.createElement(g.b,{path:"/friends",render:function(){return r.a.createElement(nt,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})),r.a.createElement("img",{className:"appPageIntro",src:Se.a,alt:"intro"}))),r.a.createElement("footer",{className:"footer"})):r.a.createElement(Q.a,null)}}]),n}(a.Component),ot=Object(X.d)(g.g,Object(E.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(ct),it=function(e){return r.a.createElement(d.a,null,r.a.createElement(E.a,{store:Re},r.a.createElement(ot,null)))};o.a.render(r.a.createElement(it,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3HBC0",error:"FormsControls_error__mZxQB",formSummaryError:"FormsControls_formSummaryError__1n5UE",form:"FormsControls_form__1_0-k"}},45:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__2iLEE",headerLogo:"Header_headerLogo__2PK6f","header_logo-spin":"Header_header_logo-spin__3b3Lg",header:"Header_header__1OxMa",headerTitle:"Header_headerTitle__2zeUj",headerLogin:"Header_headerLogin__17W88"}},48:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(135),o=n.n(c);t.a=function(e){return r.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",display:"flex",backgroundColor:"rgba(255, 255, 255, 0.7)"}},r.a.createElement("img",{style:{margin:"auto"},src:o.a}))}},49:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){e.exports=n.p+"static/media/friend.595172f9.jpg"},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__2_QTX",pageNumber:"Paginator_pageNumber__1QRAE",selectedPage:"Paginator_selectedPage__3QZda"}},97:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return h});var a=n(7),r=n.n(a),c=n(14),o=n(44),i=n(4),u=n(12),s=n(26),l={posts:[{id:1,message:"Good luck!",likesCount:12},{id:2,message:"Frontend is my pleasure",likesCount:11},{id:3,message:"You are success if you like your job",likesCount:11},{id:4,message:"To be or not to be",likesCount:11}],profile:null,status:""},m=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(f(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n,a){var c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(d(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[173,1,2]]]);
//# sourceMappingURL=main.c6f6c73d.chunk.js.map