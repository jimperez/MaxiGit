/*!   GeneXus C# 16_0_5-135614 on 10/21/2019 11:43:34.99
*/
gx.evt.autoSkip=!1;gx.define("facturavtadetallesucgeneral",!0,function(n){this.ServerClass="facturavtadetallesucgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Facvtaid=function(){return this.validCliEvt("Valid_Facvtaid",0,function(){try{var n=gx.util.balloon.getNew("FACVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucursalid=function(){return this.validCliEvt("Valid_Facvtadetsucursalid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucdepositoid=function(){return this.validCliEvt("Valid_Facvtadetsucdepositoid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCDEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetid=function(){return this.validCliEvt("Valid_Facvtadetid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucitem=function(){return this.validCliEvt("Valid_Facvtadetsucitem",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCITEM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artid=function(){return this.validCliEvt("Valid_Artid",0,function(){try{var n=gx.util.balloon.getNew("ARTID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtaletra=function(){return this.validCliEvt("Valid_Facvtaletra",0,function(){try{var n=gx.util.balloon.getNew("FACVTALETRA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtapuntoventa=function(){return this.validCliEvt("Valid_Facvtapuntoventa",0,function(){try{var n=gx.util.balloon.getNew("FACVTAPUNTOVENTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtanumero=function(){return this.validCliEvt("Valid_Facvtanumero",0,function(){try{var n=gx.util.balloon.getNew("FACVTANUMERO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetentidadid=function(){return this.validCliEvt("Valid_Facvtadetentidadid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucartstockid=function(){return this.validCliEvt("Valid_Facvtadetsucartstockid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCARTSTOCKID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11jf1_client=function(){return this.clearMessages(),this.call("facturavtadetallesuc.aspx",["UPD",this.A218FacVtaId,this.A222FacVtaDetId,this.A227FacVtaDetEntidadId,this.A228FacVtaDetSucursalId,this.A229FacVtaDetSucDepositoId,this.A230FacVtaDetSucItem]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12jf1_client=function(){return this.clearMessages(),this.call("facturavtadetallesuc.aspx",["DLT",this.A218FacVtaId,this.A222FacVtaDetId,this.A227FacVtaDetEntidadId,this.A228FacVtaDetSucursalId,this.A229FacVtaDetSucDepositoId,this.A230FacVtaDetSucItem]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15jf2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16jf2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87];this.GXLastCtrlId=87;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"char",len:11,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACOMPROBANTE",gxz:"Z2022FacVtaComprobante",gxold:"O2022FacVtaComprobante",gxvar:"A2022FacVtaComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2022FacVtaComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2022FacVtaComprobante=n)},v2c:function(){gx.fn.setControlValue("FACVTACOMPROBANTE",gx.O.A2022FacVtaComprobante,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2022FacVtaComprobante=this.val())},val:function(){return gx.fn.getControlValue("FACVTACOMPROBANTE")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCURSALID",gxz:"Z228FacVtaDetSucursalId",gxold:"O228FacVtaDetSucursalId",gxvar:"A228FacVtaDetSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z228FacVtaDetSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCURSALID",gx.O.A228FacVtaDetSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCURSALID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCURSALNOMBRE",gxz:"Z1655FacVtaDetSucursalNombre",gxold:"O1655FacVtaDetSucursalNombre",gxvar:"A1655FacVtaDetSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1655FacVtaDetSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1655FacVtaDetSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("FACVTADETSUCURSALNOMBRE",gx.O.A1655FacVtaDetSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1655FacVtaDetSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("FACVTADETSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucdepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCDEPOSITOID",gxz:"Z229FacVtaDetSucDepositoId",gxold:"O229FacVtaDetSucDepositoId",gxvar:"A229FacVtaDetSucDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z229FacVtaDetSucDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCDEPOSITOID",gx.O.A229FacVtaDetSucDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCDEPOSITOID",".")},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCDEPOSITONOMBRE",gxz:"Z2597FacVtaDetSucDepositoNombre",gxold:"O2597FacVtaDetSucDepositoNombre",gxvar:"A2597FacVtaDetSucDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2597FacVtaDetSucDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2597FacVtaDetSucDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("FACVTADETSUCDEPOSITONOMBRE",gx.O.A2597FacVtaDetSucDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2597FacVtaDetSucDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("FACVTADETSUCDEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETID",gx.O.A222FacVtaDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETID",".")},nac:gx.falseFn};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucitem,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCITEM",gxz:"Z230FacVtaDetSucItem",gxold:"O230FacVtaDetSucItem",gxvar:"A230FacVtaDetSucItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z230FacVtaDetSucItem=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCITEM",gx.O.A230FacVtaDetSucItem,0)},c2v:function(){this.val()!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCITEM",".")},nac:gx.falseFn};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:gx.falseFn};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETDESCRIPCION",gxz:"Z1762FacVtaDetDescripcion",gxold:"O1762FacVtaDetDescripcion",gxvar:"A1762FacVtaDetDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1762FacVtaDetDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1762FacVtaDetDescripcion=n)},v2c:function(){gx.fn.setControlValue("FACVTADETDESCRIPCION",gx.O.A1762FacVtaDetDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1762FacVtaDetDescripcion=this.val())},val:function(){return gx.fn.getControlValue("FACVTADETDESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCCANTIDAD",gxz:"Z1835FacVtaDetSucCantidad",gxold:"O1835FacVtaDetSucCantidad",gxvar:"A1835FacVtaDetSucCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1835FacVtaDetSucCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1835FacVtaDetSucCantidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCCANTIDAD",gx.O.A1835FacVtaDetSucCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1835FacVtaDetSucCantidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCCANTIDAD",".")},nac:gx.falseFn};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"",grid:0};t[61]={id:61,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCCANTIDADSALDO",gxz:"Z2032FacVtaDetSucCantidadSaldo",gxold:"O2032FacVtaDetSucCantidadSaldo",gxvar:"A2032FacVtaDetSucCantidadSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2032FacVtaDetSucCantidadSaldo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2032FacVtaDetSucCantidadSaldo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCCANTIDADSALDO",gx.O.A2032FacVtaDetSucCantidadSaldo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2032FacVtaDetSucCantidadSaldo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCCANTIDADSALDO",".")},nac:gx.falseFn};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSERIAL",gxz:"Z2596FacVtaDetSerial",gxold:"O2596FacVtaDetSerial",gxvar:"A2596FacVtaDetSerial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2596FacVtaDetSerial=n)},v2z:function(n){n!==undefined&&(gx.O.Z2596FacVtaDetSerial=n)},v2c:function(){gx.fn.setControlValue("FACVTADETSERIAL",gx.O.A2596FacVtaDetSerial,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2596FacVtaDetSerial=this.val())},val:function(){return gx.fn.getControlValue("FACVTADETSERIAL")},nac:gx.falseFn};t[67]={id:67,fld:"",grid:0};t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"BTNUPDATE",grid:0,evt:"e11jf1_client"};t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"BTNDELETE",grid:0,evt:"e12jf1_client"};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[77]={id:77,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtaletra,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTALETRA",gxz:"Z1586FacVtaLetra",gxold:"O1586FacVtaLetra",gxvar:"A1586FacVtaLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1586FacVtaLetra=n)},v2z:function(n){n!==undefined&&(gx.O.Z1586FacVtaLetra=n)},v2c:function(){gx.fn.setComboBoxValue("FACVTALETRA",gx.O.A1586FacVtaLetra);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1586FacVtaLetra=this.val())},val:function(){return gx.fn.getControlValue("FACVTALETRA")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});t[78]={id:78,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtapuntoventa,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAPUNTOVENTA",gxz:"Z1587FacVtaPuntoVenta",gxold:"O1587FacVtaPuntoVenta",gxvar:"A1587FacVtaPuntoVenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1587FacVtaPuntoVenta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1587FacVtaPuntoVenta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAPUNTOVENTA",gx.O.A1587FacVtaPuntoVenta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1587FacVtaPuntoVenta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAPUNTOVENTA",".")},nac:gx.falseFn};this.declareDomainHdlr(78,function(){});t[79]={id:79,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtanumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTANUMERO",gxz:"Z1588FacVtaNumero",gxold:"O1588FacVtaNumero",gxvar:"A1588FacVtaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1588FacVtaNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1588FacVtaNumero=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTANUMERO",gx.O.A1588FacVtaNumero,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1588FacVtaNumero=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTANUMERO",".")},nac:gx.falseFn};t[80]={id:80,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:gx.falseFn};t[81]={id:81,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACLINOM",gxz:"Z1593FacVtaCliNom",gxold:"O1593FacVtaCliNom",gxvar:"A1593FacVtaCliNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1593FacVtaCliNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1593FacVtaCliNom=n)},v2c:function(){gx.fn.setControlValue("FACVTACLINOM",gx.O.A1593FacVtaCliNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1593FacVtaCliNom=this.val())},val:function(){return gx.fn.getControlValue("FACVTACLINOM")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});t[82]={id:82,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETENTIDADID",gxz:"Z227FacVtaDetEntidadId",gxold:"O227FacVtaDetEntidadId",gxvar:"A227FacVtaDetEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z227FacVtaDetEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETENTIDADID",gx.O.A227FacVtaDetEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETENTIDADID",".")},nac:gx.falseFn};t[83]={id:83,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETENTIDADNOMBRE",gxz:"Z1654FacVtaDetEntidadNombre",gxold:"O1654FacVtaDetEntidadNombre",gxvar:"A1654FacVtaDetEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1654FacVtaDetEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1654FacVtaDetEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("FACVTADETENTIDADNOMBRE",gx.O.A1654FacVtaDetEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1654FacVtaDetEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("FACVTADETENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(83,function(){});t[84]={id:84,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACTURAVTADETALLESUCESTADO",gxz:"Z2033FacturaVtaDetalleSucEstado",gxold:"O2033FacturaVtaDetalleSucEstado",gxvar:"A2033FacturaVtaDetalleSucEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2033FacturaVtaDetalleSucEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2033FacturaVtaDetalleSucEstado=n)},v2c:function(){gx.fn.setComboBoxValue("FACTURAVTADETALLESUCESTADO",gx.O.A2033FacturaVtaDetalleSucEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2033FacturaVtaDetalleSucEstado=this.val())},val:function(){return gx.fn.getControlValue("FACTURAVTADETALLESUCESTADO")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});t[85]={id:85,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"99999999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCNCID",gxz:"Z2377FacVtaDetSucNcId",gxold:"O2377FacVtaDetSucNcId",gxvar:"A2377FacVtaDetSucNcId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2377FacVtaDetSucNcId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2377FacVtaDetSucNcId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCNCID",gx.O.A2377FacVtaDetSucNcId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2377FacVtaDetSucNcId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCNCID",".")},nac:gx.falseFn};t[86]={id:86,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCNCDETID",gxz:"Z2378FacVtaDetSucNcDetId",gxold:"O2378FacVtaDetSucNcDetId",gxvar:"A2378FacVtaDetSucNcDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2378FacVtaDetSucNcDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2378FacVtaDetSucNcDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCNCDETID",gx.O.A2378FacVtaDetSucNcDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2378FacVtaDetSucNcDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCNCDETID",".")},nac:gx.falseFn};t[87]={id:87,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucartstockid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCARTSTOCKID",gxz:"Z2594FacVtaDetSucArtStockId",gxold:"O2594FacVtaDetSucArtStockId",gxvar:"A2594FacVtaDetSucArtStockId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2594FacVtaDetSucArtStockId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2594FacVtaDetSucArtStockId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCARTSTOCKID",gx.O.A2594FacVtaDetSucArtStockId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2594FacVtaDetSucArtStockId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCARTSTOCKID",".")},nac:gx.falseFn};this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A2022FacVtaComprobante="";this.Z2022FacVtaComprobante="";this.O2022FacVtaComprobante="";this.A228FacVtaDetSucursalId=0;this.Z228FacVtaDetSucursalId=0;this.O228FacVtaDetSucursalId=0;this.A1655FacVtaDetSucursalNombre="";this.Z1655FacVtaDetSucursalNombre="";this.O1655FacVtaDetSucursalNombre="";this.A229FacVtaDetSucDepositoId=0;this.Z229FacVtaDetSucDepositoId=0;this.O229FacVtaDetSucDepositoId=0;this.A2597FacVtaDetSucDepositoNombre="";this.Z2597FacVtaDetSucDepositoNombre="";this.O2597FacVtaDetSucDepositoNombre="";this.A222FacVtaDetId=0;this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.A230FacVtaDetSucItem=0;this.Z230FacVtaDetSucItem=0;this.O230FacVtaDetSucItem=0;this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A1762FacVtaDetDescripcion="";this.Z1762FacVtaDetDescripcion="";this.O1762FacVtaDetDescripcion="";this.A1835FacVtaDetSucCantidad=0;this.Z1835FacVtaDetSucCantidad=0;this.O1835FacVtaDetSucCantidad=0;this.A2032FacVtaDetSucCantidadSaldo=0;this.Z2032FacVtaDetSucCantidadSaldo=0;this.O2032FacVtaDetSucCantidadSaldo=0;this.A2596FacVtaDetSerial="";this.Z2596FacVtaDetSerial="";this.O2596FacVtaDetSerial="";this.A1586FacVtaLetra="";this.Z1586FacVtaLetra="";this.O1586FacVtaLetra="";this.A1587FacVtaPuntoVenta=0;this.Z1587FacVtaPuntoVenta=0;this.O1587FacVtaPuntoVenta=0;this.A1588FacVtaNumero=0;this.Z1588FacVtaNumero=0;this.O1588FacVtaNumero=0;this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1593FacVtaCliNom="";this.Z1593FacVtaCliNom="";this.O1593FacVtaCliNom="";this.A227FacVtaDetEntidadId=0;this.Z227FacVtaDetEntidadId=0;this.O227FacVtaDetEntidadId=0;this.A1654FacVtaDetEntidadNombre="";this.Z1654FacVtaDetEntidadNombre="";this.O1654FacVtaDetEntidadNombre="";this.A2033FacturaVtaDetalleSucEstado="";this.Z2033FacturaVtaDetalleSucEstado="";this.O2033FacturaVtaDetalleSucEstado="";this.A2377FacVtaDetSucNcId=0;this.Z2377FacVtaDetSucNcId=0;this.O2377FacVtaDetSucNcId=0;this.A2378FacVtaDetSucNcDetId=0;this.Z2378FacVtaDetSucNcDetId=0;this.O2378FacVtaDetSucNcDetId=0;this.A2594FacVtaDetSucArtStockId=0;this.Z2594FacVtaDetSucArtStockId=0;this.O2594FacVtaDetSucArtStockId=0;this.A218FacVtaId=0;this.A2022FacVtaComprobante="";this.A228FacVtaDetSucursalId=0;this.A1655FacVtaDetSucursalNombre="";this.A229FacVtaDetSucDepositoId=0;this.A2597FacVtaDetSucDepositoNombre="";this.A222FacVtaDetId=0;this.A230FacVtaDetSucItem=0;this.A8ArtId=0;this.A1762FacVtaDetDescripcion="";this.A1835FacVtaDetSucCantidad=0;this.A2032FacVtaDetSucCantidadSaldo=0;this.A2596FacVtaDetSerial="";this.A1586FacVtaLetra="";this.A1587FacVtaPuntoVenta=0;this.A1588FacVtaNumero=0;this.A53ClienteId=0;this.A1593FacVtaCliNom="";this.A227FacVtaDetEntidadId=0;this.A1654FacVtaDetEntidadNombre="";this.A2033FacturaVtaDetalleSucEstado="";this.A2377FacVtaDetSucNcId=0;this.A2378FacVtaDetSucNcDetId=0;this.A2594FacVtaDetSucArtStockId=0;this.Events={e15jf2_client:["ENTER",!0],e16jf2_client:["CANCEL",!0],e11jf1_client:["'DOUPDATE'",!1],e12jf1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV23Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"FACVTALETRA"},{av:'gx.fn.getCtrlProperty("FACVTAPUNTOVENTA","Visible")',ctrl:"FACVTAPUNTOVENTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTANUMERO","Visible")',ctrl:"FACVTANUMERO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CLIENTEID","Visible")',ctrl:"CLIENTEID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTACLINOM","Visible")',ctrl:"FACVTACLINOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTADETENTIDADID","Visible")',ctrl:"FACVTADETENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTADETENTIDADNOMBRE","Visible")',ctrl:"FACVTADETENTIDADNOMBRE",prop:"Visible"},{ctrl:"FACTURAVTADETALLESUCESTADO"},{av:'gx.fn.getCtrlProperty("FACVTADETSUCNCID","Visible")',ctrl:"FACVTADETSUCNCID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTADETSUCNCDETID","Visible")',ctrl:"FACVTADETSUCNCDETID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FACVTADETSUCARTSTOCKID","Visible")',ctrl:"FACVTADETSUCARTSTOCKID",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"}],[]];this.EvtParms.VALID_FACVTAID=[[],[]];this.EvtParms.VALID_FACVTADETSUCURSALID=[[],[]];this.EvtParms.VALID_FACVTADETSUCDEPOSITOID=[[],[]];this.EvtParms.VALID_FACVTADETID=[[],[]];this.EvtParms.VALID_FACVTADETSUCITEM=[[],[]];this.EvtParms.VALID_ARTID=[[],[]];this.EvtParms.VALID_FACVTALETRA=[[],[]];this.EvtParms.VALID_FACVTAPUNTOVENTA=[[],[]];this.EvtParms.VALID_FACVTANUMERO=[[],[]];this.EvtParms.VALID_FACVTADETENTIDADID=[[],[]];this.EvtParms.VALID_FACVTADETSUCARTSTOCKID=[[],[]];this.Initialize()})