/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:12.15
*/
gx.evt.autoSkip=!1;gx.define("seclogin",!1,function(){var n,t;this.ServerClass="seclogin";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV5CheckRequiredFieldsResult=gx.fn.getControlValue("vCHECKREQUIREDFIELDSRESULT")};this.s112_client=function(){this.AV5CheckRequiredFieldsResult=!0;0==this.AV10UsuId&&(this.addMessage("Error! Debe Ingresar un Usuario."),this.AV5CheckRequiredFieldsResult=!1);""==this.AV11UsuPwd&&(this.addMessage("Error! Debe Ingresar una Clave."),this.AV5CheckRequiredFieldsResult=!1)};this.e12iw2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14iw2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,15,18,19,20,22,23,26,29,32,33,34,35,36,37,38,41,42,43,44,45,46,47,50];this.GXLastCtrlId=50;this.DVPANEL_TABLELOGINContainer=gx.uc.getNew(this,24,0,"BootstrapPanel","DVPANEL_TABLELOGINContainer","Dvpanel_tablelogin","DVPANEL_TABLELOGIN");t=this.DVPANEL_TABLELOGINContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","BootstrapPanel-Gray","str");t.setDynProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLEBAR",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLESUBMAIN",grid:0};n[15]={id:15,fld:"HEADER",grid:0};n[18]={id:18,fld:"TABLECONTENT",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[26]={id:26,fld:"TABLELOGIN",grid:0};n[29]={id:29,fld:"UNNAMEDTABLE1",grid:0};n[32]={id:32,fld:"UNNAMEDTABLEUSUID",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"TEXTBLOCKUSUID",format:0,grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUID",gxz:"ZV10UsuId",gxold:"OV10UsuId",gxvar:"AV10UsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10UsuId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10UsuId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vUSUID",gx.O.AV10UsuId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10UsuId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vUSUID",".")},nac:gx.falseFn};n[41]={id:41,fld:"UNNAMEDTABLEUSUPWD",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"TEXTBLOCKUSUPWD",format:0,grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,lvl:0,type:"char",len:32,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUPWD",gxz:"ZV11UsuPwd",gxold:"OV11UsuPwd",gxvar:"AV11UsuPwd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11UsuPwd=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UsuPwd=n)},v2c:function(){gx.fn.setControlValue("vUSUPWD",gx.O.AV11UsuPwd,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11UsuPwd=this.val())},val:function(){return gx.fn.getControlValue("vUSUPWD")},nac:gx.falseFn};n[50]={id:50,fld:"BTNENTER",grid:0,evt:"e12iw2_client",std:"ENTER"};this.AV10UsuId=0;this.ZV10UsuId=0;this.OV10UsuId=0;this.AV11UsuPwd="";this.ZV11UsuPwd="";this.OV11UsuPwd="";this.AV10UsuId=0;this.AV11UsuPwd="";this.AV5CheckRequiredFieldsResult=!1;this.Events={e12iw2_client:["ENTER",!0],e14iw2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"this.DVPANEL_TABLELOGINContainer.ShowHeader",ctrl:"DVPANEL_TABLELOGIN",prop:"ShowHeader"}]];this.EvtParms.ENTER=[[{av:"AV5CheckRequiredFieldsResult",fld:"vCHECKREQUIREDFIELDSRESULT",pic:""},{av:"AV10UsuId",fld:"vUSUID",pic:"ZZZZZZZZZZ9"},{av:"AV11UsuPwd",fld:"vUSUPWD",pic:""}],[{av:"AV5CheckRequiredFieldsResult",fld:"vCHECKREQUIREDFIELDSRESULT",pic:""}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV5CheckRequiredFieldsResult","vCHECKREQUIREDFIELDSRESULT",0,"boolean",4,0);this.Initialize()});gx.wi(function(){gx.createParentObj(seclogin)})