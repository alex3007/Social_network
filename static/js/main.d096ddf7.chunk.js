(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports={container:"MusicPage_container__1ohX0",item:"MusicPage_item__1ktjt"}},101:function(e,t,a){e.exports={container:"VideoPage_container__mQad7",item:"VideoPage_item__ABg2i"}},102:function(e,t,a){e.exports={container:"FriendsPage_container__3cnLL",item:"FriendsPage_item__3TtWw"}},103:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"d",function(){return d}),a.d(t,"c",function(){return p}),a.d(t,"g",function(){return g}),a.d(t,"e",function(){return h}),a.d(t,"f",function(){return E});var n=a(7),r=a.n(n),o=a(13),c=a(37),s=a(4),i=a(11),u=a(29),l={posts:[{id:1,message:"Frontend is my pleasure",likesCount:11},{id:2,message:"You are success if you like your job",likesCount:15}],profile:null,status:""},m=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:n=t.sent,a(f(n.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&a(f(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(a,n){var o,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}a(d(o)),t.next=10;break;case 8:return a(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[a]),newPostText:""});case"SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},11:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"b",function(){return c}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return i});var n=a(139),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3a7afa63-52bd-4a4c-9b69-b2c54203d877"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},s={me:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},135:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(37),r=a(4),o={dialogs:[{id:1,name:"Sveta"},{id:2,name:"Alex"}],messages:[{id:1,message:"Hi! How are your?"},{id:2,message:"I am fine!"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[{id:4,message:a}]),dialogs:[].concat(Object(n.a)(e.dialogs),[{id:1,name:"Alex"}])});default:return e}}},14:function(e,t,a){e.exports={navbar:"Navbar_navbar__2ipYm",navbarLink:"Navbar_navbarLink__2omA1",active:"Navbar_active__3K-MB"}},140:function(e,t,a){e.exports=a.p+"static/media/spinning-circles.9044b20b.svg"},142:function(e,t,a){e.exports=a.p+"static/media/message.f0fb1b34.png"},145:function(e,t,a){e.exports=a.p+"static/media/news.da3433fc.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/music.a1cbdbd6.png"},147:function(e,t,a){e.exports=a.p+"static/media/video.06fd9117.png"},17:function(e,t,a){e.exports={userPhoto:"User_userPhoto__3Vwa_",selectedPage:"User_selectedPage__KQlGW",userCard:"User_userCard__31UZH",userInfo:"User_userInfo__-fXdC",userBtn:"User_userBtn__1_xL-",buttonArea:"User_buttonArea__17OU4",usersContainer:"User_usersContainer__1sEId",users:"User_users__10Uy1",userData:"User_userData__3VTm7",preloader:"User_preloader__3VmGZ"}},173:function(e,t,a){e.exports=a(299)},178:function(e,t,a){},179:function(e,t,a){},26:function(e,t,a){e.exports={headerContainer:"Header_headerContainer__2iLEE",headerLogo:"Header_headerLogo__2PK6f","header_logo-spin":"Header_header_logo-spin__3b3Lg",header:"Header_header__1OxMa",headerTitle:"Header_headerTitle__2zeUj",headerLogin:"Header_headerLogin__17W88",headerBtn:"Header_headerBtn__32qiv",loginContainer:"Header_loginContainer__3Z4tf",nickName:"Header_nickName__3N_uA"}},27:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return m}),a.d(t,"c",function(){return f});var n=a(58),r=a(0),o=a.n(r),c=a(59),s=a.n(c),i=a(92),u=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,c=a&&n;return o.a.createElement("div",{className:s.a.formControl+" "+(c?s.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,n))},l=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,a,{className:s.a.textarea})))},m=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,a,{className:s.a.input})))},f=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))," ",c)}},28:function(e,t,a){e.exports={paginator:"Paginator_paginator__2_QTX",paginatorArea:"Paginator_paginatorArea__1DECI",pageNumbers:"Paginator_pageNumbers__18iZo",pageNumber:"Paginator_pageNumber__1QRAE",selectedPage:"Paginator_selectedPage__3QZda",buttons:"Paginator_buttons__3fGX4",pageBtn:"Paginator_pageBtn__5MXGM"}},299:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(68),c=a.n(o),s=(a(178),a(39)),i=a(40),u=a(43),l=a(42),m=(a(179),a(14)),f=a.n(m),d=a(15),p=function(){return r.a.createElement("div",{className:f.a.navbar},r.a.createElement(d.b,{to:"/profile",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-address-book"}),"Profile"),r.a.createElement(d.b,{to:"/dialogs",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-comments"}),"Messages"),r.a.createElement(d.b,{to:"/users",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-user"}),"Users"),r.a.createElement(d.b,{to:"/friends",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-user-circle "}),"Friends"),r.a.createElement(d.b,{to:"/news",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-newspaper-o"}),"News"),r.a.createElement(d.b,{to:"/music",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-headphones"}),"Music"),r.a.createElement(d.b,{to:"/video",className:f.a.navbarLink,activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-play"})," Video"))},g=a(10),h=a(19),E=a(7),b=a.n(E),_=a(13),v=a(37),O=a(4),w=a(11),N=function(e,t,a,n){return e.map(function(e){return e[a]===t?Object(O.a)(Object(O.a)({},e),n):e})},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},C=function(e){return{type:"FOLLOW",userId:e}},j=function(e){return{type:"UNFOLLOW",userId:e}},S=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},y=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},U=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},x=function(){var e=Object(_.a)(b.a.mark(function e(t,a,n,r){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(U(!0,a)),e.next=3,n(a);case 3:0==e.sent.data.resultCode&&t(r(a)),t(U(!1,a));case 6:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},T=a(58),L=a(73),I=a(104),A=a(28),F=a.n(A),B=a(96),G=a.n(B),R=function(e){for(var t=e.totalItemsCount,a=e.pageSize,o=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/a),l=[],m=1;m<=u;m++)l.push(m);var f=Math.ceil(u/i),d=Object(n.useState)(1),p=Object(I.a)(d,2),g=p[0],h=p[1],E=(g-1)*i+1,b=g*i;return r.a.createElement("div",{className:G()(F.a.paginator)},r.a.createElement("div",{className:F.a.paginatorArea},r.a.createElement("div",{className:F.a.pageNumbers},l.filter(function(e){return e>=E&&e<=b}).map(function(e){return r.a.createElement("span",{className:G()(Object(L.a)({},F.a.selectedPage,o===e),F.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),r.a.createElement("div",{className:F.a.buttons},f>g&&r.a.createElement("button",{className:F.a.pageBtn,onClick:function(){h(g+1)}},"NEXT"),g>1&&r.a.createElement("button",{className:F.a.pageBtn,onClick:function(){h(g-1)}},"PREV"))))},z=a(17),D=a.n(z),H=a(69),M=a.n(H),V=function(e){var t=e.user,a=e.followingInProgress,n=e.unfollow,o=e.follow;return r.a.createElement("div",{className:D.a.userCard},r.a.createElement("div",{className:D.a.userInfo},r.a.createElement("div",{className:D.a.userData},r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:M.a,className:D.a.userPhoto})),r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Name:"),r.a.createElement("br",null)," ",t.name)),r.a.createElement("div",null,r.a.createElement("p",null,t.status)))),r.a.createElement("div",{className:D.a.buttonArea},t.followed?r.a.createElement("button",{className:D.a.userBtn,disabled:a.some(function(e){return e===t.id}),onClick:function(){n(t.id)}},"Unfollow"):r.a.createElement("button",{className:D.a.userBtn,disabled:a.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))))},W=function(e){var t=e.currentPage,a=e.totalUsersCount,n=e.pageSize,o=e.onPageChanged,c=e.users,s=Object(T.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",{className:D.a.container},r.a.createElement(R,{currentPage:t,onPageChanged:o,totalItemsCount:a,pageSize:n}),r.a.createElement("div",{className:D.a.usersContainer},r.a.createElement("div",{className:D.a.users},c.map(function(e){return r.a.createElement(V,{user:e,followingInProgress:s.followingInProgress,key:e.id,unfollow:s.unfollow,follow:s.follow})}))))},X=a(50),Z=a(9),Q=a(141),q=Object(Q.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),K=function(e){return e.usersPage.pageSize},Y=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.isFetching},ee=function(e){return e.usersPage.followingInProgress},te=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.preloader},this.props.isFetching?r.a.createElement(X.a,null):null),r.a.createElement(W,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),ae=Object(Z.d)(Object(h.b)(function(e){return console.log("mapStateToProps USERS"),{users:q(e),pageSize:K(e),totalUsersCount:Y(e),currentPage:J(e),isFetching:$(e),followingInProgress:ee(e)}},{follow:function(e){return function(){var t=Object(_.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:x(a,e,w.d.follow.bind(w.d),C);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:x(a,e,w.d.unfollow.bind(w.d),j);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:S,toggleFollowingProgress:U,getUsers:function(e,t){return function(){var a=Object(_.a)(b.a.mark(function a(n){var r;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(y(!0)),n(S(e)),a.next=4,w.d.getUsers(e,t);case 4:r=a.sent,n(y(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}}))(te),ne=a(26),re=a.n(ne),oe=a(142),ce=a.n(oe),se=function(e){return r.a.createElement("header",{className:re.a.header},r.a.createElement("div",{className:re.a.headerContainer},r.a.createElement("img",{className:re.a.headerLogo,src:ce.a}),r.a.createElement("p",{className:re.a.headerTitle},"\u0421heerful conversation!"),r.a.createElement("div",{className:re.a.headerLogin},e.isAuth?r.a.createElement("div",{className:re.a.loginContainer},r.a.createElement("div",{className:re.a.nickName},e.login),r.a.createElement("button",{className:re.a.headerBtn,onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},r.a.createElement("button",{className:re.a.headerBtn},"Log in")))))},ie=a(29),ue={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},le=function(e,t,a,n){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},me=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},fe=function(){return function(){var e=Object(_.a)(b.a.mark(function e(t){var a,n,r,o,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,c=n.email,t(le(r,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},de=function(){return function(){var e=Object(_.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(me(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},ge=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(se,this.props)}}]),a}(r.a.Component),he=Object(h.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(_.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ge),Ee=a(136),be=a(27),_e=a(70),ve=a(47),Oe=a.n(ve),we=Object(Ee.a)({form:"login"})(function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(be.c)("Email","email",[_e.b],be.a),r.a.createElement("p",null," Enter: ",r.a.createElement("b",null,"free@samuraijs.com")),Object(be.c)("Password","password",[_e.b],be.a,{type:"password"}),r.a.createElement("p",null," Enter: ",r.a.createElement("b",null,"free")),r.a.createElement("div",{className:Oe.a.checkBox},Object(be.c)(null,"rememberMe",[],be.a,{type:"checkbox"}),r.a.createElement("p",null,"- remember me")),n&&r.a.createElement("img",{src:n}),n&&Object(be.c)("Symbols from image","captcha",[_e.b],be.a,{}),a&&r.a.createElement("div",{className:Oe.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",{className:"button"},"Log in")))}),Ne=Object(h.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,a,n){return function(){var r=Object(_.a)(b.a.mark(function r(o){var c,s;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.login(e,t,a,n);case 2:0===(c=r.sent).data.resultCode?o(fe()):(10===c.data.resultCode&&o(de()),s=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(ie.a)("login",{_error:s})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",{className:Oe.a.formContainer},r.a.createElement("div",{className:Oe.a.formCard},r.a.createElement("h2",null,"Log in"),r.a.createElement("div",{className:Oe.a.formBody},r.a.createElement(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),r.a.createElement("br",null))))}),Pe={initialized:!1,globalError:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},je=a(103),Se=a(135),ye={},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;arguments.length>1&&arguments[1];return e},xe=a(144),ke=a(137),Te=Object(Z.c)({profilePage:je.b,dialogsPage:Se.a,sidebar:Ue,usersPage:k,auth:pe,form:ke.a,app:Ce}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Ie=Object(Z.e)(Te,Le(Object(Z.a)(xe.a)));window.__store__=Ie;var Ae=Ie,Fe=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(e,t))}},Be=a(99),Ge=a.n(Be),Re=a(145),ze=a.n(Re),De=function(e){var t=r.a.createElement("div",{className:Ge.a.item},r.a.createElement("img",{src:ze.a}),r.a.createElement("h3",null,"NewsTitle"));return r.a.createElement("div",{className:Ge.a.container},t,t,t,t,t)},He=a(100),Me=a.n(He),Ve=a(146),We=a.n(Ve),Xe=function(e){var t=r.a.createElement("div",{className:Me.a.item},r.a.createElement("img",{src:We.a}),r.a.createElement("h3",null,"TreckTitle"));return r.a.createElement("div",{className:Me.a.container},t,t,t)},Ze=a(101),Qe=a.n(Ze),qe=a(147),Ke=a.n(qe),Ye=function(e){var t=r.a.createElement("div",{className:Qe.a.item},r.a.createElement("img",{src:Ke.a}),r.a.createElement("h3",null,"VideoTitle"));return r.a.createElement("div",{className:Qe.a.container},t,t,t)},Je=a(102),$e=a.n(Je),et=function(e){var t=r.a.createElement("div",{className:$e.a.item},r.a.createElement("img",{src:M.a}),r.a.createElement("h3",null,"FriendName"));return r.a.createElement("div",{className:$e.a.container},t,t,t,t,t,t)},tt=r.a.lazy(function(){return a.e(4).then(a.bind(null,307))}),at=r.a.lazy(function(){return a.e(3).then(a.bind(null,306))}),nt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"appPage"},r.a.createElement(he,null),r.a.createElement("div",{className:"appPageContainer"},r.a.createElement("div",{className:"appPageNavbar"},r.a.createElement(p,null)),r.a.createElement("div",{className:"appPageContent"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(g.a,{to:"/profile"})}}),r.a.createElement(g.b,{path:"/dialogs",render:Fe(tt)}),r.a.createElement(g.b,{path:"/profile/:userId?",render:Fe(at)}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(g.b,{path:"/news",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(g.b,{path:"/music",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(g.b,{path:"/video",render:function(){return r.a.createElement(Ye,null)}}),r.a.createElement(g.b,{path:"/friends",render:function(){return r.a.createElement(et,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))),r.a.createElement("footer",{className:"footer"})):r.a.createElement("div",{className:"preloaderArea"},r.a.createElement(X.a,null))}}]),a}(n.Component),rt=Object(Z.d)(g.g,Object(h.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(nt),ot=function(e){return r.a.createElement(d.a,null,r.a.createElement(h.a,{store:Ae},r.a.createElement(rt,null)))};c.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports={formContainer:"Login_formContainer__15y6r",formCard:"Login_formCard__3w0Qu",formBody:"Login_formBody__3XqeV",formSummaryError:"Login_formSummaryError__39aGS",checkBox:"Login_checkBox__xsPO5"}},50:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(140),c=a.n(o);t.a=function(e){return r.a.createElement("img",{style:{margin:"20px"},src:c.a})}},59:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3HBC0",error:"FormsControls_error__mZxQB",input:"FormsControls_input__3HBHe",textarea:"FormsControls_textarea__9pxud"}},69:function(e,t,a){e.exports=a.p+"static/media/friend.595172f9.jpg"},70:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},99:function(e,t,a){e.exports={container:"NewsPage_container__BOtZ2",item:"NewsPage_item__1LdqV"}}},[[173,1,2]]]);
//# sourceMappingURL=main.d096ddf7.chunk.js.map