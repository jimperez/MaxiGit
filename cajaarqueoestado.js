/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:32.4
*/
gx.evt.autoSkip=!1;gx.define("cajaarqueoestado",!1,function(){this.ServerClass="cajaarqueoestado";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Cajaarqueoentidadid=function(){return this.validSrvEvt("Valid_Cajaarqueoentidadid",0).then(function(n){return n}.closure(this))};this.Valid_Cajaarqueosucursalid=function(){return this.validSrvEvt("Valid_Cajaarqueosucursalid",0).then(function(n){return n}.closure(this))};this.Valid_Cajaarqueocajafisicaid=function(){return this.validSrvEvt("Valid_Cajaarqueocajafisicaid",0).then(function(n){return n}.closure(this))};this.Valid_Cajaarqueoid=function(){return this.validSrvEvt("Valid_Cajaarqueoid",0).then(function(n){return n}.closure(this))};this.Valid_Cajaarqueoestadoid=function(){return this.validSrvEvt("Valid_Cajaarqueoestadoid",0).then(function(n){return n}.closure(this))};this.Valid_Cajaarqueoempleadoid=function(){return this.validCliEvt("Valid_Cajaarqueoempleadoid",0,function(){try{var n=gx.util.balloon.getNew("CAJAARQUEOEMPLEADOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajaarqueoempleadoapellido=function(){return this.validCliEvt("Valid_Cajaarqueoempleadoapellido",0,function(){try{var n=gx.util.balloon.getNew("CAJAARQUEOEMPLEADOAPELLIDO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajaarqueoempleadonombre=function(){return this.validCliEvt("Valid_Cajaarqueoempleadonombre",0,function(){try{var n=gx.util.balloon.getNew("CAJAARQUEOEMPLEADONOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajaarqueoestadoest=function(){return this.validCliEvt("Valid_Cajaarqueoestadoest",0,function(){try{var n=gx.util.balloon.getNew("CAJAARQUEOESTADOEST");if(this.AnyError=0,!(this.A3352CajaArqueoEstadoEst=="REN"||this.A3352CajaArqueoEstadoEst=="PEN"||this.A3352CajaArqueoEstadoEst=="TEM"||this.A3352CajaArqueoEstadoEst=="TES"||""==this.A3352CajaArqueoEstadoEst))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajaarqueoestadofechahora=function(){return this.validCliEvt("Valid_Cajaarqueoestadofechahora",0,function(){try{var n=gx.util.balloon.getNew("CAJAARQUEOESTADOFECHAHORA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A3354CajaArqueoEstadoFechaHora)==0||new gx.date.gxdate(this.A3354CajaArqueoEstadoFechaHora).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fecha Hora fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e116p284_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e126p284_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142];this.GXLastCtrlId=142;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e136p284_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e146p284_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e156p284_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e166p284_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e176p284_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOENTIDADID",gxz:"Z190CajaArqueoEntidadId",gxold:"O190CajaArqueoEntidadId",gxvar:"A190CajaArqueoEntidadId",ucs:[],op:[33],ip:[33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A190CajaArqueoEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z190CajaArqueoEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOENTIDADID",gx.O.A190CajaArqueoEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A190CajaArqueoEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOENTIDADID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOENTIDADNOMBRE",gxz:"Z2027CajaArqueoEntidadNombre",gxold:"O2027CajaArqueoEntidadNombre",gxvar:"A2027CajaArqueoEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2027CajaArqueoEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2027CajaArqueoEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOENTIDADNOMBRE",gx.O.A2027CajaArqueoEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2027CajaArqueoEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOSUCURSALID",gxz:"Z191CajaArqueoSucursalId",gxold:"O191CajaArqueoSucursalId",gxvar:"A191CajaArqueoSucursalId",ucs:[],op:[43],ip:[43,38,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A191CajaArqueoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z191CajaArqueoSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOSUCURSALID",gx.O.A191CajaArqueoSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A191CajaArqueoSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOSUCURSALID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOSUCURSALNOMBRE",gxz:"Z2028CajaArqueoSucursalNombre",gxold:"O2028CajaArqueoSucursalNombre",gxvar:"A2028CajaArqueoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2028CajaArqueoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2028CajaArqueoSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOSUCURSALNOMBRE",gx.O.A2028CajaArqueoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2028CajaArqueoSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueocajafisicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOCAJAFISICAID",gxz:"Z192CajaArqueoCajaFisicaId",gxold:"O192CajaArqueoCajaFisicaId",gxvar:"A192CajaArqueoCajaFisicaId",ucs:[],op:[58,53],ip:[58,53,48,38,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A192CajaArqueoCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z192CajaArqueoCajaFisicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOCAJAFISICAID",gx.O.A192CajaArqueoCajaFisicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A192CajaArqueoCajaFisicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOCAJAFISICAID",".")},nac:gx.falseFn};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOCAJAFISICANOMBRE",gxz:"Z2025CajaArqueoCajaFisicaNombre",gxold:"O2025CajaArqueoCajaFisicaNombre",gxvar:"A2025CajaArqueoCajaFisicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2025CajaArqueoCajaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2025CajaArqueoCajaFisicaNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOCAJAFISICANOMBRE",gx.O.A2025CajaArqueoCajaFisicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2025CajaArqueoCajaFisicaNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOCAJAFISICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOCAJAFISICATIPO",gxz:"Z2781CajaArqueoCajaFisicaTipo",gxold:"O2781CajaArqueoCajaFisicaTipo",gxvar:"A2781CajaArqueoCajaFisicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2781CajaArqueoCajaFisicaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2781CajaArqueoCajaFisicaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("CAJAARQUEOCAJAFISICATIPO",gx.O.A2781CajaArqueoCajaFisicaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2781CajaArqueoCajaFisicaTipo=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOCAJAFISICATIPO")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOID",gxz:"Z193CajaArqueoId",gxold:"O193CajaArqueoId",gxvar:"A193CajaArqueoId",ucs:[],op:[113,108,103,98,93,88,83,78,73],ip:[113,93,88,83,78,73,108,103,98,63,48,38,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A193CajaArqueoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z193CajaArqueoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOID",gx.O.A193CajaArqueoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A193CajaArqueoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOID",".")},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoestadoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOESTADOID",gxz:"Z3333CajaArqueoEstadoId",gxold:"O3333CajaArqueoEstadoId",gxvar:"A3333CajaArqueoEstadoId",ucs:[],op:[133,128,123,118],ip:[133,128,123,118,68,63,48,38,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3333CajaArqueoEstadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3333CajaArqueoEstadoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOESTADOID",gx.O.A3333CajaArqueoEstadoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3333CajaArqueoEstadoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOESTADOID",".")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEONOMBRE",gxz:"Z1265CajaArqueoNombre",gxold:"O1265CajaArqueoNombre",gxvar:"A1265CajaArqueoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1265CajaArqueoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1265CajaArqueoNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEONOMBRE",gx.O.A1265CajaArqueoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1265CajaArqueoNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOAPERTURAFECHA",gxz:"Z1266CajaArqueoAperturaFecha",gxold:"O1266CajaArqueoAperturaFecha",gxvar:"A1266CajaArqueoAperturaFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1266CajaArqueoAperturaFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1266CajaArqueoAperturaFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOAPERTURAFECHA",gx.O.A1266CajaArqueoAperturaFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1266CajaArqueoAperturaFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CAJAARQUEOAPERTURAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(78,function(){});n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"",grid:0};n[83]={id:83,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOAPERTURAHORA",gxz:"Z2024CajaArqueoAperturaHora",gxold:"O2024CajaArqueoAperturaHora",gxvar:"A2024CajaArqueoAperturaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2024CajaArqueoAperturaHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2024CajaArqueoAperturaHora=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOAPERTURAHORA",gx.O.A2024CajaArqueoAperturaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2024CajaArqueoAperturaHora=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOAPERTURAHORA")},nac:gx.falseFn};this.declareDomainHdlr(83,function(){});n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[88]={id:88,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOCIERREFECHA",gxz:"Z1267CajaArqueoCierreFecha",gxold:"O1267CajaArqueoCierreFecha",gxvar:"A1267CajaArqueoCierreFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1267CajaArqueoCierreFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1267CajaArqueoCierreFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOCIERREFECHA",gx.O.A1267CajaArqueoCierreFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1267CajaArqueoCierreFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CAJAARQUEOCIERREFECHA")},nac:gx.falseFn};this.declareDomainHdlr(88,function(){});n[89]={id:89,fld:"",grid:0};n[90]={id:90,fld:"",grid:0};n[91]={id:91,fld:"",grid:0};n[92]={id:92,fld:"",grid:0};n[93]={id:93,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOCIERREHORA",gxz:"Z2026CajaArqueoCierreHora",gxold:"O2026CajaArqueoCierreHora",gxvar:"A2026CajaArqueoCierreHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2026CajaArqueoCierreHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2026CajaArqueoCierreHora=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOCIERREHORA",gx.O.A2026CajaArqueoCierreHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2026CajaArqueoCierreHora=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOCIERREHORA")},nac:gx.falseFn};this.declareDomainHdlr(93,function(){});n[94]={id:94,fld:"",grid:0};n[95]={id:95,fld:"",grid:0};n[96]={id:96,fld:"",grid:0};n[97]={id:97,fld:"",grid:0};n[98]={id:98,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoempleadoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOEMPLEADOID",gxz:"Z1270CajaArqueoEmpleadoId",gxold:"O1270CajaArqueoEmpleadoId",gxvar:"A1270CajaArqueoEmpleadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1270CajaArqueoEmpleadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1270CajaArqueoEmpleadoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOEMPLEADOID",gx.O.A1270CajaArqueoEmpleadoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1270CajaArqueoEmpleadoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAARQUEOEMPLEADOID",".")},nac:gx.falseFn};n[99]={id:99,fld:"",grid:0};n[100]={id:100,fld:"",grid:0};n[101]={id:101,fld:"",grid:0};n[102]={id:102,fld:"",grid:0};n[103]={id:103,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoempleadoapellido,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOEMPLEADOAPELLIDO",gxz:"Z2783CajaArqueoEmpleadoApellido",gxold:"O2783CajaArqueoEmpleadoApellido",gxvar:"A2783CajaArqueoEmpleadoApellido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2783CajaArqueoEmpleadoApellido=n)},v2z:function(n){n!==undefined&&(gx.O.Z2783CajaArqueoEmpleadoApellido=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOEMPLEADOAPELLIDO",gx.O.A2783CajaArqueoEmpleadoApellido,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2783CajaArqueoEmpleadoApellido=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOEMPLEADOAPELLIDO")},nac:gx.falseFn};this.declareDomainHdlr(103,function(){});n[104]={id:104,fld:"",grid:0};n[105]={id:105,fld:"",grid:0};n[106]={id:106,fld:"",grid:0};n[107]={id:107,fld:"",grid:0};n[108]={id:108,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoempleadonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOEMPLEADONOMBRE",gxz:"Z2785CajaArqueoEmpleadoNombre",gxold:"O2785CajaArqueoEmpleadoNombre",gxvar:"A2785CajaArqueoEmpleadoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2785CajaArqueoEmpleadoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2785CajaArqueoEmpleadoNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOEMPLEADONOMBRE",gx.O.A2785CajaArqueoEmpleadoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2785CajaArqueoEmpleadoNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOEMPLEADONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(108,function(){});n[109]={id:109,fld:"",grid:0};n[110]={id:110,fld:"",grid:0};n[111]={id:111,fld:"",grid:0};n[112]={id:112,fld:"",grid:0};n[113]={id:113,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOEMPLEADOAPELLIDONOMBRE",gxz:"Z2784CajaArqueoEmpleadoApellidoNombre",gxold:"O2784CajaArqueoEmpleadoApellidoNombre",gxvar:"A2784CajaArqueoEmpleadoApellidoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2784CajaArqueoEmpleadoApellidoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2784CajaArqueoEmpleadoApellidoNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOEMPLEADOAPELLIDONOMBRE",gx.O.A2784CajaArqueoEmpleadoApellidoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2784CajaArqueoEmpleadoApellidoNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOEMPLEADOAPELLIDONOMBRE")},nac:gx.falseFn};n[114]={id:114,fld:"",grid:0};n[115]={id:115,fld:"",grid:0};n[116]={id:116,fld:"",grid:0};n[117]={id:117,fld:"",grid:0};n[118]={id:118,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoestadoest,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOESTADOEST",gxz:"Z3352CajaArqueoEstadoEst",gxold:"O3352CajaArqueoEstadoEst",gxvar:"A3352CajaArqueoEstadoEst",ucs:[],op:[118],ip:[118],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3352CajaArqueoEstadoEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z3352CajaArqueoEstadoEst=n)},v2c:function(){gx.fn.setComboBoxValue("CAJAARQUEOESTADOEST",gx.O.A3352CajaArqueoEstadoEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3352CajaArqueoEstadoEst=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOESTADOEST")},nac:gx.falseFn};this.declareDomainHdlr(118,function(){});n[119]={id:119,fld:"",grid:0};n[120]={id:120,fld:"",grid:0};n[121]={id:121,fld:"",grid:0};n[122]={id:122,fld:"",grid:0};n[123]={id:123,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOESTADOUSUARIO",gxz:"Z3353CajaArqueoEstadoUsuario",gxold:"O3353CajaArqueoEstadoUsuario",gxvar:"A3353CajaArqueoEstadoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3353CajaArqueoEstadoUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z3353CajaArqueoEstadoUsuario=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOESTADOUSUARIO",gx.O.A3353CajaArqueoEstadoUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3353CajaArqueoEstadoUsuario=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOESTADOUSUARIO")},nac:gx.falseFn};this.declareDomainHdlr(123,function(){});n[124]={id:124,fld:"",grid:0};n[125]={id:125,fld:"",grid:0};n[126]={id:126,fld:"",grid:0};n[127]={id:127,fld:"",grid:0};n[128]={id:128,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cajaarqueoestadofechahora,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOESTADOFECHAHORA",gxz:"Z3354CajaArqueoEstadoFechaHora",gxold:"O3354CajaArqueoEstadoFechaHora",gxvar:"A3354CajaArqueoEstadoFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[128],ip:[128],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3354CajaArqueoEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3354CajaArqueoEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CAJAARQUEOESTADOFECHAHORA",gx.O.A3354CajaArqueoEstadoFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3354CajaArqueoEstadoFechaHora=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CAJAARQUEOESTADOFECHAHORA")},nac:gx.falseFn};this.declareDomainHdlr(128,function(){});n[129]={id:129,fld:"",grid:0};n[130]={id:130,fld:"",grid:0};n[131]={id:131,fld:"",grid:0};n[132]={id:132,fld:"",grid:0};n[133]={id:133,lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"999.999.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEOESTADOIP",gxz:"Z3355CajaArqueoEstadoIP",gxold:"O3355CajaArqueoEstadoIP",gxvar:"A3355CajaArqueoEstadoIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3355CajaArqueoEstadoIP=n)},v2z:function(n){n!==undefined&&(gx.O.Z3355CajaArqueoEstadoIP=n)},v2c:function(){gx.fn.setControlValue("CAJAARQUEOESTADOIP",gx.O.A3355CajaArqueoEstadoIP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3355CajaArqueoEstadoIP=this.val())},val:function(){return gx.fn.getControlValue("CAJAARQUEOESTADOIP")},nac:gx.falseFn};this.declareDomainHdlr(133,function(){});n[134]={id:134,fld:"",grid:0};n[135]={id:135,fld:"",grid:0};n[136]={id:136,fld:"",grid:0};n[137]={id:137,fld:"",grid:0};n[138]={id:138,fld:"BTN_ENTER",grid:0,evt:"e116p284_client",std:"ENTER"};n[139]={id:139,fld:"",grid:0};n[140]={id:140,fld:"BTN_CANCEL",grid:0,evt:"e126p284_client"};n[141]={id:141,fld:"",grid:0};n[142]={id:142,fld:"BTN_DELETE",grid:0,evt:"e186p284_client",std:"DELETE"};this.A190CajaArqueoEntidadId=0;this.Z190CajaArqueoEntidadId=0;this.O190CajaArqueoEntidadId=0;this.A2027CajaArqueoEntidadNombre="";this.Z2027CajaArqueoEntidadNombre="";this.O2027CajaArqueoEntidadNombre="";this.A191CajaArqueoSucursalId=0;this.Z191CajaArqueoSucursalId=0;this.O191CajaArqueoSucursalId=0;this.A2028CajaArqueoSucursalNombre="";this.Z2028CajaArqueoSucursalNombre="";this.O2028CajaArqueoSucursalNombre="";this.A192CajaArqueoCajaFisicaId=0;this.Z192CajaArqueoCajaFisicaId=0;this.O192CajaArqueoCajaFisicaId=0;this.A2025CajaArqueoCajaFisicaNombre="";this.Z2025CajaArqueoCajaFisicaNombre="";this.O2025CajaArqueoCajaFisicaNombre="";this.A2781CajaArqueoCajaFisicaTipo="";this.Z2781CajaArqueoCajaFisicaTipo="";this.O2781CajaArqueoCajaFisicaTipo="";this.A193CajaArqueoId=0;this.Z193CajaArqueoId=0;this.O193CajaArqueoId=0;this.A3333CajaArqueoEstadoId=0;this.Z3333CajaArqueoEstadoId=0;this.O3333CajaArqueoEstadoId=0;this.A1265CajaArqueoNombre="";this.Z1265CajaArqueoNombre="";this.O1265CajaArqueoNombre="";this.A1266CajaArqueoAperturaFecha=gx.date.nullDate();this.Z1266CajaArqueoAperturaFecha=gx.date.nullDate();this.O1266CajaArqueoAperturaFecha=gx.date.nullDate();this.A2024CajaArqueoAperturaHora="";this.Z2024CajaArqueoAperturaHora="";this.O2024CajaArqueoAperturaHora="";this.A1267CajaArqueoCierreFecha=gx.date.nullDate();this.Z1267CajaArqueoCierreFecha=gx.date.nullDate();this.O1267CajaArqueoCierreFecha=gx.date.nullDate();this.A2026CajaArqueoCierreHora="";this.Z2026CajaArqueoCierreHora="";this.O2026CajaArqueoCierreHora="";this.A1270CajaArqueoEmpleadoId=0;this.Z1270CajaArqueoEmpleadoId=0;this.O1270CajaArqueoEmpleadoId=0;this.A2783CajaArqueoEmpleadoApellido="";this.Z2783CajaArqueoEmpleadoApellido="";this.O2783CajaArqueoEmpleadoApellido="";this.A2785CajaArqueoEmpleadoNombre="";this.Z2785CajaArqueoEmpleadoNombre="";this.O2785CajaArqueoEmpleadoNombre="";this.A2784CajaArqueoEmpleadoApellidoNombre="";this.Z2784CajaArqueoEmpleadoApellidoNombre="";this.O2784CajaArqueoEmpleadoApellidoNombre="";this.A3352CajaArqueoEstadoEst="";this.Z3352CajaArqueoEstadoEst="";this.O3352CajaArqueoEstadoEst="";this.A3353CajaArqueoEstadoUsuario="";this.Z3353CajaArqueoEstadoUsuario="";this.O3353CajaArqueoEstadoUsuario="";this.A3354CajaArqueoEstadoFechaHora=gx.date.nullDate();this.Z3354CajaArqueoEstadoFechaHora=gx.date.nullDate();this.O3354CajaArqueoEstadoFechaHora=gx.date.nullDate();this.A3355CajaArqueoEstadoIP="";this.Z3355CajaArqueoEstadoIP="";this.O3355CajaArqueoEstadoIP="";this.A190CajaArqueoEntidadId=0;this.A191CajaArqueoSucursalId=0;this.A192CajaArqueoCajaFisicaId=0;this.A193CajaArqueoId=0;this.A3333CajaArqueoEstadoId=0;this.A2027CajaArqueoEntidadNombre="";this.A2028CajaArqueoSucursalNombre="";this.A2025CajaArqueoCajaFisicaNombre="";this.A2781CajaArqueoCajaFisicaTipo="";this.A1265CajaArqueoNombre="";this.A1266CajaArqueoAperturaFecha=gx.date.nullDate();this.A2024CajaArqueoAperturaHora="";this.A1267CajaArqueoCierreFecha=gx.date.nullDate();this.A2026CajaArqueoCierreHora="";this.A1270CajaArqueoEmpleadoId=0;this.A2783CajaArqueoEmpleadoApellido="";this.A2785CajaArqueoEmpleadoNombre="";this.A2784CajaArqueoEmpleadoApellidoNombre="";this.A3352CajaArqueoEstadoEst="";this.A3353CajaArqueoEstadoUsuario="";this.A3354CajaArqueoEstadoFechaHora=gx.date.nullDate();this.A3355CajaArqueoEstadoIP="";this.Events={e116p284_client:["ENTER",!0],e126p284_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_CAJAARQUEOENTIDADID=[[{av:"A190CajaArqueoEntidadId",fld:"CAJAARQUEOENTIDADID",pic:"Z9"},{av:"A2027CajaArqueoEntidadNombre",fld:"CAJAARQUEOENTIDADNOMBRE",pic:"@!"}],[{av:"A2027CajaArqueoEntidadNombre",fld:"CAJAARQUEOENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_CAJAARQUEOSUCURSALID=[[{av:"A190CajaArqueoEntidadId",fld:"CAJAARQUEOENTIDADID",pic:"Z9"},{av:"A191CajaArqueoSucursalId",fld:"CAJAARQUEOSUCURSALID",pic:"ZZZ9"},{av:"A2028CajaArqueoSucursalNombre",fld:"CAJAARQUEOSUCURSALNOMBRE",pic:"@!"}],[{av:"A2028CajaArqueoSucursalNombre",fld:"CAJAARQUEOSUCURSALNOMBRE",pic:"@!"}]];this.EvtParms.VALID_CAJAARQUEOCAJAFISICAID=[[{av:"A190CajaArqueoEntidadId",fld:"CAJAARQUEOENTIDADID",pic:"Z9"},{av:"A191CajaArqueoSucursalId",fld:"CAJAARQUEOSUCURSALID",pic:"ZZZ9"},{av:"A192CajaArqueoCajaFisicaId",fld:"CAJAARQUEOCAJAFISICAID",pic:"ZZZ9"},{av:"A2025CajaArqueoCajaFisicaNombre",fld:"CAJAARQUEOCAJAFISICANOMBRE",pic:"@!"},{ctrl:"CAJAARQUEOCAJAFISICATIPO"},{av:"A2781CajaArqueoCajaFisicaTipo",fld:"CAJAARQUEOCAJAFISICATIPO",pic:""}],[{av:"A2025CajaArqueoCajaFisicaNombre",fld:"CAJAARQUEOCAJAFISICANOMBRE",pic:"@!"},{ctrl:"CAJAARQUEOCAJAFISICATIPO"},{av:"A2781CajaArqueoCajaFisicaTipo",fld:"CAJAARQUEOCAJAFISICATIPO",pic:""}]];this.EvtParms.VALID_CAJAARQUEOID=[[{av:"A190CajaArqueoEntidadId",fld:"CAJAARQUEOENTIDADID",pic:"Z9"},{av:"A191CajaArqueoSucursalId",fld:"CAJAARQUEOSUCURSALID",pic:"ZZZ9"},{av:"A192CajaArqueoCajaFisicaId",fld:"CAJAARQUEOCAJAFISICAID",pic:"ZZZ9"},{av:"A193CajaArqueoId",fld:"CAJAARQUEOID",pic:"ZZZZZZZZ9"},{av:"A1270CajaArqueoEmpleadoId",fld:"CAJAARQUEOEMPLEADOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A2783CajaArqueoEmpleadoApellido",fld:"CAJAARQUEOEMPLEADOAPELLIDO",pic:"@!"},{av:"A2785CajaArqueoEmpleadoNombre",fld:"CAJAARQUEOEMPLEADONOMBRE",pic:"@!"},{av:"A1265CajaArqueoNombre",fld:"CAJAARQUEONOMBRE",pic:"@!"},{av:"A1266CajaArqueoAperturaFecha",fld:"CAJAARQUEOAPERTURAFECHA",pic:""},{av:"A2024CajaArqueoAperturaHora",fld:"CAJAARQUEOAPERTURAHORA",pic:"99:99:99"},{av:"A1267CajaArqueoCierreFecha",fld:"CAJAARQUEOCIERREFECHA",pic:""},{av:"A2026CajaArqueoCierreHora",fld:"CAJAARQUEOCIERREHORA",pic:"99:99:99"},{av:"A2784CajaArqueoEmpleadoApellidoNombre",fld:"CAJAARQUEOEMPLEADOAPELLIDONOMBRE",pic:"@!"}],[{av:"A1265CajaArqueoNombre",fld:"CAJAARQUEONOMBRE",pic:"@!"},{av:"A1266CajaArqueoAperturaFecha",fld:"CAJAARQUEOAPERTURAFECHA",pic:""},{av:"A2024CajaArqueoAperturaHora",fld:"CAJAARQUEOAPERTURAHORA",pic:"99:99:99"},{av:"A1267CajaArqueoCierreFecha",fld:"CAJAARQUEOCIERREFECHA",pic:""},{av:"A2026CajaArqueoCierreHora",fld:"CAJAARQUEOCIERREHORA",pic:"99:99:99"},{av:"A1270CajaArqueoEmpleadoId",fld:"CAJAARQUEOEMPLEADOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A2783CajaArqueoEmpleadoApellido",fld:"CAJAARQUEOEMPLEADOAPELLIDO",pic:"@!"},{av:"A2785CajaArqueoEmpleadoNombre",fld:"CAJAARQUEOEMPLEADONOMBRE",pic:"@!"},{av:"A2784CajaArqueoEmpleadoApellidoNombre",fld:"CAJAARQUEOEMPLEADOAPELLIDONOMBRE",pic:"@!"}]];this.EvtParms.VALID_CAJAARQUEOESTADOID=[[{ctrl:"CAJAARQUEOCAJAFISICATIPO"},{av:"A2781CajaArqueoCajaFisicaTipo",fld:"CAJAARQUEOCAJAFISICATIPO",pic:""},{ctrl:"CAJAARQUEOESTADOEST"},{av:"A3352CajaArqueoEstadoEst",fld:"CAJAARQUEOESTADOEST",pic:""},{av:"A190CajaArqueoEntidadId",fld:"CAJAARQUEOENTIDADID",pic:"Z9"},{av:"A191CajaArqueoSucursalId",fld:"CAJAARQUEOSUCURSALID",pic:"ZZZ9"},{av:"A192CajaArqueoCajaFisicaId",fld:"CAJAARQUEOCAJAFISICAID",pic:"ZZZ9"},{av:"A193CajaArqueoId",fld:"CAJAARQUEOID",pic:"ZZZZZZZZ9"},{av:"A3333CajaArqueoEstadoId",fld:"CAJAARQUEOESTADOID",pic:"ZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{ctrl:"CAJAARQUEOESTADOEST"},{av:"A3352CajaArqueoEstadoEst",fld:"CAJAARQUEOESTADOEST",pic:""},{av:"A3353CajaArqueoEstadoUsuario",fld:"CAJAARQUEOESTADOUSUARIO",pic:""},{av:"A3354CajaArqueoEstadoFechaHora",fld:"CAJAARQUEOESTADOFECHAHORA",pic:"99/99/99 99:99"},{av:"A3355CajaArqueoEstadoIP",fld:"CAJAARQUEOESTADOIP",pic:"999.999.999"},{av:"A2027CajaArqueoEntidadNombre",fld:"CAJAARQUEOENTIDADNOMBRE",pic:"@!"},{av:"A2028CajaArqueoSucursalNombre",fld:"CAJAARQUEOSUCURSALNOMBRE",pic:"@!"},{av:"A2025CajaArqueoCajaFisicaNombre",fld:"CAJAARQUEOCAJAFISICANOMBRE",pic:"@!"},{ctrl:"CAJAARQUEOCAJAFISICATIPO"},{av:"A2781CajaArqueoCajaFisicaTipo",fld:"CAJAARQUEOCAJAFISICATIPO",pic:""},{av:"A1265CajaArqueoNombre",fld:"CAJAARQUEONOMBRE",pic:"@!"},{av:"A1266CajaArqueoAperturaFecha",fld:"CAJAARQUEOAPERTURAFECHA",pic:""},{av:"A2024CajaArqueoAperturaHora",fld:"CAJAARQUEOAPERTURAHORA",pic:"99:99:99"},{av:"A1267CajaArqueoCierreFecha",fld:"CAJAARQUEOCIERREFECHA",pic:""},{av:"A2026CajaArqueoCierreHora",fld:"CAJAARQUEOCIERREHORA",pic:"99:99:99"},{av:"A1270CajaArqueoEmpleadoId",fld:"CAJAARQUEOEMPLEADOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A2783CajaArqueoEmpleadoApellido",fld:"CAJAARQUEOEMPLEADOAPELLIDO",pic:"@!"},{av:"A2785CajaArqueoEmpleadoNombre",fld:"CAJAARQUEOEMPLEADONOMBRE",pic:"@!"},{av:"A2784CajaArqueoEmpleadoApellidoNombre",fld:"CAJAARQUEOEMPLEADOAPELLIDONOMBRE",pic:"@!"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z190CajaArqueoEntidadId"},{av:"Z191CajaArqueoSucursalId"},{av:"Z192CajaArqueoCajaFisicaId"},{av:"Z193CajaArqueoId"},{av:"Z3333CajaArqueoEstadoId"},{av:"Z3352CajaArqueoEstadoEst"},{av:"Z3353CajaArqueoEstadoUsuario"},{av:"Z3354CajaArqueoEstadoFechaHora"},{av:"Z3355CajaArqueoEstadoIP"},{av:"Z2027CajaArqueoEntidadNombre"},{av:"Z2028CajaArqueoSucursalNombre"},{av:"Z2025CajaArqueoCajaFisicaNombre"},{av:"Z2781CajaArqueoCajaFisicaTipo"},{av:"Z1265CajaArqueoNombre"},{av:"Z1266CajaArqueoAperturaFecha"},{av:"Z2024CajaArqueoAperturaHora"},{av:"Z1267CajaArqueoCierreFecha"},{av:"Z2026CajaArqueoCierreHora"},{av:"Z1270CajaArqueoEmpleadoId"},{av:"Z2783CajaArqueoEmpleadoApellido"},{av:"Z2785CajaArqueoEmpleadoNombre"},{av:"Z2784CajaArqueoEmpleadoApellidoNombre"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_CAJAARQUEOEMPLEADOID=[[],[]];this.EvtParms.VALID_CAJAARQUEOEMPLEADOAPELLIDO=[[],[]];this.EvtParms.VALID_CAJAARQUEOEMPLEADONOMBRE=[[],[]];this.EvtParms.VALID_CAJAARQUEOESTADOEST=[[{ctrl:"CAJAARQUEOESTADOEST"},{av:"A3352CajaArqueoEstadoEst",fld:"CAJAARQUEOESTADOEST",pic:""}],[{ctrl:"CAJAARQUEOESTADOEST"},{av:"A3352CajaArqueoEstadoEst",fld:"CAJAARQUEOESTADOEST",pic:""}]];this.EvtParms.VALID_CAJAARQUEOESTADOFECHAHORA=[[{av:"A3354CajaArqueoEstadoFechaHora",fld:"CAJAARQUEOESTADOFECHAHORA",pic:"99/99/99 99:99"}],[{av:"A3354CajaArqueoEstadoFechaHora",fld:"CAJAARQUEOESTADOFECHAHORA",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(cajaarqueoestado)})