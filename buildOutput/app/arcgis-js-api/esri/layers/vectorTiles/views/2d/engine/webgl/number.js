//>>built
define(["require","exports"],function(f,b){Object.defineProperty(b,"__esModule",{value:!0});var c=new Float32Array(1),d=new Uint32Array(c.buffer);b.nextHighestPowerOfTwo=function(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,++a};b.toUint32=function(a){return c[0]=a,d[0]};b.i1616to32=function(a,b){return 65535&a|b<<16};b.i8888to32=function(a,b,e,c){return 255&a|(255&b)<<8|(255&e)<<16|c<<24};b.i8816to32=function(a,b,c){return 255&a|(255&b)<<8|c<<16};b.numTo32=function(a){return 0|a}});