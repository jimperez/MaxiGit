/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:2:22.30
*/
gx.evt.autoSkip=!1;gx.define("ordenpagotransferenciageneral",!0,function(n){this.ServerClass="ordenpagotransferenciageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Ordpgotransorigencbunumero=function(){return this.validCliEvt("Valid_Ordpgotransorigencbunumero",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOTRANSORIGENCBUNUMERO");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgotransdestinocbunumero=function(){return this.validCliEvt("Valid_Ordpgotransdestinocbunumero",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOTRANSDESTINOCBUNUMERO");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgoid=function(){return this.validCliEvt("Valid_Ordpgoid",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOID");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgotransorigencbubancoid=function(){return this.validCliEvt("Valid_Ordpgotransorigencbubancoid",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOTRANSORIGENCBUBANCOID");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgotransorigencbubancosucursalid=function(){return this.validCliEvt("Valid_Ordpgotransorigencbubancosucursalid",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOTRANSORIGENCBUBANCOSUCURSALID");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgotransorigencbuplanctaid=function(){return this.validCliEvt("Valid_Ordpgotransorigencbuplanctaid",0,function(){try{var n=gx.util.balloon.getNew("ORDPGOTRANSORIGENCBUPLANCTAID");this.AnyError=0;this.refreshOutputs([{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13uf2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14uf2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];this.GXLastCtrlId=50;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:22,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgotransorigencbunumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUNUMERO",gxz:"Z322OrdPgoTransOrigenCBUNumero",gxold:"O322OrdPgoTransOrigenCBUNumero",gxvar:"A322OrdPgoTransOrigenCBUNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A322OrdPgoTransOrigenCBUNumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z322OrdPgoTransOrigenCBUNumero=n)},v2c:function(){gx.fn.setComboBoxValue("ORDPGOTRANSORIGENCBUNUMERO",gx.O.A322OrdPgoTransOrigenCBUNumero);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A322OrdPgoTransOrigenCBUNumero=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSORIGENCBUNUMERO")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"char",len:22,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgotransdestinocbunumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSDESTINOCBUNUMERO",gxz:"Z2739OrdPgoTransDestinoCBUNumero",gxold:"O2739OrdPgoTransDestinoCBUNumero",gxvar:"A2739OrdPgoTransDestinoCBUNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A2739OrdPgoTransDestinoCBUNumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z2739OrdPgoTransDestinoCBUNumero=n)},v2c:function(){gx.fn.setComboBoxValue("ORDPGOTRANSDESTINOCBUNUMERO",gx.O.A2739OrdPgoTransDestinoCBUNumero);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2739OrdPgoTransDestinoCBUNumero=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSDESTINOCBUNUMERO")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOID",gx.O.A84OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSNRO",gxz:"Z3212OrdPgoTransNro",gxold:"O3212OrdPgoTransNro",gxvar:"A3212OrdPgoTransNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3212OrdPgoTransNro=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3212OrdPgoTransNro=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSNRO",gx.O.A3212OrdPgoTransNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3212OrdPgoTransNro=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOTRANSNRO",".")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSFECHA",gxz:"Z3211OrdPgoTransFecha",gxold:"O3211OrdPgoTransFecha",gxvar:"A3211OrdPgoTransFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3211OrdPgoTransFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3211OrdPgoTransFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSFECHA",gx.O.A3211OrdPgoTransFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3211OrdPgoTransFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ORDPGOTRANSFECHA")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSIMPORTE",gxz:"Z2740OrdPgoTransImporte",gxold:"O2740OrdPgoTransImporte",gxvar:"A2740OrdPgoTransImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2740OrdPgoTransImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2740OrdPgoTransImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ORDPGOTRANSIMPORTE",gx.O.A2740OrdPgoTransImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2740OrdPgoTransImporte=this.val())},val:function(){return gx.fn.getDecimalValue("ORDPGOTRANSIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",".")},nac:gx.falseFn};t[41]={id:41,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUALIAS",gxz:"Z2741OrdPgoTransOrigenCBUAlias",gxold:"O2741OrdPgoTransOrigenCBUAlias",gxvar:"A2741OrdPgoTransOrigenCBUAlias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2741OrdPgoTransOrigenCBUAlias=n)},v2z:function(n){n!==undefined&&(gx.O.Z2741OrdPgoTransOrigenCBUAlias=n)},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUALIAS",gx.O.A2741OrdPgoTransOrigenCBUAlias,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2741OrdPgoTransOrigenCBUAlias=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSORIGENCBUALIAS")},nac:gx.falseFn};t[42]={id:42,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUCUENTANUMERO",gxz:"Z2746OrdPgoTransOrigenCBUCuentaNumero",gxold:"O2746OrdPgoTransOrigenCBUCuentaNumero",gxvar:"A2746OrdPgoTransOrigenCBUCuentaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2746OrdPgoTransOrigenCBUCuentaNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2746OrdPgoTransOrigenCBUCuentaNumero=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUCUENTANUMERO",gx.O.A2746OrdPgoTransOrigenCBUCuentaNumero,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2746OrdPgoTransOrigenCBUCuentaNumero=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOTRANSORIGENCBUCUENTANUMERO",".")},nac:gx.falseFn};t[43]={id:43,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgotransorigencbubancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUBANCOID",gxz:"Z2742OrdPgoTransOrigenCBUBancoId",gxold:"O2742OrdPgoTransOrigenCBUBancoId",gxvar:"A2742OrdPgoTransOrigenCBUBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2742OrdPgoTransOrigenCBUBancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2742OrdPgoTransOrigenCBUBancoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUBANCOID",gx.O.A2742OrdPgoTransOrigenCBUBancoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2742OrdPgoTransOrigenCBUBancoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOTRANSORIGENCBUBANCOID",".")},nac:gx.falseFn};t[44]={id:44,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUBANCONOMBRE",gxz:"Z2743OrdPgoTransOrigenCBUBancoNombre",gxold:"O2743OrdPgoTransOrigenCBUBancoNombre",gxvar:"A2743OrdPgoTransOrigenCBUBancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2743OrdPgoTransOrigenCBUBancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2743OrdPgoTransOrigenCBUBancoNombre=n)},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUBANCONOMBRE",gx.O.A2743OrdPgoTransOrigenCBUBancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2743OrdPgoTransOrigenCBUBancoNombre=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSORIGENCBUBANCONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgotransorigencbubancosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUBANCOSUCURSALID",gxz:"Z2744OrdPgoTransOrigenCBUBancoSucursalId",gxold:"O2744OrdPgoTransOrigenCBUBancoSucursalId",gxvar:"A2744OrdPgoTransOrigenCBUBancoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2744OrdPgoTransOrigenCBUBancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2744OrdPgoTransOrigenCBUBancoSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUBANCOSUCURSALID",gx.O.A2744OrdPgoTransOrigenCBUBancoSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2744OrdPgoTransOrigenCBUBancoSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOTRANSORIGENCBUBANCOSUCURSALID",".")},nac:gx.falseFn};t[46]={id:46,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUBANCOSUCURSALNOMBRE",gxz:"Z2745OrdPgoTransOrigenCBUBancoSucursalNombre",gxold:"O2745OrdPgoTransOrigenCBUBancoSucursalNombre",gxvar:"A2745OrdPgoTransOrigenCBUBancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2745OrdPgoTransOrigenCBUBancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2745OrdPgoTransOrigenCBUBancoSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUBANCOSUCURSALNOMBRE",gx.O.A2745OrdPgoTransOrigenCBUBancoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2745OrdPgoTransOrigenCBUBancoSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSORIGENCBUBANCOSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});t[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANS094",gxz:"Z2731OrdPgoTrans094",gxold:"O2731OrdPgoTrans094",gxvar:"A2731OrdPgoTrans094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2731OrdPgoTrans094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2731OrdPgoTrans094=n)},v2c:function(){gx.fn.setControlValue("ORDPGOTRANS094",gx.O.A2731OrdPgoTrans094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2731OrdPgoTrans094=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANS094")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});t[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANS095",gxz:"Z2732OrdPgoTrans095",gxold:"O2732OrdPgoTrans095",gxvar:"A2732OrdPgoTrans095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2732OrdPgoTrans095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2732OrdPgoTrans095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANS095",gx.O.A2732OrdPgoTrans095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2732OrdPgoTrans095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ORDPGOTRANS095")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});t[49]={id:49,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordpgotransorigencbuplanctaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUPLANCTAID",gxz:"Z3253OrdPgoTransOrigenCBUPlanCtaId",gxold:"O3253OrdPgoTransOrigenCBUPlanCtaId",gxvar:"A3253OrdPgoTransOrigenCBUPlanCtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3253OrdPgoTransOrigenCBUPlanCtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3253OrdPgoTransOrigenCBUPlanCtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUPLANCTAID",gx.O.A3253OrdPgoTransOrigenCBUPlanCtaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3253OrdPgoTransOrigenCBUPlanCtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOTRANSORIGENCBUPLANCTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOTRANSORIGENCBUPLANCTANOM",gxz:"Z3254OrdPgoTransOrigenCBUPlanCtaNom",gxold:"O3254OrdPgoTransOrigenCBUPlanCtaNom",gxvar:"A3254OrdPgoTransOrigenCBUPlanCtaNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3254OrdPgoTransOrigenCBUPlanCtaNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z3254OrdPgoTransOrigenCBUPlanCtaNom=n)},v2c:function(){gx.fn.setControlValue("ORDPGOTRANSORIGENCBUPLANCTANOM",gx.O.A3254OrdPgoTransOrigenCBUPlanCtaNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3254OrdPgoTransOrigenCBUPlanCtaNom=this.val())},val:function(){return gx.fn.getControlValue("ORDPGOTRANSORIGENCBUPLANCTANOM")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});this.A322OrdPgoTransOrigenCBUNumero="";this.Z322OrdPgoTransOrigenCBUNumero="";this.O322OrdPgoTransOrigenCBUNumero="";this.A2739OrdPgoTransDestinoCBUNumero="";this.Z2739OrdPgoTransDestinoCBUNumero="";this.O2739OrdPgoTransDestinoCBUNumero="";this.A84OrdPgoId=0;this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.A3212OrdPgoTransNro=0;this.Z3212OrdPgoTransNro=0;this.O3212OrdPgoTransNro=0;this.A3211OrdPgoTransFecha=gx.date.nullDate();this.Z3211OrdPgoTransFecha=gx.date.nullDate();this.O3211OrdPgoTransFecha=gx.date.nullDate();this.A2740OrdPgoTransImporte=0;this.Z2740OrdPgoTransImporte=0;this.O2740OrdPgoTransImporte=0;this.A28ProveedorId=0;this.Z28ProveedorId=0;this.O28ProveedorId=0;this.A2741OrdPgoTransOrigenCBUAlias="";this.Z2741OrdPgoTransOrigenCBUAlias="";this.O2741OrdPgoTransOrigenCBUAlias="";this.A2746OrdPgoTransOrigenCBUCuentaNumero=0;this.Z2746OrdPgoTransOrigenCBUCuentaNumero=0;this.O2746OrdPgoTransOrigenCBUCuentaNumero=0;this.A2742OrdPgoTransOrigenCBUBancoId=0;this.Z2742OrdPgoTransOrigenCBUBancoId=0;this.O2742OrdPgoTransOrigenCBUBancoId=0;this.A2743OrdPgoTransOrigenCBUBancoNombre="";this.Z2743OrdPgoTransOrigenCBUBancoNombre="";this.O2743OrdPgoTransOrigenCBUBancoNombre="";this.A2744OrdPgoTransOrigenCBUBancoSucursalId=0;this.Z2744OrdPgoTransOrigenCBUBancoSucursalId=0;this.O2744OrdPgoTransOrigenCBUBancoSucursalId=0;this.A2745OrdPgoTransOrigenCBUBancoSucursalNombre="";this.Z2745OrdPgoTransOrigenCBUBancoSucursalNombre="";this.O2745OrdPgoTransOrigenCBUBancoSucursalNombre="";this.A2731OrdPgoTrans094="";this.Z2731OrdPgoTrans094="";this.O2731OrdPgoTrans094="";this.A2732OrdPgoTrans095=gx.date.nullDate();this.Z2732OrdPgoTrans095=gx.date.nullDate();this.O2732OrdPgoTrans095=gx.date.nullDate();this.A3253OrdPgoTransOrigenCBUPlanCtaId=0;this.Z3253OrdPgoTransOrigenCBUPlanCtaId=0;this.O3253OrdPgoTransOrigenCBUPlanCtaId=0;this.A3254OrdPgoTransOrigenCBUPlanCtaNom="";this.Z3254OrdPgoTransOrigenCBUPlanCtaNom="";this.O3254OrdPgoTransOrigenCBUPlanCtaNom="";this.A322OrdPgoTransOrigenCBUNumero="";this.A2739OrdPgoTransDestinoCBUNumero="";this.A84OrdPgoId=0;this.A3212OrdPgoTransNro=0;this.A3211OrdPgoTransFecha=gx.date.nullDate();this.A2740OrdPgoTransImporte=0;this.A28ProveedorId=0;this.A2741OrdPgoTransOrigenCBUAlias="";this.A2746OrdPgoTransOrigenCBUCuentaNumero=0;this.A2742OrdPgoTransOrigenCBUBancoId=0;this.A2743OrdPgoTransOrigenCBUBancoNombre="";this.A2744OrdPgoTransOrigenCBUBancoSucursalId=0;this.A2745OrdPgoTransOrigenCBUBancoSucursalNombre="";this.A2731OrdPgoTrans094="";this.A2732OrdPgoTrans095=gx.date.nullDate();this.A3253OrdPgoTransOrigenCBUPlanCtaId=0;this.A3254OrdPgoTransOrigenCBUPlanCtaNom="";this.Events={e13uf2_client:["ENTER",!0],e14uf2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.LOAD=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:"PROVEEDORID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUALIAS","Visible")',ctrl:"ORDPGOTRANSORIGENCBUALIAS",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUCUENTANUMERO","Visible")',ctrl:"ORDPGOTRANSORIGENCBUCUENTANUMERO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUBANCOID","Visible")',ctrl:"ORDPGOTRANSORIGENCBUBANCOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUBANCONOMBRE","Visible")',ctrl:"ORDPGOTRANSORIGENCBUBANCONOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUBANCOSUCURSALID","Visible")',ctrl:"ORDPGOTRANSORIGENCBUBANCOSUCURSALID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUBANCOSUCURSALNOMBRE","Visible")',ctrl:"ORDPGOTRANSORIGENCBUBANCOSUCURSALNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANS094","Visible")',ctrl:"ORDPGOTRANS094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANS095","Visible")',ctrl:"ORDPGOTRANS095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUPLANCTAID","Visible")',ctrl:"ORDPGOTRANSORIGENCBUPLANCTAID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ORDPGOTRANSORIGENCBUPLANCTANOM","Visible")',ctrl:"ORDPGOTRANSORIGENCBUPLANCTANOM",prop:"Visible"},{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOTRANSORIGENCBUNUMERO=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOTRANSDESTINOCBUNUMERO=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOID=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOTRANSORIGENCBUBANCOID=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOTRANSORIGENCBUBANCOSUCURSALID=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.EvtParms.VALID_ORDPGOTRANSORIGENCBUPLANCTAID=[[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}],[{ctrl:"ORDPGOTRANSORIGENCBUNUMERO"},{av:"A322OrdPgoTransOrigenCBUNumero",fld:"ORDPGOTRANSORIGENCBUNUMERO",pic:""},{ctrl:"ORDPGOTRANSDESTINOCBUNUMERO"},{av:"A2739OrdPgoTransDestinoCBUNumero",fld:"ORDPGOTRANSDESTINOCBUNUMERO",pic:""}]];this.Initialize()})