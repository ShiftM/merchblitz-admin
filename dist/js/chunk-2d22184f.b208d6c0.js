(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22184f"],{cb60:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body table-responsive"},[a("div",{staticClass:"nav-tabs custom-tabs"},[a("div",{staticClass:"nav-item primary"},[a("button",{staticClass:"nav-link",class:{active:1==t.filter.type},attrs:{type:"button"},on:{click:function(e){t.search({status_option_id:1,page:1,type:1}),t.toggleTab()}}},[t._v("Clicked Interest Button, No Quest Done\n            ")])]),a("div",{staticClass:"nav-item primary"},[a("button",{staticClass:"nav-link",class:{active:2==t.filter.type},attrs:{type:"button"},on:{click:function(e){t.search({status_option_id:1,page:1,type:2}),t.toggleTab()}}},[t._v("Finished Quest, User Checked In\n            ")])]),a("div",{staticClass:"nav-item primary"},[a("button",{staticClass:"nav-link",class:{active:3==t.filter.type},attrs:{type:"button"},on:{click:function(e){t.search({status_option_id:1,page:1,type:3}),t.toggleTab()}}},[t._v("User Checked In, No Quest Done\n            ")])])]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"container-fluid mt-3 px-3"},[a("div",{staticClass:"cell-ellipsis"},[1==t.filter.type?a("div",{staticClass:"tab-content-header"},[a("h5",{staticClass:"mb-0"},[t._v("Clicked Interest Button, No Quest Done")]),a("span",[t._v("No. of Users:  "+t._s(t.data.total))])]):t._e(),2==t.filter.type?a("div",{staticClass:"tab-content-header"},[a("h5",{staticClass:"mb-0"},[t._v("Finished Quest, User Checked In")]),a("span",[t._v("No. of Users:  "+t._s(t.data.total))])]):t._e(),3==t.filter.type?a("div",{staticClass:"tab-content-header"},[a("h5",{staticClass:"mb-0"},[t._v("User Checked In, No Quest Done")]),a("span",[t._v("No. of Users: "+t._s(t.data.total))])]):t._e()]),a("hr"),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 d-flex align-items-end"},[a("div",{staticClass:"w-100 mr-4"},[t._m(0),a("div",{staticClass:"d-flex"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.eventId,expression:"filter.eventId"}],staticClass:"form-control",attrs:{name:"quest",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"eventId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._l(t.events,(function(e,s){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2)])]),a("button",{staticClass:"btn btn-primary mr-1",on:{click:function(e){return t.search(t.filter)}}},[a("i",{staticClass:"icon-magnifier"})]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.clear(t.filter)}}},[a("i",{staticClass:"icon-refresh"})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(1),a("tbody",t._l(t.data.data,(function(e,s){return a("tr",[a("td",{staticClass:"cell-wordbreak"},[a("p",[t._v(t._s(e.user.username))])]),a("td",[t._v(t._s(e.user.country_code)+t._s(e.user.phoneNumber))]),a("td",{staticClass:"cell-wordbreak"},[a("p",[t._v(t._s(e.user.email))])]),a("td",[t._v(t._s(e.user.gender))]),a("td",[t._v(t._s(e.user.birthday))]),a("td",[t._v(t._s(e.user.age))]),a("td",{staticClass:"cell-wordbreak"},[e.user.has_one_user_address?a("p",[t._v(" "+t._s(e.user.has_one_user_address.complete_address))]):t._e()]),a("td",{staticClass:"cell-wordbreak"},[t._v("\n                                      "+t._s(e.table?e.table.title:e.event.title)+"\n                                      ")])])})),0)]),t.toPageCount(t.data.total,t.data.per_page)>1?a("paginate",{attrs:{"page-count":t.toPageCount(t.data.total,t.data.per_page),"prev-text":"Prev","next-text":"Next","container-class":"pagination","next-class":"page-link","prev-class":"page-link","page-class":"page-item","page-link-class":"page-link","click-handler":t.paginate},model:{value:t.filter.page,callback:function(e){t.$set(t.filter,"page",e)},expression:"filter.page"}}):t._e()],1)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("b",[t._v("Event")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"15%"}},[t._v("Name")]),a("th",{attrs:{width:"8%"}},[t._v("Phone")]),a("th",{attrs:{width:"12%"}},[t._v("Email")]),a("th",{attrs:{width:"10%"}},[t._v("Gender")]),a("th",{attrs:{width:"12%"}},[t._v("Date of Birth")]),a("th",{attrs:{width:"5%"}},[t._v("Age")]),a("th",{attrs:{width:"23%"}},[t._v("Address")]),a("th",{attrs:{width:"15%"}},[t._v("Event")])])])}],r=(a("386d"),a("f751"),a("96cf"),a("3b8d")),i=(a("c788"),a("6dde")),c=a("3d60"),l={data:function(){return{data:{total:0},page_count:100,filter:{paginate:!0,per_page:10,page:1,status_option_id:1,type:1,eventId:""},filterEvent:{paginate:!1},events:[]}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.list(this.filter,this.type);case 2:this.event_list(this.filterEvent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{search:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.type=e.type,this.filter=Object.assign(this.filter,e),t.next=4,this.list(this.filter);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),list:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.type){t.next=4;break}return t.next=3,i["a"].interest(e);case 3:a=t.sent;case 4:if(2!=e.type){t.next=8;break}return t.next=7,i["a"].checkInWithQuest(e);case 7:a=t.sent;case 8:if(3!=e.type){t.next=12;break}return t.next=11,i["a"].checkIn(e);case 11:a=t.sent;case 12:this.data=a;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),clear:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.filter.eventId="",this.search(e);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),paginate:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.filter.page=e,t.next=3,this.list(this.filter);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),event_list:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["b"].list(e);case 2:a=t.sent,this.events=a.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},o=l,u=a("2877"),d=Object(u["a"])(o,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d22184f.b208d6c0.js.map