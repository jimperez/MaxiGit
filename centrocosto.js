/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:12:21.21
*/
gx.evt.autoSkip=!1;gx.define("centrocosto",!1,function(){var n,t;this.ServerClass="centrocosto";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7CentroCostoId=gx.fn.getIntegerValue("vCENTROCOSTOID",".");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Centrocostoid=function(){return this.validCliEvt("Valid_Centrocostoid",0,function(){try{var n=gx.util.balloon.getNew("CENTROCOSTOID");if(this.AnyError=0,0==this.A2941CentroCostoId)try{n.setError("Error! Debe ingresar un código.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Centrocostonombre=function(){return this.validCliEvt("Valid_Centrocostonombre",0,function(){try{var n=gx.util.balloon.getNew("CENTROCOSTONOMBRE");if(this.AnyError=0,""==this.A2942CentroCostoNombre)try{n.setError("Error! Debe ingresar una Descripción.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Centrocostoestado=function(){return this.validCliEvt("Valid_Centrocostoestado",0,function(){try{var n=gx.util.balloon.getNew("CENTROCOSTOESTADO");if(this.AnyError=0,!(this.A2943CentroCostoEstado=="ACT"||this.A2943CentroCostoEstado=="INA"||""==this.A2943CentroCostoEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12622_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e1362251_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1462251_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];this.GXLastCtrlId=46;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocostoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTOID",gxz:"Z2941CentroCostoId",gxold:"O2941CentroCostoId",gxvar:"A2941CentroCostoId",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2941CentroCostoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2941CentroCostoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CENTROCOSTOID",gx.O.A2941CentroCostoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2941CentroCostoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CENTROCOSTOID",".")},nac:function(){return!(0==this.AV7CentroCostoId)}};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocostonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTONOMBRE",gxz:"Z2942CentroCostoNombre",gxold:"O2942CentroCostoNombre",gxvar:"A2942CentroCostoNombre",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2942CentroCostoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2942CentroCostoNombre=n)},v2c:function(){gx.fn.setControlValue("CENTROCOSTONOMBRE",gx.O.A2942CentroCostoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2942CentroCostoNombre=this.val())},val:function(){return gx.fn.getControlValue("CENTROCOSTONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocostoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTOESTADO",gxz:"Z2943CentroCostoEstado",gxold:"O2943CentroCostoEstado",gxvar:"A2943CentroCostoEstado",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2943CentroCostoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2943CentroCostoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CENTROCOSTOESTADO",gx.O.A2943CentroCostoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2943CentroCostoEstado=this.val())},val:function(){return gx.fn.getControlValue("CENTROCOSTOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"BTNTRN_ENTER",grid:0,evt:"e1362251_client",std:"ENTER"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_CANCEL",grid:0,evt:"e1462251_client"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_DELETE",grid:0,evt:"e1562251_client",std:"DELETE"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTO094",gxz:"Z2944CentroCosto094",gxold:"O2944CentroCosto094",gxvar:"A2944CentroCosto094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2944CentroCosto094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2944CentroCosto094=n)},v2c:function(){gx.fn.setControlValue("CENTROCOSTO094",gx.O.A2944CentroCosto094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2944CentroCosto094=this.val())},val:function(){return gx.fn.getControlValue("CENTROCOSTO094")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[46]={id:46,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTO095",gxz:"Z2945CentroCosto095",gxold:"O2945CentroCosto095",gxvar:"A2945CentroCosto095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2945CentroCosto095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2945CentroCosto095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CENTROCOSTO095",gx.O.A2945CentroCosto095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2945CentroCosto095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CENTROCOSTO095")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});this.A2941CentroCostoId=0;this.Z2941CentroCostoId=0;this.O2941CentroCostoId=0;this.A2942CentroCostoNombre="";this.Z2942CentroCostoNombre="";this.O2942CentroCostoNombre="";this.A2943CentroCostoEstado="";this.Z2943CentroCostoEstado="";this.O2943CentroCostoEstado="";this.A2944CentroCosto094="";this.Z2944CentroCosto094="";this.O2944CentroCosto094="";this.A2945CentroCosto095=gx.date.nullDate();this.Z2945CentroCosto095=gx.date.nullDate();this.O2945CentroCosto095=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7CentroCostoId=0;this.AV10WebSession={};this.A2941CentroCostoId=0;this.A2945CentroCosto095=gx.date.nullDate();this.A2944CentroCosto094="";this.Gx_BScreen=0;this.A2942CentroCostoNombre="";this.A2943CentroCostoEstado="";this.Gx_mode="";this.Events={e12622_client:["AFTER TRN",!0],e1362251_client:["ENTER",!0],e1462251_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CentroCostoId",fld:"vCENTROCOSTOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CentroCostoId",fld:"vCENTROCOSTOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""},{av:'gx.fn.getCtrlProperty("CENTROCOSTO094","Visible")',ctrl:"CENTROCOSTO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CENTROCOSTO095","Visible")',ctrl:"CENTROCOSTO095",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_CENTROCOSTOID=[[{av:"A2941CentroCostoId",fld:"CENTROCOSTOID",pic:"ZZZZZZZ9"}],[{av:"A2941CentroCostoId",fld:"CENTROCOSTOID",pic:"ZZZZZZZ9"}]];this.EvtParms.VALID_CENTROCOSTONOMBRE=[[{av:"A2942CentroCostoNombre",fld:"CENTROCOSTONOMBRE",pic:"@!"}],[{av:"A2942CentroCostoNombre",fld:"CENTROCOSTONOMBRE",pic:"@!"}]];this.EvtParms.VALID_CENTROCOSTOESTADO=[[{ctrl:"CENTROCOSTOESTADO"},{av:"A2943CentroCostoEstado",fld:"CENTROCOSTOESTADO",pic:"@!"}],[{ctrl:"CENTROCOSTOESTADO"},{av:"A2943CentroCostoEstado",fld:"CENTROCOSTOESTADO",pic:"@!"}]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7CentroCostoId","vCENTROCOSTOID",0,"int",8,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(centrocosto)})