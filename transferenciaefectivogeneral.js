/*!   GeneXus C# 16_0_5-135614 on 10/3/2019 15:37:41.49
*/
gx.evt.autoSkip=!1;gx.define("transferenciaefectivogeneral",!0,function(n){this.ServerClass="transferenciaefectivogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Trfefeid=function(){return this.validCliEvt("Valid_Trfefeid",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEID");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajaid=function(){return this.validCliEvt("Valid_Trfefeorigencajaid",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJAID");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigenentidadid=function(){return this.validCliEvt("Valid_Trfefeorigenentidadid",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENENTIDADID");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigensucursalid=function(){return this.validCliEvt("Valid_Trfefeorigensucursalid",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENSUCURSALID");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajafisicaid=function(){return this.validCliEvt("Valid_Trfefeorigencajafisicaid",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJAFISICAID");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajaaperturafecha=function(){return this.validCliEvt("Valid_Trfefeorigencajaaperturafecha",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJAAPERTURAFECHA");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajaaperturahora=function(){return this.validCliEvt("Valid_Trfefeorigencajaaperturahora",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJAAPERTURAHORA");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajacierrefecha=function(){return this.validCliEvt("Valid_Trfefeorigencajacierrefecha",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJACIERREFECHA");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trfefeorigencajacierrehora=function(){return this.validCliEvt("Valid_Trfefeorigencajacierrehora",0,function(){try{var n=gx.util.balloon.getNew("TRFEFEORIGENCAJACIERREHORA");this.AnyError=0;this.refreshOutputs([{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13m72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14m72_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55];this.GXLastCtrlId=55;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEID",gxz:"Z323TrfEfeId",gxold:"O323TrfEfeId",gxvar:"A323TrfEfeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A323TrfEfeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z323TrfEfeId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFEFEID",gx.O.A323TrfEfeId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A323TrfEfeId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFEFEID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEFECHA",gxz:"Z2766TrfEfeFecha",gxold:"O2766TrfEfeFecha",gxvar:"A2766TrfEfeFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2766TrfEfeFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2766TrfEfeFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRFEFEFECHA",gx.O.A2766TrfEfeFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2766TrfEfeFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TRFEFEFECHA")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEIMPORTE",gxz:"Z2767TrfEfeImporte",gxold:"O2767TrfEfeImporte",gxvar:"A2767TrfEfeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2767TrfEfeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2767TrfEfeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("TRFEFEIMPORTE",gx.O.A2767TrfEfeImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2767TrfEfeImporte=this.val())},val:function(){return gx.fn.getDecimalValue("TRFEFEIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEMOTIVO",gxz:"Z2768TrfEfeMotivo",gxold:"O2768TrfEfeMotivo",gxvar:"A2768TrfEfeMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2768TrfEfeMotivo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2768TrfEfeMotivo=n)},v2c:function(){gx.fn.setControlValue("TRFEFEMOTIVO",gx.O.A2768TrfEfeMotivo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2768TrfEfeMotivo=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEMOTIVO")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAID",gxz:"Z331TrfEfeOrigenCajaId",gxold:"O331TrfEfeOrigenCajaId",gxvar:"A331TrfEfeOrigenCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A331TrfEfeOrigenCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z331TrfEfeOrigenCajaId=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("TRFEFEORIGENCAJAID",gx.O.A331TrfEfeOrigenCajaId)},c2v:function(){this.val()!==undefined&&(gx.O.A331TrfEfeOrigenCajaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFEFEORIGENCAJAID",".")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEESTADO",gxz:"Z2760TrfEfeEstado",gxold:"O2760TrfEfeEstado",gxvar:"A2760TrfEfeEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2760TrfEfeEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2760TrfEfeEstado=n)},v2c:function(){gx.fn.setComboBoxValue("TRFEFEESTADO",gx.O.A2760TrfEfeEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2760TrfEfeEstado=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEESTADO")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigenentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENENTIDADID",gxz:"Z328TrfEfeOrigenEntidadId",gxold:"O328TrfEfeOrigenEntidadId",gxvar:"A328TrfEfeOrigenEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A328TrfEfeOrigenEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z328TrfEfeOrigenEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENENTIDADID",gx.O.A328TrfEfeOrigenEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A328TrfEfeOrigenEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFEFEORIGENENTIDADID",".")},nac:gx.falseFn};t[41]={id:41,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENENTIDADNOMBRE",gxz:"Z2778TrfEfeOrigenEntidadNombre",gxold:"O2778TrfEfeOrigenEntidadNombre",gxvar:"A2778TrfEfeOrigenEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2778TrfEfeOrigenEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2778TrfEfeOrigenEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENENTIDADNOMBRE",gx.O.A2778TrfEfeOrigenEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2778TrfEfeOrigenEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});t[42]={id:42,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigensucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENSUCURSALID",gxz:"Z329TrfEfeOrigenSucursalId",gxold:"O329TrfEfeOrigenSucursalId",gxvar:"A329TrfEfeOrigenSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A329TrfEfeOrigenSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z329TrfEfeOrigenSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENSUCURSALID",gx.O.A329TrfEfeOrigenSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A329TrfEfeOrigenSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFEFEORIGENSUCURSALID",".")},nac:gx.falseFn};t[43]={id:43,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENSUCURSALNOMBRE",gxz:"Z2779TrfEfeOrigenSucursalNombre",gxold:"O2779TrfEfeOrigenSucursalNombre",gxvar:"A2779TrfEfeOrigenSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2779TrfEfeOrigenSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2779TrfEfeOrigenSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENSUCURSALNOMBRE",gx.O.A2779TrfEfeOrigenSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2779TrfEfeOrigenSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});t[44]={id:44,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajafisicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAFISICAID",gxz:"Z330TrfEfeOrigenCajaFisicaId",gxold:"O330TrfEfeOrigenCajaFisicaId",gxvar:"A330TrfEfeOrigenCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A330TrfEfeOrigenCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z330TrfEfeOrigenCajaFisicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJAFISICAID",gx.O.A330TrfEfeOrigenCajaFisicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A330TrfEfeOrigenCajaFisicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFEFEORIGENCAJAFISICAID",".")},nac:gx.falseFn};t[45]={id:45,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAFISICANOMBRE",gxz:"Z2775TrfEfeOrigenCajaFisicaNombre",gxold:"O2775TrfEfeOrigenCajaFisicaNombre",gxvar:"A2775TrfEfeOrigenCajaFisicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2775TrfEfeOrigenCajaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2775TrfEfeOrigenCajaFisicaNombre=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJAFISICANOMBRE",gx.O.A2775TrfEfeOrigenCajaFisicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2775TrfEfeOrigenCajaFisicaNombre=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJAFISICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});t[46]={id:46,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAFISICATIPO",gxz:"Z2776TrfEfeOrigenCajaFisicaTipo",gxold:"O2776TrfEfeOrigenCajaFisicaTipo",gxvar:"A2776TrfEfeOrigenCajaFisicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2776TrfEfeOrigenCajaFisicaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2776TrfEfeOrigenCajaFisicaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("TRFEFEORIGENCAJAFISICATIPO",gx.O.A2776TrfEfeOrigenCajaFisicaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2776TrfEfeOrigenCajaFisicaTipo=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJAFISICATIPO")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});t[47]={id:47,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJANOMBRE",gxz:"Z2777TrfEfeOrigenCajaNombre",gxold:"O2777TrfEfeOrigenCajaNombre",gxvar:"A2777TrfEfeOrigenCajaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2777TrfEfeOrigenCajaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2777TrfEfeOrigenCajaNombre=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJANOMBRE",gx.O.A2777TrfEfeOrigenCajaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2777TrfEfeOrigenCajaNombre=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});t[48]={id:48,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajaaperturafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAAPERTURAFECHA",gxz:"Z2770TrfEfeOrigenCajaAperturaFecha",gxold:"O2770TrfEfeOrigenCajaAperturaFecha",gxvar:"A2770TrfEfeOrigenCajaAperturaFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2770TrfEfeOrigenCajaAperturaFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2770TrfEfeOrigenCajaAperturaFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJAAPERTURAFECHA",gx.O.A2770TrfEfeOrigenCajaAperturaFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2770TrfEfeOrigenCajaAperturaFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJAAPERTURAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});t[49]={id:49,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajaaperturahora,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAAPERTURAHORA",gxz:"Z2771TrfEfeOrigenCajaAperturaHora",gxold:"O2771TrfEfeOrigenCajaAperturaHora",gxvar:"A2771TrfEfeOrigenCajaAperturaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2771TrfEfeOrigenCajaAperturaHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2771TrfEfeOrigenCajaAperturaHora=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJAAPERTURAHORA",gx.O.A2771TrfEfeOrigenCajaAperturaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2771TrfEfeOrigenCajaAperturaHora=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJAAPERTURAHORA")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJAAPERTURA",gxz:"Z2769TrfEfeOrigenCajaApertura",gxold:"O2769TrfEfeOrigenCajaApertura",gxvar:"A2769TrfEfeOrigenCajaApertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2769TrfEfeOrigenCajaApertura=n)},v2z:function(n){n!==undefined&&(gx.O.Z2769TrfEfeOrigenCajaApertura=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJAAPERTURA",gx.O.A2769TrfEfeOrigenCajaApertura,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2769TrfEfeOrigenCajaApertura=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJAAPERTURA")},nac:gx.falseFn};t[51]={id:51,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajacierrefecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJACIERREFECHA",gxz:"Z2773TrfEfeOrigenCajaCierreFecha",gxold:"O2773TrfEfeOrigenCajaCierreFecha",gxvar:"A2773TrfEfeOrigenCajaCierreFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2773TrfEfeOrigenCajaCierreFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2773TrfEfeOrigenCajaCierreFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJACIERREFECHA",gx.O.A2773TrfEfeOrigenCajaCierreFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2773TrfEfeOrigenCajaCierreFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJACIERREFECHA")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});t[52]={id:52,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trfefeorigencajacierrehora,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJACIERREHORA",gxz:"Z2774TrfEfeOrigenCajaCierreHora",gxold:"O2774TrfEfeOrigenCajaCierreHora",gxvar:"A2774TrfEfeOrigenCajaCierreHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2774TrfEfeOrigenCajaCierreHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2774TrfEfeOrigenCajaCierreHora=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJACIERREHORA",gx.O.A2774TrfEfeOrigenCajaCierreHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2774TrfEfeOrigenCajaCierreHora=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJACIERREHORA")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});t[53]={id:53,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFEORIGENCAJACIERRE",gxz:"Z2772TrfEfeOrigenCajaCierre",gxold:"O2772TrfEfeOrigenCajaCierre",gxvar:"A2772TrfEfeOrigenCajaCierre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2772TrfEfeOrigenCajaCierre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2772TrfEfeOrigenCajaCierre=n)},v2c:function(){gx.fn.setControlValue("TRFEFEORIGENCAJACIERRE",gx.O.A2772TrfEfeOrigenCajaCierre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2772TrfEfeOrigenCajaCierre=this.val())},val:function(){return gx.fn.getControlValue("TRFEFEORIGENCAJACIERRE")},nac:gx.falseFn};t[54]={id:54,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFE094",gxz:"Z2747TrfEfe094",gxold:"O2747TrfEfe094",gxvar:"A2747TrfEfe094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2747TrfEfe094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2747TrfEfe094=n)},v2c:function(){gx.fn.setControlValue("TRFEFE094",gx.O.A2747TrfEfe094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2747TrfEfe094=this.val())},val:function(){return gx.fn.getControlValue("TRFEFE094")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFEFE095",gxz:"Z2748TrfEfe095",gxold:"O2748TrfEfe095",gxvar:"A2748TrfEfe095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2748TrfEfe095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2748TrfEfe095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRFEFE095",gx.O.A2748TrfEfe095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2748TrfEfe095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TRFEFE095")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});this.A323TrfEfeId=0;this.Z323TrfEfeId=0;this.O323TrfEfeId=0;this.A2766TrfEfeFecha=gx.date.nullDate();this.Z2766TrfEfeFecha=gx.date.nullDate();this.O2766TrfEfeFecha=gx.date.nullDate();this.A2767TrfEfeImporte=0;this.Z2767TrfEfeImporte=0;this.O2767TrfEfeImporte=0;this.A2768TrfEfeMotivo="";this.Z2768TrfEfeMotivo="";this.O2768TrfEfeMotivo="";this.A331TrfEfeOrigenCajaId=0;this.Z331TrfEfeOrigenCajaId=0;this.O331TrfEfeOrigenCajaId=0;this.A2760TrfEfeEstado="";this.Z2760TrfEfeEstado="";this.O2760TrfEfeEstado="";this.A328TrfEfeOrigenEntidadId=0;this.Z328TrfEfeOrigenEntidadId=0;this.O328TrfEfeOrigenEntidadId=0;this.A2778TrfEfeOrigenEntidadNombre="";this.Z2778TrfEfeOrigenEntidadNombre="";this.O2778TrfEfeOrigenEntidadNombre="";this.A329TrfEfeOrigenSucursalId=0;this.Z329TrfEfeOrigenSucursalId=0;this.O329TrfEfeOrigenSucursalId=0;this.A2779TrfEfeOrigenSucursalNombre="";this.Z2779TrfEfeOrigenSucursalNombre="";this.O2779TrfEfeOrigenSucursalNombre="";this.A330TrfEfeOrigenCajaFisicaId=0;this.Z330TrfEfeOrigenCajaFisicaId=0;this.O330TrfEfeOrigenCajaFisicaId=0;this.A2775TrfEfeOrigenCajaFisicaNombre="";this.Z2775TrfEfeOrigenCajaFisicaNombre="";this.O2775TrfEfeOrigenCajaFisicaNombre="";this.A2776TrfEfeOrigenCajaFisicaTipo="";this.Z2776TrfEfeOrigenCajaFisicaTipo="";this.O2776TrfEfeOrigenCajaFisicaTipo="";this.A2777TrfEfeOrigenCajaNombre="";this.Z2777TrfEfeOrigenCajaNombre="";this.O2777TrfEfeOrigenCajaNombre="";this.A2770TrfEfeOrigenCajaAperturaFecha=gx.date.nullDate();this.Z2770TrfEfeOrigenCajaAperturaFecha=gx.date.nullDate();this.O2770TrfEfeOrigenCajaAperturaFecha=gx.date.nullDate();this.A2771TrfEfeOrigenCajaAperturaHora="";this.Z2771TrfEfeOrigenCajaAperturaHora="";this.O2771TrfEfeOrigenCajaAperturaHora="";this.A2769TrfEfeOrigenCajaApertura="";this.Z2769TrfEfeOrigenCajaApertura="";this.O2769TrfEfeOrigenCajaApertura="";this.A2773TrfEfeOrigenCajaCierreFecha=gx.date.nullDate();this.Z2773TrfEfeOrigenCajaCierreFecha=gx.date.nullDate();this.O2773TrfEfeOrigenCajaCierreFecha=gx.date.nullDate();this.A2774TrfEfeOrigenCajaCierreHora="";this.Z2774TrfEfeOrigenCajaCierreHora="";this.O2774TrfEfeOrigenCajaCierreHora="";this.A2772TrfEfeOrigenCajaCierre="";this.Z2772TrfEfeOrigenCajaCierre="";this.O2772TrfEfeOrigenCajaCierre="";this.A2747TrfEfe094="";this.Z2747TrfEfe094="";this.O2747TrfEfe094="";this.A2748TrfEfe095=gx.date.nullDate();this.Z2748TrfEfe095=gx.date.nullDate();this.O2748TrfEfe095=gx.date.nullDate();this.A323TrfEfeId=0;this.A2766TrfEfeFecha=gx.date.nullDate();this.A2767TrfEfeImporte=0;this.A2768TrfEfeMotivo="";this.A331TrfEfeOrigenCajaId=0;this.A2760TrfEfeEstado="";this.A328TrfEfeOrigenEntidadId=0;this.A2778TrfEfeOrigenEntidadNombre="";this.A329TrfEfeOrigenSucursalId=0;this.A2779TrfEfeOrigenSucursalNombre="";this.A330TrfEfeOrigenCajaFisicaId=0;this.A2775TrfEfeOrigenCajaFisicaNombre="";this.A2776TrfEfeOrigenCajaFisicaTipo="";this.A2777TrfEfeOrigenCajaNombre="";this.A2770TrfEfeOrigenCajaAperturaFecha=gx.date.nullDate();this.A2771TrfEfeOrigenCajaAperturaHora="";this.A2769TrfEfeOrigenCajaApertura="";this.A2773TrfEfeOrigenCajaCierreFecha=gx.date.nullDate();this.A2774TrfEfeOrigenCajaCierreHora="";this.A2772TrfEfeOrigenCajaCierre="";this.A2747TrfEfe094="";this.A2748TrfEfe095=gx.date.nullDate();this.Events={e13m72_client:["ENTER",!0],e14m72_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A323TrfEfeId",fld:"TRFEFEID",pic:"ZZZZZZZ9"},{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV17Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.LOAD=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("TRFEFEORIGENENTIDADID","Visible")',ctrl:"TRFEFEORIGENENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENENTIDADNOMBRE","Visible")',ctrl:"TRFEFEORIGENENTIDADNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENSUCURSALID","Visible")',ctrl:"TRFEFEORIGENSUCURSALID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENSUCURSALNOMBRE","Visible")',ctrl:"TRFEFEORIGENSUCURSALNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJAFISICAID","Visible")',ctrl:"TRFEFEORIGENCAJAFISICAID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJAFISICANOMBRE","Visible")',ctrl:"TRFEFEORIGENCAJAFISICANOMBRE",prop:"Visible"},{ctrl:"TRFEFEORIGENCAJAFISICATIPO"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJANOMBRE","Visible")',ctrl:"TRFEFEORIGENCAJANOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJAAPERTURAFECHA","Visible")',ctrl:"TRFEFEORIGENCAJAAPERTURAFECHA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJAAPERTURAHORA","Visible")',ctrl:"TRFEFEORIGENCAJAAPERTURAHORA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJAAPERTURA","Visible")',ctrl:"TRFEFEORIGENCAJAAPERTURA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJACIERREFECHA","Visible")',ctrl:"TRFEFEORIGENCAJACIERREFECHA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJACIERREHORA","Visible")',ctrl:"TRFEFEORIGENCAJACIERREHORA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFEORIGENCAJACIERRE","Visible")',ctrl:"TRFEFEORIGENCAJACIERRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFE094","Visible")',ctrl:"TRFEFE094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRFEFE095","Visible")',ctrl:"TRFEFE095",prop:"Visible"},{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEID=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJAID=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENENTIDADID=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENSUCURSALID=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJAFISICAID=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJAAPERTURAFECHA=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJAAPERTURAHORA=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJACIERREFECHA=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_TRFEFEORIGENCAJACIERREHORA=[[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"TRFEFEORIGENCAJAID"},{av:"A331TrfEfeOrigenCajaId",fld:"TRFEFEORIGENCAJAID",pic:"ZZZZZZZZ9"}]];this.Initialize()})