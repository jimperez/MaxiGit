/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:57:37.56
*/
gx.evt.autoSkip=!1;gx.define("gamrecoverpasswordstep1",!1,function(){this.ServerClass="gamrecoverpasswordstep1";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME")};this.e12t72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14t71_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24,25,28,29,30,31,32,33,34,35,36,37];this.GXLastCtrlId=37;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLECONTENT",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"HEADERORIGINAL",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TABLELOGIN",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"SIGNIN",format:0,grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"UNNAMEDTABLE1",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV11UserName",gxold:"OV11UserName",gxvar:"AV11UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV11UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV11UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"BTNENTER",grid:0,evt:"e12t72_client",std:"ENTER"};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"BTNCANCEL",grid:0,evt:"e14t71_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"TABLEERROR",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};this.AV11UserName="";this.ZV11UserName="";this.OV11UserName="";this.AV11UserName="";this.AV10UserAuthTypeName="";this.Events={e12t72_client:["ENTER",!0],e14t71_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV10UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE","Class")',ctrl:"LAYOUTMAINTABLE",prop:"Class"},{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:"TABLEERROR",prop:"Visible"}]];this.EvtParms.ENTER=[[{av:"AV10UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0},{av:"AV11UserName",fld:"vUSERNAME",pic:""}],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:"TABLEERROR",prop:"Visible"}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV10UserAuthTypeName","vUSERAUTHTYPENAME",0,"char",60,0);this.Initialize()});gx.wi(function(){gx.createParentObj(gamrecoverpasswordstep1)})