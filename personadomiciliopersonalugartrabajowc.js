/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:39.15
*/
gx.evt.autoSkip=!1;gx.define("personadomiciliopersonalugartrabajowc",!0,function(n){this.ServerClass="personadomiciliopersonalugartrabajowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Personalugartrabajoid=function(){return this.validCliEvt("Valid_Personalugartrabajoid",0,function(){try{var n=gx.util.balloon.getNew("PERSONALUGARTRABAJOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personalugdetrab095=function(){return this.validCliEvt("Valid_Personalugdetrab095",0,function(){try{var n=gx.util.balloon.getNew("PERSONALUGDETRAB095");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personasectorempleocodigo=function(){return this.validCliEvt("Valid_Personasectorempleocodigo",0,function(){try{var n=gx.util.balloon.getNew("PERSONASECTOREMPLEOCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personatipoactividadcodigo=function(){return this.validCliEvt("Valid_Personatipoactividadcodigo",0,function(){try{var n=gx.util.balloon.getNew("PERSONATIPOACTIVIDADCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Empleadorid=function(){return this.validCliEvt("Valid_Empleadorid",0,function(){try{var n=gx.util.balloon.getNew("EMPLEADORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tipoactividadid=function(){return this.validCliEvt("Valid_Tipoactividadid",0,function(){try{var n=gx.util.balloon.getNew("TIPOACTIVIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11d11_client=function(){return this.clearMessages(),this.call("personalugartrabajo.aspx",["UPD",this.A140PersonaLugarTrabajoId,this.A141PersonaLugDeTrab095]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12d11_client=function(){return this.clearMessages(),this.call("personalugartrabajo.aspx",["DLT",this.A140PersonaLugarTrabajoId,this.A141PersonaLugDeTrab095]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15d12_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16d12_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110];this.GXLastCtrlId=110;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personalugartrabajoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGARTRABAJOID",gxz:"Z140PersonaLugarTrabajoId",gxold:"O140PersonaLugarTrabajoId",gxvar:"A140PersonaLugarTrabajoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A140PersonaLugarTrabajoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z140PersonaLugarTrabajoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGARTRABAJOID",gx.O.A140PersonaLugarTrabajoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A140PersonaLugarTrabajoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONALUGARTRABAJOID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personalugdetrab095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRAB095",gxz:"Z141PersonaLugDeTrab095",gxold:"O141PersonaLugDeTrab095",gxvar:"A141PersonaLugDeTrab095",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A141PersonaLugDeTrab095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z141PersonaLugDeTrab095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRAB095",gx.O.A141PersonaLugDeTrab095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A141PersonaLugDeTrab095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONALUGDETRAB095")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personasectorempleocodigo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONASECTOREMPLEOCODIGO",gxz:"Z146PersonaSectorEmpleoCodigo",gxold:"O146PersonaSectorEmpleoCodigo",gxvar:"A146PersonaSectorEmpleoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A146PersonaSectorEmpleoCodigo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z146PersonaSectorEmpleoCodigo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONASECTOREMPLEOCODIGO",gx.O.A146PersonaSectorEmpleoCodigo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A146PersonaSectorEmpleoCodigo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONASECTOREMPLEOCODIGO",".")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONASECTOREMPLEODESCRIPCION",gxz:"Z1222PersonaSectorEmpleoDescripcion",gxold:"O1222PersonaSectorEmpleoDescripcion",gxvar:"A1222PersonaSectorEmpleoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1222PersonaSectorEmpleoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1222PersonaSectorEmpleoDescripcion=n)},v2c:function(){gx.fn.setControlValue("PERSONASECTOREMPLEODESCRIPCION",gx.O.A1222PersonaSectorEmpleoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1222PersonaSectorEmpleoDescripcion=this.val())},val:function(){return gx.fn.getControlValue("PERSONASECTOREMPLEODESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personatipoactividadcodigo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATIPOACTIVIDADCODIGO",gxz:"Z145PersonaTipoActividadCodigo",gxold:"O145PersonaTipoActividadCodigo",gxvar:"A145PersonaTipoActividadCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A145PersonaTipoActividadCodigo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z145PersonaTipoActividadCodigo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONATIPOACTIVIDADCODIGO",gx.O.A145PersonaTipoActividadCodigo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A145PersonaTipoActividadCodigo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONATIPOACTIVIDADCODIGO",".")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATIPOACTIVIDADDESCRIPCION",gxz:"Z1224PersonaTipoActividadDescripcion",gxold:"O1224PersonaTipoActividadDescripcion",gxvar:"A1224PersonaTipoActividadDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1224PersonaTipoActividadDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1224PersonaTipoActividadDescripcion=n)},v2c:function(){gx.fn.setControlValue("PERSONATIPOACTIVIDADDESCRIPCION",gx.O.A1224PersonaTipoActividadDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1224PersonaTipoActividadDescripcion=this.val())},val:function(){return gx.fn.getControlValue("PERSONATIPOACTIVIDADDESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATIPOACTIVIDADSECTOREMPLEOCODIGO",gxz:"Z1225PersonaTipoActividadSectorEmpleoCodigo",gxold:"O1225PersonaTipoActividadSectorEmpleoCodigo",gxvar:"A1225PersonaTipoActividadSectorEmpleoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1225PersonaTipoActividadSectorEmpleoCodigo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1225PersonaTipoActividadSectorEmpleoCodigo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONATIPOACTIVIDADSECTOREMPLEOCODIGO",gx.O.A1225PersonaTipoActividadSectorEmpleoCodigo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1225PersonaTipoActividadSectorEmpleoCodigo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONATIPOACTIVIDADSECTOREMPLEOCODIGO",".")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empleadorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADORID",gxz:"Z142EmpleadorId",gxold:"O142EmpleadorId",gxvar:"A142EmpleadorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A142EmpleadorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z142EmpleadorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMPLEADORID",gx.O.A142EmpleadorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A142EmpleadorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMPLEADORID",".")},nac:gx.falseFn};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADORNOMBRE",gxz:"Z1180EmpleadorNombre",gxold:"O1180EmpleadorNombre",gxvar:"A1180EmpleadorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1180EmpleadorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1180EmpleadorNombre=n)},v2c:function(){gx.fn.setControlValue("EMPLEADORNOMBRE",gx.O.A1180EmpleadorNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1180EmpleadorNombre=this.val())},val:function(){return gx.fn.getControlValue("EMPLEADORNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipoactividadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPOACTIVIDADID",gxz:"Z171TipoActividadId",gxold:"O171TipoActividadId",gxvar:"A171TipoActividadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A171TipoActividadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z171TipoActividadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TIPOACTIVIDADID",gx.O.A171TipoActividadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A171TipoActividadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TIPOACTIVIDADID",".")},nac:gx.falseFn};t[55]={id:55,fld:"",grid:0};t[56]={id:56,fld:"",grid:0};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECTOREMPLEOID",gxz:"Z179SectorEmpleoId",gxold:"O179SectorEmpleoId",gxvar:"A179SectorEmpleoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A179SectorEmpleoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z179SectorEmpleoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SECTOREMPLEOID",gx.O.A179SectorEmpleoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A179SectorEmpleoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SECTOREMPLEOID",".")},nac:gx.falseFn};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPORELLABORALID",gxz:"Z144TipoRelLaboralId",gxold:"O144TipoRelLaboralId",gxvar:"A144TipoRelLaboralId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A144TipoRelLaboralId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z144TipoRelLaboralId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TIPORELLABORALID",gx.O.A144TipoRelLaboralId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A144TipoRelLaboralId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TIPORELLABORALID",".")},nac:gx.falseFn};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABNOMBRE",gxz:"Z147PersonaLugDeTrabNombre",gxold:"O147PersonaLugDeTrabNombre",gxvar:"A147PersonaLugDeTrabNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A147PersonaLugDeTrabNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z147PersonaLugDeTrabNombre=n)},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABNOMBRE",gx.O.A147PersonaLugDeTrabNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A147PersonaLugDeTrabNombre=this.val())},val:function(){return gx.fn.getControlValue("PERSONALUGDETRABNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});t[69]={id:69,fld:"",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[72]={id:72,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABFCHINGRESO",gxz:"Z968PersonaLugDeTrabFchIngreso",gxold:"O968PersonaLugDeTrabFchIngreso",gxvar:"A968PersonaLugDeTrabFchIngreso",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A968PersonaLugDeTrabFchIngreso=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z968PersonaLugDeTrabFchIngreso=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABFCHINGRESO",gx.O.A968PersonaLugDeTrabFchIngreso,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A968PersonaLugDeTrabFchIngreso=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONALUGDETRABFCHINGRESO")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});t[73]={id:73,fld:"",grid:0};t[74]={id:74,fld:"",grid:0};t[75]={id:75,fld:"",grid:0};t[76]={id:76,fld:"",grid:0};t[77]={id:77,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABCARGO",gxz:"Z969PersonaLugDeTrabCargo",gxold:"O969PersonaLugDeTrabCargo",gxvar:"A969PersonaLugDeTrabCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A969PersonaLugDeTrabCargo=n)},v2z:function(n){n!==undefined&&(gx.O.Z969PersonaLugDeTrabCargo=n)},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABCARGO",gx.O.A969PersonaLugDeTrabCargo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A969PersonaLugDeTrabCargo=this.val())},val:function(){return gx.fn.getControlValue("PERSONALUGDETRABCARGO")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});t[78]={id:78,fld:"",grid:0};t[79]={id:79,fld:"",grid:0};t[80]={id:80,fld:"",grid:0};t[81]={id:81,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABINGMENSUAL",gxz:"Z970PersonaLugDeTrabIngMensual",gxold:"O970PersonaLugDeTrabIngMensual",gxvar:"A970PersonaLugDeTrabIngMensual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A970PersonaLugDeTrabIngMensual=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z970PersonaLugDeTrabIngMensual=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PERSONALUGDETRABINGMENSUAL",gx.O.A970PersonaLugDeTrabIngMensual,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A970PersonaLugDeTrabIngMensual=this.val())},val:function(){return gx.fn.getDecimalValue("PERSONALUGDETRABINGMENSUAL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});t[82]={id:82,fld:"",grid:0};t[83]={id:83,fld:"",grid:0};t[84]={id:84,fld:"",grid:0};t[85]={id:85,fld:"",grid:0};t[86]={id:86,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABCODDEAREA",gxz:"Z1201PersonaLugDeTrabCodDeArea",gxold:"O1201PersonaLugDeTrabCodDeArea",gxvar:"A1201PersonaLugDeTrabCodDeArea",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1201PersonaLugDeTrabCodDeArea=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1201PersonaLugDeTrabCodDeArea=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABCODDEAREA",gx.O.A1201PersonaLugDeTrabCodDeArea,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1201PersonaLugDeTrabCodDeArea=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONALUGDETRABCODDEAREA",".")},nac:gx.falseFn};t[87]={id:87,fld:"",grid:0};t[88]={id:88,fld:"",grid:0};t[89]={id:89,fld:"",grid:0};t[90]={id:90,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABTELEFONO",gxz:"Z971PersonaLugDeTrabTelefono",gxold:"O971PersonaLugDeTrabTelefono",gxvar:"A971PersonaLugDeTrabTelefono",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A971PersonaLugDeTrabTelefono=n)},v2z:function(n){n!==undefined&&(gx.O.Z971PersonaLugDeTrabTelefono=n)},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABTELEFONO",gx.O.A971PersonaLugDeTrabTelefono,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A971PersonaLugDeTrabTelefono=this.val())},val:function(){return gx.fn.getControlValue("PERSONALUGDETRABTELEFONO")},nac:gx.falseFn};this.declareDomainHdlr(90,function(){});t[91]={id:91,fld:"",grid:0};t[92]={id:92,fld:"",grid:0};t[93]={id:93,fld:"",grid:0};t[94]={id:94,fld:"",grid:0};t[95]={id:95,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABINTERNO",gxz:"Z972PersonaLugDeTrabInterno",gxold:"O972PersonaLugDeTrabInterno",gxvar:"A972PersonaLugDeTrabInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A972PersonaLugDeTrabInterno=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z972PersonaLugDeTrabInterno=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABINTERNO",gx.O.A972PersonaLugDeTrabInterno,0)},c2v:function(){this.val()!==undefined&&(gx.O.A972PersonaLugDeTrabInterno=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONALUGDETRABINTERNO",".")},nac:gx.falseFn};t[96]={id:96,fld:"",grid:0};t[97]={id:97,fld:"",grid:0};t[98]={id:98,fld:"",grid:0};t[99]={id:99,fld:"",grid:0};t[100]={id:100,fld:"BTNUPDATE",grid:0,evt:"e11d11_client"};t[101]={id:101,fld:"",grid:0};t[102]={id:102,fld:"BTNDELETE",grid:0,evt:"e12d11_client"};t[103]={id:103,fld:"",grid:0};t[104]={id:104,fld:"",grid:0};t[105]={id:105,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[106]={id:106,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABCONFIRMADO",gxz:"Z973PersonaLugDeTrabConfirmado",gxold:"O973PersonaLugDeTrabConfirmado",gxvar:"A973PersonaLugDeTrabConfirmado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A973PersonaLugDeTrabConfirmado=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z973PersonaLugDeTrabConfirmado=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABCONFIRMADO",gx.O.A973PersonaLugDeTrabConfirmado,0)},c2v:function(){this.val()!==undefined&&(gx.O.A973PersonaLugDeTrabConfirmado=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONALUGDETRABCONFIRMADO")},nac:gx.falseFn};t[107]={id:107,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRABENTIDADID",gxz:"Z143PersonaLugDeTrabEntidadId",gxold:"O143PersonaLugDeTrabEntidadId",gxvar:"A143PersonaLugDeTrabEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A143PersonaLugDeTrabEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z143PersonaLugDeTrabEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRABENTIDADID",gx.O.A143PersonaLugDeTrabEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A143PersonaLugDeTrabEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONALUGDETRABENTIDADID",".")},nac:gx.falseFn};t[108]={id:108,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRAB094",gxz:"Z974PersonaLugDeTrab094",gxold:"O974PersonaLugDeTrab094",gxvar:"A974PersonaLugDeTrab094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A974PersonaLugDeTrab094=n)},v2z:function(n){n!==undefined&&(gx.O.Z974PersonaLugDeTrab094=n)},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRAB094",gx.O.A974PersonaLugDeTrab094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A974PersonaLugDeTrab094=this.val())},val:function(){return gx.fn.getControlValue("PERSONALUGDETRAB094")},nac:gx.falseFn};this.declareDomainHdlr(108,function(){});t[109]={id:109,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRAB097",gxz:"Z975PersonaLugDeTrab097",gxold:"O975PersonaLugDeTrab097",gxvar:"A975PersonaLugDeTrab097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A975PersonaLugDeTrab097=n)},v2z:function(n){n!==undefined&&(gx.O.Z975PersonaLugDeTrab097=n)},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRAB097",gx.O.A975PersonaLugDeTrab097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A975PersonaLugDeTrab097=this.val())},val:function(){return gx.fn.getControlValue("PERSONALUGDETRAB097")},nac:gx.falseFn};this.declareDomainHdlr(109,function(){});t[110]={id:110,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONALUGDETRAB098",gxz:"Z976PersonaLugDeTrab098",gxold:"O976PersonaLugDeTrab098",gxvar:"A976PersonaLugDeTrab098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A976PersonaLugDeTrab098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z976PersonaLugDeTrab098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONALUGDETRAB098",gx.O.A976PersonaLugDeTrab098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A976PersonaLugDeTrab098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERSONALUGDETRAB098")},nac:gx.falseFn};this.declareDomainHdlr(110,function(){});this.A140PersonaLugarTrabajoId=0;this.Z140PersonaLugarTrabajoId=0;this.O140PersonaLugarTrabajoId=0;this.A141PersonaLugDeTrab095=gx.date.nullDate();this.Z141PersonaLugDeTrab095=gx.date.nullDate();this.O141PersonaLugDeTrab095=gx.date.nullDate();this.A146PersonaSectorEmpleoCodigo=0;this.Z146PersonaSectorEmpleoCodigo=0;this.O146PersonaSectorEmpleoCodigo=0;this.A1222PersonaSectorEmpleoDescripcion="";this.Z1222PersonaSectorEmpleoDescripcion="";this.O1222PersonaSectorEmpleoDescripcion="";this.A145PersonaTipoActividadCodigo=0;this.Z145PersonaTipoActividadCodigo=0;this.O145PersonaTipoActividadCodigo=0;this.A1224PersonaTipoActividadDescripcion="";this.Z1224PersonaTipoActividadDescripcion="";this.O1224PersonaTipoActividadDescripcion="";this.A1225PersonaTipoActividadSectorEmpleoCodigo=0;this.Z1225PersonaTipoActividadSectorEmpleoCodigo=0;this.O1225PersonaTipoActividadSectorEmpleoCodigo=0;this.A142EmpleadorId=0;this.Z142EmpleadorId=0;this.O142EmpleadorId=0;this.A1180EmpleadorNombre="";this.Z1180EmpleadorNombre="";this.O1180EmpleadorNombre="";this.A171TipoActividadId=0;this.Z171TipoActividadId=0;this.O171TipoActividadId=0;this.A179SectorEmpleoId=0;this.Z179SectorEmpleoId=0;this.O179SectorEmpleoId=0;this.A144TipoRelLaboralId=0;this.Z144TipoRelLaboralId=0;this.O144TipoRelLaboralId=0;this.A147PersonaLugDeTrabNombre="";this.Z147PersonaLugDeTrabNombre="";this.O147PersonaLugDeTrabNombre="";this.A968PersonaLugDeTrabFchIngreso=gx.date.nullDate();this.Z968PersonaLugDeTrabFchIngreso=gx.date.nullDate();this.O968PersonaLugDeTrabFchIngreso=gx.date.nullDate();this.A969PersonaLugDeTrabCargo="";this.Z969PersonaLugDeTrabCargo="";this.O969PersonaLugDeTrabCargo="";this.A970PersonaLugDeTrabIngMensual=0;this.Z970PersonaLugDeTrabIngMensual=0;this.O970PersonaLugDeTrabIngMensual=0;this.A1201PersonaLugDeTrabCodDeArea=0;this.Z1201PersonaLugDeTrabCodDeArea=0;this.O1201PersonaLugDeTrabCodDeArea=0;this.A971PersonaLugDeTrabTelefono="";this.Z971PersonaLugDeTrabTelefono="";this.O971PersonaLugDeTrabTelefono="";this.A972PersonaLugDeTrabInterno=0;this.Z972PersonaLugDeTrabInterno=0;this.O972PersonaLugDeTrabInterno=0;this.A973PersonaLugDeTrabConfirmado=!1;this.Z973PersonaLugDeTrabConfirmado=!1;this.O973PersonaLugDeTrabConfirmado=!1;this.A143PersonaLugDeTrabEntidadId=0;this.Z143PersonaLugDeTrabEntidadId=0;this.O143PersonaLugDeTrabEntidadId=0;this.A974PersonaLugDeTrab094="";this.Z974PersonaLugDeTrab094="";this.O974PersonaLugDeTrab094="";this.A975PersonaLugDeTrab097="";this.Z975PersonaLugDeTrab097="";this.O975PersonaLugDeTrab097="";this.A976PersonaLugDeTrab098=gx.date.nullDate();this.Z976PersonaLugDeTrab098=gx.date.nullDate();this.O976PersonaLugDeTrab098=gx.date.nullDate();this.A140PersonaLugarTrabajoId=0;this.A141PersonaLugDeTrab095=gx.date.nullDate();this.A146PersonaSectorEmpleoCodigo=0;this.A1222PersonaSectorEmpleoDescripcion="";this.A145PersonaTipoActividadCodigo=0;this.A1224PersonaTipoActividadDescripcion="";this.A1225PersonaTipoActividadSectorEmpleoCodigo=0;this.A142EmpleadorId=0;this.A1180EmpleadorNombre="";this.A171TipoActividadId=0;this.A179SectorEmpleoId=0;this.A144TipoRelLaboralId=0;this.A147PersonaLugDeTrabNombre="";this.A968PersonaLugDeTrabFchIngreso=gx.date.nullDate();this.A969PersonaLugDeTrabCargo="";this.A970PersonaLugDeTrabIngMensual=0;this.A1201PersonaLugDeTrabCodDeArea=0;this.A971PersonaLugDeTrabTelefono="";this.A972PersonaLugDeTrabInterno=0;this.A973PersonaLugDeTrabConfirmado=!1;this.A143PersonaLugDeTrabEntidadId=0;this.A974PersonaLugDeTrab094="";this.A975PersonaLugDeTrab097="";this.A976PersonaLugDeTrab098=gx.date.nullDate();this.Events={e15d12_client:["ENTER",!0],e16d12_client:["CANCEL",!0],e11d11_client:["'DOUPDATE'",!1],e12d11_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A140PersonaLugarTrabajoId",fld:"PERSONALUGARTRABAJOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A141PersonaLugDeTrab095",fld:"PERSONALUGDETRAB095",pic:""}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("PERSONALUGDETRABCONFIRMADO","Visible")',ctrl:"PERSONALUGDETRABCONFIRMADO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONALUGDETRABENTIDADID","Visible")',ctrl:"PERSONALUGDETRABENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONALUGDETRAB094","Visible")',ctrl:"PERSONALUGDETRAB094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONALUGDETRAB097","Visible")',ctrl:"PERSONALUGDETRAB097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONALUGDETRAB098","Visible")',ctrl:"PERSONALUGDETRAB098",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A140PersonaLugarTrabajoId",fld:"PERSONALUGARTRABAJOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A141PersonaLugDeTrab095",fld:"PERSONALUGDETRAB095",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A140PersonaLugarTrabajoId",fld:"PERSONALUGARTRABAJOID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A141PersonaLugDeTrab095",fld:"PERSONALUGDETRAB095",pic:""}],[]];this.EvtParms.VALID_PERSONALUGARTRABAJOID=[[],[]];this.EvtParms.VALID_PERSONALUGDETRAB095=[[],[]];this.EvtParms.VALID_PERSONASECTOREMPLEOCODIGO=[[],[]];this.EvtParms.VALID_PERSONATIPOACTIVIDADCODIGO=[[],[]];this.EvtParms.VALID_EMPLEADORID=[[],[]];this.EvtParms.VALID_TIPOACTIVIDADID=[[],[]];this.Initialize()})