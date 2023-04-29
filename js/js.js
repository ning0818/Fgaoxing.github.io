Jian_var={},Jian={cache:{name:"FastJumpCache",dataUrl2Blob:e=>{for(var t=e.split(",")[0].split(":")[1].split(";")[0],n=atob(e.split(",")[1]),o=new ArrayBuffer(n.length),a=new Uint8Array(o),i=0;i<n.length;i++)a[i]=n.charCodeAt(i);return new Blob([a],{type:t})},blob2DataUrl:(e,t)=>{var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsDataURL(e)},read:e=>new Promise(((t,n)=>{caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function(e){e.text().then((e=>t(e)))})).catch((()=>{t(null)}))})),write:(e,t)=>new Promise(((n,o)=>{caches.open(Jian.cache.name).then((function(o){o.delete(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function(){o.put(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`),new Response(t))})).catch(),n()})).catch((()=>{o()}))})),getFile:(e,...t)=>new Promise(((n,o)=>{Jian.cache.read(e).then((function(o){o?(fetch(e).then((function(t){t.blob().then((function(t){Jian.cache.blob2DataUrl(t,(function(t){Jian.cache.write(e,t)}))})).catch((function(t){Jian.cache.write(e,"cat't cache")}))})).catch((function(t){Jian.cache.write(e,"cat't cache")})),(o="can't cache")?n({url:e,args:[...t]}):n({url:URL.createObjectURL(Jian.cache.dataUrl2Blob(o)),args:[...t]})):fetch(e).then((function(a){a.blob().then((function(a){Jian.cache.blob2DataUrl(a,(function(t){Jian.cache.write(e,t)})),n({url:URL.createObjectURL(Jian.cache.dataUrl2Blob(o)),args:[...t]})})).catch((function(o){Jian.cache.write(e,"cat't cache"),n({url:e,err:o,args:[...t]})}))})).catch((function(o){Jian.cache.write(e,"cat't cache"),n({url:e,err:o,args:[...t]})}))}))}))},debug:!0,console:{success:e=>{console.log(`%c${e}`,"border-left: 5px solid green;box-shadow: 0 0 32px 0 #79797951;text-decoration: none;border-radius: 3px;color:white !important;background:black;padding: 3px;")},warning:e=>{console.log(`%c${e}`,"border-left: 5px solid yellow;box-shadow: 0 0 32px 0 #79797951;text-decoration: none;border-radius: 3px;color:white !important;background:black;padding: 3px;")},info:e=>{console.log(`%c${e}`,"border-left: 5px solid dodgerblue;box-shadow: 0 0 32px 0 #79797951;text-decoration: none;border-radius: 3px;color:white !important;background:black;padding: 3px;")},error:e=>{console.log(`%c${e}`,"border-left: 5px solid red;box-shadow: 0 0 32px 0 #79797951;text-decoration: none;border-radius: 3px;color:white !important;background:black;padding: 3px;")},debug:e=>{console.log(`%c${e}`,"border-left: 5px solid gray;box-shadow: 0 0 32px 0 #79797951;text-decoration: none;border-radius: 3px;color:white !important;background:black;padding: 3px;")}},plugins:{lazyload:function(){var e=document.documentElement.clientHeight,t=document.querySelectorAll("img[lazyload]");Array.prototype.forEach.call(t,(function(t,n){var o;""!==t.getAttribute("lazyload")&&(o=t.getBoundingClientRect()).bottom>=0&&o.top<e&&function(){if(Jian.cache)return img_url=t.getAttribute("lazyload"),Jian.cache.getFile(img_url,dom=t).then((function(e){e.dom=e.args[0],console.log(e);let n=new Image;n.src=e.url,n.onload=function(){e.dom.src=n.src},n.onerror=function(){e.dom.setAttribute("lazyload",n.src)},Jian.console.success(img_url+" 从缓存加载成功");let o=new CustomEvent("Jian:lazyload:load",{detail:{url:img_url,dom:t}});document.dispatchEvent(o),window.dispatchEvent(o)})),void t.removeAttribute("lazyload");var e=new Image;e.src=t.getAttribute("lazyload"),e.onload=function(){t.src=e.src,window.dispatchEvent(new CustomEvent("Jian:lazyload:load",{detail:{url:e.src,dom:t}}))},e.onerror=function(){t.setAttribute("lazyload",e.src),window.dispatchEvent(new CustomEvent("Jian:lazyload:error",{detail:{url:e.src,dom:t}}))},Jian.debug&&(e.onload=function(){t.src=e.src,Jian.console.success(e.src+" 加载成功");let n=new CustomEvent("Jian:lazyload:load",{detail:{url:e.src,dom:t}});document.dispatchEvent(n),window.dispatchEvent(n)},e.onerror=function(){t.setAttribute("lazyload",e.src),Jian.console.error(e.src+" 加载失败");let n=new CustomEvent("Jian:lazyload:error",{detail:{url:e.src,dom:t}});document.dispatchEvent(n),window.dispatchEvent(n)}),t.removeAttribute("lazyload")}()}))},read:function(){if(0!==document.body.classList.value.indexOf("read")){document.body.classList.add("read"),document.body.addEventListener("click",Jian.plugins.read);let e=new CustomEvent("Jian:read",{detail:!0});document.dispatchEvent(e),window.dispatchEvent(e)}else{document.body.removeEventListener("click",Jian.plugins.read),document.body.classList.remove("read");let e=new CustomEvent("Jian:read",{detail:!1});document.dispatchEvent(e),window.dispatchEvent(e)}}},onload:{list:[],state:!1,add:function(e,...t){this.state?e(...t):this.list.push({f:e,e:t});let n=new CustomEvent("Jian:add_onload",{detail:{fn:e,e:t}});document.dispatchEvent(n),window.dispatchEvent(n)},run:function(){for(var e in this.state=!0,this.list)this.list[e].f(...this.list[e].e);let t=new CustomEvent("Jian:onload");document.dispatchEvent(t),window.dispatchEvent(t)}},dark:{set:function(e){Jian.console.info(e?"切换为暗色模式":"切换为亮色模式"),"boolean"!=typeof e&&Jian.console.error("set(n),n must be a boolean"),Jian_var.dark=e;let t=new CustomEvent("Jian:dark_set",{detail:Jian_var.dark});document.dispatchEvent(t),window.dispatchEvent(t),localStorage.setItem("dark",e),e?document.body.classList.add("dark"):document.body.classList.remove("dark")},change:function(){Jian_var.dark?this.set(!1):this.set(!0)}},load:{js:function(e,t=void 0){Jian.onload.add((function(e,t){var n=document.createElement("script");t=t||function(){};window.dispatchEvent(new CustomEvent("Jian:onload_js",{detail:{url:e,fn:t}})),n.type="text/javascript",n.onload=function(){Jian.console.success(e+" 加载成功"),t()},n.onerror=function(){Jian.console.error(e+" 加载失败")},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}),e,t)},css:function(e,t=void 0){Jian.onload.add((function(e,t=void 0){var n=document.createElement("link");t=t||function(){};window.dispatchEvent(new CustomEvent("Jian:onload_css",{detail:{url:e,fn:t}})),n.rel="stylesheet",n.href=e,n.onload=function(){Jian.console.success(e+" 加载成功"),t()},n.onerror=function(){Jian.console.error(e+" 加载失败")},document.getElementsByTagName("head")[0].appendChild(n)}),e,t)}},msg:function(e){document.msg=document.getElementById("msg");let t=`MsgCard-${(new Date).getTime()}`;document.msg.innerHTML=`<div class="card w-full" id="${t}"><div><div class="title"><i class="${e.icon||""}" style="${e.icon_color?"color:"+e.icon_color:""}"></i> ${e.title||""}</div><div class="text">${e.msg||e.text||""}</div></div></div>`+document.msg.innerHTML,"function"==typeof e.click&&document.getElementById(t).addEventListener("click",e.click);let n=new CustomEvent("Jian:onmsg",{detail:e});document.dispatchEvent(n),window.dispatchEvent(n),setTimeout((function(e){let t=new CustomEvent("Jian:add_onload",{detail:e});document.dispatchEvent(t),window.dispatchEvent(t),document.getElementById(e).remove()}),e.timeout||3e3,t)}},DOMLoadStartTime=(new Date).getTime(),window.addEventListener("DOMContentLoaded",(function(){Jian.console.info("DOM加载完毕，用时"+((new Date).getTime()-DOMLoadStartTime).toString()+"ms"),"true"===localStorage.getItem("dark")&&Jian.dark.set(!0),Jian.onload.run()})),"/"!==window.location.pathname[window.location.pathname.length-1]&&-1===window.location.pathname.split("/")[0].indexOf(".")&&"/"!==window.location.pathname&&history.pushState({},"",window.location.pathname+"/");