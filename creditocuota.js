/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:11:35.53
*/
gx.evt.autoSkip=!1;gx.define("creditocuota",!1,function(){var n,t;this.ServerClass="creditocuota";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2137CreditoDescripcion=gx.fn.getControlValue("CREDITODESCRIPCION");this.AV7CreditoId=gx.fn.getIntegerValue("vCREDITOID",".");this.AV8CreditoCuota=gx.fn.getIntegerValue("vCREDITOCUOTA",".");this.AV12Insert_PlanId=gx.fn.getIntegerValue("vINSERT_PLANID",".");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Creditoid=function(){return this.validSrvEvt("Valid_Creditoid",0).then(function(n){return n}.closure(this))};this.Valid_Creditocuota=function(){return this.validCliEvt("Valid_Creditocuota",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotadesde=function(){return this.validCliEvt("Valid_Creditocuotadesde",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTADESDE");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2139CreditoCuotaDesde)==0||new gx.date.gxdate(this.A2139CreditoCuotaDesde).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotahasta=function(){return this.validCliEvt("Valid_Creditocuotahasta",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTAHASTA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2140CreditoCuotaHasta)==0||new gx.date.gxdate(this.A2140CreditoCuotaHasta).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Hasta fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotacosto=function(){return this.validCliEvt("Valid_Creditocuotacosto",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTACOSTO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotagenerafecha=function(){return this.validCliEvt("Valid_Creditocuotagenerafecha",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTAGENERAFECHA");if(this.AnyError=0,!(this.A2690CreditoCuotaGeneraFecha=="S"||this.A2690CreditoCuotaGeneraFecha=="N"||""==this.A2690CreditoCuotaGeneraFecha))try{n.setError("Campo Genera Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){return this.validSrvEvt("Valid_Planid",0).then(function(n){return n}.closure(this))};this.Valid_Plannombre=function(){return this.validCliEvt("Valid_Plannombre",0,function(){try{var n=gx.util.balloon.getNew("PLANNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e125e2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e135e193_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e145e193_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61];this.GXLastCtrlId=61;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOID",gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOID",".")},nac:function(){return!(0==this.AV7CreditoId)}};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTA",gx.O.A267CreditoCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOCUOTA",".")},nac:function(){return!(0==this.AV8CreditoCuota)}};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotadesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTADESDE",gxz:"Z2139CreditoCuotaDesde",gxold:"O2139CreditoCuotaDesde",gxvar:"A2139CreditoCuotaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTADESDE",gx.O.A2139CreditoCuotaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CREDITOCUOTADESDE")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotahasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAHASTA",gxz:"Z2140CreditoCuotaHasta",gxold:"O2140CreditoCuotaHasta",gxvar:"A2140CreditoCuotaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTAHASTA",gx.O.A2140CreditoCuotaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CREDITOCUOTAHASTA")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotacosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTACOSTO",gxz:"Z2138CreditoCuotaCosto",gxold:"O2138CreditoCuotaCosto",gxvar:"A2138CreditoCuotaCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CREDITOCUOTACOSTO",gx.O.A2138CreditoCuotaCosto,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.A2138CreditoCuotaCosto=this.val())},val:function(){return gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",")},nac:gx.falseFn};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotagenerafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAGENERAFECHA",gxz:"Z2690CreditoCuotaGeneraFecha",gxold:"O2690CreditoCuotaGeneraFecha",gxvar:"A2690CreditoCuotaGeneraFecha",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=n)},v2z:function(n){n!==undefined&&(gx.O.Z2690CreditoCuotaGeneraFecha=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOCUOTAGENERAFECHA",gx.O.A2690CreditoCuotaGeneraFecha);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTAGENERAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"BTNTRN_ENTER",grid:0,evt:"e135e193_client",std:"ENTER"};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"BTNTRN_CANCEL",grid:0,evt:"e145e193_client"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"BTNTRN_DELETE",grid:0,evt:"e155e193_client",std:"DELETE"};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[57]={id:57,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[60,61,59,58],ip:[60,61,59,35,31,40,58,57],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANID",gx.O.A119PlanId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV12Insert_PlanId)}};n[58]={id:58,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(){gx.fn.setControlValue("PLANNOMBRE",gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1040PlanNombre=this.val())},val:function(){return gx.fn.getControlValue("PLANNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUOTA",gxz:"Z2114PlanCuota",gxold:"O2114PlanCuota",gxvar:"A2114PlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2114PlanCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANCUOTA",gx.O.A2114PlanCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANCUOTA",".")},nac:gx.falseFn};n[60]={id:60,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTANOMBRE",gx.O.A2136CreditoCuotaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTANOMBRE")},nac:gx.falseFn};n[61]={id:61,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBREABREV",gxz:"Z2324CreditoCuotaNombreAbrev",gxold:"O2324CreditoCuotaNombreAbrev",gxvar:"A2324CreditoCuotaNombreAbrev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2324CreditoCuotaNombreAbrev=n)},v2z:function(n){n!==undefined&&(gx.O.Z2324CreditoCuotaNombreAbrev=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTANOMBREABREV",gx.O.A2324CreditoCuotaNombreAbrev,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2324CreditoCuotaNombreAbrev=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTANOMBREABREV")},nac:gx.falseFn};this.A266CreditoId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.A267CreditoCuota=0;this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.A2139CreditoCuotaDesde=gx.date.nullDate();this.Z2139CreditoCuotaDesde=gx.date.nullDate();this.O2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.Z2140CreditoCuotaHasta=gx.date.nullDate();this.O2140CreditoCuotaHasta=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.Z2138CreditoCuotaCosto=0;this.O2138CreditoCuotaCosto=0;this.A2690CreditoCuotaGeneraFecha="";this.Z2690CreditoCuotaGeneraFecha="";this.O2690CreditoCuotaGeneraFecha="";this.A119PlanId=0;this.Z119PlanId=0;this.O119PlanId=0;this.A1040PlanNombre="";this.Z1040PlanNombre="";this.O1040PlanNombre="";this.A2114PlanCuota=0;this.Z2114PlanCuota=0;this.O2114PlanCuota=0;this.A2136CreditoCuotaNombre="";this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.A2324CreditoCuotaNombreAbrev="";this.Z2324CreditoCuotaNombreAbrev="";this.O2324CreditoCuotaNombreAbrev="";this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV20GXV1=0;this.AV12Insert_PlanId=0;this.AV13TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7CreditoId=0;this.AV8CreditoCuota=0;this.AV11WebSession={};this.A266CreditoId=0;this.A267CreditoCuota=0;this.A119PlanId=0;this.AV19Pgmname="";this.Gx_BScreen=0;this.A2136CreditoCuotaNombre="";this.A2324CreditoCuotaNombreAbrev="";this.A1040PlanNombre="";this.A2114PlanCuota=0;this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.A2690CreditoCuotaGeneraFecha="";this.A2137CreditoDescripcion="";this.Gx_mode="";this.Events={e125e2_client:["AFTER TRN",!0],e135e193_client:["ENTER",!0],e145e193_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV8CreditoCuota",fld:"vCREDITOCUOTA",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7CreditoId",fld:"vCREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV8CreditoCuota",fld:"vCREDITOCUOTA",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""},{av:"AV20GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV13TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV12Insert_PlanId",fld:"vINSERT_PLANID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("PLANID","Visible")',ctrl:"PLANID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PLANNOMBRE","Visible")',ctrl:"PLANNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PLANCUOTA","Visible")',ctrl:"PLANCUOTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CREDITOCUOTANOMBRE","Visible")',ctrl:"CREDITOCUOTANOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CREDITOCUOTANOMBREABREV","Visible")',ctrl:"CREDITOCUOTANOMBREABREV",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_CREDITOID=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"}],[{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTA=[[],[]];this.EvtParms.VALID_CREDITOCUOTADESDE=[[{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""}],[{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""}]];this.EvtParms.VALID_CREDITOCUOTAHASTA=[[{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""}],[{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""}]];this.EvtParms.VALID_CREDITOCUOTACOSTO=[[],[]];this.EvtParms.VALID_CREDITOCUOTAGENERAFECHA=[[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}],[{ctrl:"CREDITOCUOTAGENERAFECHA"},{av:"A2690CreditoCuotaGeneraFecha",fld:"CREDITOCUOTAGENERAFECHA",pic:""}]];this.EvtParms.VALID_PLANID=[[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{av:"A2324CreditoCuotaNombreAbrev",fld:"CREDITOCUOTANOMBREABREV",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}],[{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{av:"A2324CreditoCuotaNombreAbrev",fld:"CREDITOCUOTANOMBREABREV",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("A2137CreditoDescripcion","CREDITODESCRIPCION",0,"char",30,0);this.setVCMap("AV7CreditoId","vCREDITOID",0,"int",8,0);this.setVCMap("AV8CreditoCuota","vCREDITOCUOTA",0,"int",4,0);this.setVCMap("AV12Insert_PlanId","vINSERT_PLANID",0,"int",4,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("AV19Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(creditocuota)})