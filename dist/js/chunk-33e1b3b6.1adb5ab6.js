(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33e1b3b6"],{"014b":function(e,t,n){"use strict";var r=n("e53d"),i=n("07e3"),o=n("8e60"),a=n("63b6"),s=n("9138"),c=n("ebfd").KEY,u=n("294c"),l=n("dbdb"),d=n("45f2"),p=n("62a0"),m=n("5168"),f=n("ccb9"),_=n("6718"),v=n("47ee"),h=n("9003"),y=n("e4ae"),g=n("f772"),b=n("241e"),w=n("36c3"),k=n("1bc3"),x=n("aebd"),O=n("a159"),S=n("0395"),C=n("bf0b"),j=n("9aa9"),R=n("d9f6"),q=n("c3a1"),E=C.f,P=R.f,N=S.f,L=r.Symbol,$=r.JSON,z=$&&$.stringify,F="prototype",D=m("_hidden"),I=m("toPrimitive"),A={}.propertyIsEnumerable,J=l("symbol-registry"),W=l("symbols"),M=l("op-symbols"),T=Object[F],Y="function"==typeof L&&!!j.f,K=r.QObject,U=!K||!K[F]||!K[F].findChild,G=o&&u((function(){return 7!=O(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=E(T,t);r&&delete T[t],P(e,t,n),r&&e!==T&&P(T,t,r)}:P,Q=function(e){var t=W[e]=O(L[F]);return t._k=e,t},B=Y&&"symbol"==typeof L.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof L},H=function(e,t,n){return e===T&&H(M,t,n),y(e),t=k(t,!0),y(n),i(W,t)?(n.enumerable?(i(e,D)&&e[D][t]&&(e[D][t]=!1),n=O(n,{enumerable:x(0,!1)})):(i(e,D)||P(e,D,x(1,{})),e[D][t]=!0),G(e,t,n)):P(e,t,n)},V=function(e,t){y(e);var n,r=v(t=w(t)),i=0,o=r.length;while(o>i)H(e,n=r[i++],t[n]);return e},X=function(e,t){return void 0===t?O(e):V(O(e),t)},Z=function(e){var t=A.call(this,e=k(e,!0));return!(this===T&&i(W,e)&&!i(M,e))&&(!(t||!i(this,e)||!i(W,e)||i(this,D)&&this[D][e])||t)},ee=function(e,t){if(e=w(e),t=k(t,!0),e!==T||!i(W,t)||i(M,t)){var n=E(e,t);return!n||!i(W,t)||i(e,D)&&e[D][t]||(n.enumerable=!0),n}},te=function(e){var t,n=N(w(e)),r=[],o=0;while(n.length>o)i(W,t=n[o++])||t==D||t==c||r.push(t);return r},ne=function(e){var t,n=e===T,r=N(n?M:w(e)),o=[],a=0;while(r.length>a)!i(W,t=r[a++])||n&&!i(T,t)||o.push(W[t]);return o};Y||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===T&&t.call(M,n),i(this,D)&&i(this[D],e)&&(this[D][e]=!1),G(this,e,x(1,n))};return o&&U&&G(T,e,{configurable:!0,set:t}),Q(e)},s(L[F],"toString",(function(){return this._k})),C.f=ee,R.f=H,n("6abf").f=S.f=te,n("355d").f=Z,j.f=ne,o&&!n("b8e3")&&s(T,"propertyIsEnumerable",Z,!0),f.f=function(e){return Q(m(e))}),a(a.G+a.W+a.F*!Y,{Symbol:L});for(var re="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ie=0;re.length>ie;)m(re[ie++]);for(var oe=q(m.store),ae=0;oe.length>ae;)_(oe[ae++]);a(a.S+a.F*!Y,"Symbol",{for:function(e){return i(J,e+="")?J[e]:J[e]=L(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in J)if(J[t]===e)return t},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!Y,"Object",{create:X,defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne});var se=u((function(){j.f(1)}));a(a.S+a.F*se,"Object",{getOwnPropertySymbols:function(e){return j.f(b(e))}}),$&&a(a.S+a.F*(!Y||u((function(){var e=L();return"[null]"!=z([e])||"{}"!=z({a:e})||"{}"!=z(Object(e))}))),"JSON",{stringify:function(e){var t,n,r=[e],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=t=r[1],(g(t)||void 0!==e)&&!B(e))return h(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!B(t))return t}),r[1]=t,z.apply($,r)}}),L[F][I]||n("35e8")(L[F],I,L[F].valueOf),d(L,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},"0395":function(e,t,n){var r=n("36c3"),i=n("6abf").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},"0d6d":function(e,t,n){var r=n("d3f4"),i=n("67ab").onFreeze;n("5eda")("freeze",(function(e){return function(t){return e&&r(t)?e(i(t)):t}}))},"2c0f":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,i=n("d225"),o=n("b0b4"),a=n("6db2"),s=n("f645"),c=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"store",value:function(e){return r=a["a"].client.post(s["a"].end_point.admin.e_commerce.city_options,e),r}},{key:"update",value:function(e,t){return r=a["a"].client.put(s["a"].end_point.admin.e_commerce.city_options+"/"+e,t),r}},{key:"list",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.city_options,{params:e}),r}},{key:"show",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.city_options+"/"+e),r}},{key:"delete",value:function(e){return r=a["a"].client.delete(s["a"].end_point.admin.e_commerce.city_options+"/"+e),r}}]),e}(),u=new c},3383:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,i=n("d225"),o=n("b0b4"),a=n("6db2"),s=n("f645"),c=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"store",value:function(e){return r=a["a"].client.post(s["a"].end_point.admin.e_commerce.country_options,e),r}},{key:"update",value:function(e,t){return r=a["a"].client.put(s["a"].end_point.admin.e_commerce.country_options+"/"+e,t),r}},{key:"list",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.country_options,{params:e}),r}},{key:"show",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.country_options+"/"+e),r}},{key:"delete",value:function(e){return r=a["a"].client.delete(s["a"].end_point.admin.e_commerce.country_options+"/"+e),r}}]),e}(),u=new c},"47ee":function(e,t,n){var r=n("c3a1"),i=n("9aa9"),o=n("355d");e.exports=function(e){var t=r(e),n=i.f;if(n){var a,s=n(e),c=o.f,u=0;while(s.length>u)c.call(e,a=s[u++])&&t.push(a)}return t}},"589a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,i=n("d225"),o=n("b0b4"),a=n("6db2"),s=n("f645"),c=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"store",value:function(e){return r=a["a"].client.post(s["a"].end_point.admin.e_commerce.region_options,e),r}},{key:"update",value:function(e,t){return r=a["a"].client.put(s["a"].end_point.admin.e_commerce.region_options+"/"+e,t),r}},{key:"list",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.region_options,{params:e}),r}},{key:"show",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.region_options+"/"+e),r}},{key:"delete",value:function(e){return r=a["a"].client.delete(s["a"].end_point.admin.e_commerce.region_options+"/"+e),r}}]),e}(),u=new c},"5d58":function(e,t,n){e.exports=n("d8d6")},6718:function(e,t,n){var r=n("e53d"),i=n("584a"),o=n("b8e3"),a=n("ccb9"),s=n("d9f6").f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},"67bb":function(e,t,n){e.exports=n("f921")},"69d3":function(e,t,n){n("6718")("asyncIterator")},"6abf":function(e,t,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"6db2":function(e,t,n){"use strict";n("551c"),n("5d58"),n("67bb");n("a481"),n("ac6a");var r=n("bc3a"),i=n.n(r),o=n("f645"),a=i.a.create({baseURL:o["a"].api_url,timeout:3e5,headers:{"Content-Type":"application/json"}});window.isLogin=function(){return document.cookie.indexOf("auth_token")>=0},a.interceptors.response.use((function(e){var t=localStorage.getItem("auth_token");return t&&(e.headers["api-token"]=t),e}),(function(e){return"/login"==window.location.pathname?Promise.reject(e.response.data):401!==e.response.status?e:(localStorage.removeItem("auth_token"),void(location.href="/login"))}));t["a"]={client:a}},"765d":function(e,t,n){n("6718")("observable")},"96f7":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,i=n("d225"),o=n("b0b4"),a=n("6db2"),s=n("f645"),c=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"store",value:function(e){return r=a["a"].client.post(s["a"].end_point.admin.e_commerce.province_options,e),r}},{key:"update",value:function(e,t){return r=a["a"].client.put(s["a"].end_point.admin.e_commerce.province_options+"/"+e,t),r}},{key:"list",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.province_options,{params:e}),r}},{key:"show",value:function(e){return r=a["a"].client.get(s["a"].end_point.admin.e_commerce.province_options+"/"+e),r}},{key:"delete",value:function(e){return r=a["a"].client.delete(s["a"].end_point.admin.e_commerce.province_options+"/"+e),r}}]),e}(),u=new c},aedf:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-body table-responsive"},[n("div",{staticClass:"col-12"},[n("form",{on:{submit:function(t){t.preventDefault(),e.$route.params.id?e.update():e.store()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-2"},[n("label",[e._v("Country")]),n("span",{staticClass:"text-danger"},[e._v(" *")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.data.country_option_id,expression:"data.country_option_id"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.data,"country_option_id",t.target.multiple?n:n[0])},function(t){return e.getRegion()}]}},[n("option",{attrs:{value:""}},[e._v("Select Country")]),e._l(e.countryList,(function(t,r){return n("option",{key:r,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),e.getError(e.errors,"country_option_id")?n("small",{staticClass:"text-danger"},[e._v(e._s(e.getError(e.errors,"country_option_id").detail))]):e._e()]),n("div",{staticClass:"col-12 mb-2"},[n("label",[e._v("Region")]),n("span",{staticClass:"text-danger"},[e._v(" *")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.data.region_option_id,expression:"data.region_option_id"}],staticClass:"form-control",attrs:{required:""},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.data,"region_option_id",t.target.multiple?n:n[0])},function(t){return e.getProvince()}]}},[n("option",{attrs:{value:""}},[e._v("Select Region")]),e._l(e.regionList,(function(t,r){return n("option",{key:r,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),e.getError(e.errors,"region_option_id")?n("small",{staticClass:"text-danger"},[e._v(e._s(e.getError(e.errors,"region_option_id").detail))]):e._e()]),n("div",{staticClass:"col-12 mb-2"},[n("label",[e._v("Province")]),n("span",{staticClass:"text-danger"},[e._v(" *")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.data.province_option_id,expression:"data.province_option_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.data,"province_option_id",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("Select Province")]),e._l(e.provinceList,(function(t,r){return n("option",{key:r,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),e.getError(e.errors,"province_option_id")?n("small",{staticClass:"text-danger"},[e._v(e._s(e.getError(e.errors,"province_option_id").detail))]):e._e()]),n("div",{staticClass:"col-12 mb-2"},[n("label",[e._v("City Name")]),n("span",{staticClass:"text-danger"},[e._v(" *")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"form-control",class:{"error-border":e.getError(e.errors,"name")},attrs:{type:"text",required:""},domProps:{value:e.data.name},on:{input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}}),e.getError(e.errors,"name")?n("small",{staticClass:"text-danger"},[e._v(e._s(e.getError(e.errors,"name").detail))]):e._e()]),n("div",{staticClass:"col-12 mt-2"},[n("button",{staticClass:"btn btn-success float-right",attrs:{type:"submit"}},[e._v("Submit")]),n("button",{staticClass:"btn btn-danger mr-3 float-right",attrs:{type:"button"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("Cancel")])])])])])])},i=[],o=(n("96cf"),n("3b8d")),a=n("2c0f"),s=n("96f7"),c=n("589a"),u=n("3383"),l=n("c788"),d={data:function(){return{data:{status_option_id:1,province_option_id:"",region_option_id:"",country_option_id:""},filter:{paginate:!1,status_option_id:1},is_new:!0,errors:[],provinceList:[],regionList:[],countryList:[]}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$route.params.id&&(this.show(this.$route.params.id),this.is_new=!1),console.log(this.provinceList),e.next=4,this.getProvince(this.filter);case 4:return e.next=6,this.getRegion(this.filter);case 6:return e.next=8,this.getCountry(this.filter);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{store:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].store(n.data);case 2:t=e.sent,422==t.code?n.errors=t.errors:(n.data={status_option_id:1},l["a"].successWithMessage("Success","Record Successfully saved."),n.$router.go(-1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l["a"].withConfirmation(t,"Are you sure you want to add this record?");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].update(n.$route.params.id,n.data);case 2:t=e.sent,422==t.code?n.errors=t.errors:(n.data={status_option_id:1},l["a"].successWithMessage("Success","Record Successfully Updated."),n.$router.go(-1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l["a"].withConfirmation(t,"Are you sure you want to update this record?");case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),show:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].show(t);case 2:this.data=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getProvince:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.data.region_option_id){e.next=7;break}return this.filter.region_option_id=this.data.region_option_id,e.next=4,s["a"].list(this.filter);case 4:this.provinceList=e.sent,e.next=8;break;case 7:this.provinceList=[];case 8:this.data.province_option_id="";case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRegion:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.data.country_option_id){e.next=7;break}return this.filter.country_option_id=this.data.country_option_id,e.next=4,c["a"].list(this.filter);case 4:this.regionList=e.sent,e.next=8;break;case 7:this.regionList=[];case 8:this.data.region_option_id="",this.data.province_option_id="";case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCountry:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].list(this.filter);case 2:this.countryList=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=d,m=n("2877"),f=Object(m["a"])(p,r,i,!1,null,null,null);t["default"]=f.exports},bf0b:function(e,t,n){var r=n("355d"),i=n("aebd"),o=n("36c3"),a=n("1bc3"),s=n("07e3"),c=n("794b"),u=Object.getOwnPropertyDescriptor;t.f=n("8e60")?u:function(e,t){if(e=o(e),t=a(t,!0),c)try{return u(e,t)}catch(n){}if(s(e,t))return i(!r.f.call(e,t),e[t])}},ccb9:function(e,t,n){t.f=n("5168")},d8d6:function(e,t,n){n("1654"),n("6c1c"),e.exports=n("ccb9").f("iterator")},ebfd:function(e,t,n){var r=n("62a0")("meta"),i=n("f772"),o=n("07e3"),a=n("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("294c")((function(){return c(Object.preventExtensions({}))})),l=function(e){a(e,r,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!c(e))return"F";if(!t)return"E";l(e)}return e[r].i},p=function(e,t){if(!o(e,r)){if(!c(e))return!0;if(!t)return!1;l(e)}return e[r].w},m=function(e){return u&&f.NEED&&c(e)&&!o(e,r)&&l(e),e},f=e.exports={KEY:r,NEED:!1,fastKey:d,getWeak:p,onFreeze:m}},f645:function(e,t,n){"use strict";n("0d6d");var r=Object.freeze({base_url:"/",api_url:"http://merchblitz-env-1.eba-m2eiva36.ap-southeast-1.elasticbeanstalk.com",api_analytics_url:"http://merchblitz-admin.s3-website-ap-southeast-1.amazonaws.com/",api_analytics_token:"Lvh5nmUYTsDUYYBKWcG1xCD7Ig7Cvp5G4pQzMHsQ",end_point:{admin:{e_commerce:{samples:"/admin/e-commerce/samples",items:"/admin/e-commerce/items",item_categories:"/admin/e-commerce/item-categories",category_headers:"/admin/e-commerce/category-headers",color_options:"/admin/e-commerce/color-options",size_options:"/admin/e-commerce/size-options",item_stocks:"/admin/e-commerce/item-stocks",item_variants:"/admin/e-commerce/item-variants",featured_items:"/admin/e-commerce/featured-items",orders:"/admin/e-commerce/orders",city_options:"/admin/e-commerce/city-option",province_options:"/admin/e-commerce/province-option",region_options:"/admin/e-commerce/region-option",country_options:"/admin/e-commerce/country-option",vouchers:"/admin/e-commerce/vouchers",pushNotifications:"/admin/e-commerce/push-notifications",reports:{most_sold_by_price:"/admin/e-commerce/reports/most-sold-by-price",most_sold_by_quantity:"/admin/e-commerce/reports/most-sold-by-quantity"}},analytics:{interest_options:"admin/analytics/interest-options"},wallet:{gem_packages:"admin/wallet/gem-packages",gem_setting:"admin/wallet/gem-setting",accounts:"admin/wallet/wallet-accounts",transfer_fund:"admin/wallet/transfer-fund",balance_inquiry:"admin/wallet/wallet-accounts/balance-inquiry",transaction_history:"admin/wallet/transaction-history",exchange_rate:"admin/wallet/exchange-rate",orders:"/admin/wallet/orders"},images:"/admin/images",upload:{image:"/admin/upload/single/image"},search:{customer_info:"admin/search/customer-info",order_info:"admin/search/order-info",gem_order_info:"admin/search/gem-order-info",item_info:"admin/search/item-info",wallet_account_info:"admin/search/wallet-account-info",event_info:"admin/search/event-info",company_info:"admin/search/company-info"},management:{company:"/company",administrator:"/admin/users",subscription_plan:"/admin/subscription-plan"}},analytics:{sales_report:{top_wish_listed_item:"/sales-report/top-wish-listed-item",top_viewed_category:"/sales-report/top-viewed-category",top_purchased_gem_package:"/sales-report/top-purchased-gem-package",top_online_store_searches:"/sales-report/top-online-searches",top_items_added_to_cart:"/sales-report/top-items-added-cart",top_items_removed_to_cart:"/sales-report/top-items-remove-from-cart",sales_by_customer_name:"/sales-report/sales-by-customer-name",sales_by_demographics:"/sales-report/sales-by-demographics",sales_by_item:"/sales-report/sales-by-item"},user_analytics:{user_list:"/user/user-lists",user_by_location:"/user/user-by-location",user_by_quest:"/user/user-by-quest",user_by_demographics:"/user/user-by-gender"},event_analytics:{number_of_times_quest_viewed:"/quests/most-viewed",number_of_quest_finished:"/quests/number-of-finished",check_ins:"/events/user-checked-ins",check_in_with_quests:"/events/user-checked-in-with-finish-quests",interest:"/events/user-event-interest",quest_viewed:"/quests/quest-analytics/view",quest_started:"/quests/quest-analytics/start",quest_finished:"/quests/quest-analytics/finish"}}}});t["a"]=r},f921:function(e,t,n){n("014b"),n("c207"),n("69d3"),n("765d"),e.exports=n("584a").Symbol}}]);
//# sourceMappingURL=chunk-33e1b3b6.1adb5ab6.js.map