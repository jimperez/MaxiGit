/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:33:22.4
*/
gx.evt.autoSkip=!1;gx.define("samplehistory",!1,function(){this.ServerClass="samplehistory";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e15nd1_client=function(){return this.clearMessages(),gx.extensions.web.history.pushState(this.AV5ResourceName),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e16nd1_client=function(){return this.clearMessages(),gx.extensions.web.history.replaceState(this.AV5ResourceName),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e13nd1_client=function(){return this.clearMessages(),gx.extensions.web.history.goBack(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e14nd1_client=function(){return this.clearMessages(),gx.extensions.web.history.goForward(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e17nd2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e18nd2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,9,10,11,13,17,18,19,20,23,25];this.GXLastCtrlId=25;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE2",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRESOURCENAME",gxz:"ZV5ResourceName",gxold:"OV5ResourceName",gxvar:"AV5ResourceName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5ResourceName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5ResourceName=n)},v2c:function(){gx.fn.setControlValue("vRESOURCENAME",gx.O.AV5ResourceName,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5ResourceName=this.val())},val:function(){return gx.fn.getControlValue("vRESOURCENAME")},nac:gx.falseFn};n[13]={id:13,fld:"PUSHSTATE",grid:0,evt:"e15nd1_client"};n[17]={id:17,fld:"REPLACESTATE",grid:0,evt:"e16nd1_client"};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TABLE1",grid:0};n[23]={id:23,fld:"GOBACK",grid:0,evt:"e13nd1_client"};n[25]={id:25,fld:"GOFORWARD",grid:0,evt:"e14nd1_client"};this.AV5ResourceName="";this.ZV5ResourceName="";this.OV5ResourceName="";this.AV5ResourceName="";this.Events={e17nd2_client:["ENTER",!0],e18nd2_client:["CANCEL",!0],e15nd1_client:["'PUSHSTATE'",!1],e16nd1_client:["'REPLACESTATE'",!1],e13nd1_client:["'GOBACK'",!1],e14nd1_client:["'GOFORWARD'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{ctrl:"FORM",prop:"Headerrawhtml"}],[{ctrl:"FORM",prop:"Headerrawhtml"}]];this.EvtParms["'PUSHSTATE'"]=[[{av:"AV5ResourceName",fld:"vRESOURCENAME",pic:""}],[]];this.EvtParms["'REPLACESTATE'"]=[[{av:"AV5ResourceName",fld:"vRESOURCENAME",pic:""}],[]];this.EvtParms["'GOBACK'"]=[[],[]];this.EvtParms["'GOFORWARD'"]=[[],[]];this.Initialize()});gx.wi(function(){gx.createParentObj(samplehistory)})