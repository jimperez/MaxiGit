/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:40.65
*/
gx.evt.autoSkip=!1;gx.define("ejerciciogeneral",!0,function(n){this.ServerClass="ejerciciogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Ejercicioanio=function(){return this.validCliEvt("Valid_Ejercicioanio",0,function(){try{var n=gx.util.balloon.getNew("EJERCICIOANIO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11nn1_client=function(){return this.clearMessages(),this.call("ejercicio.aspx",["UPD",this.A342EjercicioAnio]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12nn1_client=function(){return this.clearMessages(),this.call("ejercicio.aspx",["DLT",this.A342EjercicioAnio]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15nn2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16nn2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44];this.GXLastCtrlId=44;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ejercicioanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOANIO",gxz:"Z342EjercicioAnio",gxold:"O342EjercicioAnio",gxvar:"A342EjercicioAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z342EjercicioAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EJERCICIOANIO",gx.O.A342EjercicioAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EJERCICIOANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIODESCRIPCION",gxz:"Z2918EjercicioDescripcion",gxold:"O2918EjercicioDescripcion",gxvar:"A2918EjercicioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2918EjercicioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2918EjercicioDescripcion=n)},v2c:function(){gx.fn.setControlValue("EJERCICIODESCRIPCION",gx.O.A2918EjercicioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2918EjercicioDescripcion=this.val())},val:function(){return gx.fn.getControlValue("EJERCICIODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOFECHAINICIO",gxz:"Z2921EjercicioFechaInicio",gxold:"O2921EjercicioFechaInicio",gxvar:"A2921EjercicioFechaInicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2921EjercicioFechaInicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2921EjercicioFechaInicio=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EJERCICIOFECHAINICIO",gx.O.A2921EjercicioFechaInicio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2921EjercicioFechaInicio=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("EJERCICIOFECHAINICIO")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOFECHAFIN",gxz:"Z2920EjercicioFechaFin",gxold:"O2920EjercicioFechaFin",gxvar:"A2920EjercicioFechaFin",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2920EjercicioFechaFin=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2920EjercicioFechaFin=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EJERCICIOFECHAFIN",gx.O.A2920EjercicioFechaFin,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2920EjercicioFechaFin=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("EJERCICIOFECHAFIN")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOESTADO",gxz:"Z2919EjercicioEstado",gxold:"O2919EjercicioEstado",gxvar:"A2919EjercicioEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2919EjercicioEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2919EjercicioEstado=n)},v2c:function(){gx.fn.setComboBoxValue("EJERCICIOESTADO",gx.O.A2919EjercicioEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2919EjercicioEstado=this.val())},val:function(){return gx.fn.getControlValue("EJERCICIOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"BTNUPDATE",grid:0,evt:"e11nn1_client"};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"BTNDELETE",grid:0,evt:"e12nn1_client"};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[43]={id:43,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIO094",gxz:"Z2916Ejercicio094",gxold:"O2916Ejercicio094",gxvar:"A2916Ejercicio094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2916Ejercicio094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2916Ejercicio094=n)},v2c:function(){gx.fn.setControlValue("EJERCICIO094",gx.O.A2916Ejercicio094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2916Ejercicio094=this.val())},val:function(){return gx.fn.getControlValue("EJERCICIO094")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});t[44]={id:44,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIO095",gxz:"Z2917Ejercicio095",gxold:"O2917Ejercicio095",gxvar:"A2917Ejercicio095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2917Ejercicio095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2917Ejercicio095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EJERCICIO095",gx.O.A2917Ejercicio095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2917Ejercicio095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("EJERCICIO095")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});this.A342EjercicioAnio=0;this.Z342EjercicioAnio=0;this.O342EjercicioAnio=0;this.A2918EjercicioDescripcion="";this.Z2918EjercicioDescripcion="";this.O2918EjercicioDescripcion="";this.A2921EjercicioFechaInicio=gx.date.nullDate();this.Z2921EjercicioFechaInicio=gx.date.nullDate();this.O2921EjercicioFechaInicio=gx.date.nullDate();this.A2920EjercicioFechaFin=gx.date.nullDate();this.Z2920EjercicioFechaFin=gx.date.nullDate();this.O2920EjercicioFechaFin=gx.date.nullDate();this.A2919EjercicioEstado="";this.Z2919EjercicioEstado="";this.O2919EjercicioEstado="";this.A2916Ejercicio094="";this.Z2916Ejercicio094="";this.O2916Ejercicio094="";this.A2917Ejercicio095=gx.date.nullDate();this.Z2917Ejercicio095=gx.date.nullDate();this.O2917Ejercicio095=gx.date.nullDate();this.A342EjercicioAnio=0;this.A2918EjercicioDescripcion="";this.A2921EjercicioFechaInicio=gx.date.nullDate();this.A2920EjercicioFechaFin=gx.date.nullDate();this.A2919EjercicioEstado="";this.A2916Ejercicio094="";this.A2917Ejercicio095=gx.date.nullDate();this.Events={e15nn2_client:["ENTER",!0],e16nn2_client:["CANCEL",!0],e11nn1_client:["'DOUPDATE'",!1],e12nn1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("EJERCICIO094","Visible")',ctrl:"EJERCICIO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EJERCICIO095","Visible")',ctrl:"EJERCICIO095",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[]];this.EvtParms.VALID_EJERCICIOANIO=[[],[]];this.Initialize()})