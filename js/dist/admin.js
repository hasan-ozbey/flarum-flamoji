(()=>{var t={149:function(t,e,i){var o,a;void 0===(a="function"==typeof(o=function(){"use strict";function e(t,e,i){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,i)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(i){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,n=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,i,n){var r=s.URL||s.webkitURL,m=document.createElement("a");i=i||t.name||"download",m.download=i,m.rel="noopener","string"==typeof t?(m.href=t,m.origin===location.origin?a(m):o(m.href)?e(t,i,n):a(m,m.target="_blank")):(m.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(m.href)}),4e4),setTimeout((function(){a(m)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,s){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,s),i);else if(o(t))e(t,i,s);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){a(n)}))}}:function(t,i,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,i,o);var r="application/octet-stream"===t.type,m=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&m||n)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},c.readAsDataURL(t)}else{var u=s.URL||s.webkitURL,h=u.createObjectURL(t);a?a.location=h:location.href=h,a=null,setTimeout((function(){u.revokeObjectURL(h)}),4e4)}});s.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,[]):o)||(t.exports=a)}},e={};function i(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";i.r(o);const t=flarum.core.compat["common/app"];var e=i.n(t);e().initializers.add("the-turk/flarum-flamoji",(function(){console.log("[the-turk/flarum-flamoji] Hello, forum and admin!")}));const a=flarum.core.compat["common/extend"];var s=["af","am","ar-SA","ar","as","ast","az","bg","be","bn","br","bs","ca","ccp","ceb","chr","ckb","cs","cy","da","de-CH","de","doi","el","en-001","en-AU","en-CA","en-GB","en-IN","en","es-419","es-MX","es-US","es","et","eu","fa","fi","fil","fo","fr-CA","fr","ga","gd","gl","gu","ha-NE","ha","he","hi","hr","hu","hy","ia","id","ig","is","it","ja","jv","ka","kab","kk","kl","km","kn","ko","kok","ku","ky","lb","lo","lt","lv","mai","mi","mk","ml","mn","mni","mr","ms","mt","my","ne","nl","nn","no","or","pa-Arab","pa","pcm","pl","ps","pt-PT","pt","qu","rm","ro","root","ru","rw","sa","sat","sd","si","sk","sl","so","sq","sr-Cyrl-BA","sr-Cyrl","sr-Latn-BA","sr-Latn","sr","su","sv","sw-KE","sw","ta","te","tg","th","ti","tk","to","tr","tt","ug","uk","ur","uz","vi","wo","xh","yo-BJ","yo","yue-Hans","yue","zh-Hant-HK","zh-Hant","zh","zu"];const n=flarum.core.compat["admin/components/AdminPage"];var r=i.n(n),l=function(){function t(){this.emojis=[],this.moreResults=!1,this.loading=!1}var i=t.prototype;return i.loadResults=function(t){return void 0===t&&(t=0),this.loading=!0,e().store.find("the-turk/emojis",{page:{limit:23,offset:t}}).then(this.parseResults.bind(this))},i.loadMore=function(){this.loading=!0,this.loadResults(this.emojis.length)},i.parseResults=function(t){var e;return(e=this.emojis).push.apply(e,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},i.addToList=function(t){this.loading=!0,this.emojis.unshift(t),this.loading=!1},i.removeFromList=function(t){this.loading=!0;var e=this.emojis.findIndex((function(e){return t===e.id()}));this.emojis.splice(e,1),this.loading=!1},i.hasEmojis=function(){return this.emojis.length>0},i.isLoading=function(){return this.loading},i.hasMoreResults=function(){return this.moreResults},i.empty=function(){return!this.hasEmojis()&&!this.isLoading()},t}();function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}var h=i(149);const p=flarum.core.compat["common/components/Button"];var d=i.n(p);const f=flarum.core.compat["common/Component"];var g=i.n(f);const j=flarum.core.compat["common/components/Alert"];var v=i.n(j);const _=flarum.core.compat["components/Button"];var b=i.n(_);const k=flarum.core.compat["components/Modal"];var y=i.n(k);const w=flarum.core.compat["utils/ItemList"];var N=i.n(w);const x=flarum.core.compat["utils/Stream"];var E=i.n(x);function T(t){var e=new RegExp("^(http|https)://","i");return!!t.match(e)}var S=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),this.emoji=this.attrs.model||app.store.createRecord("emojis"),this.emojiTitle=E()(this.emoji.title()||""),this.textToReplace=E()(this.emoji.textToReplace()||""),this.path=E()(this.emoji.path()||"")},i.className=function(){return"EditEmojiModal Modal--small"},i.title=function(){var t="";return this.path()&&(t=T(this.path())?this.path():app.forum.attribute("baseUrl")+this.path()),this.emojiTitle()?this.path()?[m("img",{className:"EditEmojiModal-titleEmoji",src:t,alt:this.emojiTitle()}),this.emojiTitle()]:this.emojiTitle():app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.modal_title")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},i.fields=function(){var t=new(N());return t.add("title",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.emoji_title_label")),m("input",{className:"FormControl",bidi:this.emojiTitle})),50),t.add("textToReplace",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.text_to_replace_label")),m("input",{className:"FormControl",bidi:this.textToReplace})),40),t.add("path",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.path_or_url_label")),m("input",{className:"FormControl",placeholder:"/assets/emojis/batman.png",bidi:this.path})),30),t.add("submit",m("div",{className:"Form-group"},b().component({type:"submit",className:"Button Button--primary EditEmojiModal-save",loading:this.loading},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.submit_button")),this.emoji.exists?m("button",{type:"button",className:"Button EditEmojiModal-delete",onclick:this.delete.bind(this)},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_button")):""),-10),t},i.submitData=function(){return{title:this.emojiTitle(),textToReplace:this.textToReplace(),path:this.path()}},i.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var i=this.emoji.exists;this.emoji.save(this.submitData()).then((function(t){e.clearCache().then((function(){e.hide(),i||app.customEmojiListState.addToList(t),e.loading=!1,e.showSuccessMessage()}))}))},i.delete=function(){var t=this;confirm(app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_confirmation"))&&this.emoji.delete().then((function(){t.clearCache().then((function(){t.hide(),app.customEmojiListState.removeFromList(t.emoji.id()),t.showSuccessMessage()}))}))},i.showSuccessMessage=function(){return app.alerts.show(v(),{type:"success"},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.saved_message"))},i.clearCache=function(){return app.request({method:"DELETE",url:app.forum.attribute("apiUrl")+"/cache"})},e}(y());const F=flarum.core.compat["common/components/LoadingIndicator"];var L=i.n(F),C=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),app.customEmojiListState.loadResults()},i.view=function(){var t=app.customEmojiListState;return m("div",{className:"customEmoji-list"},t.isLoading()&&0===t.emojis.length?m(L(),{display:"unset",size:"large"}):"",m("ul",null,t.emojis.map((function(t){var e=T(t.path())?t.path():app.forum.attribute("baseUrl")+t.path();return m("li",null,m("div",{class:"customEmoji"},m(d(),{className:"Button Button--icon customEmoji-editButton",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(S,{model:t})}}),m("div",{className:"customEmoji-imageWrapper"},m("img",{src:e,className:"customEmoji-image",alt:t.title(),title:t.textToReplace()})),m("div",{className:"customEmoji-title"},m("h4",null,t.title()))))})),m("li",null,m("div",{class:"customEmoji addEmoji"},m("div",{className:"customEmoji-imageWrapper"},m(d(),{className:"Button Button--icon customEmoji-addButton",icon:"fas fa-plus",onclick:function(){return app.modal.show(S)}}))))),t.hasMoreResults()&&m("div",{className:"customEmoji-loadMore"},m(d(),{className:"Button Button--primary",disabled:t.isLoading(),loading:t.isLoading(),onclick:function(){return t.loadMore()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.emoji_list.load_more_button"))))},e}(g());const R=flarum.core.compat["common/helpers/listItems"];var B=i.n(R);const M=flarum.core.compat["common/utils/ItemList"];var O=i.n(M),A=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e)},i.exportEmojiList=function(){var t={};app.store.find("the-turk/emojis").then((function(e){e.payload.data.map((function(e,i){var o=e.attributes;t[i]={title:o.title,text_to_replace:o.text_to_replace,path:o.path}}));var i=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});(0,h.saveAs)(i,"flamoji.json")}))},i.importEmojiList=function(){if(confirm(app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.import_emojis_message"))){var t=document.createElement("input");t.type="file",t.onchange=function(t){app.customEmojiListState.loading=!0;var e=t.target.files[0],i=new FileReader;i.readAsText(e,"UTF-8"),i.onload=function(t){app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/the-turk/import-emojis",body:{data:JSON.parse(t.target.result)}}).then((function(){S.prototype.clearCache().then((function(){return window.location.reload()}))}))}},t.click()}},i.flamojiTopItems=function(){var t=this,e=new(O());return e.add("import",m(d(),{icon:"fas fa-sign-in-alt",onclick:function(){return t.importEmojiList()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.import_json_button"))),e.add("export",m(d(),{icon:"fas fa-share",onclick:function(){return t.exportEmojiList()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.export_json_button"))),e},i.view=function(){return m("div",{className:"ExtensionPage-customFlamoji"},m("div",{className:"ExtensionPage-customFlamoji-header"},m("div",{className:"container"},m("div",{className:"ExtensionTitle"},m("div",{className:"ExtensionName"},m("h2",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.heading_title"))),m("div",{class:"ExtensionPage-headerTopItems"},m("ul",null,B()(this.flamojiTopItems().toArray())))))),m("div",{className:"container"},m(C,null)))},e}(g());const U=flarum.core.compat["common/Model"];var I=i.n(U);const P=flarum.core.compat["common/utils/mixin"];var H=function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e.prototype.apiEndpoint=function(){return"/the-turk/emojis"+(this.exists?"/"+this.data.id:"")},e}(i.n(P)()(I(),{title:I().attribute("title"),textToReplace:I().attribute("text_to_replace"),path:I().attribute("path")}));const z=flarum.core.compat["admin/components/ExtensionPage"];var D=i.n(z);const q=flarum.core.compat["common/components/Select"];var J=i.n(q);const G=flarum.core.compat["common/utils/Stream"];var K=i.n(G);const W=flarum.core.compat["common/components/Switch"];var X=i.n(W);e().initializers.add("the-turk-flamoji",(function(t){t.store.models.emojis=H,t.customEmojiListState=new l;var e={};["smileys","people","animals","food","activities","travel","objects","symbols","flags"].forEach((function(i){e[i]=t.translator.trans("the-turk-flamoji.admin.settings.emoji_categories."+i)}));var i={};s.forEach((function(t){i[t]=t})),(0,a.extend)(D().prototype,["oncreate","onupdate"],(function(){if("the-turk-flamoji"==this.extension.id){var t=this.$(".recentsCountSetting");this.setting(["the-turk-flamoji.show_recents"])()?t.show():t.hide()}})),(0,a.extend)(D().prototype,"oninit",(function(){"the-turk-flamoji"==this.extension.id&&(this.specifiedCategories=K()(JSON.parse(this.setting(["the-turk-flamoji.specify_categories"])()||[]))())})),(0,a.extend)(D().prototype,"sections",(function(t){"the-turk-flamoji"==this.extension.id&&(t.has("permissions")&&t.remove("permissions"),t.add("customFlamoji",m(A,null)))})),(0,a.override)(r().prototype,"dirty",(function(e){var i=this;if(!this.extension||"the-turk-flamoji"!=this.extension.id)return e();var o={},a=JSON.stringify(this.specifiedCategories);return a!==this.setting(["the-turk-flamoji.specify_categories"])()&&(o["the-turk-flamoji.specify_categories"]=a),Object.keys(this.settings).forEach((function(e){var a=i.settings[e]();a!==t.data.settings[e]&&(o[e]=a)})),o})),t.extensionData.for("the-turk-flamoji").registerSetting((function(){var o=this;return m("div",{className:"Flamoji--settingsContainer"},m("div",{className:"Flamoji--generalUISettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.general_ui_settings_heading")),m("hr",null),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.auto_hide"])()&&"0"!==this.setting(["the-turk-flamoji.auto_hide"])(),onchange:this.settings["the-turk-flamoji.auto_hide"]},t.translator.trans("the-turk-flamoji.admin.settings.auto_hide_label"))),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.auto_hide_text"))),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.show_preview"])()&&"0"!==this.setting(["the-turk-flamoji.show_preview"])(),onchange:this.settings["the-turk-flamoji.show_preview"]},t.translator.trans("the-turk-flamoji.admin.settings.show_preview_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.show_search"])()&&"0"!==this.setting(["the-turk-flamoji.show_search"])(),onchange:this.settings["the-turk-flamoji.show_search"]},t.translator.trans("the-turk-flamoji.admin.settings.show_search_label"))),m("div",{className:"helpText"}))),m("div",{className:"Flamoji--emojiSettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_settings_heading")),m("hr",null),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.show_variants"])()&&"0"!==this.setting(["the-turk-flamoji.show_variants"])(),onchange:this.settings["the-turk-flamoji.show_variants"]},t.translator.trans("the-turk-flamoji.admin.settings.show_variants_label"))),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.show_variants_text"))),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_style_label")),m(J(),{value:this.setting(["the-turk-flamoji.emoji_style"])()||"twemoji",options:{native:t.translator.trans("the-turk-flamoji.admin.settings.emoji_style_native_option"),twemoji:"Twemoji"},buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_style"]})),m("div",{className:"helpText"})),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_data_label")),m(J(),{value:this.setting(["the-turk-flamoji.emoji_data"])()||"en",options:i,buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_data"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.emoji_data_text"))),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_version_label")),m(J(),{value:this.setting(["the-turk-flamoji.emoji_version"])()||"12.1",options:{"1.0":"1.0","2.0":"2.0","3.0":"3.0","4.0":"4.0","5.0":"5.0","11.0":"11.0","12.0":"12.0",12.1:"12.1"},buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_version"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.emoji_version_text")))),m("div",{className:"Flamoji--categorySettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.category_settings_heading")),m("hr",null),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.initial_category_label")),m(J(),{value:this.setting(["the-turk-flamoji.initial_category"])()||"smileys",options:e,buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.initial_category"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.initial_category_text"))),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.show_category_buttons"])()&&"0"!==this.setting(["the-turk-flamoji.show_category_buttons"])(),onchange:this.settings["the-turk-flamoji.show_category_buttons"]},t.translator.trans("the-turk-flamoji.admin.settings.show_category_buttons_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m(X(),{state:!!this.setting(["the-turk-flamoji.show_recents"])()&&"0"!==this.setting(["the-turk-flamoji.show_recents"])(),onchange:this.settings["the-turk-flamoji.show_recents"]},t.translator.trans("the-turk-flamoji.admin.settings.show_recents_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--categorySetting recentsCountSetting"},m("div",{className:"Form-group recentsCountGroup"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.recents_count_label")),m("input",{className:"FormControl",type:"number",bidi:this.setting("the-turk-flamoji.recents_count")})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.recents_count_text"))),m("div",{className:"Flamoji--categorySetting specifyCategoriesSetting"},m("div",{className:"Form-group specifyCategoriesGroup"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.specify_categories_label")),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.specify_categories_text")),m("div",{className:"options"},["smileys","people","animals","food","activities","travel","objects","symbols","flags"].map((function(e){return m("div",{className:"cat-checkbox"},m("input",{type:"checkbox",name:"specifyCats[]",checked:o.specifiedCategories.indexOf(e)>-1,onchange:function(t){if(t.target.checked)o.specifiedCategories.push(e);else{var i=o.specifiedCategories.indexOf(e);i>-1&&o.specifiedCategories.splice(i,1)}}}),m("label",{for:e},t.translator.trans("the-turk-flamoji.admin.settings.emoji_categories."+e)))})))))))}))}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map