/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:33:27.87
*/
gx.evt.autoSkip=!1;gx.define("sampleinterop",!1,function(){this.ServerClass="sampleinterop";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7UserResponse=gx.fn.getControlValue("vUSERRESPONSE")};this.e11ne1_client=function(){return this.clearMessages(),gx.extensions.web.interop.runJS(this.AV5scriptToRun),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15ne1_client=function(){return this.clearMessages(),gx.extensions.web.interop.logError(this.AV6logMessage),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e18ne1_client=function(){return this.clearMessages(),this.addMessage("Onready!"),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e19ne1_client=function(){return this.clearMessages(),this.addMessage("abandonando página"),gx.extensions.web.interop.showAlert("Exiting Page!"),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e16ne1_client=function(){return this.clearMessages(),gx.extensions.web.dialogs.showAlert(this.AV6logMessage),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e17ne1_client=function(){return this.clearMessages(),gx.extensions.web.dialogs.showConfirm(this.AV6logMessage),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e13ne2_client=function(){return this.setEventParameters([["UserResponse","vUSERRESPONSE","AV7UserResponse"]],arguments[2]),this.executeServerEvent("GX.EXTENSIONS.WEB.DIALOGS.ONCONFIRMCLOSED",!0,null,!0,!1)};this.e20ne2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e21ne2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,23,26,27];this.GXLastCtrlId=27;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSCRIPTTORUN",gxz:"ZV5scriptToRun",gxold:"OV5scriptToRun",gxvar:"AV5scriptToRun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5scriptToRun=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5scriptToRun=n)},v2c:function(){gx.fn.setControlValue("vSCRIPTTORUN",gx.O.AV5scriptToRun,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5scriptToRun=this.val())},val:function(){return gx.fn.getControlValue("vSCRIPTTORUN")},nac:gx.falseFn};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"RUNJS",grid:0,evt:"e11ne1_client"};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGMESSAGE",gxz:"ZV6logMessage",gxold:"OV6logMessage",gxvar:"AV6logMessage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6logMessage=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6logMessage=n)},v2c:function(){gx.fn.setControlValue("vLOGMESSAGE",gx.O.AV6logMessage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6logMessage=this.val())},val:function(){return gx.fn.getControlValue("vLOGMESSAGE")},nac:gx.falseFn};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TABLE1",grid:0};n[20]={id:20,fld:"LOGERROR",grid:0,evt:"e15ne1_client"};n[23]={id:23,fld:"SHOWALERT",grid:0,evt:"e16ne1_client"};n[26]={id:26,fld:"SHOWCONFIRM",grid:0,evt:"e17ne1_client"};n[27]={id:27,fld:"",grid:0};this.AV5scriptToRun="";this.ZV5scriptToRun="";this.OV5scriptToRun="";this.AV6logMessage="";this.ZV6logMessage="";this.OV6logMessage="";this.AV5scriptToRun="";this.AV6logMessage="";this.AV7UserResponse=!1;this.Events={e13ne2_client:["GX.EXTENSIONS.WEB.DIALOGS.ONCONFIRMCLOSED",!0],e20ne2_client:["ENTER",!0],e21ne2_client:["CANCEL",!0],e11ne1_client:["'RUNJS'",!1],e15ne1_client:["'LOGERROR'",!1],e18ne1_client:["GX.EXTENSIONS.WEB.INTEROP.ONREADY",!1],e19ne1_client:["GX.EXTENSIONS.WEB.INTEROP.ONUNLOAD",!1],e16ne1_client:["'SHOWALERT'",!1],e17ne1_client:["'SHOWCONFIRM'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'RUNJS'"]=[[{av:"AV5scriptToRun",fld:"vSCRIPTTORUN",pic:""}],[]];this.EvtParms["'LOGERROR'"]=[[{av:"AV6logMessage",fld:"vLOGMESSAGE",pic:""}],[]];this.EvtParms.START=[[{ctrl:"FORM",prop:"Headerrawhtml"}],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"AV5scriptToRun",fld:"vSCRIPTTORUN",pic:""}]];this.EvtParms["GX.EXTENSIONS.WEB.INTEROP.ONREADY"]=[[],[]];this.addExoEventHandler("gx.extensions.web.webevents.onready",this.e18ne1_client);this.EvtParms["GX.EXTENSIONS.WEB.INTEROP.ONUNLOAD"]=[[],[]];this.addExoEventHandler("gx.extensions.web.webevents.onunload",this.e19ne1_client);this.EvtParms["'SHOWALERT'"]=[[{av:"AV6logMessage",fld:"vLOGMESSAGE",pic:""}],[]];this.EvtParms["'SHOWCONFIRM'"]=[[{av:"AV6logMessage",fld:"vLOGMESSAGE",pic:""}],[]];this.EvtParms["GX.EXTENSIONS.WEB.DIALOGS.ONCONFIRMCLOSED"]=[[{av:"AV7UserResponse",fld:"vUSERRESPONSE",pic:""}],[]];this.addExoEventHandler("gx.extensions.web.dialogs.onconfirmclosed",this.e13ne2_client);this.setVCMap("AV7UserResponse","vUSERRESPONSE",0,"boolean",4,0);this.Initialize()});gx.wi(function(){gx.createParentObj(sampleinterop)})