/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:47.85
*/
gx.evt.autoSkip=!1;gx.define("menuesgeneral",!0,function(n){this.ServerClass="menuesgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Menuid=function(){return this.validCliEvt("Valid_Menuid",0,function(){try{var n=gx.util.balloon.getNew("MENUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11hp1_client=function(){return this.clearMessages(),this.call("menues.aspx",["UPD",this.A154MenuID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12hp1_client=function(){return this.clearMessages(),this.call("menues.aspx",["DLT",this.A154MenuID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15hp2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16hp2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];this.GXLastCtrlId=46;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUID",gxz:"Z154MenuID",gxold:"O154MenuID",gxvar:"A154MenuID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A154MenuID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z154MenuID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MENUID",gx.O.A154MenuID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A154MenuID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MENUID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUTITULO",gxz:"Z982MenuTitulo",gxold:"O982MenuTitulo",gxvar:"A982MenuTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A982MenuTitulo=n)},v2z:function(n){n!==undefined&&(gx.O.Z982MenuTitulo=n)},v2c:function(){gx.fn.setControlValue("MENUTITULO",gx.O.A982MenuTitulo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A982MenuTitulo=this.val())},val:function(){return gx.fn.getControlValue("MENUTITULO")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUDES",gxz:"Z981MenuDes",gxold:"O981MenuDes",gxvar:"A981MenuDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A981MenuDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z981MenuDes=n)},v2c:function(){gx.fn.setControlValue("MENUDES",gx.O.A981MenuDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A981MenuDes=this.val())},val:function(){return gx.fn.getControlValue("MENUDES")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUURL",gxz:"Z983MenuURL",gxold:"O983MenuURL",gxvar:"A983MenuURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A983MenuURL=n)},v2z:function(n){n!==undefined&&(gx.O.Z983MenuURL=n)},v2c:function(){gx.fn.setControlValue("MENUURL",gx.O.A983MenuURL,0)},c2v:function(){this.val()!==undefined&&(gx.O.A983MenuURL=this.val())},val:function(){return gx.fn.getControlValue("MENUURL")},nac:gx.falseFn};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUORDEN",gxz:"Z2376MenuOrden",gxold:"O2376MenuOrden",gxvar:"A2376MenuOrden",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2376MenuOrden=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2376MenuOrden=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MENUORDEN",gx.O.A2376MenuOrden,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2376MenuOrden=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MENUORDEN",".")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUPADRE",gxz:"Z3094MenuPadre",gxold:"O3094MenuPadre",gxvar:"A3094MenuPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3094MenuPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3094MenuPadre=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MENUPADRE",gx.O.A3094MenuPadre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3094MenuPadre=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MENUPADRE",".")},nac:gx.falseFn};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"BTNUPDATE",grid:0,evt:"e11hp1_client"};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"BTNDELETE",grid:0,evt:"e12hp1_client"};this.A154MenuID=0;this.Z154MenuID=0;this.O154MenuID=0;this.A982MenuTitulo="";this.Z982MenuTitulo="";this.O982MenuTitulo="";this.A981MenuDes="";this.Z981MenuDes="";this.O981MenuDes="";this.A983MenuURL="";this.Z983MenuURL="";this.O983MenuURL="";this.A2376MenuOrden=0;this.Z2376MenuOrden=0;this.O2376MenuOrden=0;this.A3094MenuPadre=0;this.Z3094MenuPadre=0;this.O3094MenuPadre=0;this.A154MenuID=0;this.A982MenuTitulo="";this.A981MenuDes="";this.A983MenuURL="";this.A2376MenuOrden=0;this.A3094MenuPadre=0;this.Events={e15hp2_client:["ENTER",!0],e16hp2_client:["CANCEL",!0],e11hp1_client:["'DOUPDATE'",!1],e12hp1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_MENUID=[[],[]];this.Initialize()})