(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(30),c=n(15),l=n(19),h=n(20),v=n(14),f=n(52);n(72),n(58),n(59),n(4);function d(t,e){return(t-=e.toString().length)>0?"0".repeat(t)+e:e+""}var k=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(c.a)(this,Object(l.a)(e).apply(this,arguments))).routine=null,t.taskIndex=0,t.running=!1,t.elapsed=0,t.intervals=[],t}return Object(h.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(){this.running?this.stop():this.start()}},{key:"start",value:function(){var t=this;this.running=!0,this.intervals.push(window.setInterval((function(){return t.tick()}),1e3))}},{key:"stop",value:function(){this.running=!1,this.intervals.forEach((function(i){return window.clearInterval(i)}))}},{key:"tick",value:function(){this.elapsed++,0===this.time&&(this.routine&&this.taskIndex<this.routine.tasks.length?(this.taskIndex++,this.elapsed=0):this.stop())}},{key:"mounted",value:function(){var t=parseInt(this.$route.params.id);this.routine=this.$accessor.routines[t],this.routine||this.$router.push("/")}},{key:"task",get:function(){var t;return null===(t=this.routine)||void 0===t?void 0:t.tasks[this.taskIndex]}},{key:"taskTime",get:function(){return this.task?(time=this.task.time,(t=/(\d{2}):(\d{2})/.exec(time))?60*parseInt(t[1])+parseInt(t[2]):0):0;var time,t}},{key:"time",get:function(){return Math.max(this.taskTime-this.elapsed,0)}},{key:"displayTime",get:function(){return time=this.time,"".concat(d(2,Math.floor(time/60)),":").concat(d(2,time%60));var time}},{key:"value",get:function(){return 0===this.taskTime?100:this.elapsed/this.taskTime*100}}]),e}(f.Vue),w=y=k([f.Component],y),m=n(54),_=n(71),j=n.n(_),I=n(295),O=n(226),C=n(246),x=n(245),T=n(227),component=Object(m.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.routine?n("v-row",[n("v-col",[n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"subtitle-1"},[t._v(t._s(t.routine.title))])]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"display-1 font-weight-bold"},[t.task?[t._v("\n          "+t._s(t.task.title)+"\n        ")]:[t._v("\n          完了\n        ")]],2)]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"py-6"},[n("v-progress-circular",{attrs:{rotate:-90,size:200,width:10,value:t.value,color:"primary"}},[n("div",{staticClass:"display-2"},[t._v("\n            "+t._s(t.displayTime)+"\n          ")])])],1)]),t._v(" "),n("v-row",{staticClass:"pt-4",attrs:{justify:"center"}},[n("v-btn",{attrs:{icon:"",width:60,height:60,color:"primary"},on:{click:t.toggle}},[n("v-icon",{attrs:{size:50}},[t.running?[t._v("\n            fa-pause-circle\n          ")]:[t._v("\n            fa-play-circle\n          ")]],2)],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:I.a,VCol:O.a,VIcon:C.a,VProgressCircular:x.a,VRow:T.a})}}]);