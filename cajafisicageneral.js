/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:18.77
*/
gx.evt.autoSkip=!1;gx.define("cajafisicageneral",!0,function(n){this.ServerClass="cajafisicageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Cajafisicaentidadid=function(){return this.validSrvEvt("Valid_Cajafisicaentidadid",0).then(function(n){return n}.closure(this))};this.Valid_Cajafisicasucursalid=function(){return this.validCliEvt("Valid_Cajafisicasucursalid",0,function(){try{var n=gx.util.balloon.getNew("CAJAFISICASUCURSALID");this.AnyError=0;this.refreshOutputs([{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajafisicaid=function(){return this.validCliEvt("Valid_Cajafisicaid",0,function(){try{var n=gx.util.balloon.getNew("CAJAFISICAID");this.AnyError=0;this.refreshOutputs([{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11d31_client=function(){return this.clearMessages(),this.call("cajafisica.aspx",["UPD",this.A31CajaFisicaEntidadId,this.A32CajaFisicaSucursalId,this.A33CajaFisicaId]),this.refreshOutputs([{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]),gx.$.Deferred().resolve()};this.e12d31_client=function(){return this.clearMessages(),this.call("cajafisica.aspx",["DLT",this.A31CajaFisicaEntidadId,this.A32CajaFisicaSucursalId,this.A33CajaFisicaId]),this.refreshOutputs([{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]),gx.$.Deferred().resolve()};this.e15d32_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16d32_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55];this.GXLastCtrlId=55;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajafisicaentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADID",gxz:"Z31CajaFisicaEntidadId",gxold:"O31CajaFisicaEntidadId",gxvar:"A31CajaFisicaEntidadId",ucs:[],op:[22],ip:[22,14],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z31CajaFisicaEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICAENTIDADID",gx.O.A31CajaFisicaEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICAENTIDADID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADNOMBRE",gxz:"Z1149CajaFisicaEntidadNombre",gxold:"O1149CajaFisicaEntidadNombre",gxvar:"A1149CajaFisicaEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1149CajaFisicaEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1149CajaFisicaEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICAENTIDADNOMBRE",gx.O.A1149CajaFisicaEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1149CajaFisicaEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICAENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(17,function(){});t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajafisicasucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALID",gxz:"Z32CajaFisicaSucursalId",gxold:"O32CajaFisicaSucursalId",gxvar:"A32CajaFisicaSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z32CajaFisicaSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CAJAFISICASUCURSALID",gx.O.A32CajaFisicaSucursalId)},c2v:function(){this.val()!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICASUCURSALID",".")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajafisicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAID",gxz:"Z33CajaFisicaId",gxold:"O33CajaFisicaId",gxvar:"A33CajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z33CajaFisicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICAID",gx.O.A33CajaFisicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICAID",".")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICANOMBRE",gxz:"Z443CajaFisicaNombre",gxold:"O443CajaFisicaNombre",gxvar:"A443CajaFisicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A443CajaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z443CajaFisicaNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICANOMBRE",gx.O.A443CajaFisicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A443CajaFisicaNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAESTADO",gxz:"Z444CajaFisicaEstado",gxold:"O444CajaFisicaEstado",gxvar:"A444CajaFisicaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A444CajaFisicaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z444CajaFisicaEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CAJAFISICAESTADO",gx.O.A444CajaFisicaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A444CajaFisicaEstado=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICAESTADO")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICATIPO",gxz:"Z474CajaFisicaTipo",gxold:"O474CajaFisicaTipo",gxvar:"A474CajaFisicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A474CajaFisicaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z474CajaFisicaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("CAJAFISICATIPO",gx.O.A474CajaFisicaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A474CajaFisicaTipo=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICATIPO")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"BTNUPDATE",grid:0,evt:"e11d31_client"};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"BTNDELETE",grid:0,evt:"e12d31_client"};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[51]={id:51,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALNOMBRE",gxz:"Z1150CajaFisicaSucursalNombre",gxold:"O1150CajaFisicaSucursalNombre",gxvar:"A1150CajaFisicaSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1150CajaFisicaSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICASUCURSALNOMBRE",gx.O.A1150CajaFisicaSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICASUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});t[52]={id:52,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICA094",gxz:"Z475CajaFisica094",gxold:"O475CajaFisica094",gxvar:"A475CajaFisica094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A475CajaFisica094=n)},v2z:function(n){n!==undefined&&(gx.O.Z475CajaFisica094=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICA094",gx.O.A475CajaFisica094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A475CajaFisica094=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICA094")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});t[53]={id:53,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICA095",gxz:"Z476CajaFisica095",gxold:"O476CajaFisica095",gxvar:"A476CajaFisica095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A476CajaFisica095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z476CajaFisica095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICA095",gx.O.A476CajaFisica095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A476CajaFisica095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CAJAFISICA095")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});t[54]={id:54,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICA097",gxz:"Z477CajaFisica097",gxold:"O477CajaFisica097",gxvar:"A477CajaFisica097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A477CajaFisica097=n)},v2z:function(n){n!==undefined&&(gx.O.Z477CajaFisica097=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICA097",gx.O.A477CajaFisica097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A477CajaFisica097=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICA097")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});t[55]={id:55,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICA098",gxz:"Z478CajaFisica098",gxold:"O478CajaFisica098",gxvar:"A478CajaFisica098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A478CajaFisica098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z478CajaFisica098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICA098",gx.O.A478CajaFisica098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A478CajaFisica098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CAJAFISICA098")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});this.A31CajaFisicaEntidadId=0;this.Z31CajaFisicaEntidadId=0;this.O31CajaFisicaEntidadId=0;this.A1149CajaFisicaEntidadNombre="";this.Z1149CajaFisicaEntidadNombre="";this.O1149CajaFisicaEntidadNombre="";this.A32CajaFisicaSucursalId=0;this.Z32CajaFisicaSucursalId=0;this.O32CajaFisicaSucursalId=0;this.A33CajaFisicaId=0;this.Z33CajaFisicaId=0;this.O33CajaFisicaId=0;this.A443CajaFisicaNombre="";this.Z443CajaFisicaNombre="";this.O443CajaFisicaNombre="";this.A444CajaFisicaEstado="";this.Z444CajaFisicaEstado="";this.O444CajaFisicaEstado="";this.A474CajaFisicaTipo="";this.Z474CajaFisicaTipo="";this.O474CajaFisicaTipo="";this.A1150CajaFisicaSucursalNombre="";this.Z1150CajaFisicaSucursalNombre="";this.O1150CajaFisicaSucursalNombre="";this.A475CajaFisica094="";this.Z475CajaFisica094="";this.O475CajaFisica094="";this.A476CajaFisica095=gx.date.nullDate();this.Z476CajaFisica095=gx.date.nullDate();this.O476CajaFisica095=gx.date.nullDate();this.A477CajaFisica097="";this.Z477CajaFisica097="";this.O477CajaFisica097="";this.A478CajaFisica098=gx.date.nullDate();this.Z478CajaFisica098=gx.date.nullDate();this.O478CajaFisica098=gx.date.nullDate();this.A31CajaFisicaEntidadId=0;this.A1149CajaFisicaEntidadNombre="";this.A32CajaFisicaSucursalId=0;this.A33CajaFisicaId=0;this.A443CajaFisicaNombre="";this.A444CajaFisicaEstado="";this.A474CajaFisicaTipo="";this.A1150CajaFisicaSucursalNombre="";this.A475CajaFisica094="";this.A476CajaFisica095=gx.date.nullDate();this.A477CajaFisica097="";this.A478CajaFisica098=gx.date.nullDate();this.Events={e15d32_client:["ENTER",!0],e16d32_client:["CANCEL",!0],e11d31_client:["'DOUPDATE'",!1],e12d31_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A33CajaFisicaId",fld:"CAJAFISICAID",pic:"ZZZ9"},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms.START=[[{av:"AV20Pgmname",fld:"vPGMNAME",pic:""},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms.LOAD=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:'gx.fn.getCtrlProperty("CAJAFISICASUCURSALNOMBRE","Visible")',ctrl:"CAJAFISICASUCURSALNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICA094","Visible")',ctrl:"CAJAFISICA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICA095","Visible")',ctrl:"CAJAFISICA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICA097","Visible")',ctrl:"CAJAFISICA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICA098","Visible")',ctrl:"CAJAFISICA098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A33CajaFisicaId",fld:"CAJAFISICAID",pic:"ZZZ9"},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms["'DODELETE'"]=[[{av:"A33CajaFisicaId",fld:"CAJAFISICAID",pic:"ZZZ9"},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms.VALID_CAJAFISICAENTIDADID=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms.VALID_CAJAFISICASUCURSALID=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.EvtParms.VALID_CAJAFISICAID=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{ctrl:"CAJAFISICASUCURSALID"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"}]];this.Initialize()})