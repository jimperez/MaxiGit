/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:41.16
*/
gx.evt.autoSkip=!1;gx.define("facturavtadetallecre",!1,function(){this.ServerClass="facturavtadetallecre";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Facvtaid=function(){return this.validCliEvt("Valid_Facvtaid",0,function(){try{var n=gx.util.balloon.getNew("FACVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetid=function(){return this.validSrvEvt("Valid_Facvtadetid",0).then(function(n){return n}.closure(this))};this.Valid_Facvtadetcreid=function(){return this.validSrvEvt("Valid_Facvtadetcreid",0).then(function(n){return n}.closure(this))};this.e114u205_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e124u205_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82];this.GXLastCtrlId=82;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e134u205_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e144u205_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e154u205_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e164u205_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e174u205_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETID",gx.O.A222FacVtaDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetcreid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREID",gxz:"Z278FacVtaDetCreId",gxold:"O278FacVtaDetCreId",gxvar:"A278FacVtaDetCreId",ucs:[],op:[73,68,63,58,53,48,43],ip:[73,68,63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A278FacVtaDetCreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z278FacVtaDetCreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETCREID",gx.O.A278FacVtaDetCreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A278FacVtaDetCreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETCREID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREPOR",gxz:"Z2202FacVtaDetCrePor",gxold:"O2202FacVtaDetCrePor",gxvar:"A2202FacVtaDetCrePor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2202FacVtaDetCrePor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2202FacVtaDetCrePor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCREPOR",gx.O.A2202FacVtaDetCrePor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2202FacVtaDetCrePor=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCREPOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCRECOSTO",gxz:"Z2203FacVtaDetCreCosto",gxold:"O2203FacVtaDetCreCosto",gxvar:"A2203FacVtaDetCreCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2203FacVtaDetCreCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2203FacVtaDetCreCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCRECOSTO",gx.O.A2203FacVtaDetCreCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2203FacVtaDetCreCosto=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCRECOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREIMPFIN",gxz:"Z2204FacVtaDetCreImpFin",gxold:"O2204FacVtaDetCreImpFin",gxvar:"A2204FacVtaDetCreImpFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2204FacVtaDetCreImpFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2204FacVtaDetCreImpFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCREIMPFIN",gx.O.A2204FacVtaDetCreImpFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2204FacVtaDetCreImpFin=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCREIMPFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCRENETO",gxz:"Z2205FacVtaDetCreNeto",gxold:"O2205FacVtaDetCreNeto",gxvar:"A2205FacVtaDetCreNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2205FacVtaDetCreNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2205FacVtaDetCreNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCRENETO",gx.O.A2205FacVtaDetCreNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2205FacVtaDetCreNeto=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCRENETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREIVA",gxz:"Z2206FacVtaDetCreIVA",gxold:"O2206FacVtaDetCreIVA",gxvar:"A2206FacVtaDetCreIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2206FacVtaDetCreIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2206FacVtaDetCreIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCREIVA",gx.O.A2206FacVtaDetCreIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2206FacVtaDetCreIVA=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCREIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREIMP",gxz:"Z2207FacVtaDetCreImp",gxold:"O2207FacVtaDetCreImp",gxvar:"A2207FacVtaDetCreImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2207FacVtaDetCreImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2207FacVtaDetCreImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETCREIMP",gx.O.A2207FacVtaDetCreImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2207FacVtaDetCreImp=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETCREIMP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETCREDETID",gxz:"Z2208FacVtaDetCreDetId",gxold:"O2208FacVtaDetCreDetId",gxvar:"A2208FacVtaDetCreDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2208FacVtaDetCreDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2208FacVtaDetCreDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETCREDETID",gx.O.A2208FacVtaDetCreDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2208FacVtaDetCreDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETCREDETID",".")},nac:gx.falseFn};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"BTN_ENTER",grid:0,evt:"e114u205_client",std:"ENTER"};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"BTN_CANCEL",grid:0,evt:"e124u205_client"};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"BTN_DELETE",grid:0,evt:"e184u205_client",std:"DELETE"};this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A222FacVtaDetId=0;this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.A278FacVtaDetCreId=0;this.Z278FacVtaDetCreId=0;this.O278FacVtaDetCreId=0;this.A2202FacVtaDetCrePor=0;this.Z2202FacVtaDetCrePor=0;this.O2202FacVtaDetCrePor=0;this.A2203FacVtaDetCreCosto=0;this.Z2203FacVtaDetCreCosto=0;this.O2203FacVtaDetCreCosto=0;this.A2204FacVtaDetCreImpFin=0;this.Z2204FacVtaDetCreImpFin=0;this.O2204FacVtaDetCreImpFin=0;this.A2205FacVtaDetCreNeto=0;this.Z2205FacVtaDetCreNeto=0;this.O2205FacVtaDetCreNeto=0;this.A2206FacVtaDetCreIVA=0;this.Z2206FacVtaDetCreIVA=0;this.O2206FacVtaDetCreIVA=0;this.A2207FacVtaDetCreImp=0;this.Z2207FacVtaDetCreImp=0;this.O2207FacVtaDetCreImp=0;this.A2208FacVtaDetCreDetId=0;this.Z2208FacVtaDetCreDetId=0;this.O2208FacVtaDetCreDetId=0;this.A218FacVtaId=0;this.A222FacVtaDetId=0;this.A278FacVtaDetCreId=0;this.A2202FacVtaDetCrePor=0;this.A2203FacVtaDetCreCosto=0;this.A2204FacVtaDetCreImpFin=0;this.A2205FacVtaDetCreNeto=0;this.A2206FacVtaDetCreIVA=0;this.A2207FacVtaDetCreImp=0;this.A2208FacVtaDetCreDetId=0;this.Events={e114u205_client:["ENTER",!0],e124u205_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_FACVTAID=[[],[]];this.EvtParms.VALID_FACVTADETID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_FACVTADETCREID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A278FacVtaDetCreId",fld:"FACVTADETCREID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A2202FacVtaDetCrePor",fld:"FACVTADETCREPOR",pic:"999.99"},{av:"A2203FacVtaDetCreCosto",fld:"FACVTADETCRECOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2204FacVtaDetCreImpFin",fld:"FACVTADETCREIMPFIN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2205FacVtaDetCreNeto",fld:"FACVTADETCRENETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2206FacVtaDetCreIVA",fld:"FACVTADETCREIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2207FacVtaDetCreImp",fld:"FACVTADETCREIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2208FacVtaDetCreDetId",fld:"FACVTADETCREDETID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z218FacVtaId"},{av:"Z222FacVtaDetId"},{av:"Z278FacVtaDetCreId"},{av:"Z2202FacVtaDetCrePor"},{av:"Z2203FacVtaDetCreCosto"},{av:"Z2204FacVtaDetCreImpFin"},{av:"Z2205FacVtaDetCreNeto"},{av:"Z2206FacVtaDetCreIVA"},{av:"Z2207FacVtaDetCreImp"},{av:"Z2208FacVtaDetCreDetId"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(facturavtadetallecre)})