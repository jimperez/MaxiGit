/*!   GeneXus C# 16_0_5-135614 on 10/3/2019 15:43:14.92
*/
gx.evt.autoSkip=!1;gx.define("saldoafavorgeneral",!0,function(n){this.ServerClass="saldoafavorgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Saldoafavorid=function(){return this.validCliEvt("Valid_Saldoafavorid",0,function(){try{var n=gx.util.balloon.getNew("SALDOAFAVORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){return this.validCliEvt("Valid_Clienteid",0,function(){try{var n=gx.util.balloon.getNew("CLIENTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){return this.validCliEvt("Valid_Cuentaid",0,function(){try{var n=gx.util.balloon.getNew("CUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11jb1_client=function(){return this.clearMessages(),this.call("saldoafavor.aspx",["UPD",this.A296SaldoAFavorId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12jb1_client=function(){return this.clearMessages(),this.call("saldoafavor.aspx",["DLT",this.A296SaldoAFavorId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15jb2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16jb2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];this.GXLastCtrlId=81;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Saldoafavorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORID",gxz:"Z296SaldoAFavorId",gxold:"O296SaldoAFavorId",gxvar:"A296SaldoAFavorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z296SaldoAFavorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVORID",gx.O.A296SaldoAFavorId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SALDOAFAVORID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORFECHA",gxz:"Z2385SaldoAFavorFecha",gxold:"O2385SaldoAFavorFecha",gxvar:"A2385SaldoAFavorFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2385SaldoAFavorFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2385SaldoAFavorFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVORFECHA",gx.O.A2385SaldoAFavorFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2385SaldoAFavorFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("SALDOAFAVORFECHA")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACION",gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1156ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORTIPO",gxz:"Z2391SaldoAFavorTipo",gxold:"O2391SaldoAFavorTipo",gxvar:"A2391SaldoAFavorTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2391SaldoAFavorTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2391SaldoAFavorTipo=n)},v2c:function(){gx.fn.setComboBoxValue("SALDOAFAVORTIPO",gx.O.A2391SaldoAFavorTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2391SaldoAFavorTipo=this.val())},val:function(){return gx.fn.getControlValue("SALDOAFAVORTIPO")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORESTADO",gxz:"Z2384SaldoAFavorEstado",gxold:"O2384SaldoAFavorEstado",gxvar:"A2384SaldoAFavorEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2384SaldoAFavorEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2384SaldoAFavorEstado=n)},v2c:function(){gx.fn.setComboBoxValue("SALDOAFAVORESTADO",gx.O.A2384SaldoAFavorEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2384SaldoAFavorEstado=this.val())},val:function(){return gx.fn.getControlValue("SALDOAFAVORESTADO")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORIMPORTE",gxz:"Z2386SaldoAFavorImporte",gxold:"O2386SaldoAFavorImporte",gxvar:"A2386SaldoAFavorImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("SALDOAFAVORIMPORTE",gx.O.A2386SaldoAFavorImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2386SaldoAFavorImporte=this.val())},val:function(){return gx.fn.getDecimalValue("SALDOAFAVORIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORSALDO",gxz:"Z2390SaldoAFavorSaldo",gxold:"O2390SaldoAFavorSaldo",gxvar:"A2390SaldoAFavorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("SALDOAFAVORSALDO",gx.O.A2390SaldoAFavorSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2390SaldoAFavorSaldo=this.val())},val:function(){return gx.fn.getDecimalValue("SALDOAFAVORSALDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"vchar",len:300,dec:150,sign:!1,pic:"@!",ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVOROBSERVACION",gxz:"Z2387SaldoAFavorObservacion",gxold:"O2387SaldoAFavorObservacion",gxvar:"A2387SaldoAFavorObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2387SaldoAFavorObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2387SaldoAFavorObservacion=n)},v2c:function(){gx.fn.setControlValue("SALDOAFAVOROBSERVACION",gx.O.A2387SaldoAFavorObservacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2387SaldoAFavorObservacion=this.val())},val:function(){return gx.fn.getControlValue("SALDOAFAVOROBSERVACION")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"SALDOAFAVORORIGENID_CELL",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORORIGENID",gxz:"Z2389SaldoAFavorOrigenId",gxold:"O2389SaldoAFavorOrigenId",gxvar:"A2389SaldoAFavorOrigenId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2389SaldoAFavorOrigenId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2389SaldoAFavorOrigenId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVORORIGENID",gx.O.A2389SaldoAFavorOrigenId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2389SaldoAFavorOrigenId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SALDOAFAVORORIGENID",".")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,fld:"SALDOAFAVORORIGENDETID_CELL",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORORIGENDETID",gxz:"Z2388SaldoAFavorOrigenDetId",gxold:"O2388SaldoAFavorOrigenDetId",gxvar:"A2388SaldoAFavorOrigenDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2388SaldoAFavorOrigenDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2388SaldoAFavorOrigenDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVORORIGENDETID",gx.O.A2388SaldoAFavorOrigenDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2388SaldoAFavorOrigenDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SALDOAFAVORORIGENDETID",".")},nac:gx.falseFn};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CUENTAID",gx.O.A88CuentaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CUENTAID",".")},nac:gx.falseFn};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVID",gxz:"Z197CuentaMovId",gxold:"O197CuentaMovId",gxvar:"A197CuentaMovId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z197CuentaMovId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CUENTAMOVID",gx.O.A197CuentaMovId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CUENTAMOVID",".")},nac:gx.falseFn};t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,fld:"BTNUPDATE",grid:0,evt:"e11jb1_client"};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"BTNDELETE",grid:0,evt:"e12jb1_client"};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[78]={id:78,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVOR094",gxz:"Z2380SaldoAFavor094",gxold:"O2380SaldoAFavor094",gxvar:"A2380SaldoAFavor094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2380SaldoAFavor094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2380SaldoAFavor094=n)},v2c:function(){gx.fn.setControlValue("SALDOAFAVOR094",gx.O.A2380SaldoAFavor094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2380SaldoAFavor094=this.val())},val:function(){return gx.fn.getControlValue("SALDOAFAVOR094")},nac:gx.falseFn};this.declareDomainHdlr(78,function(){});t[79]={id:79,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVOR095",gxz:"Z2381SaldoAFavor095",gxold:"O2381SaldoAFavor095",gxvar:"A2381SaldoAFavor095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2381SaldoAFavor095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2381SaldoAFavor095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVOR095",gx.O.A2381SaldoAFavor095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2381SaldoAFavor095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("SALDOAFAVOR095")},nac:gx.falseFn};this.declareDomainHdlr(79,function(){});t[80]={id:80,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVOR097",gxz:"Z2382SaldoAFavor097",gxold:"O2382SaldoAFavor097",gxvar:"A2382SaldoAFavor097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2382SaldoAFavor097=n)},v2z:function(n){n!==undefined&&(gx.O.Z2382SaldoAFavor097=n)},v2c:function(){gx.fn.setControlValue("SALDOAFAVOR097",gx.O.A2382SaldoAFavor097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2382SaldoAFavor097=this.val())},val:function(){return gx.fn.getControlValue("SALDOAFAVOR097")},nac:gx.falseFn};this.declareDomainHdlr(80,function(){});t[81]={id:81,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVOR098",gxz:"Z2383SaldoAFavor098",gxold:"O2383SaldoAFavor098",gxvar:"A2383SaldoAFavor098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2383SaldoAFavor098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2383SaldoAFavor098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVOR098",gx.O.A2383SaldoAFavor098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2383SaldoAFavor098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("SALDOAFAVOR098")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});this.A296SaldoAFavorId=0;this.Z296SaldoAFavorId=0;this.O296SaldoAFavorId=0;this.A2385SaldoAFavorFecha=gx.date.nullDate();this.Z2385SaldoAFavorFecha=gx.date.nullDate();this.O2385SaldoAFavorFecha=gx.date.nullDate();this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1156ClienteDenominacion="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.A2391SaldoAFavorTipo="";this.Z2391SaldoAFavorTipo="";this.O2391SaldoAFavorTipo="";this.A2384SaldoAFavorEstado="";this.Z2384SaldoAFavorEstado="";this.O2384SaldoAFavorEstado="";this.A2386SaldoAFavorImporte=0;this.Z2386SaldoAFavorImporte=0;this.O2386SaldoAFavorImporte=0;this.A2390SaldoAFavorSaldo=0;this.Z2390SaldoAFavorSaldo=0;this.O2390SaldoAFavorSaldo=0;this.A2387SaldoAFavorObservacion="";this.Z2387SaldoAFavorObservacion="";this.O2387SaldoAFavorObservacion="";this.A2389SaldoAFavorOrigenId=0;this.Z2389SaldoAFavorOrigenId=0;this.O2389SaldoAFavorOrigenId=0;this.A2388SaldoAFavorOrigenDetId=0;this.Z2388SaldoAFavorOrigenDetId=0;this.O2388SaldoAFavorOrigenDetId=0;this.A88CuentaId=0;this.Z88CuentaId=0;this.O88CuentaId=0;this.A197CuentaMovId=0;this.Z197CuentaMovId=0;this.O197CuentaMovId=0;this.A2380SaldoAFavor094="";this.Z2380SaldoAFavor094="";this.O2380SaldoAFavor094="";this.A2381SaldoAFavor095=gx.date.nullDate();this.Z2381SaldoAFavor095=gx.date.nullDate();this.O2381SaldoAFavor095=gx.date.nullDate();this.A2382SaldoAFavor097="";this.Z2382SaldoAFavor097="";this.O2382SaldoAFavor097="";this.A2383SaldoAFavor098=gx.date.nullDate();this.Z2383SaldoAFavor098=gx.date.nullDate();this.O2383SaldoAFavor098=gx.date.nullDate();this.A296SaldoAFavorId=0;this.A2385SaldoAFavorFecha=gx.date.nullDate();this.A53ClienteId=0;this.A1156ClienteDenominacion="";this.A2391SaldoAFavorTipo="";this.A2384SaldoAFavorEstado="";this.A2386SaldoAFavorImporte=0;this.A2390SaldoAFavorSaldo=0;this.A2387SaldoAFavorObservacion="";this.A2389SaldoAFavorOrigenId=0;this.A2388SaldoAFavorOrigenDetId=0;this.A88CuentaId=0;this.A197CuentaMovId=0;this.A2380SaldoAFavor094="";this.A2381SaldoAFavor095=gx.date.nullDate();this.A2382SaldoAFavor097="";this.A2383SaldoAFavor098=gx.date.nullDate();this.Events={e15jb2_client:["ENTER",!0],e16jb2_client:["CANCEL",!0],e11jb1_client:["'DOUPDATE'",!1],e12jb1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A296SaldoAFavorId",fld:"SALDOAFAVORID",pic:"ZZZZZZZ9"},{ctrl:"SALDOAFAVORTIPO"},{av:"A2391SaldoAFavorTipo",fld:"SALDOAFAVORTIPO",pic:""}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[{ctrl:"SALDOAFAVORTIPO"},{av:"A2391SaldoAFavorTipo",fld:"SALDOAFAVORTIPO",pic:""}],[{av:'gx.fn.getCtrlProperty("SALDOAFAVOR094","Visible")',ctrl:"SALDOAFAVOR094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVOR095","Visible")',ctrl:"SALDOAFAVOR095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVOR097","Visible")',ctrl:"SALDOAFAVOR097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVOR098","Visible")',ctrl:"SALDOAFAVOR098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVORORIGENID","Visible")',ctrl:"SALDOAFAVORORIGENID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVORORIGENID_CELL","Class")',ctrl:"SALDOAFAVORORIGENID_CELL",prop:"Class"},{av:'gx.fn.getCtrlProperty("SALDOAFAVORORIGENDETID","Visible")',ctrl:"SALDOAFAVORORIGENDETID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("SALDOAFAVORORIGENDETID_CELL","Class")',ctrl:"SALDOAFAVORORIGENDETID_CELL",prop:"Class"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A296SaldoAFavorId",fld:"SALDOAFAVORID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A296SaldoAFavorId",fld:"SALDOAFAVORID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_SALDOAFAVORID=[[],[]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.EvtParms.VALID_CUENTAID=[[],[]];this.Initialize()})