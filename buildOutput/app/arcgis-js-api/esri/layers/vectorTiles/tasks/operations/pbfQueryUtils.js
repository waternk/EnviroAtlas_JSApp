//>>built
define("require exports ../../core/Error ../../core/Logger ../../core/pbf ../../layers/graphics/optimizedFeatures".split(" "),function(S,B,J,H,N,C){function K(b){if(b>=D.length){var e=new J("query:parsing-pbf","Error while parsing FeatureSet PBF payload. Unknown GeometryType");L.error(e)}return D[b]}function I(b){var e,a=e||(e={});a[a.STRING=1]="STRING";a[a.FLOAT=2]="FLOAT";a[a.DOUBLE=3]="DOUBLE";a[a.SINT32=4]="SINT32";a[a.UINT32=5]="UINT32";a[a.INT64=6]="INT64";a[a.UINT64=7]="UINT64";a[a.SINT64=
8]="SINT64";for(a[a.BOOL=9]="BOOL";b.next();)switch(b.tag()){case e.STRING:return b.getString();case e.FLOAT:return b.getFloat();case e.DOUBLE:return b.getDouble();case e.SINT32:return b.getSInt32();case e.UINT32:return b.getUInt32();case e.INT64:return b.getInt64();case e.UINT64:return b.getUInt64();case e.SINT64:return b.getSInt64();case e.BOOL:return b.getBool();default:return b.skip(),null}return null}function O(b){var e,a=e||(e={});a[a.NAME=1]="NAME";a[a.TYPE=2]="TYPE";a[a.ALIAS=3]="ALIAS";a[a.SQL_TYPE=
4]="SQL_TYPE";a[a.DOMAIN=5]="DOMAIN";a[a.DEFAULT_VALUE=6]="DEFAULT_VALUE";!0;for(a={type:F[0]};b.next();)switch(b.tag()){case e.NAME:a.name=b.getString();break;case e.TYPE:a.type=F[b.getEnum()];break;case e.ALIAS:a.alias=b.getString();break;case e.SQL_TYPE:a.sqlType=P[b.getEnum()];break;case e.DOMAIN:case e.DEFAULT_VALUE:b.skip();break;default:b.skip()}return a}function Q(b,e){var a,k=a||(a={});k[k.ATTRIBUTES=1]="ATTRIBUTES";k[k.GEOMETRY=2]="GEOMETRY";k[k.CENTROID=4]="CENTROID";!0;for(var k=new C.OptimizedFeature,
G=0;b.next();)switch(b.tag()){case a.ATTRIBUTES:var f=b.getMessage(),n=e[G++].name;k.attributes[n]=I(f);break;case a.GEOMETRY:var f=b.getMessage(),c=(n=void 0,n={});c[c.TYPE=1]="TYPE";c[c.LENGTHS=2]="LENGTHS";c[c.COORDS=3]="COORDS";!0;for(var c=new C.OptimizedGeometry,h=c.coords,d=c.lengths;f.next();)switch(f.tag()){case n.LENGTHS:for(var g=f.getUInt32(),g=f.pos()+g;f.pos()<g;)d.push(f.getUInt32());break;case n.COORDS:for(var g=f.getUInt32(),g=f.pos()+g,t=0;f.pos()<g;)h[t++]=f.getSInt64();break;default:f.skip()}k.geometry=
c;break;case a.CENTROID:f=b.getMessage();c=(n=void 0,n={});c[c.TYPE=1]="TYPE";c[c.LENGTHS=2]="LENGTHS";c[c.COORDS=3]="COORDS";!0;c=new C.OptimizedGeometry;for(h=c.coords;f.next();)switch(f.tag()){case n.COORDS:d=f.getUInt32();d=f.pos()+d;for(g=0;f.pos()<d;)h[g++]=f.getSInt64();break;default:f.skip()}k.centroid=c;break;default:b.skip()}return k}Object.defineProperty(B,"__esModule",{value:!0});var L=H.getLogger("esri.tasks.operations.pbfQueryUtils"),F="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),
P="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),D=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],M=["upperLeft",
"lowerLeft"];B.parsePBFFeatureQuery=function(b){try{var e,a=e||(e={});a[a.QUERY_RESULT=2]="QUERY_RESULT";!0;for(var k=new N(new Uint8Array(b),new DataView(b)),G;k.next();)switch(k.tag()){case e.QUERY_RESULT:var f=k.getMessage(),n=(b=void 0,b={});n[n.FEATURE_RESULT=1]="FEATURE_RESULT";!0;for(a={};f.next();)switch(f.tag()){case b.FEATURE_RESULT:var c=f.getMessage(),h=void 0,d=h||(h={});d[d.OBJECT_ID_NAME=1]="OBJECT_ID_NAME";d[d.UNIQUE_ID_NAME=2]="UNIQUE_ID_NAME";d[d.GLOBAL_ID_NAME=3]="GLOBAL_ID_NAME";
d[d.GEOHASH_NAME=4]="GEOHASH_NAME";d[d.GEOMETRY_PROPERTIES=5]="GEOMETRY_PROPERTIES";d[d.SERVER_GENS=6]="SERVER_GENS";d[d.GEOMETRY_TYPE=7]="GEOMETRY_TYPE";d[d.SPATIAL_REFERENCE=8]="SPATIAL_REFERENCE";d[d.EXCEEDED_TRANSFER_LIMIT=9]="EXCEEDED_TRANSFER_LIMIT";d[d.HAS_Z=10]="HAS_Z";d[d.HAS_M=11]="HAS_M";d[d.TRANSFORM=12]="TRANSFORM";d[d.FIELDS=13]="FIELDS";d[d.FEATURES=15]="FEATURES";!0;var g=new C.OptimizedFeatureSet;for(g.geometryType=K(0);c.next();)switch(c.tag()){case h.OBJECT_ID_NAME:g.objectIdFieldName=
c.getString();break;case h.GLOBAL_ID_NAME:g.globalIdFieldName=c.getString();break;case h.GEOHASH_NAME:g.geohashFieldName=c.getString();break;case h.GEOMETRY_PROPERTIES:var t=c.getMessage(),l=void 0,w=l||(l={});w[w.AREA_FIELD_NAME=1]="AREA_FIELD_NAME";w[w.LENGTH_FIELD_NAME=2]="LENGTH_FIELD_NAME";w[w.UNITS=3]="UNITS";!0;for(var p={};t.next();)switch(t.tag()){case l.AREA_FIELD_NAME:p.shapeAreaFieldName=t.getString();break;case l.LENGTH_FIELD_NAME:p.shapeLengthFieldName=t.getString();break;case l.UNITS:p.units=
t.getString();break;default:t.skip()}g.geometryProperties=p;break;case h.GEOMETRY_TYPE:g.geometryType=K(c.getEnum());break;case h.SPATIAL_REFERENCE:var E=c.getMessage(),q=(l=void 0,l={});q[q.WKID=1]="WKID";q[q.LASTEST_WKID=2]="LASTEST_WKID";q[q.VCS_WKID=3]="VCS_WKID";q[q.LATEST_VCS_WKID=4]="LATEST_VCS_WKID";q[q.WKT=5]="WKT";!0;for(p={};E.next();)switch(E.tag()){case l.WKID:p.wkid=E.getUInt32();break;case l.WKT:p.wkt=E.getString();break;default:E.skip()}g.spatialReference=p;break;case h.HAS_Z:g.hasZ=
c.getBool();break;case h.HAS_M:g.hasM=c.getBool();break;case h.TRANSFORM:var x=c.getMessage(),y=(l=void 0,l={});y[y.ORIGIN_POSTION=1]="ORIGIN_POSTION";y[y.SCALE=2]="SCALE";y[y.TRANSLATE=3]="TRANSLATE";!0;for(var B=p=void 0,D=M[0];x.next();)switch(x.tag()){case l.ORIGIN_POSTION:D=M[x.getEnum()];break;case l.SCALE:var z=x.getMessage(),m=void 0,u=m||(m={});u[u.X=1]="X";u[u.Y=2]="Y";u[u.M=3]="M";u[u.Z=4]="Z";!0;for(var r=[0,0];z.next();)switch(z.tag()){case m.X:r[0]=z.getDouble();break;case m.Y:r[1]=
z.getDouble();break;case m.M:case m.Z:r.push(z.getDouble());break;default:z.skip()}p=r;break;case l.TRANSLATE:var A=x.getMessage(),v=(m=void 0,m={});v[v.X=1]="X";v[v.Y=2]="Y";v[v.M=3]="M";v[v.Z=4]="Z";!0;for(r=[0,0];A.next();)switch(A.tag()){case m.X:r[0]=A.getDouble();break;case m.Y:r[1]=A.getDouble();break;case m.M:case m.Z:r.push(A.getDouble());break;default:A.skip()}B=r;break;default:x.skip()}g.transform={originPosition:D,scale:p,translate:B};break;case h.EXCEEDED_TRANSFER_LIMIT:var F=c.getBool();
g.exceededTransferLimit=F;break;case h.FIELDS:var H=c.getMessage();g.fields.push(O(H));break;case h.FEATURES:var I=c.getMessage();g.features.push(Q(I,g.fields));break;default:c.skip()}a.featureResult=g;break;default:f.skip()}G=a;break;default:k.skip()}return G.featureResult}catch(R){return e=new J("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:R}),L.error(e),new C.OptimizedFeatureSet}}});