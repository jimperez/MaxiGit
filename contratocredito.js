/*!   GeneXus C# 16_0_5-135614 on 10/3/2019 15:43:12.18
*/
gx.evt.autoSkip=!1;gx.define("contratocredito",!1,function(){this.ServerClass="contratocredito";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2137CreditoDescripcion=gx.fn.getControlValue("CREDITODESCRIPCION");this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A119PlanId=gx.fn.getIntegerValue("PLANID",".");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Contratocreditoid=function(){return this.validSrvEvt("Valid_Contratocreditoid",0).then(function(n){return n}.closure(this))};this.Valid_Creditoid=function(){return this.validSrvEvt("Valid_Creditoid",0).then(function(n){return n}.closure(this))};this.Valid_Creditocuotadesde=function(){return this.validCliEvt("Valid_Creditocuotadesde",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTADESDE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotahasta=function(){return this.validCliEvt("Valid_Creditocuotahasta",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTAHASTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuota=function(){return this.validSrvEvt("Valid_Creditocuota",0).then(function(n){return n}.closure(this))};this.Valid_Creditocuotacosto=function(){return this.validCliEvt("Valid_Creditocuotacosto",0,function(){try{var n=gx.util.balloon.getNew("CREDITOCUOTACOSTO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e114q201_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e124q201_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67];this.GXLastCtrlId=67;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e134q201_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e144q201_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e154q201_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e164q201_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e174q201_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocreditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCREDITOID",gxz:"Z274ContratoCreditoId",gxold:"O274ContratoCreditoId",gxvar:"A274ContratoCreditoId",ucs:[],op:[48,33],ip:[48,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A274ContratoCreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z274ContratoCreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOCREDITOID",gx.O.A274ContratoCreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A274ContratoCreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOCREDITOID",".")},nac:gx.falseFn};this.declareDomainHdlr(28,function(){});n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[33],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOID",gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOID",".")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotadesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTADESDE",gxz:"Z2139CreditoCuotaDesde",gxold:"O2139CreditoCuotaDesde",gxvar:"A2139CreditoCuotaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2139CreditoCuotaDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTADESDE",gx.O.A2139CreditoCuotaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2139CreditoCuotaDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CREDITOCUOTADESDE")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotahasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAHASTA",gxz:"Z2140CreditoCuotaHasta",gxold:"O2140CreditoCuotaHasta",gxvar:"A2140CreditoCuotaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2140CreditoCuotaHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTAHASTA",gx.O.A2140CreditoCuotaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2140CreditoCuotaHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CREDITOCUOTAHASTA")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[58,53,43,38],ip:[58,43,38,53,48,33],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOCUOTA",gx.O.A267CreditoCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOCUOTA",".")},nac:gx.falseFn};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditocuotacosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTACOSTO",gxz:"Z2138CreditoCuotaCosto",gxold:"O2138CreditoCuotaCosto",gxvar:"A2138CreditoCuotaCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2138CreditoCuotaCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CREDITOCUOTACOSTO",gx.O.A2138CreditoCuotaCosto,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.A2138CreditoCuotaCosto=this.val())},val:function(){return gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",")},nac:gx.falseFn};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTANOMBRE",gx.O.A2136CreditoCuotaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTANOMBRE")},nac:gx.falseFn};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"BTN_ENTER",grid:0,evt:"e114q201_client",std:"ENTER"};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTN_CANCEL",grid:0,evt:"e124q201_client"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"BTN_DELETE",grid:0,evt:"e184q201_client",std:"DELETE"};this.A274ContratoCreditoId=0;this.Z274ContratoCreditoId=0;this.O274ContratoCreditoId=0;this.A266CreditoId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.A2139CreditoCuotaDesde=gx.date.nullDate();this.Z2139CreditoCuotaDesde=gx.date.nullDate();this.O2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.Z2140CreditoCuotaHasta=gx.date.nullDate();this.O2140CreditoCuotaHasta=gx.date.nullDate();this.A267CreditoCuota=0;this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.A2138CreditoCuotaCosto=0;this.Z2138CreditoCuotaCosto=0;this.O2138CreditoCuotaCosto=0;this.A2136CreditoCuotaNombre="";this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.A119PlanId=0;this.A274ContratoCreditoId=0;this.A2136CreditoCuotaNombre="";this.A266CreditoId=0;this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A267CreditoCuota=0;this.A2138CreditoCuotaCosto=0;this.A2137CreditoDescripcion="";this.A1040PlanNombre="";this.Events={e114q201_client:["ENTER",!0],e124q201_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_CONTRATOCREDITOID=[[{av:"A274ContratoCreditoId",fld:"CONTRATOCREDITOID",pic:"ZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z274ContratoCreditoId"},{av:"Z266CreditoId"},{av:"Z267CreditoCuota"},{av:"Z2137CreditoDescripcion"},{av:"Z119PlanId"},{av:"Z2139CreditoCuotaDesde"},{av:"Z2140CreditoCuotaHasta"},{av:"Z2138CreditoCuotaCosto"},{av:"Z1040PlanNombre"},{av:"Z2136CreditoCuotaNombre"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_CREDITOID=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"}],[{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTADESDE=[[],[]];this.EvtParms.VALID_CREDITOCUOTAHASTA=[[],[]];this.EvtParms.VALID_CREDITOCUOTA=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9"},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}],[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A2139CreditoCuotaDesde",fld:"CREDITOCUOTADESDE",pic:""},{av:"A2140CreditoCuotaHasta",fld:"CREDITOCUOTAHASTA",pic:""},{av:"A2138CreditoCuotaCosto",fld:"CREDITOCUOTACOSTO",pic:"ZZ9.99"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_CREDITOCUOTACOSTO=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("A2137CreditoDescripcion","CREDITODESCRIPCION",0,"char",30,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A119PlanId","PLANID",0,"int",4,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(contratocredito)})