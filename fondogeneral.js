/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:46.57
*/
gx.evt.autoSkip=!1;gx.define("fondogeneral",!0,function(n){this.ServerClass="fondogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Fondoid=function(){return this.validCliEvt("Valid_Fondoid",0,function(){try{var n=gx.util.balloon.getNew("FONDOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11cb1_client=function(){return this.clearMessages(),this.call("fondo.aspx",["UPD",this.A38FondoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12cb1_client=function(){return this.clearMessages(),this.call("fondo.aspx",["DLT",this.A38FondoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15cb2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16cb2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55];this.GXLastCtrlId=55;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FONDOID",gx.O.A38FondoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FONDOID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(){gx.fn.setControlValue("FONDONOMBRE",gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A345FondoNombre=this.val())},val:function(){return gx.fn.getControlValue("FONDONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPO",gxz:"Z635FondoTipo",gxold:"O635FondoTipo",gxvar:"A635FondoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A635FondoTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z635FondoTipo=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOTIPO",gx.O.A635FondoTipo)},c2v:function(){this.val()!==undefined&&(gx.O.A635FondoTipo=this.val())},val:function(){return gx.fn.getControlValue("FONDOTIPO")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOCUOTAS",gxz:"Z2286FondoCuotas",gxold:"O2286FondoCuotas",gxvar:"A2286FondoCuotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2286FondoCuotas=n)},v2z:function(n){n!==undefined&&(gx.O.Z2286FondoCuotas=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOCUOTAS",gx.O.A2286FondoCuotas);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2286FondoCuotas=this.val())},val:function(){return gx.fn.getControlValue("FONDOCUOTAS")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOUSABLE",gxz:"Z2322FondoUsable",gxold:"O2322FondoUsable",gxvar:"A2322FondoUsable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2322FondoUsable=n)},v2z:function(n){n!==undefined&&(gx.O.Z2322FondoUsable=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOUSABLE",gx.O.A2322FondoUsable);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2322FondoUsable=this.val())},val:function(){return gx.fn.getControlValue("FONDOUSABLE")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOESTADO",gxz:"Z346FondoEstado",gxold:"O346FondoEstado",gxvar:"A346FondoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A346FondoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z346FondoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOESTADO",gx.O.A346FondoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A346FondoEstado=this.val())},val:function(){return gx.fn.getControlValue("FONDOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"svchar",len:256,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOOBSERVACION",gxz:"Z871FondoObservacion",gxold:"O871FondoObservacion",gxvar:"A871FondoObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A871FondoObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z871FondoObservacion=n)},v2c:function(){gx.fn.setControlValue("FONDOOBSERVACION",gx.O.A871FondoObservacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A871FondoObservacion=this.val())},val:function(){return gx.fn.getControlValue("FONDOOBSERVACION")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"BTNUPDATE",grid:0,evt:"e11cb1_client"};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"BTNDELETE",grid:0,evt:"e12cb1_client"};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[52]={id:52,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO094",gxz:"Z872Fondo094",gxold:"O872Fondo094",gxvar:"A872Fondo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A872Fondo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z872Fondo094=n)},v2c:function(){gx.fn.setControlValue("FONDO094",gx.O.A872Fondo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A872Fondo094=this.val())},val:function(){return gx.fn.getControlValue("FONDO094")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});t[53]={id:53,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO095",gxz:"Z873Fondo095",gxold:"O873Fondo095",gxvar:"A873Fondo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A873Fondo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z873Fondo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("FONDO095",gx.O.A873Fondo095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A873Fondo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("FONDO095")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});t[54]={id:54,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO097",gxz:"Z874Fondo097",gxold:"O874Fondo097",gxvar:"A874Fondo097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A874Fondo097=n)},v2z:function(n){n!==undefined&&(gx.O.Z874Fondo097=n)},v2c:function(){gx.fn.setControlValue("FONDO097",gx.O.A874Fondo097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A874Fondo097=this.val())},val:function(){return gx.fn.getControlValue("FONDO097")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO098",gxz:"Z875Fondo098",gxold:"O875Fondo098",gxvar:"A875Fondo098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A875Fondo098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z875Fondo098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("FONDO098",gx.O.A875Fondo098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A875Fondo098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("FONDO098")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});this.A38FondoId=0;this.Z38FondoId=0;this.O38FondoId=0;this.A345FondoNombre="";this.Z345FondoNombre="";this.O345FondoNombre="";this.A635FondoTipo="";this.Z635FondoTipo="";this.O635FondoTipo="";this.A2286FondoCuotas="";this.Z2286FondoCuotas="";this.O2286FondoCuotas="";this.A2322FondoUsable="";this.Z2322FondoUsable="";this.O2322FondoUsable="";this.A346FondoEstado="";this.Z346FondoEstado="";this.O346FondoEstado="";this.A871FondoObservacion="";this.Z871FondoObservacion="";this.O871FondoObservacion="";this.A872Fondo094="";this.Z872Fondo094="";this.O872Fondo094="";this.A873Fondo095=gx.date.nullDate();this.Z873Fondo095=gx.date.nullDate();this.O873Fondo095=gx.date.nullDate();this.A874Fondo097="";this.Z874Fondo097="";this.O874Fondo097="";this.A875Fondo098=gx.date.nullDate();this.Z875Fondo098=gx.date.nullDate();this.O875Fondo098=gx.date.nullDate();this.A38FondoId=0;this.A345FondoNombre="";this.A635FondoTipo="";this.A2286FondoCuotas="";this.A2322FondoUsable="";this.A346FondoEstado="";this.A871FondoObservacion="";this.A872Fondo094="";this.A873Fondo095=gx.date.nullDate();this.A874Fondo097="";this.A875Fondo098=gx.date.nullDate();this.Events={e15cb2_client:["ENTER",!0],e16cb2_client:["CANCEL",!0],e11cb1_client:["'DOUPDATE'",!1],e12cb1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("FONDO094","Visible")',ctrl:"FONDO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO095","Visible")',ctrl:"FONDO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO097","Visible")',ctrl:"FONDO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO098","Visible")',ctrl:"FONDO098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_FONDOID=[[],[]];this.Initialize()})