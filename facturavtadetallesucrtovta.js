/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:3.89
*/
gx.evt.autoSkip=!1;gx.define("facturavtadetallesucrtovta",!1,function(){this.ServerClass="facturavtadetallesucrtovta";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Facvtaid=function(){return this.validCliEvt("Valid_Facvtaid",0,function(){try{var n=gx.util.balloon.getNew("FACVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetid=function(){return this.validCliEvt("Valid_Facvtadetid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetentidadid=function(){return this.validCliEvt("Valid_Facvtadetentidadid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucursalid=function(){return this.validCliEvt("Valid_Facvtadetsucursalid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucdepositoid=function(){return this.validCliEvt("Valid_Facvtadetsucdepositoid",0,function(){try{var n=gx.util.balloon.getNew("FACVTADETSUCDEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetsucitem=function(){return this.validSrvEvt("Valid_Facvtadetsucitem",0).then(function(n){return n}.closure(this))};this.Valid_Rtovtaid=function(){return this.validCliEvt("Valid_Rtovtaid",0,function(){try{var n=gx.util.balloon.getNew("RTOVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Rtovtadetid=function(){return this.validSrvEvt("Valid_Rtovtadetid",0).then(function(n){return n}.closure(this))};this.e1148182_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1248182_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77];this.GXLastCtrlId=77;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1348182_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1448182_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1548182_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1648182_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1748182_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETID",gx.O.A222FacVtaDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETENTIDADID",gxz:"Z227FacVtaDetEntidadId",gxold:"O227FacVtaDetEntidadId",gxvar:"A227FacVtaDetEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z227FacVtaDetEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETENTIDADID",gx.O.A227FacVtaDetEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETENTIDADID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCURSALID",gxz:"Z228FacVtaDetSucursalId",gxold:"O228FacVtaDetSucursalId",gxvar:"A228FacVtaDetSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z228FacVtaDetSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCURSALID",gx.O.A228FacVtaDetSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCURSALID",".")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucdepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCDEPOSITOID",gxz:"Z229FacVtaDetSucDepositoId",gxold:"O229FacVtaDetSucDepositoId",gxvar:"A229FacVtaDetSucDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z229FacVtaDetSucDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCDEPOSITOID",gx.O.A229FacVtaDetSucDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCDEPOSITOID",".")},nac:gx.falseFn};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetsucitem,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCITEM",gxz:"Z230FacVtaDetSucItem",gxold:"O230FacVtaDetSucItem",gxvar:"A230FacVtaDetSucItem",ucs:[],op:[],ip:[53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z230FacVtaDetSucItem=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETSUCITEM",gx.O.A230FacVtaDetSucItem,0)},c2v:function(){this.val()!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETSUCITEM",".")},nac:gx.falseFn};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rtovtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAID",gxz:"Z257RtoVtaId",gxold:"O257RtoVtaId",gxvar:"A257RtoVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A257RtoVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z257RtoVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTAID",gx.O.A257RtoVtaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A257RtoVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rtovtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETID",gxz:"Z261RtoVtaDetId",gxold:"O261RtoVtaDetId",gxvar:"A261RtoVtaDetId",ucs:[],op:[68],ip:[68,63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A261RtoVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z261RtoVtaDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTADETID",gx.O.A261RtoVtaDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A261RtoVtaDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTADETID",".")},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETRTOVTACANTIDAD",gxz:"Z2047FacVtaDetRtoVtaCantidad",gxold:"O2047FacVtaDetRtoVtaCantidad",gxvar:"A2047FacVtaDetRtoVtaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2047FacVtaDetRtoVtaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2047FacVtaDetRtoVtaCantidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETRTOVTACANTIDAD",gx.O.A2047FacVtaDetRtoVtaCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2047FacVtaDetRtoVtaCantidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETRTOVTACANTIDAD",".")},nac:gx.falseFn};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"BTN_ENTER",grid:0,evt:"e1148182_client",std:"ENTER"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"BTN_CANCEL",grid:0,evt:"e1248182_client"};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"BTN_DELETE",grid:0,evt:"e1848182_client",std:"DELETE"};this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A222FacVtaDetId=0;this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.A227FacVtaDetEntidadId=0;this.Z227FacVtaDetEntidadId=0;this.O227FacVtaDetEntidadId=0;this.A228FacVtaDetSucursalId=0;this.Z228FacVtaDetSucursalId=0;this.O228FacVtaDetSucursalId=0;this.A229FacVtaDetSucDepositoId=0;this.Z229FacVtaDetSucDepositoId=0;this.O229FacVtaDetSucDepositoId=0;this.A230FacVtaDetSucItem=0;this.Z230FacVtaDetSucItem=0;this.O230FacVtaDetSucItem=0;this.A257RtoVtaId=0;this.Z257RtoVtaId=0;this.O257RtoVtaId=0;this.A261RtoVtaDetId=0;this.Z261RtoVtaDetId=0;this.O261RtoVtaDetId=0;this.A2047FacVtaDetRtoVtaCantidad=0;this.Z2047FacVtaDetRtoVtaCantidad=0;this.O2047FacVtaDetRtoVtaCantidad=0;this.A218FacVtaId=0;this.A222FacVtaDetId=0;this.A227FacVtaDetEntidadId=0;this.A228FacVtaDetSucursalId=0;this.A229FacVtaDetSucDepositoId=0;this.A230FacVtaDetSucItem=0;this.A257RtoVtaId=0;this.A261RtoVtaDetId=0;this.A2047FacVtaDetRtoVtaCantidad=0;this.Events={e1148182_client:["ENTER",!0],e1248182_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_FACVTAID=[[],[]];this.EvtParms.VALID_FACVTADETID=[[],[]];this.EvtParms.VALID_FACVTADETENTIDADID=[[],[]];this.EvtParms.VALID_FACVTADETSUCURSALID=[[],[]];this.EvtParms.VALID_FACVTADETSUCDEPOSITOID=[[],[]];this.EvtParms.VALID_FACVTADETSUCITEM=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"}],[]];this.EvtParms.VALID_RTOVTAID=[[],[]];this.EvtParms.VALID_RTOVTADETID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"},{av:"A257RtoVtaId",fld:"RTOVTAID",pic:"ZZZZZZZ9"},{av:"A261RtoVtaDetId",fld:"RTOVTADETID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A2047FacVtaDetRtoVtaCantidad",fld:"FACVTADETRTOVTACANTIDAD",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z218FacVtaId"},{av:"Z222FacVtaDetId"},{av:"Z227FacVtaDetEntidadId"},{av:"Z228FacVtaDetSucursalId"},{av:"Z229FacVtaDetSucDepositoId"},{av:"Z230FacVtaDetSucItem"},{av:"Z257RtoVtaId"},{av:"Z261RtoVtaDetId"},{av:"Z2047FacVtaDetRtoVtaCantidad"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(facturavtadetallesucrtovta)})