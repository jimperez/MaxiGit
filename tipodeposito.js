/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:6:38.44
*/
gx.evt.autoSkip=!1;gx.define("tipodeposito",!1,function(){var n,t;this.ServerClass="tipodeposito";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10TipoDepositoId=gx.fn.getIntegerValue("vTIPODEPOSITOID",".");this.AV16Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Tipodepositoid=function(){return this.validCliEvt("Valid_Tipodepositoid",0,function(){try{var n=gx.util.balloon.getNew("TIPODEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tipodepositonombre=function(){return this.validCliEvt("Valid_Tipodepositonombre",0,function(){try{var n=gx.util.balloon.getNew("TIPODEPOSITONOMBRE");if(this.AnyError=0,""==this.A877TipoDepositoNombre)try{n.setError("Error! Debe Ingresar un Nombre de Tipo de Depósito.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tipodepositoestado=function(){return this.validCliEvt("Valid_Tipodepositoestado",0,function(){try{var n=gx.util.balloon.getNew("TIPODEPOSITOESTADO");if(this.AnyError=0,!(this.A911TipoDepositoEstado=="ACT"||this.A911TipoDepositoEstado=="INA"||""==this.A911TipoDepositoEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e120d2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e130d87_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140d87_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];this.GXLastCtrlId=48;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipodepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOID",gxz:"Z122TipoDepositoId",gxold:"O122TipoDepositoId",gxvar:"A122TipoDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z122TipoDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITOID",gx.O.A122TipoDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TIPODEPOSITOID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodepositonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITONOMBRE",gxz:"Z877TipoDepositoNombre",gxold:"O877TipoDepositoNombre",gxvar:"A877TipoDepositoNombre",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A877TipoDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z877TipoDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITONOMBRE",gx.O.A877TipoDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A877TipoDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodepositoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOESTADO",gxz:"Z911TipoDepositoEstado",gxold:"O911TipoDepositoEstado",gxvar:"A911TipoDepositoEstado",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A911TipoDepositoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z911TipoDepositoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("TIPODEPOSITOESTADO",gx.O.A911TipoDepositoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A911TipoDepositoEstado=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"BTNTRN_ENTER",grid:0,evt:"e130d87_client",std:"ENTER"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_CANCEL",grid:0,evt:"e140d87_client"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_DELETE",grid:0,evt:"e150d87_client",std:"DELETE"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO094",gxz:"Z890TipoDeposito094",gxold:"O890TipoDeposito094",gxvar:"A890TipoDeposito094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A890TipoDeposito094=n)},v2z:function(n){n!==undefined&&(gx.O.Z890TipoDeposito094=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO094",gx.O.A890TipoDeposito094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A890TipoDeposito094=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITO094")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[46]={id:46,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO095",gxz:"Z891TipoDeposito095",gxold:"O891TipoDeposito095",gxvar:"A891TipoDeposito095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A891TipoDeposito095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z891TipoDeposito095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO095",gx.O.A891TipoDeposito095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A891TipoDeposito095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TIPODEPOSITO095")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO097",gxz:"Z892TipoDeposito097",gxold:"O892TipoDeposito097",gxvar:"A892TipoDeposito097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A892TipoDeposito097=n)},v2z:function(n){n!==undefined&&(gx.O.Z892TipoDeposito097=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO097",gx.O.A892TipoDeposito097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A892TipoDeposito097=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITO097")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO098",gxz:"Z893TipoDeposito098",gxold:"O893TipoDeposito098",gxvar:"A893TipoDeposito098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A893TipoDeposito098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z893TipoDeposito098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO098",gx.O.A893TipoDeposito098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A893TipoDeposito098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TIPODEPOSITO098")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});this.A122TipoDepositoId=0;this.Z122TipoDepositoId=0;this.O122TipoDepositoId=0;this.A877TipoDepositoNombre="";this.Z877TipoDepositoNombre="";this.O877TipoDepositoNombre="";this.A911TipoDepositoEstado="";this.Z911TipoDepositoEstado="";this.O911TipoDepositoEstado="";this.A890TipoDeposito094="";this.Z890TipoDeposito094="";this.O890TipoDeposito094="";this.A891TipoDeposito095=gx.date.nullDate();this.Z891TipoDeposito095=gx.date.nullDate();this.O891TipoDeposito095=gx.date.nullDate();this.A892TipoDeposito097="";this.Z892TipoDeposito097="";this.O892TipoDeposito097="";this.A893TipoDeposito098=gx.date.nullDate();this.Z893TipoDeposito098=gx.date.nullDate();this.O893TipoDeposito098=gx.date.nullDate();this.AV7WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV8TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV10TipoDepositoId=0;this.AV9WebSession={};this.A122TipoDepositoId=0;this.A891TipoDeposito095=gx.date.nullDate();this.A890TipoDeposito094="";this.A893TipoDeposito098=gx.date.nullDate();this.A892TipoDeposito097="";this.AV16Pgmdesc="";this.Gx_BScreen=0;this.A877TipoDepositoNombre="";this.A911TipoDepositoEstado="";this.Gx_mode="";this.Events={e120d2_client:["AFTER TRN",!0],e130d87_client:["ENTER",!0],e140d87_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TipoDepositoId",fld:"vTIPODEPOSITOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TipoDepositoId",fld:"vTIPODEPOSITOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV7WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:""},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO094","Visible")',ctrl:"TIPODEPOSITO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO095","Visible")',ctrl:"TIPODEPOSITO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO097","Visible")',ctrl:"TIPODEPOSITO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO098","Visible")',ctrl:"TIPODEPOSITO098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_TIPODEPOSITOID=[[],[]];this.EvtParms.VALID_TIPODEPOSITONOMBRE=[[{av:"A877TipoDepositoNombre",fld:"TIPODEPOSITONOMBRE",pic:"@!"}],[{av:"A877TipoDepositoNombre",fld:"TIPODEPOSITONOMBRE",pic:"@!"}]];this.EvtParms.VALID_TIPODEPOSITOESTADO=[[{ctrl:"TIPODEPOSITOESTADO"},{av:"A911TipoDepositoEstado",fld:"TIPODEPOSITOESTADO",pic:"@!"}],[{ctrl:"TIPODEPOSITOESTADO"},{av:"A911TipoDepositoEstado",fld:"TIPODEPOSITOESTADO",pic:"@!"}]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV10TipoDepositoId","vTIPODEPOSITOID",0,"int",4,0);this.setVCMap("AV16Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV8TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(tipodeposito)})