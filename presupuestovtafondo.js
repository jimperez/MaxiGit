/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:18.54
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtafondo",!1,function(){this.ServerClass="presupuestovtafondo";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A345FondoNombre=gx.fn.getControlValue("FONDONOMBRE");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validSrvEvt("Valid_Preid",0).then(function(n){return n}.closure(this))};this.Valid_Fondoid=function(){return this.validSrvEvt("Valid_Fondoid",0).then(function(n){return n}.closure(this))};this.Valid_Prefondo095=function(){return this.validCliEvt("Valid_Prefondo095",0,function(){try{var n=gx.util.balloon.getNew("PREFONDO095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A675PreFondo095)==0||new gx.date.gxdate(this.A675PreFondo095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fecha de Alta: fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Prefondo098=function(){return this.validCliEvt("Valid_Prefondo098",0,function(){try{var n=gx.util.balloon.getNew("PREFONDO098");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A677PreFondo098)==0||new gx.date.gxdate(this.A677PreFondo098).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fecha de Cbio: fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e111l64_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e121l64_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97];this.GXLastCtrlId=97;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e131l64_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e141l64_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e151l64_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e161l64_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e171l64_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[43,38,88,83,78,73,68,63,58,53,48],ip:[43,38,88,83,78,73,68,63,58,53,48,33,28],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("FONDOID",gx.O.A38FondoId)},c2v:function(){this.val()!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FONDOID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPO",gxz:"Z635FondoTipo",gxold:"O635FondoTipo",gxvar:"A635FondoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A635FondoTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z635FondoTipo=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOTIPO",gx.O.A635FondoTipo)},c2v:function(){this.val()!==undefined&&(gx.O.A635FondoTipo=this.val())},val:function(){return gx.fn.getControlValue("FONDOTIPO")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOESTADO",gxz:"Z346FondoEstado",gxold:"O346FondoEstado",gxvar:"A346FondoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A346FondoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z346FondoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOESTADO",gx.O.A346FondoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A346FondoEstado=this.val())},val:function(){return gx.fn.getControlValue("FONDOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTECOSTO",gxz:"Z2631PreFondoImporteCosto",gxold:"O2631PreFondoImporteCosto",gxvar:"A2631PreFondoImporteCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2631PreFondoImporteCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2631PreFondoImporteCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREFONDOIMPORTECOSTO",gx.O.A2631PreFondoImporteCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2631PreFondoImporteCosto=this.val())},val:function(){return gx.fn.getDecimalValue("PREFONDOIMPORTECOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTE",gxz:"Z673PreFondoImporte",gxold:"O673PreFondoImporte",gxvar:"A673PreFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A673PreFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z673PreFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREFONDOIMPORTE",gx.O.A673PreFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A673PreFondoImporte=this.val())},val:function(){return gx.fn.getDecimalValue("PREFONDOIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOPORCENTAJE",gxz:"Z2079PreFondoPorcentaje",gxold:"O2079PreFondoPorcentaje",gxvar:"A2079PreFondoPorcentaje",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2079PreFondoPorcentaje=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2079PreFondoPorcentaje=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREFONDOPORCENTAJE",gx.O.A2079PreFondoPorcentaje,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2079PreFondoPorcentaje=this.val())},val:function(){return gx.fn.getDecimalValue("PREFONDOPORCENTAJE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTEORIGEN",gxz:"Z2080PreFondoImporteOrigen",gxold:"O2080PreFondoImporteOrigen",gxvar:"A2080PreFondoImporteOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREFONDOIMPORTEORIGEN",gx.O.A2080PreFondoImporteOrigen,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2080PreFondoImporteOrigen=this.val())},val:function(){return gx.fn.getDecimalValue("PREFONDOIMPORTEORIGEN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOPORCENTAJEORIGEN",gxz:"Z2081PreFondoPorcentajeOrigen",gxold:"O2081PreFondoPorcentajeOrigen",gxvar:"A2081PreFondoPorcentajeOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2081PreFondoPorcentajeOrigen=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2081PreFondoPorcentajeOrigen=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREFONDOPORCENTAJEORIGEN",gx.O.A2081PreFondoPorcentajeOrigen,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2081PreFondoPorcentajeOrigen=this.val())},val:function(){return gx.fn.getDecimalValue("PREFONDOPORCENTAJEORIGEN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDO094",gxz:"Z674PreFondo094",gxold:"O674PreFondo094",gxvar:"A674PreFondo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A674PreFondo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z674PreFondo094=n)},v2c:function(){gx.fn.setControlValue("PREFONDO094",gx.O.A674PreFondo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A674PreFondo094=this.val())},val:function(){return gx.fn.getControlValue("PREFONDO094")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Prefondo095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDO095",gxz:"Z675PreFondo095",gxold:"O675PreFondo095",gxvar:"A675PreFondo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[78],ip:[78],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A675PreFondo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z675PreFondo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PREFONDO095",gx.O.A675PreFondo095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A675PreFondo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PREFONDO095")},nac:gx.falseFn};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"",grid:0};n[83]={id:83,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDO097",gxz:"Z676PreFondo097",gxold:"O676PreFondo097",gxvar:"A676PreFondo097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A676PreFondo097=n)},v2z:function(n){n!==undefined&&(gx.O.Z676PreFondo097=n)},v2c:function(){gx.fn.setControlValue("PREFONDO097",gx.O.A676PreFondo097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A676PreFondo097=this.val())},val:function(){return gx.fn.getControlValue("PREFONDO097")},nac:gx.falseFn};this.declareDomainHdlr(83,function(){});n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[88]={id:88,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Prefondo098,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDO098",gxz:"Z677PreFondo098",gxold:"O677PreFondo098",gxvar:"A677PreFondo098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[88],ip:[88],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A677PreFondo098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z677PreFondo098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PREFONDO098",gx.O.A677PreFondo098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A677PreFondo098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PREFONDO098")},nac:gx.falseFn};n[89]={id:89,fld:"",grid:0};n[90]={id:90,fld:"",grid:0};n[91]={id:91,fld:"",grid:0};n[92]={id:92,fld:"",grid:0};n[93]={id:93,fld:"BTN_ENTER",grid:0,evt:"e111l64_client",std:"ENTER"};n[94]={id:94,fld:"",grid:0};n[95]={id:95,fld:"BTN_CANCEL",grid:0,evt:"e121l64_client"};n[96]={id:96,fld:"",grid:0};n[97]={id:97,fld:"BTN_DELETE",grid:0,evt:"e181l64_client",std:"DELETE"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A38FondoId=0;this.Z38FondoId=0;this.O38FondoId=0;this.A635FondoTipo="";this.Z635FondoTipo="";this.O635FondoTipo="";this.A346FondoEstado="";this.Z346FondoEstado="";this.O346FondoEstado="";this.A2631PreFondoImporteCosto=0;this.Z2631PreFondoImporteCosto=0;this.O2631PreFondoImporteCosto=0;this.A673PreFondoImporte=0;this.Z673PreFondoImporte=0;this.O673PreFondoImporte=0;this.A2079PreFondoPorcentaje=0;this.Z2079PreFondoPorcentaje=0;this.O2079PreFondoPorcentaje=0;this.A2080PreFondoImporteOrigen=0;this.Z2080PreFondoImporteOrigen=0;this.O2080PreFondoImporteOrigen=0;this.A2081PreFondoPorcentajeOrigen=0;this.Z2081PreFondoPorcentajeOrigen=0;this.O2081PreFondoPorcentajeOrigen=0;this.A674PreFondo094="";this.Z674PreFondo094="";this.O674PreFondo094="";this.A675PreFondo095=gx.date.nullDate();this.Z675PreFondo095=gx.date.nullDate();this.O675PreFondo095=gx.date.nullDate();this.A676PreFondo097="";this.Z676PreFondo097="";this.O676PreFondo097="";this.A677PreFondo098=gx.date.nullDate();this.Z677PreFondo098=gx.date.nullDate();this.O677PreFondo098=gx.date.nullDate();this.A89PreId=0;this.A38FondoId=0;this.A345FondoNombre="";this.A635FondoTipo="";this.A346FondoEstado="";this.A2631PreFondoImporteCosto=0;this.A673PreFondoImporte=0;this.A2079PreFondoPorcentaje=0;this.A2080PreFondoImporteOrigen=0;this.A2081PreFondoPorcentajeOrigen=0;this.A674PreFondo094="";this.A675PreFondo095=gx.date.nullDate();this.A676PreFondo097="";this.A677PreFondo098=gx.date.nullDate();this.Events={e111l64_client:["ENTER",!0],e121l64_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EvtParms.REFRESH=[[{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EvtParms.VALID_PREID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EvtParms.VALID_FONDOID=[[{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A2631PreFondoImporteCosto",fld:"PREFONDOIMPORTECOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2079PreFondoPorcentaje",fld:"PREFONDOPORCENTAJE",pic:"999.99"},{av:"A2080PreFondoImporteOrigen",fld:"PREFONDOIMPORTEORIGEN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2081PreFondoPorcentajeOrigen",fld:"PREFONDOPORCENTAJEORIGEN",pic:"999.99"},{av:"A674PreFondo094",fld:"PREFONDO094",pic:""},{av:"A675PreFondo095",fld:"PREFONDO095",pic:"99/99/99 99:99"},{av:"A676PreFondo097",fld:"PREFONDO097",pic:""},{av:"A677PreFondo098",fld:"PREFONDO098",pic:"99/99/99 99:99"},{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z38FondoId"},{av:"Z2631PreFondoImporteCosto"},{av:"Z673PreFondoImporte"},{av:"Z2079PreFondoPorcentaje"},{av:"Z2080PreFondoImporteOrigen"},{av:"Z2081PreFondoPorcentajeOrigen"},{av:"Z674PreFondo094"},{av:"Z675PreFondo095"},{av:"Z676PreFondo097"},{av:"Z677PreFondo098"},{av:"Z345FondoNombre"},{av:"Z635FondoTipo"},{av:"Z346FondoEstado"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EvtParms.VALID_PREFONDO095=[[{av:"A675PreFondo095",fld:"PREFONDO095",pic:"99/99/99 99:99"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A675PreFondo095",fld:"PREFONDO095",pic:"99/99/99 99:99"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EvtParms.VALID_PREFONDO098=[[{av:"A677PreFondo098",fld:"PREFONDO098",pic:"99/99/99 99:99"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A677PreFondo098",fld:"PREFONDO098",pic:"99/99/99 99:99"},{ctrl:"FONDOID"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("A345FondoNombre","FONDONOMBRE",0,"svchar",64,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtafondo)})