/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:56.14
*/
gx.evt.autoSkip=!1;gx.define("personajuridicageneral",!0,function(n){this.ServerClass="personajuridicageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Personajuridicacuil=function(){return this.validCliEvt("Valid_Personajuridicacuil",0,function(){try{var n=gx.util.balloon.getNew("PERSONAJURIDICACUIL");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Naturalezajuridicaid=function(){return this.validCliEvt("Valid_Naturalezajuridicaid",0,function(){try{var n=gx.util.balloon.getNew("NATURALEZAJURIDICAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ct1_client=function(){return this.clearMessages(),this.call("personajuridica.aspx",["UPD",this.A132PersonaJuridicaCuil]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12ct1_client=function(){return this.clearMessages(),this.call("personajuridica.aspx",["DLT",this.A132PersonaJuridicaCuil]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15ct2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16ct2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];this.GXLastCtrlId=50;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personajuridicacuil,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICACUIL",gxz:"Z132PersonaJuridicaCuil",gxold:"O132PersonaJuridicaCuil",gxvar:"A132PersonaJuridicaCuil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A132PersonaJuridicaCuil=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z132PersonaJuridicaCuil=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICACUIL",gx.O.A132PersonaJuridicaCuil,0)},c2v:function(){this.val()!==undefined&&(gx.O.A132PersonaJuridicaCuil=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONAJURIDICACUIL",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICARAZONSOCIAL",gxz:"Z135PersonaJuridicaRazonSocial",gxold:"O135PersonaJuridicaRazonSocial",gxvar:"A135PersonaJuridicaRazonSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A135PersonaJuridicaRazonSocial=n)},v2z:function(n){n!==undefined&&(gx.O.Z135PersonaJuridicaRazonSocial=n)},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICARAZONSOCIAL",gx.O.A135PersonaJuridicaRazonSocial,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A135PersonaJuridicaRazonSocial=this.val())},val:function(){return gx.fn.getControlValue("PERSONAJURIDICARAZONSOCIAL")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICAFANTASIA",gxz:"Z134PersonaJuridicaFantasia",gxold:"O134PersonaJuridicaFantasia",gxvar:"A134PersonaJuridicaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A134PersonaJuridicaFantasia=n)},v2z:function(n){n!==undefined&&(gx.O.Z134PersonaJuridicaFantasia=n)},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICAFANTASIA",gx.O.A134PersonaJuridicaFantasia,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A134PersonaJuridicaFantasia=this.val())},val:function(){return gx.fn.getControlValue("PERSONAJURIDICAFANTASIA")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICAFECHAINICIO",gxz:"Z926PersonaJuridicaFechaInicio",gxold:"O926PersonaJuridicaFechaInicio",gxvar:"A926PersonaJuridicaFechaInicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A926PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z926PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICAFECHAINICIO",gx.O.A926PersonaJuridicaFechaInicio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A926PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONAJURIDICAFECHAINICIO")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICAFECHACIERREEJERCICIO",gxz:"Z927PersonaJuridicaFechaCierreEjercicio",gxold:"O927PersonaJuridicaFechaCierreEjercicio",gxvar:"A927PersonaJuridicaFechaCierreEjercicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A927PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z927PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICAFECHACIERREEJERCICIO",gx.O.A927PersonaJuridicaFechaCierreEjercicio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A927PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONAJURIDICAFECHACIERREEJERCICIO")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"BTNUPDATE",grid:0,evt:"e11ct1_client"};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"BTNDELETE",grid:0,evt:"e12ct1_client"};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[45]={id:45,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Naturalezajuridicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NATURALEZAJURIDICAID",gxz:"Z133NaturalezaJuridicaId",gxold:"O133NaturalezaJuridicaId",gxvar:"A133NaturalezaJuridicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A133NaturalezaJuridicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z133NaturalezaJuridicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NATURALEZAJURIDICAID",gx.O.A133NaturalezaJuridicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A133NaturalezaJuridicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NATURALEZAJURIDICAID",".")},nac:gx.falseFn};t[46]={id:46,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NATURALEZAJURIDICANOMBRE",gxz:"Z1188NaturalezaJuridicaNombre",gxold:"O1188NaturalezaJuridicaNombre",gxvar:"A1188NaturalezaJuridicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1188NaturalezaJuridicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1188NaturalezaJuridicaNombre=n)},v2c:function(){gx.fn.setControlValue("NATURALEZAJURIDICANOMBRE",gx.O.A1188NaturalezaJuridicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1188NaturalezaJuridicaNombre=this.val())},val:function(){return gx.fn.getControlValue("NATURALEZAJURIDICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});t[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICA094",gxz:"Z928PersonaJuridica094",gxold:"O928PersonaJuridica094",gxvar:"A928PersonaJuridica094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A928PersonaJuridica094=n)},v2z:function(n){n!==undefined&&(gx.O.Z928PersonaJuridica094=n)},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICA094",gx.O.A928PersonaJuridica094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A928PersonaJuridica094=this.val())},val:function(){return gx.fn.getControlValue("PERSONAJURIDICA094")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});t[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICA095",gxz:"Z929PersonaJuridica095",gxold:"O929PersonaJuridica095",gxvar:"A929PersonaJuridica095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A929PersonaJuridica095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z929PersonaJuridica095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICA095",gx.O.A929PersonaJuridica095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A929PersonaJuridica095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERSONAJURIDICA095")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});t[49]={id:49,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICA097",gxz:"Z930PersonaJuridica097",gxold:"O930PersonaJuridica097",gxvar:"A930PersonaJuridica097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A930PersonaJuridica097=n)},v2z:function(n){n!==undefined&&(gx.O.Z930PersonaJuridica097=n)},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICA097",gx.O.A930PersonaJuridica097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A930PersonaJuridica097=this.val())},val:function(){return gx.fn.getControlValue("PERSONAJURIDICA097")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});t[50]={id:50,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAJURIDICA098",gxz:"Z931PersonaJuridica098",gxold:"O931PersonaJuridica098",gxvar:"A931PersonaJuridica098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A931PersonaJuridica098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z931PersonaJuridica098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAJURIDICA098",gx.O.A931PersonaJuridica098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A931PersonaJuridica098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERSONAJURIDICA098")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});this.A132PersonaJuridicaCuil=0;this.Z132PersonaJuridicaCuil=0;this.O132PersonaJuridicaCuil=0;this.A135PersonaJuridicaRazonSocial="";this.Z135PersonaJuridicaRazonSocial="";this.O135PersonaJuridicaRazonSocial="";this.A134PersonaJuridicaFantasia="";this.Z134PersonaJuridicaFantasia="";this.O134PersonaJuridicaFantasia="";this.A926PersonaJuridicaFechaInicio=gx.date.nullDate();this.Z926PersonaJuridicaFechaInicio=gx.date.nullDate();this.O926PersonaJuridicaFechaInicio=gx.date.nullDate();this.A927PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.Z927PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.O927PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.A133NaturalezaJuridicaId=0;this.Z133NaturalezaJuridicaId=0;this.O133NaturalezaJuridicaId=0;this.A1188NaturalezaJuridicaNombre="";this.Z1188NaturalezaJuridicaNombre="";this.O1188NaturalezaJuridicaNombre="";this.A928PersonaJuridica094="";this.Z928PersonaJuridica094="";this.O928PersonaJuridica094="";this.A929PersonaJuridica095=gx.date.nullDate();this.Z929PersonaJuridica095=gx.date.nullDate();this.O929PersonaJuridica095=gx.date.nullDate();this.A930PersonaJuridica097="";this.Z930PersonaJuridica097="";this.O930PersonaJuridica097="";this.A931PersonaJuridica098=gx.date.nullDate();this.Z931PersonaJuridica098=gx.date.nullDate();this.O931PersonaJuridica098=gx.date.nullDate();this.A132PersonaJuridicaCuil=0;this.A135PersonaJuridicaRazonSocial="";this.A134PersonaJuridicaFantasia="";this.A926PersonaJuridicaFechaInicio=gx.date.nullDate();this.A927PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.A133NaturalezaJuridicaId=0;this.A1188NaturalezaJuridicaNombre="";this.A928PersonaJuridica094="";this.A929PersonaJuridica095=gx.date.nullDate();this.A930PersonaJuridica097="";this.A931PersonaJuridica098=gx.date.nullDate();this.Events={e15ct2_client:["ENTER",!0],e16ct2_client:["CANCEL",!0],e11ct1_client:["'DOUPDATE'",!1],e12ct1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A132PersonaJuridicaCuil",fld:"PERSONAJURIDICACUIL",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("NATURALEZAJURIDICAID","Visible")',ctrl:"NATURALEZAJURIDICAID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NATURALEZAJURIDICANOMBRE","Visible")',ctrl:"NATURALEZAJURIDICANOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAJURIDICA094","Visible")',ctrl:"PERSONAJURIDICA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAJURIDICA095","Visible")',ctrl:"PERSONAJURIDICA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAJURIDICA097","Visible")',ctrl:"PERSONAJURIDICA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAJURIDICA098","Visible")',ctrl:"PERSONAJURIDICA098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A132PersonaJuridicaCuil",fld:"PERSONAJURIDICACUIL",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A132PersonaJuridicaCuil",fld:"PERSONAJURIDICACUIL",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.VALID_PERSONAJURIDICACUIL=[[],[]];this.EvtParms.VALID_NATURALEZAJURIDICAID=[[],[]];this.Initialize()})