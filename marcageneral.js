/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:39:33.1
*/
gx.evt.autoSkip=!1;gx.define("marcageneral",!0,function(n){this.ServerClass="marcageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Marcaid=function(){return this.validCliEvt("Valid_Marcaid",0,function(){try{var n=gx.util.balloon.getNew("MARCAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11e51_client=function(){return this.clearMessages(),this.call("marca.aspx",["UPD",this.A9MarcaId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12e51_client=function(){return this.clearMessages(),this.call("marca.aspx",["DLT",this.A9MarcaId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15e52_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16e52_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Marcaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCAID",gxz:"Z9MarcaId",gxold:"O9MarcaId",gxvar:"A9MarcaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A9MarcaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z9MarcaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MARCAID",gx.O.A9MarcaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A9MarcaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MARCAID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCANOMBRE",gxz:"Z359MarcaNombre",gxold:"O359MarcaNombre",gxvar:"A359MarcaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A359MarcaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z359MarcaNombre=n)},v2c:function(){gx.fn.setControlValue("MARCANOMBRE",gx.O.A359MarcaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A359MarcaNombre=this.val())},val:function(){return gx.fn.getControlValue("MARCANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCAESTADO",gxz:"Z360MarcaEstado",gxold:"O360MarcaEstado",gxvar:"A360MarcaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A360MarcaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z360MarcaEstado=n)},v2c:function(){gx.fn.setComboBoxValue("MARCAESTADO",gx.O.A360MarcaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A360MarcaEstado=this.val())},val:function(){return gx.fn.getControlValue("MARCAESTADO")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"BTNUPDATE",grid:0,evt:"e11e51_client"};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"BTNDELETE",grid:0,evt:"e12e51_client"};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[35]={id:35,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCA094",gxz:"Z588Marca094",gxold:"O588Marca094",gxvar:"A588Marca094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A588Marca094=n)},v2z:function(n){n!==undefined&&(gx.O.Z588Marca094=n)},v2c:function(){gx.fn.setControlValue("MARCA094",gx.O.A588Marca094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A588Marca094=this.val())},val:function(){return gx.fn.getControlValue("MARCA094")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCA095",gxz:"Z589Marca095",gxold:"O589Marca095",gxvar:"A589Marca095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A589Marca095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z589Marca095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("MARCA095",gx.O.A589Marca095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A589Marca095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("MARCA095")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCA097",gxz:"Z590Marca097",gxold:"O590Marca097",gxvar:"A590Marca097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A590Marca097=n)},v2z:function(n){n!==undefined&&(gx.O.Z590Marca097=n)},v2c:function(){gx.fn.setControlValue("MARCA097",gx.O.A590Marca097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A590Marca097=this.val())},val:function(){return gx.fn.getControlValue("MARCA097")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});t[38]={id:38,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCA098",gxz:"Z591Marca098",gxold:"O591Marca098",gxvar:"A591Marca098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A591Marca098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z591Marca098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("MARCA098",gx.O.A591Marca098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A591Marca098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("MARCA098")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});this.A9MarcaId=0;this.Z9MarcaId=0;this.O9MarcaId=0;this.A359MarcaNombre="";this.Z359MarcaNombre="";this.O359MarcaNombre="";this.A360MarcaEstado="";this.Z360MarcaEstado="";this.O360MarcaEstado="";this.A588Marca094="";this.Z588Marca094="";this.O588Marca094="";this.A589Marca095=gx.date.nullDate();this.Z589Marca095=gx.date.nullDate();this.O589Marca095=gx.date.nullDate();this.A590Marca097="";this.Z590Marca097="";this.O590Marca097="";this.A591Marca098=gx.date.nullDate();this.Z591Marca098=gx.date.nullDate();this.O591Marca098=gx.date.nullDate();this.A9MarcaId=0;this.A359MarcaNombre="";this.A360MarcaEstado="";this.A588Marca094="";this.A589Marca095=gx.date.nullDate();this.A590Marca097="";this.A591Marca098=gx.date.nullDate();this.Events={e15e52_client:["ENTER",!0],e16e52_client:["CANCEL",!0],e11e51_client:["'DOUPDATE'",!1],e12e51_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("MARCA094","Visible")',ctrl:"MARCA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MARCA095","Visible")',ctrl:"MARCA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MARCA097","Visible")',ctrl:"MARCA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MARCA098","Visible")',ctrl:"MARCA098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_MARCAID=[[],[]];this.Initialize()})