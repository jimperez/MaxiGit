/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:56:50.15
*/
gx.evt.autoSkip=!1;gx.define("gamsetpassword",!1,function(){var n,t;this.ServerClass="gamsetpassword";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV9UserId=gx.fn.getControlValue("vUSERID")};this.e12st2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14st1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];this.GXLastCtrlId=39;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Set Password","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"DVPANEL_TABLEATTRIBUTES_CELL",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV10UserName",gxold:"OV10UserName",gxvar:"AV10UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV10UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV10UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV11UserPasswordNew",gxold:"OV11UserPasswordNew",gxvar:"AV11UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11UserPasswordNew=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UserPasswordNew=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV11UserPasswordNew,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV11UserPasswordNew=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV12UserPasswordNewConf",gxold:"OV12UserPasswordNewConf",gxvar:"AV12UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12UserPasswordNewConf=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12UserPasswordNewConf=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV12UserPasswordNewConf,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV12UserPasswordNewConf=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"BTNENTER",grid:0,evt:"e12st2_client",std:"ENTER"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNCANCEL",grid:0,evt:"e14st1_client"};this.AV10UserName="";this.ZV10UserName="";this.OV10UserName="";this.AV11UserPasswordNew="";this.ZV11UserPasswordNew="";this.OV11UserPasswordNew="";this.AV12UserPasswordNewConf="";this.ZV12UserPasswordNewConf="";this.OV12UserPasswordNewConf="";this.AV10UserName="";this.AV11UserPasswordNew="";this.AV12UserPasswordNewConf="";this.AV9UserId="";this.Events={e12st2_client:["ENTER",!0],e14st1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV9UserId",fld:"vUSERID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV9UserId",fld:"vUSERID",pic:"",hsh:!0}],[{av:"AV10UserName",fld:"vUSERNAME",pic:""},{av:"AV11UserPasswordNew",fld:"vUSERPASSWORDNEW",pic:""},{av:"AV12UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF",pic:""},{av:'gx.fn.getCtrlProperty("DVPANEL_TABLEATTRIBUTES_CELL","Class")',ctrl:"DVPANEL_TABLEATTRIBUTES_CELL",prop:"Class"}]];this.EvtParms.ENTER=[[{av:"AV9UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV11UserPasswordNew",fld:"vUSERPASSWORDNEW",pic:""},{av:"AV12UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF",pic:""}],[{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:"vUSERPASSWORDNEW",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:"vUSERPASSWORDNEWCONF",prop:"Enabled"},{ctrl:"BTNENTER",prop:"Visible"},{ctrl:"BTNCANCEL",prop:"Caption"}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV9UserId","vUSERID",0,"char",40,0);this.Initialize()});gx.wi(function(){gx.createParentObj(gamsetpassword)})