(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{301:function(e,t,a){e.exports={profileContainer:"ProfileInfo_profileContainer__3nhQN",profile:"ProfileInfo_profile__1fFgQ",profileForm:"ProfileInfo_profileForm__2lXCu",profileData:"ProfileInfo_profileData__2HAYd",profileImage:"ProfileInfo_profileImage__2Sh-D",profileDescription:"ProfileInfo_profileDescription__2JCq6",title:"ProfileInfo_title__3iprF",profileStatus:"ProfileInfo_profileStatus__1tjd5",changeImage:"ProfileInfo_changeImage___VmBw",changeImageLabel:"ProfileInfo_changeImageLabel__1WPci"}},302:function(e,t,a){e.exports=a.p+"static/media/myphoto.ba0c4a8e.jpg"},303:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__231nS",textArea:"Myposts_textArea__3qR_A",posts:"Myposts_posts__3yiQy"}},304:function(e,t,a){e.exports={postItems:"Post_postItems__N_XmL",item:"Post_item__2519l"}},305:function(e,t,a){e.exports={profile:"Profile_profile__2UdPO"}},306:function(e,t,a){"use strict";a.r(t);var n=a(39),l=a(40),o=a(43),r=a(42),s=a(0),i=a.n(s),c=a(104),u=a(301),m=a.n(u),f=a(50),p=a(302),d=a.n(p),E=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(c.a)(o,2),u=r[0],m=r[1];Object(s.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(u)},value:u})))},b=a(27),h=a(136),v=Object(h.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=(e.profile,e.error);return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",{className:m.a.profileForm},a&&i.a.createElement("div",{className:m.a.formSummaryError},a),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(b.c)("Full name","fullName",[],b.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(b.c)("","lookingForAJob",[],b.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(b.c)("My professional skills","lookingForAJobDescription",[],b.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(b.c)("About me","aboutMe",[],b.b)),i.a.createElement("div",null,i.a.createElement("button",{className:"button"},"Save"))))}),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:m.a.profileForm},i.a.createElement("div",{className:m.a.profileData},i.a.createElement("b",null,"Full name:")," ",t.fullName,i.a.createElement("hr",null)),i.a.createElement("div",{className:m.a.profileData},i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no",i.a.createElement("hr",null)),t.lookingForAJob&&i.a.createElement("div",{className:m.a.profileData},i.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription,i.a.createElement("hr",null)),i.a.createElement("div",{className:m.a.profileData},i.a.createElement("b",null,"About me:")," ",t.aboutMe,i.a.createElement("hr",null)),a&&i.a.createElement("div",null,i.a.createElement("button",{className:"button",onClick:n},"Edit")))},_=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),p=Object(c.a)(u,2),b=p[0],h=p[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",{className:m.a.profileContainer},i.a.createElement("div",{className:m.a.profile},i.a.createElement("div",{className:m.a.profileImage},i.a.createElement("img",{src:t.photos.large||d.a,className:m.a.mainPhoto,alt:"avatar"}),l&&i.a.createElement("div",null,i.a.createElement("input",{className:m.a.changeImage,type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),i.a.createElement("label",{className:m.a.changeImageLabel},"Change image"))),i.a.createElement("div",{className:m.a.profileDescription},b?i.a.createElement(v,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){h(!1)})}}):i.a.createElement(g,{goToEditMode:function(){h(!0)},profile:t,isOwner:l})),i.a.createElement("div",{className:m.a.profileStatus},i.a.createElement(E,{status:a,updateStatus:n}))))},P=a(103),N=a(303),O=a.n(N),I=a(304),j=a.n(I),S=a(69),k=a.n(S),y=function(e){return i.a.createElement("div",{className:j.a.postItems},i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:k.a,alt:"avatar"}),e.message),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-heart"}),e.likesCount))},w=a(92),A=a(70),F=Object(A.a)(55),D=Object(h.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(w.a,{name:"newPostText",component:b.b,placeholder:"Post message",validate:[A.b,F]})),i.a.createElement("div",null,i.a.createElement("button",{className:"button"},"Add post")))}),C=function(e){var t=e.posts.map(function(e){return i.a.createElement(y,{message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:O.a.postsBlock},i.a.createElement("h2",null,"My posts"),i.a.createElement("div",{className:O.a.posts},t),i.a.createElement("div",{className:O.a.textArea},i.a.createElement(D,{onSubmit:function(t){e.addPost(t.newPostText)}})))},x=a(19),M=Object(x.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(P.a)(t))}}})(C),J=a(305),T=a.n(J),L=function(e){return i.a.createElement("div",{className:T.a.profile},i.a.createElement(_,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(M,null))},U=a(10),B=a(9),Q=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(L,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(B.d)(Object(x.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:P.d,getStatus:P.c,updateStatus:P.g,savePhoto:P.e,saveProfile:P.f}),U.g)(Q)}}]);
//# sourceMappingURL=3.c0f58ec7.chunk.js.map