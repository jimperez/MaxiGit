/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:2:29.27
*/
gx.evt.autoSkip=!1;gx.define("asientodetallegeneral",!0,function(n){this.ServerClass="asientodetallegeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Periodoanio=function(){return this.validCliEvt("Valid_Periodoanio",0,function(){try{var n=gx.util.balloon.getNew("PERIODOANIO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Periodomes=function(){return this.validCliEvt("Valid_Periodomes",0,function(){try{var n=gx.util.balloon.getNew("PERIODOMES");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Asientoentidadid=function(){return this.validCliEvt("Valid_Asientoentidadid",0,function(){try{var n=gx.util.balloon.getNew("ASIENTOENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Asientosucursalid=function(){return this.validCliEvt("Valid_Asientosucursalid",0,function(){try{var n=gx.util.balloon.getNew("ASIENTOSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Asientoid=function(){return this.validCliEvt("Valid_Asientoid",0,function(){try{var n=gx.util.balloon.getNew("ASIENTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Centrocostoid=function(){return this.validCliEvt("Valid_Centrocostoid",0,function(){try{var n=gx.util.balloon.getNew("CENTROCOSTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Asientodetalleid=function(){return this.validCliEvt("Valid_Asientodetalleid",0,function(){try{var n=gx.util.balloon.getNew("ASIENTODETALLEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Plancuentaid=function(){return this.validCliEvt("Valid_Plancuentaid",0,function(){try{var n=gx.util.balloon.getNew("PLANCUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13s72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14s72_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94];this.GXLastCtrlId=94;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Periodoanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOANIO",gxz:"Z344PeriodoAnio",gxold:"O344PeriodoAnio",gxvar:"A344PeriodoAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z344PeriodoAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERIODOANIO",gx.O.A344PeriodoAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERIODOANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Periodomes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOMES",gxz:"Z343PeriodoMes",gxold:"O343PeriodoMes",gxvar:"A343PeriodoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z343PeriodoMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("PERIODOMES",gx.O.A343PeriodoMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERIODOMES",".")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Asientoentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOENTIDADID",gxz:"Z2935AsientoEntidadId",gxold:"O2935AsientoEntidadId",gxvar:"A2935AsientoEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2935AsientoEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2935AsientoEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ASIENTOENTIDADID",gx.O.A2935AsientoEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2935AsientoEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ASIENTOENTIDADID",".")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOENTIDADNOMBRE",gxz:"Z2936AsientoEntidadNombre",gxold:"O2936AsientoEntidadNombre",gxvar:"A2936AsientoEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2936AsientoEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2936AsientoEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("ASIENTOENTIDADNOMBRE",gx.O.A2936AsientoEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2936AsientoEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("ASIENTOENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Asientosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOSUCURSALID",gxz:"Z2926AsientoSucursalId",gxold:"O2926AsientoSucursalId",gxvar:"A2926AsientoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2926AsientoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2926AsientoSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ASIENTOSUCURSALID",gx.O.A2926AsientoSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2926AsientoSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ASIENTOSUCURSALID",".")},nac:gx.falseFn};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOSUCURSALNOMBRE",gxz:"Z2927AsientoSucursalNombre",gxold:"O2927AsientoSucursalNombre",gxvar:"A2927AsientoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2927AsientoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2927AsientoSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("ASIENTOSUCURSALNOMBRE",gx.O.A2927AsientoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2927AsientoSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("ASIENTOSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Asientoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOID",gxz:"Z2928AsientoId",gxold:"O2928AsientoId",gxvar:"A2928AsientoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2928AsientoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2928AsientoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ASIENTOID",gx.O.A2928AsientoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2928AsientoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ASIENTOID",".")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Centrocostoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTOID",gxz:"Z2941CentroCostoId",gxold:"O2941CentroCostoId",gxvar:"A2941CentroCostoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2941CentroCostoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2941CentroCostoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CENTROCOSTOID",gx.O.A2941CentroCostoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2941CentroCostoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CENTROCOSTOID",".")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CENTROCOSTONOMBRE",gxz:"Z2942CentroCostoNombre",gxold:"O2942CentroCostoNombre",gxvar:"A2942CentroCostoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2942CentroCostoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2942CentroCostoNombre=n)},v2c:function(){gx.fn.setControlValue("CENTROCOSTONOMBRE",gx.O.A2942CentroCostoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2942CentroCostoNombre=this.val())},val:function(){return gx.fn.getControlValue("CENTROCOSTONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTONRO",gxz:"Z2946AsientoNro",gxold:"O2946AsientoNro",gxvar:"A2946AsientoNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2946AsientoNro=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2946AsientoNro=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ASIENTONRO",gx.O.A2946AsientoNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2946AsientoNro=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ASIENTONRO",".")},nac:gx.falseFn};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTOFECHA",gxz:"Z2929AsientoFecha",gxold:"O2929AsientoFecha",gxvar:"A2929AsientoFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2929AsientoFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2929AsientoFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ASIENTOFECHA",gx.O.A2929AsientoFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2929AsientoFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ASIENTOFECHA")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,fld:"",grid:0};t[69]={id:69,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTONOMBRE",gxz:"Z2930AsientoNombre",gxold:"O2930AsientoNombre",gxvar:"A2930AsientoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2930AsientoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2930AsientoNombre=n)},v2c:function(){gx.fn.setControlValue("ASIENTONOMBRE",gx.O.A2930AsientoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2930AsientoNombre=this.val())},val:function(){return gx.fn.getControlValue("ASIENTONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(69,function(){});t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"",grid:0};t[74]={id:74,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Asientodetalleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTODETALLEID",gxz:"Z2948AsientoDetalleId",gxold:"O2948AsientoDetalleId",gxvar:"A2948AsientoDetalleId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2948AsientoDetalleId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2948AsientoDetalleId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ASIENTODETALLEID",gx.O.A2948AsientoDetalleId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2948AsientoDetalleId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ASIENTODETALLEID",".")},nac:gx.falseFn};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,fld:"",grid:0};t[78]={id:78,fld:"",grid:0};t[79]={id:79,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Plancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAID",gxz:"Z189PlanCuentaId",gxold:"O189PlanCuentaId",gxvar:"A189PlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A189PlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z189PlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANCUENTAID",gx.O.A189PlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A189PlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANCUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(79,function(){});t[80]={id:80,fld:"",grid:0};t[81]={id:81,fld:"",grid:0};t[82]={id:82,fld:"",grid:0};t[83]={id:83,fld:"",grid:0};t[84]={id:84,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTANOMBRE",gxz:"Z1251PlanCuentaNombre",gxold:"O1251PlanCuentaNombre",gxvar:"A1251PlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1251PlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1251PlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("PLANCUENTANOMBRE",gx.O.A1251PlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1251PlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("PLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});t[85]={id:85,fld:"",grid:0};t[86]={id:86,fld:"",grid:0};t[87]={id:87,fld:"",grid:0};t[88]={id:88,fld:"",grid:0};t[89]={id:89,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTODETALLEDEBE",gxz:"Z2950AsientoDetalleDebe",gxold:"O2950AsientoDetalleDebe",gxvar:"A2950AsientoDetalleDebe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2950AsientoDetalleDebe=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2950AsientoDetalleDebe=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ASIENTODETALLEDEBE",gx.O.A2950AsientoDetalleDebe,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2950AsientoDetalleDebe=this.val())},val:function(){return gx.fn.getDecimalValue("ASIENTODETALLEDEBE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});t[90]={id:90,fld:"",grid:0};t[91]={id:91,fld:"",grid:0};t[92]={id:92,fld:"",grid:0};t[93]={id:93,fld:"",grid:0};t[94]={id:94,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ASIENTODETALLEHABER",gxz:"Z2951AsientoDetalleHaber",gxold:"O2951AsientoDetalleHaber",gxvar:"A2951AsientoDetalleHaber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2951AsientoDetalleHaber=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2951AsientoDetalleHaber=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ASIENTODETALLEHABER",gx.O.A2951AsientoDetalleHaber,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2951AsientoDetalleHaber=this.val())},val:function(){return gx.fn.getDecimalValue("ASIENTODETALLEHABER",".",",")},nac:gx.falseFn};this.declareDomainHdlr(94,function(){});this.A344PeriodoAnio=0;this.Z344PeriodoAnio=0;this.O344PeriodoAnio=0;this.A343PeriodoMes=0;this.Z343PeriodoMes=0;this.O343PeriodoMes=0;this.A2935AsientoEntidadId=0;this.Z2935AsientoEntidadId=0;this.O2935AsientoEntidadId=0;this.A2936AsientoEntidadNombre="";this.Z2936AsientoEntidadNombre="";this.O2936AsientoEntidadNombre="";this.A2926AsientoSucursalId=0;this.Z2926AsientoSucursalId=0;this.O2926AsientoSucursalId=0;this.A2927AsientoSucursalNombre="";this.Z2927AsientoSucursalNombre="";this.O2927AsientoSucursalNombre="";this.A2928AsientoId=0;this.Z2928AsientoId=0;this.O2928AsientoId=0;this.A2941CentroCostoId=0;this.Z2941CentroCostoId=0;this.O2941CentroCostoId=0;this.A2942CentroCostoNombre="";this.Z2942CentroCostoNombre="";this.O2942CentroCostoNombre="";this.A2946AsientoNro=0;this.Z2946AsientoNro=0;this.O2946AsientoNro=0;this.A2929AsientoFecha=gx.date.nullDate();this.Z2929AsientoFecha=gx.date.nullDate();this.O2929AsientoFecha=gx.date.nullDate();this.A2930AsientoNombre="";this.Z2930AsientoNombre="";this.O2930AsientoNombre="";this.A2948AsientoDetalleId=0;this.Z2948AsientoDetalleId=0;this.O2948AsientoDetalleId=0;this.A189PlanCuentaId=0;this.Z189PlanCuentaId=0;this.O189PlanCuentaId=0;this.A1251PlanCuentaNombre="";this.Z1251PlanCuentaNombre="";this.O1251PlanCuentaNombre="";this.A2950AsientoDetalleDebe=0;this.Z2950AsientoDetalleDebe=0;this.O2950AsientoDetalleDebe=0;this.A2951AsientoDetalleHaber=0;this.Z2951AsientoDetalleHaber=0;this.O2951AsientoDetalleHaber=0;this.A344PeriodoAnio=0;this.A343PeriodoMes=0;this.A2935AsientoEntidadId=0;this.A2936AsientoEntidadNombre="";this.A2926AsientoSucursalId=0;this.A2927AsientoSucursalNombre="";this.A2928AsientoId=0;this.A2941CentroCostoId=0;this.A2942CentroCostoNombre="";this.A2946AsientoNro=0;this.A2929AsientoFecha=gx.date.nullDate();this.A2930AsientoNombre="";this.A2948AsientoDetalleId=0;this.A189PlanCuentaId=0;this.A1251PlanCuentaNombre="";this.A2950AsientoDetalleDebe=0;this.A2951AsientoDetalleHaber=0;this.Events={e13s72_client:["ENTER",!0],e14s72_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A344PeriodoAnio",fld:"PERIODOANIO",pic:"ZZZZ"},{ctrl:"PERIODOMES"},{av:"A343PeriodoMes",fld:"PERIODOMES",pic:"Z9"},{av:"A2935AsientoEntidadId",fld:"ASIENTOENTIDADID",pic:"Z9"},{av:"A2926AsientoSucursalId",fld:"ASIENTOSUCURSALID",pic:"ZZZ9"},{av:"A2928AsientoId",fld:"ASIENTOID",pic:"ZZZZZZZ9"},{av:"A2948AsientoDetalleId",fld:"ASIENTODETALLEID",pic:"Z9"}],[]];this.EvtParms.START=[[{av:"AV22Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[]];this.EvtParms.VALID_PERIODOANIO=[[],[]];this.EvtParms.VALID_PERIODOMES=[[],[]];this.EvtParms.VALID_ASIENTOENTIDADID=[[],[]];this.EvtParms.VALID_ASIENTOSUCURSALID=[[],[]];this.EvtParms.VALID_ASIENTOID=[[],[]];this.EvtParms.VALID_CENTROCOSTOID=[[],[]];this.EvtParms.VALID_ASIENTODETALLEID=[[],[]];this.EvtParms.VALID_PLANCUENTAID=[[],[]];this.Initialize()})