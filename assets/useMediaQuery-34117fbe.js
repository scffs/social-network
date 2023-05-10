import{m as e,_ as t,w as r,T as a,g as n,s as o,r as i,e as s,i as l,a as c,f as d,h as u,j as p,k as m,l as f,n as h,o as g,p as y}from"./App-ad216d79.js";import{r as v,j as b,R as k}from"./index-1543191d.js";const x="undefined"!=typeof window?v.useLayoutEffect:v.useEffect,_=e=>e,w=(()=>{let e=_;return{configure(t){e=t},generate:t=>e(t),reset(){e=_}}})();var P=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,S=e((function(e){return P.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),C=function(e){return"theme"!==e},A=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?S:C},T=function(e,t,r){var a;if(t){var n=t.shouldForwardProp;a=e.__emotion_forwardProp&&n?function(t){return e.__emotion_forwardProp(t)&&n(t)}:n}return"function"!=typeof a&&r&&(a=e.__emotion_forwardProp),a},M=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return i(t,r,a),s((function(){return l(t,r,a)})),null},L=function e(i,s){var l,c,d=i.__emotion_real===i,u=d&&i.__emotion_base||i;void 0!==s&&(l=s.label,c=s.target);var p=T(i,s,d),m=p||A(u),f=!m("as");return function(){var h=arguments,g=d&&void 0!==i.__emotion_styles?i.__emotion_styles.slice(0):[];if(void 0!==l&&g.push("label:"+l+";"),null==h[0]||void 0===h[0].raw)g.push.apply(g,h);else{g.push(h[0][0]);for(var y=h.length,b=1;b<y;b++)g.push(h[b],h[0][b])}var k=r((function(e,t,r){var i=f&&e.as||u,s="",l=[],d=e;if(null==e.theme){for(var h in d={},e)d[h]=e[h];d.theme=v.useContext(a)}"string"==typeof e.className?s=n(t.registered,l,e.className):null!=e.className&&(s=e.className+" ");var y=o(g.concat(l),t.registered,d);s+=t.key+"-"+y.name,void 0!==c&&(s+=" "+c);var b=f&&void 0===p?A(i):m,k={};for(var x in e)f&&"as"===x||b(x)&&(k[x]=e[x]);return k.className=s,k.ref=r,v.createElement(v.Fragment,null,v.createElement(M,{cache:t,serialized:y,isStringTag:"string"==typeof i}),v.createElement(i,k))}));return k.displayName=void 0!==l?l:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",k.defaultProps=i.defaultProps,k.__emotion_real=k,k.__emotion_base=u,k.__emotion_styles=g,k.__emotion_forwardProp=p,Object.defineProperty(k,"toString",{value:function(){return"."+c}}),k.withComponent=function(r,a){return e(r,t({},s,a,{shouldForwardProp:T(k,a,!0)})).apply(void 0,g)},k}}.bind();
/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function R(e,t){return L(e,t)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){L[e]=L(e)}));const E=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},N=["sx"],O=e=>{var t,r;const a={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:d;return Object.keys(e).forEach((t=>{n[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a};function j(e){const{sx:r}=e,a=c(e,N),{systemProps:n,otherProps:o}=O(a);let i;return i=Array.isArray(r)?[n,...r]:"function"==typeof r?(...e)=>{const a=r(...e);return u(a)?t({},n,a):n}:t({},n,r),t({},o,{sx:i})}function z(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=z(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function I(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=z(e))&&(a&&(a+=" "),a+=t);return a}const F=["className","component"];const H=function(e={}){const{themeId:r,defaultTheme:a,defaultClassName:n="MuiBox-root",generateClassName:o}=e,i=R("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(p);return v.forwardRef((function(e,s){const l=m(a),d=j(e),{className:u,component:p="div"}=d,f=c(d,F);return b.jsx(i,t({as:p,ref:s,className:I(u,o?o(n):n),theme:r&&l[r]||l},f))}))}({themeId:h,defaultTheme:f(),defaultClassName:"MuiBox-root",generateClassName:w.generate});function U(e,t,r,a,n){const[o,i]=v.useState((()=>n&&r?r(e).matches:a?a(e).matches:t));return x((()=>{let t=!0;if(!r)return;const a=r(e),n=()=>{t&&i(a.matches)};return n(),a.addListener(n),()=>{t=!1,a.removeListener(n)}}),[e,r]),o}const q=k.useSyncExternalStore;function B(e,t,r,a,n){const o=v.useCallback((()=>t),[t]),i=v.useMemo((()=>{if(n&&r)return()=>r(e).matches;if(null!==a){const{matches:t}=a(e);return()=>t}return o}),[o,e,a,n,r]),[s,l]=v.useMemo((()=>{if(null===r)return[o,()=>()=>{}];const t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,r,e]);return q(l,s,i)}function D(e,t={}){const r=g(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:n=!1,matchMedia:o=(a?window.matchMedia:null),ssrMatchMedia:i=null,noSsr:s=!1}=y({name:"MuiUseMediaQuery",props:t,theme:r});let l="function"==typeof e?e(r):e;l=l.replace(/^@media( ?)/m,"");return(void 0!==q?B:U)(l,n,o,i,s)}export{H as B,w as C,D as a,I as c,j as e,E as i,R as s,x as u};
