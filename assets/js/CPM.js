22,this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_MAC=35,this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_FFOS=15,this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_ANDROID=20);this.DeviceEnum||(this.DeviceEnum={},this.DeviceEnum.DESKTOP=0,this.DeviceEnum.IDEVICE=1,this.DeviceEnum.ANDROID=2);this.browserVersion=this.browser=this.BrowserEnum.UNKNOWN;this.device=this.DeviceEnum.DESKTOP;navigator.userAgent.match(/(iPhone|iPad|iPod)/i)?this.device=this.DeviceEnum.IDEVICE:navigator.userAgent.match(/android/i)&&(this.device=
this.DeviceEnum.ANDROID);navigator.userAgent.match(/MSIE/i)?(this.browser=this.BrowserEnum.MSIE,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"MSIE")||this.getCurrentBrowserVersion(navigator.appVersion,"MSIE")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Firefox/i)?(this.browser=this.BrowserEnum.FIREFOX,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Firefox")||this.getCurrentBrowserVersion(navigator.appVersion,"Firefox")||this.BrowserEnum.UNKNOWN):
navigator.userAgent.match(/Chrome/i)?(this.browser=this.BrowserEnum.CHROME,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Chrome")||this.getCurrentBrowserVersion(navigator.appVersion,"Chrome")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Safari/i)?(this.browser=this.BrowserEnum.SAFARI,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Version")||this.getCurrentBrowserVersion(navigator.appVersion,"Version")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Netscape/i)?
(this.browser=this.BrowserEnum.NETSCAPE,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Netscape")||this.getCurrentBrowserVersion(navigator.appVersion,"Netscape")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Opera/i)?(this.browser=this.BrowserEnum.OPERA,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Version")||this.getCurrentBrowserVersion(navigator.appVersion,"Version")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Camino/i)?(this.browser=
this.BrowserEnum.CAMINO,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"Camino")||this.getCurrentBrowserVersion(navigator.appVersion,"Camino")||this.BrowserEnum.UNKNOWN):navigator.userAgent.match(/Firebird/i)?this.browser=this.BrowserEnum.FIREBIRD:navigator.userAgent.match(/Trident/i)&&"netscape"==navigator.appName.toLowerCase()&&(this.browser=this.BrowserEnum.MSIE,this.browserVersion=this.getCurrentBrowserVersion(navigator.userAgent,"rv")||this.BrowserEnum.UNKNOWN);this.getIsBrowserSupported()||
this.showRuntimeWarning(a,c,e)},getCurrentBrowserVersion:function(a,c){var e=a.indexOf(c);return-1==e?this.BrowserEnum.UNKNOWN:parseFloat(a.substring(e+c.length+1))},getIsBrowserSupported:function(){var a=!1;if(this.browser==this.BrowserEnum.MSIE&&this.browserVersion>=this.BrowserEnum.MSIE_MIN_SUPPORTED_VERSION)a=!0;else if(this.browser==this.BrowserEnum.CHROME&&this.browserVersion>=this.BrowserEnum.CHROME_MIN_SUPPORTED_VERSION)a=!0;else if(this.browser==this.BrowserEnum.SAFARI&&this.browserVersion>=
this.BrowserEnum.SAFARI_MIN_SUPPORTED_VERSION)a=!0;else if(this.browser==this.BrowserEnum.FIREFOX&&(cp.OS==cp.MACOS&&this.browserVersion>=this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_MAC||cp.OS==cp.WINDOWS&&this.browserVersion>=this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_WIN))a=!0;return a},getPanelElement:function(a,c,e,d,f){var b=document.createElement("div");b.style.left=a;b.style.top=c;b.style.width=e;b.style.height=d;b.style.backgroundColor=f;b.style.border="1px solid #666666";b.style.borderRadius=
"14px";return b},getTextElement:function(a,c,e,d,f){var b=document.createElement("div");b.style.color=e;b.style.fontFamily=d;b.style.fontSize="14px";b.style.textAlign="left";b.style.left=a;b.style.top=c;b.style.position="relative";b.style.opacity=1;b.innerHTML=f;return b},showRuntimeWarning:function(a,c,e){if(document.body){var d=document.createElement("div");d.id="CPUnSupportedBrowserWarning_ID";var f=this.getPanelElement("0px","0px","455px","220px","#CCCCCC");f.style.margin="100px auto";"boxShadow"in
f.style&&(f.style.boxShadow="1px 1px 1px #000000");d.appendChild(f);var b=this.getPanelElement("2px","2px","450px","215px","#FEFEFE");b.style.position="relative";f.appendChild(b);c=this.getTextElement("10px","10px","#000000","Tahoma",c);b.appendChild(c);c=document.createElement("div");c.style.height="2px";c.style.backgroundColor="#000000";c.style.opacity=0.5;c.style.position="relative";c.style.marginLeft="10px";c.style.marginRight="10px";c.style.top="20px";b.appendChild(c);a=this.getTextElement("10px",
"30px","#000000","Tahoma",a);a.style.marginRight="10px";b.appendChild(a);a=this.getPanelElement("0px","auto","100px","33px","#CCCCCC");a.id="dismissWarningBox";a.style.bottom="10px";a.style.opacity=0.7;a.style.position="absolute";a.style.cursor="pointer";cp.registerGestureEvent(a,cp.GESTURE_EVENT_TYPES.TAP,function(){var a=document.getElementById("CPUnSupportedBrowserWarning_ID");a!=void 0&&document.body.removeChild(a)});"boxShadow"in a.style&&(a.style.boxShadow="1px 1px 1px #000000");e=this.getTextElement("0px",
"5px","#000000","Tahoma",e);e.style.textAlign="center";a.appendChild(e);b.appendChild(a);document.body.appendChild(d);d.style.visibility="visible";d.style.position="absolute";d.style.left="0px";d.style.top="0px";d.style.width="100%";d.style.height="100%";d.style.textAlign="center";d.style.zIndex="1000";d.style.backgroundColor="CCCCCC";a.style.left=(b.clientWidth-a.clientWidth)/2+"px"}}};
(function(i,m){var b=function(a,c){return new b.Instance(a,c||{})};b.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};b.HAS_POINTEREVENTS=i.navigator.pointerEnabled||i.navigator.msPointerEnabled;b.HAS_TOUCHEVENTS="ontouchstart"in i;b.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i;b.NO_MOUSEEVENTS=b.HAS_TOUCHEVENTS&&i.navigator.userAgent.match(b.MOBILE_REGEX);b.EVENT_TYPES=
{};b.DIRECTION_DOWN="down";b.DIRECTION_LEFT="left";b.DIRECTION_UP="up";b.DIRECTION_RIGHT="right";b.POINTER_MOUSE="mouse";b.POINTER_TOUCH="touch";b.POINTER_PEN="pen";b.EVENT_START="start";b.EVENT_MOVE="move";b.EVENT_END="end";b.DOCUMENT=i.document;b.plugins=b.plugins||{};b.gestures=b.gestures||{};b.READY=!1;b.utils={extend:function(a,b,d){for(var e in b)a[e]!==m&&d||(a[e]=b[e]);return a},each:function(a,b,d){var e,f;if("forEach"in a)a.forEach(b,d);else if(a.length!==m){e=0;for(f=a.length;e<f&&!1!==
b.call(d,a[e],e,a);e++);}else for(e in a)if(a.hasOwnProperty(e)&&!1===b.call(d,a[e],e,a))break},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var c=[],d=[];b.utils.each(a,function(a){c.push("undefined"!==typeof a.clientX?a.clientX:a.pageX);d.push("undefined"!==typeof a.clientY?a.clientY:a.pageY)});return{pageX:(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,pageY:(Math.min.apply(Math,d)+Math.max.apply(Math,d))/2}},getVelocity:function(a,b,d){return{x:Math.abs(b/
a)||0,y:Math.abs(d/a)||0}},getAngle:function(a,b){return 180*Math.atan2(b.pageY-a.pageY,b.pageX-a.pageX)/Math.PI},getDirection:function(a,c){var d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY);return d>=e?0<a.pageX-c.pageX?b.DIRECTION_LEFT:b.DIRECTION_RIGHT:0<a.pageY-c.pageY?b.DIRECTION_UP:b.DIRECTION_DOWN},getDistance:function(a,b){var d=b.pageX-a.pageX,e=b.pageY-a.pageY;return Math.sqrt(d*d+e*e)},getScale:function(a,b){return 2<=a.length&&2<=b.length?this.getDistance(b[0],b[1])/this.getDistance(a[0],
a[1]):1},getRotation:function(a,b){return 2<=a.length&&2<=b.length?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==b.DIRECTION_UP||a==b.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(a,c){if(c&&(a&&a.style)&&(b.utils.each("webkit khtml moz Moz ms o ".split(" "),function(d){b.utils.each(c,function(b,c){d&&(c=d+c.substring(0,1).toUpperCase()+c.substring(1));c in a.style&&(a.style[c]=b)})}),"none"==c.userSelect&&(a.onselectstart=function(){return!1}),"none"==
c.userDrag))a.ondragstart=function(){return false}}};b.Instance=function(a,c){var d=this;b.READY||(b.event.determineEventTypes(),b.utils.each(b.gestures,function(a){b.detection.register(a)}),b.event.onTouch(b.DOCUMENT,b.EVENT_MOVE,b.detection.detect),b.event.onTouch(b.DOCUMENT,b.EVENT_END,b.detection.detect),b.READY=!0);this.domHandlers={};this.element=a;this.enabled=!0;this.options=b.utils.extend(b.utils.extend({},b.defaults),c||{});this.options.stop_browser_behavior&&b.utils.stopDefaultBrowserBehavior(this.element,
this.options.stop_browser_behavior);var e=b.event.onTouch(a,b.EVENT_START,function(a){d.enabled&&b.detection.startDetect(d,a)}),f=this.domHandlers[b.EVENT_TYPES[b.EVENT_START]];f||(f=[],this.domHandlers[b.EVENT_TYPES[b.EVENT_START]]=f);f.push(e);return this};b.Instance.prototype={on:function(a,c){var d=a.split(" ");b.utils.each(d,function(a){this.element.addEventListener(a,c,!1)},this);return this},off:function(a,c){var d=a.split(" ");b.utils.each(d,function(a){this.element.removeEventListener(a,
c,!1)},this);return this},trigger:function(a,c){c||(c={});var d=b.DOCUMENT.createEvent("Event");d.initEvent(a,!0,!0);d.gesture=c;var e=this.element;b.utils.hasParent(c.target,e)&&(e=c.target);try{e.dispatchEvent(d)}catch(f){}return this},enable:function(a){this.enabled=a;return this},destroy:function(){for(var a in this.domHandlers)for(var b=this.domHandlers[a],d=0;d<b.length;++d)this.element.removeEventListener(a,b[d],!1);this.domHandlers={};this.element=null}};var j=null,k=!1,l=!1;b.event={bindDom:function(a,
c,d){c=c.split(" ");b.utils.each(c,function(b){a.addEventListener(b,d,!1)})},onTouch:function(a,c,d){function e(e){var g=e.type.toLowerCase();if(!g.match(/mouse/)||!l){g.match(/touch/)||g.match(/pointerdown/)||g.match(/mouse/)&&1===e.which?k=!0:g.match(/mouse/)&&!e.which&&(k=!1);g.match(/touch|pointer/)&&(l=!0);var h=0;if(k){b.HAS_POINTEREVENTS&&c!=b.EVENT_END?h=b.PointerEvent.updatePointer(c,e):g.match(/touch/)?h=e.touches.length:l||(h=g.match(/up/)?0:1);0<h&&c==b.EVENT_END?c=b.EVENT_MOVE:h||(c=
b.EVENT_END);if(h||null===j)j=e;d.call(b.detection,f.collectEventData(a,c,f.getTouchList(j,c),e));b.HAS_POINTEREVENTS&&c==b.EVENT_END&&(h=b.PointerEvent.updatePointer(c,e))}h||(j=null,l=k=!1,b.PointerEvent.reset())}}var f=this;this.bindDom(a,b.EVENT_TYPES[c],e);return e},determineEventTypes:function(){var a;a=b.HAS_POINTEREVENTS?b.PointerEvent.getEvents():b.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"];
b.EVENT_TYPES[b.EVENT_START]=a[0];b.EVENT_TYPES[b.EVENT_MOVE]=a[1];b.EVENT_TYPES[b.EVENT_END]=a[2]},getTouchList:function(a){if(b.HAS_POINTEREVENTS)return b.PointerEvent.getTouchList();if(a.touches)return a.touches;a.identifier=1;return[a]},collectEventData:function(a,c,d,e){a=b.POINTER_TOUCH;if(e.type.match(/mouse/)||b.PointerEvent.matchType(b.POINTER_MOUSE,e))a=b.POINTER_MOUSE;return{center:b.utils.getCenter(d),timeStamp:(new Date).getTime(),target:e.target,touches:d,eventType:c,pointerType:a,srcEvent:e,
preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation();this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return b.detection.stopDetect()}}}};b.PointerEvent={pointers:{},getTouchList:function(){var a=[];b.utils.each(this.pointers,function(b){a.push(b)});return a},updatePointer:function(a,c){a==b.EVENT_END?this.pointers={}:(c.identifier=c.pointerId,this.pointers[c.pointerId]=
c);return Object.keys(this.pointers).length},matchType:function(a,c){if(!c.pointerType)return!1;var d=c.pointerType,e={};e[b.POINTER_MOUSE]=d===c.MSPOINTER_TYPE_MOUSE||d===b.POINTER_MOUSE;e[b.POINTER_TOUCH]=d===c.MSPOINTER_TYPE_TOUCH||d===b.POINTER_TOUCH;e[b.POINTER_PEN]=d===c.MSPOINTER_TYPE_PEN||d===b.POINTER_PEN;return e[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}};
b.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,c){this.current||(this.stopped=!1,this.current={inst:a,startEvent:b.utils.extend({},c),lastEvent:!1,name:""},this.detect(c))},detect:function(a){if(this.current&&!this.stopped){var a=this.extendEventData(a),c=this.current.inst.options;b.utils.each(this.gestures,function(b){if(!this.stopped&&!1!==c[b.name]){if(!this.current)return!1;if(!1===b.handler.call(b,a,this.current.inst))return this.stopDetect(),!1}},this);
this.current&&(this.current.lastEvent=a);a.eventType==b.EVENT_END&&!a.touches.length-1&&this.stopDetect();return a}},stopDetect:function(){this.previous=b.utils.extend({},this.current);this.current=null;this.stopped=!0},extendEventData:function(a){var c=this.current.startEvent;if(c&&(a.touches.length!=c.touches.length||a.touches===c.touches))c.touches=[],b.utils.each(a.touches,function(a){c.touches.push(b.utils.extend({},a))});var d=a.timeStamp-c.timeStamp,e=a.center.pageX-c.center.pageX,f=a.center.pageY-
c.center.pageY,i=b.utils.getVelocity(d,e,f),g,h;"end"===a.eventType?(g=this.current.lastEvent&&this.current.lastEvent.interimAngle,h=this.current.lastEvent&&this.current.lastEvent.interimDirection):(g=this.current.lastEvent&&b.utils.getAngle(this.current.lastEvent.center,a.center),h=this.current.lastEvent&&b.utils.getDirection(this.current.lastEvent.center,a.center));b.utils.extend(a,{deltaTime:d,deltaX:e,deltaY:f,velocityX:i.x,velocityY:i.y,distance:b.utils.getDistance(c.center,a.center),angle:b.utils.getAngle(c.center,
a.center),interimAngle:g,direction:b.utils.getDirection(c.center,a.center),interimDirection:h,scale:b.utils.getScale(c.touches,a.touches),rotation:b.utils.getRotation(c.touches,a.touches),startEvent:c});return a},register:function(a){var c=a.defaults||{};c[a.name]===m&&(c[a.name]=!0);b.utils.extend(b.defaults,c,!0);a.index=a.index||1E3;this.gestures.push(a);this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0});return this.gestures}};b.gestures.Drag={name:"drag",index:50,
defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(a,c){if(b.detection.current.name!=this.name&&this.triggered)c.trigger(this.name+"end",a),this.triggered=!1;else if(!(0<c.options.drag_max_touches&&a.touches.length>c.options.drag_max_touches))switch(a.eventType){case b.EVENT_START:this.triggered=!1;break;case b.EVENT_MOVE:if(a.distance<c.options.drag_min_distance&&
b.detection.current.name!=this.name)break;if(b.detection.current.name!=this.name&&(b.detection.current.name=this.name,c.options.correct_for_drag_min_distance&&0<a.distance)){var d=Math.abs(c.options.drag_min_distance/a.distance);b.detection.current.startEvent.center.pageX+=a.deltaX*d;b.detection.current.startEvent.center.pageY+=a.deltaY*d;a=b.detection.extendEventData(a)}if(b.detection.current.lastEvent.drag_locked_to_axis||c.options.drag_lock_to_axis&&c.options.drag_lock_min_distance<=a.distance)a.drag_locked_to_axis=
!0;d=b.detection.current.lastEvent.direction;a.drag_locked_to_axis&&d!==a.direction&&(a.direction=b.utils.isVertical(d)?0>a.deltaY?b.DIRECTION_UP:b.DIRECTION_DOWN:0>a.deltaX?b.DIRECTION_LEFT:b.DIRECTION_RIGHT);this.triggered||(c.trigger(this.name+"start",a),this.triggered=!0);c.trigger(this.name,a);c.trigger(this.name+a.direction,a);(c.options.drag_block_vertical&&b.utils.isVertical(a.direction)||c.options.drag_block_horizontal&&!b.utils.isVertical(a.direction))&&a.preventDefault();break;case b.EVENT_END:this.triggered&&
c.trigger(this.name+"end",a),this.triggered=!1}}};b.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(a,c){switch(a.eventType){case b.EVENT_START:clearTimeout(this.timer);b.detection.current.name=this.name;this.timer=setTimeout(function(){"hold"==b.detection.current.name&&c.trigger("hold",a)},c.options.hold_timeout);break;case b.EVENT_MOVE:a.distance>c.options.hold_threshold&&clearTimeout(this.timer);break;case b.EVENT_END:clearTimeout(this.timer)}}};
b.gestures.Release={name:"release",index:Infinity,handler:function(a,c){a.eventType==b.EVENT_END&&c.trigger(this.name,a)}};b.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:1},handler:function(a,c){if(a.eventType==b.EVENT_END&&!(0<c.options.swipe_max_touches&&a.touches.length<c.options.swipe_min_touches&&a.touches.length>c.options.swipe_max_touches)&&(a.velocityX>c.options.swipe_velocity||a.velocityY>c.options.swipe_velocity))c.trigger(this.name,
a),c.trigger(this.name+a.direction,a)}};b.gestures.Tap={name:"tap",evttouches:1,index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300,evttouches:1,longtap_min_touchtime:500,longtap_max_touchtime:1E3,evtstarttime:0},handler:function(a,c){a.eventType==b.EVENT_START&&(c.options.evttouches=a.touches.length,c.options.evtstarttime=(new Date).getTime());a.eventType==b.EVENT_MOVE&&(c.options.evttouches=a.touches.length);if(a.eventType==b.EVENT_END&&
"touchcancel"!=a.srcEvent.type){var d=b.detection.previous,e=!1;if(d&&"tap"==d.name&&a.timeStamp-d.lastEvent.timeStamp<c.options.doubletap_interval&&a.distance<c.options.doubletap_distance){if(a.deltaTime>c.options.tap_max_touchtime||a.distance>c.options.tap_max_distance)return;c.trigger("doubletap",a);e=!0}if(!e||c.options.tap_always)(new Date).getTime()-c.options.evtstarttime>c.options.longtap_min_touchtime?a.distance>c.options.tap_max_distance||(b.detection.current.name="longtap",c.trigger(b.detection.current.name,
a)):a.deltaTime>c.options.tap_max_touchtime||a.distance>c.options.tap_max_distance||(b.detection.current.name="tap",c.trigger(b.detection.current.name,a))}}};b.gestures.Touch={name:"touch",index:-Infinity,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,c){c.options.prevent_mouseevents&&a.pointerType==b.POINTER_MOUSE?a.stopDetect():(c.options.prevent_default&&a.preventDefault(),a.eventType==b.EVENT_START&&c.trigger(this.name,a))}};b.gestures.Transform={name:"transform",index:45,
defaults:{transform_min_scale:0,transform_min_rotation:360,transform_always_block:!1},triggered:!1,handler:function(a,c){if(b.detection.current.name!=this.name&&this.triggered)c.trigger(this.name+"end",a),this.triggered=!1;else if(!(2>a.touches.length))switch(c.options.transform_always_block&&a.preventDefault(),a.eventType){case b.EVENT_START:this.triggered=!1;this.twofingertap=!0;break;case b.EVENT_MOVE:var d=Math.abs(1-a.scale),e=Math.abs(a.rotation);if(d<c.options.transform_min_scale&&e<c.options.transform_min_rotation)break;
this.twofingertap=!1;b.detection.current.name=this.name;this.triggered||(c.trigger(this.name+"start",a),this.triggered=!0);c.trigger(this.name,a);e>c.options.transform_min_rotation&&c.trigger("rotate",a);d>c.options.transform_min_scale&&(c.trigger("pinch",a),c.trigger("pinch"+(1>a.scale?"in":"out"),a));break;case b.EVENT_END:this.triggered&&c.trigger(this.name+"end",a),this.twofingertap&&c.trigger("taptwo",a),this.triggered=!1}}};"function"==typeof define&&define.amd?define(function(){return b}):
"object"===typeof module&&module.exports?module.exports=b:i.Hammer=b})(window);
(function(l,r,t){function ca(e,d,a){var c=e.runtimeStyle&&e.runtimeStyle[d],b,f=e.style;if(!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(a)&&/^-?\d/.test(a)&&(b=f.left,c&&(e.runtimeStyle.left=e.currentStyle.left),f.left="fontSize"===d?"1em":a||0,a=f.pixelLeft+"px",f.left=b,c))e.runtimeStyle.left=c;return!/^(thin|medium|thick)$/i.test(a)?Math.round(parseFloat(a))+"px":a}function qa(e){return parseInt(e,10)}function ea(e,d,a,c,b,f){var d=g.Util.getCSS(d,e,b),y;1===d.length&&(b=d[0],d=[],d[0]=b,d[1]=b);-1!==d[0].toString().indexOf("%")?
(y=parseFloat(d[0])/100,b=a.width*y,"backgroundSize"!==e&&(b-=(f||c).width*y)):b="backgroundSize"===e?"auto"===d[0]?c.width:/contain|cover/.test(d[0])?g.Util.resizeBounds(c.width,c.height,a.width,a.height,d[0]).width:parseInt(d[0],10):parseInt(d[0],10);"auto"===d[1]?a=b/c.width*c.height:-1!==d[1].toString().indexOf("%")?(y=parseFloat(d[1])/100,a=a.height*y,"backgroundSize"!==e&&(a-=(f||c).height*y)):a=parseInt(d[1],10);return[b,a]}var g={},da;g.Util={};g.Util.log=function(e){g.logging&&(l.console&&
l.console.log)&&l.console.log(e)};var oa=String.prototype.trim;g.Util.trimText=function(e){return oa?oa.apply(e):((e||"")+"").replace(/^\s+|\s+$/g,"")};g.Util.asFloat=function(e){return parseFloat(e)};var ra=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,sa=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;g.Util.parseTextShadows=function(e){if(!e||"none"===e)return[];for(var e=e.match(ra),d=[],a=0;e&&a<e.length;a++){var c=e[a].match(sa);d.push({color:c[0],offsetX:c[1]?c[1].replace("px",""):0,offsetY:c[2]?c[2].replace("px",
""):0,blur:c[3]?c[3].replace("px",""):0})}return d};g.Util.parseBackgroundImage=function(e){var d,a,c,b,f,y=[],g,h=0,U=0,u,q,m=function(){if(d){'"'===a.substr(0,1)&&(a=a.substr(1,a.length-2));a&&q.push(a);if("-"===d.substr(0,1)&&0<(b=d.indexOf("-",1)+1))c=d.substr(0,b),d=d.substr(b);y.push({prefix:c,method:d.toLowerCase(),value:f,args:q})}q=[];d=c=a=f=""};m();for(var l=0,t=e.length;l<t;l++)if(g=e[l],!(0===h&&-1<" \r\n\t".indexOf(g))){switch(g){case '"':u?u===g&&(u=null):u=g;break;case "(":if(u)break;
else if(0===h){h=1;f+=g;continue}else U++;break;case ")":if(u)break;else if(1===h)if(0===U){h=0;f+=g;m();continue}else U--;break;case ",":if(!u)if(0===h){m();continue}else if(1===h&&0===U&&!d.match(/^url$/i)){q.push(a);a="";f+=g;continue}}f+=g;0===h?d+=g:a+=g}m();return y};g.Util.Bounds=function(e){var d,a={};e.getBoundingClientRect&&(d=e.getBoundingClientRect(),a.top=d.top,a.bottom=d.bottom||d.top+d.height,a.left=d.left,a.width=e.offsetWidth,a.height=e.offsetHeight);return a};g.Util.OffsetBounds=
function(e){var d=e.offsetParent?g.Util.OffsetBounds(e.offsetParent):{top:0,left:0};return{top:e.offsetTop+d.top,bottom:e.offsetTop+e.offsetHeight+d.top,left:e.offsetLeft+d.left,width:e.offsetWidth,height:e.offsetHeight}};g.Util.getCSS=function(e,d,a){void 0!==e&&(da=r.defaultView.getComputedStyle(e,null));var c=da[d];if(/^background(Size|Position)$/.test(d)){a:{c=(c||"").split(",");c=c[a||0]||c[0]||"auto";c=g.Util.trimText(c).split(" ");if(!("backgroundSize"===d&&(!c[0]||c[0].match(/cover|contain|auto/)))){c[0]=
-1===c[0].indexOf("%")?ca(e,d+"X",c[0]):c[0];if(c[1]===t)if("backgroundSize"===d){c[1]="auto";e=c;break a}else c[1]=c[0];c[1]=-1===c[1].indexOf("%")?ca(e,d+"Y",c[1]):c[1]}e=c}return e}return/border(Top|Bottom)(Left|Right)Radius/.test(d)?(e=c.split(" "),1>=e.length&&(e[1]=e[0]),e.map(qa)):c};g.Util.resizeBounds=function(e,d,a,c,b){e/=d;!b||"auto"===b?(b=a,a=c):a/c<e^"contain"===b?(a=c,b=c*e):(b=a,a/=e);return{width:b,height:a}};g.Util.BackgroundPosition=function(e,d,a,c,b){e=ea("backgroundPosition",
e,d,a,c,b);return{left:e[0],top:e[1]}};g.Util.BackgroundSize=function(e,d,a,c){e=ea("backgroundSize",e,d,a,c);return{width:e[0],height:e[1]}};g.Util.Extend=function(e,d){for(var a in e)e.hasOwnProperty(a)&&(d[a]=e[a]);return d};g.Util.Children=function(e){var d;try{var a;if(e.nodeName&&"IFRAME"===e.nodeName.toUpperCase())a=e.contentDocument||e.contentWindow.document;else{var c=e.childNodes,e=[];if(null!==c){var b=e.length,f=0;if("number"===typeof c.length)for(var y=c.length;f<y;f++)e[b++]=c[f];else for(;c[f]!==
t;)e[b++]=c[f++];e.length=b}a=e}d=a}catch(k){g.Util.log("html2canvas.Util.Children failed with exception: "+k.message),d=[]}return d};g.Util.isTransparent=function(e){return"transparent"===e||"rgba(0, 0, 0, 0)"===e};var aa={};g.Util.Font=function(e,d,a){if(aa[e+"-"+d]!==t)return aa[e+"-"+d];var c=a.createElement("div"),b=a.createElement("img"),f=a.createElement("span"),g;c.style.visibility="hidden";c.style.fontFamily=e;c.style.fontSize=d;c.style.margin=0;c.style.padding=0;a.body.appendChild(c);b.src=
"data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";b.width=1;b.height=1;b.style.margin=0;b.style.padding=0;b.style.verticalAlign="baseline";f.style.fontFamily=e;f.style.fontSize=d;f.style.margin=0;f.style.padding=0;f.appendChild(a.createTextNode("Hidden Text"));c.appendChild(f);c.appendChild(b);g=b.offsetTop-f.offsetTop+1;c.removeChild(f);c.appendChild(a.createTextNode("Hidden Text"));c.style.lineHeight="normal";b.style.verticalAlign="super";b={baseline:g,lineWidth:1,middle:b.offsetTop-
c.offsetTop+1};aa[e+"-"+d]=b;a.body.removeChild(c);return b};var D=function(e){return function(d){try{e.addColorStop(d.stop,d.color)}catch(a){ta.log(["failed to add color stop: ",a,"; tried to add: ",d])}}},ta=g.Util,E={};g.Generate=E;var pa=[/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,/^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];E.parseGradient=function(e,d){var a,c,b=pa.length,f,g,k,h;for(c=0;c<b&&!(f=e.match(pa[c]));c+=1);if(f)switch(f[1]){case "-webkit-linear-gradient":case "-o-linear-gradient":a={type:"linear",x0:null,y0:null,
x1:null,y1:null,colorStops:[]};if(b=f[2].match(/\w+/g)){g=b.length;for(c=0;c<g;c+=1)switch(b[c]){case "top":a.y0=0;a.y1=d.height;break;case "right":a.x0=d.width;a.x1=0;break;case "bottom":a.y0=d.height;a.y1=0;break;case "left":a.x0=0,a.x1=d.width}}null===a.x0&&null===a.x1&&(a.x0=a.x1=d.width/2);null===a.y0&&null===a.y1&&(a.y0=a.y1=d.height/2);if(b=f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)){g=b.length;k=1/Math.max(g-1,1);for(c=0;c<g;c+=1)h=
b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),h[2]?(f=parseFloat(h[2]),f="%"===h[3]?f/100:f/d.width):f=c*k,a.colorStops.push({color:h[1],stop:f})}break;case "-webkit-gradient":a={type:"radial"===f[2]?"circle":f[2],x0:0,y0:0,x1:0,y1:0,colorStops:[]};if(b=f[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/))a.x0=b[1]*d.width/100,a.y0=b[2]*d.height/100,a.x1=b[3]*d.width/100,a.y1=b[4]*d.height/100;if(b=f[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)){g=
b.length;for(c=0;c<g;c+=1)h=b[c].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/),f=parseFloat(h[2]),"from"===h[1]&&(f=0),"to"===h[1]&&(f=1),a.colorStops.push({color:h[3],stop:f})}break;case "-moz-linear-gradient":a={type:"linear",x0:0,y0:0,x1:0,y1:0,colorStops:[]};if(b=f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/))a.x0=b[1]*d.width/100,a.y0=b[2]*d.height/100,a.x1=d.width-a.x0,a.y1=d.height-a.y0;if(b=f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)){g=
b.length;k=1/Math.max(g-1,1);for(c=0;c<g;c+=1)h=b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/),h[2]?(f=parseFloat(h[2]),h[3]&&(f/=100)):f=c*k,a.colorStops.push({color:h[1],stop:f})}break;case "-webkit-radial-gradient":case "-moz-radial-gradient":case "-o-radial-gradient":a={type:"circle",x0:0,y0:0,x1:d.width,y1:d.height,cx:0,cy:0,rx:0,ry:0,colorStops:[]};if(b=f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/))a.cx=b[1]*d.width/100,a.cy=b[2]*d.height/100;b=f[3].match(/\w+/);
h=f[4].match(/[a-z\-]*/);if(b&&h)switch(h[0]){case "farthest-corner":case "cover":case "":c=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.cy,2));b=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.y1-a.cy,2));g=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.y1-a.cy,2));h=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.cy,2));a.rx=a.ry=Math.max(c,b,g,h);break;case "closest-corner":c=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.cy,2));b=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.y1-a.cy,2));g=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.y1-
a.cy,2));h=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.cy,2));a.rx=a.ry=Math.min(c,b,g,h);break;case "farthest-side":"circle"===b[0]?a.rx=a.ry=Math.max(a.cx,a.cy,a.x1-a.cx,a.y1-a.cy):(a.type=b[0],a.rx=Math.max(a.cx,a.x1-a.cx),a.ry=Math.max(a.cy,a.y1-a.cy));break;case "closest-side":case "contain":"circle"===b[0]?a.rx=a.ry=Math.min(a.cx,a.cy,a.x1-a.cx,a.y1-a.cy):(a.type=b[0],a.rx=Math.min(a.cx,a.x1-a.cx),a.ry=Math.min(a.cy,a.y1-a.cy))}if(b=f[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)){g=
b.length;k=1/Math.max(g-1,1);for(c=0;c<g;c+=1)h=b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),h[2]?(f=parseFloat(h[2]),f="%"===h[3]?f/100:f/d.width):f=c*k,a.colorStops.push({color:h[1],stop:f})}}return a};E.Gradient=function(e,d){if(!(0===d.width||0===d.height)){var a=r.createElement("canvas"),c=a.getContext("2d"),b,f;a.width=d.width;a.height=d.height;if(b=g.Generate.parseGradient(e,d))switch(b.type){case "linear":f=c.createLinearGradient(b.x0,b.y0,
b.x1,b.y1);b.colorStops.forEach(D(f));c.fillStyle=f;c.fillRect(0,0,d.width,d.height);break;case "circle":f=c.createRadialGradient(b.cx,b.cy,0,b.cx,b.cy,b.rx);b.colorStops.forEach(D(f));c.fillStyle=f;c.fillRect(0,0,d.width,d.height);break;case "ellipse":var y=r.createElement("canvas"),k=y.getContext("2d");f=Math.max(b.rx,b.ry);var h=2*f;y.width=y.height=h;f=k.createRadialGradient(b.rx,b.ry,0,b.rx,b.ry,f);b.colorStops.forEach(D(f));k.fillStyle=f;k.fillRect(0,0,h,h);c.fillStyle=b.colorStops[b.colorStops.length-
1].color;c.fillRect(0,0,a.width,a.height);c.drawImage(y,b.cx-b.rx,b.cy-b.ry,2*b.rx,2*b.ry)}return a}};E.ListAlpha=function(e){var d="",a;do a=e%26,d=String.fromCharCode(a+64)+d,e/=26;while(26<26*e);return d};E.ListRoman=function(e){var d="M CM D CD C XC L XL X IX V IV I".split(" "),a=[1E3,900,500,400,100,90,50,40,10,9,5,4,1],c="",b,f=d.length;if(0>=e||4E3<=e)return e;for(b=0;b<f;b+=1)for(;e>=a[b];)e-=a[b],c+=d[b];return c};g.Parse=function(e,d){function a(a,c){var b=parseInt(n(a,c),10);return isNaN(b)?
0:b}function c(a,c,b,e,d,f){"transparent"!==f&&(a.setVariable("fillStyle",f),a.fillRect(c,b,e,d))}function b(a,c,b){if(0<a.length)return c+b.toUpperCase()}function f(a,c){switch(c){case "lowercase":return a.toLowerCase();case "capitalize":return a.replace(/(^|\s|:|-|\(|\))([a-z])/g,b);case "uppercase":return a.toUpperCase();default:return a}}function y(a,c,b,e){var d=n(c,"fontWeight"),f=n(c,"fontFamily"),h=n(c,"fontSize"),g=x.parseTextShadows(n(c,"textShadow"));switch(parseInt(d,10)){case 401:d="bold";
break;case 400:d="normal"}a.setVariable("fillStyle",e);a.setVariable("font",[n(c,"fontStyle"),n(c,"fontVariant"),d,h,f].join(" "));a.setVariable("textAlign","left");g.length&&(a.setVariable("shadowColor",g[0].color),a.setVariable("shadowOffsetX",g[0].offsetX),a.setVariable("shadowOffsetY",g[0].offsetY),a.setVariable("shadowBlur",g[0].blur));if("none"!==b)return x.Font(f,h,z)}function k(a,b,e){var h=e.ctx,g=n(a,"color"),ka=n(a,"textDecoration"),w=n(a,"textAlign"),V,m,k=b,s=0;if(0<x.trimText(b.nodeValue).length){b.nodeValue=
f(b.nodeValue,n(a,"textTransform"));var w=w.replace(["-webkit-auto"],["auto"]),u;if(u=!d.letterRendering){if(w=/^(left|right|justify|auto)$/.test(w))w=n(a,"letterSpacing"),w=/^(normal|none|0px)$/.test(w);u=w}m=u?b.nodeValue.split(/(\b| )/):b.nodeValue.split("");V=y(h,a,ka,g);d.chinese&&m.forEach(function(a,c){/.*[\u4E00-\u9FA5].*$/.test(a)&&(a=a.split(""),a.unshift(c,1),m.splice.apply(m,a))});m.forEach(function(a,b){var C,d=b<m.length-1;C=e.transform.matrix;var f;if(E.rangeBounds&&!C){if("none"!==
ka||0!==x.trimText(a).length)C=k,d=s,f=z.createRange(),f.setStart(C,d),f.setEnd(C,d+a.length),f=f.getBoundingClientRect();s+=a.length}else if(k&&"string"===typeof k.nodeValue){var d=d?k.splitText(a.length):null,ga=k;f=ga.parentNode;var w=z.createElement("wrapper"),y=ga.cloneNode(!0);w.appendChild(ga.cloneNode(!0));f.replaceChild(w,ga);C=C?x.OffsetBounds(w):x.Bounds(w);f.replaceChild(y,w);f=C;k=d}if(C=f)switch(d=C.left,f=C.bottom,null!==a&&0<x.trimText(a).length&&h.fillText(a,d,f),ka){case "underline":c(h,
C.left,Math.round(C.top+V.baseline+V.lineWidth),C.width,1,g);break;case "overline":c(h,C.left,Math.round(C.top),C.width,1,g);break;case "line-through":c(h,C.left,Math.ceil(C.top+V.middle+V.lineWidth),C.width,1,g)}})}}function h(a){return(a=e[a])&&!0===a.succeeded?a.img:!1}function U(a,c){var b=Math.max(a.left,c.left),d=Math.max(a.top,c.top),e=Math.min(a.left+a.width,c.left+c.width),f=Math.min(a.top+a.height,c.top+c.height);return{left:b,top:d,width:e-b,height:f-d}}function u(c,b,d,e,f){var h=a(b,
"paddingLeft"),g=a(b,"paddingTop"),w=a(b,"paddingRight"),b=a(b,"paddingBottom");ha(c,d,0,0,d.width,d.height,e.left+h+f[3].width,e.top+g+f[0].width,e.width-(f[1].width+f[3].width+h+w),e.height-(f[0].width+f[2].width+g+b))}function q(a,c,b,d){var e=function(a,c,b){return{x:a.x+(c.x-a.x)*b,y:a.y+(c.y-a.y)*b}};return{start:a,startControl:c,endControl:b,end:d,subdivide:function(f){var h=e(a,c,f),g=e(c,b,f),w=e(b,d,f),V=e(h,g,f),g=e(g,w,f),f=e(V,g,f);return[q(a,h,V,f),q(f,g,w,d)]},curveTo:function(a){a.push(["bezierCurve",
c.x,c.y,b.x,b.y,d.x,d.y])},curveToReversed:function(d){d.push(["bezierCurve",b.x,b.y,c.x,c.y,a.x,a.y])}}}function m(a,c,b,d,e,f,h){0<c[0]||0<c[1]?(a.push(["line",d[0].start.x,d[0].start.y]),d[0].curveTo(a),d[1].curveTo(a)):a.push(["line",f,h]);(0<b[0]||0<b[1])&&a.push(["line",e[0].start.x,e[0].start.y])}function fa(a,c,b,d,e,f,h){var g=[];0<c[0]||0<c[1]?(g.push(["line",d[1].start.x,d[1].start.y]),d[1].curveTo(g)):g.push(["line",a.c1[0],a.c1[1]]);0<b[0]||0<b[1]?(g.push(["line",f[0].start.x,f[0].start.y]),
f[0].curveTo(g),g.push(["line",h[0].end.x,h[0].end.y]),h[0].curveToReversed(g)):(g.push(["line",a.c2[0],a.c2[1]]),g.push(["line",a.c3[0],a.c3[1]]));0<c[0]||0<c[1]?(g.push(["line",e[1].end.x,e[1].end.y]),e[1].curveToReversed(g)):g.push(["line",a.c4[0],a.c4[1]]);return g}function $(a,c){var b=a.drawShape();c.forEach(function(a,c){b[0===c?"moveTo":a[0]+"To"].apply(null,a.slice(1))});return b}function Y(a,c,b){var d=z.createElement("valuewrap");"lineHeight textAlign fontFamily color fontSize paddingLeft paddingTop width height border borderLeftWidth borderTopWidth".split(" ").forEach(function(c){try{d.style[c]=
n(a,c)}catch(b){x.log("html2canvas: Parse: Exception caught in renderFormValue: "+b.message)}});d.style.borderColor="black";d.style.borderStyle="solid";d.style.display="block";d.style.position="absolute";if(/^(submit|reset|button|text|password)$/.test(a.type)||"SELECT"===a.nodeName)d.style.lineHeight=n(a,"height");d.style.top=c.top+"px";d.style.left=c.left+"px";c="SELECT"===a.nodeName?(a.options[a.selectedIndex]||0).text:a.value;c||(c=a.placeholder);c=z.createTextNode(c);d.appendChild(c);ia.appendChild(d);
k(a,c,b);ia.removeChild(d)}function ha(a){a.drawImage.apply(a,Array.prototype.slice.call(arguments,1))}function J(a,c){var b=l.getComputedStyle(a,c);if(b&&b.content&&!("none"===b.content||"-moz-alt-content"===b.content||"none"===b.display)){var d=b.content+"",e=d.substr(0,1);e===d.substr(d.length-1)&&e.match(/'|"/)&&(d=d.substr(1,d.length-2));var e="url"===d.substr(0,3),f=r.createElement(e?"img":"span");f.className=Z+"-before "+Z+"-after";Object.keys(b).filter(ja).forEach(function(a){try{f.style[a]=
b[a]}catch(c){x.log(["Tried to assign readonly property ",a,"Error:",c])}});e?f.src=x.parseBackgroundImage(d)[0].args[0]:f.innerHTML=d;return f}}function ja(a){return isNaN(l.parseInt(a,10))}function ba(a,c,b,d){var e=Math.round(d.left+b.left),b=Math.round(d.top+b.top);a.createPattern(c);a.translate(e,b);a.fill();a.translate(-e,-b)}function w(a,c,b,d,e,f,g,h){var w=[];w.push(["line",Math.round(e),Math.round(f)]);w.push(["line",Math.round(e+g),Math.round(f)]);w.push(["line",Math.round(e+g),Math.round(h+
f)]);w.push(["line",Math.round(e),Math.round(h+f)]);$(a,w);a.save();a.clip();ba(a,c,b,d);a.restore()}function V(a){return a.replace("px","")}function s(b,e,f,k){var p,s,l,q,t,r,Q,K,v,j=n(b,"transform")||n(b,"-webkit-transform")||n(b,"-moz-transform")||n(b,"-ms-transform")||n(b,"-o-transform");v=n(b,"transform-origin")||n(b,"-webkit-transform-origin")||n(b,"-moz-transform-origin")||n(b,"-ms-transform-origin")||n(b,"-o-transform-origin")||"0px 0px";v=v.split(" ").map(V).map(x.asFloat);var i;if(j&&"none"!==
j&&(j=j.match(ea)))switch(j[1]){case "matrix":i=j[2].split(",").map(x.trimText).map(x.asFloat)}v={origin:v,matrix:i};i=v.matrix?x.OffsetBounds(b):x.Bounds(b);v.origin[0]+=i.left;v.origin[1]+=i.top;var D,j=!e?Math.max(Math.max(z.body.scrollWidth,z.documentElement.scrollWidth),Math.max(z.body.offsetWidth,z.documentElement.offsetWidth),Math.max(z.body.clientWidth,z.documentElement.clientWidth)):i.width;p=!e?Math.max(Math.max(z.body.scrollHeight,z.documentElement.scrollHeight),Math.max(z.body.offsetHeight,
z.documentElement.offsetHeight),Math.max(z.body.clientHeight,z.documentElement.clientHeight)):i.height;var L=[],j={storage:L,width:j,height:p,clip:function(){L.push({type:"function",name:"clip",arguments:arguments})},translate:function(){L.push({type:"function",name:"translate",arguments:arguments})},fill:function(){L.push({type:"function",name:"fill",arguments:arguments})},save:function(){L.push({type:"function",name:"save",arguments:arguments})},restore:function(){L.push({type:"function",name:"restore",
arguments:arguments})},fillRect:function(){L.push({type:"function",name:"fillRect",arguments:arguments})},createPattern:function(){L.push({type:"function",name:"createPattern",arguments:arguments})},drawShape:function(){var a=[];L.push({type:"function",name:"drawShape",arguments:a});return{moveTo:function(){a.push({name:"moveTo",arguments:arguments})},lineTo:function(){a.push({name:"lineTo",arguments:arguments})},arcTo:function(){a.push({name:"arcTo",arguments:arguments})},bezierCurveTo:function(){a.push({name:"bezierCurveTo",
h.elements.length&&"object"===typeof h.elements[0]&&"BODY"!==h.elements[0].nodeName?(g=q.Util.Bounds(h.elements[0]),r=r.createElement("canvas"),r.width=Math.ceil(g.width),r.height=Math.ceil(g.height),m=r.getContext("2d"),m.drawImage(l,g.left,g.top,g.width,g.height,0,0,g.width,g.height),l=null,r):l}}})(window,document);
 