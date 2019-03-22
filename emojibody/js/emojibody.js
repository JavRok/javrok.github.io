!function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/js/",i(i.s=2)}([function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0),r(1);function o(e,t){t.appendChild(document.createTextNode(e)),t.appendChild(document.createElement("br"))}var n=function(o,s,a,c){return new(a||(a=Promise))(function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function n(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new a(function(e){e(t.value)}).then(r,n)}i((c=c.apply(o,s||[])).next())})},s=function(r,n){var i,o,s,e,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=n.call(r,a)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},a=document.getElementById("log"),c=function(){function e(e){this.hasGetUserMedia=!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia),this.hasCameraAccess=!1,this.devices=null,this.currentDevice=-1,this.videoElem=e}return e.prototype.getCameras=function(){return n(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.hasGetUserMedia?[4,navigator.mediaDevices.enumerateDevices()]:(console.log("getUserMedia() is not supported by your browser"),[2,null]);case 1:return t=e.sent(),this.devices=t.filter(function(e){return"videoinput"===e.kind}),[2,this.devices];case 2:return e.sent(),[2,null];case 3:return[2]}})})},e.prototype.getCameraPermission=function(){return n(this,void 0,void 0,function(){var t,r,n,i=this;return s(this,function(e){switch(e.label){case 0:return e.trys.push([0,4,,5]),this.hasGetUserMedia?this.devices?[3,2]:[4,this.getCameras()]:(console.log("getUserMedia() is not supported by your browser"),[2,null]);case 1:e.sent(),e.label=2;case 2:return null===this.devices||0===this.devices.length?(console.log("No cameras available"),o("No cameras available",a),[2,null]):(t={video:{deviceId:{exact:this.devices[0].deviceId}},audio:!1},r=this,[4,navigator.mediaDevices.getUserMedia(t)]);case 3:return r.currentStream=e.sent(),this.currentDevice=0,this.videoElem.srcObject=this.currentStream,this.videoElem.onloadedmetadata=function(){console.log("Video resolution: ",i.videoElem.videoWidth,i.videoElem.videoHeight),i.cameraResolution={width:i.videoElem.videoWidth,height:i.videoElem.videoHeight}},[2,!0];case 4:if(n=e.sent(),console.error("getUserMedia error: "+n.name,n),"ConstraintNotSatisfiedError"===n.name)throw"The constraints are not supported ";if("PermissionDeniedError"===n.name)throw"User denied permission to access the camera. Too bad.";return[3,5];case 5:return[2]}})})},e.prototype.stopCurrentStream=function(){this.currentStream&&(this.currentStream.getVideoTracks().forEach(function(e){e.stop()}),this.videoElem.srcObject=null)},e.prototype.selectNextCamera=function(){return n(this,void 0,void 0,function(){var t,r,n,i=this;return s(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.hasGetUserMedia?this.devices.length<2?(console.log("There's only one camera, can't switch"),o("There's only one camera, can't switch",a),[2,null]):(this.currentDevice=(this.currentDevice+1)%this.devices.length,t={video:{deviceId:{exact:this.devices[this.currentDevice].deviceId}},audio:!1},this.stopCurrentStream(),r=this,[4,navigator.mediaDevices.getUserMedia(t)]):(console.log("getUserMedia() is not supported by your browser"),[2,null]);case 1:return r.currentStream=e.sent(),this.videoElem.srcObject=this.currentStream,this.videoElem.onloadedmetadata=function(){console.log("Video resolution: ",i.videoElem.videoWidth,i.videoElem.videoHeight),i.cameraResolution={width:i.videoElem.videoWidth,height:i.videoElem.videoHeight}},[2,!0];case 2:if(n=e.sent(),console.error("getUserMedia error: "+n.name,n),o("ERR "+n,a),"ConstraintNotSatisfiedError"===n.name)throw"The constraints are not supported ";if("PermissionDeniedError"===n.name)throw"User denied permission to access the camera. Too bad.";return[3,3];case 3:return[2]}})})},e}(),u=function(o,s,a,c){return new(a||(a=Promise))(function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function n(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new a(function(e){e(t.value)}).then(r,n)}i((c=c.apply(o,s||[])).next())})},l=function(r,n){var i,o,s,e,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=n.call(r,a)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},d=document.querySelector(".video"),h=document.getElementById("log"),f=document.querySelector(".switch-camera");!function(){u(this,void 0,void 0,function(){var t,r,n,i=this;return l(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,(t=new c(d)).getCameraPermission()];case 1:return e.sent()?[4,t.getCameras()]:(o("User denied camera use 😒",h),[2]);case 2:return(r=e.sent())&&1<r.length?f.addEventListener("click",function(e){return u(i,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return d.classList.add("switching"),[4,function(r){return new Promise(function(e,t){return setTimeout(e,r)})}(300)];case 1:return e.sent(),[4,t.selectNextCamera()];case 2:return e.sent(),d.classList.remove("switching"),[2]}})})}):f.classList.add("hidden"),[3,4];case 3:return n=e.sent(),console.log(n),o("exc"+n,h),d.classList.remove("switching"),[3,4];case 4:return[2]}})})}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL01lZGlhQWNjZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImxvZ1RvRG9tIiwidGV4dCIsImVsZW0iLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50IiwibG9nVGV4dCIsImdldEVsZW1lbnRCeUlkIiwiTWVkaWFBY2Nlc3NfTWVkaWFBY2Nlc3MiLCJNZWRpYUFjY2VzcyIsInZpZGVvIiwidGhpcyIsImhhc0dldFVzZXJNZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImhhc0NhbWVyYUFjY2VzcyIsImRldmljZXMiLCJjdXJyZW50RGV2aWNlIiwidmlkZW9FbGVtIiwiZ2V0Q2FtZXJhcyIsImVudW1lcmF0ZURldmljZXMiLCJjb25zb2xlIiwibG9nIiwiX2EiLCJzZW50IiwiZmlsdGVyIiwiZGV2aWNlIiwia2luZCIsImdldENhbWVyYVBlcm1pc3Npb24iLCJfYiIsImxlbmd0aCIsImNvbnN0cmFpbnRzIiwiZGV2aWNlSWQiLCJleGFjdCIsImF1ZGlvIiwiY3VycmVudFN0cmVhbSIsInNyY09iamVjdCIsIm9ubG9hZGVkbWV0YWRhdGEiLCJfdGhpcyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImNhbWVyYVJlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImVycm9yIiwiZXJyXzEiLCJzdG9wQ3VycmVudFN0cmVhbSIsImdldFZpZGVvVHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsInNlbGVjdE5leHRDYW1lcmEiLCJlcnJfMiIsInF1ZXJ5U2VsZWN0b3IiLCJqc19sb2dUZXh0IiwiY2FtZXJhU3dpdGNoQnRuIiwibWVkaWFBY2Nlc3NfMSIsImNhbWVyYXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwianNfYXdhaXRlciIsImNsYXNzTGlzdCIsImFkZCIsIm1zIiwiUHJvbWlzZSIsImoiLCJzZXRUaW1lb3V0Iiwid2FpdCIsInJlbW92ZSIsImVfMSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFB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RUFqSkEsK3lDQ0dNQyxFQUEwQlAsU0FBU21ELGNBQWMsVUFDakRDLEVBQVVwRCxTQUFTSSxlQUFlLE9BQ2xDaUQsRUFBK0JyRCxTQUFTbUQsY0FBYyxtQkFFNUQsNkdBRzJCLGlDQURiRyxFQUFjLElBQUlqRCxFQUFZRSxJQUNDbUIsOEJBQ3JDLE9BRG1CTCxFQUFBQyxPQUtILEdBQU1nQyxFQUFZckMsZUFIOUJyQixFQUFTLDRCQUE2QndELEdBQ3RDLG1CQUVFRyxFQUFVbEMsRUFBQUMsU0FDZ0IsRUFBakJpQyxFQUFRM0IsT0FFbkJ5QixFQUFnQkcsaUJBQWlCLFFBQVMsU0FBTUMsR0FBRyxPQUFBQyxFQUFBdEIsT0FBQSxxRUFHL0MsT0FEQTdCLEVBQU1vRCxVQUFVQyxJQUFJLGFBQ3BCLEdGcEJJLFNBQUNDLEdBQWUsV0FBSUMsUUFBUSxTQUFDcEYsRUFBR3FGLEdBQU0sT0FBQUMsV0FBV3RGLEVBQUdtRixLRW9CbERJLENBQUssYUFDWCxPQURBNUMsRUFBQUMsT0FDQSxHQUFNZ0MsRUFBWUwsa0NBQWxCNUIsRUFBQUMsT0FDQWYsRUFBTW9ELFVBQVVPLE9BQU8sd0JBSTNCYixFQUFnQk0sVUFBVUMsSUFBSSx5Q0FHbEN6QyxRQUFRQyxJQUFJK0MsR0FDWnZFLEVBQVMsTUFBUXVFLEVBQUdmLEdBQ3BCN0MsRUFBTW9ELFVBQVVPLE9BQU8seUNBSS9CRSIsImZpbGUiOiJlbW9qaWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvRG9tKHRleHQ6IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgZWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlcikgPT4gbmV3IFByb21pc2UoKHIsIGopID0+IHNldFRpbWVvdXQociwgbXMpKTtcclxuIiwiaW1wb3J0IHsgbG9nVG9Eb20gfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgbG9nVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2cnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYUFjY2VzcyB7XHJcbiAgICAvLyBUcnVlIGlmIGJyb3dzZXIgaXMgY29tcGF0aWJsZVxyXG4gICAgcHVibGljIGhhc0dldFVzZXJNZWRpYTogYm9vbGVhbjtcclxuICAgIC8vIFRydWUgaXMgdXNlciBoYXMgZ3JhbnRlZCBhY2Nlc3NcclxuICAgIHB1YmxpYyBoYXNDYW1lcmFBY2Nlc3M6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gTGlzdCBvZiBjYW1lcmFzIGF2YWlsYWJsZVxyXG4gICAgcHJpdmF0ZSBkZXZpY2VzOiBhbnlbXTtcclxuICAgIC8vIEluZGV4IG9mIHRoZSBhY3RpdmUgY2FtZXJhXHJcbiAgICBwcml2YXRlIGN1cnJlbnREZXZpY2U6IG51bWJlcjtcclxuICAgIC8vIEN1cnJlbnQgY2FtZXJhIHJlc29sdXRpb24sIG9ubHkgYXZhaWxhYmxlIHVudGlsIHN0cmVhbSBpcyBwYXNzZWQgdG8gPHZpZGVvPiBlbGVtZW50XHJcbiAgICBwcml2YXRlIGNhbWVyYVJlc29sdXRpb246IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcclxuICAgIC8vIEN1cnJlbnQgYWN0aXZlIGNhbWVyYSBzdHJlYW1cclxuICAgIHByaXZhdGUgY3VycmVudFN0cmVhbTogTWVkaWFTdHJlYW07XHJcbiAgICAvLyBWaWRlbyBIVE1MIGVsZW1lbnQgaW4gd2hpY2ggdG8gb3V0cHV0IHRoZSBzdHJlYW1cclxuICAgIHByaXZhdGUgdmlkZW9FbGVtOiBIVE1MVmlkZW9FbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaGFzR2V0VXNlck1lZGlhID0gISEobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSk7XHJcbiAgICAgICAgdGhpcy5oYXNDYW1lcmFBY2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRldmljZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERldmljZSA9IC0xO1xyXG4gICAgICAgIHRoaXMudmlkZW9FbGVtID0gdmlkZW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldENhbWVyYXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzR2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VXNlck1lZGlhKCkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2Uua2luZCA9PT0gJ3ZpZGVvaW5wdXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlcztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogQXNrcyB0aGUgdXNlciBmb3IgYWNjZXNzIHRvIHRoZSBjYW1lcmEocykuIElmIGdyYW50ZWQsIHNlbGVjdHMgdGhlIDFzdCBjYW1lcmEgaW4gdGhlIGxpc3Qgb2YgZGV2aWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENhbWVyYVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzR2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VXNlck1lZGlhKCkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV2aWNlcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDYW1lcmFzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlcyA9PT0gbnVsbCB8fCB0aGlzLmRldmljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gY2FtZXJhcyBhdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGxvZ1RvRG9tKCdObyBjYW1lcmFzIGF2YWlsYWJsZScsIGxvZ1RleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdCAxc3QgY2FtZXJhIGluIGxpc3Qgb2YgZGV2aWNlc1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlSWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRoaXMuZGV2aWNlc1swXS5kZXZpY2VJZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGV2aWNlID0gMDtcclxuICAgICAgICAgICAgLy8gKHdpbmRvdyBhcyBhbnkpLnN0cmVhbSA9IGN1cnJlbnRTdHJlYW07IC8vIG1ha2UgdmFyaWFibGUgYXZhaWxhYmxlIHRvIGJyb3dzZXIgY29uc29sZVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvRWxlbS5zcmNPYmplY3QgPSB0aGlzLmN1cnJlbnRTdHJlYW07XHJcbiAgICAgICAgICAgIC8vIFdlIGNhbiBvbmx5IGtub3cgdGhlIHJlc29sdXRpb24gd2hlbiB3ZSBwYXNzIHRoZSBzdHJlYW0gdG8gdGhlIDx2aWRlbz4gZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvRWxlbS5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZpZGVvIHJlc29sdXRpb246ICcsIHRoaXMudmlkZW9FbGVtLnZpZGVvV2lkdGgsIHRoaXMudmlkZW9FbGVtLnZpZGVvSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhUmVzb2x1dGlvbiA9IHsgd2lkdGg6IHRoaXMudmlkZW9FbGVtLnZpZGVvV2lkdGgsIGhlaWdodDogdGhpcy52aWRlb0VsZW0udmlkZW9IZWlnaHQgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFVzZXJNZWRpYSBlcnJvcjogJyArIGVyci5uYW1lLCBlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnVGhlIGNvbnN0cmFpbnRzIGFyZSBub3Qgc3VwcG9ydGVkICc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnVXNlciBkZW5pZWQgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhlIGNhbWVyYS4gVG9vIGJhZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOZWVkZWQgZGVpbml0aWFsaXphdGlvbiBmb3IgY2FtZXJhIHN3aXRjaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcEN1cnJlbnRTdHJlYW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmVhbSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtLnNyY09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZWxlY3ROZXh0Q2FtZXJhKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0dldFVzZXJNZWRpYSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSgpIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUncyBvbmx5IG9uZSBjYW1lcmEsIGNhbid0IHN3aXRjaFwiKTtcclxuICAgICAgICAgICAgICAgIGxvZ1RvRG9tKFwiVGhlcmUncyBvbmx5IG9uZSBjYW1lcmEsIGNhbid0IHN3aXRjaFwiLCBsb2dUZXh0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOZXh0IGNhbWVyYSBhdmFpbGFibGVcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGV2aWNlID0gKHRoaXMuY3VycmVudERldmljZSArIDEpICUgdGhpcy5kZXZpY2VzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdGhpcy5kZXZpY2VzW3RoaXMuY3VycmVudERldmljZV0uZGV2aWNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhdWRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEN1cnJlbnRTdHJlYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xyXG4gICAgICAgICAgICAvLyAod2luZG93IGFzIGFueSkuc3RyZWFtID0gY3VycmVudFN0cmVhbTsgLy8gbWFrZSB2YXJpYWJsZSBhdmFpbGFibGUgdG8gYnJvd3NlciBjb25zb2xlXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtLnNyY09iamVjdCA9IHRoaXMuY3VycmVudFN0cmVhbTtcclxuICAgICAgICAgICAgLy8gV2UgY2FuIG9ubHkga25vdyB0aGUgcmVzb2x1dGlvbiB3aGVuIHdlIHBhc3MgdGhlIHN0cmVhbSB0byB0aGUgPHZpZGVvPiBlbGVtZW50XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmlkZW8gcmVzb2x1dGlvbjogJywgdGhpcy52aWRlb0VsZW0udmlkZW9XaWR0aCwgdGhpcy52aWRlb0VsZW0udmlkZW9IZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFSZXNvbHV0aW9uID0geyB3aWR0aDogdGhpcy52aWRlb0VsZW0udmlkZW9XaWR0aCwgaGVpZ2h0OiB0aGlzLnZpZGVvRWxlbS52aWRlb0hlaWdodCB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZ2V0VXNlck1lZGlhIGVycm9yOiAnICsgZXJyLm5hbWUsIGVycik7XHJcbiAgICAgICAgICAgIGxvZ1RvRG9tKCdFUlIgJyArIGVyciwgbG9nVGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnVGhlIGNvbnN0cmFpbnRzIGFyZSBub3Qgc3VwcG9ydGVkICc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnVXNlciBkZW5pZWQgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhlIGNhbWVyYS4gVG9vIGJhZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBsZXQgY3VycmVudFN0cmVhbTtcclxuLy9cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbWVyYXMoKTogUHJvbWlzZTxhbnk+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgaWYgKCFoYXNHZXRVc2VyTWVkaWEoKSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0VXNlck1lZGlhKCkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcclxuLy8gICAgICAgICByZXR1cm4gZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS5raW5kID09PSAndmlkZW9pbnB1dCcpO1xyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW1lcmFQZXJtaXNzaW9uKGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBsb2dUb0RvbSgnZ2V0Q2FtZXJhUGVybWlzc2lvbicsIGxvZ1RleHQpO1xyXG4vLyAgICAgICAgIGlmICghaGFzR2V0VXNlck1lZGlhKCkpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSgpIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJyk7XHJcbi8vICAgICAgICAgICAgIGxvZ1RvRG9tKCdnZXRVc2VyTWVkaWEoKSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicsIGxvZ1RleHQpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgbG9nVG9Eb20oJ2dldENhbWVyYVBlcm1pc3Npb24yJywgbG9nVGV4dCk7XHJcbi8vXHJcbi8vICAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB7XHJcbi8vICAgICAgICAgICAgIHZpZGVvOiB7XHJcbi8vICAgICAgICAgICAgICAgICBkZXZpY2VJZDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBkZXZpY2VJZCxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgICAgIGN1cnJlbnRTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XHJcbi8vICAgICAgICAgbG9nVG9Eb20oJ2dldENhbWVyYVBlcm1pc3Npb24zJywgbG9nVGV4dCk7XHJcbi8vXHJcbi8vICAgICAgICAgbG9nVG9Eb20oJ2N1cnJlbnRTdHJlYW0nLCBsb2dUZXh0KTtcclxuLy8gICAgICAgICAod2luZG93IGFzIGFueSkuc3RyZWFtID0gY3VycmVudFN0cmVhbTsgLy8gbWFrZSB2YXJpYWJsZSBhdmFpbGFibGUgdG8gYnJvd3NlciBjb25zb2xlXHJcbi8vICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gY3VycmVudFN0cmVhbTtcclxuLy8gICAgICAgICAvLyBXZSBjYW4gb25seSBrbm93IHRoZSByZXNvbHV0aW9uIHdoZW4gd2UgcGFzcyB0aGUgc3RyZWFtIHRvIHRoZSA8dmlkZW8+IGVsZW1lbnRcclxuLy8gICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnR09UIElUICBhc2QgIScsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgICAgIGxvZ1RvRG9tKCdyZXR1cm4gdHJ1ZScsIGxvZ1RleHQpO1xyXG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignZ2V0VXNlck1lZGlhIGVycm9yOiAnICsgZXJyLm5hbWUsIGVycik7XHJcbi8vICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQ29uc3RyYWludE5vdFNhdGlzZmllZEVycm9yJykge1xyXG4vLyAgICAgICAgICAgICB0aHJvdyAnVGhlIGNvbnN0cmFpbnRzIGFyZSBub3Qgc3VwcG9ydGVkICcgKyBjb25zdHJhaW50cztcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKGVyci5uYW1lID09PSAnUGVybWlzc2lvbkRlbmllZEVycm9yJykge1xyXG4vLyAgICAgICAgICAgICB0aHJvdyAnVXNlciBkZW5pZWQgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhlIGNhbWVyYS4gVG9vIGJhZC4nO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gaWYgKGhhc0dldFVzZXJNZWRpYSgpKSB7XHJcbi8vICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbi8vICAgICAgICAgLmdldFVzZXJNZWRpYShjb25zdHJhaW50cylcclxuLy8gICAgICAgICAudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcclxuLy8gICAgICAgICAgICAgY3VycmVudFN0cmVhbSA9IHN0cmVhbTtcclxuLy8gICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLnN0cmVhbSA9IHN0cmVhbTsgLy8gbWFrZSB2YXJpYWJsZSBhdmFpbGFibGUgdG8gYnJvd3NlciBjb25zb2xlXHJcbi8vICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuLy8gICAgICAgICAgICAgdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHT1QgSVQgIScsIHZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4vLyAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0NvbnN0cmFpbnROb3RTYXRpc2ZpZWRFcnJvcicpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBjb25zdHJhaW50cyBhcmUgbm90IHN1cHBvcnRlZCAnLCBjb25zdHJhaW50cyk7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1Blcm1pc3Npb25EZW5pZWRFcnJvcicpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgJ1Blcm1pc3Npb25zIGhhdmUgbm90IGJlZW4gZ3JhbnRlZCB0byB1c2UgeW91ciBjYW1lcmEgYW5kICcgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAnbWljcm9waG9uZSwgeW91IG5lZWQgdG8gYWxsb3cgdGhlIHBhZ2UgYWNjZXNzIHRvIHlvdXIgZGV2aWNlcyBpbiAnICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJ29yZGVyIGZvciB0aGUgZGVtbyB0byB3b3JrLicsXHJcbi8vICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFVzZXJNZWRpYSBlcnJvcjogJyArIGVycm9yLm5hbWUsIGVycm9yKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gfSBlbHNlIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyTWVkaWEoKSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpO1xyXG4vLyB9XHJcbiIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuXHJcbmltcG9ydCB7IGxvZ1RvRG9tLCB3YWl0IH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmltcG9ydCB7IE1lZGlhQWNjZXNzIH0gZnJvbSAnLi9NZWRpYUFjY2Vzcyc7XHJcblxyXG5jb25zdCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlbycpO1xyXG5jb25zdCBsb2dUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpO1xyXG5jb25zdCBjYW1lcmFTd2l0Y2hCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1jYW1lcmEnKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtZWRpYUFjY2VzcyA9IG5ldyBNZWRpYUFjY2Vzcyh2aWRlbyk7XHJcbiAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IG1lZGlhQWNjZXNzLmdldENhbWVyYVBlcm1pc3Npb24oKTtcclxuICAgICAgICBpZiAoIXBlcm1pc3Npb24pIHtcclxuICAgICAgICAgICAgbG9nVG9Eb20oJ1VzZXIgZGVuaWVkIGNhbWVyYSB1c2Ug8J+YkicsIGxvZ1RleHQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbWVyYXMgPSBhd2FpdCBtZWRpYUFjY2Vzcy5nZXRDYW1lcmFzKCk7XHJcbiAgICAgICAgaWYgKGNhbWVyYXMgJiYgY2FtZXJhcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIEVuYWJsZS9zaG93IGJ1dHRvbiBpZiBwZXJtaXNzaW9uXHJcbiAgICAgICAgICAgIGNhbWVyYVN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlL3NwaW4gYnV0dG9uIHdoaWxlIHdhaXRpbmdcclxuICAgICAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaGluZycpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdCgzMDApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbWVkaWFBY2Nlc3Muc2VsZWN0TmV4dENhbWVyYSgpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnc3dpdGNoaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhpZGUgYnV0dG9uIGlmIHRoZXJlJ3Mgb25seSBvbmUgY2FtZXJhLlxyXG4gICAgICAgICAgICBjYW1lcmFTd2l0Y2hCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIGxvZ1RvRG9tKCdleGMnICsgZSwgbG9nVGV4dCk7XHJcbiAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnc3dpdGNoaW5nJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnN0YXJ0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=