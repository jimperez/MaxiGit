/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:42.85
*/
gx.evt.autoSkip=!1;gx.define("recibotarjetageneral",!0,function(n){this.ServerClass="recibotarjetageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1524TarjetaEmiNombre=gx.fn.getControlValue("TARJETAEMINOMBRE")};this.Valid_Reciboid=function(){return this.validCliEvt("Valid_Reciboid",0,function(){try{var n=gx.util.balloon.getNew("RECIBOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Recibocuponid=function(){return this.validCliEvt("Valid_Recibocuponid",0,function(){try{var n=gx.util.balloon.getNew("RECIBOCUPONID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjid=function(){return this.validCliEvt("Valid_Trjid",0,function(){try{var n=gx.util.balloon.getNew("TRJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){return this.validCliEvt("Valid_Emisortrjid",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplanid=function(){return this.validCliEvt("Valid_Trjplanid",0,function(){try{var n=gx.util.balloon.getNew("TRJPLANID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplancosto=function(){return this.validCliEvt("Valid_Trjplancosto",0,function(){try{var n=gx.util.balloon.getNew("TRJPLANCOSTO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){return this.validCliEvt("Valid_Planid",0,function(){try{var n=gx.util.balloon.getNew("PLANID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){return this.validCliEvt("Valid_Emisortrjnombre",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){return this.validCliEvt("Valid_Trjnom",0,function(){try{var n=gx.util.balloon.getNew("TRJNOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Plannombre=function(){return this.validCliEvt("Valid_Plannombre",0,function(){try{var n=gx.util.balloon.getNew("PLANNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplandesde=function(){return this.validCliEvt("Valid_Trjplandesde",0,function(){try{var n=gx.util.balloon.getNew("TRJPLANDESDE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplanhasta=function(){return this.validCliEvt("Valid_Trjplanhasta",0,function(){try{var n=gx.util.balloon.getNew("TRJPLANHASTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11n71_client=function(){return this.clearMessages(),this.call("recibotarjeta.aspx",["UPD",this.A280ReciboId,this.A284ReciboCuponId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12n71_client=function(){return this.clearMessages(),this.call("recibotarjeta.aspx",["DLT",this.A280ReciboId,this.A284ReciboCuponId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15n72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16n72_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102];this.GXLastCtrlId=102;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANNOMBRE",gxz:"Z1532TarjetaEmiPlanNombre",gxold:"O1532TarjetaEmiPlanNombre",gxvar:"A1532TarjetaEmiPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1532TarjetaEmiPlanNombre=n)},v2c:function(){gx.fn.setControlValue("TARJETAEMIPLANNOMBRE",gx.O.A1532TarjetaEmiPlanNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=this.val())},val:function(){return gx.fn.getControlValue("TARJETAEMIPLANNOMBRE")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONCOMERCIONRO",gxz:"Z2249ReciboCuponComercioNro",gxold:"O2249ReciboCuponComercioNro",gxvar:"A2249ReciboCuponComercioNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2249ReciboCuponComercioNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z2249ReciboCuponComercioNro=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPONCOMERCIONRO",gx.O.A2249ReciboCuponComercioNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2249ReciboCuponComercioNro=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPONCOMERCIONRO")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONFECHA",gxz:"Z2253ReciboCuponFecha",gxold:"O2253ReciboCuponFecha",gxvar:"A2253ReciboCuponFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2253ReciboCuponFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2253ReciboCuponFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONFECHA",gx.O.A2253ReciboCuponFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2253ReciboCuponFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("RECIBOCUPONFECHA")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONLOTE",gxz:"Z2256ReciboCuponLote",gxold:"O2256ReciboCuponLote",gxvar:"A2256ReciboCuponLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2256ReciboCuponLote=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2256ReciboCuponLote=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONLOTE",gx.O.A2256ReciboCuponLote,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2256ReciboCuponLote=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOCUPONLOTE",".")},nac:gx.falseFn};this.declareDomainHdlr(28,function(){});t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONNRO",gxz:"Z2257ReciboCuponNro",gxold:"O2257ReciboCuponNro",gxvar:"A2257ReciboCuponNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2257ReciboCuponNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z2257ReciboCuponNro=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPONNRO",gx.O.A2257ReciboCuponNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2257ReciboCuponNro=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPONNRO")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,lvl:0,type:"char",len:16,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONTARJETANRO",gxz:"Z2259ReciboCuponTarjetaNro",gxold:"O2259ReciboCuponTarjetaNro",gxvar:"A2259ReciboCuponTarjetaNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2259ReciboCuponTarjetaNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z2259ReciboCuponTarjetaNro=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPONTARJETANRO",gx.O.A2259ReciboCuponTarjetaNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2259ReciboCuponTarjetaNro=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPONTARJETANRO")},nac:gx.falseFn};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"char",len:5,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONTARJETAVTO",gxz:"Z2260ReciboCuponTarjetaVto",gxold:"O2260ReciboCuponTarjetaVto",gxvar:"A2260ReciboCuponTarjetaVto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2260ReciboCuponTarjetaVto=n)},v2z:function(n){n!==undefined&&(gx.O.Z2260ReciboCuponTarjetaVto=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPONTARJETAVTO",gx.O.A2260ReciboCuponTarjetaVto,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2260ReciboCuponTarjetaVto=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPONTARJETAVTO")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONTITULAR",gxz:"Z2261ReciboCuponTitular",gxold:"O2261ReciboCuponTitular",gxvar:"A2261ReciboCuponTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2261ReciboCuponTitular=n)},v2z:function(n){n!==undefined&&(gx.O.Z2261ReciboCuponTitular=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPONTITULAR",gx.O.A2261ReciboCuponTitular,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2261ReciboCuponTitular=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPONTITULAR")},nac:gx.falseFn};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONTARJETACODSEG",gxz:"Z2258ReciboCuponTarjetaCodSeg",gxold:"O2258ReciboCuponTarjetaCodSeg",gxvar:"A2258ReciboCuponTarjetaCodSeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2258ReciboCuponTarjetaCodSeg=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2258ReciboCuponTarjetaCodSeg=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONTARJETACODSEG",gx.O.A2258ReciboCuponTarjetaCodSeg,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2258ReciboCuponTarjetaCodSeg=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOCUPONTARJETACODSEG",".")},nac:gx.falseFn};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONCOSTO",gxz:"Z2250ReciboCuponCosto",gxold:"O2250ReciboCuponCosto",gxvar:"A2250ReciboCuponCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2250ReciboCuponCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2250ReciboCuponCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("RECIBOCUPONCOSTO",gx.O.A2250ReciboCuponCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2250ReciboCuponCosto=this.val())},val:function(){return gx.fn.getDecimalValue("RECIBOCUPONCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONCUOTACANTIDAD",gxz:"Z2251ReciboCuponCuotaCantidad",gxold:"O2251ReciboCuponCuotaCantidad",gxvar:"A2251ReciboCuponCuotaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2251ReciboCuponCuotaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2251ReciboCuponCuotaCantidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONCUOTACANTIDAD",gx.O.A2251ReciboCuponCuotaCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2251ReciboCuponCuotaCantidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOCUPONCUOTACANTIDAD",".")},nac:gx.falseFn};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONIMPORTEFIN",gxz:"Z2255ReciboCuponImporteFin",gxold:"O2255ReciboCuponImporteFin",gxvar:"A2255ReciboCuponImporteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2255ReciboCuponImporteFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2255ReciboCuponImporteFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("RECIBOCUPONIMPORTEFIN",gx.O.A2255ReciboCuponImporteFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2255ReciboCuponImporteFin=this.val())},val:function(){return gx.fn.getDecimalValue("RECIBOCUPONIMPORTEFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONCUOTAIMPORTE",gxz:"Z2252ReciboCuponCuotaImporte",gxold:"O2252ReciboCuponCuotaImporte",gxvar:"A2252ReciboCuponCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2252ReciboCuponCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2252ReciboCuponCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("RECIBOCUPONCUOTAIMPORTE",gx.O.A2252ReciboCuponCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2252ReciboCuponCuotaImporte=this.val())},val:function(){return gx.fn.getDecimalValue("RECIBOCUPONCUOTAIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,fld:"",grid:0};t[73]={id:73,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONIMPORTE",gxz:"Z2254ReciboCuponImporte",gxold:"O2254ReciboCuponImporte",gxvar:"A2254ReciboCuponImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2254ReciboCuponImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2254ReciboCuponImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("RECIBOCUPONIMPORTE",gx.O.A2254ReciboCuponImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2254ReciboCuponImporte=this.val())},val:function(){return gx.fn.getDecimalValue("RECIBOCUPONIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,fld:"",grid:0};t[78]={id:78,fld:"BTNUPDATE",grid:0,evt:"e11n71_client"};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"BTNDELETE",grid:0,evt:"e12n71_client"};t[81]={id:81,fld:"",grid:0};t[82]={id:82,fld:"",grid:0};t[83]={id:83,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[84]={id:84,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Reciboid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOID",gxz:"Z280ReciboId",gxold:"O280ReciboId",gxvar:"A280ReciboId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A280ReciboId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z280ReciboId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOID",gx.O.A280ReciboId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A280ReciboId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOID",".")},nac:gx.falseFn};t[85]={id:85,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Recibocuponid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONID",gxz:"Z284ReciboCuponId",gxold:"O284ReciboCuponId",gxvar:"A284ReciboCuponId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A284ReciboCuponId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z284ReciboCuponId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONID",gx.O.A284ReciboCuponId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A284ReciboCuponId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOCUPONID",".")},nac:gx.falseFn};t[86]={id:86,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJID",gx.O.A96TrjId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJID",".")},nac:gx.falseFn};t[87]={id:87,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJID",gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMISORTRJID",".")},nac:gx.falseFn};this.declareDomainHdlr(87,function(){});t[88]={id:88,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjplanid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANID",gxz:"Z98TrjPlanId",gxold:"O98TrjPlanId",gxvar:"A98TrjPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z98TrjPlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJPLANID",gx.O.A98TrjPlanId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJPLANID",".")},nac:gx.falseFn};t[89]={id:89,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPONCUPONID",gxz:"Z2895ReciboCuponCuponId",gxold:"O2895ReciboCuponCuponId",gxvar:"A2895ReciboCuponCuponId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2895ReciboCuponCuponId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2895ReciboCuponCuponId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPONCUPONID",gx.O.A2895ReciboCuponCuponId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2895ReciboCuponCuponId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RECIBOCUPONCUPONID",".")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});t[90]={id:90,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANCUOTA",gxz:"Z857TrjPlanCuota",gxold:"O857TrjPlanCuota",gxvar:"A857TrjPlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A857TrjPlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z857TrjPlanCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJPLANCUOTA",gx.O.A857TrjPlanCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A857TrjPlanCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJPLANCUOTA",".")},nac:gx.falseFn};t[91]={id:91,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjplancosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANCOSTO",gxz:"Z858TrjPlanCosto",gxold:"O858TrjPlanCosto",gxvar:"A858TrjPlanCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A858TrjPlanCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z858TrjPlanCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("TRJPLANCOSTO",gx.O.A858TrjPlanCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A858TrjPlanCosto=this.val())},val:function(){return gx.fn.getDecimalValue("TRJPLANCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(91,function(){});t[92]={id:92,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANID",gx.O.A119PlanId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANID",".")},nac:gx.falseFn};t[93]={id:93,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(){gx.fn.setControlValue("EMISORTRJNOMBRE",gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(93,function(){});t[94]={id:94,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(){gx.fn.setControlValue("TRJNOM",gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A849TrjNom=this.val())},val:function(){return gx.fn.getControlValue("TRJNOM")},nac:gx.falseFn};this.declareDomainHdlr(94,function(){});t[95]={id:95,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(){gx.fn.setControlValue("PLANNOMBRE",gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1040PlanNombre=this.val())},val:function(){return gx.fn.getControlValue("PLANNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(95,function(){});t[96]={id:96,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANESTADO",gxz:"Z1041PlanEstado",gxold:"O1041PlanEstado",gxvar:"A1041PlanEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1041PlanEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1041PlanEstado=n)},v2c:function(){gx.fn.setComboBoxValue("PLANESTADO",gx.O.A1041PlanEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1041PlanEstado=this.val())},val:function(){return gx.fn.getControlValue("PLANESTADO")},nac:gx.falseFn};this.declareDomainHdlr(96,function(){});t[97]={id:97,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjplandesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANDESDE",gxz:"Z1038TrjPlanDesde",gxold:"O1038TrjPlanDesde",gxvar:"A1038TrjPlanDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1038TrjPlanDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1038TrjPlanDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRJPLANDESDE",gx.O.A1038TrjPlanDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1038TrjPlanDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TRJPLANDESDE")},nac:gx.falseFn};this.declareDomainHdlr(97,function(){});t[98]={id:98,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANVIGENCIA",gxz:"Z1526TrjPlanVigencia",gxold:"O1526TrjPlanVigencia",gxvar:"A1526TrjPlanVigencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1526TrjPlanVigencia=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1526TrjPlanVigencia=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("TRJPLANVIGENCIA",gx.O.A1526TrjPlanVigencia,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1526TrjPlanVigencia=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("TRJPLANVIGENCIA")},nac:gx.falseFn};t[99]={id:99,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANEST",gxz:"Z859TrjPlanEst",gxold:"O859TrjPlanEst",gxvar:"A859TrjPlanEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A859TrjPlanEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z859TrjPlanEst=n)},v2c:function(){gx.fn.setComboBoxValue("TRJPLANEST",gx.O.A859TrjPlanEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A859TrjPlanEst=this.val())},val:function(){return gx.fn.getControlValue("TRJPLANEST")},nac:gx.falseFn};this.declareDomainHdlr(99,function(){});t[100]={id:100,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjplanhasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANHASTA",gxz:"Z1039TrjPlanHasta",gxold:"O1039TrjPlanHasta",gxvar:"A1039TrjPlanHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1039TrjPlanHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1039TrjPlanHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRJPLANHASTA",gx.O.A1039TrjPlanHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1039TrjPlanHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TRJPLANHASTA")},nac:gx.falseFn};this.declareDomainHdlr(100,function(){});t[101]={id:101,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPON094",gxz:"Z2247ReciboCupon094",gxold:"O2247ReciboCupon094",gxvar:"A2247ReciboCupon094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2247ReciboCupon094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2247ReciboCupon094=n)},v2c:function(){gx.fn.setControlValue("RECIBOCUPON094",gx.O.A2247ReciboCupon094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2247ReciboCupon094=this.val())},val:function(){return gx.fn.getControlValue("RECIBOCUPON094")},nac:gx.falseFn};this.declareDomainHdlr(101,function(){});t[102]={id:102,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECIBOCUPON095",gxz:"Z2248ReciboCupon095",gxold:"O2248ReciboCupon095",gxvar:"A2248ReciboCupon095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2248ReciboCupon095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2248ReciboCupon095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("RECIBOCUPON095",gx.O.A2248ReciboCupon095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2248ReciboCupon095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("RECIBOCUPON095")},nac:gx.falseFn};this.declareDomainHdlr(102,function(){});this.A1532TarjetaEmiPlanNombre="";this.Z1532TarjetaEmiPlanNombre="";this.O1532TarjetaEmiPlanNombre="";this.A2249ReciboCuponComercioNro="";this.Z2249ReciboCuponComercioNro="";this.O2249ReciboCuponComercioNro="";this.A2253ReciboCuponFecha=gx.date.nullDate();this.Z2253ReciboCuponFecha=gx.date.nullDate();this.O2253ReciboCuponFecha=gx.date.nullDate();this.A2256ReciboCuponLote=0;this.Z2256ReciboCuponLote=0;this.O2256ReciboCuponLote=0;this.A2257ReciboCuponNro="";this.Z2257ReciboCuponNro="";this.O2257ReciboCuponNro="";this.A2259ReciboCuponTarjetaNro="";this.Z2259ReciboCuponTarjetaNro="";this.O2259ReciboCuponTarjetaNro="";this.A2260ReciboCuponTarjetaVto="";this.Z2260ReciboCuponTarjetaVto="";this.O2260ReciboCuponTarjetaVto="";this.A2261ReciboCuponTitular="";this.Z2261ReciboCuponTitular="";this.O2261ReciboCuponTitular="";this.A2258ReciboCuponTarjetaCodSeg=0;this.Z2258ReciboCuponTarjetaCodSeg=0;this.O2258ReciboCuponTarjetaCodSeg=0;this.A2250ReciboCuponCosto=0;this.Z2250ReciboCuponCosto=0;this.O2250ReciboCuponCosto=0;this.A2251ReciboCuponCuotaCantidad=0;this.Z2251ReciboCuponCuotaCantidad=0;this.O2251ReciboCuponCuotaCantidad=0;this.A2255ReciboCuponImporteFin=0;this.Z2255ReciboCuponImporteFin=0;this.O2255ReciboCuponImporteFin=0;this.A2252ReciboCuponCuotaImporte=0;this.Z2252ReciboCuponCuotaImporte=0;this.O2252ReciboCuponCuotaImporte=0;this.A2254ReciboCuponImporte=0;this.Z2254ReciboCuponImporte=0;this.O2254ReciboCuponImporte=0;this.A280ReciboId=0;this.Z280ReciboId=0;this.O280ReciboId=0;this.A284ReciboCuponId=0;this.Z284ReciboCuponId=0;this.O284ReciboCuponId=0;this.A96TrjId=0;this.Z96TrjId=0;this.O96TrjId=0;this.A97EmisorTrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.A98TrjPlanId=0;this.Z98TrjPlanId=0;this.O98TrjPlanId=0;this.A2895ReciboCuponCuponId=0;this.Z2895ReciboCuponCuponId=0;this.O2895ReciboCuponCuponId=0;this.A857TrjPlanCuota=0;this.Z857TrjPlanCuota=0;this.O857TrjPlanCuota=0;this.A858TrjPlanCosto=0;this.Z858TrjPlanCosto=0;this.O858TrjPlanCosto=0;this.A119PlanId=0;this.Z119PlanId=0;this.O119PlanId=0;this.A1030EmisorTrjNombre="";this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.A849TrjNom="";this.Z849TrjNom="";this.O849TrjNom="";this.A1040PlanNombre="";this.Z1040PlanNombre="";this.O1040PlanNombre="";this.A1041PlanEstado="";this.Z1041PlanEstado="";this.O1041PlanEstado="";this.A1038TrjPlanDesde=gx.date.nullDate();this.Z1038TrjPlanDesde=gx.date.nullDate();this.O1038TrjPlanDesde=gx.date.nullDate();this.A1526TrjPlanVigencia=!1;this.Z1526TrjPlanVigencia=!1;this.O1526TrjPlanVigencia=!1;this.A859TrjPlanEst="";this.Z859TrjPlanEst="";this.O859TrjPlanEst="";this.A1039TrjPlanHasta=gx.date.nullDate();this.Z1039TrjPlanHasta=gx.date.nullDate();this.O1039TrjPlanHasta=gx.date.nullDate();this.A2247ReciboCupon094="";this.Z2247ReciboCupon094="";this.O2247ReciboCupon094="";this.A2248ReciboCupon095=gx.date.nullDate();this.Z2248ReciboCupon095=gx.date.nullDate();this.O2248ReciboCupon095=gx.date.nullDate();this.A1532TarjetaEmiPlanNombre="";this.A2249ReciboCuponComercioNro="";this.A2253ReciboCuponFecha=gx.date.nullDate();this.A2256ReciboCuponLote=0;this.A2257ReciboCuponNro="";this.A2259ReciboCuponTarjetaNro="";this.A2260ReciboCuponTarjetaVto="";this.A2261ReciboCuponTitular="";this.A2258ReciboCuponTarjetaCodSeg=0;this.A2250ReciboCuponCosto=0;this.A2251ReciboCuponCuotaCantidad=0;this.A2255ReciboCuponImporteFin=0;this.A2252ReciboCuponCuotaImporte=0;this.A2254ReciboCuponImporte=0;this.A280ReciboId=0;this.A284ReciboCuponId=0;this.A96TrjId=0;this.A97EmisorTrjId=0;this.A98TrjPlanId=0;this.A2895ReciboCuponCuponId=0;this.A857TrjPlanCuota=0;this.A858TrjPlanCosto=0;this.A119PlanId=0;this.A1030EmisorTrjNombre="";this.A849TrjNom="";this.A1040PlanNombre="";this.A1041PlanEstado="";this.A1038TrjPlanDesde=gx.date.nullDate();this.A1526TrjPlanVigencia=!1;this.A859TrjPlanEst="";this.A1039TrjPlanHasta=gx.date.nullDate();this.A2247ReciboCupon094="";this.A2248ReciboCupon095=gx.date.nullDate();this.A1524TarjetaEmiNombre="";this.Events={e15n72_client:["ENTER",!0],e16n72_client:["CANCEL",!0],e11n71_client:["'DOUPDATE'",!1],e12n71_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A280ReciboId",fld:"RECIBOID",pic:"ZZZZZZZZ9"},{av:"A284ReciboCuponId",fld:"RECIBOCUPONID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("RECIBOID","Visible")',ctrl:"RECIBOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("RECIBOCUPONID","Visible")',ctrl:"RECIBOCUPONID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJID","Visible")',ctrl:"TRJID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJID","Visible")',ctrl:"EMISORTRJID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJPLANID","Visible")',ctrl:"TRJPLANID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("RECIBOCUPONCUPONID","Visible")',ctrl:"RECIBOCUPONCUPONID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJPLANCUOTA","Visible")',ctrl:"TRJPLANCUOTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJPLANCOSTO","Visible")',ctrl:"TRJPLANCOSTO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PLANID","Visible")',ctrl:"PLANID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJNOMBRE","Visible")',ctrl:"EMISORTRJNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJNOM","Visible")',ctrl:"TRJNOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PLANNOMBRE","Visible")',ctrl:"PLANNOMBRE",prop:"Visible"},{ctrl:"PLANESTADO"},{av:'gx.fn.getCtrlProperty("TRJPLANDESDE","Visible")',ctrl:"TRJPLANDESDE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJPLANVIGENCIA","Visible")',ctrl:"TRJPLANVIGENCIA",prop:"Visible"},{ctrl:"TRJPLANEST"},{av:'gx.fn.getCtrlProperty("TRJPLANHASTA","Visible")',ctrl:"TRJPLANHASTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("RECIBOCUPON094","Visible")',ctrl:"RECIBOCUPON094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("RECIBOCUPON095","Visible")',ctrl:"RECIBOCUPON095",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A280ReciboId",fld:"RECIBOID",pic:"ZZZZZZZZ9"},{av:"A284ReciboCuponId",fld:"RECIBOCUPONID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A280ReciboId",fld:"RECIBOID",pic:"ZZZZZZZZ9"},{av:"A284ReciboCuponId",fld:"RECIBOCUPONID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_RECIBOID=[[],[]];this.EvtParms.VALID_RECIBOCUPONID=[[],[]];this.EvtParms.VALID_TRJID=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_TRJPLANID=[[],[]];this.EvtParms.VALID_TRJPLANCOSTO=[[],[]];this.EvtParms.VALID_PLANID=[[],[]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[],[]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.EvtParms.VALID_TRJPLANDESDE=[[],[]];this.EvtParms.VALID_TRJPLANHASTA=[[],[]];this.setVCMap("A1524TarjetaEmiNombre","TARJETAEMINOMBRE",0,"svchar",64,0);this.Initialize()})