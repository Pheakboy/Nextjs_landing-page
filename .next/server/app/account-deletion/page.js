(()=>{var e={};e.id=203,e.ids=[203],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(260),n=r(8203),o=r(5155),i=r.n(o),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["account-deletion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9208)),"E:\\Web\\instafoodkh-landing-page\\src\\app\\account-deletion\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"E:\\Web\\instafoodkh-landing-page\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\Web\\instafoodkh-landing-page\\src\\app\\account-deletion\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/account-deletion/page",pathname:"/account-deletion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4298:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9607,23)),Promise.resolve().then(r.t.bind(r,1066,23)),Promise.resolve().then(r.bind(r,9847))},7346:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8531,23)),Promise.resolve().then(r.t.bind(r,1902,23)),Promise.resolve().then(r.bind(r,5291))},7024:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},6752:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6571:()=>{},5891:()=>{},5291:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(5512),n=r(8009);function o(){let[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[i,a]=(0,n.useState)("");return(0,s.jsxs)("div",{className:"p-6 w-full",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Manage your account"}),(0,s.jsx)("p",{className:"text-gray-700 mb-4",children:"Deleting your account will:"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 mb-4",children:[(0,s.jsx)("li",{children:"Delete your account info and profile photo"}),(0,s.jsx)("li",{children:"Delete your order history"}),(0,s.jsx)("li",{children:"Delete your delivery addresses"})]}),(0,s.jsx)("p",{className:"font-semibold text-gray-800",children:"Enter your phone number to confirm deletion."}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 font-medium",children:"Phone number"}),(0,s.jsxs)("div",{className:"flex items-center border max-w-sm p-3 mt-1 rounded-lg bg-gray-100",children:[(0,s.jsx)("span",{className:"text-gray-700 font-semibold mr-4",children:"+855"}),(0,s.jsx)("input",{type:"text",placeholder:"Your phone number",className:"bg-transparent outline-none w-full text-gray-900",value:e,onChange:e=>t(e.target.value)})]}),r&&(0,s.jsx)("p",{className:"text-red-600 text-sm mt-1",children:r}),i&&(0,s.jsx)("p",{className:"text-green-600 text-sm mt-1",children:i})]}),(0,s.jsx)("button",{className:"mt-6 bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700",onClick:()=>{if(!e.trim()){o("Phone number is required."),a("");return}if(e.length<8||e.length>10||isNaN(Number(e))){o("Invalid phone number. Must be 8-10 digits."),a("");return}o(""),a("Account deleted successfully."),console.log("Phone Number:",e),t("")},children:"Delete My Account"})]})}},9208:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(2740),n=r(5635),o=r(9607),i=r.n(o),a=r(767),l=r(9847);let d={title:"Account Deletion "};function c(){return(0,s.jsxs)("div",{className:"max-w-3xl mx-auto py-5 text-gray-700",children:[(0,s.jsx)("header",{className:"w-full py-4 flex justify-center relative",children:(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)(n.default,{src:"/image/instaFood_logo.jpg",alt:"InstaFoodKH Logo",width:124,height:124})})}),(0,s.jsx)(l.default,{}),(0,s.jsx)(a.A,{})]})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>i});var s=r(2740),n=r(5076),o=r.n(n);r(1135);let i={description:"Find great restaurants for your daily meal today.",openGraph:{description:"Find great restaurants for your daily meal today.",images:[{url:"https://87a0-96-9-79-154.ngrok-free.app/image/instaFood_logo.jpg",width:800,height:600,alt:"InstaFoodKH Logo"}]}};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${o().className} `,children:e})})}},9847:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Web\\\\instafoodkh-landing-page\\\\src\\\\components\\\\accountDelete\\\\AccountDeleteComponent.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Web\\instafoodkh-landing-page\\src\\components\\accountDelete\\AccountDeleteComponent.tsx","default")},767:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(2740),n=r(5635),o=r(9607),i=r.n(o);function a(){return(0,s.jsxs)("footer",{className:"w-full pt-8 pb-3 text-center md:mx-10",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 py-4  font-medium",children:[(0,s.jsx)(i(),{href:"https://web.facebook.com/instafoodkh/?locale=km_KH&_rdc=1&_rdr",children:(0,s.jsx)(n.default,{src:"/image/facebook_icon.svg",alt:"Facebook",width:30,height:30})}),(0,s.jsx)(i(),{href:"https://www.instagram.com/instafoodkh/?hl=en",children:(0,s.jsx)(n.default,{src:"/image/instagram_icon.svg",alt:"Instagram",width:30,height:30})})]}),(0,s.jsxs)("p",{className:"text-textFooter mt-4 font-medium max-w-xs mx-auto",children:["Email Address:",(0,s.jsx)(i(),{href:"mailto:instafoodkh@gmail.com",className:"text-textFooter underline ml-1",children:"instafoodkh@gmail.com"})]}),(0,s.jsxs)("p",{className:"text-textFooter mt-4 font-medium max-w-xs mx-auto",children:["Delivery Hotline:"," ",(0,s.jsx)(i(),{href:"tel:011015663668",className:"underline cursor-pointer",children:"011/015 663 668"})]}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 pt-6",children:[(0,s.jsx)(i(),{href:"/privacy",children:(0,s.jsx)("p",{className:"text-textFooter underline cursor-pointer mx-1",children:"Terms & Privacy"})}),(0,s.jsx)(i(),{href:"/privacy",children:(0,s.jsx)("p",{className:"text-textFooter underline cursor-pointer",children:"Privacy Policy"})}),(0,s.jsx)("p",{className:"text-textFooter",children:"Copyright \xa9 InstaFoodKH 2017"})]})]})}},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(8077);let n=async e=>[{type:"image/x-icon",sizes:"500x500",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,862,38],()=>r(7647));module.exports=s})();