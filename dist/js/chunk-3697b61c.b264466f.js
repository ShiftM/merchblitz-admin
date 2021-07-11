(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3697b61c"],{"04f4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("div",{staticClass:"collapse-title cell-ellipsis filters-collapse",attrs:{"data-toggle":"collapse","data-target":"#collapse"},on:{click:function(e){return t.toggleFilterCollapse()}}},[a("h5",{staticClass:"mb-0"},[t._v("Users by Demographics")]),t._m(0)]),a("form",{staticClass:"form-inline row collapse filters-cont",attrs:{action:"",id:"collapse"}},[t._m(1),a("div",{staticClass:"col-2 form-group"},[a("label",{staticClass:"pr-3 pb-2"},[t._v("Age Range")]),a("small"),a("div",{staticClass:"d-flex w-100 filter-age"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.age_from,expression:"filter.age_from"}],staticClass:"form-control",attrs:{type:"number",name:"age-start"},domProps:{value:t.filter.age_from},on:{keyup:function(e){return t.ageValidation(t.filter.age_from,t.filter.age_to)},input:function(e){e.target.composing||t.$set(t.filter,"age_from",e.target.value)}}}),a("label",{staticClass:"px-2"},[t._v("–")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.age_to,expression:"filter.age_to"}],staticClass:"form-control",attrs:{type:"number",name:"age-end"},domProps:{value:t.filter.age_to},on:{keyup:function(e){return t.ageValidation(t.filter.age_from,t.filter.age_to)},input:function(e){e.target.composing||t.$set(t.filter,"age_to",e.target.value)}}})]),t.validAge?t._e():a("small",{staticClass:"text-danger"},[t._v("Invalid age range")])]),a("div",{staticClass:"col-5 pr-3 form-group"},[a("label",{staticClass:"pb-2"},[t._v("Interest")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.interest_option_id,expression:"filter.interest_option_id"}],staticClass:"form-control w-100",attrs:{name:"interest"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"interest_option_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._l(t.interestList,(function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.name)+"\n          ")])}))],2)]),a("div",{staticClass:"col-5 form-group"},[a("label",{staticClass:"pb-2"},[t._v("City")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.city,expression:"filter.city"}],staticClass:"form-control w-100",attrs:{name:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"city",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._l(t.cityList,(function(e,n){return a("option",{key:n,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"col-5 mt-3 form-group"},[a("VueCtkDateTimePicker",{attrs:{"only-date":t.demo[0].options.onlyDate,format:t.demo[0].options.dateFormat,formatted:t.demo[0].options.dateFormatted,label:t.demo[0].options.dateFrom},on:{input:function(e){return t.dateValidation(t.filter.date_from,t.filter.date_to)}},model:{value:t.filter.date_from,callback:function(e){t.$set(t.filter,"date_from",e)},expression:"filter.date_from"}}),t.validDate?t._e():a("small",{staticClass:"text-danger"},[t._v("Invalid date range")])],1),a("div",{staticClass:"col-5 mt-3 form-group"},[a("VueCtkDateTimePicker",{attrs:{"only-date":t.demo[0].options.onlyDate,format:t.demo[0].options.dateFormat,formatted:t.demo[0].options.dateFormatted,label:t.demo[0].options.dateTo},on:{input:function(e){return t.dateValidation(t.filter.date_from,t.filter.date_to)}},model:{value:t.filter.date_to,callback:function(e){t.$set(t.filter,"date_to",e)},expression:"filter.date_to"}})],1),a("div",{staticClass:"col-2 mt-3 d-flex"},[a("button",{staticClass:"btn btn-primary form-control w-100 mr-1",attrs:{type:"button"},on:{click:function(e){return t.search()}}},[t._v("Apply Filters")]),a("button",{staticClass:"btn btn-danger form-control",attrs:{type:"button"},on:{click:function(e){return t.resetOptions()}}},[a("i",{staticClass:"icon-refresh"})])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"chart-container"},[t.chartLoaded?a("bar-chart",{attrs:{chartdata:t.chartData,options:t.chartOptions}}):t._e()],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"collapse-icon filter"},[a("span",{staticClass:"mr-2"},[t._v("Show Filters")]),a("i",{staticClass:"fa fa-chevron-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 mb-2"},[a("hr"),a("small",[a("b",[t._v("Search Filters")])])])}],i=(a("ac6a"),a("f751"),a("96cf"),a("3b8d")),o=a("8cb3"),s=a("b4d3"),l=a("2c0f"),c=a("a026"),u=(a("c1df"),a("e30a")),f=a.n(u),d=(a("b40d"),a("7f10"));c["default"].component("VueCtkDateTimePicker",f.a);var p={components:{"bar-chart":d["a"]},data:function(){return{data:[],datasets:[],page_count:100,filter:{age_from:null,age_to:null,gender:"",date_from:null,date_to:null,interest:"",city:""},date:{},demo:[{options:{format:"h:mm a",formatted:"h:mm a",onlyTime:!0,color:"firebrick",minuteInterval:"15",label:"Select time",id:"TimePicker",noLabel:!0,onlyDate:!0,dateFormat:"YYYY-MM-DD",dateFormatted:"YYYY-MM-DD",title:"Select date",dateFrom:"From",dateTo:"To"}}],chartLoaded:!1,chartData:{labels:[],datasets:[{label:"Male",backgroundColor:"#55a1f2",data:[0]},{label:"Female",backgroundColor:"#f25562",data:[0]},{label:"Other",backgroundColor:"#f7db4f",data:[0]},{label:"Rather Not Say",backgroundColor:"#a6a5a1",data:[0]}]},chartOptions:{scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Age Range"}}],yAxes:[{scaleLabel:{display:!0,labelString:"No. of Users"}}]},responsive:!0,maintainAspectRatio:!1},filter_options:{paginate:!1},interestList:[],cityList:[]}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getInterestOption(this.filter_options);case 2:return t.next=4,this.getCityOption(this.filter_options);case 4:return t.next=6,this.list(this.filter);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{search:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.validAge||!this.validDate){t.next=5;break}return this.chartLoaded=!1,this.filter=Object.assign(this.filter,e),t.next=5,this.list(this.filter);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),list:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].userByDemographics(e);case 2:this.data=t.sent,a=[],n=[],r=[],i=[],s=[],this.data.forEach((function(t,e){a.push(t.range),console.log(t.hasOwnProperty("male")),t.hasOwnProperty("male")&&n.push(t.male),t.hasOwnProperty("female")&&r.push(t.female),t.hasOwnProperty("other")&&i.push(t.other),t.hasOwnProperty("rather_not_say")&&s.push(t.rather_not_say)})),this.chartData.datasets[0].data=n,this.chartData.datasets[1].data=r,this.chartData.datasets[2].data=i,this.chartData.datasets[3].data=s,this.chartData.labels=a,console.log(this.chartData.datasets),this.chartLoaded=!0;case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getInterestOption:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].list(this.filter_options);case 2:this.interestList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCityOption:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].list(this.filter_options);case 2:this.cityList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=p,_=a("2877"),h=Object(_["a"])(m,n,r,!1,null,null,null);e["default"]=h.exports},"2c0f":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n,r=a("d225"),i=a("b0b4"),o=a("6db2"),s=a("f645"),l=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,[{key:"store",value:function(t){return n=o["a"].client.post(s["a"].end_point.admin.e_commerce.city_options,t),n}},{key:"update",value:function(t,e){return n=o["a"].client.put(s["a"].end_point.admin.e_commerce.city_options+"/"+t,e),n}},{key:"list",value:function(t){return n=o["a"].client.get(s["a"].end_point.admin.e_commerce.city_options,{params:t}),n}},{key:"show",value:function(t){return n=o["a"].client.get(s["a"].end_point.admin.e_commerce.city_options+"/"+t),n}},{key:"delete",value:function(t){return n=o["a"].client.delete(s["a"].end_point.admin.e_commerce.city_options+"/"+t),n}}]),t}(),c=new l},"454f":function(t,e,a){a("46a7");var n=a("584a").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},"46a7":function(t,e,a){var n=a("63b6");n(n.S+n.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"85f2":function(t,e,a){t.exports=a("454f")},"8cb3":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n,r=a("d225"),i=a("b0b4"),o=a("aa8d"),s=a("f645"),l=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,[{key:"userList",value:function(t){return n=o["a"].client_analytics.get(s["a"].end_point.analytics.user_analytics.user_list,{params:t}),n}},{key:"userByLocation",value:function(t){return n=o["a"].client_analytics.get(s["a"].end_point.analytics.user_analytics.user_by_location,{params:t}),n}},{key:"userByQuest",value:function(t){return n=o["a"].client_analytics.get(s["a"].end_point.analytics.user_analytics.user_by_quest,{params:t}),n}},{key:"userByDemographics",value:function(t){return n=o["a"].client_analytics.get(s["a"].end_point.analytics.user_analytics.user_by_demographics,{params:t}),n}}]),t}(),c=new l},aa8d:function(t,e,a){"use strict";a("551c"),a("a481"),a("ac6a");var n=a("bc3a"),r=a.n(n),i=a("f645"),o=r.a.create({baseURL:i["a"].api_analytics_url,timeout:3e4,headers:{"Content-Type":"application/json",Authorization:i["a"].api_analytics_token}});function s(t){function e(t){return t.forEach((function(e,a){var n=s(e);t[a]=n})),t}function a(t){return t instanceof Array}function n(t){return t.replace(/([A-Z])/g,"_$1").toLowerCase()}function r(t){var r;if(a(t))r=e(t);else for(var i in r={},t)r[n(i)]=t[i],a(t[i])&&(r[n(i)]=e(t[i]));return r}return r(t)}window.isLogin=function(){return document.cookie.indexOf("auth_token")>=0},o.interceptors.response.use((function(t){var e=localStorage.getItem("auth_token");e&&(t.headers["Authorization"]="Bearer "+e);t=t.data.data;return s(t)}),(function(t){return"/login"==window.location.pathname?Promise.reject(t.response.data):401!==t.response.status?t.response.data:(localStorage.removeItem("auth_token"),void(location.href="/login"))})),e["a"]={client_analytics:o}},b0b4:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("85f2"),r=a.n(n);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(t,n.key,n)}}function o(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}},b4d3:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n,r=a("d225"),i=a("b0b4"),o=a("6db2"),s=a("f645"),l=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,[{key:"store",value:function(t){return n=o["a"].client.post(s["a"].end_point.admin.analytics.interest_options,t),n}},{key:"update",value:function(t,e){return n=o["a"].client.put(s["a"].end_point.admin.analytics.interest_options+"/"+t,e),n}},{key:"list",value:function(t){return n=o["a"].client.get(s["a"].end_point.admin.analytics.interest_options,{params:t}),n}},{key:"show",value:function(t){return n=o["a"].client.get(s["a"].end_point.admin.analytics.interest_options+"/"+t),n}},{key:"delete",value:function(t){return n=o["a"].client.delete(s["a"].end_point.admin.analytics.interest_options+"/"+t),n}}]),t}(),c=new l},d225:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=chunk-3697b61c.b264466f.js.map