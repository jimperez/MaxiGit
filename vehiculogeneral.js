/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:44:41.26
*/
gx.evt.autoSkip=!1;gx.define("vehiculogeneral",!0,function(n){this.ServerClass="vehiculogeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Vehiculoid=function(){return this.validCliEvt("Valid_Vehiculoid",0,function(){try{var n=gx.util.balloon.getNew("VEHICULOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Infoautocodigo=function(){return this.validCliEvt("Valid_Infoautocodigo",0,function(){try{var n=gx.util.balloon.getNew("INFOAUTOCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ei1_client=function(){return this.clearMessages(),this.call("vehiculo.aspx",["UPD",this.A238VehiculoID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12ei1_client=function(){return this.clearMessages(),this.call("vehiculo.aspx",["DLT",this.A238VehiculoID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15ei2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16ei2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65];this.GXLastCtrlId=65;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Vehiculoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOID",gxz:"Z238VehiculoID",gxold:"O238VehiculoID",gxvar:"A238VehiculoID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A238VehiculoID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z238VehiculoID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("VEHICULOID",gx.O.A238VehiculoID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A238VehiculoID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("VEHICULOID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"char",len:7,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULODOMINIO",gxz:"Z1894VehiculoDominio",gxold:"O1894VehiculoDominio",gxvar:"A1894VehiculoDominio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1894VehiculoDominio=n)},v2z:function(n){n!==undefined&&(gx.O.Z1894VehiculoDominio=n)},v2c:function(){gx.fn.setControlValue("VEHICULODOMINIO",gx.O.A1894VehiculoDominio,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1894VehiculoDominio=this.val())},val:function(){return gx.fn.getControlValue("VEHICULODOMINIO")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:17,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOCHASISNRO",gxz:"Z1895VehiculoChasisNro",gxold:"O1895VehiculoChasisNro",gxvar:"A1895VehiculoChasisNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1895VehiculoChasisNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z1895VehiculoChasisNro=n)},v2c:function(){gx.fn.setControlValue("VEHICULOCHASISNRO",gx.O.A1895VehiculoChasisNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1895VehiculoChasisNro=this.val())},val:function(){return gx.fn.getControlValue("VEHICULOCHASISNRO")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"char",len:17,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOMOTORNRO",gxz:"Z1896VehiculoMotorNro",gxold:"O1896VehiculoMotorNro",gxvar:"A1896VehiculoMotorNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1896VehiculoMotorNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z1896VehiculoMotorNro=n)},v2c:function(){gx.fn.setControlValue("VEHICULOMOTORNRO",gx.O.A1896VehiculoMotorNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1896VehiculoMotorNro=this.val())},val:function(){return gx.fn.getControlValue("VEHICULOMOTORNRO")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Infoautocodigo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"INFOAUTOCODIGO",gxz:"Z239InfoAutoCodigo",gxold:"O239InfoAutoCodigo",gxvar:"A239InfoAutoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A239InfoAutoCodigo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z239InfoAutoCodigo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("INFOAUTOCODIGO",gx.O.A239InfoAutoCodigo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A239InfoAutoCodigo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("INFOAUTOCODIGO",".")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"INFOAUTOMARCA",gxz:"Z1904InfoAutoMarca",gxold:"O1904InfoAutoMarca",gxvar:"A1904InfoAutoMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1904InfoAutoMarca=n)},v2z:function(n){n!==undefined&&(gx.O.Z1904InfoAutoMarca=n)},v2c:function(){gx.fn.setControlValue("INFOAUTOMARCA",gx.O.A1904InfoAutoMarca,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1904InfoAutoMarca=this.val())},val:function(){return gx.fn.getControlValue("INFOAUTOMARCA")},nac:gx.falseFn};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"INFOAUTOMODELO",gxz:"Z1905InfoAutoModelo",gxold:"O1905InfoAutoModelo",gxvar:"A1905InfoAutoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1905InfoAutoModelo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1905InfoAutoModelo=n)},v2c:function(){gx.fn.setControlValue("INFOAUTOMODELO",gx.O.A1905InfoAutoModelo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1905InfoAutoModelo=this.val())},val:function(){return gx.fn.getControlValue("INFOAUTOMODELO")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOANIOFABRICACION",gxz:"Z1897VehiculoAnioFabricacion",gxold:"O1897VehiculoAnioFabricacion",gxvar:"A1897VehiculoAnioFabricacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1897VehiculoAnioFabricacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1897VehiculoAnioFabricacion=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("VEHICULOANIOFABRICACION",gx.O.A1897VehiculoAnioFabricacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1897VehiculoAnioFabricacion=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("VEHICULOANIOFABRICACION",".")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOCOLORORIGINAL",gxz:"Z1898VehiculoColorOriginal",gxold:"O1898VehiculoColorOriginal",gxvar:"A1898VehiculoColorOriginal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1898VehiculoColorOriginal=n)},v2z:function(n){n!==undefined&&(gx.O.Z1898VehiculoColorOriginal=n)},v2c:function(){gx.fn.setControlValue("VEHICULOCOLORORIGINAL",gx.O.A1898VehiculoColorOriginal,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1898VehiculoColorOriginal=this.val())},val:function(){return gx.fn.getControlValue("VEHICULOCOLORORIGINAL")},nac:gx.falseFn};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"BTNUPDATE",grid:0,evt:"e11ei1_client"};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"BTNDELETE",grid:0,evt:"e12ei1_client"};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[60]={id:60,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[61]={id:61,lvl:0,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULOCOLORULTIMO",gxz:"Z1899VehiculoColorUltimo",gxold:"O1899VehiculoColorUltimo",gxvar:"A1899VehiculoColorUltimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1899VehiculoColorUltimo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1899VehiculoColorUltimo=n)},v2c:function(){gx.fn.setControlValue("VEHICULOCOLORULTIMO",gx.O.A1899VehiculoColorUltimo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1899VehiculoColorUltimo=this.val())},val:function(){return gx.fn.getControlValue("VEHICULOCOLORULTIMO")},nac:gx.falseFn};t[62]={id:62,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULO094",gxz:"Z1900Vehiculo094",gxold:"O1900Vehiculo094",gxvar:"A1900Vehiculo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1900Vehiculo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1900Vehiculo094=n)},v2c:function(){gx.fn.setControlValue("VEHICULO094",gx.O.A1900Vehiculo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1900Vehiculo094=this.val())},val:function(){return gx.fn.getControlValue("VEHICULO094")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});t[63]={id:63,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULO095",gxz:"Z1901Vehiculo095",gxold:"O1901Vehiculo095",gxvar:"A1901Vehiculo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1901Vehiculo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1901Vehiculo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("VEHICULO095",gx.O.A1901Vehiculo095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1901Vehiculo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("VEHICULO095")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});t[64]={id:64,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULO097",gxz:"Z1902Vehiculo097",gxold:"O1902Vehiculo097",gxvar:"A1902Vehiculo097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1902Vehiculo097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1902Vehiculo097=n)},v2c:function(){gx.fn.setControlValue("VEHICULO097",gx.O.A1902Vehiculo097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1902Vehiculo097=this.val())},val:function(){return gx.fn.getControlValue("VEHICULO097")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});t[65]={id:65,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHICULO098",gxz:"Z1903Vehiculo098",gxold:"O1903Vehiculo098",gxvar:"A1903Vehiculo098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1903Vehiculo098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1903Vehiculo098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("VEHICULO098",gx.O.A1903Vehiculo098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1903Vehiculo098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("VEHICULO098")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});this.A238VehiculoID=0;this.Z238VehiculoID=0;this.O238VehiculoID=0;this.A1894VehiculoDominio="";this.Z1894VehiculoDominio="";this.O1894VehiculoDominio="";this.A1895VehiculoChasisNro="";this.Z1895VehiculoChasisNro="";this.O1895VehiculoChasisNro="";this.A1896VehiculoMotorNro="";this.Z1896VehiculoMotorNro="";this.O1896VehiculoMotorNro="";this.A239InfoAutoCodigo=0;this.Z239InfoAutoCodigo=0;this.O239InfoAutoCodigo=0;this.A1904InfoAutoMarca="";this.Z1904InfoAutoMarca="";this.O1904InfoAutoMarca="";this.A1905InfoAutoModelo="";this.Z1905InfoAutoModelo="";this.O1905InfoAutoModelo="";this.A1897VehiculoAnioFabricacion=0;this.Z1897VehiculoAnioFabricacion=0;this.O1897VehiculoAnioFabricacion=0;this.A1898VehiculoColorOriginal="";this.Z1898VehiculoColorOriginal="";this.O1898VehiculoColorOriginal="";this.A1899VehiculoColorUltimo="";this.Z1899VehiculoColorUltimo="";this.O1899VehiculoColorUltimo="";this.A1900Vehiculo094="";this.Z1900Vehiculo094="";this.O1900Vehiculo094="";this.A1901Vehiculo095=gx.date.nullDate();this.Z1901Vehiculo095=gx.date.nullDate();this.O1901Vehiculo095=gx.date.nullDate();this.A1902Vehiculo097="";this.Z1902Vehiculo097="";this.O1902Vehiculo097="";this.A1903Vehiculo098=gx.date.nullDate();this.Z1903Vehiculo098=gx.date.nullDate();this.O1903Vehiculo098=gx.date.nullDate();this.A238VehiculoID=0;this.A1894VehiculoDominio="";this.A1895VehiculoChasisNro="";this.A1896VehiculoMotorNro="";this.A239InfoAutoCodigo=0;this.A1904InfoAutoMarca="";this.A1905InfoAutoModelo="";this.A1897VehiculoAnioFabricacion=0;this.A1898VehiculoColorOriginal="";this.A1899VehiculoColorUltimo="";this.A1900Vehiculo094="";this.A1901Vehiculo095=gx.date.nullDate();this.A1902Vehiculo097="";this.A1903Vehiculo098=gx.date.nullDate();this.Events={e15ei2_client:["ENTER",!0],e16ei2_client:["CANCEL",!0],e11ei1_client:["'DOUPDATE'",!1],e12ei1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A238VehiculoID",fld:"VEHICULOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("VEHICULOCOLORULTIMO","Visible")',ctrl:"VEHICULOCOLORULTIMO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("VEHICULO094","Visible")',ctrl:"VEHICULO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("VEHICULO095","Visible")',ctrl:"VEHICULO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("VEHICULO097","Visible")',ctrl:"VEHICULO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("VEHICULO098","Visible")',ctrl:"VEHICULO098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A238VehiculoID",fld:"VEHICULOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A238VehiculoID",fld:"VEHICULOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_VEHICULOID=[[],[]];this.EvtParms.VALID_INFOAUTOCODIGO=[[],[]];this.Initialize()})