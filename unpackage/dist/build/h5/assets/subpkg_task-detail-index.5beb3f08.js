import{r as a,o as l,c as e,w as s,i as t,d as u,e as c,t as i,a as r,F as d,f as n,b as f,l as o,I as _,g as p,S as v,x as m}from"./index-78b71ae6.js";import{o as b}from"./uni-app.es.27f7652a.js";import{t as k}from"./task.ca8b630f.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.281d61b3.js";import"./user.ccf31787.js";const h=y({__name:"index",setup(y){const h=a(""),x=a({});b((a=>{T(h.value=a.id)}));const T=async a=>{if(!a)return;const l=await k(a);x.value=l.data};return(a,b)=>{const k=o,y=_,h=t,T=p,g=m,j=v;return l(),e(h,{class:"page-container"},{default:s((()=>[u(h,{class:"search-bar"},{default:s((()=>[u(k,{class:"iconfont icon-search"}),u(y,{class:"input",type:"text",placeholder:"输入运单号"})])),_:1}),u(j,{"scroll-y":"",class:"task-detail"},{default:s((()=>[u(h,{class:"scroll-view-wrapper"},{default:s((()=>{var a;return[u(h,{class:"basic-info panel"},{default:s((()=>[u(h,{class:"head"},{default:s((()=>[u(h,{class:"panel-title"},{default:s((()=>[c("基本信息")])),_:1}),u(h,{class:"iconfont icon-scan"})])),_:1}),u(h,{class:"timeline"},{default:s((()=>[u(h,{class:"line"},{default:s((()=>[c(i(x.value.startAddress),1)])),_:1}),u(h,{class:"line"},{default:s((()=>[c(i(x.value.endAddress),1)])),_:1}),u(T,{"hover-class":"none",url:"/subpkg_task/guide/index",class:"guide"},{default:s((()=>[u(k,{class:"iconfont icon-guide"}),u(k,null,{default:s((()=>[c("开始导航")])),_:1})])),_:1})])),_:1}),u(h,{class:"info-list"},{default:s((()=>[u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("任务编号")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.transportTaskId),1)])),_:1})])),_:1}),x.value.status>=1?(l(),r(d,{key:0},[u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("联系人")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.startHandoverName),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("联系电话")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.startHandoverPhone),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("预计提货时间")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.planDepartureTime),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("实际提货时间")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.actualDepartureTime),1)])),_:1})])),_:1})],64)):n("",!0),x.value.status>=2?(l(),r(d,{key:1},[u(h,{class:"hr"}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("交付联系人")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.finishHandoverName),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("联系电话")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.finishHandoverPhone),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("预计送达时间")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.planArrivalTime),1)])),_:1})])),_:1}),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("实际送达时间")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(x.value.actualArrivalTime),1)])),_:1})])),_:1})],64)):n("",!0)])),_:1})])),_:1}),(null==(a=x.value.exceptionList)?void 0:a.length)?(l(),e(h,{key:0,class:"except-info panel"},{default:s((()=>[u(h,{class:"panel-title"},{default:s((()=>[c("异常信息")])),_:1}),(l(!0),r(d,null,f(x.value.exceptionList,(a=>(l(),e(h,{key:a.exceptionType,class:"info-list"},{default:s((()=>[u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("上报时间")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(a.exceptionTime),1)])),_:2},1024)])),_:2},1024),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("异常类型")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(a.exceptionType),1)])),_:2},1024)])),_:2},1024),u(h,{class:"info-list-item"},{default:s((()=>[u(k,{class:"label"},{default:s((()=>[c("处理结果")])),_:1}),u(k,{class:"value"},{default:s((()=>[c(i(a.handleResult),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):n("",!0),2===x.value.status?(l(),e(h,{key:1,class:"panel pickup-info"},{default:s((()=>[u(h,{class:"panel-title"},{default:s((()=>[c("提货信息")])),_:1}),u(h,{class:"label"},{default:s((()=>[c("提货凭证")])),_:1}),u(h,{class:"pictures"},{default:s((()=>[(l(!0),r(d,null,f(x.value.cargoPictureList,(a=>(l(),e(g,{key:a.url,class:"picture",src:a.url},null,8,["src"])))),128)),n("",!0)])),_:1}),u(h,{class:"label"},{default:s((()=>[c("货品照片")])),_:1}),u(h,{class:"pictures"},{default:s((()=>[(l(!0),r(d,null,f(x.value.cargoPickUpPictureList,(a=>(l(),e(g,{key:a.url,class:"picture",src:a.url},null,8,["src"])))),128)),n("",!0)])),_:1})])),_:1})):n("",!0),4===x.value.status||6===x.value.status?(l(),e(h,{key:2,class:"delivery-info panel"},{default:s((()=>[u(h,{class:"panel-title"},{default:s((()=>[c("交货信息")])),_:1}),u(h,{class:"label"},{default:s((()=>[c("交货凭证")])),_:1}),u(h,{class:"pictures"},{default:s((()=>[(l(!0),r(d,null,f(x.value.certificatePictureList,(a=>(l(),e(g,{key:a.url,class:"picture",src:a.url},null,8,["src"])))),128)),n("",!0)])),_:1}),u(h,{class:"label"},{default:s((()=>[c("货品照片")])),_:1}),u(h,{class:"pictures"},{default:s((()=>[(l(!0),r(d,null,f(x.value.deliverPictureList,(a=>(l(),e(g,{key:a.url,class:"picture",src:a.url},null,8,["src"])))),128)),n("",!0)])),_:1})])),_:1})):n("",!0)]})),_:1})])),_:1}),1===x.value.status?(l(),e(h,{key:0,class:"toolbar"},{default:s((()=>[u(h,{class:"btn"},{default:s((()=>[u(T,{url:`/subpkg_task/delay/index?id=${x.value.id}&planDepartureTime=${x.value.planDepartureTime}`,"hover-class":"none",class:"button secondary"},{default:s((()=>[c(" 延迟提货 ")])),_:1},8,["url"]),u(T,{url:`/subpkg_task/pickup/index?id=${x.value.id}`,"hover-class":"none",class:"button primary"},{default:s((()=>[c("提货")])),_:1},8,["url"])])),_:1})])),_:1})):n("",!0),2===x.value.status?(l(),e(h,{key:1,class:"toolbar"},{default:s((()=>[u(h,{class:"btn"},{default:s((()=>[u(T,{url:`/subpkg_task/except/index?transportTaskId=${x.value.transportTaskId}`,"hover-class":"none",class:"button secondary"},{default:s((()=>[c("异常上报")])),_:1},8,["url"]),u(T,{url:`/subpkg_task/delivery/index?id=${x.value.id}`,"hover-class":"none",class:"button primary"},{default:s((()=>[c("支付")])),_:1},8,["url"])])),_:1})])),_:1})):n("",!0),4===x.value.status?(l(),e(h,{key:2,class:"toolbar"},{default:s((()=>[u(T,{url:`/subpkg_task/record/index?transportTaskId=${x.value.transportTaskId}&actualDepartureTime=${x.value.actualDepartureTime}`,"hover-class":"none",class:"button primary block"},{default:s((()=>[c(" 回车登记 ")])),_:1},8,["url"])])),_:1})):n("",!0)])),_:1})}}},[["__scopeId","data-v-7bf8f455"]]);export{h as default};
