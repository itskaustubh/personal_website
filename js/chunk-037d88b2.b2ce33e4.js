(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-037d88b2"],{"371a":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l={class:"contact-wrap"},o=Object(a["h"])("p",{id:"contact-title",style:{"text-align":"center"}},"Hello Visitor!",-1),c={class:"text-wrap"},u=Object(a["g"])(" The seemingly impersonal contact form below will deliver your message personally and instantly to my Discord. "),i=Object(a["h"])("br",null,null,-1),r=Object(a["h"])("div",{id:"gap15"},null,-1),s=Object(a["g"])(" Not a fan of contact forms? Send me an email at "),m=Object(a["h"])("a",{id:"email-link",rel:"noreferrer noopener",href:"mailto:kaustubhpb@gmail.com"},"kaustubhpb@gmail.com",-1),b=Object(a["h"])("br",null,null,-1),d=Object(a["g"])(" Else, please fill the form below :) "),f=Object(a["h"])("br",null,null,-1),v=Object(a["h"])("div",{id:"gap15"},null,-1),p=Object(a["g"])(" Hey, my name is "),h=Object(a["g"])(" and I wanted to "),O=Object(a["g"])(" Get in touch with me at "),j=Object(a["h"])("div",{id:"gap15"},null,-1),g={class:"submit-wrap"},y={id:"helper-hint"},w={id:"submit-button"};function I(e,t,I,S,N,F){var k=Object(a["D"])("autogrow");return Object(a["t"])(),Object(a["d"])("div",l,[o,Object(a["h"])("div",c,[u,i,r,s,m,b,d,f,v,Object(a["h"])("form",{id:"myForm",onSubmit:t[12]||(t[12]=Object(a["N"])((function(){return S.submitContactInfo&&S.submitContactInfo.apply(S,arguments)}),["prevent"]))},[p,Object(a["L"])(Object(a["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return S.contactInfo.fullName=e}),onInput:t[2]||(t[2]=function(e){return S.validateInput("fullName","string")}),onFocus:t[3]||(t[3]=function(e){return S.setFocusState("firstName",!0)}),onBlur:t[4]||(t[4]=function(e){return S.setFocusState("firstName",!1)}),autocomplete:"off",type:"text",id:"first_name",name:"first_name",class:"required",placeholder:"Your Name",required:""},null,544),[[a["H"],S.contactInfo.fullName]]),h,Object(a["L"])(Object(a["h"])("textarea",{ref:"commentRef","onUpdate:modelValue":t[5]||(t[5]=function(e){return S.contactInfo.comments=e}),onFocus:t[6]||(t[6]=function(e){return S.setFocusState("comments",!0)}),onBlur:t[7]||(t[7]=function(e){return S.setFocusState("comments",!1)}),id:"comments",name:"comments",rows:"4",cols:"30",placeholder:"Say Hello!",autocomplete:"off",required:""},null,544),[[a["H"],S.contactInfo.comments],[k]]),O,Object(a["L"])(Object(a["h"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return S.contactInfo.email=e}),autocomplete:"off",onInput:t[9]||(t[9]=function(e){return S.validateInput("email","email")}),onFocus:t[10]||(t[10]=function(e){return S.setFocusState("email",!0)}),onBlur:t[11]||(t[11]=function(e){return S.setFocusState("email",!1)}),type:"text",id:"email",name:"email",class:"required",placeholder:"example@email.com",required:""},null,544),[[a["H"],S.contactInfo.email]]),j,Object(a["h"])("div",g,[Object(a["h"])("div",y,[Object(a["h"])("p",null,Object(a["F"])(S.helperHint),1)]),Object(a["h"])("button",w,[S.isSubmitting?(Object(a["t"])(),Object(a["d"])("img",{key:0,class:"spinner",alt:"Loading Spinner",src:n("f644")},null,8,["src"])):Object(a["e"])("",!0),Object(a["h"])("p",null,Object(a["F"])(S.submitButtonText),1)])])],32)])])}var S=n("3835"),N=(n("99af"),n("159b"),n("4fad"),n("ac1f"),n("5319"),n("498a"),n("d3b7"),n("fcc2")),F=n("8923"),k=n("0b6a"),x={setup:function(){var e=Object(a["y"])(N["h"].value["contact"]),t=Object(a["y"])(null),n=Object(a["y"])(!1),l=Object(a["y"])(""),o=Object(a["y"])("Submit"),c=Object(a["y"])(!1),u=null,i=Object(a["y"])({fullName:!1,comments:!1,email:!1}),r=function(e,t){k["a"]&&(i.value[e]=t,console.log("".concat(e," is now ").concat(t?"focused":"blured")))},s=Object(a["K"])((function(){var e=!0;Object.entries(i.value).forEach((function(t){var n=Object(S["a"])(t,2),a=(n[0],n[1]);a&&(e=!1)})),e?Object(N["d"])(!1):Object(N["d"])(!0)}));k["a"]||s(),Object(a["r"])((function(){e.value.loaded=!0,m()})),Object(a["p"])((function(){clearInterval(u)}));var m=function(){var e=["say hello","talk about stuff","know something","collaborate with you","ask about stuff","see if this reaches you"];console.log(t.value);var n=1;t.value.placeholder=e[0],u=setInterval((function(){t.value.placeholder=e[n],n=n+1===e.length?0:n+1}),2e3)},b=Object(a["y"])({fullName:"",email:"",comments:""});function d(e,t){console.log(b.value[e]),"Submit"!==o.value&&(o.value="Submit"),"string"===t?b.value[e]=b.value[e].replace(/[^a-zA-Z ]+/g,""):"email"===t&&(b.value[e]=b.value[e].trim(),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(b.value[e])&&""!=b.value[e]?(console.log("valid"),n.value=!0):(console.log("invalid"),n.value=!1))}var f=function(){n.value?window.navigator.onLine?""==b.value.fullName||""==b.value.email?(console.log("pls fill required"),l.value="Please fill required details"):(console.log("submit"),l.value="",p()):(console.log("no internet"),l.value="Check Internet Connection"):(console.log("invalid email"),l.value="Invalid Email")};function v(){b.value.fullName=b.value.email=b.value.comments=""}function p(){var e=b.value.fullName;c.value=!0,o.value="Submitting",fetch(F["a"],{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"ash",avatar_url:"https://cdn.discordapp.com/attachments/832596849402839070/832596902074908672/ash_the_mailman.png",embeds:[{color:171159,author:{name:e},title:"Message",thumbnail:{url:"https://cdn.discordapp.com/attachments/832596849402839070/832606302042980432/ashs_cat_.png"},description:b.value.comments,fields:[{name:"Email",value:b.value.email}]}]})}).then((function(e){console.log("data sent to discord"),l.value="I'll get back to you within 48 hours!",v(),c.value=!1,o.value="Submitted!"})).catch((function(e){console.log("ERROR: could not send data to discord"),console.log(e),c.value=!1,o.value="Error!",l.value="Could not submit form. Please try again later.",v()}))}return{submitContactInfo:f,contactInfo:b,validateInput:d,commentRef:t,helperHint:l,submitButtonText:o,isSubmitting:c,setFocusState:r}}};n("e726");x.render=I;t["default"]=x},c0d8:function(e,t,n){},e726:function(e,t,n){"use strict";n("c0d8")}}]);
//# sourceMappingURL=chunk-037d88b2.b2ce33e4.js.map