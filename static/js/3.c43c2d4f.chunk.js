(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{297:function(e,t,a){e.exports={content:"ProfileInfo_content__11S3N",image_container:"ProfileInfo_image_container__UIQaj",content_image:"ProfileInfo_content_image__2dC2Z",description:"ProfileInfo_description__2MZeb"}},298:function(e,t,a){e.exports=a.p+"static/media/myphoto.ba0c4a8e.jpg"},299:function(e,t,a){e.exports=a.p+"static/media/titlephoto.3903a2af.jpg"},300:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__2JCNy",textArea:"Myposts_textArea__2DBYT",buttonAddPost:"Myposts_buttonAddPost__1p-zJ"}},301:function(e,t,a){e.exports={item:"Post_item__1JrN_"}},302:function(e,t,a){e.exports={profile:"Profile_profile__1vY5l"}},303:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),l=a(38),r=a(37),s=a(39),c=a(0),i=a.n(c),u=a(97),m=a(297),p=a.n(m),f=(a(49),a(298)),d=a.n(f),b=(a(299),function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(u.a)(l,2),s=r[0],m=r[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s})))}),E=a(24),v=a(130),h=a(40),g=a.n(h),P=Object(v.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:g.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(E.c)("Full name","fullName",[],E.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(E.c)("About me","aboutMe",[],E.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(E.c)(e,"contacts."+e,[],E.a)))})))}),O=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement(j,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},j=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},_=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),f=m[0],E=m[1];if(!t)return i.a.createElement("div",{className:p.a.description},i.a.createElement("h2",null,i.a.createElement("b",null,"Name:")," FreeUser"),i.a.createElement("img",{src:d.a}));return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.description},i.a.createElement("img",{src:t.photos.large||d.a,className:p.a.mainPhoto}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),f?i.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){E(!1)})}}):i.a.createElement(O,{goToEditMode:function(){E(!0)},profile:t,isOwner:o}),i.a.createElement(b,{status:a,updateStatus:n})))},k=a(96),y=a(300),S=a.n(y),w=a(301),N=a.n(w),A=a(108),x=a.n(A),M=function(e){return i.a.createElement("div",{className:N.a.item},i.a.createElement("img",{src:x.a,alt:"avatar"}),e.message,i.a.createElement("p",null,"likes:",e.likesCount))},C=a(88),I=a(50),F=Object(I.a)(10),J=Object(v.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(C.a,{name:"newPostText",component:E.b,placeholder:"Post message",validate:[I.b,F]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),T=function(e){var t=e.posts.map(function(e){return i.a.createElement(M,{message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:S.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(J,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:S.a.posts},t))},U=a(17),D=Object(U.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(k.a)(t))}}})(T),B=a(302),z=a.n(B),V=function(e){return i.a.createElement("div",{className:z.a.profile},i.a.createElement(_,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(D,null))},L=a(30),Y=a(7),Z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(Y.d)(Object(U.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:k.d,getStatus:k.c,updateStatus:k.g,savePhoto:k.e,saveProfile:k.f}),L.g)(Z)}}]);
//# sourceMappingURL=3.c43c2d4f.chunk.js.map