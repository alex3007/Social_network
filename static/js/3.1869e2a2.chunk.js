(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,t,a){e.exports={content:"ProfileInfo_content__39a5u",image_container:"ProfileInfo_image_container__gBTuE",content_image:"ProfileInfo_content_image__1557L",description:"ProfileInfo_description__GlSf8"}},303:function(e,t,a){e.exports=a.p+"static/media/myphoto.ba0c4a8e.jpg"},304:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__231nS",textArea:"Myposts_textArea__3qR_A",buttonAddPost:"Myposts_buttonAddPost__e7hCj"}},305:function(e,t,a){e.exports={postItems:"Post_postItems__N_XmL",item:"Post_item__2519l"}},306:function(e,t,a){e.exports={profile:"Profile_profile__2UdPO"}},307:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),l=a(43),r=a(42),s=a(0),c=a.n(s),i=a(104),u=a(302),m=a.n(u),p=a(49),f=a(303),d=a.n(f),b=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(i.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)(function(){m(e.status)},[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status: ")," ",c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},E=a(26),v=a(136),h=a(55),g=a.n(h),P=Object(v.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:g.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(E.c)("Full name","fullName",[],E.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(E.c)("About me","aboutMe",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(E.c)(e,"contacts."+e,[],E.a)))})))}),_=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},O=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),f=Object(i.a)(u,2),E=f[0],v=f[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.description},c.a.createElement("img",{src:t.photos.large||d.a,className:m.a.mainPhoto}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),E?c.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){v(!1)})}}):c.a.createElement(_,{goToEditMode:function(){v(!0)},profile:t,isOwner:o}),c.a.createElement(b,{status:a,updateStatus:n})))},k=a(103),S=a(304),y=a.n(S),w=a(305),A=a.n(w),N=a(69),I=a.n(N),x=function(e){return c.a.createElement("div",{className:A.a.postItems},c.a.createElement("div",{className:A.a.item},c.a.createElement("img",{src:I.a,alt:"avatar"}),e.message),c.a.createElement("p",null,c.a.createElement("i",{className:"fa fa-heart"}),e.likesCount))},M=a(92),C=a(70),F=Object(C.a)(10),T=Object(v.a)({form:"ProfileAddNewPostForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(M.a,{name:"newPostText",component:E.b,placeholder:"Post message",validate:[C.b,F]})),c.a.createElement("div",null,c.a.createElement("button",{className:"button"},"Add post")))}),J=function(e){var t=e.posts.map(function(e){return c.a.createElement(x,{message:e.message,likesCount:e.likesCount})});c.a.createRef();return c.a.createElement("div",{className:y.a.postsBlock},c.a.createElement("h2",null,"My posts"),c.a.createElement("div",{className:y.a.posts},t),c.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText)}}))},U=a(18),B=Object(U.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(k.a)(t))}}})(J),D=a(306),L=a.n(D),V=function(e){return c.a.createElement("div",{className:L.a.profile},c.a.createElement(j,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(B,null))},z=a(10),R=a(9),q=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(R.d)(Object(U.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:k.d,getStatus:k.c,updateStatus:k.g,savePhoto:k.e,saveProfile:k.f}),z.g)(q)}}]);
//# sourceMappingURL=3.1869e2a2.chunk.js.map