/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:51:46.87
*/
gx.evt.autoSkip=!1;gx.define("hproveedoralta",!1,function(){var n,t;this.ServerClass="hproveedoralta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25ExisteProveedor=gx.fn.getControlValue("vEXISTEPROVEEDOR");this.A28ProveedorId=gx.fn.getIntegerValue("PROVEEDORID",".")};this.Validv_Ccuil=function(){return this.validCliEvt("Validv_Ccuil",0,function(){try{var n=gx.util.balloon.getNew("vCCUIL");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12752_client=function(){return this.executeServerEvent("'DOBUSCAR'",!1,null,!1,!1)};this.e13752_client=function(){return this.executeServerEvent("'DOCANCELAR'",!1,null,!1,!1)};this.e15752_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16752_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,28,30];this.GXLastCtrlId=30;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccuil,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCCUIL",gxz:"ZV23cCUIL",gxold:"OV23cCUIL",gxvar:"AV23cCUIL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV23cCUIL=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV23cCUIL=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCCUIL",gx.O.AV23cCUIL,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV23cCUIL=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCCUIL",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"UNNAMEDTABLE1",grid:0};n[28]={id:28,fld:"BTNBUSCAR",grid:0,evt:"e12752_client"};n[30]={id:30,fld:"BTNCANCELAR",grid:0,evt:"e13752_client"};this.AV23cCUIL=0;this.ZV23cCUIL=0;this.OV23cCUIL=0;this.AV23cCUIL=0;this.A28ProveedorId=0;this.AV25ExisteProveedor=!1;this.Events={e12752_client:["'DOBUSCAR'",!0],e13752_client:["'DOCANCELAR'",!0],e15752_client:["ENTER",!0],e16752_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'DOBUSCAR'"]=[[{av:"AV23cCUIL",fld:"vCCUIL",pic:"ZZZZZZZZZZ9"},{av:"AV25ExisteProveedor",fld:"vEXISTEPROVEEDOR",pic:""},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[{av:"AV25ExisteProveedor",fld:"vEXISTEPROVEEDOR",pic:""}]];this.EvtParms["'DOCANCELAR'"]=[[],[]];this.EvtParms.VALIDV_CCUIL=[[],[]];this.setVCMap("AV25ExisteProveedor","vEXISTEPROVEEDOR",0,"boolean",4,0);this.setVCMap("A28ProveedorId","PROVEEDORID",0,"int",15,0);this.Initialize()});gx.wi(function(){gx.createParentObj(hproveedoralta)})