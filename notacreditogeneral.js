/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:46.43
*/
gx.evt.autoSkip=!1;gx.define("notacreditogeneral",!0,function(n){this.ServerClass="notacreditogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Ncid=function(){return this.validCliEvt("Valid_Ncid",0,function(){try{var n=gx.util.balloon.getNew("NCID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncsucursalid=function(){return this.validCliEvt("Valid_Ncsucursalid",0,function(){try{var n=gx.util.balloon.getNew("NCSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){return this.validCliEvt("Valid_Clienteid",0,function(){try{var n=gx.util.balloon.getNew("CLIENTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncentidadid=function(){return this.validCliEvt("Valid_Ncentidadid",0,function(){try{var n=gx.util.balloon.getNew("NCENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncletra=function(){return this.validCliEvt("Valid_Ncletra",0,function(){try{var n=gx.util.balloon.getNew("NCLETRA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncpuntoventa=function(){return this.validCliEvt("Valid_Ncpuntoventa",0,function(){try{var n=gx.util.balloon.getNew("NCPUNTOVENTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncnumero=function(){return this.validCliEvt("Valid_Ncnumero",0,function(){try{var n=gx.util.balloon.getNew("NCNUMERO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11gr1_client=function(){return this.clearMessages(),this.call("notacredito.aspx",["UPD",this.A289NcId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12gr1_client=function(){return this.clearMessages(),this.call("notacredito.aspx",["DLT",this.A289NcId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15gr2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16gr2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89];this.GXLastCtrlId=89;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCID",gxz:"Z289NcId",gxold:"O289NcId",gxvar:"A289NcId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A289NcId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z289NcId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCID",gx.O.A289NcId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A289NcId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFECHA",gxz:"Z2333NcFecha",gxold:"O2333NcFecha",gxvar:"A2333NcFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2333NcFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2333NcFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("NCFECHA",gx.O.A2333NcFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2333NcFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("NCFECHA")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSUCURSALID",gxz:"Z291NcSucursalId",gxold:"O291NcSucursalId",gxvar:"A291NcSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A291NcSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z291NcSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCSUCURSALID",gx.O.A291NcSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A291NcSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCSUCURSALID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSUCURSALNOMBRE",gxz:"Z2375NcSucursalNombre",gxold:"O2375NcSucursalNombre",gxvar:"A2375NcSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2375NcSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2375NcSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("NCSUCURSALNOMBRE",gx.O.A2375NcSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2375NcSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("NCSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACION",gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1156ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCESTADO",gxz:"Z2332NcEstado",gxold:"O2332NcEstado",gxvar:"A2332NcEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2332NcEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2332NcEstado=n)},v2c:function(){gx.fn.setComboBoxValue("NCESTADO",gx.O.A2332NcEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2332NcEstado=this.val())},val:function(){return gx.fn.getControlValue("NCESTADO")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCOMPROBANTE",gxz:"Z2339NcComprobante",gxold:"O2339NcComprobante",gxvar:"A2339NcComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2339NcComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2339NcComprobante=n)},v2c:function(){gx.fn.setControlValue("NCCOMPROBANTE",gx.O.A2339NcComprobante,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2339NcComprobante=this.val())},val:function(){return gx.fn.getControlValue("NCCOMPROBANTE")},nac:gx.falseFn};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCAENUMERO",gxz:"Z2341NcCAENumero",gxold:"O2341NcCAENumero",gxvar:"A2341NcCAENumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2341NcCAENumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z2341NcCAENumero=n)},v2c:function(){gx.fn.setControlValue("NCCAENUMERO",gx.O.A2341NcCAENumero,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2341NcCAENumero=this.val())},val:function(){return gx.fn.getControlValue("NCCAENUMERO")},nac:gx.falseFn};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCAEVTO",gxz:"Z2342NcCAEVto",gxold:"O2342NcCAEVto",gxvar:"A2342NcCAEVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2342NcCAEVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2342NcCAEVto=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("NCCAEVTO",gx.O.A2342NcCAEVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2342NcCAEVto=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("NCCAEVTO")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALIMPORTE",gxz:"Z2337NcFinalImporte",gxold:"O2337NcFinalImporte",gxvar:"A2337NcFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2337NcFinalImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2337NcFinalImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("NCFINALIMPORTE",gx.O.A2337NcFinalImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2337NcFinalImporte=this.val())},val:function(){return gx.fn.getDecimalValue("NCFINALIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(57,function(){});t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"",grid:0};t[61]={id:61,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSALDO",gxz:"Z2338NcSaldo",gxold:"O2338NcSaldo",gxvar:"A2338NcSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2338NcSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2338NcSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("NCSALDO",gx.O.A2338NcSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2338NcSaldo=this.val())},val:function(){return gx.fn.getDecimalValue("NCSALDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(61,function(){});t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCMODO",gxz:"Z2589NcModo",gxold:"O2589NcModo",gxvar:"A2589NcModo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2589NcModo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2589NcModo=n)},v2c:function(){gx.fn.setComboBoxValue("NCMODO",gx.O.A2589NcModo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2589NcModo=this.val())},val:function(){return gx.fn.getControlValue("NCMODO")},nac:gx.falseFn};this.declareDomainHdlr(66,function(){});t[67]={id:67,fld:"",grid:0};t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"",grid:0};t[70]={id:70,lvl:0,type:"vchar",len:300,dec:150,sign:!1,pic:"@!",ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCOBSERVACION",gxz:"Z2343NcObservacion",gxold:"O2343NcObservacion",gxvar:"A2343NcObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2343NcObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2343NcObservacion=n)},v2c:function(){gx.fn.setControlValue("NCOBSERVACION",gx.O.A2343NcObservacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2343NcObservacion=this.val())},val:function(){return gx.fn.getControlValue("NCOBSERVACION")},nac:gx.falseFn};this.declareDomainHdlr(70,function(){});t[71]={id:71,fld:"",grid:0};t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"BTNUPDATE",grid:0,evt:"e11gr1_client"};t[76]={id:76,fld:"",grid:0};t[77]={id:77,fld:"BTNDELETE",grid:0,evt:"e12gr1_client"};t[78]={id:78,fld:"",grid:0};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[81]={id:81,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCENTIDADID",gxz:"Z290NcEntidadId",gxold:"O290NcEntidadId",gxvar:"A290NcEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A290NcEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z290NcEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCENTIDADID",gx.O.A290NcEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A290NcEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCENTIDADID",".")},nac:gx.falseFn};t[82]={id:82,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCENTIDADNOMBRE",gxz:"Z2367NcEntidadNombre",gxold:"O2367NcEntidadNombre",gxvar:"A2367NcEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2367NcEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2367NcEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("NCENTIDADNOMBRE",gx.O.A2367NcEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2367NcEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("NCENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(82,function(){});t[83]={id:83,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncletra,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCLETRA",gxz:"Z2334NcLetra",gxold:"O2334NcLetra",gxvar:"A2334NcLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2334NcLetra=n)},v2z:function(n){n!==undefined&&(gx.O.Z2334NcLetra=n)},v2c:function(){gx.fn.setComboBoxValue("NCLETRA",gx.O.A2334NcLetra);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2334NcLetra=this.val())},val:function(){return gx.fn.getControlValue("NCLETRA")},nac:gx.falseFn};this.declareDomainHdlr(83,function(){});t[84]={id:84,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncpuntoventa,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCPUNTOVENTA",gxz:"Z2335NcPuntoVenta",gxold:"O2335NcPuntoVenta",gxvar:"A2335NcPuntoVenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2335NcPuntoVenta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2335NcPuntoVenta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCPUNTOVENTA",gx.O.A2335NcPuntoVenta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2335NcPuntoVenta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCPUNTOVENTA",".")},nac:gx.falseFn};t[85]={id:85,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ncnumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCNUMERO",gxz:"Z2336NcNumero",gxold:"O2336NcNumero",gxvar:"A2336NcNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2336NcNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2336NcNumero=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCNUMERO",gx.O.A2336NcNumero,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2336NcNumero=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCNUMERO",".")},nac:gx.falseFn};t[86]={id:86,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NC094",gxz:"Z2344Nc094",gxold:"O2344Nc094",gxvar:"A2344Nc094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2344Nc094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2344Nc094=n)},v2c:function(){gx.fn.setControlValue("NC094",gx.O.A2344Nc094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2344Nc094=this.val())},val:function(){return gx.fn.getControlValue("NC094")},nac:gx.falseFn};this.declareDomainHdlr(86,function(){});t[87]={id:87,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NC095",gxz:"Z2345Nc095",gxold:"O2345Nc095",gxvar:"A2345Nc095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2345Nc095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2345Nc095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("NC095",gx.O.A2345Nc095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2345Nc095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("NC095")},nac:gx.falseFn};this.declareDomainHdlr(87,function(){});t[88]={id:88,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NC097",gxz:"Z2346Nc097",gxold:"O2346Nc097",gxvar:"A2346Nc097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2346Nc097=n)},v2z:function(n){n!==undefined&&(gx.O.Z2346Nc097=n)},v2c:function(){gx.fn.setControlValue("NC097",gx.O.A2346Nc097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2346Nc097=this.val())},val:function(){return gx.fn.getControlValue("NC097")},nac:gx.falseFn};this.declareDomainHdlr(88,function(){});t[89]={id:89,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NC098",gxz:"Z2347Nc098",gxold:"O2347Nc098",gxvar:"A2347Nc098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2347Nc098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2347Nc098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("NC098",gx.O.A2347Nc098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2347Nc098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("NC098")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});this.A289NcId=0;this.Z289NcId=0;this.O289NcId=0;this.A2333NcFecha=gx.date.nullDate();this.Z2333NcFecha=gx.date.nullDate();this.O2333NcFecha=gx.date.nullDate();this.A291NcSucursalId=0;this.Z291NcSucursalId=0;this.O291NcSucursalId=0;this.A2375NcSucursalNombre="";this.Z2375NcSucursalNombre="";this.O2375NcSucursalNombre="";this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1156ClienteDenominacion="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.A2332NcEstado="";this.Z2332NcEstado="";this.O2332NcEstado="";this.A2339NcComprobante="";this.Z2339NcComprobante="";this.O2339NcComprobante="";this.A2341NcCAENumero="";this.Z2341NcCAENumero="";this.O2341NcCAENumero="";this.A2342NcCAEVto=gx.date.nullDate();this.Z2342NcCAEVto=gx.date.nullDate();this.O2342NcCAEVto=gx.date.nullDate();this.A2337NcFinalImporte=0;this.Z2337NcFinalImporte=0;this.O2337NcFinalImporte=0;this.A2338NcSaldo=0;this.Z2338NcSaldo=0;this.O2338NcSaldo=0;this.A2589NcModo="";this.Z2589NcModo="";this.O2589NcModo="";this.A2343NcObservacion="";this.Z2343NcObservacion="";this.O2343NcObservacion="";this.A290NcEntidadId=0;this.Z290NcEntidadId=0;this.O290NcEntidadId=0;this.A2367NcEntidadNombre="";this.Z2367NcEntidadNombre="";this.O2367NcEntidadNombre="";this.A2334NcLetra="";this.Z2334NcLetra="";this.O2334NcLetra="";this.A2335NcPuntoVenta=0;this.Z2335NcPuntoVenta=0;this.O2335NcPuntoVenta=0;this.A2336NcNumero=0;this.Z2336NcNumero=0;this.O2336NcNumero=0;this.A2344Nc094="";this.Z2344Nc094="";this.O2344Nc094="";this.A2345Nc095=gx.date.nullDate();this.Z2345Nc095=gx.date.nullDate();this.O2345Nc095=gx.date.nullDate();this.A2346Nc097="";this.Z2346Nc097="";this.O2346Nc097="";this.A2347Nc098=gx.date.nullDate();this.Z2347Nc098=gx.date.nullDate();this.O2347Nc098=gx.date.nullDate();this.A289NcId=0;this.A2333NcFecha=gx.date.nullDate();this.A291NcSucursalId=0;this.A2375NcSucursalNombre="";this.A53ClienteId=0;this.A1156ClienteDenominacion="";this.A2332NcEstado="";this.A2339NcComprobante="";this.A2341NcCAENumero="";this.A2342NcCAEVto=gx.date.nullDate();this.A2337NcFinalImporte=0;this.A2338NcSaldo=0;this.A2589NcModo="";this.A2343NcObservacion="";this.A290NcEntidadId=0;this.A2367NcEntidadNombre="";this.A2334NcLetra="";this.A2335NcPuntoVenta=0;this.A2336NcNumero=0;this.A2344Nc094="";this.A2345Nc095=gx.date.nullDate();this.A2346Nc097="";this.A2347Nc098=gx.date.nullDate();this.Events={e15gr2_client:["ENTER",!0],e16gr2_client:["CANCEL",!0],e11gr1_client:["'DOUPDATE'",!1],e12gr1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A289NcId",fld:"NCID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("NCENTIDADID","Visible")',ctrl:"NCENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NCENTIDADNOMBRE","Visible")',ctrl:"NCENTIDADNOMBRE",prop:"Visible"},{ctrl:"NCLETRA"},{av:'gx.fn.getCtrlProperty("NCPUNTOVENTA","Visible")',ctrl:"NCPUNTOVENTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NCNUMERO","Visible")',ctrl:"NCNUMERO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NC094","Visible")',ctrl:"NC094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NC095","Visible")',ctrl:"NC095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NC097","Visible")',ctrl:"NC097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NC098","Visible")',ctrl:"NC098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A289NcId",fld:"NCID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A289NcId",fld:"NCID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_NCID=[[],[]];this.EvtParms.VALID_NCSUCURSALID=[[],[]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.EvtParms.VALID_NCENTIDADID=[[],[]];this.EvtParms.VALID_NCLETRA=[[],[]];this.EvtParms.VALID_NCPUNTOVENTA=[[],[]];this.EvtParms.VALID_NCNUMERO=[[],[]];this.Initialize()})