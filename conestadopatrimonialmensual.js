/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:12:31.97
*/
gx.evt.autoSkip=!1;gx.define("conestadopatrimonialmensual",!1,function(){var n,t;this.ServerClass="conestadopatrimonialmensual";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ConEPMUsuId=gx.fn.getIntegerValue("vCONEPMUSUID",".");this.AV8ConEPMPlanCuentaId=gx.fn.getIntegerValue("vCONEPMPLANCUENTAID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Conepmplancuentaid=function(){return this.validCliEvt("Valid_Conepmplancuentaid",0,function(){try{var n=gx.util.balloon.getNew("CONEPMPLANCUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Conepmusuid=function(){return this.validCliEvt("Valid_Conepmusuid",0,function(){try{var n=gx.util.balloon.getNew("CONEPMUSUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e126c2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e136c263_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e146c263_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79];this.GXLastCtrlId=79;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMEJERCICIO",gxz:"Z3097ConEPMEjercicio",gxold:"O3097ConEPMEjercicio",gxvar:"A3097ConEPMEjercicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3097ConEPMEjercicio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3097ConEPMEjercicio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONEPMEJERCICIO",gx.O.A3097ConEPMEjercicio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3097ConEPMEjercicio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMEJERCICIO",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMMES",gxz:"Z3106ConEPMMes",gxold:"O3106ConEPMMes",gxvar:"A3106ConEPMMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3106ConEPMMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3106ConEPMMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONEPMMES",gx.O.A3106ConEPMMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3106ConEPMMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMMES",".")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conepmplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTAID",gxz:"Z3096ConEPMPlanCuentaId",gxold:"O3096ConEPMPlanCuentaId",gxvar:"A3096ConEPMPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3096ConEPMPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3096ConEPMPlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTAID",gx.O.A3096ConEPMPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3096ConEPMPlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMPLANCUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTANOMBRE",gxz:"Z3098ConEPMPlanCuentaNombre",gxold:"O3098ConEPMPlanCuentaNombre",gxvar:"A3098ConEPMPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3098ConEPMPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3098ConEPMPlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTANOMBRE",gx.O.A3098ConEPMPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3098ConEPMPlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("CONEPMPLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTAPADRE",gxz:"Z3099ConEPMPlanCuentaPadre",gxold:"O3099ConEPMPlanCuentaPadre",gxvar:"A3099ConEPMPlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3099ConEPMPlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3099ConEPMPlanCuentaPadre=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTAPADRE",gx.O.A3099ConEPMPlanCuentaPadre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3099ConEPMPlanCuentaPadre=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMPLANCUENTAPADRE",".")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTANIVEL",gxz:"Z3100ConEPMPlanCuentaNivel",gxold:"O3100ConEPMPlanCuentaNivel",gxvar:"A3100ConEPMPlanCuentaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3100ConEPMPlanCuentaNivel=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3100ConEPMPlanCuentaNivel=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTANIVEL",gx.O.A3100ConEPMPlanCuentaNivel,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3100ConEPMPlanCuentaNivel=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMPLANCUENTANIVEL",".")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTAIMPUTA",gxz:"Z3101ConEPMPlanCuentaImputa",gxold:"O3101ConEPMPlanCuentaImputa",gxvar:"A3101ConEPMPlanCuentaImputa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3101ConEPMPlanCuentaImputa=n)},v2z:function(n){n!==undefined&&(gx.O.Z3101ConEPMPlanCuentaImputa=n)},v2c:function(){gx.fn.setComboBoxValue("CONEPMPLANCUENTAIMPUTA",gx.O.A3101ConEPMPlanCuentaImputa);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3101ConEPMPlanCuentaImputa=this.val())},val:function(){return gx.fn.getControlValue("CONEPMPLANCUENTAIMPUTA")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTATIPOCTA",gxz:"Z3102ConEPMPlanCuentaTipoCta",gxold:"O3102ConEPMPlanCuentaTipoCta",gxvar:"A3102ConEPMPlanCuentaTipoCta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3102ConEPMPlanCuentaTipoCta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3102ConEPMPlanCuentaTipoCta=n)},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTATIPOCTA",gx.O.A3102ConEPMPlanCuentaTipoCta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3102ConEPMPlanCuentaTipoCta=this.val())},val:function(){return gx.fn.getControlValue("CONEPMPLANCUENTATIPOCTA")},nac:gx.falseFn};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMPLANCUENTATIPO",gxz:"Z3103ConEPMPlanCuentaTipo",gxold:"O3103ConEPMPlanCuentaTipo",gxvar:"A3103ConEPMPlanCuentaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3103ConEPMPlanCuentaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3103ConEPMPlanCuentaTipo=n)},v2c:function(){gx.fn.setControlValue("CONEPMPLANCUENTATIPO",gx.O.A3103ConEPMPlanCuentaTipo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3103ConEPMPlanCuentaTipo=this.val())},val:function(){return gx.fn.getControlValue("CONEPMPLANCUENTATIPO")},nac:gx.falseFn};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,lvl:0,type:"decimal",len:15,dec:2,sign:!0,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMIMPORTE",gxz:"Z3104ConEPMImporte",gxold:"O3104ConEPMImporte",gxvar:"A3104ConEPMImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3104ConEPMImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3104ConEPMImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONEPMIMPORTE",gx.O.A3104ConEPMImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3104ConEPMImporte=this.val())},val:function(){return gx.fn.getDecimalValue("CONEPMIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(61,function(){});n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMFECHAHORA",gxz:"Z3105ConEPMFechaHora",gxold:"O3105ConEPMFechaHora",gxvar:"A3105ConEPMFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3105ConEPMFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3105ConEPMFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONEPMFECHAHORA",gx.O.A3105ConEPMFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3105ConEPMFechaHora=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONEPMFECHAHORA")},nac:gx.falseFn};this.declareDomainHdlr(66,function(){});n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"BTNTRN_ENTER",grid:0,evt:"e136c263_client",std:"ENTER"};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"BTNTRN_CANCEL",grid:0,evt:"e146c263_client"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"BTNTRN_DELETE",grid:0,evt:"e156c263_client",std:"DELETE"};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[79]={id:79,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conepmusuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONEPMUSUID",gxz:"Z3095ConEPMUsuId",gxold:"O3095ConEPMUsuId",gxvar:"A3095ConEPMUsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3095ConEPMUsuId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3095ConEPMUsuId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONEPMUSUID",gx.O.A3095ConEPMUsuId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3095ConEPMUsuId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONEPMUSUID",".")},nac:gx.falseFn};this.A3097ConEPMEjercicio=0;this.Z3097ConEPMEjercicio=0;this.O3097ConEPMEjercicio=0;this.A3106ConEPMMes=0;this.Z3106ConEPMMes=0;this.O3106ConEPMMes=0;this.A3096ConEPMPlanCuentaId=0;this.Z3096ConEPMPlanCuentaId=0;this.O3096ConEPMPlanCuentaId=0;this.A3098ConEPMPlanCuentaNombre="";this.Z3098ConEPMPlanCuentaNombre="";this.O3098ConEPMPlanCuentaNombre="";this.A3099ConEPMPlanCuentaPadre=0;this.Z3099ConEPMPlanCuentaPadre=0;this.O3099ConEPMPlanCuentaPadre=0;this.A3100ConEPMPlanCuentaNivel=0;this.Z3100ConEPMPlanCuentaNivel=0;this.O3100ConEPMPlanCuentaNivel=0;this.A3101ConEPMPlanCuentaImputa="";this.Z3101ConEPMPlanCuentaImputa="";this.O3101ConEPMPlanCuentaImputa="";this.A3102ConEPMPlanCuentaTipoCta="";this.Z3102ConEPMPlanCuentaTipoCta="";this.O3102ConEPMPlanCuentaTipoCta="";this.A3103ConEPMPlanCuentaTipo="";this.Z3103ConEPMPlanCuentaTipo="";this.O3103ConEPMPlanCuentaTipo="";this.A3104ConEPMImporte=0;this.Z3104ConEPMImporte=0;this.O3104ConEPMImporte=0;this.A3105ConEPMFechaHora=gx.date.nullDate();this.Z3105ConEPMFechaHora=gx.date.nullDate();this.O3105ConEPMFechaHora=gx.date.nullDate();this.A3095ConEPMUsuId=0;this.Z3095ConEPMUsuId=0;this.O3095ConEPMUsuId=0;this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ConEPMUsuId=0;this.AV8ConEPMPlanCuentaId=0;this.AV11WebSession={};this.A3095ConEPMUsuId=0;this.A3096ConEPMPlanCuentaId=0;this.A3097ConEPMEjercicio=0;this.A3106ConEPMMes=0;this.A3098ConEPMPlanCuentaNombre="";this.A3099ConEPMPlanCuentaPadre=0;this.A3100ConEPMPlanCuentaNivel=0;this.A3101ConEPMPlanCuentaImputa="";this.A3102ConEPMPlanCuentaTipoCta="";this.A3103ConEPMPlanCuentaTipo="";this.A3104ConEPMImporte=0;this.A3105ConEPMFechaHora=gx.date.nullDate();this.Gx_mode="";this.Events={e126c2_client:["AFTER TRN",!0],e136c263_client:["ENTER",!0],e146c263_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ConEPMUsuId",fld:"vCONEPMUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV8ConEPMPlanCuentaId",fld:"vCONEPMPLANCUENTAID",pic:"ZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ConEPMUsuId",fld:"vCONEPMUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV8ConEPMPlanCuentaId",fld:"vCONEPMPLANCUENTAID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A3095ConEPMUsuId",fld:"CONEPMUSUID",pic:"ZZZZZZZZZZ9"},{av:"A3097ConEPMEjercicio",fld:"CONEPMEJERCICIO",pic:"ZZZZ"},{ctrl:"CONEPMMES"},{av:"A3106ConEPMMes",fld:"CONEPMMES",pic:"Z9"},{av:"A3098ConEPMPlanCuentaNombre",fld:"CONEPMPLANCUENTANOMBRE",pic:"@!"},{av:"A3099ConEPMPlanCuentaPadre",fld:"CONEPMPLANCUENTAPADRE",pic:"ZZZZZZZZZ9"},{av:"A3100ConEPMPlanCuentaNivel",fld:"CONEPMPLANCUENTANIVEL",pic:"9"},{ctrl:"CONEPMPLANCUENTAIMPUTA"},{av:"A3101ConEPMPlanCuentaImputa",fld:"CONEPMPLANCUENTAIMPUTA",pic:""},{av:"A3102ConEPMPlanCuentaTipoCta",fld:"CONEPMPLANCUENTATIPOCTA",pic:""},{av:"A3103ConEPMPlanCuentaTipo",fld:"CONEPMPLANCUENTATIPO",pic:""},{av:"A3104ConEPMImporte",fld:"CONEPMIMPORTE",pic:"ZZZ,ZZZ,ZZZ,ZZ9.99"},{av:"A3105ConEPMFechaHora",fld:"CONEPMFECHAHORA",pic:"99/99/99 99:99"}],[]];this.EvtParms.START=[[],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""},{av:'gx.fn.getCtrlProperty("CONEPMUSUID","Visible")',ctrl:"CONEPMUSUID",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_CONEPMPLANCUENTAID=[[],[]];this.EvtParms.VALID_CONEPMUSUID=[[],[]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ConEPMUsuId","vCONEPMUSUID",0,"int",11,0);this.setVCMap("AV8ConEPMPlanCuentaId","vCONEPMPLANCUENTAID",0,"int",10,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(conestadopatrimonialmensual)})