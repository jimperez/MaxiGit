/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:40:10.65
*/
gx.evt.autoSkip=!1;gx.define("tipodepositogeneral",!0,function(n){this.ServerClass="tipodepositogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Tipodepositoid=function(){return this.validCliEvt("Valid_Tipodepositoid",0,function(){try{var n=gx.util.balloon.getNew("TIPODEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11c11_client=function(){return this.clearMessages(),this.call("tipodeposito.aspx",["UPD",this.A122TipoDepositoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12c11_client=function(){return this.clearMessages(),this.call("tipodeposito.aspx",["DLT",this.A122TipoDepositoId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15c12_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16c12_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipodepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOID",gxz:"Z122TipoDepositoId",gxold:"O122TipoDepositoId",gxvar:"A122TipoDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z122TipoDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITOID",gx.O.A122TipoDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TIPODEPOSITOID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITONOMBRE",gxz:"Z877TipoDepositoNombre",gxold:"O877TipoDepositoNombre",gxvar:"A877TipoDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A877TipoDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z877TipoDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITONOMBRE",gx.O.A877TipoDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A877TipoDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOESTADO",gxz:"Z911TipoDepositoEstado",gxold:"O911TipoDepositoEstado",gxvar:"A911TipoDepositoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A911TipoDepositoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z911TipoDepositoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("TIPODEPOSITOESTADO",gx.O.A911TipoDepositoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A911TipoDepositoEstado=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"BTNUPDATE",grid:0,evt:"e11c11_client"};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"BTNDELETE",grid:0,evt:"e12c11_client"};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[35]={id:35,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO094",gxz:"Z890TipoDeposito094",gxold:"O890TipoDeposito094",gxvar:"A890TipoDeposito094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A890TipoDeposito094=n)},v2z:function(n){n!==undefined&&(gx.O.Z890TipoDeposito094=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO094",gx.O.A890TipoDeposito094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A890TipoDeposito094=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITO094")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO095",gxz:"Z891TipoDeposito095",gxold:"O891TipoDeposito095",gxvar:"A891TipoDeposito095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A891TipoDeposito095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z891TipoDeposito095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO095",gx.O.A891TipoDeposito095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A891TipoDeposito095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TIPODEPOSITO095")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO097",gxz:"Z892TipoDeposito097",gxold:"O892TipoDeposito097",gxvar:"A892TipoDeposito097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A892TipoDeposito097=n)},v2z:function(n){n!==undefined&&(gx.O.Z892TipoDeposito097=n)},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO097",gx.O.A892TipoDeposito097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A892TipoDeposito097=this.val())},val:function(){return gx.fn.getControlValue("TIPODEPOSITO097")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});t[38]={id:38,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITO098",gxz:"Z893TipoDeposito098",gxold:"O893TipoDeposito098",gxvar:"A893TipoDeposito098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A893TipoDeposito098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z893TipoDeposito098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TIPODEPOSITO098",gx.O.A893TipoDeposito098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A893TipoDeposito098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TIPODEPOSITO098")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});this.A122TipoDepositoId=0;this.Z122TipoDepositoId=0;this.O122TipoDepositoId=0;this.A877TipoDepositoNombre="";this.Z877TipoDepositoNombre="";this.O877TipoDepositoNombre="";this.A911TipoDepositoEstado="";this.Z911TipoDepositoEstado="";this.O911TipoDepositoEstado="";this.A890TipoDeposito094="";this.Z890TipoDeposito094="";this.O890TipoDeposito094="";this.A891TipoDeposito095=gx.date.nullDate();this.Z891TipoDeposito095=gx.date.nullDate();this.O891TipoDeposito095=gx.date.nullDate();this.A892TipoDeposito097="";this.Z892TipoDeposito097="";this.O892TipoDeposito097="";this.A893TipoDeposito098=gx.date.nullDate();this.Z893TipoDeposito098=gx.date.nullDate();this.O893TipoDeposito098=gx.date.nullDate();this.A122TipoDepositoId=0;this.A877TipoDepositoNombre="";this.A911TipoDepositoEstado="";this.A890TipoDeposito094="";this.A891TipoDeposito095=gx.date.nullDate();this.A892TipoDeposito097="";this.A893TipoDeposito098=gx.date.nullDate();this.Events={e15c12_client:["ENTER",!0],e16c12_client:["CANCEL",!0],e11c11_client:["'DOUPDATE'",!1],e12c11_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A122TipoDepositoId",fld:"TIPODEPOSITOID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("TIPODEPOSITO094","Visible")',ctrl:"TIPODEPOSITO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO095","Visible")',ctrl:"TIPODEPOSITO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO097","Visible")',ctrl:"TIPODEPOSITO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TIPODEPOSITO098","Visible")',ctrl:"TIPODEPOSITO098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A122TipoDepositoId",fld:"TIPODEPOSITOID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A122TipoDepositoId",fld:"TIPODEPOSITOID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_TIPODEPOSITOID=[[],[]];this.Initialize()})