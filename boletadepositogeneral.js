/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:39.27
*/
gx.evt.autoSkip=!1;gx.define("boletadepositogeneral",!0,function(n){this.ServerClass="boletadepositogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Boldepsucursalid=function(){return this.validCliEvt("Valid_Boldepsucursalid",0,function(){try{var n=gx.util.balloon.getNew("BOLDEPSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Boldepid=function(){return this.validCliEvt("Valid_Boldepid",0,function(){try{var n=gx.util.balloon.getNew("BOLDEPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Boldepcbuplanctaid=function(){return this.validCliEvt("Valid_Boldepcbuplanctaid",0,function(){try{var n=gx.util.balloon.getNew("BOLDEPCBUPLANCTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Boldepcajeroid=function(){return this.validCliEvt("Valid_Boldepcajeroid",0,function(){try{var n=gx.util.balloon.getNew("BOLDEPCAJEROID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Boldepentidadid=function(){return this.validCliEvt("Valid_Boldepentidadid",0,function(){try{var n=gx.util.balloon.getNew("BOLDEPENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11xi1_client=function(){return this.clearMessages(),this.call("boletadeposito.aspx",["UPD",this.A3404BolDepId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12xi1_client=function(){return this.clearMessages(),this.call("boletadeposito.aspx",["DLT",this.A3404BolDepId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15xi2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16xi2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];this.GXLastCtrlId=51;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"UNNAMEDTABLE1",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Boldepsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPSUCURSALID",gxz:"Z3408BolDepSucursalId",gxold:"O3408BolDepSucursalId",gxvar:"A3408BolDepSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3408BolDepSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3408BolDepSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPSUCURSALID",gx.O.A3408BolDepSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3408BolDepSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPSUCURSALID",".")},nac:gx.falseFn};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPSUCURSALNOMBRE",gxz:"Z3423BolDepSucursalNombre",gxold:"O3423BolDepSucursalNombre",gxvar:"A3423BolDepSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3423BolDepSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3423BolDepSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("BOLDEPSUCURSALNOMBRE",gx.O.A3423BolDepSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3423BolDepSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCAJAFISICAID",gxz:"Z3435BolDepCajaFisicaId",gxold:"O3435BolDepCajaFisicaId",gxvar:"A3435BolDepCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3435BolDepCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3435BolDepCajaFisicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPCAJAFISICAID",gx.O.A3435BolDepCajaFisicaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3435BolDepCajaFisicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPCAJAFISICAID",".")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCAJAID",gxz:"Z3434BolDepCajaId",gxold:"O3434BolDepCajaId",gxvar:"A3434BolDepCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3434BolDepCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3434BolDepCajaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPCAJAID",gx.O.A3434BolDepCajaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3434BolDepCajaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPCAJAID",".")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"BTNUPDATE",grid:0,evt:"e11xi1_client"};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"BTNDELETE",grid:0,evt:"e12xi1_client"};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Boldepid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPID",gxz:"Z3404BolDepId",gxold:"O3404BolDepId",gxvar:"A3404BolDepId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3404BolDepId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3404BolDepId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPID",gx.O.A3404BolDepId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3404BolDepId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPID",".")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPESTADO",gxz:"Z3433BolDepEstado",gxold:"O3433BolDepEstado",gxvar:"A3433BolDepEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3433BolDepEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z3433BolDepEstado=n)},v2c:function(){gx.fn.setComboBoxValue("BOLDEPESTADO",gx.O.A3433BolDepEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3433BolDepEstado=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPESTADO")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});t[42]={id:42,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCBUALIAS",gxz:"Z3430BolDepCBUAlias",gxold:"O3430BolDepCBUAlias",gxvar:"A3430BolDepCBUAlias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3430BolDepCBUAlias=n)},v2z:function(n){n!==undefined&&(gx.O.Z3430BolDepCBUAlias=n)},v2c:function(){gx.fn.setControlValue("BOLDEPCBUALIAS",gx.O.A3430BolDepCBUAlias,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3430BolDepCBUAlias=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPCBUALIAS")},nac:gx.falseFn};t[43]={id:43,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Boldepcbuplanctaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCBUPLANCTAID",gxz:"Z3431BolDepCBUPlanCtaId",gxold:"O3431BolDepCBUPlanCtaId",gxvar:"A3431BolDepCBUPlanCtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3431BolDepCBUPlanCtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3431BolDepCBUPlanCtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPCBUPLANCTAID",gx.O.A3431BolDepCBUPlanCtaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3431BolDepCBUPlanCtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPCBUPLANCTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});t[44]={id:44,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCBUPLANCTANOM",gxz:"Z3432BolDepCBUPlanCtaNom",gxold:"O3432BolDepCBUPlanCtaNom",gxvar:"A3432BolDepCBUPlanCtaNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3432BolDepCBUPlanCtaNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z3432BolDepCBUPlanCtaNom=n)},v2c:function(){gx.fn.setControlValue("BOLDEPCBUPLANCTANOM",gx.O.A3432BolDepCBUPlanCtaNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3432BolDepCBUPlanCtaNom=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPCBUPLANCTANOM")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEP094",gxz:"Z3439BolDep094",gxold:"O3439BolDep094",gxvar:"A3439BolDep094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3439BolDep094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3439BolDep094=n)},v2c:function(){gx.fn.setControlValue("BOLDEP094",gx.O.A3439BolDep094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3439BolDep094=this.val())},val:function(){return gx.fn.getControlValue("BOLDEP094")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});t[46]={id:46,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEP095",gxz:"Z3440BolDep095",gxold:"O3440BolDep095",gxvar:"A3440BolDep095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3440BolDep095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3440BolDep095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("BOLDEP095",gx.O.A3440BolDep095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3440BolDep095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("BOLDEP095")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});t[47]={id:47,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Boldepcajeroid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCAJEROID",gxz:"Z3441BolDepCajeroId",gxold:"O3441BolDepCajeroId",gxvar:"A3441BolDepCajeroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3441BolDepCajeroId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3441BolDepCajeroId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPCAJEROID",gx.O.A3441BolDepCajeroId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3441BolDepCajeroId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPCAJEROID",".")},nac:gx.falseFn};t[48]={id:48,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCAJEROAPELLIDO",gxz:"Z3442BolDepCajeroApellido",gxold:"O3442BolDepCajeroApellido",gxvar:"A3442BolDepCajeroApellido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3442BolDepCajeroApellido=n)},v2z:function(n){n!==undefined&&(gx.O.Z3442BolDepCajeroApellido=n)},v2c:function(){gx.fn.setControlValue("BOLDEPCAJEROAPELLIDO",gx.O.A3442BolDepCajeroApellido,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3442BolDepCajeroApellido=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPCAJEROAPELLIDO")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});t[49]={id:49,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPCAJERONOMBRE",gxz:"Z3443BolDepCajeroNombre",gxold:"O3443BolDepCajeroNombre",gxvar:"A3443BolDepCajeroNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3443BolDepCajeroNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3443BolDepCajeroNombre=n)},v2c:function(){gx.fn.setControlValue("BOLDEPCAJERONOMBRE",gx.O.A3443BolDepCajeroNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3443BolDepCajeroNombre=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPCAJERONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Boldepentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPENTIDADID",gxz:"Z3407BolDepEntidadId",gxold:"O3407BolDepEntidadId",gxvar:"A3407BolDepEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3407BolDepEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3407BolDepEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("BOLDEPENTIDADID",gx.O.A3407BolDepEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3407BolDepEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("BOLDEPENTIDADID",".")},nac:gx.falseFn};t[51]={id:51,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BOLDEPENTIDADNOMBRE",gxz:"Z3422BolDepEntidadNombre",gxold:"O3422BolDepEntidadNombre",gxvar:"A3422BolDepEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3422BolDepEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3422BolDepEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("BOLDEPENTIDADNOMBRE",gx.O.A3422BolDepEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3422BolDepEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("BOLDEPENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});this.A3408BolDepSucursalId=0;this.Z3408BolDepSucursalId=0;this.O3408BolDepSucursalId=0;this.A3423BolDepSucursalNombre="";this.Z3423BolDepSucursalNombre="";this.O3423BolDepSucursalNombre="";this.A3435BolDepCajaFisicaId=0;this.Z3435BolDepCajaFisicaId=0;this.O3435BolDepCajaFisicaId=0;this.A3434BolDepCajaId=0;this.Z3434BolDepCajaId=0;this.O3434BolDepCajaId=0;this.A3404BolDepId=0;this.Z3404BolDepId=0;this.O3404BolDepId=0;this.A3433BolDepEstado="";this.Z3433BolDepEstado="";this.O3433BolDepEstado="";this.A3430BolDepCBUAlias="";this.Z3430BolDepCBUAlias="";this.O3430BolDepCBUAlias="";this.A3431BolDepCBUPlanCtaId=0;this.Z3431BolDepCBUPlanCtaId=0;this.O3431BolDepCBUPlanCtaId=0;this.A3432BolDepCBUPlanCtaNom="";this.Z3432BolDepCBUPlanCtaNom="";this.O3432BolDepCBUPlanCtaNom="";this.A3439BolDep094="";this.Z3439BolDep094="";this.O3439BolDep094="";this.A3440BolDep095=gx.date.nullDate();this.Z3440BolDep095=gx.date.nullDate();this.O3440BolDep095=gx.date.nullDate();this.A3441BolDepCajeroId=0;this.Z3441BolDepCajeroId=0;this.O3441BolDepCajeroId=0;this.A3442BolDepCajeroApellido="";this.Z3442BolDepCajeroApellido="";this.O3442BolDepCajeroApellido="";this.A3443BolDepCajeroNombre="";this.Z3443BolDepCajeroNombre="";this.O3443BolDepCajeroNombre="";this.A3407BolDepEntidadId=0;this.Z3407BolDepEntidadId=0;this.O3407BolDepEntidadId=0;this.A3422BolDepEntidadNombre="";this.Z3422BolDepEntidadNombre="";this.O3422BolDepEntidadNombre="";this.A3408BolDepSucursalId=0;this.A3423BolDepSucursalNombre="";this.A3435BolDepCajaFisicaId=0;this.A3434BolDepCajaId=0;this.A3404BolDepId=0;this.A3433BolDepEstado="";this.A3430BolDepCBUAlias="";this.A3431BolDepCBUPlanCtaId=0;this.A3432BolDepCBUPlanCtaNom="";this.A3439BolDep094="";this.A3440BolDep095=gx.date.nullDate();this.A3441BolDepCajeroId=0;this.A3442BolDepCajeroApellido="";this.A3443BolDepCajeroNombre="";this.A3407BolDepEntidadId=0;this.A3422BolDepEntidadNombre="";this.A3405BolDepCBUNumero="";this.Events={e15xi2_client:["ENTER",!0],e16xi2_client:["CANCEL",!0],e11xi1_client:["'DOUPDATE'",!1],e12xi1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A3404BolDepId",fld:"BOLDEPID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV15Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("BOLDEPID","Visible")',ctrl:"BOLDEPID",prop:"Visible"},{ctrl:"BOLDEPESTADO"},{av:'gx.fn.getCtrlProperty("BOLDEPCBUALIAS","Visible")',ctrl:"BOLDEPCBUALIAS",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPCBUPLANCTAID","Visible")',ctrl:"BOLDEPCBUPLANCTAID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPCBUPLANCTANOM","Visible")',ctrl:"BOLDEPCBUPLANCTANOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEP094","Visible")',ctrl:"BOLDEP094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEP095","Visible")',ctrl:"BOLDEP095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPCAJEROID","Visible")',ctrl:"BOLDEPCAJEROID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPCAJEROAPELLIDO","Visible")',ctrl:"BOLDEPCAJEROAPELLIDO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPCAJERONOMBRE","Visible")',ctrl:"BOLDEPCAJERONOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPENTIDADID","Visible")',ctrl:"BOLDEPENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("BOLDEPENTIDADNOMBRE","Visible")',ctrl:"BOLDEPENTIDADNOMBRE",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A3404BolDepId",fld:"BOLDEPID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A3404BolDepId",fld:"BOLDEPID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_BOLDEPSUCURSALID=[[],[]];this.EvtParms.VALID_BOLDEPID=[[],[]];this.EvtParms.VALID_BOLDEPCBUPLANCTAID=[[],[]];this.EvtParms.VALID_BOLDEPCAJEROID=[[],[]];this.EvtParms.VALID_BOLDEPENTIDADID=[[],[]];this.Initialize()})