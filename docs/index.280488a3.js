let e,t,n,r,i,s,a;var o,l,u,h,c,f,d,p,g,m,y,v,w,b,E,T,_,I,S,C,x,A,D,k=globalThis,N={},R={},L=k.parcelRequire94c2;null==L&&((L=function(e){if(e in N)return N[e].exports;if(e in R){var t=R[e];delete R[e];var n={id:e,exports:{}};return N[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){R[e]=t},k.parcelRequire94c2=L),(0,L.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),L("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7Gx3W","index.280488a3.js","LVq70","service-worker.48c1c725.js"]'));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O={},M=O={};function P(){throw Error("setTimeout has not been defined")}function U(){throw Error("clearTimeout has not been defined")}function F(e){if(l===setTimeout)return setTimeout(e,0);if((l===P||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:P}catch(e){l=P}try{u="function"==typeof clearTimeout?clearTimeout:U}catch(e){u=U}}();var V=[],B=!1,j=-1;function $(){B&&h&&(B=!1,h.length?V=h.concat(V):j=-1,V.length&&q())}function q(){if(!B){var e=F($);B=!0;for(var t=V.length;t;){for(h=V,V=[];++j<t;)h&&h[j].run();j=-1,t=V.length}h=null,B=!1,function(e){if(u===clearTimeout)return clearTimeout(e);if((u===U||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}(e)}}function z(e,t){this.fun=e,this.array=t}function K(){}M.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];V.push(new z(e,t)),1!==V.length||B||F(q)},z.prototype.run=function(){this.fun.apply(null,this.array)},M.title="browser",M.browser=!0,M.env={},M.argv=[],M.version="",M.versions={},M.on=K,M.addListener=K,M.once=K,M.off=K,M.removeListener=K,M.removeAllListeners=K,M.emit=K,M.prependListener=K,M.prependOnceListener=K,M.listeners=function(e){return[]},M.binding=function(e){throw Error("process.binding is not supported")},M.cwd=function(){return"/"},M.chdir=function(e){throw Error("process.chdir is not supported")},M.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},G=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],a=((7&i)<<18|(63&s)<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},Q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),r.push(n[u],n[h],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(H(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):G(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new W;let l=i<<2|s>>4;if(r.push(l),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==o){let e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class W extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X=function(e){let t=H(e);return Q.encodeByteArray(t,!0)},Y=function(e){return X(e).replace(/\./g,"")},J=function(e){try{return Q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Z=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==k)return k;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ee=()=>{if(void 0===O||void 0===O.env)return;let e=void 0;if(e)return JSON.parse(e)},et=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&J(e[1]);return t&&JSON.parse(t)},en=()=>{try{return Z()||ee()||et()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},er=e=>{var t,n;return null===(n=null===(t=en())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ei=e=>{let t=er(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},es=()=>{var e;return null===(e=en())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function eo(){try{return"object"==typeof indexedDB}catch(e){return!1}}function el(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class eu extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,eu.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eh.prototype.create)}}class eh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?(n=a,r=i,n.replace(ec,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new eu(s,l,i)}}const ec=/\{\$([^}]+)}/g;function ef(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(ed(n)&&ed(s)){if(!ef(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ed(e){return null!==e&&"object"==typeof e}function ep(e,t=1e3,n=2){let r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e){return e&&e._delegate?e._delegate:e}class em{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ea;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ey})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ey){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ey){return this.instances.has(e)}getOptions(e=ey){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===ey?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=ey){return this.component?this.component.multipleInstances?e:ey:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ev(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=[];(o=c||(c={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const eE={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},eT=c.INFO,e_={[c.DEBUG]:"log",[c.VERBOSE]:"log",[c.INFO]:"info",[c.WARN]:"warn",[c.ERROR]:"error"},eI=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=e_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eS{constructor(e){this.name=e,this._logLevel=eT,this._logHandler=eI,this._userLogHandler=null,eb.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,c.DEBUG,...e),this._logHandler(this,c.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c.VERBOSE,...e),this._logHandler(this,c.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c.INFO,...e),this._logHandler(this,c.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c.WARN,...e),this._logHandler(this,c.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c.ERROR,...e),this._logHandler(this,c.ERROR,...e)}}const eC=(e,t)=>t.some(t=>e instanceof t),ex=new WeakMap,eA=new WeakMap,eD=new WeakMap,ek=new WeakMap,eN=new WeakMap;let eR={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eA.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eD.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eL(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eL(n){if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eL(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ex.set(t,e)}).catch(()=>{}),eN.set(t,e),t}(n);if(ek.has(n))return ek.get(n);let r=function(n){if("function"==typeof n)return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eO(this),e),eL(ex.get(this))}:function(...e){return eL(n.apply(eO(this),e))}:function(e,...t){let r=n.call(eO(this),e,...t);return eD.set(r,e.sort?e.sort():[e]),eL(r)};return(n instanceof IDBTransaction&&function(e){if(eA.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eA.set(e,t)}(n),eC(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eR):n}(n);return r!==n&&(ek.set(n,r),eN.set(r,n)),r}const eO=e=>eN.get(e);function eM(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,t),o=eL(a);return r&&a.addEventListener("upgradeneeded",e=>{r(eL(a.result),e.oldVersion,e.newVersion,eL(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const eP=["get","getKey","getAll","getAllKeys","count"],eU=["put","add","delete","clear"],eF=new Map;function eV(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eF.get(t))return eF.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eU.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eP.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return eF.set(t,s),s}eR={...a=eR,get:(e,t,n)=>eV(e,t)||a.get(e,t,n),has:(e,t)=>!!eV(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ej="@firebase/app",e$="0.11.1",eq=new eS("@firebase/app"),ez="[DEFAULT]",eK={[ej]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eH=new Map,eG=new Map,eQ=new Map;function eW(e,t){try{e.container.addComponent(t)}catch(n){eq.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eX(e){let t=e.name;if(eQ.has(t))return eq.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eQ.set(t,e),eH.values()))eW(n,e);for(let t of eG.values())eW(t,e);return!0}function eY(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const eJ=new eh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new em("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eJ.create("app-deleted",{appName:this._name})}}function e0(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:ez,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw eJ.create("bad-app-name",{appName:String(i)});if(n||(n=es()),!n)throw eJ.create("no-options");let s=eH.get(i);if(s){if(ef(n,s.options)&&ef(r,s.config))return s;throw eJ.create("duplicate-app",{appName:i})}let a=new ew(i);for(let e of eQ.values())a.addComponent(e);let o=new eZ(n,r,a);return eH.set(i,o),o}function e1(e,t,n){var r;let i=null!==(r=eK[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eq.warn(e.join(" "));return}eX(new em(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const e2="firebase-heartbeat-store";let e6=null;function e3(){return e6||(e6=eM("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e2)}catch(e){console.warn(e)}}}).catch(e=>{throw eJ.create("idb-open",{originalErrorMessage:e.message})})),e6}async function e5(e){try{let t=(await e3()).transaction(e2),n=await t.objectStore(e2).get(e4(e));return await t.done,n}catch(e){if(e instanceof eu)eq.warn(e.message);else{let t=eJ.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}async function e8(e,t){try{let n=(await e3()).transaction(e2,"readwrite"),r=n.objectStore(e2);await r.put(t,e4(e)),await n.done}catch(e){if(e instanceof eu)eq.warn(e.message);else{let t=eJ.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}function e4(e){return`${e.name}!${e.options.appId}`}class e7{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new te(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e9();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){eq.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=e9(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),tt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eq.warn(e),""}}}function e9(){return new Date().toISOString().substring(0,10)}class te{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!eo()&&el().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await e5(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return e8(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return e8(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tt(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}eX(new em("platform-logger",e=>new eB(e),"PRIVATE")),eX(new em("heartbeat",e=>new e7(e),"PRIVATE")),e1(ej,e$,""),e1(ej,e$,"esm2017"),e1("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e1("firebase","11.3.1","app");const tn="@firebase/installations",tr="0.6.12",ti=`w:${tr}`,ts="FIS_v2",ta=new eh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function to(e){return e instanceof eu&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function tu(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function th(e,t){let n=(await t.json()).error;return ta.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tc({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function tf(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=tl(e),i=tc(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({fid:n,authVersion:ts,appId:e.appId,sdkVersion:ti})},o=await tf(()=>fetch(r,a));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:tu(e.authToken)}}throw await th("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function tv(e,t){let n=tm(e);tw(n,t),function(e,t){let n=(!tb&&"BroadcastChannel"in self&&((tb=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{tw(e.data.key,e.data.fid)}),tb);n&&n.postMessage({key:e,fid:t}),0===ty.size&&tb&&(tb.close(),tb=null)}(n,t)}function tw(e,t){let n=ty.get(e);if(n)for(let e of n)e(t)}let tb=null;const tE="firebase-installations-store";let tT=null;function t_(){return tT||(tT=eM("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tE)}})),tT}async function tI(e,t){let n=tm(e),r=(await t_()).transaction(tE,"readwrite"),i=r.objectStore(tE),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||tv(e,t.fid),t}async function tS(e){let t=tm(e),n=(await t_()).transaction(tE,"readwrite");await n.objectStore(tE).delete(t),await n.done}async function tC(e,t){let n=tm(e),r=(await t_()).transaction(tE,"readwrite"),i=r.objectStore(tE),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&tv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(e){let t;let n=await tC(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(ta.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=tA(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tD(e)}:{installationEntry:t}}(e,tN(n||{fid:function(){try{var e;let t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;let n=(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22));return tg.test(n)?n:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tA(e,t){try{let n=await td(e,t);return tI(e.appConfig,n)}catch(n){throw to(n)&&409===n.customData.serverCode?await tS(e.appConfig):await tI(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function tD(e){let t=await tk(e.appConfig);for(;1===t.registrationStatus;)await tp(100),t=await tk(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await tx(e);return n||t}return t}function tk(e){return tC(e,e=>{if(!e)throw ta.create("installation-not-found");return tN(e)})}function tN(e){var t;return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${tl(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){var n;let r=tc(e);return r.append("Authorization",(n=t,`${ts} ${n}`)),r}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:ti,appId:e.appId}})},o=await tf(()=>fetch(r,a));if(o.ok)return tu(await o.json());throw await th("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t=!1){let n;let r=await tC(e.appConfig,r=>{var i;if(!tU(r))throw ta.create("not-registered");let s=r.authToken;if(!t&&2===(i=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===s.requestStatus)return n=tO(e,t),r;{if(!navigator.onLine)throw ta.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=tP(e,t),t}});return n?await n:r.authToken}async function tO(e,t){let n=await tM(e.appConfig);for(;1===n.authToken.requestStatus;)await tp(100),n=await tM(e.appConfig);let r=n.authToken;return 0===r.requestStatus?tL(e,t):r}function tM(e){return tC(e,e=>{var t;if(!tU(e))throw ta.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tP(e,t){try{let n=await tR(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tI(e.appConfig,r),n}catch(n){if(to(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await tS(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tI(e.appConfig,n)}throw n}}function tU(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(e){let{installationEntry:t,registrationPromise:n}=await tx(e);return n?n.catch(console.error):tL(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tV(e,t=!1){return await tB(e),(await tL(e,t)).token}async function tB(e){let{registrationPromise:t}=await tx(e);t&&await t}function tj(e){return ta.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$="installations";eX(new em(t$,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tj("App Configuration");if(!e.name)throw tj("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tj(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eY(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),eX(new em("installations-internal",e=>{let t=eY(e.getProvider("app").getImmediate(),t$).getImmediate();return{getId:()=>tF(t),getToken:e=>tV(t,e)}},"PRIVATE")),e1(tn,tr),e1(tn,tr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tq="analytics",tz="https://www.googletagmanager.com/gtag/js",tK=new eS("@firebase/analytics"),tH=new eh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tG(e){if(!e.startsWith(tz)){let t=tH.create("invalid-gtag-resource",{gtagURL:e});return tK.warn(t.message),""}return e}function tQ(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function tW(e,t,n,r,i,s){let a=r[i];try{if(a)await t[a];else{let e=(await tQ(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){tK.error(e)}e("config",i,s)}async function tX(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await tQ(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)s.push(i);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){tK.error(e)}}const tY=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function tJ(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{let n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw tH.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}async function tZ(e,t=tY,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw tH.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw tH.create("no-api-key")}let a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new t1;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),t0({appId:r,apiKey:i,measurementId:s},a,o,t)}async function t0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=tY){var s,a,o;let{appId:l,measurementId:u}=e;try{await (a=r,o=t,new Promise((e,t)=>{let n=setTimeout(e,Math.max(o-Date.now(),0));a.addEventListener(()=>{clearTimeout(n),t(tH.create("fetch-throttle",{throttleEndTimeMillis:o}))})}))}catch(e){if(u)return tK.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:l,measurementId:u};throw e}try{let t=await tJ(e);return i.deleteThrottleMetadata(l),t}catch(o){if(!function(e){if(!(e instanceof eu)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(i.deleteThrottleMetadata(l),u)return tK.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null==o?void 0:o.message}]`),{appId:l,measurementId:u};throw o}let t=503===Number(null===(s=null==o?void 0:o.customData)||void 0===s?void 0:s.httpStatus)?ep(n,i.intervalMillis,30):ep(n,i.intervalMillis),a={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(l,a),tK.debug(`Calling attemptFetch again in ${t} millis`),t0(e,a,r,i)}}class t1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function t2(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t6(){if(!eo())return tK.warn(tH.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await el()}catch(e){return tK.warn(tH.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function t3(e,t,i,s,a,o,l){var u;let h=tZ(e);h.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tK.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tK.error(e)),t.push(h);let c=t6().then(e=>e?s.getId():void 0),[f,d]=await Promise.all([h,c]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(tz)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var n,r;let i;let s=(n="firebase-js-sdk-policy",r={createScriptURL:tG},window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,r)),i),a=document.createElement("script"),o=`${tz}?l=${e}&id=${t}`;a.src=s?null==s?void 0:s.createScriptURL(o):o,a.async=!0,document.head.appendChild(a)}(o,f.measurementId),r&&(a("consent","default",r),r=void 0),a("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=d&&(p.firebase_id=d),a("config",f.measurementId,p),n&&(a("set",n),n=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.app=e}_delete(){return delete t8[this.app.options.appId],Promise.resolve()}}let t8={},t4=[];const t7={};let t9="dataLayer",ne=!1;const nt="@firebase/analytics",nn="0.10.11";eX(new em(tq,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=tH.create("invalid-analytics-context",{errorInfo:t});tK.warn(n.message)}}();let r=e.options.appId;if(!r)throw tH.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tK.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tH.create("no-api-key")}if(null!=t8[r])throw tH.create("already-exists",{id:r});if(!ne){var a,o;let e,t;e=[],Array.isArray(window[t9])?e=window[t9]:window[t9]=e;let{wrappedGtag:n,gtagCore:r}=(a="gtag",t=function(...e){window[t9].push(arguments)},window[a]&&"function"==typeof window[a]&&(t=window[a]),window[a]=(o=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await tX(o,t8,t4,e,n)}else if("config"===e){let[e,n]=t;await tW(o,t8,t4,t7,e,n)}else if("consent"===e){let[e,n]=t;o("consent",e,n)}else if("get"===e){let[e,n,r]=t;o("get",e,n,r)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){tK.error(e)}}),{gtagCore:t,wrappedGtag:window[a]});s=n,i=r,ne=!0}return t8[r]=t3(e,t4,t7,t,i,t9,n),new t5(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),eX(new em("analytics-internal",function(e){try{let t=e.getProvider(tq).getImmediate();return{logEvent:(e,n,r)=>{var i;return i=t,void(i=eg(i),t2(s,t8[i.app.options.appId],e,n,r).catch(e=>tK.error(e)))}}}catch(e){throw tH.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e1(nt,nn),e1(nt,nn,"esm2017");var nr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==k?k:"undefined"!=typeof self?self:{},ni={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+0xd76aa478&0xffffffff;a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[1]+0xe8c7b756&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[2]+0x242070db&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[3]+0xc1bdceee&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[4]+0xf57c0faf&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[5]+0x4787c62a&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[6]+0xa8304613&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[7]+0xfd469501&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[8]+0x698098d8&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[9]+0x8b44f7af&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[10]+0xffff5bb1&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[11]+0x895cd7be&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[12]+0x6b901122&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[13]+0xfd987193&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[14]+0xa679438e&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[15]+0x49b40821&0xffffffff,n=i+(a<<22&0xffffffff|a>>>10),a=t+(i^s&(n^i))+r[1]+0xf61e2562&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[6]+0xc040b340&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[11]+0x265e5a51&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[0]+0xe9b6c7aa&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[5]+0xd62f105d&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[10]+0x2441453&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[15]+0xd8a1e681&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[4]+0xe7d3fbc8&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[9]+0x21e1cde6&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[14]+0xc33707d6&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[3]+0xf4d50d87&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[8]+0x455a14ed&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[13]+0xa9e3e905&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[2]+0xfcefa3f8&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[7]+0x676f02d9&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[12]+0x8d2a4c8a&0xffffffff,a=t+((n=i+(a<<20&0xffffffff|a>>>12))^i^s)+r[5]+0xfffa3942&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[8]+0x8771f681&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[11]+0x6d9d6122&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[14]+0xfde5380c&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[1]+0xa4beea44&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[4]+0x4bdecfa9&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[7]+0xf6bb4b60&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[10]+0xbebfbc70&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[13]+0x289b7ec6&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[0]+0xeaa127fa&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[3]+0xd4ef3085&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[6]+0x4881d05&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[9]+0xd9d4d039&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[12]+0xe6db99e5&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[15]+0x1fa27cf8&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[2]+0xc4ac5665&0xffffffff,n=i+(a<<23&0xffffffff|a>>>9),a=t+(i^(n|~s))+r[0]+0xf4292244&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[7]+0x432aff97&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[14]+0xab9423a7&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[5]+0xfc93a039&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[12]+0x655b59c3&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[3]+0x8f0ccc92&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[10]+0xffeff47d&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[1]+0x85845dd1&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[8]+0x6fa87e4f&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[15]+0xfe2ce6e0&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[6]+0xa3014314&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[13]+0x4e0811a1&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[4]+0xf7537e82&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[11]+0xbd3af235&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[2]+0x2ad7d2bb&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(a<<21&0xffffffff|a>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,a=0;a<n;){if(0==s)for(;a<=r;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<n;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,i),s=0;break}}else for(;a<n;)if(i[s++]=e[a++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var r,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new n([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return p(a(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=0x100000000;return new n(t,0)}var o=s(0),l=s(1),u=s(0x1000000);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function c(e){return -1==e.h}function p(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(l)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(h(t))throw Error("division by zero");if(h(e))return new y(o,o);if(c(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(c(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(c(e)||c(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=w(n),r=w(r);var i=b(n,1),s=b(r,1);for(r=b(r,2),n=b(n,2);!h(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=b(r,1),n=b(n,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=o;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);c(u)||0<u.l(e);)n-=r,u=(s=a(n)).j(t);h(s)&&(s=l),i=i.add(s),e=g(e,u)}return new y(i,e)}function w(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function b(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+r)>>>t|e.i(a+r+1)<<32-t:e.i(a+r);return new n(s,e.h)}(r=n.prototype).m=function(){if(c(this))return-p(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:0x100000000+r)*t,t*=0x100000000}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(c(this))return"-"+p(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=v(n,t).g,s=((0<(n=g(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.l=function(e){return c(e=g(this,e))?-1:+!h(e)},r.abs=function(){return c(this)?p(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,r[s]=o<<16|a}return new n(r,-0x80000000&r[r.length-1]?-1:0)},r.j=function(e){if(h(this)||h(e))return o;if(c(this))return c(e)?p(this).j(p(e)):p(p(this).j(e));if(c(e))return p(this.j(p(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),d=e.i(s)>>>16,g=65535&e.i(s);r[2*i+2*s]+=f*g,m(r,2*i+2*s),r[2*i+2*s+1]+=l*g,m(r,2*i+2*s+1),r[2*i+2*s+1]+=f*d,m(r,2*i+2*s+1),r[2*i+2*s+2]+=l*d,m(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},r.A=function(e){return v(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,d=ni.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=a,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return p(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},f=ni.Integer=n}).apply(void 0!==nr?nr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ns="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==k?k:"undefined"!=typeof self?self:{},na={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ns&&ns];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in n))break e;n=n[a]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},a=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e,t,n){return e.call.apply(e.bind,arguments)}function h(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:h).apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(o(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function I(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var x=-1!=S().indexOf("Gecko")&&(-1==S().toLowerCase().indexOf("webkit")||-1!=S().indexOf("Edge"))&&-1==S().indexOf("Trident")&&-1==S().indexOf("MSIE")&&-1==S().indexOf("Edge");function A(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function D(e){let t={};for(let n in e)t[n]=e[n];return t}let k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<k.length;t++)n=k[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}var R=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let n=R.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},U=()=>{let e=a.Promise.resolve(void 0);O=()=>{e.then(F)}};var F=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){a.setTimeout(()=>{throw e},0)}(e)}R.j(t),100>R.h&&(R.h++,t.next=R.g,R.g=t)}M=!1};function V(){this.s=this.s,this.C=this.C}function B(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(B.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}d($,B);var q={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),K=0;function H(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++K,this.da=this.fa=!1}function G(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(G(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function X(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=X(e,t,r,i);return -1<a?(t=e[a],n||(t.fa=!1)):((t=new H(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=l(i)?!!i.capture:!!i,o=er(e);if(o||(e[Y]=o=new Q(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return en.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)j||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])W(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(et(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=er(t))?(W(n,e),0==n.h&&(n.src=null,t[Y]=null)):G(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function en(e,t){if(e.da)e=!0;else{t=new $(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ee(e),e=n.call(r,t)}return e}function er(e){return(e=e[Y])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function ea(){V.call(this),this.i=new Q(this),this.M=this,this.F=null}function eo(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new B(t,e);else if(t instanceof B)t.target=t.target||e;else{var i=t;N(t=new B(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=el(a,r,!0,t)&&i}if(i=el(a=t.g=e,r,!0,t)&&i,i=el(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=el(a=t.g=n[s],r,!1,t)&&i}function el(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&W(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function eu(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:a.setTimeout(e,t||0)}d(ea,V),ea.prototype[z]=!0,ea.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=l(i)?!!i.capture:!!i,r=es(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=X(a=t.g[n],r,i,s))&&(G(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=er(t))&&(n=t.g[n.toString()],t=-1,n&&(t=X(n,r,i,s)),(r=-1<t?n[t]:null)&&ee(r))}(this,e,t,n,r)},ea.prototype.N=function(){if(ea.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)G(n[r]);delete t.g[e],t.h--}}this.F=null},ea.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ea.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class eh extends V{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eu(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){V.call(this),this.h=e,this.g={}}d(ec,V);var ef=[];function ed(e){A(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=a.JSON.stringify,eg=a.JSON.parse,em=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){B.call(this,"d")}function eT(){B.call(this,"c")}d(eE,B),d(eT,B);var e_={},eI=null;function eS(){return eI=eI||new ea}function eC(e){B.call(this,e_.La,e)}function ex(e){let t=eS();eo(t,new eC(t))}function eA(e,t){B.call(this,e_.STAT_EVENT,e),this.stat=t}function eD(e){let t=eS();eo(t,new eA(t,e))}function ek(e,t){B.call(this,e_.Ma,e),this.size=t}function eN(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function eR(){this.g=!0}function eL(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ep(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}e_.La="serverreachability",d(eC,B),e_.STAT_EVENT="statevent",d(eA,B),e_.Ma="timingevent",d(ek,B),eR.prototype.xa=function(){this.g=!1},eR.prototype.info=function(){};var eO={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eF}function eF(){this.i=null,this.g="",this.h=!1}d(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eV={},eB={};function ej(e,t,n){e.L=1,e.v=tn(e4(t)),e.m=n,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),ez(e),e.A=e4(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),tg(n.i,"t",r),e.C=0,n=e.j.J,e.h=new eF,e.g=t1(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eh(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var a=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=es(r),t&&t[z]?t.L(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=es(r),t&&t[z]?t.K(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eq(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eK(e,e.I)}function eK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eN(c(e.ba,e),t)}function eH(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function eG(e){0==e.j.G||e.J||tX(e.j,e)}function eQ(e){eH(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e0(n.h,e))){if(!e.K&&e0(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tW(n),tV(n);else break e}tH(n),eD(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=eN(c(n.Za,n),6e3));if(1>=eZ(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else tJ(n,11)}else if((e.K||n.g==e)&&tW(n),!I(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.K=o[1],n.ia=o[2];let t=o[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=o[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,tt(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t0(r,r.J?r.ia:null,r.W),e.K){e2(r.h,e);var a=r.L;a&&(e.I=a),e.B&&(eH(e),ez(e)),r.g=e}else tK(r);0<n.i.length&&tj(n)}else"stop"!=o[0]&&"close"!=o[0]||tJ(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?tJ(n,7):tF(n):"noop"!=o[0]&&n.l&&n.l.ta(o),n.v=0)}}ex(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tO(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tO(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tM(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?ex(3):ex(2)),eH(this);var n=this.g.Z();this.X=n;t:if(eq(this)){var r=tM(this.g);e="";var i=r.length,s=4==tO(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eG(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var h=l;break t}}h=null}if(n=h)eL(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,n);else{this.o=!1,this.s=3,eD(12),eQ(this),eG(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eB:isNaN(n=Number(t.substring(n,r)))?eV:(r+=1)+n>t.length?eB:(t=t.slice(r,r+n),e.C=r+n,t)}(this,o))==eB){4==f&&(this.s=4,eD(14),n=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eV){this.s=4,eD(15),eL(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}else eL(this.i,this.l,e,null),eW(this,e);if(eq(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,eD(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tG(c),c.M=!0,eD(11))}}else eL(this.i,this.l,o,"[Invalid Chunked Response]"),eQ(this),eG(this)}else eL(this.i,this.l,o,null),eW(this,o);4==f&&eQ(this),this.o&&!this.J&&(4==f?tX(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tO(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(I(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eQ(this),eG(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eD(17)),eQ(this),this.s=2,eG(this)):eK(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eY(e){this.l=e||10,e=a.PerformanceNavigationTiming?0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return T(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}eY.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,n=new tc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),te(this,n),this.m=e.m}else e&&(t=String(e).match(e5))?(this.h=!1,e7(this,t[1]||"",!0),this.o=tr(t[2]||""),this.g=tr(t[3]||"",!0),e9(this,t[4]),this.l=tr(t[5]||"",!0),te(this,t[6]||"",!0),this.m=tr(t[7]||"")):(this.h=!1,this.i=new tc(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,n){e.j=n?tr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,n){var r,i;t instanceof tc?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tf(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(td(this,t),tg(this,n,e))},r)),r.j=i):(n||(t=ti(t,tu)),e.i=new tc(t,e.h))}function tt(e,t,n){e.i.set(t,n)}function tn(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function tr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ti(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ts),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ts(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ti(t,ta,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ti(t,ta,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ti(n,"/"==n.charAt(0)?tl:to,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ti(n,th)),e.join("")};var ta=/[#\/\?@]/g,to=/[#\?:]/g,tl=/[#\?]/g,tu=/[#\?@]/g,th=/#/g;function tc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tf(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function td(e,t){tf(e),t=tm(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tp(e,t){return tf(e),t=tm(e,t),e.g.has(t)}function tg(e,t,n){td(e,t),0<n.length&&(e.i=null,e.g.set(tm(e,t),T(n)),e.h+=n.length)}function tm(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ty(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tv(){this.g=new em}function tw(e){this.l=e.Ub||null,this.j=e.eb||!1}function tb(e,t){ea.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tE(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,t_(e)}function t_(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tI(e){let t="";return A(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tS(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tI(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tt(e,t,n))}function tC(e){ea.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tc.prototype).add=function(e,t){tf(this),this.i=null,e=tm(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tf(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tf(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tf(this);let t=[];if("string"==typeof e)tp(this,e)&&(t=t.concat(this.g.get(tm(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tf(this),this.i=null,tp(this,e=tm(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},d(tw,ey),tw.prototype.g=function(){return new tb(this.l,this.j)},tw.prototype.i=(e={},function(){return e}),d(tb,ea),(n=tb.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,t_(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,t_(this)),this.g&&(this.readyState=3,t_(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tE(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):t_(this),3==this.readyState&&tE(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},n.Qa=function(e){this.g&&(this.response=e,tT(this))},n.ga=function(){this.g&&tT(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(tC,ea);var tx=/^https?$/i,tA=["POST","PUT"];function tD(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tk(e),tR(e)}function tk(e){e.A||(e.A=!0,eo(e,"complete"),eo(e,"error"))}function tN(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tO(e)||2!=e.Z())){if(e.u&&4==tO(e))eu(e.Ea,0,e);else if(eo(e,"readystatechange"),4==tO(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===s){var i=String(e.D).match(e5)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),n=!tx.test(i?i.toLowerCase():"")}t=n}if(t)eo(e,"complete"),eo(e,"success");else{e.m=6;try{var o=2<tO(e)?e.g.statusText:""}catch(e){o=""}e.l=o+" ["+e.Z()+"]",tk(e)}}finally{tR(e)}}}}function tR(e,t){if(e.g){tL(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eo(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tL(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function tO(e){return e.g?e.g.readyState:0}function tM(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tP(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tU(e){this.Aa=0,this.i=[],this.j=new eR,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tP("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tP("baseRetryDelayMs",5e3,e),this.cb=tP("retryDelaySeedMs",1e4,e),this.Wa=tP("forwardChannelMaxRetries",2,e),this.wa=tP("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eY(e&&e.concurrentRequestLimit),this.Da=new tv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tF(e){if(tB(e),3==e.G){var t=e.U++,n=e4(e.I);if(tt(n,"SID",e.K),tt(n,"RID",t),tt(n,"TYPE","terminate"),tq(e,n),(t=new eU(e,e.j,t)).L=2,t.v=tn(e4(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=t1(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}tZ(e)}function tV(e){e.g&&(tG(e),e.g.cancel(),e.g=null)}function tB(e){tV(e),e.u&&(a.clearTimeout(e.u),e.u=null),tW(e),e.h.cancel(),e.s&&("number"==typeof e.s&&a.clearTimeout(e.s),e.s=null)}function tj(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||U(),M||(O(),M=!0),P.add(t,e),e.B=0}}function t$(e,t){var n;n=t?t.l:e.U++;let r=e4(e.I);tt(r,"SID",e.K),tt(r,"RID",n),tt(r,"AID",e.T),tq(e,r),e.m&&e.o&&tS(r,e.m,e.o),n=new eU(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tz(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,n),ej(n,r,t)}function tq(e,t){e.H&&A(e.H,function(e,n){tt(t,n,e)}),e.l&&e3({},function(e,n){tt(t,n,e)})}function tz(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e3(e,function(e,n){let i=e;l(e)&&(i=ep(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tK(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||U(),M||(O(),M=!0),P.add(t,e),e.v=0}}function tH(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eN(c(e.Fa,e),tY(e,e.v)),e.v++,!0)}function tG(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function tQ(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tq(e,t),e.m&&e.o&&tS(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=tn(e4(t)),n.m=null,n.P=!0,e$(n,e)}function tW(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function tX(e,t){var n=null;if(e.g==t){tW(e),tG(e),e.g=null;var r=2}else{if(!e0(e.h,t))return;n=t.D,e2(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eo(r=eS(),new ek(r,n)),tj(e)}else tK(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eN(c(e.Ga,e,i),tY(e,e.B)),e.B++,!0)))||2==r&&tH(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:tJ(e,5);break;case 4:tJ(e,10);break;case 3:tJ(e,6);break;default:tJ(e,2)}}}function tY(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function tJ(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;let t=!r;r=new e8(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||e7(r,"https"),tn(r),t?function(e,t){let n=new eR;if(a.Image){let r=new Image;r.onload=f(ty,n,"TestLoadImage: loaded",!0,t,r),r.onerror=f(ty,n,"TestLoadImage: error",!1,t,r),r.onabort=f(ty,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=f(ty,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eR,r=new AbortController,i=setTimeout(()=>{r.abort(),ty(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?ty(n,"TestPingServer: ok",!0,t):ty(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),ty(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eD(2);e.G=0,e.l&&e.l.sa(t),tZ(e),tB(e)}function tZ(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(_(e.ka,t),_(e.ka,e.i),e.h.i.length=0,T(e.i),e.i.length=0),e.l.ra()}}function t0(e,t,n){var r=n instanceof e8?e4(n):new e8(n);if(""!=r.g)t&&(r.g=t+"."+r.g),e9(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);r&&e7(s,r),t&&(s.g=t),i&&e9(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&tt(r,n,t),tt(r,"VER",e.la),tq(e,r),r}function t1(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tC(e.Ca&&!e.pa?new tw({eb:n}):e.pa)).Ha(e.J),t}function t2(){}function t6(){}function t3(e,t){ea.call(this),this.g=new tU(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!I(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t4(this)}function t5(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t8(){eT.call(this),this.status=1}function t4(e){this.g=e}(n=tC.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tD(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tA,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tL(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tD(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eo(this,"complete"),eo(this,"abort"),tR(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tR(this,!0)),tC.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tN(this):this.bb())},n.bb=function(){tN(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tO(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tU.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eD(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t0(this,null,this.W),tj(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?N(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tz(this,i,t),tt(n=e4(this.I),"RID",e),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),tq(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tI(s)))+"&"+t:this.m&&tS(n,this.m,s)),e1(this.h,i),this.Ua&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",t),tt(n,"SID","null"),i.T=!0,ej(i,n,null)):ej(i,n,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||eJ(this.h)||t$(this))}},n.Fa=function(){if(this.u=null,tQ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eN(c(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tV(this),tQ(this))},n.Za=function(){null!=this.C&&(this.C=null,tV(this),tH(this),eD(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t2.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t6.prototype.g=function(e,t){return new t3(e,t)},d(t3,ea),t3.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t3.prototype.close=function(){tF(this.g)},t3.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ep(e),e=n);t.i.push(new eX(t.Ya++,e)),3==t.G&&tj(t)},t3.prototype.N=function(){this.g.l=null,delete this.j,tF(this.g),delete this.g,t3.aa.N.call(this)},d(t5,eE),d(t8,eT),d(t4,t2),t4.prototype.ua=function(){eo(this.g,"a")},t4.prototype.ta=function(e){eo(this.g,new t5(e))},t4.prototype.sa=function(e){eo(this.g,new t8)},t4.prototype.ra=function(){eo(this.g,"b")},t6.prototype.createWebChannel=t6.prototype.g,t3.prototype.send=t3.prototype.o,t3.prototype.open=t3.prototype.m,t3.prototype.close=t3.prototype.close,E=na.createWebChannelTransport=function(){return new t6},b=na.getStatEventTarget=function(){return eS()},w=na.Event=e_,v=na.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eO.NO_ERROR=0,eO.TIMEOUT=8,eO.HTTP_ERROR=6,y=na.ErrorCode=eO,eM.COMPLETE="complete",m=na.EventType=eM,ew.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",ea.prototype.listen=ea.prototype.K,g=na.WebChannel=ew,na.FetchXmlHttpFactory=tw,tC.prototype.listenOnce=tC.prototype.L,tC.prototype.getLastError=tC.prototype.Ka,tC.prototype.getLastErrorCode=tC.prototype.Ba,tC.prototype.getStatus=tC.prototype.Z,tC.prototype.getResponseJson=tC.prototype.Oa,tC.prototype.getResponseText=tC.prototype.oa,tC.prototype.send=tC.prototype.ea,tC.prototype.setWithCredentials=tC.prototype.Ha,p=na.XhrIo=tC}).apply(void 0!==ns?ns:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),T=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),i=r[0],s=r[1],a=new nu((i+s)*3/4-s),o=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=nl[e.charCodeAt(n)]<<18|nl[e.charCodeAt(n+1)]<<12|nl[e.charCodeAt(n+2)]<<6|nl[e.charCodeAt(n+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=255&t;return 2===s&&(t=nl[e.charCodeAt(n)]<<2|nl[e.charCodeAt(n+1)]>>4,a[o++]=255&t),1===s&&(t=nl[e.charCodeAt(n)]<<10|nl[e.charCodeAt(n+1)]<<4|nl[e.charCodeAt(n+2)]>>2,a[o++]=t>>8&255,a[o++]=255&t),a},_=function(e){for(var t,n=e.length,r=n%3,i=[],s=0,a=n-r;s<a;s+=16383)i.push(function(e,t,n){for(var r,i=[],s=t;s<n;s+=3)r=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(no[r>>18&63]+no[r>>12&63]+no[r>>6&63]+no[63&r]);return i.join("")}(e,s,s+16383>a?a:s+16383));return 1===r?i.push(no[(t=e[n-1])>>2]+no[t<<4&63]+"=="):2===r&&i.push(no[(t=(e[n-2]<<8)+e[n-1])>>10]+no[t>>4&63]+no[t<<2&63]+"="),i.join("")};for(var no=[],nl=[],nu="undefined"!=typeof Uint8Array?Uint8Array:Array,nh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nc=0,nf=nh.length;nc<nf;++nc)no[nc]=nh[nc],nl[nh.charCodeAt(nc)]=nc;nl["-".charCodeAt(0)]=62,nl["_".charCodeAt(0)]=63,I=function(e,t,n,r,i){var s,a,o=8*i-r-1,l=(1<<o)-1,u=l>>1,h=-7,c=n?i-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=o;h>0;s=256*s+e[t+c],c+=f,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=r;h>0;a=256*a+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),s-=u}return(d?-1:1)*a*Math.pow(2,s-r)},S=function(e,t,n,r,i,s){var a,o,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=5960464477539062e-23*(23===i),d=r?0:s-1,p=r?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(o=+!!isNaN(t),a=h):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(a++,l/=2),a+c>=h?(o=0,a=h):a+c>=1?(o=(t*l-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&o,d+=p,o/=256,i-=8);for(a=a<<i|o,u+=i;u>0;e[n+d]=255&a,d+=p,a/=256,u-=8);e[n+d-p]|=128*g};const nd="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function np(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,ng.prototype),t}function ng(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return nv(e)}return nm(e,t,n)}function nm(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ng.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|nT(e,t),r=np(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(nK(e,Uint8Array)){let t=new Uint8Array(e);return nb(t.buffer,t.byteOffset,t.byteLength)}return nw(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(nK(e,ArrayBuffer)||e&&nK(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(nK(e,SharedArrayBuffer)||e&&nK(e.buffer,SharedArrayBuffer)))return nb(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return ng.from(r,t,n);let i=function(e){if(ng.isBuffer(e)){let t=0|nE(e.length),n=np(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?np(0):nw(e):"Buffer"===e.type&&Array.isArray(e.data)?nw(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ng.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ny(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function nv(e){return ny(e),np(e<0?0:0|nE(e))}function nw(e){let t=e.length<0?0:0|nE(e.length),n=np(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function nb(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),ng.prototype),r}function nE(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function nT(e,t){if(ng.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||nK(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return n$(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return nq(e).length;default:if(i)return r?-1:n$(e).length;t=(""+t).toLowerCase(),i=!0}}function n_(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=nH[e[r]];return i}(this,t,n);case"utf8":case"utf-8":return nx(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":var i,s,a;return i=this,s=t,a=n,0===s&&a===i.length?_(i):_(i.slice(s,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function nI(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function nS(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n*=1)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=ng.from(t,r)),ng.isBuffer(t))return 0===t.length?-1:nC(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):nC(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function nC(e,t,n,r,i){let s,a=1,o=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;a=2,o/=2,l/=2,n/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let r=-1;for(s=n;s<o;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*a}else -1!==r&&(s-=s-r),r=-1}else for(n+l>o&&(n=o-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return -1}function nx(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],s=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=n){let n,r,o,l;switch(a){case 1:t<128&&(s=t);break;case 2:(192&(n=e[i+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[i+1],r=e[i+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[i+1],r=e[i+2],o=e[i+3],(192&n)==128&&(192&r)==128&&(192&o)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&o)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function nA(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function nD(e,t,n,r,i,s){if(!ng.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function nk(e,t,n,r,i){nF(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function nN(e,t,n,r,i){nF(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function nR(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function nL(e,t,n,r,i){return t*=1,n>>>=0,i||nR(e,t,n,4,34028234663852886e22,-34028234663852886e22),S(e,t,n,r,23,4),n+4}function nO(e,t,n,r,i){return t*=1,n>>>=0,i||nR(e,t,n,8,17976931348623157e292,-17976931348623157e292),S(e,t,n,r,52,8),n+8}ng.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ng.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ng.prototype,"parent",{enumerable:!0,get:function(){if(ng.isBuffer(this))return this.buffer}}),Object.defineProperty(ng.prototype,"offset",{enumerable:!0,get:function(){if(ng.isBuffer(this))return this.byteOffset}}),ng.poolSize=8192,ng.from=function(e,t,n){return nm(e,t,n)},Object.setPrototypeOf(ng.prototype,Uint8Array.prototype),Object.setPrototypeOf(ng,Uint8Array),ng.alloc=function(e,t,n){return(ny(e),e<=0)?np(e):void 0!==t?"string"==typeof n?np(e).fill(t,n):np(e).fill(t):np(e)},ng.allocUnsafe=function(e){return nv(e)},ng.allocUnsafeSlow=function(e){return nv(e)},ng.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ng.prototype},ng.compare=function(e,t){if(nK(e,Uint8Array)&&(e=ng.from(e,e.offset,e.byteLength)),nK(t,Uint8Array)&&(t=ng.from(t,t.offset,t.byteLength)),!ng.isBuffer(e)||!ng.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},ng.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ng.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ng.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=ng.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(nK(t,Uint8Array))i+t.length>r.length?(ng.isBuffer(t)||(t=ng.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(ng.isBuffer(t))t.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return r},ng.byteLength=nT,ng.prototype._isBuffer=!0,ng.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)nI(this,t,t+1);return this},ng.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)nI(this,t,t+3),nI(this,t+1,t+2);return this},ng.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)nI(this,t,t+7),nI(this,t+1,t+6),nI(this,t+2,t+5),nI(this,t+3,t+4);return this},ng.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?nx(this,0,e):n_.apply(this,arguments)},ng.prototype.toLocaleString=ng.prototype.toString,ng.prototype.equals=function(e){if(!ng.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ng.compare(this,e)},ng.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},nd&&(ng.prototype[nd]=ng.prototype.inspect),ng.prototype.compare=function(e,t,n,r,i){if(nK(e,Uint8Array)&&(e=ng.from(e,e.offset,e.byteLength)),!ng.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let s=i-r,a=n-t,o=Math.min(s,a),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<o;++e)if(l[e]!==u[e]){s=l[e],a=u[e];break}return s<a?-1:+(a<s)},ng.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},ng.prototype.indexOf=function(e,t,n){return nS(this,e,t,n,!0)},ng.prototype.lastIndexOf=function(e,t,n){return nS(this,e,t,n,!1)},ng.prototype.write=function(e,t,n,r){var i,s,a,o,l,u,h,c;if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let d=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let i;n=Number(n)||0;let s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;let a=t.length;for(r>a/2&&(r=a/2),i=0;i<r;++i){var o;let r=parseInt(t.substr(2*i,2),16);if((o=r)!=o)break;e[n+i]=r}return i}(this,e,t,n);case"utf8":case"utf-8":return i=t,s=n,nz(n$(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return a=t,o=n,nz(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,a,o);case"base64":return l=t,u=n,nz(nq(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=n,nz(function(e,t){let n,r;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},ng.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ng.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,ng.prototype),r},ng.prototype.readUintLE=ng.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nA(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},ng.prototype.readUintBE=ng.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nA(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},ng.prototype.readUint8=ng.prototype.readUInt8=function(e,t){return e>>>=0,t||nA(e,1,this.length),this[e]},ng.prototype.readUint16LE=ng.prototype.readUInt16LE=function(e,t){return e>>>=0,t||nA(e,2,this.length),this[e]|this[e+1]<<8},ng.prototype.readUint16BE=ng.prototype.readUInt16BE=function(e,t){return e>>>=0,t||nA(e,2,this.length),this[e]<<8|this[e+1]},ng.prototype.readUint32LE=ng.prototype.readUInt32LE=function(e,t){return e>>>=0,t||nA(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},ng.prototype.readUint32BE=ng.prototype.readUInt32BE=function(e,t){return e>>>=0,t||nA(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ng.prototype.readBigUInt64LE=nG(function(e){nV(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&nB(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*n;return BigInt(r)+(BigInt(i)<<BigInt(32))}),ng.prototype.readBigUInt64BE=nG(function(e){nV(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&nB(e,this.length-8);let r=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),ng.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nA(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},ng.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nA(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},ng.prototype.readInt8=function(e,t){return(e>>>=0,t||nA(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ng.prototype.readInt16LE=function(e,t){e>>>=0,t||nA(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},ng.prototype.readInt16BE=function(e,t){e>>>=0,t||nA(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},ng.prototype.readInt32LE=function(e,t){return e>>>=0,t||nA(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ng.prototype.readInt32BE=function(e,t){return e>>>=0,t||nA(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ng.prototype.readBigInt64LE=nG(function(e){nV(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&nB(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),ng.prototype.readBigInt64BE=nG(function(e){nV(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&nB(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n)}),ng.prototype.readFloatLE=function(e,t){return e>>>=0,t||nA(e,4,this.length),I(this,e,!0,23,4)},ng.prototype.readFloatBE=function(e,t){return e>>>=0,t||nA(e,4,this.length),I(this,e,!1,23,4)},ng.prototype.readDoubleLE=function(e,t){return e>>>=0,t||nA(e,8,this.length),I(this,e,!0,52,8)},ng.prototype.readDoubleBE=function(e,t){return e>>>=0,t||nA(e,8,this.length),I(this,e,!1,52,8)},ng.prototype.writeUintLE=ng.prototype.writeUIntLE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;nD(this,e,t,n,r,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},ng.prototype.writeUintBE=ng.prototype.writeUIntBE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;nD(this,e,t,n,r,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},ng.prototype.writeUint8=ng.prototype.writeUInt8=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,1,255,0),this[t]=255&e,t+1},ng.prototype.writeUint16LE=ng.prototype.writeUInt16LE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ng.prototype.writeUint16BE=ng.prototype.writeUInt16BE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ng.prototype.writeUint32LE=ng.prototype.writeUInt32LE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ng.prototype.writeUint32BE=ng.prototype.writeUInt32BE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ng.prototype.writeBigUInt64LE=nG(function(e,t=0){return nk(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ng.prototype.writeBigUInt64BE=nG(function(e,t=0){return nN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ng.prototype.writeIntLE=function(e,t,n,r){if(e*=1,t>>>=0,!r){let r=Math.pow(2,8*n-1);nD(this,e,t,n,r-1,-r)}let i=0,s=1,a=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+n},ng.prototype.writeIntBE=function(e,t,n,r){if(e*=1,t>>>=0,!r){let r=Math.pow(2,8*n-1);nD(this,e,t,n,r-1,-r)}let i=n-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+n},ng.prototype.writeInt8=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ng.prototype.writeInt16LE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ng.prototype.writeInt16BE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ng.prototype.writeInt32LE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ng.prototype.writeInt32BE=function(e,t,n){return e*=1,t>>>=0,n||nD(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ng.prototype.writeBigInt64LE=nG(function(e,t=0){return nk(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ng.prototype.writeBigInt64BE=nG(function(e,t=0){return nN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ng.prototype.writeFloatLE=function(e,t,n){return nL(this,e,t,!0,n)},ng.prototype.writeFloatBE=function(e,t,n){return nL(this,e,t,!1,n)},ng.prototype.writeDoubleLE=function(e,t,n){return nO(this,e,t,!0,n)},ng.prototype.writeDoubleBE=function(e,t,n){return nO(this,e,t,!1,n)},ng.prototype.copy=function(e,t,n,r){if(!ng.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},ng.prototype.fill=function(e,t,n,r){let i;if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!ng.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{let s=ng.isBuffer(e)?e:ng.from(e,r),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%a]}return this};const nM={};function nP(e,t,n){nM[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function nU(e){let t="",n=e.length,r=+("-"===e[0]);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function nF(e,t,n,r,i,s){if(e>n||e<t){let r;let i="bigint"==typeof t?"n":"";throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new nM.ERR_OUT_OF_RANGE("value",r,e)}nV(i,"offset"),(void 0===r[i]||void 0===r[i+s])&&nB(i,r.length-(s+1))}function nV(e,t){if("number"!=typeof e)throw new nM.ERR_INVALID_ARG_TYPE(t,"number",e)}function nB(e,t,n){if(Math.floor(e)!==e)throw nV(e,n),new nM.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new nM.ERR_BUFFER_OUT_OF_BOUNDS;throw new nM.ERR_OUT_OF_RANGE(n||"offset",`>= ${+!!n} and <= ${t}`,e)}nP("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),nP("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),nP("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>0x100000000?i=nU(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=nU(i)),i+="n"),r+=` It must be ${t}. Received ${i}`},RangeError);const nj=/[^+/0-9A-Za-z-_]/g;function n$(e,t){let n;t=t||1/0;let r=e.length,i=null,s=[];for(let a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319||a+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function nq(e){return T(function(e){if((e=(e=e.split("=")[0]).trim().replace(nj,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function nz(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function nK(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const nH=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function nG(e){return"undefined"==typeof BigInt?nQ:e}function nQ(){throw Error("BigInt not supported")}const nW="@firebase/firestore",nX="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nY.UNAUTHENTICATED=new nY(null),nY.GOOGLE_CREDENTIALS=new nY("google-credentials-uid"),nY.FIRST_PARTY=new nY("first-party-uid"),nY.MOCK_USER=new nY("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nJ="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nZ=new eS("@firebase/firestore");function n0(){return nZ.logLevel}function n1(e,...t){if(nZ.logLevel<=c.DEBUG){let n=t.map(n3);nZ.debug(`Firestore (${nJ}): ${e}`,...n)}}function n2(e,...t){if(nZ.logLevel<=c.ERROR){let n=t.map(n3);nZ.error(`Firestore (${nJ}): ${e}`,...n)}}function n6(e,...t){if(nZ.logLevel<=c.WARN){let n=t.map(n3);nZ.warn(`Firestore (${nJ}): ${e}`,...n)}}function n3(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n5(e="Unexpected state"){let t=`FIRESTORE (${nJ}) INTERNAL ASSERTION FAILED: `+e;throw n2(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n8={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class n4 extends eu{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class re{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nY.UNAUTHENTICATED))}shutdown(){}}class rt{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rn{constructor(e){this.t=e,this.currentUser=nY.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||n5();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new n7;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new n7,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{n1("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n1("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new n7)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n1("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||n5(),new n9(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||n5(),new nY(e)}}class rr{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=nY.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ri{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new rr(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(nY.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ra{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,null!=e&&void 0!==e.settings&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||n5();let n=e=>{null!=e.error&&n1("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,n1("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{n1("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):n1("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new rs(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||n5(),this.R=e.token,new rs(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function rl(e,t){return e<t?-1:+(e>t)}function ru(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class rh{static now(){return rh.fromMillis(Date.now())}static fromDate(e){return rh.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*1e6);return new rh(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new n4(n8.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new n4(n8.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rl(this.nanoseconds,e.nanoseconds):rl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static fromTimestamp(e){return new rc(e)}static min(){return new rc(new rh(0,0))}static max(){return new rc(new rh(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="__name__";class rd{constructor(e,t,n){void 0===t?t=0:t>e.length&&n5(),void 0===n?n=e.length-t:n>e.length-t&&n5(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rd.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rd?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=rd.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=rd.isNumericId(e),r=rd.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?rd.extractNumericId(e).compare(rd.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return f.fromString(e.substring(4,e.length-2))}}class rp extends rd{construct(e,t,n){return new rp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new n4(n8.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new rp(t)}static emptyPath(){return new rp([])}}const rg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rm extends rd{construct(e,t,n){return new rm(e,t,n)}static isValidIdentifier(e){return rg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rm.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===rf}static keyField(){return new rm([rf])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new n4(n8.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new n4(n8.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new n4(n8.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new n4(n8.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rm(t)}static emptyPath(){return new rm([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.path=e}static fromPath(e){return new ry(rp.fromString(e))}static fromName(e){return new ry(rp.fromString(e).popFirst(5))}static empty(){return new ry(rp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ry(new rp(e.slice()))}}class rv{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rv(rc.min(),ry.empty(),-1)}static max(){return new rv(rc.max(),ry.empty(),-1)}}class rw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(e){if(e.code!==n8.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n1("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&n5(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rE((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rE?t:rE.resolve(t)}catch(e){return rE.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rE.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rE.reject(t)}static resolve(e){return new rE((t,n)=>{t(e)})}static reject(e){return new rE((t,n)=>{n(e)})}static waitFor(e){return new rE((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rE.resolve(!1);for(let n of e)t=t.next(e=>e?rE.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rE((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rE((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function rT(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}r_.ae=-1;function rI(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rC(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rx(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.comparator=e,this.root=t||rk.EMPTY}insert(e,t){return new rA(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rk.BLACK,null,null))}remove(e){return new rA(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rk.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rD(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rD(this.root,e,this.comparator,!1)}getReverseIterator(){return new rD(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rD(this.root,e,this.comparator,!0)}}class rD{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rk{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rk.RED,this.left=null!=r?r:rk.EMPTY,this.right=null!=i?i:rk.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rk(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rk.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rk.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rk.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rk.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n5();let e=this.left.check();if(e!==this.right.check())throw n5();return e+ +!this.isRed()}}rk.EMPTY=null,rk.RED=!0,rk.BLACK=!1,rk.EMPTY=new class{constructor(){this.size=0}get key(){throw n5()}get value(){throw n5()}get color(){throw n5()}get left(){throw n5()}get right(){throw n5()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rk(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.comparator=e,this.data=new rA(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rR(this.data.getIterator())}getIteratorFrom(e){return new rR(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rN)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rN(this.comparator);return t.data=e,t}}class rR{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.fields=e,e.sort(rm.comparator)}static empty(){return new rL([])}unionWith(e){let t=new rN(rm.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new rL(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ru(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.binaryString=e}static fromBase64String(e){return new rM(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rO("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rM(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rM.EMPTY_BYTE_STRING=new rM("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rU(e){if(e||n5(),"string"==typeof e){let t=0,n=rP.exec(e);if(n||n5(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rF(e.seconds),nanos:rF(e.nanos)}}function rF(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rV(e){return"string"==typeof e?rM.fromBase64String(e):rM.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB="server_timestamp",rj="__type__",r$="__previous_value__",rq="__local_write_time__";function rz(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rj])||void 0===n?void 0:n.stringValue)===rB}function rK(e){let t=e.mapValue.fields[r$];return rz(t)?rK(t):t}function rH(e){let t=rU(e.mapValue.fields[rq].timestampValue);return new rh(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}const rQ="(default)";class rW{constructor(e,t){this.projectId=e,this.database=t||rQ}static empty(){return new rW("","")}get isDefaultDatabase(){return this.database===rQ}isEqual(e){return e instanceof rW&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rX="__type__",rY="__max__",rJ={mapValue:{fields:{__type__:{stringValue:rY}}}},rZ="__vector__",r0="value";function r1(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rz(e)?4:ia(e)?0x1fffffffffffff:ii(e)?10:11:n5()}function r2(e,t){if(e===t)return!0;let n=r1(e);if(n!==r1(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rH(e).isEqual(rH(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rU(e.timestampValue),r=rU(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rV(e.bytesValue).isEqual(rV(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rF(e.geoPointValue.latitude)===rF(t.geoPointValue.latitude)&&rF(e.geoPointValue.longitude)===rF(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rF(e.integerValue)===rF(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rF(e.doubleValue),r=rF(t.doubleValue);return n===r?rI(n)===rI(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ru(e.arrayValue.values||[],t.arrayValue.values||[],r2);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rS(n)!==rS(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!r2(n[e],r[e])))return!1;return!0}(e,t);default:return n5()}}function r6(e,t){return void 0!==(e.values||[]).find(e=>r2(e,t))}function r3(e,t){if(e===t)return 0;let n=r1(e),r=r1(t);if(n!==r)return rl(n,r);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return rl(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rF(e.integerValue||e.doubleValue),r=rF(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return r5(e.timestampValue,t.timestampValue);case 4:return r5(rH(e),rH(t));case 5:return rl(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rV(e),r=rV(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=rl(n[e],r[e]);if(0!==t)return t}return rl(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=rl(rF(e.latitude),rF(t.latitude));return 0!==n?n:rl(rF(e.longitude),rF(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return r8(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a[r0])||void 0===n?void 0:n.arrayValue,u=null===(r=o[r0])||void 0===r?void 0:r.arrayValue,h=rl((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:r8(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rJ.mapValue&&t===rJ.mapValue)return 0;if(e===rJ.mapValue)return 1;if(t===rJ.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=rl(r[e],s[e]);if(0!==t)return t;let a=r3(n[r[e]],i[s[e]]);if(0!==a)return a}return rl(r.length,s.length)}(e.mapValue,t.mapValue);default:throw n5()}}function r5(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rl(e,t);let n=rU(e),r=rU(t),i=rl(n.seconds,r.seconds);return 0!==i?i:rl(n.nanos,r.nanos)}function r8(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=r3(n[e],r[e]);if(t)return t}return rl(n.length,r.length)}function r4(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rU(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rV(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ry.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=r4(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${r4(e.fields[i])}`;return n+"}"}(e.mapValue):n5()}function r7(e){return!!e&&"integerValue"in e}function r9(e){return!!e&&"arrayValue"in e}function ie(e){return!!e&&"nullValue"in e}function it(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ir(e){return!!e&&"mapValue"in e}function ii(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rX])||void 0===n?void 0:n.stringValue)===rZ}function is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rC(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=is(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ia(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===rY}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.value=e}static empty(){return new io({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ir(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=rm.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=is(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ir(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return r2(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rC(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new io(is(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new il(e,0,rc.min(),rc.min(),rc.min(),io.empty(),0)}static newFoundDocument(e,t,n,r){return new il(e,1,t,rc.min(),n,r,0)}static newNoDocument(e,t){return new il(e,2,t,rc.min(),rc.min(),io.empty(),0)}static newUnknownDocument(e,t){return new il(e,3,t,rc.min(),rc.min(),io.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rc.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=io.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=io.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof il&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new il(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.position=e,this.inclusive=t}}function ih(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ry.comparator(ry.fromName(a.referenceValue),n.key):r3(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ic(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!r2(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{}class ig extends ip{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new iw(e,t,n):"array-contains"===t?new i_(e,n):"in"===t?new iI(e,n):"not-in"===t?new iS(e,n):"array-contains-any"===t?new iC(e,n):new ig(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ib(e,n):new iE(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(r3(t,this.value)):null!==t&&r1(this.value)===r1(t)&&this.matchesComparison(r3(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return n5()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class im extends ip{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new im(e,t)}matches(e){return iy(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function iy(e){return"and"===e.op}function iv(e){for(let t of e.filters)if(t instanceof im)return!1;return!0}class iw extends ig{constructor(e,t,n){super(e,t,n),this.key=ry.fromName(n.referenceValue)}matches(e){let t=ry.comparator(e.key,this.key);return this.matchesComparison(t)}}class ib extends ig{constructor(e,t){super(e,"in",t),this.keys=iT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iE extends ig{constructor(e,t){super(e,"not-in",t),this.keys=iT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iT(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ry.fromName(e.referenceValue))}class i_ extends ig{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return r9(t)&&r6(t.arrayValue,this.value)}}class iI extends ig{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&r6(this.value.arrayValue,t)}}class iS extends ig{constructor(e,t){super(e,"not-in",t)}matches(e){if(r6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!r6(this.value.arrayValue,t)}}class iC extends ig{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!r9(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>r6(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.le=null}}function iA(e,t=null,n=[],r=[],i=null,s=null,a=null){return new ix(e,t,n,r,i,s,a)}function iD(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof ig)return t.field.canonicalString()+t.op.toString()+r4(t.value);if(iv(t)&&iy(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>r4(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>r4(e)).join(",")),e.le=t}return e.le}function ik(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ig?n instanceof ig&&t.op===n.op&&t.field.isEqual(n.field)&&r2(t.value,n.value):t instanceof im?n instanceof im&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void n5()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ic(e.startAt,t.startAt)&&ic(e.endAt,t.endAt)}function iN(e){return ry.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function iL(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iO(e){if(null===e.he){let t;e.he=[];let n=new Set;for(let t of e.explicitOrderBy)e.he.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rN(rm.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.he.push(new id(t,r))}),n.has(rm.keyField().canonicalString())||e.he.push(new id(rm.keyField(),r))}return e.he}function iM(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return iA(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new id(e.field,t)});let n=e.endAt?new iu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new iu(e.startAt.position,e.startAt.inclusive):null;return iA(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,iO(e))),e.Pe}function iP(e,t,n){return new iR(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function iU(e,t){return ik(iM(e),iM(t))&&e.limitType===t.limitType}function iF(e){return`${iD(iM(e))}|lt:${e.limitType}`}function iV(e){var t;let n;return`Query(target=${n=(t=iM(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ig?`${t.field.canonicalString()} ${t.op} ${r4(t.value)}`:t instanceof im?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>r4(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>r4(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iB(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ry.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of iO(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=ih(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iO(e),t))&&(!e.endAt||!!function(e,t,n){let r=ih(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iO(e),t))}function ij(e){return(t,n)=>{let r=!1;for(let i of iO(e)){let e=function(e,t,n){let r=e.field.isKeyField()?ry.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?r3(r,i):n5()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return n5()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rC(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return rx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iq=new rA(ry.comparator),iz=new rA(ry.comparator);function iK(...e){let t=iz;for(let n of e)t=t.insert(n.key,n);return t}function iH(e){let t=iz;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iG(){return new i$(e=>e.toString(),(e,t)=>e.isEqual(t))}const iQ=new rA(ry.comparator),iW=new rN(ry.comparator);function iX(...e){let t=iW;for(let n of e)t=t.add(n);return t}const iY=new rN(rl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iJ(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rI(t)?"-0":t}}function iZ(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this._=void 0}}function i1(e,t){return e instanceof i4?r7(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class i2 extends i0{}class i6 extends i0{constructor(e){super(),this.elements=e}}function i3(e,t){let n=i9(t);for(let t of e.elements)n.some(e=>r2(e,t))||n.push(t);return{arrayValue:{values:n}}}class i5 extends i0{constructor(e){super(),this.elements=e}}function i8(e,t){let n=i9(t);for(let t of e.elements)n=n.filter(e=>!r2(e,t));return{arrayValue:{values:n}}}class i4 extends i0{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function i7(e){return rF(e.integerValue||e.doubleValue)}function i9(e){return r9(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class se{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sr{}function si(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sf(e.key,st.none()):new so(e.key,e.data,st.none());{let n=e.data,r=io.empty(),i=new rN(rm.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new sl(e.key,r,new rL(i.toArray()),st.none())}}function ss(e,t,n,r){return e instanceof so?function(e,t,n,r){if(!sn(e.precondition,t))return n;let i=e.value.clone(),s=sc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof sl?function(e,t,n,r){if(!sn(e.precondition,t))return n;let i=sc(e.fieldTransforms,r,t),s=t.data;return(s.setAll(su(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):sn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sa(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&ru(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof i6&&r instanceof i6||n instanceof i5&&r instanceof i5?ru(n.elements,r.elements,r2):n instanceof i4&&r instanceof i4?r2(n.Ie,r.Ie):n instanceof i2&&r instanceof i2)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class so extends sr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sl extends sr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function su(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function sh(e,t,n){var r;let i=new Map;e.length===n.length||n5();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof i6?i3(o,l):o instanceof i5?i8(o,l):r))}return i}function sc(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof i2?function(e,t){let n={fields:{[rj]:{stringValue:rB},[rq]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rz(t)&&(t=rK(t)),t&&(n.fields[r$]=t),{mapValue:n}}(t,s):e instanceof i6?i3(e,s):e instanceof i5?i8(e,s):function(e,t){let n=i1(e,t),r=i7(n)+i7(e.Ie);return r7(n)&&r7(e.Ie)?iZ(r):iJ(e.serializer,r)}(e,s))}return r}class sf extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sd extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof so?function(e,t,n){let r=e.value.clone(),i=sh(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof sl?function(e,t,n){if(!sn(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=sh(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(su(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ss(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ss(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iG();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=si(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rc.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iX())}isEqual(e){return this.batchId===e.batchId&&ru(this.mutations,e.mutations,(e,t)=>sa(e,t))&&ru(this.baseMutations,e.baseMutations,(e,t)=>sa(e,t))}}class sg{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||n5();let r=iQ,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new sg(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t){this.count=e,this.unchangedNames=t}}function sv(e){if(void 0===e)return n2("GRPC error has no .code"),n8.UNKNOWN;switch(e){case C.OK:return n8.OK;case C.CANCELLED:return n8.CANCELLED;case C.UNKNOWN:return n8.UNKNOWN;case C.DEADLINE_EXCEEDED:return n8.DEADLINE_EXCEEDED;case C.RESOURCE_EXHAUSTED:return n8.RESOURCE_EXHAUSTED;case C.INTERNAL:return n8.INTERNAL;case C.UNAVAILABLE:return n8.UNAVAILABLE;case C.UNAUTHENTICATED:return n8.UNAUTHENTICATED;case C.INVALID_ARGUMENT:return n8.INVALID_ARGUMENT;case C.NOT_FOUND:return n8.NOT_FOUND;case C.ALREADY_EXISTS:return n8.ALREADY_EXISTS;case C.PERMISSION_DENIED:return n8.PERMISSION_DENIED;case C.FAILED_PRECONDITION:return n8.FAILED_PRECONDITION;case C.ABORTED:return n8.ABORTED;case C.OUT_OF_RANGE:return n8.OUT_OF_RANGE;case C.UNIMPLEMENTED:return n8.UNIMPLEMENTED;case C.DATA_LOSS:return n8.DATA_LOSS;default:return n5()}}(x=C||(C={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new f([0xffffffff,0xffffffff],0);function sb(e){let t=(new TextEncoder).encode(e),n=new d;return n.update(t),new Uint8Array(n.digest())}function sE(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new f([n,r],0),new f([i,s],0)]}class sT{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new s_(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new s_(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new s_(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=f.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(f.fromNumber(n)));return 1===r.compare(sw)&&(r=new f([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,n]=sE(sb(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);if(!this.Re(r))return!1}return!0}static create(e,t,n){let r=new sT(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ee)return;let[t,n]=sE(sb(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);this.Ve(r)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class s_ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,sS.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sI(rc.min(),r,new rA(rl),iq,iX())}}class sS{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sS(n,t,iX(),iX(),iX())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class sx{constructor(e,t){this.targetId=e,this.ge=t}}class sA{constructor(e,t,n=rM.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sD{constructor(){this.pe=0,this.ye=sR(),this.we=rM.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=iX(),t=iX(),n=iX();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:n5()}}),new sS(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=sR()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||n5()}Le(){this.be=!0,this.Se=!0}}class sk{constructor(e){this.ke=e,this.qe=new Map,this.Qe=iq,this.$e=sN(),this.Ke=sN(),this.Ue=new rA(rl)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:n5()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,n)=>{this.Je(n)&&t(n)})}Ze(e){let t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){let i=r.target;if(iN(i)){if(0===n){let e=new ry(i.path);this.ze(t,e,il.newNoDocument(e,rc.min()))}else 1===n||n5()}else{let r=this.et(t);if(r!==n){let n=this.tt(e),i=n?this.nt(n,e,r):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,n;let r=e.ge.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=rV(i).toUint8Array()}catch(e){if(e instanceof rO)return n6("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new sT(t,s,a)}catch(e){return n6(e instanceof s_?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ee?null:n}nt(e,t,n){return 2*(t.ge.count!==n-this.st(e,t.targetId))}st(e,t){let n=this.ke.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)}),r}ot(e){let t=new Map;this.qe.forEach((n,r)=>{let i=this.Xe(r);if(i){if(n.current&&iN(i.target)){let t=new ry(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,il.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}});let n=iX();this.Ke.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qe.forEach((t,n)=>n.setReadTime(e));let r=new sI(e,t,this.Ue,this.Qe,n);return this.Qe=iq,this.$e=sN(),this.Ke=sN(),this.Ue=new rA(rl),r}Ge(e,t){if(!this.Je(e))return;let n=2*!!this.ut(e,t.key);this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new sD,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new rN(rl),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new rN(rl),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||n1("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new sD),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function sN(){return new rA(ry.comparator)}function sR(){return new rA(ry.comparator)}const sL={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sM={and:"AND",or:"OR"};class sP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sU(e,t){return e.useProto3Json||null==t?t:{value:t}}function sF(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sV(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sB(e){return e||n5(),rc.fromTimestamp(function(e){let t=rU(e);return new rh(t.seconds,t.nanos)}(e))}function sj(e,t){return s$(e,t).canonicalString()}function s$(e,t){let n=new rp(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function sq(e){let t=rp.fromString(e);return sJ(t)||n5(),t}function sz(e,t){return sj(e.databaseId,t.path)}function sK(e,t){let n=sq(t);if(n.get(1)!==e.databaseId.projectId)throw new n4(n8.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new n4(n8.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ry(sQ(n))}function sH(e,t){return sj(e.databaseId,t)}function sG(e){return new rp(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sQ(e){return e.length>4&&"documents"===e.get(4)||n5(),e.popFirst(5)}function sW(e,t,n){return{name:sz(e,t),fields:n.value.mapValue.fields}}function sX(e){return{fieldPath:e.canonicalString()}}function sY(e){return rm.fromServerFormat(e.fieldPath)}function sJ(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e,t,n,r,i=rc.min(),s=rc.min(),a=rM.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sZ(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sZ(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sZ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sZ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.Tt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(rF(e.integerValue));else if("doubleValue"in e){let n=rF(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),rI(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),"string"==typeof n&&(n=rU(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(rV(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?ia(e)?this.ft(t,Number.MAX_SAFE_INTEGER):ii(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):n5()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let n=e.fields||{};for(let e of(this.ft(t,55),Object.keys(n)))this.wt(e,t),this.Rt(n[e],t)}vt(e,t){var n,r;let i=e.fields||{};this.ft(t,53);let s=(null===(r=null===(n=i[r0].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(t,15),t.gt(rF(s)),this.wt(r0,t),this.Rt(i[r0],t)}Ft(e,t){let n=e.values||[];for(let e of(this.ft(t,50),n))this.Rt(e,t)}Dt(e,t){this.ft(t,37),ry.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}s1.xt=new s1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.Tn=new s6}addToCollectionParentIndex(e,t){return this.Tn.add(t),rE.resolve()}getCollectionParents(e,t){return rE.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return rE.resolve()}deleteFieldIndex(e,t){return rE.resolve()}deleteAllFieldIndexes(e){return rE.resolve()}createTargetIndexes(e,t){return rE.resolve()}getDocumentsMatchingTarget(e,t){return rE.resolve(null)}getIndexType(e,t){return rE.resolve(0)}getFieldIndexes(e,t){return rE.resolve([])}getNextCollectionGroupToUpdate(e){return rE.resolve(null)}getMinOffset(e,t){return rE.resolve(rv.min())}getMinOffsetFromCollectionGroup(e,t){return rE.resolve(rv.min())}updateCollectionGroup(e,t,n){return rE.resolve()}updateIndexEntries(e,t){return rE.resolve()}}class s6{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rN(rp.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rN(rp.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class s5{static withCacheSize(e){return new s5(e,s5.DEFAULT_COLLECTION_PERCENTILE,s5.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s5.DEFAULT_COLLECTION_PERCENTILE=10,s5.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,s5.DEFAULT=new s5(0x2800000,s5.DEFAULT_COLLECTION_PERCENTILE,s5.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),s5.DISABLED=new s5(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new s8(0)}static Un(){return new s8(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="LruGarbageCollector";function s7([e,t],[n,r]){let i=rl(e,n);return 0===i?rl(t,r):i}class s9{constructor(e){this.Hn=e,this.buffer=new rN(s7),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>s7(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ae{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){n1(s4,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rT(e)?n1(s4,"Ignoring IndexedDB error during garbage collection: ",e):await rb(e)}await this.er(3e5)})}}class at{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return rE.resolve(r_.ae);let n=new s9(t);return this.tr.forEachTarget(e,e=>n.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>n.Zn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(n1("LruGarbageCollector","Garbage collection skipped; disabled"),rE.resolve(s3)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(n1("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),s3):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(n1("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),n0()<=c.DEBUG&&n1("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),rE.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.changes=new i$(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,il.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rE.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ss(n.mutation,e,rL.empty(),rh.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iX()).next(()=>t))}getLocalViewOfDocuments(e,t,n=iX()){let r=iG();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iK();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iG();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,iX()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iq,s=iG(),a=iG();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof sl)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),ss(a.mutation,t,a.mutation.getFieldMask(),rh.now())):s.set(t.key,rL.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new ar(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=iG(),r=new rA((e,t)=>e-t),i=iX();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||rL.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||iX()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=iG();l.forEach(e=>{if(!i.has(e)){let r=si(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return rE.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return ry.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rE.resolve(iG()),a=-1,o=i;return s.next(t=>rE.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?rE.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,iX())).next(e=>({batchId:a,changes:iH(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ry(t)).next(e=>{let t=iK();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=iK();return this.indexManager.getCollectionParents(e,i).next(a=>rE.forEach(a,a=>{let o=new iR(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,il.newInvalidDocument(r)))});let n=iK();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&ss(s.mutation,r,rL.empty(),rh.now()),iB(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return rE.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:sB(t.createTime)}),rE.resolve()}getNamedQuery(e,t){return rE.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=sq(e);return 4===t.length?rp.emptyPath():sQ(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||n5();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sY(e.unaryFilter.field);return ig.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sY(e.unaryFilter.field);return ig.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sY(e.unaryFilter.field);return ig.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sY(e.unaryFilter.field);return ig.create(i,"!=",{nullValue:"NULL_VALUE"});default:return n5()}}(t):void 0!==t.fieldFilter?ig.create(sY(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n5()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?im.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return n5()}}(t.compositeFilter.op)):n5()}(e);return n instanceof im&&iv(t=n)&&iy(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new id(sY(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new iu(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new iu(e.values||[],t)}(i.endAt)),new iR(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iP(t,t.limit,"L"):t}(t.bundledQuery),readTime:sB(t.readTime)}),rE.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.overlays=new rA(ry.comparator),this.Rr=new Map}getOverlay(e,t){return rE.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iG();return rE.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Et(e,t,r)}),rE.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Rr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(n)),rE.resolve()}getOverlaysForCollection(e,t,n){let r=iG(),i=t.length+1,s=new ry(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rE.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rA((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iG(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=iG(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return rE.resolve(a)}Et(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new sm(t,n));let i=this.Rr.get(t);void 0===i&&(i=iX(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.sessionToken=rM.EMPTY_BYTE_STRING}getSessionToken(e){return rE.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,rE.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.Vr=new rN(au.mr),this.gr=new rN(au.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let n=new au(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new au(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new ry(new rp([])),n=new au(t,e),r=new au(t,e+1),i=[];return this.gr.forEachInRange([n,r],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new ry(new rp([])),n=new au(t,e),r=new au(t,e+1),i=iX();return this.gr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new au(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class au{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ry.comparator(e.key,t.key)||rl(e.Cr,t.Cr)}static pr(e,t){return rl(e.Cr,t.Cr)||ry.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new rN(au.mr)}checkEmpty(e){return rE.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sp(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Mr=this.Mr.add(new au(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rE.resolve(s)}lookupMutationBatch(e,t){return rE.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Nr(t+1),r=n<0?0:n;return rE.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rE.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return rE.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new au(t,0),r=new au(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],e=>{let t=this.Or(e.Cr);i.push(t)}),rE.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rN(rl);return t.forEach(e=>{let t=new au(e,0),r=new au(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],e=>{n=n.add(e.Cr)})}),rE.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ry.isDocumentKey(i)||(i=i.child(""));let s=new au(new ry(i),0),a=new rN(rl);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Cr)),!0)},s),rE.resolve(this.Br(a))}Br(e){let t=[];return e.forEach(e=>{let n=this.Or(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||n5(),this.mutationQueue.shift();let n=this.Mr;return rE.forEach(t.mutations,r=>{let i=new au(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){let n=new au(t,0),r=this.Mr.firstAfterOrEqual(n);return rE.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rE.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.kr=e,this.docs=new rA(ry.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rE.resolve(n?n.document.mutableCopy():il.newInvalidDocument(t))}getEntries(e,t){let n=iq;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():il.newInvalidDocument(e))}),rE.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iq,s=t.path,a=new ry(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ry.comparator(e.documentKey,t.documentKey))?n:rl(e.largestBatchId,t.largestBatchId)}(new rv(a.readTime,a.key,-1),n)||(r.has(a.key)||iB(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return rE.resolve(i)}getAllFromCollectionGroup(e,t,n,r){n5()}qr(e,t){return rE.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new af(this)}getSize(e){return rE.resolve(this.size)}}class af extends an{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)}),rE.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.persistence=e,this.Qr=new i$(e=>iD(e),ik),this.lastRemoteSnapshotVersion=rc.min(),this.highestTargetId=0,this.$r=0,this.Kr=new al,this.targetCount=0,this.Ur=s8.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,n)=>t(n)),rE.resolve()}getLastRemoteSnapshotVersion(e){return rE.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rE.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),rE.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),rE.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new s8(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,rE.resolve()}updateTargetData(e,t){return this.zn(t),rE.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,rE.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Qr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),rE.waitFor(i).next(()=>r)}getTargetCount(e){return rE.resolve(this.targetCount)}getTargetData(e,t){let n=this.Qr.get(t)||null;return rE.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),rE.resolve()}removeMatchingKeys(e,t,n){this.Kr.Sr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rE.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),rE.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Kr.vr(t);return rE.resolve(n)}containsKey(e,t){return rE.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new r_(0),this.zr=!1,this.zr=!0,this.jr=new ao,this.referenceDelegate=e(this),this.Hr=new ad(this),this.indexManager=new s2,this.remoteDocumentCache=new ac(e=>this.referenceDelegate.Jr(e)),this.serializer=new s0(t),this.Yr=new as(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new ah(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){n1("MemoryPersistence","Starting transaction:",e);let r=new ag(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next(e=>this.referenceDelegate.Xr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}ei(e,t){return rE.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class ag extends rw{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.ti=new al,this.ni=null}static ri(e){return new am(e)}get ii(){if(this.ni)return this.ni;throw n5()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),rE.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),rE.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),rE.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rE.forEach(this.ii,n=>{let r=ry.fromPath(n);return this.si(e,r).next(e=>{e||t.removeEntry(r,rc.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return rE.or([()=>rE.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ay{constructor(e,t){this.persistence=e,this.oi=new i$(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new at(this,t)}static ri(e,t){return new ay(e,t)}Zr(){}Xr(e){return rE.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return rE.forEach(this.oi,(n,r)=>this.ar(e,n,r).next(e=>e?rE.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,r=>this.ar(e,r,t).next(e=>{e||(n++,i.removeEntry(r,rc.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),rE.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),rE.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),rE.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),rE.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(r1(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=rK(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return rV(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,rC(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw n5()}}(e.data.value)),t}ar(e,t,n){return rE.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return rE.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=iX(),r=iX();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new av(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var e;let t=null===(e=en())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(k.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new aw;return this._s(e,t,n).next(r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)})}).next(()=>i.result)}us(e,t,n,r){return n.documentReadCount<this.es?(n0()<=c.DEBUG&&n1("QueryEngine","SDK will not create cache indexes for query:",iV(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),rE.resolve()):(n0()<=c.DEBUG&&n1("QueryEngine","Query:",iV(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(n0()<=c.DEBUG&&n1("QueryEngine","The SDK decides to create cache indexes for query:",iV(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,iM(t))):rE.resolve())}rs(e,t){if(iL(t))return rE.resolve(null);let n=iM(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=iM(t=iP(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=iX(...r);return this.ns.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,iP(t,null,"F")):this.hs(e,s,t,n)}))})))}ss(e,t,n,r){return iL(t)||r.isEqual(rc.min())?rE.resolve(null):this.ns.getDocuments(e,n).next(i=>{let s=this.cs(t,i);return this.ls(t,s,n,r)?rE.resolve(null):(n0()<=c.DEBUG&&n1("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iV(t)),this.hs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new rv(rc.fromTimestamp(1e9===r?new rh(n+1,0):new rh(n,r)),ry.empty(),-1)}(r,0)).next(e=>e))})}cs(e,t){let n=new rN(ij(e));return t.forEach((t,r)=>{iB(e,r)&&(n=n.add(r))}),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return n0()<=c.DEBUG&&n1("QueryEngine","Using full collection scan to execute query:",iV(t)),this.ns.getDocumentsMatchingQuery(e,t,rv.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="LocalStore";class aT{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new rA(rl),this.Is=new i$(e=>iD(e),ik),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ai(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function a_(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=iX();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function aI(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function aS(e,t,n){let r=e.Ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!rT(e))throw e;n1(aE,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(r.target)}function aC(e,t,n){let r=rc.min(),i=iX();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Is.get(n);return void 0!==r?rE.resolve(e.Ts.get(r)):e.Hr.getTargetData(t,n)})(e,s,iM(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,n?r:rc.min(),n?i:iX())).next(n=>{var r,s,a;let o;return r=e,s=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),a=n,o=r.Es.get(s)||rc.min(),a.forEach((e,t)=>{t.readTime.compareTo(o)>0&&(o=t.readTime)}),r.Es.set(s,o),{documents:n,gs:i}}))}class ax{constructor(){this.activeTargetIds=iY}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class aA{constructor(){this.ho=new ax,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ax,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="ConnectivityMonitor";class aN{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(n1(ak,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(n1(ak,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aR=null;function aL(){return null===aR?aR=0x10000000+Math.round(0x80000000*Math.random()):aR++,"0x"+aR.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="RestConnection",aM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===rQ?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){let s=aL(),a=this.bo(e,t.toUriEncodedString());n1(aO,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(o,r,i),this.vo(e,a,o,n).then(t=>(n1(aO,`Received RPC '${e}' ${s}: `,t),t),t=>{throw n6(aO,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nJ,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=aM[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF="WebChannelConnection";class aV extends aP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){let i=aL();return new Promise((s,a)=>{let o=new p;o.setWithCredentials(!0),o.listenOnce(m.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case y.NO_ERROR:let t=o.getResponseJson();n1(aF,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case y.TIMEOUT:n1(aF,`RPC '${e}' ${i} timed out`),a(new n4(n8.DEADLINE_EXCEEDED,"Request time out"));break;case y.HTTP_ERROR:let n=o.getStatus();if(n1(aF,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(n8).indexOf(t)>=0?t:n8.UNKNOWN}(t.status);a(new n4(e,t.message))}else a(new n4(n8.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new n4(n8.UNAVAILABLE,"Connection failed."));break;default:n5()}}finally{n1(aF,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);n1(aF,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Wo(e,t,n){let r=aL(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=E(),a=b(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Do(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=i.join("");n1(aF,`Creating RPC '${e}' stream ${r}: ${u}`,o);let h=s.createWebChannel(u,o),c=!1,f=!1,d=new aU({Fo:t=>{f?n1(aF,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(n1(aF,`Opening RPC '${e}' stream ${r} transport.`),h.open(),c=!0),n1(aF,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Mo:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,g.EventType.OPEN,()=>{f||(n1(aF,`RPC '${e}' stream ${r} transport opened.`),d.Qo())}),p(h,g.EventType.CLOSE,()=>{f||(f=!0,n1(aF,`RPC '${e}' stream ${r} transport closed`),d.Ko())}),p(h,g.EventType.ERROR,t=>{f||(f=!0,n6(aF,`RPC '${e}' stream ${r} transport errored:`,t),d.Ko(new n4(n8.UNAVAILABLE,"The operation could not be completed")))}),p(h,g.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||n5();let s=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){n1(aF,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=C[e];if(void 0!==t)return sv(t)}(t),i=s.message;void 0===n&&(n=n8.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.Ko(new n4(n,i)),h.close()}else n1(aF,`RPC '${e}' stream ${r} received:`,i),d.Uo(i)}}),p(a,w.STAT_EVENT,t=>{t.stat===v.PROXY?n1(aF,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===v.NOPROXY&&n1(aF,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.$o()},0),d}}function aB(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(e){return new sP(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&n1("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aq="PersistentStream";class az{constructor(e,t,n,r,i,s,a,o){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new a$(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===n8.RESOURCE_EXHAUSTED?(n2(t.toString()),n2("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===n8.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.i_===t&&this.V_(e,n)},t=>{e(()=>{let e=new n4(n8.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{n(()=>this.m_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return n1(aq,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(n1(aq,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aK extends az{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:n5(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||n5(),rM.fromBase64String(i||"")):(void 0===i||i instanceof ng||i instanceof Uint8Array||n5(),rM.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new sA(s,a,o,l&&new n4(void 0===l.code?n8.UNKNOWN:sv(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sK(e,r.document.name),s=sB(r.document.updateTime),a=r.document.createTime?sB(r.document.createTime):rc.min(),o=new io({mapValue:{fields:r.document.fields}}),l=il.newFoundDocument(i,s,a,o);n=new sC(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sK(e,r.document),s=r.readTime?sB(r.readTime):rc.min(),a=il.newNoDocument(i,s);n=new sC([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sK(e,r.document);n=new sC([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return n5();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new sy(r,i);n=new sx(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rc.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rc.min():t.readTime?sB(t.readTime):rc.min()}(e);return this.listener.p_(t,n)}y_(e){let t={};t.database=sG(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=iN(r)?{documents:{documents:[sH(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=sH(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ig?function(e){if("=="===e.op){if(it(e.value))return{unaryFilter:{field:sX(e.field),op:"IS_NAN"}};if(ie(e.value))return{unaryFilter:{field:sX(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(it(e.value))return{unaryFilter:{field:sX(e.field),op:"IS_NOT_NAN"}};if(ie(e.value))return{unaryFilter:{field:sX(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sX(e.field),op:sO[e.op],value:e.value}}}(t):t instanceof im?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sM[t.op],filters:n}}}(t):n5()}(im.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:sX(e.field),direction:sL[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=sU(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ht:s,parent:i}}(e,r).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=sV(e,t.resumeToken);let r=sU(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(rc.min())>0){n.readTime=sF(e,t.snapshotVersion.toTimestamp());let r=sU(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return n5()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){let t={};t.database=sG(this.serializer),t.removeTarget=e,this.I_(t)}}class aH extends az{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||n5(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&n5(),this.listener.D_()}onNext(e){var t,n;e.streamToken||n5(),this.lastStreamToken=e.streamToken,this.a_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||n5(),t.map(e=>{let t;return(t=e.updateTime?sB(e.updateTime):sB(n)).isEqual(rc.min())&&(t=sB(n)),new se(t,e.transformResults||[])})):[]),i=sB(e.commitTime);return this.listener.v_(i,r)}C_(){let e={};e.database=sG(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof so)r={update:sW(e,t.key,t.value)};else if(t instanceof sf)r={delete:sz(e,t.key)};else if(t instanceof sl)r={update:sW(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sd))return n5();r={verify:sz(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof i2)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof i6)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof i5)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof i4)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw n5()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sF(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:n5()),r})(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{}class aQ extends aG{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new n4(n8.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,s$(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n4(n8.UNKNOWN,e.toString())})}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,s$(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n4(n8.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class aW{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(n2(t),this.N_=!1):n1("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aX="RemoteStore";class aY{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{n.enqueueAndForget(async()=>{a8(this)&&(n1(aX,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await aZ(e),e.j_.set("Unknown"),e.W_.delete(4),await aJ(e)}(this))})}),this.j_=new aW(n,r)}}async function aJ(e){if(a8(e))for(let t of e.G_)await t(!0)}async function aZ(e){for(let t of e.G_)await t(!1)}function a0(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),a5(e)?a3(e):of(e).c_()&&a2(e,t))}function a1(e,t){let n=of(e);e.U_.delete(t),n.c_()&&a6(e,t),0===e.U_.size&&(n.c_()?n.P_():a8(e)&&e.j_.set("Unknown"))}function a2(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rc.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}of(e).y_(t)}function a6(e,t){e.H_.Ne(t),of(e).w_(t)}function a3(e){e.H_=new sk({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),of(e).start(),e.j_.B_()}function a5(e){return a8(e)&&!of(e).u_()&&e.U_.size>0}function a8(e){return 0===e.W_.size}async function a4(e){e.j_.set("Online")}async function a7(e){e.U_.forEach((t,n)=>{a2(e,t)})}async function a9(e,t){e.H_=void 0,a5(e)?(e.j_.q_(t),a3(e)):e.j_.set("Unknown")}async function oe(e,t,n){if(e.j_.set("Online"),t instanceof sA&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.U_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.U_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(n){n1(aX,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ot(e,n)}else if(t instanceof sC?e.H_.We(t):t instanceof sx?e.H_.Ze(t):e.H_.je(t),!n.isEqual(rc.min()))try{let t=await aI(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.H_.ot(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.U_.get(r);i&&e.U_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.U_.get(t);if(!r)return;e.U_.set(t,r.withResumeToken(rM.EMPTY_BYTE_STRING,r.snapshotVersion)),a6(e,t);let i=new sZ(r.target,t,n,r.sequenceNumber);a2(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){n1(aX,"Failed to raise snapshot:",t),await ot(e,t)}}async function ot(e,t,n){if(!rT(t))throw t;e.W_.add(1),await aZ(e),e.j_.set("Offline"),n||(n=()=>aI(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n1(aX,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await aJ(e)})}function on(e,t){return t().catch(n=>ot(e,n,t))}async function or(e){var t;let n=od(e),r=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;a8(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,r);if(null===t){0===e.K_.length&&n.P_();break}r=t.batchId,function(e,t){e.K_.push(t);let n=od(e);n.c_()&&n.S_&&n.b_(t.mutations)}(e,t)}catch(t){await ot(e,t)}oi(e)&&os(e)}function oi(e){return a8(e)&&!od(e).u_()&&e.K_.length>0}function os(e){od(e).start()}async function oa(e){od(e).C_()}async function oo(e){let t=od(e);for(let n of e.K_)t.b_(n.mutations)}async function ol(e,t,n){let r=e.K_.shift(),i=sg.from(r,t,n);await on(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await or(e)}async function ou(e,t){t&&od(e).S_&&await async function(e,t){var n;if(function(e){switch(e){case n8.OK:return n5();case n8.CANCELLED:case n8.UNKNOWN:case n8.DEADLINE_EXCEEDED:case n8.RESOURCE_EXHAUSTED:case n8.INTERNAL:case n8.UNAVAILABLE:case n8.UNAUTHENTICATED:return!1;case n8.INVALID_ARGUMENT:case n8.NOT_FOUND:case n8.ALREADY_EXISTS:case n8.PERMISSION_DENIED:case n8.FAILED_PRECONDITION:case n8.ABORTED:case n8.OUT_OF_RANGE:case n8.UNIMPLEMENTED:case n8.DATA_LOSS:return!0;default:return n5()}}(n=t.code)&&n!==n8.ABORTED){let n=e.K_.shift();od(e).h_(),await on(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await or(e)}}(e,t),oi(e)&&os(e)}async function oh(e,t){e.asyncQueue.verifyOperationInProgress(),n1(aX,"RemoteStore received new credentials");let n=a8(e);e.W_.add(3),await aZ(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await aJ(e)}async function oc(e,t){t?(e.W_.delete(2),await aJ(e)):t||(e.W_.add(2),await aZ(e),e.j_.set("Unknown"))}function of(e){var t,n,r;return e.J_||(e.J_=(t=e.datastore,n=e.asyncQueue,r={xo:a4.bind(null,e),No:a7.bind(null,e),Lo:a9.bind(null,e),p_:oe.bind(null,e)},t.M_(),new aK(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.J_.h_(),a5(e)?a3(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function od(e){var t,n,r;return e.Y_||(e.Y_=(t=e.datastore,n=e.asyncQueue,r={xo:()=>Promise.resolve(),No:oa.bind(null,e),Lo:ou.bind(null,e),D_:oo.bind(null,e),v_:ol.bind(null,e)},t.M_(),new aH(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.Y_.h_(),await or(e)):(await e.Y_.stop(),e.K_.length>0&&(n1(aX,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new n7,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new op(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new n4(n8.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(e,t){if(n2("AsyncQueue",`${t}: ${e}`),rT(e))return new n4(n8.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{static emptySet(e){return new om(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ry.comparator(t.key,n.key):(e,t)=>ry.comparator(e.key,t.key),this.keyedMap=iK(),this.sortedSet=new rA(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof om)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new om;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Z_=new rA(ry.comparator)}track(e){let t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):n5():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class ov{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ov(e,t,om.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iU(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class ob{constructor(){this.queries=oE(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=oE(),n.forEach((e,n)=>{for(let e of n.ta)e.onError(t)})}(this,new n4(n8.ABORTED,"Firestore shutting down"))}}function oE(){return new i$(e=>iF(e),iU)}async function oT(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.na()&&t.ra()&&(n=2):(i=new ow,n=+!t.ra());try{switch(n){case 0:i.ea=await e.onListen(r,!0);break;case 1:i.ea=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=og(n,`Initialization of query '${iV(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&oC(e)}async function o_(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?r=+!t.ra():!i.na()&&t.ra()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function oI(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(r)&&(n=!0);i.ea=r}}n&&oC(e)}function oS(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.ta)e.onError(n);e.queries.delete(t)}function oC(e){e.ia.forEach(e=>{e.next()})}(D=A||(A={}))._a="default",D.Cache="cache";class ox{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new ov(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=ov.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==A.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.key=e}}class oD{constructor(e){this.key=e}}class ok{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=iX(),this.mutatedKeys=iX(),this.ya=ij(e),this.wa=new om(this.ya)}get Sa(){return this.fa}ba(e,t){let n=t?t.Da:new oy,r=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=iB(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(n.track({type:3,doc:h}),d=!0):this.va(u,h)||(n.track({type:2,doc:h}),d=!0,(o&&this.ya(h,o)>0||l&&0>this.ya(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),d=!0):u&&!h&&(n.track({type:1,doc:u}),d=!0,(o||l)&&(a=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:a,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n5()}};return n(e)-n(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(n),r=null!=r&&r;let a=t&&!r?this.Fa():[],o=0===this.pa.size&&this.current&&!r?1:0,l=o!==this.ga;return(this.ga=o,0!==s.length||l)?{snapshot:new ov(this.query,e.wa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new oy,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=iX(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new oD(e))}),this.pa.forEach(n=>{e.has(n)||t.push(new oA(n))}),t}Oa(e){this.fa=e.gs,this.pa=iX();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return ov.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const oN="SyncEngine";class oR{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oL{constructor(e){this.key=e,this.Ba=!1}}class oO{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new i$(e=>iF(e),iU),this.qa=new Map,this.Qa=new Set,this.$a=new rA(ry.comparator),this.Ka=new Map,this.Ua=new al,this.Wa={},this.Ga=new Map,this.za=s8.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function oM(e,t,n=!0){let r;let i=o2(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Na()):r=await oU(i,t,n,!0),r}async function oP(e,t){let n=o2(e);await oU(n,t,!0,!1)}async function oU(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=iM(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(n=>n?(t=n,rE.resolve(t)):i.Hr.allocateTargetId(e).next(n=>(t=new sZ(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await oF(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&a0(e.remoteStore,o),a}async function oF(e,t,n,r,i){e.Ha=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await aC(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return oY(e,t.targetId,o.Ma),o.snapshot})(e,t,n,r);let s=await aC(e.localStore,t,!0),a=new ok(t,s.gs),o=a.ba(s.documents),l=sS.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oY(e,n,u.Ma);let h=new oR(t,n,a);return e.ka.set(t,h),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),u.snapshot}async function oV(e,t,n){let r=e.ka.get(t),i=e.qa.get(r.targetId);if(i.length>1)return e.qa.set(r.targetId,i.filter(e=>!iU(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await aS(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&a1(e.remoteStore,r.targetId),oW(e,r.targetId)}).catch(rb)):(oW(e,r.targetId),await aS(e.localStore,r.targetId,!0))}async function oB(e,t){let n=e.ka.get(t),r=e.qa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),a1(e.remoteStore,n.targetId))}async function oj(e,t,n){var r,i;let s=((r=e).remoteStore.remoteSyncer.applySuccessfulWrite=oK.bind(null,r),r.remoteStore.remoteSyncer.rejectFailedWrite=oH.bind(null,r),r);try{let e;let r=await function(e,t){let n,r;let i=rh.now(),s=t.reduce((e,t)=>e.add(t.key),iX());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iq,l=iX();return e.ds.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=i1(r.transform,e||null);null!=i&&(null===n&&(n=io.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new sl(e.key,t,function e(t){let n=[];return rC(t.fields,(t,r)=>{let i=new rm([t]);if(ir(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new rL(n)}(t.value.mapValue),st.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iH(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),i=r.batchId,(e=s.Wa[s.currentUser.toKey()])||(e=new rA(rl)),e=e.insert(i,n),s.Wa[s.currentUser.toKey()]=e,await oZ(s,r.changes),await or(s.remoteStore)}catch(t){let e=og(t,"Failed to persist write");n.reject(e)}}async function o$(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s,a,o;let l,u,h=e.ds.newChangeBuffer({trackRemovals:!0});r=e.Ts;let c=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;c.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(rM.EMPTY_BYTE_STRING,rc.min()).withLastLimboFreeSnapshotVersion(rc.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),r=r.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&c.push(e.Hr.updateTargetData(i,u))});let f=iq,d=iX();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),c.push((s=i,a=h,o=t.documentUpdates,l=iX(),u=iX(),o.forEach(e=>l=l.add(e)),a.getEntries(s,l).next(e=>{let t=iq;return o.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(u=u.add(n)),r.isNoDocument()&&r.version.isEqual(rc.min())?(a.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(a.addEntry(r),t=t.insert(n,r)):n1(aE,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Vs:t,fs:u}})).next(e=>{f=e.Vs,d=e.fs})),!n.isEqual(rc.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(t)}return rE.waitFor(c).next(()=>h.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,f,d)).next(()=>f)}).then(t=>(e.Ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ka.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||n5(),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?r.Ba||n5():t.removedDocuments.size>0&&(r.Ba||n5(),r.Ba=!1))}),await oZ(e,n,t)}catch(e){await rb(e)}}function oq(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ka.forEach((e,n)=>{let r=n.view.sa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.ta)e.sa(t)&&(n=!0)}),n&&oC(r),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oz(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ka.get(t),i=r&&r.key;if(i){let n=new rA(ry.comparator);n=n.insert(i,il.newNoDocument(i,rc.min()));let r=iX().add(i),s=new sI(rc.min(),new Map,new rA(rl),n,r);await o$(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),oJ(e)}else await aS(e.localStore,t,!1).then(()=>oW(e,t,n)).catch(rb)}async function oK(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=rE.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||n5(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iX();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});oQ(e,r,null),oG(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await oZ(e,i)}catch(e){await rb(e)}}async function oH(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||n5(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});oQ(e,t,n),oG(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await oZ(e,i)}catch(e){await rb(e)}}function oG(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function oQ(e,t,n){let r=e.Wa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Wa[e.currentUser.toKey()]=r}}function oW(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||oX(e,t)})}function oX(e,t){e.Qa.delete(t.path.canonicalString());let n=e.$a.get(t);null!==n&&(a1(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ka.delete(n),oJ(e))}function oY(e,t,n){for(let r of n)r instanceof oA?(e.Ua.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(n1(oN,"New document in limbo: "+n),e.Qa.add(r),oJ(e))}(e,r)):r instanceof oD?(n1(oN,"Document no longer in limbo: "+r.key),e.Ua.removeReference(r.key,t),e.Ua.containsKey(r.key)||oX(e,r.key)):n5()}function oJ(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let n=new ry(rp.fromString(t)),r=e.za.next();e.Ka.set(r,new oL(n)),e.$a=e.$a.insert(n,r),a0(e.remoteStore,new sZ(iM(new iR(n.path)),r,"TargetPurposeLimboResolution",r_.ae))}}async function oZ(e,t,n){let r=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((a,o)=>{s.push(e.Ha(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=av.Yi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rE.forEach(t,t=>rE.forEach(t.Hi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>rE.forEach(t.Ji,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!rT(e))throw e;n1(aE,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function o0(e,t){var n;if(!e.currentUser.isEqual(t)){n1(oN,"User change. New user:",t.toKey());let r=await a_(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new n4(n8.CANCELLED,n))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await oZ(e,r.Rs)}}function o1(e,t){let n=e.Ka.get(t);if(n&&n.Ba)return iX().add(n.key);{let n=iX(),r=e.qa.get(t);if(!r)return n;for(let t of r){let r=e.ka.get(t);n=n.unionWith(r.view.Sa)}return n}}function o2(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=o$.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oz.bind(null,e),e.La.p_=oI.bind(null,e.eventManager),e.La.Ja=oS.bind(null,e.eventManager),e}class o6{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=aj(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,n;return t=this.persistence,n=new ab,new aT(t,n,e.initialUser,this.serializer)}Xa(e){return new ap(am.ri,this.serializer)}Za(e){return new aA}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}o6.provider={build:()=>new o6};class o3 extends o6{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof ay||n5(),new ae(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?s5.withCacheSize(this.cacheSizeBytes):s5.DEFAULT;return new ap(e=>ay.ri(e,t),this.serializer)}}class o5{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oq(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o0.bind(null,this.syncEngine),await oc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ob}createDatastore(e){var t;let n=aj(e.databaseInfo.databaseId),r=new aV(e.databaseInfo);return t=e.authCredentials,new aQ(t,e.appCheckCredentials,r,n)}createRemoteStore(e){var t,n;return t=this.localStore,n=this.datastore,new aY(t,n,e.asyncQueue,e=>oq(this.syncEngine,e,0),aN.D()?new aN:new aD)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new oO(e,t,n,r,i,s);return a&&(o.ja=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){n1(aX,"RemoteStore shutting down."),e.W_.add(5),await aZ(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}o5.provider={build:()=>new o5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):n2("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4="FirestoreClient";class o7{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nY.UNAUTHENTICATED,this.clientId=ro.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{n1(o4,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n1(o4,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new n7;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=og(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function o9(e,t){e.asyncQueue.verifyOperationInProgress(),n1(o4,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await a_(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function le(e,t){e.asyncQueue.verifyOperationInProgress();let n=await lt(e);n1(o4,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>oh(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>oh(t.remoteStore,n)),e._onlineComponents=t}async function lt(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n1(o4,"Using user provided OfflineComponentProvider");try{await o9(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===n8.FAILED_PRECONDITION||t.code===n8.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;n6("Error using user provided cache. Falling back to memory cache: "+t),await o9(e,new o6)}}else n1(o4,"Using default OfflineComponentProvider"),await o9(e,new o3(void 0))}return e._offlineComponents}async function ln(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n1(o4,"Using user provided OnlineComponentProvider"),await le(e,e._uninitializedComponentsProvider._online)):(n1(o4,"Using default OnlineComponentProvider"),await le(e,new o5))),e._onlineComponents}async function lr(e){let t=await ln(e),n=t.eventManager;return n.onListen=oM.bind(null,t.syncEngine),n.onUnlisten=oV.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=oP.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=oB.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t,n){if(!n)throw new n4(n8.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lo(e){if(!ry.isDocumentKey(e))throw new n4(n8.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ll(e){if(ry.isDocumentKey(e))throw new n4(n8.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":n5()}function lh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new n4(n8.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=lu(e);throw new n4(n8.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firestore.googleapis.com";class lf{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new n4(n8.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new n4(n8.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new n4(n8.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=li(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new n4(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new n4(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new n4(n8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ld{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new n4(n8.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new n4(n8.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new re;switch(e.type){case"firstParty":return new ri(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new n4(n8.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ls.get(e);t&&(n1("ComponentProvider","Removing Datastore"),ls.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new lp(this.firestore,e,this._query)}}class lg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lg(this.firestore,e,this._key)}}class lm extends lp{constructor(e,t,n){super(e,t,new iR(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lg(this.firestore,null,new ry(e))}withConverter(e){return new lm(this.firestore,e,this._path)}}function ly(e,t,...n){if(e=eg(e),la("collection","path",t),e instanceof ld){let r=rp.fromString(t,...n);return ll(r),new lm(e,null,r)}{if(!(e instanceof lg||e instanceof lm))throw new n4(n8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(rp.fromString(t,...n));return ll(r),new lm(e.firestore,null,r)}}function lv(e,t,...n){if(e=eg(e),1==arguments.length&&(t=ro.newId()),la("doc","path",t),e instanceof ld){let r=rp.fromString(t,...n);return lo(r),new lg(e,null,new ry(r))}{if(!(e instanceof lg||e instanceof lm))throw new n4(n8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(rp.fromString(t,...n));return lo(r),new lg(e.firestore,e instanceof lm?e.converter:null,new ry(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="AsyncQueue";class lb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new a$(this,"async_queue_retry"),this.Su=()=>{let e=aB();e&&n1(lw,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=aB();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=aB();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new n7;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rT(e))throw e;n1(lw,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,n2("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let r=op.createAndSchedule(this,e,t,n,e=>this.Fu(e));return this.fu.push(r),r}Du(){this.gu&&n5()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}class lE extends ld{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new lb,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new lb(e),this._firestoreClient=void 0,await e}}}function lT(e){if(e._terminated)throw new n4(n8.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i,s;let a=e._freezeSettings(),o=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new rG(i,s,e._persistenceKey,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,li(a.experimentalLongPollingOptions),a.useFetchStreams));e._componentsProvider||(null===(n=a.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=a.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),e._firestoreClient=new o7(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new l_(rM.fromBase64String(e))}catch(e){throw new n4(n8.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new l_(rM.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new n4(n8.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rm(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new n4(n8.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new n4(n8.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rl(this._lat,e._lat)||rl(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/^__.*__$/;class lD{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sl(e,this.data,this.fieldMask,t,this.fieldTransforms):new so(e,this.data,t,this.fieldTransforms)}}class lk{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new sl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw n5()}}class lR{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new lR(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Ku(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return lq(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(lN(this.Lu)&&lA.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class lL{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||aj(e)}ju(e,t,n,r=!1){return new lR({Lu:e,methodName:t,zu:n,path:rm.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lO(e){let t=e._freezeSettings(),n=aj(e._databaseId);return new lL(e._databaseId,!!t.ignoreUndefinedProperties,n)}class lM extends lS{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lM}}function lP(e,t){if(lF(e=eg(e)))return lV("Unsupported field value:",t,e),lU(e,t);if(e instanceof lS)return function(e,t){if(!lN(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=lP(i,t.Uu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=eg(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rI(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iZ(r):iJ(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rh.fromDate(e);return{timestampValue:sF(t.serializer,n)}}if(e instanceof rh){let n=new rh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sF(t.serializer,n)}}if(e instanceof lC)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof l_)return{bytesValue:sV(t.serializer,e._byteString)};if(e instanceof lg){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sj(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof lx)return{mapValue:{fields:{[rX]:{stringValue:rZ},[r0]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return iJ(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${lu(e)}`)}(e,t)}function lU(e,t){let n={};return rx(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rC(e,(e,r)=>{let i=lP(r,t.qu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function lF(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rh||e instanceof lC||e instanceof l_||e instanceof lg||e instanceof lS||e instanceof lx)}function lV(e,t,n){if(!lF(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let r=lu(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function lB(e,t,n){if((t=eg(t))instanceof lI)return t._internalPath;if("string"==typeof t)return l$(e,t);throw lq("Field path arguments must be of type string or ",e,!1,void 0,n)}const lj=RegExp("[~\\*/\\[\\]]");function l$(e,t,n){if(t.search(lj)>=0)throw lq(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lI(...t.split("."))._internalPath}catch(r){throw lq(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lq(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new n4(n8.INVALID_ARGUMENT,o+e+l)}function lz(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lK{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lH(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lG("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lH extends lK{data(){return super.data()}}function lG(e,t){return"string"==typeof t?l$(e,t):t instanceof lI?t._internalPath:t._delegate._internalPath}class lQ{convertValue(e,t="none"){switch(r1(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rF(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rV(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw n5()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return rC(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new lx(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[r0].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>rF(e.doubleValue)))}convertGeoPoint(e){return new lC(rF(e.latitude),rF(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=rK(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rH(e));default:return null}}convertTimestamp(e){let t=rU(e);return new rh(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rp.fromString(e);sJ(n)||n5();let r=new rW(n.get(1),n.get(3)),i=new ry(n.popFirst(5));return r.isEqual(t)||n2(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lW{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lX extends lK{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lY(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lG("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lY extends lX{data(e={}){return super.data(e)}}class lJ{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lW(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lY(this._firestore,this._userDataWriter,n.key,n,new lW(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new n4(n8.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lY(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lW(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lY(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lW(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return n5()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class lZ extends lQ{constructor(e){super(),this.firestore=e}convertBytes(e){return new l_(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lg(this.firestore,null,t)}}function l0(e,t,n,...r){e=lh(e,lg);let i=lh(e.firestore,lE),s=lO(i);return l1(i,[("string"==typeof(t=eg(t))||t instanceof lI?function(e,t,n,r,i,s){let a=e.ju(1,t,n),o=[lB(t,r,n)],l=[i];if(s.length%2!=0)throw new n4(n8.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(lB(t,s[e])),l.push(s[e+1]);let u=[],h=io.empty();for(let e=o.length-1;e>=0;--e)if(!lz(u,o[e])){let t=o[e],n=l[e];n=eg(n);let r=a.Ku(t);if(n instanceof lM)u.push(t);else{let e=lP(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new lk(h,new rL(u),a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.ju(1,t,n);lV("Data must be an object, but it was:",i,r);let s=[],a=io.empty();return rC(r,(e,r)=>{let o=l$(t,e,n);r=eg(r);let l=i.Ku(o);if(r instanceof lM)s.push(o);else{let e=lP(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new lk(a,new rL(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,st.exists(!0))])}function l1(e,t){return function(e,t){let n=new n7;return e.asyncQueue.enqueueAndForget(async()=>oj(await ln(e).then(e=>e.syncEngine),t,n)),n.promise}(lT(e),t)}new WeakMap,function(e=!0){nJ="11.3.1",eX(new em("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new lE(new rn(t.getProvider("auth-internal")),new ra(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new n4(n8.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rW(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),e1(nW,nX,void 0),e1(nW,nX,"esm2017")}();const l2=function(e,t){let n=eY("object"==typeof e?e:function(e=ez){let t=eH.get(e);if(!t&&e===ez&&es())return e0();if(!t)throw eJ.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:rQ});if(!n._initialized){let e=ei("firestore");e&&function(e,t,n,r={}){var i;let s=(e=lh(e,ld))._getSettings(),a=`${t}:${n}`;if(s.host!==lc&&s.host!==a&&n6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=nY.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new n4(n8.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nY(s)}e._authCredentials=new rt(new n9(t,n))}}(n,...e)}return n}(e0({apiKey:"AIzaSyDcGAwDHCHCOaU73kCYg1dkGCZ9C3XvQng",authDomain:"habittracker-f3cf9.firebaseapp.com",projectId:"habittracker-f3cf9",storageBucket:"habittracker-f3cf9.firebasestorage.app",messagingSenderId:"128819965244",appId:"1:128819965244:web:de90745c1aef155c73c239",measurementId:"G-8WNP6BBD6P"}));document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("habit-form"),t=document.getElementById("habit-input"),n=document.getElementById("habit-list"),r=document.getElementById("total-habits"),i=document.getElementById("completion-rate"),s=[];async function a(){if(s.length>0)return s;try{return s=(await function(e){e=lh(e,lp);let t=lh(e.firestore,lE),n=lT(t),r=new lZ(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new n4(n8.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new n7;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new o8({next:n=>{s.su(),t.enqueueAndForget(()=>o_(e,a)),n.fromCache&&"server"===r.source?i.reject(new n4(n8.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new ox(n,s,{includeMetadataChanges:!0,Ta:!0});return oT(e,a)})(await lr(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new lJ(t,r,e,n)))}(ly(l2,"habits"))).docs.map(e=>({id:e.id,...e.data()}))}catch(e){return console.error("Error fetching habits:",e),[]}}async function o(){n.innerHTML="",(await a()).forEach(e=>{let t=document.createElement("li");t.className="habit-item",t.id=e.id,t.innerHTML=`
        <span class="habit-name">${e.name}</span>
        <input type="checkbox" ${e.completed?"checked":""} data-id="${e.id}" class="habit-checkbox">
        <button data-id="${e.id}" class="edit-button">Edit</button>
        <button data-id="${e.id}" class="delete-button">Delete</button>
      `,n.appendChild(t)}),f()}async function l(e){try{await function(e,t){var n;let r=lh(e.firestore,lE),i=lv(e),s=(n=e.converter)?n.toFirestore(t):t;return l1(r,[(function(e,t,n,r,i,s={}){let a,o;let l=e.ju(s.merge||s.mergeFields?2:0,t,n,i);lV("Data must be an object, but it was:",l,r);let u=lU(r,l);if(s.merge)a=new rL(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=lB(t,r,n);if(!l.contains(i))throw new n4(n8.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lz(e,i)||e.push(i)}a=new rL(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new lD(new io(u),a,o)})(lO(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,st.exists(!1))]).then(()=>i)}(ly(l2,"habits"),{name:e,completed:!1,history:[]}),o()}catch(e){console.error("Error adding habit: ",e)}}async function u(e){let t=document.getElementById(e).querySelector(".edit-input");if(t){let n=t.value.trim();try{await l0(lv(l2,"habits",e),{name:n}),o()}catch(e){console.error("Error updating habit:",e)}}}async function h(e,t){let n=new Date().toISOString().split("T")[0];try{let r=lv(l2,"habits",e);await l0(r,{completed:!t,history:[{date:n,completed:!t}]}),o()}catch(e){console.error("Error updating habit completion:",e)}}async function c(e){try{var t;await (t=lv(l2,"habits",e),l1(lh(t.firestore,lE),[new sf(t._key,st.none())])),o()}catch(e){console.error("Error deleting habit:",e)}}async function f(){let e=await a(),t=new Date().toISOString().split("T")[0],n=e.filter(e=>e.history?.some(e=>e.date===t&&e.completed)).length;r.textContent=e.length;let s=e.length>0?(n/e.length*100).toFixed(2):0;i.textContent=`${s}%`}e.addEventListener("submit",async e=>{e.preventDefault();let n=t.value.trim();n&&(await l(n),t.value="")}),n.addEventListener("click",async e=>{let t=e.target,n=t.dataset.id;t.classList.contains("delete-button")&&await c(n),t.classList.contains("habit-checkbox")&&await h(n,t.checked),t.classList.contains("edit-button")&&function(e,t){let n=document.getElementById(e).querySelector(".habit-name"),r=document.createElement("input");r.type="text",r.value=t,r.className="edit-input";let i=document.createElement("button");i.textContent="Save",i.className="save-button",i.dataset.id=e,n.innerHTML="",n.appendChild(r),n.appendChild(i)}(n,t.parentElement.querySelector(".habit-name").textContent),t.classList.contains("save-button")&&await u(n)}),o()}),habitForm.addEventListener("submit",async e=>{e.preventDefault();let t=function(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}(habitInput.value.trim());t&&(await addHabitToFirestore(t),habitInput.value="")}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)});var l6={};l6=new URL("service-worker.48c1c725.js",import.meta.url).toString();const l3=new URL(l6);"serviceWorker"in navigator&&navigator.serviceWorker.register(l3.href,{scope:"/HabitTracker/"}).then(e=>console.log("Service Worker Registered for scope:",l3.href,"with","file:///app.js")).catch(e=>console.error("Service Worker Error:",e));
//# sourceMappingURL=index.280488a3.js.map
