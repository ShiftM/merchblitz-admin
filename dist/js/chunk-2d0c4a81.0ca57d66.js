(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a81"],{"3c83":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("div",{staticClass:"collapse-title cell-ellipsis filters-collapse",attrs:{"data-toggle":"collapse","data-target":"#collapse"},on:{click:function(e){return t.toggleFilterCollapse()}}},[a("h5",{staticClass:"mb-0"},[t._v("Most Purchased Gem Package")]),t._m(0)]),a("form",{staticClass:"form-inline row collapse filters-cont",attrs:{action:"",id:"collapse"}},[t._m(1),a("div",{staticClass:"col-2 form-group"},[a("label",{staticClass:"pr-3 pb-2"},[t._v("Age Range")]),a("small"),a("div",{staticClass:"d-flex w-100 filter-age"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.age_from,expression:"filter.age_from"}],staticClass:"form-control",attrs:{type:"number",name:"age-start"},domProps:{value:t.filter.age_from},on:{keyup:function(e){return t.ageValidation(t.filter.age_from,t.filter.age_to)},input:function(e){e.target.composing||t.$set(t.filter,"age_from",e.target.value)}}}),a("label",{staticClass:"px-2"},[t._v("–")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.age_to,expression:"filter.age_to"}],staticClass:"form-control",attrs:{type:"number",name:"age-end"},domProps:{value:t.filter.age_to},on:{keyup:function(e){return t.ageValidation(t.filter.age_from,t.filter.age_to)},input:function(e){e.target.composing||t.$set(t.filter,"age_to",e.target.value)}}})]),t.validAge?t._e():a("small",{staticClass:"text-danger"},[t._v("Invalid age range")])]),a("div",{staticClass:"col-3 pr-3 form-group"},[a("label",{staticClass:"pb-2"},[t._v("Gender")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.gender,expression:"filter.gender"}],staticClass:"form-control w-100",attrs:{name:"gender"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),a("option",{attrs:{value:"Male"}},[t._v("Male")]),a("option",{attrs:{value:"Female"}},[t._v("Female")]),a("option",{attrs:{value:"Other"}},[t._v("Other")]),a("option",{attrs:{value:"Rather not say"}},[t._v("Rather not say")])])]),a("div",{staticClass:"col-4 pr-3 form-group"},[a("label",{staticClass:"pb-2"},[t._v("Interest")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.interest_option_id,expression:"filter.interest_option_id"}],staticClass:"form-control w-100",attrs:{name:"interest"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"interest_option_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._l(t.interestList,(function(e,r){return a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"col-3 form-group"},[a("label",{staticClass:"pb-2"},[t._v("City")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.city,expression:"filter.city"}],staticClass:"form-control w-100",attrs:{name:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"city",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._l(t.cityList,(function(e,r){return a("option",{key:r,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"col-5 mt-3 form-group"},[a("VueCtkDateTimePicker",{attrs:{"only-date":t.demo[0].options.onlyDate,format:t.demo[0].options.dateFormat,formatted:t.demo[0].options.dateFormatted,label:t.demo[0].options.dateFrom},on:{input:function(e){return t.dateValidation(t.filter.date_from,t.filter.date_to)}},model:{value:t.filter.date_from,callback:function(e){t.$set(t.filter,"date_from",e)},expression:"filter.date_from"}}),t.validDate?t._e():a("small",{staticClass:"text-danger"},[t._v("Invalid date range")])],1),a("div",{staticClass:"col-5 mt-3 form-group"},[a("VueCtkDateTimePicker",{attrs:{"only-date":t.demo[0].options.onlyDate,format:t.demo[0].options.dateFormat,formatted:t.demo[0].options.dateFormatted,label:t.demo[0].options.dateTo},on:{input:function(e){return t.dateValidation(t.filter.date_from,t.filter.date_to)}},model:{value:t.filter.date_to,callback:function(e){t.$set(t.filter,"date_to",e)},expression:"filter.date_to"}})],1),a("div",{staticClass:"col-2 mt-3 d-flex"},[a("button",{staticClass:"btn btn-primary form-control w-100 mr-1",attrs:{type:"button"},on:{click:function(e){return t.search()}}},[t._v("Apply Filters")]),a("button",{staticClass:"btn btn-danger form-control",attrs:{type:"button"},on:{click:function(e){return t.resetOptions()}}},[a("i",{staticClass:"icon-refresh"})])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(2),a("tbody",t._l(t.data.data,(function(e,r){return a("tr",[a("td",[a("b",[t._v(t._s(r+1))])]),a("td",[t._v(t._s(e.code))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.count))])])})),0)]),t.toPageCount(t.data.total,t.data.per_page)>1?a("paginate",{attrs:{"page-count":t.toPageCount(t.data.total,t.data.per_page),"prev-text":"Prev","next-text":"Next","container-class":"pagination","next-class":"page-link","prev-class":"page-link","page-class":"page-item","page-link-class":"page-link","click-handler":t.paginate},model:{value:t.filter.page,callback:function(e){t.$set(t.filter,"page",e)},expression:"filter.page"}}):t._e()],1)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"collapse-icon filter"},[a("span",{staticClass:"mr-2"},[t._v("Show Filters")]),a("i",{staticClass:"fa fa-chevron-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 mb-2"},[a("hr"),a("small",[a("b",[t._v("Search Filters")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"7%"}},[t._v("Rank")]),a("th",{attrs:{width:"25%"}},[t._v("Gem Package Code")]),a("th",{attrs:{width:"50%"}},[t._v("Gem Package Name")]),a("th",{attrs:{width:"18%"}},[t._v("No. of times purchased")])])])}],i=(a("f751"),a("96cf"),a("3b8d")),o=a("d87c"),s=a("b4d3"),l=a("2c0f"),c=a("a026"),u=(a("c1df"),a("e30a")),p=a.n(u);a("b40d");c["default"].component("VueCtkDateTimePicker",p.a);var d={data:function(){return{data:[],page_count:100,filter:{paginate:!0,per_page:10,page:1,age_from:null,age_to:null,gender:"",date_from:null,date_to:null,interest_option_id:"",city:""},date:{},demo:[{options:{format:"h:mm a",formatted:"h:mm a",onlyTime:!0,color:"firebrick",minuteInterval:"15",label:"Select time",id:"TimePicker",noLabel:!0,onlyDate:!0,dateFormat:"YYYY-MM-DD",dateFormatted:"YYYY-MM-DD",title:"Select date",dateFrom:"From",dateTo:"To"}}],filter_options:{paginate:!1},interestList:[],cityList:[]}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.list(this.filter);case 2:return t.next=4,this.getInterestOption(this.filter_options);case 4:return t.next=6,this.getCityOption(this.filter_options);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{search:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.validAge||!this.validDate){t.next=4;break}return this.filter=Object.assign(this.filter,e),t.next=4,this.list(this.filter);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),list:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].topPurchasedGemPackage(e);case 2:this.data=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),paginate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.filter.page=e,t.next=3,this.list(this.filter);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getInterestOption:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].list(this.filter_options);case 2:this.interestList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCityOption:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].list(this.filter_options);case 2:this.cityList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},f=d,m=a("2877"),v=Object(m["a"])(f,r,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c4a81.0ca57d66.js.map