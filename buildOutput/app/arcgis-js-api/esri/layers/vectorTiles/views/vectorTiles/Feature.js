//>>built
define(["require","exports","../2d/engine/webgl/Geometry"],function(n,p,l){return function(){function m(a,d){this.values={};var b=d.keys;for(d=d.values;a.next();)switch(a.tag()){case 1:this.id=a.getUInt64();break;case 2:for(var c=a.getMessage(),h=this.values;!c.empty();){var f=c.getUInt32(),e=c.getUInt32();h[b[f]]=d[e]}break;case 3:this.type=a.getUInt32();break;case 4:this._pbfGeometry=a.getMessage();break;default:a.skip()}}return m.prototype.getGeometry=function(a){if(void 0!==this._geometry)return this._geometry;
var d,b,c=this._pbfGeometry;a?a.reset(this.type):d=[];for(var h=1,f=0,e=0,g=0;!c.empty();)switch(0===f&&(f=c.getUInt32(),h=7&f,f>>=3),f--,h){case 1:e+=c.getSInt32();g+=c.getSInt32();a?a.moveTo(e,g):(b&&d.push(b),b=[],b.push(new l.Point(e,g)));break;case 2:e+=c.getSInt32();g+=c.getSInt32();a?a.lineTo(e,g):b.push(new l.Point(e,g));break;case 7:a?a.close():b&&!b[0].equals(e,g)&&b.push(b[0].clone());break;default:throw Error("Invalid path operation");}var k;return a?k=a.result():(b&&d.push(b),k=d),this._geometry=
k,k},m}()});