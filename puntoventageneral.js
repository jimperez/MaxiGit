/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:18.82
*/
gx.evt.autoSkip=!1;gx.define("puntoventageneral",!0,function(n){this.ServerClass="puntoventageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Ptovtanro=function(){return this.validCliEvt("Valid_Ptovtanro",0,function(){try{var n=gx.util.balloon.getNew("PTOVTANRO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11c31_client=function(){return this.clearMessages(),this.call("puntoventa.aspx",["UPD",this.A340PtoVtaNro]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12c31_client=function(){return this.clearMessages(),this.call("puntoventa.aspx",["DLT",this.A340PtoVtaNro]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15c32_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16c32_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66];this.GXLastCtrlId=66;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ptovtanro,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTANRO",gxz:"Z340PtoVtaNro",gxold:"O340PtoVtaNro",gxvar:"A340PtoVtaNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A340PtoVtaNro=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z340PtoVtaNro=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PTOVTANRO",gx.O.A340PtoVtaNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A340PtoVtaNro=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PTOVTANRO",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTADESCRIPCION",gxz:"Z2903PtoVtaDescripcion",gxold:"O2903PtoVtaDescripcion",gxvar:"A2903PtoVtaDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2903PtoVtaDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2903PtoVtaDescripcion=n)},v2c:function(){gx.fn.setControlValue("PTOVTADESCRIPCION",gx.O.A2903PtoVtaDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2903PtoVtaDescripcion=this.val())},val:function(){return gx.fn.getControlValue("PTOVTADESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTADOMICILIO",gxz:"Z3155PtoVtaDomicilio",gxold:"O3155PtoVtaDomicilio",gxvar:"A3155PtoVtaDomicilio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3155PtoVtaDomicilio=n)},v2z:function(n){n!==undefined&&(gx.O.Z3155PtoVtaDomicilio=n)},v2c:function(){gx.fn.setControlValue("PTOVTADOMICILIO",gx.O.A3155PtoVtaDomicilio,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3155PtoVtaDomicilio=this.val())},val:function(){return gx.fn.getControlValue("PTOVTADOMICILIO")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:5,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTAIFPUERTO",gxz:"Z3152PtoVtaIFPuerto",gxold:"O3152PtoVtaIFPuerto",gxvar:"A3152PtoVtaIFPuerto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3152PtoVtaIFPuerto=n)},v2z:function(n){n!==undefined&&(gx.O.Z3152PtoVtaIFPuerto=n)},v2c:function(){gx.fn.setControlValue("PTOVTAIFPUERTO",gx.O.A3152PtoVtaIFPuerto,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3152PtoVtaIFPuerto=this.val())},val:function(){return gx.fn.getControlValue("PTOVTAIFPUERTO")},nac:gx.falseFn};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTAIFNROSERIE",gxz:"Z3153PtoVtaIFNroSerie",gxold:"O3153PtoVtaIFNroSerie",gxvar:"A3153PtoVtaIFNroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3153PtoVtaIFNroSerie=n)},v2z:function(n){n!==undefined&&(gx.O.Z3153PtoVtaIFNroSerie=n)},v2c:function(){gx.fn.setControlValue("PTOVTAIFNROSERIE",gx.O.A3153PtoVtaIFNroSerie,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3153PtoVtaIFNroSerie=this.val())},val:function(){return gx.fn.getControlValue("PTOVTAIFNROSERIE")},nac:gx.falseFn};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTAIFVELOCIDAD",gxz:"Z3154PtoVtaIFVelocidad",gxold:"O3154PtoVtaIFVelocidad",gxvar:"A3154PtoVtaIFVelocidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3154PtoVtaIFVelocidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3154PtoVtaIFVelocidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PTOVTAIFVELOCIDAD",gx.O.A3154PtoVtaIFVelocidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3154PtoVtaIFVelocidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PTOVTAIFVELOCIDAD",".")},nac:gx.falseFn};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTATIPO",gxz:"Z2914PtoVtaTipo",gxold:"O2914PtoVtaTipo",gxvar:"A2914PtoVtaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2914PtoVtaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2914PtoVtaTipo=n)},v2c:function(){gx.fn.setControlValue("PTOVTATIPO",gx.O.A2914PtoVtaTipo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2914PtoVtaTipo=this.val())},val:function(){return gx.fn.getControlValue("PTOVTATIPO")},nac:gx.falseFn};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTAFISCAL",gxz:"Z2915PtoVtaFiscal",gxold:"O2915PtoVtaFiscal",gxvar:"A2915PtoVtaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2915PtoVtaFiscal=n)},v2z:function(n){n!==undefined&&(gx.O.Z2915PtoVtaFiscal=n)},v2c:function(){gx.fn.setComboBoxValue("PTOVTAFISCAL",gx.O.A2915PtoVtaFiscal);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2915PtoVtaFiscal=this.val())},val:function(){return gx.fn.getControlValue("PTOVTAFISCAL")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTAESTADO",gxz:"Z2904PtoVtaEstado",gxold:"O2904PtoVtaEstado",gxvar:"A2904PtoVtaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2904PtoVtaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2904PtoVtaEstado=n)},v2c:function(){gx.fn.setComboBoxValue("PTOVTAESTADO",gx.O.A2904PtoVtaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2904PtoVtaEstado=this.val())},val:function(){return gx.fn.getControlValue("PTOVTAESTADO")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"BTNUPDATE",grid:0,evt:"e11c31_client"};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"BTNDELETE",grid:0,evt:"e12c31_client"};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[65]={id:65,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTA094",gxz:"Z2905PtoVta094",gxold:"O2905PtoVta094",gxvar:"A2905PtoVta094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2905PtoVta094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2905PtoVta094=n)},v2c:function(){gx.fn.setControlValue("PTOVTA094",gx.O.A2905PtoVta094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2905PtoVta094=this.val())},val:function(){return gx.fn.getControlValue("PTOVTA094")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});t[66]={id:66,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PTOVTA095",gxz:"Z2906PtoVta095",gxold:"O2906PtoVta095",gxvar:"A2906PtoVta095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2906PtoVta095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2906PtoVta095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PTOVTA095",gx.O.A2906PtoVta095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2906PtoVta095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PTOVTA095")},nac:gx.falseFn};this.declareDomainHdlr(66,function(){});this.A340PtoVtaNro=0;this.Z340PtoVtaNro=0;this.O340PtoVtaNro=0;this.A2903PtoVtaDescripcion="";this.Z2903PtoVtaDescripcion="";this.O2903PtoVtaDescripcion="";this.A3155PtoVtaDomicilio="";this.Z3155PtoVtaDomicilio="";this.O3155PtoVtaDomicilio="";this.A3152PtoVtaIFPuerto="";this.Z3152PtoVtaIFPuerto="";this.O3152PtoVtaIFPuerto="";this.A3153PtoVtaIFNroSerie="";this.Z3153PtoVtaIFNroSerie="";this.O3153PtoVtaIFNroSerie="";this.A3154PtoVtaIFVelocidad=0;this.Z3154PtoVtaIFVelocidad=0;this.O3154PtoVtaIFVelocidad=0;this.A2914PtoVtaTipo="";this.Z2914PtoVtaTipo="";this.O2914PtoVtaTipo="";this.A2915PtoVtaFiscal="";this.Z2915PtoVtaFiscal="";this.O2915PtoVtaFiscal="";this.A2904PtoVtaEstado="";this.Z2904PtoVtaEstado="";this.O2904PtoVtaEstado="";this.A2905PtoVta094="";this.Z2905PtoVta094="";this.O2905PtoVta094="";this.A2906PtoVta095=gx.date.nullDate();this.Z2906PtoVta095=gx.date.nullDate();this.O2906PtoVta095=gx.date.nullDate();this.A340PtoVtaNro=0;this.A2903PtoVtaDescripcion="";this.A3155PtoVtaDomicilio="";this.A3152PtoVtaIFPuerto="";this.A3153PtoVtaIFNroSerie="";this.A3154PtoVtaIFVelocidad=0;this.A2914PtoVtaTipo="";this.A2915PtoVtaFiscal="";this.A2904PtoVtaEstado="";this.A2905PtoVta094="";this.A2906PtoVta095=gx.date.nullDate();this.Events={e15c32_client:["ENTER",!0],e16c32_client:["CANCEL",!0],e11c31_client:["'DOUPDATE'",!1],e12c31_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A340PtoVtaNro",fld:"PTOVTANRO",pic:"9999"}],[]];this.EvtParms.START=[[{av:"AV20Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("PTOVTA094","Visible")',ctrl:"PTOVTA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PTOVTA095","Visible")',ctrl:"PTOVTA095",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A340PtoVtaNro",fld:"PTOVTANRO",pic:"9999"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A340PtoVtaNro",fld:"PTOVTANRO",pic:"9999"}],[]];this.EvtParms.VALID_PTOVTANRO=[[],[]];this.Initialize()})