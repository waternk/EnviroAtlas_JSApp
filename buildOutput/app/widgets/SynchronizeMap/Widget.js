//>>built
define("dojo/_base/declare dojo/_base/html dojo/sniff dijit/_WidgetsInTemplateMixin jimu/BaseWidget esri/geometry/Extent esri/SpatialReference jimu/utils dojo/_base/lang dojo/on dojo/dom-style dojo/dom-class dojo/aspect dojo/Deferred".split(" "),function(e,n,p,f,g,h,k,q,l,m,r,t,u,v){return e([g,f],{baseClass:"jimu-widget-synchronizemap",name:"SynchronizeMap",startup:function(){var a=this.map;this.inherited(arguments);var c=window.parent.document.getElementById("selNumOfFram");c&&(c.selectedIndex=
0);var d=window.changedExtentByOtherFrameXmin;Object.defineProperty(window,"changedExtentByOtherFrameXmin",{set:function(c){null===c&&alert("new value is null!");var b=new h;b.xmin=window.changedExtentByOtherFrameXmin;b.ymin=window.changedExtentByOtherFrameYmin;b.xmax=window.changedExtentByOtherFrameXmax;b.ymax=window.changedExtentByOtherFrameYmax;b.spatialReference=new k(3857);1==window.frameBeClicked&&"app2"==window.frameElement.name&&a.setExtent(b);2==window.frameBeClicked&&"app1"==window.frameElement.name&&
a.setExtent(b);d=c},get:function(){return d}});this.own(m(this.map,"extent-change",l.hitch(this,"onExtentChange")))},onExtentChange:function(a){1==window.frameBeClicked&&"app1"==window.frameElement.name&&window.parent.document.getElementById("chkSynchronizeMap").checked&&(window.parent.frames.app2.changedExtentByOtherFrameXmin=a.extent.xmin,window.parent.frames.app2.changedExtentByOtherFrameXmax=a.extent.xmax,window.parent.frames.app2.changedExtentByOtherFrameYmin=a.extent.ymin,window.parent.frames.app2.changedExtentByOtherFrameYmax=
a.extent.ymax,window.parent.frames.app2.changedExtentByOtherFrameXmin=a.extent.xmin+1E-13,window.parent.frames.app2.changedExtentByOtherFrameXmax=a.extent.xmax+1E-13,window.parent.frames.app2.changedExtentByOtherFrameYmin=a.extent.ymin+1E-13,window.parent.frames.app2.changedExtentByOtherFrameYmax=a.extent.ymax+1E-13);2==window.frameBeClicked&&"app2"==window.frameElement.name&&window.parent.document.getElementById("chkSynchronizeMap").checked&&(window.parent.frames.app1.changedExtentByOtherFrameXmin=
a.extent.xmin,window.parent.frames.app1.changedExtentByOtherFrameXmax=a.extent.xmax,window.parent.frames.app1.changedExtentByOtherFrameYmin=a.extent.ymin,window.parent.frames.app1.changedExtentByOtherFrameYmax=a.extent.ymax,window.parent.frames.app1.changedExtentByOtherFrameXmin=a.extent.xmin+1E-13,window.parent.frames.app1.changedExtentByOtherFrameXmax=a.extent.xmax+1E-13,window.parent.frames.app1.changedExtentByOtherFrameYmin=a.extent.ymin+1E-13,window.parent.frames.app1.changedExtentByOtherFrameYmax=
a.extent.ymax+1E-13)},onOpen:function(){}})});