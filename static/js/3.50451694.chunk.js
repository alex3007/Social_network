(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{297:function(e,t,a){e.exports={content:"ProfileInfo_content__11S3N",image_container:"ProfileInfo_image_container__UIQaj",content_image:"ProfileInfo_content_image__2dC2Z",description:"ProfileInfo_description__2MZeb"}},298:function(e,t,a){e.exports=a.p+"static/media/myphoto.ba0c4a8e.jpg"},299:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__2JCNy",textArea:"Myposts_textArea__2DBYT",buttonAddPost:"Myposts_buttonAddPost__1p-zJ"}},300:function(e,t,a){e.exports={item:"Post_item__1JrN_"}},301:function(e,t,a){e.exports={profile:"Profile_profile__1vY5l"}},302:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),l=a(38),r=a(37),s=a(39),c=a(0),i=a.n(c),u=a(97),m=a(297),p=a.n(m),f=a(49),d=a(298),b=a.n(d),E=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(u.a)(l,2),s=r[0],m=r[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s})))},v=a(24),h=a(130),g=a(40),P=a.n(g),O=Object(h.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:P.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))}),_=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement(j,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},j=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},k=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),d=m[0],v=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.description},i.a.createElement("img",{src:t.photos.large||b.a,className:p.a.mainPhoto}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),d?i.a.createElement(O,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){v(!1)})}}):i.a.createElement(_,{goToEditMode:function(){v(!0)},profile:t,isOwner:o}),i.a.createElement(E,{status:a,updateStatus:n})))},y=a(96),S=a(299),w=a.n(S),A=a(300),N=a.n(A),M=a(108),x=a.n(M),C=function(e){return i.a.createElement("div",{className:N.a.item},i.a.createElement("img",{src:x.a,alt:"avatar"}),e.message,i.a.createElement("p",null,"likes:",e.likesCount))},I=a(88),F=a(50),J=Object(F.a)(10),T=Object(h.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(I.a,{name:"newPostText",component:v.b,placeholder:"Post message",validate:[F.b,J]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),D=function(e){var t=e.posts.map(function(e){return i.a.createElement(C,{message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:w.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:w.a.posts},t))},U=a(17),B=Object(U.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(y.a)(t))}}})(D),z=a(301),V=a.n(z),L=function(e){return i.a.createElement("div",{className:V.a.profile},i.a.createElement(k,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(B,null))},Y=a(30),Z=a(7),Q=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(L,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(Z.d)(Object(U.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),Y.g)(Q)}}]);
//# sourceMappingURL=3.50451694.chunk.js.map