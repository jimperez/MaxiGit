/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:28.89
*/
gx.evt.autoSkip=!1;gx.define("conestadoresultadosucgeneral",!0,function(n){this.ServerClass="conestadoresultadosucgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Conersusuid=function(){return this.validCliEvt("Valid_Conersusuid",0,function(){try{var n=gx.util.balloon.getNew("CONERSUSUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Conersplancuentaid=function(){return this.validCliEvt("Valid_Conersplancuentaid",0,function(){try{var n=gx.util.balloon.getNew("CONERSPLANCUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13s02_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14s02_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];this.GXLastCtrlId=75;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conersusuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSUSUID",gxz:"Z3078ConERSUsuId",gxold:"O3078ConERSUsuId",gxvar:"A3078ConERSUsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3078ConERSUsuId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3078ConERSUsuId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSUSUID",gx.O.A3078ConERSUsuId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3078ConERSUsuId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSUSUID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conersplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTAID",gxz:"Z3081ConERSPlanCuentaId",gxold:"O3081ConERSPlanCuentaId",gxvar:"A3081ConERSPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3081ConERSPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3081ConERSPlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTAID",gx.O.A3081ConERSPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3081ConERSPlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSPLANCUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSSUCURSALNOMBRE",gxz:"Z3107ConERSSucursalNombre",gxold:"O3107ConERSSucursalNombre",gxvar:"A3107ConERSSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3107ConERSSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3107ConERSSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("CONERSSUCURSALNOMBRE",gx.O.A3107ConERSSucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3107ConERSSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("CONERSSUCURSALNOMBRE")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSANIO",gxz:"Z3083ConERSAnio",gxold:"O3083ConERSAnio",gxvar:"A3083ConERSAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3083ConERSAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3083ConERSAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSANIO",gx.O.A3083ConERSAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3083ConERSAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSMES",gxz:"Z3084ConERSMes",gxold:"O3084ConERSMes",gxvar:"A3084ConERSMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3084ConERSMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3084ConERSMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONERSMES",gx.O.A3084ConERSMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3084ConERSMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSMES",".")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTANOMBRE",gxz:"Z3085ConERSPlanCuentaNombre",gxold:"O3085ConERSPlanCuentaNombre",gxvar:"A3085ConERSPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3085ConERSPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3085ConERSPlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTANOMBRE",gx.O.A3085ConERSPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3085ConERSPlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("CONERSPLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTAPADRE",gxz:"Z3086ConERSPlanCuentaPadre",gxold:"O3086ConERSPlanCuentaPadre",gxvar:"A3086ConERSPlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3086ConERSPlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3086ConERSPlanCuentaPadre=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTAPADRE",gx.O.A3086ConERSPlanCuentaPadre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3086ConERSPlanCuentaPadre=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSPLANCUENTAPADRE",".")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTANIVEL",gxz:"Z3087ConERSPlanCuentaNivel",gxold:"O3087ConERSPlanCuentaNivel",gxvar:"A3087ConERSPlanCuentaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3087ConERSPlanCuentaNivel=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3087ConERSPlanCuentaNivel=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTANIVEL",gx.O.A3087ConERSPlanCuentaNivel,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3087ConERSPlanCuentaNivel=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSPLANCUENTANIVEL",".")},nac:gx.falseFn};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTAIMPUTA",gxz:"Z3088ConERSPlanCuentaImputa",gxold:"O3088ConERSPlanCuentaImputa",gxvar:"A3088ConERSPlanCuentaImputa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3088ConERSPlanCuentaImputa=n)},v2z:function(n){n!==undefined&&(gx.O.Z3088ConERSPlanCuentaImputa=n)},v2c:function(){gx.fn.setComboBoxValue("CONERSPLANCUENTAIMPUTA",gx.O.A3088ConERSPlanCuentaImputa);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3088ConERSPlanCuentaImputa=this.val())},val:function(){return gx.fn.getControlValue("CONERSPLANCUENTAIMPUTA")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTATIPOCTA",gxz:"Z3089ConERSPlanCuentaTipoCta",gxold:"O3089ConERSPlanCuentaTipoCta",gxvar:"A3089ConERSPlanCuentaTipoCta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3089ConERSPlanCuentaTipoCta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3089ConERSPlanCuentaTipoCta=n)},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTATIPOCTA",gx.O.A3089ConERSPlanCuentaTipoCta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3089ConERSPlanCuentaTipoCta=this.val())},val:function(){return gx.fn.getControlValue("CONERSPLANCUENTATIPOCTA")},nac:gx.falseFn};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTATIPO",gxz:"Z3090ConERSPlanCuentaTipo",gxold:"O3090ConERSPlanCuentaTipo",gxvar:"A3090ConERSPlanCuentaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3090ConERSPlanCuentaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3090ConERSPlanCuentaTipo=n)},v2c:function(){gx.fn.setControlValue("CONERSPLANCUENTATIPO",gx.O.A3090ConERSPlanCuentaTipo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3090ConERSPlanCuentaTipo=this.val())},val:function(){return gx.fn.getControlValue("CONERSPLANCUENTATIPO")},nac:gx.falseFn};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSPLANCUENTAINDIRECTA",gxz:"Z3091ConERSPlanCuentaIndirecta",gxold:"O3091ConERSPlanCuentaIndirecta",gxvar:"A3091ConERSPlanCuentaIndirecta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3091ConERSPlanCuentaIndirecta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3091ConERSPlanCuentaIndirecta=n)},v2c:function(){gx.fn.setComboBoxValue("CONERSPLANCUENTAINDIRECTA",gx.O.A3091ConERSPlanCuentaIndirecta);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3091ConERSPlanCuentaIndirecta=this.val())},val:function(){return gx.fn.getControlValue("CONERSPLANCUENTAINDIRECTA")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSIMPORTE",gxz:"Z3092ConERSImporte",gxold:"O3092ConERSImporte",gxvar:"A3092ConERSImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3092ConERSImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3092ConERSImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONERSIMPORTE",gx.O.A3092ConERSImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3092ConERSImporte=this.val())},val:function(){return gx.fn.getDecimalValue("CONERSIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(67,function(){});t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSFECHAHORA",gxz:"Z3093ConERSFechaHora",gxold:"O3093ConERSFechaHora",gxvar:"A3093ConERSFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3093ConERSFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3093ConERSFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONERSFECHAHORA",gx.O.A3093ConERSFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3093ConERSFechaHora=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONERSFECHAHORA")},nac:gx.falseFn};this.declareDomainHdlr(71,function(){});t[72]={id:72,fld:"",grid:0};t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[75]={id:75,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSSUCURSALID",gxz:"Z3082ConERSSucursalId",gxold:"O3082ConERSSucursalId",gxvar:"A3082ConERSSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3082ConERSSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3082ConERSSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSSUCURSALID",gx.O.A3082ConERSSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3082ConERSSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSSUCURSALID",".")},nac:gx.falseFn};this.A3078ConERSUsuId=0;this.Z3078ConERSUsuId=0;this.O3078ConERSUsuId=0;this.A3081ConERSPlanCuentaId=0;this.Z3081ConERSPlanCuentaId=0;this.O3081ConERSPlanCuentaId=0;this.A3107ConERSSucursalNombre="";this.Z3107ConERSSucursalNombre="";this.O3107ConERSSucursalNombre="";this.A3083ConERSAnio=0;this.Z3083ConERSAnio=0;this.O3083ConERSAnio=0;this.A3084ConERSMes=0;this.Z3084ConERSMes=0;this.O3084ConERSMes=0;this.A3085ConERSPlanCuentaNombre="";this.Z3085ConERSPlanCuentaNombre="";this.O3085ConERSPlanCuentaNombre="";this.A3086ConERSPlanCuentaPadre=0;this.Z3086ConERSPlanCuentaPadre=0;this.O3086ConERSPlanCuentaPadre=0;this.A3087ConERSPlanCuentaNivel=0;this.Z3087ConERSPlanCuentaNivel=0;this.O3087ConERSPlanCuentaNivel=0;this.A3088ConERSPlanCuentaImputa="";this.Z3088ConERSPlanCuentaImputa="";this.O3088ConERSPlanCuentaImputa="";this.A3089ConERSPlanCuentaTipoCta="";this.Z3089ConERSPlanCuentaTipoCta="";this.O3089ConERSPlanCuentaTipoCta="";this.A3090ConERSPlanCuentaTipo="";this.Z3090ConERSPlanCuentaTipo="";this.O3090ConERSPlanCuentaTipo="";this.A3091ConERSPlanCuentaIndirecta="";this.Z3091ConERSPlanCuentaIndirecta="";this.O3091ConERSPlanCuentaIndirecta="";this.A3092ConERSImporte=0;this.Z3092ConERSImporte=0;this.O3092ConERSImporte=0;this.A3093ConERSFechaHora=gx.date.nullDate();this.Z3093ConERSFechaHora=gx.date.nullDate();this.O3093ConERSFechaHora=gx.date.nullDate();this.A3082ConERSSucursalId=0;this.Z3082ConERSSucursalId=0;this.O3082ConERSSucursalId=0;this.A3078ConERSUsuId=0;this.A3081ConERSPlanCuentaId=0;this.A3107ConERSSucursalNombre="";this.A3083ConERSAnio=0;this.A3084ConERSMes=0;this.A3085ConERSPlanCuentaNombre="";this.A3086ConERSPlanCuentaPadre=0;this.A3087ConERSPlanCuentaNivel=0;this.A3088ConERSPlanCuentaImputa="";this.A3089ConERSPlanCuentaTipoCta="";this.A3090ConERSPlanCuentaTipo="";this.A3091ConERSPlanCuentaIndirecta="";this.A3092ConERSImporte=0;this.A3093ConERSFechaHora=gx.date.nullDate();this.A3082ConERSSucursalId=0;this.Events={e13s02_client:["ENTER",!0],e14s02_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A3078ConERSUsuId",fld:"CONERSUSUID",pic:"ZZZZZZZZZZ9"},{av:"A3081ConERSPlanCuentaId",fld:"CONERSPLANCUENTAID",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV21Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("CONERSSUCURSALID","Visible")',ctrl:"CONERSSUCURSALID",prop:"Visible"}]];this.EvtParms.VALID_CONERSUSUID=[[],[]];this.EvtParms.VALID_CONERSPLANCUENTAID=[[],[]];this.Initialize()})