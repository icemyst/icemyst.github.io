function o(){"/photos/"==location.pathname&&function(){let o="https://memos.nesxc.com";fetch(o+"/api/v1/memo?openId=77099f6f-86bf-4c45-baa6-d08428c0bf27&creatorId=70&tag=相册").then((o=>o.json())).then((a=>{let t="",l=[];a.forEach((a=>{let t=a.content.match(/\!\[.*?\]\(.*?\)/g);t&&(l=l.concat(t)),a.resourceList.length&&a.resourceList.forEach((a=>{l.push(a.externalLink?`![](${a.externalLink})`:`![](${o}/o/r/${a.id}/${a.publicId}/${a.filename})`)}))})),l&&l.forEach((o=>{let a,l,e=o.replace(/!\[.*?\]\((.*?)\)/g,"$1"),s=o.replace(/!\[(.*?)\]\(.*?\)/g,"$1");-1!=s.indexOf(" ")?(a=s.split(" ")[0],l=s.split(" ")[1]):l=s,t+=`<div class="gallery-photo"><a href="${e}" data-fancybox="gallery" class="fancybox" data-thumb="${e}"><img class="no-lazyload photo-img" loading='lazy' decoding="async" src="${e}"></a>`,l&&(t+=`<span class="photo-title">${l}</span>`),a&&(t+=`<span class="photo-time">${a}</span>`),t+="</div>"})),document.querySelector(".gallery-photos.page").innerHTML=t,imgStatus.watch(".photo-img",(()=>{waterfall(".gallery-photos")})),window.Lately&&Lately.init({target:".photo-time"})})).catch()}()}o(),document.addEventListener("pjax:complete",o),window.onresize=()=>{"/photos/"==location.pathname&&waterfall(".gallery-photos")};