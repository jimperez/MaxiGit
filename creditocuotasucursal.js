/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:26.6
*/
gx.evt.autoSkip=!1;gx.define("creditocuotasucursal",!1,function(){var n,t;this.ServerClass="creditocuotasucursal";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2138CreditoCuotaCosto=gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",");this.A2139CreditoCuotaDesde=gx.fn.getDateValue("CREDITOCUOTADESDE");this.A2140CreditoCuotaHasta=gx.fn.getDateValue("CREDITOCUOTAHASTA");this.AV7CreditoId=gx.fn.getIntegerValue("vCREDITOID",".");this.AV16CreditoCuota=gx.fn.getIntegerValue("vCREDITOCUOTA",".");this.AV8EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV9SucursalId=gx.fn.getIntegerValue("vSUCURSALID",".");this.A119PlanId=gx.fn.getIntegerValue("PLANID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Creditoid=function(){return this.validSrvEvt("Valid_Creditoid",0).then(function(n){return n}.closure(this))};this.Valid_Creditocuota=function(){return this.validSrvEvt("Valid_Creditocuota",0).then(function(n){return n}.closure(this))};this.Valid_Sucursalid=function(){return this.validCliEvt("Valid_Sucursalid",0,function(){try{var n=gx.util.balloon.getNew("SUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Entidadid=function(){return this.validSrvEvt("Valid_Entidadid",0).then(function(n){return n}.closure(this))};this.Valid_Creditodescripcion=function(){return this.validCliEvt("Valid_Creditodescripcion",0,function(){try{var n=gx.util.balloon.getNew("CREDITODESCRIPCION");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalnombre=function(){return this.validCliEvt("Valid_Sucursalnombre",0,function(){try{var n=gx.util.balloon.getNew("SUCURSALNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditosucursalestado=function(){return this.validCliEvt("Valid_Creditosucursalestado",0,function(){try{var n=gx.util.balloon.getNew("CREDITOSUCURSALESTADO");if(this.AnyError=0,!(this.A2142CreditoSucursalEstado=="ACT"||this.A2142CreditoSucursalEstado=="INA"||""==this.A2142CreditoSucursalEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotanombre=function(){return this.validCliEvt("Valid_Creditocuotanombre",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTANOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e124k2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e134k195_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e144k195_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];this.GXLastCtrlId=62;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[56,25],ip:[56,25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOID",gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOID",".")},nac:function(){return!(0==this.AV7CreditoId)}};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditodescripcion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITODESCRIPCION",gxz:"Z2137CreditoDescripcion",gxold:"O2137CreditoDescripcion",gxvar:"A2137CreditoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2137CreditoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2137CreditoDescripcion=n)},v2c:function(){gx.fn.setControlValue("CREDITODESCRIPCION",gx.O.A2137CreditoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2137CreditoDescripcion=this.val())},val:function(){return gx.fn.getControlValue("CREDITODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[57],ip:[57,25,30,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTA",gx.O.A267CreditoCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOCUOTA",".")},nac:function(){return!(0==this.AV16CreditoCuota)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALID",gxz:"Z45SucursalId",gxold:"O45SucursalId",gxvar:"A45SucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A45SucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z45SucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SUCURSALID",gx.O.A45SucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A45SucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SUCURSALID",".")},nac:function(){return!(0==this.AV9SucursalId)}};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Sucursalnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALNOMBRE",gxz:"Z374SucursalNombre",gxold:"O374SucursalNombre",gxvar:"A374SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A374SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z374SucursalNombre=n)},v2c:function(){gx.fn.setControlValue("SUCURSALNOMBRE",gx.O.A374SucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A374SucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("SUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditosucursalestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOSUCURSALESTADO",gxz:"Z2142CreditoSucursalEstado",gxold:"O2142CreditoSucursalEstado",gxvar:"A2142CreditoSucursalEstado",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2142CreditoSucursalEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2142CreditoSucursalEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOSUCURSALESTADO",gx.O.A2142CreditoSucursalEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2142CreditoSucursalEstado=this.val())},val:function(){return gx.fn.getControlValue("CREDITOSUCURSALESTADO")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"BTNTRN_ENTER",grid:0,evt:"e134k195_client",std:"ENTER"};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"BTNTRN_CANCEL",grid:0,evt:"e144k195_client"};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"BTNTRN_DELETE",grid:0,evt:"e154k195_client",std:"DELETE"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[56]={id:56,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOESTADO",gxz:"Z2141CreditoEstado",gxold:"O2141CreditoEstado",gxvar:"A2141CreditoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2141CreditoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2141CreditoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOESTADO",gx.O.A2141CreditoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2141CreditoEstado=this.val())},val:function(){return gx.fn.getControlValue("CREDITOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});n[57]={id:57,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotanombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTANOMBRE",gx.O.A2136CreditoCuotaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTANOMBRE")},nac:gx.falseFn};n[58]={id:58,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[60,38,59],ip:[60,59,38,57,35,58],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ENTIDADID",gx.O.A44EntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ENTIDADID",".")},nac:function(){return!(0==this.AV8EntidadId)}};n[59]={id:59,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(){gx.fn.setControlValue("ENTIDADNOMBRE",gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A373EntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("ENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(59,function(){});n[60]={id:60,lvl:0,type:"char",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTASUCURSALDESCRIPCION",gxz:"Z2700CreditoCuotaSucursalDescripcion",gxold:"O2700CreditoCuotaSucursalDescripcion",gxvar:"A2700CreditoCuotaSucursalDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2700CreditoCuotaSucursalDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2700CreditoCuotaSucursalDescripcion=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTASUCURSALDESCRIPCION",gx.O.A2700CreditoCuotaSucursalDescripcion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2700CreditoCuotaSucursalDescripcion=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTASUCURSALDESCRIPCION")},nac:gx.falseFn};n[61]={id:61,fld:"PROMPT_266",grid:195};n[62]={id:62,fld:"PROMPT_45",grid:195};this.A266CreditoId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.A2137CreditoDescripcion="";this.Z2137CreditoDescripcion="";this.O2137CreditoDescripcion="";this.A267CreditoCuota=0;this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.A45SucursalId=0;this.Z45SucursalId=0;this.O45SucursalId=0;this.A374SucursalNombre="";this.Z374SucursalNombre="";this.O374SucursalNombre="";this.A2142CreditoSucursalEstado="";this.Z2142CreditoSucursalEstado="";this.O2142CreditoSucursalEstado="";this.A2141CreditoEstado="";this.Z2141CreditoEstado="";this.O2141CreditoEstado="";this.A2136CreditoCuotaNombre="";this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.A44EntidadId=0;this.Z44EntidadId=0;this.O44EntidadId=0;this.A373EntidadNombre="";this.Z373EntidadNombre="";this.O373EntidadNombre="";this.A2700CreditoCuotaSucursalDescripcion="";this.Z2700CreditoCuotaSucursalDescripcion="";this.O2700CreditoCuotaSucursalDescripcion="";this.A119PlanId=0;this.AV10WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV11TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7CreditoId=0;this.AV16CreditoCuota=0;this.AV8EntidadId=0;this.AV9SucursalId=0;this.AV12WebSession={};this.A266CreditoId=0;this.A267CreditoCuota=0;this.A44EntidadId=0;this.A45SucursalId=0;this.A2700CreditoCuotaSucursalDescripcion="";this.A2136CreditoCuotaNombre="";this.A2137CreditoDescripcion="";this.A2141CreditoEstado="";this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A373EntidadNombre="";this.A374SucursalNombre="";this.A2142CreditoSucursalEstado="";this.A1040PlanNombre="";this.A2138CreditoCuotaCosto=0;this.Gx_mode="";this.Events={e124k2_client:["AFTER TRN",!0],e134k195_client:["ENTER",!0],e144k195_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV16CreditoCuota",fld:"vCREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV9SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV16CreditoCuota",fld:"vCREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV9SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV10WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{ctrl:"CREDITOESTADO"},{av:'gx.fn.getCtrlProperty("CREDITOCUOTANOMBRE","Visible")',ctrl:"CREDITOCUOTANOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ENTIDADID","Visible")',ctrl:"ENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ENTIDADNOMBRE","Visible")',ctrl:"ENTIDADNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CREDITOCUOTASUCURSALDESCRIPCION","Visible")',ctrl:"CREDITOCUOTASUCURSALDESCRIPCION",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CREDITOID=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"}],[{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"}]];this.EvtParms.VALID_CREDITODESCRIPCION=[[],[]];this.EvtParms.VALID_CREDITOCUOTA=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9"},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}],[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_SUCURSALID=[[],[]];this.EvtParms.VALID_SUCURSALNOMBRE=[[],[]];this.EvtParms.VALID_CREDITOSUCURSALESTADO=[[{ctrl:"CREDITOSUCURSALESTADO"},{av:"A2142CreditoSucursalEstado",fld:"CREDITOSUCURSALESTADO",pic:"@!"}],[{ctrl:"CREDITOSUCURSALESTADO"},{av:"A2142CreditoSucursalEstado",fld:"CREDITOSUCURSALESTADO",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTANOMBRE=[[],[]];this.EvtParms.VALID_ENTIDADID=[[{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9"},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A2700CreditoCuotaSucursalDescripcion",fld:"CREDITOCUOTASUCURSALDESCRIPCION",pic:""}],[{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A2700CreditoCuotaSucursalDescripcion",fld:"CREDITOCUOTASUCURSALDESCRIPCION",pic:""}]];this.setPrompt("PROMPT_266",[22]);this.setPrompt("PROMPT_45",[35]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2138CreditoCuotaCosto","CREDITOCUOTACOSTO",0,"decimal",6,2);this.setVCMap("A2139CreditoCuotaDesde","CREDITOCUOTADESDE",0,"date",8,0);this.setVCMap("A2140CreditoCuotaHasta","CREDITOCUOTAHASTA",0,"date",8,0);this.setVCMap("AV7CreditoId","vCREDITOID",0,"int",8,0);this.setVCMap("AV16CreditoCuota","vCREDITOCUOTA",0,"int",4,0);this.setVCMap("AV8EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV9SucursalId","vSUCURSALID",0,"int",4,0);this.setVCMap("A119PlanId","PLANID",0,"int",4,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(creditocuotasucursal)})