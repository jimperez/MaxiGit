/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:17:18.2
*/
gx.evt.autoSkip=!1;gx.define("articulocodigofabrica",!1,function(){this.ServerClass="articulocodigofabrica";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Artid=function(){return this.validSrvEvt("Valid_Artid",0).then(function(n){return n}.closure(this))};this.Valid_Artcodfabricaid=function(){return this.validSrvEvt("Valid_Artcodfabricaid",0).then(function(n){return n}.closure(this))};this.Valid_Artcodfabrica095=function(){return this.validCliEvt("Valid_Artcodfabrica095",0,function(){try{var n=gx.util.balloon.getNew("ARTCODFABRICA095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A397ArtCodFabrica095)==0||new gx.date.gxdate(this.A397ArtCodFabrica095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fecha de Alta: fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artcodfabrica098=function(){return this.validCliEvt("Valid_Artcodfabrica098",0,function(){try{var n=gx.util.balloon.getNew("ARTCODFABRICA098");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A399ArtCodFabrica098)==0||new gx.date.gxdate(this.A399ArtCodFabrica098).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fecha de Cbio: fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11079_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12079_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e13079_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e14079_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e15079_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e16079_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e17079_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artcodfabricaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICAID",gxz:"Z20ArtCodFabricaId",gxold:"O20ArtCodFabricaId",gxvar:"A20ArtCodFabricaId",ucs:[],op:[63,58,53,48,43,38],ip:[63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A20ArtCodFabricaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z20ArtCodFabricaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTCODFABRICAID",gx.O.A20ArtCodFabricaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A20ArtCodFabricaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTCODFABRICAID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICADESC",gxz:"Z358ArtCodFabricaDesc",gxold:"O358ArtCodFabricaDesc",gxvar:"A358ArtCodFabricaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A358ArtCodFabricaDesc=n)},v2z:function(n){n!==undefined&&(gx.O.Z358ArtCodFabricaDesc=n)},v2c:function(){gx.fn.setControlValue("ARTCODFABRICADESC",gx.O.A358ArtCodFabricaDesc,0)},c2v:function(){this.val()!==undefined&&(gx.O.A358ArtCodFabricaDesc=this.val())},val:function(){return gx.fn.getControlValue("ARTCODFABRICADESC")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICAESTADO",gxz:"Z395ArtCodFabricaEstado",gxold:"O395ArtCodFabricaEstado",gxvar:"A395ArtCodFabricaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A395ArtCodFabricaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z395ArtCodFabricaEstado=n)},v2c:function(){gx.fn.setControlValue("ARTCODFABRICAESTADO",gx.O.A395ArtCodFabricaEstado,0)},c2v:function(){this.val()!==undefined&&(gx.O.A395ArtCodFabricaEstado=this.val())},val:function(){return gx.fn.getControlValue("ARTCODFABRICAESTADO")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICA094",gxz:"Z396ArtCodFabrica094",gxold:"O396ArtCodFabrica094",gxvar:"A396ArtCodFabrica094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A396ArtCodFabrica094=n)},v2z:function(n){n!==undefined&&(gx.O.Z396ArtCodFabrica094=n)},v2c:function(){gx.fn.setControlValue("ARTCODFABRICA094",gx.O.A396ArtCodFabrica094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A396ArtCodFabrica094=this.val())},val:function(){return gx.fn.getControlValue("ARTCODFABRICA094")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artcodfabrica095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICA095",gxz:"Z397ArtCodFabrica095",gxold:"O397ArtCodFabrica095",gxvar:"A397ArtCodFabrica095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[53],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A397ArtCodFabrica095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z397ArtCodFabrica095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTCODFABRICA095",gx.O.A397ArtCodFabrica095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A397ArtCodFabrica095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTCODFABRICA095")},nac:gx.falseFn};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICA097",gxz:"Z398ArtCodFabrica097",gxold:"O398ArtCodFabrica097",gxvar:"A398ArtCodFabrica097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A398ArtCodFabrica097=n)},v2z:function(n){n!==undefined&&(gx.O.Z398ArtCodFabrica097=n)},v2c:function(){gx.fn.setControlValue("ARTCODFABRICA097",gx.O.A398ArtCodFabrica097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A398ArtCodFabrica097=this.val())},val:function(){return gx.fn.getControlValue("ARTCODFABRICA097")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artcodfabrica098,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTCODFABRICA098",gxz:"Z399ArtCodFabrica098",gxold:"O399ArtCodFabrica098",gxvar:"A399ArtCodFabrica098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[63],ip:[63],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A399ArtCodFabrica098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z399ArtCodFabrica098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTCODFABRICA098",gx.O.A399ArtCodFabrica098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A399ArtCodFabrica098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTCODFABRICA098")},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"BTN_ENTER",grid:0,evt:"e11079_client",std:"ENTER"};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTN_CANCEL",grid:0,evt:"e12079_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTN_DELETE",grid:0,evt:"e18079_client",std:"DELETE"};this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A20ArtCodFabricaId=0;this.Z20ArtCodFabricaId=0;this.O20ArtCodFabricaId=0;this.A358ArtCodFabricaDesc="";this.Z358ArtCodFabricaDesc="";this.O358ArtCodFabricaDesc="";this.A395ArtCodFabricaEstado="";this.Z395ArtCodFabricaEstado="";this.O395ArtCodFabricaEstado="";this.A396ArtCodFabrica094="";this.Z396ArtCodFabrica094="";this.O396ArtCodFabrica094="";this.A397ArtCodFabrica095=gx.date.nullDate();this.Z397ArtCodFabrica095=gx.date.nullDate();this.O397ArtCodFabrica095=gx.date.nullDate();this.A398ArtCodFabrica097="";this.Z398ArtCodFabrica097="";this.O398ArtCodFabrica097="";this.A399ArtCodFabrica098=gx.date.nullDate();this.Z399ArtCodFabrica098=gx.date.nullDate();this.O399ArtCodFabrica098=gx.date.nullDate();this.A8ArtId=0;this.A20ArtCodFabricaId=0;this.A358ArtCodFabricaDesc="";this.A395ArtCodFabricaEstado="";this.A396ArtCodFabrica094="";this.A397ArtCodFabrica095=gx.date.nullDate();this.A398ArtCodFabrica097="";this.A399ArtCodFabrica098=gx.date.nullDate();this.Events={e11079_client:["ENTER",!0],e12079_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_ARTID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_ARTCODFABRICAID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A20ArtCodFabricaId",fld:"ARTCODFABRICAID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A358ArtCodFabricaDesc",fld:"ARTCODFABRICADESC",pic:"@!"},{av:"A395ArtCodFabricaEstado",fld:"ARTCODFABRICAESTADO",pic:""},{av:"A396ArtCodFabrica094",fld:"ARTCODFABRICA094",pic:""},{av:"A397ArtCodFabrica095",fld:"ARTCODFABRICA095",pic:"99/99/99 99:99"},{av:"A398ArtCodFabrica097",fld:"ARTCODFABRICA097",pic:""},{av:"A399ArtCodFabrica098",fld:"ARTCODFABRICA098",pic:"99/99/99 99:99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z8ArtId"},{av:"Z20ArtCodFabricaId"},{av:"Z358ArtCodFabricaDesc"},{av:"Z395ArtCodFabricaEstado"},{av:"Z396ArtCodFabrica094"},{av:"Z397ArtCodFabrica095"},{av:"Z398ArtCodFabrica097"},{av:"Z399ArtCodFabrica098"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_ARTCODFABRICA095=[[{av:"A397ArtCodFabrica095",fld:"ARTCODFABRICA095",pic:"99/99/99 99:99"}],[{av:"A397ArtCodFabrica095",fld:"ARTCODFABRICA095",pic:"99/99/99 99:99"}]];this.EvtParms.VALID_ARTCODFABRICA098=[[{av:"A399ArtCodFabrica098",fld:"ARTCODFABRICA098",pic:"99/99/99 99:99"}],[{av:"A399ArtCodFabrica098",fld:"ARTCODFABRICA098",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(articulocodigofabrica)})