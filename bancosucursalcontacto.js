/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:52.5
*/
gx.evt.autoSkip=!1;gx.define("bancosucursalcontacto",!1,function(){var n,t;this.ServerClass="bancosucursalcontacto";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10BancoId=gx.fn.getIntegerValue("vBANCOID",".");this.AV11BancoSucursalId=gx.fn.getIntegerValue("vBANCOSUCURSALID",".");this.AV12BancoSucursalContactoNombre=gx.fn.getControlValue("vBANCOSUCURSALCONTACTONOMBRE");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Bancoid=function(){return this.validSrvEvt("Valid_Bancoid",0).then(function(n){return n}.closure(this))};this.Valid_Bancosucursalid=function(){return this.validSrvEvt("Valid_Bancosucursalid",0).then(function(n){return n}.closure(this))};this.Valid_Bancosucursalcontactonombre=function(){return this.validCliEvt("Valid_Bancosucursalcontactonombre",0,function(){try{var n=gx.util.balloon.getNew("BANCOSUCURSALCONTACTONOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e123b2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e133b149_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e143b149_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78];this.GXLastCtrlId=78;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOID",gxz:"Z29BancoId",gxold:"O29BancoId",gxvar:"A29BancoId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A29BancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z29BancoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOID",gx.O.A29BancoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A29BancoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOID",".")},nac:function(){return!(0==this.AV10BancoId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCONOMBRE",gxz:"Z432BancoNombre",gxold:"O432BancoNombre",gxvar:"A432BancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A432BancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z432BancoNombre=n)},v2c:function(){gx.fn.setControlValue("BANCONOMBRE",gx.O.A432BancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A432BancoNombre=this.val())},val:function(){return gx.fn.getControlValue("BANCONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALID",gxz:"Z165BancoSucursalId",gxold:"O165BancoSucursalId",gxvar:"A165BancoSucursalId",ucs:[],op:[33],ip:[33,29,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A165BancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z165BancoSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALID",gx.O.A165BancoSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A165BancoSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOSUCURSALID",".")},nac:function(){return!(0==this.AV11BancoSucursalId)}};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALNOMBRE",gxz:"Z1522BancoSucursalNombre",gxold:"O1522BancoSucursalNombre",gxvar:"A1522BancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1522BancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1522BancoSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALNOMBRE",gx.O.A1522BancoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1522BancoSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bancosucursalcontactonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTONOMBRE",gxz:"Z206BancoSucursalContactoNombre",gxold:"O206BancoSucursalContactoNombre",gxvar:"A206BancoSucursalContactoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A206BancoSucursalContactoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z206BancoSucursalContactoNombre=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTONOMBRE",gx.O.A206BancoSucursalContactoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A206BancoSucursalContactoNombre=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTONOMBRE")},nac:function(){return!(""==this.AV12BancoSucursalContactoNombre)}};this.declareDomainHdlr(37,function(){});n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOCARGO",gxz:"Z1099BancoSucursalContactoCargo",gxold:"O1099BancoSucursalContactoCargo",gxvar:"A1099BancoSucursalContactoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1099BancoSucursalContactoCargo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1099BancoSucursalContactoCargo=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOCARGO",gx.O.A1099BancoSucursalContactoCargo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1099BancoSucursalContactoCargo=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTOCARGO")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOTELEFONO",gxz:"Z1100BancoSucursalContactoTelefono",gxold:"O1100BancoSucursalContactoTelefono",gxvar:"A1100BancoSucursalContactoTelefono",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1100BancoSucursalContactoTelefono=n)},v2z:function(n){n!==undefined&&(gx.O.Z1100BancoSucursalContactoTelefono=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOTELEFONO",gx.O.A1100BancoSucursalContactoTelefono,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1100BancoSucursalContactoTelefono=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTOTELEFONO")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOINTERNO",gxz:"Z1101BancoSucursalContactoInterno",gxold:"O1101BancoSucursalContactoInterno",gxvar:"A1101BancoSucursalContactoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1101BancoSucursalContactoInterno=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1101BancoSucursalContactoInterno=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOINTERNO",gx.O.A1101BancoSucursalContactoInterno,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1101BancoSucursalContactoInterno=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOSUCURSALCONTACTOINTERNO",".")},nac:gx.falseFn};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOCELULAR",gxz:"Z1102BancoSucursalContactoCelular",gxold:"O1102BancoSucursalContactoCelular",gxvar:"A1102BancoSucursalContactoCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1102BancoSucursalContactoCelular=n)},v2z:function(n){n!==undefined&&(gx.O.Z1102BancoSucursalContactoCelular=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOCELULAR",gx.O.A1102BancoSucursalContactoCelular,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1102BancoSucursalContactoCelular=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTOCELULAR")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOHORARIO",gxz:"Z1103BancoSucursalContactoHorario",gxold:"O1103BancoSucursalContactoHorario",gxvar:"A1103BancoSucursalContactoHorario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1103BancoSucursalContactoHorario=n)},v2z:function(n){n!==undefined&&(gx.O.Z1103BancoSucursalContactoHorario=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOHORARIO",gx.O.A1103BancoSucursalContactoHorario,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1103BancoSucursalContactoHorario=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTOHORARIO")},nac:gx.falseFn};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOCUMPLEANIO",gxz:"Z1104BancoSucursalContactoCumpleanio",gxold:"O1104BancoSucursalContactoCumpleanio",gxvar:"A1104BancoSucursalContactoCumpleanio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1104BancoSucursalContactoCumpleanio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1104BancoSucursalContactoCumpleanio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOCUMPLEANIO",gx.O.A1104BancoSucursalContactoCumpleanio,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1104BancoSucursalContactoCumpleanio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BANCOSUCURSALCONTACTOCUMPLEANIO",".")},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,lvl:0,type:"svchar",len:1024,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALCONTACTOOBSERVACION",gxz:"Z1105BancoSucursalContactoObservacion",gxold:"O1105BancoSucursalContactoObservacion",gxvar:"A1105BancoSucursalContactoObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1105BancoSucursalContactoObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1105BancoSucursalContactoObservacion=n)},v2c:function(){gx.fn.setControlValue("BANCOSUCURSALCONTACTOOBSERVACION",gx.O.A1105BancoSucursalContactoObservacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1105BancoSucursalContactoObservacion=this.val())},val:function(){return gx.fn.getControlValue("BANCOSUCURSALCONTACTOOBSERVACION")},nac:gx.falseFn};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTNTRN_ENTER",grid:0,evt:"e133b149_client",std:"ENTER"};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"BTNTRN_CANCEL",grid:0,evt:"e143b149_client"};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"BTNTRN_DELETE",grid:0,evt:"e153b149_client",std:"DELETE"};n[77]={id:77,fld:"PROMPT_29",grid:149};n[78]={id:78,fld:"PROMPT_165",grid:149};this.A29BancoId=0;this.Z29BancoId=0;this.O29BancoId=0;this.A432BancoNombre="";this.Z432BancoNombre="";this.O432BancoNombre="";this.A165BancoSucursalId=0;this.Z165BancoSucursalId=0;this.O165BancoSucursalId=0;this.A1522BancoSucursalNombre="";this.Z1522BancoSucursalNombre="";this.O1522BancoSucursalNombre="";this.A206BancoSucursalContactoNombre="";this.Z206BancoSucursalContactoNombre="";this.O206BancoSucursalContactoNombre="";this.A1099BancoSucursalContactoCargo="";this.Z1099BancoSucursalContactoCargo="";this.O1099BancoSucursalContactoCargo="";this.A1100BancoSucursalContactoTelefono="";this.Z1100BancoSucursalContactoTelefono="";this.O1100BancoSucursalContactoTelefono="";this.A1101BancoSucursalContactoInterno=0;this.Z1101BancoSucursalContactoInterno=0;this.O1101BancoSucursalContactoInterno=0;this.A1102BancoSucursalContactoCelular="";this.Z1102BancoSucursalContactoCelular="";this.O1102BancoSucursalContactoCelular="";this.A1103BancoSucursalContactoHorario="";this.Z1103BancoSucursalContactoHorario="";this.O1103BancoSucursalContactoHorario="";this.A1104BancoSucursalContactoCumpleanio=0;this.Z1104BancoSucursalContactoCumpleanio=0;this.O1104BancoSucursalContactoCumpleanio=0;this.A1105BancoSucursalContactoObservacion="";this.Z1105BancoSucursalContactoObservacion="";this.O1105BancoSucursalContactoObservacion="";this.AV7WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV8TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV10BancoId=0;this.AV11BancoSucursalId=0;this.AV12BancoSucursalContactoNombre="";this.AV9WebSession={};this.A29BancoId=0;this.A165BancoSucursalId=0;this.A206BancoSucursalContactoNombre="";this.A432BancoNombre="";this.A1522BancoSucursalNombre="";this.A1099BancoSucursalContactoCargo="";this.A1100BancoSucursalContactoTelefono="";this.A1101BancoSucursalContactoInterno=0;this.A1102BancoSucursalContactoCelular="";this.A1103BancoSucursalContactoHorario="";this.A1104BancoSucursalContactoCumpleanio=0;this.A1105BancoSucursalContactoObservacion="";this.Gx_mode="";this.Events={e123b2_client:["AFTER TRN",!0],e133b149_client:["ENTER",!0],e143b149_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV11BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0},{av:"AV12BancoSucursalContactoNombre",fld:"vBANCOSUCURSALCONTACTONOMBRE",pic:"@!",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV10BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV11BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0},{av:"AV12BancoSucursalContactoNombre",fld:"vBANCOSUCURSALCONTACTONOMBRE",pic:"@!",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV7WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_BANCOID=[[{av:"A29BancoId",fld:"BANCOID",pic:"ZZ9"},{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"}],[{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"}]];this.EvtParms.VALID_BANCOSUCURSALID=[[{av:"A29BancoId",fld:"BANCOID",pic:"ZZ9"},{av:"A165BancoSucursalId",fld:"BANCOSUCURSALID",pic:"999"},{av:"A1522BancoSucursalNombre",fld:"BANCOSUCURSALNOMBRE",pic:"@!"}],[{av:"A1522BancoSucursalNombre",fld:"BANCOSUCURSALNOMBRE",pic:"@!"}]];this.EvtParms.VALID_BANCOSUCURSALCONTACTONOMBRE=[[],[]];this.setPrompt("PROMPT_29",[22]);this.setPrompt("PROMPT_165",[29]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV10BancoId","vBANCOID",0,"int",3,0);this.setVCMap("AV11BancoSucursalId","vBANCOSUCURSALID",0,"int",3,0);this.setVCMap("AV12BancoSucursalContactoNombre","vBANCOSUCURSALCONTACTONOMBRE",0,"svchar",64,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV8TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(bancosucursalcontacto)})