(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-2" viewBox="0 0 1024 1024">'+""+'<path d="M489.0624 28.672c-250.0608 0-452.608 202.5472-452.608 452.608s202.5472 452.608 452.608 452.608 452.608-202.5472 452.608-452.608S739.1232 28.672 489.0624 28.672zM679.3216 789.7088 299.4176 789.7088c-3.072-71.0656 4.096-106.496 31.3344-152.3712 27.2384-45.8752 123.0848-116.9408 141.9264-128.4096 18.8416-11.4688 72.0896-59.5968 72.0896-59.5968 73.1136-78.2336 50.176-197.2224-43.8272-211.968-94.0032-14.5408-176.3328 72.0896-176.3328 72.0896L324.608 237.568c35.4304-39.7312 129.4336-85.6064 227.5328-54.272 98.0992 31.3344 126.3616 123.0848 105.472 208.6912-20.8896 85.6064-122.0608 159.744-139.8784 169.1648-17.8176 9.4208-94.0032 67.7888-115.9168 91.9552-21.9136 23.9616-21.9136 69.8368-21.9136 69.8368l299.6224 0L679.5264 789.7088z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-3" viewBox="0 0 1024 1024">'+""+'<path d="M512 59.392C261.9392 59.392 59.392 261.9392 59.392 512s202.5472 452.608 452.608 452.608 452.608-202.5472 452.608-452.608S762.0608 59.392 512 59.392zM621.568 837.4272c-159.9488 88.6784-315.392 0-315.392 0l0-91.3408c76.3904 74.5472 314.9824 96.256 319.8976-74.1376 4.9152-170.3936-249.856-133.5296-249.856-133.5296l0-74.1376L444.416 464.2816c187.1872 5.5296 195.7888-189.44 94.0032-231.2192-101.7856-41.7792-205.824 39.5264-205.824 39.5264L332.5952 189.0304c205.2096-95.6416 357.1712-16.5888 360.2432 130.6624s-140.4928 176.9472-140.4928 176.9472C730.9312 504.4224 781.5168 748.7488 621.568 837.4272z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-tubiaozhizuomoban" viewBox="0 0 1024 1024">'+""+'<path d="M474.974483 1024V256.340353L236.039685 323.327586V146.871267L547.348802 0h240.603622v1023.985361z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)