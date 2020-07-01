//>>built
define("require exports ./enums ./MaterialInfoUtils ./MaterialInfoUtils_updateMaterialVariations ./MaterialKeyInfo ./util/serializationUtils".split(" "),function(n,g,d,p,r,h,k){Object.defineProperty(g,"__esModule",{value:!0});var l=function(){function c(b,c,e){this.unit=b;this.pageId=c;this.semantic=e}return c.prototype.clone=function(){return new c(this.unit,this.pageId,this.semantic)},c.prototype.serialize=function(b){return b.writeInt32(this.unit),b.writeInt32(this.pageId),b},c.deserialize=function(b){return new c(b.readInt32(),
b.readInt32(),"u_texture")},c}();g.TexBindingInfo=l;var q=function(){function c(b,c){this.name=b;this.value=c}return c.prototype.clone=function(){return new c(this.name,this.value)},c.prototype.serialize=function(b){return b.writeInt32(this.value),b},c.deserialize=function(b){return new c("u_my_param",b.readInt32())},c}();g.MaterialParam=q;n=function(){function c(){this.texBindingInfo=[];this.materialParams=[]}return c.fromSprite=function(b,m,e){var f=new c,a=new h;return a.geometryType=m,b?(a.sdf=
b.sdf,a.pattern=!0,f.texBindingInfo.push(new l(1,b.page,"u_texture"))):(a.sdf=!1,a.pattern=!1),0===e?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=0!=(e&d.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!=(e&d.WGLVVFlag.SIZE_MINMAX_VALUE),a.vvSizeScaleStops=0!=(e&d.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!=(e&d.WGLVVFlag.SIZE_FIELD_STOPS),a.vvSizeUnitValue=0!=(e&d.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!=(e&d.WGLVVFlag.COLOR),
a.vvRotation=0!=(e&d.WGLVVFlag.ROTATION)),a.visibility=!1,f.materialKey=p.getMaterialKey(a),f.materialKeyInfo=a,f},c.fromGlyph=function(b,m,e){var f=new c,a=new h;return a.geometryType=m,a.sdf=!0,a.pattern=!1,a.visibility=!1,a.heatmap=!1,f.texBindingInfo.push(new l(2,b.page,"u_texture")),0===e?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=0!=(e&d.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!=(e&d.WGLVVFlag.SIZE_MINMAX_VALUE),
a.vvSizeScaleStops=0!=(e&d.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!=(e&d.WGLVVFlag.SIZE_FIELD_STOPS),a.vvSizeUnitValue=0!=(e&d.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!=(e&d.WGLVVFlag.COLOR),a.vvRotation=0!=(e&d.WGLVVFlag.ROTATION)),f.materialKey=p.getMaterialKey(a),f.materialKeyInfo=a,f},c.prototype.copy=function(b){this.materialParams=b.materialParams.map(function(b){return b.clone()});this.texBindingInfo=b.texBindingInfo.map(function(b){return b.clone()});b.materialKeyInfo&&(this.materialKeyInfo=
new h,this.materialKeyInfo.copy(b.materialKeyInfo));this.materialKey=b.materialKey},c.prototype.serialize=function(b){return b.writeInt32(this.materialKey),k.serializeList(b,this.texBindingInfo),k.serializeList(b,this.materialParams),b},c.deserialize=function(b){var d=new c;return d.materialKey=b.readInt32(),d.texBindingInfo=k.deserializeList(b,l),d.materialParams=k.deserializeList(b,q),d.materialKeyInfo=new h,r(d.materialKeyInfo,d.materialKey),d},c}();g.default=n});