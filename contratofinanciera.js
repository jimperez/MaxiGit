/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:36.4
*/
gx.evt.autoSkip=!1;gx.define("contratofinanciera",!1,function(){this.ServerClass="contratofinanciera";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Contratofinancieraid=function(){return this.validSrvEvt("Valid_Contratofinancieraid",0).then(function(n){return n}.closure(this))};this.Valid_Financieraid=function(){return this.validCliEvt("Valid_Financieraid",0,function(){try{var n=gx.util.balloon.getNew("FINANCIERAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieraplanid=function(){return this.validSrvEvt("Valid_Financieraplanid",0).then(function(n){return n}.closure(this))};this.e114r202_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e124r202_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];this.GXLastCtrlId=47;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e134r202_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e144r202_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e154r202_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e164r202_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e174r202_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratofinancieraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOFINANCIERAID",gxz:"Z275ContratoFinancieraId",gxold:"O275ContratoFinancieraId",gxvar:"A275ContratoFinancieraId",ucs:[],op:[38,33],ip:[38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A275ContratoFinancieraId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z275ContratoFinancieraId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOFINANCIERAID",gx.O.A275ContratoFinancieraId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A275ContratoFinancieraId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOFINANCIERAID",".")},nac:gx.falseFn};this.declareDomainHdlr(28,function(){});n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Financieraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAID",gxz:"Z159FinancieraId",gxold:"O159FinancieraId",gxvar:"A159FinancieraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z159FinancieraId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FINANCIERAID",gx.O.A159FinancieraId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FINANCIERAID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Financieraplanid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANID",gxz:"Z203FinancieraPlanId",gxold:"O203FinancieraPlanId",gxvar:"A203FinancieraPlanId",ucs:[],op:[],ip:[38,33],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z203FinancieraPlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FINANCIERAPLANID",gx.O.A203FinancieraPlanId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FINANCIERAPLANID",".")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"BTN_ENTER",grid:0,evt:"e114r202_client",std:"ENTER"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"BTN_CANCEL",grid:0,evt:"e124r202_client"};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"BTN_DELETE",grid:0,evt:"e184r202_client",std:"DELETE"};this.A275ContratoFinancieraId=0;this.Z275ContratoFinancieraId=0;this.O275ContratoFinancieraId=0;this.A159FinancieraId=0;this.Z159FinancieraId=0;this.O159FinancieraId=0;this.A203FinancieraPlanId=0;this.Z203FinancieraPlanId=0;this.O203FinancieraPlanId=0;this.A275ContratoFinancieraId=0;this.A159FinancieraId=0;this.A203FinancieraPlanId=0;this.Events={e114r202_client:["ENTER",!0],e124r202_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_CONTRATOFINANCIERAID=[[{av:"A275ContratoFinancieraId",fld:"CONTRATOFINANCIERAID",pic:"ZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A159FinancieraId",fld:"FINANCIERAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A203FinancieraPlanId",fld:"FINANCIERAPLANID",pic:"ZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z275ContratoFinancieraId"},{av:"Z159FinancieraId"},{av:"Z203FinancieraPlanId"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_FINANCIERAID=[[],[]];this.EvtParms.VALID_FINANCIERAPLANID=[[{av:"A159FinancieraId",fld:"FINANCIERAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A203FinancieraPlanId",fld:"FINANCIERAPLANID",pic:"ZZZZZZZ9"}],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(contratofinanciera)})