(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{20:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(20),a(25)),l=a(3),s=a(23),u=a(1);var p=function(){return r.a.createElement("header",{className:"header page__header"},r.a.createElement("img",{className:"header__logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAiCAMAAABRP3qRAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAYCDfvxBAgJ/vH1DPr3AwkKBvJSFYsgAAAyNJREFUWMPFltF62yAMhSWEZChgO/X7v+swQQHirBv7ulQXxZYl+CsOCvBOs9kQXhn7Dd5vB4qkHV5ZYHi/HR8AxsMW8oAA4nYDsO0OAVYGXhy+i6rxbB7QAYgFpIDEhlBIgD6A9lK8N9rxiRgX5VnzwLDF8+/JwxmW4J12JEcOlMdEchvA7hMWHnEUCcBk44veq/fb90s8K88pIp+BWCJmHiFhQ2CObP55aXd6l//AA3YBIcPJwicCRJEFwO2ZBzPhZ+U5wpBXnPM8ARH5DzylQMnTamEj62/AKUZrMg/HGG/KY8dE/Ccem3M+/iqyUhu+awPaa+U5ZIinb+GZt8YzHHw5fpxnULT7eZ5j7V0XnuAikV1Mr4G7z4UqOeco5yTnHGvEmohiQjPLk/yg6CW7XM8jdFTb+eqjst5NX7VGvDwClkked6ZKr2bCwqN8zSK3E9gBXXk4dhFukoc1R5fCjieUhrBKuNGjM5jyGMyG6hMsj5/ag1zJwrDaUtc5HrBF0U2WpuOhqq5KIcrsWrgMetYAf3evpZ/M8Ygur47G0++cUaHd2hLi1sAXnpMcu/22czyQF6J22KWjiPpFObiO4Yvzvh1dFvuSNcXTFE1ZtF1VBmkV91b3gPD3PGvrIEo/x8OlpqrmjkfOD4taKl/rv3xQWuXKM+xno5vhqZPxfSTueMIxmMpi8/XNJ3zBY2sd2wnd53iqovW18eBrHjC3sf80nvFRa+xmeKpu/V3NBp7qk7A3ozINu61AfNmvS32WOZ6qaK4HuvGYr2stpUzLM8/+qKNOvc7yFJSi5oEHsju+Tm1Lp5Gn9cuuZU7x6MTahhrPOJmswiUrrNhNYBtPazmeuwiCaR7R376RRzrFGrqfQu5uTPioT+rIbw8v8Jm0zvPAXZ2m8TQ34eOO4dQXS2TwD6nsZ6CYTX9ZDntGSKyKn+ZZ682+8bSiHN5Gr4db249NtoxpuOb67kLiyZdhg1kebbo48jSgsdcE33yWx4vS9hxBG8zyaMEJBh59i3rT40fezVcahBZXyHGM8Dnp280IYjCjT0L28XOcmDFigxn7BXfVTDScMGEQAAAAAElFTkSuQmCC",alt:"\u0437\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043b\u043e\u0433\u043e\u0442\u0438\u043f, \u043d\u043e \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}))},m=r.a.createContext();var d=function(e){e.cardId;var t=e.card,a=e.onCardClick,o=e.onCardLike,c=e.onCardDelete,i=Object(n.useCallback)((function(){a(t)}),[a,t]),l=Object(n.useCallback)((function(){o(t)}),[o,t]),s=Object(n.useCallback)((function(){c(t)}),[c,t]),u=r.a.useContext(m),p=t.ownerId===u._id,d=t.likes.some((function(e){return e._id===u._id})),f="photo-card__delete-button ".concat(p&&"photo-card__delete-button_visible"),h="photo-card__like ".concat(d&&"photo-card__like_active");return r.a.createElement("li",null,r.a.createElement("figure",{className:"photo-card"},r.a.createElement("button",{type:"button",className:f,onClick:s}),r.a.createElement("img",{className:"photo-card__photo",src:t.src,alt:t.alt,onClick:i}),r.a.createElement("figcaption",{className:"photo-card__caption"},r.a.createElement("h2",{className:"photo-card__description"},t.description),r.a.createElement("div",{className:"photo-card__like-container"},r.a.createElement("button",{type:"button",className:h,onClick:l}),r.a.createElement("p",{className:"photo-card__likes-amount"},t.likesAmount)))))};var f=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,o=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDeleteClick,s=r.a.useContext(m);return s?r.a.createElement("main",{className:"content-container page__content-container"},r.a.createElement("section",{className:"profile content-container__profile"},r.a.createElement("div",{className:"profile__avatar-overlay"},r.a.createElement("img",{className:"profile__avatar",alt:"\u0437\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043d\u043e \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",src:s.avatar}),r.a.createElement("button",{type:"button",className:"profile__avatar-change-button",onClick:n})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__name-and-button-container"},r.a.createElement("h1",{className:"profile__name"},s.name),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:t})),r.a.createElement("p",{className:"profile__description"},s.about)),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),r.a.createElement("section",{className:"photo-cards"},r.a.createElement("ul",{className:"photo-cards__list"},c.map((function(e){return r.a.createElement(d,{key:e.id,card:e,onCardClick:o,onCardLike:i,onCardDelete:l})}))))):null};var h=function(){return r.a.createElement("footer",{className:"footer page__footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},_=a(13),b=a(14),v=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(_.a)(this,e),this.baseUrl=a,this.headers=n}return Object(b.a)(e,[{key:"getUserData",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"createCard",value:function(e){return{src:e.link,alt:e.name,description:e.name,likes:e.likes,likesAmount:e.likes.length,id:e._id,ownerId:e.owner._id}}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var a=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({link:e,name:t})}).then((function(e){return a._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return a._getResponseData(e)})):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return a._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"loadAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserData()])}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"281eea5d-a9b0-4240-a494-1ec91d19957f","Content-Type":"application/json"}});var E=function(e){return r.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},r.a.createElement("form",{className:"popup__form",name:"".concat(e.name),onSubmit:e.onSubmit,noValidate:!0},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),r.a.createElement("h2",{className:"popup__header"},"".concat(e.title)),e.children))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onDeletionConfirm;return r.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-card",isOpen:t,onClose:a},r.a.createElement("button",{type:"button",className:"popup__submit-button",onClick:n},"\u0414\u0430"))},k=a(8),g=a(5),N={userName:{required:function(e){return""===e},minLength:function(e){return e.length<2},maxLength:function(e){return e.length>40}},profileDescription:{required:function(e){return""===e},minLength:function(e){return e.length<2},maxLength:function(e){return e.length>200}}},O=new(function(){function e(){Object(_.a)(this,e)}return Object(b.a)(e,[{key:"validateEditProfileNameInput",value:function(e){var t={};return Object.keys(N.userName).forEach((function(a){var n=N.userName[a](e);t[a]=n})),t}},{key:"validateEditProfileDescriptionInput",value:function(e){var t={};return Object.keys(N.profileDescription).forEach((function(a){var n=N.profileDescription[a](e);t[a]=n})),t}}]),e}());var A=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateUser,c=r.a.useState({userName:"",profileDescription:""}),i=Object(l.a)(c,2),s=i[0],u=i[1],p=r.a.useState({userNameErrors:{required:!1,minLength:!1,maxLength:!1},profileDescriptionErrors:{required:!1,minLength:!1,maxLength:!1}}),d=Object(l.a)(p,2),f=d[0],h=d[1],_=r.a.useContext(m),b=Object(n.useCallback)((function(e){e.preventDefault(),o({name:s.userName,about:s.profileDescription})}),[o,s]);r.a.useEffect((function(){_&&u({userName:_.name,profileDescription:_.about})}),[_]);var v=Object(n.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(k.a)({},a,n))}));var r=O.validateEditProfileNameInput(n);h((function(e){return Object(g.a)(Object(g.a)({},e),{},{userNameErrors:r})}))}),[u,h]),C=Object(n.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(k.a)({},a,n))}));var r=O.validateEditProfileDescriptionInput(n);h((function(e){return Object(g.a)(Object(g.a)({},e),{},{profileDescriptionErrors:r})}))}),[u,h]),N=Object.values(f.userNameErrors).some(Boolean),A=Object.values(f.profileDescriptionErrors).some(Boolean),j=N||A;return r.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t,onClose:a,onSubmit:b},r.a.createElement("label",{className:"popup__input"},r.a.createElement("input",{className:"popup__field popup__field_name",value:s.userName,onChange:v,type:"text",name:"userName",placeholder:"\u0418\u043c\u044f"}),f.userNameErrors.required&&r.a.createElement("span",{className:"popup__field-error"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),f.userNameErrors.minLength&&r.a.createElement("span",{className:"popup__field-error"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 - 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),f.userNameErrors.maxLength&&r.a.createElement("span",{className:"popup__field-error"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 - 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),r.a.createElement("label",{className:"popup__input"},r.a.createElement("input",{className:"popup__field popup__field_description",value:s.profileDescription,onChange:C,type:"text",name:"profileDescription",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),f.profileDescriptionErrors.required&&r.a.createElement("span",{className:"popup__field-error"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),f.profileDescriptionErrors.minLength&&r.a.createElement("span",{className:"popup__field-error"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f - 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),f.profileDescriptionErrors.maxLength&&r.a.createElement("span",{className:"popup__field-error"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f - 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),r.a.createElement("button",{disabled:j,className:"popup__submit-button",onClick:b,name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var j=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateAvatar,c=r.a.useRef(null),i=Object(n.useCallback)((function(e){e.preventDefault(),o({avatar:c.current.value})}),[o,c]);return r.a.useEffect((function(e){e||(c.current.value="")}),[t]),r.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",isOpen:t,onClose:a,onUpdateAvatar:i},r.a.createElement("label",{className:"popup__input"},r.a.createElement("input",{className:"popup__field popup__field popup__field_photo-link",ref:c,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-link",required:!0}),r.a.createElement("span",{className:"popup__field-error"})),r.a.createElement("button",{className:"popup__submit-button",name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:i},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var D=function(e){var t=e.isOpen,a=e.onClose,o=e.onAddCard,c=r.a.useState({link:"",description:""}),i=Object(l.a)(c,2),s=i[0],u=i[1],p=Object(n.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(k.a)({},a,n))}))}),[u]),m=Object(n.useCallback)((function(e){e.preventDefault(),o({link:s.link,photoDescription:s.description})}),[o,s]);return r.a.useEffect((function(){t||u({link:"",description:""})}),[t]),r.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-photo",isOpen:t,onClose:a,onSubmit:m},r.a.createElement("label",{className:"popup__input"},r.a.createElement("input",{className:"popup__field popup__field_photo-description",value:s.description,onChange:p,type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"description",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{className:"popup__field-error"})),r.a.createElement("label",{className:"popup__input"},r.a.createElement("input",{className:"popup__field popup__field_photo-link",value:s.link,onChange:p,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),r.a.createElement("span",{className:"popup__field-error"})),r.a.createElement("button",{className:"popup__submit-button",name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:m},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};var y=function(e){var t=e.card,a=e.onClose;return t?r.a.createElement("div",{className:"popup popup_opened popup_type_photo-view",onClick:a},r.a.createElement("figure",{className:"popup__photo-card-fullscreen"},r.a.createElement("button",{type:"button",className:"popup__close-button popup__close-button_small",onClick:a}),r.a.createElement("img",{className:"popup__photo-fullscreen",src:t.src,alt:t.alt}),r.a.createElement("figcaption",{className:"popup__photo-caption"},t.description))):null};var S=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=r.a.useState(!1),d=Object(l.a)(c,2),_=d[0],b=d[1],E=r.a.useState(!1),k=Object(l.a)(E,2),g=k[0],N=k[1],O=r.a.useState(!1),S=Object(l.a)(O,2),U=S[0],w=S[1],P=r.a.useState(null),x=Object(l.a)(P,2),B=x[0],L=x[1],M=r.a.useState(null),R=Object(l.a)(M,2),T=R[0],q=R[1],I=r.a.useState(null),F=Object(l.a)(I,2),X=F[0],Z=F[1],G=r.a.useState([]),H=Object(l.a)(G,2),J=H[0],Y=H[1];r.a.useEffect((function(){v.loadAppInfo().then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1],r=a.map((function(e){return v.createCard(e)}));Y(r),Z(n)})).catch((function(e){console.log(e)}))}),[]);var z=Object(n.useCallback)((function(e){var t=e.likes.some((function(e){return e._id===X._id}));v.changeLikeCardStatus(e.id,t).then((function(t){t=v.createCard(t);var a=J.map((function(a){return a.id===e.id?t:a}));Y(a)})).catch((function(e){console.log(e)}))}),[Y,J,X]),K=Object(n.useCallback)((function(){o(!1),b(!1),N(!1),w(!1),q(null)}),[o,b,N,w,q]),W=Object(n.useCallback)((function(){var e=B.id;v.deleteCard(e).then((function(){var t=J.filter((function(t){return t.id!==e}));Y(t)})).then((function(){K()})).catch((function(e){alert(e)}))}),[K,B,J]),Q=Object(n.useCallback)((function(e){v.addNewCard(e.link,e.photoDescription).then((function(e){e=v.createCard(e),Y([e].concat(Object(i.a)(J))),K()})).catch((function(e){console.log(e)}))}),[J,K]),V=Object(n.useCallback)((function(e){v.editProfile(e).then((function(e){Z(e),K()})).catch((function(e){console.log(e)}))}),[K]),$=Object(n.useCallback)((function(e){v.changeAvatar(e.avatar).then((function(e){Z(e),K()})).catch((function(e){console.log(e)}))}),[K]),ee=Object(n.useCallback)((function(e){L(e)}),[L]);return r.a.createElement(m.Provider,{value:X},r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(f,{onEditProfile:function(){return o(!0)},onAddPlace:function(){return b(!0)},onEditAvatar:function(){return N(!0)},onCardClick:function(e){q(e)},cards:J,onCardLike:z,onCardDeleteClick:function(e){w(!0),ee(e)}})),r.a.createElement(u.a,{path:"/sign-up"},"Register"),r.a.createElement(u.a,{path:"/sign-in"},"Login")),r.a.createElement(h,null),a&&r.a.createElement(A,{isOpen:a,onClose:K,onUpdateUser:V}),r.a.createElement(C,{isOpen:U,onClose:K,onDeletionConfirm:W}),_&&r.a.createElement(D,{isOpen:_,onClose:K,onAddCard:Q}),g&&r.a.createElement(j,{isOpen:g,onClose:K,onUpdateAvatar:$}),r.a.createElement(y,{name:"change-avatar",card:T,onClose:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("page")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.28d2989b.chunk.js.map