var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{w as m,j as f,S as u,r as k}from"./iframe.1a178ac3.js";import{m as L}from"./make-decorator.66d6cfac.js";var p="links",l=m.document,h=m.HTMLElement,E=n(function(e){return f.getChannel().emit(k,e)},"navigate"),d=n(function(e){var r=e.target;if(r instanceof h){var v=r,i=v.dataset,o=i.sbKind,s=i.sbStory;(o||s)&&(e.preventDefault(),E({kind:o,story:s}))}},"linksListener"),a=!1,w=n(function(){a||(a=!0,l.addEventListener("click",d))},"on"),g=n(function(){a&&(a=!1,l.removeEventListener("click",d))},"off"),S=L({name:"withLinks",parameterName:p,wrapper:n(function(e,r){return w(),f.getChannel().once(u,g),e(r)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var y=[S];export{y as decorators};
//# sourceMappingURL=preview.1f9ebb9e.js.map
