/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:43.35
*/
gx.evt.autoSkip=!1;gx.define("periodogeneral",!0,function(n){this.ServerClass="periodogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Ejercicioanio=function(){return this.validCliEvt("Valid_Ejercicioanio",0,function(){try{var n=gx.util.balloon.getNew("EJERCICIOANIO");this.AnyError=0;this.refreshOutputs([{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Periodomes=function(){return this.validCliEvt("Valid_Periodomes",0,function(){try{var n=gx.util.balloon.getNew("PERIODOMES");this.AnyError=0;this.refreshOutputs([{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Periodoanio=function(){return this.validCliEvt("Valid_Periodoanio",0,function(){try{var n=gx.util.balloon.getNew("PERIODOANIO");this.AnyError=0;this.refreshOutputs([{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11np1_client=function(){return this.clearMessages(),this.call("periodo.aspx",["UPD",this.A344PeriodoAnio,this.A343PeriodoMes]),this.refreshOutputs([{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]),gx.$.Deferred().resolve()};this.e12np1_client=function(){return this.clearMessages(),this.call("periodo.aspx",["DLT",this.A344PeriodoAnio,this.A343PeriodoMes]),this.refreshOutputs([{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]),gx.$.Deferred().resolve()};this.e15np2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16np2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];this.GXLastCtrlId=45;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ejercicioanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOANIO",gxz:"Z342EjercicioAnio",gxold:"O342EjercicioAnio",gxvar:"A342EjercicioAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z342EjercicioAnio=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("EJERCICIOANIO",gx.O.A342EjercicioAnio);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EJERCICIOANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Periodomes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOMES",gxz:"Z343PeriodoMes",gxold:"O343PeriodoMes",gxvar:"A343PeriodoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z343PeriodoMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("PERIODOMES",gx.O.A343PeriodoMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERIODOMES",".")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Periodoanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOANIO",gxz:"Z344PeriodoAnio",gxold:"O344PeriodoAnio",gxvar:"A344PeriodoAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z344PeriodoAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERIODOANIO",gx.O.A344PeriodoAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERIODOANIO",".")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODODESCRIPCION",gxz:"Z2924PeriodoDescripcion",gxold:"O2924PeriodoDescripcion",gxvar:"A2924PeriodoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2924PeriodoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2924PeriodoDescripcion=n)},v2c:function(){gx.fn.setControlValue("PERIODODESCRIPCION",gx.O.A2924PeriodoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2924PeriodoDescripcion=this.val())},val:function(){return gx.fn.getControlValue("PERIODODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(28,function(){});t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOESTADO",gxz:"Z2925PeriodoEstado",gxold:"O2925PeriodoEstado",gxvar:"A2925PeriodoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2925PeriodoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2925PeriodoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("PERIODOESTADO",gx.O.A2925PeriodoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2925PeriodoEstado=this.val())},val:function(){return gx.fn.getControlValue("PERIODOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"BTNUPDATE",grid:0,evt:"e11np1_client"};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"BTNDELETE",grid:0,evt:"e12np1_client"};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[43]={id:43,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODO094",gxz:"Z2922Periodo094",gxold:"O2922Periodo094",gxvar:"A2922Periodo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2922Periodo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2922Periodo094=n)},v2c:function(){gx.fn.setControlValue("PERIODO094",gx.O.A2922Periodo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2922Periodo094=this.val())},val:function(){return gx.fn.getControlValue("PERIODO094")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});t[44]={id:44,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODO095",gxz:"Z2923Periodo095",gxold:"O2923Periodo095",gxvar:"A2923Periodo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2923Periodo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2923Periodo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERIODO095",gx.O.A2923Periodo095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2923Periodo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERIODO095")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIODESCRIPCION",gxz:"Z2918EjercicioDescripcion",gxold:"O2918EjercicioDescripcion",gxvar:"A2918EjercicioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2918EjercicioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2918EjercicioDescripcion=n)},v2c:function(){gx.fn.setControlValue("EJERCICIODESCRIPCION",gx.O.A2918EjercicioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2918EjercicioDescripcion=this.val())},val:function(){return gx.fn.getControlValue("EJERCICIODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});this.A342EjercicioAnio=0;this.Z342EjercicioAnio=0;this.O342EjercicioAnio=0;this.A343PeriodoMes=0;this.Z343PeriodoMes=0;this.O343PeriodoMes=0;this.A344PeriodoAnio=0;this.Z344PeriodoAnio=0;this.O344PeriodoAnio=0;this.A2924PeriodoDescripcion="";this.Z2924PeriodoDescripcion="";this.O2924PeriodoDescripcion="";this.A2925PeriodoEstado="";this.Z2925PeriodoEstado="";this.O2925PeriodoEstado="";this.A2922Periodo094="";this.Z2922Periodo094="";this.O2922Periodo094="";this.A2923Periodo095=gx.date.nullDate();this.Z2923Periodo095=gx.date.nullDate();this.O2923Periodo095=gx.date.nullDate();this.A2918EjercicioDescripcion="";this.Z2918EjercicioDescripcion="";this.O2918EjercicioDescripcion="";this.A342EjercicioAnio=0;this.A343PeriodoMes=0;this.A344PeriodoAnio=0;this.A2924PeriodoDescripcion="";this.A2925PeriodoEstado="";this.A2922Periodo094="";this.A2923Periodo095=gx.date.nullDate();this.A2918EjercicioDescripcion="";this.Events={e15np2_client:["ENTER",!0],e16np2_client:["CANCEL",!0],e11np1_client:["'DOUPDATE'",!1],e12np1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{ctrl:"PERIODOMES"},{av:"A343PeriodoMes",fld:"PERIODOMES",pic:"Z9"},{av:"A344PeriodoAnio",fld:"PERIODOANIO",pic:"ZZZZ"},{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms.LOAD=[[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{av:'gx.fn.getCtrlProperty("PERIODO094","Visible")',ctrl:"PERIODO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERIODO095","Visible")',ctrl:"PERIODO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EJERCICIODESCRIPCION","Visible")',ctrl:"EJERCICIODESCRIPCION",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"},{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A344PeriodoAnio",fld:"PERIODOANIO",pic:"ZZZZ"},{ctrl:"PERIODOMES"},{av:"A343PeriodoMes",fld:"PERIODOMES",pic:"Z9"},{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms["'DODELETE'"]=[[{av:"A344PeriodoAnio",fld:"PERIODOANIO",pic:"ZZZZ"},{ctrl:"PERIODOMES"},{av:"A343PeriodoMes",fld:"PERIODOMES",pic:"Z9"},{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms.VALID_EJERCICIOANIO=[[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms.VALID_PERIODOMES=[[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.EvtParms.VALID_PERIODOANIO=[[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}],[{ctrl:"EJERCICIOANIO"},{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ"}]];this.Initialize()})