/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:53.29
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtadetallesdofav",!1,function(){this.ServerClass="presupuestovtadetallesdofav";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validCliEvt("Valid_Preid",0,function(){try{var n=gx.util.balloon.getNew("PREID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Predetid=function(){return this.validSrvEvt("Valid_Predetid",0).then(function(n){return n}.closure(this))};this.Valid_Predetsdofavid=function(){return this.validSrvEvt("Valid_Predetsdofavid",0).then(function(n){return n}.closure(this))};this.e1158226_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1258226_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82];this.GXLastCtrlId=82;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1358226_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1458226_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1558226_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1658226_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1758226_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETID",gxz:"Z94PreDetId",gxold:"O94PreDetId",gxvar:"A94PreDetId",ucs:[],op:[],ip:[33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A94PreDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z94PreDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETID",gx.O.A94PreDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A94PreDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predetsdofavid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOFAVID",gxz:"Z303PreDetSdoFavId",gxold:"O303PreDetSdoFavId",gxvar:"A303PreDetSdoFavId",ucs:[],op:[73,68,63,58,53,48,43],ip:[73,68,63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A303PreDetSdoFavId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z303PreDetSdoFavId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETSDOFAVID",gx.O.A303PreDetSdoFavId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A303PreDetSdoFavId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETSDOFAVID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOPOR",gxz:"Z2436PreDetSdoPor",gxold:"O2436PreDetSdoPor",gxvar:"A2436PreDetSdoPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2436PreDetSdoPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2436PreDetSdoPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDOPOR",gx.O.A2436PreDetSdoPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2436PreDetSdoPor=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDOPOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOCOSTO",gxz:"Z2430PreDetSdoCosto",gxold:"O2430PreDetSdoCosto",gxvar:"A2430PreDetSdoCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2430PreDetSdoCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2430PreDetSdoCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDOCOSTO",gx.O.A2430PreDetSdoCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2430PreDetSdoCosto=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDOCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOIMPFIN",gxz:"Z2433PreDetSdoImpFin",gxold:"O2433PreDetSdoImpFin",gxvar:"A2433PreDetSdoImpFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2433PreDetSdoImpFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2433PreDetSdoImpFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDOIMPFIN",gx.O.A2433PreDetSdoImpFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2433PreDetSdoImpFin=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDOIMPFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDONETO",gxz:"Z2435PreDetSdoNeto",gxold:"O2435PreDetSdoNeto",gxvar:"A2435PreDetSdoNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2435PreDetSdoNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2435PreDetSdoNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDONETO",gx.O.A2435PreDetSdoNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2435PreDetSdoNeto=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDONETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOIVA",gxz:"Z2434PreDetSdoIVA",gxold:"O2434PreDetSdoIVA",gxvar:"A2434PreDetSdoIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2434PreDetSdoIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2434PreDetSdoIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDOIVA",gx.O.A2434PreDetSdoIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2434PreDetSdoIVA=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDOIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDOIMP",gxz:"Z2432PreDetSdoImp",gxold:"O2432PreDetSdoImp",gxvar:"A2432PreDetSdoImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2432PreDetSdoImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2432PreDetSdoImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETSDOIMP",gx.O.A2432PreDetSdoImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2432PreDetSdoImp=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETSDOIMP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSDODETID",gxz:"Z2431PreDetSdoDetId",gxold:"O2431PreDetSdoDetId",gxvar:"A2431PreDetSdoDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2431PreDetSdoDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2431PreDetSdoDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETSDODETID",gx.O.A2431PreDetSdoDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2431PreDetSdoDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETSDODETID",".")},nac:gx.falseFn};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"BTN_ENTER",grid:0,evt:"e1158226_client",std:"ENTER"};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"BTN_CANCEL",grid:0,evt:"e1258226_client"};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"BTN_DELETE",grid:0,evt:"e1858226_client",std:"DELETE"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A94PreDetId=0;this.Z94PreDetId=0;this.O94PreDetId=0;this.A303PreDetSdoFavId=0;this.Z303PreDetSdoFavId=0;this.O303PreDetSdoFavId=0;this.A2436PreDetSdoPor=0;this.Z2436PreDetSdoPor=0;this.O2436PreDetSdoPor=0;this.A2430PreDetSdoCosto=0;this.Z2430PreDetSdoCosto=0;this.O2430PreDetSdoCosto=0;this.A2433PreDetSdoImpFin=0;this.Z2433PreDetSdoImpFin=0;this.O2433PreDetSdoImpFin=0;this.A2435PreDetSdoNeto=0;this.Z2435PreDetSdoNeto=0;this.O2435PreDetSdoNeto=0;this.A2434PreDetSdoIVA=0;this.Z2434PreDetSdoIVA=0;this.O2434PreDetSdoIVA=0;this.A2432PreDetSdoImp=0;this.Z2432PreDetSdoImp=0;this.O2432PreDetSdoImp=0;this.A2431PreDetSdoDetId=0;this.Z2431PreDetSdoDetId=0;this.O2431PreDetSdoDetId=0;this.A89PreId=0;this.A94PreDetId=0;this.A303PreDetSdoFavId=0;this.A2436PreDetSdoPor=0;this.A2430PreDetSdoCosto=0;this.A2433PreDetSdoImpFin=0;this.A2435PreDetSdoNeto=0;this.A2434PreDetSdoIVA=0;this.A2432PreDetSdoImp=0;this.A2431PreDetSdoDetId=0;this.Events={e1158226_client:["ENTER",!0],e1258226_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_PREID=[[],[]];this.EvtParms.VALID_PREDETID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_PREDETSDOFAVID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"},{av:"A303PreDetSdoFavId",fld:"PREDETSDOFAVID",pic:"Z9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A2436PreDetSdoPor",fld:"PREDETSDOPOR",pic:"999.99"},{av:"A2430PreDetSdoCosto",fld:"PREDETSDOCOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2433PreDetSdoImpFin",fld:"PREDETSDOIMPFIN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2435PreDetSdoNeto",fld:"PREDETSDONETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2434PreDetSdoIVA",fld:"PREDETSDOIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2432PreDetSdoImp",fld:"PREDETSDOIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2431PreDetSdoDetId",fld:"PREDETSDODETID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z94PreDetId"},{av:"Z303PreDetSdoFavId"},{av:"Z2436PreDetSdoPor"},{av:"Z2430PreDetSdoCosto"},{av:"Z2433PreDetSdoImpFin"},{av:"Z2435PreDetSdoNeto"},{av:"Z2434PreDetSdoIVA"},{av:"Z2432PreDetSdoImp"},{av:"Z2431PreDetSdoDetId"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtadetallesdofav)})