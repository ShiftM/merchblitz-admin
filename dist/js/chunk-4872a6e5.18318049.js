(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4872a6e5"],{"25ae":function(t,e,a){
/*!*
* @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md.
*/
!function(e,a){t.exports=a()}(window,(function(){return function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){function a(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function s(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,i){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof e&&(i=e,e={}),e=e||{},i=i||function(){},o.type=e.type||"text/javascript",o.charset=e.charset||"utf8",o.async=!("async"in e)||!!e.async,o.src=t,e.attrs&&function(t,e){for(var a in e)t.setAttribute(a,e[a])}(o,e.attrs),e.text&&(o.text=""+e.text),("onload"in o?a:s)(o,i),o.onload||a(o,i),n.appendChild(o)}},function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s);let n;function o(t){if("CKEDITOR"in window)return Promise.resolve(CKEDITOR);if(t.length<1)throw new TypeError("CKEditor URL must be a non-empty string.");return n||(n=o.scriptLoader(t).then(t=>(n=void 0,t))),n}o.scriptLoader=t=>new Promise((e,a)=>{i()(t,t=>t?a(t):window.CKEDITOR?void e(CKEDITOR):a(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace.")))});var r={name:"ckeditor",render(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:t=>["classic","inline"].includes(t)},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.13.1/standard-all/ckeditor.js"},config:{type:Object,default:()=>{}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null}},mounted(){o(this.editorUrl).then(()=>{if(this.$_destroyed)return;const t=this.config||{};null!==this.readOnly&&(t.readOnly=this.readOnly);const e="inline"===this.type?"inline":"replace",a=this.$el.firstElementChild,s=this.instance=CKEDITOR[e](a,t);s.on("instanceReady",()=>{const t=this.value;s.fire("lockSnapshot"),s.setData(t,{callback:()=>{this.$_setUpEditorEvents();const e=s.getData();t!==e?(this.$once("input",()=>{this.$emit("ready",s)}),this.$emit("input",e)):this.$emit("ready",s),s.fire("unlockSnapshot")}})})})},beforeDestroy(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value(t){this.instance.getData()!==t&&this.instance.setData(t)},readOnly(t){this.instance.setReadOnly(t)}},methods:{$_setUpEditorEvents(){const t=this.instance;t.on("change",e=>{const a=t.getData();this.value!==a&&this.$emit("input",a,e,t)}),t.on("focus",e=>{this.$emit("focus",e,t)}),t.on("blur",e=>{this.$emit("blur",e,t)})}}};const l={install(t){t.component("ckeditor",r)},component:r};e.default=l}]).default}))},"3d60":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r}));var s,i=a("d225"),n=a("b0b4"),o=function(){function t(){Object(i["a"])(this,t)}return Object(n["a"])(t,[{key:"info",value:function(t){return s=window.axios.get(window.api_url+"/admin/events/info/"+t),s}},{key:"store",value:function(t){return s=window.axios.post(window.api_url+"/admin/events/store",t),s}},{key:"update",value:function(t,e){return s=window.axios.put(window.api_url+"/admin/events/update/"+e,t),s}},{key:"storeSchedule",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-schedule/store",t),s}},{key:"storeExhibitor",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-segment/store",t),s}},{key:"list",value:function(t){return s=window.axios.get(window.api_url+"/admin/events/index",{params:t}),s}},{key:"listFilter",value:function(t,e){return s=window.axios.get(window.api_url+"/admin/events/index?page="+t+e),s}},{key:"listFilterDate",value:function(t,e,a){return s=window.axios.get(window.api_url+"/admin/events/index?page="+t+"&from="+e+"&to="+a),s}},{key:"listBooths",value:function(){return s=window.axios.get(window.api_url+"/admin/events/get-booths"),s}},{key:"listEventsBooths",value:function(t,e){return s=window.axios.get(window.api_url+"/admin/event-booth/get-events-booths/"+t+"?page="+e),s}},{key:"assignBooth",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-booth/store",t),s}},{key:"deleteBooth",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-booth/delete",t),s}},{key:"listCompanies",value:function(){return s=window.axios.get(window.api_url+"/company/get-companies"),s}},{key:"assignCompany",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-company/store",t),s}},{key:"deleteCompany",value:function(t){return s=window.axios.post(window.api_url+"/admin/event-company/delete",t),s}},{key:"listEventsCompanies",value:function(t,e){return s=window.axios.get(window.api_url+"/admin/event-company/get-events-companies/"+t+"?page="+e),s}},{key:"uploadOrganizerLogo",value:function(t){var e=new FormData;return e.append("file",t),e.append("upload_path","eventOrganizers"),s=window.axios({method:"post",url:window.api_url+"/admin/upload/single/Event",data:e,headers:{"Content-Type":"multipart/form-data"}}),s}},{key:"uploadEventBanner",value:function(t,e){var a=new FormData;return a.append("file",t),a.append("upload_path",e),s=window.axios({method:"post",url:window.api_url+"/admin/upload/single/Event",data:a,headers:{"Content-Type":"multipart/form-data"}}),s}},{key:"uploadEventImages",value:function(t){var e=new FormData;return e.append("file",t),e.append("upload_path","eventImages"),s=window.axios({method:"post",url:window.api_url+"/admin/upload/single/Event",data:e,headers:{"Content-Type":"multipart/form-data"}}),s}},{key:"changeStatus",value:function(t){return s=window.axios.post(window.api_url+"/admin/events/update-status/"+t),s}}]),t}(),r=new o},c435:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid animated fadeIn h-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Title"}},[t._v("Event Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"form-control",class:{"error-border":t.errors.title},attrs:{type:"text",id:"Title"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}}),t.errors.title?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.title[0]))]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"organizer"}},[t._v("Organizer")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.organizer.name,expression:"data.organizer.name"}],staticClass:"form-control",class:{"error-border":t.errors["organizer.name"]},attrs:{type:"text",id:"organizer"},domProps:{value:t.data.organizer.name},on:{input:function(e){e.target.composing||t.$set(t.data.organizer,"name",e.target.value)}}}),t.errors["organizer.name"]?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors["organizer.name"][0]))]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventBanner"}},[t._v("Organizer Logo")]),a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("input",{ref:"orgLogo",attrs:{type:"file",id:"organizerLogo"},on:{change:function(e){return t.uploadOrganizer(e)}}})]),a("small",{staticClass:"d-block"},[t._v("Upload a copy of your logo. Max file size: 300kb")]),a("small",{staticClass:"d-block"},[t._v("Recommended Dimensions: (300x600)")]),a("small",{staticClass:"d-block text-info"},[t._v("(File types: jpg, png)")]),t.errors["organizer.imageUrl"]?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors["organizer.imageUrl"][0])+"\n                ")]):t._e()])]),a("div",{staticClass:"col-lg-7 col-12 upload-logo"},[a("div",{staticClass:"banner-container position-relative"},[a("div",{staticClass:"img-cont"},[t.data.organizer.imageUrl?a("i",{staticClass:"fa fa-close position-absolute img-close-btn",on:{click:t.removeOrganizerLogo}}):t._e(),a("img",{staticClass:"img-fluid",attrs:{src:t.data.organizer.imageUrl,alt:""}})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-3"},[a("label",{attrs:{for:"event-description"}},[t._v("Description")]),a("div",{attrs:{id:"app"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],staticClass:"form-control",class:{"error-border":t.errors.description},attrs:{rows:"10"},domProps:{value:t.data.description},on:{input:function(e){e.target.composing||t.$set(t.data,"description",e.target.value)}}}),t.errors.description?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.description[0]))]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventDate"}},[t._v("Start Date")]),a("VueCtkDateTimePicker",{attrs:{"minute-interval":"15",format:"YYYY-MM-DD h:mm a","no-button-now":""},model:{value:t.data.startDate,callback:function(e){t.$set(t.data,"startDate",e)},expression:"data.startDate"}}),t.errors.startDate?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.startDate[0]))]):t._e()],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventEndDate"}},[t._v("End Date")]),a("VueCtkDateTimePicker",{attrs:{"minute-interval":"15",format:"YYYY-MM-DD h:mm a",id:"startDay","no-button-now":""},model:{value:t.data.endDate,callback:function(e){t.$set(t.data,"endDate",e)},expression:"data.endDate"}}),t.errors.endDate?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.endDate[0]))]):t._e()],1)])]),a("h3",{staticClass:"mt-4 mb-4"},[t._v("Event Details")]),a("label",{attrs:{for:"eventBanner"}},[t._v("Header")]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-lg-5 col-12"},[a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("input",{ref:"eventImage",attrs:{type:"file",multiple:""},on:{change:function(e){return t.uploadImages(e)}}})]),t.errors.eventImages?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.eventImages[0]))]):t._e()])]),a("div",{staticClass:"row mb-5"},t._l(t.data.eventImages,(function(e,s){return a("div",{key:s,staticClass:"col-3 mb-5"},[a("div",{staticClass:"banner-container position-relative"},[a("i",{staticClass:"fa fa-close position-absolute img-close-btn",on:{click:function(e){return t.removeImage(s)}}}),a("img",{staticClass:"img-fluid",attrs:{src:e.fullPath,alt:""}})])])})),0),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-lg-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventLocation"}},[t._v("Location/venue")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.location,expression:"data.location"}],staticClass:"form-control",class:{"error-border":t.errors.location},attrs:{type:"text",id:"eventLocation"},domProps:{value:t.data.location},on:{input:function(e){e.target.composing||t.$set(t.data,"location",e.target.value)}}}),t.errors.location?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.location[0]))]):t._e()])]),a("div",{staticClass:"col-lg-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventCountry"}},[t._v("City")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.city,expression:"data.city"}],staticClass:"form-control",class:{"error-border":t.errors.city},attrs:{type:"text",id:"eventCity"},domProps:{value:t.data.city},on:{input:function(e){e.target.composing||t.$set(t.data,"city",e.target.value)}}}),t.errors.city?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.city[0]))]):t._e()])]),a("div",{staticClass:"col-lg-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventCountry"}},[t._v("Country")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.country,expression:"data.country"}],staticClass:"form-control",class:{"error-border":t.errors.country},attrs:{type:"text",id:"eventCountry"},domProps:{value:t.data.country},on:{input:function(e){e.target.composing||t.$set(t.data,"country",e.target.value)}}}),t.errors.country?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.country[0]))]):t._e()])])]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventAdmissionFee"}},[t._v("Admission Fee")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.admissionFee,expression:"data.admissionFee"}],staticClass:"form-control",class:{"error-border":t.errors.admissionFee},attrs:{type:"text",id:"eventAdmissionFee"},domProps:{value:t.data.admissionFee},on:{input:function(e){e.target.composing||t.$set(t.data,"admissionFee",e.target.value)}}}),t.errors.admissionFee?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.admissionFee[0]))]):t._e()])]),a("div",{staticClass:"col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventLink"}},[t._v("Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.link,expression:"data.link"}],staticClass:"form-control",class:{"error-border":t.errors.link},attrs:{type:"text",id:"eventLink",placeholder:"www.yourlink.com"},domProps:{value:t.data.link},on:{input:function(e){e.target.composing||t.$set(t.data,"link",e.target.value)}}}),t.errors.link?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.link[0]))]):t._e()])])]),a("h3",{staticClass:"mt-4 mb-4"},[t._v("Event Schedule")]),t._l(t.data.eventDays,(function(e,s){return a("div",{key:s,staticClass:"row event-schedule",attrs:{id:"day"+s}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row h-100 align-items-center"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.addMoreDay()}}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Add a Day\n                      ")]),t.data.eventDays.length>1?a("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"button"},on:{click:function(e){return t.removeDay(s)}}},[a("i",{staticClass:"fa fa-close"}),t._v("  Remove Day\n                      ")]):t._e()])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Day"}},[t._v("Day")]),a("VueCtkDateTimePicker",{attrs:{id:"daySched"+s,"only-date":t.demo[0].options.onlyDate,format:t.demo[0].options.dateFormat,formatted:t.demo[0].options.dateFormatted,label:t.demo[0].options.title},model:{value:e.date,callback:function(a){t.$set(e,"date",a)},expression:"per_day.date"}})],1)]),t._l(e.schedules,(function(i,n){return a("div",{key:n,staticClass:"col-12",attrs:{id:"day"+s+"timeslot"+n}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row h-100 align-items-center"},[t._m(1,!0),a("div",{staticClass:"col-6 text-right"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.addDaySchedule(s)}}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Add a timeslot\n                              ")]),e.schedules.length>1?a("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"button"},on:{click:function(e){return t.removeDaySchedule(s,n)}}},[a("i",{staticClass:"fa fa-close"}),t._v("  Remove\n                              ")]):t._e()])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"eventTitle"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:i.title,expression:"sched.title"}],staticClass:"form-control",class:{"error-border":t.errors["eventDays."+s+".schedules."+n+".title"]},attrs:{type:"text",id:"eventTitle",placeholder:"Ex. Registration, Game Hackathon Competition etc."},domProps:{value:i.title},on:{input:function(e){e.target.composing||t.$set(i,"title",e.target.value)}}}),t.errors["eventDays."+s+".schedules."+n+".title"]?a("small",{staticClass:"text-danger"},[t._v("\n                              "+t._s(t.errors["eventDays."+s+".schedules."+n+".title"][0])+"\n                            ")]):t._e()]),a("VueCtkDateTimePicker",{attrs:{id:"dayTimeslot"+n,label:t.demo[0].options.label,"only-time":t.demo[0].options.onlyTime,format:t.demo[0].options.format,formatted:t.demo[0].options.formatted,"minute-interval":t.demo[0].options.minuteInterval},model:{value:i.time,callback:function(e){t.$set(i,"time",e)},expression:"sched.time"}})],1)])])}))],2)])])])])})),a("hr",{staticClass:"custom-divider"}),a("h3",{staticClass:"mt-4 mb-4"},[t._v("Event Section")]),a("div",{staticClass:"row"},t._l(t.data.segments,(function(e,s){return a("div",{key:s,staticClass:"col-12",attrs:{id:"exhibitor"+s}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row h-100 align-items-center"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addExhibitor}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Add Exhibitors\n                      ")]),t.data.segments.length>1?a("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"button"},on:{click:function(e){return t.removeExhibitor(s)}}},[a("i",{staticClass:"fa fa-close"}),t._v("  Remove Exhibitor\n                      ")]):t._e()])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"CreateSection"}},[t._v("Create Section")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"ex.title"}],staticClass:"form-control",class:{"error-border":t.errors["segments."+s+".title"]},attrs:{type:"text",id:"CreateSection",placeholder:"Enter Section"},domProps:{value:e.title},on:{input:function(a){a.target.composing||t.$set(e,"title",a.target.value)}}}),t.errors["segments."+s+".title"]?a("small",{staticClass:"text-danger"},[t._v("\n                          "+t._s(t.errors["segments."+s+".title"][0])+"\n                        ")]):t._e()])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(2,!0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"UploadImage"}},[t._v("Upload Images")]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-lg-5 col-12"},[a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("input",{class:"segmentImages"+s,attrs:{type:"file",id:"UploadImage"},on:{change:function(e){return t.uploadSegmentImage(e,s)}}})]),t.errors["segments."+s+".locationImages.0.fileName"]?a("small",{staticClass:"text-danger"},[t._v("\n                                  "+t._s(t.errors["segments."+s+".locationImages.0.fileName"][0])+"\n                                ")]):t._e()]),t._l(e.locationImages,(function(e,i){return a("div",{key:i,staticClass:"col-lg-7 col-12 upload-images"},[a("div",{staticClass:"banner-container"},[a("div",{staticClass:"img-cont"},[e.path&&e.fileName?a("i",{staticClass:"fa fa-close position-absolute img-close-btn",on:{click:function(e){return t.removeSectionImage(s,i)}}}):t._e(),a("img",{staticClass:"img-fluid",attrs:{src:e.path+e.fileName,alt:""}})])])])}))],2)]),a("label",{attrs:{for:"eventLink"}},[t._v("Create List")]),t._l(e.segmentExhibitors,(function(i,n){return a("div",{key:n,staticClass:"row mb-3"},[a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.description,expression:"list.description"}],staticClass:"form-control",class:{"error-border":t.errors["segments."+s+".segmentExhibitors."+n+".description"]},attrs:{type:"text"},domProps:{value:i.description},on:{input:function(e){e.target.composing||t.$set(i,"description",e.target.value)}}}),t.errors["segments."+s+".segmentExhibitors."+n+".description"]?a("small",{staticClass:"text-danger"},[t._v("\n                                "+t._s(t.errors["segments."+s+".segmentExhibitors."+n+".description"][0])+"\n                              ")]):t._e()]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.addList(s)}}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Add\n                              ")]),e.segmentExhibitors.length>1?a("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"button"},on:{click:function(e){return t.removeList(s,n)}}},[a("i",{staticClass:"fa fa-close"}),t._v("  Remove\n                              ")]):t._e()])])}))],2)])])])])])])})),0),a("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:t.saveEvent}},[t._v("Submit All")]),a("button",{staticClass:"btn btn-danger mr-3 float-right",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")])],2)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("strong",[t._v("Add Event")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("h5",{staticClass:"m-0"},[a("i",{staticClass:"fa fa-calendar"}),t._v(" Schedule of the Day\n                              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"row h-100 align-items-center"},[a("div",{staticClass:"col-6"},[a("h5",{staticClass:"m-0"},[a("i",{staticClass:"fa fa-tasks"}),t._v(" Create section content\n                              ")])])])])}],n=(a("ac6a"),a("a481"),a("a026")),o=a("25ae"),r=a.n(o),l=a("3d60"),c=a("c788"),d=a("c1df"),u=a.n(d),m=a("e30a"),v=a.n(m),p=(a("b40d"),new l["a"]);new c["b"];n["default"].use(r.a),n["default"].component("VueCtkDateTimePicker",v.a);var f={data:function(){return{demo:[{options:{format:"h:mm a",formatted:"h:mm a",onlyTime:!0,color:"firebrick",minuteInterval:"15",label:"Select time",id:"TimePicker",noLabel:!0,onlyDate:!0,dateFormat:"YYYY-MM-DD",dateFormatted:"YYYY-MM-DD",title:"Select date"}}],active_id:"",data:{fullPath:"",startDate:u()(new Date).format("YYYY-MM-DD"),endDate:u()(new Date).format("YYYY-MM-DD"),organizer:{name:"",imageUrl:""},segments:[{title:"",segmentExhibitors:[{description:""}],locationImages:[{path:"",fileName:""}]}],eventDays:[{date:u()(new Date).format("YYYY-MM-DD"),schedules:[{title:"",time:"12:00"}]}],eventImages:[]},errors:{}}},methods:{convertIsoToDateTime:function(){this.data.startDate.replace("T",""),this.data.startDate.replace("Z",""),this.data.endDate.replace("T",""),this.data.endDate.replace("Z",""),this.data.startTime=this.data.startDate,this.data.endTime=this.data.endDate,this.data["eventDays"].forEach((function(t){t.date.replace("T",""),t.date.replace("Z",""),t["schedules"].forEach((function(t){var e=new Date(t["time"]);t["time"]=e.toISOString().substring(11,19)}))}))},cancel:function(){location.href="/events"},saveEvent:function(){this.$swal({title:"Loading...",text:"Please wait while saving the data.",icon:"/img/loader.gif",button:!1,closeOnClickOutside:!1}),this.data.startTime=this.data.startDate,this.data.endTime=this.data.endDate,this.$route.params.id?this.updateEvent():this.storeEvent()},storeEvent:function(){var t=this;return p.store(this.data).then((function(e){t.$swal({title:"Success!",icon:"success",text:"Successfully Saved!",type:"success",allowOutsideClick:!1}).then((function(t){location.reload()}))}),(function(e){t.errors=e.errors,t.$swal("Error!","Please fill up all required fields.","error")}))},updateEvent:function(){var t=this;return p.update(this.data,this.$route.params.id).then((function(e){t.$swal({title:"Success!",icon:"success",text:"Data has been updated!",type:"success",allowOutsideClick:!1}).then((function(t){location.reload()}))}),(function(e){t.errors=e.errors,t.$swal("Error!","Please fill up all required fields.","error")}))},uploadOrganizer:function(t){var e=this,a=t.target.files[0];return p.uploadOrganizerLogo(a).then((function(t){e.data.organizer.imageUrl=t.data.data.fullPath}))},uploadImages:function(t){for(var e=this,a=t.target.files,s=0;s<a.length;s++)p.uploadEventImages(a[s]).then((function(t){e.data.eventImages.push({path:t.data.data.path,fileName:t.data.data.fileName,fullPath:t.data.data.fullPath})}))},uploadSegmentImage:function(t,e){var a=this,s=t.target.files[0];return p.uploadEventBanner(s,"eventSegmentImages").then((function(t){console.log(t),a.data.segments[e].locationImages[0].path=t.data.data.path,a.data.segments[e].locationImages[0].fileName=t.data.data.fileName,a.data.segments[e].locationImages[0].fullPath=t.data.data.fullPath}))},removeSectionImage:function(t,e){$(".segmentImages"+e).val(""),this.data.segments[t].locationImages[0].path="",this.data.segments[t].locationImages[0].fileName="",this.data.segments[t].locationImages[0].fullPath=""},addMoreDay:function(){this.data.eventDays.push({date:new Date,schedules:[{title:"",time:"12:00"}]});var t=this.data.eventDays.length-1;this.moveDAy="#day"+t,setTimeout((function(){var e=document.getElementById("day"+t);e.scrollIntoView({block:"end",behavior:"smooth"})}),300)},addDaySchedule:function(t){this.data.eventDays[t].schedules.push({title:"",time:"12:00"});var e=this.data.eventDays[t].schedules.length-1;this.data.eventDays.length;this.moveDAy="#timeslot"+e,setTimeout((function(){var a=document.getElementById("day"+t+"timeslot"+e);a.scrollIntoView({block:"end",behavior:"smooth"})}),300)},removeDay:function(t){this.data.eventDays.splice(t,1);var e=this.data.eventDays.length-1,a=document.getElementById("day"+e);a.scrollIntoView({block:"end",behavior:"smooth"})},removeDaySchedule:function(t,e){this.data.eventDays[t].schedules.splice(e,1);e=this.data.eventDays.length-1;var a=this.data.eventDays[t].schedules.length-1,s=document.getElementById("day"+t+"timeslot"+a);s.scrollIntoView({block:"end",behavior:"smooth"})},addExhibitor:function(){this.data.segments.push({title:"",segmentExhibitors:[{description:""}],locationImages:[{path:"",fileName:""}]});var t=this.data.segments.length-1;setTimeout((function(){var e=document.getElementById("exhibitor"+t);e.scrollIntoView({block:"end",behavior:"smooth"})}),300)},removeExhibitor:function(t){this.data.segments.splice(t,1);var e=this.data.segments.length-1,a=document.getElementById("exhibitor"+e);a.scrollIntoView({block:"end",behavior:"smooth"})},addList:function(t){this.data.segments[t].segmentExhibitors.push({description:""})},removeList:function(t,e){this.data.segments[t].segmentExhibitors.splice(e,1)},removeOrganizerLogo:function(){this.data.organizer.imageUrl="";var t=this.$refs.orgLogo;t.type="text",t.type="file"},removeImage:function(t){this.data.eventImages.splice(t,1);var e=this.$refs.eventImage;e.type="text",e.type="file"},getEventInfo:function(){var t=this,e=this.$route.params.id;return p.info(e).then((function(e){t.data=e.data.data,t.convertIsoToDateTime(t.data)}))}},mounted:function(){this.$route.params.id&&this.getEventInfo()}},g=f,h=a("2877"),y=Object(h["a"])(g,s,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-4872a6e5.18318049.js.map