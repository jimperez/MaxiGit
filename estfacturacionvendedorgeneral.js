/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:7.77
*/
gx.evt.autoSkip=!1;gx.define("estfacturacionvendedorgeneral",!0,function(n){this.ServerClass="estfacturacionvendedorgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Efvsucursalid=function(){return this.validCliEvt("Valid_Efvsucursalid",0,function(){try{var n=gx.util.balloon.getNew("EFVSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Efvmes=function(){return this.validCliEvt("Valid_Efvmes",0,function(){try{var n=gx.util.balloon.getNew("EFVMES");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Efvanio=function(){return this.validCliEvt("Valid_Efvanio",0,function(){try{var n=gx.util.balloon.getNew("EFVANIO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Efvvendedorid=function(){return this.validCliEvt("Valid_Efvvendedorid",0,function(){try{var n=gx.util.balloon.getNew("EFVVENDEDORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Efvvendedornombre=function(){return this.validCliEvt("Valid_Efvvendedornombre",0,function(){try{var n=gx.util.balloon.getNew("EFVVENDEDORNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Efvvendedorapellido=function(){return this.validCliEvt("Valid_Efvvendedorapellido",0,function(){try{var n=gx.util.balloon.getNew("EFVVENDEDORAPELLIDO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11u01_client=function(){return this.clearMessages(),this.call("estfacturacionvendedor.aspx",["UPD",this.A3174EFVSucursalId,this.A3175EFVMes,this.A3176EFVAnio,this.A3177EFVVendedorId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12u01_client=function(){return this.clearMessages(),this.call("estfacturacionvendedor.aspx",["DLT",this.A3174EFVSucursalId,this.A3175EFVMes,this.A3176EFVAnio,this.A3177EFVVendedorId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15u02_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16u02_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102];this.GXLastCtrlId=102;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVSUCURSALID",gxz:"Z3174EFVSucursalId",gxold:"O3174EFVSucursalId",gxvar:"A3174EFVSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3174EFVSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3174EFVSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVSUCURSALID",gx.O.A3174EFVSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3174EFVSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVSUCURSALID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvmes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVMES",gxz:"Z3175EFVMes",gxold:"O3175EFVMes",gxvar:"A3175EFVMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3175EFVMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3175EFVMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("EFVMES",gx.O.A3175EFVMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3175EFVMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVMES",".")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVANIO",gxz:"Z3176EFVAnio",gxold:"O3176EFVAnio",gxvar:"A3176EFVAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3176EFVAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3176EFVAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVANIO",gx.O.A3176EFVAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3176EFVAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvvendedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVVENDEDORID",gxz:"Z3177EFVVendedorId",gxold:"O3177EFVVendedorId",gxvar:"A3177EFVVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3177EFVVendedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3177EFVVendedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVVENDEDORID",gx.O.A3177EFVVendedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3177EFVVendedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVVENDEDORID",".")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvvendedornombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVVENDEDORNOMBRE",gxz:"Z3178EFVVendedorNombre",gxold:"O3178EFVVendedorNombre",gxvar:"A3178EFVVendedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3178EFVVendedorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3178EFVVendedorNombre=n)},v2c:function(){gx.fn.setControlValue("EFVVENDEDORNOMBRE",gx.O.A3178EFVVendedorNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3178EFVVendedorNombre=this.val())},val:function(){return gx.fn.getControlValue("EFVVENDEDORNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Efvvendedorapellido,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVVENDEDORAPELLIDO",gxz:"Z3179EFVVendedorApellido",gxold:"O3179EFVVendedorApellido",gxvar:"A3179EFVVendedorApellido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3179EFVVendedorApellido=n)},v2z:function(n){n!==undefined&&(gx.O.Z3179EFVVendedorApellido=n)},v2c:function(){gx.fn.setControlValue("EFVVENDEDORAPELLIDO",gx.O.A3179EFVVendedorApellido,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3179EFVVendedorApellido=this.val())},val:function(){return gx.fn.getControlValue("EFVVENDEDORAPELLIDO")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVVENDEDORAPELLIDONOMBRE",gxz:"Z3190EFVVendedorApellidoNombre",gxold:"O3190EFVVendedorApellidoNombre",gxvar:"A3190EFVVendedorApellidoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3190EFVVendedorApellidoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3190EFVVendedorApellidoNombre=n)},v2c:function(){gx.fn.setControlValue("EFVVENDEDORAPELLIDONOMBRE",gx.O.A3190EFVVendedorApellidoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3190EFVVendedorApellidoNombre=this.val())},val:function(){return gx.fn.getControlValue("EFVVENDEDORAPELLIDONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVIMPORTEFACTURADO",gxz:"Z3180EFVImporteFacturado",gxold:"O3180EFVImporteFacturado",gxvar:"A3180EFVImporteFacturado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3180EFVImporteFacturado=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3180EFVImporteFacturado=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVIMPORTEFACTURADO",gx.O.A3180EFVImporteFacturado,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3180EFVImporteFacturado=this.val())},val:function(){return gx.fn.getDecimalValue("EFVIMPORTEFACTURADO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVCANTIDADPRODUCTOS",gxz:"Z3181EFVCantidadProductos",gxold:"O3181EFVCantidadProductos",gxvar:"A3181EFVCantidadProductos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3181EFVCantidadProductos=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3181EFVCantidadProductos=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVCANTIDADPRODUCTOS",gx.O.A3181EFVCantidadProductos,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3181EFVCantidadProductos=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVCANTIDADPRODUCTOS",".")},nac:gx.falseFn};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVCANTIDADFACTURAS",gxz:"Z3182EFVCantidadFacturas",gxold:"O3182EFVCantidadFacturas",gxvar:"A3182EFVCantidadFacturas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3182EFVCantidadFacturas=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3182EFVCantidadFacturas=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVCANTIDADFACTURAS",gx.O.A3182EFVCantidadFacturas,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3182EFVCantidadFacturas=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVCANTIDADFACTURAS",".")},nac:gx.falseFn};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVCANTIDADFACTURASANU",gxz:"Z3183EFVCantidadFacturasAnu",gxold:"O3183EFVCantidadFacturasAnu",gxvar:"A3183EFVCantidadFacturasAnu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3183EFVCantidadFacturasAnu=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3183EFVCantidadFacturasAnu=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVCANTIDADFACTURASANU",gx.O.A3183EFVCantidadFacturasAnu,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3183EFVCantidadFacturasAnu=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVCANTIDADFACTURASANU",".")},nac:gx.falseFn};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVPORCFACTURASANU",gxz:"Z3184EFVPorcFacturasAnu",gxold:"O3184EFVPorcFacturasAnu",gxvar:"A3184EFVPorcFacturasAnu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3184EFVPorcFacturasAnu=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3184EFVPorcFacturasAnu=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVPORCFACTURASANU",gx.O.A3184EFVPorcFacturasAnu,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3184EFVPorcFacturasAnu=this.val())},val:function(){return gx.fn.getDecimalValue("EFVPORCFACTURASANU",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVGRUPOSLEIDOS",gxz:"Z3185EFVGruposLeidos",gxold:"O3185EFVGruposLeidos",gxvar:"A3185EFVGruposLeidos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3185EFVGruposLeidos=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3185EFVGruposLeidos=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVGRUPOSLEIDOS",gx.O.A3185EFVGruposLeidos,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3185EFVGruposLeidos=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVGRUPOSLEIDOS",".")},nac:gx.falseFn};t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVGRUPOSSINMOV",gxz:"Z3186EFVGruposSinMov",gxold:"O3186EFVGruposSinMov",gxvar:"A3186EFVGruposSinMov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3186EFVGruposSinMov=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3186EFVGruposSinMov=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVGRUPOSSINMOV",gx.O.A3186EFVGruposSinMov,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3186EFVGruposSinMov=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVGRUPOSSINMOV",".")},nac:gx.falseFn};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVPORCEFECTIVIDADGRUPOS",gxz:"Z3187EFVPorcEfectividadGrupos",gxold:"O3187EFVPorcEfectividadGrupos",gxvar:"A3187EFVPorcEfectividadGrupos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3187EFVPorcEfectividadGrupos=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3187EFVPorcEfectividadGrupos=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVPORCEFECTIVIDADGRUPOS",gx.O.A3187EFVPorcEfectividadGrupos,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3187EFVPorcEfectividadGrupos=this.val())},val:function(){return gx.fn.getDecimalValue("EFVPORCEFECTIVIDADGRUPOS",".",",")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});t[78]={id:78,fld:"",grid:0};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"",grid:0};t[81]={id:81,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVFACTTOTALGARANTIZABLE",gxz:"Z3188EFVFactTotalGarantizable",gxold:"O3188EFVFactTotalGarantizable",gxvar:"A3188EFVFactTotalGarantizable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3188EFVFactTotalGarantizable=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3188EFVFactTotalGarantizable=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVFACTTOTALGARANTIZABLE",gx.O.A3188EFVFactTotalGarantizable,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3188EFVFactTotalGarantizable=this.val())},val:function(){return gx.fn.getDecimalValue("EFVFACTTOTALGARANTIZABLE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});t[82]={id:82,fld:"",grid:0};t[83]={id:83,fld:"",grid:0};t[84]={id:84,fld:"",grid:0};t[85]={id:85,fld:"",grid:0};t[86]={id:86,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVFACTGAREXT",gxz:"Z3189EFVFactGarExt",gxold:"O3189EFVFactGarExt",gxvar:"A3189EFVFactGarExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3189EFVFactGarExt=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3189EFVFactGarExt=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVFACTGAREXT",gx.O.A3189EFVFactGarExt,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3189EFVFactGarExt=this.val())},val:function(){return gx.fn.getDecimalValue("EFVFACTGAREXT",".",",")},nac:gx.falseFn};this.declareDomainHdlr(86,function(){});t[87]={id:87,fld:"",grid:0};t[88]={id:88,fld:"",grid:0};t[89]={id:89,fld:"",grid:0};t[90]={id:90,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVPORCEFECTIVIDADGAREXT",gxz:"Z3191EFVPorcEfectividadGarExt",gxold:"O3191EFVPorcEfectividadGarExt",gxvar:"A3191EFVPorcEfectividadGarExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3191EFVPorcEfectividadGarExt=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3191EFVPorcEfectividadGarExt=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("EFVPORCEFECTIVIDADGAREXT",gx.O.A3191EFVPorcEfectividadGarExt,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3191EFVPorcEfectividadGarExt=this.val())},val:function(){return gx.fn.getDecimalValue("EFVPORCEFECTIVIDADGAREXT",".",",")},nac:gx.falseFn};this.declareDomainHdlr(90,function(){});t[91]={id:91,fld:"",grid:0};t[92]={id:92,fld:"",grid:0};t[93]={id:93,fld:"",grid:0};t[94]={id:94,fld:"",grid:0};t[95]={id:95,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EFVCANTFACTGAREXT",gxz:"Z3192EFVCantFactGarExt",gxold:"O3192EFVCantFactGarExt",gxvar:"A3192EFVCantFactGarExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3192EFVCantFactGarExt=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3192EFVCantFactGarExt=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EFVCANTFACTGAREXT",gx.O.A3192EFVCantFactGarExt,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3192EFVCantFactGarExt=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EFVCANTFACTGAREXT",".")},nac:gx.falseFn};t[96]={id:96,fld:"",grid:0};t[97]={id:97,fld:"",grid:0};t[98]={id:98,fld:"",grid:0};t[99]={id:99,fld:"",grid:0};t[100]={id:100,fld:"BTNUPDATE",grid:0,evt:"e11u01_client"};t[101]={id:101,fld:"",grid:0};t[102]={id:102,fld:"BTNDELETE",grid:0,evt:"e12u01_client"};this.A3174EFVSucursalId=0;this.Z3174EFVSucursalId=0;this.O3174EFVSucursalId=0;this.A3175EFVMes=0;this.Z3175EFVMes=0;this.O3175EFVMes=0;this.A3176EFVAnio=0;this.Z3176EFVAnio=0;this.O3176EFVAnio=0;this.A3177EFVVendedorId=0;this.Z3177EFVVendedorId=0;this.O3177EFVVendedorId=0;this.A3178EFVVendedorNombre="";this.Z3178EFVVendedorNombre="";this.O3178EFVVendedorNombre="";this.A3179EFVVendedorApellido="";this.Z3179EFVVendedorApellido="";this.O3179EFVVendedorApellido="";this.A3190EFVVendedorApellidoNombre="";this.Z3190EFVVendedorApellidoNombre="";this.O3190EFVVendedorApellidoNombre="";this.A3180EFVImporteFacturado=0;this.Z3180EFVImporteFacturado=0;this.O3180EFVImporteFacturado=0;this.A3181EFVCantidadProductos=0;this.Z3181EFVCantidadProductos=0;this.O3181EFVCantidadProductos=0;this.A3182EFVCantidadFacturas=0;this.Z3182EFVCantidadFacturas=0;this.O3182EFVCantidadFacturas=0;this.A3183EFVCantidadFacturasAnu=0;this.Z3183EFVCantidadFacturasAnu=0;this.O3183EFVCantidadFacturasAnu=0;this.A3184EFVPorcFacturasAnu=0;this.Z3184EFVPorcFacturasAnu=0;this.O3184EFVPorcFacturasAnu=0;this.A3185EFVGruposLeidos=0;this.Z3185EFVGruposLeidos=0;this.O3185EFVGruposLeidos=0;this.A3186EFVGruposSinMov=0;this.Z3186EFVGruposSinMov=0;this.O3186EFVGruposSinMov=0;this.A3187EFVPorcEfectividadGrupos=0;this.Z3187EFVPorcEfectividadGrupos=0;this.O3187EFVPorcEfectividadGrupos=0;this.A3188EFVFactTotalGarantizable=0;this.Z3188EFVFactTotalGarantizable=0;this.O3188EFVFactTotalGarantizable=0;this.A3189EFVFactGarExt=0;this.Z3189EFVFactGarExt=0;this.O3189EFVFactGarExt=0;this.A3191EFVPorcEfectividadGarExt=0;this.Z3191EFVPorcEfectividadGarExt=0;this.O3191EFVPorcEfectividadGarExt=0;this.A3192EFVCantFactGarExt=0;this.Z3192EFVCantFactGarExt=0;this.O3192EFVCantFactGarExt=0;this.A3174EFVSucursalId=0;this.A3175EFVMes=0;this.A3176EFVAnio=0;this.A3177EFVVendedorId=0;this.A3178EFVVendedorNombre="";this.A3179EFVVendedorApellido="";this.A3190EFVVendedorApellidoNombre="";this.A3180EFVImporteFacturado=0;this.A3181EFVCantidadProductos=0;this.A3182EFVCantidadFacturas=0;this.A3183EFVCantidadFacturasAnu=0;this.A3184EFVPorcFacturasAnu=0;this.A3185EFVGruposLeidos=0;this.A3186EFVGruposSinMov=0;this.A3187EFVPorcEfectividadGrupos=0;this.A3188EFVFactTotalGarantizable=0;this.A3189EFVFactGarExt=0;this.A3191EFVPorcEfectividadGarExt=0;this.A3192EFVCantFactGarExt=0;this.Events={e15u02_client:["ENTER",!0],e16u02_client:["CANCEL",!0],e11u01_client:["'DOUPDATE'",!1],e12u01_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A3174EFVSucursalId",fld:"EFVSUCURSALID",pic:"ZZZ9"},{ctrl:"EFVMES"},{av:"A3175EFVMes",fld:"EFVMES",pic:"Z9"},{av:"A3176EFVAnio",fld:"EFVANIO",pic:"ZZZZ"},{av:"A3177EFVVendedorId",fld:"EFVVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV21Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A3174EFVSucursalId",fld:"EFVSUCURSALID",pic:"ZZZ9"},{ctrl:"EFVMES"},{av:"A3175EFVMes",fld:"EFVMES",pic:"Z9"},{av:"A3176EFVAnio",fld:"EFVANIO",pic:"ZZZZ"},{av:"A3177EFVVendedorId",fld:"EFVVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A3174EFVSucursalId",fld:"EFVSUCURSALID",pic:"ZZZ9"},{ctrl:"EFVMES"},{av:"A3175EFVMes",fld:"EFVMES",pic:"Z9"},{av:"A3176EFVAnio",fld:"EFVANIO",pic:"ZZZZ"},{av:"A3177EFVVendedorId",fld:"EFVVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.VALID_EFVSUCURSALID=[[],[]];this.EvtParms.VALID_EFVMES=[[],[]];this.EvtParms.VALID_EFVANIO=[[],[]];this.EvtParms.VALID_EFVVENDEDORID=[[],[]];this.EvtParms.VALID_EFVVENDEDORNOMBRE=[[],[]];this.EvtParms.VALID_EFVVENDEDORAPELLIDO=[[],[]];this.Initialize()})