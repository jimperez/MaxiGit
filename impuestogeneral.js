/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:58.4
*/
gx.evt.autoSkip=!1;gx.define("impuestogeneral",!0,function(n){this.ServerClass="impuestogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Impuestoid=function(){return this.validCliEvt("Valid_Impuestoid",0,function(){try{var n=gx.util.balloon.getNew("IMPUESTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Impuestoplancuentaid=function(){return this.validCliEvt("Valid_Impuestoplancuentaid",0,function(){try{var n=gx.util.balloon.getNew("IMPUESTOPLANCUENTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11931_client=function(){return this.clearMessages(),this.call("impuesto.aspx",["UPD",this.A77ImpuestoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12931_client=function(){return this.clearMessages(),this.call("impuesto.aspx",["DLT",this.A77ImpuestoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15932_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16932_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];this.GXLastCtrlId=58;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Impuestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOID",gxz:"Z77ImpuestoId",gxold:"O77ImpuestoId",gxvar:"A77ImpuestoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z77ImpuestoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("IMPUESTOID",gx.O.A77ImpuestoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("IMPUESTOID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTONOMBRE",gxz:"Z391ImpuestoNombre",gxold:"O391ImpuestoNombre",gxvar:"A391ImpuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A391ImpuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z391ImpuestoNombre=n)},v2c:function(){gx.fn.setControlValue("IMPUESTONOMBRE",gx.O.A391ImpuestoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A391ImpuestoNombre=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOALICUOTA",gxz:"Z393ImpuestoAlicuota",gxold:"O393ImpuestoAlicuota",gxvar:"A393ImpuestoAlicuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A393ImpuestoAlicuota=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z393ImpuestoAlicuota=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("IMPUESTOALICUOTA",gx.O.A393ImpuestoAlicuota,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A393ImpuestoAlicuota=this.val())},val:function(){return gx.fn.getDecimalValue("IMPUESTOALICUOTA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:6,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOTIPOIVA",gxz:"Z392ImpuestoTipoIVA",gxold:"O392ImpuestoTipoIVA",gxvar:"A392ImpuestoTipoIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A392ImpuestoTipoIVA=n)},v2z:function(n){n!==undefined&&(gx.O.Z392ImpuestoTipoIVA=n)},v2c:function(){gx.fn.setComboBoxValue("IMPUESTOTIPOIVA",gx.O.A392ImpuestoTipoIVA);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A392ImpuestoTipoIVA=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTOTIPOIVA")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOESTADO",gxz:"Z394ImpuestoEstado",gxold:"O394ImpuestoEstado",gxvar:"A394ImpuestoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A394ImpuestoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z394ImpuestoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("IMPUESTOESTADO",gx.O.A394ImpuestoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A394ImpuestoEstado=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Impuestoplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOPLANCUENTAID",gxz:"Z2966ImpuestoPlanCuentaId",gxold:"O2966ImpuestoPlanCuentaId",gxvar:"A2966ImpuestoPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2966ImpuestoPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2966ImpuestoPlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("IMPUESTOPLANCUENTAID",gx.O.A2966ImpuestoPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2966ImpuestoPlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("IMPUESTOPLANCUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOPLANCUENTANOMBRE",gxz:"Z2967ImpuestoPlanCuentaNombre",gxold:"O2967ImpuestoPlanCuentaNombre",gxvar:"A2967ImpuestoPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2967ImpuestoPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2967ImpuestoPlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("IMPUESTOPLANCUENTANOMBRE",gx.O.A2967ImpuestoPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2967ImpuestoPlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTOPLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"BTNUPDATE",grid:0,evt:"e11931_client"};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"BTNDELETE",grid:0,evt:"e12931_client"};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[55]={id:55,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTO094",gxz:"Z579Impuesto094",gxold:"O579Impuesto094",gxvar:"A579Impuesto094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A579Impuesto094=n)},v2z:function(n){n!==undefined&&(gx.O.Z579Impuesto094=n)},v2c:function(){gx.fn.setControlValue("IMPUESTO094",gx.O.A579Impuesto094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A579Impuesto094=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTO094")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});t[56]={id:56,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTO095",gxz:"Z580Impuesto095",gxold:"O580Impuesto095",gxvar:"A580Impuesto095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A580Impuesto095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z580Impuesto095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IMPUESTO095",gx.O.A580Impuesto095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A580Impuesto095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("IMPUESTO095")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});t[57]={id:57,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTO097",gxz:"Z581Impuesto097",gxold:"O581Impuesto097",gxvar:"A581Impuesto097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A581Impuesto097=n)},v2z:function(n){n!==undefined&&(gx.O.Z581Impuesto097=n)},v2c:function(){gx.fn.setControlValue("IMPUESTO097",gx.O.A581Impuesto097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A581Impuesto097=this.val())},val:function(){return gx.fn.getControlValue("IMPUESTO097")},nac:gx.falseFn};this.declareDomainHdlr(57,function(){});t[58]={id:58,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTO098",gxz:"Z582Impuesto098",gxold:"O582Impuesto098",gxvar:"A582Impuesto098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A582Impuesto098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z582Impuesto098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IMPUESTO098",gx.O.A582Impuesto098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A582Impuesto098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("IMPUESTO098")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});this.A77ImpuestoId=0;this.Z77ImpuestoId=0;this.O77ImpuestoId=0;this.A391ImpuestoNombre="";this.Z391ImpuestoNombre="";this.O391ImpuestoNombre="";this.A393ImpuestoAlicuota=0;this.Z393ImpuestoAlicuota=0;this.O393ImpuestoAlicuota=0;this.A392ImpuestoTipoIVA="";this.Z392ImpuestoTipoIVA="";this.O392ImpuestoTipoIVA="";this.A394ImpuestoEstado="";this.Z394ImpuestoEstado="";this.O394ImpuestoEstado="";this.A2966ImpuestoPlanCuentaId=0;this.Z2966ImpuestoPlanCuentaId=0;this.O2966ImpuestoPlanCuentaId=0;this.A2967ImpuestoPlanCuentaNombre="";this.Z2967ImpuestoPlanCuentaNombre="";this.O2967ImpuestoPlanCuentaNombre="";this.A579Impuesto094="";this.Z579Impuesto094="";this.O579Impuesto094="";this.A580Impuesto095=gx.date.nullDate();this.Z580Impuesto095=gx.date.nullDate();this.O580Impuesto095=gx.date.nullDate();this.A581Impuesto097="";this.Z581Impuesto097="";this.O581Impuesto097="";this.A582Impuesto098=gx.date.nullDate();this.Z582Impuesto098=gx.date.nullDate();this.O582Impuesto098=gx.date.nullDate();this.A77ImpuestoId=0;this.A391ImpuestoNombre="";this.A393ImpuestoAlicuota=0;this.A392ImpuestoTipoIVA="";this.A394ImpuestoEstado="";this.A2966ImpuestoPlanCuentaId=0;this.A2967ImpuestoPlanCuentaNombre="";this.A579Impuesto094="";this.A580Impuesto095=gx.date.nullDate();this.A581Impuesto097="";this.A582Impuesto098=gx.date.nullDate();this.Events={e15932_client:["ENTER",!0],e16932_client:["CANCEL",!0],e11931_client:["'DOUPDATE'",!1],e12931_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A77ImpuestoId",fld:"IMPUESTOID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("IMPUESTO094","Visible")',ctrl:"IMPUESTO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IMPUESTO095","Visible")',ctrl:"IMPUESTO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IMPUESTO097","Visible")',ctrl:"IMPUESTO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IMPUESTO098","Visible")',ctrl:"IMPUESTO098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A77ImpuestoId",fld:"IMPUESTOID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A77ImpuestoId",fld:"IMPUESTOID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_IMPUESTOID=[[],[]];this.EvtParms.VALID_IMPUESTOPLANCUENTAID=[[],[]];this.Initialize()})