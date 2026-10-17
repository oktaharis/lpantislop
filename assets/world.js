var Fc=0,ul=1,Oc=2;var ir=1,Bc=2,_s=3,_i=0,$e=1,mn=2,Ln=0,xs=1,fl=2,dl=3,pl=4,zc=5;var Ri=100,kc=101,Vc=102,Gc=103,Hc=104,Wc=200,Xc=201,qc=202,Yc=203,ml=204,gl=205,Zc=206,Jc=207,$c=208,Kc=209,Qc=210,jc=211,th=212,eh=213,nh=214,Qr=0,jr=1,to=2,es=3,eo=4,no=5,io=6,so=7,_l=0,ih=1,sh=2,bn=0,xl=1,vl=2,yl=3,sr=4,Sl=5,Ml=6,bl=7;var wl=300,xi=301,Ii=302,Pi=303,Po=304,rr=306,ai=1e3,dn=1001,ro=1002,ke=1003,rh=1004;var or=1005;var Ce=1006,Lo=1007;var Kn=1008;var nn=1009,El=1010,Tl=1011,vs=1012,Uo=1013,wn=1014,Ke=1015,He=1016,Do=1017,No=1018,ys=1020,Al=35902,Cl=35899,Rl=1021,Il=1022,Ne=1023,In=1026,vi=1027,yi=1028,Fo=1029,sn=1030,Oo=1031;var Bo=1033,ar=33776,lr=33777,cr=33778,hr=33779,zo=35840,ko=35841,Vo=35842,Go=35843,Ho=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,ur=37490,Zo=37491,Jo=37808,$o=37809,Ko=37810,Qo=37811,jo=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,la=37821,ca=36492,ha=36494,ua=36495,fa=36283,da=36284,fr=36285,pa=36286;var Bs=2300,oo=2301,$r=2302,nl=2303,il=2400,sl=2401,rl=2402;var oh=3200;var ma=0,ah=1,Qn="",Ie="srgb",ln="srgb-linear",zs="linear",Me="srgb";var Kr=7680;var lh=519,ch=512,hh=513,uh=514,ga=515,fh=516,dh=517,_a=518,ph=519,mh=35044;var Pl="300 es",Sn=2e3,ns=2001;function fu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function du(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){let i=is("canvas");return i.style.display="block",i}var cc={},ss=null;function Ll(...i){let t="THREE."+i.shift();ss?ss("log",t,...i):console.log(t,...i)}function _h(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=_h(i);let t="THREE."+i.shift();if(ss)ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=_h(i);let t="THREE."+i.shift();if(ss)ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in cc||(cc[t]=!0,$t(...i))}function xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vh={[Qr]:jr,[to]:io,[eo]:so,[es]:no,[jr]:Qr,[io]:to,[so]:eo,[no]:es},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,Fs=Math.PI/180,rs=180/Math.PI;function Ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Ul(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mu(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function gu(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function _u(i,t=1){return t-Math.abs(Ul(i,t*2)-t)}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Su(i,t){return i+Math.random()*(t-i)}function Mu(i){return i*(.5-Math.random())}function bu(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Fs}function Eu(i){return i*rs}function Tu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ru(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),g=r((n-t)/2),y=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*d,a*h);break;case"YZY":i.set(l*d,a*u,l*f,a*h);break;case"ZXZ":i.set(l*f,l*d,a*u,a*h);break;case"XZX":i.set(a*u,l*y,l*g,a*h);break;case"YXY":i.set(l*g,a*u,l*y,a*h);break;case"ZYZ":i.set(l*y,l*g,a*u,a*h);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var En={DEG2RAD:Fs,RAD2DEG:rs,generateUUID:Ss,clamp:he,euclideanModulo:Ul,mapLinear:pu,inverseLerp:mu,lerp:Os,damp:gu,pingpong:_u,smoothstep:xu,smootherstep:vu,randInt:yu,randFloat:Su,randFloatSpread:Mu,seededRandom:bu,degToRad:wu,radToDeg:Eu,isPowerOfTwo:Tu,ceilPowerOfTwo:Au,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Ru,normalize:Je,denormalize:Qi},zl=class zl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zl.prototype.isVector2=!0;var ue=zl,pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],d=r[o+0],g=r[o+1],y=r[o+2],b=r[o+3];if(f!==b||l!==d||h!==g||u!==y){let _=l*d+h*g+u*y+f*b;_<0&&(d=-d,g=-g,y=-y,b=-b,_=-_);let m=1-a;if(_<.9995){let L=Math.acos(_),D=Math.sin(L);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D,l=l*m+d*a,h=h*m+g*a,u=u*m+y*a,f=f*m+b*a}else{l=l*m+d*a,h=h*m+g*a,u=u*m+y*a,f=f*m+b*a;let L=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=L,h*=L,u*=L,f*=L}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o],d=r[o+1],g=r[o+2],y=r[o+3];return t[e]=a*y+u*f+l*g-h*d,t[e+1]=l*y+u*d+h*f-a*g,t[e+2]=h*y+u*g+a*d-l*f,t[e+3]=u*y-a*f-l*d-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),f=a(r/2),d=l(n/2),g=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=d*u*f+h*g*y,this._y=h*g*f-d*u*y,this._z=h*u*y+d*g*f,this._w=h*u*f-d*g*y;break;case"YXZ":this._x=d*u*f+h*g*y,this._y=h*g*f-d*u*y,this._z=h*u*y-d*g*f,this._w=h*u*f+d*g*y;break;case"ZXY":this._x=d*u*f-h*g*y,this._y=h*g*f+d*u*y,this._z=h*u*y+d*g*f,this._w=h*u*f-d*g*y;break;case"ZYX":this._x=d*u*f-h*g*y,this._y=h*g*f+d*u*y,this._z=h*u*y-d*g*f,this._w=h*u*f+d*g*y;break;case"YZX":this._x=d*u*f+h*g*y,this._y=h*g*f+d*u*y,this._z=h*u*y-d*g*f,this._w=h*u*f-d*g*y;break;case"XZY":this._x=d*u*f-h*g*y,this._y=h*g*f-d*u*y,this._z=h*u*y+d*g*f,this._w=h*u*f+d*g*y;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-h)*g,this._z=(o-s)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+h)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(r-h)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+h)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),u=Math.sin(h);l=Math.sin(l*h)/u,e=Math.sin(e*h)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kl=class kl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*h+o*f-a*u,this.y=n+l*u+a*h-r*f,this.z=s+l*f+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kl.prototype.isVector3=!0;var V=kl,La=new V,uc=new pn,Vl=class Vl{constructor(t,e,n,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],f=n[7],d=n[2],g=n[5],y=n[8],b=s[0],_=s[3],m=s[6],L=s[1],D=s[4],w=s[7],C=s[2],A=s[5],U=s[8];return r[0]=o*b+a*L+l*C,r[3]=o*_+a*D+l*A,r[6]=o*m+a*w+l*U,r[1]=h*b+u*L+f*C,r[4]=h*_+u*D+f*A,r[7]=h*m+u*w+f*U,r[2]=d*b+g*L+y*C,r[5]=d*_+g*D+y*A,r[8]=d*m+g*w+y*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=u*o-a*h,d=a*l-u*r,g=h*r-o*l,y=e*f+n*d+s*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=f*b,t[1]=(s*h-u*n)*b,t[2]=(a*n-s*o)*b,t[3]=d*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=g*b,t[7]=(n*l-h*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vl.prototype.isMatrix3=!0;var ee=Vl,Ua=new ee,fc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iu(){let i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var de=Iu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=is("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var Lu=0,Na=new V,Ge=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=Ce,o=Kn,a=Ne,l=nn,h=i.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Ss(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=wl;Ge.DEFAULT_ANISOTROPY=1;var Gl=class Gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],f=l[8],d=l[1],g=l[5],y=l[9],b=l[2],_=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(y-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(y+_)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(h+1)/2,w=(g+1)/2,C=(m+1)/2,A=(u+d)/4,U=(f+b)/4,S=(y+_)/4;return D>w&&D>C?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=A/n,r=U/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=U/r,s=S/r),this.set(n,s,r,e),this}let L=Math.sqrt((_-y)*(_-y)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(L)<.001&&(L=1),this.x=(_-y)/L,this.y=(f-b)/L,this.z=(d-u)/L,this.w=Math.acos((h+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;var Re=Gl,lo=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ge(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ks=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Io=class Io{constructor(t,e,n,s,r,o,a,l,h,u,f,d,g,y,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,u,f,d,g,y,b,_)}set(t,e,n,s,r,o,a,l,h,u,f,d,g,y,b,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=d,m[3]=g,m[7]=y,m[11]=b,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*u,g=o*f,y=a*u,b=a*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=g+y*h,e[5]=d-b*h,e[9]=-a*l,e[2]=b-d*h,e[6]=y+g*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,g=l*f,y=h*u,b=h*f;e[0]=d+b*a,e[4]=y*a-g,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=g*a-y,e[6]=b+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,g=l*f,y=h*u,b=h*f;e[0]=d-b*a,e[4]=-o*f,e[8]=y+g*a,e[1]=g+y*a,e[5]=o*u,e[9]=b-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,g=o*f,y=a*u,b=a*f;e[0]=l*u,e[4]=y*h-g,e[8]=d*h+b,e[1]=l*f,e[5]=b*h+d,e[9]=g*h-y,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,g=o*h,y=a*l,b=a*h;e[0]=l*u,e[4]=b-d*f,e[8]=y*f+g,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=g*f+y,e[10]=d-b*f}else if(t.order==="XZY"){let d=o*l,g=o*h,y=a*l,b=a*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=d*f+b,e[5]=o*u,e[9]=g*f-y,e[2]=y*f-g,e[6]=a*u,e[10]=b*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Du)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(n,on),ei.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(n,on)),ei.normalize(),Rr.crossVectors(on,ei),s[0]=ei.x,s[4]=Rr.x,s[8]=on.x,s[1]=ei.y,s[5]=Rr.y,s[9]=on.y,s[2]=ei.z,s[6]=Rr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],f=n[5],d=n[9],g=n[13],y=n[2],b=n[6],_=n[10],m=n[14],L=n[3],D=n[7],w=n[11],C=n[15],A=s[0],U=s[4],S=s[8],P=s[12],N=s[1],k=s[5],X=s[9],Z=s[13],B=s[2],J=s[6],rt=s[10],ot=s[14],dt=s[3],et=s[7],ft=s[11],ut=s[15];return r[0]=o*A+a*N+l*B+h*dt,r[4]=o*U+a*k+l*J+h*et,r[8]=o*S+a*X+l*rt+h*ft,r[12]=o*P+a*Z+l*ot+h*ut,r[1]=u*A+f*N+d*B+g*dt,r[5]=u*U+f*k+d*J+g*et,r[9]=u*S+f*X+d*rt+g*ft,r[13]=u*P+f*Z+d*ot+g*ut,r[2]=y*A+b*N+_*B+m*dt,r[6]=y*U+b*k+_*J+m*et,r[10]=y*S+b*X+_*rt+m*ft,r[14]=y*P+b*Z+_*ot+m*ut,r[3]=L*A+D*N+w*B+C*dt,r[7]=L*U+D*k+w*J+C*et,r[11]=L*S+D*X+w*rt+C*ft,r[15]=L*P+D*Z+w*ot+C*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],f=t[6],d=t[10],g=t[14],y=t[3],b=t[7],_=t[11],m=t[15],L=l*g-h*d,D=a*g-h*f,w=a*d-l*f,C=o*g-h*u,A=o*d-l*u,U=o*f-a*u;return e*(b*L-_*D+m*w)-n*(y*L-_*C+m*A)+s*(y*D-b*C+m*U)-r*(y*w-b*A+_*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],u=t[10];return e*(o*u-a*h)-n*(r*u-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],g=t[11],y=t[12],b=t[13],_=t[14],m=t[15],L=e*a-n*o,D=e*l-s*o,w=e*h-r*o,C=n*l-s*a,A=n*h-r*a,U=s*h-r*l,S=u*b-f*y,P=u*_-d*y,N=u*m-g*y,k=f*_-d*b,X=f*m-g*b,Z=d*m-g*_,B=L*Z-D*X+w*k+C*N-A*P+U*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/B;return t[0]=(a*Z-l*X+h*k)*J,t[1]=(s*X-n*Z-r*k)*J,t[2]=(b*U-_*A+m*C)*J,t[3]=(d*A-f*U-g*C)*J,t[4]=(l*N-o*Z-h*P)*J,t[5]=(e*Z-s*N+r*P)*J,t[6]=(_*w-y*U-m*D)*J,t[7]=(u*U-d*w+g*D)*J,t[8]=(o*X-a*N+h*S)*J,t[9]=(n*N-e*X-r*S)*J,t[10]=(y*A-b*w+m*L)*J,t[11]=(f*w-u*A-g*L)*J,t[12]=(a*P-o*k-l*S)*J,t[13]=(e*k-n*P+s*S)*J,t[14]=(b*D-y*C-_*L)*J,t[15]=(u*C-f*D+d*L)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,f=a+a,d=r*h,g=r*u,y=r*f,b=o*u,_=o*f,m=a*f,L=l*h,D=l*u,w=l*f,C=n.x,A=n.y,U=n.z;return s[0]=(1-(b+m))*C,s[1]=(g+w)*C,s[2]=(y-D)*C,s[3]=0,s[4]=(g-w)*A,s[5]=(1-(d+m))*A,s[6]=(_+L)*A,s[7]=0,s[8]=(y+D)*U,s[9]=(_-L)*U,s[10]=(1-(d+b))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);let h=1/o,u=1/a,f=1/l;return _n.elements[0]*=h,_n.elements[1]*=h,_n.elements[2]*=h,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let h=this.elements,u=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),y,b;if(l)y=r/(o-r),b=o*r/(o-r);else if(a===Sn)y=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===ns)y=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let h=this.elements,u=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),y,b;if(l)y=1/(o-r),b=o/(o-r);else if(a===Sn)y=-2/(o-r),b=-(o+r)/(o-r);else if(a===ns)y=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Io.prototype.isMatrix4=!0;var Te=Io,zi=new V,_n=new Te,Uu=new V(0,0,0),Du=new V(1,1,1),ei=new V,Rr=new V,on=new V,pc=new Te,mc=new pn,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],f=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nu=0,gc=new V,ki=new pn,zn=new Te,Ir=new V,Ls=new V,Fu=new V,Ou=new pn,_c=new V(1,0,0),xc=new V(0,1,0),vc=new V(0,0,1),yc={type:"added"},Bu={type:"removed"},Vi={type:"childadded",child:null},Fa={type:"childremoved",child:null},Pe=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Zn,n=new pn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new ee}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ls,Ir,this.up):zn.lookAt(Ir,Ls,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(zn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),g=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new V(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zu={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let b of t.hand.values()){let _=e.getJointPose(b,n),m=this._getHandJoint(h,b);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,y=.005;h.inputState.pinching&&d>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Ul(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oa(o,r,t+1/3),this.g=Oa(o,r,t),this.b=Oa(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return de.workingToColorSpace(Xe.copy(this),t),Math.round(he(Xe.r*255,0,255))*65536+Math.round(he(Xe.g*255,0,255))*256+Math.round(he(Xe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ie){de.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Pr);let n=Os(ni.h,Pr.h,e),s=Os(ni.s,Pr.s,e),r=Os(ni.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new ie;ie.NAMES=yh;var Gs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new V,kn=new V,Ba=new V,Vn=new V,Gi=new V,Hi=new V,Sc=new V,za=new V,ka=new V,Va=new V,Ga=new Re,Ha=new Re,Wa=new Re,oi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),kn.subVectors(n,e),Ba.subVectors(t,e);let o=xn.dot(xn),a=xn.dot(kn),l=xn.dot(Ba),h=kn.dot(kn),u=kn.dot(Ba),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,g=(h*l-a*u)*d,y=(o*u-a*l)*d;return r.set(1-g-y,y,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ga.setScalar(0),Ha.setScalar(0),Wa.setScalar(0),Ga.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Wa,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gi.subVectors(s,n),Hi.subVectors(r,n),za.subVectors(t,n);let l=Gi.dot(za),h=Hi.dot(za);if(l<=0&&h<=0)return e.copy(n);ka.subVectors(t,s);let u=Gi.dot(ka),f=Hi.dot(ka);if(u>=0&&f<=u)return e.copy(s);let d=l*f-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Gi,o);Va.subVectors(t,r);let g=Gi.dot(Va),y=Hi.dot(Va);if(y>=0&&g<=y)return e.copy(r);let b=g*h-l*y;if(b<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(n).addScaledVector(Hi,a);let _=u*y-g*f;if(_<=0&&f-u>=0&&g-y>=0)return Sc.subVectors(r,s),a=(f-u)/(f-u+(g-y)),e.copy(s).addScaledVector(Sc,a);let m=1/(_+b+d);return o=b*m,a=d*m,e.copy(n).addScaledVector(Gi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Ur.subVectors(this.max,Us),Wi.subVectors(t.a,Us),Xi.subVectors(t.b,Us),qi.subVectors(t.c,Us),ii.subVectors(Xi,Wi),si.subVectors(qi,Xi),bi.subVectors(Wi,qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-bi.z,bi.y,ii.z,0,-ii.x,si.z,0,-si.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!Xa(e,Wi,Xi,qi,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Wi,Xi,qi,Ur))?!1:(Dr.crossVectors(ii,si),e=[Dr.x,Dr.y,Dr.z],Xa(e,Wi,Xi,qi,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gn=[new V,new V,new V,new V,new V,new V,new V,new V],vn=new V,Lr=new li,Wi=new V,Xi=new V,qi=new V,ii=new V,si=new V,bi=new V,Us=new V,Ur=new V,Dr=new V,wi=new V;function Xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),h=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var Xn=ku();function ku(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,s[l]=-h-1,s[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,s[l]=13,s[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Vu(i){Math.abs(i)>65504&&$t("DataUtils.toHalfFloat(): Value out of range."),i=he(i,-65504,65504),Xn.floatView[0]=i;let t=Xn.uint32View[0],e=t>>23&511;return Xn.baseTable[e]+((t&8388607)>>Xn.shiftTable[e])}function Gu(i){let t=i>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[t]+(i&1023)]+Xn.exponentTable[t],Xn.floatView[0]}var Mn=class{static toHalfFloat(t){return Vu(t)}static fromHalfFloat(t){return Gu(t)}},Le=new V,Nr=new ue,Hu=0,je=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=Ke,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var we=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wu=new li,Ds=new V,qa=new V,Ci=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(qa)),this.expandByPoint(Ds.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xu=0,fn=new Te,Ya=new Pe,Yi=new V,an=new li,Ns=new li,ze=new V,Ue=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,Ns.min),an.expandByPoint(ze),ze.addVectors(an.max,Ns.max),an.expandByPoint(ze)):(an.expandByPoint(Ns.min),an.expandByPoint(Ns.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)ze.fromBufferAttribute(a,h),l&&(Yi.fromBufferAttribute(t,h),ze.add(Yi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new V,l[S]=new V;let h=new V,u=new V,f=new V,d=new ue,g=new ue,y=new ue,b=new V,_=new V;function m(S,P,N){h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,N),u.sub(h),f.sub(h),g.sub(d),y.sub(d);let k=1/(g.x*y.y-y.x*g.y);isFinite(k)&&(b.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(k),_.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(k),a[S].add(b),a[P].add(b),a[N].add(b),l[S].add(_),l[P].add(_),l[N].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let S=0,P=L.length;S<P;++S){let N=L[S],k=N.start,X=N.count;for(let Z=k,B=k+X;Z<B;Z+=3)m(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let D=new V,w=new V,C=new V,A=new V;function U(S){C.fromBufferAttribute(s,S),A.copy(C);let P=a[S];D.copy(P),D.sub(C.multiplyScalar(C.dot(P))).normalize(),w.crossVectors(A,P);let k=w.dot(l[S])<0?-1:1;o.setXYZW(S,D.x,D.y,D.z,k)}for(let S=0,P=L.length;S<P;++S){let N=L[S],k=N.start,X=N.count;for(let Z=k,B=k+X;Z<B;Z+=3)U(t.getX(Z+0)),U(t.getX(Z+1)),U(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,h=new V,u=new V,f=new V;if(t)for(let d=0,g=t.count;d<g;d+=3){let y=t.getX(d+0),b=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,_),a.add(u),l.add(u),h.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,f=a.normalized,d=new h.constructor(l.length*u),g=0,y=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*u;for(let m=0;m<u;m++)d[y++]=h[g++]}return new je(d,u,f)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,f=h.length;u<f;u++){let d=h[u],g=t(d,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let f=0,d=h.length;f<d;f++){let g=h[f];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],f=r[h];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Za=new V,qu=new V,Yu=new ee,yn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Za.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Za),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Jn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Hn=new V,Ja=new V,Fr=new V,Or=new V,Xs=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(Ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=Or.dot(this.direction),l=-Or.dot(Fr),h=Or.lengthSq(),u=Math.abs(1-o*o),f,d,g,y;if(u>0)if(f=o*l-a,d=o*a-l,y=r*u,f>=0)if(d>=-y)if(d<=y){let b=1/u;f*=b,d*=b,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+h}else d=r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+h;else d=-r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+h;else d<=-y?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+d*(d+2*l)+h):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+d*(d+2*l)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ja).addScaledVector(Fr,d),g}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,u=a.z,f=t.x-o.x,d=t.y-o.y,g=t.z-o.z,y=e.x-o.x,b=e.y-o.y,_=e.z-o.z,m=n.x-o.x,L=n.y-o.y,D=n.z-o.z,w=Math.abs(l),C=Math.abs(h),A=Math.abs(u),U,S,P,N,k,X,Z,B,J,rt,ot,dt;if(w>=C&&w>=A?(P=l,X=f,J=y,dt=m,l>=0?(U=h,S=u,N=d,k=g,Z=b,B=_,rt=L,ot=D):(U=u,S=h,N=g,k=d,Z=_,B=b,rt=D,ot=L)):C>=A?(P=h,X=d,J=b,dt=L,h>=0?(U=u,S=l,N=g,k=f,Z=_,B=y,rt=D,ot=m):(U=l,S=u,N=f,k=g,Z=y,B=_,rt=m,ot=D)):(P=u,X=g,J=_,dt=D,u>=0?(U=l,S=h,N=f,k=d,Z=y,B=b,rt=m,ot=L):(U=h,S=l,N=d,k=f,Z=b,B=y,rt=L,ot=m)),P===0)return null;let et=U/P,ft=S/P,ut=1/P,Vt=N-et*X,Bt=k-ft*X,me=Z-et*J,jt=B-ft*J,se=rt-et*dt,$=ot-ft*dt,ht=se*jt-$*me,Ut=Vt*$-Bt*se,j=me*Bt-jt*Vt;if(s){if(ht<0||Ut<0||j<0)return null}else if((ht<0||Ut<0||j<0)&&(ht>0||Ut>0||j>0))return null;let Q=ht+Ut+j;if(Q===0)return null;let St=ut*(ht*X+Ut*J+j*dt);return(Q>0?St<0:St>0)?null:this.at(St/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mc=new Te,Ei=new Xs,Br=new Ci,bc=new V,zr=new V,kr=new V,Vr=new V,$a=new V,Gr=new V,wc=new V,Hr=new V,pe=class extends Pe{constructor(t=new Ue,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],f=r[l];u!==0&&($a.fromBufferAttribute(f,t),o?Gr.addScaledVector($a,u):Gr.addScaledVector($a.sub(e),u))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Br.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Br,bc)===null||Ei.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,b=d.length;y<b;y++){let _=d[y],m=o[_.materialIndex],L=Math.max(_.start,g.start),D=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,C=D;w<C;w+=3){let A=a.getX(w),U=a.getX(w+1),S=a.getX(w+2);s=Wr(this,m,t,n,h,u,f,A,U,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let _=y,m=b;_<m;_+=3){let L=a.getX(_),D=a.getX(_+1),w=a.getX(_+2);s=Wr(this,o,t,n,h,u,f,L,D,w),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,b=d.length;y<b;y++){let _=d[y],m=o[_.materialIndex],L=Math.max(_.start,g.start),D=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,C=D;w<C;w+=3){let A=w,U=w+1,S=w+2;s=Wr(this,m,t,n,h,u,f,A,U,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let _=y,m=b;_<m;_+=3){let L=_,D=_+1,w=_+2;s=Wr(this,o,t,n,h,u,f,L,D,w),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Ju(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Hr);return h<e.near||h>e.far?null:{distance:h,point:Hr.clone(),object:i}}function Wr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,zr),i.getVertexPosition(l,kr),i.getVertexPosition(h,Vr);let u=Ju(i,t,e,n,zr,kr,Vr,wc);if(u){let f=new V;oi.getBarycoord(wc,zr,kr,Vr,f),s&&(u.uv=oi.getInterpolatedAttribute(s,a,l,h,f,new ue)),r&&(u.uv1=oi.getInterpolatedAttribute(r,a,l,h,f,new ue)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,l,h,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new V,materialIndex:0};oi.getNormal(zr,kr,Vr,d.normal),u.face=d,u.barycoord=f}return u}var cs=class extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,h=ke,u=ke,f,d){super(null,o,a,l,h,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new Ci,$u=new ue(.5,.5),Xr=new V,hs=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,o=new yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],u=r[4],f=r[5],d=r[6],g=r[7],y=r[8],b=r[9],_=r[10],m=r[11],L=r[12],D=r[13],w=r[14],C=r[15];if(s[0].setComponents(h-o,g-u,m-y,C-L).normalize(),s[1].setComponents(h+o,g+u,m+y,C+L).normalize(),s[2].setComponents(h+a,g+f,m+b,C+D).normalize(),s[3].setComponents(h-a,g-f,m-b,C-D).normalize(),n)s[4].setComponents(l,d,_,w).normalize(),s[5].setComponents(h-l,g-d,m-_,C-w).normalize();else if(s[4].setComponents(h-l,g-d,m-_,C-w).normalize(),e===Sn)s[5].setComponents(h+l,g+d,m+_,C+w).normalize();else if(e===ns)s[5].setComponents(l,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=$u.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ec=new Te,ol=new Xs,qr=new Ci,Yr=new V,qs=class extends Pe{constructor(t=new Ue,e=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;Ec.copy(s).invert(),ol.copy(t.ray).applyMatrix4(Ec);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,b=g;y<b;y++){let _=h.getX(y);Yr.fromBufferAttribute(f,_),Tc(Yr,_,l,s,t,e,this)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,b=g;y<b;y++)Yr.fromBufferAttribute(f,y),Tc(Yr,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tc(i,t,e,n,s,r,o){let a=ol.distanceSqToPoint(i);if(a<e){let l=new V;ol.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ys=class extends Ge{constructor(t,e,n,s,r=Ce,o=Ce,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=t.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Zs=class extends Ge{constructor(t=[],e=xi,n,s,r,o,a,l,h,u){super(t,e,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$n=class extends Ge{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Ge{constructor(t,e,n=wn,s,r,o,a=ke,l=ke,h,u=In,f=1){if(u!==In&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ho=class extends ci{constructor(t,e=wn,n=xi,s,r,o=ke,a=ke,l,h=In){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Js=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ye=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],f=[],d=0,g=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function y(b,_,m,L,D,w,C,A,U,S,P){let N=w/U,k=C/S,X=w/2,Z=C/2,B=A/2,J=U+1,rt=S+1,ot=0,dt=0,et=new V;for(let ft=0;ft<rt;ft++){let ut=ft*k-Z;for(let Vt=0;Vt<J;Vt++){let Bt=Vt*N-X;et[b]=Bt*L,et[_]=ut*D,et[m]=B,h.push(et.x,et.y,et.z),et[b]=0,et[_]=0,et[m]=A>0?1:-1,u.push(et.x,et.y,et.z),f.push(Vt/U),f.push(1-ft/S),ot+=1}}for(let ft=0;ft<S;ft++)for(let ut=0;ut<U;ut++){let Vt=d+ut+J*ft,Bt=d+ut+J*(ft+1),me=d+(ut+1)+J*(ft+1),jt=d+(ut+1)+J*ft;l.push(Vt,Bt,jt),l.push(Bt,me,jt),dt+=6}a.addGroup(g,dt,P),g+=dt,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hi=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new V,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let g=n+f/e*s;h.x=t*Math.cos(g),h.y=t*Math.sin(g),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ui=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],g=[],y=0,b=[],_=n/2,m=0;L(),o===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(g,2));function L(){let w=new V,C=new V,A=0,U=(e-t)/n;for(let S=0;S<=r;S++){let P=[],N=S/r,k=N*(e-t)+t;for(let X=0;X<=s;X++){let Z=X/s,B=Z*l+a,J=Math.sin(B),rt=Math.cos(B);C.x=k*J,C.y=-N*n+_,C.z=k*rt,f.push(C.x,C.y,C.z),w.set(J,U,rt).normalize(),d.push(w.x,w.y,w.z),g.push(Z,1-N),P.push(y++)}b.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let N=b[P][S],k=b[P+1][S],X=b[P+1][S+1],Z=b[P][S+1];(t>0||P!==0)&&(u.push(N,k,Z),A+=3),(e>0||P!==r-1)&&(u.push(k,X,Z),A+=3)}h.addGroup(m,A,0),m+=A}function D(w){let C=y,A=new ue,U=new V,S=0,P=w===!0?t:e,N=w===!0?1:-1;for(let X=1;X<=s;X++)f.push(0,_*N,0),d.push(0,N,0),g.push(.5,.5),y++;let k=y;for(let X=0;X<=s;X++){let B=X/s*l+a,J=Math.cos(B),rt=Math.sin(B);U.x=P*rt,U.y=_*N,U.z=P*J,f.push(U.x,U.y,U.z),d.push(0,N,0),A.x=J*.5+.5,A.y=rt*.5*N+.5,g.push(A.x,A.y),y++}for(let X=0;X<s;X++){let Z=C+X,B=k+X;w===!0?u.push(B,B+1,Z):u.push(B+1,B,Z),S+=3}h.addGroup(m,S,w===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$s=class i extends ui{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var uo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,g=(o-u)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ue:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],o=[],a=new V,l=new Te;for(let g=0;g<=t;g++){let y=g/t;s[g]=this.getTangentAt(y,new V)}r[0]=new V,o[0]=new V;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(he(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(he(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],g*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,f){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,g=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,g*=u,s(o,a,d,g)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ac=new V,Cc=new V,Ka=new Dl,Qa=new Dl,ja=new Dl,Ks=class extends uo{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(Cc.subVectors(s[0],s[1]).add(s[0]),h=Cc);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ac.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(f),g),b=Math.pow(f.distanceToSquared(d),g),_=Math.pow(d.distanceToSquared(u),g);b<1e-4&&(b=1),y<1e-4&&(y=b),_<1e-4&&(_=b),Ka.initNonuniformCatmullRom(h.x,f.x,d.x,u.x,y,b,_),Qa.initNonuniformCatmullRom(h.y,f.y,d.y,u.y,y,b,_),ja.initNonuniformCatmullRom(h.z,f.z,d.z,u.z,y,b,_)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(h.x,f.x,d.x,u.x,this.tension),Qa.initCatmullRom(h.y,f.y,d.y,u.y,this.tension),ja.initCatmullRom(h.z,f.z,d.z,u.z,this.tension));return n.set(Ka.calc(l),Qa.calc(l),ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var fi=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,f=t/a,d=e/l,g=[],y=[],b=[],_=[];for(let m=0;m<u;m++){let L=m*d-o;for(let D=0;D<h;D++){let w=D*f-r;y.push(w,-L,0),b.push(0,0,1),_.push(D/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let L=0;L<a;L++){let D=L+h*m,w=L+h*(m+1),C=L+1+h*(m+1),A=L+1+h*m;g.push(D,w,A),g.push(w,C,A)}this.setIndex(g),this.setAttribute("position",new we(y,3)),this.setAttribute("normal",new we(b,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fs=class i extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],u=[],f=t,d=(e-t)/s,g=new V,y=new ue;for(let b=0;b<=s;b++){for(let _=0;_<=n;_++){let m=r+_/n*o;g.x=f*Math.cos(m),g.y=f*Math.sin(m),l.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/e+1)/2,y.y=(g.y/e+1)/2,u.push(y.x,y.y)}f+=d}for(let b=0;b<s;b++){let _=b*(n+1);for(let m=0;m<n;m++){let L=m+_,D=L,w=L+n+1,C=L+n+2,A=L+1;a.push(D,w,A),a.push(w,C,A)}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ds=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],f=[],d=new V,g=new V,y=new V;for(let b=0;b<=n;b++){let _=o+b/n*a;for(let m=0;m<=s;m++){let L=m/s*r;g.x=(t+e*Math.cos(_))*Math.cos(L),g.y=(t+e*Math.cos(_))*Math.sin(L),g.z=e*Math.sin(_),h.push(g.x,g.y,g.z),d.x=t*Math.cos(L),d.y=t*Math.sin(L),y.subVectors(g,d).normalize(),u.push(y.x,y.y,y.z),f.push(m/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){let m=(s+1)*b+_-1,L=(s+1)*(b-1)+_-1,D=(s+1)*(b-1)+_,w=(s+1)*b+_;l.push(m,L,w),l.push(L,D,w)}this.setIndex(l),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Rc(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function Rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ku(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Sh={clone:Li,merge:Ze},Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fo=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},De=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var po=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mo=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sl:r=t,a=2*e-n;break;case rl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:o=t,l=2*n-e;break;case rl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,g=this._weightNext,y=(n-e)/(s-e),b=y*y,_=b*y,m=-d*_+2*d*b-d*y,L=(1+d)*_+(-1.5-2*d)*b+(-.5+d)*y+1,D=(-1-g)*_+(1.5+g)*b+.5*y,w=g*_-g*b;for(let C=0;C!==a;++C)r[C]=m*o[u+C]+L*o[h+C]+D*o[l+C]+w*o[f+C];return r}},_o=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(s-e),f=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[l+d]*u;return r}},xo=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends di{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let y=(n-e)/(s-e),b=1-y;for(let _=0;_!==a;++_)r[_]=o[h+_]*b+o[l+_]*y;return r}let d=a*2,g=t-1;for(let y=0;y!==a;++y){let b=o[h+y],_=o[l+y],m=g*d+y*2,L=f[m],D=f[m+1],w=t*d+y*2,C=u[w],A=u[w+1],U=ef(n,e,L,C,s);r[y]=Mh(U,b,D,A,_)}return r}};function Mh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function tf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ef(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Mh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=tf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),tl(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;tl(this.settings)&&(Ic(this.settings.inTangents,t),Ic(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&du(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){Qt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,g=f+n;for(let y=0;y!==n;++y){let b=e[f+y];if(b!==e[d+y]||b!==e[g+y]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let g=0;g!==n;++g)e[d+g]=e[f+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ic(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=oo;var pi=class extends hn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Bs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="color";var So=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="number";var Mo=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)pn.slerpFlat(r,0,o,h-a,o,h,l);return r}},Qs=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends hn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Bs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="vector";var ts={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Pc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Pc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var wo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=h.length;f<d;f+=2){let g=h[f],y=h[f+1];if(g.global&&(g.lastIndex=0),g.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bh=new wo,gi=class{constructor(t){this.manager=t!==void 0?t:bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},al=class extends Error{constructor(t,e){super(t),this.response=e}},Eo=class extends gi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ts.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:s});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&$t("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let u=Wn[t],f=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=d?parseInt(d):0,y=g!==0,b=0,_=new ReadableStream({start(m){L();function L(){f.read().then(({done:D,value:w})=>{if(D)m.close();else{b+=w.byteLength;let C=new ProgressEvent("progress",{lengthComputable:y,loaded:b,total:g});for(let A=0,U=u.length;A<U;A++){let S=u[A];S.onProgress&&S.onProgress(C)}m.enqueue(w),L()}},D=>{m.error(D)})}}});return new Response(_)}else throw new al(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a==="")return h.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(d);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{ts.add(`file:${t}`,h);let u=Wn[t];delete Wn[t];for(let f=0,d=u.length;f<d;f++){let g=u[f];g.onLoad&&g.onLoad(h)}}).catch(h=>{let u=Wn[t];if(u===void 0)throw this.manager.itemError(t),h;delete Wn[t];for(let f=0,d=u.length;f<d;f++){let g=u[f];g.onError&&g.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ji=new WeakMap,To=class extends gi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ts.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Ji.get(o);f===void 0&&(f=[],Ji.set(o,f)),f.push({onLoad:e,onError:s})}return o}let a=is("img");function l(){u(),e&&e(this);let f=Ji.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onLoad&&g.onLoad(this)}Ji.delete(this),r.manager.itemEnd(t)}function h(f){u(),s&&s(f),ts.remove(`image:${t}`);let d=Ji.get(this)||[];for(let g=0;g<d.length;g++){let y=d[g];y.onError&&y.onError(f)}Ji.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ts.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var js=class extends gi{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new cs,a=new Eo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let h;try{h=r.parse(l)}catch(u){s!==void 0?s(u):Qt(u);return}r._applyTexData(o,h),e&&e(o,h)},n,s),o}createDataTexture(t){let e=new cs;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:dn,t.wrapT=e.wrapT!==void 0?e.wrapT:dn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ce,t.minFilter=e.minFilter!==void 0?e.minFilter:Ce,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Kn),e.mipmapCount===1&&(t.minFilter=Ce),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},ps=class extends gi{constructor(t){super(t)}load(t,e,n,s){let r=new Ge,o=new To(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},tr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},er=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},el=new Te,Lc=new V,Uc=new V,Ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(el,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ns||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new V,Jr=new pn,Rn=new V,nr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zr,Jr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new V,Dc=new ue,Nc=new ue,qe=class extends nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Nc),e.subVectors(Nc,Dc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ms=class extends nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ll=class extends Ao{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ll}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var $i=-90,Ki=1,Co=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe($i,Ki,t,e);s.layers=this.layers,this.add(s);let r=new qe($i,Ki,t,e);r.layers=this.layers,this.add(r);let o=new qe($i,Ki,t,e);o.layers=this.layers,this.add(o);let a=new qe($i,Ki,t,e);a.layers=this.layers,this.add(a);let l=new qe($i,Ki,t,e);l.layers=this.layers,this.add(l);let h=new qe($i,Ki,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Ro=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fl="\\[\\]\\.:\\/",nf=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",sf="[^"+Fl.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",Ol),of=/(WCOD+)?/.source.replace("WCOD",sf),af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),cf=new RegExp("^"+rf+of+af+lf+"$"),hf=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=cl;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R0=new Float32Array(1);var Hl=class Hl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hl.prototype.isMatrix2=!0;var hl=Hl;function Bl(i,t,e,n){let s=uf(n);switch(e){case Rl:return i*t;case yi:return i*t/s.components*s.byteLength;case Fo:return i*t/s.components*s.byteLength;case sn:return i*t*2/s.components*s.byteLength;case Oo:return i*t*2/s.components*s.byteLength;case Il:return i*t*3/s.components*s.byteLength;case Ne:return i*t*4/s.components*s.byteLength;case Bo:return i*t*4/s.components*s.byteLength;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:case Go:return Math.max(i,16)*Math.max(t,8)/4;case zo:case Vo:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Wo:case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case ur:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ca:case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fa:case da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fr:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case nn:case El:return{byteLength:1,components:1};case vs:case Tl:case He:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case wn:case Uo:case Ke:return{byteLength:4,components:1};case Al:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vf(i){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,f=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,u),a.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,h){let u=l.array,f=l.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,u);else{f.sort((g,y)=>g.start-y.start);let d=0;for(let g=1;g<f.length;g++){let y=f[d],b=f[g];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++d,f[d]=b)}f.length=d+1;for(let g=0,y=f.length;g<y;g++){let b=f[g];i.bufferSubData(h,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,xd=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,vd=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Id=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Vp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Hp=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,Zp=`uniform float size;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,Qp=`uniform float rotation;
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
}`,jp=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:yf,alphahash_pars_fragment:Sf,alphamap_fragment:Mf,alphamap_pars_fragment:bf,alphatest_fragment:wf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Cf,batching_vertex:Rf,begin_vertex:If,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:Uf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:Gf,common:Hf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:$f,colorspace_pars_fragment:Kf,envmap_fragment:Qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:fd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:od,gradientmap_pars_fragment:ad,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:xd,lights_fragment_begin:vd,lights_fragment_maps:yd,lights_fragment_end:Sd,lightprobes_pars_fragment:Md,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:Ad,map_pars_fragment:Cd,map_particle_fragment:Rd,map_particle_pars_fragment:Id,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Ud,morphcolor_vertex:Dd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:Bd,normal_fragment_maps:zd,normal_pars_fragment:kd,normal_pars_vertex:Vd,normal_vertex:Gd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Yd,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:$d,project_vertex:Kd,dithering_fragment:Qd,dithering_pars_fragment:jd,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:fp,tonemapping_pars_fragment:dp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:vp,background_vert:yp,background_frag:Sp,backgroundCube_vert:Mp,backgroundCube_frag:bp,cube_vert:wp,cube_frag:Ep,depth_vert:Tp,depth_frag:Ap,distance_vert:Cp,distance_frag:Rp,equirect_vert:Ip,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Up,meshbasic_vert:Dp,meshbasic_frag:Np,meshlambert_vert:Fp,meshlambert_frag:Op,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:kp,meshnormal_frag:Vp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:Zp,points_frag:Jp,shadow_vert:$p,shadow_frag:Kp,sprite_vert:Qp,sprite_frag:jp},Ot={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Dn={basic:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ze([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ze([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ze([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ze([Ot.points,Ot.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ze([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ze([Ot.common,Ot.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ze([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ze([Ot.sprite,Ot.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Ze([Ot.common,Ot.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Ze([Ot.lights,Ot.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Dn.physical={uniforms:Ze([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var xa={r:0,b:0,g:0},tm=new Te,qh=new ee;qh.set(-1,0,0,0,1,0,0,0,1);function em(i,t,e,n,s,r){let o=new ie(0),a=s===!0?0:1,l,h,u=null,f=0,d=null;function g(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){let w=L.backgroundBlurriness>0;D=t.get(D,w)}return D}function y(L){let D=!1,w=g(L);w===null?_(o,a):w&&w.isColor&&(_(w,1),D=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(L,D){let w=g(D);w&&(w.isCubeTexture||w.mapping===rr)?(h===void 0&&(h=new pe(new Ye(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Li(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(qh),h.material.toneMapped=de.getTransfer(w.colorSpace)!==Me,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new pe(new fi(2,2),new cn({name:"BackgroundMaterial",uniforms:Li(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=de.getTransfer(w.colorSpace)!==Me,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function _(L,D){L.getRGB(xa,Nl(i)),e.buffers.color.setClear(xa.r,xa.g,xa.b,D,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(L,D=1){o.set(L),a=D,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(L){a=L,_(o,a)},render:y,addToRenderList:b,dispose:m}}function nm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(k,X,Z,B,J){let rt=!1,ot=f(k,B,Z,X);r!==ot&&(r=ot,h(r.object)),rt=g(k,B,Z,J),rt&&y(k,B,Z,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,w(k,X,Z,B),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function h(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function f(k,X,Z,B){let J=B.wireframe===!0,rt=n[X.id];rt===void 0&&(rt={},n[X.id]=rt);let ot=k.isInstancedMesh===!0?k.id:0,dt=rt[ot];dt===void 0&&(dt={},rt[ot]=dt);let et=dt[Z.id];et===void 0&&(et={},dt[Z.id]=et);let ft=et[J];return ft===void 0&&(ft=d(l()),et[J]=ft),ft}function d(k){let X=[],Z=[],B=[];for(let J=0;J<e;J++)X[J]=0,Z[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:B,object:k,attributes:{},index:null}}function g(k,X,Z,B){let J=r.attributes,rt=X.attributes,ot=0,dt=Z.getAttributes();for(let et in dt)if(dt[et].location>=0){let ut=J[et],Vt=rt[et];if(Vt===void 0&&(et==="instanceMatrix"&&k.instanceMatrix&&(Vt=k.instanceMatrix),et==="instanceColor"&&k.instanceColor&&(Vt=k.instanceColor)),ut===void 0||ut.attribute!==Vt||Vt&&ut.data!==Vt.data)return!0;ot++}return r.attributesNum!==ot||r.index!==B}function y(k,X,Z,B){let J={},rt=X.attributes,ot=0,dt=Z.getAttributes();for(let et in dt)if(dt[et].location>=0){let ut=rt[et];ut===void 0&&(et==="instanceMatrix"&&k.instanceMatrix&&(ut=k.instanceMatrix),et==="instanceColor"&&k.instanceColor&&(ut=k.instanceColor));let Vt={};Vt.attribute=ut,ut&&ut.data&&(Vt.data=ut.data),J[et]=Vt,ot++}r.attributes=J,r.attributesNum=ot,r.index=B}function b(){let k=r.newAttributes;for(let X=0,Z=k.length;X<Z;X++)k[X]=0}function _(k){m(k,0)}function m(k,X){let Z=r.newAttributes,B=r.enabledAttributes,J=r.attributeDivisors;Z[k]=1,B[k]===0&&(i.enableVertexAttribArray(k),B[k]=1),J[k]!==X&&(i.vertexAttribDivisor(k,X),J[k]=X)}function L(){let k=r.newAttributes,X=r.enabledAttributes;for(let Z=0,B=X.length;Z<B;Z++)X[Z]!==k[Z]&&(i.disableVertexAttribArray(Z),X[Z]=0)}function D(k,X,Z,B,J,rt,ot){ot===!0?i.vertexAttribIPointer(k,X,Z,J,rt):i.vertexAttribPointer(k,X,Z,B,J,rt)}function w(k,X,Z,B){b();let J=B.attributes,rt=Z.getAttributes(),ot=X.defaultAttributeValues;for(let dt in rt){let et=rt[dt];if(et.location>=0){let ft=J[dt];if(ft===void 0&&(dt==="instanceMatrix"&&k.instanceMatrix&&(ft=k.instanceMatrix),dt==="instanceColor"&&k.instanceColor&&(ft=k.instanceColor)),ft!==void 0){let ut=ft.normalized,Vt=ft.itemSize,Bt=t.get(ft);if(Bt===void 0)continue;let me=Bt.buffer,jt=Bt.type,se=Bt.bytesPerElement,$=jt===i.INT||jt===i.UNSIGNED_INT||ft.gpuType===Uo;if(ft.isInterleavedBufferAttribute){let ht=ft.data,Ut=ht.stride,j=ft.offset;if(ht.isInstancedInterleavedBuffer){for(let Q=0;Q<et.locationSize;Q++)m(et.location+Q,ht.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Q=0;Q<et.locationSize;Q++)_(et.location+Q);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Q=0;Q<et.locationSize;Q++)D(et.location+Q,Vt/et.locationSize,jt,ut,Ut*se,(j+Vt/et.locationSize*Q)*se,$)}else{if(ft.isInstancedBufferAttribute){for(let ht=0;ht<et.locationSize;ht++)m(et.location+ht,ft.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ht=0;ht<et.locationSize;ht++)_(et.location+ht);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ht=0;ht<et.locationSize;ht++)D(et.location+ht,Vt/et.locationSize,jt,ut,Vt*se,Vt/et.locationSize*ht*se,$)}}else if(ot!==void 0){let ut=ot[dt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(et.location,ut);break;case 3:i.vertexAttrib3fv(et.location,ut);break;case 4:i.vertexAttrib4fv(et.location,ut);break;default:i.vertexAttrib1fv(et.location,ut)}}}}L()}function C(){P();for(let k in n){let X=n[k];for(let Z in X){let B=X[Z];for(let J in B){let rt=B[J];for(let ot in rt)u(rt[ot].object),delete rt[ot];delete B[J]}}delete n[k]}}function A(k){if(n[k.id]===void 0)return;let X=n[k.id];for(let Z in X){let B=X[Z];for(let J in B){let rt=B[J];for(let ot in rt)u(rt[ot].object),delete rt[ot];delete B[J]}}delete n[k.id]}function U(k){for(let X in n){let Z=n[X];for(let B in Z){let J=Z[B];if(J[k.id]===void 0)continue;let rt=J[k.id];for(let ot in rt)u(rt[ot].object),delete rt[ot];delete J[k.id]}}}function S(k){for(let X in n){let Z=n[X],B=k.isInstancedMesh===!0?k.id:0,J=Z[B];if(J!==void 0){for(let rt in J){let ot=J[rt];for(let dt in ot)u(ot[dt].object),delete ot[dt];delete J[rt]}delete Z[B],Object.keys(Z).length===0&&delete n[X]}}}function P(){N(),o=!0,r!==s&&(r=s,h(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:_,disableUnusedAttributes:L}}function im(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Ne&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let S=U===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==nn&&U!==Ke&&!S&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&($t("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:w,maxSamples:C,samples:A}}function rm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new yn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let g=f.length!==0||d||n!==0||s;return s=d,n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,g){let y=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!s||y===null||y.length===0||r&&!_)r?u(null):h();else{let L=r?0:n,D=L*4,w=m.clippingState||null;l.value=w,w=u(y,d,D,g);for(let C=0;C!==D;++C)w[C]=e[C];m.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,g,y){let b=f!==null?f.length:0,_=null;if(b!==0){if(_=l.value,y!==!0||_===null){let m=g+b*4,L=d.matrixWorldInverse;a.getNormalMatrix(L),(_===null||_.length<m)&&(_=new Float32Array(m));for(let D=0,w=g;D!==b;++D,w+=4)o.copy(f[D]).applyMatrix4(L,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var bs=4,om=6,am=20,lm=256,dr=new ms,wh=new ie,Wl=null,Xl=0,ql=0,Yl=!1,cm=new V,Ui=new V,ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=cm}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:He,format:Ne,colorSpace:ln,depthBuffer:!1},s=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hm(r)),this._blurMaterial=fm(r,t,e),this._ggxMaterial=um(r,t,e)}return s}_compileMaterial(t){let e=new pe(new Ue,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,s,r){let l=new qe(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,g=f.toneMapping;f.getClearColor(wh),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new Ye,new en({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,m=!1,L=t.background;L?L.isColor&&(_.color.copy(L),t.background=null,m=!0):(_.color.copy(wh),m=!0);for(let D=0;D<6;D++){let w=D%3;w===0?(l.up.set(0,h[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):w===1?(l.up.set(0,0,h[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,h[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));let C=this._cubeSize;Ms(s,w*C,D>2?C:0,C,C),f.setRenderTarget(s),m&&f.render(b,l),f.render(t,l)}f.toneMapping=g,f.autoClear=d,t.background=L}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xi||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(h*h-u*u),d=h*1.25,g=f*d,{_lodMax:y}=this,b=this._sizeLods[n],_=3*b*(n>y-bs?n-y+bs:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=y-e,Ms(r,_,m,3*b,2*b),s.setRenderTarget(r),s.render(a,dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=y-n,Ms(t,_,m,3*b,2*b),s.setRenderTarget(t),s.render(a,dr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-bs?s-this._lodMax+bs:0),d=4*(this._cubeSize-u);Ms(e,f,d,3*u,2*u),o.setRenderTarget(e),o.render(l,dr)}};function hm(i){let t=[],e=[],n=i,s=i-bs+1+om;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,h=1+a,u=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,d=6,g=3,y=new Float32Array(g*d*f),b=new Float32Array(g*d*f);for(let m=0;m<f;m++){let L=m%3*2/3-1,D=m>2?0:-1,w=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];y.set(w,g*d*m);for(let C=0;C<d;C++){let A=u[C*2]*2-1,U=u[C*2+1]*2-1;m===0?Ui.set(1,U,A):m===1?Ui.set(-A,1,-U):m===2?Ui.set(-A,U,1):m===3?Ui.set(-1,U,-A):m===4?Ui.set(-A,-1,U):Ui.set(A,U,-1),Ui.toArray(b,(m*d+C)*g)}}let _=new Ue;_.setAttribute("position",new je(y,g)),_.setAttribute("outputDirection",new je(b,g)),e.push(new pe(_,null)),n>bs&&n--}return{lodMeshes:e,sizeLods:t}}function Eh(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function um(i,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function fm(i,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Th(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ah(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sa=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Ln});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ce),new Co(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?o(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Pi||g===Po)if(t.has(d)){let y=t.get(d).texture;return a(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let b=new Sa(y.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",h),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let g=d.mapping,y=g===Pi||g===Po,b=g===xi||g===Ii;if(y||b){let _=e.get(d),m=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ya(i)),_=y?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let L=d.image;return y&&L&&L.height>0||b&&L&&l(L)?(n===null&&(n=new ya(i)),_=y?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function a(d,g){return g===Pi?d.mapping=xi:g===Po&&(d.mapping=Ii),d}function l(d){let g=0,y=6;for(let b=0;b<y;b++)d[b]!==void 0&&g++;return g===y}function h(d){let g=d.target;g.removeEventListener("dispose",h);let y=t.get(g);y!==void 0&&(t.delete(g),y.dispose())}function u(d){let g=d.target;g.removeEventListener("dispose",u);let y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function pm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function h(f){let d=[],g=f.index,y=f.attributes.position,b=0;if(y===void 0)return;if(g!==null){let L=g.array;b=g.version;for(let D=0,w=L.length;D<w;D+=3){let C=L[D+0],A=L[D+1],U=L[D+2];d.push(C,A,A,U,U,C)}}else{let L=y.array;b=y.version;for(let D=0,w=L.length/3-1;D<w;D+=3){let C=D+0,A=D+1,U=D+2;d.push(C,A,A,U,U,C)}}let _=new(y.count>=65535?Ws:Hs)(d,1);_.version=b;let m=r.get(f);m&&t.remove(m),r.set(f,_)}function u(f){let d=r.get(f);if(d){let g=f.index;g!==null&&d.version<g.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let b=0;for(let _=0;_<g;_++)b+=d[_];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function _m(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xm(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==f){let P=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],L=a.morphAttributes.color||[],D=0;g===!0&&(D=1),y===!0&&(D=2),b===!0&&(D=3);let w=a.attributes.position.count*D,C=1;w>t.maxTextureSize&&(C=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*C*4*f),U=new ks(A,w,C,f);U.type=Ke,U.needsUpdate=!0;let S=D*4;for(let N=0;N<f;N++){let k=_[N],X=m[N],Z=L[N],B=w*C*4*N;for(let J=0;J<k.count;J++){let rt=J*S;g===!0&&(s.fromBufferAttribute(k,J),A[B+rt+0]=s.x,A[B+rt+1]=s.y,A[B+rt+2]=s.z,A[B+rt+3]=0),y===!0&&(s.fromBufferAttribute(X,J),A[B+rt+4]=s.x,A[B+rt+5]=s.y,A[B+rt+6]=s.z,A[B+rt+7]=0),b===!0&&(s.fromBufferAttribute(Z,J),A[B+rt+8]=s.x,A[B+rt+9]=s.y,A[B+rt+10]=s.z,A[B+rt+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:U,size:new ue(w,C)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<h.length;b++)g+=h[b];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vm(i,t,e,n,s){let r=new WeakMap;function o(h){let u=s.render.frame,f=h.geometry,d=t.get(h,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let g=h.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}function a(){r=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var ym={[xl]:"LINEAR_TONE_MAPPING",[vl]:"REINHARD_TONE_MAPPING",[yl]:"CINEON_TONE_MAPPING",[sr]:"ACES_FILMIC_TONE_MAPPING",[Ml]:"AGX_TONE_MAPPING",[bl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function Sm(i,t,e,n,s,r){let o=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=new Ue;h.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new we([0,2,0,0,2,0],2));let u=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pe(h,u),d=new ms(-1,1,1,-1,0,1),g=null,y=null,b=!1,_,m=null,L=[],D=!1;this.setSize=function(w,C){o.setSize(w,C),a!==null&&a.setSize(w,C),l!==null&&l.setSize(w,C);for(let A=0;A<L.length;A++){let U=L[A];U.setSize&&U.setSize(w,C)}},this.setEffects=function(w){L=w,D=L.length>0&&L[0].isRenderPass===!0;let C=o.width,A=o.height;L.length>0&&a===null&&(a=new tn(C,A,{type:He,depthBuffer:!1,stencilBuffer:!1}),l=new tn(C,A,{type:He,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<L.length;U++){let S=L[U];S.setSize&&S.setSize(C,A)}},this.begin=function(w,C){if(b||w.toneMapping===bn&&L.length===0)return!1;if(m=C,C!==null){let A=C.width,U=C.height;(o.width!==A||o.height!==U)&&this.setSize(A,U)}return D===!1&&w.setRenderTarget(o),_=w.toneMapping,w.toneMapping=bn,!0},this.hasRenderPass=function(){return D},this.end=function(w,C){w.toneMapping=_,b=!0;let A=o,U=a;for(let S=0;S<L.length;S++){let P=L[S];P.enabled!==!1&&(P.render(w,U,A,C),P.needsSwap!==!1&&(A=U,U=U===a?l:a))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,u.defines={},de.getTransfer(g)===Me&&(u.defines.SRGB_TRANSFER="");let S=ym[y];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(m),w.render(f,d),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Yh=new Ge,$l=new ci(1,1),Zh=new ks,Jh=new co,$h=new Zs,Ch=[],Rh=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wa(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),Oe(e,n)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),Oe(e,n)}}function Cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Oe(e,n)}}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=e.isReversedDepthBuffer()?_a:ga,r=$l):r=Yh,e.setTexture2D(t||r,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zh,s)}function Vm(i){switch(i){case 5126:return Mm;case 35664:return bm;case 35665:return wm;case 35666:return Em;case 35674:return Tm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Dm;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){let e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function Wm(i,t){let e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){let e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function qm(i,t){let e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ym(i,t){let e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){let e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jm(i,t){i.uniform1iv(this.addr,t)}function $m(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){let n=this.cache,s=t.length,r=wa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=$l:o=Yh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=wa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jh,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=wa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=wa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zh,r[o])}function ag(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),o=Zl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Uh(e,h===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new jl(a),Uh(e,f)),e=f}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);lg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cg=37297,hg=0;function ug(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nh=new ee;function fg(i){de._getMatrix(Nh,de.workingColorSpace,i);let t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ug(i.getShaderSource(t),a)}else return r}function dg(i,t){let e=fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pg={[xl]:"Linear",[vl]:"Reinhard",[yl]:"Cineon",[sr]:"ACESFilmic",[Ml]:"AgX",[bl]:"Neutral",[Sl]:"Custom"};function mg(i,t){let e=pg[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var va=new V;function gg(){de.getLuminanceCoefficients(va);let i=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function xg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function Oh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(yg,Mg)}var Sg=new Map;function Mg(i,t){let e=le[t];if(e===void 0){let n=Sg.get(t);if(n!==void 0)e=le[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tc(e)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(bg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Eg={[ir]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Tg(i){return Eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ag={[xi]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function Cg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ag[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rg={[Ii]:"ENVMAP_MODE_REFRACTION"};function Ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pg={[_l]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function Lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tg(e),h=Cg(e),u=Ig(e),f=Lg(e),d=Ug(e),g=_g(e),y=xg(r),b=s.createProgram(),_,m,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(mr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(_=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?le.tonemapping_pars_fragment:"",e.toneMapping!==bn?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=tc(o),o=Oh(o,e),o=Bh(o,e),a=tc(a),a=Oh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let D=L+_+o,w=L+m+a,C=Dh(s,s.VERTEX_SHADER,D),A=Dh(s,s.FRAGMENT_SHADER,w);s.attachShader(b,C),s.attachShader(b,A),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function U(k){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(b)||"",Z=s.getShaderInfoLog(C)||"",B=s.getShaderInfoLog(A)||"",J=X.trim(),rt=Z.trim(),ot=B.trim(),dt=!0,et=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,C,A);else{let ft=Fh(s,C,"vertex"),ut=Fh(s,A,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+ft+`
`+ut)}else J!==""?$t("WebGLProgram: Program Info Log:",J):(rt===""||ot==="")&&(et=!1);et&&(k.diagnostics={runnable:dt,programLog:J,vertexShader:{log:rt,prefix:_},fragmentShader:{log:ot,prefix:m}})}s.deleteShader(C),s.deleteShader(A),S=new ws(s,b),P=vg(s,b)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(b,cg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=A,this}var Ng=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Fg(i){return i===sn||i===ur||i===fr}function Og(i,t,e,n,s,r){let o=new Vs,a=new ec,l=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function b(S,P,N,k,X,Z){let B=k.fog,J=X.geometry,rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,dt=t.get(S.envMap||rt,ot),et=dt&&dt.mapping===rr?dt.image.height:null,ft=g[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&$t("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Vt=ut!==void 0?ut.length:0,Bt=0;J.morphAttributes.position!==void 0&&(Bt=1),J.morphAttributes.normal!==void 0&&(Bt=2),J.morphAttributes.color!==void 0&&(Bt=3);let me,jt,se,$;if(ft){let Ee=Dn[ft];me=Ee.vertexShader,jt=Ee.fragmentShader}else{me=S.vertexShader,jt=S.fragmentShader;let Ee=a.getVertexShaderStage(S),xe=a.getFragmentShaderStage(S);a.update(S,Ee,xe),se=Ee.id,$=xe.id}let ht=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),j=X.isInstancedMesh===!0,Q=X.isBatchedMesh===!0,St=!!S.map,Tt=!!S.matcap,mt=!!dt,Rt=!!S.aoMap,Ht=!!S.lightMap,bt=!!S.bumpMap&&S.wireframe===!1,Zt=!!S.normalMap,ne=!!S.displacementMap,ve=!!S.emissiveMap,te=!!S.metalnessMap,ge=!!S.roughnessMap,F=S.anisotropy>0,ye=S.clearcoat>0,re=S.dispersion>0,R=S.retroreflectivity>0,v=S.iridescence>0,G=S.sheen>0,Y=S.transmission>0,it=F&&!!S.anisotropyMap,vt=ye&&!!S.clearcoatMap,At=ye&&!!S.clearcoatNormalMap,st=ye&&!!S.clearcoatRoughnessMap,lt=v&&!!S.iridescenceMap,Ct=v&&!!S.iridescenceThicknessMap,Dt=G&&!!S.sheenColorMap,_t=G&&!!S.sheenRoughnessMap,Et=!!S.specularMap,Ft=!!S.specularColorMap,Nt=!!S.specularIntensityMap,Wt=Y&&!!S.transmissionMap,z=Y&&!!S.thicknessMap,K=!!S.gradientMap,ct=!!S.alphaMap,Lt=S.alphaTest>0,zt=!!S.alphaHash,gt=!!S.extensions,Yt=bn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let Xt={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:jt,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Q,batchingColor:Q&&X._colorsTexture!==null,instancing:j,instancingColor:j&&X.instanceColor!==null,instancingMorph:j&&X.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:Tt,envMap:mt,envMapMode:mt&&dt.mapping,envMapCubeUVHeight:et,aoMap:Rt,lightMap:Ht,bumpMap:bt,normalMap:Zt,displacementMap:ne,emissiveMap:ve,normalMapObjectSpace:Zt&&S.normalMapType===ah,normalMapTangentSpace:Zt&&S.normalMapType===ma,packedNormalMap:Zt&&S.normalMapType===ma&&Fg(S.normalMap.format),metalnessMap:te,roughnessMap:ge,anisotropy:F,anisotropyMap:it,clearcoat:ye,clearcoatMap:vt,clearcoatNormalMap:At,clearcoatRoughnessMap:st,dispersion:re,retroreflection:R,iridescence:v,iridescenceMap:lt,iridescenceThicknessMap:Ct,sheen:G,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:Et,specularColorMap:Ft,specularIntensityMap:Nt,transmission:Y,transmissionMap:Wt,thicknessMap:z,gradientMap:K,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:ct,alphaTest:Lt,alphaHash:zt,combine:S.combine,mapUv:St&&y(S.map.channel),aoMapUv:Rt&&y(S.aoMap.channel),lightMapUv:Ht&&y(S.lightMap.channel),bumpMapUv:bt&&y(S.bumpMap.channel),normalMapUv:Zt&&y(S.normalMap.channel),displacementMapUv:ne&&y(S.displacementMap.channel),emissiveMapUv:ve&&y(S.emissiveMap.channel),metalnessMapUv:te&&y(S.metalnessMap.channel),roughnessMapUv:ge&&y(S.roughnessMap.channel),anisotropyMapUv:it&&y(S.anisotropyMap.channel),clearcoatMapUv:vt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&y(S.sheenRoughnessMap.channel),specularMapUv:Et&&y(S.specularMap.channel),specularColorMapUv:Ft&&y(S.specularColorMap.channel),specularIntensityMapUv:Nt&&y(S.specularIntensityMap.channel),transmissionMapUv:Wt&&y(S.transmissionMap.channel),thicknessMapUv:z&&y(S.thicknessMap.channel),alphaMapUv:ct&&y(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Zt||F),vertexNormals:!!J.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!J.attributes.uv&&(St||ct),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||J.attributes.normal===void 0&&Zt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ut,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Bt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function _(S){let P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)P.push(N),P.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(m(P,S),L(P,S),P.push(i.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function m(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numSunLights),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numSunLightShadows),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function L(S,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function D(S){let P=g[S.type],N;if(P){let k=Dn[P];N=Sh.clone(k.uniforms)}else N=S.uniforms;return N}function w(S,P){let N=u.get(P);return N!==void 0?++N.usedTimes:(N=new Dg(i,P,S,s),h.push(N),u.set(P,N)),N}function C(S){if(--S.usedTimes===0){let P=h.indexOf(S);h[P]=h[h.length-1],h.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){a.remove(S)}function U(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:D,acquireProgram:w,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:U}}function Bg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function a(d,g,y,b,_,m){let L=i[t];return L===void 0?(L={id:d.id,object:d,geometry:g,material:y,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:m},i[t]=L):(L.id=d.id,L.object=d,L.geometry=g,L.material=y,L.materialVariant=o(d),L.groupOrder=b,L.renderOrder=d.renderOrder,L.z=_,L.group=m),t++,L}function l(d,g,y,b,_,m,L){L.reversedDepth===!0&&(_=-_);let D=a(d,g,y,b,_,m);y.transmission>0?n.push(D):y.transparent===!0?s.push(D):e.push(D)}function h(d,g,y,b,_,m){let L=a(d,g,y,b,_,m);y.transmission>0?n.unshift(L):y.transparent===!0?s.unshift(L):e.unshift(L)}function u(d,g){e.length>1&&e.sort(d||zg),n.length>1&&n.sort(g||Vh),s.length>1&&s.sort(g||Vh)}function f(){for(let d=t,g=i.length;d<g;d++){let y=i[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:f,sort:u}}function kg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Gh,i.set(n,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new ie};break;case"SpotLight":e={position:new V,direction:new V,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xg(i){let t=new Vg,e=Gg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new V);let s=new V,r=new Te,o=new Te;function a(h){let u=0,f=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let g=0,y=0,b=0,_=0,m=0,L=0,D=0,w=0,C=0,A=0,U=0,S=0,P=0,N=0;h.sort(Wg);for(let X=0,Z=h.length;X<Z;X++){let B=h[X],J=B.color,rt=B.intensity,ot=B.distance,dt=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===sn?dt=B.shadow.map.texture:dt=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=J.r*rt,f+=J.g*rt,d+=J.b*rt;else if(B.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(B.sh.coefficients[et],rt);N++}else if(B.isSunLight){let et=t.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,ut=e.get(B);ut.shadowIntensity=ft.intensity,ut.shadowBias=ft.bias,ut.shadowNormalBias=ft.normalBias,ut.shadowRadius=ft.radius,ut.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[y]=ut,n.sunShadowMap[y]=dt;let Vt=ft.getViewportCount();for(let Bt=0;Bt<Vt;Bt++)n.sunShadowMatrix[b+Bt]=ft.getMatrix(Bt),n.sunShadowCascade[b+Bt]=ft._cascadeData[Bt];b+=Vt,y++}n.sun[g]=et,g++}else if(B.isDirectionalLight){let et=t.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,ut=e.get(B);ut.shadowIntensity=ft.intensity,ut.shadowBias=ft.bias,ut.shadowNormalBias=ft.normalBias,ut.shadowRadius=ft.radius,ut.shadowMapSize=ft.mapSize,n.directionalShadow[_]=ut,n.directionalShadowMap[_]=dt,n.directionalShadowMatrix[_]=B.shadow.matrix,C++}n.directional[_]=et,_++}else if(B.isSpotLight){let et=t.get(B);et.position.setFromMatrixPosition(B.matrixWorld),et.color.copy(J).multiplyScalar(rt),et.distance=ot,et.coneCos=Math.cos(B.angle),et.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),et.decay=B.decay,n.spot[L]=et;let ft=B.shadow;if(B.map&&(n.spotLightMap[S]=B.map,S++,ft.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[L]=ft.matrix,B.castShadow){let ut=e.get(B);ut.shadowIntensity=ft.intensity,ut.shadowBias=ft.bias,ut.shadowNormalBias=ft.normalBias,ut.shadowRadius=ft.radius,ut.shadowMapSize=ft.mapSize,n.spotShadow[L]=ut,n.spotShadowMap[L]=dt,U++}L++}else if(B.isRectAreaLight){let et=t.get(B);et.color.copy(J).multiplyScalar(rt),et.halfWidth.set(B.width*.5,0,0),et.halfHeight.set(0,B.height*.5,0),n.rectArea[D]=et,D++}else if(B.isPointLight){let et=t.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),et.distance=B.distance,et.decay=B.decay,B.castShadow){let ft=B.shadow,ut=e.get(B);ut.shadowIntensity=ft.intensity,ut.shadowBias=ft.bias,ut.shadowNormalBias=ft.normalBias,ut.shadowRadius=ft.radius,ut.shadowMapSize=ft.mapSize,ut.shadowCameraNear=ft.camera.near,ut.shadowCameraFar=ft.camera.far,n.pointShadow[m]=ut,n.pointShadowMap[m]=dt,n.pointShadowMatrix[m]=B.shadow.matrix,A++}n.point[m]=et,m++}else if(B.isHemisphereLight){let et=t.get(B);et.skyColor.copy(B.color).multiplyScalar(rt),et.groundColor.copy(B.groundColor).multiplyScalar(rt),n.hemi[w]=et,w++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let k=n.hash;(k.sunLength!==g||k.directionalLength!==_||k.pointLength!==m||k.spotLength!==L||k.rectAreaLength!==D||k.hemiLength!==w||k.numSunShadows!==y||k.numDirectionalShadows!==C||k.numPointShadows!==A||k.numSpotShadows!==U||k.numSpotMaps!==S||k.numLightProbes!==N)&&(n.sun.length=g,n.directional.length=_,n.spot.length=L,n.rectArea.length=D,n.point.length=m,n.hemi.length=w,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,k.sunLength=g,k.directionalLength=_,k.pointLength=m,k.spotLength=L,k.rectAreaLength=D,k.hemiLength=w,k.numSunShadows=y,k.numDirectionalShadows=C,k.numPointShadows=A,k.numSpotShadows=U,k.numSpotMaps=S,k.numLightProbes=N,n.version=Hg++)}function l(h,u){let f=0,d=0,g=0,y=0,b=0,_=0,m=u.matrixWorldInverse;for(let L=0,D=h.length;L<D;L++){let w=h[L];if(w.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),f++}else if(w.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(w.isSpotLight){let C=n.spot[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),y++}else if(w.isRectAreaLight){let C=n.rectArea[b];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),b++}else if(w.isPointLight){let C=n.point[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Hh(i){let t=new Xg(i),e=[],n=[],s=[];function r(d){f.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function h(){t.setup(e)}function u(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:h,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function qg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hh(i),t.set(s,[a])):r>=o.length?(a=new Hh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`,Jg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],$g=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Wh=new Te,pr=new V,Jl=new V;function Kg(i,t,e){let n=new hs,s=new ue,r=new ue,o=new Re,a=new po,l=new mo,h={},u=e.maxTextureSize,f={[_i]:$e,[$e]:_i,[mn]:mn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Yg,fragmentShader:Zg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new Ue;y.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new pe(y,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(A,U,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===Bc&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let P=i.getRenderTarget(),N=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ln),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let Z=m!==this.type;Z&&U.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(J=>J.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,J=A.length;B<J;B++){let rt=A[B],ot=rt.shadow;if(ot===void 0){$t("WebGLShadowMap:",rt,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let dt=ot.getFrameExtents();s.multiply(dt),r.copy(ot.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,ot.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,ot.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(ot.camera._reversedDepth=et,ot.map===null||Z===!0){if(ot.map!==null&&(ot.map.depthTexture!==null&&(ot.map.depthTexture.dispose(),ot.map.depthTexture=null),ot.map.dispose()),this.type===_s){if(rt.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ot.map=new tn(s.x,s.y,{format:sn,type:He,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),ot.map.texture.name=rt.name+".shadowMap",ot.map.depthTexture=new ci(s.x,s.y,Ke),ot.map.depthTexture.name=rt.name+".shadowMapDepth",ot.map.depthTexture.format=In,ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=ke,ot.map.depthTexture.magFilter=ke}else rt.isPointLight?(ot.map=new Sa(s.x),ot.map.depthTexture=new ho(s.x,wn)):(ot.map=new tn(s.x,s.y),ot.map.depthTexture=new ci(s.x,s.y,wn)),ot.map.depthTexture.name=rt.name+".shadowMap",ot.map.depthTexture.format=In,this.type===ir?(ot.map.depthTexture.compareFunction=et?_a:ga,ot.map.depthTexture.minFilter=Ce,ot.map.depthTexture.magFilter=Ce):(ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=ke,ot.map.depthTexture.magFilter=ke);ot.camera.updateProjectionMatrix()}ot.map.isWebGLCubeRenderTarget!==!0&&(ot.map.width!==s.x||ot.map.height!==s.y)&&ot.map.setSize(s.x,s.y);let ft=ot.map.isWebGLCubeRenderTarget?6:ot.getViewportCount();rt.isPointLight!==!0&&ot.updateMatrices(rt,S);for(let ut=0;ut<ft;ut++){let Vt=ot.getCamera(ut);if(rt.isPointLight){let Bt=ot.camera,me=ot.matrix,jt=rt.distance||Bt.far;jt!==Bt.far&&(Bt.far=jt,Bt.updateProjectionMatrix()),pr.setFromMatrixPosition(rt.matrixWorld),Bt.position.copy(pr),Jl.copy(Bt.position),Jl.add(Jg[ut]),Bt.up.copy($g[ut]),Bt.lookAt(Jl),Bt.updateMatrixWorld(),me.makeTranslation(-pr.x,-pr.y,-pr.z),Wh.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),ot._frustum.setFromProjectionMatrix(Wh,Bt.coordinateSystem,Bt.reversedDepth)}if(ot.map.isWebGLCubeRenderTarget)i.setRenderTarget(ot.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(ot.map),i.clear());let Bt=ot.getViewport(ut);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),X.viewport(o)}n=ot.getFrustum(ut),w(U,S,Vt,rt,this.type)}ot.isPointLightShadow!==!0&&this.type===_s&&L(ot,S),ot.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(P,N,k)};function L(A,U){let S=t.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null?A.mapPass=new tn(s.x,s.y,{format:sn,type:He}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,S,d,b,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value.set(A.map.width,A.map.height),g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,S,g,b,null)}function D(A,U,S,P){let N=null,k=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)N=k;else if(N=S.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let X=N.uuid,Z=U.uuid,B=h[X];B===void 0&&(B={},h[X]=B);let J=B[Z];J===void 0&&(J=N.clone(),B[Z]=J,U.addEventListener("dispose",C)),N=J}if(N.visible=U.visible,N.wireframe=U.wireframe,P===_s?N.side=U.shadowSide!==null?U.shadowSide:U.side:N.side=U.shadowSide!==null?U.shadowSide:f[U.side],N.alphaMap=U.alphaMap,N.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,N.map=U.map,N.clipShadows=U.clipShadows,N.clippingPlanes=U.clippingPlanes,N.clipIntersection=U.clipIntersection,N.displacementMap=U.displacementMap,N.displacementScale=U.displacementScale,N.displacementBias=U.displacementBias,N.wireframeLinewidth=U.wireframeLinewidth,N.linewidth=U.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let X=i.properties.get(N);X.light=S}return N}function w(A,U,S,P,N){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===_s)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let Z=t.update(A),B=A.material;if(Array.isArray(B)){let J=Z.groups;for(let rt=0,ot=J.length;rt<ot;rt++){let dt=J[rt],et=B[dt.materialIndex];if(et&&et.visible){let ft=D(A,et,P,N);A.onBeforeShadow(i,A,U,S,Z,ft,dt),i.renderBufferDirect(S,null,Z,ft,A,dt),A.onAfterShadow(i,A,U,S,Z,ft,dt)}}}else if(B.visible){let J=D(A,B,P,N);A.onBeforeShadow(i,A,U,S,Z,J,null),i.renderBufferDirect(S,null,Z,J,A,null),A.onAfterShadow(i,A,U,S,Z,J,null)}}let X=A.children;for(let Z=0,B=X.length;Z<B;Z++)w(X[Z],U,S,P,N)}function C(A){A.target.removeEventListener("dispose",C);for(let S in h){let P=h[S],N=A.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function Qg(i,t){function e(){let z=!1,K=new Re,ct=null,Lt=new Re(0,0,0,0);return{setMask:function(zt){ct!==zt&&!z&&(i.colorMask(zt,zt,zt,zt),ct=zt)},setLocked:function(zt){z=zt},setClear:function(zt,gt,Yt,Xt,Ee){Ee===!0&&(zt*=Xt,gt*=Xt,Yt*=Xt),K.set(zt,gt,Yt,Xt),Lt.equals(K)===!1&&(i.clearColor(zt,gt,Yt,Xt),Lt.copy(K))},reset:function(){z=!1,ct=null,Lt.set(-1,0,0,0)}}}function n(){let z=!1,K=!1,ct=null,Lt=null,zt=null;return{setReversed:function(gt){if(K!==gt){let Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),K=gt;let Xt=zt;zt=null,this.setClear(Xt)}},getReversed:function(){return K},setTest:function(gt){gt?ht(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){ct!==gt&&!z&&(i.depthMask(gt),ct=gt)},setFunc:function(gt){if(K&&(gt=vh[gt]),Lt!==gt){switch(gt){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=gt}},setLocked:function(gt){z=gt},setClear:function(gt){zt!==gt&&(zt=gt,K&&(gt=1-gt),i.clearDepth(gt))},reset:function(){z=!1,ct=null,Lt=null,zt=null,K=!1}}}function s(){let z=!1,K=null,ct=null,Lt=null,zt=null,gt=null,Yt=null,Xt=null,Ee=null;return{setTest:function(xe){z||(xe?ht(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(xe){K!==xe&&!z&&(i.stencilMask(xe),K=xe)},setFunc:function(xe,rn,un){(ct!==xe||Lt!==rn||zt!==un)&&(i.stencilFunc(xe,rn,un),ct=xe,Lt=rn,zt=un)},setOp:function(xe,rn,un){(gt!==xe||Yt!==rn||Xt!==un)&&(i.stencilOp(xe,rn,un),gt=xe,Yt=rn,Xt=un)},setLocked:function(xe){z=xe},setClear:function(xe){Ee!==xe&&(i.clearStencil(xe),Ee=xe)},reset:function(){z=!1,K=null,ct=null,Lt=null,zt=null,gt=null,Yt=null,Xt=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,u={},f={},d={},g=new WeakMap,y=[],b=null,_=!1,m=null,L=null,D=null,w=null,C=null,A=null,U=null,S=new ie(0,0,0),P=0,N=!1,k=null,X=null,Z=null,B=null,J=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,dt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(et)[1]),ot=dt>=1):et.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),ot=dt>=2);let ft=null,ut={},Vt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),me=new Re().fromArray(Vt),jt=new Re().fromArray(Bt);function se(z,K,ct,Lt){let zt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ct;Yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(K+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return gt}let $={};$[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(es),bt(!1),Zt(ul),ht(i.CULL_FACE),Rt(Ln);function ht(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Ut(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function j(z,K){return d[z]!==K?(i.bindFramebuffer(z,K),d[z]=K,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Q(z,K){let ct=y,Lt=!1;if(z){ct=g.get(K),ct===void 0&&(ct=[],g.set(K,ct));let zt=z.textures;if(ct.length!==zt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Yt=zt.length;gt<Yt;gt++)ct[gt]=i.COLOR_ATTACHMENT0+gt;ct.length=zt.length,Lt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(ct)}function St(z){return b!==z?(i.useProgram(z),b=z,!0):!1}let Tt={[Ri]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};Tt[Gc]=i.MIN,Tt[Hc]=i.MAX;let mt={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(z,K,ct,Lt,zt,gt,Yt,Xt,Ee,xe){if(z===Ln){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),z!==zc){if(z!==m||xe!==N){if((L!==Ri||C!==Ri)&&(i.blendEquation(i.FUNC_ADD),L=Ri,C=Ri),xe)switch(z){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",z);break}else switch(z){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",z);break}D=null,w=null,A=null,U=null,S.set(0,0,0),P=0,m=z,N=xe}return}zt=zt||K,gt=gt||ct,Yt=Yt||Lt,(K!==L||zt!==C)&&(i.blendEquationSeparate(Tt[K],Tt[zt]),L=K,C=zt),(ct!==D||Lt!==w||gt!==A||Yt!==U)&&(i.blendFuncSeparate(mt[ct],mt[Lt],mt[gt],mt[Yt]),D=ct,w=Lt,A=gt,U=Yt),(Xt.equals(S)===!1||Ee!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,Ee),S.copy(Xt),P=Ee),m=z,N=!1}function Ht(z,K){z.side===mn?Ut(i.CULL_FACE):ht(i.CULL_FACE);let ct=z.side===$e;K&&(ct=!ct),bt(ct),z.blending===xs&&z.transparent===!1?Rt(Ln):Rt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Lt=z.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(z){k!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),k=z)}function Zt(z){z!==Fc?(ht(i.CULL_FACE),z!==X&&(z===ul?i.cullFace(i.BACK):z===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),X=z}function ne(z){z!==Z&&(ot&&i.lineWidth(z),Z=z)}function ve(z,K,ct){z?(ht(i.POLYGON_OFFSET_FILL),(B!==K||J!==ct)&&(B=K,J=ct,o.getReversed()&&(K=-K),i.polygonOffset(K,ct))):Ut(i.POLYGON_OFFSET_FILL)}function te(z){z?ht(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function ge(z){z===void 0&&(z=i.TEXTURE0+rt-1),ft!==z&&(i.activeTexture(z),ft=z)}function F(z,K,ct){ct===void 0&&(ft===null?ct=i.TEXTURE0+rt-1:ct=ft);let Lt=ut[ct];Lt===void 0&&(Lt={type:void 0,texture:void 0},ut[ct]=Lt),(Lt.type!==z||Lt.texture!==K)&&(ft!==ct&&(i.activeTexture(ct),ft=ct),i.bindTexture(z,K||$[z]),Lt.type=z,Lt.texture=K)}function ye(){let z=ut[ft];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function v(){try{i.texSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function G(){try{i.texSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function vt(){try{i.texStorage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function At(){try{i.texStorage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function st(){try{i.texImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function lt(){try{i.texImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function Ct(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function Dt(z,K){f[z]!==K&&(i.pixelStorei(z,K),f[z]=K)}function _t(z){me.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function Et(z){jt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),jt.copy(z))}function Ft(z,K){let ct=h.get(K);ct===void 0&&(ct=new WeakMap,h.set(K,ct));let Lt=ct.get(z);Lt===void 0&&(Lt=i.getUniformBlockIndex(K,z.name),ct.set(z,Lt))}function Nt(z,K){let Lt=h.get(K).get(z);l.get(K)!==Lt&&(i.uniformBlockBinding(K,Lt,z.__bindingPointIndex),l.set(K,Lt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ft=null,ut={},d={},g=new WeakMap,y=[],b=null,_=!1,m=null,L=null,D=null,w=null,C=null,A=null,U=null,S=new ie(0,0,0),P=0,N=!1,k=null,X=null,Z=null,B=null,J=null,me.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Ut,bindFramebuffer:j,drawBuffers:Q,useProgram:St,setBlending:Rt,setMaterial:Ht,setFlipSided:bt,setCullFace:Zt,setLineWidth:ne,setPolygonOffset:ve,setScissorTest:te,activeTexture:ge,bindTexture:F,unbindTexture:ye,compressedTexImage2D:re,compressedTexImage3D:R,texImage2D:st,texImage3D:lt,pixelStorei:Dt,getParameter:Ct,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:vt,texStorage3D:At,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:it,scissor:_t,viewport:Et,reset:Wt}}function jg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ue,u=new WeakMap,f=new Set,d,g=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,v){return y?new OffscreenCanvas(R,v):is("canvas")}function _(R,v,G){let Y=1,it=re(R);if((it.width>G||it.height>G)&&(Y=G/Math.max(it.width,it.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let vt=Math.floor(Y*it.width),At=Math.floor(Y*it.height);d===void 0&&(d=b(vt,At));let st=v?b(vt,At):d;return st.width=vt,st.height=At,st.getContext("2d").drawImage(R,0,0,vt,At),$t("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+vt+"x"+At+")."),st}else return"data"in R&&$t("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function L(R){i.generateMipmap(R)}function D(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,v,G,Y,it,vt=!1){if(R!==null){if(i[R]!==void 0)return i[R];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let At;Y&&(At=t.get("EXT_texture_norm16"),At||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=v;if(v===i.RED&&(G===i.FLOAT&&(st=i.R32F),G===i.HALF_FLOAT&&(st=i.R16F),G===i.UNSIGNED_BYTE&&(st=i.R8),G===i.UNSIGNED_SHORT&&At&&(st=At.R16_EXT),G===i.SHORT&&At&&(st=At.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(st=i.R8UI),G===i.UNSIGNED_SHORT&&(st=i.R16UI),G===i.UNSIGNED_INT&&(st=i.R32UI),G===i.BYTE&&(st=i.R8I),G===i.SHORT&&(st=i.R16I),G===i.INT&&(st=i.R32I)),v===i.RG&&(G===i.FLOAT&&(st=i.RG32F),G===i.HALF_FLOAT&&(st=i.RG16F),G===i.UNSIGNED_BYTE&&(st=i.RG8),G===i.UNSIGNED_SHORT&&At&&(st=At.RG16_EXT),G===i.SHORT&&At&&(st=At.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(st=i.RG8UI),G===i.UNSIGNED_SHORT&&(st=i.RG16UI),G===i.UNSIGNED_INT&&(st=i.RG32UI),G===i.BYTE&&(st=i.RG8I),G===i.SHORT&&(st=i.RG16I),G===i.INT&&(st=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(st=i.RGB8UI),G===i.UNSIGNED_SHORT&&(st=i.RGB16UI),G===i.UNSIGNED_INT&&(st=i.RGB32UI),G===i.BYTE&&(st=i.RGB8I),G===i.SHORT&&(st=i.RGB16I),G===i.INT&&(st=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),G===i.UNSIGNED_INT&&(st=i.RGBA32UI),G===i.BYTE&&(st=i.RGBA8I),G===i.SHORT&&(st=i.RGBA16I),G===i.INT&&(st=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&At&&(st=At.RGB16_EXT),G===i.SHORT&&At&&(st=At.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),v===i.RGBA){let lt=vt?zs:de.getTransfer(it);G===i.FLOAT&&(st=i.RGBA32F),G===i.HALF_FLOAT&&(st=i.RGBA16F),G===i.UNSIGNED_BYTE&&(st=lt===Me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&At&&(st=At.RGBA16_EXT),G===i.SHORT&&At&&(st=At.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function C(R,v){let G;return R?v===null||v===wn||v===ys?G=i.DEPTH24_STENCIL8:v===Ke?G=i.DEPTH32F_STENCIL8:v===vs&&(G=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===ys?G=i.DEPTH_COMPONENT24:v===Ke?G=i.DEPTH_COMPONENT32F:v===vs&&(G=i.DEPTH_COMPONENT16),G}function A(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Ce?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function U(R){let v=R.target;v.removeEventListener("dispose",U),P(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function S(R){let v=R.target;v.removeEventListener("dispose",S),k(v)}function P(R){let v=n.get(R);if(v.__webglInit===void 0)return;let G=R.source,Y=g.get(G);if(Y){let it=Y[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&N(R),Object.keys(Y).length===0&&g.delete(G)}n.remove(R)}function N(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let G=R.source,Y=g.get(G);delete Y[v.__cacheKey],o.memory.textures--}function k(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let it=0;it<v.__webglFramebuffer[Y].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[Y][it]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=R.textures;for(let Y=0,it=G.length;Y<it;Y++){let vt=n.get(G[Y]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(R)}let X=0;function Z(){X=0}function B(){return X}function J(R){X=R}function rt(){let R=X;return R>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function ot(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function dt(R,v){let G=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let Y=R.image;if(Y===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function et(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ut(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function ft(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ut(G,R,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function ut(R,v){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){j(G,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Vt={[ai]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},Bt={[ke]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},me={[ch]:i.NEVER,[ph]:i.ALWAYS,[hh]:i.LESS,[ga]:i.LEQUAL,[uh]:i.EQUAL,[_a]:i.GEQUAL,[fh]:i.GREATER,[dh]:i.NOTEQUAL};function jt(R,v){if(v.type===Ke&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ce||v.magFilter===Lo||v.magFilter===or||v.magFilter===Kn||v.minFilter===Ce||v.minFilter===Lo||v.minFilter===or||v.minFilter===Kn)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Vt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Vt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Vt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Bt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Bt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==or&&v.minFilter!==Kn||v.type===Ke&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",U));let Y=v.source,it=g.get(Y);it===void 0&&(it={},g.set(Y,it));let vt=ot(v);if(vt!==R.__cacheKey){it[vt]===void 0&&(it[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[vt].usedTimes++;let At=it[R.__cacheKey];At!==void 0&&(it[R.__cacheKey].usedTimes--,At.usedTimes===0&&N(v)),R.__cacheKey=vt,R.__webglTexture=it[vt].texture}return G}function $(R,v,G){return Math.floor(Math.floor(R/G)/v)}function ht(R,v,G,Y){let vt=R.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,Y,v.data);else{vt.sort((Dt,_t)=>Dt.start-_t.start);let At=0;for(let Dt=1;Dt<vt.length;Dt++){let _t=vt[At],Et=vt[Dt],Ft=_t.start+_t.count,Nt=$(Et.start,v.width,4),Wt=$(_t.start,v.width,4);Et.start<=Ft+1&&Nt===Wt&&$(Et.start+Et.count-1,v.width,4)===Nt?_t.count=Math.max(_t.count,Et.start+Et.count-_t.start):(++At,vt[At]=Et)}vt.length=At+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Dt=0,_t=vt.length;Dt<_t;Dt++){let Et=vt[Dt],Ft=Math.floor(Et.start/4),Nt=Math.ceil(Et.count/4),Wt=Ft%v.width,z=Math.floor(Ft/v.width),K=Nt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Wt,z,K,ct,G,Y,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function Ut(R,v,G){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let it=se(R,v),vt=v.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+G);let At=n.get(vt);if(vt.version!==At.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ct=de.getPrimaries(de.workingColorSpace),Lt=v.colorSpace===Qn?null:de.getPrimaries(v.colorSpace),zt=v.colorSpace===Qn||ct===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let lt=_(v.image,!1,s.maxTextureSize);lt=ye(v,lt);let Ct=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),_t=w(v.internalFormat,Ct,Dt,v.normalized,v.colorSpace,v.isVideoTexture);jt(Y,v);let Et,Ft=v.mipmaps,Nt=v.isVideoTexture!==!0,Wt=At.__version===void 0||it===!0,z=vt.dataReady,K=A(v,lt);if(v.isDepthTexture)_t=C(v.format===vi,v.type),Wt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,_t,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,_t,lt.width,lt.height,0,Ct,Dt,null));else if(v.isDataTexture)if(Ft.length>0){Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,K,_t,Ft[0].width,Ft[0].height);for(let ct=0,Lt=Ft.length;ct<Lt;ct++)Et=Ft[ct],Nt?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,Ct,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,ct,_t,Et.width,Et.height,0,Ct,Dt,Et.data);v.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(i.TEXTURE_2D,K,_t,lt.width,lt.height),z&&ht(v,lt,Ct,Dt)):e.texImage2D(i.TEXTURE_2D,0,_t,lt.width,lt.height,0,Ct,Dt,lt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,_t,Ft[0].width,Ft[0].height,lt.depth);for(let ct=0,Lt=Ft.length;ct<Lt;ct++)if(Et=Ft[ct],v.format!==Ne)if(Ct!==null)if(Nt){if(z)if(v.layerUpdates.size>0){let zt=Bl(Et.width,Et.height,v.format,v.type);for(let gt of v.layerUpdates){let Yt=Et.data.subarray(gt*zt/Et.data.BYTES_PER_ELEMENT,(gt+1)*zt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,gt,Et.width,Et.height,1,Ct,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,lt.depth,Ct,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,_t,Et.width,Et.height,lt.depth,0,Et.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,lt.depth,Ct,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,_t,Et.width,Et.height,lt.depth,0,Ct,Dt,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,K,_t,Ft[0].width,Ft[0].height);for(let ct=0,Lt=Ft.length;ct<Lt;ct++)Et=Ft[ct],v.format!==Ne?Ct!==null?Nt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,Ct,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,_t,Et.width,Et.height,0,Et.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,Ct,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,ct,_t,Et.width,Et.height,0,Ct,Dt,Et.data)}else if(v.isDataArrayTexture)if(Nt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,_t,lt.width,lt.height,lt.depth),z)if(v.layerUpdates.size>0){let ct=Bl(lt.width,lt.height,v.format,v.type);for(let Lt of v.layerUpdates){let zt=lt.data.subarray(Lt*ct/lt.data.BYTES_PER_ELEMENT,(Lt+1)*ct/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,lt.width,lt.height,1,Ct,Dt,zt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,lt.width,lt.height,lt.depth,0,Ct,Dt,lt.data);else if(v.isData3DTexture)Nt?(Wt&&e.texStorage3D(i.TEXTURE_3D,K,_t,lt.width,lt.height,lt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,lt.width,lt.height,lt.depth,0,Ct,Dt,lt.data);else if(v.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(i.TEXTURE_2D,K,_t,lt.width,lt.height);else{let ct=lt.width,Lt=lt.height;for(let zt=0;zt<K;zt++)e.texImage2D(i.TEXTURE_2D,zt,_t,ct,Lt,0,Ct,Dt,null),ct>>=1,Lt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),lt.parentNode!==ct){ct.appendChild(lt),f.add(v),ct.onpaint=Lt=>{let zt=Lt.changedElements;for(let gt of f)zt.includes(gt.image)&&(gt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let zt=i.RGBA,gt=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,gt,Yt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Nt&&Wt){let ct=re(Ft[0]);e.texStorage2D(i.TEXTURE_2D,K,_t,ct.width,ct.height)}for(let ct=0,Lt=Ft.length;ct<Lt;ct++)Et=Ft[ct],Nt?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Ct,Dt,Et):e.texImage2D(i.TEXTURE_2D,ct,_t,Ct,Dt,Et);v.generateMipmaps=!1}else if(Nt){if(Wt){let ct=re(lt);e.texStorage2D(i.TEXTURE_2D,K,_t,ct.width,ct.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,_t,Ct,Dt,lt);m(v)&&L(Y),At.__version=vt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function j(R,v,G){if(v.image.length!==6)return;let Y=se(R,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let vt=n.get(it);if(it.version!==vt.__version||Y===!0){e.activeTexture(i.TEXTURE0+G);let At=de.getPrimaries(de.workingColorSpace),st=v.colorSpace===Qn?null:de.getPrimaries(v.colorSpace),lt=v.colorSpace===Qn||At===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Dt=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let gt=0;gt<6;gt++)!Ct&&!Dt?_t[gt]=_(v.image[gt],!0,s.maxCubemapSize):_t[gt]=Dt?v.image[gt].image:v.image[gt],_t[gt]=ye(v,_t[gt]);let Et=_t[0],Ft=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),Wt=w(v.internalFormat,Ft,Nt,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,K=vt.__version===void 0||Y===!0,ct=it.dataReady,Lt=A(v,Et);jt(i.TEXTURE_CUBE_MAP,v);let zt;if(Ct){z&&K&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Wt,Et.width,Et.height);for(let gt=0;gt<6;gt++){zt=_t[gt].mipmaps;for(let Yt=0;Yt<zt.length;Yt++){let Xt=zt[Yt];v.format!==Ne?Ft!==null?z?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Xt.width,Xt.height,Ft,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,Wt,Xt.width,Xt.height,0,Xt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Xt.width,Xt.height,Ft,Nt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,Wt,Xt.width,Xt.height,0,Ft,Nt,Xt.data)}}}else{if(zt=v.mipmaps,z&&K){zt.length>0&&Lt++;let gt=re(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Wt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Dt){z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,_t[gt].width,_t[gt].height,Ft,Nt,_t[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Wt,_t[gt].width,_t[gt].height,0,Ft,Nt,_t[gt].data);for(let Yt=0;Yt<zt.length;Yt++){let Ee=zt[Yt].image[gt].image;z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ee.width,Ee.height,Ft,Nt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,Wt,Ee.width,Ee.height,0,Ft,Nt,Ee.data)}}else{z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft,Nt,_t[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Wt,Ft,Nt,_t[gt]);for(let Yt=0;Yt<zt.length;Yt++){let Xt=zt[Yt];z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ft,Nt,Xt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,Wt,Ft,Nt,Xt.image[gt])}}}m(v)&&L(i.TEXTURE_CUBE_MAP),vt.__version=it.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Q(R,v,G,Y,it,vt){let At=r.convert(G.format,G.colorSpace),st=r.convert(G.type),lt=w(G.internalFormat,At,st,G.normalized,G.colorSpace),Ct=n.get(v),Dt=n.get(G);if(Dt.__renderTarget=v,!Ct.__hasExternalTextures){let _t=Math.max(1,v.width>>vt),Et=Math.max(1,v.height>>vt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,vt,lt,_t,Et,v.depth,0,At,st,null):e.texImage2D(it,vt,lt,_t,Et,0,At,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,it,Dt.__webglTexture,0,te(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,it,Dt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let Y=v.depthTexture,it=Y&&Y.isDepthTexture?Y.type:null,vt=C(v.stencilBuffer,it),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(v),vt,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{let Y=v.textures;for(let it=0;it<Y.length;it++){let vt=Y[it],At=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),lt=w(vt.internalFormat,At,st,vt.normalized,vt.colorSpace);ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(v),lt,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(v),lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(R,v,G){let Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(v.depthTexture);if(it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(it.__webglInit===void 0&&(it.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),jt(i.TEXTURE_CUBE_MAP,v.depthTexture);let Ct=r.convert(v.depthTexture.format),Dt=r.convert(v.depthTexture.type),_t;v.depthTexture.format===In?_t=i.DEPTH_COMPONENT24:v.depthTexture.format===vi&&(_t=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,_t,v.width,v.height,0,Ct,Dt,null)}}else dt(v.depthTexture,0);let vt=it.__webglTexture,At=te(v),st=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,lt=v.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===In)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,vt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,vt,0);else if(v.depthTexture.format===vi)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,vt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(R){let v=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",it)};Y.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Tt(v.__webglFramebuffer[Y],R,Y);else{let Y=R.texture.mipmaps;Y&&Y.length>0?Tt(v.__webglFramebuffer[0],R,0):Tt(v.__webglFramebuffer,R,0)}else if(G){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),St(v.__webglDepthbuffer[Y],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,vt)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),St(v.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,v,G){let Y=n.get(R);v!==void 0&&Q(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&mt(R)}function Ht(R){let v=R.texture,G=n.get(R),Y=n.get(v);R.addEventListener("dispose",S);let it=R.textures,vt=R.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),vt){G.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[st]=[];for(let lt=0;lt<v.mipmaps.length;lt++)G.__webglFramebuffer[st][lt]=i.createFramebuffer()}else G.__webglFramebuffer[st]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)G.__webglFramebuffer[st]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let st=0,lt=it.length;st<lt;st++){let Ct=n.get(it[st]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ge(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let lt=it[st];G.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[st]);let Ct=r.convert(lt.format,lt.colorSpace),Dt=r.convert(lt.type),_t=w(lt.internalFormat,Ct,Dt,lt.normalized,lt.colorSpace,R.isXRRenderTarget===!0),Et=te(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,G.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),St(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(i.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)Q(G.__webglFramebuffer[st][lt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else Q(G.__webglFramebuffer[st],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(v)&&L(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let st=0,lt=it.length;st<lt;st++){let Ct=it[st],Dt=n.get(Ct),_t=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Dt.__webglTexture),jt(_t,Ct),Q(G.__webglFramebuffer,R,Ct,i.COLOR_ATTACHMENT0+st,_t,0),m(Ct)&&L(_t)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),jt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)Q(G.__webglFramebuffer[lt],R,v,i.COLOR_ATTACHMENT0,st,lt);else Q(G.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,st,0);m(v)&&L(st),e.unbindTexture()}R.depthBuffer&&mt(R)}function bt(R){let v=R.textures;for(let G=0,Y=v.length;G<Y;G++){let it=v[G];if(m(it)){let vt=D(R),At=n.get(it).__webglTexture;e.bindTexture(vt,At),L(vt),e.unbindTexture()}}}let Zt=[],ne=[];function ve(R){if(R.samples>0){if(ge(R)===!1){let v=R.textures,G=R.width,Y=R.height,it=i.COLOR_BUFFER_BIT,vt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),st=v.length>1;if(st)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let lt=R.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Dt=n.get(v[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,it,i.NEAREST),l===!0&&(Zt.length=0,ne.length=0,Zt.push(i.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Zt.push(vt),ne.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Dt=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function te(R){return Math.min(s.maxSamples,R.samples)}function ge(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function ye(R,v){let G=R.colorSpace,Y=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ln&&G!==Qn&&(de.getTransfer(G)===Me?(Y!==Ne||it!==nn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",G)),v}function re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=rt,this.resetTextureUnits=Z,this.getTextureUnits=B,this.setTextureUnits=J,this.setTexture2D=dt,this.setTexture2DArray=et,this.setTexture3D=ft,this.setTextureCube=ut,this.rebindTextures=Rt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function t0(i,t){function e(n,s=Qn){let r,o=de.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Tl)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===Ke)return i.FLOAT;if(n===He)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Il)return i.RGB;if(n===Ne)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===yi)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===sn)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===Bo)return i.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===hr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===ko||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===ur||n===Zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Wo)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qo)return r.COMPRESSED_R11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jo||n===$o||n===Ko||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===ha||n===ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===da||n===fr||n===pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Js(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,f=null,d=null,g=null,y=null,b=typeof XRWebGLBinding<"u",_=new ic,m={},L=e.getContextAttributes(),D=null,w=null,C=[],A=[],U=new ue,S=null,P=null,N=new qe;N.viewport=new Re;let k=new qe;k.viewport=new Re;let X=[N,k],Z=new Ro,B=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=C[$];return ht===void 0&&(ht=new as,C[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=C[$];return ht===void 0&&(ht=new as,C[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=C[$];return ht===void 0&&(ht=new as,C[$]=ht),ht.getHandSpace()};function rt($){let ht=A.indexOf($.inputSource);if(ht===-1)return;let Ut=C[ht];Ut!==void 0&&(Ut.update($.inputSource,$.frame,h||o),Ut.dispatchEvent({type:$.type,data:$.inputSource}))}function ot(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",dt);for(let $=0;$<C.length;$++){let ht=A[$];ht!==null&&(A[$]=null,C[$].disconnect(ht))}B=null,J=null,_.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(D),g=null,d=null,f=null,s=null,w=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",dt),L.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,j=null,Q=null;L.depth&&(Q=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=L.stencil?vi:In,j=L.stencil?ys:wn);let St={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new tn(d.textureWidth,d.textureHeight,{format:Ne,type:nn,depthTexture:new ci(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new tn(g.framebufferWidth,g.framebufferHeight,{format:Ne,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function dt($){for(let ht=0;ht<$.removed.length;ht++){let Ut=$.removed[ht],j=A.indexOf(Ut);j>=0&&(A[j]=null,C[j].disconnect(Ut))}for(let ht=0;ht<$.added.length;ht++){let Ut=$.added[ht],j=A.indexOf(Ut);if(j===-1){for(let St=0;St<C.length;St++)if(St>=A.length){A.push(Ut),j=St;break}else if(A[St]===null){A[St]=Ut,j=St;break}if(j===-1)break}let Q=C[j];Q&&Q.connect(Ut)}}let et=new V,ft=new V;function ut($,ht,Ut){et.setFromMatrixPosition(ht.matrixWorld),ft.setFromMatrixPosition(Ut.matrixWorld);let j=et.distanceTo(ft),Q=ht.projectionMatrix.elements,St=Ut.projectionMatrix.elements,Tt=Q[14]/(Q[10]-1),mt=Q[14]/(Q[10]+1),Rt=(Q[9]+1)/Q[5],Ht=(Q[9]-1)/Q[5],bt=(Q[8]-1)/Q[0],Zt=(St[8]+1)/St[0],ne=Tt*bt,ve=Tt*Zt,te=j/(-bt+Zt),ge=te*-bt;if(ht.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ge),$.translateZ(te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Q[10]===-1)$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let F=Tt+te,ye=mt+te,re=ne-ge,R=ve+(j-ge),v=Rt*mt/ye*F,G=Ht*mt/ye*F;$.projectionMatrix.makePerspective(re,R,v,G,F,ye),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Vt($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ht=$.near,Ut=$.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(Ut=_.depthFar)),Z.near=k.near=N.near=ht,Z.far=k.far=N.far=Ut,(B!==Z.near||J!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),B=Z.near,J=Z.far),Z.layers.mask=$.layers.mask|6,N.layers.mask=Z.layers.mask&-5,k.layers.mask=Z.layers.mask&-3;let j=$.parent,Q=Z.cameras;Vt(Z,j);for(let St=0;St<Q.length;St++)Vt(Q[St],j);Q.length===2?ut(Z,N,k):Z.projectionMatrix.copy(N.projectionMatrix),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),Bt($,Z,j)};function Bt($,ht,Ut){Ut===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(Ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Z)},this.getCameraTexture=function($){return m[$]};let me=null;function jt($,ht){if(u=ht.getViewerPose(h||o),y=ht,u!==null){let Ut=u.views;g!==null&&(t.setRenderTargetFramebuffer(w,g.framebuffer),t.setRenderTarget(w));let j=!1;Ut.length!==Z.cameras.length&&(Z.cameras.length=0,j=!0);for(let mt=0;mt<Ut.length;mt++){let Rt=Ut[mt],Ht=null;if(g!==null)Ht=g.getViewport(Rt);else{let Zt=f.getViewSubImage(d,Rt);Ht=Zt.viewport,mt===0&&(t.setRenderTargetTextures(w,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(w))}let bt=X[mt];bt===void 0&&(bt=new qe,bt.layers.enable(mt),bt.viewport=new Re,X[mt]=bt),bt.matrix.fromArray(Rt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Rt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),mt===0&&(Z.matrix.copy(bt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),j===!0&&Z.cameras.push(bt)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let mt=f.getDepthInformation(Ut[0]);mt&&mt.isValid&&mt.texture&&_.init(mt,s.renderState)}if(Q&&Q.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let mt=0;mt<Ut.length;mt++){let Rt=Ut[mt].camera;if(Rt){let Ht=m[Rt];Ht||(Ht=new Js,m[Rt]=Ht);let bt=f.getCameraImage(Rt);Ht.sourceTexture=bt}}}}for(let Ut=0;Ut<C.length;Ut++){let j=A[Ut],Q=C[Ut];j!==null&&Q!==void 0&&Q.update(j,ht,h||o)}me&&me($,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),y=null}let se=new Xh;se.setAnimationLoop(jt),this.setAnimationLoop=function($){me=$},this.dispose=function(){}}},i0=new Te,Kh=new ee;Kh.set(-1,0,0,0,1,0,0,0,1);function s0(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Nl(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,L,D,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),f(_,m)):m.isMeshPhongMaterial?(r(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&g(_,m,w)):m.isMeshMatcapMaterial?(r(_,m),y(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),b(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,L,D):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===$e&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===$e&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let L=t.get(m),D=L.envMap,w=L.envMapRotation;D&&(_.envMap.value=D,_.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Kh),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,L,D){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*L,_.scale.value=D*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function g(_,m,L){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,m){m.matcap&&(_.matcap.value=m.matcap)}function b(_,m){let L=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,C){let A=C.program;n.uniformBlockBinding(w,A)}function h(w,C){let A=s[w.id];A===void 0&&(_(w),A=u(w),s[w.id]=A,w.addEventListener("dispose",L));let U=C.program;n.updateUBOMapping(w,U);let S=t.render.frame;r[w.id]!==S&&(d(w),r[w.id]=S)}function u(w){let C=f();w.__bindingPointIndex=C;let A=i.createBuffer(),U=w.__size,S=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,A),A}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let C=s[w.id],A=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let S=0,P=A.length;S<P;S++){let N=A[S];if(Array.isArray(N))for(let k=0,X=N.length;k<X;k++)g(N[k],S,k,U);else g(N,S,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,C,A,U){if(b(w,C,A,U)===!0){let S=w.__offset,P=w.value;if(Array.isArray(P)){let N=0;for(let k=0;k<P.length;k++){let X=P[k],Z=m(X);y(X,w.__data,N),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(P,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,w.__data)}}function y(w,C,A){typeof w=="number"||typeof w=="boolean"?C[0]=w:w.isMatrix3?(C[0]=w.elements[0],C[1]=w.elements[1],C[2]=w.elements[2],C[3]=0,C[4]=w.elements[3],C[5]=w.elements[4],C[6]=w.elements[5],C[7]=0,C[8]=w.elements[6],C[9]=w.elements[7],C[10]=w.elements[8],C[11]=0):ArrayBuffer.isView(w)?C.set(new w.constructor(w.buffer,w.byteOffset,C.length)):w.toArray(C,A)}function b(w,C,A,U){let S=w.value,P=C+"_"+A;if(U[P]===void 0)return typeof S=="number"||typeof S=="boolean"?U[P]=S:ArrayBuffer.isView(S)?U[P]=S.slice():U[P]=S.clone(),!0;{let N=U[P];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return U[P]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(N.equals(S)===!1)return N.copy(S),!0}}return!1}function _(w){let C=w.uniforms,A=0,U=16;for(let P=0,N=C.length;P<N;P++){let k=Array.isArray(C[P])?C[P]:[C[P]];for(let X=0,Z=k.length;X<Z;X++){let B=k[X],J=Array.isArray(B.value)?B.value:[B.value];for(let rt=0,ot=J.length;rt<ot;rt++){let dt=J[rt],et=m(dt),ft=A%U,ut=ft%et.boundary,Vt=ft+ut;A+=ut,Vt!==0&&U-Vt<et.storage&&(A+=U-Vt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=et.storage}}}let S=A%U;return S>0&&(A+=U-S),w.__size=A,w.__cache={},this}function m(w){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",w),C}function L(w){let C=w.target;C.removeEventListener("dispose",L);let A=o.indexOf(C.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function D(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:h,dispose:D}}var o0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function a0(){return Un===null&&(Un=new cs(o0,16,16,sn,He),Un.name="DFG_LUT",Un.minFilter=Ce,Un.magFilter=Ce,Un.wrapS=dn,Un.wrapT=dn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var Ma=class{constructor(t={}){let{canvas:e=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:g=nn}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let b=g,_=new Set([Bo,Oo,Fo]),m=new Set([nn,wn,vs,ys,Do,No]),L=new Uint32Array(4),D=new Int32Array(4),w=new V,C=null,A=null,U=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,X=null,Z=null,B=null,J=null;this._outputColorSpace=Ie;let rt=0,ot=0,dt=null,et=-1,ft=null,ut=new Re,Vt=new Re,Bt=null,me=new ie(0),jt=0,se=e.width,$=e.height,ht=1,Ut=null,j=null,Q=new Re(0,0,se,$),St=new Re(0,0,se,$),Tt=!1,mt=new hs,Rt=!1,Ht=!1,bt=new Te,Zt=new V,ne=new Re,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ge(){return dt===null?ht:1}let F=n;function ye(c,x){return e.getContext(c,x)}let re,R,v,G,Y,it,vt,At,st,lt,Ct,Dt,_t,Et,Ft,Nt,Wt,z,K,ct,Lt,zt,gt;try{let c={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",rn,!1),F===null){let x="webgl2";if(F=ye(x,c),F===null)throw ye(x)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(c){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Qt("WebGLRenderer: "+c.message),c}function Yt(){re=new pm(F),re.init(),Lt=new t0(F,re),R=new sm(F,re,t,Lt),v=new Qg(F,re),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),Z=F.createFramebuffer(),B=F.createFramebuffer(),J=F.createFramebuffer(),G=new _m(F),Y=new Bg,it=new jg(F,re,v,Y,R,Lt,G),vt=new dm(N),At=new vf(F),zt=new nm(F,At),st=new mm(F,At,G,zt),lt=new vm(F,st,At,zt,G),z=new xm(F,R,it),Ft=new rm(Y),Ct=new Og(N,vt,re,R,zt,Ft),Dt=new s0(N,Y),_t=new kg,Et=new qg(re),Wt=new em(N,vt,v,lt,y,l),Nt=new Kg(N,lt,R),gt=new r0(F,G,R,v),K=new im(F,re,G),ct=new gm(F,re,G),G.programs=Ct.programs,N.capabilities=R,N.extensions=re,N.properties=Y,N.renderLists=_t,N.shadowMap=Nt,N.state=v,N.info=G}b!==nn&&(P=new Sm(b,e.width,e.height,a,s,r));let Xt=new sc(N,F);this.xr=Xt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let c=re.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){let c=re.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(c){c!==void 0&&(ht=c,this.setSize(se,$,!1))},this.getSize=function(c){return c.set(se,$)},this.setSize=function(c,x,M=!0){if(Xt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}se=c,$=x,e.width=Math.floor(c*ht),e.height=Math.floor(x*ht),M===!0&&(e.style.width=c+"px",e.style.height=x+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,c,x)},this.getDrawingBufferSize=function(c){return c.set(se*ht,$*ht).floor()},this.setDrawingBufferSize=function(c,x,M){se=c,$=x,ht=M,e.width=Math.floor(c*M),e.height=Math.floor(x*M),this.setViewport(0,0,c,x)},this.setEffects=function(c){if(b===nn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(c){for(let x=0;x<c.length;x++)if(c[x].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(c||[])},this.getCurrentViewport=function(c){return c.copy(ut)},this.getViewport=function(c){return c.copy(Q)},this.setViewport=function(c,x,M,E){c.isVector4?Q.set(c.x,c.y,c.z,c.w):Q.set(c,x,M,E),v.viewport(ut.copy(Q).multiplyScalar(ht).round())},this.getScissor=function(c){return c.copy(St)},this.setScissor=function(c,x,M,E){c.isVector4?St.set(c.x,c.y,c.z,c.w):St.set(c,x,M,E),v.scissor(Vt.copy(St).multiplyScalar(ht).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(c){v.setScissorTest(Tt=c)},this.setOpaqueSort=function(c){Ut=c},this.setTransparentSort=function(c){j=c},this.getClearColor=function(c){return c.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(c=!0,x=!0,M=!0){let E=0;if(c){let I=!1;if(dt!==null){let T=dt.texture.format;I=_.has(T)}if(I){let T=dt.texture.type,H=m.has(T),O=Wt.getClearColor(),W=Wt.getClearAlpha(),q=O.r,at=O.g,tt=O.b;H?(L[0]=q,L[1]=at,L[2]=tt,L[3]=W,F.clearBufferuiv(F.COLOR,0,L)):(D[0]=q,D[1]=at,D[2]=tt,D[3]=W,F.clearBufferiv(F.COLOR,0,D))}else E|=F.COLOR_BUFFER_BIT}x&&(E|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),M&&(E|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E!==0&&F.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(c){c.setRenderer(this),X=c},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Wt.dispose(),_t.dispose(),Et.dispose(),Y.dispose(),vt.dispose(),lt.dispose(),zt.dispose(),gt.dispose(),Ct.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",yr),Xt.removeEventListener("sessionend",Sr),Fn.stop()};function Ee(c){c.preventDefault(),Ll("WebGLRenderer: Context Lost."),k=!0}function xe(){Ll("WebGLRenderer: Context Restored."),k=!1;let c=G.autoReset,x=Nt.enabled,M=Nt.autoUpdate,E=Nt.needsUpdate,I=Nt.type;Yt(),G.autoReset=c,Nt.enabled=x,Nt.autoUpdate=M,Nt.needsUpdate=E,Nt.type=I}function rn(c){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function un(c){let x=c.target;x.removeEventListener("dispose",un),Ia(x)}function Ia(c){Pa(c),Y.remove(c)}function Pa(c){let x=Y.get(c).programs;x!==void 0&&(x.forEach(function(M){Ct.releaseProgram(M)}),c.isShaderMaterial&&Ct.releaseShaderCache(c))}this.renderBufferDirect=function(c,x,M,E,I,T){x===null&&(x=ve);let H=I.isMesh&&I.matrixWorld.determinantAffine()<0,O=Er(c,x,M,E,I);v.setMaterial(E,H);let W=M.index,q=1;if(E.wireframe===!0){if(W=st.getWireframeAttribute(M),W===void 0)return;q=2}let at=M.drawRange,tt=M.attributes.position,nt=at.start*q,Mt=(at.start+at.count)*q;T!==null&&(nt=Math.max(nt,T.start*q),Mt=Math.min(Mt,(T.start+T.count)*q)),W!==null?(nt=Math.max(nt,0),Mt=Math.min(Mt,W.count)):tt!=null&&(nt=Math.max(nt,0),Mt=Math.min(Mt,tt.count));let xt=Mt-nt;if(xt<0||xt===1/0)return;zt.setup(I,E,O,M,W);let yt,It=K;if(W!==null&&(yt=At.get(W),It=ct,It.setIndex(yt)),I.isMesh)E.wireframe===!0?(v.setLineWidth(E.wireframeLinewidth*ge()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(I.isLine){let Jt=E.linewidth;Jt===void 0&&(Jt=1),v.setLineWidth(Jt*ge()),I.isLineSegments?It.setMode(F.LINES):I.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else I.isPoints?It.setMode(F.POINTS):I.isSprite&&It.setMode(F.TRIANGLES);if(I.isBatchedMesh)if(re.get("WEBGL_multi_draw"))It.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Jt=I._multiDrawStarts,pt=I._multiDrawCounts,Kt=I._multiDrawCount,wt=W?At.get(W).bytesPerElement:1,Pt=Y.get(E).currentProgram.getUniforms();for(let Gt=0;Gt<Kt;Gt++)Pt.setValue(F,"_gl_DrawID",Gt),It.render(Jt[Gt]/wt,pt[Gt])}else if(I.isInstancedMesh)It.renderInstances(nt,xt,I.count);else if(M.isInstancedBufferGeometry){let Jt=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,pt=Math.min(M.instanceCount,Jt);It.renderInstances(nt,xt,pt)}else It.render(nt,xt)};function xr(c,x,M,E){X!==null&&c.isNodeMaterial&&X.setObject(E,c),Rt===!0&&Ft.setState(c,M,!1),c.transparent===!0&&c.side===mn&&c.forceSinglePass===!1?(c.side=$e,c.needsUpdate=!0,On(c,x,E),c.side=_i,c.needsUpdate=!0,On(c,x,E),c.side=mn):On(c,x,E)}this.compile=function(c,x,M=null){M===null&&(M=c),X!==null&&X.renderStart(c,x,M),A=Et.get(M),A.init(x),S.push(A),M.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),c!==M&&c.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(A.pushLight(I),I.castShadow&&A.pushShadow(I))}),A.setupLights(),X!==null&&X.updateLights(A.state.lightsArray),Ht=this.localClippingEnabled,Rt=Ft.init(this.clippingPlanes,Ht),Rt===!0&&Ft.setGlobalState(this.clippingPlanes,x),X!==null&&Nt.render(A.state.shadowsArray,M,x);let E=new Set;return c.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let T=I.material;if(T)if(Array.isArray(T))for(let H=0;H<T.length;H++){let O=T[H];xr(O,M,x,I),E.add(O)}else xr(T,M,x,I),E.add(T)}),A=S.pop(),X!==null&&X.renderEnd(),E},this.compileAsync=function(c,x,M=null){let E=this.compile(c,x,M);return new Promise(I=>{function T(){if(E.forEach(function(H){let W=Y.get(H).currentProgram;(W===void 0||W.isReady())&&E.delete(H)}),E.size===0){I(c);return}setTimeout(T,10)}re.get("KHR_parallel_shader_compile")!==null?T():setTimeout(T,10)})};let Cs=null;function vr(c){Cs&&Cs(c)}function yr(){Fn.stop()}function Sr(){Fn.start()}let Fn=new Xh;Fn.setAnimationLoop(vr),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(c){Cs=c,Xt.setAnimationLoop(c),c===null?Fn.stop():Fn.start()},Xt.addEventListener("sessionstart",yr),Xt.addEventListener("sessionend",Sr),this.render=function(c,x){if(x!==void 0&&x.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;X!==null&&X.renderStart(c,x);let M=Xt.enabled===!0&&Xt.isPresenting===!0,E=P!==null&&(dt===null||M)&&P.begin(N,dt);if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(x),x=Xt.getCamera()),c.isScene===!0&&c.onBeforeRender(N,c,x,dt),A=Et.get(c,S.length),A.init(x),A.state.textureUnits=it.getTextureUnits(),S.push(A),bt.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),mt.setFromProjectionMatrix(bt,Sn,x.reversedDepth),Ht=this.localClippingEnabled,Rt=Ft.init(this.clippingPlanes,Ht),C=_t.get(c,U.length),C.init(),U.push(C),Xt.enabled===!0&&Xt.isPresenting===!0){let H=N.xr.getDepthSensingMesh();H!==null&&Di(H,x,-1/0,N.sortObjects)}Di(c,x,0,N.sortObjects),C.finish(),X!==null&&X.updateLights(A.state.lightsArray),N.sortObjects===!0&&C.sort(Ut,j),te=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,te&&Wt.addToRenderList(C,c),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Ft.beginShadows();let I=A.state.shadowsArray;if(Nt.render(I,c,x),Rt===!0&&Ft.endShadows(),(E&&P.hasRenderPass())===!1){let H=C.opaque,O=C.transmissive;if(A.setupLights(),x.isArrayCamera){let W=x.cameras;if(O.length>0)for(let q=0,at=W.length;q<at;q++){let tt=W[q];Rs(H,O,c,tt)}te&&Wt.render(c);for(let q=0,at=W.length;q<at;q++){let tt=W[q];Mr(C,c,tt,tt.viewport)}}else O.length>0&&Rs(H,O,c,x),te&&Wt.render(c),Mr(C,c,x)}dt!==null&&ot===0&&(it.updateMultisampleRenderTarget(dt),it.updateRenderTargetMipmap(dt)),E&&P.end(N),c.isScene===!0&&c.onAfterRender(N,c,x),zt.resetDefaultState(),et=-1,ft=null,S.pop(),S.length>0?(A=S[S.length-1],it.setTextureUnits(A.state.textureUnits),Rt===!0&&Ft.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?C=U[U.length-1]:C=null,X!==null&&X.renderEnd()};function Di(c,x,M,E){if(c.visible===!1)return;if(c.layers.test(x.layers)){if(c.isGroup)M=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(x);else if(c.isLightProbeGrid)A.pushLightProbeGrid(c);else if(c.isLight)A.pushLight(c),c.castShadow&&A.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||c.intersectsFrustum(mt)){E&&ne.setFromMatrixPosition(c.matrixWorld).applyMatrix4(bt);let H=lt.update(c),O=c.material;O.visible&&C.push(c,H,O,M,ne.z,null,x)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||c.intersectsFrustum(mt))){let H=lt.update(c),O=c.material;if(E&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),ne.copy(c.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),ne.copy(H.boundingSphere.center)),ne.applyMatrix4(c.matrixWorld).applyMatrix4(bt)),Array.isArray(O)){let W=H.groups;for(let q=0,at=W.length;q<at;q++){let tt=W[q],nt=O[tt.materialIndex];nt&&nt.visible&&C.push(c,H,nt,M,ne.z,tt,x)}}else O.visible&&C.push(c,H,O,M,ne.z,null,x)}}let T=c.children;for(let H=0,O=T.length;H<O;H++)Di(T[H],x,M,E)}function Mr(c,x,M,E){let{opaque:I,transmissive:T,transparent:H}=c;A.setupLightsView(M),Rt===!0&&Ft.setGlobalState(N.clippingPlanes,M),E&&v.viewport(ut.copy(E)),I.length>0&&Ni(I,x,M),T.length>0&&Ni(T,x,M),H.length>0&&Ni(H,x,M),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Rs(c,x,M,E){if((M.isScene===!0?M.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[E.id]===void 0){let nt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[E.id]=new tn(1,1,{generateMipmaps:!0,type:nt?He:nn,minFilter:Kn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let T=A.state.transmissionRenderTarget[E.id],H=E.viewport||ut;T.setSize(H.z*N.transmissionResolutionScale,H.w*N.transmissionResolutionScale);let O=N.getRenderTarget(),W=N.getActiveCubeFace(),q=N.getActiveMipmapLevel();N.setRenderTarget(T),N.getClearColor(me),jt=N.getClearAlpha(),jt<1&&N.setClearColor(16777215,.5),N.clear(),te&&Wt.render(M);let at=N.toneMapping;N.toneMapping=bn;let tt=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),A.setupLightsView(E),Rt===!0&&Ft.setGlobalState(N.clippingPlanes,E),Ni(c,M,E),it.updateMultisampleRenderTarget(T),it.updateRenderTargetMipmap(T),re.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Mt=0,xt=x.length;Mt<xt;Mt++){let yt=x[Mt],{object:It,geometry:Jt,material:pt,group:Kt}=yt;if(pt.side===mn&&It.layers.test(E.layers)){let wt=pt.side;pt.side=$e,pt.needsUpdate=!0,br(It,M,E,Jt,pt,Kt),pt.side=wt,pt.needsUpdate=!0,nt=!0}}nt===!0&&(it.updateMultisampleRenderTarget(T),it.updateRenderTargetMipmap(T))}N.setRenderTarget(O,W,q),N.setClearColor(me,jt),tt!==void 0&&(E.viewport=tt),N.toneMapping=at}function Ni(c,x,M){let E=x.isScene===!0?x.overrideMaterial:null;for(let I=0,T=c.length;I<T;I++){let H=c[I],{object:O,geometry:W,group:q}=H,at=H.material;at.allowOverride===!0&&E!==null&&(at=E),O.layers.test(M.layers)&&br(O,x,M,W,at,q)}}function br(c,x,M,E,I,T){X!==null&&I.isNodeMaterial&&X.setObject(c,I),c.onBeforeRender(N,x,M,E,I,T),c.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),I.onBeforeRender(N,x,M,E,c,T),I.transparent===!0&&I.side===mn&&I.forceSinglePass===!1?(I.side=$e,I.needsUpdate=!0,N.renderBufferDirect(M,x,E,I,c,T),I.side=_i,I.needsUpdate=!0,N.renderBufferDirect(M,x,E,I,c,T),I.side=mn):N.renderBufferDirect(M,x,E,I,c,T),c.onAfterRender(N,x,M,E,I,T)}function On(c,x,M){x.isScene!==!0&&(x=ve);let E=Y.get(c),I=A.state.lights,T=A.state.shadowsArray,H=I.state.version,O=Ct.getParameters(c,I.state,T,x,M,A.state.lightProbeGridArray),W=Ct.getProgramCacheKey(O),q=E.programs;E.environment=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?x.environment:null,E.fog=x.fog;let at=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap;E.envMap=vt.get(c.envMap||E.environment,at),E.envMapRotation=E.environment!==null&&c.envMap===null?x.environmentRotation:c.envMapRotation,q===void 0&&(c.addEventListener("dispose",un),q=new Map,E.programs=q);let tt=q.get(W);if(tt!==void 0){if(E.currentProgram===tt&&E.lightsStateVersion===H)return wr(c,O),tt}else O.uniforms=Ct.getUniforms(c),X!==null&&c.isNodeMaterial&&X.build(c,M,O),c.onBeforeCompile(O,N),tt=Ct.acquireProgram(O,W),q.set(W,tt),E.uniforms=O.uniforms;let nt=E.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(nt.clippingPlanes=Ft.uniform),wr(c,O),E.needsLights=Qe(c),E.lightsStateVersion=H,E.needsLights&&(nt.ambientLightColor.value=I.state.ambient,nt.lightProbe.value=I.state.probe,nt.sunLights.value=I.state.sun,nt.sunLightShadows.value=I.state.sunShadow,nt.directionalLights.value=I.state.directional,nt.directionalLightShadows.value=I.state.directionalShadow,nt.spotLights.value=I.state.spot,nt.spotLightShadows.value=I.state.spotShadow,nt.rectAreaLights.value=I.state.rectArea,nt.ltc_1.value=I.state.rectAreaLTC1,nt.ltc_2.value=I.state.rectAreaLTC2,nt.pointLights.value=I.state.point,nt.pointLightShadows.value=I.state.pointShadow,nt.hemisphereLights.value=I.state.hemi,nt.sunShadowMatrix.value=I.state.sunShadowMatrix,nt.sunShadowCascade.value=I.state.sunShadowCascade,nt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,nt.spotLightMatrix.value=I.state.spotLightMatrix,nt.spotLightMap.value=I.state.spotLightMap,nt.pointShadowMatrix.value=I.state.pointShadowMatrix),E.lightProbeGrid=A.state.lightProbeGridArray.length>0,E.currentProgram=tt,E.uniformsList=null,tt}function Si(c){if(c.uniformsList===null){let x=c.currentProgram.getUniforms();c.uniformsList=ws.seqWithValue(x.seq,c.uniforms)}return c.uniformsList}function wr(c,x){let M=Y.get(c);M.outputColorSpace=x.outputColorSpace,M.batching=x.batching,M.batchingColor=x.batchingColor,M.instancing=x.instancing,M.instancingColor=x.instancingColor,M.instancingMorph=x.instancingMorph,M.skinning=x.skinning,M.morphTargets=x.morphTargets,M.morphNormals=x.morphNormals,M.morphColors=x.morphColors,M.morphTargetsCount=x.morphTargetsCount,M.numClippingPlanes=x.numClippingPlanes,M.numIntersection=x.numClipIntersection,M.vertexAlphas=x.vertexAlphas,M.vertexTangents=x.vertexTangents,M.toneMapping=x.toneMapping}function Fi(c,x){if(c.length===0)return null;if(c.length===1)return c[0].texture!==null?c[0]:null;w.setFromMatrixPosition(x.matrixWorld);for(let M=0,E=c.length;M<E;M++){let I=c[M];if(I.texture!==null&&I.boundingBox.containsPoint(w))return I}return null}function Er(c,x,M,E,I){x.isScene!==!0&&(x=ve),it.resetTextureUnits();let T=x.fog,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?x.environment:null,O=dt===null?N.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:de.workingColorSpace,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=vt.get(E.envMap||H,W),at=E.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,tt=!!M.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),nt=!!M.morphAttributes.position,Mt=!!M.morphAttributes.normal,xt=!!M.morphAttributes.color,yt=bn;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(yt=N.toneMapping);let It=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Jt=It!==void 0?It.length:0,pt=Y.get(E),Kt=A.state.lights;if(Rt===!0&&(Ht===!0||c!==ft)){let ae=c===ft&&E.id===et;Ft.setState(E,c,ae)}let wt=!1;E.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Kt.state.version||pt.outputColorSpace!==O||I.isBatchedMesh&&pt.batching===!1||!I.isBatchedMesh&&pt.batching===!0||I.isBatchedMesh&&pt.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&pt.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&pt.instancing===!1||!I.isInstancedMesh&&pt.instancing===!0||I.isSkinnedMesh&&pt.skinning===!1||!I.isSkinnedMesh&&pt.skinning===!0||I.isInstancedMesh&&pt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&pt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&pt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&pt.instancingMorph===!1&&I.morphTexture!==null||pt.envMap!==q||E.fog===!0&&pt.fog!==T||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Ft.numPlanes||pt.numIntersection!==Ft.numIntersection)||pt.vertexAlphas!==at||pt.vertexTangents!==tt||pt.morphTargets!==nt||pt.morphNormals!==Mt||pt.morphColors!==xt||pt.toneMapping!==yt||pt.morphTargetsCount!==Jt||!!pt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,pt.__version=E.version);let Pt=pt.currentProgram;wt===!0&&(Pt=On(E,x,I),X&&E.isNodeMaterial&&X.onUpdateProgram(E,Pt,pt));let Gt=!1,fe=!1,oe=!1,kt=Pt.getUniforms(),qt=pt.uniforms;if(v.useProgram(Pt.program)&&(Gt=!0,fe=!0,oe=!0),E.id!==et&&(et=E.id,fe=!0),pt.needsLights){let ae=Fi(A.state.lightProbeGridArray,I);pt.lightProbeGrid!==ae&&(pt.lightProbeGrid=ae,fe=!0)}if(Gt||ft!==c){v.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),kt.setValue(F,"projectionMatrix",c.projectionMatrix),kt.setValue(F,"viewMatrix",c.matrixWorldInverse);let _e=kt.map.cameraPosition;_e!==void 0&&_e.setValue(F,Zt.setFromMatrixPosition(c.matrixWorld)),R.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&kt.setValue(F,"isOrthographic",c.isOrthographicCamera===!0),ft!==c&&(ft=c,fe=!0,oe=!0)}if(pt.needsLights&&(Kt.state.sunShadowMap.length>0&&kt.setValue(F,"sunShadowMap",Kt.state.sunShadowMap,it),Kt.state.directionalShadowMap.length>0&&kt.setValue(F,"directionalShadowMap",Kt.state.directionalShadowMap,it),Kt.state.spotShadowMap.length>0&&kt.setValue(F,"spotShadowMap",Kt.state.spotShadowMap,it),Kt.state.pointShadowMap.length>0&&kt.setValue(F,"pointShadowMap",Kt.state.pointShadowMap,it)),I.isSkinnedMesh){kt.setOptional(F,I,"bindMatrix"),kt.setOptional(F,I,"bindMatrixInverse");let ae=I.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),kt.setValue(F,"boneTexture",ae.boneTexture,it))}I.isBatchedMesh&&(kt.setOptional(F,I,"batchingTexture"),kt.setValue(F,"batchingTexture",I._matricesTexture,it),kt.setOptional(F,I,"batchingIdTexture"),kt.setValue(F,"batchingIdTexture",I._indirectTexture,it),kt.setOptional(F,I,"batchingColorTexture"),I._colorsTexture!==null&&kt.setValue(F,"batchingColorTexture",I._colorsTexture,it));let be=M.morphAttributes;if((be.position!==void 0||be.normal!==void 0||be.color!==void 0)&&z.update(I,M,Pt),(fe||pt.receiveShadow!==I.receiveShadow)&&(pt.receiveShadow=I.receiveShadow,kt.setValue(F,"receiveShadow",I.receiveShadow)),(E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial)&&E.envMap===null&&x.environment!==null&&(qt.envMapIntensity.value=x.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=a0()),fe){if(kt.setValue(F,"toneMappingExposure",N.toneMappingExposure),pt.needsLights&&Be(qt,oe),T&&E.fog===!0&&Dt.refreshFogUniforms(qt,T),Dt.refreshMaterialUniforms(qt,E,ht,$,A.state.transmissionRenderTarget[c.id]),pt.needsLights&&pt.lightProbeGrid){let ae=pt.lightProbeGrid;qt.probesSH.value=ae.texture,qt.probesMin.value.copy(ae.boundingBox.min),qt.probesMax.value.copy(ae.boundingBox.max),qt.probesResolution.value.copy(ae.resolution)}ws.upload(F,Si(pt),qt,it)}if(E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(ws.upload(F,Si(pt),qt,it),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&kt.setValue(F,"center",I.center),kt.setValue(F,"modelViewMatrix",I.modelViewMatrix),kt.setValue(F,"normalMatrix",I.normalMatrix),kt.setValue(F,"modelMatrix",I.matrixWorld),E.uniformsGroups!==void 0){let ae=E.uniformsGroups;for(let _e=0,Ve=ae.length;_e<Ve;_e++){let Bn=ae[_e];gt.update(Bn,Pt),gt.bind(Bn,Pt)}}return Pt}function Be(c,x){c.ambientLightColor.needsUpdate=x,c.lightProbe.needsUpdate=x,c.sunLights.needsUpdate=x,c.sunLightShadows.needsUpdate=x,c.directionalLights.needsUpdate=x,c.directionalLightShadows.needsUpdate=x,c.pointLights.needsUpdate=x,c.pointLightShadows.needsUpdate=x,c.spotLights.needsUpdate=x,c.spotLightShadows.needsUpdate=x,c.rectAreaLights.needsUpdate=x,c.hemisphereLights.needsUpdate=x}function Qe(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(c,x,M){let E=Y.get(c);E.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,E.__autoAllocateDepthBuffer===!1&&(E.__useRenderToTexture=!1),Y.get(c.texture).__webglTexture=x,Y.get(c.depthTexture).__webglTexture=E.__autoAllocateDepthBuffer?void 0:M,E.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,x){let M=Y.get(c);M.__webglFramebuffer=x,M.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(c,x=0,M=0){dt=c,rt=x,ot=M;let E=null,I=!1,T=!1;if(c){let O=Y.get(c);if(O.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,O.__webglFramebuffer),ut.copy(c.viewport),Vt.copy(c.scissor),Bt=c.scissorTest,v.viewport(ut),v.scissor(Vt),v.setScissorTest(Bt),et=-1;return}else if(O.__webglFramebuffer===void 0)it.setupRenderTarget(c);else if(O.__hasExternalTextures)it.rebindTextures(c,Y.get(c.texture).__webglTexture,Y.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){let at=c.depthTexture;if(O.__boundDepthTexture!==at){if(at!==null&&Y.has(at)&&(c.width!==at.image.width||c.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(c)}}let W=c.texture;(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)&&(T=!0);let q=Y.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(q[x])?E=q[x][M]:E=q[x],I=!0):c.samples>0&&it.useMultisampledRTT(c)===!1?E=Y.get(c).__webglMultisampledFramebuffer:Array.isArray(q)?E=q[M]:E=q,ut.copy(c.viewport),Vt.copy(c.scissor),Bt=c.scissorTest}else ut.copy(Q).multiplyScalar(ht).floor(),Vt.copy(St).multiplyScalar(ht).floor(),Bt=Tt;if(M!==0&&(E=Z),v.bindFramebuffer(F.FRAMEBUFFER,E)&&v.drawBuffers(c,E),v.viewport(ut),v.scissor(Vt),v.setScissorTest(Bt),I){let O=Y.get(c.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,O.__webglTexture,M)}else if(T){let O=x;for(let W=0;W<c.textures.length;W++){let q=Y.get(c.textures[W]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+W,q.__webglTexture,M,O)}}else if(c!==null&&M!==0){let O=Y.get(c.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,O.__webglTexture,M)}et=-1};function p(c){let x=Y.get(c);return(x.__readFormat!==c.format||x.__readType!==c.type)&&(x.__readFormat=c.format,x.__readType=c.type,x.__formatReadable=R.textureFormatReadable(c.format),x.__typeReadable=R.textureTypeReadable(c.type)),x}this.readRenderTargetPixels=function(c,x,M,E,I,T,H,O=0){if(!(c&&c.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Y.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&H!==void 0&&(W=W[H]),W){v.bindFramebuffer(F.FRAMEBUFFER,W);try{let q=c.textures[O],at=q.format,tt=q.type;c.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+O);let nt=p(q);if(nt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=c.width-E&&M>=0&&M<=c.height-I&&F.readPixels(x,M,E,I,Lt.convert(at),Lt.convert(tt),T)}finally{let q=dt!==null?Y.get(dt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(c,x,M,E,I,T,H,O=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Y.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&H!==void 0&&(W=W[H]),W)if(x>=0&&x<=c.width-E&&M>=0&&M<=c.height-I){v.bindFramebuffer(F.FRAMEBUFFER,W);let q=c.textures[O],at=q.format,tt=q.type;c.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+O);let nt=p(q);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,T.byteLength,F.STREAM_READ),F.readPixels(x,M,E,I,Lt.convert(at),Lt.convert(tt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let xt=dt!==null?Y.get(dt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,xt);let yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xh(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,T),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Mt),F.deleteSync(yt),T}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,x=null,M=0){let E=Math.pow(2,-M),I=Math.floor(c.image.width*E),T=Math.floor(c.image.height*E),H=x!==null?x.x:0,O=x!==null?x.y:0;it.setTexture2D(c,0),F.copyTexSubImage2D(F.TEXTURE_2D,M,0,0,H,O,I,T),v.unbindTexture()},this.copyTextureToTexture=function(c,x,M=null,E=null,I=0,T=0){let H,O,W,q,at,tt,nt,Mt,xt,yt=c.isCompressedTexture?c.mipmaps[T]:c.image;if(M!==null)H=M.max.x-M.min.x,O=M.max.y-M.min.y,W=M.isBox3?M.max.z-M.min.z:1,q=M.min.x,at=M.min.y,tt=M.isBox3?M.min.z:0;else{let qt=Math.pow(2,-I);H=Math.floor(yt.width*qt),O=Math.floor(yt.height*qt),c.isDataArrayTexture?W=yt.depth:c.isData3DTexture?W=Math.floor(yt.depth*qt):W=1,q=0,at=0,tt=0}E!==null?(nt=E.x,Mt=E.y,xt=E.z):(nt=0,Mt=0,xt=0);let It=Lt.convert(x.format),Jt=Lt.convert(x.type),pt;x.isData3DTexture?(it.setTexture3D(x,0),pt=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(it.setTexture2DArray(x,0),pt=F.TEXTURE_2D_ARRAY):(it.setTexture2D(x,0),pt=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);let Kt=v.getParameter(F.UNPACK_ROW_LENGTH),wt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),Pt=v.getParameter(F.UNPACK_SKIP_PIXELS),Gt=v.getParameter(F.UNPACK_SKIP_ROWS),fe=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,q),v.pixelStorei(F.UNPACK_SKIP_ROWS,at),v.pixelStorei(F.UNPACK_SKIP_IMAGES,tt);let oe=c.isDataArrayTexture||c.isData3DTexture,kt=x.isDataArrayTexture||x.isData3DTexture;if(c.isDepthTexture){let qt=Y.get(c),be=Y.get(x),ae=Y.get(qt.__renderTarget),_e=Y.get(be.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,ae.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ve=0;Ve<W;Ve++)oe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(c).__webglTexture,I,tt+Ve),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(x).__webglTexture,T,xt+Ve)),F.blitFramebuffer(q,at,H,O,nt,Mt,H,O,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(I!==0||c.isRenderTargetTexture||Y.has(c)){let qt=Y.get(c),be=Y.get(x);v.bindFramebuffer(F.READ_FRAMEBUFFER,B),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let ae=0;ae<W;ae++)oe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,I,tt+ae):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,I),kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,T,xt+ae):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,T),I!==0?F.blitFramebuffer(q,at,H,O,nt,Mt,H,O,F.COLOR_BUFFER_BIT,F.NEAREST):kt?F.copyTexSubImage3D(pt,T,nt,Mt,xt+ae,q,at,H,O):F.copyTexSubImage2D(pt,T,nt,Mt,q,at,H,O);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else kt?c.isDataTexture||c.isData3DTexture?F.texSubImage3D(pt,T,nt,Mt,xt,H,O,W,It,Jt,yt.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(pt,T,nt,Mt,xt,H,O,W,It,yt.data):F.texSubImage3D(pt,T,nt,Mt,xt,H,O,W,It,Jt,yt):c.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,T,nt,Mt,H,O,It,Jt,yt.data):c.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,T,nt,Mt,yt.width,yt.height,It,yt.data):F.texSubImage2D(F.TEXTURE_2D,T,nt,Mt,H,O,It,Jt,yt);v.pixelStorei(F.UNPACK_ROW_LENGTH,Kt),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(F.UNPACK_SKIP_IMAGES,fe),T===0&&x.generateMipmaps&&F.generateMipmap(pt),v.unbindTexture()},this.initRenderTarget=function(c){Y.get(c).__webglFramebuffer===void 0&&it.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?it.setTextureCube(c,0):c.isData3DTexture?it.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?it.setTexture2DArray(c,0):it.setTexture2D(c,0),v.unbindTexture()},this.resetState=function(){rt=0,ot=0,dt=null,v.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var gn=Uint8Array,Ts=Uint16Array,l0=Int32Array,Qh=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jh=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),c0=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tu=function(i,t){for(var e=new Ts(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new l0(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},eu=tu(Qh,2),nu=eu.b,h0=eu.r;nu[28]=258,h0[258]=28;var iu=tu(jh,0),u0=iu.b,Xv=iu.r,ac=new Ts(32768);for(Se=0;Se<32768;++Se)jn=(Se&43690)>>1|(Se&21845)<<1,jn=(jn&52428)>>2|(jn&13107)<<2,jn=(jn&61680)>>4|(jn&3855)<<4,ac[Se]=((jn&65280)>>8|(jn&255)<<8)>>1;var jn,Se,gr=(function(i,t,e){for(var n=i.length,s=0,r=new Ts(t);s<n;++s)i[s]&&++r[i[s]-1];var o=new Ts(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new Ts(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var h=s<<4|i[s],u=t-i[s],f=o[i[s]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[ac[f]>>l]=h}else for(a=new Ts(n),s=0;s<n;++s)i[s]&&(a[s]=ac[o[i[s]-1]++]>>15-i[s]);return a}),_r=new gn(288);for(Se=0;Se<144;++Se)_r[Se]=8;var Se;for(Se=144;Se<256;++Se)_r[Se]=9;var Se;for(Se=256;Se<280;++Se)_r[Se]=7;var Se;for(Se=280;Se<288;++Se)_r[Se]=8;var Se,su=new gn(32);for(Se=0;Se<32;++Se)su[Se]=5;var Se;var f0=gr(_r,9,1);var d0=gr(su,5,1),rc=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},Tn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},oc=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},p0=function(i){return(i+7)/8|0},m0=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new gn(i.subarray(t,e))};var g0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],An=function(i,t,e){var n=new Error(t||g0[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,An),!e)throw n;return n},_0=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new gn(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new gn(s*3));var h=function(Q){var St=e.length;if(Q>St){var Tt=new gn(Math.max(St*2,Q));Tt.set(e),e=Tt}},u=t.f||0,f=t.p||0,d=t.b||0,g=t.l,y=t.d,b=t.m,_=t.n,m=s*8;do{if(!g){u=Tn(i,f,1);var L=Tn(i,f+1,3);if(f+=3,L)if(L==1)g=f0,y=d0,b=9,_=5;else if(L==2){var A=Tn(i,f,31)+257,U=Tn(i,f+10,15)+4,S=A+Tn(i,f+5,31)+1;f+=14;for(var P=new gn(S),N=new gn(19),k=0;k<U;++k)N[c0[k]]=Tn(i,f+k*3,7);f+=U*3;for(var X=rc(N),Z=(1<<X)-1,B=gr(N,X,1),k=0;k<S;){var J=B[Tn(i,f,Z)];f+=J&15;var D=J>>4;if(D<16)P[k++]=D;else{var rt=0,ot=0;for(D==16?(ot=3+Tn(i,f,3),f+=2,rt=P[k-1]):D==17?(ot=3+Tn(i,f,7),f+=3):D==18&&(ot=11+Tn(i,f,127),f+=7);ot--;)P[k++]=rt}}var dt=P.subarray(0,A),et=P.subarray(A);b=rc(dt),_=rc(et),g=gr(dt,b,1),y=gr(et,_,1)}else An(1);else{var D=p0(f)+4,w=i[D-4]|i[D-3]<<8,C=D+w;if(C>s){l&&An(0);break}a&&h(d+w),e.set(i.subarray(D,C),d),t.b=d+=w,t.p=f=C*8,t.f=u;continue}if(f>m){l&&An(0);break}}a&&h(d+131072);for(var ft=(1<<b)-1,ut=(1<<_)-1,Vt=f;;Vt=f){var rt=g[oc(i,f)&ft],Bt=rt>>4;if(f+=rt&15,f>m){l&&An(0);break}if(rt||An(2),Bt<256)e[d++]=Bt;else if(Bt==256){Vt=f,g=null;break}else{var me=Bt-254;if(Bt>264){var k=Bt-257,jt=Qh[k];me=Tn(i,f,(1<<jt)-1)+nu[k],f+=jt}var se=y[oc(i,f)&ut],$=se>>4;se||An(3),f+=se&15;var et=u0[$];if($>3){var jt=jh[$];et+=oc(i,f)&(1<<jt)-1,f+=jt}if(f>m){l&&An(0);break}a&&h(d+131072);var ht=d+me;if(d<et){var Ut=r-et,j=Math.min(et,ht);for(Ut+d<0&&An(3);d<j;++d)e[d]=n[Ut+d]}for(;d<ht;++d)e[d]=e[d-et]}}t.l=g,t.p=Vt,t.b=d,t.f=u,g&&(u=1,t.m=b,t.d=y,t.n=_)}while(!u);return d!=e.length&&o?m0(e,0,d):e.subarray(0,d)};var x0=new gn(0);var v0=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&An(6,"invalid zlib data"),(i[1]>>5&1)==+!t&&An(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function As(i,t){return _0(i.subarray(v0(i,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var y0=typeof TextDecoder<"u"&&new TextDecoder,S0=0;try{y0.decode(x0,{stream:!0}),S0=1}catch{}var Ea=class extends js{constructor(t){super(t),this.type=He,this.outputFormat=Ne,this.part=0}parse(t){let P=Math.pow(2.7182818,2.2),N=null;function k(p,c){let x=0;for(let E=0;E<65536;++E)(E==0||p[E>>3]&1<<(E&7))&&(c[x++]=E);let M=x-1;for(;x<65536;)c[x++]=0;return M}function X(p){for(let c=0;c<16384;c++)p[c]={},p[c].len=0,p[c].lit=0,p[c].p=null}let Z={l:0,c:0,lc:0};function B(p,c,x,M,E){for(;x<p;)c=c<<8|Et(M,E),x+=8;x-=p,Z.l=c>>x&(1<<p)-1,Z.c=c,Z.lc=x}let J=new Array(59);function rt(p){for(let x=0;x<=58;++x)J[x]=0;for(let x=0;x<65537;++x)J[p[x]]+=1;let c=0;for(let x=58;x>0;--x){let M=c+J[x]>>1;J[x]=c,c=M}for(let x=0;x<65537;++x){let M=p[x];M>0&&(p[x]=M|J[M]++<<6)}}function ot(p,c,x,M,E,I){let T=c,H=0,O=0;for(;M<=E;M++){if(T.value-c.value>x)return!1;B(6,H,O,p,T);let W=Z.l;if(H=Z.c,O=Z.lc,I[M]=W,W==63){if(T.value-c.value>x)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");B(8,H,O,p,T);let q=Z.l+6;if(H=Z.c,O=Z.lc,M+q>E+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;q--;)I[M++]=0;M--}else if(W>=59){let q=W-59+2;if(M+q>E+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;q--;)I[M++]=0;M--}}rt(I)}function dt(p){return p&63}function et(p){return p>>6}function ft(p,c,x,M){for(;c<=x;c++){let E=et(p[c]),I=dt(p[c]);if(E>>I)throw new Error("THREE.EXRLoader: Invalid table entry");if(I>14){let T=M[E>>I-14];if(T.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(T.lit++,T.p){let H=T.p;T.p=new Array(T.lit);for(let O=0;O<T.lit-1;++O)T.p[O]=H[O]}else T.p=new Array(1);T.p[T.lit-1]=c}else if(I){let T=0;for(let H=1<<14-I;H>0;H--){let O=M[(E<<14-I)+T];if(O.len||O.p)throw new Error("THREE.EXRLoader: Invalid table entry");O.len=I,O.lit=c,T++}}}return!0}let ut={c:0,lc:0};function Vt(p,c,x,M){p=p<<8|Et(x,M),c+=8,ut.c=p,ut.lc=c}let Bt={c:0,lc:0};function me(p,c,x,M,E,I,T,H,O){if(p==c){M<8&&(Vt(x,M,E,I),x=ut.c,M=ut.lc),M-=8;let W=x>>M;if(W=new Uint8Array([W])[0],H.value+W>O)return!1;let q=T[H.value-1];for(;W-- >0;)T[H.value++]=q}else if(H.value<O)T[H.value++]=p;else return!1;Bt.c=x,Bt.lc=M}function jt(p){return p&65535}function se(p){let c=jt(p);return c>32767?c-65536:c}let $={a:0,b:0};function ht(p,c){let x=se(p),E=se(c),I=x+(E&1)+(E>>1),T=I,H=I-E;$.a=T,$.b=H}function Ut(p,c){let x=jt(p),M=jt(c),E=x-(M>>1)&65535,I=M+E-32768&65535;$.a=I,$.b=E}function j(p,c,x,M,E,I,T){let H=T<16384,O=x>E?E:x,W=1,q,at;for(;W<=O;)W<<=1;for(W>>=1,q=W,W>>=1;W>=1;){at=0;let tt=at+I*(E-q),nt=I*W,Mt=I*q,xt=M*W,yt=M*q,It,Jt,pt,Kt;for(;at<=tt;at+=Mt){let wt=at,Pt=at+M*(x-q);for(;wt<=Pt;wt+=yt){let Gt=wt+xt,fe=wt+nt,oe=fe+xt;H?(ht(p[wt+c],p[fe+c]),It=$.a,pt=$.b,ht(p[Gt+c],p[oe+c]),Jt=$.a,Kt=$.b,ht(It,Jt),p[wt+c]=$.a,p[Gt+c]=$.b,ht(pt,Kt),p[fe+c]=$.a,p[oe+c]=$.b):(Ut(p[wt+c],p[fe+c]),It=$.a,pt=$.b,Ut(p[Gt+c],p[oe+c]),Jt=$.a,Kt=$.b,Ut(It,Jt),p[wt+c]=$.a,p[Gt+c]=$.b,Ut(pt,Kt),p[fe+c]=$.a,p[oe+c]=$.b)}if(x&W){let Gt=wt+nt;H?ht(p[wt+c],p[Gt+c]):Ut(p[wt+c],p[Gt+c]),It=$.a,p[Gt+c]=$.b,p[wt+c]=It}}if(E&W){let wt=at,Pt=at+M*(x-q);for(;wt<=Pt;wt+=yt){let Gt=wt+xt;H?ht(p[wt+c],p[Gt+c]):Ut(p[wt+c],p[Gt+c]),It=$.a,p[Gt+c]=$.b,p[wt+c]=It}}q=W,W>>=1}return at}function Q(p,c,x,M,E,I,T,H,O){let W=0,q=0,at=T,tt=Math.trunc(M.value+(E+7)/8);for(;M.value<tt;)for(Vt(W,q,x,M),W=ut.c,q=ut.lc;q>=14;){let Mt=W>>q-14&16383,xt=c[Mt];if(xt.len)q-=xt.len,me(xt.lit,I,W,q,x,M,H,O,at),W=Bt.c,q=Bt.lc;else{if(!xt.p)throw new Error("THREE.EXRLoader: hufDecode issues");let yt;for(yt=0;yt<xt.lit;yt++){let It=dt(p[xt.p[yt]]);for(;q<It&&M.value<tt;)Vt(W,q,x,M),W=ut.c,q=ut.lc;if(q>=It&&et(p[xt.p[yt]])==(W>>q-It&(1<<It)-1)){q-=It,me(xt.p[yt],I,W,q,x,M,H,O,at),W=Bt.c,q=Bt.lc;break}}if(yt==xt.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}let nt=8-E&7;for(W>>=nt,q-=nt;q>0;){let Mt=c[W<<14-q&16383];if(Mt.len)q-=Mt.len,me(Mt.lit,I,W,q,x,M,H,O,at),W=Bt.c,q=Bt.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function St(p,c,x,M,E,I){let T={value:0},H=x.value,O=_t(c,x),W=_t(c,x);x.value+=4;let q=_t(c,x);if(x.value+=4,O<0||O>=65537||W<0||W>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");let at=new Array(65537),tt=new Array(16384);X(tt);let nt=M-(x.value-H);if(ot(p,x,nt,O,W,at),q>8*(M-(x.value-H)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");ft(at,O,W,tt),Q(at,tt,p,x,q,W,I,E,T)}function Tt(p,c,x){for(let M=0;M<x;++M)c[M]=p[c[M]]}function mt(p){for(let c=1;c<p.length;c++){let x=p[c-1]+p[c]-128;p[c]=x}}function Rt(p,c){let x=0,M=Math.floor((p.length+1)/2),E=0,I=p.length-1;for(;!(E>I||(c[E++]=p[x++],E>I));)c[E++]=p[M++]}function Ht(p){let c=p.byteLength,x=new Array,M=0,E=new DataView(p);for(;c>0;){let I=E.getInt8(M++);if(I<0){let T=-I;c-=T+1;for(let H=0;H<T;H++)x.push(E.getUint8(M++))}else{let T=I;c-=2;let H=E.getUint8(M++);for(let O=0;O<T+1;O++)x.push(H)}}return x}function bt(p,c,x,M,E,I){let T=new DataView(I.buffer),H=x[p.idx[0]].width,O=x[p.idx[0]].height,W=3,q=Math.floor(H/8),at=Math.ceil(H/8),tt=Math.ceil(O/8),nt=H-(at-1)*8,Mt=O-(tt-1)*8,xt={value:0},yt=new Array(W),It=new Array(W),Jt=new Array(W),pt=new Array(W),Kt=new Array(W);for(let Pt=0;Pt<W;++Pt)Kt[Pt]=c[p.idx[Pt]],yt[Pt]=Pt<1?0:yt[Pt-1]+at*tt,It[Pt]=new Float32Array(64),Jt[Pt]=new Uint16Array(64),pt[Pt]=new Uint16Array(at*64);for(let Pt=0;Pt<tt;++Pt){let Gt=8;Pt==tt-1&&(Gt=Mt);let fe=8;for(let kt=0;kt<at;++kt){kt==at-1&&(fe=nt);for(let qt=0;qt<W;++qt)Jt[qt].fill(0),Jt[qt][0]=E[yt[qt]++],ne(xt,M,Jt[qt]),ve(Jt[qt],It[qt]),te(It[qt]);W==3&&ge(It);for(let qt=0;qt<W;++qt)F(It[qt],pt[qt],kt*64)}let oe=0;for(let kt=0;kt<W;++kt){let qt=x[p.idx[kt]].type;for(let be=8*Pt;be<8*Pt+Gt;++be){oe=Kt[kt][be];for(let ae=0;ae<q;++ae){let _e=ae*64+(be&7)*8;T.setUint16(oe+0*qt,pt[kt][_e+0],!0),T.setUint16(oe+2*qt,pt[kt][_e+1],!0),T.setUint16(oe+4*qt,pt[kt][_e+2],!0),T.setUint16(oe+6*qt,pt[kt][_e+3],!0),T.setUint16(oe+8*qt,pt[kt][_e+4],!0),T.setUint16(oe+10*qt,pt[kt][_e+5],!0),T.setUint16(oe+12*qt,pt[kt][_e+6],!0),T.setUint16(oe+14*qt,pt[kt][_e+7],!0),oe+=16*qt}}if(q!=at)for(let be=8*Pt;be<8*Pt+Gt;++be){let ae=Kt[kt][be]+8*q*2*qt,_e=q*64+(be&7)*8;for(let Ve=0;Ve<fe;++Ve)T.setUint16(ae+Ve*2*qt,pt[kt][_e+Ve],!0)}}}let wt=new Uint16Array(H);T=new DataView(I.buffer);for(let Pt=0;Pt<W;++Pt){x[p.idx[Pt]].decoded=!0;let Gt=x[p.idx[Pt]].type;if(x[Pt].type==2)for(let fe=0;fe<O;++fe){let oe=Kt[Pt][fe];for(let kt=0;kt<H;++kt)wt[kt]=T.getUint16(oe+kt*2*Gt,!0);for(let kt=0;kt<H;++kt)T.setFloat32(oe+kt*2*Gt,K(wt[kt]),!0)}}}function Zt(p,c,x,M,E,I){let T=new DataView(I.buffer),H=x[p],O=H.width,W=H.height,q=Math.ceil(O/8),at=Math.ceil(W/8),tt=Math.floor(O/8),nt=O-(q-1)*8,Mt=W-(at-1)*8,xt={value:0},yt=0,It=new Float32Array(64),Jt=new Uint16Array(64),pt=new Uint16Array(q*64);for(let Kt=0;Kt<at;++Kt){let wt=8;Kt==at-1&&(wt=Mt);for(let Pt=0;Pt<q;++Pt)Jt.fill(0),Jt[0]=E[yt++],ne(xt,M,Jt),ve(Jt,It),te(It),F(It,pt,Pt*64);for(let Pt=8*Kt;Pt<8*Kt+wt;++Pt){let Gt=c[p][Pt];for(let fe=0;fe<tt;++fe){let oe=fe*64+(Pt&7)*8;for(let kt=0;kt<8;++kt)T.setUint16(Gt+kt*2*H.type,pt[oe+kt],!0);Gt+=16*H.type}if(q!=tt){let fe=tt*64+(Pt&7)*8;for(let oe=0;oe<nt;++oe)T.setUint16(Gt+oe*2*H.type,pt[fe+oe],!0)}}}H.decoded=!0}function ne(p,c,x){let M,E=1;for(;E<64;)M=c[p.value],M==65280?E=64:M>>8==255?E+=M&255:(x[E]=M,E++),p.value++}function ve(p,c){c[0]=K(p[0]),c[1]=K(p[1]),c[2]=K(p[5]),c[3]=K(p[6]),c[4]=K(p[14]),c[5]=K(p[15]),c[6]=K(p[27]),c[7]=K(p[28]),c[8]=K(p[2]),c[9]=K(p[4]),c[10]=K(p[7]),c[11]=K(p[13]),c[12]=K(p[16]),c[13]=K(p[26]),c[14]=K(p[29]),c[15]=K(p[42]),c[16]=K(p[3]),c[17]=K(p[8]),c[18]=K(p[12]),c[19]=K(p[17]),c[20]=K(p[25]),c[21]=K(p[30]),c[22]=K(p[41]),c[23]=K(p[43]),c[24]=K(p[9]),c[25]=K(p[11]),c[26]=K(p[18]),c[27]=K(p[24]),c[28]=K(p[31]),c[29]=K(p[40]),c[30]=K(p[44]),c[31]=K(p[53]),c[32]=K(p[10]),c[33]=K(p[19]),c[34]=K(p[23]),c[35]=K(p[32]),c[36]=K(p[39]),c[37]=K(p[45]),c[38]=K(p[52]),c[39]=K(p[54]),c[40]=K(p[20]),c[41]=K(p[22]),c[42]=K(p[33]),c[43]=K(p[38]),c[44]=K(p[46]),c[45]=K(p[51]),c[46]=K(p[55]),c[47]=K(p[60]),c[48]=K(p[21]),c[49]=K(p[34]),c[50]=K(p[37]),c[51]=K(p[47]),c[52]=K(p[50]),c[53]=K(p[56]),c[54]=K(p[59]),c[55]=K(p[61]),c[56]=K(p[35]),c[57]=K(p[36]),c[58]=K(p[48]),c[59]=K(p[49]),c[60]=K(p[57]),c[61]=K(p[58]),c[62]=K(p[62]),c[63]=K(p[63])}function te(p){let c=.5*Math.cos(.7853975),x=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),E=.5*Math.cos(3*3.14159/16),I=.5*Math.cos(5*3.14159/16),T=.5*Math.cos(3*3.14159/8),H=.5*Math.cos(7*3.14159/16),O=new Array(4),W=new Array(4),q=new Array(4),at=new Array(4);for(let tt=0;tt<8;++tt){let nt=tt*8;O[0]=M*p[nt+2],O[1]=T*p[nt+2],O[2]=M*p[nt+6],O[3]=T*p[nt+6],W[0]=x*p[nt+1]+E*p[nt+3]+I*p[nt+5]+H*p[nt+7],W[1]=E*p[nt+1]-H*p[nt+3]-x*p[nt+5]-I*p[nt+7],W[2]=I*p[nt+1]-x*p[nt+3]+H*p[nt+5]+E*p[nt+7],W[3]=H*p[nt+1]-I*p[nt+3]+E*p[nt+5]-x*p[nt+7],q[0]=c*(p[nt+0]+p[nt+4]),q[3]=c*(p[nt+0]-p[nt+4]),q[1]=O[0]+O[3],q[2]=O[1]-O[2],at[0]=q[0]+q[1],at[1]=q[3]+q[2],at[2]=q[3]-q[2],at[3]=q[0]-q[1],p[nt+0]=at[0]+W[0],p[nt+1]=at[1]+W[1],p[nt+2]=at[2]+W[2],p[nt+3]=at[3]+W[3],p[nt+4]=at[3]-W[3],p[nt+5]=at[2]-W[2],p[nt+6]=at[1]-W[1],p[nt+7]=at[0]-W[0]}for(let tt=0;tt<8;++tt)O[0]=M*p[16+tt],O[1]=T*p[16+tt],O[2]=M*p[48+tt],O[3]=T*p[48+tt],W[0]=x*p[8+tt]+E*p[24+tt]+I*p[40+tt]+H*p[56+tt],W[1]=E*p[8+tt]-H*p[24+tt]-x*p[40+tt]-I*p[56+tt],W[2]=I*p[8+tt]-x*p[24+tt]+H*p[40+tt]+E*p[56+tt],W[3]=H*p[8+tt]-I*p[24+tt]+E*p[40+tt]-x*p[56+tt],q[0]=c*(p[tt]+p[32+tt]),q[3]=c*(p[tt]-p[32+tt]),q[1]=O[0]+O[3],q[2]=O[1]-O[2],at[0]=q[0]+q[1],at[1]=q[3]+q[2],at[2]=q[3]-q[2],at[3]=q[0]-q[1],p[0+tt]=at[0]+W[0],p[8+tt]=at[1]+W[1],p[16+tt]=at[2]+W[2],p[24+tt]=at[3]+W[3],p[32+tt]=at[3]-W[3],p[40+tt]=at[2]-W[2],p[48+tt]=at[1]-W[1],p[56+tt]=at[0]-W[0]}function ge(p){for(let c=0;c<64;++c){let x=p[0][c],M=p[1][c],E=p[2][c];p[0][c]=x+1.5747*E,p[1][c]=x-.1873*M-.4682*E,p[2][c]=x+1.8556*M}}function F(p,c,x){for(let M=0;M<64;++M)c[x+M]=Mn.toHalfFloat(ye(p[M]))}function ye(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(P,Math.abs(p)-1)}function re(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function R(p){let c=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),x=new Uint8Array(Ht(c)),M=new Uint8Array(x.length);return mt(x),Rt(x,M),new DataView(M.buffer)}function v(p){let c=p.array.slice(p.offset.value,p.offset.value+p.size),x=As(c),M=new Uint8Array(x.length);return mt(x),Rt(x,M),new DataView(M.buffer)}function G(p){let c=p.viewer,x={value:p.offset.value},M=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),E=new Uint8Array(8192),I=0,T=new Array(p.inputChannels.length);for(let Mt=0,xt=p.inputChannels.length;Mt<xt;Mt++)T[Mt]={},T[Mt].start=I,T[Mt].end=T[Mt].start,T[Mt].nx=p.columns,T[Mt].ny=p.lines,T[Mt].size=p.type,I+=T[Mt].nx*T[Mt].ny*T[Mt].size;let H=ct(c,x),O=ct(c,x);if(O>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(H<=O)for(let Mt=0;Mt<O-H+1;Mt++)E[Mt+H]=Ft(c,x);let W=new Uint16Array(65536),q=k(E,W),at=_t(c,x);St(p.array,c,x,at,M,I);for(let Mt=0;Mt<p.inputChannels.length;++Mt){let xt=T[Mt];for(let yt=0;yt<T[Mt].size;++yt)j(M,xt.start+yt,xt.nx,xt.size,xt.ny,xt.nx*xt.size,q)}Tt(W,M,I);let tt=0,nt=new Uint8Array(M.buffer.byteLength);for(let Mt=0;Mt<p.lines;Mt++)for(let xt=0;xt<p.inputChannels.length;xt++){let yt=T[xt],It=yt.nx*yt.size,Jt=new Uint8Array(M.buffer,yt.end*2,It*2);nt.set(Jt,tt),tt+=It*2,yt.end+=It}return new DataView(nt.buffer)}function Y(p){let c=p.array.slice(p.offset.value,p.offset.value+p.size),x=As(c),M=p.inputChannels.length*p.lines*p.columns*p.totalBytes,E=new ArrayBuffer(M),I=new DataView(E),T=0,H=0,O=new Array(4);for(let W=0;W<p.lines;W++)for(let q=0;q<p.inputChannels.length;q++){let at=0;switch(p.inputChannels[q].pixelType){case 1:O[0]=T,O[1]=O[0]+p.columns,T=O[1]+p.columns;for(let nt=0;nt<p.columns;++nt){let Mt=x[O[0]++]<<8|x[O[1]++];at+=Mt,I.setUint16(H,at,!0),H+=2}break;case 2:O[0]=T,O[1]=O[0]+p.columns,O[2]=O[1]+p.columns,T=O[2]+p.columns;for(let nt=0;nt<p.columns;++nt){let Mt=x[O[0]++]<<24|x[O[1]++]<<16|x[O[2]++]<<8;at+=Mt,I.setUint32(H,at,!0),H+=4}break}}return I}function it(p){let c=p.array,x=p.offset.value,M=p.columns,E=p.lines,I=p.inputChannels,T=p.totalBytes,H=Be.compression==="B44A_COMPRESSION",O=new Uint8Array(E*M*T),W=new Uint16Array(16),q=0;for(let at=0;at<I.length;at++){let tt=I[at],nt=tt.pixelType*2,Mt=Math.ceil(M/tt.xSampling),xt=Math.ceil(E/tt.ySampling),yt=tt.xSampling===1&&tt.ySampling===1;if(tt.pixelType!==1){for(let pt=0;pt<xt;pt++)if(yt){let Kt=pt*M*T+q*M;for(let wt=0;wt<Mt*nt;wt++)O[Kt+wt]=c[x++]}else x+=Mt*nt;q+=nt;continue}let It=Math.ceil(Mt/4),Jt=Math.ceil(xt/4);for(let pt=0;pt<Jt;pt++)for(let Kt=0;Kt<It;Kt++){if(H&&c[x+2]>=52){let wt=c[x]<<8|c[x+1],Pt=wt&32768?wt&32767:~wt&65535;W.fill(Pt),x+=3}else{let wt=c[x]<<8|c[x+1],Pt=c[x+2]>>2,Gt=32<<Pt,fe=wt+((c[x+2]<<4|c[x+3]>>4)&63)*(1<<Pt)-Gt&65535,oe=fe+((c[x+3]<<2|c[x+4]>>6)&63)*(1<<Pt)-Gt&65535,kt=oe+(c[x+4]&63)*(1<<Pt)-Gt&65535,qt=wt+(c[x+5]>>2&63)*(1<<Pt)-Gt&65535,be=fe+((c[x+5]<<4|c[x+6]>>4)&63)*(1<<Pt)-Gt&65535,ae=oe+((c[x+6]<<2|c[x+7]>>6)&63)*(1<<Pt)-Gt&65535,_e=kt+(c[x+7]&63)*(1<<Pt)-Gt&65535,Ve=qt+(c[x+8]>>2&63)*(1<<Pt)-Gt&65535,Bn=be+((c[x+8]<<4|c[x+9]>>4)&63)*(1<<Pt)-Gt&65535,Is=ae+((c[x+9]<<2|c[x+10]>>6)&63)*(1<<Pt)-Gt&65535,Cn=_e+(c[x+10]&63)*(1<<Pt)-Gt&65535,Mi=Ve+(c[x+11]>>2&63)*(1<<Pt)-Gt&65535,Tr=Bn+((c[x+11]<<4|c[x+12]>>4)&63)*(1<<Pt)-Gt&65535,Ar=Is+((c[x+12]<<2|c[x+13]>>6)&63)*(1<<Pt)-Gt&65535,Cr=Cn+(c[x+13]&63)*(1<<Pt)-Gt&65535,Ps=[wt,qt,Ve,Mi,fe,be,Bn,Tr,oe,ae,Is,Ar,kt,_e,Cn,Cr];for(let Oi=0;Oi<16;Oi++)W[Oi]=Ps[Oi]&32768?Ps[Oi]&32767:~Ps[Oi]&65535;x+=14}if(tt.pLinear){if(N===null){N=new Uint16Array(65536);for(let wt=0;wt<65536;wt++)if((wt&31744)===31744||wt>32768)N[wt]=0;else{let Pt=K(wt);N[wt]=Pt<=0?0:Mn.toHalfFloat(8*Math.log(Pt))}}for(let wt=0;wt<16;wt++)W[wt]=N[W[wt]]}for(let wt=0;wt<4;wt++){let Pt=pt*4+wt;if(!(Pt>=xt))for(let Gt=0;Gt<4;Gt++){let fe=Kt*4+Gt;if(fe>=Mt)continue;let oe=W[wt*4+Gt];for(let kt=0;kt<tt.ySampling;kt++){let qt=Pt*tt.ySampling+kt;if(!(qt>=E))for(let be=0;be<tt.xSampling;be++){let ae=fe*tt.xSampling+be;if(ae>=M)continue;let _e=qt*M*T+q*M+ae*2;O[_e]=oe&255,O[_e+1]=oe>>8&255}}}}}q+=2}return new DataView(O.buffer)}function vt(p){let c=p.viewer,x={value:p.offset.value},M=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),E={version:Nt(c,x),unknownUncompressedSize:Nt(c,x),unknownCompressedSize:Nt(c,x),acCompressedSize:Nt(c,x),dcCompressedSize:Nt(c,x),rleCompressedSize:Nt(c,x),rleUncompressedSize:Nt(c,x),rleRawSize:Nt(c,x),totalAcUncompressedCount:Nt(c,x),totalDcUncompressedCount:Nt(c,x),acCompression:Nt(c,x)};if(E.version<2)throw new Error("THREE.EXRLoader: "+Be.compression+" version "+E.version+" is unsupported");let I=new Array,T=ct(c,x)-2;for(;T>0;){let xt=At(c.buffer,x),yt=Ft(c,x),It=yt>>2&3,Jt=(yt>>4)-1,pt=new Int8Array([Jt])[0],Kt=Ft(c,x);I.push({name:xt,index:pt,type:Kt,compression:It}),T-=xt.length+3}let H=Be.channels,O=new Array(p.inputChannels.length);for(let xt=0;xt<p.inputChannels.length;++xt){let yt=O[xt]={},It=H[xt];yt.name=It.name,yt.compression=0,yt.decoded=!1,yt.type=It.pixelType,yt.pLinear=It.pLinear,yt.width=p.columns,yt.height=p.lines}let W={idx:new Array(3)};for(let xt=0;xt<p.inputChannels.length;++xt){let yt=O[xt],It=yt.name.lastIndexOf("."),Jt=It>=0?yt.name.substring(It+1):yt.name;for(let pt=0;pt<I.length;++pt){let Kt=I[pt];Jt===Kt.name&&yt.type===Kt.type&&(yt.compression=Kt.compression,Kt.index>=0&&(W.idx[Kt.index]=xt),yt.offset=xt)}}let q,at,tt;if(E.acCompressedSize>0)switch(E.acCompression){case 0:q=new Uint16Array(E.totalAcUncompressedCount),St(p.array,c,x,E.acCompressedSize,q,E.totalAcUncompressedCount);break;case 1:let xt=p.array.slice(x.value,x.value+E.totalAcUncompressedCount),yt=As(xt);q=new Uint16Array(yt.buffer),x.value+=E.totalAcUncompressedCount;break}if(E.dcCompressedSize>0){let xt={array:p.array,offset:x,size:E.dcCompressedSize};at=new Uint16Array(v(xt).buffer),x.value+=E.dcCompressedSize}if(E.rleRawSize>0){let xt=p.array.slice(x.value,x.value+E.rleCompressedSize),yt=As(xt);tt=Ht(yt.buffer),x.value+=E.rleCompressedSize}let nt=0,Mt=new Array(O.length);for(let xt=0;xt<Mt.length;++xt)Mt[xt]=new Array;for(let xt=0;xt<p.lines;++xt)for(let yt=0;yt<O.length;++yt)Mt[yt].push(nt),nt+=O[yt].width*p.type*2;W.idx[0]!==void 0&&O[W.idx[0]]&&bt(W,Mt,O,q,at,M);for(let xt=0;xt<O.length;++xt){let yt=O[xt];if(!yt.decoded)switch(yt.compression){case 2:let It=0,Jt=0;for(let pt=0;pt<p.lines;++pt){let Kt=Mt[xt][It];for(let wt=0;wt<yt.width;++wt){for(let Pt=0;Pt<2*yt.type;++Pt)M[Kt++]=tt[Jt+Pt*yt.width*yt.height];Jt++}It++}break;case 1:Zt(xt,Mt,O,q,at,M);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(M.buffer)}function At(p,c){let x=new Uint8Array(p),M=0;for(;x[c.value+M]!=0;)M+=1;let E=new TextDecoder().decode(x.slice(c.value,c.value+M));return c.value=c.value+M+1,E}function st(p,c,x){let M=new TextDecoder().decode(new Uint8Array(p).slice(c.value,c.value+x));return c.value=c.value+x,M}function lt(p,c){let x=Dt(p,c),M=_t(p,c);return[x,M]}function Ct(p,c){let x=_t(p,c),M=_t(p,c);return[x,M]}function Dt(p,c){let x=p.getInt32(c.value,!0);return c.value=c.value+4,x}function _t(p,c){let x=p.getUint32(c.value,!0);return c.value=c.value+4,x}function Et(p,c){let x=p[c.value];return c.value=c.value+1,x}function Ft(p,c){let x=p.getUint8(c.value);return c.value=c.value+1,x}let Nt=function(p,c){let x=Number(p.getBigInt64(c.value,!0));return c.value+=8,x};function Wt(p,c){let x=p.getFloat32(c.value,!0);return c.value+=4,x}function z(p,c){return Mn.toHalfFloat(Wt(p,c))}function K(p){let c=(p&31744)>>10,x=p&1023;return(p>>15?-1:1)*(c?c===31?x?NaN:1/0:Math.pow(2,c-15)*(1+x/1024):6103515625e-14*(x/1024))}function ct(p,c){let x=p.getUint16(c.value,!0);return c.value+=2,x}function Lt(p,c){return K(ct(p,c))}function zt(p,c,x,M){let E=x.value,I=[];for(;x.value<E+M-1;){let T=At(c,x),H=Dt(p,x),O=Ft(p,x);x.value+=3;let W=Dt(p,x),q=Dt(p,x);I.push({name:T,pixelType:H,pLinear:O,xSampling:W,ySampling:q})}return x.value+=1,I}function gt(p,c){let x=Wt(p,c),M=Wt(p,c),E=Wt(p,c),I=Wt(p,c),T=Wt(p,c),H=Wt(p,c),O=Wt(p,c),W=Wt(p,c);return{redX:x,redY:M,greenX:E,greenY:I,blueX:T,blueY:H,whiteX:O,whiteY:W}}function Yt(p,c){let x=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=Ft(p,c);return x[M]}function Xt(p,c){let x=Dt(p,c),M=Dt(p,c),E=Dt(p,c),I=Dt(p,c);return{xMin:x,yMin:M,xMax:E,yMax:I}}function Ee(p,c){let x=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],M=Ft(p,c);return x[M]}function xe(p,c){let x=["ENVMAP_LATLONG","ENVMAP_CUBE"],M=Ft(p,c);return x[M]}function rn(p,c){let x=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],M=["ROUND_DOWN","ROUND_UP"],E=_t(p,c),I=_t(p,c),T=Ft(p,c);return{xSize:E,ySize:I,levelMode:x[T&15],roundingMode:M[T>>4]}}function un(p,c){let x=Wt(p,c),M=Wt(p,c);return[x,M]}function Ia(p,c){let x=Wt(p,c),M=Wt(p,c),E=Wt(p,c);return[x,M,E]}function Pa(p,c,x,M,E){if(M==="string"||M==="stringvector"||M==="iccProfile")return st(c,x,E);if(M==="chlist")return zt(p,c,x,E);if(M==="chromaticities")return gt(p,x);if(M==="compression")return Yt(p,x);if(M==="box2i")return Xt(p,x);if(M==="envmap")return xe(p,x);if(M==="tiledesc")return rn(p,x);if(M==="lineOrder")return Ee(p,x);if(M==="float")return Wt(p,x);if(M==="v2f")return un(p,x);if(M==="v3f")return Ia(p,x);if(M==="int")return Dt(p,x);if(M==="rational")return lt(p,x);if(M==="timecode")return Ct(p,x);if(M==="preview"||M==="deepImageState"||M==="idmanifest")return x.value+=E,"skipped";x.value+=E}function xr(p,c){let x=Math.log2(p);return c=="ROUND_DOWN"?Math.floor(x):Math.ceil(x)}function Cs(p,c,x){let M=0;switch(p.levelMode){case"ONE_LEVEL":M=1;break;case"MIPMAP_LEVELS":M=xr(Math.max(c,x),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return M}function vr(p,c,x,M){let E=new Array(p);for(let I=0;I<p;I++){let T=1<<I,H=c/T|0;M=="ROUND_UP"&&H*T<c&&(H+=1);let O=Math.max(H,1);E[I]=(O+x-1)/x|0}return E}function yr(){let p=this,c=p.offset,x={value:0};for(let M=0;M<p.tileCount;M++){let E=Dt(p.viewer,c),I=Dt(p.viewer,c);c.value+=8,p.size=_t(p.viewer,c);let T=E*p.blockWidth,H=I*p.blockHeight;p.columns=T+p.blockWidth>p.width?p.width-T:p.blockWidth,p.lines=H+p.blockHeight>p.height?p.height-H:p.blockHeight;let O=p.columns*p.totalBytes,q=p.size<p.lines*O?p.uncompress(p):re(p);c.value+=p.size;for(let at=0;at<p.lines;at++){let tt=at*p.columns*p.totalBytes;for(let nt=0;nt<p.inputChannels.length;nt++){let Mt=Be.channels[nt].name,xt=p.channelByteOffsets[Mt]*p.columns,yt=p.decodeChannels[Mt];if(yt===void 0)continue;x.value=tt+xt;let It=(p.height-(1+H+at))*p.outLineWidth;for(let Jt=0;Jt<p.columns;Jt++){let pt=It+(Jt+T)*p.outputChannels+yt;p.byteArray[pt]=p.getter(q,x)}}}}}function Sr(){let p=this,c=p.offset,x={value:0};for(let M=0;M<p.height/p.blockHeight;M++){let E=Dt(p.viewer,c)-Be.dataWindow.yMin;p.size=_t(p.viewer,c),p.lines=E+p.blockHeight>p.height?p.height-E:p.blockHeight;let I=p.columns*p.totalBytes,H=p.size<p.lines*I?p.uncompress(p):re(p);c.value+=p.size;for(let O=0;O<p.lines;O++){let W=E+O,q=O*I,at=(p.height-1-W)*p.outLineWidth;for(let tt=0;tt<p.inputChannels.length;tt++){let nt=Be.channels[tt].name,Mt=p.channelByteOffsets[nt]*p.columns,xt=p.decodeChannels[nt];if(xt!==void 0){x.value=q+Mt;for(let yt=0;yt<p.columns;yt++){let It=at+yt*p.outputChannels+xt;p.byteArray[It]=p.getter(H,x)}}}}}}function Fn(){let p=this,c=p.chunkOffsets,x={value:0};for(let M=0;M<c.length;M++){let E={value:c[M]};E.value+=4;let I=Dt(p.viewer,E)-Be.dataWindow.yMin;p.size=_t(p.viewer,E),p.lines=I+p.blockHeight>p.height?p.height-I:p.blockHeight;let T=p.columns*p.totalBytes,H=p.size<p.lines*T,O=p.offset;p.offset=E;let W=H?p.uncompress(p):re(p);p.offset=O;for(let q=0;q<p.lines;q++){let at=I+q,tt=q*T,nt=(p.height-1-at)*p.outLineWidth;for(let Mt=0;Mt<p.inputChannels.length;Mt++){let xt=Be.channels[Mt].name,yt=p.channelByteOffsets[xt]*p.columns,It=p.decodeChannels[xt];if(It!==void 0){x.value=tt+yt;for(let Jt=0;Jt<p.columns;Jt++){let pt=nt+Jt*p.outputChannels+It;p.byteArray[pt]=p.getter(W,x)}}}}}}function Di(p,c,x,M){if(x===0)return null;let E=p.slice(c,c+x);switch(M){case"NO_COMPRESSION":return new DataView(E.buffer,E.byteOffset,E.byteLength);case"RLE_COMPRESSION":{let I=new Uint8Array(Ht(E.buffer.slice(E.byteOffset,E.byteOffset+E.byteLength))),T=new Uint8Array(I.length);return mt(I),Rt(I,T),new DataView(T.buffer)}case"ZIPS_COMPRESSION":{let I=As(E),T=new Uint8Array(I.length);return mt(I),Rt(I,T),new DataView(T.buffer)}default:throw new Error("THREE.EXRLoader: "+M+" is unsupported for deep data")}}function Mr(){let p=this,c=p.chunkOffsets,x=p.width,M=p.height,E=p.deepChannels,I=Be.compression,T=p.multiPart,H=p.decodeChannels,O=p.outputChannels,W=p.byteArray instanceof Uint16Array,q=-1;for(let at=0;at<E.length;at++)if(E[at].name==="A"){q=at;break}for(let at=0;at<c.length;at++){let tt={value:c[at]};T&&(tt.value+=4);let nt=Dt(p.viewer,tt)-Be.dataWindow.yMin,Mt=Nt(p.viewer,tt),xt=Nt(p.viewer,tt);Nt(p.viewer,tt);let yt=Di(p.array,tt.value,Mt,I);if(tt.value+=Mt,yt===null)continue;let It=new Uint32Array(x);for(let Gt=0;Gt<x;Gt++)It[Gt]=yt.getUint32(Gt*4,!0);let Jt=It[x-1];if(Jt===0){tt.value+=xt;continue}let pt=Di(p.array,tt.value,xt,I),Kt=[],wt=0;for(let Gt=0;Gt<E.length;Gt++)Kt.push(wt),wt+=Jt*E[Gt].bytesPerSample;let Pt=(M-1-nt)*p.outLineWidth;for(let Gt=0;Gt<x;Gt++){let fe=Gt===0?0:It[Gt-1],kt=It[Gt]-fe;if(kt===0)continue;let qt=new Float32Array(O),be=0;for(let _e=0;_e<kt;_e++){let Ve=fe+_e,Bn=1-be;if(Bn<=0)break;let Is=1;if(q>=0){let Cn=E[q].bytesPerSample,Mi=Kt[q]+Ve*Cn;Is=Cn===2?K(pt.getUint16(Mi,!0)):pt.getFloat32(Mi,!0)}for(let Cn=0;Cn<E.length;Cn++){let Mi=E[Cn],Tr=H[Mi.name];if(Tr===void 0)continue;let Ar=Mi.bytesPerSample,Cr=Kt[Cn]+Ve*Ar,Ps=Ar===2?K(pt.getUint16(Cr,!0)):pt.getFloat32(Cr,!0);qt[Tr]+=Ps*Bn}be+=Is*Bn}H.A!==void 0&&(qt[H.A]=be);let ae=Pt+Gt*O;for(let _e=0;_e<O;_e++)p.byteArray[ae+_e]=W?Mn.toHalfFloat(qt[_e]):qt[_e]}}}function Rs(p,c,x){let M={},E=!1;for(;;){let I=At(c,x);if(I==="")break;E=!0;let T=At(c,x),H=_t(p,x),O=Pa(p,c,x,T,H);O===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${T}'.`):M[I]=O}return E?M:null}function Ni(p,c,x){if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");let M=p.getUint8(4),E=p.getUint8(5),I={singleTile:!!(E&2),longName:!!(E&4),deepFormat:!!(E&8),multiPart:!!(E&16)};x.value=8;let T=[];if(I.multiPart){for(;;){let H=Rs(p,c,x);if(H===null)break;H.version=M,H.spec=I,T.push(H)}if(T.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{let H=Rs(p,c,x);H.version=M,H.spec=I,T.push(H)}return T}function br(p,c,x,M,E,I){let T={size:0,viewer:c,array:x,offset:M,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:ln};switch(p.compression){case"NO_COMPRESSION":T.blockHeight=1,T.uncompress=re;break;case"RLE_COMPRESSION":T.blockHeight=1,T.uncompress=R;break;case"ZIPS_COMPRESSION":T.blockHeight=1,T.uncompress=v;break;case"ZIP_COMPRESSION":T.blockHeight=16,T.uncompress=v;break;case"PIZ_COMPRESSION":T.blockHeight=32,T.uncompress=G;break;case"PXR24_COMPRESSION":T.blockHeight=16,T.uncompress=Y;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":T.blockHeight=32,T.uncompress=it;break;case"DWAA_COMPRESSION":T.blockHeight=32,T.uncompress=vt;break;case"DWAB_COMPRESSION":T.blockHeight=256,T.uncompress=vt;break;default:throw new Error("THREE.EXRLoader: "+p.compression+" is unsupported")}let H={};for(let tt of p.channels)switch(tt.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":H[tt.name]=!0,T.type=tt.pixelType}let O=!1,W=!1;if(H.Y&&H.RY&&H.BY)T.outputChannels=4,T.yCbCr=!0;else if(H.R&&H.G&&H.B)T.outputChannels=4;else if(H.Y)T.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(T.outputChannels){case 4:I==Ne?(O=!H.A,T.format=Ne,T.colorSpace=ln,T.outputChannels=4,T.decodeChannels={R:0,G:1,B:2,A:3}):I==sn?(T.format=sn,T.colorSpace=ln,T.outputChannels=2,T.decodeChannels={R:0,G:1}):I==yi?(T.format=yi,T.colorSpace=ln,T.outputChannels=1,T.decodeChannels={R:0}):W=!0;break;case 1:I==Ne?(O=!0,T.format=Ne,T.colorSpace=ln,T.outputChannels=4,T.shouldExpand=!0,T.decodeChannels={Y:0}):I==sn?(T.format=sn,T.colorSpace=ln,T.outputChannels=2,T.shouldExpand=!0,T.decodeChannels={Y:0}):I==yi?(T.format=yi,T.colorSpace=ln,T.outputChannels=1,T.decodeChannels={Y:0}):W=!0;break;default:W=!0}if(W)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(T.yCbCr&&(T.format=Ne,T.outputChannels=4,T.decodeChannels={Y:0,RY:1,BY:2},O=!0),T.type==1)switch(E){case Ke:T.getter=Lt;break;case He:T.getter=ct;break}else if(T.type==2)switch(E){case Ke:T.getter=Wt;break;case He:T.getter=z}else throw new Error("THREE.EXRLoader: unsupported pixelType "+T.type+" for "+p.compression+".");T.columns=T.width;let q=T.width*T.height*T.outputChannels;switch(E){case Ke:T.byteArray=new Float32Array(q),O&&T.byteArray.fill(1,0,q);break;case He:T.byteArray=new Uint16Array(q),O&&T.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",E);break}let at=0;for(let tt of p.channels)T.decodeChannels[tt.name]!==void 0&&(T.channelByteOffsets[tt.name]=at),at+=tt.pixelType*2;if(T.totalBytes=at,T.outLineWidth=T.width*T.outputChannels,p.spec.deepFormat){T.deepChannels=[];let tt=0;for(let nt of p.channels){let Mt=nt.pixelType===0?4:nt.pixelType*2;T.deepChannels.push({name:nt.name,pixelType:nt.pixelType,bytesPerSample:Mt}),tt+=Mt}T.deepBytesPerSample=tt,T.chunkOffsets=p._chunkOffsets,T.multiPart=p.spec.multiPart,T.decode=Mr.bind(T)}else if(p.spec.singleTile){T.blockHeight=p.tiles.ySize,T.blockWidth=p.tiles.xSize;let tt=Cs(p.tiles,T.width,T.height),nt=vr(tt,T.width,p.tiles.xSize,p.tiles.roundingMode),Mt=vr(tt,T.height,p.tiles.ySize,p.tiles.roundingMode);T.tileCount=nt[0]*Mt[0];for(let xt=0;xt<tt;xt++)for(let yt=0;yt<Mt[xt];yt++)for(let It=0;It<nt[xt];It++)Nt(c,M);T.decode=yr.bind(T)}else if(p.spec.multiPart)T.blockWidth=T.width,T.chunkOffsets=p._chunkOffsets,T.decode=Fn.bind(T);else{T.blockWidth=T.width;let tt=Math.ceil(T.height/T.blockHeight);for(let nt=0;nt<tt;nt++)Nt(c,M);T.decode=Sr.bind(T)}return T}let On={value:0},Si=new DataView(t),wr=new Uint8Array(t),Fi=Ni(Si,t,On),Er=Math.max(0,Math.min(this.part,Fi.length-1)),Be=Fi[Er];if(Be.spec.multiPart||Be.spec.deepFormat)for(let p=0;p<Fi.length;p++){let c=Fi[p].chunkCount;if(p===Er){Be._chunkOffsets=[];for(let x=0;x<c;x++)Be._chunkOffsets.push(Nt(Si,On))}else for(let x=0;x<c;x++)Nt(Si,On)}let Qe=br(Be,Si,wr,On,this.type,this.outputFormat);if(Qe.decode(),Qe.shouldExpand){let p=Qe.byteArray;if(this.outputFormat==Ne)for(let c=0;c<p.length;c+=4)p[c+2]=p[c+1]=p[c];else if(this.outputFormat==sn)for(let c=0;c<p.length;c+=2)p[c+1]=p[c]}if(Qe.yCbCr){let p=Qe.byteArray,c=Qe.width*Qe.height;if(this.type===He)for(let x=0;x<c;x++){let M=x*4,E=K(p[M]),I=K(p[M+1]),T=K(p[M+2]),H=(1+I)*E,O=(1+T)*E,W=(E-H*.2126-O*.0722)/.7152;p[M]=Mn.toHalfFloat(Math.max(0,H)),p[M+1]=Mn.toHalfFloat(Math.max(0,W)),p[M+2]=Mn.toHalfFloat(Math.max(0,O))}else for(let x=0;x<c;x++){let M=x*4,E=p[M],I=p[M+1],T=p[M+2],H=(1+I)*E,O=(1+T)*E;p[M]=Math.max(0,H),p[M+1]=Math.max(0,(E-H*.2126-O*.0722)/.7152),p[M+2]=Math.max(0,O)}}return{header:Be,width:Qe.width,height:Qe.height,data:Qe.byteArray,format:Qe.format,colorSpace:Qe.colorSpace,type:this.type,minFilter:Ce,magFilter:Ce,generateMipmaps:!1,flipY:!1}}setDataType(t){return this.type=t,this}setOutputFormat(t){return this.outputFormat=t,this}setPart(t){return this.part=t,this}};function ti(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ue,h=0;for(let u=0;u<i.length;++u){let f=i[u],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g])}if(t){let g;if(e)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,g,u),h+=g}}if(e){let u=0,f=[];for(let d=0;d<i.length;++d){let g=i[d].index;for(let y=0;y<g.count;++y)f.push(g.getX(y)+u);u+=i[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=ru(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let g=[];for(let b=0;b<o[u].length;++b)g.push(o[u][b][d]);let y=ru(g);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}}return l}function ru(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new je(o,e,n),l=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let f=l/e;for(let d=0,g=u.count;d<g;d++)for(let y=0;y<e;y++){let b=u.getComponent(d,y);a.setComponent(d+f,y,b)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ou=new V,M0=new pn,au=new V,Ta=class extends Pe{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Nn=new Te,b0=new Te,Aa=class{constructor(t={}){let e=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);let u=document.createElement("div");u.style.transformStyle="preserve-3d",h.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(_,m){let L=m.projectionMatrix.elements[5]*o;m.view&&m.view.enabled?(h.style.transform=`translate( ${-m.view.offsetX*(n/m.view.width)}px, ${-m.view.offsetY*(s/m.view.height)}px )`,h.style.transform+=`scale( ${m.view.fullWidth/m.view.width}, ${m.view.fullHeight/m.view.height} )`):h.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld();let D,w;m.isOrthographicCamera&&(D=-(m.right+m.left)/2,w=(m.top+m.bottom)/2);let C=m.view&&m.view.enabled?m.view.height/m.view.fullHeight:1,A=m.isOrthographicCamera?`scale( ${C} )scale(`+L+")translate("+f(D)+"px,"+f(w)+"px)"+d(m.matrixWorldInverse):`scale( ${C} )translateZ(`+L+"px)"+d(m.matrixWorldInverse),S=(m.isPerspectiveCamera?"perspective("+L+"px) ":"")+A+"translate("+r+"px,"+o+"px)";a.camera.style!==S&&(u.style.transform=S,a.camera.style=S),b(_,_,m,A)},this.setSize=function(_,m){n=_,s=m,r=n/2,o=s/2,l.style.width=_+"px",l.style.height=m+"px",h.style.width=_+"px",h.style.height=m+"px",u.style.width=_+"px",u.style.height=m+"px"};function f(_){return Math.abs(_)<1e-10?0:_}function d(_){let m=_.elements;return"matrix3d("+f(m[0])+","+f(-m[1])+","+f(m[2])+","+f(m[3])+","+f(m[4])+","+f(-m[5])+","+f(m[6])+","+f(m[7])+","+f(m[8])+","+f(-m[9])+","+f(m[10])+","+f(m[11])+","+f(m[12])+","+f(-m[13])+","+f(m[14])+","+f(m[15])+")"}function g(_){let m=_.elements;return"translate(-50%,-50%)"+("matrix3d("+f(m[0])+","+f(m[1])+","+f(m[2])+","+f(m[3])+","+f(-m[4])+","+f(-m[5])+","+f(-m[6])+","+f(-m[7])+","+f(m[8])+","+f(m[9])+","+f(m[10])+","+f(m[11])+","+f(m[12])+","+f(m[13])+","+f(m[14])+","+f(m[15])+")")}function y(_){_.isCSS3DObject&&(_.element.style.display="none");for(let m=0,L=_.children.length;m<L;m++)y(_.children[m])}function b(_,m,L,D){if(_.visible===!1){y(_);return}if(_.isCSS3DObject){let w=_.layers.test(L.layers)===!0,C=_.element;if(C.style.display=w===!0?"":"none",w===!0){_.onBeforeRender(e,m,L);let A;_.isCSS3DSprite?(Nn.copy(L.matrixWorldInverse),Nn.transpose(),_.rotation2D!==0&&Nn.multiply(b0.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(ou,M0,au),Nn.setPosition(ou),Nn.scale(au),Nn.elements[3]=0,Nn.elements[7]=0,Nn.elements[11]=0,Nn.elements[15]=1,A=g(Nn)):A=g(_.matrixWorld);let U=a.objects.get(_);if(U===void 0||U.style!==A){C.style.transform=A;let S={style:A};a.objects.set(_,S)}C.parentNode!==u&&u.appendChild(C),_.onAfterRender(e,m,L)}}for(let w=0,C=_.children.length;w<C;w++)b(_.children[w],m,L,D)}}};var lc=fetch("assets/gen/manifest.json",{cache:"no-cache"}).then(i=>i.ok?i.json():{}).catch(()=>({})),lu=(i,t)=>new ps().load(i,e=>{e.colorSpace=Ie,t(e)},void 0,()=>{}),ce={bg:"#f3f3f4",ink:"#2a1077",red:"#e8463f",lav:"#e9e5f7",lav2:"#cfc6ea",white:"#ffffff",road:"#2f2b3d",leaf:"#b9d4c0"};function Ra(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function w0(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}function Ca(i){let t=Ra(i),e=256,n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,e,e);let r=4,o=4,a=e/r,l=e/o;for(let u=0;u<o;u++){s.fillStyle="rgba(42,16,119,0.10)",s.fillRect(0,u*l+l*.86,e,l*.08);for(let f=0;f<r;f++){let d=f*a+a*.18,g=u*l+l*.16,y=a*.64,b=l*.6,_=t();_<.06?s.fillStyle="rgba(232,70,63,0.85)":_<.14?s.fillStyle="rgba(42,16,119,0.78)":s.fillStyle="rgba(42,16,119,"+(.26+t()*.24).toFixed(3)+")",s.fillRect(d,g,y,b),s.fillStyle="rgba(255,255,255,0.33)",s.fillRect(d,g,y,b*.2)}}let h=new $n(n);return h.colorSpace=Ie,h.wrapS=h.wrapT=ai,h.anisotropy=8,h}function cu({title:i,sub:t,bg:e,fg:n,accent:s,img:r}){let a=document.createElement("canvas");a.width=a.height=512;let l=a.getContext("2d");if(l.save(),l.beginPath(),l.arc(512/2,512/2,512/2,0,Math.PI*2),l.clip(),l.fillStyle=e,l.fillRect(0,0,512,512),r){let b=Math.max(512/r.width,512/r.height);l.drawImage(r,(512-r.width*b)/2,(512-r.height*b)/2,r.width*b,r.height*b),l.fillStyle="rgba(42,16,119,0.82)",l.fillRect(0,512*.62,512,512*.38),l.restore(),l.fillStyle="#ffffff",l.textAlign="center",l.textBaseline="middle",l.font='700 38px Poppins, "Segoe UI", sans-serif',l.fillText(i.length>26?i.slice(0,25)+"\u2026":i,512/2,512*.73),t&&(l.fillStyle=s,l.font='600 30px Inter, "Segoe UI", sans-serif',l.fillText(t,512/2,512*.83));let _=new $n(a);return _.colorSpace=Ie,_.anisotropy=4,_}l.restore(),l.fillStyle=n,l.textAlign="center",l.textBaseline="middle",l.font='700 46px Poppins, "Segoe UI", sans-serif';let h=i.split(" "),u=[],f="";for(let b of h){let _=f?f+" "+b:b;l.measureText(_).width>512*.68&&f?(u.push(f),f=b):f=_}u.push(f);let d=54,g=512/2-(u.length-1)*d/2-(t?22:0);u.forEach((b,_)=>l.fillText(b,512/2,g+_*d)),t&&(l.fillStyle=s,l.font='600 34px Inter, "Segoe UI", sans-serif',l.fillText(t,512/2,g+u.length*d+18));let y=new $n(a);return y.colorSpace=Ie,y.anisotropy=4,y}function E0(i){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle=ce.white,e.fillRect(0,0,256,256),e.fillStyle=ce.red,e.font='800 170px Poppins, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),128,140);let n=new $n(t);return n.colorSpace=Ie,n}function hu(i,t,e,n,s){let r=i.attributes.uv,o=[[n/s,e/s],[n/s,e/s],[t/s,n/s],[t/s,n/s],[t/s,e/s],[t/s,e/s]];for(let a=0;a<6;a++){let[l,h]=o[a];for(let u=a*4;u<a*4+4;u++)r.setXY(u,r.getX(u)*l,r.getY(u)*h)}return r.needsUpdate=!0,i}function T0(){let i=document.getElementById("world"),t=document.documentElement;if(!i||!w0())return t.classList.add("no-webgl"),null;let e=matchMedia("(prefers-reduced-motion: reduce)").matches,n=matchMedia("(max-width: 760px)").matches,s;try{s=new Ma({canvas:i,antialias:!n,powerPreference:"high-performance"})}catch{return t.classList.add("no-webgl"),null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:1.75)),s.setSize(innerWidth,innerHeight,!1),s.toneMapping=sr,s.toneMappingExposure=1.05;let r=new ls;r.background=new ie(ce.bg),r.fog=new Gs(ce.bg,45,200);let o=new qe(n?66:55,innerWidth/innerHeight,.1,700),a=new Aa;a.setSize(innerWidth,innerHeight),a.domElement.className="world-layer",document.body.appendChild(a.domElement);let l=new ls;r.add(new er(16777215,new ie(ce.lav2),1.15));let h=new gs(16777215,1.9);h.position.set(50,90,40),r.add(h);let u=new gs(new ie(ce.lav),.5);u.position.set(-40,30,-60),r.add(u),new Ea().load("assets/city.exr",j=>{j.mapping=Pi,r.environment=j,r.environmentIntensity=.5},void 0,()=>{}),lc.then(j=>{j.sky&&lu("assets/gen/"+j.sky,Q=>{Q.mapping=Pi,r.background=Q})});let f=new Ks([new V(0,7,40),new V(0,6,4),new V(12,8,-34),new V(-4,10,-74),new V(10,8,-112),new V(-2,12,-150),new V(0,22,-186)],!1,"catmullrom",.4),d=f.getSpacedPoints(300),g=(j,Q,St)=>d.some(Tt=>(Tt.x-j)**2+(Tt.z-Q)**2<St*St),y=[...document.querySelectorAll("[data-stop]")],b=y.map((j,Q)=>y.length>1?Q/(y.length-1):0),_=j=>{let Q=f.getPointAt(En.clamp(j,0,1)),St=f.getTangentAt(En.clamp(j,0,1)).normalize(),Tt=new V().crossVectors(St,new V(0,1,0)).normalize();return{p:Q,tan:St,side:Tt}},m=(j,Q,St,Tt=0)=>{let{p:mt,tan:Rt,side:Ht}=_(j);return mt.clone().addScaledVector(Rt,Q).addScaledVector(Ht,St).add(new V(0,Tt,0))},L=new pe(new fi(1e3,1e3),new De({color:ce.white,roughness:.95,metalness:0}));L.rotation.x=-Math.PI/2,L.position.set(0,0,-80),r.add(L);{let St=[],Tt=[],mt=[];for(let ne=0;ne<=260;ne++){let ve=ne/260,te=f.getPointAt(ve),ge=f.getTangentAt(ve),F=new V().crossVectors(ge,new V(0,1,0)).normalize(),ye=te.clone().addScaledVector(F,-7),re=te.clone().addScaledVector(F,7);if(St.push(ye.x,.04,ye.z,re.x,.04,re.z),Tt.push(0,ve*42,1,ve*42),ne<260){let R=ne*2;mt.push(R,R+1,R+2,R+1,R+3,R+2)}}let Rt=new Ue;Rt.setAttribute("position",new we(St,3)),Rt.setAttribute("uv",new we(Tt,2)),Rt.setIndex(mt),Rt.computeVertexNormals();let Ht=document.createElement("canvas");Ht.width=Ht.height=64;let bt=Ht.getContext("2d");bt.fillStyle=ce.road,bt.fillRect(0,0,64,64),bt.fillStyle="rgba(255,255,255,0.75)",bt.fillRect(3,0,2,64),bt.fillRect(59,0,2,64),bt.fillStyle="rgba(255,255,255,0.85)",bt.fillRect(31,8,2,28);let Zt=new $n(Ht);Zt.colorSpace=Ie,Zt.wrapS=Zt.wrapT=ai,Zt.anisotropy=8,r.add(new pe(Rt,new De({map:Zt,roughness:.65,metalness:.1})))}let D=[],w=(j,Q)=>D.push({x:j.x,z:j.z,r:Q}),C=(j,Q,St=7)=>{let Tt=f.getPointAt(j);for(let mt=0;mt<=8;mt++)w(Tt.clone().lerp(Q,mt/8),St)},A=[],U=[];{let j=b[0],Q=m(j,40,n?0:12,n?8:1),St=new qn;St.position.copy(Q);let Tt=document.getElementById("world-video"),mt=new en({color:16777215,fog:!1,toneMapped:!1});if(new ps().load("assets/hero-poster.jpg",bt=>{bt.colorSpace=Ie,mt.userData.live||(mt.map=bt,mt.needsUpdate=!0)}),Tt){let bt=()=>{if(mt.userData.live)return;let Zt=new Ys(Tt);Zt.colorSpace=Ie,mt.map=Zt,mt.userData.live=!0,mt.needsUpdate=!0};!Tt.paused&&Tt.readyState>=2?bt():Tt.addEventListener("playing",bt,{once:!0})}St.add(new pe(new hi(7.5,96),mt)),St.add(new pe(new fs(7.7,7.85,96),new en({color:ce.ink,fog:!1})));let Rt=new pe(new hi(2.6,64),new en({color:ce.red,fog:!1}));Rt.position.set(6.2,-5.4,-.2),St.add(Rt);let Ht=new en({color:ce.ink,fog:!1});[-2.2,3.4].forEach(bt=>{let Zt=new pe(new Ye(.07,22,.07),Ht);Zt.position.set(bt,0,.12),St.add(Zt)}),r.add(St),A.push(St),w(Q,16),w(f.getPointAt(0),22),C(j,Q,9)}{let j=b[1],Q=m(j,32,n?0:11);[{h:15,dx:-5.5,glass:!0},{h:22,dx:.5,glass:!1,cap:ce.red},{h:11,dx:6.5,glass:!0,cap:ce.ink}].forEach(Tt=>{let Rt=hu(new Ye(3.6,Tt.h,3.6),3.6,Tt.h,3.6,3),Ht=new pe(Rt,Tt.glass?new De({color:ce.lav2,roughness:.08,metalness:.9,envMapIntensity:1.4}):new De({map:Ca(5+Tt.h),roughness:.75,metalness:.05}));if(Ht.position.set(Q.x+Tt.dx,Tt.h/2,Q.z),r.add(Ht),Tt.cap){let bt=new pe(new Ye(4,.8,4),new De({color:Tt.cap,roughness:.5}));bt.position.set(Q.x+Tt.dx,Tt.h+.4,Q.z),r.add(bt)}}),w(Q,13),C(j,Q)}let S=[];{let j=b[2],Q=[...document.querySelectorAll(".work-list li")],St=m(j,34,n?0:-11,2),Tt=3,{side:mt}=_(j);Q.forEach((Rt,Ht)=>{let bt=Ht%Tt,Zt=Math.floor(Ht/Tt),ne=Ht%2===0,ve=cu({title:Rt.dataset.name||Rt.textContent.trim(),sub:Rt.dataset.year||"",bg:ne?ce.ink:ce.lav,fg:ne?ce.white:ce.ink,accent:ce.red}),te=new pe(new hi(2.4,64),new en({map:ve,transparent:!0,fog:!1}));lc.then(ge=>{let F=ge.projects&&ge.projects[Ht];if(!F)return;let ye=new Image;ye.onload=()=>{te.material.map=cu({title:Rt.dataset.name||Rt.textContent.trim(),sub:Rt.dataset.year||"",bg:ce.ink,fg:ce.white,accent:ce.red,img:ye}),te.material.needsUpdate=!0},ye.src="assets/gen/"+F}),te.position.copy(St).addScaledVector(mt,(bt-1)*5.4).add(new V(0,(.5-Zt)*5.4,0)),te.userData={tags:(Rt.dataset.tags||"").split(" "),baseY:te.position.y,phase:Ht*.9},r.add(te),A.push(te),U.push(te),S.push(te)}),w(St,15),C(j,St)}{let j=b[3],{tan:Q,side:St}=_(j),Tt=m(j,32,n?-5:2);for(let mt=0;mt<4;mt++){let Rt=2.4*(mt+1),Ht=Tt.clone().addScaledVector(St,mt*3.8).addScaledVector(Q,mt*1.5),bt=new pe(new Ye(3.6,Rt,3.6),new De({color:mt===3?ce.red:mt%2?ce.lav2:ce.white,roughness:mt===3?.4:.55,metalness:mt===3?.2:.1}));bt.position.set(Ht.x,Rt/2,Ht.z),r.add(bt);let Zt=new pe(new fi(1.8,1.8),new en({map:E0(mt+1),fog:!1}));Zt.position.set(Ht.x,Rt+1.7,Ht.z),r.add(Zt),A.push(Zt),w(Ht,6),C(j,Ht,6)}}let P=[];{let j=b[4],Q=m(j,32,n?0:-10,2);[{r:4.2,c:ce.ink,o:[0,0,0]},{r:2.6,c:ce.red,o:[3.5,2.5,1]},{r:1.8,c:ce.ink,o:[-3.8,-2.2,-1]},{r:1.2,c:ce.red,o:[-2.5,3.4,.5]},{r:3,c:ce.lav2,o:[2.2,-3.2,-1.5]}].forEach((Tt,mt)=>{let Rt=new pe(new ds(Tt.r,.16,20,110),new De({color:Tt.c,roughness:.25,metalness:.65,envMapIntensity:1.2}));Rt.position.set(Q.x+Tt.o[0],Q.y+Tt.o[1],Q.z+Tt.o[2]),Rt.rotation.set(mt*.7,mt*1.1,0),Rt.userData.speed=.15+mt*.05,r.add(Rt),P.push(Rt)}),w(Q,13),C(j,Q)}{let j=b[b.length-1],Q=m(j,70,0,8),St=new pe(new hi(16,128),new en({color:ce.red,fog:!1}));St.position.copy(Q),r.add(St),A.push(St);let Tt=new pe(new fs(17.5,17.8,128),new en({color:ce.ink,fog:!1,side:mn}));Tt.position.copy(Q),r.add(Tt),A.push(Tt)}for(let j=1;j<b.length;j++){let Q=(b[j-1]+b[j])/2,St=f.getPointAt(Q),Tt=f.getTangentAt(Q),mt=new pe(new ds(5.4,.13,14,110),new De({color:ce.red,roughness:.3,metalness:.5}));mt.position.copy(St),mt.lookAt(St.clone().add(Tt)),r.add(mt)}let N=18,k=[];y.forEach((j,Q)=>{let St=j.querySelector(".panel, .hero-copy");if(!St)return;let Tt=document.createElement("div");Tt.className="world-card"+(j.id==="top"?" world-card-hero":""),Tt.appendChild(St);let mt=new Ta(Tt);l.add(mt),k.push({obj:mt,wrap:Tt,st:b[Q],side:n?"center":j.dataset.side||"left",wide:j.hasAttribute("data-wide"),first:Q===0,last:Q===y.length-1})});let X=()=>Math.tan(En.degToRad(o.fov/2)),Z=j=>j.st+(j.last?0:.005),B=(j,Q,St)=>{let{p:Tt,tan:mt,side:Rt}=_(Z(j)),Ht=N*X(),bt=Q*Ht*o.aspect,Zt=-N*(1.5/20)+St*Ht;return Tt.clone().addScaledVector(mt,N).addScaledVector(Rt,bt).add(new V(0,Zt,0))};k.forEach(j=>C(j.st,B(j,j.side==="left"?-.45:j.side==="right"?.45:0,0),8));let J=()=>{let j=innerHeight/2/X();k.forEach(Q=>{let St=n?innerWidth*.9:Q.wide?Math.min(820,innerWidth*.56):Q.first?Math.min(600,innerWidth*.44):Math.min(500,innerWidth*.38);Q.wrap.style.width=Math.round(St)+"px";let Tt=Q.wrap.offsetHeight||1,mt=n?76:96,Rt=Math.min(1,(innerHeight-mt-32)/Tt),Ht=innerWidth/2,bt=n?innerWidth*.05:Math.max(56,innerWidth*.06),Zt=n?0:100,ne=St*Rt,ve=0;Q.side==="left"&&(ve=-1+(bt+ne/2)/Ht),Q.side==="right"&&(ve=1-(bt+Zt+ne/2)/Ht);let te=Tt*Rt,ge=mt+(innerHeight-mt-te)/2+te/2;n&&Q.first&&(ge=innerHeight-28-te/2);let F=1-2*ge/innerHeight,{p:ye}=_(Z(Q));Q.obj.position.copy(B(Q,ve,F)),Q.obj.lookAt(ye),Q.obj.scale.setScalar(Rt*N/j)})};{let j=Ra(20261017),Q=[Ca(11),Ca(29),Ca(47)],St=[[],[],[]],Tt=[],mt=[],Rt=[],Ht=new Pe,bt=(v,G,Y,it)=>{Ht.position.copy(Y),Ht.rotation.set(0,it||0,0),Ht.scale.set(1,1,1),Ht.updateMatrix(),v.push(G.applyMatrix4(Ht.matrix))},Zt=n?120:250,ne=0,ve=0;for(;ne<Zt&&ve<Zt*24;){ve++;let v=(j()-.5)*210,G=60-j()*320;if(g(v,G,13)||G>10&&Math.abs(v)<26||D.some(_t=>(_t.x-v)**2+(_t.z-G)**2<_t.r*_t.r))continue;let Y=j()<.25?(j()-.5)*.5:0,it=j()<.3,vt=new V(v,0,G),At=St[Math.floor(j()*3)],st=0,lt=4+j()*5,Ct=4+j()*5,Dt=1+Math.floor(j()*3);for(let _t=0;_t<Dt;_t++){let Et=_t===0?5+j()**1.8*20:3+j()*9,Ft=new Ye(lt,Et,Ct);if(Ft.translate(0,st+Et/2,0),it)bt(Tt,Ft,vt,Y);else{hu(Ft,lt,Et,Ct,3),bt(At,Ft,vt,Y);let Nt=new Ye(lt+.25,.4,Ct+.25);Nt.translate(0,st+Et-.2,0),bt(mt,Nt,vt,Y)}st+=Et,lt*=.72+j()*.12,Ct*=.72+j()*.12}if(j()<.7){let _t=Math.max(1,lt*.5),Et=new Ye(_t,1.2,_t);Et.translate(0,st+.6,0),bt(Rt,Et,vt,Y)}if(j()<.45){let _t=new ui(.08,.14,3+j()*4,6);_t.translate(0,st+2.5,0),bt(Rt,_t,vt,Y)}ne++}let te=[];St.forEach((v,G)=>{if(!v.length)return;let Y=new De({map:Q[G],roughness:.78,metalness:.05,envMapIntensity:.5});te[G]=Y,r.add(new pe(ti(v,!1),Y))}),lc.then(v=>{(v.facades||[]).forEach((G,Y)=>{let it=te[Y%3];it&&lu("assets/gen/"+G,vt=>{vt.wrapS=vt.wrapT=ai,vt.anisotropy=8,it.map=vt,it.needsUpdate=!0})})}),Tt.length&&r.add(new pe(ti(Tt,!1),new De({color:ce.lav2,roughness:.07,metalness:.92,envMapIntensity:1.5}))),mt.length&&r.add(new pe(ti(mt,!1),new De({color:ce.ink,roughness:.5,metalness:.25}))),Rt.length&&r.add(new pe(ti(Rt,!1),new De({color:"#9a93b5",roughness:.6,metalness:.35})));let ge=[],F=[],ye=[],re=[],R=Ra(99);for(let v=8;v<292;v+=13){let G=v/300,Y=f.getPointAt(G),it=f.getTangentAt(G),vt=new V().crossVectors(it,new V(0,1,0)).normalize(),At=Math.round(v/13)%2===0?1:-1,st=Y.clone().addScaledVector(vt,8.2*At);st.y=0;let lt=new ui(.13,.18,7,8);lt.translate(0,3.5,0),bt(ge,lt,st);let Ct=new Ye(1.9,.16,.16);Ct.translate(-.95*At,6.9,0),bt(ge,Ct,st);let Dt=new Ye(1.1,.26,.5);Dt.translate(-1.8*At,6.7,0),bt(F,Dt,st);let _t=R()<.6?2:1;for(let Et=0;Et<_t;Et++){let Ft=Y.clone().addScaledVector(vt,-(9.5+R()*3)*At).addScaledVector(it,(Et-.5)*5+R()*2);Ft.y=0;let Nt=1.6+R()*1.1,Wt=new ui(.14,.24,Nt,7);Wt.translate(0,Nt/2,0),bt(ye,Wt,Ft);let z=2+Math.floor(R()*2);for(let K=0;K<z;K++){let ct=1.5-K*.38+R()*.22,Lt=new $s(ct,1.9,9);Lt.translate(0,Nt+K*.9+.8,0),bt(re,Lt,Ft,R()*3)}}}ge.length&&r.add(new pe(ti(ge,!1),new De({color:ce.ink,roughness:.45,metalness:.55}))),F.length&&r.add(new pe(ti(F,!1),new De({color:ce.red,roughness:.35,metalness:.3,emissive:new ie(ce.red),emissiveIntensity:.3}))),ye.length&&r.add(new pe(ti(ye,!1),new De({color:"#6c5b4b",roughness:.9}))),re.length&&r.add(new pe(ti(re,!1),new De({color:ce.leaf,roughness:.85,flatShading:!0})))}{let j=Ra(7),Q=n?320:800,St=new Float32Array(Q*3);for(let mt=0;mt<Q;mt++)St[mt*3]=(j()-.5)*170,St[mt*3+1]=2+j()*44,St[mt*3+2]=45-j()*300;let Tt=new Ue;Tt.setAttribute("position",new we(St,3)),r.add(new qs(Tt,new us({color:ce.ink,size:.18,transparent:!0,opacity:.3})))}let rt=.42,ot=.01,dt=[],et=()=>{dt=y.map(j=>j.offsetTop)},ft=()=>{let j=scrollY+innerHeight*.35;if(!dt.length)return 0;if(j<=dt[0])return b[0];for(let mt=0;mt<dt.length-1;mt++)if(j<dt[mt+1]){let Rt=(j-dt[mt])/Math.max(1,dt[mt+1]-dt[mt]);return Rt<rt?b[mt]+ot*(Rt/rt):En.lerp(b[mt]+ot,b[mt+1],En.smoothstep(Rt,rt,.97))}let Q=dt.length-1,St=document.documentElement.scrollHeight-innerHeight*.65,Tt=En.clamp((j-dt[Q])/Math.max(1,St-dt[Q]),0,1);return En.lerp(b[Q],1,Tt)||b[Q]};et();let ut=ft(),Vt={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",j=>{Vt.x=j.clientX/innerWidth*2-1,Vt.y=j.clientY/innerHeight*2-1},{passive:!0});let Bt=()=>{o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1),a.setSize(innerWidth,innerHeight),J(),et()};addEventListener("resize",Bt),addEventListener("load",()=>{J(),et()}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{J(),et()}),document.addEventListener("toggle",()=>J(),!0);let me={highlight(j){S.forEach(Q=>{Q.material.opacity=!j||Q.userData.tags.includes(j)?1:.18})},progress:()=>ut},jt=new V,se=new V,$=performance.now(),ht=!0;document.addEventListener("visibilitychange",()=>{ht=!document.hidden,ht&&($=performance.now(),requestAnimationFrame(Ut))});function Ut(j){if(!ht)return;let Q=Math.min(.05,(j-$)/1e3);$=j;let St=ft();ut=e?St:ut+(St-ut)*(1-Math.pow(.0025,Q)),Vt.sx+=(Vt.x-Vt.sx)*.05,Vt.sy+=(Vt.y-Vt.sy)*.05;let{p:Tt,tan:mt,side:Rt}=_(ut);se.copy(Tt).addScaledVector(Rt,Vt.sx*.9).add(new V(0,-Vt.sy*.6,0)),o.position.copy(se),jt.copy(Tt).addScaledVector(mt,20).add(new V(0,-1.5,0)),o.lookAt(jt);let Ht=j/1e3;e||(U.forEach(bt=>{bt.position.y=bt.userData.baseY+Math.sin(Ht*.9+bt.userData.phase)*.35}),P.forEach(bt=>{bt.rotation.x+=Q*bt.userData.speed,bt.rotation.y+=Q*bt.userData.speed*.7})),A.forEach(bt=>bt.lookAt(o.position)),k.forEach(bt=>{let Zt=ut-bt.st,ne=1;Zt<0&&!bt.first&&(ne=En.smoothstep(Zt,-.085,-.02)),Zt>0&&!bt.last&&(ne=1-En.smoothstep(Zt,ot+.004,ot+.03)),ne!==bt.o&&(bt.o=ne,bt.wrap.style.opacity=ne.toFixed(3),bt.wrap.style.visibility=ne<.02?"hidden":"visible",bt.wrap.style.pointerEvents=ne>.6?"auto":"none")}),s.render(r,o),a.render(l,o),requestAnimationFrame(Ut)}return t.classList.add("has-world","world-text"),a.render(l,o),J(),et(),requestAnimationFrame(Ut),me}var uu=!1,A0=()=>{uu||(uu=!0,window.jpWorld=T0(),window.dispatchEvent(new CustomEvent("jpworld:ready")))},C0=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();Promise.race([C0,new Promise(i=>setTimeout(i,1500))]).then(A0);export{T0 as startWorld};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
