/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:52.63
*/
gx.evt.autoSkip=!1;gx.define("hchoferalta",!1,function(){var n,t;this.ServerClass="hchoferalta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Validv_Ctipopersona=function(){return this.validCliEvt("Validv_Ctipopersona",0,function(){try{var n=gx.util.balloon.getNew("vCTIPOPERSONA");if(this.AnyError=0,!(this.AV10cTipoPersona=="F"||this.AV10cTipoPersona=="J"||this.AV10cTipoPersona=="O"||""==this.AV10cTipoPersona))try{n.setError("Campo c Tipo Persona fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){};this.e15as1_client=function(){return this.clearMessages(),this.AV6cNroCUIL>=2e10&&this.AV6cNroCUIL<3e10&&0==this.AV5cDNI?this.AV10cTipoPersona="F":this.AV6cNroCUIL>3e10&&this.addMessage("El Cuil/Cuit ingresado no corresponde a una Persona Física. Verifique...!"),this.refreshOutputs([{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}]),gx.$.Deferred().resolve()};this.e16as1_client=function(){return this.clearMessages(),this.AV5cDNI>0&&0==this.AV6cNroCUIL&&(this.AV10cTipoPersona="F"),this.refreshOutputs([{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}]),gx.$.Deferred().resolve()};this.e12as2_client=function(){return this.executeServerEvent("'DOBUSCAR'",!1,null,!1,!1)};this.e13as2_client=function(){return this.executeServerEvent("'DOCANCELAR'",!1,null,!1,!1)};this.e17as2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e18as2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,38,40];this.GXLastCtrlId=40;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Datos Obligatorios","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e15as1_client",evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCNROCUIL",gxz:"ZV6cNroCUIL",gxold:"OV6cNroCUIL",gxvar:"AV6cNroCUIL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cNroCUIL=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cNroCUIL=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCNROCUIL",gx.O.AV6cNroCUIL,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cNroCUIL=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCNROCUIL",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e16as1_client",evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCDNI",gxz:"ZV5cDNI",gxold:"OV5cDNI",gxvar:"AV5cDNI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5cDNI=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV5cDNI=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCDNI",gx.O.AV5cDNI,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5cDNI=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCDNI",".")},nac:gx.falseFn};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctipopersona,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCTIPOPERSONA",gxz:"ZV10cTipoPersona",gxold:"OV10cTipoPersona",gxvar:"AV10cTipoPersona",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV10cTipoPersona=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10cTipoPersona=n)},v2c:function(){gx.fn.setComboBoxValue("vCTIPOPERSONA",gx.O.AV10cTipoPersona)},c2v:function(){this.val()!==undefined&&(gx.O.AV10cTipoPersona=this.val())},val:function(){return gx.fn.getControlValue("vCTIPOPERSONA")},nac:gx.falseFn};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"UNNAMEDTABLE1",grid:0};n[38]={id:38,fld:"BTNBUSCAR",grid:0,evt:"e12as2_client"};n[40]={id:40,fld:"BTNCANCELAR",grid:0,evt:"e13as2_client"};this.AV6cNroCUIL=0;this.ZV6cNroCUIL=0;this.OV6cNroCUIL=0;this.AV5cDNI=0;this.ZV5cDNI=0;this.OV5cDNI=0;this.AV10cTipoPersona="";this.ZV10cTipoPersona="";this.OV10cTipoPersona="";this.AV6cNroCUIL=0;this.AV5cDNI=0;this.AV10cTipoPersona="";this.Events={e12as2_client:["'DOBUSCAR'",!0],e13as2_client:["'DOCANCELAR'",!0],e17as2_client:["ENTER",!0],e18as2_client:["CANCEL",!0],e15as1_client:["VCNROCUIL.ISVALID",!1],e16as1_client:["VCDNI.ISVALID",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}],[{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}]];this.EvtParms["'DOBUSCAR'"]=[[{av:"AV6cNroCUIL",fld:"vCNROCUIL",pic:"ZZZZZZZZZZZZZZ9"},{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""},{av:"AV5cDNI",fld:"vCDNI",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DOCANCELAR'"]=[[],[]];this.EvtParms["VCNROCUIL.ISVALID"]=[[{av:"AV6cNroCUIL",fld:"vCNROCUIL",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV5cDNI",fld:"vCDNI",pic:"ZZZZZZZ9"}],[{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}]];this.EvtParms["VCDNI.ISVALID"]=[[{av:"AV5cDNI",fld:"vCDNI",pic:"ZZZZZZZ9"},{av:"AV6cNroCUIL",fld:"vCNROCUIL",pic:"ZZZZZZZZZZZZZZ9"}],[{ctrl:"vCTIPOPERSONA"},{av:"AV10cTipoPersona",fld:"vCTIPOPERSONA",pic:""}]];this.EvtParms.VALIDV_CTIPOPERSONA=[[],[]];this.Initialize()});gx.wi(function(){gx.createParentObj(hchoferalta)})