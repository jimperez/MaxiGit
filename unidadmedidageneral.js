/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:42.45
*/
gx.evt.autoSkip=!1;gx.define("unidadmedidageneral",!0,function(n){this.ServerClass="unidadmedidageneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Umeid=function(){return this.validCliEvt("Valid_Umeid",0,function(){try{var n=gx.util.balloon.getNew("UMEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11wf1_client=function(){return this.clearMessages(),this.call("unidadmedida.aspx",["UPD",this.A13UMeId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12wf1_client=function(){return this.clearMessages(),this.call("unidadmedida.aspx",["DLT",this.A13UMeId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15wf2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16wf2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];this.GXLastCtrlId=43;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Umeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEID",gxz:"Z13UMeId",gxold:"O13UMeId",gxvar:"A13UMeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A13UMeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z13UMeId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("UMEID",gx.O.A13UMeId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A13UMeId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("UMEID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMENOM",gxz:"Z363UMeNom",gxold:"O363UMeNom",gxvar:"A363UMeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A363UMeNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z363UMeNom=n)},v2c:function(){gx.fn.setControlValue("UMENOM",gx.O.A363UMeNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A363UMeNom=this.val())},val:function(){return gx.fn.getControlValue("UMENOM")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:6,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEABR",gxz:"Z864UMeAbr",gxold:"O864UMeAbr",gxvar:"A864UMeAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A864UMeAbr=n)},v2z:function(n){n!==undefined&&(gx.O.Z864UMeAbr=n)},v2c:function(){gx.fn.setControlValue("UMEABR",gx.O.A864UMeAbr,0)},c2v:function(){this.val()!==undefined&&(gx.O.A864UMeAbr=this.val())},val:function(){return gx.fn.getControlValue("UMEABR")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEESTADO",gxz:"Z364UMeEstado",gxold:"O364UMeEstado",gxvar:"A364UMeEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A364UMeEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z364UMeEstado=n)},v2c:function(){gx.fn.setComboBoxValue("UMEESTADO",gx.O.A364UMeEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A364UMeEstado=this.val())},val:function(){return gx.fn.getControlValue("UMEESTADO")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"BTNUPDATE",grid:0,evt:"e11wf1_client"};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"BTNDELETE",grid:0,evt:"e12wf1_client"};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UME094",gxz:"Z865UMe094",gxold:"O865UMe094",gxvar:"A865UMe094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A865UMe094=n)},v2z:function(n){n!==undefined&&(gx.O.Z865UMe094=n)},v2c:function(){gx.fn.setControlValue("UME094",gx.O.A865UMe094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A865UMe094=this.val())},val:function(){return gx.fn.getControlValue("UME094")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});t[41]={id:41,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UME095",gxz:"Z866UMe095",gxold:"O866UMe095",gxvar:"A866UMe095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A866UMe095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z866UMe095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("UME095",gx.O.A866UMe095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A866UMe095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("UME095")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});t[42]={id:42,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UME097",gxz:"Z868UMe097",gxold:"O868UMe097",gxvar:"A868UMe097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A868UMe097=n)},v2z:function(n){n!==undefined&&(gx.O.Z868UMe097=n)},v2c:function(){gx.fn.setControlValue("UME097",gx.O.A868UMe097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A868UMe097=this.val())},val:function(){return gx.fn.getControlValue("UME097")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});t[43]={id:43,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UME098",gxz:"Z869UMe098",gxold:"O869UMe098",gxvar:"A869UMe098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A869UMe098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z869UMe098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("UME098",gx.O.A869UMe098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A869UMe098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("UME098")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});this.A13UMeId=0;this.Z13UMeId=0;this.O13UMeId=0;this.A363UMeNom="";this.Z363UMeNom="";this.O363UMeNom="";this.A864UMeAbr="";this.Z864UMeAbr="";this.O864UMeAbr="";this.A364UMeEstado="";this.Z364UMeEstado="";this.O364UMeEstado="";this.A865UMe094="";this.Z865UMe094="";this.O865UMe094="";this.A866UMe095=gx.date.nullDate();this.Z866UMe095=gx.date.nullDate();this.O866UMe095=gx.date.nullDate();this.A868UMe097="";this.Z868UMe097="";this.O868UMe097="";this.A869UMe098=gx.date.nullDate();this.Z869UMe098=gx.date.nullDate();this.O869UMe098=gx.date.nullDate();this.A13UMeId=0;this.A363UMeNom="";this.A864UMeAbr="";this.A364UMeEstado="";this.A865UMe094="";this.A866UMe095=gx.date.nullDate();this.A868UMe097="";this.A869UMe098=gx.date.nullDate();this.Events={e15wf2_client:["ENTER",!0],e16wf2_client:["CANCEL",!0],e11wf1_client:["'DOUPDATE'",!1],e12wf1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV15Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("UME094","Visible")',ctrl:"UME094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("UME095","Visible")',ctrl:"UME095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("UME097","Visible")',ctrl:"UME097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("UME098","Visible")',ctrl:"UME098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_UMEID=[[],[]];this.Initialize()})