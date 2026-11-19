(()=>{var Nd=0,zh=1,Ud=2;var ms=1,Fd=2,ur=3,$n=0,si=1,Ue=2,En=0,dr=1,ri=2,Bh=3,kh=4,Od=5;var gs=100,zd=101,Bd=102,kd=103,Hd=104,Gd=200,Vd=201,Wd=202,Xd=203,Hh=204,Gh=205,qd=206,Yd=207,$d=208,Zd=209,jd=210,Jd=211,Kd=212,Qd=213,tf=214,No=0,Uo=1,Fo=2,qs=3,Oo=4,zo=5,Bo=6,ko=7,Vh=0,ef=1,nf=2,ln=0,Aa=1,Ra=2,Ca=3,xs=4,Pa=5,Ia=6,La=7;var Wh=300,_s=301,fr=302,gl=303,xl=304,Ys=1e3,nn=1001,Ho=1002,Qe=1003,sf=1004;var Da=1005;var ni=1006,_l=1007;var Tn=1008;var di=1009,Xh=1010,qh=1011,pr=1012,yl=1013,ji=1014,Hi=1015,We=1016,vl=1017,Ml=1018,ys=1020,Yh=35902,$h=35899,Zh=1021,jh=1022,Ji=1023,bn=1026,An=1027,mr=1028,bl=1029,Zn=1030,Sl=1031;var wl=1033,Na=33776,Ua=33777,Fa=33778,Oa=33779,El=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Dl=37489,za=37490,Nl=37491,Ul=37808,Fl=37809,Ol=37810,zl=37811,Bl=37812,kl=37813,Hl=37814,Gl=37815,Vl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Zl=36492,jl=36494,Jl=36495,Kl=36283,Ql=36284,Ba=36285,tc=36286;var Vr=2300,Go=2301,Lo=2302,Th=2303,Ah=2400,Rh=2401,Ch=2402;var rf=3200;var ec=0,af=1,Rn="",Ge="srgb",Wr="srgb-linear",Xr="linear",re="srgb";var Do=7680;var of=519,lf=512,cf=513,hf=514,Jh=515,uf=516,df=517,Kh=518,Qh=519,tu=35044;var eu="300 es",ki=2e3,$s=2001;function Xp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ff(){let s=qr("canvas");return s.style.display="block",s}var qu={},Zs=null;function Yr(...s){let t="THREE."+s.shift();Zs?Zs("log",t,...s):console.log(t,...s)}function pf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=pf(s);let t="THREE."+s.shift();if(Zs)Zs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=pf(s);let t="THREE."+s.shift();if(Zs)Zs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function zr(...s){let t=s.join(" ");t in qu||(qu[t]=!0,Dt(...s))}function mf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var gf={[No]:No,[Fo]:Bo,[Oo]:Oo,[qs]:zo,[Uo]:Uo,[Bo]:Fo,[ko]:ko,[zo]:qs},sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Br=Math.PI/180,js=180/Math.PI;function Cn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ci[s&255]+ci[s>>8&255]+ci[s>>16&255]+ci[s>>24&255]+"-"+ci[t&255]+ci[t>>8&255]+"-"+ci[t>>16&15|64]+ci[t>>24&255]+"-"+ci[e&63|128]+ci[e>>8&255]+"-"+ci[e>>16&255]+ci[e>>24&255]+ci[i&255]+ci[i>>8&255]+ci[i>>16&255]+ci[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function iu(s,t){return(s%t+t)%t}function Yp(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function $p(s,t,e){return s!==t?(e-s)/(t-s):0}function kr(s,t,e){return(1-e)*s+e*t}function Zp(s,t,e,i){return kr(s,t,1-Math.exp(-e*i))}function jp(s,t=1){return t-Math.abs(iu(s,t*2)-t)}function Jp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Kp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tm(s,t){return s+Math.random()*(t-s)}function em(s){return s*(.5-Math.random())}function im(s){s!==void 0&&(Yu=s);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(s){return s*Br}function sm(s){return s*js}function rm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function am(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function om(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ic(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function su(s,t){if(t.constructor===Float32Array)return s;let e=ic(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function ru(s,t){if(t.constructor===Float32Array)return s;let e=ic(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var nc={DEG2RAD:Br,RAD2DEG:js,generateUUID:Cn,clamp:jt,euclideanModulo:iu,mapLinear:Yp,inverseLerp:$p,lerp:kr,damp:Zp,pingpong:jp,smoothstep:Jp,smootherstep:Kp,randInt:Qp,randFloat:tm,randFloatSpread:em,seededRandom:im,degToRad:nm,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:nu,setQuaternionFromProperEuler:om,normalize:ru,denormalize:su},uu=class uu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uu.prototype.isVector2=!0;var st=uu,Si=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},du=class du{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eh.copy(this).projectOnVector(t),this.sub(eh)}reflect(t){return this.sub(eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;var D=du,eh=new D,$u=new Si,fu=class fu{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],_=n[1],b=n[4],v=n[7],A=n[2],S=n[5],y=n[8];return r[0]=a*x+o*_+l*A,r[3]=a*p+o*b+l*S,r[6]=a*m+o*v+l*y,r[1]=c*x+h*_+u*A,r[4]=c*p+h*b+u*S,r[7]=c*m+h*v+u*y,r[2]=d*x+f*_+g*A,r[5]=d*p+f*b+g*S,r[8]=d*m+f*v+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(t,e)),this}rotate(t){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-t)),this}translate(t,e){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fu.prototype.isMatrix3=!0;var Gt=fu,ih=new Gt,Zu=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let s={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Rn?Xr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Wr]:{primaries:t,whitePoint:i,transfer:Xr,toXYZ:Zu,fromXYZ:ju,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:re,toXYZ:Zu,fromXYZ:ju,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}var Jt=lm();function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ts,Vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=qr("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mn(e[i]/255)*255):e[i]=Mn(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cm=0,Js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(nh(n[a].image)):r.push(nh(n[a]))}else r=nh(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function nh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var hm=0,sh=new D,vi=class s extends sn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=nn,n=nn,r=ni,a=Tn,o=Ji,l=di,c=s.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Cn(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=Wh;vi.DEFAULT_ANISOTROPY=1;var pu=class pu{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(f+1)/2,A=(m+1)/2,S=(h+d)/4,y=(u+x)/4,M=(g+p)/4;return b>v&&b>A?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=S/i,r=y/i):v>A?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=S/n,r=M/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=y/r,n=M/r),this.set(i,n,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pu.prototype.isVector4=!0;var ge=pu,Wo=class extends sn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new vi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Js(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Wo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},$r=class extends vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ml=class ml{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,p)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,i){let n=this.elements;return Ti.subVectors(t,e),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Bn.crossVectors(i,Ti),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Bn.crossVectors(i,Ti)),Bn.normalize(),eo.crossVectors(Ti,Bn),n[0]=Bn.x,n[4]=eo.x,n[8]=Ti.x,n[1]=Bn.y,n[5]=eo.y,n[9]=Ti.y,n[2]=Bn.z,n[6]=eo.z,n[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],b=i[7],v=i[11],A=i[15],S=n[0],y=n[4],M=n[8],C=n[12],T=n[1],L=n[5],N=n[9],I=n[13],R=n[2],O=n[6],B=n[10],k=n[14],tt=n[3],V=n[7],J=n[11],nt=n[15];return r[0]=a*S+o*T+l*R+c*tt,r[4]=a*y+o*L+l*O+c*V,r[8]=a*M+o*N+l*B+c*J,r[12]=a*C+o*I+l*k+c*nt,r[1]=h*S+u*T+d*R+f*tt,r[5]=h*y+u*L+d*O+f*V,r[9]=h*M+u*N+d*B+f*J,r[13]=h*C+u*I+d*k+f*nt,r[2]=g*S+x*T+p*R+m*tt,r[6]=g*y+x*L+p*O+m*V,r[10]=g*M+x*N+p*B+m*J,r[14]=g*C+x*I+p*k+m*nt,r[3]=_*S+b*T+v*R+A*tt,r[7]=_*y+b*L+v*O+A*V,r[11]=_*M+b*N+v*B+A*J,r[15]=_*C+b*I+v*k+A*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=l*f-c*d,b=o*f-c*u,v=o*d-l*u,A=a*f-c*h,S=a*d-l*h,y=a*u-o*h;return e*(x*_-p*b+m*v)-i*(g*_-p*A+m*S)+n*(g*b-x*A+m*y)-r*(g*v-x*S+p*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*o-i*a,b=e*l-n*a,v=e*c-r*a,A=i*l-n*o,S=i*c-r*o,y=n*c-r*l,M=h*x-u*g,C=h*p-d*g,T=h*m-f*g,L=u*p-d*x,N=u*m-f*x,I=d*m-f*p,R=_*I-b*N+v*L+A*T-S*C+y*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return t[0]=(o*I-l*N+c*L)*O,t[1]=(n*N-i*I-r*L)*O,t[2]=(x*y-p*S+m*A)*O,t[3]=(d*S-u*y-f*A)*O,t[4]=(l*T-a*I-c*C)*O,t[5]=(e*I-n*T+r*C)*O,t[6]=(p*v-g*y-m*b)*O,t[7]=(h*y-d*v+f*b)*O,t[8]=(a*N-o*T+c*M)*O,t[9]=(i*T-e*N-r*M)*O,t[10]=(g*S-x*v+m*_)*O,t[11]=(u*v-h*S-f*_)*O,t[12]=(o*C-a*L-l*M)*O,t[13]=(e*L-i*C+n*M)*O,t[14]=(x*b-g*A-p*_)*O,t[15]=(h*A-u*b+d*_)*O,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,_=l*c,b=l*h,v=l*u,A=i.x,S=i.y,y=i.z;return n[0]=(1-(x+m))*A,n[1]=(f+v)*A,n[2]=(g-b)*A,n[3]=0,n[4]=(f-v)*S,n[5]=(1-(d+m))*S,n[6]=(p+_)*S,n[7]=0,n[8]=(g+b)*y,n[9]=(p-_)*y,n[10]=(1-(d+x))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=As.set(n[0],n[1],n[2]).length(),o=As.set(n[4],n[5],n[6]).length(),l=As.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Vi.copy(this);let c=1/a,h=1/o,u=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=u,Vi.elements[9]*=u,Vi.elements[10]*=u,e.setFromRotationMatrix(Vi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=ki,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===ki)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=ki,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===ki)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ml.prototype.isMatrix4=!0;var ie=ml,As=new D,Vi=new ie,um=new D(0,0,0),dm=new D(1,1,1),Bn=new D,eo=new D,Ti=new D,Ju=new ie,Ku=new Si,Ri=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,Qu=new D,Rs=new Si,mn=new ie,io=new D,Ar=new D,pm=new D,mm=new Si,td=new D(1,0,0),ed=new D(0,1,0),id=new D(0,0,1),nd={type:"added"},gm={type:"removed"},Cs={type:"childadded",child:null},rh={type:"childremoved",child:null},Ve=class s extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new Ri,i=new Si,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new Gt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?io.copy(t):io.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ar,io,this.up):mn.lookAt(io,Ar,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(mn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},no={h:0,s:0,l:0};function ah(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Jt.workingColorSpace){if(t=iu(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ah(a,r,t+1/3),this.g=ah(a,r,t),this.b=ah(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=xf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Jt.workingToColorSpace(hi.copy(this),t),Math.round(jt(hi.r*255,0,255))*65536+Math.round(jt(hi.g*255,0,255))*256+Math.round(jt(hi.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(hi.copy(this),e);let i=hi.r,n=hi.g,r=hi.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(hi.copy(this),e),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=Ge){Jt.workingToColorSpace(hi.copy(this),t);let e=hi.r,i=hi.g,n=hi.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(no);let i=kr(kn.h,no.h,e),n=kr(kn.s,no.s,e),r=kr(kn.l,no.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new et;et.NAMES=xf;var jr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wi=new D,gn=new D,oh=new D,xn=new D,Ps=new D,Is=new D,sd=new D,lh=new D,ch=new D,hh=new D,uh=new ge,dh=new ge,fh=new ge,vn=class s{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Wi.subVectors(t,e),n.cross(Wi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Wi.subVectors(n,e),gn.subVectors(i,e),oh.subVectors(t,e);let a=Wi.dot(Wi),o=Wi.dot(gn),l=Wi.dot(oh),c=gn.dot(gn),h=gn.dot(oh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(t,e),dh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(uh,r.x),a.addScaledVector(dh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(t,e,i,n){return Wi.subVectors(i,e),gn.subVectors(t,e),Wi.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Wi.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Ps.subVectors(n,i),Is.subVectors(r,i),lh.subVectors(t,i);let l=Ps.dot(lh),c=Is.dot(lh);if(l<=0&&c<=0)return e.copy(i);ch.subVectors(t,n);let h=Ps.dot(ch),u=Is.dot(ch);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ps,a);hh.subVectors(t,r);let f=Ps.dot(hh),g=Is.dot(hh);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Is,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return sd.subVectors(r,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(sd,o);let m=1/(p+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),ro.subVectors(this.max,Rr),Ls.subVectors(t.a,Rr),Ds.subVectors(t.b,Rr),Ns.subVectors(t.c,Rr),Hn.subVectors(Ds,Ls),Gn.subVectors(Ns,Ds),os.subVectors(Ls,Ns);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-os.z,os.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,os.z,0,-os.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-os.y,os.x,0];return!ph(e,Ls,Ds,Ns,ro)||(e=[1,0,0,0,1,0,0,0,1],!ph(e,Ls,Ds,Ns,ro))?!1:(ao.crossVectors(Hn,Gn),e=[ao.x,ao.y,ao.z],ph(e,Ls,Ds,Ns,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_n=[new D,new D,new D,new D,new D,new D,new D,new D],Xi=new D,so=new rn,Ls=new D,Ds=new D,Ns=new D,Hn=new D,Gn=new D,os=new D,Rr=new D,ro=new D,ao=new D,ls=new D;function ph(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ls.fromArray(s,r);let o=n.x*Math.abs(ls.x)+n.y*Math.abs(ls.y)+n.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Be=new D,oo=new st,_m=0,Ee=class extends sn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=t!==void 0?ic(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):su(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ru(t,this.array)}};var Kr=class extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qr=class extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Bt=class extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}},ym=new rn,Cr=new D,mh=new D,an=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ym.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Cr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(mh)),this.expandByPoint(Cr.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vm=0,Bi=new ie,gh=new Ve,Us=new D,Ai=new rn,Pr=new rn,Ke=new D,oe=class s extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xp(t)?Qr:Kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,e,i){return Bi.makeTranslation(t,e,i),this.applyMatrix4(Bi),this}scale(t,e,i){return Bi.makeScale(t,e,i),this.applyMatrix4(Bi),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Ai.min,Pr.min),Ai.expandByPoint(Ke),Ke.addVectors(Ai.max,Pr.max),Ai.expandByPoint(Ke)):(Ai.expandByPoint(Pr.min),Ai.expandByPoint(Pr.max))}Ai.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(t,c),Ke.add(Us)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ee(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;let h=new D,u=new D,d=new D,f=new st,g=new st,x=new st,p=new D,m=new D;function _(C,T,L){c[C]=c[T]=c[L]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,L),f.fromBufferAttribute(r,C),g.fromBufferAttribute(r,T),x.fromBufferAttribute(r,L),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(N),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(N),o[C].add(p),o[T].add(p),o[L].add(p),l[C].add(m),l[T].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,T=b.length;C<T;++C){let L=b[C],N=L.start,I=L.count;for(let R=N,O=N+I;R<O;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let v=new D,A=new D,S=new D,y=new D;function M(C){S.fromBufferAttribute(n,C),y.copy(S);let T=o[C];v.copy(T),v.sub(S.multiplyScalar(S.dot(T))).normalize(),A.crossVectors(y,T);let N=A.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,T=i.count;C<T;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ee(d,h,u)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function rd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Cn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var yi=new D,Qs=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?ic(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix4(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyNormalMatrix(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.transformDirection(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):su(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ru(t,this.data.array)}},xh=new D,Mm=new D,bm=new Gt,qi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=xh.subVectors(i,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(xh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bm.getNormalMatrix(t),n=this.coplanarPoint(xh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,Yi=class extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=dr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$i=class extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fs,Ir=new D,Os=new D,zs=new D,Bs=new st,Lr=new st,_f=new ie,lo=new D,Dr=new D,co=new D,ad=new st,_h=new st,od=new st,on=class extends Ve{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ta(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Qs(i,3,0,!1)),Fs.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),_f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-zs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;ho(lo.set(-.5,-.5,0),zs,a,Os,n,r),ho(Dr.set(.5,-.5,0),zs,a,Os,n,r),ho(co.set(.5,.5,0),zs,a,Os,n,r),ad.set(0,0),_h.set(1,0),od.set(1,1);let o=t.ray.intersectTriangle(lo,Dr,co,!1,Ir);if(o===null&&(ho(Dr.set(-.5,.5,0),zs,a,Os,n,r),_h.set(0,1),o=t.ray.intersectTriangle(lo,co,Dr,!1,Ir),o===null))return;let l=t.ray.origin.distanceTo(Ir);l<t.near||l>t.far||e.push({distance:l,point:Ir.clone(),uv:vn.getInterpolation(Ir,lo,Dr,co,ad,_h,od,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ho(s,t,e,i,n,r){Bs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Lr.x=r*Bs.x-n*Bs.y,Lr.y=n*Bs.x+r*Bs.y):Lr.copy(Bs),s.copy(t),s.x+=Lr.x,s.y+=Lr.y,s.applyMatrix4(_f)}var yn=new D,yh=new D,uo=new D,fo=new D,tr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){yh.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(yh).addScaledVector(uo,d),f}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let i=yn.dot(this.direction),n=yn.dot(yn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=i.x-a.x,_=i.y-a.y,b=i.z-a.z,v=Math.abs(l),A=Math.abs(c),S=Math.abs(h),y,M,C,T,L,N,I,R,O,B,k,tt;if(v>=A&&v>=S?(C=l,N=u,O=g,tt=m,l>=0?(y=c,M=h,T=d,L=f,I=x,R=p,B=_,k=b):(y=h,M=c,T=f,L=d,I=p,R=x,B=b,k=_)):A>=S?(C=c,N=d,O=x,tt=_,c>=0?(y=h,M=l,T=f,L=u,I=p,R=g,B=b,k=m):(y=l,M=h,T=u,L=f,I=g,R=p,B=m,k=b)):(C=h,N=f,O=p,tt=b,h>=0?(y=l,M=c,T=u,L=d,I=g,R=x,B=m,k=_):(y=c,M=l,T=d,L=u,I=x,R=g,B=_,k=m)),C===0)return null;let V=y/C,J=M/C,nt=1/C,St=T-V*N,Ft=L-J*N,Z=I-V*O,yt=R-J*O,Tt=B-V*tt,Ot=k-J*tt,vt=Tt*yt-Ot*Z,qt=St*Ot-Ft*Tt,Oe=Z*Ft-yt*St;if(n){if(vt<0||qt<0||Oe<0)return null}else if((vt<0||qt<0||Oe<0)&&(vt>0||qt>0||Oe>0))return null;let kt=vt+qt+Oe;if(kt===0)return null;let le=nt*(vt*N+qt*O+Oe*tt);return(kt>0?le<0:le>0)?null:this.at(le/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new ie,cs=new tr,po=new an,cd=new D,mo=new D,go=new D,xo=new D,vh=new D,_o=new D,hd=new D,yo=new D,Nt=class extends Ve{constructor(t=new oe,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vh.fromBufferAttribute(u,t),a?_o.addScaledVector(vh,h):_o.addScaledVector(vh.sub(e),h))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(po.containsPoint(cs.origin)===!1&&(cs.intersectSphere(po,cd)===null||cs.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),cs.copy(t.ray).applyMatrix4(ld),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,A=b;v<A;v+=3){let S=o.getX(v),y=o.getX(v+1),M=o.getX(v+2);n=vo(this,m,t,i,c,h,u,S,y,M),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=o.getX(p),b=o.getX(p+1),v=o.getX(p+2);n=vo(this,a,t,i,c,h,u,_,b,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,A=b;v<A;v+=3){let S=v,y=v+1,M=v+2;n=vo(this,m,t,i,c,h,u,S,y,M),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,b=p+1,v=p+2;n=vo(this,a,t,i,c,h,u,_,b,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function wm(s,t,e,i,n,r,a,o){let l;if(t.side===si?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===$n,o),l===null)return null;yo.copy(o),yo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:s}}function vo(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,mo),s.getVertexPosition(l,go),s.getVertexPosition(c,xo);let h=wm(s,t,e,i,mo,go,xo,hd);if(h){let u=new D;vn.getBarycoord(hd,mo,go,xo,u),n&&(h.uv=vn.getInterpolatedAttribute(n,o,l,c,u,new st)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new st)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};vn.getNormal(mo,go,xo,d.normal),h.face=d,h.barycoord=u}return h}var us=class extends vi{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Qe,h=Qe,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ee{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ks=new ie,ud=new ie,Mo=[],dd=new rn,Em=new ie,Nr=new Nt,Ur=new an,ea=class extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Em)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),dd.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),Ur.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ks),ud.multiplyMatrices(i,ks),Nr.matrixWorld=ud,Nr.raycast(t,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(n*this.count),n,this.count,mr,Hi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new an,Tm=new st(.5,.5),bo=new D,Wn=class{constructor(t=new qi,e=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],b=r[13],v=r[14],A=r[15];if(n[0].setComponents(c-a,f-h,m-g,A-_).normalize(),n[1].setComponents(c+a,f+h,m+g,A+_).normalize(),n[2].setComponents(c+o,f+u,m+x,A+b).normalize(),n[3].setComponents(c-o,f-u,m-x,A-b).normalize(),i)n[4].setComponents(l,d,p,v).normalize(),n[5].setComponents(c-l,f-d,m-p,A-v).normalize();else if(n[4].setComponents(c-l,f-d,m-p,A-v).normalize(),e===ki)n[5].setComponents(c+l,f+d,m+p,A+v).normalize();else if(e===$s)n[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=Tm.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(bo.x=n.normal.x>0?t.max.x:t.min.x,bo.y=n.normal.y>0?t.max.y:t.min.y,bo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fd=new ie,qo=class s{constructor(){this.coordinateSystem=ki,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Wn),i[n].setFromProjectionMatrix(fd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Wn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var ir=class extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yo=new D,$o=new D,pd=new ie,Fr=new tr,So=new an,Mh=new D,md=new D,Zo=class extends Ve{constructor(t=new oe,e=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Yo.fromBufferAttribute(e,n-1),$o.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Yo.distanceTo($o);t.setAttribute("lineDistance",new Bt(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(n),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;pd.copy(n).invert(),Fr.copy(t.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),_=h.getX(x+1),b=wo(this,t,Fr,l,m,_,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=wo(this,t,Fr,l,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=wo(this,t,Fr,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=wo(this,t,Fr,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wo(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(Yo.fromBufferAttribute(o,n),$o.fromBufferAttribute(o,r),e.distanceSqToSegment(Yo,$o,Mh,md)>i)return;Mh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Mh);if(!(c<t.near||c>t.far))return{distance:c,point:md.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var gd=new D,xd=new D,ia=class extends Zo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)gd.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+gd.distanceTo(xd);t.setAttribute("lineDistance",new Bt(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jo=class extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_d=new ie,Ph=new tr,Eo=new an,To=new D,na=class extends Ve{constructor(t=new oe,e=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(n),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;_d.copy(n).invert(),Ph.copy(t.ray).applyMatrix4(_d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);To.fromBufferAttribute(u,p),yd(To,p,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)To.fromBufferAttribute(u,g),yd(To,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yd(s,t,e,i,n,r,a){let o=Ph.distanceSqToPoint(s);if(o<e){let l=new D;Ph.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var sa=class extends vi{constructor(t=[],e=_s,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ds=class extends vi{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Sn=class extends vi{constructor(t,e,i=ji,n,r,a,o=Qe,l=Qe,c,h=bn,u=1){if(h!==bn&&h!==An)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ra=class extends Sn{constructor(t,e=ji,i=_s,n,r,a=Qe,o=Qe,l,c=bn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},aa=class extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pe=class s extends oe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(x,p,m,_,b,v,A,S,y,M,C){let T=v/y,L=A/M,N=v/2,I=A/2,R=S/2,O=y+1,B=M+1,k=0,tt=0,V=new D;for(let J=0;J<B;J++){let nt=J*L-I;for(let St=0;St<O;St++){let Ft=St*T-N;V[x]=Ft*_,V[p]=nt*b,V[m]=R,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(St/y),u.push(1-J/M),k+=1}}for(let J=0;J<M;J++)for(let nt=0;nt<y;nt++){let St=d+nt+O*J,Ft=d+nt+O*(J+1),Z=d+(nt+1)+O*(J+1),yt=d+(nt+1)+O*J;l.push(St,Ft,yt),l.push(Ft,Z,yt),tt+=6}o.addGroup(f,tt,C),f+=tt,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},nr=class s extends oe{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+r,x=n+1,p=new D,m=new D;for(let _=0;_<=g;_++){let b=0,v=0,A=0,S=0;if(_<=i){let C=_/i,T=C*Math.PI/2;v=-h-t*Math.cos(T),A=t*Math.sin(T),S=-t*Math.cos(T),b=C*u}else if(_<=i+r){let C=(_-i)/r;v=-h+C*e,A=t,S=0,b=u+C*d}else{let C=(_-i-r)/i,T=C*Math.PI/2;v=h+t*Math.sin(T),A=t*Math.cos(T),S=t*Math.sin(T),b=u+d+C*u}let y=Math.max(0,Math.min(1,b/f)),M=0;_===0?M=.5/n:_===g&&(M=-.5/n);for(let C=0;C<=n;C++){let T=C/n,L=T*Math.PI*2,N=Math.sin(L),I=Math.cos(L);m.x=-A*I,m.y=v,m.z=A*N,o.push(m.x,m.y,m.z),p.set(-A*I,S,A*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(T+M,y)}if(_>0){let C=(_-1)*x;for(let T=0;T<n;T++){let L=C+T,N=C+T+1,I=_*x+T,R=_*x+T+1;a.push(L,N,I),a.push(N,R,I)}}}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Zi=class s extends oe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class s extends oe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;_(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function _(){let v=new D,A=new D,S=0,y=(e-t)/i;for(let M=0;M<=r;M++){let C=[],T=M/r,L=T*(e-t)+t;for(let N=0;N<=n;N++){let I=N/n,R=I*l+o,O=Math.sin(R),B=Math.cos(R);A.x=L*O,A.y=-T*i+p,A.z=L*B,u.push(A.x,A.y,A.z),v.set(O,y,B).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-T),C.push(g++)}x.push(C)}for(let M=0;M<n;M++)for(let C=0;C<r;C++){let T=x[C][M],L=x[C+1][M],N=x[C+1][M+1],I=x[C][M+1];(t>0||C!==0)&&(h.push(T,L,I),S+=3),(e>0||C!==r-1)&&(h.push(L,N,I),S+=3)}c.addGroup(m,S,0),m+=S}function b(v){let A=g,S=new st,y=new D,M=0,C=v===!0?t:e,T=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,p*T,0),d.push(0,T,0),f.push(.5,.5),g++;let L=g;for(let N=0;N<=n;N++){let R=N/n*l+o,O=Math.cos(R),B=Math.sin(R);y.x=C*B,y.y=p*T,y.z=C*O,u.push(y.x,y.y,y.z),d.push(0,T,0),S.x=O*.5+.5,S.y=B*.5*T+.5,f.push(S.x,S.y),g++}for(let N=0;N<n;N++){let I=A+N,R=L+N;v===!0?h.push(R,R+1,I):h.push(R+1,R,I),M+=3}c.addGroup(m,M,v===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mi=class s extends xe{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class s extends oe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new D,v=new D,A=new D;for(let S=0;S<e.length;S+=3)f(e[S+0],b),f(e[S+1],v),f(e[S+2],A),l(b,v,A,_)}function l(_,b,v,A){let S=A+1,y=[];for(let M=0;M<=S;M++){y[M]=[];let C=_.clone().lerp(v,M/S),T=b.clone().lerp(v,M/S),L=S-M;for(let N=0;N<=L;N++)N===0&&M===S?y[M][N]=C:y[M][N]=C.clone().lerp(T,N/L)}for(let M=0;M<S;M++)for(let C=0;C<2*(S-M)-1;C++){let T=Math.floor(C/2);C%2===0?(d(y[M][T+1]),d(y[M+1][T]),d(y[M][T])):(d(y[M][T+1]),d(y[M+1][T+1]),d(y[M+1][T]))}}function c(_){let b=new D;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(_),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let _=new D;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let v=p(_)/2/Math.PI+.5,A=m(_)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],A=a[_+4],S=Math.max(b,v,A),y=Math.min(b,v,A);S>.9&&y<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let v=_*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){let _=new D,b=new D,v=new D,A=new D,S=new st,y=new st,M=new st;for(let C=0,T=0;C<r.length;C+=9,T+=6){_.set(r[C+0],r[C+1],r[C+2]),b.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),S.set(a[T+0],a[T+1]),y.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),A.copy(_).add(b).add(v).divideScalar(3);let L=p(A);x(S,T+0,_,L),x(y,T+2,b,L),x(M,T+4,v,L)}}function x(_,b,v,A){A<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=A/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new st:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,n=[],r=[],a=[],o=new D,l=new ie;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},sr=class extends Ci{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jo=class extends sr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function au(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var vd=new D,Md=new D,bh=new au,Sh=new au,wh=new au,rr=class extends Ci{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Md.subVectors(n[0],n[1]).add(n[0]),c=Md);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(vd.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=vd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),bh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Sh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),wh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(bh.calc(l),Sh.calc(l),wh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bd(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Am(s,t){let e=1-s;return e*e*t}function Rm(s,t){return 2*(1-s)*s*t}function Cm(s,t){return s*s*t}function Hr(s,t,e,i){return Am(s,t)+Rm(s,e)+Cm(s,i)}function Pm(s,t){let e=1-s;return e*e*e*t}function Im(s,t){let e=1-s;return 3*e*e*s*t}function Lm(s,t){return 3*(1-s)*s*s*t}function Dm(s,t){return s*s*s*t}function Gr(s,t,e,i,n){return Pm(s,t)+Im(s,e)+Lm(s,i)+Dm(s,n)}var la=class extends Ci{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gr(t,n.x,r.x,a.x,o.x),Gr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends Ci{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gr(t,n.x,r.x,a.x,o.x),Gr(t,n.y,r.y,a.y,o.y),Gr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends Ci{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Ci{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends Ci{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Hr(t,n.x,r.x,a.x),Hr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Ci{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Hr(t,n.x,r.x,a.x),Hr(t,n.y,r.y,a.y),Hr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(bd(o,l.x,c.x,h.x,u.x),bd(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new st().fromArray(n))}return this}},Sd=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:rr,CubicBezierCurve:la,CubicBezierCurve3:Ko,EllipseCurve:sr,LineCurve:ca,LineCurve3:Qo,QuadraticBezierCurve:ha,QuadraticBezierCurve3:tl,SplineCurve:ua}),el=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sd[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Sd[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},da=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ca(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new ha(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new la(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ua(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new sr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ar=class extends da{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new da().fromJSON(n))}return this}};function Nm(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=yf(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Bm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<n;d+=e){let f=s[d],g=s[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return fa(r,a,e,o,l,c,0),a}function yf(s,t,e,i,n){let r;if(n===jm(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=wd(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=wd(a/i|0,s[a],s[a+1],r);return r&&or(r,r.next)&&(ma(r),r=r.next),r}function fs(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(or(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ma(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fa(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Wm(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Fm(s,i,n,r):Um(s)){t.push(l.i,s.i,c.i),ma(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Om(fs(s),t),fa(s,t,e,i,n,r,2)):a===2&&zm(s,t,e,i,n,r):fa(fs(s),t,e,i,n,r,1);break}}}function Um(s){let t=s.prev,e=s,i=s.next;if(Pe(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Or(n,o,r,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fm(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Pe(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),p=Math.max(h,u,d),m=Ih(f,g,t,e,i),_=Ih(x,p,t,e,i),b=s.prevZ,v=s.nextZ;for(;b&&b.z>=m&&v&&v.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==n&&b!==a&&Or(o,h,l,u,c,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Or(o,h,l,u,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==n&&b!==a&&Or(o,h,l,u,c,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Or(o,h,l,u,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Om(s,t){let e=s;do{let i=e.prev,n=e.next.next;!or(i,n)&&Mf(i,e,e.next,n)&&pa(i,n)&&pa(n,i)&&(t.push(i.i,e.i,n.i),ma(e),ma(e.next),e=s=n),e=e.next}while(e!==s);return fs(e)}function zm(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ym(a,o)){let l=bf(a,o);a=fs(a,a.next),l=fs(l,l.next),fa(a,t,e,i,n,r,0),fa(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Bm(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=yf(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(qm(c))}n.sort(km);for(let r=0;r<n.length;r++)e=Hm(n[r],e);return e}function km(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Hm(s,t){let e=Gm(s,t);if(!e)return t;let i=bf(e,s);return fs(i,i.next),fs(e,e.next)}function Gm(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(or(s,e))return e;do{if(or(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&vf(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let u=Math.abs(n-e.y)/(i-e.x);pa(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Vm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Vm(s,t){return Pe(s.prev,s,t.prev)<0&&Pe(t.next,s,s.next)<0}function Wm(s,t,e,i){let n=s;do n.z===0&&(n.z=Ih(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Xm(n)}function Xm(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function Ih(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function vf(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Or(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&vf(s,t,e,i,n,r,a,o)}function Ym(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$m(s,t)&&(pa(s,t)&&pa(t,s)&&Zm(s,t)&&(Pe(s.prev,s,t.prev)||Pe(s,t.prev,t))||or(s,t)&&Pe(s.prev,s,s.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function or(s,t){return s.x===t.x&&s.y===t.y}function Mf(s,t,e,i){let n=Ro(Pe(s,t,e)),r=Ro(Pe(s,t,i)),a=Ro(Pe(e,i,s)),o=Ro(Pe(e,i,t));return!!(n!==r&&a!==o||n===0&&Ao(s,e,t)||r===0&&Ao(s,i,t)||a===0&&Ao(e,s,i)||o===0&&Ao(e,t,i))}function Ao(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ro(s){return s>0?1:s<0?-1:0}function $m(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function pa(s,t){return Pe(s.prev,s,s.next)<0?Pe(s,t,s.next)>=0&&Pe(s,s.prev,t)>=0:Pe(s,t,s.prev)<0||Pe(s,s.next,t)<0}function Zm(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function bf(s,t){let e=Lh(s.i,s.x,s.y),i=Lh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wd(s,t,e,i){let n=Lh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jm(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Dh=class{static triangulate(t,e,i=2){return Nm(t,e,i)}},Xs=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];Ed(t),Td(i,t);let a=t.length;e.forEach(Ed);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Td(i,e[l]);let o=Dh.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ed(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Td(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Me=class s extends oa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ga=class s extends oe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=jt(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new st,f=new D,g=new D,x=new D,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let b=i+_*h*n,v=Math.sin(b),A=Math.cos(b);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*A,a.push(u.x,u.y,u.z),d.x=_/e,d.y=S/(t.length-1),o.push(d.x,d.y);let y=l[3*S+0]*v,M=l[3*S+1],C=l[3*S+0]*A;c.push(y,M,C)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){let v=b+_*t.length,A=v,S=v+t.length,y=v+t.length+1,M=v+1;r.push(A,S,M),r.push(y,M,S)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("uv",new Bt(o,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},xa=class s extends oa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Pi=class s extends oe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*d-a;for(let b=0;b<c;b++){let v=b*u-r;g.push(v,-_,0),x.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let b=_+c*m,v=_+c*(m+1),A=_+1+c*(m+1),S=_+1+c*m;f.push(b,v,S),f.push(v,A,S)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},_a=class s extends oe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new D,g=new st;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let _=m+p,b=_,v=_+i+1,A=_+i+2,S=_+1;o.push(b,v,S),o.push(v,A,S)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ya=class s extends oe{constructor(t=new ar([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Bt(n,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(a,2));function c(h){let u=n.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Xs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];Xs.isClockWise(_)===!0&&(g[p]=_.reverse())}let x=Xs.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){let _=f[p];n.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){let _=x[p],b=_[0]+u,v=_[1]+u,A=_[2]+u;i.push(b,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jm(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let a=e[t.shapes[n]];i.push(a)}return new s(i,t.curveSegments)}};function Jm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var De=class s extends oe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let _=[],b=m/i,v=a+b*o,A=t*Math.cos(v),S=Math.sqrt(t*t-A*A),y=0;m===0&&a===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){let C=M/e,T=n+C*r;u.x=-S*Math.cos(T),u.y=A,u.z=S*Math.sin(T),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(C+y,1-b),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let b=h[m][_+1],v=h[m][_],A=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&f.push(b,v,S),(m!==i-1||l<Math.PI)&&f.push(v,A,S)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class s extends oe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let x=0;x<=i;x++){let p=a+x/i*o;for(let m=0;m<=n;m++){let _=m/n*r;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){let m=(n+1)*x+p-1,_=(n+1)*(x-1)+p-1,b=(n+1)*(x-1)+p,v=(n+1)*x+p;l.push(m,_,v),l.push(_,b,v)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function vs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Ad(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Ad(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function fi(s){let t={};for(let e=0;e<s.length;e++){let i=vs(s[e]);for(let n in i)t[n]=i[n]}return t}function Ad(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Km(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ou(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Pn={clone:vs,merge:fi},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(n.value);break;case"v2":this.uniforms[i].value=new st().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ge().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ie().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lr=class extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var il=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Co(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Xn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sl=class extends Xn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-i;break;case Ch:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,l=2*i-e;break;case Ch:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+_*a[c+A]+b*a[l+A]+v*a[u+A];return r}},rl=class extends Xn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},al=class extends Xn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ol=class extends Xn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(n-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*d+g*2,_=u[m],b=u[m+1],v=t*d+g*2,A=h[v],S=h[v+1],y=i0(i,e,_,A,n);r[g]=Sf(y,x,b,S,p)}return r}};function Sf(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function e0(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function i0(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=Sf(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=e0(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ii=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Co(t.settings)&&(i.settings={inTangents:Hs(t.settings.inTangents,Array),outTangents:Hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ol(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case Th:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Co(this.settings)&&(Rd(this.settings.inTangents,t),Rd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Co(this.settings)&&(Cd(this.settings.inTangents,t),Cd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&qp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Co(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Rd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Cd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Go;var qn=class extends Ii{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Vr;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};ll.prototype.ValueTypeName="color";var cl=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};cl.prototype.ValueTypeName="number";var hl=class extends Xn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Si.slerpFlat(r,0,a,c-o,a,c,l);return r}},va=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends Ii{constructor(t,e,i){super(t,e,i)}};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Vr;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};ul.prototype.ValueTypeName="vector";var dl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new dl,fl=class{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ma=class extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Eh=new ie,Pd=new D,Id=new D,ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wn,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Eh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new D,Io=new Si,en=new D,Sa=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,en.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vn=new D,Ld=new st,Dd=new st,ui=class extends Sa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Ld,Dd),e.subVectors(Dd,Ld)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Nh=class extends ba{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}},wa=class extends cr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ps=class extends Sa{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uh=class extends ba{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Uh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gs=-90,Vs=1,hr=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ui(Gs,Vs,t,e);n.layers=this.layers,this.add(n);let r=new ui(Gs,Vs,t,e);r.layers=this.layers,this.add(r);let a=new ui(Gs,Vs,t,e);a.layers=this.layers,this.add(a);let o=new ui(Gs,Vs,t,e);o.layers=this.layers,this.add(o);let l=new ui(Gs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new ui(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pl=class extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=n0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function n0(){this._document.hidden===!1&&this.reset()}var lu="\\[\\]\\.:\\/",s0=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",r0="[^"+lu.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",cu),o0=/(WCOD+)?/.source.replace("WCOD",r0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),h0=new RegExp("^"+a0+o0+l0+c0+"$"),u0=["material","materials","bones","map"],Fh=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(t){let e=h0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);u0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Fh;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kv=new Float32Array(1);var mu=class mu{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};mu.prototype.isMatrix2=!0;var Oh=mu;function hu(s,t,e,i){let n=d0(i);switch(e){case Zh:return s*t;case mr:return s*t/n.components*n.byteLength;case bl:return s*t/n.components*n.byteLength;case Zn:return s*t*2/n.components*n.byteLength;case Sl:return s*t*2/n.components*n.byteLength;case jh:return s*t*3/n.components*n.byteLength;case Ji:return s*t*4/n.components*n.byteLength;case wl:return s*t*4/n.components*n.byteLength;case Na:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Rl:return Math.max(s,16)*Math.max(t,8)/4;case El:case Al:return Math.max(s,8)*Math.max(t,8)/2;case Cl:case Pl:case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Il:case za:case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zl:case jl:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kl:case Ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ba:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(s){switch(s){case di:case Xh:return{byteLength:1,components:1};case pr:case qh:case We:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case ji:case yl:case Hi:return{byteLength:4,components:1};case Yh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qf(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function x0(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:_0,alphahash_pars_fragment:y0,alphamap_fragment:v0,alphamap_pars_fragment:M0,alphatest_fragment:b0,alphatest_pars_fragment:S0,aomap_fragment:w0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:I0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:k0,common:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:V0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:$0,envmap_fragment:Z0,envmap_common_pars_fragment:j0,envmap_pars_fragment:J0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:cg,envmap_vertex:Q0,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ig,fog_pars_fragment:ng,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:xg,lights_fragment_end:_g,lightprobes_pars_fragment:yg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:Mg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Sg,map_fragment:wg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Rg,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Pg,morphcolor_vertex:Ig,morphnormal_vertex:Lg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ng,normal_fragment_begin:Ug,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:zg,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:qg,premultiplied_alpha_fragment:Yg,project_vertex:$g,dithering_fragment:Zg,dithering_pars_fragment:jg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:tx,shadowmap_vertex:ex,shadowmask_pars_fragment:ix,skinbase_vertex:nx,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:hx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:xx,background_frag:_x,backgroundCube_vert:yx,backgroundCube_frag:vx,cube_vert:Mx,cube_frag:bx,depth_vert:Sx,depth_frag:wx,distance_vert:Ex,distance_frag:Tx,equirect_vert:Ax,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Px,meshbasic_vert:Ix,meshbasic_frag:Lx,meshlambert_vert:Dx,meshlambert_frag:Nx,meshmatcap_vert:Ux,meshmatcap_frag:Fx,meshnormal_vert:Ox,meshnormal_frag:zx,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:Vx,meshtoon_frag:Wx,points_vert:Xx,points_frag:qx,shadow_vert:Yx,shadow_frag:$x,sprite_vert:Zx,sprite_frag:jx},_t={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},hn={basic:{uniforms:fi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:fi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:fi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:fi([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:fi([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new et(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:fi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:fi([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:fi([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:fi([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:fi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:fi([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:fi([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:fi([_t.lights,_t.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};hn.physical={uniforms:fi([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var sc={r:0,b:0,g:0},Jx=new ie,Yf=new Gt;Yf.set(-1,0,0,0,1,0,0,0,1);function Kx(s,t,e,i,n,r){let a=new et(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let v=_.backgroundBlurriness>0;b=t.get(b,v)}return b}function g(_){let b=!1,v=f(_);v===null?p(a,o):v&&v.isColor&&(p(v,1),b=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,b){let v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new Nt(new pe(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:vs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==re,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new Pi(2,2),new be({name:"BackgroundMaterial",uniforms:vs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(sc,ou(s)),e.buffers.color.setClear(sc.r,sc.g,sc.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Qx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(L,N,I,R,O){let B=!1,k=u(L,R,I,N);r!==k&&(r=k,c(r.object)),B=f(L,R,I,O),B&&g(L,R,I,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(L,N,I,R),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,N,I,R){let O=R.wireframe===!0,B=i[N.id];B===void 0&&(B={},i[N.id]=B);let k=L.isInstancedMesh===!0?L.id:0,tt=B[k];tt===void 0&&(tt={},B[k]=tt);let V=tt[I.id];V===void 0&&(V={},tt[I.id]=V);let J=V[O];return J===void 0&&(J=d(l()),V[O]=J),J}function d(L){let N=[],I=[],R=[];for(let O=0;O<e;O++)N[O]=0,I[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,N,I,R){let O=r.attributes,B=N.attributes,k=0,tt=I.getAttributes();for(let V in tt)if(tt[V].location>=0){let nt=O[V],St=B[V];if(St===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),nt===void 0||nt.attribute!==St||St&&nt.data!==St.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function g(L,N,I,R){let O={},B=N.attributes,k=0,tt=I.getAttributes();for(let V in tt)if(tt[V].location>=0){let nt=B[V];nt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let St={};St.attribute=nt,nt&&nt.data&&(St.data=nt.data),O[V]=St,k++}r.attributes=O,r.attributesNum=k,r.index=R}function x(){let L=r.newAttributes;for(let N=0,I=L.length;N<I;N++)L[N]=0}function p(L){m(L,0)}function m(L,N){let I=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;I[L]=1,R[L]===0&&(s.enableVertexAttribArray(L),R[L]=1),O[L]!==N&&(s.vertexAttribDivisor(L,N),O[L]=N)}function _(){let L=r.newAttributes,N=r.enabledAttributes;for(let I=0,R=N.length;I<R;I++)N[I]!==L[I]&&(s.disableVertexAttribArray(I),N[I]=0)}function b(L,N,I,R,O,B,k){k===!0?s.vertexAttribIPointer(L,N,I,O,B):s.vertexAttribPointer(L,N,I,R,O,B)}function v(L,N,I,R){x();let O=R.attributes,B=I.getAttributes(),k=N.defaultAttributeValues;for(let tt in B){let V=B[tt];if(V.location>=0){let J=O[tt];if(J===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let nt=J.normalized,St=J.itemSize,Ft=t.get(J);if(Ft===void 0)continue;let Z=Ft.buffer,yt=Ft.type,Tt=Ft.bytesPerElement,Ot=yt===s.INT||yt===s.UNSIGNED_INT||J.gpuType===yl;if(J.isInterleavedBufferAttribute){let vt=J.data,qt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Oe=J.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt,vt.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let kt=0;kt<V.locationSize;kt++)b(V.location+kt,St/V.locationSize,yt,nt,qt*Tt,(Oe+St/V.locationSize*kt)*Tt,Ot)}else{if(J.isInstancedBufferAttribute){for(let vt=0;vt<V.locationSize;vt++)m(V.location+vt,J.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<V.locationSize;vt++)p(V.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let vt=0;vt<V.locationSize;vt++)b(V.location+vt,St/V.locationSize,yt,nt,St*Tt,St/V.locationSize*vt*Tt,Ot)}}else if(k!==void 0){let nt=k[tt];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(V.location,nt);break;case 3:s.vertexAttrib3fv(V.location,nt);break;case 4:s.vertexAttrib4fv(V.location,nt);break;default:s.vertexAttrib1fv(V.location,nt)}}}}_()}function A(){C();for(let L in i){let N=i[L];for(let I in N){let R=N[I];for(let O in R){let B=R[O];for(let k in B)h(B[k].object),delete B[k];delete R[O]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let N=i[L.id];for(let I in N){let R=N[I];for(let O in R){let B=R[O];for(let k in B)h(B[k].object),delete B[k];delete R[O]}}delete i[L.id]}function y(L){for(let N in i){let I=i[N];for(let R in I){let O=I[R];if(O[L.id]===void 0)continue;let B=O[L.id];for(let k in B)h(B[k].object),delete B[k];delete O[L.id]}}}function M(L){for(let N in i){let I=i[N],R=L.isInstancedMesh===!0?L.id:0,O=I[R];if(O!==void 0){for(let B in O){let k=O[B];for(let tt in k)h(k[tt].object),delete k[tt];delete O[B]}delete I[R],Object.keys(I).length===0&&delete i[N]}}}function C(){T(),a=!0,r!==n&&(r=n,c(r.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function t_(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e_(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(y){return!(y!==Ji&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let M=y===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==di&&y!==Hi&&!M&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:S}}function i_(s){let t=this,e=null,i=0,n=!1,r=!1,a=new qi,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,b=_*4,v=m.clippingState||null;l.value=v,v=h(g,d,b,f);for(let A=0;A!==b;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,v=f;b!==x;++b,v+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Ga=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new sa(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new pe(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:En});r.uniforms.tEquirect.value=e;let a=new Nt(n,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=ni),new hr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Ef=256,n_=3,s_=20,$f=256,Zf=16,r_=3,a_=new D,o_=new et,ac=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hr(1,10,null),this._boxMesh=new Nt(new pe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=a_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(o_));let p=new hr(i,n,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ef,nu(t))}_fromTexture(t,e){t.mapping===_s||t.mapping===fr?this._setSize(t.image.length===0?Ef:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Tf(t,!1,!1),i=Math.log2(t)-n_;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Tf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===_s||t.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Af()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=l_(),this._integrationMaterial=c_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Zf);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-r_)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/($f*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=h_());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Tf(s,t,e){return new Ga(s,{minFilter:Tn,generateMipmaps:t,type:We,colorSpace:Wr,depthBuffer:e})}function Va(s,t,e){return new be({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:si,blending:En,depthTest:!1,depthWrite:!1})}function l_(){return Va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$f}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function c_(){return Va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function h_(){return Va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Af(){return Va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Rf(){return Va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function u_(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===gl||f===xl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Ga(g.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===gl||f===xl,x=f===_s||f===fr;if(g||x){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new ac(s)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new ac(s)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===gl?d.mapping=_s:f===xl&&(d.mapping=fr),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function d_(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&zr("WebGLRenderer: "+i+" extension not supported."),n}}}function f_(s,t,e,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],s.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,b=p.count>=65535?Qr:Kr,v=new b(Math.ceil(_/3)*6,1),A=v.array;if(x!==null){let y=x.array;m=x.version;for(let M=0,C=0;M<_;M+=3){let T=y[M+0],L=y[M+1],N=y[M+2];A[C++]=T,A[C++]=L,A[C++]=L,A[C++]=N,A[C++]=N,A[C++]=T}}else{m=p.version;for(let y=0,M=0;y<_;y+=3){let C=y+0,T=y+1,L=y+2;A[M++]=C,A[M++]=T,A[M++]=T,A[M++]=L,A[M++]=L,A[M++]=C}}v.version=m;let S=r.get(g);S&&t.remove(S),r.set(g,v)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function p_(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function g_(s,t,e){let i=new WeakMap,n=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*A*4*u),y=new $r(S,v,A,u);y.type=Hi,y.needsUpdate=!0;let M=b*4;for(let T=0;T<u;T++){let L=p[T],N=m[T],I=_[T],R=v*A*4*T;for(let O=0;O<L.count;O++){let B=O*M;f===!0&&(n.fromBufferAttribute(L,O),S[R+B+0]=n.x,S[R+B+1]=n.y,S[R+B+2]=n.z,S[R+B+3]=0),g===!0&&(n.fromBufferAttribute(N,O),S[R+B+4]=n.x,S[R+B+5]=n.y,S[R+B+6]=n.z,S[R+B+7]=0),x===!0&&(n.fromBufferAttribute(I,O),S[R+B+8]=n.x,S[R+B+9]=n.y,S[R+B+10]=n.z,S[R+B+11]=I.itemSize===4?n.w:1)}}d={count:u,texture:y,size:new st(v,A)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function x_(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var __={[Aa]:"LINEAR_TONE_MAPPING",[Ra]:"REINHARD_TONE_MAPPING",[Ca]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[La]:"NEUTRAL_TONE_MAPPING",[Pa]:"CUSTOM_TONE_MAPPING"};function y_(s,t,e,i,n,r){let a=new Ne(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new oe;h.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let u=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(h,u),f=new ps(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,_=null,b=[],v=!1;this.setSize=function(A,S){a.setSize(A,S),o!==null&&o.setSize(A,S),l!==null&&l.setSize(A,S);for(let y=0;y<b.length;y++){let M=b[y];M.setSize&&M.setSize(A,S)}},this.setEffects=function(A){b=A,v=b.length>0&&b[0].isRenderPass===!0;let S=a.width,y=a.height;b.length>0&&o===null&&(o=new Ne(S,y,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(S,y,{type:We,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&b.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Sn(S,y),r===!0&&(c.format=An,c.type=ys)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<b.length;C++){let T=b[C];T.setSize&&T.setSize(S,y),M&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(A,S){if(p||A.toneMapping===ln&&b.length===0)return!1;if(_=S,S!==null){let y=S.width,M=S.height;(a.width!==y||a.height!==M)&&this.setSize(y,M)}return v===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ln,!0},this.hasRenderPass=function(){return v},this.end=function(A,S){A.toneMapping=m,p=!0;let y=a,M=o;for(let C=0;C<b.length;C++){let T=b[C];T.enabled!==!1&&(T.render(A,M,y,S),T.needsSwap!==!1&&(y=M,M=M===o?l:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,u.defines={},Jt.getTransfer(g)===re&&(u.defines.SRGB_TRANSFER="");let C=__[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(_),A.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var jf=new vi,Jf=new Sn(1,1),Kf=new ra(1),Qf=new $r,tp=new Xo,ep=new sa,Cf=[],Pf=[],If=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function xr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Cf[n];if(r===void 0&&(r=new Float32Array(n),Cf[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function lc(s,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function v_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function S_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function w_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Df.set(i),s.uniformMatrix2fv(this.addr,!1,Df),qe(e,i)}}function E_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Lf.set(i),s.uniformMatrix3fv(this.addr,!1,Lf),qe(e,i)}}function T_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;If.set(i),s.uniformMatrix4fv(this.addr,!1,If),qe(e,i)}}function A_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function R_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function P_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function I_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function L_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function D_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function N_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function cc(s){return s.version===0&&(s.compareFunction=Qh,s.needsUpdate=!0),s}function U_(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=cc(Jf):r=jf,e.setTexture2D(t||r,n)}function F_(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||tp,n)}function O_(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=cc(Kf):r=ep,e.setTextureCube(t||r,n)}function z_(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Qf,n)}function B_(s){switch(s){case 5126:return v_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return w_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return z_}}function k_(s,t){s.uniform1fv(this.addr,t)}function H_(s,t){let e=xr(t,this.size,2);s.uniform2fv(this.addr,e)}function G_(s,t){let e=xr(t,this.size,3);s.uniform3fv(this.addr,e)}function V_(s,t){let e=xr(t,this.size,4);s.uniform4fv(this.addr,e)}function W_(s,t){let e=xr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function X_(s,t){let e=xr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q_(s,t){let e=xr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y_(s,t){s.uniform1iv(this.addr,t)}function $_(s,t){s.uniform2iv(this.addr,t)}function Z_(s,t){s.uniform3iv(this.addr,t)}function j_(s,t){s.uniform4iv(this.addr,t)}function J_(s,t){s.uniform1uiv(this.addr,t)}function K_(s,t){s.uniform2uiv(this.addr,t)}function Q_(s,t){s.uniform3uiv(this.addr,t)}function ty(s,t){s.uniform4uiv(this.addr,t)}function ey(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);Xe(i,r)||(s.uniform1iv(this.addr,r),qe(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=cc(Jf):a=jf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function iy(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);Xe(i,r)||(s.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||tp,r[a])}function ny(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);Xe(i,r)||(s.uniform1iv(this.addr,r),qe(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=cc(Kf):a=ep;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function sy(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);Xe(i,r)||(s.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Qf,r[a])}function ry(s){switch(s){case 5126:return k_;case 35664:return H_;case 35665:return G_;case 35666:return V_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return j_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return sy}}var _u=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=B_(e.type)}},yu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}},vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},gu=/(\w+)(\])?(\[|\.)?/g;function Nf(s,t){s.seq.push(t),s.map[t.id]=t}function ay(s,t,e){let i=s.name,n=i.length;for(gu.lastIndex=0;;){let r=gu.exec(i),a=gu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Nf(e,c===void 0?new _u(o,s,t):new yu(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new vu(o),Nf(e,u)),e=u}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ay(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Uf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var oy=37297,ly=0;function cy(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Ff=new Gt;function hy(s){Jt._getMatrix(Ff,Jt.workingColorSpace,s);let t=`mat3( ${Ff.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Xr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Of(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cy(s.getShaderSource(t),o)}else return r}function uy(s,t){let e=hy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dy={[Aa]:"Linear",[Ra]:"Reinhard",[Ca]:"Cineon",[xs]:"ACESFilmic",[Ia]:"AgX",[La]:"Neutral",[Pa]:"Custom"};function fy(s,t){let e=dy[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new D;function py(){Jt.getLuminanceCoefficients(rc);let s=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function gy(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xy(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ha(s){return s!==""}function zf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(s){return s.replace(_y,yy)}function yy(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Mu(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(s){return s.replace(vy,My)}function My(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Hf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var by={[ms]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function Sy(s){return by[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wy={[fr]:"ENVMAP_MODE_REFRACTION"};function Ey(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function Ay(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[s.combine]||"ENVMAP_BLENDING_NONE"}function Ry(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Sy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ey(e),u=Ay(e),d=my(e),f=gy(r),g=n.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ha).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ha).join(`
`),p.length>0&&(p+=`
`)):(x=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),p=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ln?fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,uy("linearToOutputTexel",e.outputColorSpace),py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Mu(a),a=zf(a,e),a=Bf(a,e),o=Mu(o),o=zf(o,e),o=Bf(o,e),a=kf(a),o=kf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+x+a,b=m+p+o,v=Uf(n,n.VERTEX_SHADER,_),A=Uf(n,n.FRAGMENT_SHADER,b);n.attachShader(g,v),n.attachShader(g,A),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function S(T){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(g)||"",N=n.getShaderInfoLog(v)||"",I=n.getShaderInfoLog(A)||"",R=L.trim(),O=N.trim(),B=I.trim(),k=!0,tt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,v,A);else{let V=Of(n,v,"vertex"),J=Of(n,A,"fragment");Ht("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+V+`
`+J)}else R!==""?Dt("WebGLProgram: Program Info Log:",R):(O===""||B==="")&&(tt=!1);tt&&(T.diagnostics={runnable:k,programLog:R,vertexShader:{log:O,prefix:x},fragmentShader:{log:B,prefix:p}})}n.deleteShader(v),n.deleteShader(A),y=new gr(n,g),M=xy(n,g)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(g,oy)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ly++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var Cy=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Su(t),e.set(t,i)),i}},Su=class{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}};function Py(s){return s===Zn||s===za||s===Ba}function Iy(s,t,e,i,n,r){let a=new Zr,o=new bu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,C,T,L,N){let I=T.fog,R=L.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||O,B),tt=d[y.type],V=i.precision;y.precision!==null&&(V=i.getMaxPrecision(y.precision),V!==y.precision&&Dt("WebGLProgram.getParameters:",y.precision,"not supported, using",V,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,nt=J!==void 0?J.length:0,St=0;R.morphAttributes.position!==void 0&&(St=1),R.morphAttributes.normal!==void 0&&(St=2),R.morphAttributes.color!==void 0&&(St=3);let Ft,Z,yt,Tt;if(tt){let xt=hn[tt];Ft=xt.vertexShader,Z=xt.fragmentShader}else{Ft=y.vertexShader,Z=y.fragmentShader;let xt=o.getVertexShaderStage(y),ce=o.getFragmentShaderStage(y);o.update(y,xt,ce),yt=xt.id,Tt=ce.id}let Ot=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),qt=L.isInstancedMesh===!0,Oe=L.isBatchedMesh===!0,kt=!!y.map,le=!!y.matcap,de=!!k,Kt=de&&k.isPMREMTexture===!0,ei=!!y.aoMap,ke=!!y.lightMap,bi=!!y.bumpMap&&y.wireframe===!1,Re=!!y.normalMap,tn=!!y.displacementMap,Ze=!!y.emissiveMap,Ui=!!y.metalnessMap,Fi=!!y.roughnessMap,Oi=y.anisotropy>0,z=y.clearcoat>0,zi=y.diffuseRoughness>0,Se=y.dispersion>0,we=y.retroreflectivity>0,gt=y.iridescence>0,He=y.sheen>0,zt=y.transmission>0,Vt=Oi&&!!y.anisotropyMap,P=z&&!!y.clearcoatMap,w=z&&!!y.clearcoatNormalMap,G=z&&!!y.clearcoatRoughnessMap,rt=zi&&!!y.diffuseRoughnessMap,Q=gt&&!!y.iridescenceMap,ct=gt&&!!y.iridescenceThicknessMap,pt=He&&!!y.sheenColorMap,$=He&&!!y.sheenRoughnessMap,j=!!y.specularMap,ut=!!y.specularColorMap,U=!!y.specularIntensityMap,K=zt&&!!y.transmissionMap,q=zt&&!!y.thicknessMap,dt=!!y.gradientMap,lt=!!y.alphaMap,ht=y.alphaTest>0,Pt=!!y.alphaHash,$t=!!y.extensions,at=ln;y.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(at=s.toneMapping);let Lt=Kt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Yt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Ft,fragmentShader:Z,defines:y.defines,customVertexShaderID:yt,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:V,batching:Oe,batchingColor:Oe&&L._colorsTexture!==null,instancing:qt,instancingColor:qt&&L.instanceColor!==null,instancingMorph:qt&&L.morphTexture!==null,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:le,envMap:de,envMapMode:de&&k.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Lt.length-1:null,envMapSize:Kt?Lt[0].width:null,aoMap:ei,lightMap:ke,bumpMap:bi,normalMap:Re,displacementMap:tn,emissiveMap:Ze,normalMapObjectSpace:Re&&y.normalMapType===af,normalMapTangentSpace:Re&&y.normalMapType===ec,packedNormalMap:Re&&y.normalMapType===ec&&Py(y.normalMap.format),metalnessMap:Ui,roughnessMap:Fi,anisotropy:Oi,anisotropyMap:Vt,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:G,diffuseRoughness:zi,diffuseRoughnessMap:rt,dispersion:Se,retroreflection:we,iridescence:gt,iridescenceMap:Q,iridescenceThicknessMap:ct,sheen:He,sheenColorMap:pt,sheenRoughnessMap:$,specularMap:j,specularColorMap:ut,specularIntensityMap:U,transmission:zt,transmissionMap:K,thicknessMap:q,gradientMap:dt,opaque:y.transparent===!1&&y.blending===dr&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:ht,alphaHash:Pt,combine:y.combine,mapUv:kt&&f(y.map.channel),aoMapUv:ei&&f(y.aoMap.channel),lightMapUv:ke&&f(y.lightMap.channel),bumpMapUv:bi&&f(y.bumpMap.channel),normalMapUv:Re&&f(y.normalMap.channel),displacementMapUv:tn&&f(y.displacementMap.channel),emissiveMapUv:Ze&&f(y.emissiveMap.channel),metalnessMapUv:Ui&&f(y.metalnessMap.channel),roughnessMapUv:Fi&&f(y.roughnessMap.channel),anisotropyMapUv:Vt&&f(y.anisotropyMap.channel),clearcoatMapUv:P&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:ut&&f(y.specularColorMap.channel),specularIntensityMapUv:U&&f(y.specularIntensityMap.channel),transmissionMapUv:K&&f(y.transmissionMap.channel),thicknessMapUv:q&&f(y.thicknessMap.channel),alphaMapUv:lt&&f(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Re||Oi),vertexNormals:!!R.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(kt||lt),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&Re===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:Ze&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ue,flipSided:y.side===si,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||Oe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(M,y),m(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapPMREM),y.push(M.envMapMaxLod),y.push(M.envMapSize),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.diffuseRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.numLightProbeGrids),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function m(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function _(y){let M=d[y.type],C;if(M){let T=hn[M];C=Pn.clone(T.uniforms)}else C=y.uniforms;return C}function b(y,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new Ry(s,M,y,n),c.push(C),h.set(M,C)),C}function v(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:S}}function Ly(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Dy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Gf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vf(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,p,m){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},s[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=m),t++,_}function l(d,f,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);let b=o(d,f,g,x,p,m);g.transmission>0?i.push(b):g.transparent===!0?n.push(b):e.push(b)}function c(d,f,g,x,p,m){let _=o(d,f,g,x,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?n.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||Dy),i.length>1&&i.sort(f||Gf),n.length>1&&n.sort(f||Gf)}function u(){for(let d=t,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function Ny(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Vf,s.set(i,[a])):n>=r.length?(a=new Vf,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Uy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new et};break;case"SpotLight":e={position:new D,direction:new D,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Fy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Oy=0;function zy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function By(s){let t=new Uy,e=Fy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,r=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,b=0,v=0,A=0,S=0,y=0,M=0,C=0,T=0;c.sort(zy);for(let N=0,I=c.length;N<I;N++){let R=c[N],O=R.color,B=R.intensity,k=R.distance,tt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Zn?tt=R.shadow.map.texture:tt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],B);T++}else if(R.isSunLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,nt=e.get(R);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=tt;let St=J.getViewportCount();for(let Ft=0;Ft<St;Ft++)i.sunShadowMatrix[x+Ft]=J.getMatrix(Ft),i.sunShadowCascade[x+Ft]=J._cascadeData[Ft];x+=St,g++}i.sun[f]=V,f++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,nt=e.get(R);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.directionalShadow[p]=nt,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[_]=V;let J=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,J.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=J.matrix,R.castShadow){let nt=e.get(R);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.spotShadow[_]=nt,i.spotShadowMap[_]=tt,y++}_++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=V,b++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let J=R.shadow,nt=e.get(R);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,i.pointShadow[m]=nt,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=R.shadow.matrix,S++}i.point[m]=V,m++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(B),V.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[v]=V,v++}}b>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==b||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==A||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==M||L.numLightProbes!==T)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=_,L.rectAreaLength=b,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=A,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=M,L.numLightProbes=T,i.version=Oy++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let v=c[_];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),d++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Wf(s){let t=new By(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ky(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Wf(s),t.set(n,[o])):r>=a.length?(o=new Wf(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Wy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Xf=new ie,ka=new D,xu=new D;function Xy(s,t,e){let i=new Wn,n=new st,r=new st,a=new ge,o=new il,l=new nl,c={},h=e.maxTextureSize,u={[$n]:si,[si]:$n,[Ue]:Ue},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Hy,fragmentShader:Gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let m=this.type;this.render=function(S,y,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Fd&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let C=s.getRenderTarget(),T=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(En),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let I=m!==this.type;I&&y.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=S.length;R<O;R++){let B=S[R],k=B.shadow;if(k===void 0){Dt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let tt=k.getFrameExtents();n.multiply(tt),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/tt.x),n.x=r.x*tt.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/tt.y),n.y=r.y*tt.y,k.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||I===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ur){if(B.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ne(n.x,n.y,{format:Zn,type:We,minFilter:ni,magFilter:ni,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Sn(n.x,n.y,Hi),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=bn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Qe,k.map.depthTexture.magFilter=Qe}else B.isPointLight?(k.map=new Ga(n.x),k.map.depthTexture=new ra(n.x,ji)):(k.map=new Ne(n.x,n.y),k.map.depthTexture=new Sn(n.x,n.y,ji)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=bn,this.type===ms?(k.map.depthTexture.compareFunction=V?Kh:Jh,k.map.depthTexture.minFilter=ni,k.map.depthTexture.magFilter=ni):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Qe,k.map.depthTexture.magFilter=Qe);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==n.x||k.map.height!==n.y)&&k.map.setSize(n.x,n.y);let J=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,M);let nt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let St=0;St<J;St++){let Ft=k.getCamera(St);if(B.isPointLight){let Z=k.camera,yt=k.matrix,Tt=B.distance||Z.far;Tt!==Z.far&&(Z.far=Tt,Z.updateProjectionMatrix()),ka.setFromMatrixPosition(B.matrixWorld),Z.position.copy(ka),xu.copy(Z.position),xu.add(Vy[St]),Z.up.copy(Wy[St]),Z.lookAt(xu),Z.updateMatrixWorld(),yt.makeTranslation(-ka.x,-ka.y,-ka.z),Xf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Xf,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,St),s.clear();else{St===0&&(s.setRenderTarget(k.map),s.clear());let Z=k.getViewport(St);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(a)}i=k.getFrustum(St),v(y,M,Ft,B,nt,this.type)}k.isPointLightShadow!==!0&&this.type===ur&&_(k,M),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(C,T,L)};function _(S,y){let M=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ne(n.x,n.y,{format:Zn,type:We}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,M,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,M,f,x,null)}function b(S,y,M,C){let T=null,L=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)T=L;else if(T=M.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let N=T.uuid,I=y.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let O=R[I];O===void 0&&(O=T.clone(),R[I]=O,y.addEventListener("dispose",A)),T=O}if(T.visible=y.visible,T.wireframe=y.wireframe,C===ur?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:u[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=s.properties.get(T);N.light=M}return T}function v(S,y,M,C,T,L){if(S.visible===!1)return;if(S.layers.test(T)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===ur)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let R=t.update(S),O=S.material;if(Array.isArray(O)){let B=R.groups;for(let k=0,tt=B.length;k<tt;k++){let V=B[k],J=O[V.materialIndex];if(J&&J.visible){let nt=b(S,J,C,L);S.onBeforeShadow(s,S,y,M,R,nt,V),s.renderBufferDirect(M,null,R,nt,S,V),S.onAfterShadow(s,S,y,M,R,nt,V)}}}else if(O.visible){let B=b(S,O,C,L);S.onBeforeShadow(s,S,y,M,R,B,null),s.renderBufferDirect(M,null,R,B,S,null),S.onAfterShadow(s,S,y,M,R,B,null)}}let I=S.children;for(let R=0,O=I.length;R<O;R++)v(I[R],y,M,C,T,L)}function A(S){S.target.removeEventListener("dispose",A);for(let M in c){let C=c[M],T=S.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function qy(s,t){function e(){let U=!1,K=new ge,q=null,dt=new ge(0,0,0,0);return{setMask:function(lt){q!==lt&&!U&&(s.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){U=lt},setClear:function(lt,ht,Pt,$t,at){at===!0&&(lt*=$t,ht*=$t,Pt*=$t),K.set(lt,ht,Pt,$t),dt.equals(K)===!1&&(s.clearColor(lt,ht,Pt,$t),dt.copy(K))},reset:function(){U=!1,q=null,dt.set(-1,0,0,0)}}}function i(){let U=!1,K=!1,q=null,dt=null,lt=null;return{setReversed:function(ht){if(K!==ht){let Pt=t.get("EXT_clip_control");ht?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let $t=lt;lt=null,this.setClear($t)}},getReversed:function(){return K},setTest:function(ht){ht?vt(s.DEPTH_TEST):qt(s.DEPTH_TEST)},setMask:function(ht){q!==ht&&!U&&(s.depthMask(ht),q=ht)},setFunc:function(ht){if(K&&(ht=gf[ht]),dt!==ht){switch(ht){case No:s.depthFunc(s.NEVER);break;case Uo:s.depthFunc(s.ALWAYS);break;case Fo:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Oo:s.depthFunc(s.EQUAL);break;case zo:s.depthFunc(s.GEQUAL);break;case Bo:s.depthFunc(s.GREATER);break;case ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=ht}},setLocked:function(ht){U=ht},setClear:function(ht){lt!==ht&&(lt=ht,K&&(ht=1-ht),s.clearDepth(ht))},reset:function(){U=!1,q=null,dt=null,lt=null,K=!1}}}function n(){let U=!1,K=null,q=null,dt=null,lt=null,ht=null,Pt=null,$t=null,at=null;return{setTest:function(Lt){U||(Lt?vt(s.STENCIL_TEST):qt(s.STENCIL_TEST))},setMask:function(Lt){K!==Lt&&!U&&(s.stencilMask(Lt),K=Lt)},setFunc:function(Lt,Yt,xt){(q!==Lt||dt!==Yt||lt!==xt)&&(s.stencilFunc(Lt,Yt,xt),q=Lt,dt=Yt,lt=xt)},setOp:function(Lt,Yt,xt){(ht!==Lt||Pt!==Yt||$t!==xt)&&(s.stencilOp(Lt,Yt,xt),ht=Lt,Pt=Yt,$t=xt)},setLocked:function(Lt){U=Lt},setClear:function(Lt){at!==Lt&&(s.clearStencil(Lt),at=Lt)},reset:function(){U=!1,K=null,q=null,dt=null,lt=null,ht=null,Pt=null,$t=null,at=null}}}let r=new e,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,b=null,v=null,A=null,S=null,y=null,M=new et(0,0,0),C=0,T=!1,L=null,N=null,I=null,R=null,O=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=tt>=2);let J=null,nt={},St=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),Z=new ge().fromArray(St),yt=new ge().fromArray(Ft);function Tt(U,K,q,dt){let lt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(U,ht),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<q;Pt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(K+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return ht}let Ot={};Ot[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(s.DEPTH_TEST),a.setFunc(qs),bi(!1),Re(zh),vt(s.CULL_FACE),ei(En);function vt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function qt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Oe(U,K){return d[U]!==K?(s.bindFramebuffer(U,K),d[U]=K,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=K),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=K),!0):!1}function kt(U,K){let q=g,dt=!1;if(U){q=f.get(K),q===void 0&&(q=[],f.set(K,q));let lt=U.textures;if(q.length!==lt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Pt=lt.length;ht<Pt;ht++)q[ht]=s.COLOR_ATTACHMENT0+ht;q.length=lt.length,dt=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,dt=!0);dt&&s.drawBuffers(q)}function le(U){return x!==U?(s.useProgram(U),x=U,!0):!1}let de={[gs]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[Bd]:s.FUNC_REVERSE_SUBTRACT};de[kd]=s.MIN,de[Hd]=s.MAX;let Kt={[Gd]:s.ZERO,[Vd]:s.ONE,[Wd]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[jd]:s.SRC_ALPHA_SATURATE,[$d]:s.DST_COLOR,[qd]:s.DST_ALPHA,[Xd]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[Zd]:s.ONE_MINUS_DST_COLOR,[Yd]:s.ONE_MINUS_DST_ALPHA,[Jd]:s.CONSTANT_COLOR,[Kd]:s.ONE_MINUS_CONSTANT_COLOR,[Qd]:s.CONSTANT_ALPHA,[tf]:s.ONE_MINUS_CONSTANT_ALPHA};function ei(U,K,q,dt,lt,ht,Pt,$t,at,Lt){if(U===En){p===!0&&(qt(s.BLEND),p=!1);return}if(p===!1&&(vt(s.BLEND),p=!0),U!==Od){if(U!==m||Lt!==T){if((_!==gs||A!==gs)&&(s.blendEquation(s.FUNC_ADD),_=gs,A=gs),Lt)switch(U){case dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",U);break}else switch(U){case dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",U);break}b=null,v=null,S=null,y=null,M.set(0,0,0),C=0,m=U,T=Lt}return}lt=lt||K,ht=ht||q,Pt=Pt||dt,(K!==_||lt!==A)&&(s.blendEquationSeparate(de[K],de[lt]),_=K,A=lt),(q!==b||dt!==v||ht!==S||Pt!==y)&&(s.blendFuncSeparate(Kt[q],Kt[dt],Kt[ht],Kt[Pt]),b=q,v=dt,S=ht,y=Pt),($t.equals(M)===!1||at!==C)&&(s.blendColor($t.r,$t.g,$t.b,at),M.copy($t),C=at),m=U,T=!1}function ke(U,K){U.side===Ue?qt(s.CULL_FACE):vt(s.CULL_FACE);let q=U.side===si;K&&(q=!q),bi(q),U.blending===dr&&U.transparent===!1?ei(En):ei(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):qt(s.SAMPLE_ALPHA_TO_COVERAGE)}function bi(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function Re(U){U!==Nd?(vt(s.CULL_FACE),U!==N&&(U===zh?s.cullFace(s.BACK):U===Ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qt(s.CULL_FACE),N=U}function tn(U){U!==I&&(k&&s.lineWidth(U),I=U)}function Ze(U,K,q){U?(vt(s.POLYGON_OFFSET_FILL),(R!==K||O!==q)&&(R=K,O=q,a.getReversed()&&(K=-K,q=-q),s.polygonOffset(K,q))):qt(s.POLYGON_OFFSET_FILL)}function Ui(U){U?vt(s.SCISSOR_TEST):qt(s.SCISSOR_TEST)}function Fi(U){U===void 0&&(U=s.TEXTURE0+B-1),J!==U&&(s.activeTexture(U),J=U)}function Oi(U,K,q){q===void 0&&(J===null?q=s.TEXTURE0+B-1:q=J);let dt=nt[q];dt===void 0&&(dt={type:void 0,texture:void 0},nt[q]=dt),(dt.type!==U||dt.texture!==K)&&(J!==q&&(s.activeTexture(q),J=q),s.bindTexture(U,K||Ot[U]),dt.type=U,dt.texture=K)}function z(){let U=nt[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function zi(){try{s.compressedTexImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Se(){try{s.compressedTexImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function we(){try{s.texSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function gt(){try{s.texSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function He(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Vt(){try{s.texStorage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function P(){try{s.texStorage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function w(){try{s.texImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function G(){try{s.texImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function rt(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function Q(U,K){u[U]!==K&&(s.pixelStorei(U,K),u[U]=K)}function ct(U){Z.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function pt(U){yt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function $(U,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let dt=q.get(U);dt===void 0&&(dt=s.getUniformBlockIndex(K,U.name),s.uniformBlockBinding(K,dt,dt),q.set(U,dt))}function j(U,K,q){let lt=c.get(K).get(U);l[lt]!==q&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,q),l[lt]=q)}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,nt={},d={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,b=null,v=null,A=null,S=null,y=null,M=new et(0,0,0),C=0,T=!1,L=null,N=null,I=null,R=null,O=null,Z.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:qt,bindFramebuffer:Oe,drawBuffers:kt,useProgram:le,setBlending:ei,setMaterial:ke,setFlipSided:bi,setCullFace:Re,setLineWidth:tn,setPolygonOffset:Ze,setScissorTest:Ui,activeTexture:Fi,bindTexture:Oi,unbindTexture:z,compressedTexImage2D:zi,compressedTexImage3D:Se,texImage2D:w,texImage3D:G,pixelStorei:Q,getParameter:rt,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:Vt,texStorage3D:P,texSubImage2D:we,texSubImage3D:gt,compressedTexSubImage2D:He,compressedTexSubImage3D:zt,scissor:ct,viewport:pt,reset:ut}}function Yy(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(P=>g.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return p?new OffscreenCanvas(P,w):qr("canvas")}function _(P,w,G){let rt=1,Q=Vt(P);if((Q.width>G||Q.height>G)&&(rt=G/Math.max(Q.width,Q.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ct=Math.floor(rt*Q.width),pt=Math.floor(rt*Q.height);d===void 0&&(d=m(ct,pt));let $=w?m(ct,pt):d;return $.width=ct,$.height=pt,$.getContext("2d").drawImage(P,0,0,ct,pt),Dt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+pt+")."),$}else return"data"in P&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function b(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(P,w,G,rt,Q,ct=!1){if(P!==null){if(s[P]!==void 0)return s[P];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt;rt&&(pt=t.get("EXT_texture_norm16"),pt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8),G===s.UNSIGNED_SHORT&&pt&&($=pt.R16_EXT),G===s.SHORT&&pt&&($=pt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),w===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8),G===s.UNSIGNED_SHORT&&pt&&($=pt.RG16_EXT),G===s.SHORT&&pt&&($=pt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_SHORT&&pt&&($=pt.RGB16_EXT),G===s.SHORT&&pt&&($=pt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),w===s.RGBA){let j=ct?Xr:Jt.getTransfer(Q);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=j===re?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&pt&&($=pt.RGBA16_EXT),G===s.SHORT&&pt&&($=pt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(P,w){let G;return P?w===null||w===ji||w===ys?G=s.DEPTH24_STENCIL8:w===Hi?G=s.DEPTH32F_STENCIL8:w===pr&&(G=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ji||w===ys?G=s.DEPTH_COMPONENT24:w===Hi?G=s.DEPTH_COMPONENT32F:w===pr&&(G=s.DEPTH_COMPONENT16),G}function M(P,w){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qe&&P.minFilter!==ni?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){let w=new WeakRef(P);i.get(P).__ref=w,g.add(w),x.register(P,w,w)}function T(P){let w=i.get(P).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function L(P){I(P.target)}function N(P){R(P.target)}function I(P){P.removeEventListener("dispose",L),T(P),B(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function R(P){P.removeEventListener("dispose",N),T(P),tt(P)}function O(){for(let P of g){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):I(w))}g.clear(),u.clear()}function B(P){let w=i.get(P);if(w.__webglInit===void 0)return;let G=P.source,rt=f.get(G);if(rt){let Q=rt[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&k(P),Object.keys(rt).length===0&&f.delete(G)}i.remove(P)}function k(P){let w=i.get(P);s.deleteTexture(w.__webglTexture);let G=P.source,rt=f.get(G);delete rt[w.__cacheKey],a.memory.textures--}function tt(P){let w=i.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let G=P.depthTexture;if(G&&G.renderTarget===P&&I(G),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ct=0;ct<w.__webglFramebuffer[Q].length;ct++)s.deleteFramebuffer(w.__webglFramebuffer[Q][ct]);else s.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)s.deleteFramebuffer(w.__webglFramebuffer[Q]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let rt=P.textures;for(let Q=0,ct=rt.length;Q<ct;Q++){let pt=i.get(rt[Q]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(rt[Q])}i.remove(P)}let V=0;function J(){V=0}function nt(){return V}function St(P){V=P}function Ft(){let P=V;return P>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,P}function Z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function yt(P,w){let G=i.get(P);if(P.isVideoTexture&&He(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let rt=P.image;if(rt===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function Tt(P,w){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ke(G,P,w);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function Ot(P,w){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ke(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function vt(P,w){let G=i.get(P);if(P.version>0&&G.__version!==P.version){bi(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let qt={[Ys]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[Ho]:s.MIRRORED_REPEAT},Oe={[Qe]:s.NEAREST,[sf]:s.NEAREST_MIPMAP_NEAREST,[Da]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[_l]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},kt={[lf]:s.NEVER,[Qh]:s.ALWAYS,[cf]:s.LESS,[Jh]:s.LEQUAL,[hf]:s.EQUAL,[Kh]:s.GEQUAL,[uf]:s.GREATER,[df]:s.NOTEQUAL};function le(P,w){if(w.type===Hi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ni||w.magFilter===_l||w.magFilter===Da||w.magFilter===Tn||w.minFilter===ni||w.minFilter===_l||w.minFilter===Da||w.minFilter===Tn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,qt[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,qt[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,qt[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Oe[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Oe[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,kt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qe||w.minFilter!==Da&&w.minFilter!==Tn||w.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function de(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L),C(w));let rt=w.source,Q=f.get(rt);Q===void 0&&(Q={},f.set(rt,Q));let ct=Z(w);if(ct!==P.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ct].usedTimes++;let pt=Q[P.__cacheKey];pt!==void 0&&(Q[P.__cacheKey].usedTimes--,pt.usedTimes===0&&k(w)),P.__cacheKey=ct,P.__webglTexture=Q[ct].texture}return G}function Kt(P,w,G){return Math.floor(Math.floor(P/G)/w)}function ei(P,w,G,rt){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,rt,w.data);else{ct.sort((U,K)=>U.start-K.start);let pt=0;for(let U=1;U<ct.length;U++){let K=ct[pt],q=ct[U],dt=K.start+K.count,lt=Kt(q.start,w.width,4),ht=Kt(K.start,w.width,4);q.start<=dt+1&&lt===ht&&Kt(q.start+q.count-1,w.width,4)===lt?K.count=Math.max(K.count,q.start+q.count-K.start):(++pt,ct[pt]=q)}ct.length=pt+1;let $=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),ut=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let U=0,K=ct.length;U<K;U++){let q=ct[U],dt=Math.floor(q.start/4),lt=Math.ceil(q.count/4),ht=dt%w.width,Pt=Math.floor(dt/w.width),$t=lt,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(s.TEXTURE_2D,0,ht,Pt,$t,at,G,rt,w.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function ke(P,w,G){let rt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=s.TEXTURE_3D);let Q=de(P,w),ct=w.source;e.bindTexture(rt,P.__webglTexture,s.TEXTURE0+G);let pt=i.get(ct);if(ct.version!==pt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let at=Jt.getPrimaries(Jt.workingColorSpace),Lt=w.colorSpace===Rn?null:Jt.getPrimaries(w.colorSpace),Yt=w.colorSpace===Rn||at===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let j=_(w.image,!1,n.maxTextureSize);j=zt(w,j);let ut=r.convert(w.format,w.colorSpace),U=r.convert(w.type),K=S(w.internalFormat,ut,U,w.normalized,w.colorSpace,w.isVideoTexture);le(rt,w);let q,dt=w.mipmaps,lt=w.isVideoTexture!==!0,ht=pt.__version===void 0||Q===!0,Pt=ct.dataReady,$t=M(w,j);if(w.isDepthTexture)K=y(w.format===An,w.type),ht&&(lt?e.texStorage2D(s.TEXTURE_2D,1,K,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,K,j.width,j.height,0,ut,U,null));else if(w.isDataTexture)if(dt.length>0){lt&&ht&&e.texStorage2D(s.TEXTURE_2D,$t,K,dt[0].width,dt[0].height);for(let at=0,Lt=dt.length;at<Lt;at++)q=dt[at],lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,q.width,q.height,ut,U,q.data):e.texImage2D(s.TEXTURE_2D,at,K,q.width,q.height,0,ut,U,q.data);w.generateMipmaps=!1}else lt?(ht&&e.texStorage2D(s.TEXTURE_2D,$t,K,j.width,j.height),Pt&&ei(w,j,ut,U)):e.texImage2D(s.TEXTURE_2D,0,K,j.width,j.height,0,ut,U,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,K,dt[0].width,dt[0].height,j.depth);for(let at=0,Lt=dt.length;at<Lt;at++)if(q=dt[at],w.format!==Ji)if(ut!==null)if(lt){if(Pt)if(w.layerUpdates.size>0){let Yt=hu(q.width,q.height,w.format,w.type);for(let xt of w.layerUpdates){let ce=q.data.subarray(xt*Yt/q.data.BYTES_PER_ELEMENT,(xt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,xt,q.width,q.height,1,ut,ce)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,j.depth,ut,q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,K,q.width,q.height,j.depth,0,q.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,j.depth,ut,U,q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,K,q.width,q.height,j.depth,0,ut,U,q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&ht&&e.texStorage2D(s.TEXTURE_2D,$t,K,dt[0].width,dt[0].height);for(let at=0,Lt=dt.length;at<Lt;at++)q=dt[at],w.format!==Ji?ut!==null?lt?Pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(s.TEXTURE_2D,at,K,q.width,q.height,0,q.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,q.width,q.height,ut,U,q.data):e.texImage2D(s.TEXTURE_2D,at,K,q.width,q.height,0,ut,U,q.data)}else if(w.isDataArrayTexture)if(lt){if(ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,K,j.width,j.height,j.depth),Pt)if(w.layerUpdates.size>0){let at=hu(j.width,j.height,w.format,w.type);for(let Lt of w.layerUpdates){let Yt=j.data.subarray(Lt*at/j.data.BYTES_PER_ELEMENT,(Lt+1)*at/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Lt,j.width,j.height,1,ut,U,Yt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,U,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,K,j.width,j.height,j.depth,0,ut,U,j.data);else if(w.isData3DTexture)lt?(ht&&e.texStorage3D(s.TEXTURE_3D,$t,K,j.width,j.height,j.depth),Pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,U,j.data)):e.texImage3D(s.TEXTURE_3D,0,K,j.width,j.height,j.depth,0,ut,U,j.data);else if(w.isFramebufferTexture){if(ht)if(lt)e.texStorage2D(s.TEXTURE_2D,$t,K,j.width,j.height);else{let at=j.width,Lt=j.height;for(let Yt=0;Yt<$t;Yt++)e.texImage2D(s.TEXTURE_2D,Yt,K,at,Lt,0,ut,U,null),at>>=1,Lt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),j.parentNode!==at){at.appendChild(j),u.add(w),at.onpaint=Lt=>{let Yt=Lt.changedElements;for(let xt of u)Yt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Yt=s.RGBA,xt=s.RGBA,ce=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Yt,xt,ce,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&ht){let at=Vt(dt[0]);e.texStorage2D(s.TEXTURE_2D,$t,K,at.width,at.height)}for(let at=0,Lt=dt.length;at<Lt;at++)q=dt[at],lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,ut,U,q):e.texImage2D(s.TEXTURE_2D,at,K,ut,U,q);w.generateMipmaps=!1}else if(lt){if(ht){let at=Vt(j);e.texStorage2D(s.TEXTURE_2D,$t,K,at.width,at.height)}Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,U,j)}else e.texImage2D(s.TEXTURE_2D,0,K,ut,U,j);b(w)&&w.mipmapsAutoUpdate===!0&&v(rt),pt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function bi(P,w,G){if(w.image.length!==6)return;let rt=de(P,w),Q=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let ct=i.get(Q);if(Q.version!==ct.__version||rt===!0){e.activeTexture(s.TEXTURE0+G);let pt=Jt.getPrimaries(Jt.workingColorSpace),$=w.colorSpace===Rn?null:Jt.getPrimaries(w.colorSpace),j=w.colorSpace===Rn||pt===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ut=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,K=[];for(let xt=0;xt<6;xt++)!ut&&!U?K[xt]=_(w.image[xt],!0,n.maxCubemapSize):K[xt]=U?w.image[xt].image:w.image[xt],K[xt]=zt(w,K[xt]);let q=K[0],dt=r.convert(w.format,w.colorSpace),lt=r.convert(w.type),ht=S(w.internalFormat,dt,lt,w.normalized,w.colorSpace),Pt=w.isVideoTexture!==!0,$t=ct.__version===void 0||rt===!0,at=Q.dataReady,Lt=M(w,q);le(s.TEXTURE_CUBE_MAP,w);let Yt;if(w.isDepthTexture){if(ht=y(w.format===An,w.type),$t)if(Pt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let xt=0;xt<6;xt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,q.width,q.height,0,dt,lt,null)}else if(ut){Pt&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ht,q.width,q.height);for(let xt=0;xt<6;xt++){Yt=K[xt].mipmaps;for(let ce=0;ce<Yt.length;ce++){let je=Yt[ce];w.format!==Ji?dt!==null?Pt?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce,0,0,je.width,je.height,dt,je.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce,ht,je.width,je.height,0,je.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce,0,0,je.width,je.height,dt,lt,je.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce,ht,je.width,je.height,0,dt,lt,je.data)}}}else{if(Yt=w.mipmaps,Pt&&$t){Yt.length>0&&Lt++;let xt=Vt(K[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ht,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(U){Pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,K[xt].width,K[xt].height,dt,lt,K[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,K[xt].width,K[xt].height,0,dt,lt,K[xt].data);for(let ce=0;ce<Yt.length;ce++){let On=Yt[ce].image[xt].image;Pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce+1,0,0,On.width,On.height,dt,lt,On.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce+1,ht,On.width,On.height,0,dt,lt,On.data)}}else{Pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt,lt,K[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,dt,lt,K[xt]);for(let ce=0;ce<Yt.length;ce++){let je=Yt[ce];Pt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce+1,0,0,dt,lt,je.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ce+1,ht,dt,lt,je.image[xt])}}}b(w)&&w.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ct.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Re(P,w,G,rt,Q,ct){let pt=r.convert(G.format,G.colorSpace),$=r.convert(G.type),j=S(G.internalFormat,pt,$,G.normalized,G.colorSpace),ut=i.get(w),U=i.get(G);if(U.__renderTarget=w,!ut.__hasExternalTextures){let K=Math.max(1,w.width>>ct),q=Math.max(1,w.height>>ct);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,j,K,q,w.depth,0,pt,$,null):e.texImage2D(Q,ct,j,K,q,0,pt,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),gt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,Q,U.__webglTexture,0,we(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,Q,U.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tn(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let rt=w.depthTexture,Q=rt&&rt.isDepthTexture?rt.type:null,ct=y(w.stencilBuffer,Q),pt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(w),ct,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(w),ct,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ct,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,P)}else{let rt=w.textures;for(let Q=0;Q<rt.length;Q++){let ct=rt[Q],pt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),j=S(ct.internalFormat,pt,$,ct.normalized,ct.colorSpace);gt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(w),j,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(w),j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(P,w,G){let rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(w.depthTexture);Q.__renderTarget=w;let ct=rt?w.depthTexture.image[0]:w.depthTexture.image;(!Q.__webglTexture||ct.width!==w.width||ct.height!==w.height)&&(ct.width=w.width,ct.height=w.height,w.depthTexture.needsUpdate=!0),rt?vt(w.depthTexture,0):yt(w.depthTexture,0);let pt=Q.__webglTexture,$=we(w),j=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ut=w.depthTexture.format===An?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===bn)gt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,j,pt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,ut,j,pt,0);else if(w.depthTexture.format===An)gt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,j,pt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,ut,j,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ui(P){let w=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let rt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",Q)};rt.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=rt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let rt=0;rt<6;rt++)Ze(w.__webglFramebuffer[rt],P,rt);else P.texture.mipmaps.length>0?Ze(w.__webglFramebuffer[0],P,0):Ze(w.__webglFramebuffer,P,0);else if(G){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=s.createRenderbuffer(),tn(w.__webglDepthbuffer[rt],P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ct)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),tn(w.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fi(P,w,G){let rt=i.get(P);w!==void 0&&Re(rt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ui(P)}function Oi(P){let w=P.texture,G=i.get(P),rt=i.get(w);P.addEventListener("dispose",N),C(P);let Q=P.textures,ct=P.isWebGLCubeRenderTarget===!0,pt=Q.length>1;if(pt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=w.version,a.memory.textures++),ct){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let j=0;j<w.mipmaps.length;j++)G.__webglFramebuffer[$][j]=s.createFramebuffer()}else G.__webglFramebuffer[$]=s.createFramebuffer()}else{if(w.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)G.__webglFramebuffer[$]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(pt)for(let $=0,j=Q.length;$<j;$++){let ut=i.get(Q[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&gt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let j=Q[$];G.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let ut=r.convert(j.format,j.colorSpace),U=r.convert(j.type),K=S(j.internalFormat,ut,U,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),q=we(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,q,K,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,G.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),tn(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),le(s.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)Re(G.__webglFramebuffer[$][j],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Re(G.__webglFramebuffer[$],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);b(w)?v(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let $=0,j=Q.length;$<j;$++){let ut=Q[$],U=i.get(ut),K=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,U.__webglTexture),le(K,ut),Re(G.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+$,K,0),b(ut)&&v(K)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,rt.__webglTexture),le($,w),w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)Re(G.__webglFramebuffer[j],P,w,s.COLOR_ATTACHMENT0,$,j);else Re(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,$,0);b(w)?v($):w.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Ui(P)}function z(P){let w=P.textures;for(let G=0,rt=w.length;G<rt;G++){let Q=w[G];if(b(Q)&&Q.mipmapsAutoUpdate===!0){let ct=A(P),pt=i.get(Q).__webglTexture;e.bindTexture(ct,pt),v(ct),e.unbindTexture()}}}let zi=[];function Se(P){if(P.samples>0){if(gt(P)===!1){let w=P.textures,G=P.width,rt=P.height,Q=s.COLOR_BUFFER_BIT,ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=i.get(P),$=w.length>1;if($)for(let ut=0;ut<w.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<w.length;ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let U=i.get(w[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,G,rt,0,0,G,rt,Q,s.NEAREST),l===!0&&(zi.length=0,zi.push(s.COLOR_ATTACHMENT0+ut),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&zi.push(ct),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zi))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<w.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let U=i.get(w[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function we(P){return Math.min(n.maxSamples,P.samples)}function gt(P){let w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function He(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function zt(P,w){let G=P.colorSpace,rt=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Wr&&G!==Rn&&(Jt.getTransfer(G)===re?(rt!==Ji||Q!==di)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",G)),w}function Vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=J,this.getTextureUnits=nt,this.setTextureUnits=St,this.setTexture2D=yt,this.setTexture2DArray=Tt,this.setTexture3D=Ot,this.setTextureCube=vt,this.rebindTextures=Fi,this.setupRenderTarget=Oi,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ui,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=gt,this.dispose=O}function $y(s,t){function e(i,n=Rn){let r,a=Jt.getTransfer(n);if(i===di)return s.UNSIGNED_BYTE;if(i===vl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return s.BYTE;if(i===qh)return s.SHORT;if(i===pr)return s.UNSIGNED_SHORT;if(i===yl)return s.INT;if(i===ji)return s.UNSIGNED_INT;if(i===Hi)return s.FLOAT;if(i===We)return s.HALF_FLOAT;if(i===Zh)return s.ALPHA;if(i===jh)return s.RGB;if(i===Ji)return s.RGBA;if(i===bn)return s.DEPTH_COMPONENT;if(i===An)return s.DEPTH_STENCIL;if(i===mr)return s.RED;if(i===bl)return s.RED_INTEGER;if(i===Zn)return s.RG;if(i===Sl)return s.RG_INTEGER;if(i===wl)return s.RGBA_INTEGER;if(i===Na||i===Ua||i===Fa||i===Oa)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Tl||i===Al||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===za||i===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Pl)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===za)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===Ol||i===zl||i===Bl||i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===jl||i===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Ql||i===Ba||i===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new be({vertexShader:Zy,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends sn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new wu,m={},_=e.getContextAttributes(),b=null,v=null,A=[],S=[],y=new st,M=null,C=null,T=new ui;T.viewport=new ge;let L=new ui;L.viewport=new ge;let N=[T,L],I=new pl,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let yt=A[Z];return yt===void 0&&(yt=new Ks,A[Z]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Z){let yt=A[Z];return yt===void 0&&(yt=new Ks,A[Z]=yt),yt.getGripSpace()},this.getHand=function(Z){let yt=A[Z];return yt===void 0&&(yt=new Ks,A[Z]=yt),yt.getHandSpace()};function B(Z){let yt=S.indexOf(Z.inputSource);if(yt===-1)return;let Tt=A[yt];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||a),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<A.length;Z++){let yt=S[Z];yt!==null&&(S[Z]=null,A[Z].disconnect(yt))}R=null,O=null,p.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(b),f=null,d=null,u=null,n=null,v=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(y.width,y.height,!1),C!==null){let Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",k),n.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ot=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=_.stencil?An:bn,Ot=_.stencil?ys:ji);let qt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ne(d.textureWidth,d.textureHeight,{format:Ji,type:di,depthTexture:new Sn(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,Tt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ne(f.framebufferWidth,f.framebufferHeight,{format:Ji,type:di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ft.setContext(n),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(Z){for(let yt=0;yt<Z.removed.length;yt++){let Tt=Z.removed[yt],Ot=S.indexOf(Tt);Ot>=0&&(S[Ot]=null,A[Ot].disconnect(Tt))}for(let yt=0;yt<Z.added.length;yt++){let Tt=Z.added[yt],Ot=S.indexOf(Tt);if(Ot===-1){for(let qt=0;qt<A.length;qt++)if(qt>=S.length){S.push(Tt),Ot=qt;break}else if(S[qt]===null){S[qt]=Tt,Ot=qt;break}if(Ot===-1)break}let vt=A[Ot];vt&&vt.connect(Tt)}}function V(Z,yt){yt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(yt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let yt=Z.near,Tt=Z.far;p.texture!==null&&(p.depthNear>0&&(yt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),I.near=L.near=T.near=yt,I.far=L.far=T.far=Tt,(R!==I.near||O!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,O=I.far),I.layers.mask=Z.layers.mask|6,T.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;let Ot=Z.parent,vt=I.cameras;V(I,Ot);for(let qt=0;qt<vt.length;qt++)V(vt[qt],Ot);I.projectionMatrix.copy(T.projectionMatrix),I.projectionMatrixInverse.copy(T.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),J(Z,I,Ot)};function J(Z,yt,Tt){Tt===null?Z.matrix.copy(yt.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(yt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(yt.projectionMatrix),Z.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(Z){return m[Z]};let nt=null;function St(Z,yt){if(h=yt.getViewerPose(c||a),g=yt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;Tt.length!==I.cameras.length&&(I.cameras.length=0,Ot=!0);for(let kt=0;kt<Tt.length;kt++){let le=Tt[kt],de=null;if(f!==null)de=f.getViewport(le);else{let ei=u.getViewSubImage(d,le);de=ei.viewport,kt===0&&(t.setRenderTargetTextures(v,ei.colorTexture,ei.depthStencilTexture),t.setRenderTarget(v))}let Kt=N[kt];Kt===void 0&&(Kt=new ui,Kt.layers.enable(kt),Kt.viewport=new ge,N[kt]=Kt),Kt.matrix.fromArray(le.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(le.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(de.x,de.y,de.width,de.height),kt===0&&(I.matrix.copy(Kt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ot===!0&&I.cameras.push(Kt)}let vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let kt=u.getDepthInformation(Tt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,n.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let kt=0;kt<Tt.length;kt++){let le=Tt[kt].camera;if(le){let de=m[le];de||(de=new aa,m[le]=de);let Kt=u.getCameraImage(le);de.sourceTexture=Kt}}}}for(let Tt=0;Tt<A.length;Tt++){let Ot=S[Tt],vt=A[Tt];Ot!==null&&vt!==void 0&&vt.update(Ot,yt,c||a)}nt&&nt(Z,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),g=null}let Ft=new qf;Ft.setAnimationLoop(St),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}},Jy=new ie,ip=new Gt;ip.set(-1,0,0,0,1,0,0,0,1);function Ky(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ou(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===si&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===si&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),b=_.envMap,v=_.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ip),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Qy(s,t,e,i){let n={},r={};function a(_,b){let v=b.program;i.uniformBlockBinding(_,v,n[_.id])}function o(_,b){let v=n[_.id];v===void 0&&(g(_),v=l(_),n[_.id]=v,_.addEventListener("dispose",p));let A=b.program;i.updateUBOMapping(_,A);let S=t.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function l(_){let b=s.createBuffer(),v=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,A),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(_){let b=n[_.id],v=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let S=0,y=v.length;S<y;S++){let M=v[S];if(Array.isArray(M))for(let C=0,T=M.length;C<T;C++)h(M[C],S,C,A);else h(M,S,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,b,v,A){if(d(_,b,v,A)===!0){let S=_.__offset,y=_.value;if(Array.isArray(y)){let M=0;for(let C=0;C<y.length;C++){let T=y[C],L=x(T,!0);u(T,_.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,_.__data)}}function u(_,b,v){typeof _=="number"||typeof _=="boolean"?b[v]=_:_.isMatrix3?(b[v]=_.elements[0],b[v+1]=_.elements[1],b[v+2]=_.elements[2],b[v+3]=0,b[v+4]=_.elements[3],b[v+5]=_.elements[4],b[v+6]=_.elements[5],b[v+7]=0,b[v+8]=_.elements[6],b[v+9]=_.elements[7],b[v+10]=_.elements[8],b[v+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-v),v):_.toArray(b,v)}function d(_,b,v,A){let S=_.value,y=b+"_"+v;if(Array.isArray(S)){A[y]===void 0&&(A[y]=[]);let M=A[y],C=!1;for(let T=0;T<S.length;T++)f(S[T],M,T)===!0&&(C=!0);return C}return f(S,A,y)}function f(_,b,v){if(b[v]===void 0)return typeof _=="number"||typeof _=="boolean"?b[v]=_:ArrayBuffer.isView(_)?b[v]=_.slice():b[v]=_.clone(),!0;{let A=b[v];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return b[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function g(_){let b=_.uniforms,v=0,A=16;for(let y=0,M=b.length;y<M;y++){let C=Array.isArray(b[y])?b[y]:[b[y]];for(let T=0,L=C.length;T<L;T++){let N=C[T],I=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(b[y])||Array.isArray(N.value),O=v;for(let k=0,tt=I.length;k<tt;k++){let V=I[k],J=x(V,R),nt=v%A,St=nt%J.boundary,Ft=nt+St;v+=St,Ft!==0&&A-Ft<J.storage&&(v+=A-Ft),k===0&&(O=v),v+=J.storage}let B=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new B((v-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let S=v%A;return S>0&&(v+=A-S),_.__size=v,_.__cache={},this}function x(_,b){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let b=_.target;b.removeEventListener("dispose",p),s.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function m(){for(let _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:a,update:o,dispose:m}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cn=null;function ev(){return cn===null&&(cn=new us(tv,16,16,Zn,We),cn.name="DFG_LUT",cn.minFilter=ni,cn.magFilter=ni,cn.wrapS=nn,cn.wrapT=nn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}var oc=class{constructor(t={}){let{canvas:e=ff(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([wl,Sl,bl]),m=new Set([di,ji,pr,ys,vl,Ml]),_=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,S=null,y=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,L=!1,N=null,I=null,R=null,O=null;this._outputColorSpace=Ge;let B=0,k=0,tt=null,V=-1,J=null,nt=new ge,St=new ge,Ft=null,Z=new et(0),yt=0,Tt=e.width,Ot=e.height,vt=1,qt=null,Oe=null,kt=new ge(0,0,Tt,Ot),le=new ge(0,0,Tt,Ot),de=!1,Kt=new Wn,ei=new qo,ke=!1,bi=!1,Re=new ie,tn=new D,Ze=new ge,Ui={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fi=!1;function Oi(){return tt===null?vt:1}let z=i;function zi(E,F){return e.getContext(E,F)}let Se,we,gt,He,zt,Vt,P,w,G,rt,Q,ct,pt,$,j,ut,U,K,q,dt,lt,ht,Pt;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),z===null){let F="webgl2";if(z=zi(F,E),z===null)throw zi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(E){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ht("WebGLRenderer: "+E.message),E}function $t(){Se=new d_(z),Se.init(),lt=new $y(z,Se),we=new e_(z,Se,t,lt),gt=new qy(z,Se),we.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),I=z.createFramebuffer(),R=z.createFramebuffer(),O=z.createFramebuffer(),He=new m_(z),zt=new Ly,Vt=new Yy(z,Se,gt,zt,we,lt,He),P=new u_(T),w=new x0(z),ht=new Qx(z,w),G=new f_(z,w,He,ht),rt=new x_(z,G,w,ht,He),K=new g_(z,we,Vt),j=new i_(zt),Q=new Iy(T,P,Se,we,ht,j),ct=new Ky(T,zt),pt=new Ny,$=new ky(Se),U=new Kx(T,P,gt,rt,g,l),ut=new Xy(T,rt,we),Pt=new Qy(z,He,we,gt),q=new t_(z,Se,He),dt=new p_(z,Se,He),He.programs=Q.programs,T.capabilities=we,T.extensions=Se,T.properties=zt,T.renderLists=pt,T.shadowMap=ut,T.state=gt,T.info=He}x!==di&&(C=new y_(x,e.width,e.height,o,n,r));let at=new Eu(T,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(E){E!==void 0&&(vt=E,this.setSize(Tt,Ot,!1))},this.getSize=function(E){return E.set(Tt,Ot)},this.setSize=function(E,F,X=!0){if(at.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,Ot=F,e.width=Math.floor(E*vt),e.height=Math.floor(F*vt),X===!0&&(e.style.width=E+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Tt*vt,Ot*vt).floor()},this.setDrawingBufferSize=function(E,F,X){Tt=E,Ot=F,vt=X,e.width=Math.floor(E*X),e.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===di){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(kt)},this.setViewport=function(E,F,X,H){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,F,X,H),gt.viewport(nt.copy(kt).multiplyScalar(Oi()).round())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,F,X,H){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,F,X,H),gt.scissor(St.copy(le).multiplyScalar(Oi()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){gt.setScissorTest(de=E)},this.setOpaqueSort=function(E){qt=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let H=0;if(E){let W=!1;if(tt!==null){let mt=tt.texture.format;W=p.has(mt)}if(W){let mt=tt.texture.type,Et=m.has(mt),ft=U.getClearColor(),Mt=U.getClearAlpha(),Ct=ft.r,Xt=ft.g,Qt=ft.b;Et?(_[0]=Ct,_[1]=Xt,_[2]=Qt,_[3]=Mt,z.clearBufferuiv(z.COLOR,0,_)):(b[0]=Ct,b[1]=Xt,b[2]=Qt,b[3]=Mt,z.clearBufferiv(z.COLOR,0,b))}else H|=z.COLOR_BUFFER_BIT}F&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),U.dispose(),pt.dispose(),$.dispose(),Vt.dispose(),zt.dispose(),P.dispose(),rt.dispose(),G.dispose(),ht.dispose(),Pt.dispose(),Q.dispose(),at.dispose(),at.removeEventListener("sessionstart",Fu),at.removeEventListener("sessionend",Ou),ss.stop()};function Lt(E){E.preventDefault(),Yr("WebGLRenderer: Context Lost."),L=!0}function Yt(){Yr("WebGLRenderer: Context Restored."),L=!1;let E=He.autoReset,F=ut.enabled,X=ut.autoUpdate,H=ut.needsUpdate,W=ut.type;$t(),He.autoReset=E,ut.enabled=F,ut.autoUpdate=X,ut.needsUpdate=H,ut.type=W}function xt(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){let F=E.target;F.removeEventListener("dispose",ce),je(F)}function je(E){On(E),zt.remove(E)}function On(E){let F=zt.get(E).programs;F!==void 0&&(F.forEach(function(X){Q.releaseProgram(X)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,H,W,mt){F===null&&(F=Ui);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,ft=Gp(E,F,X,H,W);gt.setMaterial(H,Et);let Mt=X.index,Ct=1;if(H.wireframe===!0){if(Mt=G.getWireframeAttribute(X),Mt===void 0)return;Ct=2}let Xt=X.drawRange,Qt=X.attributes.position,At=Xt.start*Ct,te=(Xt.start+Xt.count)*Ct;mt!==null&&(At=Math.max(At,mt.start*Ct),te=Math.min(te,(mt.start+mt.count)*Ct)),Mt!==null?(At=Math.max(At,0),te=Math.min(te,Mt.count)):Qt!=null&&(At=Math.max(At,0),te=Math.min(te,Qt.count));let ze=te-At;if(ze<0||ze===1/0)return;ht.setup(W,H,ft,X,Mt);let me,fe=q;if(Mt!==null&&(me=w.get(Mt),fe=dt,fe.setIndex(me)),W.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*Oi()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(W.isLine){let oi=H.linewidth;oi===void 0&&(oi=1),gt.setLineWidth(oi*Oi()),W.isLineSegments?fe.setMode(z.LINES):W.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else W.isPoints?fe.setMode(z.POINTS):W.isSprite&&fe.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let oi=W._multiDrawStarts,Rt=W._multiDrawCounts,_i=W._multiDrawCount,ae=Mt?w.get(Mt).bytesPerElement:1,rs=zt.get(H).currentProgram.getUniforms();for(let li=0;li<_i;li++)rs.setValue(z,"_gl_DrawID",li),fe.render(oi[li]/ae,Rt[li])}else if(W.isInstancedMesh)fe.renderInstances(At,ze,W.count);else if(X.isInstancedBufferGeometry){let oi=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,oi);fe.renderInstances(At,ze,Rt)}else fe.render(At,ze)};function Uu(E,F,X,H){N!==null&&E.isNodeMaterial&&N.setObject(H,E),ke===!0&&j.setState(E,X,!1),E.transparent===!0&&E.side===Ue&&E.forceSinglePass===!1?(E.side=si,E.needsUpdate=!0,Tr(E,F,H),E.side=$n,E.needsUpdate=!0,Tr(E,F,H),E.side=Ue):Tr(E,F,H)}this.compile=function(E,F,X=null){X===null&&(X=E),N!==null&&N.renderStart(E,F,X),S=$.get(X),S.init(F),M.push(S),X.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==X&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),bi=this.localClippingEnabled,ke=j.init(this.clippingPlanes,bi),ke===!0&&j.setGlobalState(this.clippingPlanes,F),N!==null&&ut.render(S.state.shadowsArray,X,F);let H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let ft=mt[Et];Uu(ft,X,F,W),H.add(ft)}else Uu(mt,X,F,W),H.add(mt)}),S=M.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(E,F,X=null){let H=this.compile(E,F,X);return new Promise(W=>{function mt(){if(H.forEach(function(Et){let Mt=zt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(Et)}),H.size===0){W(E);return}setTimeout(mt,10)}Se.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Qc=null;function kp(E){Qc&&Qc(E)}function Fu(){ss.stop()}function Ou(){ss.start()}let ss=new qf;ss.setAnimationLoop(kp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(E){Qc=E,at.setAnimationLoop(E),E===null?ss.stop():ss.start()},at.addEventListener("sessionstart",Fu),at.addEventListener("sessionend",Ou),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(E,F);let X=at.enabled===!0&&at.isPresenting===!0,H=C!==null&&(tt===null||X)&&C.begin(T,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,F,tt),S=$.get(E,M.length),S.init(F),S.state.textureUnits=Vt.getTextureUnits(),M.push(S),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ei.setFromArrayCamera(F):Kt.setFromProjectionMatrix(Re,ki,F.reversedDepth),bi=this.localClippingEnabled,ke=j.init(this.clippingPlanes,bi),A=pt.get(E,y.length),A.init(),y.push(A),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Et=T.xr.getDepthSensingMesh();Et!==null&&th(Et,F,-1/0,T.sortObjects)}th(E,F,0,T.sortObjects),A.finish(),N!==null&&N.updateLights(S.state.lightsArray),T.sortObjects===!0&&A.sort(qt,Oe),Fi=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Fi&&U.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),ke===!0&&j.beginShadows();let W=S.state.shadowsArray;if(ut.render(W,E,F),ke===!0&&j.endShadows(),(H&&C.hasRenderPass())===!1){let Et=A.opaque,ft=A.transmissive;if(S.setupLights(),F.isArrayCamera){let Mt=F.cameras;if(ft.length>0)for(let Ct=0,Xt=Mt.length;Ct<Xt;Ct++){let Qt=Mt[Ct];Bu(Et,ft,E,Qt)}Fi&&U.render(E);for(let Ct=0,Xt=Mt.length;Ct<Xt;Ct++){let Qt=Mt[Ct];zu(A,E,Qt,Qt.viewport)}}else ft.length>0&&Bu(Et,ft,E,F),Fi&&U.render(E),zu(A,E,F)}tt!==null&&k===0&&(Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt)),H&&C.end(T),E.isScene===!0&&E.onAfterRender(T,E,F),ht.resetDefaultState(),V=-1,J=null,M.pop(),M.length>0?(S=M[M.length-1],Vt.setTextureUnits(S.state.textureUnits),ke===!0&&j.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,N!==null&&N.renderEnd()};function th(E,F,X,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){let Et=F.isArrayCamera?ei:Kt;if(!E.frustumCulled||E.intersectsFrustum(Et)){H&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let ft=rt.update(E),Mt=E.material;Mt.visible&&A.push(E,ft,Mt,X,Ze.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Et=F.isArrayCamera?ei:Kt;if(!E.frustumCulled||E.intersectsFrustum(Et)){let ft=rt.update(E),Mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ze.copy(ft.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Mt)){let Ct=ft.groups;for(let Xt=0,Qt=Ct.length;Xt<Qt;Xt++){let At=Ct[Xt],te=Mt[At.materialIndex];te&&te.visible&&A.push(E,ft,te,X,Ze.z,At,F)}}else Mt.visible&&A.push(E,ft,Mt,X,Ze.z,null,F)}}}let mt=E.children;for(let Et=0,ft=mt.length;Et<ft;Et++)th(mt[Et],F,X,H)}function zu(E,F,X,H){let{opaque:W,transmissive:mt,transparent:Et}=E;S.setupLightsView(X),ke===!0&&j.setGlobalState(T.clippingPlanes,X),H&&gt.viewport(nt.copy(H)),W.length>0&&Qa(W,F,X),mt.length>0&&Qa(mt,F,X),Et.length>0&&Qa(Et,F,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Bu(E,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let At=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new Ne(1,1,{generateMipmaps:!0,type:At?We:di,minFilter:Tn,samples:Math.max(4,we.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let mt=S.state.transmissionRenderTarget[H.id],Et=H.viewport||nt;mt.setSize(Et.z*T.transmissionResolutionScale,Et.w*T.transmissionResolutionScale);let ft=T.getRenderTarget(),Mt=T.getActiveCubeFace(),Ct=T.getActiveMipmapLevel();T.setRenderTarget(mt),T.getClearColor(Z),yt=T.getClearAlpha(),yt<1&&T.setClearColor(16777215,.5),T.clear(),Fi&&U.render(X);let Xt=T.toneMapping;T.toneMapping=ln;let Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),ke===!0&&j.setGlobalState(T.clippingPlanes,H),Qa(E,X,H),Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let te=0,ze=F.length;te<ze;te++){let me=F[te],{object:fe,geometry:oi,material:Rt,group:_i}=me;if(Rt.side===Ue&&fe.layers.test(H.layers)){let ae=Rt.side;Rt.side=si,Rt.needsUpdate=!0,ku(fe,X,H,oi,Rt,_i),Rt.side=ae,Rt.needsUpdate=!0,At=!0}}At===!0&&(Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt))}T.setRenderTarget(ft,Mt,Ct),T.setClearColor(Z,yt),Qt!==void 0&&(H.viewport=Qt),T.toneMapping=Xt}function Qa(E,F,X){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,mt=E.length;W<mt;W++){let Et=E[W],{object:ft,geometry:Mt,group:Ct}=Et,Xt=Et.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),ft.layers.test(X.layers)&&ku(ft,F,X,Mt,Xt,Ct)}}function ku(E,F,X,H,W,mt){N!==null&&W.isNodeMaterial&&N.setObject(E,W),E.onBeforeRender(T,F,X,H,W,mt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(T,F,X,H,E,mt),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=si,W.needsUpdate=!0,T.renderBufferDirect(X,F,H,W,E,mt),W.side=$n,W.needsUpdate=!0,T.renderBufferDirect(X,F,H,W,E,mt),W.side=Ue):T.renderBufferDirect(X,F,H,W,E,mt),E.onAfterRender(T,F,X,H,W,mt)}function Hu(E){let F=0;for(let X of E)X.texture!==null&&F++;return F}function Tr(E,F,X){F.isScene!==!0&&(F=Ui);let H=zt.get(E),W=S.state.lights,mt=S.state.shadowsArray,Et=W.state.version,ft=Q.getParameters(E,W.state,mt,F,X,S.state.lightProbeGridArray),Mt=Q.getProgramCacheKey(ft),Ct=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Xt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=P.get(E.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",ce),Ct=new Map,H.programs=Ct,H.programVariants=new Map);let Qt=Ct.get(Mt);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===Et)return Vu(E,ft),Qt}else ft.uniforms=Q.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,X,ft),E.onBeforeCompile(ft,T),Qt=Q.acquireProgram(ft,Mt),Ct.set(Mt,Qt),H.uniforms=ft.uniforms;let At=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=j.uniform),Vu(E,ft),H.needsLights=Wp(E),H.lightsStateVersion=Et,H.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Hu(S.state.lightProbeGridArray),H.currentProgram=Qt,H.uniformsList=null,Qt}function Hp(E,F,X,H,W){let mt=zt.get(E),Et=mt.currentProgram.id+","+H+","+W,ft=mt.programVariants.get(Et);return ft===void 0?(ft=Tr(E,F,X),mt.programVariants.set(Et,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=H,mt.toneMapping=W),ft}function Gu(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Vu(E,F){let X=zt.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Gp(E,F,X,H,W){F.isScene!==!0&&(F=Ui),Vt.resetTextureUnits();let mt=F.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ft=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Jt.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ct=P.get(H.envMap||Et,Mt),Xt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,ze=!!X.morphAttributes.color,me=ln;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(me=T.toneMapping);let fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oi=fe!==void 0?fe.length:0,Rt=zt.get(H),_i=S.state.lights;if(ke===!0&&(bi===!0||E!==J)){let Ce=E===J&&H.id===V;j.setState(H,E,Ce)}let ae=!1,rs=!1;H.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==_i.state.version||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==Ct||H.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==j.numPlanes||Rt.numIntersection!==j.numIntersection)||Rt.vertexAlphas!==Xt||Rt.vertexTangents!==Qt||Rt.morphTargets!==At||Rt.morphNormals!==te||Rt.morphColors!==ze||Rt.morphTargetsCount!==oi||Rt.numLightProbeGrids!==Hu(S.state.lightProbeGridArray)?ae=!0:(Rt.outputColorSpace!==ft||Rt.toneMapping!==me)&&(rs=!0):(ae=!0,Rt.__version=H.version);let li=Rt.currentProgram;(ae===!0||rs===!0)&&(li=rs===!0?Hp(H,F,W,ft,me):Tr(H,F,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,li,Rt));let to=!1,zn=!1,as=!1,se=li.getUniforms(),ii=Rt.uniforms;if(gt.useProgram(li.program)&&(to=!0,zn=!0,as=!0),H.id!==V&&(V=H.id,zn=!0),to||J!==E){gt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),se.setValue(z,"projectionMatrix",E.projectionMatrix),se.setValue(z,"viewMatrix",E.matrixWorldInverse);let Je=se.map.cameraPosition;Je!==void 0&&Je.setValue(z,tn.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&se.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,zn=!0,as=!0)}if(Rt.needsLights&&(_i.state.sunShadowMap.length>0&&se.setValue(z,"sunShadowMap",_i.state.sunShadowMap,Vt),_i.state.directionalShadowMap.length>0&&se.setValue(z,"directionalShadowMap",_i.state.directionalShadowMap,Vt),_i.state.spotShadowMap.length>0&&se.setValue(z,"spotShadowMap",_i.state.spotShadowMap,Vt),_i.state.pointShadowMap.length>0&&se.setValue(z,"pointShadowMap",_i.state.pointShadowMap,Vt)),W.isSkinnedMesh){se.setOptional(z,W,"bindMatrix"),se.setOptional(z,W,"bindMatrixInverse");let Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),se.setValue(z,"boneTexture",Ce.boneTexture,Vt))}W.isBatchedMesh&&(se.setOptional(z,W,"batchingTexture"),se.setValue(z,"batchingTexture",W._matricesTexture,Vt),se.setOptional(z,W,"batchingIdTexture"),se.setValue(z,"batchingIdTexture",W._indirectTexture,Vt),se.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&se.setValue(z,"batchingColorTexture",W._colorsTexture,Vt));let Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&K.update(W,X,li),(zn||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,se.setValue(z,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(ii.envMapIntensity.value=F.environmentIntensity),ii.dfgLUT!==void 0&&(ii.dfgLUT.value=ev()),zn){if(se.setValue(z,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&Vp(ii,as),mt&&H.fog===!0&&ct.refreshFogUniforms(ii,mt),ct.refreshMaterialUniforms(ii,H,vt,Ot,S.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Ce=v,Je=0;for(let pn of S.state.lightProbeGridArray)pn.texture!==null&&(Ce.textures[Je]=pn.texture,Ce.min[Je]=pn.boundingBox.min,Ce.max[Je]=pn.boundingBox.max,Ce.resolution[Je]=pn.resolution,Je++);for(let pn in Ce)Ce[pn].length=Je;ii.probesSH.value=Ce.textures,ii.probesMin.value=Ce.min,ii.probesMax.value=Ce.max,ii.probesResolution.value=Ce.resolution}gr.upload(z,Gu(Rt),ii,Vt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gr.upload(z,Gu(Rt),ii,Vt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(z,"center",W.center),se.setValue(z,"modelViewMatrix",W.modelViewMatrix),se.setValue(z,"normalMatrix",W.normalMatrix),se.setValue(z,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Ce=H.uniformsGroups;for(let Je=0,pn=Ce.length;Je<pn;Je++){let Xu=Ce[Je];Pt.update(Xu,li),Pt.bind(Xu,li)}}return li}function Vp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Wp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,F,X){let H=zt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),zt.get(E.texture).__webglTexture=F,zt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let X=zt.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){tt=E,B=F,k=X;let H=null,W=!1,mt=!1;if(E){let ft=zt.get(E);if(ft.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(z.FRAMEBUFFER,ft.__webglFramebuffer),nt.copy(E.viewport),St.copy(E.scissor),Ft=E.scissorTest,gt.viewport(nt),gt.scissor(St),gt.setScissorTest(Ft),V=-1;return}else if(ft.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Vt.rebindTextures(E,zt.get(E.texture).__webglTexture,zt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Xt=E.depthTexture;if(ft.__boundDepthTexture!==Xt){if(Xt!==null&&zt.has(Xt)&&(E.width!==Xt.image.width||E.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}let Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(mt=!0);let Ct=zt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?H=Ct[F][X]:H=Ct[F],W=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?H=zt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?H=Ct[X]:H=Ct,nt.copy(E.viewport),St.copy(E.scissor),Ft=E.scissorTest}else nt.copy(kt).multiplyScalar(vt).floor(),St.copy(le).multiplyScalar(vt).floor(),Ft=de;if(X!==0&&(H=I),gt.bindFramebuffer(z.FRAMEBUFFER,H)&&gt.drawBuffers(E,H),gt.viewport(nt),gt.scissor(St),gt.setScissorTest(Ft),W){let ft=zt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,ft.__webglTexture,X)}else if(mt){let ft=F;for(let Mt=0;Mt<E.textures.length;Mt++){let Ct=zt.get(E.textures[Mt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,X,ft)}}else if(E!==null&&X!==0){let ft=zt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ft.__webglTexture,X)}V=-1};function Wu(E){let F=zt.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=we.textureFormatReadable(E.format),F.__typeReadable=we.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,X,H,W,mt,Et,ft=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=zt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){gt.bindFramebuffer(z.FRAMEBUFFER,Mt);try{let Ct=E.textures[ft],Xt=Ct.format,Qt=Ct.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ft);let At=Wu(Ct);if(At.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&X>=0&&X<=E.height-W&&z.readPixels(F,X,H,W,lt.convert(Xt),lt.convert(Qt),mt)}finally{let Ct=tt!==null?zt.get(tt).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,H,W,mt,Et,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=zt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(F>=0&&F<=E.width-H&&X>=0&&X<=E.height-W){gt.bindFramebuffer(z.FRAMEBUFFER,Mt);let Ct=E.textures[ft],Xt=Ct.format,Qt=Ct.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ft);let At=Wu(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.bufferData(z.PIXEL_PACK_BUFFER,mt.byteLength,z.STREAM_READ),z.readPixels(F,X,H,W,lt.convert(Xt),lt.convert(Qt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ze=tt!==null?zt.get(tt).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,ze);let me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mf(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,mt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(te),z.deleteSync(me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){let H=Math.pow(2,-X),W=Math.floor(E.image.width*H),mt=Math.floor(E.image.height*H),Et=F!==null?F.x:0,ft=F!==null?F.y:0;Vt.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,Et,ft,W,mt),gt.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,H=null,W=0,mt=0){let Et,ft,Mt,Ct,Xt,Qt,At,te,ze,me=E.isCompressedTexture?E.mipmaps[mt]:E.image;if(X!==null)Et=X.max.x-X.min.x,ft=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Xt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let se=Math.pow(2,-W);Et=Math.floor(me.width*se),ft=Math.floor(me.height*se),E.isDataArrayTexture?Mt=me.depth:E.isData3DTexture?Mt=Math.floor(me.depth*se):Mt=1,Ct=0,Xt=0,Qt=0}H!==null?(At=H.x,te=H.y,ze=H.z):(At=0,te=0,ze=0);let fe=lt.convert(F.format),oi=lt.convert(F.type),Rt;F.isData3DTexture?(Vt.setTexture3D(F,0),Rt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),Rt=z.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),Rt=z.TEXTURE_2D),gt.activeTexture(z.TEXTURE0),gt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),gt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),gt.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let _i=gt.getParameter(z.UNPACK_ROW_LENGTH),ae=gt.getParameter(z.UNPACK_IMAGE_HEIGHT),rs=gt.getParameter(z.UNPACK_SKIP_PIXELS),li=gt.getParameter(z.UNPACK_SKIP_ROWS),to=gt.getParameter(z.UNPACK_SKIP_IMAGES);gt.pixelStorei(z.UNPACK_ROW_LENGTH,me.width),gt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me.height),gt.pixelStorei(z.UNPACK_SKIP_PIXELS,Ct),gt.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),gt.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt);let zn=E.isDataArrayTexture||E.isData3DTexture,as=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let se=zt.get(E),ii=zt.get(F),Gi=zt.get(se.__renderTarget),Ce=zt.get(ii.__renderTarget);gt.bindFramebuffer(z.READ_FRAMEBUFFER,Gi.__webglFramebuffer),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Je=0;Je<Mt;Je++)zn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(E).__webglTexture,W,Qt+Je),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(F).__webglTexture,mt,ze+Je)),z.blitFramebuffer(Ct,Xt,Ct+Et,Xt+ft,At,te,At+Et,te+ft,z.DEPTH_BUFFER_BIT,z.NEAREST);gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||zt.has(E)){let se=zt.get(E),ii=zt.get(F);gt.bindFramebuffer(z.READ_FRAMEBUFFER,R),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let Gi=0;Gi<Mt;Gi++)zn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,se.__webglTexture,W,Qt+Gi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,se.__webglTexture,W),as?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ii.__webglTexture,mt,ze+Gi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ii.__webglTexture,mt),W!==0?z.blitFramebuffer(Ct,Xt,Ct+Et,Xt+ft,At,te,At+Et,te+ft,z.COLOR_BUFFER_BIT,z.NEAREST):as?z.copyTexSubImage3D(Rt,mt,At,te,ze+Gi,Ct,Xt,Et,ft):z.copyTexSubImage2D(Rt,mt,At,te,Ct,Xt,Et,ft);gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else as?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Rt,mt,At,te,ze,Et,ft,Mt,fe,oi,me.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,mt,At,te,ze,Et,ft,Mt,fe,me.data):z.texSubImage3D(Rt,mt,At,te,ze,Et,ft,Mt,fe,oi,me):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,mt,At,te,Et,ft,fe,oi,me.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,mt,At,te,me.width,me.height,fe,me.data):z.texSubImage2D(z.TEXTURE_2D,mt,At,te,Et,ft,fe,oi,me);gt.pixelStorei(z.UNPACK_ROW_LENGTH,_i),gt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae),gt.pixelStorei(z.UNPACK_SKIP_PIXELS,rs),gt.pixelStorei(z.UNPACK_SKIP_ROWS,li),gt.pixelStorei(z.UNPACK_SKIP_IMAGES,to),mt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Rt),gt.unbindTexture()},this.initRenderTarget=function(E){zt.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){B=0,k=0,tt=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iv=new ps(-1,1,1,-1,0,1),Tu=class extends oe{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},nv=new Tu,jn=class{constructor(t){this._mesh=new Nt(nv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,iv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hc=class extends Li{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pn.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wa=class extends Li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},uc=class extends Li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hc(_r),this.copyPass.material.blending=En,this.timer=new Ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wa!==void 0&&(a instanceof Wa?i=!0:a instanceof uc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fc=class extends Li{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new et}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var np={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var yr=class s extends Li{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,a,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ne(r,a,{type:We,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ne(r,a,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=np;this.highPassUniforms=Pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pn.clone(_r.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:ri,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new et,this._oldClearAlpha=1,this._basic=new Le,this._fsQuad=new jn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new be({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};yr.BlurDirectionX=new st(1,0);yr.BlurDirectionY=new st(0,1);var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var pc=class extends Li{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pn.clone(Xa.uniforms),this.material=new lr({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Aa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===La?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var{lerp:Ms}=nc,pi=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)pi[256+s]=pi[s];function Au(s){return s*s*s*(s*(s*6-15)+10)}function Jn(s,t,e,i){let n=s&15,r=n<8?t:e,a=n<4?e:n==12||n==14?t:i;return((n&1)==0?r:-r)+((n&2)==0?a:-a)}var mc=class{noise(t,e,i){let n=Math.floor(t),r=Math.floor(e),a=Math.floor(i),o=n&255,l=r&255,c=a&255;t-=n,e-=r,i-=a;let h=t-1,u=e-1,d=i-1,f=Au(t),g=Au(e),x=Au(i),p=pi[o]+l,m=pi[p]+c,_=pi[p+1]+c,b=pi[o+1]+l,v=pi[b]+c,A=pi[b+1]+c;return Ms(Ms(Ms(Jn(pi[m],t,e,i),Jn(pi[v],h,e,i),f),Ms(Jn(pi[_],t,u,i),Jn(pi[A],h,u,i),f),g),Ms(Ms(Jn(pi[m+1],t,e,d),Jn(pi[v+1],h,e,d),f),Ms(Jn(pi[_+1],t,u,d),Jn(pi[A+1],h,u,d),f),g),x)}};function Kn(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var he=(s,t,e)=>Math.min(e,Math.max(t,s)),_e=(s,t,e)=>s+(t-s)*e,mi=(s,t,e)=>{let i=he((e-s)/(t-s),0,1);return i*i*(3-2*i)},gi=(s,t,e,i)=>_e(s,t,1-Math.exp(-e*i));function Ru(s,t){return((t-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function sp(s,t,e){return s+Ru(s,t)*e}var sv=new mc;function rv(s,t,e=0){return sv.noise(s,e*17.13+3.7,t)}function In(s,t,e=4,i=0){let n=1,r=1,a=0,o=0;for(let l=0;l<e;l++)a+=n*rv(s*r,t*r,i+l),o+=n,n*=.5,r*=2;return a/o}var av="٠١٢٣٤٥٦٧٨٩",ot=s=>String(s).replace(/\d/g,t=>av[t]);function Te(s,t=Math.random){let e=s.slice();for(let i=e.length-1;i>0;i--){let n=Math.floor(t()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e}function gc(s,t,e,i,n,r){let a=n-e,o=r-i,l=a*a+o*o,c=l?((s-e)*a+(t-i)*o)/l:0;return c=he(c,0,1),Math.hypot(s-(e+a*c),t-(i+o*c))}var ov=[[0,397358,1452382,11123967,.6,4874406,1712182,.9,1121860,1,.24],[4.6,529722,1979240,11123967,.55,4874406,1712182,.9,1385806,1,.24],[5.5,1915512,15305308,16756858,.15,7571128,2894904,.9,8088192,.4,.42],[6,3828408,16757628,16757370,0,10137816,4866616,.95,13214862,.1,.6],[6.3,4554956,16763284,16761998,.7,11059428,5590080,1,13808796,0,.72],[7.4,4164576,16769720,16769200,2,12375807,7037520,1.05,14078660,0,.9],[9.5,2916326,12181759,16774365,2.9,13624575,8025184,1.1,12115190,0,1],[13,2586595,12904191,16777215,3.1,13953279,8288356,1.1,12574968,0,1],[16,3506652,13952754,16772556,2.7,13623542,8024156,1.05,13163754,0,.96],[17.3,4876968,16757611,16753246,1.6,12628160,6969928,1,14198148,0,.82],[18,3753866,15758922,16747088,0,9472180,3945528,.92,11563112,.15,.56],[18.5,1976934,12078930,11123967,.2,6449828,2368562,.9,5454940,.6,.36],[19.4,661048,2305122,11123967,.55,4874406,1712182,.9,1385806,1,.24],[24,397358,1452382,11123967,.6,4874406,1712182,.9,1121860,1,.24]],xc=ov.map(s=>({t:s[0],zen:new et(s[1]),hor:new et(s[2]),sun:new et(s[3]),li:s[4],hs:new et(s[5]),hg:new et(s[6]),hi:s[7],fog:new et(s[8]),stars:s[9],day:s[10]})),rp=new et(9081244),_c=1400,yc=class{constructor(t){this.scene=t,this.time=9.2,this.speed=.02,this.overcast=0,this.rain=0,this._overT=0,this._rainT=0,this._anim=null,this.sunDir=new D(0,1,0),this.moonDir=new D(0,-1,0),this.lightDir=new D(0,1,0),this.night=0,this.U={uTime:{value:0},uSunDir:{value:this.sunDir},uMoonDir:{value:this.moonDir},uLightDir:{value:this.lightDir},uSunColor:{value:new et},uSunWarm:{value:new et(16769704)},uZenith:{value:new et},uHorizon:{value:new et},uFogColor:{value:new et},uFog:{value:new st(160,1e3)},uDay:{value:1},uStars:{value:0},uCloud:{value:.35},uOvercast:{value:0}};let e=new Nt(new De(1500,40,20),new be({side:si,depthWrite:!1,fog:!1,uniforms:this.U,vertexShader:`
          varying vec3 vDir;
          void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
          uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunWarm;
          uniform float uTime, uStars, uCloud, uOvercast, uDay;
          varying vec3 vDir;
          float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
          float vnoise(vec2 p){
            vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
          }
          float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
          float hash3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
          void main(){
            vec3 d = normalize(vDir);
            float h = clamp(d.y, 0.0, 1.0);
            vec3 col = mix(uHorizon, uZenith, pow(h, 0.45));
            col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.3, d.y));
            vec3 grey = vec3(0.46, 0.49, 0.55) * (0.3 + 0.7 * uDay);
            col = mix(col, grey, uOvercast * 0.75);

            float sunVis = smoothstep(-0.12, 0.02, uSunDir.y) * (1.0 - uOvercast * 0.85);
            float sd = max(dot(d, uSunDir), 0.0);
            col += uSunWarm * (pow(sd, 6.0) * 0.16 + pow(sd, 70.0) * 0.4) * sunVis;
            col += uSunWarm * smoothstep(0.9990, 0.9996, sd) * 7.0 * sunVis;

            float moonVis = smoothstep(-0.05, 0.1, uMoonDir.y) * (1.0 - smoothstep(-0.1, 0.05, uSunDir.y)) * (1.0 - uOvercast * 0.8);
            float md = dot(d, uMoonDir);
            float disc = smoothstep(0.9980, 0.9986, md);
            vec3 off = normalize(uMoonDir + vec3(0.04, 0.022, 0.0));
            float cut = smoothstep(0.9976, 0.9985, dot(d, off));
            float cres = clamp(disc - cut, 0.0, 1.0);
            col += vec3(1.0, 0.96, 0.82) * cres * 4.0 * moonVis;
            col += vec3(0.55, 0.65, 1.0) * pow(max(md, 0.0), 80.0) * 0.3 * moonVis;

            if (uStars > 0.01 && d.y > -0.05) {
              vec3 p = d * 170.0; vec3 ip = floor(p); vec3 fp = fract(p) - 0.5;
              float hs = hash3(ip);
              float st = step(0.986, hs) * smoothstep(0.42, 0.04, length(fp));
              float tw = 0.65 + 0.35 * sin(uTime * 2.5 + hs * 300.0);
              col += vec3(1.0, 0.97, 0.9) * st * tw * uStars * 2.4 * smoothstep(-0.05, 0.2, d.y) * (1.0 - uOvercast);
            }

            if (d.y > 0.0) {
              vec2 uv = d.xz / (d.y + 0.14);
              uv = uv * 0.55 + vec2(uTime * 0.006, uTime * 0.003);
              float n = fbm(uv * 1.6);
              float cov = mix(0.64, 0.28, clamp(uCloud + uOvercast * 0.8, 0.0, 1.0));
              float c = smoothstep(cov, cov + 0.26, n) * smoothstep(0.0, 0.12, d.y);
              vec3 lit = mix(uHorizon, vec3(1.0), 0.6) * (0.3 + 0.8 * uDay);
              lit += uSunWarm * pow(sd, 4.0) * 0.5 * sunVis;
              lit = mix(lit, grey * 0.85, uOvercast);
              col = mix(col, lit, c * 0.92);
            }
            gl_FragColor = vec4(col, 1.0);
          }`}));e.frustumCulled=!1,e.renderOrder=-10,this.dome=e,t.add(e),this.sun=new Ea(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-75,i.camera.right=75,i.camera.top=75,i.camera.bottom=-75,i.camera.near=1,i.camera.far=520,i.bias=-4e-4,i.normalBias=.5,t.add(this.sun,this.sun.target),this.hemi=new Ma(16777215,7829367,1),t.add(this.hemi),this.fog=new jr(12377333,160,1e3),t.fog=this.fog;let n=new Float32Array(_c*6);this._rainSeed=new Float32Array(_c*3);for(let a=0;a<_c;a++)this._rainSeed[a*3]=(Math.random()-.5)*70,this._rainSeed[a*3+1]=Math.random()*40,this._rainSeed[a*3+2]=(Math.random()-.5)*70;let r=new oe;r.setAttribute("position",new Ee(n,3)),this.rainMesh=new ia(r,new ir({color:12572415,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.rainMesh.frustumCulled=!1,this.rainMesh.visible=!1,t.add(this.rainMesh),this._s={zen:new et,hor:new et,sun:new et,hs:new et,hg:new et,fog:new et,li:1,hi:1,stars:0,day:1}}sample(t){let e=0;for(;e<xc.length-2&&t>=xc[e+1].t;)e++;let i=xc[e],n=xc[e+1],r=he((t-i.t)/(n.t-i.t),0,1),a=this._s;return a.zen.lerpColors(i.zen,n.zen,r),a.hor.lerpColors(i.hor,n.hor,r),a.sun.lerpColors(i.sun,n.sun,r),a.hs.lerpColors(i.hs,n.hs,r),a.hg.lerpColors(i.hg,n.hg,r),a.fog.lerpColors(i.fog,n.fog,r),a.li=_e(i.li,n.li,r),a.hi=_e(i.hi,n.hi,r),a.stars=_e(i.stars,n.stars,r),a.day=_e(i.day,n.day,r),a}setTime(t){this.time=(t%24+24)%24,this._anim=null}animateTo(t,e=2.5){return new Promise(i=>{let n=((t-this.time)%24+24)%24;if(n<.01){i();return}this._anim&&this._anim.res(),this._anim={from:this.time,delta:n,dur:e,e:0,res:i}})}setWeather(t){this._overT=t==="rain"?1:t==="cloudy"?.55:0,this._rainT=t==="rain"?1:0}update(t,e,i){if(this.U.uTime.value+=t,this._anim){let l=this._anim;l.e+=t;let c=he(l.e/l.dur,0,1),h=c*c*(3-2*c);this.time=(l.from+l.delta*h)%24,c>=1&&(this._anim=null,l.res())}else if(this.speed){let l=this.time>19.4||this.time<4.8?3:1;this.time=(this.time+this.speed*l*t)%24}this.overcast=_e(this.overcast,this._overT,1-Math.exp(-.9*t)),this.rain=_e(this.rain,this._rainT,1-Math.exp(-.9*t));let n=this.sample(this.time),r=(this.time-6)/12*Math.PI;this.sunDir.set(Math.cos(r),Math.sin(r)*.9,Math.sin(r)*.38+.14).normalize(),this.moonDir.set(Math.cos(r+Math.PI)*.8,Math.sin(r+Math.PI)*.9,Math.sin(r+Math.PI)*.3-.3).normalize(),this.lightDir.copy(this.sunDir.y>0?this.sunDir:this.moonDir),this.lightDir.y<.16&&(this.lightDir.y=.16,this.lightDir.normalize()),this.night=1-mi(.25,.7,n.day);let a=this.U,o=this.overcast;if(a.uZenith.value.copy(n.zen),a.uHorizon.value.copy(n.hor),a.uSunColor.value.copy(n.sun).multiplyScalar(1-o*.8),a.uDay.value=n.day*(1-o*.25),a.uStars.value=n.stars,a.uOvercast.value=o,a.uFogColor.value.copy(n.fog).lerp(rp,o*.6).multiplyScalar(1-o*.15*(1-n.day)),a.uFog.value.set(_e(160,50,o),_e(1e3,430,o)),this.fog.color.copy(a.uFogColor.value),this.fog.near=a.uFog.value.x,this.fog.far=a.uFog.value.y,this.sun.color.copy(n.sun),this.sun.intensity=n.li*(1-o*.7),this.sun.position.copy(i).addScaledVector(this.lightDir,240),this.sun.target.position.copy(i),this.hemi.color.copy(n.hs).lerp(rp,o*.5),this.hemi.groundColor.copy(n.hg),this.hemi.intensity=n.hi*(1-o*.12),this.dome.position.copy(e.position),this.rain>.02){this.rainMesh.visible=!0,this.rainMesh.material.opacity=.55*this.rain;let l=this.rainMesh.geometry.attributes.position.array,c=this._rainSeed,h=e.position.x,u=e.position.y,d=e.position.z,f=this.U.uTime.value;for(let g=0;g<_c;g++){let x=h+c[g*3],p=d+c[g*3+2],m=u+22-(c[g*3+1]+f*34)%40,_=g*6;l[_]=x,l[_+1]=m,l[_+2]=p,l[_+3]=x+.12,l[_+4]=m-.9,l[_+5]=p}this.rainMesh.geometry.attributes.position.needsUpdate=!0}else this.rainMesh.visible=!1}};function op(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new oe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ap(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=ap(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function ap(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ee(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var vc=new ie,Mc=new Si,bc=new Ri,lp=new D,cp=new D,Sc=new et,Cu={value:0},Ut=class{constructor(){this.parts=[]}add(t,e,i=0,n=0,r=0,a=0,o=0,l=0,c=1,h=1,u=1){let d=t.index?t.toNonIndexed():t.clone();t.dispose(),bc.set(a,o,l),Mc.setFromEuler(bc),vc.compose(lp.set(i,n,r),Mc,cp.set(c,h,u)),d.applyMatrix4(vc),Sc.set(e);let f=d.attributes.position.count,g=new Float32Array(f*3);for(let x=0;x<f;x++)g[x*3]=Sc.r,g[x*3+1]=Sc.g,g[x*3+2]=Sc.b;d.setAttribute("color",new Ee(g,3));for(let x of Object.keys(d.attributes))x!=="position"&&x!=="normal"&&x!=="color"&&d.deleteAttribute(x);return d.attributes.normal||d.computeVertexNormals(),this.parts.push(d),this}box(t,e,i,n,r=0,a=0,o=0,l=0){return this.add(new pe(t,e,i),n,r,a,o,0,l,0)}cyl(t,e,i,n,r=0,a=0,o=0,l=10,c=!1){return this.add(new xe(t,e,i,l,1,c),n,r,a,o)}sphere(t,e,i=0,n=0,r=0,a=1,o=1,l=1,c=12,h=8){return this.add(new De(t,c,h),e,i,n,r,0,0,0,a,o,l)}dome(t,e,i=0,n=0,r=0,a=1,o=18){return this.add(new De(t,o,9,0,Math.PI*2,0,Math.PI/2),e,i,n,r,0,0,0,1,a,1)}cone(t,e,i,n=0,r=0,a=0,o=10){return this.add(new Mi(t,e,o),i,n,r,a)}torus(t,e,i,n=0,r=0,a=0,o=Math.PI/2,l=24,c=Math.PI*2,h=0,u=0){return this.add(new wn(t,e,6,l,c),i,n,r,a,o,h,u)}archTop(t,e,i,n,r,a,o=0){let l=new xe(t/2,t/2,e,14,1,!1,0,Math.PI);return l.rotateX(Math.PI/2),l.rotateZ(Math.PI/2),this.add(l,i,n,r,a,0,o,0)}arch(t,e,i,n,r,a,o=0,l=.12){return this.add(new pe(t,e,l),i,n,r+e/2,a,0,o,0),this.archTop(t,l,i,n,r+e,a,o)}merge(t,e=0,i=0,n=0,r=0,a=1){let o=t.clone();return bc.set(0,r,0),Mc.setFromEuler(bc),vc.compose(lp.set(e,i,n),Mc,cp.set(a,a,a)),o.applyMatrix4(vc),this.parts.push(o),this}get empty(){return this.parts.length===0}geometry(){let t=op(this.parts,!1);return this.parts.forEach(e=>e.dispose()),this.parts=[],t.computeBoundingSphere(),t}mesh(t,e=!0){let i=new Nt(this.geometry(),t);return i.castShadow=e,i.receiveShadow=e,i}},ne={flat:new ee({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}),smooth:new ee({vertexColors:!0,roughness:.7,metalness:0}),double:new ee({vertexColors:!0,roughness:.9,flatShading:!0,side:Ue}),gold:new ee({color:15251530,roughness:.35,metalness:.35,emissive:4862464,emissiveIntensity:.6})};function Di(s=1){let t=new Le({vertexColors:!0,toneMapped:!1});return t.color.setScalar(s),t}function Ya(s,t=0,e=.02){return s.onBeforeCompile=i=>{i.uniforms.uWind=Cu,i.vertexShader=`uniform float uWind;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
         float wph = instanceMatrix[3][0] * 0.21 + instanceMatrix[3][2] * 0.17;
       #else
         float wph = 0.0;
       #endif
       float wamt = max(position.y - ${t.toFixed(2)}, 0.0) * ${e.toFixed(4)};
       transformed.x += sin(uWind * 1.3 + wph + position.y * 0.35) * wamt;
       transformed.z += cos(uWind * 1.1 + wph * 1.3) * wamt * 0.7;`)},s}function vr(s,t,e,i={}){let n=document.createElement("canvas");n.width=s,n.height=t;let r=n.getContext("2d",{willReadFrequently:!0});e(r,s,t);let a=new ds(n);return a.colorSpace=Ge,a.anisotropy=8,i.repeat&&(a.wrapS=a.wrapT=Ys,a.repeat.set(i.repeat[0],i.repeat[1])),a}function qa(s,t,e,i){s.beginPath();for(let n=0;n<16;n++){let r=n*Math.PI/8,a=n%2===0?i:i*.765,o=t+Math.cos(r)*a,l=e+Math.sin(r)*a;n===0?s.moveTo(o,l):s.lineTo(o,l)}s.closePath()}function Ec(s="#efe6d0",t="#1f8a8a",e="#e2b04a",i="#b8944a",n=[6,6]){return vr(256,256,(r,a,o)=>{r.fillStyle=s,r.fillRect(0,0,a,o);let l=128;for(let c=-1;c<=2;c++)for(let h=-1;h<=2;h++){let u=h*l+l/2,d=c*l+l/2;qa(r,u,d,44),r.fillStyle=(h+c)%2===0?t:e,r.fill(),r.lineWidth=3,r.strokeStyle=i,r.stroke(),qa(r,u,d,20),r.fillStyle=s,r.fill(),r.stroke(),r.save(),r.translate(h*l,c*l),r.rotate(Math.PI/4),r.fillStyle=i,r.fillRect(-13,-13,26,26),r.fillStyle=s,r.fillRect(-7,-7,14,14),r.restore()}r.strokeStyle="rgba(120,90,40,.35)",r.lineWidth=2;for(let c=0;c<=2;c++)r.beginPath(),r.moveTo(c*l,0),r.lineTo(c*l,o),r.stroke(),r.beginPath(),r.moveTo(0,c*l),r.lineTo(a,c*l),r.stroke()},{repeat:n})}function Pu(s=[10,10]){return vr(256,256,(t,e,i)=>{t.fillStyle="#f1efe9",t.fillRect(0,0,e,i);for(let n=0;n<900;n++){let r=225+Math.random()*30;t.fillStyle=`rgba(${r},${r},${r-4},.5)`,t.fillRect(Math.random()*e,Math.random()*i,2+Math.random()*10,1+Math.random()*2)}t.strokeStyle="rgba(150,150,145,.6)",t.lineWidth=3,t.strokeRect(0,0,e,i),t.beginPath(),t.moveTo(e/2,0),t.lineTo(e/2,i),t.moveTo(0,i/2),t.lineTo(e,i/2),t.stroke()},{repeat:s})}function hp(s=[160,160]){return vr(256,256,(t,e,i)=>{let n=t.createImageData(e,i);for(let r=0;r<e*i;r++){let a=205+Math.random()*50;n.data[r*4]=a,n.data[r*4+1]=a,n.data[r*4+2]=a,n.data[r*4+3]=255}t.putImageData(n,0,0);for(let r=0;r<260;r++){let a=Math.random()<.5?255:170;t.fillStyle=`rgba(${a},${a},${a},.22)`,t.beginPath(),t.arc(Math.random()*e,Math.random()*i,1+Math.random()*3.5,0,7),t.fill()}},{repeat:s})}function Iu(s=!1){return vr(512,512,(t,e,i)=>{t.fillStyle="#0b0b0e",t.fillRect(0,0,e,i),t.strokeStyle="rgba(60,60,70,.35)",t.lineWidth=1;for(let a=0;a<e;a+=6)t.beginPath(),t.moveTo(a,0),t.lineTo(a,i),t.stroke();let n=i*.24,r=i*.13;t.fillStyle="#17130a",t.fillRect(0,n,e,r),t.fillStyle="#d9a93a",t.fillRect(0,n,e,5),t.fillRect(0,n+r-5,e,5),t.strokeStyle="#e8bd55",t.lineWidth=3;for(let a=0;a<4;a++){let o=a*(e/4)+14,l=e/4-28,c=n+14,h=r-28;t.beginPath(),t.roundRect(o,c,l,h,h/2),t.stroke(),t.fillStyle="#e8bd55";for(let u=0;u<5;u++)t.beginPath(),t.ellipse(o+l*(.14+u*.18),c+h/2,8,h*.28,u%2?.5:-.5,0,7),t.fill()}t.fillStyle="#c99a30";for(let a=0;a<4;a++){let o=(a+.5)*(e/4),l=n+r+44;t.save(),t.translate(o,l),t.rotate(Math.PI/4),t.fillRect(-15,-15,30,30),t.restore(),t.fillStyle="#0b0b0e",t.beginPath(),t.arc(o,l,8,0,7),t.fill(),t.fillStyle="#c99a30"}if(s){let a=e*.1,o=e*.2,l=i*.58,c=i*.27;t.fillStyle="#e2b246",t.fillRect(a-6,l-6,o+12,c+12),t.fillStyle="#f3d27a",t.fillRect(a,l,o,c),t.strokeStyle="#a97a1c",t.lineWidth=3,t.strokeRect(a+6,l+6,o/2-9,c-12),t.strokeRect(a+o/2+3,l+6,o/2-9,c-12);for(let h=0;h<4;h++)t.strokeRect(a+14,l+16+h*(c/4.4),o/2-25,c/6),t.strokeRect(a+o/2+11,l+16+h*(c/4.4),o/2-25,c/6)}})}function up(s="#8c1c2c",t="#e2b04a",e="#1c5a7a"){return vr(256,256,(i,n,r)=>{i.fillStyle=t,i.fillRect(0,0,n,r),i.fillStyle=e,i.fillRect(10,10,n-20,r-20),i.fillStyle=s,i.fillRect(24,24,n-48,r-48),i.strokeStyle=t,i.lineWidth=3,qa(i,n/2,r/2,60),i.stroke(),qa(i,n/2,r/2,30),i.fillStyle=t,i.fill();for(let[a,o]of[[60,60],[196,60],[60,196],[196,196]])qa(i,a,o,18),i.fillStyle=e,i.fill(),i.stroke()})}var wc=null;function bs(){return wc||(wc=vr(128,128,(s,t,e)=>{let i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,.55)"),i.addColorStop(.6,"rgba(255,255,255,.12)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)}),wc)}var Lu={value:0},lv='"Cairo","Segoe UI",Tahoma,sans-serif',cv='"Amiri","Cairo","Segoe UI",serif';function hv(s,t,e){let i=[];for(let n of String(t).split(`
`)){let r=n.split(" "),a="";for(let o of r){let l=a?a+" "+o:o;s.measureText(l).width>e&&a?(i.push(a),a=o):a=l}i.push(a)}return i}function uv(s,t,e){let i=e.size||44,n=e.pad??20,r=`${e.weight||800} ${i}px ${e.quran?cv:lv}`,a=s.getContext("2d",{willReadFrequently:!0});a.font=r;let o=hv(a,t,e.maxWidth||680),l=0;for(let h of o)l=Math.max(l,a.measureText(h).width);let c=i*1.5;return s.width=Math.ceil(l+n*2+8),s.height=Math.ceil(o.length*c+n*2),a.font=r,a.direction="rtl",a.textAlign="center",a.textBaseline="middle",e.plain?(a.shadowColor=e.shadow||"rgba(0,0,0,.85)",a.shadowBlur=12):(a.fillStyle=e.bg||"rgba(8,20,48,.84)",a.beginPath(),a.roundRect(3,3,s.width-6,s.height-6,e.radius??26),a.fill(),a.lineWidth=4,a.strokeStyle=e.border||"#e9b949",a.stroke()),a.fillStyle=e.color||"#ffffff",o.forEach((h,u)=>a.fillText(h,s.width/2,n+c*(u+.5))),{w:s.width,h:s.height}}function Ni(s,t={}){let e=document.createElement("canvas"),i=new ds(e);i.colorSpace=Ge;let n=new $i({map:i,transparent:!0,depthWrite:!1,fog:!1}),r=new on(n);return r.setText=(a,o)=>{o&&Object.assign(t,o),r.userData.text=a;let{w:l,h:c}=uv(e,a,t);i.dispose(),i.needsUpdate=!0;let h=(t.scale||1)/100;r.scale.set(l*h,c*h,1)},r.setText(s),r.renderOrder=20,r}var un=3500,Tc=class{constructor(t){this.n=0,this.pos=new Float32Array(un*3),this.col=new Float32Array(un*3),this.siz=new Float32Array(un),this.vel=new Float32Array(un*3),this.base=new Float32Array(un*3),this.life=new Float32Array(un),this.max=new Float32Array(un),this.grav=new Float32Array(un),this.bsize=new Float32Array(un);let e=new oe;e.setAttribute("position",new Ee(this.pos,3)),e.setAttribute("aColor",new Ee(this.col,3)),e.setAttribute("aSize",new Ee(this.siz,1)),this.scale={value:600};let i=new be({transparent:!0,depthWrite:!1,blending:ri,uniforms:{uScale:this.scale},vertexShader:`
        attribute vec3 aColor; attribute float aSize; uniform float uScale; varying vec3 vC;
        void main(){ vC = aColor; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        varying vec3 vC;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vC * a * 1.6, a); }`});this.points=new na(e,i),this.points.frustumCulled=!1,this.points.renderOrder=30,e.setDrawRange(0,0),t.add(this.points),this._c=new et}emit(t,e,i,n,r,a,o,l=1,c=.3,h=0){if(this.n>=un)return;let u=this.n++;this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=i,this.vel[u*3]=n,this.vel[u*3+1]=r,this.vel[u*3+2]=a,this._c.set(o),this.base[u*3]=this._c.r,this.base[u*3+1]=this._c.g,this.base[u*3+2]=this._c.b,this.life[u]=l,this.max[u]=l,this.grav[u]=h,this.bsize[u]=c}burst(t,e,i=30,n=4,r=1,a=.35,o=4){for(let l=0;l<i;l++){let c=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1),u=n*(.4+Math.random()*.8);this.emit(t.x,t.y,t.z,Math.sin(h)*Math.cos(c)*u,Math.abs(Math.cos(h))*u*1.1,Math.sin(h)*Math.sin(c)*u,e,r*(.6+Math.random()*.7),a*(.6+Math.random()*.8),o)}}fountain(t,e,i=120,n=14){for(let r=0;r<i;r++){let a=Math.random()*Math.PI*2,o=Math.random()*2.2;this.emit(t.x+Math.cos(a)*o,t.y+Math.random()*1.5,t.z+Math.sin(a)*o,Math.cos(a)*(1+Math.random()*2.5),n*(.5+Math.random()*.7),Math.sin(a)*(1+Math.random()*2.5),e[r%e.length],1.6+Math.random()*1.4,.35+Math.random()*.45,9)}}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o=0;o<3;o++)this.pos[e*3+o]=this.pos[a*3+o],this.vel[e*3+o]=this.vel[a*3+o],this.base[e*3+o]=this.base[a*3+o];this.life[e]=this.life[a],this.max[e]=this.max[a],this.grav[e]=this.grav[a],this.bsize[e]=this.bsize[a]}continue}this.vel[e*3+1]-=this.grav[e]*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t;let n=this.life[e]/this.max[e],r=Math.min(1,n*2.2);this.col[e*3]=this.base[e*3]*r,this.col[e*3+1]=this.base[e*3+1]*r,this.col[e*3+2]=this.base[e*3+2]*r,this.siz[e]=this.bsize[e]*(.5+.5*n),e++}let i=this.points.geometry;i.setDrawRange(0,this.n),i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}};function $a(s,t=70,e=1.1){let i=new xe(e*.55,e,t,16,1,!0);i.translate(0,t/2,0);let n=new be({transparent:!0,depthWrite:!1,blending:ri,side:Ue,uniforms:{uColor:{value:new et(s)},uTime:Lu,uAlpha:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uColor; uniform float uTime, uAlpha; varying vec2 vUv;
      void main(){
        float a = pow(1.0 - vUv.y, 1.7);
        a *= 0.6 + 0.22 * sin(vUv.y * 34.0 - uTime * 2.6);
        gl_FragColor = vec4(uColor * 1.5, a * uAlpha * 0.7);
      }`}),r=new Nt(i,n);return r.renderOrder=25,r}function Ac(s=16766042,t=2.4,e=40){let i=new Wt,n=new _a(t*.78,t,48);n.rotateX(-Math.PI/2);let r=new Le({color:s,transparent:!0,opacity:.9,blending:ri,depthWrite:!1,side:Ue,toneMapped:!1}),a=new Nt(n,r);a.position.y=.12;let o=new Zi(t*.78,40);o.rotateX(-Math.PI/2);let l=new Nt(o,new Le({color:s,transparent:!0,opacity:.16,blending:ri,depthWrite:!1,toneMapped:!1}));l.position.y=.1;let c=$a(s,e,t*.42),h=new Nt(new Mi(.5,1.1,4),new Le({color:s,toneMapped:!1}));return h.rotation.x=Math.PI,i.add(a,l,c,h),i.userData.setColor=u=>{r.color.set(u),l.material.color.set(u),c.material.uniforms.uColor.value.set(u),h.material.color.set(u)},i.userData.update=u=>{let d=1+Math.sin(u*3)*.07;a.scale.set(d,1,d),h.position.y=3.6+Math.sin(u*2.4)*.35,h.rotation.y=u*1.5},i.userData.update(0),i}function Rc(s=16766042,t=.45,e=null,i={}){let n=new Wt,r=new et(s),a=new Nt(new Me(t,2),new Le({color:r.clone().multiplyScalar(1.7),toneMapped:!1})),o=new on(new $i({map:bs(),color:r,transparent:!0,blending:ri,depthWrite:!1,fog:!1}));if(o.scale.setScalar(t*6),n.add(a,o),n.userData.core=a,n.userData.halo=o,e){let l=Ni(e,{scale:.85,...i});l.position.y=t+.35+l.scale.y/2,n.add(l),n.userData.label=l}return n}var dv=new Set(Object.values(ne));function dp(s){s.traverse(t=>{if(t.userData.shared)return;t.geometry&&t.geometry.dispose();let e=t.material;e&&(Array.isArray(e)?e:[e]).forEach(i=>{dv.has(i)||(i.map&&i.map.isCanvasTexture&&i.map!==bs()&&i.map.dispose(),i.dispose())})})}var it={plaza:{x:0,z:0,h:6,r:32},shahada:{x:10,z:-178,h:30,r:15},salah:{x:178,z:28,h:5,r:48},zakat:{x:96,z:152,h:4.5,r:44},sawm:{x:-76,z:160,h:3,r:44},pond:{x:-92,z:176,h:-1.4,r:7},hajj:{x:-195,z:-22,h:4.2,r:94},miqat:{x:-108,z:-36},kaaba:{x:-176,z:-40},safa:{x:-138,z:-8},marwa:{x:-138,z:-72},mina:{x:-214,z:28},jamarat:{x:-184,z:50},muzdalifah:{x:-246,z:14},arafat:{x:-258,z:-30},rahmah:{x:-272,z:-48,h:12,r:4},garden:{x:150,z:-112,h:7,r:46}},Za=[{...it.plaza,blend:22},{x:it.shahada.x,z:it.shahada.z,h:it.shahada.h,r:it.shahada.r,blend:58},{...it.salah,blend:20},{...it.zakat,blend:20},{...it.sawm,blend:20},{...it.pond,blend:11},{...it.hajj,blend:26},{...it.rahmah,blend:17},{...it.garden,blend:20}],fp=[{x:-118,z:-172,r:78,h:62},{x:-52,z:-222,r:52,h:38},{x:20,z:222,r:50,h:30},{x:-300,z:-92,r:40,h:34}],Ki=s=>[it[s].x,it[s].z],pp=[[[0,0],[4,-60],[14,-112],[10,-160]],[[0,0],[70,8],[130,22],[165,30]],[[0,0],[38,60],[72,112],[94,140]],[[0,0],[-30,62],[-58,118],[-70,146]],[[0,0],[-52,-14],Ki("miqat"),[-152,-40],[-160,-40]],[[0,0],[58,-40],[112,-84],[140,-104]],[[165,30],[150,90],[110,136]],[[94,152],[10,172],[-60,160]],[[140,-104],[176,-40],[178,10]],[[-160,-40],[-150,-24],Ki("safa")],[Ki("marwa"),[-170,-84],[-200,-70],[-236,-40],Ki("arafat")],[Ki("marwa"),[-150,-40]],[Ki("arafat"),[-256,-6],Ki("muzdalifah")],[Ki("muzdalifah"),[-232,30],Ki("mina"),Ki("jamarat")],[Ki("jamarat"),[-160,20],[-150,-8]]],Ie={shahada:{x:10,z:-170},salah:{x:196,z:46},zakat:{x:96,z:150},sawm:{x:-66,z:148},hajj:{x:-100,z:-36}},Cc=["allah","malaika","kutub","rusul","akhirah","qadar"];Cc.forEach((s,t)=>{let e=t/6*Math.PI*2+Math.PI/6;Ie[s]={x:it.garden.x+Math.sin(e)*22,z:it.garden.z+Math.cos(e)*22,angle:e}});var $e={size:780,cx:-45,cz:0,seg:312},Ye=$e.seg+1,Ss=$e.size/$e.seg,Mr=$e.cx-$e.size/2,br=$e.cz-$e.size/2,ts=null;function fv(s,t){let e=Math.hypot(s,t)/258,i=Math.hypot(s+195,t+25)/140,n=1+In(s*.012,t*.012,2,21)*.14,r=1-mi(.7,1,e*n),a=1-mi(.7,1,i*n);return Math.max(r,a)}function pv(s,t){let e=fv(s,t),i=In(s*.0062,t*.0062,4,1),n=2.6+Math.max(0,i+.12)*30+In(s*.03,t*.03,3,5)*2;for(let r of fp){let a=Math.hypot(s-r.x,t-r.z)/r.r;if(a<1){let o=1-a*a;n+=r.h*o*o*(.82+.5*In(s*.045,t*.045,3,9))}}n=-9+(n+9)*mi(0,1,e);for(let r of Za){let a=Math.hypot(s-r.x,t-r.z),o=1-mi(r.r,r.r+r.blend,a);o>0&&(n=_e(n,r.h,o))}return n}function gp(){ts=new Float32Array(Ye*Ye);for(let s=0;s<Ye;s++)for(let t=0;t<Ye;t++)ts[s*Ye+t]=pv(Mr+t*Ss,br+s*Ss)}function ti(s,t){let e=(s-Mr)/Ss,i=(t-br)/Ss;if(e<0||i<0||e>=Ye-1||i>=Ye-1)return-9;let n=Math.floor(e),r=Math.floor(i),a=e-n,o=i-r,l=ts[r*Ye+n],c=ts[r*Ye+n+1],h=ts[(r+1)*Ye+n],u=ts[(r+1)*Ye+n+1];return _e(_e(l,c,a),_e(h,u,a),o)}function es(s,t){let i=ti(s+1.5,t)-ti(s-1.5,t),n=ti(s,t+1.5)-ti(s,t-1.5);return Math.hypot(i,n)/(2*1.5)}function Ln(s,t){let e=1e9;for(let i of pp)for(let n=0;n<i.length-1;n++){let r=gc(s,t,i[n][0],i[n][1],i[n+1][0],i[n+1][1]);r<e&&(e=r)}return e}function is(s,t){return 1-mi(108,150,Math.hypot(s-it.hajj.x,t-it.hajj.z))}var Qn={sandWet:new et(12166522),sand:new et(15522214),grassA:new et(9228126),grassB:new et(5218114),dune:new et(15190158),rock:new et(9602938),rockHigh:new et(12169898),path:new et(14270348)},mp=new et;function xp(s,t,e,i,n){let r=In(s*.02,t*.02,2,7)*.9+.5;mp.copy(Qn.grassA).lerp(Qn.grassB,he(r,0,1)),n.copy(mp),n.lerp(Qn.dune,is(s,t)),n.lerp(Qn.sand,1-mi(1.3,2.9,e)),e<.6&&n.lerp(Qn.sandWet,1-mi(-.8,.6,e)),n.lerp(Qn.rock,mi(.5,.85,i)),n.lerp(Qn.rockHigh,mi(36,54,e));let a=Ln(s,t);return a<3.6&&e>.5&&n.lerp(Qn.path,(1-mi(1.7,3.6,a))*.9),n.multiplyScalar(.92+.2*In(s*.12,t*.12,2,3)),n}function _p(){let s=new Pi($e.size,$e.size,$e.seg,$e.seg);s.rotateX(-Math.PI/2),s.translate($e.cx,0,$e.cz);let t=s.attributes.position;for(let o=0;o<t.count;o++){let l=Math.round((t.getX(o)-Mr)/Ss),c=Math.round((t.getZ(o)-br)/Ss);t.setY(o,ts[c*Ye+l])}s.computeVertexNormals();let e=s.attributes.normal,i=new Float32Array(t.count*3),n=new et;for(let o=0;o<t.count;o++){let l=Math.max(e.getY(o),.05),c=Math.sqrt(Math.max(0,1-l*l))/l;xp(t.getX(o),t.getZ(o),t.getY(o),c,n),i[o*3]=n.r,i[o*3+1]=n.g,i[o*3+2]=n.b}s.setAttribute("color",new Ee(i,3));let r=new ee({vertexColors:!0,roughness:1,metalness:0,map:hp()}),a=new Nt(s,r);return a.receiveShadow=!0,a.name="terrain",a}function yp(s){let t=new Uint8Array(Ye*Ye);for(let a=0;a<Ye*Ye;a++)t[a]=he((ts[a]+10)/20,0,1)*255;let e=new us(t,Ye,Ye,mr,di);e.minFilter=e.magFilter=ni,e.needsUpdate=!0;let i=new be({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uDepth:{value:e},uMap:{value:new ge(Mr,br,Ss,Ye)},uSunDir:s.uLightDir,uSunColor:s.uSunColor,uZenith:s.uZenith,uHorizon:s.uHorizon,uFogColor:s.uFogColor,uFog:s.uFog,uDay:s.uDay},vertexShader:`
      varying vec3 vWorld;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform float uTime; uniform sampler2D uDepth; uniform vec4 uMap;
      uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uZenith; uniform vec3 uHorizon;
      uniform vec3 uFogColor; uniform vec2 uFog; uniform float uDay;
      varying vec3 vWorld;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vnoise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
      }
      float waveH(vec2 p){
        float t = uTime;
        return vnoise(p*0.10 + vec2(t*0.22, t*0.15))*0.55
             + vnoise(p*0.27 - vec2(t*0.28, -t*0.20))*0.30
             + vnoise(p*0.80 + vec2(-t*0.50, t*0.40))*0.15;
      }
      void main(){
        vec2 p = vWorld.xz;
        vec2 uv = ((p - uMap.xy) / uMap.z + 0.5) / uMap.w;
        float th = texture2D(uDepth, uv).r * 20.0 - 10.0;
        if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) th = -10.0;
        float depth = max(-th, 0.0);
        float dcam = distance(cameraPosition, vWorld);
        float e = 0.7;
        float h0 = waveH(p);
        float hx = waveH(p + vec2(e, 0.0)) - h0;
        float hz = waveH(p + vec2(0.0, e)) - h0;
        float att = 1.0 - smoothstep(120.0, 700.0, dcam) * 0.85;
        vec3 N = normalize(vec3(-hx * 2.4 * att, 1.0, -hz * 2.4 * att));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = 0.03 + 0.97 * pow(1.0 - max(dot(N, V), 0.0), 4.0);
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.55));
        vec3 shallow = vec3(0.07, 0.60, 0.62);
        vec3 deep = vec3(0.01, 0.13, 0.32);
        vec3 body = mix(shallow, deep, smoothstep(0.0, 5.5, depth)) * uDay;
        vec3 col = mix(body, sky, fres);
        float sp = pow(max(dot(R, uSunDir), 0.0), 220.0);
        col += uSunColor * sp * 2.5;
        float fn = vnoise(p * 0.9 + uTime * 0.3);
        float foam = smoothstep(0.5, 0.0, depth - 0.1 + fn * 0.25);
        float band = smoothstep(0.78, 1.0, sin(depth * 7.0 - uTime * 1.6 + fn * 4.0)) * smoothstep(1.7, 0.2, depth);
        float f = clamp(foam * 0.85 + band * 0.4, 0.0, 1.0);
        col = mix(col, vec3(0.95) * (0.25 + 0.75 * uDay), f);
        float alpha = max(mix(0.6, 0.96, smoothstep(0.0, 2.4, depth)), f);
        float fg = smoothstep(uFog.x, uFog.y, dcam);
        col = mix(col, uFogColor, fg);
        gl_FragColor = vec4(col, alpha);
      }`}),n=new Pi(5e3,5e3,1,1);n.rotateX(-Math.PI/2);let r=new Nt(n,i);return r.position.set($e.cx,0,$e.cz),r.renderOrder=2,r.name="water",r}function vp(s=320){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d",{willReadFrequently:!0}),i=e.createImageData(s,s),n=new et;for(let r=0;r<s;r++)for(let a=0;a<s;a++){let o=Mr+(a+.5)/s*$e.size,l=br+(r+.5)/s*$e.size,c=ti(o,l);if(c<0){let u=he(-c/8,0,1);n.setRGB(_e(.25,.05,u),_e(.72,.3,u),_e(.8,.55,u),Ge)}else{xp(o,l,c,es(o,l),n);let u=he(1+(ti(o-3,l-3)-ti(o+3,l+3))*.05,.7,1.3);n.multiplyScalar(u)}n.convertLinearToSRGB();let h=(r*s+a)*4;i.data[h]=he(n.r,0,1)*255,i.data[h+1]=he(n.g,0,1)*255,i.data[h+2]=he(n.b,0,1)*255,i.data[h+3]=255}return e.putImageData(i,0,0),t}function Sr(s,t){return[(s-Mr)/$e.size,(t-br)/$e.size]}function wr(s,t,e=0){for(let i of Za)if(Math.hypot(s-i.x,t-i.z)<i.r+e)return i;return null}function mv(s=3.5,t=.95,e=1.6){let n=[],r=(o,l)=>[s*o*Math.cos(o*.8),Math.sin(o*Math.PI*.5)*.9-o*o*e,l*t*.5*Math.sin(Math.PI*(.1+.9*o))];for(let o=0;o<5;o++){let l=o/5,c=(o+1)/5,h=r(l,-1),u=r(l,1),d=r(c,-1),f=r(c,1);n.push(...h,...u,...f,...h,...f,...d)}let a=new oe;return a.setAttribute("position",new Bt(n,3)),a.computeVertexNormals(),a}function gv(){let s=new Ut,t=6,e=6.6;for(let n=0;n<t;n++){let r=n/t,a=r*e+e/t/2,o=.31-r*.13;s.cyl(o-.02,o+.03,e/t+.06,n%2?9399880:8019003,Math.sin(r*1.3)*.5,a,0,7)}let i=Math.sin(1.3)*.5;for(let n=0;n<9;n++){let r=mv(3.2+n%3*.35,.95,1.4+n%2*.5);s.add(r,n%2?4168252:3114038,i,e,0,0,n/9*Math.PI*2+.2,0)}for(let n=0;n<4;n++)s.sphere(.2,11887901,i+Math.cos(n*1.6)*.3,e-.4,Math.sin(n*1.6)*.3,1,1.3,1,6,5);return s.geometry()}function xv(){let s=new Ut;return s.cyl(.2,.34,2.8,7031343,0,1.4,0,7),s.add(new Me(1.75,1),4168522,0,3.7,0),s.add(new Me(1.25,1),5616728,1,3.2,.4),s.add(new Me(1.3,1),3639876,-.9,3.3,-.5),s.add(new Me(1.1,1),6734947,.1,4.8,.1),s.geometry()}function _v(){let s=new Ut;return s.add(new Me(.8,1),4890440,0,.5,0,0,0,0,1,.75,1),s.add(new Me(.55,1),6469722,.55,.42,.2),s.add(new Me(.5,1),3902016,-.5,.38,-.25),s.geometry()}function yv(){let s=[],t=[],e=[],i=new et(5218114),n=new et(11855214);for(let a=0;a<5;a++){let o=a/5*Math.PI+.3,l=Math.cos(o),c=Math.sin(o),h=.055,u=.3+a%3*.1,d=.12,f=Math.cos(o*3.1)*.14,g=Math.sin(o*2.3)*.14,x=[f-l*h,0,g-c*h],p=[f+l*h,0,g+c*h],m=[f-c*d,u,g+l*d];s.push(...x,...p,...m,...p,...x,...m);for(let _=0;_<2;_++)t.push(i.r,i.g,i.b,i.r,i.g,i.b,n.r,n.g,n.b),e.push(0,1,0,0,1,0,0,1,0)}let r=new oe;return r.setAttribute("position",new Bt(s,3)),r.setAttribute("color",new Bt(t,3)),r.setAttribute("normal",new Bt(e,3)),r}function vv(){let s=new Ut;s.cyl(.02,.02,.35,12576424,0,.175,0,4);for(let t=0;t<5;t++)s.sphere(.07,16777215,Math.cos(t*1.257)*.085,.37,Math.sin(t*1.257)*.085,1,.6,1,5,4);return s.sphere(.055,16773536,0,.39,0,1,.8,1,5,4),s.geometry()}var Mp=new ie,bp=new Si,Mv=new D,bv=new D,Sp=new Ri,ja=new et;function Dn(s,t,e,i=!0){let n=new ea(s,t,e.length);return e.forEach((r,a)=>{Sp.set(r.rx||0,r.ry||0,r.rz||0),bp.setFromEuler(Sp),Mp.compose(Mv.set(r.x,r.y,r.z),bp,bv.set(r.sx??r.s??1,r.sy??r.s??1,r.sz??r.s??1)),n.setMatrixAt(a,Mp),r.color!==void 0&&n.setColorAt(a,ja.set(r.color))}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=i,n.receiveShadow=!0,n.frustumCulled=!1,n}function wp(s,t=1){let e=Kn(20241),i=new Wt;i.name="vegetation";let n=(S,y)=>S+e()*(y-S),r=()=>[n(-335,262),n(-262,262)],a=Ya(new ee({vertexColors:!0,roughness:.9,flatShading:!0,side:Ue}),2.2,.03),o=Ya(new ee({vertexColors:!0,roughness:.9,flatShading:!0}),2.4,.022),l=new ee({color:16777215,roughness:.95,flatShading:!0}),c=Ya(new ee({vertexColors:!0,roughness:1}),0,.22),h=Ya(new ee({vertexColors:!0,roughness:.8}),0,.15),u=[],d=-66,f=148;for(let S=0;S<9e3&&u.length<300;S++){let[y,M]=r();if(S<500){let N=n(0,6.283),I=n(12,44);y=it.sawm.x+Math.cos(N)*I,M=it.sawm.z+Math.sin(N)*I}let C=ti(y,M);if(C<1.5||C>16||es(y,M)>.5||Ln(y,M)<4.5)continue;let T=wr(y,M,4),L=C<5.5?.75:.1;is(y,M)>.5&&(L=.12),T&&(T===Za[4]?L=Math.hypot(y-d,M-f)>19&&Math.hypot(y-it.pond.x,M-it.pond.z)>10?1:0:T.x===it.hajj.x?L=Math.hypot(y-it.hajj.x,M-it.hajj.z)>100?.3:0:L=0),!(e()>L)&&(u.some(N=>Math.hypot(N.x-y,N.z-M)<3.2)||(u.push({x:y,y:C-.15,z:M,ry:n(0,6.283),s:n(.85,1.35),rz:n(-.06,.06)}),s.colliders.push({x:y,z:M,r:.45})))}i.add(Dn(gv(),a,u));let g=[];for(let S=0;S<12e3&&g.length<460*t;S++){let[y,M]=r(),C=ti(y,M);if(C<4||C>40||es(y,M)>.6||Ln(y,M)<5||is(y,M)>.25)continue;let T=wr(y,M,3);if(T){let N=Math.hypot(y-T.x,M-T.z);if(!(T.x===it.garden.x&&N>36)&&!(T.x===it.plaza.x&&T.z===it.plaza.z&&N>30))continue}if(In(y*.012,M*.012,2,33)<-.08||g.some(N=>Math.hypot(N.x-y,N.z-M)<3.6))continue;let L=n(.8,1.7);g.push({x:y,y:C-.1,z:M,ry:n(0,6.283),s:L,color:ja.setHSL(n(.18,.4),.35,n(.72,.96)).getHex()}),s.colliders.push({x:y,z:M,r:.45*L})}i.add(Dn(xv(),o,g));let x=[];for(let S=0;S<6e3&&x.length<320*t;S++){let[y,M]=r(),C=ti(y,M);if(C<2.6||C>34||es(y,M)>.7||Ln(y,M)<3.5||wr(y,M,1))continue;let T=is(y,M)>.4;T&&e()>.25||x.push({x:y,y:C,z:M,ry:n(0,6.283),s:n(.7,1.5),color:T?14207120:ja.setHSL(n(.18,.4),.35,n(.72,.96)).getHex()})}i.add(Dn(_v(),o,x));let p=[];for(let S=0;S<6e3&&p.length<340;S++){let[y,M]=r(),C=ti(y,M);if(C<.4||Ln(y,M)<4||wr(y,M,2))continue;let T=es(y,M);if(e()>.2+T+is(y,M)*.3)continue;let L=n(.35,2.3),N=n(.5,.75);p.push({x:y,y:C+L*.15,z:M,rx:n(0,3),ry:n(0,6.283),rz:n(0,3),sx:L*n(.8,1.3),sy:L*n(.55,.9),sz:L*n(.8,1.3),color:ja.setRGB(N,N*.94,N*.86).getHex()}),L>1.2&&s.colliders.push({x:y,z:M,r:L*.8})}i.add(Dn(new Me(1,0),l,p));let m=[],_=Math.floor(16e3*t);for(let S=0;S<_*6&&m.length<_;S++){let[y,M]=r(),C=ti(y,M);if(C<2.9||C>36||es(y,M)>.6||is(y,M)>.3||Ln(y,M)<3||wr(y,M,-1))continue;let T=n(.55,1.1),L=n(.75,1.1);m.push({x:y,y:C-.03,z:M,ry:n(0,6.283),sx:T,sy:T*n(.8,1.4),sz:T,color:ja.setRGB(L,L,L*.9).getHex()})}i.add(Dn(yv(),c,m,!1));let b=[],v=[16740259,16765773,16777215,12946431,16747100,8376831],A=(S,y,M,C,T)=>{for(let L=0;L<C;L++){let N=n(0,6.283),I=Math.sqrt(e())*M,R=S+Math.cos(N)*I,O=y+Math.sin(N)*I;b.push({x:R,y:ti(R,O),z:O,ry:n(0,6),s:n(.75,1.25),color:T??v[Math.floor(e()*v.length)]})}};for(let S=0,y=0;S<3e3&&y<90*t;S++){let[M,C]=r(),T=ti(M,C);T<3||T>30||es(M,C)>.5||is(M,C)>.2||wr(M,C,0)||(A(M,C,3.5,14,v[Math.floor(e()*v.length)]),y++)}for(let S=0;S<36;S++){let y=S/36*Math.PI*2;A(it.garden.x+Math.sin(y)*32.5,it.garden.z+Math.cos(y)*32.5,1.8,16,v[S%v.length])}for(let S=0;S<20;S++){let y=S/20*Math.PI*2;A(it.plaza.x+Math.sin(y)*28.5,it.plaza.z+Math.cos(y)*28.5,1.4,10,v[S*2%v.length])}return i.add(Dn(vv(),h,b,!1)),i}var Y={GOLD:14856266,CREAM:15985366,CREAM2:15128762,STONE:14273972,STONE2:12891800,TEAL:2401178,WARM:16764794,WHITE:16052712,WOOD:9067059,DARK:3813162,RED:13194557,BLUE:3108789,GREEN:4168266};function ai(s,t,e){return[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)]}function Nn(s,t,e,i,n=1){s.cyl(.05*n,.07*n,1.2*n,Y.GOLD,t,e+.6*n,i,6),s.sphere(.17*n,Y.GOLD,t,e+.45*n,i,1,1,1,8,6),s.sphere(.11*n,Y.GOLD,t,e+.82*n,i,1,1,1,8,6),s.torus(.3*n,.065*n,Y.GOLD,t,e+1.45*n,i,0,14,Math.PI*1.4,0,Math.PI*.8)}function Ic(s,t,e,i,n,r=22,a=1,o=Y.TEAL){s.box(2.6*a,4*a,2.6*a,Y.STONE,e,i+2*a,n),s.cyl(1.05*a,1.22*a,r*.55,Y.CREAM,e,i+4*a+r*.275,n,8);let l=i+4*a+r*.55;s.cyl(1.8*a,1.15*a,.7*a,Y.STONE2,e,l+.35*a,n,8),s.torus(1.75*a,.09*a,Y.GOLD,e,l+1.25*a,n,Math.PI/2,8),s.cyl(.8*a,.92*a,r*.25,Y.CREAM,e,l+.7*a+r*.125,n,8),t.cyl(.86*a,.86*a,1*a,Y.WARM,e,l+.7*a+r*.17,n,8);let c=l+.7*a+r*.25;s.cyl(1.25*a,.8*a,.5*a,Y.STONE2,e,c+.25*a,n,8),s.cone(1*a,3.2*a,o,e,c+.5*a+1.6*a,n,8),Nn(s,e,c+3.5*a,n,.8*a)}function xi(s,t,e,i,n,r={}){let a=Ni(t,r);return a.position.set(e,i,n),s.add(a),a}function Pc(s,t){let e=new on(new $i({map:bs(),color:s,transparent:!0,blending:ri,depthWrite:!1,fog:!1}));return e.scale.setScalar(t),e}function Ep(s){let t=it.plaza.h,e=new Wt;e.position.set(it.plaza.x,t,it.plaza.z);let i=new Ut,n=new Ut;i.cyl(21,21.4,.36,Y.STONE,0,.18,0,56),i.cyl(19.5,19.8,.36,Y.CREAM2,0,.54,0,56),i.cyl(18,18.3,.36,Y.WHITE,0,.9,0,56),s.platforms.push({x:0,z:0,r:21.2,y:t+.36},{x:0,z:0,r:19.6,y:t+.72},{x:0,z:0,r:18.1,y:t+1.08});let r=1.08,a=new Nt(new Zi(17.9,64).rotateX(-Math.PI/2),new ee({map:Ec("#efe6d0","#1f8a8a","#e2b04a","#b8944a",[8,8]),roughness:.55}));a.position.y=r+.012,a.receiveShadow=!0,e.add(a);let o=["الشهادتان","الصلاة","الزكاة","الصوم","الحج"],l=[],c=12,h=new et(9276822),u=new et(16249832),d=new et(7236194),f=new et(15777103);for(let T=0;T<5;T++){let L=T/5*Math.PI*2,N=Math.sin(L)*c,I=-Math.cos(L)*c;i.box(2.5,.7,2.5,Y.STONE,N,r+.35,I,-L),i.cyl(1.5,.95,1.1,Y.STONE,N,r+11.75,I,12),i.box(2.8,.5,2.8,Y.CREAM2,N,r+12.55,I,-L);let R=new ee({color:h.clone(),roughness:.6}),O=new Nt(new xe(.85,.97,10.5,20),R);O.position.set(N,r+5.95,I),O.castShadow=O.receiveShadow=!0;let B=new ee({color:d.clone(),roughness:.4,metalness:.3,emissive:0});for(let[nt,St]of[[1.7,1.02],[10.3,.93],[6,.97]]){let Ft=new Nt(new wn(St,.11,8,24).rotateX(Math.PI/2),B);Ft.position.set(N,r+nt,I),e.add(Ft)}let k=Ni(`${ot(T+1)} · ${o[T]}`,{scale:1.5,size:46});k.position.set(Math.sin(L)*(c+2.3),r+4.4,-Math.cos(L)*(c+2.3));let tt=$a(16769162,120,1.3);tt.position.set(N,r+12.8,I),tt.visible=!1;let V=new Nt(new Me(.7,1),new Le({color:new et(2.4,1.8,.8),toneMapped:!1}));V.position.set(N,r+13.6,I),V.visible=!1;let J=Pc(16762726,6);J.position.copy(V.position),J.visible=!1,e.add(O,k,tt,V,J),l.push({shaftMat:R,bandMat:B,label:k,beam:tt,flame:V,fh:J,k:0,target:0}),s.colliders.push({x:it.plaza.x+N,z:it.plaza.z+I,r:1.6})}i.torus(c,1.05,Y.CREAM2,0,r+13.75,0,Math.PI/2,48),i.torus(c+.95,.16,Y.GOLD,0,r+14.15,0,Math.PI/2,48),i.torus(c-.95,.16,Y.GOLD,0,r+14.15,0,Math.PI/2,48),i.cyl(1.5,1.9,.8,Y.STONE,0,r+.4,0,8),i.cyl(1,1.25,.3,Y.GOLD,0,r+.95,0,8),s.colliders.push({x:it.plaza.x,z:it.plaza.z,r:2.1});let g=new Nt(new xa(.75,0),new Le({color:new et(1.5,1.2,.6),toneMapped:!1}));g.position.y=r+2.6;let x=Pc(16765562,5);x.position.y=r+2.6,e.add(g,x);let p=new ee({color:2071188,roughness:.42,metalness:.1,transparent:!0,opacity:.12,side:Ue,depthWrite:!1}),m=new Nt(new De(12.3,48,18,0,Math.PI*2,0,Math.PI/2),p);m.scale.y=.8,m.position.y=r+14.4,e.add(m);let _=new Ut;Nn(_,0,r+14.4+12.3*.8-.2,0,2.2);let b=_.mesh(ne.gold,!1);b.visible=!1,e.add(b);let v=$a(16773824,160,2.2);v.position.y=r+26,v.visible=!1,e.add(v);for(let[T,L]of[[-9,`أركان الإسلام خمسة
«بُنِيَ الإسلامُ على خمس»`],[9,`أركان الإيمان ستة
نتعلّمها في حديقة الإيمان`]])i.box(5.2,2.9,.6,Y.CREAM2,T,1.45,26.5),i.box(5.6,.35,.9,Y.GOLD,T,3.05,26.5),i.box(5.6,.4,.9,Y.STONE2,T,.2,26.5),xi(e,L,T,1.75,26.9,{scale:.62,size:40,plain:!0,color:"#5a3d0c",shadow:"rgba(255,255,255,.5)"}),s.colliders.push({x:it.plaza.x+T,z:it.plaza.z+26.5,hw:2.8,hd:.5,rot:0});let A=["الإيمان بالله","الملائكة","الكتب","الرسل","اليوم الآخر","القدر"],S=[];for(let T=0;T<6;T++){let L=T/6*Math.PI*2+Math.PI/6,N=Math.sin(L)*25.5,I=-Math.cos(L)*25.5;i.cyl(.5,.55,.25,Y.STONE2,N,.12,I,8),i.cyl(.13,.2,4.3,Y.DARK,N,2.3,I,8),i.cyl(.36,.3,.1,Y.GOLD,N,4.45,I,6),i.cone(.44,.55,Y.GOLD,N,5.45,I,6);let R=new Le({color:new et(.16,.14,.12),toneMapped:!1}),O=new Nt(new xe(.3,.3,.7,6),R);O.position.set(N,4.85,I);let B=Pc(16762726,4.5);B.position.set(N,4.85,I),B.visible=!1;let k=Ni(A[T],{scale:.95});k.position.set(N,6.6,I),k.material.opacity=.4,e.add(O,B,k),S.push({mat:R,hl:B,label:k,k:0,target:0}),s.colliders.push({x:it.plaza.x+N,z:it.plaza.z+I,r:.5})}e.add(i.mesh(ne.flat),n.empty?new Wt:n.mesh(ne.smooth)),s.scene.add(e);let y=new et(.16,.14,.12),M=new et(2.6,1.9,.9);return{group:e,allIslam:0,allDone:0,_ai:0,_ad:0,setProgress(T,L){l.forEach((N,I)=>N.target=T[I]?1:0),S.forEach((N,I)=>N.target=L[I]?1:0),this.allIslam=T.every(Boolean)?1:0,this.allDone=this.allIslam&&L.every(Boolean)?1:0},update(T,L){for(let R of l){R.k=_e(R.k,R.target,1-Math.exp(-1.6*T)),R.shaftMat.color.lerpColors(h,u,R.k),R.bandMat.color.lerpColors(d,f,R.k),R.bandMat.emissive.setRGB(.5*R.k,.32*R.k,.05*R.k),R.label.material.opacity=.45+.55*R.k;let O=R.k>.03;R.beam.visible=R.flame.visible=R.fh.visible=O,O&&(R.beam.material.uniforms.uAlpha.value=R.k*.8,R.flame.scale.setScalar(R.k*(1+Math.sin(L*5+R.beam.position.x)*.08)),R.flame.rotation.y=L)}for(let R of S)R.k=_e(R.k,R.target,1-Math.exp(-1.6*T)),R.mat.color.lerpColors(y,M,R.k),R.hl.visible=R.k>.05,R.hl.material.opacity=R.k,R.label.material.opacity=.4+.6*R.k;this._ai=_e(this._ai,this.allIslam,1-Math.exp(-.8*T)),this._ad=_e(this._ad,this.allDone,1-Math.exp(-.8*T));let N=this._ai>.97;p.opacity=.12+.88*this._ai,p.depthWrite!==N&&(p.depthWrite=N,p.transparent=!N,p.needsUpdate=!0),b.visible=this._ai>.5,v.visible=this._ad>.03,v.material.uniforms.uAlpha.value=this._ad,g.rotation.y=L*.8,g.position.y=r+2.6+Math.sin(L*1.4)*.18;let I=l.reduce((R,O)=>R+O.k,0)+S.reduce((R,O)=>R+O.k,0);g.scale.setScalar(.8+I*.08),x.scale.setScalar(4+I*.6)}}}function Tp(s){let{x:t,z:e,h:i}=it.shahada,n=new Wt,r=-8.5;n.position.set(t,i,e+r);let a=new Ut,o=new Ut;a.cyl(3.3,3.7,1.6,Y.STONE,0,.8,0,8),a.cyl(1.75,2.5,13,Y.CREAM,0,8.1,0,10),a.torus(2.42,.14,Y.GOLD,0,2.6,0,Math.PI/2,10),a.torus(1.86,.14,Y.GOLD,0,13.6,0,Math.PI/2,10),a.cyl(2.7,1.8,.6,Y.STONE2,0,14.9,0,10),a.torus(2.6,.08,Y.GOLD,0,16.1,0,Math.PI/2,10);for(let p=0;p<10;p++){let m=p/10*Math.PI*2;a.cyl(.05,.05,.9,Y.GOLD,Math.cos(m)*2.6,15.65,Math.sin(m)*2.6,4)}for(let p=0;p<6;p++){let m=p/6*Math.PI*2;a.box(.14,2.5,.14,Y.STONE2,Math.cos(m)*1.3,16.45,Math.sin(m)*1.3)}a.cyl(1.6,1.5,.3,Y.STONE2,0,17.8,0,10),o.dome(1.75,Y.TEAL,0,17.9,0,1.05,16),Nn(a,0,19.6,0,.9),a.arch(1.5,2.2,Y.DARK,0,1.6,2.42);let l=new Le({color:new et(.3,.26,.2),toneMapped:!1}),c=new Nt(new xe(1.2,1.2,2.3,6),l);c.position.y=16.5;let h=Pc(16769696,14);h.position.y=16.5,h.visible=!1;let u=$a(16773296,140,1.5);u.position.y=20,u.visible=!1;let d=Ni(`لا إله إلا الله
محمد رسول الله`,{quran:!0,plain:!0,size:90,weight:700,color:"#ffe9a6",shadow:"rgba(255,170,40,.9)",scale:3.2});d.position.y=30,d.visible=!1;for(let p=0;p<14;p++){let m=p/14*Math.PI*2;Math.abs(m-Math.PI/2)<.5||a.box(2.6,.7,.7,Y.STONE2,Math.cos(m)*13.5,.35,Math.sin(m)*13.5-r,-m+Math.PI/2)}xi(n,"قمة التوحيد",0,4.2,9.5-r-9.5+3.4,{scale:1.1}),n.add(a.mesh(ne.flat),o.mesh(ne.smooth),c,h,u,d),s.scene.add(n),s.colliders.push({x:t,z:e+r,r:3.9});let f={k:0,target:0},g=new et(.3,.26,.2),x=new et(3,2.4,1.3);return{group:n,towerPos:new D(t,i,e+r),setLit(p){f.target=p?1:0},update(p,m){f.k=_e(f.k,f.target,1-Math.exp(-1.2*p)),l.color.lerpColors(g,x,f.k);let _=f.k>.03;h.visible=u.visible=d.visible=_,h.material.opacity=f.k,u.material.uniforms.uAlpha.value=f.k,d.material.opacity=f.k,d.position.y=29+Math.sin(m*.8)*.5}}}function Ap(s){let{x:t,z:e,h:i}=it.salah,n=Math.atan2(-(it.kaaba.x-t),-(it.kaaba.z-e)),r=new Wt;r.position.set(t,i,e),r.rotation.y=n;let a=(m,_)=>{let[b,v]=ai(m,_,n);return{x:t+b,z:e+v}},o=new Ut,l=new Ut,c=new Ut,h=2792847;o.box(28,.5,18,Y.STONE,0,.25,-10),o.box(26,9,16,Y.CREAM,0,5,-10),o.box(26.6,.5,16.6,Y.STONE2,0,9.6,-10);for(let m=0;m<13;m++)o.box(1,.7,.4,Y.CREAM2,-12+m*2,10.2,-2);for(let m=0;m<8;m++)o.box(.4,.7,1,Y.CREAM2,-13,10.2,-17+m*2),o.box(.4,.7,1,Y.CREAM2,13,10.2,-17+m*2);l.cyl(6.2,6.4,1.9,Y.CREAM,0,10.6,-10,24),o.torus(6.35,.16,Y.GOLD,0,11.5,-10,Math.PI/2,24),l.dome(6.4,h,0,11.5,-10,1.02,30),Nn(o,0,17.9,-10,1.4);for(let[m,_]of[[-10.5,-4.5],[10.5,-4.5],[-10.5,-15.5],[10.5,-15.5]])l.cyl(1.9,1.9,.6,Y.CREAM,m,10.1,_,14),l.dome(1.95,h,m,10.4,_,1,14),Nn(o,m,12.2,_,.5);o.box(7.2,10.8,1.3,Y.CREAM2,0,5.4,-1.5),o.box(7.8,.5,1.6,Y.GOLD,0,11,-1.5),o.arch(4.1,5.6,Y.GOLD,0,.5,-.86,0,.08),o.arch(3.6,5.4,2760728,0,.5,-.82,0,.1),o.box(3.2,4.4,.1,Y.WOOD,0,2.7,-.76),o.box(.08,4.4,.12,6175518,0,2.7,-.74);for(let m of[-11,-8,-5,5,8,11])c.arch(1.5,2.6,Y.WARM,m,2.4,-1.94);for(let m of[-5,-8.5,-12,-15.5])c.arch(1.5,2.6,Y.WARM,13.04,2.4,m,Math.PI/2),c.arch(1.5,2.6,Y.WARM,-13.04,2.4,m,-Math.PI/2);l.cyl(1.8,1.8,6,Y.CREAM2,0,3.5,-18,12),l.dome(1.8,h,0,6.5,-18,.8,12),Ic(o,c,-15.6,0,-3,22,1,h),Ic(o,c,15.6,0,-3,22,1,h);let u=new Nt(new Pi(36,32).rotateX(-Math.PI/2),new ee({map:Ec("#f1e9d6","#2a9d8f","#e2b04a","#b8944a",[9,8]),roughness:.6}));u.position.set(0,.07,16),u.receiveShadow=!0,r.add(u);for(let m of[-18.4,18.4]){for(let _=0;_<6;_++){let b=2+_*5.6;o.cyl(.32,.38,3.4,Y.CREAM,m,1.7,b,8),o.box(.9,.3,.9,Y.STONE2,m,3.5,b),c.sphere(.3,Y.WARM,m,4,b,1,1.2,1,8,6);let v=a(m,b);s.colliders.push({x:v.x,z:v.z,r:.5})}o.box(.5,.8,30,Y.STONE,m,.4,16)}let d=-12.5,f=6.5;o.cyl(2.3,2.5,.75,Y.STONE,d,.37,f,8),o.cyl(.3,.42,1.7,Y.CREAM2,d,.85,f,8),o.cyl(1,.3,.3,Y.CREAM2,d,1.8,f,10),l.dome(.35,Y.GOLD,d,1.95,f,1,8);for(let m=0;m<8;m++){let _=m/8*Math.PI*2;o.box(.1,.18,.3,Y.GOLD,d+Math.cos(_)*2.35,.62,f+Math.sin(_)*2.35,-_+Math.PI/2),o.cyl(.22,.25,.36,Y.WOOD,d+Math.cos(_)*3.1,.18,f+Math.sin(_)*3.1,8)}let g=new Nt(new Zi(2.1,24).rotateX(-Math.PI/2),new ee({color:4571104,roughness:.12,metalness:.1,transparent:!0,opacity:.85}));g.position.set(d,.66,f),r.add(g),r.add(o.mesh(ne.flat),l.mesh(ne.smooth));let x=c.mesh(Di(1),!1);s.night(x.material,.35,2.6),r.add(x),s.scene.add(r),s.colliders.push({...a(0,-10),hw:13.4,hd:8.4,rot:n},{...a(0,-1.5),hw:3.7,hd:.9,rot:n},{...a(0,-18.6),r:2}),s.colliders.push({...a(-15.6,-3),r:1.8},{...a(15.6,-3),r:1.8},{...a(d,f),r:2.75});for(let m of[-18.4,18.4])s.colliders.push({...a(m,16),hw:.3,hd:15,rot:n});let p=a(d,f);s.updaters.push((m,_)=>{if(s.near(p.x,p.z,70)&&Math.random()<.5){let b=Math.random()*6.28;s.particles.emit(p.x,i+2,p.z,Math.cos(b)*1.1,2.2+Math.random(),Math.sin(b)*1.1,10479359,.9,.16,7)}}),s.P.salah={court:a(0,17),fountain:a(d+4.2,f+1.5),fountainC:p,yaw:n,qibla:n+Math.PI,W:a},Ie.salah=a(0,27)}function Sv(s,t){let e=new Ut;for(let[i,n]of[[-1.5,-.9],[1.5,-.9],[-1.5,1.1],[1.5,1.1]])e.cyl(.07,.07,2.7,Y.WOOD,i,1.35,n,6);e.box(3.2,.9,1,10119740,0,.45,.3),e.box(3.35,.08,1.15,12159573,0,.94,.3);for(let i=0;i<6;i++)e.add(new pe(.57,.06,2.5),i%2?16446432:s,-1.4+i*.56,2.72,.15,.16,0,0),e.box(.57,.32,.05,i%2?s:16446432,-1.4+i*.56,2.36,1.38);for(let i=0;i<3;i++){let n=-1+i;e.cyl(.36,.28,.25,13214315,n,1.1,.3,8);for(let r=0;r<6;r++)e.sphere(.12,t[i],n+Math.cos(r*1.05)*.18,1.27+r%2*.08,.3+Math.sin(r*1.05)*.18,1,1,1,6,5)}return e.sphere(.42,14272416,-2,.33,.9,1,.85,1,8,6),e.sphere(.36,13482124,2,.3,.7,1,.85,1,8,6),e.geometry()}function wv(s,t,e,i,n){let r=new Ut;r.box(s,t,e,i,0,t/2,0),r.box(s+.35,.35,e+.35,Y.STONE2,0,t+.17,0);for(let[a,o]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.box(.55,.55,.55,i,a*(s/2-.2),t+.6,o*(e/2-.2));return r.arch(1.2,2.1,Y.WOOD,0,0,e/2+.04),r.add(new pe(1.9,.1,1),10177850,0,3,e/2+.45,.25,0,0),n&&r.dome(Math.min(s,e)*.3,16183264,0,t+.3,0,.9,12),r.geometry()}function Rp(s){let{x:t,z:e,h:i}=it.zakat,n=new Wt;n.position.set(t,i,e);let r=new Ut,a=new Ut,o=new Ut,l=[13194557,3116981,4168266,14259502,9064368,13193082],c=[[16751164,14240314,8046415],[7028509,15913308,15262416],[14240314,15913308,8046415],[16757066,9064234,13227610],[15262416,11887901,16751164],[8046415,14240314,15913308]];for(let _=0;_<6;_++){let b=(30+_*60)*Math.PI/180,v=Math.sin(b)*15.5,A=-Math.cos(b)*15.5,S=Math.atan2(-v,-A);r.merge(Sv(l[_],c[_]),v,0,A,S),s.colliders.push({x:t+v,z:e+A,hw:1.8,hd:1.3,rot:S});let[y,M]=ai(1.6,1.4,S);o.sphere(.2,Y.WARM,v+y,2.25,A+M,1,1.3,1,6,5);let[C,T]=ai(-1.6,1.4,S);o.sphere(.2,16751210,v+C,2.25,A+T,1,1.3,1,6,5)}r.cyl(1.35,1.45,.9,Y.STONE2,0,.45,0,10),r.cyl(1.05,1.05,.05,3838136,0,.8,0,10),r.cyl(.09,.09,2.6,Y.WOOD,-1.2,1.3,0,6),r.cyl(.09,.09,2.6,Y.WOOD,1.2,1.3,0,6),r.add(new xe(.07,.07,2.6,6),Y.WOOD,0,2.5,0,0,0,Math.PI/2),r.add(new Mi(1.9,.9,4),10177850,0,3.05,0,0,Math.PI/4,0),s.colliders.push({x:t,z:e,r:1.7});let h=0,u=-27;r.box(9,5,7,Y.CREAM,h,2.5,u),r.box(9.5,.4,7.5,Y.STONE2,h,5.2,u),a.dome(2.4,3116981,h,5.4,u,.9,16),Nn(r,h,7.4,u,.6),r.arch(2,2.6,2760728,h,0,u+3.53),r.arch(2.4,2.8,Y.GOLD,h,0,u+3.5,0,.06),o.arch(1.1,1.5,Y.WARM,h-3,1.8,u+3.53),o.arch(1.1,1.5,Y.WARM,h+3,1.8,u+3.53),xi(n,"بيت الزكاة",h,6.1,u+4.2,{scale:1.15}),s.colliders.push({x:t+h,z:e+u,hw:4.7,hd:3.7,rot:0});let d=0,f=-20.6;r.box(3,.85,1.1,Y.WOOD,d,.42,f),r.box(3.2,.08,1.25,12159573,d,.88,f);for(let _=0;_<4;_++)r.sphere(.3,14272416,d-1.05+_*.7,1.16,f,1,1.05,1,8,6),r.torus(.12,.04,Y.GOLD,d-1.05+_*.7,1.43,f,Math.PI/2,8);s.colliders.push({x:t+d,z:e+f,hw:1.6,hd:.65,rot:0});let g=[15259056,14468250,15786692,13940874,15126438,15718840,14271136],x=[58,100,142,182,222,262,300],p=[];x.forEach((_,b)=>{let v=_*Math.PI/180,A=33+b%2*2.5,S=Math.sin(v)*A,y=-Math.cos(v)*A,M=Math.atan2(-S,-y),C=6.5+b%3,T=4.2+b%2*1.2,L=5.5+(b+1)%2;r.merge(wv(C,T,L,g[b],b%3===0),S,0,y,M);for(let R of[-C/4-.4,C/4+.4]){let[O,B]=ai(R,L/2+.05,M);o.add(new pe(.95,1.15,.1),Y.WARM,S+O,2.5,y+B,0,M,0)}s.colliders.push({x:t+S,z:e+y,hw:C/2+.2,hd:L/2+.2,rot:M});let[N,I]=ai(b%2?2.2:-2.2,L/2+2.4,M);p.push({x:t+S+N,z:e+y+I,yaw:M})});for(let _=0;_<5;_++){let b=_*1.26+.4;r.box(2.2,.04,1.4,[9182252,1858170,2976335,11035678,7023994][_],Math.cos(b)*8.5,.03,Math.sin(b)*8.5,b)}n.add(r.mesh(ne.flat),a.mesh(ne.smooth));let m=o.mesh(Di(1),!1);s.night(m.material,.35,2.6),n.add(m),s.scene.add(n),s.P.zakat={center:{x:t,z:e},house:{x:t+h,z:e+u+6.5},table:{x:t+d,z:e+f+1.6},tableC:{x:t+d,z:e+f},npcSpots:p},Ie.zakat={x:t,z:e+8}}function Cp(s){let{x:t,z:e,h:i}=it.sawm,n=new Wt;n.position.set(0,i,0);let r=new Ut,a=new Ut,o=new Ut,l=Ie.sawm,c={x:-50,z:166};for(let[x,p,m]of[[-88,142,Y.RED],[-70,127,3108789],[-45,143,4168266]]){r.cyl(3.6,3.6,1.7,m,x,.85,p,10);for(let A=0;A<10;A+=2){let S=A/10*Math.PI*2+.31;r.box(1.2,1.7,.08,15918796,x+Math.cos(S)*3.47,.85,p+Math.sin(S)*3.47,-S+Math.PI/2)}r.cone(4.1,3.2,15918796,x,3.3,p,10),r.sphere(.22,Y.GOLD,x,5,p);let _=Math.atan2(l.x-x,l.z-p),[b,v]=ai(0,3.5,_);r.add(new pe(1.5,1.6,.25),Y.DARK,x+b,.8,p+v,0,_,0),s.colliders.push({x,z:p,r:3.9})}let h=[16757575,8380576,8374527,16748472,16769146,13213951];for(let x=0;x<10;x++){let p=x/10*Math.PI*2+.2,m=l.x+Math.cos(p)*18.5,_=l.z+Math.sin(p)*18.5;r.cyl(.07,.1,3.8,Y.WOOD,m,1.9,_,6),r.add(new pe(.9,.06,.06),Y.WOOD,m,3.75,_,0,-p,0);let[b,v]=ai(.4,0,-p);r.cone(.17,.2,Y.GOLD,m+b,3.52,_+v,6),a.cyl(.14,.1,.3,h[x%h.length],m+b,3.28,_+v,6),s.colliders.push({x:m,z:_,r:.3})}let u=new Nt(new Pi(9,6.5).rotateX(-Math.PI/2),new ee({map:up(),roughness:.95}));u.position.set(c.x,.06,c.z),u.receiveShadow=!0,n.add(u),r.box(2.6,.38,1.3,Y.WOOD,c.x,.25,c.z),r.box(2.8,.06,1.45,12159573,c.x,.46,c.z),r.cyl(.36,.22,.16,15262416,c.x-.6,.57,c.z,10);for(let x=0;x<7;x++)r.sphere(.075,5911576,c.x-.6+Math.cos(x)*.16,.66+x%2*.05,c.z+Math.sin(x)*.16,1,.8,1.4,6,5);r.cyl(.11,.16,.42,9423080,c.x+.4,.7,c.z+.1,8),r.cyl(.05,.08,.14,9423080,c.x+.4,.97,c.z+.1,8);for(let[x,p]of[[.85,-.3],[.9,.35],[.1,-.4]])r.cyl(.07,.05,.13,15262416,c.x+x,.55,c.z+p,8);for(let[x,p,m]of[[-2.6,-1.6,13194557],[2.6,-1.6,3108789],[-2.6,1.6,4168266],[2.6,1.6,14259502],[0,2.3,9064368],[0,-2.3,13193082]])r.sphere(.5,m,c.x+x,.2,c.z+p,1,.4,1,10,6);s.colliders.push({x:c.x,z:c.z,hw:1.5,hd:.8,rot:0}),r.cyl(.1,.16,7,Y.WOOD,c.x+7,3.5,c.z+3,6),o.torus(.9,.17,16769146,c.x+7,8,c.z+3,0,18,Math.PI*1.35,.4,Math.PI*.85),o.sphere(.2,16769146,c.x+7.25,8.1,c.z+3.1,1,1,1,6,5),s.colliders.push({x:c.x+7,z:c.z+3,r:.35});let d={x:c.x-7,z:c.z-1};for(let x=0;x<8;x++){let p=x/8*6.283;r.sphere(.24,9077368,d.x+Math.cos(p)*.75,.1,d.z+Math.sin(p)*.75,1,.7,1,6,5)}for(let x=0;x<3;x++)r.add(new xe(.09,.09,1.1,6),5913118,d.x,.25,d.z,Math.PI/2.4,x*2.1,0);s.colliders.push({x:d.x,z:d.z,r:.95});for(let x=0;x<46;x++){let p=x/46*6.283+Math.sin(x*3.3)*.2,m=9.6+Math.sin(x*7.1)*1.4,_=it.pond.x+Math.cos(p)*m,b=it.pond.z+Math.sin(p)*m,v=.9+x*37%10/12;r.cyl(.02,.04,v,6265404,_,s.heightAt(_,b)-i+v/2,b,4)}xi(n,"واحة رمضان",l.x+20,4.6,l.z-6,{scale:1.1}),r.cyl(.09,.12,3.6,Y.WOOD,l.x+20,1.8,l.z-6,6),n.add(r.mesh(ne.flat));let f=a.mesh(Di(1),!1);s.night(f.material,.7,3),n.add(f);let g=o.mesh(Di(1),!1);s.night(g.material,.8,2.6),n.add(g),s.scene.add(n),s.updaters.push(()=>{if(s.near(d.x,d.z,90))for(let x=0;x<2;x++)s.particles.emit(d.x+(Math.random()-.5)*.5,i+.3,d.z+(Math.random()-.5)*.5,(Math.random()-.5)*.5,1.6+Math.random()*1.6,(Math.random()-.5)*.5,Math.random()<.5?16747050:16760906,.7+Math.random()*.5,.42,-.6)}),s.P.sawm={arena:{x:l.x,z:l.z},majlis:{x:c.x,z:c.z+2.6},majlisC:c,fire:d}}var Ja=[16766042,9425919,8380576,16753244,13213951,16748472];function Pp(s){let{x:t,z:e,h:i}=it.garden,n=new Wt;n.position.set(t,i,e);let r=new Ut,a=new Ut,o=new Nt(new Zi(16.5,64).rotateX(-Math.PI/2),new ee({map:Ec("#f3ecd9","#3a7bd5","#e2b04a","#b8944a",[7,7]),roughness:.6}));o.position.y=.06,o.receiveShadow=!0,n.add(o),r.torus(16.7,.22,Y.STONE2,0,.1,0,Math.PI/2,56);let l=["الإيمان بالله","الإيمان بالملائكة","الإيمان بالكتب","الإيمان بالرسل","الإيمان باليوم الآخر","الإيمان بالقدر"];Cc.forEach((d,f)=>{let g=Ie[d].angle,x=Math.sin(g)*27,p=Math.cos(g)*27,m=new Ut;m.box(1.2,5.6,1.2,Y.CREAM,-2.7,2.8,0),m.box(1.2,5.6,1.2,Y.CREAM,2.7,2.8,0),m.box(1.6,.5,1.6,Y.STONE2,-2.7,.25,0),m.box(1.6,.5,1.6,Y.STONE2,2.7,.25,0),m.box(1.5,.4,1.5,Ja[f],-2.7,5.8,0),m.box(1.5,.4,1.5,Ja[f],2.7,5.8,0),m.torus(2.7,.55,Y.CREAM2,0,6,0,0,18,Math.PI),m.torus(2.7,.2,Ja[f],0,6,.5,0,18,Math.PI),m.torus(2.7,.2,Ja[f],0,6,-.5,0,18,Math.PI),r.merge(m.geometry(),x,0,p,g),a.sphere(.4,Ja[f],x,9.4,p,1,1,1,8,6),xi(n,`${ot(f+1)} · ${l[f]}`,x,11,p,{scale:1.15});for(let b of[-2.7,2.7]){let[v,A]=ai(b,0,g);s.colliders.push({x:t+x+v,z:e+p+A,r:.9})}let _=g+Math.PI/6;r.add(new pe(3,.16,.8),Y.WOOD,Math.sin(_)*23,.55,Math.cos(_)*23,0,_,0),r.add(new pe(3,.5,.14),Y.WOOD,Math.sin(_)*23.4,.9,Math.cos(_)*23.4,0,_,0);for(let b of[-1.2,1.2]){let[v,A]=ai(b,0,_);r.box(.14,.55,.7,Y.DARK,Math.sin(_)*23+v,.27,Math.cos(_)*23+A,_)}s.colliders.push({x:t+Math.sin(_)*23,z:e+Math.cos(_)*23,hw:1.6,hd:.5,rot:_})});for(let d=0;d<12;d++){let f=d/12*Math.PI*2+.26,g=Math.sin(f)*31,x=Math.cos(f)*31;r.cyl(.09,.14,3.6,Y.DARK,g,1.8,x,6),r.cone(.34,.32,Y.DARK,g,4.2,x,6),a.sphere(.27,Y.WARM,g,3.82,x,1,1.15,1,8,6),s.colliders.push({x:t+g,z:e+x,r:.3})}let c=Math.atan2(it.plaza.x-t,it.plaza.z-e),h=new Ut;for(let d=0;d<72;d++){let f=d/72*Math.PI*2,x=Math.abs((f-c+Math.PI*3)%(Math.PI*2)-Math.PI)<.2;for(let p of Cc)Math.abs((f-Ie[p].angle+Math.PI*3)%(Math.PI*2)-Math.PI)<.14&&(x=!0);x||(h.add(new pe(3.3,1.15,1),d%2?4165443:4890444,Math.sin(f)*36.5,.55,Math.cos(f)*36.5,0,f,0),s.colliders.push({x:t+Math.sin(f)*36.5,z:e+Math.cos(f)*36.5,r:1.35}))}n.add(h.mesh(ne.flat)),xi(n,"حديقة الإيمان",Math.sin(c)*40,4.4,Math.cos(c)*40,{scale:1.2}),r.cyl(.1,.13,3.4,Y.WOOD,Math.sin(c)*40,1.7,Math.cos(c)*40,6),n.add(r.mesh(ne.flat));let u=a.mesh(Di(1),!1);s.night(u.material,.75,2.8),n.add(u),s.scene.add(n),s.P.garden={center:{x:t,z:e}}}function Ip(s){let t=new Wt,e=new Ut,i=[["قمة التوحيد",it.shahada],["قرية المسجد",it.salah],["سوق الخير",it.zakat],["واحة رمضان",it.sawm],["وادي المناسك",it.miqat],["حديقة الإيمان",it.garden]];for(let[n,r]of i){let a=Math.atan2(r.x-it.plaza.x,r.z-it.plaza.z),o=it.plaza.x+Math.sin(a+.09)*37,l=it.plaza.z+Math.cos(a+.09)*37,c=s.heightAt(o,l);e.cyl(.09,.13,3.2,Y.WOOD,o,c+1.6,l,6),xi(t,n,o,c+3.9,l,{scale:1}),s.colliders.push({x:o,z:l,r:.3})}t.add(e.mesh(ne.flat)),s.scene.add(t)}function Lp(s){let t=it.hajj.h,e=new Wt;e.position.y=t;let i=new Ut,n=new Ut,r=new Ut,a=new Ut,o=new Ut,l=it.kaaba,c=Math.PI/4,h=new Nt(new Zi(22.5,72).rotateX(-Math.PI/2),new ee({map:Pu([11,11]),roughness:.4}));h.position.set(l.x,.05,l.z),h.receiveShadow=!0,e.add(h),i.box(10,.5,10,14209732,l.x,.25,l.z,c);let u=new ee({map:Iu(!1),roughness:.85}),d=new ee({map:Iu(!0),roughness:.85}),f=new ee({color:1710620,roughness:.9}),g=new Nt(new pe(9,11,9),[d,u,f,f,u,u]);g.position.set(l.x,6,l.z),g.rotation.y=c,g.castShadow=g.receiveShadow=!0,e.add(g),s.colliders.push({x:l.x,z:l.z,hw:5.1,hd:5.1,rot:c});{let[I,R]=ai(0,-5,c);i.add(new pe(.36,.22,1.3),Y.GOLD,l.x+I,11.4,l.z+R,0,c,0)}n.sphere(.48,14342880,l.x+6.4,1.6,l.z,.5,1.3,1,12,10),n.sphere(.22,1052690,l.x+6.56,1.6,l.z,.5,1.2,1,10,8);for(let I=0;I<15;I++){let R=Math.PI*I/14,[O,B]=ai(4.5*Math.cos(R),-4.5-4.5*Math.sin(R),c);n.cyl(.62,.66,1.3,15987178,l.x+O,.65,l.z+B,10),s.colliders.push({x:l.x+O,z:l.z+B,r:.75}),(I===0||I===14)&&r.sphere(.2,Y.WARM,l.x+O,1.55,l.z+B,1,1,1,8,6)}{let[I,R]=ai(10.4,1.4,c),O=l.x+I,B=l.z+R;i.cyl(.62,.7,.5,Y.GOLD,O,.25,B,8),r.cyl(.46,.46,1.25,16769696,O,1.1,B,8);for(let k=0;k<8;k++){let tt=k/8*6.283;i.box(.05,1.3,.05,Y.GOLD,O+Math.cos(tt)*.5,1.1,B+Math.sin(tt)*.5)}n.dome(.6,Y.GOLD,O,1.72,B,1.1,10),Nn(i,O,2.3,B,.3),s.colliders.push({x:O,z:B,r:.75})}i.box(15.5,.04,.5,2976335,l.x+6.5+7.75,.085,l.z);for(let I=0;I<36;I++){let R=I*10%90;if(R<12||R>78)continue;let O=I*10*Math.PI/180,B=l.x+Math.sin(O)*26.2,k=l.z-Math.cos(O)*26.2;n.cyl(.45,.52,5.3,Y.WHITE,B,2.65,k,10),i.box(1.3,.36,1.3,Y.STONE,B,5.45,k,-O),i.box(1.2,.3,1.2,Y.STONE,B,.15,k,-O),r.sphere(.24,Y.WARM,l.x+Math.sin(O)*25.3,4.7,l.z-Math.cos(O)*25.3,1,1.2,1,8,6),s.colliders.push({x:B,z:k,r:.62})}o.add(new ga([[24.4,5.62],[27.9,5.62],[27.9,6.25],[24.4,6.25],[24.4,5.62]].map(I=>new st(I[0],I[1])),72),Y.WHITE,l.x,0,l.z);for(let I of[45,135,225,315]){let R=I*Math.PI/180,O=l.x+Math.sin(R)*32,B=l.z-Math.cos(R)*32;Ic(i,r,O,0,B,30,1.15,Y.GOLD),s.colliders.push({x:O,z:B,r:2})}let x=it.safa,p=it.marwa,m=new Nt(new Pi(9.5,p.z-x.z<0?x.z-p.z:p.z-x.z).rotateX(-Math.PI/2),new ee({map:Pu([2,14]),roughness:.4}));m.position.set(x.x,.05,(x.z+p.z)/2),m.receiveShadow=!0,e.add(m);let _=(I,R)=>{let O=Kn(Math.floor(I*7+R*13));for(let B=0;B<9;B++){let k=O()*6.283,tt=B===0?0:1.2+O()*2.6,V=B===0?3.8:1.4+O()*1.6;i.add(new Me(1,1),B%2?10128508:8746855,I+Math.cos(k)*tt,V*.32,R+Math.sin(k)*tt,O()*3,O()*3,0,V,V*.62,V)}s.colliders.push({x:I,z:R,r:4.5})};_(x.x,x.z+5.5),_(p.x,p.z-5.5),xi(e,"الصفا",x.x,6.6,x.z+5.5,{scale:1.5}),xi(e,"المروة",p.x,6.6,p.z-5.5,{scale:1.5});for(let I of[-30,-50])for(let R of[-5.1,5.1])i.cyl(.11,.13,3.3,Y.WHITE,x.x+R,1.65,I,8),a.box(.3,1.5,.3,3530874,x.x+R,2.6,I),s.colliders.push({x:x.x+R,z:I,r:.3});let b=it.miqat;for(let I of[-5.6,5.6])i.box(2.3,9,2.3,Y.CREAM2,b.x,4.5,b.z+I),i.box(2.7,.6,2.7,Y.STONE,b.x,.3,b.z+I),Nn(i,b.x,11.1,b.z+I,.8),r.sphere(.3,Y.WARM,b.x,5.2,b.z+I*.76,1,1.3,1,8,6),s.colliders.push({x:b.x,z:b.z+I,r:1.65});i.box(2.7,1.9,13.6,Y.CREAM,b.x,9.95,b.z),i.box(3,.3,14,Y.GOLD,b.x,11.05,b.z),i.torus(4.45,.42,Y.GOLD,b.x,4.55,b.z,0,18,Math.PI,Math.PI/2),xi(e,"الميقات",b.x,13.4,b.z,{scale:1.7});let v=new Ut;v.box(4.2,2,4.2,16250350,0,1,0),v.add(new Mi(3.25,1.7,4),16645368,0,2.85,0,0,Math.PI/4,0),v.box(1,1.5,.08,9080728,0,.75,2.12),v.sphere(.14,Y.GOLD,0,3.75,0,1,1,1,6,5);let A=[];for(let I=0;I<6;I++)for(let R=0;R<4;R++){let O=it.mina.x+(I-2.5)*7.6,B=it.mina.z+(R-1.5)*7.6;A.push({x:O,y:0,z:B,ry:0}),s.colliders.push({x:O,z:B,hw:2.2,hd:2.2,rot:0})}e.add(Dn(v.geometry(),ne.flat,A)),xi(e,"مِنى",it.mina.x,7.2,it.mina.z,{scale:1.6});let S=[{x:it.jamarat.x,z:it.jamarat.z,n:"جمرة العقبة (الكبرى)"},{x:it.jamarat.x+12,z:it.jamarat.z+3,n:"الجمرة الوسطى"},{x:it.jamarat.x+24,z:it.jamarat.z+6,n:"الجمرة الصغرى"}];for(let I of S)i.cyl(4.3,4.3,.12,12103840,I.x,.06,I.z,22),i.torus(4.3,.4,Y.STONE,I.x,.36,I.z,Math.PI/2,22),i.box(1.4,6.4,5.4,9405816,I.x,3.2,I.z),i.box(1.8,.4,5.8,8024164,I.x,6.6,I.z),xi(e,I.n,I.x,8.5,I.z,{scale:1.1}),s.colliders.push({x:I.x,z:I.z,r:4.75});let y=it.rahmah,M=y.h-t;i.box(1.3,5,1.3,Y.WHITE,y.x,M+2.5,y.z),i.box(1.7,.4,1.7,Y.STONE,y.x,M+.2,y.z),s.colliders.push({x:y.x,z:y.z,r:1});{let I=Kn(77);for(let R=0;R<26;R++){let O=I()*6.283,B=5+I()*13,k=y.x+Math.cos(O)*B,tt=y.z+Math.sin(O)*B,V=.6+I()*1.3;i.add(new Me(1,0),R%2?10128508:8746855,k,s.heightAt(k,tt)-t+V*.2,tt,I()*3,I()*3,0,V,V*.6,V)}}xi(e,"جبل الرحمة",y.x,M+7.4,y.z,{scale:1.3});let C={x:it.arafat.x+12,z:it.arafat.z+12};i.cyl(.12,.14,4.4,7829367,C.x-2,2.2,C.z,6),i.cyl(.12,.14,4.4,7829367,C.x+2,2.2,C.z,6),i.box(5.4,2,.2,15912762,C.x,4.6,C.z),xi(e,"عرفة",C.x,4.6,C.z+.3,{scale:1.5,plain:!0,color:"#1d1d1d",shadow:"rgba(255,255,255,.2)",size:60}),s.colliders.push({x:C.x-2,z:C.z,r:.3},{x:C.x+2,z:C.z,r:.3});let T=it.muzdalifah;i.cyl(.1,.13,3.6,Y.WOOD,T.x+9,1.8,T.z-9,6),xi(e,"مزدلفة",T.x+9,4.6,T.z-9,{scale:1.4}),s.colliders.push({x:T.x+9,z:T.z-9,r:.3});{let I=Kn(4242),R=[],O=[l,x,p,b,it.mina,it.jamarat,it.arafat,T,y];for(let B=0;B<4e3&&R.length<150;B++){let k=I()*6.283,tt=Math.sqrt(I())*100,V=it.hajj.x+Math.cos(k)*tt,J=it.hajj.z+Math.sin(k)*tt;if(O.some(Z=>Math.hypot(Z.x-V,Z.z-J)<30)||Ln(V,J)<6||gc(V,J,x.x,x.z,p.x,p.z)<9)continue;let nt=s.heightAt(V,J);if(nt<1)continue;let St=.3+I()*I()*2.2,Ft=.55+I()*.2;R.push({x:V,y:nt-t+St*.15,z:J,rx:I()*3,ry:I()*6,sx:St,sy:St*.6,sz:St*(.8+I()*.5),color:new et(Ft,Ft*.9,Ft*.78).getHex()}),St>1.3&&s.colliders.push({x:V,z:J,r:St*.8})}for(let B=0;B<120;B++){let k=I()*6.283,tt=Math.sqrt(I())*15,V=.06+I()*.1;R.push({x:T.x+Math.cos(k)*tt,y:V*.3,z:T.z+Math.sin(k)*tt,rx:I()*3,ry:I()*6,sx:V,sy:V*.7,sz:V,color:10129544})}e.add(Dn(new Me(1,0),new ee({color:16777215,roughness:.95,flatShading:!0}),R))}e.add(i.mesh(ne.flat),n.mesh(ne.smooth),o.mesh(ne.double));let L=r.mesh(Di(1),!1);s.night(L.material,.4,2.8),e.add(L);let N=a.mesh(Di(1),!1);s.night(N.material,1.3,2.8),e.add(N),s.scene.add(e),s.P.hajj={kaaba:l,tawafStart:{x:l.x+13,z:l.z},miqat:{x:b.x-5,z:b.z},safa:{x:x.x,z:x.z-1.5},marwa:{x:p.x,z:p.z+1.5},mina:{x:it.mina.x,z:it.mina.z},arafat:{x:it.arafat.x,z:it.arafat.z},muzdalifah:{x:T.x,z:T.z},jamarat:S[0],throwSpot:{x:S[0].x-11,z:S[0].z}},Ie.hajj={x:b.x+9,z:b.z}}var Lc=class{constructor(t,e,i,n,r=()=>{}){this.scene=t,this.sky=e,this.particles=i,this.colliders=[],this.platforms=[],this.nightMats=[],this.updaters=[],this.P={},this.focus=new D,this.heightAt=ti,gp(),r(.2),this.terrain=_p(),t.add(this.terrain),r(.4),this.water=yp(e.U),t.add(this.water),this.monument=Ep(this),this.peak=Tp(this),Ap(this),Rp(this),Cp(this),Pp(this),r(.55),Lp(this),Ip(this),r(.65),this.vegetation=wp(this,n.veg),t.add(this.vegetation),r(.85);for(let a of this.colliders)a.br=a.hw!==void 0?Math.hypot(a.hw,a.hd):a.r;this.mapCanvas=vp(320),r(.95)}night(t,e,i){this.nightMats.push({mat:t,day:e,night:i})}near(t,e,i){return Math.abs(this.focus.x-t)<i&&Math.abs(this.focus.z-e)<i}groundAt(t,e){let i=ti(t,e);for(let n of this.platforms)n.y>i&&Math.hypot(t-n.x,e-n.z)<n.r&&(i=n.y);return i}resolve(t,e,i,n=null){for(let r=0;r<2;r++){let a=n?[this.colliders,n]:[this.colliders];for(let o of a)for(let l of o){let c=t-l.x,h=e-l.z,u=(l.br??l.r??3)+i;if(!(c>u||c<-u||h>u||h<-u))if(l.hw===void 0){let d=Math.hypot(c,h),f=l.r+i;d<f&&d>1e-4&&(t=l.x+c/d*f,e=l.z+h/d*f)}else{let d=Math.cos(l.rot||0),f=Math.sin(l.rot||0),g=c*d-h*f,x=c*f+h*d,p=he(g,-l.hw,l.hw),m=he(x,-l.hd,l.hd),_=g-p,b=x-m,v=Math.hypot(_,b);if(v<i){if(v>1e-4)g=p+_/v*i,x=m+b/v*i;else{let A=l.hw-Math.abs(g),S=l.hd-Math.abs(x);A<S?g=Math.sign(g||1)*(l.hw+i):x=Math.sign(x||1)*(l.hd+i)}t=l.x+g*d+x*f,e=l.z-g*f+x*d}}}}return[t,e]}update(t,e){let i=this.sky.night;for(let n of this.nightMats)n.mat.color.setScalar(_e(n.day,n.night,i));for(let n of this.updaters)n(t,e);this.monument.update(t,e),this.peak.update(t,e)}};var Dc={fwd:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},Ev={jump:["Space"],interact:["KeyE","Enter","NumpadEnter"],map:["KeyM"],pause:["Escape","KeyP"],journal:["KeyJ"]},Nc=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.virtual=new Set,this.moveX=0,this.moveY=0,this.lookX=0,this.lookY=0,this.zoom=0,this.sprint=!1,this.sprintToggle=!1,this.lastLook=-10,this.time=0,this.isTouch=!1,this.joy={id:null,ox:0,oy:0,x:0,y:0},this.look={id:null,lx:0,ly:0},this.mouseDown=!1,this.onTouchMode=null,this.onJoy=null,window.addEventListener("keydown",i=>{let n=i.target&&i.target.tagName;n==="INPUT"||n==="TEXTAREA"||(this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault())}),window.addEventListener("keyup",i=>this.keys.delete(i.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=!1,this.joy.id=null,this.look.id=null}),t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>{i.pointerType==="touch"?(this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode()),i.clientX<window.innerWidth*.42&&this.joy.id===null?(this.joy.id=i.pointerId,this.joy.ox=i.clientX,this.joy.oy=i.clientY,this.joy.x=0,this.joy.y=0,this.onJoy&&this.onJoy(!0,i.clientX,i.clientY,0,0)):this.look.id===null&&(this.look.id=i.pointerId,this.look.lx=i.clientX,this.look.ly=i.clientY)):(this.mouseDown=!0,this.look.lx=i.clientX,this.look.ly=i.clientY);try{t.setPointerCapture(i.pointerId)}catch{}}),t.addEventListener("pointermove",i=>{if(i.pointerType==="touch")if(i.pointerId===this.joy.id){let n=he((i.clientX-this.joy.ox)/55,-1,1),r=he((this.joy.oy-i.clientY)/55,-1,1);this.joy.x=n,this.joy.y=r,this.onJoy&&this.onJoy(!0,this.joy.ox,this.joy.oy,n,r)}else i.pointerId===this.look.id&&(this.lookX+=(i.clientX-this.look.lx)*.006,this.lookY+=(i.clientY-this.look.ly)*.0045,this.look.lx=i.clientX,this.look.ly=i.clientY,this.lastLook=this.time);else this.mouseDown&&(this.lookX+=(i.clientX-this.look.lx)*.0048,this.lookY+=(i.clientY-this.look.ly)*.0036,this.look.lx=i.clientX,this.look.ly=i.clientY,this.lastLook=this.time)});let e=i=>{i.pointerId===this.joy.id&&(this.joy.id=null,this.joy.x=this.joy.y=0,this.onJoy&&this.onJoy(!1)),i.pointerId===this.look.id&&(this.look.id=null),i.pointerType!=="touch"&&(this.mouseDown=!1)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",i=>{this.zoom+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1})}press(t){this.virtual.add(t)}take(t){if(this.virtual.has(t))return!0;for(let e of Ev[t]||[])if(this.pressed.has(e))return!0;return!1}frame(t){this.time+=t;let e=this.keys,i=l=>l.some(c=>e.has(c)),n=(i(Dc.right)?1:0)-(i(Dc.left)?1:0),r=(i(Dc.fwd)?1:0)-(i(Dc.back)?1:0);n+=this.joy.x,r+=this.joy.y,this.sprint=e.has("ShiftLeft")||e.has("ShiftRight")||this.sprintToggle||Math.hypot(this.joy.x,this.joy.y)>.93;let a=navigator.getGamepads?navigator.getGamepads():[];for(let l of a){if(!l)continue;let c=f=>Math.abs(f)<.18?0:f;n+=c(l.axes[0]||0),r-=c(l.axes[1]||0);let h=c(l.axes[2]||0),u=c(l.axes[3]||0);(h||u)&&(this.lookX+=h*t*2.4,this.lookY+=u*t*1.6,this.lastLook=this.time);let d=f=>l.buttons[f]&&l.buttons[f].pressed;this._pad=this._pad||{};for(let[f,g]of[[0,"jump"],[2,"interact"],[1,"interact"],[9,"pause"],[3,"map"]])d(f)&&!this._pad[f]&&this.virtual.add(g),this._pad[f]=d(f);(d(7)||d(5))&&(this.sprint=!0);break}let o=Math.hypot(n,r);o>1&&(n/=o,r/=o),this.moveX=n,this.moveY=r}endFrame(){this.pressed.clear(),this.virtual.clear(),this.lookX=0,this.lookY=0,this.zoom=0}};var Uc=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.7,this._bird=2,this._cricket=0;let t=e=>(...i)=>{this.ctx&&this.enabled&&e(...i)};this.sfx={ui:t(()=>this.tone(540,.05,"triangle",.1)),collect:t(()=>{this.tone(820,.1,"sine",.16,1250),this.noise(.12,{freq:6500,q:2,vol:.05})}),correct:t(()=>{this.tone(620,.1,"sine",.16),this.tone(930,.18,"sine",.16,null,.09),this.noise(.25,{freq:7e3,q:1.5,vol:.04,delay:.08})}),wrong:t(()=>this.tone(210,.24,"triangle",.16,150)),step:t(e=>this.noise(.055,{freq:e?1400:380+Math.random()*240,q:.8,vol:e?.07:.05,type:e?"bandpass":"lowpass"})),jump:t(()=>this.tone(300,.14,"sine",.09,520)),land:t(()=>this.noise(.09,{freq:180,q:.7,vol:.14,type:"lowpass"})),whoosh:t(()=>this.noise(.6,{freq:500,q:1.2,vol:.09,sweep:2600})),throw:t(()=>this.noise(.22,{freq:900,q:1.4,vol:.09,sweep:2400})),hit:t(()=>{this.noise(.1,{freq:300,q:1,vol:.2,type:"lowpass"}),this.tone(140,.12,"sine",.14,90)}),win:t(()=>{for(let e=0;e<7;e++)this.noise(.22,{freq:3e3+e*900,q:6,vol:.06,delay:e*.09});this.tone(520,.14,"sine",.12),this.tone(780,.14,"sine",.12,null,.14),this.tone(1040,.3,"sine",.12,null,.28)}),pop:t(()=>this.tone(700,.06,"sine",.1,420)),tick:t(()=>this.tone(1e3,.03,"square",.03))}}init(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2;this.nbuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.nbuf.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1;this.wind=this._loop(320,.5,"lowpass"),this.sea=this._loop(520,.6,"lowpass"),this.rainN=this._loop(3200,.7,"bandpass")}_loop(t,e,i){let n=this.ctx.createBufferSource();n.buffer=this.nbuf,n.loop=!0;let r=this.ctx.createBiquadFilter();r.type=i,r.frequency.value=t,r.Q.value=e;let a=this.ctx.createGain();return a.gain.value=0,n.connect(r).connect(a).connect(this.master),n.start(),{g:a,f:r}}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05)}tone(t,e,i="sine",n=.15,r=null,a=0){let o=this.ctx,l=o.currentTime+a,c=o.createOscillator(),h=o.createGain();c.type=i,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+e),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.012),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(this.master),c.start(l),c.stop(l+e+.03)}noise(t,{freq:e=1e3,q:i=1,vol:n=.1,type:r="bandpass",delay:a=0,sweep:o=null}={}){let l=this.ctx,c=l.currentTime+a,h=l.createBufferSource();h.buffer=this.nbuf,h.loop=!0;let u=l.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(e,c),u.Q.value=i,o&&u.frequency.exponentialRampToValueAtTime(o,c+t);let d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(n,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u).connect(d).connect(this.master),h.start(c,Math.random()),h.stop(c+t+.03)}update(t,e){if(!this.ctx||!this.enabled)return;let i=this.ctx.currentTime;if(this.wind.g.gain.setTargetAtTime(.02+.015*Math.sin(i*.3)+e.high*.03,i,.5),this.sea.g.gain.setTargetAtTime(e.coast*(.05+.03*Math.sin(i*.7)),i,.4),this.rainN.g.gain.setTargetAtTime(e.rain*.09,i,.4),e.rain<.3){if(e.night<.5){if(this._bird-=t,this._bird<=0){this._bird=2.5+Math.random()*6;let n=2400+Math.random()*1600,r=2+Math.floor(Math.random()*3);for(let a=0;a<r;a++)this.tone(n+Math.random()*300,.07,"sine",.025,n*(1.15+Math.random()*.3),a*.11)}}else if(this._cricket-=t,this._cricket<=0){this._cricket=.9+Math.random()*1.6;for(let n=0;n<4;n++)this.tone(4300,.03,"sine",.012,null,n*.055)}}}};var ws=(s,t=.85)=>new ee({color:s,roughness:t}),Ei=(s,t)=>{let e=new Nt(s,t);return e.castShadow=!0,e};function Er(s={}){let t=s.kind||"boy",e=t==="girl"||t==="woman",i=s.scale||(t==="man"||t==="woman"?1.28:1),n=ws(s.skin??14921859,.7),r=ws(s.cloth??(e?12092630:15920866),.9),a=ws(s.cloth2??(e?16643071:16777215),.9),o=ws(3811872,.8),l=ws(16514040,.95),c=ws(s.shoe??7031343,.8),h=new Wt,u=new Wt;h.add(u);let d=Ei(new xe(.17,.285,.8,14),r);d.position.y=.6;let f=Ei(new De(.2,14,8),r);f.scale.set(1.14,.55,.86),f.position.y=.99;let g=Ei(new xe(.07,.075,.1,8),n);g.position.y=1.06,u.add(d,f,g);let x=new Wt;x.position.y=1.25,u.add(x);let p=Ei(new De(.2,18,14),n);x.add(p);let m=null,_=null;if(e){let M=Ei(new De(.236,18,14),a);M.position.set(0,.012,-.04),M.scale.set(1,1.05,1.02),p.position.z=.04,p.scale.setScalar(.92);let C=Ei(new xe(.15,.3,.42,14),a);C.position.y=1,u.add(C),x.add(M)}else{_=Ei(new De(.207,16,10,0,Math.PI*2,0,Math.PI*.52),o),_.position.set(0,.008,-.014),m=new Wt;let M=Ei(new xe(.16,.192,.11,16),a);M.position.y=.15;let C=Ei(new xe(.195,.195,.028,16),ws(s.trim??14264634,.5));if(C.position.y=.105,m.add(M,C),x.add(_,m),t==="man"){let T=Ei(new De(.13,10,8,0,Math.PI*2,Math.PI*.5,Math.PI*.5),o);T.position.set(0,-.06,.06),T.scale.set(1.1,.9,.9),x.add(T)}}let b=[],v=[];for(let M of[-1,1]){let C=new Wt;C.position.set(M*.238,.97,0),C.rotation.z=M*.12;let T=Ei(new nr(.056,.3,4,8),r);T.position.y=-.2;let L=Ei(new De(.062,8,6),n);L.position.y=-.43,C.add(T,L),u.add(C),b.push(C),C.userData={side:M,arm:T};let N=new Wt;N.position.set(M*.095,.33,0);let I=Ei(new nr(.062,.15,4,8),e?r:l);I.position.y=-.13;let R=Ei(new pe(.115,.075,.22),c);R.position.set(0,-.29,.045),N.add(I,R),u.add(N),v.push(N)}let A=new Wt;A.position.set(0,.8,.38),u.add(A),h.scale.setScalar(i);let S={phase:0,amp:0,t:Math.random()*10,carry:null,outfit:"normal",air:0};return{group:h,kind:t,scale:i,headG:x,update(M,C=0,T=!0){S.t+=M;let L=C>.4;S.amp=gi(S.amp,L?he(C/7,.45,1.3):0,10,M),L&&(S.phase+=M*(4.2+C*1.2)),S.air=gi(S.air,T?0:1,12,M);let N=Math.sin(S.phase)*.8*S.amp;v[0].rotation.x=N*(1-S.air)+.5*S.air,v[1].rotation.x=-N*(1-S.air)-.35*S.air;for(let I of b){let R=I.userData.side,O=S.carry?-1.2:(R<0?-N:N)*.8*(1-S.air);I.rotation.x=gi(I.rotation.x,O,16,M);let B=R*(.12+S.air*1+(S.carry?-.22:0));I.rotation.z=gi(I.rotation.z,B,12,M)}u.position.y=Math.abs(Math.sin(S.phase))*.05*S.amp+Math.sin(S.t*2.1)*.006,u.rotation.x=.07*S.amp+(C>8.5?.09:0),x.rotation.y=L?0:Math.sin(S.t*.6)*.12,d.scale.x=d.scale.z=1+Math.sin(S.t*2.1)*.01},setOutfit(M){S.outfit=M;let C=M==="ihram";e||(d.material=C?l:r,f.material=C?l:r,b.forEach(T=>T.userData.arm.material=C?l:r),m&&(m.visible=!C))},setCarry(M){S.carry&&A.remove(S.carry),S.carry=M||null,M&&(M.position.set(0,0,0),M.rotation.set(0,0,0),A.add(M))},get carrying(){return S.carry}}}function Dp(){let s=new Wt,t=new Ut;t.cyl(.05,.19,.16,14264634,0,.26,0,6),t.cyl(.2,.2,.03,12092970,0,.17,0,6),t.cyl(.2,.14,.05,12092970,0,-.17,0,6),t.cone(.09,.12,14264634,0,-.25,0,6),t.torus(.07,.014,14264634,0,.4,0,0,12);for(let o=0;o<6;o++){let l=o/6*Math.PI*2;t.box(.02,.32,.02,12092970,Math.cos(l)*.17,0,Math.sin(l)*.17)}let e=t.mesh(ne.gold,!1),i=new Ut;i.cyl(.16,.16,.3,16766346,0,0,0,6);let n=i.mesh(Di(2.2),!1),r=new on(new $i({map:bs(),color:16762726,transparent:!0,blending:ri,depthWrite:!1,fog:!1}));r.scale.setScalar(1.7);let a=new wa(16767392,0,16,1.6);return s.add(e,n,r,a),s.userData={glass:n,halo:r,light:a},s}var dn=new D,Ka=new D,Fc=class{constructor(t,e="boy"){this.game=t,this.pos=new D(0,0,30),this.vel=new D,this.yaw=Math.PI,this.onGround=!0,this.camYaw=0,this.camPitch=.3,this.camDist=7.5,this._distK=1,this.camTarget=new D,this.frozen=!1,this.speed=0,this.speedMul=1,this.stepT=0,this.visY=0,this.extraColliders=null,this.setKind(e)}setKind(t){this.char&&this.game.scene.remove(this.char.group),this.kind=t,this.char=Er({kind:t}),this.game.scene.add(this.char.group)}teleport(t,e,i){let n=this.game.world.groundAt(t,e);this.pos.set(t,n,e),this.vel.set(0,0,0),this.visY=n,this.onGround=!0,i!==void 0&&(this.yaw=i,this.camYaw=i+Math.PI),this.updateCamera(0,this.game.camera,!0),this.syncVisual(0)}update(t,e,i){let n=this.game.world,r=this.game.audio,a=this.pos,o=this.vel,l=0,c=0,h=!1,u=!1;i&&!this.frozen&&(l=e.moveX,c=e.moveY,h=e.take("jump"),u=e.sprint,this.camYaw-=e.lookX,this.camPitch=he(this.camPitch+e.lookY,-.2,1.25),this.camDist=he(this.camDist+e.zoom*.9,3.5,17),e.time-e.lastLook>1&&Math.abs(l)>.1&&(this.camYaw-=l*1.15*t));let d=-Math.sin(this.camYaw),f=-Math.cos(this.camYaw),g=Math.cos(this.camYaw),x=-Math.sin(this.camYaw),p=d*c+g*l,m=f*c+x*l,_=Math.hypot(p,m),b=(u?11.5:7.2)*this.speedMul,v=this.onGround?12:4;o.x=gi(o.x,p*b,v,t),o.z=gi(o.z,m*b,v,t),_>.05&&(this.yaw=sp(this.yaw,Math.atan2(p,m),1-Math.exp(-12*t))),h&&this.onGround&&(o.y=8.8,this.onGround=!1,r.sfx.jump());let A=a.x+o.x*t,S=a.z+o.z*t;[A,S]=n.resolve(A,S,.38,this.extraColliders);let y=-.85;n.heightAt(A,S)<y&&(n.heightAt(A,a.z)>=y?S=a.z:n.heightAt(a.x,S)>=y?A=a.x:(A=a.x,S=a.z)),a.x=A,a.z=S;let M=n.groundAt(a.x,a.z);this.onGround&&(a.y-M>.75?this.onGround=!1:(a.y=M,o.y=0)),this.onGround||(o.y-=25*t,a.y+=o.y*t,a.y<=M&&(a.y=M,o.y=0,this.onGround=!0,r.sfx.land())),this.speed=Math.hypot(o.x,o.z),this.onGround&&this.speed>1&&(this.stepT+=this.speed*t,this.stepT>2.3&&(this.stepT=0,r.sfx.step(n.heightAt(a.x,a.z)<.05))),this.syncVisual(t)}syncVisual(t){this.visY=this.onGround&&t>0?gi(this.visY,this.pos.y,22,t):this.pos.y;let e=this.char.group;e.position.set(this.pos.x,this.visY,this.pos.z),e.rotation.y=this.yaw,this.char.update(t,this.speed,this.onGround)}updateCamera(t,e,i=!1){let n=this.game.world;dn.set(this.pos.x,this.visY+1.45*this.char.scale,this.pos.z),i?this.camTarget.copy(dn):this.camTarget.lerp(dn,1-Math.exp(-14*t));let r=Math.cos(this.camPitch);Ka.set(Math.sin(this.camYaw)*r,Math.sin(this.camPitch),Math.cos(this.camYaw)*r);let a=1;for(let l of[.3,.55,.8,1]){let c=this.camTarget.x+Ka.x*this.camDist*l,h=this.camTarget.z+Ka.z*this.camDist*l;if(this.camTarget.y+Ka.y*this.camDist*l<Math.max(n.groundAt(c,h),0)+.45){a=Math.max(.22,l-.25);break}}this._distK=i?a:gi(this._distK,a,a<this._distK?14:3,t),dn.copy(this.camTarget).addScaledVector(Ka,this.camDist*this._distK);let o=Math.max(n.groundAt(dn.x,dn.z),0)+.6;dn.y<o&&(dn.y=o),i?e.position.copy(dn):e.position.lerp(dn,1-Math.exp(-12*t)),e.lookAt(this.camTarget)}};var ue=["shahada","salah","zakat","sawm","hajj","allah","malaika","kutub","rusul","akhirah","qadar"],ye={shahada:{kind:"islam",title:"الشهادتان",full:"الركن الأول: الشهادتان",place:"قمة التوحيد",icon:"☝️",thr:[1,4]},salah:{kind:"islam",title:"الصلاة",full:"الركن الثاني: إقام الصلاة",place:"قرية المسجد",icon:"🕌",thr:[2,5]},zakat:{kind:"islam",title:"الزكاة",full:"الركن الثالث: إيتاء الزكاة",place:"سوق الخير",icon:"🤲",thr:[1,4]},sawm:{kind:"islam",title:"الصوم",full:"الركن الرابع: صوم رمضان",place:"واحة رمضان",icon:"🌙",thr:[2,5]},hajj:{kind:"islam",title:"الحج",full:"الركن الخامس: حج البيت",place:"وادي المناسك",icon:"🕋",thr:[2,5]},allah:{kind:"iman",title:"الإيمان بالله",full:"الركن الأول: الإيمان بالله",place:"حديقة الإيمان",icon:"✨",thr:[2,5]},malaika:{kind:"iman",title:"الإيمان بالملائكة",full:"الركن الثاني: الإيمان بالملائكة",place:"حديقة الإيمان",icon:"💡",thr:[2,5]},kutub:{kind:"iman",title:"الإيمان بالكتب",full:"الركن الثالث: الإيمان بالكتب",place:"حديقة الإيمان",icon:"📖",thr:[2,5]},rusul:{kind:"iman",title:"الإيمان بالرسل",full:"الركن الرابع: الإيمان بالرسل",place:"حديقة الإيمان",icon:"🧭",thr:[2,5]},akhirah:{kind:"iman",title:"الإيمان باليوم الآخر",full:"الركن الخامس: الإيمان باليوم الآخر",place:"حديقة الإيمان",icon:"⚖️",thr:[2,5]},qadar:{kind:"iman",title:"الإيمان بالقدر",full:"الركن السادس: الإيمان بالقدر خيره وشره",place:"حديقة الإيمان",icon:"🌦️",thr:[1,4]}},Du={shahada:["أول أركان الإسلام: شهادة أن لا إله إلا الله وأن محمدًا رسول الله.","معنى «لا إله إلا الله»: لا معبودَ بحقٍّ إلا الله.","نحبّ رسول الله ﷺ ونطيعه ونتّبع سنّته."],salah:["الصلوات المفروضة خمس: الفجر، الظهر، العصر، المغرب، العشاء.","ركعاتها بالترتيب: ٢، ٤، ٤، ٣، ٤.","نتوضأ قبل الصلاة ونستقبل القبلة."],zakat:["الزكاة حقٌّ في مال الغني يُعطى للفقراء والمحتاجين.","مقدارها ربع العُشر (٢٫٥٪) إذا بلغ المال النِّصاب ومرّ عليه عام.","الزكاة تطهّر المال وتنشر المحبة بين الناس."],sawm:["نصوم شهر رمضان من طلوع الفجر إلى غروب الشمس.","السَّحور بركة، ونفطر على تمرٍ وماء.","الصائم يحفظ لسانه ويُكثر من فعل الخير."],hajj:["الحج إلى بيت الله الحرام مرةً في العمر على من استطاع.","من مناسكه: الإحرام، الطواف، السعي، الوقوف بعرفة، المبيت بمزدلفة، رمي الجمرات.","قال النبي ﷺ: «الحجُّ عرفة»."],allah:["الله ربُّنا وخالقُنا ورازقُنا، وهو وحده المستحق للعبادة.","لله الأسماء الحسنى، منها: الخالق، الرزّاق، السميع، البصير، الرحيم، العليم.","نتفكّر في خلق الله فنزداد إيمانًا."],malaika:["الملائكة خلقٌ من نور، يطيعون الله ولا يعصونه.","جبريل موكَّل بالوحي، وميكائيل بالمطر، وإسرافيل بالنفخ في الصور.","الكرام الكاتبون يكتبون أعمالنا."],kutub:["أنزل الله كتبًا على رسله لهداية الناس.","التوراة على موسى، والزبور على داود، والإنجيل على عيسى، والقرآن على محمد، عليهم الصلاة والسلام.","القرآن آخر الكتب، وقد حفظه الله من التحريف."],rusul:["أرسل الله الرسل ليدعوا الناس إلى عبادته وحده.","أول الرسل نوح، وخاتمهم محمد، عليهم الصلاة والسلام.","نؤمن بجميع الرسل ونحبّهم."],akhirah:["يوم القيامة يبعث الله الناس ويحاسبهم على أعمالهم.","توزن الأعمال بالميزان.","جزاء المؤمنين الجنة برحمة الله."],qadar:["كل شيء بعلم الله وكتابته ومشيئته وخلقه.","نشكر الله على الخير ونصبر على ما نكره.","نأخذ بالأسباب ونتوكّل على الله."]},bt={welcome:["السلام عليكم ورحمة الله وبركاته يا {name}! أنا «سِراج»، فانوسك المضيء ورفيقك في رحلة النور.","هذه «ساحة الأركان». قال النبي ﷺ:",{hadith:"بُنِيَ الإسلامُ على خمسٍ: شهادةِ أن لا إله إلا الله وأنَّ محمدًا رسولُ الله، وإقامِ الصلاة، وإيتاءِ الزكاة، والحجِّ، وصومِ رمضان",ref:"متفق عليه"},"انظر إلى الأعمدة الخمسة: إنها مطفأة! كلما تعلّمتَ ركنًا من أركان الإسلام أضاء عموده.","وبعدها نزور «حديقة الإيمان» لنتعلّم أركان الإيمان الستة ونضيء مصابيحها.","هيا بنا! اتبع نوري إلى «قمة التوحيد» في الشمال لنبدأ بالركن الأول."],controls:"تحرّك بالأسهم أو WASD • اركض بـ Shift • اقفز بالمسافة • اسحب الفأرة لتدير الكاميرا • اضغط E للتفاعل",controlsTouch:"حرّك العصا يسار الشاشة للمشي • اسحب يمين الشاشة لتدير الكاميرا • استخدم الأزرار للقفز والتفاعل",shahada:{intro:["هذه «قمة التوحيد». هنا نتعلّم الركن الأول من أركان الإسلام: الشهادتان.","نقول: «أشهدُ أنْ لا إلهَ إلا اللهُ، وأشهدُ أنَّ محمدًا رسولُ الله».","«لا إله إلا الله» معناها: لا معبودَ بحقٍّ إلا الله؛ فنحن لا نعبد إلا الله وحده لا شريك له.","«محمدٌ رسولُ الله» معناها: أنّ الله أرسله إلينا؛ فنحبّه ونطيعه ونصدّقه ونتّبع سنّته ﷺ.","اجمع أنوار الشهادة بالترتيب الصحيح لتضيء المنارة!"],parts:["أشهدُ","أنْ لا إلهَ إلا اللهُ","وأشهدُ","أنَّ محمدًا رسولُ اللهِ"],after:["ما شاء الله! أضاءت منارة التوحيد.",{ayah:"فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ",ref:"سورة محمد: ١٩"},"الشهادتان مفتاح الإسلام، وهما أعظم كلمتين يقولهما المسلم. والآن: اختبار قصير!"]},salah:{intro:["أهلًا بك في «قرية المسجد». هنا نتعلّم الركن الثاني: الصلاة.","الصلاة عمود الدين، وهي صلةٌ بين العبد وربّه، وأول ما يُحاسَب عليه العبد يوم القيامة.","فرض الله علينا خمس صلوات في اليوم والليلة: الفجر، والظهر، والعصر، والمغرب، والعشاء.","وقبل الصلاة نتوضأ، ثم نستقبل القبلة: الكعبة المشرّفة في مكة. هيا إلى نافورة الوضوء!"],wuduIntro:["الوضوء شرطٌ لصحة الصلاة. رتّب خطواته كما علّمنا رسول الله ﷺ."],wudu:[["غسل الوجه","غسل اليدين إلى المرفقين","مسح الرأس","غسل الرجلين إلى الكعبين"],["غسل الكفّين","المضمضة والاستنشاق","غسل الوجه","غسل اليدين إلى المرفقين","مسح الرأس مع الأذنين","غسل الرجلين إلى الكعبين"],["النيّة والتسمية","غسل الكفّين ثلاثًا","المضمضة والاستنشاق","غسل الوجه","غسل اليدين إلى المرفقين","مسح الرأس مع الأذنين","غسل الرجلين إلى الكعبين"]],timesIntro:["أحسنت! الآن نحن على طهارة.","لكل صلاة وقتٌ محدَّد. راقب السماء جيدًا، ثم اركض إلى بوابة الصلاة التي حان وقتها!"],prayers:[{name:"الفجر",time:5.2,rak:2,clue:"طلع الفجر وظهر أول النور قبل شروق الشمس… أيُّ صلاةٍ حان وقتها؟"},{name:"الظهر",time:12.6,rak:4,clue:"الشمس تجاوزت وسط السماء وبدأت تميل… أيُّ صلاةٍ حان وقتها؟"},{name:"العصر",time:15.8,rak:4,clue:"طال ظلُّ الأشياء والشمس تتجه نحو الغروب… أيُّ صلاةٍ حان وقتها؟"},{name:"المغرب",time:18.25,rak:3,clue:"غربت الشمس تمامًا واحمرّ الأفق… أيُّ صلاةٍ حان وقتها؟"},{name:"العشاء",time:20.3,rak:4,clue:"غاب الشفق الأحمر وأظلم الليل وظهرت النجوم… أيُّ صلاةٍ حان وقتها؟"}],rakOpts:{2:["ركعتان","ثلاث ركعات","أربع ركعات"],3:["ثلاث ركعات","ركعتان","أربع ركعات"],4:["أربع ركعات","ركعتان","ثلاث ركعات"]},after:["بارك الله فيك! عرفتَ أوقات الصلوات الخمس وعدد ركعاتها.",{ayah:"إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",ref:"سورة النساء: ١٠٣"},"حافظ على صلاتك في وقتها دائمًا. والآن: الاختبار!"]},zakat:{intro:["مرحبًا بك في «سوق الخير». هنا نتعلّم الركن الثالث: الزكاة.","الزكاة حقٌّ معلوم في مال الغني، يُعطى للفقراء والمحتاجين.","إذا بلغ المال النِّصاب ومرّ عليه عامٌ كامل، نُخرج منه ربع العُشر: أي من كل أربعين واحدًا (٢٫٥٪).","الزكاة تطهّر المال وتزيد البركة وتنشر المحبة بين الناس. هيا إلى «بيت الزكاة»!"],calcIntro:["لنحسب الزكاة أولًا. تذكّر: من كل أربعين نُخرج واحدًا."],calc:[[{q:"عند تاجرٍ ٤٠ دينارًا ذهبيًّا مرّ عليها عام. كم دينارًا يُخرج زكاةً؟",a:["دينار واحد","٤ دنانير","١٠ دنانير"],e:"من كل أربعين واحد: ٤٠ ÷ ٤٠ = ١."},{q:"وإذا كان عنده ٨٠ دينارًا مرّ عليها عام؟",a:["ديناران","٨ دنانير","دينار واحد"],e:"٨٠ ÷ ٤٠ = ٢."}],[{q:"عند تاجرٍ ٢٠٠ دينارٍ ذهبيٍّ مرّ عليها عام. كم يُخرج زكاةً (من كل ٤٠ واحد)؟",a:["٥ دنانير","٢٠ دينارًا","ديناران"],e:"٢٠٠ ÷ ٤٠ = ٥."},{q:"وإذا كان عنده ٤٠٠ دينار؟",a:["١٠ دنانير","٤٠ دينارًا","٤ دنانير"],e:"٤٠٠ ÷ ٤٠ = ١٠."}],[{q:"عند تاجرٍ ١٠٠٠ دينارٍ مرّ عليها عام. كم زكاتها (٢٫٥٪)؟",a:["٢٥ دينارًا","١٠٠ دينار","١٠ دنانير"],e:"١٠٠٠ ÷ ٤٠ = ٢٥."},{q:"وعند آخر ٦٠٠٠ دينار. كم زكاتها؟",a:["١٥٠ دينارًا","٦٠٠ دينار","٦٠ دينارًا"],e:"٦٠٠٠ ÷ ٤٠ = ١٥٠."}]],deliverIntro:["ممتاز! والآن نوصل الزكاة إلى مستحقّيها.","خذ كيسًا من الطاولة، واقرأ اللافتة فوق كل شخص، ثم أعطِ الزكاة لمن يستحقها فقط."],eligible:[{label:"فقير: لا يجد ما يكفيه",thanks:"جزاك الله خيرًا!"},{label:"مسكين: عنده قليل لا يكفي حاجته",thanks:"بارك الله فيك!"},{label:"ابن السبيل: مسافر انقطع ماله",thanks:"جزاك الله خيرًا!"},{label:"غارم: عليه دَين لا يستطيع سداده",thanks:"فرّج الله عنك كما فرّجت عني!"}],notEligible:[{label:"تاجر غنيّ عنده مال كثير",why:"الزكاة لا تُعطى للأغنياء."},{label:"قويٌّ له عمل وكسب يكفيه",why:"من عنده كسبٌ يكفيه لا يأخذ من الزكاة."},{label:"صاحب قصر وبساتين",why:"هذا غنيّ، والزكاة للفقراء والمحتاجين."}],after:["أحسنت! أوصلتَ الزكاة إلى مستحقّيها.",{ayah:"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",ref:"سورة البقرة: ٤٣"},"والآن: الاختبار!"]},sawm:{intro:["أهلًا بك في «واحة رمضان». هنا نتعلّم الركن الرابع: صوم رمضان.","رمضان هو الشهر التاسع من الشهور الهجرية، وفيه أُنزل القرآن.","نصوم من طلوع الفجر إلى غروب الشمس: نمتنع عن الأكل والشرب طاعةً لله.","تعال نعش يوم صائمٍ من أوله إلى آخره! اذهب إلى وسط الواحة."],suhoor:["الوقت الآن قبل الفجر: إنه وقت السَّحور!",{hadith:"تسحَّروا فإنَّ في السَّحور بركة",ref:"متفق عليه"},"اجمع طعام السحور قبل أن يطلع الفجر!"],fasting:["طلع الفجر! من الآن نُمسك عن الطعام والشراب حتى تغرب الشمس.","الصائم يملأ نهاره بالخير: اجمع الأعمال الصالحة، وابتعد عن الطعام والشراب!"],maghrib:["غربت الشمس! حان وقت الإفطار. اذهب إلى المائدة."],iftar:["من السنّة أن يفطر الصائم على رُطَبٍ أو تمر، فإن لم يجد فعلى ماء. ابدأ بالتمر!"],dua:["تقبّل الله صيامك! كان النبي ﷺ إذا أفطر قال:",{hadith:"ذهب الظمأ، وابتلَّت العروق، وثبت الأجرُ إن شاء الله",ref:"رواه أبو داود"},"وفي العشر الأواخر من رمضان ليلةُ القدر، وهي خيرٌ من ألف شهر. وبعد رمضان يأتي عيد الفطر. والآن: الاختبار!"],suhoorFoods:["🌴 تمر","💧 ماء","🍞 خبز","🥛 لبن","🍲 حساء"],dayFoods:["🍪 بسكويت","🧃 عصير","🍎 تفاح","🍬 حلوى","🥤 شراب","🍞 خبز"],deeds:["📖 قراءة القرآن","🤲 الدعاء","💝 الصدقة","🤝 مساعدة الناس","🕌 الصلاة","😊 الكلمة الطيبة","🏡 برّ الوالدين","🌿 ذكر الله"]},hajj:{intro:["هذا «وادي المناسك». هنا نتعلّم الركن الخامس: حجّ بيت الله الحرام.","الحج واجبٌ مرةً واحدة في العمر على من استطاع إليه سبيلًا، ويكون في شهر ذي الحجة في مكة المكرمة.","سنتعلّم المناسك خطوةً بخطوة. أولًا: نعبر «الميقات» لنُحرِم."],ihram:["الإحرام هو نيّة الدخول في النُّسُك. يلبس الرجل إزارًا ورداءً أبيضين، ولا يغطّي رأسه.","ثم نرفع أصواتنا بالتلبية:",{hadith:"لبَّيكَ اللهمَّ لبَّيك، لبَّيكَ لا شريكَ لكَ لبَّيك، إنَّ الحمدَ والنعمةَ لكَ والمُلك، لا شريكَ لك",ref:"متفق عليه"},"هيا إلى الكعبة المشرّفة! اذهب إلى خط البداية عند ركن الحجر الأسود."],tawaf:["هذه الكعبة المشرّفة، بيت الله الحرام، وقبلة المسلمين.","الطواف: ندور حول الكعبة سبعة أشواط، نبدأ من الحجر الأسود، ونجعل الكعبة عن يسارنا."],afterTawaf:["أتممتَ الطواف سبعة أشواط! والآن نذهب إلى الصفا لنبدأ السعي."],sai:["السعي: نمشي بين الصفا والمروة سبعة أشواط. نبدأ بالصفا وننتهي بالمروة.",{ayah:"إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ",ref:"سورة البقرة: ١٥٨"},"من الصفا إلى المروة شوط، ومن المروة إلى الصفا شوطٌ آخر."],afterSai:["أتممتَ السعي! في اليوم الثامن من ذي الحجة (يوم التروية) يذهب الحجاج إلى مِنى."],mina:["هذه مِنى، مدينة الخيام. يبيت الحجاج هنا ليلة التاسع، ثم يسيرون في الصباح إلى عرفة."],arafat:["هذا يوم عرفة: اليوم التاسع من ذي الحجة، وهو أعظم أيام الحج.",{hadith:"الحجُّ عرفة",ref:"رواه الترمذي والنسائي"},"يقف الحجاج هنا يدعون الله حتى تغرب الشمس. ابقَ في عرفة وادعُ الله!"],arafatDua:"لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير",afterArafat:["غربت الشمس. الآن يسير الحجاج بسكينة إلى مزدلفة."],muzdalifah:["في مزدلفة يبيت الحجاج، ويلتقطون الحصى لرمي الجمرات. اجمع سبع حصيات!"],jamarat:["هذا يوم العيد: اليوم العاشر من ذي الحجة (يوم النحر).","نرمي جمرة العقبة بسبع حصيات صغيرة، ونكبّر مع كل حصاة: «الله أكبر»."],rest:["تقبّل الله! بعد الرمي يذبح الحاج الهَدي، ويحلق شعره أو يقصّره، ثم يطوف طواف الإفاضة.","وفي أيام التشريق يرمي الجمرات الثلاث، وقبل أن يغادر مكة يطوف طواف الوداع.",{hadith:"الحجُّ المبرور ليس له جزاءٌ إلا الجنة",ref:"متفق عليه"}],order:[null,["الإحرام من الميقات","الوقوف بعرفة","المبيت بمزدلفة","رمي جمرة العقبة يوم العيد"],["الإحرام من الميقات","طواف القدوم","الوقوف بعرفة","المبيت بمزدلفة","رمي جمرة العقبة","طواف الإفاضة"]]},allah:{intro:["أهلًا بك في «حديقة الإيمان»! أركان الإيمان ستة، كما في حديث جبريل عليه السلام:",{hadith:"أن تؤمنَ بالله، وملائكتِه، وكتبِه، ورسلِه، واليومِ الآخر، وتؤمنَ بالقدرِ خيرِه وشرِّه",ref:"رواه مسلم"},"الركن الأول: الإيمان بالله. نؤمن أن الله ربُّنا وخالقُنا ورازقُنا، وأنه وحده المستحق للعبادة، وله الأسماء الحسنى.","تعال نتأمل آيات الله في الكون! اذهب إلى دوائر التأمّل."],signs:[{key:"sun",title:"الشمس",lines:["انظر إلى الشمس وهي تشرق! من خلقها وسخّرها لنا؟ إنه الله.",{ayah:"وَهُوَ الَّذِي خَلَقَ اللَّيْلَ وَالنَّهَارَ وَالشَّمْسَ وَالْقَمَرَ",ref:"سورة الأنبياء: ٣٣"}],q:{q:"مَن خلق الشمس وجعلها تضيء لنا؟",a:["الله","الناس","لا أحد"],e:"الله خالق كل شيء."}},{key:"night",title:"الليل والنجوم",lines:["وهذا الليل بقمره ونجومه… جعله الله لنا راحةً وسكنًا.",{ayah:"وَجَعَلَ اللَّيْلَ سَكَنًا",ref:"سورة الأنعام: ٩٦"}],q:{q:"لماذا جعل الله الليل؟",a:["لنسكن ونرتاح فيه","بلا حكمة","ليخيفنا"],e:"جعل الله الليل سكنًا وراحة."}},{key:"rain",title:"المطر",lines:["انظر إلى المطر ينزل من السماء! به تحيا الأرض وينبت الزرع.",{ayah:"وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا",ref:"سورة الفرقان: ٤٨"}],q:{q:"مَن يُنزّل المطر فيُحيي به الأرض؟",a:["الله","الغيوم وحدها","الرياح وحدها"],e:"الله هو الذي ينزّل الغيث."}},{key:"mountain",title:"الجبال",lines:["وهذه الجبال الشامخة جعلها الله تثبّت الأرض.",{ayah:"وَالْجِبَالَ أَوْتَادًا",ref:"سورة النبأ: ٧"}],q:{q:"ماذا نقول حين نرى عظمة خلق الله؟",a:["سبحان الله","لا نقول شيئًا","هذا شيء عاديّ"],e:"نسبّح الله ونعظّمه."}},{key:"sea",title:"البحر",lines:["وهذا البحر الواسع سخّره الله لنا: نأكل منه ونركب السفن.",{ayah:"وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ",ref:"سورة النحل: ١٤"}],q:{q:"مَن سخّر لنا البحر؟",a:["الله","الصيادون","السفن"],e:"الله سخّر لنا البحر وما فيه."}},{key:"plants",title:"النبات والثمار",lines:["وانظر إلى الأزهار والأشجار! يسقيها الله بالماء فتخرج ثمارًا مختلفة الألوان.",{ayah:"وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",ref:"سورة الأنبياء: ٣٠"}],q:{q:"مَن يُنبت الزرع ويُخرج الثمار؟",a:["الله","التراب وحده","المزارع وحده"],e:"المزارع يزرع، والله هو الذي يُنبت."}}],namesIntro:["سبحان الله! كل هذا خلقُ الله. ولله الأسماء الحسنى. صِل كل اسمٍ بمعناه."],names:[["الخالق","الذي خلق كل شيء"],["الرزّاق","الذي يرزق جميع خلقه"],["السميع","الذي يسمع كل شيء"],["البصير","الذي يرى كل شيء"],["الرحيم","الذي يرحم عباده"],["العليم","الذي يعلم كل شيء"]],after:[{ayah:"اللَّهُ خَالِقُ كُلِّ شَيْءٍ",ref:"سورة الزمر: ٦٢"},"والآن: الاختبار!"]},malaika:{intro:["الركن الثاني: الإيمان بالملائكة.","الملائكة خلقٌ من خلق الله، خلقهم من نور. هم عبادٌ مكرمون، يطيعون الله ولا يعصونه أبدًا.","نحن لا نراهم ولا نعرف صورهم، ولا يعلم عددهم إلا الله؛ لذلك نتعلّم أسماءهم وأعمالهم فقط.","لكل ملَكٍ عملٌ كلّفه الله به. اقرأ العمل، ثم اذهب إلى بوابة الاسم الصحيح!"],pairs:[{name:"جبريل عليه السلام",job:"ينزل بالوحي على الأنبياء",ask:"النزول بالوحي على الأنبياء"},{name:"ميكائيل عليه السلام",job:"موكَّل بالمطر والنبات",ask:"المطر والنبات"},{name:"الكرام الكاتبون",job:"يكتبون أعمال الإنسان",ask:"كتابة أعمال الإنسان"},{name:"إسرافيل عليه السلام",job:"موكَّل بالنفخ في الصُّور",ask:"النفخ في الصُّور يوم القيامة"},{name:"مالك عليه السلام",job:"خازن النار",ask:"خزانة النار"},{name:"ملَك الموت",job:"موكَّل بقبض الأرواح",ask:"قبض الأرواح"}],after:["أحسنت! المؤمن يحبّ الملائكة، ويستحي أن يعصي الله والكرام الكاتبون يكتبون عمله. والآن: الاختبار!"]},kutub:{intro:["الركن الثالث: الإيمان بالكتب.","أنزل الله كتبًا على رسله لهداية الناس: صحف إبراهيم، والتوراة على موسى، والزَّبور على داود، والإنجيل على عيسى، والقرآن على محمد، عليهم الصلاة والسلام.","والقرآن الكريم آخر الكتب، وقد حفظه الله من التحريف والتبديل.","احمل كل كتابٍ إلى المنصّة التي عليها اسم الرسول الذي أُنزل عليه."],books:[{name:"القرآن الكريم",to:"محمد ﷺ",color:2067034},{name:"التوراة",to:"موسى عليه السلام",color:3108789},{name:"الإنجيل",to:"عيسى عليه السلام",color:9064368},{name:"الزَّبور",to:"داود عليه السلام",color:13194557},{name:"الصُّحف",to:"إبراهيم عليه السلام",color:14259502}],after:[{ayah:"إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",ref:"سورة الحجر: ٩"},"القرآن كلام الله، نقرؤه ونحفظه ونعمل به. والآن: الاختبار!"]},rusul:{intro:["الركن الرابع: الإيمان بالرسل.","أرسل الله رسلًا إلى الناس يدعونهم إلى عبادة الله وحده. أولهم نوح، وخاتمهم محمد، عليهم الصلاة والسلام.","نحن لا نرسم صور الأنبياء تعظيمًا لهم؛ لذلك سنتعرّف إليهم من قصصهم. استمع جيدًا!"],symbols:[{key:"ark",label:"السفينة",name:"نوح عليه السلام",story:"صنع السفينة بأمر الله، فنجّاه الله ومن آمن معه من الطوفان."},{key:"staff",label:"العصا",name:"موسى عليه السلام",story:"ضرب البحر بعصاه فانفلق بإذن الله، ونجا هو وقومه."},{key:"fire",label:"النار",name:"إبراهيم عليه السلام",story:"ألقاه قومه في النار، فجعلها الله بردًا وسلامًا عليه."},{key:"well",label:"البئر",name:"يوسف عليه السلام",story:"ألقاه إخوته في البئر وهو صغير، ثم نجّاه الله وجعله عزيزًا في مصر."},{key:"cave",label:"غار حراء",name:"محمد ﷺ",story:"خاتم الأنبياء؛ نزل عليه الوحي أول مرة وهو في غار حراء."},{key:"cradle",label:"المهد",name:"عيسى عليه السلام",story:"تكلّم في المهد وهو رضيع بإذن الله، وقال: إني عبدُ الله."},{key:"whale",label:"الحوت",name:"يونس عليه السلام",story:"التقمه الحوت، فسبّح الله في بطنه فنجّاه الله."}],challenge:["والآن دورك! سأذكر لك نبيًّا أو قصته، فاذهب إلى الرمز الذي يذكّرنا به."],after:[{ayah:"لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ",ref:"سورة البقرة: ٢٨٥"},"نؤمن بجميع الأنبياء والرسل ونحبّهم، ونتّبع خاتمهم محمدًا ﷺ. والآن: الاختبار!"]},akhirah:{intro:["الركن الخامس: الإيمان باليوم الآخر، وهو يوم القيامة.","في ذلك اليوم يبعث الله الناس من قبورهم، ويحاسبهم على أعمالهم، وتوزن الأعمال بالميزان.",{ayah:"فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",ref:"سورة الزلزلة: ٧-٨"},"فمن ثقُلت حسناته فاز بالجنة برحمة الله. هيا نملأ ميزاننا بالحسنات: التقط الأعمال الصالحة وتجنّب السيئات!"],good:["الصدق","برّ الوالدين","الصلاة","الصدقة","إطعام المسكين","الكلمة الطيبة","مساعدة المحتاج","قراءة القرآن","التبسّم","إماطة الأذى","الأمانة","ذكر الله","صلة الرحم","العفو"],bad:["الكذب","الغش","السخرية","الشتم","عقوق الوالدين","الغيبة","السرقة","الظلم","إيذاء الجار","الإسراف","الحسد","الكِبر"],after:["ما شاء الله! ثقُل ميزان الحسنات.",{hadith:"كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم",ref:"متفق عليه"},"والآن: الاختبار!"]},qadar:{intro:["الركن السادس: الإيمان بالقدر خيره وشرّه.","نؤمن أن الله يعلم كل شيء، وكتب كل شيء، ولا يحدث شيء إلا بمشيئته، وهو خالق كل شيء.",{hadith:"عجبًا لأمر المؤمن، إنَّ أمرَه كلَّه خير، وليس ذاك لأحدٍ إلا للمؤمن: إن أصابته سرّاءُ شكر فكان خيرًا له، وإن أصابته ضرّاءُ صبر فكان خيرًا له",ref:"رواه مسلم"},"والمؤمن يعمل ويجتهد ويأخذ بالأسباب، ثم يتوكّل على الله. سأعرض عليك مواقف، فاختر التصرّف الصحيح!"],scenes:[{text:"نجحتَ في الاختبار بتفوّق! ماذا تقول؟",weather:"clear",time:10,opts:[{label:"الحمد لله، هذا من فضل ربي",correct:!0},{label:"نجحتُ بذكائي وحدي",why:"النجاح من فضل الله أولًا، ثم باجتهادك."},{label:"أتفاخر على أصحابي",why:"المؤمن يشكر ولا يتكبّر."}]},{text:"هطل مطر غزير وأُلغيت الرحلة التي تنتظرها.",weather:"rain",time:14,opts:[{label:"قدَّر الله وما شاء فعل، لعلّه خير",correct:!0},{label:"أغضب وأتسخّط",why:"المؤمن يصبر ويرضى بما قدّر الله."},{label:"أقول: لو لم تمطر لكان أفضل",why:"لا نقول «لو»، بل: قدَّر الله وما شاء فعل."}]},{text:"عندك اختبار غدًا وتريد النجاح.",weather:"cloudy",time:16.5,opts:[{label:"أذاكر وأجتهد ثم أتوكّل على الله",correct:!0},{label:"لا أذاكر وأقول: المكتوب سيكون",why:"المؤمن يأخذ بالأسباب ثم يتوكّل على الله."},{label:"أذاكر ولا أدعو الله",why:"نجتهد وندعو الله معًا."}]},{text:"مرضتَ وشعرت بالتعب.",weather:"cloudy",time:18.3,opts:[{label:"أصبر وأدعو الله وآخذ الدواء",correct:!0},{label:"أترك الدواء وأشكو لكل الناس",why:"نتداوى ونصبر، والشفاء من الله."},{label:"أتسخّط وأقول: لماذا أنا؟",why:"المؤمن يصبر ويحتسب الأجر عند الله."}]},{text:"ضاعت لعبتك المفضّلة.",weather:"clear",time:20.5,opts:[{label:"إنا لله وإنا إليه راجعون، وأبحث عنها بهدوء",correct:!0},{label:"أصرخ وأكسر الأشياء",why:"الغضب لا يُرجع ما ضاع، والصبر خير."},{label:"أتّهم إخوتي بلا دليل",why:"لا نظلم أحدًا، ونصبر ونبحث."}]},{text:"رزقك الله درّاجةً جديدة جميلة.",weather:"clear",time:8.5,opts:[{label:"أشكر الله وأُشرك إخوتي في اللعب",correct:!0},{label:"أتكبّر بها على أصحابي",why:"النعمة تُشكَر ولا يُتكبَّر بها."},{label:"أنسى شكر الله",why:"نقول: الحمد لله على نعمه."}]}],after:[{hadith:"واعلم أنَّ ما أخطأك لم يكن ليصيبك، وما أصابك لم يكن ليخطئك",ref:"رواه أحمد"},"المؤمن مطمئنّ القلب؛ لأنه يعلم أنّ كل شيء بقدر الله وحكمته. والآن: الاختبار الأخير!"]},finale:["ما شاء الله تبارك الله يا {name}! أضأتَ أعمدة الإسلام الخمسة ومصابيح الإيمان الستة.","تعلّمتَ أركان الإسلام: الشهادتين، والصلاة، والزكاة، والصوم، والحج.","وأركان الإيمان: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشرّه.","العلم نورٌ يكتمل بالعمل. حافظ على صلاتك، وبرّ والديك، وكن قدوةً لأصحابك. بارك الله فيك!"]},Tv={shahada:[{l:0,q:"ما الركن الأول من أركان الإسلام؟",a:["الشهادتان","الصلاة","الصوم"],e:"أول الأركان: شهادة أن لا إله إلا الله وأن محمدًا رسول الله."},{l:0,q:"مَن الذي نعبده وحده؟",a:["اللهُ وحده لا شريك له","الشمس والقمر","الأصنام"],e:"لا نعبد إلا الله وحده."},{l:0,q:"مَن خاتَم الأنبياء والمرسلين؟",a:["محمد ﷺ","نوح عليه السلام","إبراهيم عليه السلام"],e:"محمد ﷺ آخر الأنبياء والرسل."},{l:1,q:"ما معنى «لا إله إلا الله»؟",a:["لا معبودَ بحقٍّ إلا الله","الصلاة عمود الدين","الصوم في رمضان"],e:"معناها: لا يستحق العبادة إلا الله."},{l:1,q:"كم عدد أركان الإسلام؟",a:["خمسة","ستة","أربعة"],e:"بُني الإسلام على خمس."},{l:2,q:"ماذا تقتضي شهادة أنّ محمدًا رسول الله؟",a:["طاعته وتصديقه واجتناب ما نهى عنه","معرفة اسمه فقط","محبته دون طاعته"],e:"نطيعه فيما أمر، ونصدّقه فيما أخبر، ونجتنب ما نهى عنه."},{l:2,q:"في أيّ حديثٍ ذُكرت أركان الإسلام الخمسة؟",a:["«بُني الإسلام على خمس»","«إنما الأعمال بالنيات»","«الدين النصيحة»"],e:"حديث ابن عمر رضي الله عنهما، متفق عليه."}],salah:[{l:0,q:"كم صلاةً فرضها الله علينا في اليوم والليلة؟",a:["خمس صلوات","ثلاث صلوات","سبع صلوات"],e:"الفجر، الظهر، العصر، المغرب، العشاء."},{l:0,q:"إلى أين نتّجه في الصلاة؟",a:["إلى الكعبة في مكة","إلى الشمس","إلى أيّ جهة نريد"],e:"الكعبة المشرّفة قبلة المسلمين."},{l:0,q:"ماذا نفعل قبل الصلاة؟",a:["نتوضأ","نأكل","ننام"],e:"الوضوء شرطٌ لصحة الصلاة."},{l:1,q:"كم عدد ركعات صلاة المغرب؟",a:["ثلاث ركعات","ركعتان","أربع ركعات"],e:"المغرب ثلاث ركعات."},{l:1,q:"ما الصلاة التي نصلّيها قبل شروق الشمس؟",a:["الفجر","العصر","العشاء"],e:"صلاة الفجر ركعتان قبل الشروق."},{l:2,q:"كم مجموع ركعات الصلوات الخمس المفروضة في اليوم؟",a:["١٧ ركعة","١٥ ركعة","٢٠ ركعة"],e:"٢ + ٤ + ٤ + ٣ + ٤ = ١٧."},{l:2,q:"ما أول ما يُحاسَب عليه العبد يوم القيامة من عمله؟",a:["الصلاة","الصوم","الحج"],e:"أول ما يُحاسَب به العبد صلاتُه."}],zakat:[{l:0,q:"الزكاة هي الركن … من أركان الإسلام.",a:["الثالث","الأول","الخامس"],e:"الشهادتان، ثم الصلاة، ثم الزكاة."},{l:0,q:"لمن نعطي الزكاة؟",a:["للفقراء والمساكين والمحتاجين","للأغنياء","لأيّ أحدٍ نحبّه"],e:"الزكاة لمستحقّيها الذين ذكرهم الله."},{l:1,q:"كم نُخرج زكاةً من المال إذا بلغ النصاب ومرّ عليه عام؟",a:["ربع العُشر (٢٫٥٪)","نصف المال","المال كله"],e:"من كل أربعين واحد."},{l:1,q:"ما فائدة الزكاة؟",a:["تطهّر المال وتساعد المحتاجين","تُنقص المال بلا فائدة","للتفاخر بين الناس"],e:"الزكاة طهرةٌ وبركة وتراحم."},{l:2,q:"في أيّ سورةٍ ذُكرت مصارف الزكاة الثمانية؟",a:["سورة التوبة","سورة الفاتحة","سورة الإخلاص"],e:"في الآية ٦٠ من سورة التوبة."},{l:2,q:"مَن هو «ابن السبيل»؟",a:["المسافر الذي انقطع ماله","الغنيّ المسافر للنزهة","مَن يسكن بجوار الطريق"],e:"هو المسافر المنقطع عن بلده وماله."}],sawm:[{l:0,q:"في أيّ شهرٍ نصوم؟",a:["رمضان","شوال","رجب"],e:"صوم رمضان ركنٌ من أركان الإسلام."},{l:0,q:"متى يُفطر الصائم؟",a:["عند غروب الشمس","عند الظهر","عند منتصف الليل"],e:"نفطر إذا غربت الشمس."},{l:0,q:"ماذا نسمّي الأكل قبل الفجر في رمضان؟",a:["السَّحور","الإفطار","الغداء"],e:"السَّحور بركة."},{l:1,q:"متى يبدأ الصوم كل يوم؟",a:["من طلوع الفجر","من شروق الشمس","من الظهر"],e:"من طلوع الفجر إلى غروب الشمس."},{l:1,q:"على ماذا يُسنّ أن يُفطر الصائم؟",a:["على رُطَبٍ أو تمر، فإن لم يجد فماء","على الحلوى","على اللحم"],e:"هكذا كان يفطر النبي ﷺ."},{l:2,q:"مَن أكل أو شرب ناسيًا وهو صائم، فماذا يفعل؟",a:["يُتمّ صومه وصومه صحيح","يُفطر بقية اليوم","يصوم شهرًا آخر"],e:"قال ﷺ: «فليُتمَّ صومه، فإنما أطعمه الله وسقاه»."},{l:2,q:"ما الليلة التي هي خيرٌ من ألف شهر؟",a:["ليلة القدر","ليلة العيد","أول ليلة من رمضان"],e:"ليلة القدر في العشر الأواخر من رمضان."}],hajj:[{l:0,q:"أين يحجّ المسلمون؟",a:["في مكة المكرمة","في المدينة المنورة","في القدس"],e:"بيت الله الحرام في مكة."},{l:0,q:"كم شوطًا نطوف حول الكعبة؟",a:["سبعة أشواط","خمسة أشواط","ثلاثة أشواط"],e:"الطواف سبعة أشواط."},{l:0,q:"بين أيّ جبلين نسعى؟",a:["الصفا والمروة","أُحد وعرفة","النور وثور"],e:"السعي بين الصفا والمروة."},{l:1,q:"كم مرةً يجب الحج في العمر على المستطيع؟",a:["مرة واحدة","كل سنة","خمس مرات"],e:"الحج واجب مرة في العمر."},{l:1,q:"ما المنسك الذي قال فيه النبي ﷺ: «الحجُّ عرفة»؟",a:["الوقوف بعرفة","رمي الجمرات","المبيت بمِنى"],e:"الوقوف بعرفة أعظم أركان الحج."},{l:2,q:"في أيّ شهرٍ يكون الحج؟",a:["ذو الحجة","رمضان","محرَّم"],e:"مناسك الحج في شهر ذي الحجة."},{l:2,q:"بكم حصاةٍ تُرمى جمرة العقبة يوم العيد؟",a:["سبع حصيات","ثلاث حصيات","عشر حصيات"],e:"سبع حصيات، يكبّر مع كل حصاة."}],allah:[{l:0,q:"مَن خلقنا وخلق كل شيء؟",a:["الله","الناس","لا أحد"],e:"الله خالق كل شيء."},{l:0,q:"كم عدد أركان الإيمان؟",a:["ستة","خمسة","سبعة"],e:"أركان الإيمان ستة."},{l:0,q:"مَن الذي يرزقنا الطعام والماء؟",a:["الله الرزّاق","السوق","المطر وحده"],e:"الله هو الرزّاق."},{l:1,q:"ما اسم الله الذي يدلّ على أنه يرى كل شيء؟",a:["البصير","الرزّاق","الخالق"],e:"البصير: الذي يرى كل شيء."},{l:1,q:"ما اسم الله الذي يدلّ على أنه يسمع كل شيء؟",a:["السميع","الخالق","الرحيم"],e:"السميع: الذي يسمع كل شيء."},{l:2,q:"ما السورة التي تَعدِل ثلث القرآن؟",a:["سورة الإخلاص","سورة الفلق","سورة الكوثر"],e:"﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ تعدل ثلث القرآن."},{l:2,q:"ما معنى توحيد الله؟",a:["إفراد الله بالعبادة فلا نعبد غيره","أن نعرف اسم الله فقط","أن نعبد الله وغيره"],e:"التوحيد: أن نعبد الله وحده لا شريك له."}],malaika:[{l:0,q:"من أيّ شيءٍ خلق الله الملائكة؟",a:["من نور","من نار","من طين"],e:"خُلقت الملائكة من نور."},{l:0,q:"هل تعصي الملائكةُ اللهَ؟",a:["لا، يطيعون الله دائمًا","نعم، أحيانًا"],e:"لا يعصون الله ما أمرهم."},{l:1,q:"مَن الملَك الذي نزل بالقرآن على النبي ﷺ؟",a:["جبريل عليه السلام","ميكائيل عليه السلام","إسرافيل عليه السلام"],e:"جبريل أمين الوحي."},{l:1,q:"ماذا يفعل الكرام الكاتبون؟",a:["يكتبون أعمالنا","يُنزلون المطر","ينفخون في الصور"],e:"يكتبون كل ما نعمل."},{l:2,q:"مَن الملَك الموكَّل بالنفخ في الصور؟",a:["إسرافيل عليه السلام","مالك عليه السلام","جبريل عليه السلام"],e:"إسرافيل موكَّل بالنفخ في الصور."},{l:2,q:"مَن خازن النار؟",a:["مالك عليه السلام","ميكائيل عليه السلام","إسرافيل عليه السلام"],e:"مالك خازن النار."}],kutub:[{l:0,q:"ما الكتاب الذي أنزله الله على نبيّنا محمد ﷺ؟",a:["القرآن الكريم","التوراة","الإنجيل"],e:"القرآن كلام الله المنزَّل على محمد ﷺ."},{l:0,q:"ما آخر الكتب المنزَّلة؟",a:["القرآن الكريم","الزَّبور","الإنجيل"],e:"القرآن آخر الكتب."},{l:1,q:"على مَن أُنزلت التوراة؟",a:["موسى عليه السلام","عيسى عليه السلام","داود عليه السلام"],e:"التوراة أُنزلت على موسى."},{l:1,q:"على مَن أُنزل الإنجيل؟",a:["عيسى عليه السلام","موسى عليه السلام","إبراهيم عليه السلام"],e:"الإنجيل أُنزل على عيسى."},{l:2,q:"ما الكتاب الذي أُنزل على داود عليه السلام؟",a:["الزَّبور","الصُّحف","التوراة"],e:"﴿وَآتَيْنَا دَاوُودَ زَبُورًا﴾."},{l:2,q:"كم عدد سور القرآن الكريم؟",a:["١١٤ سورة","١٠٠ سورة","٣٠ سورة"],e:"القرآن ١١٤ سورة في ٣٠ جزءًا."},{l:2,q:"ما الكتاب الذي تكفّل الله بحفظه من التحريف؟",a:["القرآن الكريم","التوراة","الإنجيل"],e:"﴿وَإِنَّا لَهُ لَحَافِظُونَ﴾."}],rusul:[{l:0,q:"مَن آخر الأنبياء والرسل؟",a:["محمد ﷺ","عيسى عليه السلام","موسى عليه السلام"],e:"محمد ﷺ خاتَم النبيّين."},{l:0,q:"إلى ماذا دعا جميع الرسل؟",a:["إلى عبادة الله وحده","إلى جمع المال","إلى اللهو واللعب"],e:"كل الرسل دعوا إلى التوحيد."},{l:1,q:"مَن النبيّ الذي صنع السفينة؟",a:["نوح عليه السلام","يوسف عليه السلام","يونس عليه السلام"],e:"نوح عليه السلام صنع السفينة بأمر الله."},{l:1,q:"مَن أول الرسل؟",a:["نوح عليه السلام","إبراهيم عليه السلام","موسى عليه السلام"],e:"نوح أول الرسل، وآدم أول الأنبياء."},{l:2,q:"مَن هم أولو العزم من الرسل؟",a:["نوح وإبراهيم وموسى وعيسى ومحمد","آدم ويوسف ويونس وداود وسليمان","هود وصالح ولوط وشعيب وأيوب"],e:"عليهم جميعًا الصلاة والسلام."},{l:2,q:"ما واجبنا نحو الرسل؟",a:["نؤمن بهم جميعًا ونحبّهم","نؤمن ببعضهم فقط","نعرف أسماءهم فقط"],e:"لا نفرّق بين أحدٍ من رسله."}],akhirah:[{l:0,q:"ما اليوم الذي يحاسب الله فيه الناس؟",a:["يوم القيامة","يوم الجمعة","يوم العيد"],e:"يوم القيامة هو اليوم الآخر."},{l:0,q:"ما جزاء المؤمنين الذين يعملون الصالحات؟",a:["الجنة","لا شيء"],e:"يدخلهم الله الجنة برحمته."},{l:1,q:"بماذا توزن الأعمال يوم القيامة؟",a:["بالميزان","بالكتاب","بالساعة"],e:"يضع الله الموازين القسط ليوم القيامة."},{l:1,q:"أيُّ هذه الأعمال يثقّل ميزان الحسنات؟",a:["برّ الوالدين","الكذب","الغش"],e:"برّ الوالدين من أحبّ الأعمال إلى الله."},{l:2,q:"ما معنى البعث؟",a:["إحياء الله الموتى يوم القيامة","النوم العميق","السفر البعيد"],e:"يبعث الله الناس من قبورهم للحساب."},{l:2,q:"ما الكلمتان الخفيفتان على اللسان الثقيلتان في الميزان؟",a:["سبحان الله وبحمده، سبحان الله العظيم","مرحبًا وأهلًا","نعم ولا"],e:"كما في الحديث المتفق عليه."}],qadar:[{l:0,q:"إذا أصابك خيرٌ فماذا تفعل؟",a:["أشكر الله","أتكبّر","لا أفعل شيئًا"],e:"الشكر يزيد النعم."},{l:0,q:"إذا أصابك ما تكره فماذا تفعل؟",a:["أصبر وأدعو الله","أغضب وأتسخّط"],e:"الصبر خيرٌ للمؤمن."},{l:1,q:"هل يعلم الله كل ما حدث وما سيحدث؟",a:["نعم، الله بكل شيء عليم","لا"],e:"علم الله محيطٌ بكل شيء."},{l:1,q:"ماذا يقول المؤمن إذا أصابه ما يكره؟",a:["قدَّر الله وما شاء فعل","لو أني فعلتُ كذا لكان كذا","هذا ظلم"],e:"كما علّمنا النبي ﷺ."},{l:2,q:"ما معنى الأخذ بالأسباب؟",a:["أن نعمل ونجتهد ثم نتوكّل على الله","أن نترك العمل وننتظر","أن نعتمد على أنفسنا فقط"],e:"نعمل ونتوكّل على الله."},{l:2,q:"ما مراتب الإيمان بالقدر؟",a:["العلم والكتابة والمشيئة والخلق","الصلاة والصوم والزكاة والحج","الصدق والأمانة والصبر والشكر"],e:"علم الله، وكتابته، ومشيئته، وخلقه."}]};function Np(s,t){let e=Tv[s],i=[3,4,5][t],n=a=>Te(e.filter(o=>o.l===a)),r=t===0?[...n(0),...n(1)]:t===1?[...n(1),...n(0),...n(2)]:[...n(2),...n(1),...n(0)];return Te(r.slice(0,i))}var Un=["«إنما الأعمال بالنيّات» — متفق عليه.","«الكلمة الطيبة صدقة» — متفق عليه.","«تبسُّمك في وجه أخيك لك صدقة» — رواه الترمذي.","«الطُّهور شطر الإيمان» — رواه مسلم.","«خيرُكم مَن تعلّم القرآن وعلّمه» — رواه البخاري.","«لا يؤمن أحدكم حتى يحبَّ لأخيه ما يحبُّ لنفسه» — متفق عليه.","«مَن سلك طريقًا يلتمس فيه علمًا سهّل الله له به طريقًا إلى الجنة» — رواه مسلم.","«المسلم مَن سلِم المسلمون من لسانه ويده» — متفق عليه.","«الدين النصيحة» — رواه مسلم.","«مِن حُسن إسلام المرء تركُه ما لا يعنيه» — رواه الترمذي.","«اتّقِ الله حيثما كنت، وأتبِع السيئةَ الحسنةَ تمحُها، وخالِق الناس بخُلقٍ حسن» — رواه الترمذي.","«الراحمون يرحمهم الرحمن» — رواه أبو داود والترمذي.","«وتُميط الأذى عن الطريق صدقة» — متفق عليه.","«أحبُّ الأعمال إلى الله أدومُها وإن قلّ» — متفق عليه.","«مَن لا يشكر الناس لا يشكر الله» — رواه أبو داود والترمذي.","القرآن الكريم ١١٤ سورة، أولها الفاتحة وآخرها الناس.","قبلة المسلمين: الكعبة المشرّفة في مكة المكرمة.","تحيّة الإسلام: السلام عليكم ورحمة الله وبركاته.","نقول «بسم الله» قبل الطعام، و«الحمد لله» بعده.","الشهور الهجرية اثنا عشر شهرًا، أولها محرَّم، وتاسعها رمضان، وآخرها ذو الحجة."];var It=(s,t=document)=>t.querySelector(s),Ae=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Av=`<svg viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="8" r="5" fill="none" stroke="#e9b949" stroke-width="3"/>
<path d="M20 27 L32 12 L44 27 Z" fill="#e9b949"/><rect x="17" y="26" width="30" height="5" rx="2" fill="#b8862a"/>
<path d="M19 31 H45 L49 60 H15 Z" fill="#ffe7a8" stroke="#b8862a" stroke-width="3"/>
<path d="M32 31 V60 M24 31 L21 60 M40 31 L43 60" stroke="#b8862a" stroke-width="2"/>
<ellipse cx="32" cy="47" rx="6" ry="9" fill="#fffbe6"/>
<rect x="13" y="60" width="38" height="6" rx="2" fill="#b8862a"/><path d="M24 66 H40 L36 77 H28 Z" fill="#e9b949"/></svg>`,Rv=`
<div id="hud" class="hide">
  <div id="topbar">
    <div id="progress" title="تقدّمك">
      <div class="prow"><span class="plabel">الإسلام</span><span class="chips" id="chips-islam"></span></div>
      <div class="prow"><span class="plabel">الإيمان</span><span class="chips" id="chips-iman"></span></div>
      <div id="starcount"></div>
    </div>
    <div id="objective" class="empty"><div class="ot"></div><div class="os"></div></div>
    <div id="hudbtns">
      <button data-act="pause" title="القائمة">☰</button>
      <button data-act="map" title="الخريطة (M)">🗺️</button>
      <button data-act="journal" title="كتاب المعرفة (J)">📖</button>
      <button data-act="sound" title="الصوت">🔊</button>
    </div>
  </div>
  <div id="stagebar" class="hide"><span id="stagename"></span><span id="counter" class="chip hide"></span><span id="timer" class="chip hide"></span><button id="quitstage">خروج من التحدّي ✕</button></div>
  <div id="nav" class="hide"><div class="arrow"></div><span></span></div>
  <div id="meter" class="hide"><div class="zone"></div><div class="needle"></div></div>
  <div id="prompt" class="hide"></div>
  <div id="minimap" title="الخريطة"><canvas width="168" height="168"></canvas></div>
  <div id="toasts"></div>
  <div id="touch" class="hide">
    <div id="joy"><i></i></div>
    <button id="tb-jump">⤒</button><button id="tb-act">✋</button><button id="tb-run">⚡</button>
  </div>
</div>
<div id="bannerwrap"></div>
<div id="dialog" class="hide"><div class="dlg glass">
  <div class="avatar">${Av}</div>
  <div class="dbody"><div class="dname">سِراج</div><div class="dtext"></div><div class="dref"></div></div>
  <button class="dnext">التالي ◀</button>
</div></div>
<div id="panelwrap" class="hide"><div id="panel" class="glass"></div></div>
<div id="fade"></div>`,Oc=class{constructor(t){this.g=t,this.root=document.getElementById("ui"),this.root.innerHTML=Rv,this.hud=It("#hud"),this.dialogEl=It("#dialog"),this.wrap=It("#panelwrap"),this.panel=It("#panel"),this.modalCount=0,this.lockT=0,this.keyHandler=null,this._toastN=0,this.mm=It("#minimap canvas").getContext("2d",{willReadFrequently:!0}),It("#hudbtns").addEventListener("click",n=>{let r=n.target.closest("button");r&&(this.g.audio.sfx.ui(),this.g.hudAction(r.dataset.act))}),It("#minimap").addEventListener("click",()=>this.g.hudAction("map")),It("#quitstage").addEventListener("click",()=>this.g.quitStage()),It("#prompt").addEventListener("click",()=>this.g.input.press("interact"));let e=(n,r)=>It(n).addEventListener("pointerdown",a=>{a.preventDefault(),r()});e("#tb-jump",()=>this.g.input.press("jump")),e("#tb-act",()=>this.g.input.press("interact")),e("#tb-run",()=>{this.g.input.sprintToggle=!this.g.input.sprintToggle,It("#tb-run").classList.toggle("on",this.g.input.sprintToggle)}),window.addEventListener("keydown",n=>{this.keyHandler&&!(n.target&&n.target.tagName==="INPUT")&&this.keyHandler(n)});let i=n=>ue.filter(r=>ye[r].kind===n).map((r,a)=>`<span class="chipc ${n}" data-id="${r}" title="${ye[r].title}">${ot(a+1)}</span>`).join("");It("#chips-islam").innerHTML=i("islam"),It("#chips-iman").innerHTML=i("iman")}get busy(){return this.modalCount>0||performance.now()<this.lockT}_open(){this.modalCount++}_close(){this.modalCount=Math.max(0,this.modalCount-1),this.lockT=performance.now()+260,this.keyHandler=null}name(t){return String(t).replace(/\{name\}/g,this.g.save.name||"صديقي")}showHud(t){this.hud.classList.toggle("hide",!t)}setTouch(){this.hud.classList.add("touch"),It("#touch").classList.remove("hide")}joy(t,e,i,n,r){let a=It("#joy");a.style.display=t?"block":"none",t&&(a.style.left=e+"px",a.style.top=i+"px",a.firstElementChild.style.transform=`translate(${n*40}px,${-r*40}px)`)}setObjective(t,e=""){let i=(t||"")+"|"+(e||"");if(i===this._obj)return;this._obj=i;let n=It("#objective");n.classList.toggle("empty",!t),It(".ot",n).textContent=t||"",It(".os",n).textContent=e||""}setPrompt(t,e=!1){let i=It("#prompt");if(!t){this._prompt&&(i.classList.add("hide"),this._prompt=null);return}this._prompt!==t&&(this._prompt=t,i.classList.remove("hide"),i.classList.toggle("locked",e),i.innerHTML=Ae(t)+(e?"":"<kbd>E</kbd>"))}setStage(t){It("#stagebar").classList.toggle("hide",!t),It("#stagename").textContent=t||"",t||(this.setCounter(null),this.setTimer(null),this.setMeter(null))}setCounter(t){let e=It("#counter");e.classList.toggle("hide",!t),t&&e.textContent!==t&&(e.textContent=t)}setTimer(t){let e=It("#timer");if(e.classList.toggle("hide",t==null),t!=null){let i=Math.max(0,Math.ceil(t)),n="⏳ "+ot(i);e.textContent!==n&&(e.textContent=n),e.classList.toggle("low",i<=5)}}setMeter(t,e=.4,i=.6){let n=It("#meter");n.classList.toggle("hide",t==null),t!=null&&(It(".zone",n).style.left=e*100+"%",It(".zone",n).style.width=(i-e)*100+"%",It(".needle",n).style.left=t*100+"%")}setNav(t,e){let i=It("#nav");i.classList.toggle("hide",t===null),t!==null&&(It(".arrow",i).style.transform=`rotate(${t}rad)`,It("span",i).textContent=ot(Math.round(e))+" م")}toast(t,e="info",i=3.2){let n=It("#toasts");for(;n.children.length>=3;)n.firstElementChild.remove();let r=document.createElement("div");r.className="toast "+e,r.textContent=this.name(t),n.appendChild(r),setTimeout(()=>{r.classList.add("out"),setTimeout(()=>r.remove(),420)},i*1e3)}banner(t,e=""){let i=It("#bannerwrap");i.innerHTML=`<div id="banner"><h2>${Ae(t)}</h2><p>${Ae(e)}</p></div>`,clearTimeout(this._bt),this._bt=setTimeout(()=>i.innerHTML="",3700)}fade(t,e=.5){let i=It("#fade");return i.style.transitionDuration=e+"s",i.classList.toggle("on",t),new Promise(n=>setTimeout(n,e*1e3+30))}updateProgress(){let t=this.g.save,e=this.g.nextStageId(),i=0;for(let n of ue){let r=this.root.querySelector(`.chipc[data-id="${n}"]`);r.classList.toggle("on",!!t.stars[n]),r.classList.toggle("next",n===e),i+=t.stars[n]||0}It("#starcount").innerHTML=`⭐ ${ot(i)} / ${ot(ue.length*3)} &nbsp; 💎 ${ot(t.pearls.length)} / ${ot(Un.length)}`,It('#hudbtns [data-act="sound"]').textContent=t.sound?"🔊":"🔇"}drawMinimap(){let t=this.mm,e=168,i=this.g;t.clearRect(0,0,e,e),t.drawImage(i.world.mapCanvas,0,0,e,e);let n=i.nextStageId();for(let l of ue){let c=Ie[l],[h,u]=Sr(c.x,c.z);t.beginPath(),t.arc(h*e,u*e,l===n?5:3.5,0,7),t.fillStyle=i.save.stars[l]?"#3ecf7a":l===n?"#ffd45a":"#9aa3b5",t.fill(),t.lineWidth=1.5,t.strokeStyle="#0b1b3a",t.stroke()}if(i.navTarget){let[l,c]=Sr(i.navTarget.x,i.navTarget.z);t.beginPath(),t.arc(l*e,c*e,7+Math.sin(performance.now()/200)*2,0,7),t.strokeStyle="#fff",t.lineWidth=2,t.stroke()}let r=i.player,[a,o]=Sr(r.pos.x,r.pos.z);t.save(),t.translate(a*e,o*e),t.rotate(Math.PI-r.yaw),t.beginPath(),t.moveTo(0,-8),t.lineTo(6,6),t.lineTo(0,2.5),t.lineTo(-6,6),t.closePath(),t.fillStyle="#ff5a4a",t.fill(),t.strokeStyle="#fff",t.lineWidth=1.5,t.stroke(),t.restore()}showPanel(t,e=""){return this.wrap.classList.contains("hide")&&this._open(),this.panel.className="glass "+e,this.wrap.className=e.includes("menu")?"menuwrap":"",this.panel.innerHTML=t,this.panel.scrollTop=0,this.panel}hidePanel(){this.wrap.classList.contains("hide")||(this.wrap.classList.add("hide"),this.panel.innerHTML="",this._close())}closeAll(){clearInterval(this._tw),this.wrap.classList.add("hide"),this.panel.innerHTML="",this.dialogEl.classList.add("hide"),this.modalCount=0,this.keyHandler=null,this.lockT=performance.now()+260}dialog(t){return new Promise(e=>{let i=this.dialogEl,n=It(".dtext",i),r=It(".dref",i),a=It(".dnext",i),o=-1,l="",c=0,h=!1;this._open(),i.classList.remove("hide");let u=()=>{clearInterval(this._tw),h=!1,n.textContent=l},d=()=>{let g=t[o];a.textContent=o===t.length-1?"هيا ◀":"التالي ◀",typeof g=="string"?(n.className="dtext",r.textContent="",l=this.name(g),c=0,h=!0,n.textContent="",clearInterval(this._tw),this._tw=setInterval(()=>{c+=2,n.textContent=l.slice(0,c),c>=l.length&&u()},22)):(clearInterval(this._tw),h=!1,n.className="dtext holy",n.textContent=g.ayah?`﴿ ${g.ayah} ﴾`:`« ${g.hadith} »`,r.textContent=g.ref||"",this.g.audio.sfx.pop())},f=()=>{if(h){u();return}if(this.g.audio.sfx.ui(),o++,o>=t.length){clearInterval(this._tw),i.classList.add("hide"),i.onclick=null,this._close(),e();return}d()};i.onclick=f,this.keyHandler=g=>{["Enter","NumpadEnter","Space","KeyE"].includes(g.code)&&(g.preventDefault(),f())},f()})}quiz(t,{title:e="اختبار قصير"}={}){return new Promise(i=>{let n=0,r=0,a=()=>{let o=t[n],l=Te(o.a.map((x,p)=>({t:x,ok:p===0}))),c=this.showPanel(`
          <div class="phead"><span class="ptitle">${Ae(e)}</span>${t.length>1?`<span class="pstep">السؤال ${ot(n+1)} من ${ot(t.length)}</span>`:""}</div>
          <div class="qtext">${Ae(o.q)}</div>
          <div class="opts">${l.map((x,p)=>`<button class="opt" data-k="${p}"><span class="k">${ot(p+1)}</span><span>${Ae(x.t)}</span></button>`).join("")}</div>
          <div class="explain hide"></div>
          <div class="btnrow"><button class="primary next hide">${n===t.length-1?"تمّ ✔":"التالي ◀"}</button></div>`),h=!1,u=!1,d=[...c.querySelectorAll(".opt")],f=x=>{let p=d[x];if(!(!p||p.disabled||u))if(l[x].ok){u=!0,p.classList.add("ok"),d.forEach(_=>_.disabled=!0);let m=It(".explain",c);m.classList.remove("hide"),m.textContent="✔ "+(o.e||"إجابة صحيحة!"),It(".next",c).classList.remove("hide"),this.g.audio.sfx.correct()}else p.classList.add("bad"),p.disabled=!0,h||(h=!0,r++),this.g.audio.sfx.wrong()},g=()=>{u&&(this.g.audio.sfx.ui(),n++,n<t.length?a():(this.hidePanel(),i(r)))};d.forEach((x,p)=>x.onclick=()=>f(p)),It(".next",c).onclick=g,this.keyHandler=x=>{let p=/^(Digit|Numpad)([1-4])$/.exec(x.code);p?f(+p[2]-1):["Enter","NumpadEnter","Space"].includes(x.code)&&(x.preventDefault(),g())}};a()})}order(t,e,i="اضغط على الخطوات بالترتيب الصحيح"){return new Promise(n=>{let r=Te(e.map((h,u)=>({t:h,k:u}))),a=this.showPanel(`<div class="phead"><span class="ptitle">${Ae(t)}</span><span class="pstep"></span></div>
        <p class="hint">${Ae(i)}</p><div class="seq"></div>
        <div class="pool">${r.map(h=>`<button class="it" data-k="${h.k}">${Ae(h.t)}</button>`).join("")}</div>`),o=0,l=0,c=()=>It(".pstep",a).textContent=`${ot(o)} / ${ot(e.length)}`;c(),It(".pool",a).onclick=h=>{let u=h.target.closest(".it");if(u)if(+u.dataset.k===o){let d=document.createElement("div");d.className="it",d.innerHTML=`<b>${ot(o+1)}</b><span>${Ae(e[o])}</span>`,It(".seq",a).appendChild(d),u.remove(),o++,c(),this.g.audio.sfx.pop(),o===e.length&&(this.g.audio.sfx.correct(),setTimeout(()=>{this.hidePanel(),n(l)},1100))}else l++,this.g.audio.sfx.wrong(),u.classList.remove("shake"),u.offsetWidth,u.classList.add("shake")}})}match(t,e,i="اختر الاسم ثم اضغط على معناه"){return new Promise(n=>{let r=Te(e.map((u,d)=>({t:u[0],k:d}))),a=Te(e.map((u,d)=>({t:u[1],k:d}))),o=this.showPanel(`<div class="phead"><span class="ptitle">${Ae(t)}</span></div><p class="hint">${Ae(i)}</p>
        <div class="match"><div class="mcol a">${r.map(u=>`<button class="it" data-k="${u.k}">${Ae(u.t)}</button>`).join("")}</div>
        <div class="mcol b">${a.map(u=>`<button class="it" data-k="${u.k}">${Ae(u.t)}</button>`).join("")}</div></div>`),l=null,c=0,h=0;It(".match",o).onclick=u=>{let d=u.target.closest(".it");if(!(!d||d.disabled)){if(d.parentElement.classList.contains("a"))o.querySelectorAll(".mcol.a .sel").forEach(f=>f.classList.remove("sel")),l=d,d.classList.add("sel"),this.g.audio.sfx.ui();else if(l)if(l.dataset.k===d.dataset.k){for(let f of[l,d])f.classList.remove("sel"),f.classList.add("done"),f.disabled=!0;l=null,c++,this.g.audio.sfx.correct(),c===e.length&&setTimeout(()=>{this.hidePanel(),n(h)},1e3)}else h++,this.g.audio.sfx.wrong(),d.classList.remove("shake"),d.offsetWidth,d.classList.add("shake")}}})}result({id:t,stars:e,isNewBest:i}){return new Promise(n=>{let r=ye[t],a=e===3?"ممتاز! بارك الله فيك 🌟":e===2?"أحسنت! عملٌ جميل":"جيد! أعد المرحلة لتجمع نجومًا أكثر",o=this.showPanel(`<div class="result">
        <div class="rtitle">أتممتَ ${Ae(r.full)}</div>
        <div class="stars"><span>★</span><span>★</span><span>★</span></div>
        <div class="rmsg">${a}</div>
        <div class="learned"><h4>تعلّمتَ اليوم:</h4><ul>${Du[t].map(c=>`<li>${Ae(c)}</li>`).join("")}</ul></div>
        <div class="btnrow"><button class="primary" data-r="next">متابعة الرحلة ◀</button><button class="ghost" data-r="replay">إعادة المرحلة ↻</button></div></div>`);o.querySelectorAll(".stars span").forEach((c,h)=>{h<e&&setTimeout(()=>{c.classList.add("on"),this.g.audio.sfx.pop()},350+h*380)});let l=c=>{this.hidePanel(),n(c)};o.querySelector(".btnrow").onclick=c=>{let h=c.target.closest("button");h&&l(h.dataset.r)},this.keyHandler=c=>{["Enter","NumpadEnter"].includes(c.code)&&l("next")}})}mainMenu(){return new Promise(t=>{let e=this.g.save,i=Object.keys(e.stars).length>0||e.seenIntro,n=this.showPanel(`
        <div class="mtitle"><div class="bism">بسم الله الرحمن الرحيم</div><h1>رحلة النور</h1><h3>مغامرة ثلاثية الأبعاد لتعلّم أركان الإسلام وأركان الإيمان</h3></div>
        <div class="field"><label>ما اسمك؟</label><input type="text" id="pname" maxlength="16" placeholder="اكتب اسمك هنا" value="${Ae(e.name||"")}"></div>
        <div class="field"><label>اختر شخصيتك</label><div class="seg" id="pkind"><button data-v="boy">ولد</button><button data-v="girl">بنت</button></div></div>
        <div class="field"><label>مستوى الصعوبة</label><div class="seg" id="pdiff">
          <button data-v="0">مبتدئ<small>٥ – ٧ سنوات</small></button><button data-v="1">متوسط<small>٨ – ١٠ سنوات</small></button><button data-v="2">متقدّم<small>١١ سنة فأكثر</small></button></div></div>
        <button class="primary big" id="mstart">${i?"متابعة الرحلة ◀":"ابدأ الرحلة ◀"}</button>
        <div class="mrow"><button class="ghost" id="mhow">كيف ألعب؟</button><button class="ghost" id="mset">الإعدادات</button>${i?'<button class="ghost danger" id="mreset">بداية جديدة</button>':""}</div>`,"menu"),r=e.kind||"boy",a=e.diff??0,o=(h,u,d)=>{let f=It(h,n),g=()=>f.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x.dataset.v===String(u())));f.onclick=x=>{let p=x.target.closest("button");p&&(d(p.dataset.v),g(),this.g.audio.init(),this.g.audio.sfx.ui())},g()};o("#pkind",()=>r,h=>{r=h,this.g.previewKind(h)}),o("#pdiff",()=>a,h=>a=+h);let l=h=>{let u=It("#pname",n).value.trim().slice(0,16);this.hidePanel(),t({name:u,kind:r,diff:a,fresh:h})};It("#mstart",n).onclick=()=>l(!1),It("#mhow",n).onclick=async()=>{let h={name:It("#pname",n).value};await this.howTo(),e.name=h.name,t(await this.mainMenu())},It("#mset",n).onclick=async()=>{e.name=It("#pname",n).value,e.kind=r,e.diff=a,await this.settings(),t(await this.mainMenu())};let c=It("#mreset",n);c&&(c.onclick=()=>{c.dataset.sure?l(!0):(c.dataset.sure=1,c.textContent="اضغط مرة أخرى للتأكيد: سيُمسح التقدّم")})})}simple(t,e,i=""){return new Promise(n=>{let r=this.showPanel(`<div class="phead"><span class="ptitle">${t}</span><button class="pclose">✕</button></div>${e}`,i),a=o=>{this.hidePanel(),n(o)};It(".pclose",r).onclick=()=>a(null),this.keyHandler=o=>{o.code==="Escape"&&a(null)},this._fin=a})}howTo(){return this.simple("كيف ألعب؟",`<ul class="howto">
      <li>تحرّك بـ <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> أو الأسهم، واركض بـ <kbd>Shift</kbd>.</li>
      <li>اقفز بـ <kbd>المسافة</kbd>، وتفاعل بـ <kbd>E</kbd>.</li>
      <li>اسحب الفأرة لتدير الكاميرا، وقرّب أو أبعد بالعجلة.</li>
      <li>على الهاتف: عصا التحكم يسار الشاشة، واسحب يمينها لتدير الكاميرا.</li>
      <li>اتبع الفانوس «سِراج» والسهم الذهبي إلى عمود النور، ثم ابدأ التحدّي.</li>
      <li>أكمل كل ركنٍ لتضيء عموده في ساحة الأركان، واجمع ⭐ النجوم و💎 لآلئ المعرفة.</li>
      <li>الخريطة <kbd>M</kbd> • كتاب المعرفة <kbd>J</kbd> • القائمة <kbd>Esc</kbd></li></ul>`)}settings(){let t=this.g.save,e=this.simple("الإعدادات",`
      <div class="field"><label>جودة الرسوم</label><div class="seg" data-key="quality"><button data-v="0">منخفضة</button><button data-v="1">متوسطة</button><button data-v="2">عالية</button></div></div>
      <div class="field"><label>الصوت</label><div class="seg" data-key="sound"><button data-v="1">مفعَّل 🔊</button><button data-v="0">صامت 🔇</button></div></div>
      <div class="field"><label>مستوى الصعوبة</label><div class="seg" data-key="diff"><button data-v="0">مبتدئ</button><button data-v="1">متوسط</button><button data-v="2">متقدّم</button></div></div>
      <div class="btnrow"><button class="primary" id="sok">حفظ ✔</button></div>`),i=this.panel,n={quality:()=>t.quality,sound:()=>t.sound?1:0,diff:()=>t.diff};return i.querySelectorAll(".seg").forEach(r=>{let a=r.dataset.key,o=()=>r.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l.dataset.v===String(n[a]())));r.onclick=l=>{let c=l.target.closest("button");c&&(a==="sound"?t.sound=c.dataset.v==="1":t[a]=+c.dataset.v,this.g.applySettings(),o(),this.g.audio.sfx.ui())},o()}),It("#sok",i).onclick=()=>this._fin(null),e}pause(){let t=this.simple("استراحة",`<div class="menulist">
      <button class="primary" data-a="resume">متابعة اللعب ◀</button>
      <button class="ghost" data-a="map">🗺️ الخريطة والمراحل</button>
      <button class="ghost" data-a="journal">📖 كتاب المعرفة</button>
      <button class="ghost" data-a="settings">⚙️ الإعدادات</button>
      <button class="ghost" data-a="how">❔ كيف ألعب؟</button>
      <button class="ghost danger" data-a="menu">الخروج إلى القائمة الرئيسية</button></div>`,"menu");return this.panel.querySelector(".menulist").onclick=e=>{let i=e.target.closest("button");i&&this._fin(i.dataset.a)},t}map(){let t=this.g,e=t.save,i=t.nextStageId(),n=(g,x)=>{let p=ye[g],m=e.stars[g]||0,_=t.isUnlocked(g);return`<div class="strow ${_?"":"locked"}"><span class="n">${ot(x+1)}</span><span>${p.icon}</span>
        <span class="tt">${Ae(p.title)}<small>${Ae(p.place)}</small></span>
        <span class="ss">${_?"★".repeat(m)+"☆".repeat(3-m):"🔒"}</span>
        ${_?`<button data-go="${g}">${g===i?"اذهب":"انتقال"}</button>`:""}</div>`},r=ue.filter(g=>ye[g].kind==="islam"),a=ue.filter(g=>ye[g].kind==="iman"),o=this.simple("خريطة رحلة النور",`<div class="mapgrid">
      <div class="mapimg"><canvas width="400" height="400"></canvas></div>
      <div class="stlist"><h4>أركان الإسلام الخمسة</h4>${r.map(n).join("")}<h4>أركان الإيمان الستة</h4>${a.map(n).join("")}
        <div class="strow"><span>🏛️</span><span class="tt">ساحة الأركان<small>مركز الجزيرة</small></span><button data-go="plaza">انتقال</button></div></div></div>`,"wide"),l=this.panel.querySelector("canvas"),c=l.getContext("2d",{willReadFrequently:!0}),h=400;c.drawImage(t.world.mapCanvas,0,0,h,h),c.font="900 13px Cairo, sans-serif",c.textAlign="center",c.direction="rtl";let u={};ue.forEach(g=>{let x=Ie[g],[p,m]=Sr(x.x,x.z),_=ye[g];c.beginPath(),c.arc(p*h,m*h,6,0,7),c.fillStyle=e.stars[g]?"#3ecf7a":g===i?"#ffd45a":"#9aa3b5",c.fill(),c.lineWidth=2,c.strokeStyle="#0b1b3a",c.stroke(),u[_.place]||(u[_.place]=1,c.lineWidth=4,c.strokeStyle="rgba(8,20,48,.9)",c.strokeText(_.place,p*h,m*h-12),c.fillStyle="#fff",c.fillText(_.place,p*h,m*h-12))});let[d,f]=Sr(t.player.pos.x,t.player.pos.z);return c.beginPath(),c.arc(d*h,f*h,7,0,7),c.fillStyle="#ff5a4a",c.fill(),c.strokeStyle="#fff",c.lineWidth=2.5,c.stroke(),this.panel.querySelector(".stlist").onclick=g=>{let x=g.target.closest("button[data-go]");x&&this._fin(x.dataset.go)},o}journal(){let t=this.g.save,e=a=>t.stars[a]?`<div class="jcard"><b>${ye[a].icon} ${Ae(ye[a].full)}</b><ul>${Du[a].map(o=>`<li>${Ae(o)}</li>`).join("")}</ul></div>`:`<div class="jcard locked"><b>🔒 ${Ae(ye[a].full)}</b></div>`,i=ue.filter(a=>ye[a].kind==="islam"),n=ue.filter(a=>ye[a].kind==="iman"),r=t.pearls.length?t.pearls.map(a=>`<div class="pearl">💎 ${Ae(Un[a])}</div>`).join(""):'<div class="jcard locked">ابحث عن اللآلئ الزرقاء المضيئة في أرجاء الجزيرة!</div>';return this.simple("📖 كتاب المعرفة",`
      <div class="jsec"><h4>أركان الإسلام</h4>${i.map(e).join("")}</div>
      <div class="jsec"><h4>أركان الإيمان</h4>${n.map(e).join("")}</div>
      <div class="jsec"><h4>لآلئ المعرفة (${ot(t.pearls.length)} / ${ot(Un.length)})</h4>${r}</div>`,"wide")}certificate(){let t=this.g.save,e=ue.reduce((n,r)=>n+(t.stars[r]||0),0),i=this.simple("🎉 مبارك!",`<div class="cert">
      <h2>شهادة إتمام رحلة النور</h2>
      <p>نشهد بأنّ البطل / البطلة</p>
      <div class="cname">${Ae(t.name||"صديق النور")}</div>
      <p>قد أتمّ بنجاحٍ تعلُّم <b>أركان الإسلام الخمسة</b> و<b>أركان الإيمان الستة</b></p>
      <div class="cst">${"★".repeat(Math.round(e/ue.length))}</div>
      <p>مجموع النجوم: ${ot(e)} من ${ot(ue.length*3)} &nbsp;•&nbsp; لآلئ المعرفة: ${ot(t.pearls.length)} من ${ot(Un.length)}</p>
      <p>نسأل الله أن ينفعه بما تعلّم، وأن يجعله من عباده الصالحين.</p></div>
      <div class="btnrow"><button class="primary" id="cok">متابعة اللعب ◀</button><button class="ghost" id="cprint">🖨️ طباعة الشهادة</button></div>`,"wide");return It("#cok",this.panel).onclick=()=>this._fin(null),It("#cprint",this.panel).onclick=()=>window.print(),i}};var Nu=new Error("stage-abort"),fn=class{constructor(t,e){this.g=t,this.id=e,this.diff=t.save.diff,this.mistakes=0,this.objs=[],this.ups=[],this.orbs=[],this.npcs=[],this.colliders=[],this.time=0,this.start=null,this._cool={},this.abortP=new Promise((i,n)=>this._abort=n),this.abortP.catch(()=>{}),this.dead=!1}get ui(){return this.g.ui}get P(){return this.g.world.P}get player(){return this.g.player}get sky(){return this.g.sky}get fx(){return this.g.particles}get sfx(){return this.g.audio.sfx}get female(){return this.player.kind==="girl"}pick(...t){return t[Math.min(this.diff,t.length-1)]}setup(){}async run(){}abort(){this.dead=!0,this._abort(Nu)}guard(t){return Promise.race([t,this.abortP])}say(t){return this.guard(this.ui.dialog(t))}async ask(t,e){let i=await this.guard(this.ui.quiz(t,{title:e}));return this.mistakes+=i,i}async order(t,e,i){let n=await this.guard(this.ui.order(t,e,i));return this.mistakes+=Math.min(n,3),n}async match(t,e,i){let n=await this.guard(this.ui.match(t,e,i));return this.mistakes+=Math.min(n,3),n}cine(t,e,i,n){return this.guard(this.g.cinematic(t,e,i,n))}miss(t,e=null,i=1.6){if(e){if(this._cool[e]>this.time)return!1;this._cool[e]=this.time+i}return this.mistakes++,this.sfx.wrong(),t&&this.ui.toast(t,"bad"),!0}good(t,e,i=16766042){this.sfx.correct(),t&&this.ui.toast(t,"good"),e&&this.fx.burst(e,i,30,5,1.1,.42,5)}pressE(){return!this.ui.busy&&this.g.input.take("interact")}add(t){return this.g.scene.add(t),this.objs.push(t),t}remove(t){if(!t)return;t.parent&&t.parent.remove(t),dp(t);let e=this.objs.indexOf(t);e>=0&&this.objs.splice(e,1);let i=this.orbs.indexOf(t);i>=0&&this.orbs.splice(i,1)}gy(t,e){return this.g.world.groundAt(t,e)}dist(t,e){let i=this.player.pos;return Math.hypot(i.x-t,i.z-e)}onUpdate(t){return this.ups.push(t),t}offUpdate(t){let e=this.ups.indexOf(t);e>=0&&this.ups.splice(e,1)}until(t){return this.guard(new Promise(e=>{let i=(n,r)=>{let a=t(n,r);a&&(this.offUpdate(i),e(a))};this.onUpdate(i)}))}sleep(t){let e=0;return this.until(i=>(e+=i)>=t)}objective(t,e=""){this.ui.setObjective(t,e)}counter(t){this.ui.setCounter(t)}marker(t,e,i=16766042,n=2.4,r=40){let a=Ac(i,n,r);return a.position.set(t,this.gy(t,e),e),this.add(a)}async goTo(t,e,i,n="",r=3,a=16766042){let o=this.marker(t,e,a);this.objective(i,n),this.g.navTarget={x:t,z:e},await this.until(()=>this.dist(t,e)<r),this.g.navTarget=null,this.remove(o),this.sfx.collect()}orb(t,e,i,n,r,a={},o=.45,l={}){let c=Rc(n,o,r,{scale:.8,...l});return c.position.set(t,e,i),Object.assign(c.userData,a,{baseY:e,ph:Math.random()*6}),this.add(c),this.orbs.push(c),c}touching(t,e=1.35){let i=this.player.pos,n=t.position.x-i.x,r=t.position.z-i.z;if(n*n+r*r>e*e)return!1;let a=t.position.y-(i.y+.9);return a>-1.7&&a<1.25}label(t,e,i,n,r={}){let a=Ni(t,r);return a.position.set(e,i,n),this.add(a)}npc(t,e,i,n={}){let r=Er({kind:t,...n});return r.group.position.set(e,this.gy(e,i),i),r.group.rotation.y=n.yaw||0,r.homeYaw=n.yaw||0,this.add(r.group),this.npcs.push(r),n.solid!==!1&&this.colliders.push({x:e,z:i,r:.45*r.scale,br:.45*r.scale}),r}ring(t,e,i,n,r=0){let a=[];for(let o=0;o<n;o++){let l=r+o/n*Math.PI*2;a.push({x:t+Math.sin(l)*i,z:e+Math.cos(l)*i,a:l})}return a}randIn(t,e,i,n,r=[],a=2.5){for(let l=0;l<60;l++){let c=Math.random()*Math.PI*2,h=i+Math.random()*(n-i),u=t+Math.sin(c)*h,d=e+Math.cos(c)*h;if(r.some(x=>Math.hypot(x.x-u,x.z-d)<a))continue;let[f,g]=this.g.world.resolve(u,d,.8,this.colliders);if(!(Math.abs(f-u)+Math.abs(g-d)>.01)&&!(this.dist(u,d)<3))return{x:u,z:d}}let o=Math.random()*6.283;return{x:t+Math.sin(o)*n,z:e+Math.cos(o)*n}}enter(t,e){let i=this.dist(t.x,t.z)<e;return()=>{let n=this.dist(t.x,t.z)<e,r=n&&!i;return i=n,r}}yawTo(t,e,i,n){return Math.atan2(i-t,n-e)}update(t,e){this.time+=t;for(let n of this.orbs)n.userData.static||(n.position.y=n.userData.baseY+Math.sin(e*2.2+n.userData.ph)*.16,n.userData.core&&(n.userData.core.rotation.y+=t*1.5));let i=this.player.pos;for(let n of this.npcs)if(n.update(t,n.moveSpeed||0,!0),!n.moveSpeed){let r=n.group.position,o=Math.hypot(i.x-r.x,i.z-r.z)<6?Math.atan2(i.x-r.x,i.z-r.z):n.homeYaw;n.group.rotation.y+=Math.atan2(Math.sin(o-n.group.rotation.y),Math.cos(o-n.group.rotation.y))*Math.min(1,t*4)}for(let n of this.objs)n.userData.update&&n.userData.update(e,t);if(!this.ui.busy)for(let n of this.ups.slice())n(t,e)}cleanup(){for(let t of this.objs.slice())this.remove(t);this.objs=[],this.orbs=[],this.npcs=[],this.ups=[],this.ui.setCounter(null),this.ui.setTimer(null),this.ui.setMeter(null)}};function Cv(s,t,e=3.2,i=3.8){let n=new Wt,r=new Ut;r.box(.5,i,.5,15985366,-e/2,i/2,0),r.box(.5,i,.5,15985366,e/2,i/2,0),r.box(.75,.35,.75,14856266,-e/2,.17,0),r.box(.75,.35,.75,14856266,e/2,.17,0),r.torus(e/2,.27,15985366,0,i,0,0,18,Math.PI),r.torus(e/2+.28,.07,14856266,0,i,0,0,18,Math.PI),n.add(r.mesh(ne.flat));let a=e/2-.25,o=new ar;o.moveTo(-a,0),o.lineTo(-a,i),o.absarc(0,i,a,Math.PI,0,!0),o.lineTo(a,0),o.lineTo(-a,0);let l=new Le({color:s,transparent:!0,opacity:.32,blending:ri,side:Ue,depthWrite:!1,toneMapped:!1}),c=new Nt(new ya(o,16),l);n.add(c);let h=Ni(t,{scale:.95});h.position.y=i+e/2+1,n.add(h);let u=Math.random()*6;return n.userData.update=d=>{l.opacity=.26+Math.sin(d*3+u)*.1},n.userData.setColor=d=>l.color.set(d),n.userData.label=h,n}function zc(s,t,e,i,n,r,a=3.2){let o=Cv(t,e,a);o.position.set(i,s.gy(i,n),n),o.rotation.y=r,s.add(o);for(let l of[-a/2,a/2]){let[c,h]=ai(l,0,r);s.colliders.push({x:i+c,z:n+h,r:.38,br:.38})}return o}function Up(s){let t=(s-6)/12*Math.PI;return new D(Math.cos(t),Math.sin(t)*.9,Math.sin(t)*.38+.14).normalize()}var wt={x:it.garden.x,z:it.garden.z,h:it.garden.h};var Bc=16766042,Fn=6284186,Fp=8376831,Pv=16743018,kc=class extends fn{setup(){let{x:t,z:e}=it.shahada;this.C={x:t,z:e,y:it.shahada.h},this.start={x:t,z:e+10,yaw:Math.PI}}async run(){let t=this.C,e={x:t.x,z:t.z-8.5};await this.say(bt.shahada.intro);let i=bt.shahada.parts,n=this.pick([],["الحمد لله"],["الحمد لله","سبحان الله","الله أكبر"]),r=[...i.map((u,d)=>({t:u,k:d})),...n.map(u=>({t:u,k:-1}))],a=[e],o=Te(r).map((u,d)=>{let f=this.randIn(t.x,t.z,5.5,12,a,4.2);a.push(f);let g=this.diff===2&&u.k>=1&&d%2===0,x=this.diff===0&&u.k>=0?`${ot(u.k+1)} · ${u.t}`:u.t;return this.orb(f.x,t.y+(g?2.65:1.35),f.z,u.k>=0?Bc:16771504,x,{k:u.k},.42,{size:52})}),l=0;this.diff===2&&this.ui.toast("بعض الأنوار عالية: اقفز بالمسافة لتلتقطها!","gold",4),this.counter(`الكلمة ${ot(0)} / ${ot(i.length)}`),this.objective("اجمع كلمات الشهادة بالترتيب","ابدأ بـ «أشهدُ»"),await this.until(()=>{for(let u of o){if(!u.parent||!this.touching(u))continue;let d=u.userData.k;d===l?(this.good(null,u.position),this.sfx.collect(),this.remove(u),l++,this.counter(`الكلمة ${ot(l)} / ${ot(i.length)}`),this.objective(i.slice(0,l).join(" "),l<i.length?"أكمل الكلمات بالترتيب":""),this.ui.toast(i[d],"gold",2.2)):d===-1?(this.miss("هذه كلمة طيبة، لكنها ليست من كلمات الشهادة."),this.remove(u)):this.miss("ليست هذه الكلمة التالية. تذكّر الترتيب!","ord"+d,2.5)}return l>=i.length});for(let u of o)u.parent&&this.remove(u);this.g.world.peak.setLit(!0),this.sfx.win();let c=t.y+17;this.fx.fountain(new D(e.x,c,e.z),[16769162,16777215,16760906],160,16),this.counter(null),this.objective("");let h=this.cine([new D(t.x+4,t.y+4,t.z+10),new D(t.x+16,t.y+10,t.z+4),new D(t.x+20,t.y+18,t.z-6)],new D(e.x,t.y+24,e.z),7,{hold:!0});await this.say(bt.shahada.after),await h,this.g.endCine()}},Hc=class extends fn{setup(){let t=this.P.salah;this.S=t;let e=t.W(0,27),i=ai(0,-1,t.yaw);this.start={x:e.x,z:e.z,yaw:Math.atan2(i[0],i[1])}}async run(){let t=this.S;await this.say(bt.salah.intro),await this.goTo(t.fountain.x,t.fountain.z,"اذهب إلى نافورة الوضوء","في فناء المسجد",2.6,Fp),await this.say(bt.salah.wuduIntro),await this.order("خطوات الوضوء",bt.salah.wudu[this.diff]),this.fx.burst(new D(this.player.pos.x,this.player.pos.y+1.2,this.player.pos.z),Fp,40,3,1.2,.3,2),this.ui.toast("توضّأتَ! «الطُّهور شطر الإيمان»","good"),await this.say(bt.salah.timesIntro);let e=bt.salah.prayers,i=[-12,-6,0,6,12],r=(this.diff===0?e.map((l,c)=>c):Te(e.map((l,c)=>c))).map((l,c)=>{let h=t.W(i[c],13),u=zc(this,16769162,`صلاة ${e[l].name}`,h.x,h.z,t.yaw);return{pi:l,x:h.x,z:h.z,g:u}}),a=this.diff===2?Te(e.map((l,c)=>c)):e.map((l,c)=>c),o=0;for(let l of a){let c=e[l];o++,this.counter(`الصلاة ${ot(o)} / ${ot(e.length)}`),this.objective("راقب السماء…",""),await this.guard(this.sky.animateTo(c.time,3.2)),this.objective(c.clue,"اركض إلى بوابة الصلاة الصحيحة"),this.ui.toast(c.clue,"gold",4.5);let h=r.map(g=>this.enter(g,1.5)),u=this.pick(30,20,14),d=null,f=await this.until(g=>{if(!d&&(u-=g,this.ui.setTimer(u),u<=0)){this.miss(`انتهى الوقت! حان وقت صلاة ${c.name}.`);let x=r.find(p=>p.pi===l);d=this.marker(x.x,x.z,Fn,1.6,12),this.ui.setTimer(null)}for(let x=0;x<r.length;x++)if(h[x]()){if(r[x].pi===l)return r[x];this.miss(`ليس هذا وقت صلاة ${e[r[x].pi].name}.`,"g"+x,1.2)}return null});this.ui.setTimer(null),d&&this.remove(d),f.g.userData.setColor(Fn),this.good(`أحسنت! حان وقت صلاة ${c.name}`,new D(f.x,this.player.pos.y+2,f.z),Fn),await this.ask([{q:`كم عدد ركعات صلاة ${c.name}؟`,a:bt.salah.rakOpts[c.rak],e:`صلاة ${c.name} ${bt.salah.rakOpts[c.rak][0]}.`}],"عدد الركعات"),f.g.userData.setColor(16769162)}this.counter(null),await this.guard(this.sky.animateTo(10,2.5)),await this.say(bt.salah.after)}};function Iv(){let s=new Ut;return s.sphere(.22,14272416,0,0,0,1,1.05,1,10,8),s.torus(.1,.035,14856266,0,.2,0,Math.PI/2,10),s.cone(.1,.12,14272416,0,.29,0,8),s.mesh(ne.smooth,!1)}var Gc=class extends fn{setup(){let t=this.P.zakat;this.Z=t;let e=Ie.zakat;this.start={x:e.x,z:e.z,yaw:Math.PI}}async run(){let t=this.Z;await this.say(bt.zakat.intro),await this.goTo(t.house.x,t.house.z,"اذهب إلى «بيت الزكاة»","في شمال السوق",3),await this.say(bt.zakat.calcIntro),await this.ask(bt.zakat.calc[this.diff],"حساب الزكاة"),await this.say(bt.zakat.deliverIntro);let e=this.pick(3,4,4),i=this.pick(1,2,3),n=Te([...Te(bt.zakat.eligible).slice(0,e).map(h=>({...h,ok:!0})),...Te(bt.zakat.notEligible).slice(0,i).map(h=>({...h,ok:!1}))]),r=Te(t.npcSpots.slice()),a=n.map((h,u)=>{let d=r[u],f=u%3===1?"woman":"man",g=h.ok?[10127984,8022618,9211776,10522746][u%4]:[7023994,2054794,9051180][u%3],x=this.npc(f,d.x,d.z,{yaw:d.yaw,cloth:g,cloth2:h.ok?14209216:16777215,trim:h.ok?9075296:14856266}),p=this.label("❔ "+h.label,d.x,this.gy(d.x,d.z)+3.05,d.z,{scale:.72,maxWidth:520,size:40});return{...h,c:x,l:p,sp:d,done:!1}}),o=this.marker(t.table.x,t.table.z,Bc,1.6,10),l=0;this.counter(`الزكاة ${ot(0)} / ${ot(e)}`);let c=()=>{this.g.navTarget=this.player.char.carrying?null:{x:t.table.x,z:t.table.z}};await this.until(()=>{let h=!!this.player.char.carrying;!h&&this.dist(t.table.x,t.table.z)<2.6&&(this.player.char.setCarry(Iv()),this.sfx.collect(),this.ui.toast("أخذتَ كيس الزكاة. ابحث عمّن يستحقه!","gold"),this.objective("أعطِ الزكاة لمن يستحقها","اقرأ اللافتة فوق كل شخص")),c();let u=null;for(let d of a)!d.done&&this.dist(d.sp.x,d.sp.z)<2.4&&(u=d);return u&&h?(this.ui.setPrompt("أعطِ الزكاة 🤲"),this.pressE()&&(u.ok?(u.done=!0,l++,this.player.char.setCarry(null),u.l.setText("✔ "+u.label,{bg:"rgba(10,90,50,.88)",border:"#5fe39a"}),this.good(u.thanks,new D(u.sp.x,u.c.group.position.y+2,u.sp.z),Fn),this.counter(`الزكاة ${ot(l)} / ${ot(e)}`),this.objective(l<e?"خذ كيسًا آخر من الطاولة":"","")):this.miss(u.why,"n"+u.label,3))):u&&!h?this.ui.setPrompt("خذ كيس الزكاة من الطاولة أولًا",!0):this.ui.setPrompt(null),l>=e}),this.ui.setPrompt(null),this.g.navTarget=null,this.remove(o),this.counter(null),await this.say(bt.zakat.after)}},Vc=class extends fn{setup(){this.S=this.P.sawm,this.start={x:this.S.arena.x,z:this.S.arena.z+6,yaw:Math.PI}}async run(){let t=this.S,e=t.arena;await this.say(bt.sawm.intro),await this.guard(this.sky.animateTo(3.6,3)),await this.say(bt.sawm.suhoor);let i=this.pick(3,4,5),n=Te(bt.sawm.suhoorFoods).slice(0,i),r=[],a=n.map(b=>{let v=this.randIn(e.x,e.z,4,15,r,4);return r.push(v),this.orb(v.x,this.gy(v.x,v.z)+1.25,v.z,16762218,b)}),o=0,l=this.pick(45,38,30),c=l;this.objective("اجمع طعام السحور قبل الفجر!",""),this.counter(`السحور ${ot(0)} / ${ot(i)}`),await this.until(b=>{l-=b,this.ui.setTimer(l),this.sky.setTime(3.6+(1-l/c)*1.55);for(let v of a)v.parent&&this.touching(v)&&(this.remove(v),o++,this.good(null,v.position,16762218),this.counter(`السحور ${ot(o)} / ${ot(i)}`));return o>=i||l<=0}),this.ui.setTimer(null),o<i?this.miss("طلع الفجر قبل أن تُكمل سحورك! بادر بالسحور في المرة القادمة."):this.ui.toast("سحورٌ مبارك! «تسحّروا فإنّ في السحور بركة»","good");for(let b of a)b.parent&&this.remove(b);this.sky.setTime(5.3),await this.say(bt.sawm.fasting);let h=this.pick(5,7,9),u=this.pick(48,52,56),d=this.pick(5,6,6),f=this.pick(3,5,7),g=this.pick(0,.7,1.3),x=0,p=0,m=[],_=b=>{let v=this.randIn(e.x,e.z,3,16,m.map(M=>M.position),3),A=b==="deed",S=A?bt.sawm.deeds[Math.floor(Math.random()*bt.sawm.deeds.length)]:bt.sawm.dayFoods[Math.floor(Math.random()*bt.sawm.dayFoods.length)],y=this.orb(v.x,this.gy(v.x,v.z)+1.25,v.z,A?Fn:Pv,S,{kind:b});m.push(y)};for(let b=0;b<d;b++)_("deed");for(let b=0;b<f;b++)_("food");this.objective("اجمع الأعمال الصالحة 🟢 وابتعد عن الطعام والشراب 🔴","حتى تغرب الشمس"),this.counter(`الأعمال الصالحة ${ot(0)} / ${ot(h)}`),await this.until(b=>{p+=b,this.sky.setTime(5.3+p/u*(18.2-5.3)),this.ui.setTimer(u-p);let v=this.player.pos;for(let A=m.length-1;A>=0;A--){let S=m[A];if(S.userData.kind==="food"&&g){let y=v.x-S.position.x,M=v.z-S.position.z,C=Math.hypot(y,M);C<8&&C>.5&&(S.position.x+=y/C*g*b,S.position.z+=M/C*g*b)}this.touching(S)&&(m.splice(A,1),this.remove(S),S.userData.kind==="deed"?(x++,this.sfx.collect(),this.fx.burst(S.position,Fn,22,4,.9,.35,4),this.counter(x>=h?`الأعمال الصالحة ${ot(x)} ✔`:`الأعمال الصالحة ${ot(x)} / ${ot(h)}`),_("deed")):(this.miss("أنت صائم! لا نأكل ولا نشرب حتى المغرب.","food",1.2),_("food")))}return p>=u}),this.ui.setTimer(null);for(let b of m)this.remove(b);x<h?this.miss(`جمعتَ ${ot(x)} من الأعمال الصالحة. الصائم يملأ يومه بالخير!`):this.ui.toast("ما شاء الله! ملأتَ يومك بالأعمال الصالحة","good"),this.counter(null),await this.guard(this.sky.animateTo(18.4,1.2)),await this.say(bt.sawm.maghrib),await this.goTo(t.majlis.x,t.majlis.z,"اذهب إلى مائدة الإفطار","على البساط قرب الهلال",2.4),await this.say(bt.sawm.iftar),await this.ask([{q:"بماذا تبدأ إفطارك اقتداءً بالنبي ﷺ؟",a:["🌴 تمر","🍬 حلوى","🧃 عصير"],e:"كان النبي ﷺ يفطر على رُطَبات، فإن لم تكن فتمرات، فإن لم تكن حسا حسواتٍ من ماء."}],"الإفطار"),this.fx.burst(new D(t.majlisC.x,this.gy(t.majlisC.x,t.majlisC.z)+1,t.majlisC.z),16769146,50,4,1.4,.4,3),await this.say(bt.sawm.dua)}},Wc=class extends fn{setup(){this.H=this.P.hajj;let t=Ie.hajj;this.start={x:t.x,z:t.z,yaw:-Math.PI/2}}pilgrims(){let t=this.H.kaaba,e=[],i=this.g.save.quality===0?16:28;for(let a=0;a<i;a++){let o=a%3===0,l=Er({kind:o?"woman":"man",cloth:o?16052712:void 0,cloth2:16777215});o||l.setOutfit("ihram");let c=11.5+a%7*1.4+Math.random()*.6,h=Math.random()*Math.PI*2;this.add(l.group),e.push({c:l,r:c,th:h,w:(1.3+Math.random()*.5)/c})}let n=this.gy(t.x+12,t.z),r=this.add(new Wt);return r.userData.update=(a,o)=>{for(let l of e){l.th-=l.w*o;let c=t.x+Math.cos(l.th)*l.r,h=t.z+Math.sin(l.th)*l.r;l.c.group.position.set(c,n,h),l.c.group.rotation.y=Math.atan2(Math.sin(l.th),-Math.cos(l.th)),l.c.update(o,1.5,!0)}},e}async run(){let t=this.H,e=t.kaaba;this.player.speedMul=this.pick(1.5,1.4,1.3),await this.say(bt.hajj.intro),await this.goTo(t.miqat.x,t.miqat.z,"اعبر بوابة الميقات","لتُحرِم",3),this.player.char.setOutfit("ihram"),this.fx.burst(new D(this.player.pos.x,this.player.pos.y+1,this.player.pos.z),16777215,60,3.5,1.4,.35,1);let i=bt.hajj.ihram.slice();this.female&&i.splice(1,0,"والمرأة تُحرم في ثيابها الساترة المعتادة، ولا تلبس النقاب ولا القفازين."),await this.say(i),await this.goTo(t.tawafStart.x,t.tawafStart.z,"اذهب إلى خط بداية الطواف","عند ركن الحجر الأسود",2.6,Fn),this.pilgrims(),await this.say(bt.hajj.tawaf);let n=7,r=0,a=0,o=null,l=!1;this.counter(`الطواف: الشوط ${ot(1)} / ${ot(n)}`),this.objective("طُف حول الكعبة سبعة أشواط","اجعل الكعبة عن يسارك ⟲"),await this.until(()=>{let L=this.player.pos,N=L.x-e.x,I=L.z-e.z,R=Math.hypot(N,I),O=Math.atan2(I,N);return o!==null&&R<24&&R>4&&(r-=Ru(o,O)),o=O,R>=24?this.ui.setPrompt("عُد إلى صحن المطاف لتُكمل الطواف",!0):this.ui.setPrompt(null),r<a*Math.PI*2-1.3&&(l?this.ui.toast("اجعل الكعبة عن يسارك ⟲","bad",1.5):(l=!0,this.miss("الطواف عكس عقارب الساعة: اجعل الكعبة عن يسارك!")),r=a*Math.PI*2),r>=(a+1)*Math.PI*2&&(a++,this.sfx.correct(),this.fx.burst(new D(e.x,this.gy(e.x,e.z)+12,e.z),Bc,30,4,1,.5,2),a<n&&(this.ui.toast(`أتممتَ الشوط ${ot(a)} — الله أكبر`,"good",2.2),this.counter(`الطواف: الشوط ${ot(a+1)} / ${ot(n)}`))),a>=n}),this.ui.setPrompt(null),this.counter(null),await this.say(bt.hajj.afterTawaf),await this.goTo(t.safa.x,t.safa.z,"اذهب إلى الصفا","لتبدأ السعي",3.2,Fn),await this.say(bt.hajj.sai);let c=0,h=!1;for(;c<7;){let L=c%2===0?t.marwa:t.safa,N=c%2===0?"المروة":"الصفا";this.counter(`السعي: الشوط ${ot(c+1)} / ${ot(7)}`);let I=this.marker(L.x,L.z,Fn,2.4,25);this.g.navTarget=L,this.objective(`اسعَ إلى ${N}`,""),await this.until(()=>{let R=this.player.pos.z;return!h&&R<-30&&R>-50&&(h=!0,this.ui.toast("بين العَلَمين الأخضرين يُسرع الرجال في المشي","gold",4)),this.dist(L.x,L.z)<3.5}),this.remove(I),this.sfx.collect(),c++,this.ui.toast(`الشوط ${ot(c)} ✔`,"good",1.6)}this.g.navTarget=null,this.counter(null),await this.say(bt.hajj.afterSai),await this.goTo(t.mina.x,t.mina.z,"اذهب إلى مِنى","مدينة الخيام البيضاء",7),await this.say(bt.hajj.mina),await this.guard(this.sky.animateTo(21,2.2)),this.ui.banner("اليوم التاسع من ذي الحجة","يوم عرفة"),await this.guard(this.sky.animateTo(9,2.6)),await this.goTo(t.arafat.x,t.arafat.z,"اذهب إلى عرفة","قرب جبل الرحمة",8),await this.say(bt.hajj.arafat),await this.guard(this.sky.animateTo(13,1.5));let u=this.pick(16,18,20),d=0,f=0,g=this.marker(t.arafat.x,t.arafat.z,Bc,26,0);this.objective("ابقَ في عرفة وادعُ الله حتى الغروب","لا تخرج من الدائرة الذهبية"),await this.until(L=>{if(this.dist(t.arafat.x,t.arafat.z)<26){if(d+=L/u,f-=L,this.sky.setTime(13+d*5.2),f<=0&&(f=6,this.ui.toast(bt.hajj.arafatDua,"gold",4.5)),Math.random()<.3){let I=Math.random()*6.28;this.fx.emit(this.player.pos.x+Math.cos(I),this.player.pos.y+.3,this.player.pos.z+Math.sin(I),0,1.4,0,16770976,1.4,.18,-.3)}}else this.miss("ابقَ داخل حدود عرفة حتى تغرب الشمس!","arafat",4);return this.counter(`الوقوف بعرفة ${ot(Math.min(100,Math.round(d*100)))}٪`),d>=1}),this.remove(g),this.counter(null),await this.say(bt.hajj.afterArafat),await this.goTo(t.muzdalifah.x,t.muzdalifah.z,"اذهب إلى مزدلفة","",8),await this.guard(this.sky.animateTo(21.5,2)),await this.say(bt.hajj.muzdalifah);let x=t.muzdalifah,p=[];for(let L=0;L<7;L++){let N=this.randIn(x.x,x.z,3,13,p.map(I=>I.position),2.5);p.push(this.orb(N.x,this.gy(N.x,N.z)+.7,N.z,14673663,null,{},.2))}let m=0;this.objective("التقط سبع حصيات صغيرة",""),this.counter(`الحصى ${ot(0)} / ${ot(7)}`),await this.until(()=>{for(let L of p)L.parent&&this.touching(L,1.5)&&(this.remove(L),m++,this.sfx.collect(),this.counter(`الحصى ${ot(m)} / ${ot(7)}`));return m>=7}),this.counter(null),await this.guard(this.sky.animateTo(7.2,2.5)),this.ui.banner("يوم النحر","العاشر من ذي الحجة — يوم العيد"),await this.goTo(t.throwSpot.x,t.throwSpot.z,"اذهب إلى جمرة العقبة","قف أمامها لترمي",2.6),await this.say(bt.hajj.jamarat),this.player.teleport(t.throwSpot.x,t.throwSpot.z,Math.PI/2),this.player.frozen=!0;let _=t.jamarat,b=this.gy(_.x,_.z),v=this.pick(.3,.2,.13),A=this.pick(2,2.8,3.6),S=0,y=0,M=.5,C=0,T=null;this.objective("اضغط «ارمِ» عندما يكون المؤشر في المنطقة الخضراء","وقل: الله أكبر"),this.counter(`الرمي ${ot(0)} / ${ot(7)}`),await this.until(L=>{if(C+=L*A,M=.5+.48*Math.sin(C),this.ui.setMeter(M,.5-v/2,.5+v/2),T){T.t+=L/.75;let N=T,I=Math.min(1,N.t);N.m.position.lerpVectors(N.a,N.b,I),N.m.position.y+=Math.sin(I*Math.PI)*3.2,I>=1&&(N.hit?(S++,this.sfx.hit(),this.fx.burst(N.b,16773312,24,3.5,.8,.3,6),this.ui.toast(`الله أكبر ✔ (${ot(S)} / ${ot(7)})`,"good",1.5),this.counter(`الرمي ${ot(S)} / ${ot(7)}`)):(this.sfx.land(),this.ui.toast("لم تُصب الحوض، حاول مرة أخرى","bad",1.4)),this.remove(N.m),T=null)}else if(this.ui.setPrompt("ارمِ الحصاة 🤾"),this.pressE()){let N=Math.abs(M-.5)<=v/2;!N&&y<3&&(y++,this.mistakes++);let I=new Nt(new Me(.12,0),new ee({color:12433066})),R=new D(this.player.pos.x+.3,this.player.pos.y+1.5,this.player.pos.z),O=N?new D(_.x-.8,b+3.5,_.z+(Math.random()-.5)*2):new D(_.x-6.5+Math.random()*2,b+.1,_.z+(Math.random()-.5)*4);T={m:this.add(I),a:R,b:O,t:0,hit:N},this.sfx.throw()}return S>=7&&!T}),this.ui.setPrompt(null),this.ui.setMeter(null),this.counter(null),this.player.frozen=!1,await this.say(bt.hajj.rest),this.diff>=1&&await this.order("رتّب مناسك الحج",bt.hajj.order[this.diff]),this.player.char.setOutfit("normal"),this.player.speedMul=1}};var Op=16766042,Lv=6284186,Dv=16738922,Fe=(s,t,e)=>new D(s,t,e),ns=class extends fn{setup(){let t=Ie[this.id];this.a0=t.angle,this.start={x:t.x,z:t.z,yaw:Math.atan2(-Math.sin(t.angle),-Math.cos(t.angle))},this.build()}build(){}spots(t,e,i=Math.PI*2){let n=[];for(let r=0;r<e;r++){let a=this.a0+(i>=6.2?r/e*i:(r/Math.max(1,e-1)-.5)*i);n.push({x:wt.x+Math.sin(a)*t,z:wt.z+Math.cos(a)*t,a})}return n}eye(){let t=this.player.pos;return Fe(t.x,t.y+1.6,t.z)}},Xc=class extends ns{async run(){await this.say(bt.allah.intro);let e=this.pick(["sun","rain","plants"],["sun","night","rain","plants"],["sun","night","rain","mountain","sea","plants"]).map(o=>bt.allah.signs.find(l=>l.key===o)),i={sun:16760906,night:9414911,rain:8376831,mountain:1322e4,sea:5228768,plants:8380576},n=this.spots(9,e.length),r=e.map((o,l)=>{let c=n[l];return{s:o,...c,m:this.marker(c.x,c.z,i[o.key],1.9,14),l:this.label("🔎 "+o.title,c.x,wt.h+4.2,c.z,{scale:.9}),done:!1}}),a=0;for(this.counter(`آيات الله ${ot(0)} / ${ot(e.length)}`);a<r.length;){this.objective("ادخل دوائر التأمّل وتفكّر في خلق الله","كل دائرة تُريك آيةً من آيات الله");let o=await this.until(()=>r.find(l=>!l.done&&this.dist(l.x,l.z)<2));o.done=!0,this.remove(o.m),this.remove(o.l),this.objective(""),this.sfx.whoosh(),await this.showSign(o.s),a++,this.counter(`آيات الله ${ot(a)} / ${ot(e.length)}`),await this.ask([o.s.q],"تأمّل وأجب")}this.counter(null),await this.say(bt.allah.namesIntro),await this.match("الأسماء الحسنى",bt.allah.names.slice(0,this.pick(3,4,6)),"اختر الاسم ثم اضغط على معناه"),await this.say(bt.allah.after)}async showSign(t){let e=this.eye(),i=this.g.camera.position.clone(),n,r,a=null;switch(t.key){case"sun":{a=this.sky.animateTo(6.7,3);let l=Up(6.7);n=Fe(e.x-l.x*4,e.y+1.2,e.z-l.z*4),r=e.clone().addScaledVector(l,300);break}case"night":a=this.sky.animateTo(21.5,3),n=Fe(e.x,e.y+1,e.z+4),r=Fe(e.x,e.y+90,e.z-120);break;case"rain":this.sky.setWeather("rain"),n=Fe(e.x+5,e.y+2.5,e.z+5),r=Fe(wt.x,wt.h+6,wt.z);break;case"mountain":{let h=this.g.world.heightAt(-118,-172);n=Fe(wt.x+10,wt.h+16,wt.z-6),r=Fe(-118,h*.75,-172);break}case"sea":n=Fe(wt.x+18,wt.h+14,wt.z+4),r=Fe(wt.x+220,0,wt.z-30);break;default:{n=Fe(wt.x+8,wt.h+7,wt.z+26),r=Fe(wt.x,wt.h+1,wt.z-4);let l=[16740259,16765773,16777215,12946431,8380576];for(let c=0;c<40;c++){let h=c/40*Math.PI*2;this.fx.burst(Fe(wt.x+Math.sin(h)*32.5,wt.h+.6,wt.z+Math.cos(h)*32.5),l[c%l.length],6,2.2,1.6,.4,.5)}}}let o=this.cine([i,i.clone().lerp(n,.5).add(Fe(0,2,0)),n],r,3.2,{hold:!0});a&&await this.guard(a),await o,await this.say(t.lines),this.g.endCine(),this.sky.setWeather("clear"),(t.key==="sun"||t.key==="night")&&this.sky.animateTo(10,2.5)}},qc=class extends ns{async run(){await this.say(bt.malaika.intro);let t=bt.malaika.pairs.slice(0,this.pick(3,4,6)),e=this.spots(10,t.length,t.length>4?Math.PI*2:Math.PI*1.4),n=Te(t).map((a,o)=>{let l=e[o];return{pr:a,...l,g:zc(this,16774344,a.name,l.x,l.z,l.a,3.4)}}),r=0;for(let a of Te(t)){r++,this.counter(`السؤال ${ot(r)} / ${ot(t.length)}`);let o=`مَن الموكَّل بـ: ${a.ask}؟`;this.objective(o,"ادخل البوابة التي تحمل الاسم الصحيح"),this.ui.toast(o,"gold",4);let l=n.map(h=>this.enter(h,1.35)),c=await this.until(()=>{for(let h=0;h<n.length;h++)if(l[h]()){if(n[h].pr===a)return n[h];this.miss(`لا، ${n[h].pr.name}: ${n[h].pr.job}.`,"g"+h,1.5)}return null});c.g.userData.setColor(Lv),this.good(`صحيح! ${a.name}: ${a.job}`,Fe(c.x,wt.h+3,c.z),16774344),this.fx.fountain(Fe(c.x,wt.h,c.z),[16777215,16773296],50,10)}this.counter(null),await this.say(bt.malaika.after)}};function Nv(s){let t=new Ut;return t.box(.82,.2,1.08,s,0,0,0),t.box(.76,.16,1,16183516,.04,0,0),t.box(.06,.21,1.08,14856266,-.4,0,0),t.box(.3,.02,.3,14856266,0,.11,0),t.mesh(ne.flat,!1)}var Yc=class extends ns{async run(){await this.say(bt.kutub.intro);let t=bt.kutub.books.slice(0,this.pick(3,4,5)),e=Te(t),i=this.spots(12,e.length,Math.PI*1.5),n=e.map((o,l)=>{let c=i[l],h=new Ut;h.cyl(.85,1,.4,14273972,0,.2,0,10),h.cyl(.5,.6,1,15985366,0,.9,0,10),h.cyl(.8,.6,.2,14856266,0,1.5,0,10);let u=h.mesh(ne.flat);u.position.set(c.x,wt.h,c.z),this.add(u),this.colliders.push({x:c.x,z:c.z,r:.95,br:.95});let d=this.label(o.to,c.x,wt.h+3.4,c.z,{scale:.95});return{bk:o,...c,l:d,filled:!1}}),r=t.map(o=>{let l=this.randIn(wt.x,wt.z,2.5,7.5,[],2.6),c=new Wt,h=Nv(o.color);c.add(h);let u=Ni(o.name,{scale:.75});return u.position.y=.9,c.add(u),c.position.set(l.x,wt.h+1.1,l.z),Object.assign(c.userData,{baseY:wt.h+1.1,ph:Math.random()*6,core:h,bk:o}),this.add(c),this.orbs.push(c),c}),a=0;this.counter(`الكتب ${ot(0)} / ${ot(t.length)}`),this.objective("احمل كل كتابٍ إلى الرسول الذي أُنزل عليه","اقترب من الكتاب واضغط E"),await this.until(()=>{let o=this.player.char,l=o.carrying;if(l){let c=n.find(h=>!h.filled&&this.dist(h.x,h.z)<2.4);if(c){if(this.ui.setPrompt("ضع الكتاب هنا"),this.pressE()){let h=l.userData.bk;c.bk===h?(c.filled=!0,a++,o.setCarry(null),this.g.scene.add(l),l.scale.setScalar(1),l.position.set(c.x,wt.h+1.75,c.z),l.rotation.set(0,c.a,0),l.userData.static=!0,c.l.setText("✔ "+h.to+": "+h.name,{bg:"rgba(10,90,50,.88)",border:"#5fe39a"}),this.good(`${h.name} ← ${h.to}`,Fe(c.x,wt.h+2.2,c.z)),this.fx.fountain(Fe(c.x,wt.h+1.6,c.z),[16777215,h.color],50,8),this.counter(`الكتب ${ot(a)} / ${ot(t.length)}`)):this.miss(`ليس ${c.bk.to} مَن أُنزل عليه «${h.name}». حاول مرة أخرى!`,"p"+c.bk.name,2)}}else this.ui.setPrompt(null)}else{let c=r.find(h=>this.orbs.includes(h)&&this.touching(h,1.6));c?(this.ui.setPrompt(`احمل «${c.userData.bk.name}»`),this.pressE()&&(this.orbs.splice(this.orbs.indexOf(c),1),c.userData.core.rotation.set(0,0,0),o.setCarry(c),c.scale.setScalar(.8),this.sfx.collect())):this.ui.setPrompt(null)}return a>=t.length}),this.ui.setPrompt(null),this.counter(null),await this.say(bt.kutub.after)}};function Uv(s){let t=new Ut,e=new Ut;switch(t.cyl(2,2.2,.3,14273972,0,.15,0,14),s){case"ark":t.add(new pe(3.4,.9,1.3),9067059,0,1,0),t.add(new Mi(.7,1,4),9067059,1.95,1,0,0,Math.PI/4,-Math.PI/2),t.add(new Mi(.7,.8,4),9067059,-1.85,1,0,0,Math.PI/4,Math.PI/2),t.box(1.4,.7,1,10514495,0,1.8,0),t.cyl(.06,.06,2.6,6175518,.4,2.6,0,6),t.add(new pe(.04,1.6,1.1),15918796,.45,2.8,0,0,0,0);break;case"staff":t.add(new xe(.06,.07,2.4,6),7031343,0,1.4,0,0,0,.2),t.add(new wn(.16,.05,6,10,Math.PI),7031343,-.26,2.6,0,0,0,.2),t.box(.6,1.8,3.2,3840720,-1.3,1.2,0),t.box(.6,1.8,3.2,3840720,1.3,1.2,0),t.box(.62,.3,3.22,14217983,-1.3,2.1,0),t.box(.62,.3,3.22,14217983,1.3,2.1,0);break;case"fire":for(let n=0;n<4;n++)t.add(new xe(.1,.1,1.4,6),5913118,0,.45,0,Math.PI/2.3,n*.8,0);e.cone(.55,1.4,16751162,0,1.1,0,8),e.cone(.32,1,16769146,0,1.05,0,8);for(let n=0;n<10;n++){let r=n/10*6.283;t.sphere(.16,[16740259,16777215,16765773][n%3],Math.cos(r)*1.4,.45,Math.sin(r)*1.4,1,.8,1,6,5),t.cyl(.03,.03,.3,4165432,Math.cos(r)*1.4,.3,Math.sin(r)*1.4,4)}break;case"well":t.cyl(1,1.05,1,10128508,0,.8,0,12),t.cyl(.8,.8,.05,1718874,0,1.2,0,12),t.cyl(.07,.07,2.2,7031343,-.9,1.4,0,6),t.cyl(.07,.07,2.2,7031343,.9,1.4,0,6),t.add(new xe(.06,.06,2,6),7031343,0,2.4,0,0,0,Math.PI/2),t.cyl(.18,.15,.3,9067059,0,1.75,0,8);break;case"cave":t.add(new Me(1.9,1),9076076,0,1.2,-.3,0,.3,0,1.2,.9,1),t.add(new Me(1.2,1),8023647,1.3,.9,.2,0,.8,0),t.add(new De(.75,10,8,0,Math.PI*2,0,Math.PI/2),1840914,0,.3,1.25,Math.PI/2,0,0,1,1.2,1),e.sphere(.25,16773808,0,.9,1.3,1,1,1,8,6);break;case"cradle":t.box(1.5,.55,.85,13214315,0,.95,0),t.box(1.36,.5,.72,16183264,0,1,0),t.torus(.75,.06,9067059,0,.75,.38,0,14,Math.PI,0,Math.PI),t.torus(.75,.06,9067059,0,.75,-.38,0,14,Math.PI,0,Math.PI),t.cyl(.05,.05,1.3,9067059,.7,1.6,0,6),t.add(new De(.5,10,6,0,Math.PI),12574975,.7,2.2,0,0,Math.PI/2,0);break;case"whale":t.cyl(1.9,1.9,.12,3838136,0,.36,0,18),t.sphere(1,3960474,0,1,0,1.8,.85,.95,14,10),t.sphere(.8,14214894,.1,.75,0,1.6,.4,.85,12,8),t.add(new Mi(.5,1,4),3960474,-2.1,1.1,0,0,Math.PI/4,Math.PI/2),t.add(new pe(.15,.25,1.4),3960474,-2.6,1.15,0),t.sphere(.07,1118481,1.3,1.25,.6,1,1,1,6,5),t.sphere(.07,1118481,1.3,1.25,-.6,1,1,1,6,5);break}let i=new Wt;return i.add(t.mesh(ne.flat)),e.empty||i.add(e.mesh(Di(2.2),!1)),i}var $c=class extends ns{async run(){await this.say(bt.rusul.intro);let t=bt.rusul.symbols.slice(0,this.pick(4,5,7)),e=this.spots(11,t.length),i=t.map((a,o)=>{let l=e[o],c=Uv(a.key);c.position.set(l.x,wt.h,l.z),c.rotation.y=l.a+Math.PI,this.add(c),this.colliders.push({x:l.x,z:l.z,r:1.8,br:1.8});let h=this.label(a.label,l.x,wt.h+4.4,l.z,{scale:1});if(a.key==="fire"){let u=this.add(new Wt);u.userData.update=()=>{Math.random()<.6&&this.fx.emit(l.x+(Math.random()-.5)*.6,wt.h+1.3,l.z+(Math.random()-.5)*.6,0,1.6+Math.random(),0,Math.random()<.5?16747050:16765002,.8,.38,-.5)}}return{s:a,...l,l:h,seen:!1}}),n=0;for(this.counter(`القصص ${ot(0)} / ${ot(i.length)}`);n<i.length;){this.objective("زُر كل رمزٍ لتسمع قصة النبي","اقترب من الرمز");let a=await this.until(()=>i.find(o=>!o.seen&&this.dist(o.x,o.z)<3.3));a.seen=!0,n++,this.sfx.whoosh(),this.counter(`القصص ${ot(n)} / ${ot(i.length)}`),await this.say([`«${a.s.label}» تذكّرنا بـ ${a.s.name}.`,a.s.story]),a.l.setText("✔ "+a.s.label)}this.counter(null),await this.say(bt.rusul.challenge);let r=0;for(let a of Te(i)){r++;let l=this.diff===2||this.diff===1&&r%2===0?`أيُّ رمزٍ يذكّرنا بالنبي الذي: ${a.s.story.replace(/\.$/,"")}؟`:`اذهب إلى الرمز الذي يذكّرنا بـ ${a.s.name}`;this.objective(l,"اذهب إلى الرمز الصحيح"),this.ui.toast(l,"gold",5),this.counter(`التحدّي ${ot(r)} / ${ot(i.length)}`);let c=i.map(u=>this.enter(u,3.1)),h=await this.until(()=>{for(let u=0;u<i.length;u++)if(c[u]()){if(i[u]===a)return a;this.miss(`لا، «${i[u].s.label}» تذكّرنا بـ ${i[u].s.name}.`,"r"+u,1.5)}return null});this.good(`صحيح! ${h.s.name}`,Fe(h.x,wt.h+3,h.z))}this.counter(null),await this.say(bt.rusul.after)}},Zc=class extends ns{build(){let t=new Ut,e=new Ut;t.cyl(1.4,1.7,.6,14273972,0,.3,0,12),t.cyl(.28,.4,6.2,14856266,0,3.4,0,10),t.sphere(.45,14856266,0,6.6,0,1,1,1,10,8);let i=t.mesh(ne.flat);i.position.set(wt.x,wt.h,wt.z),this.add(i),this.colliders.push({x:wt.x,z:wt.z,r:1.6,br:1.6});let n=new Wt;n.position.set(wt.x,wt.h+6.4,wt.z),this.add(n);let r=new Ut;r.box(9,.28,.32,14856266,0,0,0),r.sphere(.25,14856266,4.5,0,0),r.sphere(.25,14856266,-4.5,0,0),n.add(r.mesh(ne.gold,!0));let a=(h,u)=>{let d=new Wt,f=new Ut;f.add(new De(1.4,16,6,0,Math.PI*2,Math.PI/2,Math.PI/2),h,0,0,0,0,0,0,1,.45,1);for(let x=0;x<3;x++){let p=x/3*6.283;f.add(new xe(.025,.025,2.6,4),12092970,Math.cos(p)*.65,1.3,Math.sin(p)*.65,Math.sin(p)*.25,0,-Math.cos(p)*.25)}d.add(f.mesh(ne.double));let g=new Nt(new De(.7,12,8),new Le({color:u,toneMapped:!1,transparent:!0,opacity:.85}));return g.position.y=-.1,g.scale.setScalar(.01),d.add(g),d.userData.glow=g,this.add(d),d};this.panGood=a(14856266,new et(1.6,1.5,.6)),this.panBad=a(5920096,new et(.6,.15,.2)),this.beam=n;let o=this.label("الحسنات",0,0,0,{scale:.85,bg:"rgba(10,90,50,.88)",border:"#5fe39a"}),l=this.label("السيئات",0,0,0,{scale:.85,bg:"rgba(90,20,30,.88)",border:"#ff8a8a"});this.tilt=0,this.tiltT=0;let c=this.add(new Wt);c.userData.update=(h,u)=>{this.tilt=gi(this.tilt,this.tiltT,3,u||.016),n.rotation.z=this.tilt;let d=Math.cos(this.tilt),f=Math.sin(this.tilt);this.panGood.position.set(wt.x+4.5*d,wt.h+6.4+4.5*f-2.6,wt.z),this.panBad.position.set(wt.x-4.5*d,wt.h+6.4-4.5*f-2.6,wt.z),o.position.set(this.panGood.position.x,this.panGood.position.y-1.3,wt.z+1.6),l.position.set(this.panBad.position.x,this.panBad.position.y-1.3,wt.z+1.6)}}async run(){await this.say(bt.akhirah.intro);let t=this.pick(6,8,10),e=this.pick(80,65,55),i=this.pick(5,5,6),n=this.pick(3,5,7),r=this.pick(0,.8,1.4),a=0,o=0,l=e,c=[],h=d=>{let f=this.randIn(wt.x,wt.z,3.5,15,c.map(x=>x.position),3),g=d?bt.akhirah.good:bt.akhirah.bad;c.push(this.orb(f.x,wt.h+1.25,f.z,d?Op:Dv,g[Math.floor(Math.random()*g.length)],{good:d}))};for(let d=0;d<i;d++)h(!0);for(let d=0;d<n;d++)h(!1);let u=()=>{this.tiltT=he((a-o*1.2)/t,-1,1)*-.32,this.panGood.userData.glow.scale.setScalar(.01+Math.min(1,a/t)),this.panBad.userData.glow.scale.setScalar(.01+Math.min(1,o/5)),this.counter(`الحسنات ${ot(a)} / ${ot(t)}`)};u(),this.objective("املأ ميزانك بالحسنات 🟡 وتجنّب السيئات 🔴",""),await this.until(d=>{l-=d,this.ui.setTimer(l);let f=this.player.pos;for(let g=c.length-1;g>=0;g--){let x=c[g];if(!x.userData.good&&r){let p=f.x-x.position.x,m=f.z-x.position.z,_=Math.hypot(p,m);_<7&&_>.5&&(x.position.x+=p/_*r*d,x.position.z+=m/_*r*d)}this.touching(x)&&(c.splice(g,1),this.remove(x),x.userData.good?(a++,this.sfx.collect(),this.fx.burst(x.position,Op,20,4,.9,.35,3),this.ui.toast("+ "+x.userData.label.userData.text,"good",1.6),h(!0)):(o++,this.miss(`«${x.userData.label.userData.text}» سيئة! ابتعد عنها.`,"bad",1.2),h(!1)),u())}return a>=t||l<=0}),this.ui.setTimer(null);for(let d of c)this.remove(d);a<t&&this.miss("انتهى الوقت! في الحياة نسارع إلى الخيرات قبل فوات الأوان."),this.tiltT=-.32,this.fx.fountain(this.panGood.position.clone(),[16766042,16777215,8380576],120,10),this.sfx.win(),this.counter(null),await this.say(bt.akhirah.after)}},jc=class extends ns{async run(){await this.say(bt.qadar.intro);let t=Te(bt.qadar.scenes).slice(0,this.pick(3,4,6)),e=0;for(let i of t){e++,this.counter(`الموقف ${ot(e)} / ${ot(t.length)}`),this.sky.setWeather(i.weather),await this.guard(this.sky.animateTo(i.time,2)),await this.say([i.text]);let n=Te(i.opts),r=Math.atan2(this.player.pos.x-wt.x,this.player.pos.z-wt.z)+Math.PI,a=n.map((c,h)=>{let u=r+(h-1)*.9,d=wt.x+Math.sin(u)*8,f=wt.z+Math.cos(u)*8;return{o:c,x:d,z:f,m:this.marker(d,f,(c.correct,16769162),1.8,6),l:this.label(c.label,d,wt.h+3.4,f,{scale:.72,maxWidth:480})}});this.objective(i.text,"اذهب إلى التصرّف الصحيح");let o=a.map(c=>this.enter(c,1.9)),l=await this.until(()=>{for(let c=0;c<a.length;c++)if(o[c]()){if(a[c].o.correct)return a[c];this.miss(a[c].o.why,"q"+c,1.5)}return null});this.good("أحسنت! هكذا يفعل المؤمن",Fe(l.x,wt.h+1,l.z)),this.fx.fountain(Fe(l.x,wt.h,l.z),[16766042,8380576,16777215],70,10),await this.sleep(.8);for(let c of a)this.remove(c.m),this.remove(c.l)}this.counter(null),this.sky.setWeather("clear"),await this.guard(this.sky.animateTo(10,2)),await this.say(bt.qadar.after)}};var Fv={shahada:kc,salah:Hc,zakat:Gc,sawm:Vc,hajj:Wc,allah:Xc,malaika:qc,kutub:Yc,rusul:$c,akhirah:Zc,qadar:jc},zp="rihlat-alnoor-v1",Bp={name:"",kind:"boy",diff:0,quality:null,sound:!0,stars:{},pearls:[],seenIntro:!1,finale:!1,pos:null},Jc=s=>new Promise(t=>setTimeout(t,s*1e3)),Qi=new D,Es=new D,Kc=class{constructor(){this.mode="boot",this.stage=null,this.cine=null,this.navTarget=null,this.t=0,this.frameN=0,this.saveT=0,this._pendingLight=null,this.fireworks=!1}loadSave(){let t=null;try{t=JSON.parse(localStorage.getItem(zp)||"null")}catch{t=null}return Object.assign(JSON.parse(JSON.stringify(Bp)),t||{})}persist(){try{localStorage.setItem(zp,JSON.stringify(this.save))}catch{}}async init(){let t=document.getElementById("bootbar"),e=document.getElementById("boottxt"),i=(u,d)=>{t.style.width=Math.round(u*100)+"%",d&&(e.textContent=d)},n=()=>new Promise(u=>requestAnimationFrame(()=>setTimeout(u,0)));i(.05,"تحميل الخطوط العربية…");try{await Promise.race([Promise.all(["900 40px Cairo","700 40px Cairo","400 40px Cairo","700 40px Amiri"].map(u=>document.fonts.load(u,"بسم"))),Jc(3)])}catch{}this.save=this.loadSave();let r=matchMedia("(pointer: coarse)").matches;this.save.quality===null&&(this.save.quality=r?0:1);let a=this.save.quality,o=document.getElementById("c");try{this.renderer=new oc({canvas:o,antialias:!1,powerPreference:"high-performance"})}catch(u){throw e.textContent="عذرًا، هذا المتصفح لا يدعم الرسوم ثلاثية الأبعاد (WebGL).",u}let l=this.renderer;l.shadowMap.enabled=!0,l.shadowMap.type=ms,l.toneMapping=xs,l.toneMappingExposure=1,this.scene=new Jr,this.camera=new ui(58,1,.3,4e3),this.sky=new yc(this.scene),this.particles=new Tc(this.scene),this.audio=new Uc,this.input=new Nc(o),this.ui=new Oc(this),this.input.onTouchMode=()=>this.ui.setTouch(),this.input.onJoy=(u,d,f,g,x)=>this.ui.joy(u,d,f,g,x),r&&(this.input.isTouch=!0,this.ui.setTouch()),i(.15,"بناء الجزيرة والمعالم…"),await n(),this.world=new Lc(this.scene,this.sky,this.particles,{veg:[.45,.75,1][a]},u=>i(.15+u*.75)),i(.92,"تجهيز الشخصيات…"),await n(),this.player=new Fc(this,this.save.kind),this.player.teleport(0,30,Math.PI),this.lantern=Dp(),this.lantern.position.set(1,9,30),this.scene.add(this.lantern);let c=new Ne(4,4,{type:We,samples:a>=1?4:0});this.composer=new dc(l,c),this.composer.addPass(new fc(this.scene,this.camera)),this.bloom=new yr(new st(256,256),.5,.65,1),this.composer.addPass(this.bloom),this.composer.addPass(new pc),this.buildPearls(),this.buildSiteMarkers(),this.applySettings(),this.refreshWorld();try{l.compile(this.scene,this.camera)}catch{}i(1,"جاهز!"),this._lw=0,this._lh=0,this.resize(),this.last=performance.now(),requestAnimationFrame(u=>this.frame(u));let h=document.getElementById("boot");h.style.opacity="0",setTimeout(()=>h.remove(),900),window.addEventListener("beforeunload",()=>this.persist()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.persist()}),this.showMenu()}applySettings(){let t=this.save,e=t.quality,i=window.devicePixelRatio||1;this.renderer.setPixelRatio([Math.min(i,1),Math.min(i,1.5),Math.min(i,2)][e]),this.bloom.enabled=e>=1;let n=[1024,2048,4096][e],r=this.sky.sun.shadow;r.mapSize.x!==n&&(r.mapSize.set(n,n),r.map&&(r.map.dispose(),r.map=null)),this.audio.setEnabled(t.sound),this._lw=0,this.ui.updateProgress()}resize(){let t=this.renderer.domElement,e=Math.max(2,t.clientWidth||innerWidth),i=Math.max(2,t.clientHeight||innerHeight);e===this._lw&&i===this._lh||(this._lw=e,this._lh=i,this.renderer.setSize(e,i,!1),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,i),this.camera.aspect=e/i,this.camera.fov=e/i<.8?70:58,this.camera.updateProjectionMatrix(),this.particles.scale.value=i*this.renderer.getPixelRatio()*.9)}isDone(t){return!!this.save.stars[t]}isUnlocked(t){let e=ue.indexOf(t);return e===0||this.isDone(t)||this.isDone(ue[e-1])}nextStageId(){return ue.find(t=>!this.isDone(t))||null}refreshWorld(){let t=this.save.stars,e=this._pendingLight,i=a=>!!t[a]&&a!==e,n=ue.filter(a=>ye[a].kind==="islam").map(i),r=ue.filter(a=>ye[a].kind==="iman").map(i);this.world.monument.setProgress(n,r),this.world.peak.setLit(i("shahada")),this.refreshSiteMarkers(),this.ui.updateProgress()}buildSiteMarkers(){this.siteMarkers={};for(let t of ue){let e=Ie[t],i=ye[t],n=new Wt,r=Ac(16766042,2.4,70),a=Ni(`${i.icon} ${i.title}`,{scale:1});a.position.y=5.4,n.add(r,a),n.position.set(e.x,this.world.groundAt(e.x,e.z),e.z),n.userData={m:r,l:a},this.scene.add(n),this.siteMarkers[t]=n}}refreshSiteMarkers(){let t=this.nextStageId();for(let e of ue){let i=this.siteMarkers[e],n=this.isDone(e),r=this.isUnlocked(e);i.visible=r&&this.mode!=="stage",i.userData.m.userData.setColor(n?6284186:16766042);let a=i.userData.m.children[2];a.visible=e===t,i.userData.l.setText(`${ye[e].icon} ${ye[e].title}${n?" "+"★".repeat(this.save.stars[e]):""}`)}}buildPearls(){let t=Kn(777),e=this.world,i=[],n=[...Object.values(Ie),{x:0,z:0}];for(let r=0;r<6e3&&i.length<Un.length;r++){let a=-320+t()*570,o=-240+t()*480,l=e.heightAt(a,o);if(l<2.2||l>40||i.some(u=>Math.hypot(u.x-a,u.z-o)<34)||n.some(u=>Math.hypot(u.x-a,u.z-o)<14))continue;let[c,h]=e.resolve(a,o,.9);Math.abs(c-a)+Math.abs(h-o)>.01||i.push({x:a,z:o})}this.pearls=i.map((r,a)=>{let o=Rc(8376831,.32);return o.position.set(r.x,e.groundAt(r.x,r.z)+1.3,r.z),o.userData.i=a,o.userData.baseY=o.position.y,o.visible=!this.save.pearls.includes(a),this.scene.add(o),o})}updatePearls(t,e){let i=this.player.pos;for(let n of this.pearls){if(!n.visible)continue;n.position.y=n.userData.baseY+Math.sin(e*2+n.userData.i)*.2,n.userData.core.rotation.y+=t*2;let r=n.position.x-i.x,a=n.position.z-i.z;r*r+a*a<2.2&&Math.abs(n.position.y-(i.y+1))<1.6&&this.mode!=="menu"&&(n.visible=!1,this.save.pearls.includes(n.userData.i)||this.save.pearls.push(n.userData.i),this.persist(),this.audio.sfx.collect(),this.particles.burst(n.position,8376831,30,4,1,.4,4),this.ui.toast(`💎 لؤلؤة معرفة (${ot(this.save.pearls.length)} / ${ot(Un.length)}): ${Un[n.userData.i]}`,"gold",6.5),this.ui.updateProgress())}}cinematic(t,e,i,{hold:n=!1,lookTo:r=null}={}){return new Promise(a=>{this.cine&&this.cine.res&&this.cine.res(),this.cine={curve:new rr(t),look:e.clone(),lookTo:r?r.clone():null,t:0,dur:i,hold:n,res:a,done:!1}})}endCine(){if(!this.cine)return;let t=this.cine;this.cine=null,t.done||t.res()}updateCine(t){let e=this.cine;e.t+=t;let i=he(e.t/e.dur,0,1),n=i*i*(3-2*i);this.camera.position.copy(e.curve.getPoint(n)),Qi.copy(e.look),e.lookTo&&Qi.lerp(e.lookTo,n),this.camera.lookAt(Qi),i>=1&&!e.done&&(e.done=!0,e.res(),e.hold||(this.cine=null))}previewKind(t){t!==this.player.kind&&(this.player.setKind(t),this.player.syncVisual(0))}async showMenu(){this.mode="menu",this.ui.showHud(!1),this.ui.setObjective(""),this.ui.setPrompt(null),this.ui.setNav(null),this.sky.speed=.06;let t=await this.ui.mainMenu();if(this.audio.init(),t.fresh){let e={quality:this.save.quality,sound:this.save.sound};this.save=Object.assign(JSON.parse(JSON.stringify(Bp)),e);for(let i of this.pearls)i.visible=!0}if(this.save.name=t.name,this.save.kind=t.kind,this.save.diff=t.diff,this.persist(),this.previewKind(t.kind),this.applySettings(),this.sky.speed=.02,this.ui.showHud(!0),this.refreshWorld(),!this.save.seenIntro)this.player.teleport(0,30,Math.PI),await this.intro();else{let e=this.save.pos;e&&Math.abs(e.x)<400&&Math.abs(e.z)<400?this.player.teleport(e.x,e.z,e.yaw):this.player.teleport(0,30,Math.PI),this.mode="free",this.ui.banner(`أهلًا بعودتك يا ${this.save.name||"بطل النور"}!`,"تابع رحلتك")}}async intro(){this.mode="cutscene";let t=[[-70,70,140],[80,60,90],[110,55,-40],[20,45,-120],[-60,40,-40],[-14,18,46]].map(i=>new D(...i)),e=this.cinematic(t,new D(0,10,0),20,{hold:!0});this.ui.banner("رحلة النور","جزيرة الأركان"),await this.ui.dialog(bt.welcome),await Promise.race([e,Jc(.1)]),this.endCine(),this.save.seenIntro=!0,this.persist(),this.mode="free",this.ui.toast(this.input.isTouch?bt.controlsTouch:bt.controls,"gold",9)}hudAction(t){if(!(this.mode==="menu"||this.mode==="boot")){if(t==="sound"){this.save.sound=!this.save.sound,this.applySettings(),this.persist();return}this.ui.busy||(t==="pause"?this.openPause():t==="map"?this.openMap():t==="journal"&&this.ui.journal())}}async openPause(){let t=await this.ui.pause();if(t==="map")return this.openMap();if(t==="journal")return this.ui.journal();if(t==="settings"){await this.ui.settings(),this.persist();return}if(t==="how")return this.ui.howTo();if(t==="menu")return this.stage&&this.quitStage(!0),this.cine&&this.endCine(),this.persist(),this.showMenu()}async openMap(){let t=await this.ui.map();if(t){if(this.stage||this.mode!=="free"){this.ui.toast("أكمل التحدّي الحالي أو اخرج منه أولًا","bad");return}await this.travel(t)}}siteSpot(t){let e=Ie[t];if(e.angle!==void 0)return{x:it.garden.x+Math.sin(e.angle)*30,z:it.garden.z+Math.cos(e.angle)*30,yaw:Math.atan2(-Math.sin(e.angle),-Math.cos(e.angle))};let i=-e.x,n=30-e.z,r=Math.hypot(i,n)||1,a=e.x+i/r*7,o=e.z+n/r*7;return{x:a,z:o,yaw:Math.atan2(e.x-a,e.z-o)}}async travel(t){if(this.mode="cutscene",this.audio.sfx.whoosh(),await this.ui.fade(!0,.4),t==="plaza")this.player.teleport(0,30,Math.PI);else{let e=this.siteSpot(t);this.player.teleport(e.x,e.z,e.yaw)}await this.ui.fade(!1,.4),this.mode="free"}async startStage(t){if(this.stage||this.mode!=="free")return;let e=ye[t],i=new Fv[t](this,t);this.stage=i,this.mode="stage",this.navTarget=null,this.ui.setPrompt(null),this.audio.sfx.whoosh(),await this.ui.fade(!0,.45),this.sky.speed=0,this.sky.setWeather("clear"),i.setup(),this.player.extraColliders=i.colliders;for(let d of i.colliders)d.br===void 0&&(d.br=d.hw!==void 0?Math.hypot(d.hw,d.hd):d.r);let n=i.start||this.siteSpot(t);this.player.teleport(n.x,n.z,n.yaw),this.refreshSiteMarkers(),this.ui.setStage(e.full),await this.ui.fade(!1,.45),this.ui.banner(e.full,e.place);let r=!1;try{await i.run();for(let d of i.colliders)d.br===void 0&&(d.br=d.r);i.objective("الاختبار الأخير","أجب عن الأسئلة لتحصل على النجوم"),await i.ask(Np(t,this.save.diff),"اختبار: "+e.title),r=!0}catch(d){d!==Nu&&(console.error(d),this.ui.toast("حدث خطأ غير متوقع، أعد المحاولة","bad"))}if(!r){this.stage===i&&this.endStage(i);return}let[a,o]=e.thr,l=i.mistakes,c=l<=a?3:l<=o?2:1,h=!this.isDone(t);if(this.save.stars[t]=Math.max(this.save.stars[t]||0,c),this.persist(),h&&(this._pendingLight=t),this.endStage(i),this.mode="cutscene",this.audio.sfx.win(),this.particles.fountain(this.player.pos.clone(),[16766042,16777215,8380576,8376831],140,13),await this.ui.result({id:t,stars:c})==="replay")return this._pendingLight=null,this.refreshWorld(),this.mode="free",this.startStage(t);await this.celebrate(t,h)}endStage(t){t.cleanup(),this.stage=null,this.mode="free";let e=this.player;e.extraColliders=null,e.frozen=!1,e.speedMul=1,e.char.setOutfit("normal"),e.char.setCarry(null),this.endCine(),this.navTarget=null,this.ui.setStage(null),this.ui.setObjective(""),this.ui.setNav(null),this.ui.setPrompt(null),this.sky.setWeather("clear"),this.sky.animateTo(10,2.5).then(()=>{this.stage||(this.sky.speed=.02)}),this.refreshWorld()}quitStage(t=!1){let e=this.stage;e&&(e.abort(),this.ui.closeAll(),this.endStage(e),t||this.ui.toast("خرجتَ من التحدّي، ويمكنك العودة إليه متى شئت.","gold"))}async celebrate(t,e){let i=ye[t],n=i.kind==="islam";if(!e){this.mode="free",this.showNextHint();return}let r=ue.filter(_=>ye[_].kind===i.kind),a=r.indexOf(t),o=n?a/5*Math.PI*2:a/6*Math.PI*2+Math.PI/6,l=n?12:25.5,c=it.plaza.h+1.08,h=Math.sin(o)*l,u=-Math.cos(o)*l;this.mode="cutscene",await this.ui.fade(!0,.5);let d=l+(n?9:5);this.player.teleport(Math.sin(o)*d,-Math.cos(o)*d,Math.atan2(-Math.sin(o),Math.cos(o)));let f=new D(h,c+(n?7.5:4.4),u),g=[],x=n?15:9;for(let _=0;_<=4;_++){let b=o-.8+_*.4;g.push(new D(h+Math.sin(b)*x,c+(n?4:2.6)+_*.7,u-Math.cos(b)*x))}let p=this.cinematic(g,f,7);await this.ui.fade(!1,.5),await Jc(.9),this._pendingLight=null,this.refreshWorld(),this.audio.sfx.win(),this.particles.fountain(new D(h,c+(n?13:5),u),[16766042,16777215,n?16771488:8376831],180,12);let m=ue.filter(_=>this.isDone(_)).length;if(this.ui.banner(n?`أضاء عمود ${i.title}!`:`أضاء مصباح ${i.title}!`,`${ot(m)} من ${ot(ue.length)} أركان`),await p,this.mode="free",ue.every(_=>this.isDone(_))){this.save.finale||await this.finale();return}if(t==="hajj"){let _=this.cinematic([this.camera.position.clone(),new D(30,34,40)],new D(0,18,0),4,{hold:!0});this.mode="cutscene",await this.ui.dialog(["ما شاء الله تبارك الله! أضأتَ أعمدة الإسلام الخمسة، فاكتملت القبّة فوقها!","تذكّر: هذه الأركان هي الأعمدة التي يقوم عليها بناء الإسلام.","والآن إلى «حديقة الإيمان» في الشمال الشرقي، لنتعلّم أركان الإيمان الستة ونضيء مصابيحها."]),await _,this.endCine(),this.mode="free"}this.showNextHint()}showNextHint(){let t=this.nextStageId();t&&this.ui.toast(`التالي: ${ye[t].full} — اتبع السهم الذهبي ونور سِراج`,"gold",5)}async finale(){this.mode="cutscene",await this.ui.fade(!0,.6),this.sky.setTime(20.2),this.player.teleport(0,34,Math.PI);let t=[];for(let i=0;i<=8;i++){let n=i/8*Math.PI*2+.4;t.push(new D(Math.sin(n)*52,24+Math.sin(i)*5,Math.cos(n)*52))}let e=this.cinematic(t,new D(0,13,0),26,{hold:!0});await this.ui.fade(!1,.6),this.fireworks=!0,this.audio.sfx.win(),this.ui.banner("ما شاء الله!","اكتملت رحلة النور"),await this.ui.dialog(bt.finale),await Promise.race([e,Jc(.1)]),this.endCine(),this.fireworks=!1,this.save.finale=!0,this.persist(),this.mode="free",await this.ui.certificate(),this.sky.animateTo(9.5,3).then(()=>this.sky.speed=.02),this.ui.toast("تجوّل في الجزيرة، واجمع لآلئ المعرفة، وأعد المراحل لتجمع كل النجوم!","gold",7)}updateFree(){let t=this.player.pos,e=null,i=4.4;for(let r of ue){let a=Ie[r],o=Math.hypot(t.x-a.x,t.z-a.z);o<i&&(i=o,e=r)}if(e){let r=ye[e];if(this.isUnlocked(e)){let a=this.save.stars[e];this.ui.setPrompt(`${r.icon} ${a?"أعد":"ابدأ"}: ${r.full}${a?" "+"★".repeat(a):""}`),!this.ui.busy&&this.input.take("interact")&&this.startStage(e)}else{let a=ue[ue.indexOf(e)-1];this.ui.setPrompt(`🔒 أكمل «${ye[a].title}» أولًا`,!0)}}else this.ui.setPrompt(null);let n=this.nextStageId();if(n){let r=ye[n];this.ui.setObjective(`التالي: ${r.full}`,`اذهب إلى «${r.place}» — اتبع السهم الذهبي`),this.navTarget=Ie[n]}else this.ui.setObjective("أتممتَ رحلة النور! 🌟","تجوّل واجمع لآلئ المعرفة وأعد المراحل لتجمع النجوم"),this.navTarget=null}updateLantern(t,e){let i=this.lantern,n=this.player.pos,r=this.player.camYaw;Qi.set(n.x+Math.cos(r)*.9-Math.sin(r)*.6,n.y+2.3+Math.sin(e*2)*.12,n.z-Math.sin(r)*.9-Math.cos(r)*.6);let a=this.navTarget;if(a&&this.mode!=="menu"){let l=a.x-n.x,c=a.z-n.z,h=Math.hypot(l,c);if(h>6){let u=Math.min(2.4,h*.2)*(.6+.4*Math.sin(e*1.6));Qi.x+=l/h*u,Qi.z+=c/h*u}}i.position.distanceToSquared(Qi)>400&&i.position.copy(Qi),i.position.x=gi(i.position.x,Qi.x,4,t),i.position.y=gi(i.position.y,Qi.y,4,t),i.position.z=gi(i.position.z,Qi.z,4,t),i.rotation.y+=t*.8;let o=this.sky.night;i.userData.light.intensity=3+o*18,i.userData.halo.scale.setScalar(1.4+o*1.2+Math.sin(e*3)*.08)}updateNav(){let t=this.navTarget;if(!t||this.mode==="menu"||this.cine){this.ui.setNav(null);return}let e=this.player.pos,i=t.x-e.x,n=t.z-e.z,r=Math.hypot(i,n);if(r<5){this.ui.setNav(null);return}this.camera.getWorldDirection(Es),Es.y=0,Es.normalize();let a=-Es.z,o=Es.x,l=Math.atan2(i*a+n*o,i*Es.x+n*Es.z);this.ui.setNav(l,r)}frame(t){requestAnimationFrame(l=>this.frame(l));let e=Math.min(.05,Math.max(1e-4,(t-this.last)/1e3));this.last=t,this.t+=e,this.frameN++;let i=this.t,n=this.ui,r=this.input;this.resize(),r.frame(e),Lu.value=i,Cu.value=i;let a=(this.mode==="free"||this.mode==="stage")&&!this.cine&&!n.busy;this.mode!=="menu"?this.player.update(e,r,a):this.player.syncVisual(e),this.cine?this.world.focus.copy(this.cine.look):this.world.focus.copy(this.player.pos),this.sky.update(e,this.camera,this.world.focus),this.world.update(e,i),this.stage&&this.stage.update(e,i),this.particles.update(e),this.updatePearls(e,i),this.updateLantern(e,i);for(let l in this.siteMarkers){let c=this.siteMarkers[l];c.visible&&c.userData.m.userData.update(i)}if(this.mode==="free"&&this.updateFree(),(this.mode==="free"||this.mode==="stage")&&!n.busy&&!this.cine&&(r.take("pause")?this.openPause():r.take("map")?this.openMap():r.take("journal")&&n.journal()),this.fireworks&&Math.random()<e*3){let l=[16766042,8376831,16740259,8380576,16777215,12946431],c=Math.random()*6.28,h=10+Math.random()*30;this.particles.burst(new D(Math.sin(c)*h,34+Math.random()*18,Math.cos(c)*h),l[Math.floor(Math.random()*l.length)],70,9,1.8,.55,3),this.audio.sfx.pop()}if(this.mode==="menu"){let l=i*.05;this.camera.position.set(Math.sin(l)*62,30+Math.sin(i*.13)*4,Math.cos(l)*62),this.camera.lookAt(0,11,0)}else this.cine?this.updateCine(e):this.player.updateCamera(e,this.camera);if(this.updateNav(),this.mode!=="menu"&&this.frameN%4===0&&n.drawMinimap(),this.mode==="free"&&(this.saveT+=e,this.saveT>6)){this.saveT=0;let l=this.player.pos;this.save.pos={x:+l.x.toFixed(1),z:+l.z.toFixed(1),yaw:+this.player.yaw.toFixed(2)},this.persist()}let o=this.world.heightAt(this.player.pos.x,this.player.pos.z);this.audio.update(e,{night:this.sky.night,coast:1-mi(1,7,o),rain:this.sky.rain,high:mi(20,40,this.player.pos.y)}),this.composer.render(e),r.endFrame()}};var Ov=new Kc;Ov.init().catch(s=>{console.error(s);let t=document.getElementById("boottxt");t&&(t.textContent="تعذّر تشغيل اللعبة: "+(s&&s.message?s.message:s))});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
