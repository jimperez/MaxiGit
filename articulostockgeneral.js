/*!   GeneXus C# 16_0_5-135614 on 10/27/2019 11:18:45.32
*/
gx.evt.autoSkip=!1;gx.define("articulostockgeneral",!0,function(n){this.ServerClass="articulostockgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Artid=function(){return this.validCliEvt("Valid_Artid",0,function(){try{var n=gx.util.balloon.getNew("ARTID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockid=function(){return this.validCliEvt("Valid_Artstockid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artentidadid=function(){return this.validCliEvt("Valid_Artentidadid",0,function(){try{var n=gx.util.balloon.getNew("ARTENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artsucid=function(){return this.validCliEvt("Valid_Artsucid",0,function(){try{var n=gx.util.balloon.getNew("ARTSUCID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artdepositoid=function(){return this.validCliEvt("Valid_Artdepositoid",0,function(){try{var n=gx.util.balloon.getNew("ARTDEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmptpoid=function(){return this.validCliEvt("Valid_Artstockingcmptpoid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPTPOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmptponom=function(){return this.validCliEvt("Valid_Artstockingcmptponom",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPTPONOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmpid=function(){return this.validCliEvt("Valid_Artstockingcmpid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmplinid=function(){return this.validCliEvt("Valid_Artstockingcmplinid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPLINID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmptpoid=function(){return this.validCliEvt("Valid_Artstockegrcmptpoid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPTPOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmptponom=function(){return this.validCliEvt("Valid_Artstockegrcmptponom",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPTPONOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmpid=function(){return this.validCliEvt("Valid_Artstockegrcmpid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmplinid=function(){return this.validCliEvt("Valid_Artstockegrcmplinid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPLINID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11l91_client=function(){return this.clearMessages(),this.call("articulostock.aspx",["UPD",this.A8ArtId,this.A21ArtStockId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12l91_client=function(){return this.clearMessages(),this.call("articulostock.aspx",["DLT",this.A8ArtId,this.A21ArtStockId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15l92_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16l92_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91];this.GXLastCtrlId=91;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKID",gxz:"Z21ArtStockId",gxold:"O21ArtStockId",gxvar:"A21ArtStockId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z21ArtStockId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKID",gx.O.A21ArtStockId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKID",".")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTENTIDADID",gxz:"Z22ArtEntidadId",gxold:"O22ArtEntidadId",gxvar:"A22ArtEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z22ArtEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTENTIDADID",gx.O.A22ArtEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTENTIDADID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTENTIDADNOMBRE",gxz:"Z977ArtEntidadNombre",gxold:"O977ArtEntidadNombre",gxvar:"A977ArtEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A977ArtEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z977ArtEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("ARTENTIDADNOMBRE",gx.O.A977ArtEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A977ArtEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("ARTENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artsucid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCID",gxz:"Z23ArtSucId",gxold:"O23ArtSucId",gxvar:"A23ArtSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z23ArtSucId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSUCID",gx.O.A23ArtSucId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSUCID",".")},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCNOM",gxz:"Z431ArtSucNom",gxold:"O431ArtSucNom",gxvar:"A431ArtSucNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A431ArtSucNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z431ArtSucNom=n)},v2c:function(){gx.fn.setControlValue("ARTSUCNOM",gx.O.A431ArtSucNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A431ArtSucNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSUCNOM")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artdepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITOID",gxz:"Z24ArtDepositoId",gxold:"O24ArtDepositoId",gxvar:"A24ArtDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z24ArtDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTDEPOSITOID",gx.O.A24ArtDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTDEPOSITOID",".")},nac:gx.falseFn};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITONOMBRE",gxz:"Z978ArtDepositoNombre",gxold:"O978ArtDepositoNombre",gxvar:"A978ArtDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A978ArtDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z978ArtDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("ARTDEPOSITONOMBRE",gx.O.A978ArtDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A978ArtDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("ARTDEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITOFACTURABLE",gxz:"Z2595ArtDepositoFacturable",gxold:"O2595ArtDepositoFacturable",gxvar:"A2595ArtDepositoFacturable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2595ArtDepositoFacturable=n)},v2z:function(n){n!==undefined&&(gx.O.Z2595ArtDepositoFacturable=n)},v2c:function(){gx.fn.setComboBoxValue("ARTDEPOSITOFACTURABLE",gx.O.A2595ArtDepositoFacturable)},c2v:function(){this.val()!==undefined&&(gx.O.A2595ArtDepositoFacturable=this.val())},val:function(){return gx.fn.getControlValue("ARTDEPOSITOFACTURABLE")},nac:gx.falseFn};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKUSADO",gxz:"Z404ArtStockUsado",gxold:"O404ArtStockUsado",gxvar:"A404ArtStockUsado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A404ArtStockUsado=n)},v2z:function(n){n!==undefined&&(gx.O.Z404ArtStockUsado=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKUSADO",gx.O.A404ArtStockUsado,0)},c2v:function(){this.val()!==undefined&&(gx.O.A404ArtStockUsado=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKUSADO")},nac:gx.falseFn};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,lvl:0,type:"char",len:50,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCOMPROBANTE",gxz:"Z2312ArtStockIngComprobante",gxold:"O2312ArtStockIngComprobante",gxvar:"A2312ArtStockIngComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2312ArtStockIngComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2312ArtStockIngComprobante=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCOMPROBANTE",gx.O.A2312ArtStockIngComprobante,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2312ArtStockIngComprobante=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKINGCOMPROBANTE")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[60]={id:60,lvl:0,type:"char",len:50,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCOMPROBANTE",gxz:"Z2311ArtStockEgrComprobante",gxold:"O2311ArtStockEgrComprobante",gxvar:"A2311ArtStockEgrComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2311ArtStockEgrComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2311ArtStockEgrComprobante=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCOMPROBANTE",gx.O.A2311ArtStockEgrComprobante,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2311ArtStockEgrComprobante=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKEGRCOMPROBANTE")},nac:gx.falseFn};this.declareDomainHdlr(60,function(){});t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"",grid:0};t[65]={id:65,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKSERIAL",gxz:"Z1020ArtStockSerial",gxold:"O1020ArtStockSerial",gxvar:"A1020ArtStockSerial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1020ArtStockSerial=n)},v2z:function(n){n!==undefined&&(gx.O.Z1020ArtStockSerial=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKSERIAL",gx.O.A1020ArtStockSerial,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1020ArtStockSerial=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKSERIAL")},nac:gx.falseFn};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,fld:"",grid:0};t[69]={id:69,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKMOVID",gxz:"Z2720ArtStockMovId",gxold:"O2720ArtStockMovId",gxvar:"A2720ArtStockMovId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2720ArtStockMovId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2720ArtStockMovId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKMOVID",gx.O.A2720ArtStockMovId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2720ArtStockMovId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKMOVID",".")},nac:gx.falseFn};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"BTNUPDATE",grid:0,evt:"e11l91_client"};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"BTNDELETE",grid:0,evt:"e12l91_client"};t[77]={id:77,fld:"",grid:0};t[78]={id:78,fld:"",grid:0};t[79]={id:79,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[80]={id:80,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmptpoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPTPOID",gxz:"Z25ArtStockIngCmpTpoId",gxold:"O25ArtStockIngCmpTpoId",gxvar:"A25ArtStockIngCmpTpoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A25ArtStockIngCmpTpoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z25ArtStockIngCmpTpoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPTPOID",gx.O.A25ArtStockIngCmpTpoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A25ArtStockIngCmpTpoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPTPOID",".")},nac:gx.falseFn};t[81]={id:81,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmptponom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPTPONOM",gxz:"Z1021ArtStockIngCmpTpoNom",gxold:"O1021ArtStockIngCmpTpoNom",gxvar:"A1021ArtStockIngCmpTpoNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1021ArtStockIngCmpTpoNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1021ArtStockIngCmpTpoNom=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPTPONOM",gx.O.A1021ArtStockIngCmpTpoNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1021ArtStockIngCmpTpoNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKINGCMPTPONOM")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});t[82]={id:82,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPID",gxz:"Z400ArtStockIngCmpId",gxold:"O400ArtStockIngCmpId",gxvar:"A400ArtStockIngCmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A400ArtStockIngCmpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z400ArtStockIngCmpId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPID",gx.O.A400ArtStockIngCmpId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A400ArtStockIngCmpId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPID",".")},nac:gx.falseFn};t[83]={id:83,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmplinid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPLINID",gxz:"Z401ArtStockIngCmpLinId",gxold:"O401ArtStockIngCmpLinId",gxvar:"A401ArtStockIngCmpLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A401ArtStockIngCmpLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z401ArtStockIngCmpLinId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPLINID",gx.O.A401ArtStockIngCmpLinId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A401ArtStockIngCmpLinId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPLINID",".")},nac:gx.falseFn};t[84]={id:84,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmptpoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPTPOID",gxz:"Z26ArtStockEgrCmpTpoId",gxold:"O26ArtStockEgrCmpTpoId",gxvar:"A26ArtStockEgrCmpTpoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A26ArtStockEgrCmpTpoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z26ArtStockEgrCmpTpoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPTPOID",gx.O.A26ArtStockEgrCmpTpoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A26ArtStockEgrCmpTpoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPTPOID",".")},nac:gx.falseFn};t[85]={id:85,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmptponom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPTPONOM",gxz:"Z1022ArtStockEgrCmpTpoNom",gxold:"O1022ArtStockEgrCmpTpoNom",gxvar:"A1022ArtStockEgrCmpTpoNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1022ArtStockEgrCmpTpoNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1022ArtStockEgrCmpTpoNom=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPTPONOM",gx.O.A1022ArtStockEgrCmpTpoNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1022ArtStockEgrCmpTpoNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKEGRCMPTPONOM")},nac:gx.falseFn};this.declareDomainHdlr(85,function(){});t[86]={id:86,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPID",gxz:"Z402ArtStockEgrCmpId",gxold:"O402ArtStockEgrCmpId",gxvar:"A402ArtStockEgrCmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A402ArtStockEgrCmpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z402ArtStockEgrCmpId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPID",gx.O.A402ArtStockEgrCmpId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A402ArtStockEgrCmpId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPID",".")},nac:gx.falseFn};t[87]={id:87,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmplinid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPLINID",gxz:"Z403ArtStockEgrCmpLinId",gxold:"O403ArtStockEgrCmpLinId",gxvar:"A403ArtStockEgrCmpLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A403ArtStockEgrCmpLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z403ArtStockEgrCmpLinId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPLINID",gx.O.A403ArtStockEgrCmpLinId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A403ArtStockEgrCmpLinId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPLINID",".")},nac:gx.falseFn};t[88]={id:88,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTTPO",gxz:"Z356ArtTpo",gxold:"O356ArtTpo",gxvar:"A356ArtTpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A356ArtTpo=n)},v2z:function(n){n!==undefined&&(gx.O.Z356ArtTpo=n)},v2c:function(){gx.fn.setComboBoxValue("ARTTPO",gx.O.A356ArtTpo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A356ArtTpo=this.val())},val:function(){return gx.fn.getControlValue("ARTTPO")},nac:gx.falseFn};this.declareDomainHdlr(88,function(){});t[89]={id:89,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKCOLOR",gxz:"Z2900ArtStockColor",gxold:"O2900ArtStockColor",gxvar:"A2900ArtStockColor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2900ArtStockColor=n)},v2z:function(n){n!==undefined&&(gx.O.Z2900ArtStockColor=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKCOLOR",gx.O.A2900ArtStockColor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2900ArtStockColor=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKCOLOR")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});t[90]={id:90,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKCHASIS",gxz:"Z2901ArtStockChasis",gxold:"O2901ArtStockChasis",gxvar:"A2901ArtStockChasis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2901ArtStockChasis=n)},v2z:function(n){n!==undefined&&(gx.O.Z2901ArtStockChasis=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKCHASIS",gx.O.A2901ArtStockChasis,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2901ArtStockChasis=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKCHASIS")},nac:gx.falseFn};this.declareDomainHdlr(90,function(){});t[91]={id:91,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKMOTOR",gxz:"Z2902ArtStockMotor",gxold:"O2902ArtStockMotor",gxvar:"A2902ArtStockMotor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2902ArtStockMotor=n)},v2z:function(n){n!==undefined&&(gx.O.Z2902ArtStockMotor=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKMOTOR",gx.O.A2902ArtStockMotor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2902ArtStockMotor=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKMOTOR")},nac:gx.falseFn};this.declareDomainHdlr(91,function(){});this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A21ArtStockId=0;this.Z21ArtStockId=0;this.O21ArtStockId=0;this.A22ArtEntidadId=0;this.Z22ArtEntidadId=0;this.O22ArtEntidadId=0;this.A977ArtEntidadNombre="";this.Z977ArtEntidadNombre="";this.O977ArtEntidadNombre="";this.A23ArtSucId=0;this.Z23ArtSucId=0;this.O23ArtSucId=0;this.A431ArtSucNom="";this.Z431ArtSucNom="";this.O431ArtSucNom="";this.A24ArtDepositoId=0;this.Z24ArtDepositoId=0;this.O24ArtDepositoId=0;this.A978ArtDepositoNombre="";this.Z978ArtDepositoNombre="";this.O978ArtDepositoNombre="";this.A2595ArtDepositoFacturable="";this.Z2595ArtDepositoFacturable="";this.O2595ArtDepositoFacturable="";this.A404ArtStockUsado="";this.Z404ArtStockUsado="";this.O404ArtStockUsado="";this.A2312ArtStockIngComprobante="";this.Z2312ArtStockIngComprobante="";this.O2312ArtStockIngComprobante="";this.A2311ArtStockEgrComprobante="";this.Z2311ArtStockEgrComprobante="";this.O2311ArtStockEgrComprobante="";this.A1020ArtStockSerial="";this.Z1020ArtStockSerial="";this.O1020ArtStockSerial="";this.A2720ArtStockMovId=0;this.Z2720ArtStockMovId=0;this.O2720ArtStockMovId=0;this.A25ArtStockIngCmpTpoId=0;this.Z25ArtStockIngCmpTpoId=0;this.O25ArtStockIngCmpTpoId=0;this.A1021ArtStockIngCmpTpoNom="";this.Z1021ArtStockIngCmpTpoNom="";this.O1021ArtStockIngCmpTpoNom="";this.A400ArtStockIngCmpId=0;this.Z400ArtStockIngCmpId=0;this.O400ArtStockIngCmpId=0;this.A401ArtStockIngCmpLinId=0;this.Z401ArtStockIngCmpLinId=0;this.O401ArtStockIngCmpLinId=0;this.A26ArtStockEgrCmpTpoId=0;this.Z26ArtStockEgrCmpTpoId=0;this.O26ArtStockEgrCmpTpoId=0;this.A1022ArtStockEgrCmpTpoNom="";this.Z1022ArtStockEgrCmpTpoNom="";this.O1022ArtStockEgrCmpTpoNom="";this.A402ArtStockEgrCmpId=0;this.Z402ArtStockEgrCmpId=0;this.O402ArtStockEgrCmpId=0;this.A403ArtStockEgrCmpLinId=0;this.Z403ArtStockEgrCmpLinId=0;this.O403ArtStockEgrCmpLinId=0;this.A356ArtTpo="";this.Z356ArtTpo="";this.O356ArtTpo="";this.A2900ArtStockColor="";this.Z2900ArtStockColor="";this.O2900ArtStockColor="";this.A2901ArtStockChasis="";this.Z2901ArtStockChasis="";this.O2901ArtStockChasis="";this.A2902ArtStockMotor="";this.Z2902ArtStockMotor="";this.O2902ArtStockMotor="";this.A8ArtId=0;this.A21ArtStockId=0;this.A22ArtEntidadId=0;this.A977ArtEntidadNombre="";this.A23ArtSucId=0;this.A431ArtSucNom="";this.A24ArtDepositoId=0;this.A978ArtDepositoNombre="";this.A2595ArtDepositoFacturable="";this.A404ArtStockUsado="";this.A2312ArtStockIngComprobante="";this.A2311ArtStockEgrComprobante="";this.A1020ArtStockSerial="";this.A2720ArtStockMovId=0;this.A25ArtStockIngCmpTpoId=0;this.A1021ArtStockIngCmpTpoNom="";this.A400ArtStockIngCmpId=0;this.A401ArtStockIngCmpLinId=0;this.A26ArtStockEgrCmpTpoId=0;this.A1022ArtStockEgrCmpTpoNom="";this.A402ArtStockEgrCmpId=0;this.A403ArtStockEgrCmpLinId=0;this.A356ArtTpo="";this.A2900ArtStockColor="";this.A2901ArtStockChasis="";this.A2902ArtStockMotor="";this.Events={e15l92_client:["ENTER",!0],e16l92_client:["CANCEL",!0],e11l91_client:["'DOUPDATE'",!1],e12l91_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV22Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPTPOID","Visible")',ctrl:"ARTSTOCKINGCMPTPOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPTPONOM","Visible")',ctrl:"ARTSTOCKINGCMPTPONOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPID","Visible")',ctrl:"ARTSTOCKINGCMPID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPLINID","Visible")',ctrl:"ARTSTOCKINGCMPLINID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPTPOID","Visible")',ctrl:"ARTSTOCKEGRCMPTPOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPTPONOM","Visible")',ctrl:"ARTSTOCKEGRCMPTPONOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPID","Visible")',ctrl:"ARTSTOCKEGRCMPID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPLINID","Visible")',ctrl:"ARTSTOCKEGRCMPLINID",prop:"Visible"},{ctrl:"ARTTPO"},{av:'gx.fn.getCtrlProperty("ARTSTOCKCOLOR","Visible")',ctrl:"ARTSTOCKCOLOR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKCHASIS","Visible")',ctrl:"ARTSTOCKCHASIS",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKMOTOR","Visible")',ctrl:"ARTSTOCKMOTOR",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_ARTID=[[],[]];this.EvtParms.VALID_ARTSTOCKID=[[],[]];this.EvtParms.VALID_ARTENTIDADID=[[],[]];this.EvtParms.VALID_ARTSUCID=[[],[]];this.EvtParms.VALID_ARTDEPOSITOID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPTPOID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPTPONOM=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPLINID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPTPOID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPTPONOM=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPLINID=[[],[]];this.Initialize()})