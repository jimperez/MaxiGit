/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:2.81
*/
gx.evt.autoSkip=!1;gx.define("conestadoresultadosuccompgeneral",!0,function(n){this.ServerClass="conestadoresultadosuccompgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Conerscusuid=function(){return this.validCliEvt("Valid_Conerscusuid",0,function(){try{var n=gx.util.balloon.getNew("CONERSCUSUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Conerscplancuentaid=function(){return this.validCliEvt("Valid_Conerscplancuentaid",0,function(){try{var n=gx.util.balloon.getNew("CONERSCPLANCUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13x32_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14x32_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117];this.GXLastCtrlId=117;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conerscusuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCUSUID",gxz:"Z3127ConERSCUsuId",gxold:"O3127ConERSCUsuId",gxvar:"A3127ConERSCUsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3127ConERSCUsuId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3127ConERSCUsuId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCUSUID",gx.O.A3127ConERSCUsuId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3127ConERSCUsuId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCUSUID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conerscplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTAID",gxz:"Z3130ConERSCPlanCuentaId",gxold:"O3130ConERSCPlanCuentaId",gxvar:"A3130ConERSCPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3130ConERSCPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3130ConERSCPlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTAID",gx.O.A3130ConERSCPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3130ConERSCPlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCPLANCUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCSUCURSALID",gxz:"Z3129ConERSCSucursalId",gxold:"O3129ConERSCSucursalId",gxvar:"A3129ConERSCSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3129ConERSCSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3129ConERSCSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCSUCURSALID",gx.O.A3129ConERSCSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3129ConERSCSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCSUCURSALID",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCSUCURSALNOMBRE",gxz:"Z3145ConERSCSucursalNombre",gxold:"O3145ConERSCSucursalNombre",gxvar:"A3145ConERSCSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3145ConERSCSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3145ConERSCSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("CONERSCSUCURSALNOMBRE",gx.O.A3145ConERSCSucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3145ConERSCSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("CONERSCSUCURSALNOMBRE")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTANOMBRE",gxz:"Z3146ConERSCPlanCuentaNombre",gxold:"O3146ConERSCPlanCuentaNombre",gxvar:"A3146ConERSCPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3146ConERSCPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3146ConERSCPlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTANOMBRE",gx.O.A3146ConERSCPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3146ConERSCPlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("CONERSCPLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTAPADRE",gxz:"Z3147ConERSCPlanCuentaPadre",gxold:"O3147ConERSCPlanCuentaPadre",gxvar:"A3147ConERSCPlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3147ConERSCPlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3147ConERSCPlanCuentaPadre=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTAPADRE",gx.O.A3147ConERSCPlanCuentaPadre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3147ConERSCPlanCuentaPadre=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCPLANCUENTAPADRE",".")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTANIVEL",gxz:"Z3148ConERSCPlanCuentaNivel",gxold:"O3148ConERSCPlanCuentaNivel",gxvar:"A3148ConERSCPlanCuentaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3148ConERSCPlanCuentaNivel=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3148ConERSCPlanCuentaNivel=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTANIVEL",gx.O.A3148ConERSCPlanCuentaNivel,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3148ConERSCPlanCuentaNivel=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCPLANCUENTANIVEL",".")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTAIMPUTA",gxz:"Z3149ConERSCPlanCuentaImputa",gxold:"O3149ConERSCPlanCuentaImputa",gxvar:"A3149ConERSCPlanCuentaImputa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3149ConERSCPlanCuentaImputa=n)},v2z:function(n){n!==undefined&&(gx.O.Z3149ConERSCPlanCuentaImputa=n)},v2c:function(){gx.fn.setComboBoxValue("CONERSCPLANCUENTAIMPUTA",gx.O.A3149ConERSCPlanCuentaImputa);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3149ConERSCPlanCuentaImputa=this.val())},val:function(){return gx.fn.getControlValue("CONERSCPLANCUENTAIMPUTA")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTATIPOCTA",gxz:"Z3150ConERSCPlanCuentaTipoCta",gxold:"O3150ConERSCPlanCuentaTipoCta",gxvar:"A3150ConERSCPlanCuentaTipoCta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3150ConERSCPlanCuentaTipoCta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3150ConERSCPlanCuentaTipoCta=n)},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTATIPOCTA",gx.O.A3150ConERSCPlanCuentaTipoCta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3150ConERSCPlanCuentaTipoCta=this.val())},val:function(){return gx.fn.getControlValue("CONERSCPLANCUENTATIPOCTA")},nac:gx.falseFn};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTATIPO",gxz:"Z3151ConERSCPlanCuentaTipo",gxold:"O3151ConERSCPlanCuentaTipo",gxvar:"A3151ConERSCPlanCuentaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3151ConERSCPlanCuentaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3151ConERSCPlanCuentaTipo=n)},v2c:function(){gx.fn.setControlValue("CONERSCPLANCUENTATIPO",gx.O.A3151ConERSCPlanCuentaTipo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3151ConERSCPlanCuentaTipo=this.val())},val:function(){return gx.fn.getControlValue("CONERSCPLANCUENTATIPO")},nac:gx.falseFn};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCPLANCUENTAINDIRECTA",gxz:"Z3131ConERSCPlanCuentaIndirecta",gxold:"O3131ConERSCPlanCuentaIndirecta",gxvar:"A3131ConERSCPlanCuentaIndirecta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3131ConERSCPlanCuentaIndirecta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3131ConERSCPlanCuentaIndirecta=n)},v2c:function(){gx.fn.setComboBoxValue("CONERSCPLANCUENTAINDIRECTA",gx.O.A3131ConERSCPlanCuentaIndirecta);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3131ConERSCPlanCuentaIndirecta=this.val())},val:function(){return gx.fn.getControlValue("CONERSCPLANCUENTAINDIRECTA")},nac:gx.falseFn};this.declareDomainHdlr(59,function(){});t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCANIO01",gxz:"Z3132ConERSCAnio01",gxold:"O3132ConERSCAnio01",gxvar:"A3132ConERSCAnio01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3132ConERSCAnio01=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3132ConERSCAnio01=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCANIO01",gx.O.A3132ConERSCAnio01,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3132ConERSCAnio01=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCANIO01",".")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCMES01",gxz:"Z3133ConERSCMes01",gxold:"O3133ConERSCMes01",gxvar:"A3133ConERSCMes01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3133ConERSCMes01=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3133ConERSCMes01=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONERSCMES01",gx.O.A3133ConERSCMes01);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3133ConERSCMes01=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCMES01",".")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCIMPORTE01",gxz:"Z3134ConERSCImporte01",gxold:"O3134ConERSCImporte01",gxvar:"A3134ConERSCImporte01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3134ConERSCImporte01=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3134ConERSCImporte01=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONERSCIMPORTE01",gx.O.A3134ConERSCImporte01,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3134ConERSCImporte01=this.val())},val:function(){return gx.fn.getDecimalValue("CONERSCIMPORTE01",".",",")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCANIO02",gxz:"Z3135ConERSCAnio02",gxold:"O3135ConERSCAnio02",gxvar:"A3135ConERSCAnio02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3135ConERSCAnio02=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3135ConERSCAnio02=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCANIO02",gx.O.A3135ConERSCAnio02,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3135ConERSCAnio02=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCANIO02",".")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});t[78]={id:78,fld:"",grid:0};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"",grid:0};t[81]={id:81,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCMES02",gxz:"Z3136ConERSCMes02",gxold:"O3136ConERSCMes02",gxvar:"A3136ConERSCMes02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3136ConERSCMes02=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3136ConERSCMes02=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONERSCMES02",gx.O.A3136ConERSCMes02);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3136ConERSCMes02=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCMES02",".")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});t[82]={id:82,fld:"",grid:0};t[83]={id:83,fld:"",grid:0};t[84]={id:84,fld:"",grid:0};t[85]={id:85,fld:"",grid:0};t[86]={id:86,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCIMPORTE02",gxz:"Z3137ConERSCImporte02",gxold:"O3137ConERSCImporte02",gxvar:"A3137ConERSCImporte02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3137ConERSCImporte02=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3137ConERSCImporte02=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONERSCIMPORTE02",gx.O.A3137ConERSCImporte02,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3137ConERSCImporte02=this.val())},val:function(){return gx.fn.getDecimalValue("CONERSCIMPORTE02",".",",")},nac:gx.falseFn};this.declareDomainHdlr(86,function(){});t[87]={id:87,fld:"",grid:0};t[88]={id:88,fld:"",grid:0};t[89]={id:89,fld:"",grid:0};t[90]={id:90,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCANIO03",gxz:"Z3138ConERSCAnio03",gxold:"O3138ConERSCAnio03",gxvar:"A3138ConERSCAnio03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3138ConERSCAnio03=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3138ConERSCAnio03=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCANIO03",gx.O.A3138ConERSCAnio03,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3138ConERSCAnio03=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCANIO03",".")},nac:gx.falseFn};this.declareDomainHdlr(90,function(){});t[91]={id:91,fld:"",grid:0};t[92]={id:92,fld:"",grid:0};t[93]={id:93,fld:"",grid:0};t[94]={id:94,fld:"",grid:0};t[95]={id:95,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCMES03",gxz:"Z3139ConERSCMes03",gxold:"O3139ConERSCMes03",gxvar:"A3139ConERSCMes03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3139ConERSCMes03=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3139ConERSCMes03=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONERSCMES03",gx.O.A3139ConERSCMes03);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3139ConERSCMes03=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCMES03",".")},nac:gx.falseFn};this.declareDomainHdlr(95,function(){});t[96]={id:96,fld:"",grid:0};t[97]={id:97,fld:"",grid:0};t[98]={id:98,fld:"",grid:0};t[99]={id:99,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCIMPORTE03",gxz:"Z3140ConERSCImporte03",gxold:"O3140ConERSCImporte03",gxvar:"A3140ConERSCImporte03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3140ConERSCImporte03=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3140ConERSCImporte03=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONERSCIMPORTE03",gx.O.A3140ConERSCImporte03,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3140ConERSCImporte03=this.val())},val:function(){return gx.fn.getDecimalValue("CONERSCIMPORTE03",".",",")},nac:gx.falseFn};this.declareDomainHdlr(99,function(){});t[100]={id:100,fld:"",grid:0};t[101]={id:101,fld:"",grid:0};t[102]={id:102,fld:"",grid:0};t[103]={id:103,fld:"",grid:0};t[104]={id:104,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCANIO04",gxz:"Z3141ConERSCAnio04",gxold:"O3141ConERSCAnio04",gxvar:"A3141ConERSCAnio04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3141ConERSCAnio04=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3141ConERSCAnio04=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONERSCANIO04",gx.O.A3141ConERSCAnio04,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3141ConERSCAnio04=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCANIO04",".")},nac:gx.falseFn};this.declareDomainHdlr(104,function(){});t[105]={id:105,fld:"",grid:0};t[106]={id:106,fld:"",grid:0};t[107]={id:107,fld:"",grid:0};t[108]={id:108,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCMES04",gxz:"Z3142ConERSCMes04",gxold:"O3142ConERSCMes04",gxvar:"A3142ConERSCMes04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3142ConERSCMes04=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3142ConERSCMes04=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CONERSCMES04",gx.O.A3142ConERSCMes04);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3142ConERSCMes04=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONERSCMES04",".")},nac:gx.falseFn};this.declareDomainHdlr(108,function(){});t[109]={id:109,fld:"",grid:0};t[110]={id:110,fld:"",grid:0};t[111]={id:111,fld:"",grid:0};t[112]={id:112,fld:"",grid:0};t[113]={id:113,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCIMPORTE04",gxz:"Z3143ConERSCImporte04",gxold:"O3143ConERSCImporte04",gxvar:"A3143ConERSCImporte04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3143ConERSCImporte04=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3143ConERSCImporte04=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONERSCIMPORTE04",gx.O.A3143ConERSCImporte04,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3143ConERSCImporte04=this.val())},val:function(){return gx.fn.getDecimalValue("CONERSCIMPORTE04",".",",")},nac:gx.falseFn};this.declareDomainHdlr(113,function(){});t[114]={id:114,fld:"",grid:0};t[115]={id:115,fld:"",grid:0};t[116]={id:116,fld:"",grid:0};t[117]={id:117,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONERSCFECHAHORA",gxz:"Z3144ConERSCFechaHora",gxold:"O3144ConERSCFechaHora",gxvar:"A3144ConERSCFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3144ConERSCFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3144ConERSCFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONERSCFECHAHORA",gx.O.A3144ConERSCFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3144ConERSCFechaHora=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONERSCFECHAHORA")},nac:gx.falseFn};this.declareDomainHdlr(117,function(){});this.A3127ConERSCUsuId=0;this.Z3127ConERSCUsuId=0;this.O3127ConERSCUsuId=0;this.A3130ConERSCPlanCuentaId=0;this.Z3130ConERSCPlanCuentaId=0;this.O3130ConERSCPlanCuentaId=0;this.A3129ConERSCSucursalId=0;this.Z3129ConERSCSucursalId=0;this.O3129ConERSCSucursalId=0;this.A3145ConERSCSucursalNombre="";this.Z3145ConERSCSucursalNombre="";this.O3145ConERSCSucursalNombre="";this.A3146ConERSCPlanCuentaNombre="";this.Z3146ConERSCPlanCuentaNombre="";this.O3146ConERSCPlanCuentaNombre="";this.A3147ConERSCPlanCuentaPadre=0;this.Z3147ConERSCPlanCuentaPadre=0;this.O3147ConERSCPlanCuentaPadre=0;this.A3148ConERSCPlanCuentaNivel=0;this.Z3148ConERSCPlanCuentaNivel=0;this.O3148ConERSCPlanCuentaNivel=0;this.A3149ConERSCPlanCuentaImputa="";this.Z3149ConERSCPlanCuentaImputa="";this.O3149ConERSCPlanCuentaImputa="";this.A3150ConERSCPlanCuentaTipoCta="";this.Z3150ConERSCPlanCuentaTipoCta="";this.O3150ConERSCPlanCuentaTipoCta="";this.A3151ConERSCPlanCuentaTipo="";this.Z3151ConERSCPlanCuentaTipo="";this.O3151ConERSCPlanCuentaTipo="";this.A3131ConERSCPlanCuentaIndirecta="";this.Z3131ConERSCPlanCuentaIndirecta="";this.O3131ConERSCPlanCuentaIndirecta="";this.A3132ConERSCAnio01=0;this.Z3132ConERSCAnio01=0;this.O3132ConERSCAnio01=0;this.A3133ConERSCMes01=0;this.Z3133ConERSCMes01=0;this.O3133ConERSCMes01=0;this.A3134ConERSCImporte01=0;this.Z3134ConERSCImporte01=0;this.O3134ConERSCImporte01=0;this.A3135ConERSCAnio02=0;this.Z3135ConERSCAnio02=0;this.O3135ConERSCAnio02=0;this.A3136ConERSCMes02=0;this.Z3136ConERSCMes02=0;this.O3136ConERSCMes02=0;this.A3137ConERSCImporte02=0;this.Z3137ConERSCImporte02=0;this.O3137ConERSCImporte02=0;this.A3138ConERSCAnio03=0;this.Z3138ConERSCAnio03=0;this.O3138ConERSCAnio03=0;this.A3139ConERSCMes03=0;this.Z3139ConERSCMes03=0;this.O3139ConERSCMes03=0;this.A3140ConERSCImporte03=0;this.Z3140ConERSCImporte03=0;this.O3140ConERSCImporte03=0;this.A3141ConERSCAnio04=0;this.Z3141ConERSCAnio04=0;this.O3141ConERSCAnio04=0;this.A3142ConERSCMes04=0;this.Z3142ConERSCMes04=0;this.O3142ConERSCMes04=0;this.A3143ConERSCImporte04=0;this.Z3143ConERSCImporte04=0;this.O3143ConERSCImporte04=0;this.A3144ConERSCFechaHora=gx.date.nullDate();this.Z3144ConERSCFechaHora=gx.date.nullDate();this.O3144ConERSCFechaHora=gx.date.nullDate();this.A3127ConERSCUsuId=0;this.A3130ConERSCPlanCuentaId=0;this.A3129ConERSCSucursalId=0;this.A3145ConERSCSucursalNombre="";this.A3146ConERSCPlanCuentaNombre="";this.A3147ConERSCPlanCuentaPadre=0;this.A3148ConERSCPlanCuentaNivel=0;this.A3149ConERSCPlanCuentaImputa="";this.A3150ConERSCPlanCuentaTipoCta="";this.A3151ConERSCPlanCuentaTipo="";this.A3131ConERSCPlanCuentaIndirecta="";this.A3132ConERSCAnio01=0;this.A3133ConERSCMes01=0;this.A3134ConERSCImporte01=0;this.A3135ConERSCAnio02=0;this.A3136ConERSCMes02=0;this.A3137ConERSCImporte02=0;this.A3138ConERSCAnio03=0;this.A3139ConERSCMes03=0;this.A3140ConERSCImporte03=0;this.A3141ConERSCAnio04=0;this.A3142ConERSCMes04=0;this.A3143ConERSCImporte04=0;this.A3144ConERSCFechaHora=gx.date.nullDate();this.Events={e13x32_client:["ENTER",!0],e14x32_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A3127ConERSCUsuId",fld:"CONERSCUSUID",pic:"ZZZZZZZZZZ9"},{av:"A3130ConERSCPlanCuentaId",fld:"CONERSCPLANCUENTAID",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV15Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[]];this.EvtParms.VALID_CONERSCUSUID=[[],[]];this.EvtParms.VALID_CONERSCPLANCUENTAID=[[],[]];this.Initialize()})