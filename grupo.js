/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:39:36.91
*/
gx.evt.autoSkip=!1;gx.define("grupo",!1,function(){var n,t;this.ServerClass="grupo";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7GrupoId=gx.fn.getIntegerValue("vGRUPOID",".");this.AV16Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Grupoid=function(){return this.validCliEvt("Valid_Grupoid",0,function(){try{var n=gx.util.balloon.getNew("GRUPOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Gruponombre=function(){return this.validCliEvt("Valid_Gruponombre",0,function(){try{var n=gx.util.balloon.getNew("GRUPONOMBRE");if(this.AnyError=0,""==this.A362GrupoNombre)try{n.setError("Error!!! Debe Ingresar un Nombre de Grupo...");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Grupoestado=function(){return this.validCliEvt("Valid_Grupoestado",0,function(){try{var n=gx.util.balloon.getNew("GRUPOESTADO");if(this.AnyError=0,!(this.A829GrupoEstado=="ACT"||this.A829GrupoEstado=="INA"||""==this.A829GrupoEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12042_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e13046_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14046_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];this.GXLastCtrlId=48;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Grupoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPOID",gxz:"Z10GrupoId",gxold:"O10GrupoId",gxvar:"A10GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A10GrupoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z10GrupoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("GRUPOID",gx.O.A10GrupoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A10GrupoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("GRUPOID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gruponombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPONOMBRE",gxz:"Z362GrupoNombre",gxold:"O362GrupoNombre",gxvar:"A362GrupoNombre",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A362GrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z362GrupoNombre=n)},v2c:function(){gx.fn.setControlValue("GRUPONOMBRE",gx.O.A362GrupoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A362GrupoNombre=this.val())},val:function(){return gx.fn.getControlValue("GRUPONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPOESTADO",gxz:"Z829GrupoEstado",gxold:"O829GrupoEstado",gxvar:"A829GrupoEstado",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A829GrupoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z829GrupoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("GRUPOESTADO",gx.O.A829GrupoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A829GrupoEstado=this.val())},val:function(){return gx.fn.getControlValue("GRUPOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"BTNTRN_ENTER",grid:0,evt:"e13046_client",std:"ENTER"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_CANCEL",grid:0,evt:"e14046_client"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_DELETE",grid:0,evt:"e15046_client",std:"DELETE"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPO094",gxz:"Z830Grupo094",gxold:"O830Grupo094",gxvar:"A830Grupo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A830Grupo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z830Grupo094=n)},v2c:function(){gx.fn.setControlValue("GRUPO094",gx.O.A830Grupo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A830Grupo094=this.val())},val:function(){return gx.fn.getControlValue("GRUPO094")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[46]={id:46,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPO095",gxz:"Z831Grupo095",gxold:"O831Grupo095",gxvar:"A831Grupo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A831Grupo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z831Grupo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("GRUPO095",gx.O.A831Grupo095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A831Grupo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("GRUPO095")},nac:gx.falseFn};n[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPO097",gxz:"Z832Grupo097",gxold:"O832Grupo097",gxvar:"A832Grupo097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A832Grupo097=n)},v2z:function(n){n!==undefined&&(gx.O.Z832Grupo097=n)},v2c:function(){gx.fn.setControlValue("GRUPO097",gx.O.A832Grupo097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A832Grupo097=this.val())},val:function(){return gx.fn.getControlValue("GRUPO097")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPO098",gxz:"Z833Grupo098",gxold:"O833Grupo098",gxvar:"A833Grupo098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A833Grupo098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z833Grupo098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("GRUPO098",gx.O.A833Grupo098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A833Grupo098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("GRUPO098")},nac:gx.falseFn};this.A10GrupoId=0;this.Z10GrupoId=0;this.O10GrupoId=0;this.A362GrupoNombre="";this.Z362GrupoNombre="";this.O362GrupoNombre="";this.A829GrupoEstado="";this.Z829GrupoEstado="";this.O829GrupoEstado="";this.A830Grupo094="";this.Z830Grupo094="";this.O830Grupo094="";this.A831Grupo095=gx.date.nullDate();this.Z831Grupo095=gx.date.nullDate();this.O831Grupo095=gx.date.nullDate();this.A832Grupo097="";this.Z832Grupo097="";this.O832Grupo097="";this.A833Grupo098=gx.date.nullDate();this.Z833Grupo098=gx.date.nullDate();this.O833Grupo098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7GrupoId=0;this.AV10WebSession={};this.A10GrupoId=0;this.A831Grupo095=gx.date.nullDate();this.A830Grupo094="";this.A833Grupo098=gx.date.nullDate();this.A832Grupo097="";this.AV16Pgmdesc="";this.Gx_BScreen=0;this.A362GrupoNombre="";this.A829GrupoEstado="";this.Gx_mode="";this.Events={e12042_client:["AFTER TRN",!0],e13046_client:["ENTER",!0],e14046_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7GrupoId",fld:"vGRUPOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7GrupoId",fld:"vGRUPOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("GRUPO094","Visible")',ctrl:"GRUPO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("GRUPO095","Visible")',ctrl:"GRUPO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("GRUPO097","Visible")',ctrl:"GRUPO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("GRUPO098","Visible")',ctrl:"GRUPO098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_GRUPOID=[[],[]];this.EvtParms.VALID_GRUPONOMBRE=[[{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"}],[{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"}]];this.EvtParms.VALID_GRUPOESTADO=[[{ctrl:"GRUPOESTADO"},{av:"A829GrupoEstado",fld:"GRUPOESTADO",pic:"@!"}],[{ctrl:"GRUPOESTADO"},{av:"A829GrupoEstado",fld:"GRUPOESTADO",pic:"@!"}]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7GrupoId","vGRUPOID",0,"int",4,0);this.setVCMap("AV16Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(grupo)})