/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:27.0
*/
gx.evt.autoSkip=!1;gx.define("monedageneral",!0,function(n){this.ServerClass="monedageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Monedacodigo=function(){return this.validCliEvt("Valid_Monedacodigo",0,function(){try{var n=gx.util.balloon.getNew("MONEDACODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11mm1_client=function(){return this.clearMessages(),this.call("moneda.aspx",["UPD",this.A161MonedaCodigo]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12mm1_client=function(){return this.clearMessages(),this.call("moneda.aspx",["DLT",this.A161MonedaCodigo]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15mm2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16mm2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];this.GXLastCtrlId=41;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Monedacodigo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDACODIGO",gxz:"Z161MonedaCodigo",gxold:"O161MonedaCodigo",gxvar:"A161MonedaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A161MonedaCodigo=n)},v2z:function(n){n!==undefined&&(gx.O.Z161MonedaCodigo=n)},v2c:function(){gx.fn.setControlValue("MONEDACODIGO",gx.O.A161MonedaCodigo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A161MonedaCodigo=this.val())},val:function(){return gx.fn.getControlValue("MONEDACODIGO")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDADENOMINACION",gxz:"Z1078MonedaDenominacion",gxold:"O1078MonedaDenominacion",gxvar:"A1078MonedaDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1078MonedaDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1078MonedaDenominacion=n)},v2c:function(){gx.fn.setControlValue("MONEDADENOMINACION",gx.O.A1078MonedaDenominacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1078MonedaDenominacion=this.val())},val:function(){return gx.fn.getControlValue("MONEDADENOMINACION")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDACAMBIOACTUAL",gxz:"Z1079MonedaCambioActual",gxold:"O1079MonedaCambioActual",gxvar:"A1079MonedaCambioActual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1079MonedaCambioActual=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1079MonedaCambioActual=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("MONEDACAMBIOACTUAL",gx.O.A1079MonedaCambioActual,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1079MonedaCambioActual=this.val())},val:function(){return gx.fn.getDecimalValue("MONEDACAMBIOACTUAL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDASIGNO",gxz:"Z2526MonedaSigno",gxold:"O2526MonedaSigno",gxvar:"A2526MonedaSigno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2526MonedaSigno=n)},v2z:function(n){n!==undefined&&(gx.O.Z2526MonedaSigno=n)},v2c:function(){gx.fn.setControlValue("MONEDASIGNO",gx.O.A2526MonedaSigno,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2526MonedaSigno=this.val())},val:function(){return gx.fn.getControlValue("MONEDASIGNO")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"BTNUPDATE",grid:0,evt:"e11mm1_client"};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"BTNDELETE",grid:0,evt:"e12mm1_client"};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[38]={id:38,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDA094",gxz:"Z1082Moneda094",gxold:"O1082Moneda094",gxvar:"A1082Moneda094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1082Moneda094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1082Moneda094=n)},v2c:function(){gx.fn.setControlValue("MONEDA094",gx.O.A1082Moneda094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1082Moneda094=this.val())},val:function(){return gx.fn.getControlValue("MONEDA094")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});t[39]={id:39,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDA095",gxz:"Z1083Moneda095",gxold:"O1083Moneda095",gxvar:"A1083Moneda095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1083Moneda095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1083Moneda095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("MONEDA095",gx.O.A1083Moneda095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1083Moneda095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("MONEDA095")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDA097",gxz:"Z1084Moneda097",gxold:"O1084Moneda097",gxvar:"A1084Moneda097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1084Moneda097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1084Moneda097=n)},v2c:function(){gx.fn.setControlValue("MONEDA097",gx.O.A1084Moneda097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1084Moneda097=this.val())},val:function(){return gx.fn.getControlValue("MONEDA097")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MONEDA098",gxz:"Z1085Moneda098",gxold:"O1085Moneda098",gxvar:"A1085Moneda098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1085Moneda098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1085Moneda098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("MONEDA098",gx.O.A1085Moneda098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1085Moneda098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("MONEDA098")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});this.A161MonedaCodigo="";this.Z161MonedaCodigo="";this.O161MonedaCodigo="";this.A1078MonedaDenominacion="";this.Z1078MonedaDenominacion="";this.O1078MonedaDenominacion="";this.A1079MonedaCambioActual=0;this.Z1079MonedaCambioActual=0;this.O1079MonedaCambioActual=0;this.A2526MonedaSigno="";this.Z2526MonedaSigno="";this.O2526MonedaSigno="";this.A1082Moneda094="";this.Z1082Moneda094="";this.O1082Moneda094="";this.A1083Moneda095=gx.date.nullDate();this.Z1083Moneda095=gx.date.nullDate();this.O1083Moneda095=gx.date.nullDate();this.A1084Moneda097="";this.Z1084Moneda097="";this.O1084Moneda097="";this.A1085Moneda098=gx.date.nullDate();this.Z1085Moneda098=gx.date.nullDate();this.O1085Moneda098=gx.date.nullDate();this.A161MonedaCodigo="";this.A1078MonedaDenominacion="";this.A1079MonedaCambioActual=0;this.A2526MonedaSigno="";this.A1082Moneda094="";this.A1083Moneda095=gx.date.nullDate();this.A1084Moneda097="";this.A1085Moneda098=gx.date.nullDate();this.Events={e15mm2_client:["ENTER",!0],e16mm2_client:["CANCEL",!0],e11mm1_client:["'DOUPDATE'",!1],e12mm1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A161MonedaCodigo",fld:"MONEDACODIGO",pic:""}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("MONEDA094","Visible")',ctrl:"MONEDA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MONEDA095","Visible")',ctrl:"MONEDA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MONEDA097","Visible")',ctrl:"MONEDA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MONEDA098","Visible")',ctrl:"MONEDA098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A161MonedaCodigo",fld:"MONEDACODIGO",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A161MonedaCodigo",fld:"MONEDACODIGO",pic:""}],[]];this.EvtParms.VALID_MONEDACODIGO=[[],[]];this.Initialize()})