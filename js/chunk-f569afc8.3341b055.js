(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f569afc8"],{"0b2d":function(t,e,n){"use strict";var i=n("01d4");e["a"]={SINGLECLICK:"singleclick",CLICK:i["a"].CLICK,DBLCLICK:i["a"].DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},"25c1":function(t,e,n){"use strict";var i=function(){function t(t,e,n){this.decay_=t,this.minVelocity_=e,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}return t.prototype.begin=function(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0},t.prototype.update=function(t,e){this.points_.push(t,e,Date.now())},t.prototype.end=function(){if(this.points_.length<6)return!1;var t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;var n=e-3;while(n>0&&this.points_[n+2]>t)n-=3;var i=this.points_[e+2]-this.points_[n+2];if(i<1e3/60)return!1;var r=this.points_[e]-this.points_[n],o=this.points_[e+1]-this.points_[n+1];return this.angle_=Math.atan2(o,r),this.initialVelocity_=Math.sqrt(r*r+o*o)/i,this.initialVelocity_>this.minVelocity_},t.prototype.getDistance=function(){return(this.minVelocity_-this.initialVelocity_)/this.decay_},t.prototype.getAngle=function(){return this.angle_},t}();e["a"]=i},"35a7":function(t,e,n){"use strict";n.d(e,"b",(function(){return l}));var i=n("0ec0"),r=n("01d4"),o=n("1e8d"),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(t){function e(){var e=t.call(this)||this;return e.on=e.onInternal,e.once=e.onceInternal,e.un=e.unInternal,e.revision_=0,e}return a(e,t),e.prototype.changed=function(){++this.revision_,this.dispatchEvent(r["a"].CHANGE)},e.prototype.getRevision=function(){return this.revision_},e.prototype.onInternal=function(t,e){if(Array.isArray(t)){for(var n=t.length,i=new Array(n),r=0;r<n;++r)i[r]=Object(o["a"])(this,t[r],e);return i}return Object(o["a"])(this,t,e)},e.prototype.onceInternal=function(t,e){var n;if(Array.isArray(t)){var i=t.length;n=new Array(i);for(var r=0;r<i;++r)n[r]=Object(o["b"])(this,t[r],e)}else n=Object(o["b"])(this,t,e);return e.ol_key=n,n},e.prototype.unInternal=function(t,e){var n=e.ol_key;if(n)l(n);else if(Array.isArray(t))for(var i=0,r=t.length;i<r;++i)this.removeEventListener(t[i],e);else this.removeEventListener(t,e)},e}(i["a"]);function l(t){if(Array.isArray(t))for(var e=0,n=t.length;e<n;++e)Object(o["c"])(t[e]);else Object(o["c"])(t)}s.prototype.on,s.prototype.once,s.prototype.un,e["a"]=s},"509b":function(t,e,n){"use strict";var i=n("7238"),r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=function(t){function e(e,n,i,r,o){var a=t.call(this,e,n,o)||this;return a.originalEvent=i,a.pixel_=null,a.coordinate_=null,a.dragging=void 0!==r&&r,a}return r(e,t),Object.defineProperty(e.prototype,"pixel",{get:function(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_},set:function(t){this.pixel_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinate",{get:function(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_},set:function(t){this.coordinate_=t},enumerable:!1,configurable:!0}),e.prototype.preventDefault=function(){t.prototype.preventDefault.call(this),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()},e.prototype.stopPropagation=function(){t.prototype.stopPropagation.call(this),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()},e}(i["a"]);e["a"]=o},"592d":function(t,e,n){"use strict";e["a"]={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},"5eee":function(t,e,n){"use strict";var i=n("1856"),r=n("e269"),o=n("e300"),a=n("183a"),s=n("01d4"),l=n("9c78"),c=n("509b"),h=n("0b2d"),p=n("d079"),u=n("0ec0"),d=n("617d"),y=n("57cb"),_=n("1e8d"),v=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),f=function(t){function e(e,n){var i=t.call(this,e)||this;i.map_=e,i.clickTimeoutId_,i.emulateClicks_=!1,i.dragging_=!1,i.dragListenerKeys_=[],i.moveTolerance_=void 0===n?1:n,i.down_=null;var r=i.map_.getViewport();return i.activePointers_=0,i.trackedTouches_={},i.element_=r,i.pointerdownListenerKey_=Object(_["a"])(r,p["a"].POINTERDOWN,i.handlePointerDown_,i),i.originalPointerMoveEvent_,i.relayedListenerKey_=Object(_["a"])(r,p["a"].POINTERMOVE,i.relayEvent_,i),i.boundHandleTouchMove_=i.handleTouchMove_.bind(i),i.element_.addEventListener(s["a"].TOUCHMOVE,i.boundHandleTouchMove_,!!d["e"]&&{passive:!1}),i}return v(e,t),e.prototype.emulateClick_=function(t){var e=new c["a"](h["a"].CLICK,this.map_,t);this.dispatchEvent(e),void 0!==this.clickTimeoutId_?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new c["a"](h["a"].DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(function(){this.clickTimeoutId_=void 0;var e=new c["a"](h["a"].SINGLECLICK,this.map_,t);this.dispatchEvent(e)}.bind(this),250)},e.prototype.updateActivePointers_=function(t){var e=t;e.type==h["a"].POINTERUP||e.type==h["a"].POINTERCANCEL?delete this.trackedTouches_[e.pointerId]:e.type==h["a"].POINTERDOWN&&(this.trackedTouches_[e.pointerId]=!0),this.activePointers_=Object.keys(this.trackedTouches_).length},e.prototype.handlePointerUp_=function(t){this.updateActivePointers_(t);var e=new c["a"](h["a"].POINTERUP,this.map_,t);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),0===this.activePointers_&&(this.dragListenerKeys_.forEach(_["c"]),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)},e.prototype.isMouseActionButton_=function(t){return 0===t.button},e.prototype.handlePointerDown_=function(t){this.emulateClicks_=0===this.activePointers_,this.updateActivePointers_(t);var e=new c["a"](h["a"].POINTERDOWN,this.map_,t);for(var n in this.dispatchEvent(e),this.down_={},t){var i=t[n];this.down_[n]="function"===typeof i?y["c"]:i}if(0===this.dragListenerKeys_.length){var r=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Object(_["a"])(r,h["a"].POINTERMOVE,this.handlePointerMove_,this),Object(_["a"])(r,h["a"].POINTERUP,this.handlePointerUp_,this),Object(_["a"])(this.element_,h["a"].POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==r&&this.dragListenerKeys_.push(Object(_["a"])(this.element_.getRootNode(),h["a"].POINTERUP,this.handlePointerUp_,this))}},e.prototype.handlePointerMove_=function(t){if(this.isMoving_(t)){this.dragging_=!0;var e=new c["a"](h["a"].POINTERDRAG,this.map_,t,this.dragging_);this.dispatchEvent(e)}},e.prototype.relayEvent_=function(t){this.originalPointerMoveEvent_=t;var e=!(!this.down_||!this.isMoving_(t));this.dispatchEvent(new c["a"](t.type,this.map_,t,e))},e.prototype.handleTouchMove_=function(t){var e=this.originalPointerMoveEvent_;e&&!e.defaultPrevented||"boolean"===typeof t.cancelable&&!0!==t.cancelable||t.preventDefault()},e.prototype.isMoving_=function(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_},e.prototype.disposeInternal=function(){this.relayedListenerKey_&&(Object(_["c"])(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(s["a"].TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(Object(_["c"])(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(_["c"]),this.dragListenerKeys_.length=0,this.element_=null,t.prototype.disposeInternal.call(this)},e}(u["a"]),g=f,E=n("7238"),m=n("592d"),O={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},w=n("7b4f"),b=n("070d"),T=n("57cc"),P=n("a2c7"),L=n("496f"),I=n("a896"),R=n("92fa"),C=n("0af5"),A=n("256f"),x=n("345d"),j=n("0999"),S=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),N=function(t){function e(e){var n=t.call(this)||this;n.on,n.once,n.un;var i=D(e);n.boundHandleBrowserEvent_=n.handleBrowserEvent.bind(n),n.maxTilesLoading_=void 0!==e.maxTilesLoading?e.maxTilesLoading:16,n.pixelRatio_=void 0!==e.pixelRatio?e.pixelRatio:d["a"],n.postRenderTimeoutHandle_,n.animationDelayKey_,n.animationDelay_=function(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}.bind(n),n.coordinateToPixelTransform_=Object(I["c"])(),n.pixelToCoordinateTransform_=Object(I["c"])(),n.frameIndex_=0,n.frameState_=null,n.previousExtent_=null,n.viewPropertyListenerKey_=null,n.viewChangeListenerKey_=null,n.layerGroupPropertyListenerKeys_=null,n.viewport_=document.createElement("div"),n.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),n.viewport_.style.position="relative",n.viewport_.style.overflow="hidden",n.viewport_.style.width="100%",n.viewport_.style.height="100%",n.overlayContainer_=document.createElement("div"),n.overlayContainer_.style.position="absolute",n.overlayContainer_.style.zIndex="0",n.overlayContainer_.style.width="100%",n.overlayContainer_.style.height="100%",n.overlayContainer_.style.pointerEvents="none",n.overlayContainer_.className="ol-overlaycontainer",n.viewport_.appendChild(n.overlayContainer_),n.overlayContainerStopEvent_=document.createElement("div"),n.overlayContainerStopEvent_.style.position="absolute",n.overlayContainerStopEvent_.style.zIndex="0",n.overlayContainerStopEvent_.style.width="100%",n.overlayContainerStopEvent_.style.height="100%",n.overlayContainerStopEvent_.style.pointerEvents="none",n.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",n.viewport_.appendChild(n.overlayContainerStopEvent_),n.mapBrowserEventHandler_=null,n.moveTolerance_=e.moveTolerance,n.keyboardEventTarget_=i.keyboardEventTarget,n.keyHandlerKeys_=null,n.controls=i.controls||new o["a"],n.interactions=i.interactions||new o["a"],n.overlays_=i.overlays,n.overlayIdIndex_={},n.renderer_=null,n.handleResize_,n.postRenderFunctions_=[],n.tileQueue_=new T["a"](n.getTilePriority.bind(n),n.handleTileChange_.bind(n)),n.addChangeListener(O.LAYERGROUP,n.handleLayerGroupChanged_),n.addChangeListener(O.VIEW,n.handleViewChanged_),n.addChangeListener(O.SIZE,n.handleSizeChanged_),n.addChangeListener(O.TARGET,n.handleTargetChanged_),n.setProperties(i.values);var r=n;return!e.view||e.view instanceof P["a"]||e.view.then((function(t){r.setView(new P["a"](t))})),n.controls.addEventListener(a["a"].ADD,function(t){t.element.setMap(this)}.bind(n)),n.controls.addEventListener(a["a"].REMOVE,function(t){t.element.setMap(null)}.bind(n)),n.interactions.addEventListener(a["a"].ADD,function(t){t.element.setMap(this)}.bind(n)),n.interactions.addEventListener(a["a"].REMOVE,function(t){t.element.setMap(null)}.bind(n)),n.overlays_.addEventListener(a["a"].ADD,function(t){this.addOverlayInternal_(t.element)}.bind(n)),n.overlays_.addEventListener(a["a"].REMOVE,function(t){var e=t.element,n=e.getId();void 0!==n&&delete this.overlayIdIndex_[n.toString()],t.element.setMap(null)}.bind(n)),n.controls.forEach(function(t){t.setMap(this)}.bind(n)),n.interactions.forEach(function(t){t.setMap(this)}.bind(n)),n.overlays_.forEach(n.addOverlayInternal_.bind(n)),n}return S(e,t),e.prototype.createRenderer=function(){throw new Error("Use a map type that has a createRenderer method")},e.prototype.addControl=function(t){this.getControls().push(t)},e.prototype.addInteraction=function(t){this.getInteractions().push(t)},e.prototype.addLayer=function(t){var e=this.getLayerGroup().getLayers();e.push(t)},e.prototype.addOverlay=function(t){this.getOverlays().push(t)},e.prototype.addOverlayInternal_=function(t){var e=t.getId();void 0!==e&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)},e.prototype.disposeInternal=function(){this.setTarget(null),t.prototype.disposeInternal.call(this)},e.prototype.forEachFeatureAtPixel=function(t,e,n){if(this.frameState_){var i=this.getCoordinateFromPixelInternal(t);n=void 0!==n?n:{};var r=void 0!==n.hitTolerance?n.hitTolerance:0,o=void 0!==n.layerFilter?n.layerFilter:y["b"],a=!1!==n.checkWrapped;return this.renderer_.forEachFeatureAtCoordinate(i,this.frameState_,r,a,e,null,o,null)}},e.prototype.getFeaturesAtPixel=function(t,e){var n=[];return this.forEachFeatureAtPixel(t,(function(t){n.push(t)}),e),n},e.prototype.forEachLayerAtPixel=function(t,e,n){if(this.frameState_){var i=n||{},r=void 0!==i.hitTolerance?i.hitTolerance:0,o=i.layerFilter||y["b"];return this.renderer_.forEachLayerAtPixel(t,this.frameState_,r,e,o)}},e.prototype.hasFeatureAtPixel=function(t,e){if(!this.frameState_)return!1;var n=this.getCoordinateFromPixelInternal(t);e=void 0!==e?e:{};var i=void 0!==e.layerFilter?e.layerFilter:y["b"],r=void 0!==e.hitTolerance?e.hitTolerance:0,o=!1!==e.checkWrapped;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,r,o,i,null)},e.prototype.getEventCoordinate=function(t){return this.getCoordinateFromPixel(this.getEventPixel(t))},e.prototype.getEventCoordinateInternal=function(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))},e.prototype.getEventPixel=function(t){var e=this.viewport_.getBoundingClientRect(),n="changedTouches"in t?t.changedTouches[0]:t;return[n.clientX-e.left,n.clientY-e.top]},e.prototype.getTarget=function(){return this.get(O.TARGET)},e.prototype.getTargetElement=function(){var t=this.getTarget();return void 0!==t?"string"===typeof t?document.getElementById(t):t:null},e.prototype.getCoordinateFromPixel=function(t){return Object(A["m"])(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())},e.prototype.getCoordinateFromPixelInternal=function(t){var e=this.frameState_;return e?Object(I["a"])(e.pixelToCoordinateTransform,t.slice()):null},e.prototype.getControls=function(){return this.controls},e.prototype.getOverlays=function(){return this.overlays_},e.prototype.getOverlayById=function(t){var e=this.overlayIdIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getInteractions=function(){return this.interactions},e.prototype.getLayerGroup=function(){return this.get(O.LAYERGROUP)},e.prototype.setLayers=function(t){var e=this.getLayerGroup();if(t instanceof o["a"])e.setLayers(t);else{var n=e.getLayers();n.clear(),n.extend(t)}},e.prototype.getLayers=function(){var t=this.getLayerGroup().getLayers();return t},e.prototype.getLoading=function(){for(var t=this.getLayerGroup().getLayerStatesArray(),e=0,n=t.length;e<n;++e){var i=t[e].layer,r=i.getSource();if(r&&r.loading)return!0}return!1},e.prototype.getPixelFromCoordinate=function(t){var e=Object(A["e"])(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)},e.prototype.getPixelFromCoordinateInternal=function(t){var e=this.frameState_;return e?Object(I["a"])(e.coordinateToPixelTransform,t.slice(0,2)):null},e.prototype.getRenderer=function(){return this.renderer_},e.prototype.getSize=function(){return this.get(O.SIZE)},e.prototype.getView=function(){return this.get(O.VIEW)},e.prototype.getViewport=function(){return this.viewport_},e.prototype.getOverlayContainer=function(){return this.overlayContainer_},e.prototype.getOverlayContainerStopEvent=function(){return this.overlayContainerStopEvent_},e.prototype.getOwnerDocument=function(){var t=this.getTargetElement();return t?t.ownerDocument:document},e.prototype.getTilePriority=function(t,e,n,i){return Object(T["b"])(this.frameState_,t,e,n,i)},e.prototype.handleBrowserEvent=function(t,e){var n=e||t.type,i=new c["a"](n,this,t);this.handleMapBrowserEvent(i)},e.prototype.handleMapBrowserEvent=function(t){if(this.frameState_){var e=t.originalEvent,n=e.type;if(n===p["a"].POINTERDOWN||n===s["a"].WHEEL||n===s["a"].KEYDOWN){var i=this.getOwnerDocument(),r=this.viewport_.getRootNode?this.viewport_.getRootNode():i,o=e.target;if(this.overlayContainerStopEvent_.contains(o)||!(r===i?i.documentElement:r).contains(o))return}if(t.frameState=this.frameState_,!1!==this.dispatchEvent(t))for(var a=this.getInteractions().getArray().slice(),l=a.length-1;l>=0;l--){var c=a[l];if(c.getMap()===this&&c.getActive()&&this.getTargetElement()){var h=c.handleEvent(t);if(!h||t.propagationStopped)break}}}},e.prototype.handlePostRender=function(){var t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){var n=this.maxTilesLoading_,i=n;if(t){var r=t.viewHints;if(r[L["a"].ANIMATING]||r[L["a"].INTERACTING]){var o=Date.now()-t.time>8;n=o?0:8,i=o?0:2}}e.getTilesLoading()<n&&(e.reprioritize(),e.loadMoreTiles(n,i))}!t||!this.hasListener(b["a"].RENDERCOMPLETE)||t.animate||this.tileQueue_.getTilesLoading()||this.getLoading()||this.renderer_.dispatchRenderEvent(b["a"].RENDERCOMPLETE,t);for(var a=this.postRenderFunctions_,s=0,l=a.length;s<l;++s)a[s](this,t);a.length=0},e.prototype.handleSizeChanged_=function(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()},e.prototype.handleTargetChanged_=function(){var t;if(this.getTarget()&&(t=this.getTargetElement()),this.mapBrowserEventHandler_){for(var e=0,n=this.keyHandlerKeys_.length;e<n;++e)Object(_["c"])(this.keyHandlerKeys_[e]);this.keyHandlerKeys_=null,this.viewport_.removeEventListener(s["a"].CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(s["a"].WHEEL,this.boundHandleBrowserEvent_),void 0!==this.handleResize_&&(removeEventListener(s["a"].RESIZE,this.handleResize_,!1),this.handleResize_=void 0),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Object(j["c"])(this.viewport_)}if(t){for(var i in t.appendChild(this.viewport_),this.renderer_||(this.renderer_=this.createRenderer()),this.mapBrowserEventHandler_=new g(this,this.moveTolerance_),h["a"])this.mapBrowserEventHandler_.addEventListener(h["a"][i],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(s["a"].CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(s["a"].WHEEL,this.boundHandleBrowserEvent_,!!d["e"]&&{passive:!1});var r=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.keyHandlerKeys_=[Object(_["a"])(r,s["a"].KEYDOWN,this.handleBrowserEvent,this),Object(_["a"])(r,s["a"].KEYPRESS,this.handleBrowserEvent,this)],this.handleResize_||(this.handleResize_=this.updateSize.bind(this),window.addEventListener(s["a"].RESIZE,this.handleResize_,!1))}else this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);this.updateSize()},e.prototype.handleTileChange_=function(){this.render()},e.prototype.handleViewPropertyChanged_=function(){this.render()},e.prototype.handleViewChanged_=function(){this.viewPropertyListenerKey_&&(Object(_["c"])(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(Object(_["c"])(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);var t=this.getView();t&&(this.updateViewportSize_(),this.viewPropertyListenerKey_=Object(_["a"])(t,w["a"].PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Object(_["a"])(t,s["a"].CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()},e.prototype.handleLayerGroupChanged_=function(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(_["c"]),this.layerGroupPropertyListenerKeys_=null);var t=this.getLayerGroup();t&&(this.layerGroupPropertyListenerKeys_=[Object(_["a"])(t,w["a"].PROPERTYCHANGE,this.render,this),Object(_["a"])(t,s["a"].CHANGE,this.render,this)]),this.render()},e.prototype.isRendered=function(){return!!this.frameState_},e.prototype.renderSync=function(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()},e.prototype.redrawText=function(){for(var t=this.getLayerGroup().getLayerStatesArray(),e=0,n=t.length;e<n;++e){var i=t[e].layer;i.hasRenderer()&&i.getRenderer().handleFontsChanged()}},e.prototype.render=function(){this.renderer_&&void 0===this.animationDelayKey_&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))},e.prototype.removeControl=function(t){return this.getControls().remove(t)},e.prototype.removeInteraction=function(t){return this.getInteractions().remove(t)},e.prototype.removeLayer=function(t){var e=this.getLayerGroup().getLayers();return e.remove(t)},e.prototype.removeOverlay=function(t){return this.getOverlays().remove(t)},e.prototype.renderFrame_=function(t){var e=this,n=this.getSize(),i=this.getView(),r=this.frameState_,o=null;if(void 0!==n&&Object(x["a"])(n)&&i&&i.isDef()){var a=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),s=i.getState();if(o={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:Object(C["y"])(s.center,s.resolution,s.rotation,n),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:n,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:s,viewHints:a,wantedTiles:{}},s.nextCenter&&s.nextResolution){var l=isNaN(s.nextRotation)?s.rotation:s.nextRotation;o.nextExtent=Object(C["y"])(s.nextCenter,s.nextResolution,l,n)}}if(this.frameState_=o,this.renderer_.renderFrame(o),o){if(o.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,o.postRenderFunctions),r){var c=!this.previousExtent_||!Object(C["G"])(this.previousExtent_)&&!Object(C["o"])(o.extent,this.previousExtent_);c&&(this.dispatchEvent(new E["a"](m["a"].MOVESTART,this,r)),this.previousExtent_=Object(C["l"])(this.previousExtent_))}var h=this.previousExtent_&&!o.viewHints[L["a"].ANIMATING]&&!o.viewHints[L["a"].INTERACTING]&&!Object(C["o"])(o.extent,this.previousExtent_);h&&(this.dispatchEvent(new E["a"](m["a"].MOVEEND,this,o)),Object(C["d"])(o.extent,this.previousExtent_))}this.dispatchEvent(new E["a"](m["a"].POSTRENDER,this,o)),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout((function(){e.postRenderTimeoutHandle_=void 0,e.handlePostRender()}),0))},e.prototype.setLayerGroup=function(t){this.set(O.LAYERGROUP,t)},e.prototype.setSize=function(t){this.set(O.SIZE,t)},e.prototype.setTarget=function(t){this.set(O.TARGET,t)},e.prototype.setView=function(t){if(!t||t instanceof P["a"])this.set(O.VIEW,t);else{this.set(O.VIEW,new P["a"]);var e=this;t.then((function(t){e.setView(new P["a"](t))}))}},e.prototype.updateSize=function(){var t=this.getTargetElement(),e=void 0;if(t){var n=getComputedStyle(t),i=t.offsetWidth-parseFloat(n["borderLeftWidth"])-parseFloat(n["paddingLeft"])-parseFloat(n["paddingRight"])-parseFloat(n["borderRightWidth"]),r=t.offsetHeight-parseFloat(n["borderTopWidth"])-parseFloat(n["paddingTop"])-parseFloat(n["paddingBottom"])-parseFloat(n["borderBottomWidth"]);isNaN(i)||isNaN(r)||(e=[i,r],!Object(x["a"])(e)&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)&&console.warn("No map visible because the map container's width or height are 0."))}this.setSize(e),this.updateViewportSize_()},e.prototype.updateViewportSize_=function(){var t=this.getView();if(t){var e=void 0,n=getComputedStyle(this.viewport_);n.width&&n.height&&(e=[parseInt(n.width,10),parseInt(n.height,10)]),t.setViewportSize(e)}},e}(r["a"]);function D(t){var e=null;void 0!==t.keyboardEventTarget&&(e="string"===typeof t.keyboardEventTarget?document.getElementById(t.keyboardEventTarget):t.keyboardEventTarget);var n,i,r,a={},s=t.layers&&"function"===typeof t.layers.getLayers?t.layers:new l["a"]({layers:t.layers});return a[O.LAYERGROUP]=s,a[O.TARGET]=t.target,a[O.VIEW]=t.view instanceof P["a"]?t.view:new P["a"],void 0!==t.controls&&(Array.isArray(t.controls)?n=new o["a"](t.controls.slice()):(Object(R["a"])("function"===typeof t.controls.getArray,47),n=t.controls)),void 0!==t.interactions&&(Array.isArray(t.interactions)?i=new o["a"](t.interactions.slice()):(Object(R["a"])("function"===typeof t.interactions.getArray,48),i=t.interactions)),void 0!==t.overlays?Array.isArray(t.overlays)?r=new o["a"](t.overlays.slice()):(Object(R["a"])("function"===typeof t.overlays.getArray,49),r=t.overlays):r=new o["a"],{controls:n,interactions:i,keyboardEventTarget:e,overlays:r,values:a}}var K=N,M=n("38f3"),V=n("21bc"),F=n("3a39"),G=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),H=function(t){function e(e){var n=this;return e=Object(M["a"])({},e),e.controls||(e.controls=Object(V["a"])()),e.interactions||(e.interactions=Object(F["a"])({onFocusOnly:!0})),n=t.call(this,e)||this,n}return G(e,t),e.prototype.createRenderer=function(){return new i["a"](this)},e}(K);e["a"]=H},6611:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("01d4"),r=n("0ec0"),o=n("1300"),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(t){function e(e,n,i,r){var o=t.call(this)||this;return o.extent=e,o.pixelRatio_=i,o.resolution=n,o.state=r,o}return a(e,t),e.prototype.changed=function(){this.dispatchEvent(i["a"].CHANGE)},e.prototype.getExtent=function(){return this.extent},e.prototype.getImage=function(){return Object(o["b"])()},e.prototype.getPixelRatio=function(){return this.pixelRatio_},e.prototype.getResolution=function(){return this.resolution},e.prototype.getState=function(){return this.state},e.prototype.load=function(){Object(o["b"])()},e}(r["a"]),l=s,c=n("869f"),h=n("617d"),p=n("0af5"),u=n("1e8d"),d=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();(function(t){function e(e,n,i,r,o,a){var s=t.call(this,e,n,i,c["a"].IDLE)||this;return s.src_=r,s.image_=new Image,null!==o&&(s.image_.crossOrigin=o),s.unlisten_=null,s.state=c["a"].IDLE,s.imageLoadFunction_=a,s}d(e,t),e.prototype.getImage=function(){return this.image_},e.prototype.handleImageError_=function(){this.state=c["a"].ERROR,this.unlistenImage_(),this.changed()},e.prototype.handleImageLoad_=function(){void 0===this.resolution&&(this.resolution=Object(p["z"])(this.extent)/this.image_.height),this.state=c["a"].LOADED,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state!=c["a"].IDLE&&this.state!=c["a"].ERROR||(this.state=c["a"].LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=y(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.setImage=function(t){this.image_=t,this.resolution=Object(p["z"])(this.extent)/this.image_.height},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}})(l);function y(t,e,n){var r=t;if(r.src&&h["c"]){var o=r.decode(),a=!0,s=function(){a=!1};return o.then((function(){a&&e()})).catch((function(t){a&&("EncodingError"===t.name&&"Invalid image type."===t.message?e():n())})),s}var l=[Object(u["b"])(r,i["a"].LOAD,e),Object(u["b"])(r,i["a"].ERROR,n)];return function(){l.forEach(u["c"])}}},7238:function(t,e,n){"use strict";var i=n("cef7"),r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=function(t){function e(e,n,i){var r=t.call(this,e)||this;return r.map=n,r.frameState=void 0!==i?i:null,r}return r(e,t),e}(i["a"]);e["a"]=o},"7b4f":function(t,e,n){"use strict";e["a"]={PROPERTYCHANGE:"propertychange"}},"7f98":function(t,e,n){"use strict";var i=n("5e31"),r=n("acc1"),o=n("0999"),a=n("6611"),s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),l=function(t){function e(e,n,i,r,o,a){var s=t.call(this,e,n,a)||this;return s.crossOrigin_=r,s.src_=i,s.key=i,s.image_=new Image,null!==r&&(s.image_.crossOrigin=r),s.unlisten_=null,s.tileLoadFunction_=o,s}return s(e,t),e.prototype.getImage=function(){return this.image_},e.prototype.setImage=function(t){this.image_=t,this.state=r["a"].LOADED,this.unlistenImage_(),this.changed()},e.prototype.handleImageError_=function(){this.state=r["a"].ERROR,this.unlistenImage_(),this.image_=c(),this.changed()},e.prototype.handleImageLoad_=function(){var t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=r["a"].LOADED:this.state=r["a"].EMPTY,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state==r["a"].ERROR&&(this.state=r["a"].IDLE,this.image_=new Image,null!==this.crossOrigin_&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==r["a"].IDLE&&(this.state=r["a"].LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Object(a["a"])(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(i["a"]);function c(){var t=Object(o["a"])(1,1);return t.fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),t.canvas}e["a"]=l},"869f":function(t,e,n){"use strict";e["a"]={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},e269:function(t,e,n){"use strict";var i=n("cef7"),r=n("7b4f"),o=n("35a7"),a=n("38f3"),s=n("1300"),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),c=function(t){function e(e,n,i){var r=t.call(this,e)||this;return r.key=n,r.oldValue=i,r}return l(e,t),e}(i["a"]),h=function(t){function e(e){var n=t.call(this)||this;return n.on,n.once,n.un,Object(s["c"])(n),n.values_=null,void 0!==e&&n.setProperties(e),n}return l(e,t),e.prototype.get=function(t){var e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e},e.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},e.prototype.getProperties=function(){return this.values_&&Object(a["a"])({},this.values_)||{}},e.prototype.hasProperties=function(){return!!this.values_},e.prototype.notify=function(t,e){var n;n="change:"+t,this.dispatchEvent(new c(n,t,e)),n=r["a"].PROPERTYCHANGE,this.dispatchEvent(new c(n,t,e))},e.prototype.addChangeListener=function(t,e){this.addEventListener("change:"+t,e)},e.prototype.removeChangeListener=function(t,e){this.removeEventListener("change:"+t,e)},e.prototype.set=function(t,e,n){var i=this.values_||(this.values_={});if(n)i[t]=e;else{var r=i[t];i[t]=e,r!==e&&this.notify(t,r)}},e.prototype.setProperties=function(t,e){for(var n in t)this.set(n,t[n],e)},e.prototype.applyProperties=function(t){t.values_&&Object(a["a"])(this.values_||(this.values_={}),t.values_)},e.prototype.unset=function(t,e){if(this.values_&&t in this.values_){var n=this.values_[t];delete this.values_[t],Object(a["d"])(this.values_)&&(this.values_=null),e||this.notify(t,n)}},e}(o["a"]);e["a"]=h}}]);
//# sourceMappingURL=chunk-f569afc8.3341b055.js.map