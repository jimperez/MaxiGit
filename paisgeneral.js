/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:53.35
*/
gx.evt.autoSkip=!1;gx.define("paisgeneral",!0,function(n){this.ServerClass="paisgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Paisid=function(){return this.validCliEvt("Valid_Paisid",0,function(){try{var n=gx.util.balloon.getNew("PAISID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11bv1_client=function(){return this.clearMessages(),this.call("pais.aspx",["UPD",this.A80PaisId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12bv1_client=function(){return this.clearMessages(),this.call("pais.aspx",["DLT",this.A80PaisId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15bv2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16bv2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Paisid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISID",gxz:"Z80PaisId",gxold:"O80PaisId",gxvar:"A80PaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A80PaisId=n)},v2z:function(n){n!==undefined&&(gx.O.Z80PaisId=n)},v2c:function(){gx.fn.setControlValue("PAISID",gx.O.A80PaisId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A80PaisId=this.val())},val:function(){return gx.fn.getControlValue("PAISID")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISNOMBRE",gxz:"Z583PaisNombre",gxold:"O583PaisNombre",gxvar:"A583PaisNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A583PaisNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z583PaisNombre=n)},v2c:function(){gx.fn.setControlValue("PAISNOMBRE",gx.O.A583PaisNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A583PaisNombre=this.val())},val:function(){return gx.fn.getControlValue("PAISNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:5,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISPRF",gxz:"Z636PaisPrf",gxold:"O636PaisPrf",gxvar:"A636PaisPrf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A636PaisPrf=n)},v2z:function(n){n!==undefined&&(gx.O.Z636PaisPrf=n)},v2c:function(){gx.fn.setControlValue("PAISPRF",gx.O.A636PaisPrf,0)},c2v:function(){this.val()!==undefined&&(gx.O.A636PaisPrf=this.val())},val:function(){return gx.fn.getControlValue("PAISPRF")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"BTNUPDATE",grid:0,evt:"e11bv1_client"};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"BTNDELETE",grid:0,evt:"e12bv1_client"};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[35]={id:35,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS094",gxz:"Z637Pais094",gxold:"O637Pais094",gxvar:"A637Pais094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A637Pais094=n)},v2z:function(n){n!==undefined&&(gx.O.Z637Pais094=n)},v2c:function(){gx.fn.setControlValue("PAIS094",gx.O.A637Pais094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A637Pais094=this.val())},val:function(){return gx.fn.getControlValue("PAIS094")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});t[36]={id:36,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS095",gxz:"Z638Pais095",gxold:"O638Pais095",gxvar:"A638Pais095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A638Pais095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z638Pais095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PAIS095",gx.O.A638Pais095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A638Pais095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PAIS095")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS097",gxz:"Z639Pais097",gxold:"O639Pais097",gxvar:"A639Pais097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A639Pais097=n)},v2z:function(n){n!==undefined&&(gx.O.Z639Pais097=n)},v2c:function(){gx.fn.setControlValue("PAIS097",gx.O.A639Pais097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A639Pais097=this.val())},val:function(){return gx.fn.getControlValue("PAIS097")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});t[38]={id:38,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS098",gxz:"Z640Pais098",gxold:"O640Pais098",gxvar:"A640Pais098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A640Pais098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z640Pais098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PAIS098",gx.O.A640Pais098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A640Pais098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PAIS098")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});this.A80PaisId="";this.Z80PaisId="";this.O80PaisId="";this.A583PaisNombre="";this.Z583PaisNombre="";this.O583PaisNombre="";this.A636PaisPrf="";this.Z636PaisPrf="";this.O636PaisPrf="";this.A637Pais094="";this.Z637Pais094="";this.O637Pais094="";this.A638Pais095=gx.date.nullDate();this.Z638Pais095=gx.date.nullDate();this.O638Pais095=gx.date.nullDate();this.A639Pais097="";this.Z639Pais097="";this.O639Pais097="";this.A640Pais098=gx.date.nullDate();this.Z640Pais098=gx.date.nullDate();this.O640Pais098=gx.date.nullDate();this.A80PaisId="";this.A583PaisNombre="";this.A636PaisPrf="";this.A637Pais094="";this.A638Pais095=gx.date.nullDate();this.A639Pais097="";this.A640Pais098=gx.date.nullDate();this.Events={e15bv2_client:["ENTER",!0],e16bv2_client:["CANCEL",!0],e11bv1_client:["'DOUPDATE'",!1],e12bv1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A80PaisId",fld:"PAISID",pic:""}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("PAIS094","Visible")',ctrl:"PAIS094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS095","Visible")',ctrl:"PAIS095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS097","Visible")',ctrl:"PAIS097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS098","Visible")',ctrl:"PAIS098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A80PaisId",fld:"PAISID",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A80PaisId",fld:"PAISID",pic:""}],[]];this.EvtParms.VALID_PAISID=[[],[]];this.Initialize()})