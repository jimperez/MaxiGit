/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:9.70
*/
gx.evt.autoSkip=!1;gx.define("logaccesogeneral",!0,function(n){this.ServerClass="logaccesogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Logaccesoid=function(){return this.validCliEvt("Valid_Logaccesoid",0,function(){try{var n=gx.util.balloon.getNew("LOGACCESOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e13vx2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14vx2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];this.GXLastCtrlId=41;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Logaccesoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOID",gxz:"Z3310LogAccesoId",gxold:"O3310LogAccesoId",gxvar:"A3310LogAccesoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3310LogAccesoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3310LogAccesoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("LOGACCESOID",gx.O.A3310LogAccesoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3310LogAccesoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("LOGACCESOID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOFECHA",gxz:"Z3311LogAccesoFecha",gxold:"O3311LogAccesoFecha",gxvar:"A3311LogAccesoFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3311LogAccesoFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3311LogAccesoFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("LOGACCESOFECHA",gx.O.A3311LogAccesoFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3311LogAccesoFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("LOGACCESOFECHA")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOHORA",gxz:"Z3312LogAccesoHora",gxold:"O3312LogAccesoHora",gxvar:"A3312LogAccesoHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3312LogAccesoHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z3312LogAccesoHora=n)},v2c:function(){gx.fn.setControlValue("LOGACCESOHORA",gx.O.A3312LogAccesoHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3312LogAccesoHora=this.val())},val:function(){return gx.fn.getControlValue("LOGACCESOHORA")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOUSUARIO",gxz:"Z3316LogAccesoUsuario",gxold:"O3316LogAccesoUsuario",gxvar:"A3316LogAccesoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3316LogAccesoUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z3316LogAccesoUsuario=n)},v2c:function(){gx.fn.setControlValue("LOGACCESOUSUARIO",gx.O.A3316LogAccesoUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3316LogAccesoUsuario=this.val())},val:function(){return gx.fn.getControlValue("LOGACCESOUSUARIO")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESONOMBRE",gxz:"Z3314LogAccesoNombre",gxold:"O3314LogAccesoNombre",gxvar:"A3314LogAccesoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3314LogAccesoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3314LogAccesoNombre=n)},v2c:function(){gx.fn.setControlValue("LOGACCESONOMBRE",gx.O.A3314LogAccesoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3314LogAccesoNombre=this.val())},val:function(){return gx.fn.getControlValue("LOGACCESONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOSUCURSAL",gxz:"Z3315LogAccesoSucursal",gxold:"O3315LogAccesoSucursal",gxvar:"A3315LogAccesoSucursal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3315LogAccesoSucursal=n)},v2z:function(n){n!==undefined&&(gx.O.Z3315LogAccesoSucursal=n)},v2c:function(){gx.fn.setControlValue("LOGACCESOSUCURSAL",gx.O.A3315LogAccesoSucursal,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3315LogAccesoSucursal=this.val())},val:function(){return gx.fn.getControlValue("LOGACCESOSUCURSAL")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOGACCESOIP",gxz:"Z3313LogAccesoIP",gxold:"O3313LogAccesoIP",gxvar:"A3313LogAccesoIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3313LogAccesoIP=n)},v2z:function(n){n!==undefined&&(gx.O.Z3313LogAccesoIP=n)},v2c:function(){gx.fn.setControlValue("LOGACCESOIP",gx.O.A3313LogAccesoIP,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3313LogAccesoIP=this.val())},val:function(){return gx.fn.getControlValue("LOGACCESOIP")},nac:gx.falseFn};this.A3310LogAccesoId=0;this.Z3310LogAccesoId=0;this.O3310LogAccesoId=0;this.A3311LogAccesoFecha=gx.date.nullDate();this.Z3311LogAccesoFecha=gx.date.nullDate();this.O3311LogAccesoFecha=gx.date.nullDate();this.A3312LogAccesoHora="";this.Z3312LogAccesoHora="";this.O3312LogAccesoHora="";this.A3316LogAccesoUsuario="";this.Z3316LogAccesoUsuario="";this.O3316LogAccesoUsuario="";this.A3314LogAccesoNombre="";this.Z3314LogAccesoNombre="";this.O3314LogAccesoNombre="";this.A3315LogAccesoSucursal="";this.Z3315LogAccesoSucursal="";this.O3315LogAccesoSucursal="";this.A3313LogAccesoIP="";this.Z3313LogAccesoIP="";this.O3313LogAccesoIP="";this.A3310LogAccesoId=0;this.A3311LogAccesoFecha=gx.date.nullDate();this.A3312LogAccesoHora="";this.A3316LogAccesoUsuario="";this.A3314LogAccesoNombre="";this.A3315LogAccesoSucursal="";this.A3313LogAccesoIP="";this.Events={e13vx2_client:["ENTER",!0],e14vx2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A3310LogAccesoId",fld:"LOGACCESOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV16Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[]];this.EvtParms.VALID_LOGACCESOID=[[],[]];this.Initialize()})