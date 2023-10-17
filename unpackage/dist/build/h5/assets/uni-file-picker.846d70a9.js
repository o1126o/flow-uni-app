import{U as e,V as t,W as s,X as i,D as l,Y as o,Z as r,o as a,c as n,w as d,a as u,F as h,b as c,u as p,d as f,_ as m,f as y,e as g,q as b,x as F,i as x,$ as _,n as k,t as w,O as v,l as P,m as I}from"./index-78b71ae6.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const S="chooseAndUploadFile:fail";function $(e,t){return e.tempFiles.forEach(((e,s)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+s+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function C(t,s=5,i){const l=(t=JSON.parse(JSON.stringify(t))).length;let o=0,r=this;return new Promise((a=>{for(;o<s;)n();function n(){let s=o++;if(s>=l)return void(!t.find((e=>!e.url&&!e.errMsg))&&a(t));const d=t[s],u=r.files.findIndex((e=>e.uuid===d.uuid));d.url="",delete d.errMsg,e.uploadFile({filePath:d.path,cloudPath:d.cloudPath,fileType:d.fileType,onUploadProgress:e=>{e.index=u,i&&i(e)}}).then((e=>{d.url=e.fileID,d.index=u,s<l&&n()})).catch((e=>{d.errMsg=e.errMsg||e.message,d.index=u,s<l&&n()}))}}))}function L(e,{onChooseFile:t,onUploadProgress:s}){return e.then((e=>{if(t){const s=t(e);if(void 0!==s)return Promise.resolve(s).then((t=>void 0===t?e:t))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}function M(e={type:"all"}){return"image"===e.type?L(function(e){const{count:s,sizeType:i=["original","compressed"],sourceType:l,extension:o}=e;return new Promise(((e,r)=>{t({count:s,sizeType:i,sourceType:l,extension:o,success(t){e($(t,"image"))},fail(e){r({errMsg:e.errMsg.replace("chooseImage:fail",S)})}})}))}(e),e):"video"===e.type?L(function(e){const{camera:t,compressed:i,maxDuration:l,sourceType:o,extension:r}=e;return new Promise(((e,a)=>{s({camera:t,compressed:i,maxDuration:l,sourceType:o,extension:r,success(t){const{tempFilePath:s,duration:i,size:l,height:o,width:r}=t;e($({errMsg:"chooseVideo:ok",tempFilePaths:[s],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:s,size:l,type:t.tempFile&&t.tempFile.type||"",width:r,height:o,duration:i,fileType:"video",cloudPath:""}]},"video"))},fail(e){a({errMsg:e.errMsg.replace("chooseVideo:fail",S)})}})}))}(e),e):L(function(e){const{count:t,extension:s}=e;return new Promise(((e,l)=>{let o=i;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(o=wx.chooseMessageFile),"function"!=typeof o)return l({errMsg:S+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});o({type:"all",count:t,extension:s,success(t){e($(t))},fail(e){l({errMsg:e.errMsg.replace("chooseFile:fail",S)})}})}))}(e),e)}const O=e=>{const t=e.lastIndexOf("."),s=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,s)}},E=e=>{if(Array.isArray(e))return e;return e.replace(/(\[|\])/g,"").split(",")},j=async(e,t="image")=>{const s=O(e.name).ext.toLowerCase();let i={name:e.name,uuid:e.uuid,extname:s||"",cloudPath:e.cloudPath,fileType:e.fileType,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}};if("image"===t){const t=await(l=e.path,new Promise(((e,t)=>{o({src:l,success(t){e(t)},fail(e){t(e)}})})));delete i.video,i.image.width=t.width,i.image.height=t.height,i.image.location=t.path}else delete i.image;var l;return i};const U=T({name:"uniFilePicker",components:{uploadImage:T({name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto",border:{}})},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle(){const{width:e="auto",height:t="auto"}=this.styles;let s={};"auto"===t?"auto"!==e?(s.height=this.value2px(e),s["padding-top"]=0):s.height=0:(s.height=this.value2px(t),s["padding-top"]=0),s.width="auto"===e?"auto"!==t?this.value2px(t):"33.3%":this.value2px(e);let i="";for(let l in s)i+=`${l}:${s[l]};`;return i},borderStyle(){let{border:e}=this.styles,t={};if("boolean"==typeof e)t.border=e?"1px #eee solid":"none";else{let s=e&&e.width||1;s=this.value2px(s);let i=e&&e.radius||3;i=this.value2px(i),t={"border-width":s,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":i}}let s="";for(let i in t)s+=`${i}:${t[i]};`;return s}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",e)},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},prviewImage(e,t){let s=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((e=>{s.push(e.url)})),r({urls:s,current:t}))},value2px:e=>("number"==typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e)}},[["render",function(e,t,s,i,l,o){const r=F,k=x,w=_;return a(),n(k,{class:"uni-file-picker__container"},{default:d((()=>[(a(!0),u(h,null,c(s.filesList,((e,t)=>(a(),n(k,{class:"file-picker__box",key:t,style:p(o.boxStyle)},{default:d((()=>[f(k,{class:"file-picker__box-content",style:p(o.borderStyle)},{default:d((()=>[f(r,{class:"file-image",src:e.url,mode:"aspectFill",onClick:m((s=>o.prviewImage(e,t)),["stop"])},null,8,["src","onClick"]),s.delIcon&&!s.readonly?(a(),n(k,{key:0,class:"icon-del-box",onClick:m((e=>o.delFile(t)),["stop"])},{default:d((()=>[f(k,{class:"icon-del"}),f(k,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):y("",!0),e.progress&&100!==e.progress||0===e.progress?(a(),n(k,{key:1,class:"file-picker__progress"},{default:d((()=>[f(w,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):y("",!0),e.errMsg?(a(),n(k,{key:2,class:"file-picker__mask",onClick:m((s=>o.uploadFiles(e,t)),["stop"])},{default:d((()=>[g(" 点击重试 ")])),_:2},1032,["onClick"])):y("",!0)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128)),s.filesList.length<s.limit&&!s.readonly?(a(),n(k,{key:0,class:"file-picker__box",style:p(o.boxStyle)},{default:d((()=>[f(k,{class:"file-picker__box-content is-add",style:p(o.borderStyle),onClick:o.choose},{default:d((()=>[b(e.$slots,"default",{},(()=>[f(k,{class:"icon-add"}),f(k,{class:"icon-add rotate"})]),!0)])),_:3},8,["style","onClick"])])),_:3},8,["style"])):y("",!0)])),_:3})}],["__scopeId","data-v-86b162f5"]]),uploadFile:T({name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((t=>{e.push(t)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:t}=this.styles,s={};if(t){let t=e&&e.width||1;t=this.value2px(t);let i=e&&e.radius||5;i=this.value2px(i),s={"border-width":t,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":i}}else s.border="none";let i="";for(let l in s)i+=`${l}:${s[l]};`;return i},borderLineStyle(){let e={},{borderStyle:t}=this.styles;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){let s=t&&t.width||1,i=t&&t.style||0;"number"==typeof s?s+="px":s=s.indexOf("px")?s:s+"px",e["border-width"]=s,"number"==typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-top-style"]=i}let s="";for(let i in e)s+=`${i}:${e[i]};`;return s}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}},[["render",function(e,t,s,i,l,o){const r=x,F=_;return a(),n(r,{class:"uni-file-picker__files"},{default:d((()=>[s.readonly?y("",!0):(a(),n(r,{key:0,class:"files-button",onClick:o.choose},{default:d((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])),o.list.length>0?(a(),n(r,{key:1,class:"uni-file-picker__lists is-text-box",style:p(o.borderStyle)},{default:d((()=>[(a(!0),u(h,null,c(o.list,((e,t)=>(a(),n(r,{class:k(["uni-file-picker__lists-box",{"files-border":0!==t&&o.styles.dividline}]),key:t,style:p(0!==t&&o.styles.dividline&&o.borderLineStyle)},{default:d((()=>[f(r,{class:"uni-file-picker__item"},{default:d((()=>[f(r,{class:"files__name"},{default:d((()=>[g(w(e.name),1)])),_:2},1024),s.delIcon&&!s.readonly?(a(),n(r,{key:0,class:"icon-del-box icon-files",onClick:e=>o.delFile(t)},{default:d((()=>[f(r,{class:"icon-del icon-files"}),f(r,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):y("",!0)])),_:2},1024),e.progress&&100!==e.progress||0===e.progress?(a(),n(r,{key:0,class:"file-picker__progress"},{default:d((()=>[f(F,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):y("",!0),"error"===e.status?(a(),n(r,{key:1,class:"file-picker__mask",onClick:m((s=>o.uploadFiles(e,t)),["stop"])},{default:d((()=>[g(" 点击重试 ")])),_:2},1032,["onClick"])):y("",!0)])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])):y("",!0)])),_:3})}],["__scopeId","data-v-5d376bd5"]])},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{modelValue:{type:[Array,Object],default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:()=>[]},title:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto"})},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]}},data:()=>({files:[],localValue:[]}),watch:{modelValue:{handler(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList(){let e=[];return this.files.forEach((t=>{e.push(t)})),e},showType(){return"image"===this.fileMediatype?this.mode:"list"},limitLength(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=M),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles(e){0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((()=>{this.setEmit()}))),this.$nextTick((()=>{this.setEmit()}))},upload(){let e=[];return this.files.forEach(((t,s)=>{"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},async setValue(e,t){const s=async e=>{let t="";return t=e.fileID?e.fileID:e.url,/cloud:\/\/([\w.]+\/?)\S*/.test(t)&&(e.fileID=t,e.url=await this.getTempFileURL(t)),e.url&&(e.path=e.url),e};if("object"===this.returnType)e?await s(e):e={};else{e||(e=[]);for(let t=0;t<e.length;t++){let i=e[t];await s(i)}}this.localValue=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(this.localValue));let i=Object.keys(e).length>0?e:[];this.files=[].concat(i)},choose(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?l({title:`您最多选择 ${this.limitLength} 个文件`,icon:"none"}):this.chooseFiles())},chooseFiles(){const t=E(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:t.length>0?t:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:e=>{this.setProgress(e,e.index)}}).then((e=>{this.setSuccessAndError(e.tempFiles)})).catch((e=>{console.log("选择失败",e)}))},async chooseFileCallback(e){const t=E(this.fileExtname);(1===Number(this.limitLength)&&this.disablePreview&&!this.disabled||"object"===this.returnType)&&(this.files=[]);let{filePaths:s,files:i}=((e,t)=>{let s=[],i=[];return t&&0!==t.length?(e.tempFiles.forEach((e=>{const l=O(e.name).ext.toLowerCase();-1!==t.indexOf(l)&&(i.push(e),s.push(e.path))})),i.length!==e.tempFiles.length&&l({title:`当前选择了${e.tempFiles.length}个文件 ，${e.tempFiles.length-i.length} 个文件格式不正确`,icon:"none",duration:5e3}),{filePaths:s,files:i}):{filePaths:s,files:i}})(e,t);t&&t.length>0||(s=e.tempFilePaths,i=e.tempFiles);let o=[];for(let l=0;l<i.length&&!(this.limitLength-this.files.length<=0);l++){i[l].uuid=Date.now();let e=await j(i[l],this.fileMediatype);e.progress=0,e.status="ready",this.files.push(e),o.push({...e,file:i[l]})}this.$emit("select",{tempFiles:o,tempFilePaths:s}),e.tempFiles=i,this.autoUpload&&!this.noSpace||(e.tempFiles=[])},uploadFiles(e){return e=[].concat(e),C.call(this,e,5,(e=>{this.setProgress(e,e.index,!0)})).then((e=>(this.setSuccessAndError(e),e))).catch((e=>{console.log(e)}))},async setSuccessAndError(e,t){let s=[],i=[],l=[],o=[];for(let r=0;r<e.length;r++){const t=e[r],a=t.uuid?this.files.findIndex((e=>e.uuid===t.uuid)):t.index;if(-1===a||!this.files)break;if("request:fail"===t.errMsg)this.files[a].url=t.path,this.files[a].status="error",this.files[a].errMsg=t.errMsg,i.push(this.files[a]),o.push(this.files[a].url);else{this.files[a].errMsg="",this.files[a].fileID=t.url;/cloud:\/\/([\w.]+\/?)\S*/.test(t.url)?this.files[a].url=await this.getTempFileURL(t.url):this.files[a].url=t.url,this.files[a].status="success",this.files[a].progress+=1,s.push(this.files[a]),l.push(this.files[a].fileID)}}s.length>0&&(this.setEmit(),this.$emit("success",{tempFiles:this.backObject(s),tempFilePaths:l})),i.length>0&&this.$emit("fail",{tempFiles:this.backObject(i),tempFilePaths:o})},setProgress(e,t,s){this.files.length;const i=Math.round(100*e.loaded/e.total);let l=t;s||(l=this.files.findIndex((t=>t.uuid===e.tempFile.uuid))),-1!==l&&this.files[l]&&(this.files[l].progress=i-1,this.$emit("progress",{index:l,progress:parseInt(i),tempFile:this.files[l]}))},delFile(e){this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((()=>{this.setEmit()}))},getFileExt(e){const t=e.lastIndexOf("."),s=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,s)}},setEmit(){let e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=[...e]),this.$emit("update:modelValue",this.localValue)},backObject(e){let t=[];return e.forEach((e=>{t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url,uuid:e.uuid,status:e.status,cloudPath:e.cloudPath})})),t},async getTempFileURL(t){t={fileList:[].concat(t)};return(await e.getTempFileURL(t)).fileList[0].tempFileURL||""},getForm(e="uniForms"){let t=this.$parent,s=t.$options.name;for(;s!==e;){if(t=t.$parent,!t)return!1;s=t.$options.name}return t}}},[["render",function(e,t,s,i,l,o){const r=P,u=x,h=v("upload-image"),c=I,p=v("upload-file");return a(),n(u,{class:"uni-file-picker"},{default:d((()=>[s.title?(a(),n(u,{key:0,class:"uni-file-picker__header"},{default:d((()=>[f(r,{class:"file-title"},{default:d((()=>[g(w(s.title),1)])),_:1}),f(r,{class:"file-count"},{default:d((()=>[g(w(o.filesList.length)+"/"+w(o.limitLength),1)])),_:1})])),_:1})):y("",!0),"image"===s.fileMediatype&&"grid"===o.showType?(a(),n(h,{key:1,readonly:s.readonly,"image-styles":s.imageStyles,"files-list":o.filesList,limit:o.limitLength,disablePreview:s.disablePreview,delIcon:s.delIcon,onUploadFiles:o.uploadFiles,onChoose:o.choose,onDelFile:o.delFile},{default:d((()=>[b(e.$slots,"default",{},(()=>[f(u,{class:"is-add"},{default:d((()=>[f(u,{class:"icon-add"}),f(u,{class:"icon-add rotate"})])),_:1})]),!0)])),_:3},8,["readonly","image-styles","files-list","limit","disablePreview","delIcon","onUploadFiles","onChoose","onDelFile"])):y("",!0),"image"!==s.fileMediatype||"grid"!==o.showType?(a(),n(p,{key:2,readonly:s.readonly,"list-styles":s.listStyles,"files-list":o.filesList,showType:o.showType,delIcon:s.delIcon,onUploadFiles:o.uploadFiles,onChoose:o.choose,onDelFile:o.delFile},{default:d((()=>[b(e.$slots,"default",{},(()=>[f(c,{type:"primary",size:"mini"},{default:d((()=>[g("选择文件")])),_:1})]),!0)])),_:3},8,["readonly","list-styles","files-list","showType","delIcon","onUploadFiles","onChoose","onDelFile"])):y("",!0)])),_:3})}],["__scopeId","data-v-ae18bd15"]]);export{U as _};
