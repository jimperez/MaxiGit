/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:23.9
*/
gx.evt.autoSkip=!1;gx.define("contratogeneral",!0,function(n){this.ServerClass="contratogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Contratoid=function(){return this.validCliEvt("Valid_Contratoid",0,function(){try{var n=gx.util.balloon.getNew("CONTRATOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){return this.validCliEvt("Valid_Clienteid",0,function(){try{var n=gx.util.balloon.getNew("CLIENTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11f91_client=function(){return this.clearMessages(),this.call("contrato.aspx",["UPD",this.A269ContratoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12f91_client=function(){return this.clearMessages(),this.call("contrato.aspx",["DLT",this.A269ContratoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15f92_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16f92_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85];this.GXLastCtrlId=85;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contratoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOID",gxz:"Z269ContratoId",gxold:"O269ContratoId",gxvar:"A269ContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A269ContratoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z269ContratoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOID",gx.O.A269ContratoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A269ContratoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOFECHA",gxz:"Z2144ContratoFecha",gxold:"O2144ContratoFecha",gxvar:"A2144ContratoFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2144ContratoFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2144ContratoFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONTRATOFECHA",gx.O.A2144ContratoFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2144ContratoFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CONTRATOFECHA")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOORIGEN",gxz:"Z2157ContratoOrigen",gxold:"O2157ContratoOrigen",gxvar:"A2157ContratoOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2157ContratoOrigen=n)},v2z:function(n){n!==undefined&&(gx.O.Z2157ContratoOrigen=n)},v2c:function(){gx.fn.setComboBoxValue("CONTRATOORIGEN",gx.O.A2157ContratoOrigen);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2157ContratoOrigen=this.val())},val:function(){return gx.fn.getControlValue("CONTRATOORIGEN")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOESTADO",gxz:"Z2143ContratoEstado",gxold:"O2143ContratoEstado",gxvar:"A2143ContratoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2143ContratoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2143ContratoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CONTRATOESTADO",gx.O.A2143ContratoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2143ContratoEstado=this.val())},val:function(){return gx.fn.getControlValue("CONTRATOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACION",gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1156ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCOSTO",gxz:"Z2284ContratoCosto",gxold:"O2284ContratoCosto",gxvar:"A2284ContratoCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2284ContratoCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2284ContratoCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCOSTO",gx.O.A2284ContratoCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2284ContratoCosto=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOIMPORTEFIN",gxz:"Z2145ContratoImporteFin",gxold:"O2145ContratoImporteFin",gxvar:"A2145ContratoImporteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2145ContratoImporteFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2145ContratoImporteFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOIMPORTEFIN",gx.O.A2145ContratoImporteFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2145ContratoImporteFin=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOIMPORTEFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTA",gxz:"Z2146ContratoCuota",gxold:"O2146ContratoCuota",gxvar:"A2146ContratoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2146ContratoCuota=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2146ContratoCuota=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCUOTA",gx.O.A2146ContratoCuota,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2146ContratoCuota=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCUOTA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCANTIDAD",gxz:"Z2147ContratoCantidad",gxold:"O2147ContratoCantidad",gxvar:"A2147ContratoCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2147ContratoCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2147ContratoCantidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOCANTIDAD",gx.O.A2147ContratoCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2147ContratoCantidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOCANTIDAD",".")},nac:gx.falseFn};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOIMPORTE",gxz:"Z2148ContratoImporte",gxold:"O2148ContratoImporte",gxvar:"A2148ContratoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2148ContratoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2148ContratoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOIMPORTE",gx.O.A2148ContratoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2148ContratoImporte=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOSALDO",gxz:"Z2285ContratoSaldo",gxold:"O2285ContratoSaldo",gxvar:"A2285ContratoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2285ContratoSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2285ContratoSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOSALDO",gx.O.A2285ContratoSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2285ContratoSaldo=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOSALDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOORIGENID",gxz:"Z2155ContratoOrigenId",gxold:"O2155ContratoOrigenId",gxvar:"A2155ContratoOrigenId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2155ContratoOrigenId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2155ContratoOrigenId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOORIGENID",gx.O.A2155ContratoOrigenId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2155ContratoOrigenId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOORIGENID",".")},nac:gx.falseFn};t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOORIGENDETID",gxz:"Z2156ContratoOrigenDetId",gxold:"O2156ContratoOrigenDetId",gxvar:"A2156ContratoOrigenDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2156ContratoOrigenDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2156ContratoOrigenDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOORIGENDETID",gx.O.A2156ContratoOrigenDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2156ContratoOrigenDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOORIGENDETID",".")},nac:gx.falseFn};t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"BTNUPDATE",grid:0,evt:"e11f91_client"};t[77]={id:77,fld:"",grid:0};t[78]={id:78,fld:"BTNDELETE",grid:0,evt:"e12f91_client"};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"",grid:0};t[81]={id:81,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[82]={id:82,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATO094",gxz:"Z2218Contrato094",gxold:"O2218Contrato094",gxvar:"A2218Contrato094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2218Contrato094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2218Contrato094=n)},v2c:function(){gx.fn.setControlValue("CONTRATO094",gx.O.A2218Contrato094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2218Contrato094=this.val())},val:function(){return gx.fn.getControlValue("CONTRATO094")},nac:gx.falseFn};this.declareDomainHdlr(82,function(){});t[83]={id:83,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATO095",gxz:"Z2219Contrato095",gxold:"O2219Contrato095",gxvar:"A2219Contrato095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2219Contrato095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2219Contrato095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONTRATO095",gx.O.A2219Contrato095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2219Contrato095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONTRATO095")},nac:gx.falseFn};this.declareDomainHdlr(83,function(){});t[84]={id:84,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATO097",gxz:"Z2220Contrato097",gxold:"O2220Contrato097",gxvar:"A2220Contrato097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2220Contrato097=n)},v2z:function(n){n!==undefined&&(gx.O.Z2220Contrato097=n)},v2c:function(){gx.fn.setControlValue("CONTRATO097",gx.O.A2220Contrato097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2220Contrato097=this.val())},val:function(){return gx.fn.getControlValue("CONTRATO097")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});t[85]={id:85,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATO098",gxz:"Z2221Contrato098",gxold:"O2221Contrato098",gxvar:"A2221Contrato098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2221Contrato098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2221Contrato098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONTRATO098",gx.O.A2221Contrato098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2221Contrato098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONTRATO098")},nac:gx.falseFn};this.declareDomainHdlr(85,function(){});this.A269ContratoId=0;this.Z269ContratoId=0;this.O269ContratoId=0;this.A2144ContratoFecha=gx.date.nullDate();this.Z2144ContratoFecha=gx.date.nullDate();this.O2144ContratoFecha=gx.date.nullDate();this.A2157ContratoOrigen="";this.Z2157ContratoOrigen="";this.O2157ContratoOrigen="";this.A2143ContratoEstado="";this.Z2143ContratoEstado="";this.O2143ContratoEstado="";this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1156ClienteDenominacion="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.A2284ContratoCosto=0;this.Z2284ContratoCosto=0;this.O2284ContratoCosto=0;this.A2145ContratoImporteFin=0;this.Z2145ContratoImporteFin=0;this.O2145ContratoImporteFin=0;this.A2146ContratoCuota=0;this.Z2146ContratoCuota=0;this.O2146ContratoCuota=0;this.A2147ContratoCantidad=0;this.Z2147ContratoCantidad=0;this.O2147ContratoCantidad=0;this.A2148ContratoImporte=0;this.Z2148ContratoImporte=0;this.O2148ContratoImporte=0;this.A2285ContratoSaldo=0;this.Z2285ContratoSaldo=0;this.O2285ContratoSaldo=0;this.A2155ContratoOrigenId=0;this.Z2155ContratoOrigenId=0;this.O2155ContratoOrigenId=0;this.A2156ContratoOrigenDetId=0;this.Z2156ContratoOrigenDetId=0;this.O2156ContratoOrigenDetId=0;this.A2218Contrato094="";this.Z2218Contrato094="";this.O2218Contrato094="";this.A2219Contrato095=gx.date.nullDate();this.Z2219Contrato095=gx.date.nullDate();this.O2219Contrato095=gx.date.nullDate();this.A2220Contrato097="";this.Z2220Contrato097="";this.O2220Contrato097="";this.A2221Contrato098=gx.date.nullDate();this.Z2221Contrato098=gx.date.nullDate();this.O2221Contrato098=gx.date.nullDate();this.A269ContratoId=0;this.A2144ContratoFecha=gx.date.nullDate();this.A2157ContratoOrigen="";this.A2143ContratoEstado="";this.A53ClienteId=0;this.A1156ClienteDenominacion="";this.A2284ContratoCosto=0;this.A2145ContratoImporteFin=0;this.A2146ContratoCuota=0;this.A2147ContratoCantidad=0;this.A2148ContratoImporte=0;this.A2285ContratoSaldo=0;this.A2155ContratoOrigenId=0;this.A2156ContratoOrigenDetId=0;this.A2218Contrato094="";this.A2219Contrato095=gx.date.nullDate();this.A2220Contrato097="";this.A2221Contrato098=gx.date.nullDate();this.Events={e15f92_client:["ENTER",!0],e16f92_client:["CANCEL",!0],e11f91_client:["'DOUPDATE'",!1],e12f91_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("CONTRATO094","Visible")',ctrl:"CONTRATO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CONTRATO095","Visible")',ctrl:"CONTRATO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CONTRATO097","Visible")',ctrl:"CONTRATO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CONTRATO098","Visible")',ctrl:"CONTRATO098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_CONTRATOID=[[],[]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.Initialize()})