/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:8.45
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtadetalletar",!1,function(){this.ServerClass="presupuestovtadetalletar";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2633PreDetTarImpFinCosto=gx.fn.getDecimalValue("PREDETTARIMPFINCOSTO",".",",");this.A2095PreDetTarCuponId=gx.fn.getIntegerValue("PREDETTARCUPONID",".");this.A2644PreDetTarMarkup=gx.fn.getDecimalValue("PREDETTARMARKUP",".",",");this.A2645PreDetTarPiso=gx.fn.getDecimalValue("PREDETTARPISO",".",",");this.A2646PreDetTarPisoImp=gx.fn.getDecimalValue("PREDETTARPISOIMP",".",",");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validCliEvt("Valid_Preid",0,function(){try{var n=gx.util.balloon.getNew("PREID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Predetid=function(){return this.validSrvEvt("Valid_Predetid",0).then(function(n){return n}.closure(this))};this.Valid_Predettarid=function(){return this.validSrvEvt("Valid_Predettarid",0).then(function(n){return n}.closure(this))};this.e111i66_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e121i66_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,6,7,8,9,15,18,20,23,25,28,30,31,34,36,39,41,44,46,49,51,54,56,59,61,64,65,66,67,68];this.GXLastCtrlId=68;n[2]={id:2,fld:"TABLE1",grid:0};n[5]={id:5,fld:"BTN_FIRST",grid:0,evt:"e131i66_client",std:"FIRST"};n[6]={id:6,fld:"BTN_PREVIOUS",grid:0,evt:"e141i66_client",std:"PREVIOUS"};n[7]={id:7,fld:"BTN_NEXT",grid:0,evt:"e151i66_client",std:"NEXT"};n[8]={id:8,fld:"BTN_LAST",grid:0,evt:"e161i66_client",std:"LAST"};n[9]={id:9,fld:"BTN_SELECT",grid:0,evt:"e171i66_client",std:"SELECT"};n[15]={id:15,fld:"TABLE2",grid:0};n[18]={id:18,fld:"TEXTBLOCK1",format:0,grid:0};n[20]={id:20,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[23]={id:23,fld:"TEXTBLOCK2",format:0,grid:0};n[25]={id:25,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETID",gxz:"Z94PreDetId",gxold:"O94PreDetId",gxvar:"A94PreDetId",ucs:[],op:[],ip:[25,20],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A94PreDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z94PreDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETID",gx.O.A94PreDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A94PreDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETID",".")},nac:gx.falseFn};n[28]={id:28,fld:"TEXTBLOCK3",format:0,grid:0};n[30]={id:30,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predettarid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARID",gxz:"Z99PreDetTarId",gxold:"O99PreDetTarId",gxvar:"A99PreDetTarId",ucs:[],op:[61,56,51,46,41,36],ip:[61,56,51,46,41,36,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A99PreDetTarId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z99PreDetTarId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETTARID",gx.O.A99PreDetTarId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A99PreDetTarId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETTARID",".")},nac:gx.falseFn};n[31]={id:31,fld:"BTN_GET",grid:0,evt:"e181i66_client",std:"GET"};n[34]={id:34,fld:"TEXTBLOCK4",format:0,grid:0};n[36]={id:36,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARCOSTO",gxz:"Z654PreDetTarCosto",gxold:"O654PreDetTarCosto",gxvar:"A654PreDetTarCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A654PreDetTarCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z654PreDetTarCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARCOSTO",gx.O.A654PreDetTarCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A654PreDetTarCosto=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});n[39]={id:39,fld:"TEXTBLOCK5",format:0,grid:0};n[41]={id:41,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARIMPFIN",gxz:"Z655PreDetTarImpFin",gxold:"O655PreDetTarImpFin",gxvar:"A655PreDetTarImpFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A655PreDetTarImpFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z655PreDetTarImpFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARIMPFIN",gx.O.A655PreDetTarImpFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A655PreDetTarImpFin=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARIMPFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[44]={id:44,fld:"TEXTBLOCK6",format:0,grid:0};n[46]={id:46,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARPOR",gxz:"Z656PreDetTarPor",gxold:"O656PreDetTarPor",gxvar:"A656PreDetTarPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A656PreDetTarPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z656PreDetTarPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARPOR",gx.O.A656PreDetTarPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A656PreDetTarPor=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARPOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[49]={id:49,fld:"TEXTBLOCK7",format:0,grid:0};n[51]={id:51,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARNETO",gxz:"Z657PreDetTarNeto",gxold:"O657PreDetTarNeto",gxvar:"A657PreDetTarNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A657PreDetTarNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z657PreDetTarNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARNETO",gx.O.A657PreDetTarNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A657PreDetTarNeto=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARNETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[54]={id:54,fld:"TEXTBLOCK8",format:0,grid:0};n[56]={id:56,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARIVA",gxz:"Z658PreDetTarIVA",gxold:"O658PreDetTarIVA",gxvar:"A658PreDetTarIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A658PreDetTarIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z658PreDetTarIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARIVA",gx.O.A658PreDetTarIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A658PreDetTarIVA=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});n[59]={id:59,fld:"TEXTBLOCK9",format:0,grid:0};n[61]={id:61,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETTARIMP",gxz:"Z659PreDetTarImp",gxold:"O659PreDetTarImp",gxvar:"A659PreDetTarImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A659PreDetTarImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z659PreDetTarImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETTARIMP",gx.O.A659PreDetTarImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A659PreDetTarImp=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETTARIMP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(61,function(){});n[64]={id:64,fld:"BTN_ENTER",grid:0,evt:"e111i66_client",std:"ENTER"};n[65]={id:65,fld:"BTN_CHECK",grid:0,evt:"e191i66_client",std:"CHECK"};n[66]={id:66,fld:"BTN_CANCEL",grid:0,evt:"e121i66_client"};n[67]={id:67,fld:"BTN_DELETE",grid:0,evt:"e201i66_client",std:"DELETE"};n[68]={id:68,fld:"BTN_HELP",grid:0,evt:"e211i66_client"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A94PreDetId=0;this.Z94PreDetId=0;this.O94PreDetId=0;this.A99PreDetTarId=0;this.Z99PreDetTarId=0;this.O99PreDetTarId=0;this.A654PreDetTarCosto=0;this.Z654PreDetTarCosto=0;this.O654PreDetTarCosto=0;this.A655PreDetTarImpFin=0;this.Z655PreDetTarImpFin=0;this.O655PreDetTarImpFin=0;this.A656PreDetTarPor=0;this.Z656PreDetTarPor=0;this.O656PreDetTarPor=0;this.A657PreDetTarNeto=0;this.Z657PreDetTarNeto=0;this.O657PreDetTarNeto=0;this.A658PreDetTarIVA=0;this.Z658PreDetTarIVA=0;this.O658PreDetTarIVA=0;this.A659PreDetTarImp=0;this.Z659PreDetTarImp=0;this.O659PreDetTarImp=0;this.A89PreId=0;this.A94PreDetId=0;this.A99PreDetTarId=0;this.A654PreDetTarCosto=0;this.A655PreDetTarImpFin=0;this.A2633PreDetTarImpFinCosto=0;this.A656PreDetTarPor=0;this.A657PreDetTarNeto=0;this.A658PreDetTarIVA=0;this.A659PreDetTarImp=0;this.A2095PreDetTarCuponId=0;this.A2644PreDetTarMarkup=0;this.A2645PreDetTarPiso=0;this.A2646PreDetTarPisoImp=0;this.Events={e111i66_client:["ENTER",!0],e121i66_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[{av:"A2633PreDetTarImpFinCosto",fld:"PREDETTARIMPFINCOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2095PreDetTarCuponId",fld:"PREDETTARCUPONID",pic:"ZZZZZZZ9"},{av:"A2644PreDetTarMarkup",fld:"PREDETTARMARKUP",pic:"999.99"},{av:"A2645PreDetTarPiso",fld:"PREDETTARPISO",pic:"999.99"},{av:"A2646PreDetTarPisoImp",fld:"PREDETTARPISOIMP",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.VALID_PREID=[[],[]];this.EvtParms.VALID_PREDETID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_PREDETTARID=[[{av:"A2646PreDetTarPisoImp",fld:"PREDETTARPISOIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2645PreDetTarPiso",fld:"PREDETTARPISO",pic:"999.99"},{av:"A2644PreDetTarMarkup",fld:"PREDETTARMARKUP",pic:"999.99"},{av:"A2095PreDetTarCuponId",fld:"PREDETTARCUPONID",pic:"ZZZZZZZ9"},{av:"A2633PreDetTarImpFinCosto",fld:"PREDETTARIMPFINCOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"},{av:"A99PreDetTarId",fld:"PREDETTARID",pic:"Z9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A654PreDetTarCosto",fld:"PREDETTARCOSTO",pic:"999.99"},{av:"A655PreDetTarImpFin",fld:"PREDETTARIMPFIN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2633PreDetTarImpFinCosto",fld:"PREDETTARIMPFINCOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A656PreDetTarPor",fld:"PREDETTARPOR",pic:"999.99"},{av:"A657PreDetTarNeto",fld:"PREDETTARNETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A658PreDetTarIVA",fld:"PREDETTARIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A659PreDetTarImp",fld:"PREDETTARIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2095PreDetTarCuponId",fld:"PREDETTARCUPONID",pic:"ZZZZZZZ9"},{av:"A2644PreDetTarMarkup",fld:"PREDETTARMARKUP",pic:"999.99"},{av:"A2645PreDetTarPiso",fld:"PREDETTARPISO",pic:"999.99"},{av:"A2646PreDetTarPisoImp",fld:"PREDETTARPISOIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z94PreDetId"},{av:"Z99PreDetTarId"},{av:"Z654PreDetTarCosto"},{av:"Z655PreDetTarImpFin"},{av:"Z2633PreDetTarImpFinCosto"},{av:"Z656PreDetTarPor"},{av:"Z657PreDetTarNeto"},{av:"Z658PreDetTarIVA"},{av:"Z659PreDetTarImp"},{av:"Z2095PreDetTarCuponId"},{av:"Z2644PreDetTarMarkup"},{av:"Z2645PreDetTarPiso"},{av:"Z2646PreDetTarPisoImp"},{ctrl:"BTN_GET",prop:"Enabled"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"},{ctrl:"BTN_CHECK",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.CheckCtrl=["BTN_CHECK"];this.setVCMap("A2633PreDetTarImpFinCosto","PREDETTARIMPFINCOSTO",0,"decimal",12,2);this.setVCMap("A2095PreDetTarCuponId","PREDETTARCUPONID",0,"int",8,0);this.setVCMap("A2644PreDetTarMarkup","PREDETTARMARKUP",0,"decimal",6,2);this.setVCMap("A2645PreDetTarPiso","PREDETTARPISO",0,"decimal",6,2);this.setVCMap("A2646PreDetTarPisoImp","PREDETTARPISOIMP",0,"decimal",12,2);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtadetalletar)})