!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-form-renderer"]=t(require("react")):e["react-form-renderer"]=t(e.react)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);Object.defineProperty(t,"Form",{enumerable:!0,get:function(){return n.Form}});var a=r(10);Object.defineProperty(t,"submitAction",{enumerable:!0,get:function(){return a.submitAction}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),f=r(0),p=n(f),d=r(8),m=n(d),h=r(9),b=(0,h.validate)({email:function(e){return e&&e.length>3}}),g=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.validator=new m.default,r}return o(t,e),s(t,[{key:"handleFormSubmit",value:function(e){var t=this;b(e).then(function(){console.log("All good!"),t.props.onSubmit(e)}).catch(function(e){console.error("Validation error",e)})}},{key:"renderContainers",value:function(e,t){var r=this;return console.log("renderContainers"),this.props.fields.map(function(n){var a=n;return a.key=n.name,p.default.cloneElement(r.props.containerRenderer,i({},a),r.renderFields(n.fields,e,t))})}},{key:"renderFields",value:function(e,t,r){var n=this;console.log("renderFields",t);var a=void 0,u=null;return e.map(function(e){var r=e;switch(r.key=e.name,a=null,u=n.validator.message(e.name,t[e.name],n.props.validatorTypes[e.name],t),e.type){case"email":case"text":var o=i({},r);a=p.default.cloneElement(n.props.textInputRenderer,o);break;case"password":var s=i({},r);a=p.default.cloneElement(n.props.passwordRenderer,s);break;case"passwordChange":var l=i({},r),c=i({},r,{placeholder:"Password Confirm",name:e.name+"_confirm",key:e.name+"_confirm"});a=p.default.cloneElement(n.props.fieldRenderer,{key:e.name+"_container"},[p.default.cloneElement(n.props.passwordRenderer,l),p.default.cloneElement(n.props.passwordRenderer,c)]);break;case"submit":var f=i({},r,{value:e.label||"",onClick:function(){return n.handleFormSubmit(t)}});a=p.default.cloneElement(n.props.buttonRenderer,f);break;default:return null}return p.default.cloneElement(n.props.fieldRenderer,{key:e.name},[a,u])})}},{key:"render",value:function(){var e=this;return p.default.createElement(h.Attire,null,function(t,r){return e.renderContainers(t,r)})}}]),t}(f.PureComponent);g.propTypes={fields:c.default.array,validatorTypes:c.default.object,onSubmit:c.default.func,containerRenderer:c.default.element,fieldRenderer:c.default.element,passwordRenderer:c.default.element,textInputRenderer:c.default.element,buttonRenderer:c.default.element,submitRenderer:c.default.element},g.defaultProps={containerRenderer:p.default.createElement("div",null),fieldRenderer:p.default.createElement("section",null),passwordRenderer:p.default.createElement("input",{type:"password"}),textInputRenderer:p.default.createElement("input",{type:"text"}),buttonRenderer:p.default.createElement("input",{type:"button"}),submitRenderer:p.default.createElement("input",{type:"submit"})},t.Form=g},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";var n=r(5),a=r(6),u=r(7);e.exports=function(){function e(e,t,r,n,o,i){i!==u&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var a=function(){};a.thatReturns=n,a.thatReturnsFalse=n(!1),a.thatReturnsTrue=n(!0),a.thatReturnsNull=n(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,r){"use strict";function n(e,t,r,n,u,o,i,s){if(a(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,u,o,i,s],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var a=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.fields={},this.errorMessages={},this.messagesShown=!1,this.renderer=i.default.createElement("div",null),this.rules=a({accepted:{message:"The :attribute must be accepted.",rule:function(e){return!0===e}},alpha:{message:"The :attribute may only contain letters.",rule:function(e){return t._testRegex(e,/^[A-Z]*$/i)}},alpha_num:{message:"The :attribute may only contain letters and numbers.",rule:function(e){return t._testRegex(e,/^[A-Z0-9]*$/i)}},alpha_num_dash:{message:"The :attribute may only contain letters, numbers, and dashes.",rule:function(e){return t._testRegex(e,/^[A-Z0-9_-]*$/i)}},card_exp:{message:"The :attribute must be a valid expiration date.",rule:function(e){return t._testRegex(e,/^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)}},card_num:{message:"The :attribute must be a valid credit card number.",rule:function(e){return t._testRegex(e,/^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)}},email:{message:"The :attribute must be a valid email address.",rule:function(e){return t._testRegex(e,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)}},gt:{message:"The :attribute must be greater than :gt.",rule:function(e,r){return!!t._testRegex(e,/^\d+.?\d*$/)&&parseFloat(e)>parseFloat(r[0])},messageReplace:function(e,t){return e.replace(":gt",t[0])}},gte:{message:"The :attribute must be greater than or equal to :gte.",rule:function(e,r){return!!t._testRegex(e,/^\d+.?\d*$/)&&parseFloat(e)>=parseFloat(r[0])},messageReplace:function(e,t){return e.replace(":gte",t[0])}},in:{message:"The selected :attribute must be :values.",rule:function(e,t){return t.indexOf(e)>-1},messageReplace:function(e,r){return e.replace(":values",t._toSentence(r))}},integer:{message:"The :attribute must be an integer.",rule:function(e){return t._testRegex(e,/^\d+$/)}},lt:{message:"The :attribute must be less than :lt.",rule:function(e,r){return!!t._testRegex(e,/^\d+.?\d*$/)&&parseFloat(e)<parseFloat(r[0])},messageReplace:function(e,t){return e.replace(":lt",t[0])}},lte:{message:"The :attribute must be less than or equal to :lte.",rule:function(e,r){return!!t._testRegex(e,/^\d+.?\d*$/)&&parseFloat(e)<=parseFloat(r[0])},messageReplace:function(e,t){return e.replace(":lte",t[0])}},max:{message:"The :attribute may not be greater than :max characters.",rule:function(e,t){return e.length<=t[0]},messageReplace:function(e,t){return e.replace(":max",t[0])}},min:{message:"The :attribute must be at least :min characters.",rule:function(e,t){return e.length>=t[0]},messageReplace:function(e,t){return e.replace(":min",t[0])}},not_in:{message:"The selected :attribute must not be :values.",rule:function(e,t){return-1===t.indexOf(e)},messageReplace:function(e,r){return e.replace(":values",t._toSentence(r))}},numeric:{message:"The :attribute must be a number.",rule:function(e){return t._testRegex(e,/^\d+.?\d*$/)}},phone:{message:"The :attribute must be a valid phone number.",rule:function(e){return t._testRegex(e,/(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)/)}},required:{message:"The :attribute field is required.",rule:function(e){return t._testRegex(e,/.+/)}},url:{message:"The :attribute must be a url.",rule:function(e){return t._testRegex(e,/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i)}},confirmation:{message:"The :attribute_confirm must be equal to :attribute."}},r)}return u(e,[{key:"getErrorMessages",value:function(){return this.errorMessages}},{key:"showMessages",value:function(){this.messagesShown=!0}},{key:"hideMessages",value:function(){this.messagesShown=!1}},{key:"allValid",value:function(){for(var e in this.fields)if(!1===this.fieldValid(e))return!1;return!0}},{key:"fieldValid",value:function(e){return this.fields.hasOwnProperty(e)&&!0===this.fields[e]}},{key:"customMessage",value:function(e,t){if(e&&this.messagesShown)return this._reactErrorElement(e,t)}},{key:"message",value:function(e,t,r,n,a,u){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};if(this.errorMessages[e]=null,this.fields[e]=!0,!r)return!1;var i,s,l,c=r.split("|");if(a&&(this.renderer=a),t&&n[e+"_confirm"]){var f=e,p=e+"_confirm";if(n[f]!==n[p]){var l=this.rules.confirmation.message;return l=l.replace(":attribute_confirm",p.replace(/_/g," ")),l=l.replace(":attribute",f.replace(/_/g," ")),this.errorMessages[f]=l,this.rules.confirmation.hasOwnProperty("messageReplace")?this._reactErrorElement(this.rules[i].messageReplace(l,s)):this._reactErrorElement(l,u)}}for(var d=0;d<c.length;d++)if(t=this._valueOrEmptyString(t),i=this._getRule(c[d]),s=this._getOptions(c[d]),!1===this.rules[i].rule(t,s)&&(this.fields[e]=!1,this.messagesShown||t))return l=o[i]||o.default||this.rules[i].message.replace(":attribute",e.replace(/_/g," ")),this.errorMessages[e]=l,this.rules[i].hasOwnProperty("messageReplace")?this._reactErrorElement(this.rules[i].messageReplace(l,s)):this._reactErrorElement(l,u)}},{key:"_getRule",value:function(e){return e.split(":")[0]}},{key:"_getOptions",value:function(e){var t=e.split(":");return t.length>1?t[1].split(","):[]}},{key:"_valueOrEmptyString",value:function(e){return void 0===e||null===e?"":e}},{key:"_toSentence",value:function(e){return e.slice(0,-2).join(", ")+(e.slice(0,-2).length?", ":"")+e.slice(-2).join(e.length>2?", or ":" or ")}},{key:"_reactErrorElement",value:function(e,t){return i.default.cloneElement(this.renderer,{key:"validator",className:t||"validation-message"},[e])}},{key:"_testRegex",value:function(e,t){return null!==e.match(t)}}]),e}();t.default=s},function(e,t,r){!function(t,n){e.exports=n(r(0))}(0,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.defineProperty(t,"Attire",{enumerable:!0,get:function(){return n.Attire}});var a=r(8);Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return a.validate}});var u=r(9);Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return u.transform}});var o=r(10);Object.defineProperty(t,"value",{enumerable:!0,get:function(){return o.value}})},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Attire=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),c=r(7),f=function(e){return e&&e.__esModule?e:{default:e}}(c),p=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleFormValueChange=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var u=r.props.onChange,o={};if(1===t.length){var s=t[0],l=s.target,c=l.name,f=l.type,p=l.checked,d=l.value;o=n({},c,"checkbox"===f?p:d)}if(2===t.length){var m=t[0],h=t[1];o=n({},m,h)}r.setState(function(e){var t=i({},e.data,o);return u&&u(t),{data:t}})},r.handleFormReset=function(){var e=r.props,t=e.initial,n=e.onChange;r.setState(function(e){return n&&n(i({},t)),{data:i({},t)}})},r.state={data:i({},e.initial)},r}return o(t,e),s(t,[{key:"render",value:function(){return this.props.children(this.state.data,this.handleFormValueChange,this.handleFormReset)}}]),t}(f.default.Component);p.propTypes={initial:l.object,onChange:l.func,render:l.func},p.defaultProps={initial:{}},t.Attire=p},function(e,t,r){e.exports=r(3)()},function(e,t,r){"use strict";var n=r(4),a=r(5),u=r(6);e.exports=function(){function e(e,t,r,n,o,i){i!==u&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var a=function(){};a.thatReturns=n,a.thatReturnsFalse=n(!1),a.thatReturnsTrue=n(!0),a.thatReturnsNull=n(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,r){"use strict";function n(e,t,r,n,u,o,i,s){if(a(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,u,o,i,s],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var a=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e,t){var r=function(t){return new Promise(function(r,n){if(!e||0===Object.keys(e).length)return r(t);var a={};return Object.keys(e).reduce(function(r,n){var u=r;return u=!!e[n].call(void 0,t[n],t),a[n]=u,!1!==r&&u},!0)?r(t):n(a)})};return t?r(t):r}Object.defineProperty(t,"__esModule",{value:!0}),t.validate=n},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=this,a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&0!==Object.keys(e).length?Object.keys(t).reduce(function(a,o){return e[o]?u({},a,n({},o,e[o].call(r,t[o],t))):u({},a,n({},o,t[o]))},{}):t};return t?a(t):a}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.transform=a},function(e,t,r){"use strict";function n(e){return e||""}Object.defineProperty(t,"__esModule",{value:!0}),t.value=n}])})},function(e,t,r){"use strict";function n(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.submitAction=n}])});