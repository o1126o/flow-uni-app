import{r as e,K as a,o as l,c as i,w as s,i as t,d as u,e as o,z as r,E as n,j as d,m as p}from"./index-78b71ae6.js";import{_ as m}from"./uni-file-picker.846d70a9.js";import{o as c,r as f}from"./uni-app.es.27f7652a.js";import{b as v}from"./task.ca8b630f.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.281d61b3.js";import"./user.ccf31787.js";const _=g({__name:"index",setup(g){const _=e("");c((e=>{_.value=e.id}));const j=e([]),b=e([]),k=a((()=>j.value.map((e=>({url:e.url}))))),x=a((()=>b.value.map((e=>({url:e.url}))))),y=a((()=>k.value.length>0&&x.value.length>0));console.log("enableSubmit=>",y.value);const V=async()=>{try{const e={id:_.value,cargoPickUpPictureList:k.value,cargoPictureList:x.value};await v(e);n({url:"/subpkg_task/detail/index?id="+_.value})}catch(e){console.log(e)}};return(e,a)=>{const n=f(d("uni-file-picker"),m),c=t,v=p;return l(),i(c,{class:"delivery-page"},{default:s((()=>[u(c,{class:"delivery-info"},{default:s((()=>[u(n,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),fileMediatype:"image","file-extname":"jpg,webp,gif,png",title:"请拍照上传提货凭证",limit:"3"},null,8,["modelValue"]),u(n,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=e=>b.value=e),fileMediatype:"image","file-extname":"jpg,webp,gif,png",title:"请拍照上传货品照片",limit:"3"},null,8,["modelValue"])])),_:1}),u(v,{onClick:V,disabled:!r(y),class:"button"},{default:s((()=>[o("提交")])),_:1},8,["disabled"])])),_:1})}}},[["__scopeId","data-v-a100ded3"]]);export{_ as default};
