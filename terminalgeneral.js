/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:29.53
*/
gx.evt.autoSkip=!1;gx.define("terminalgeneral",!0,function(n){this.ServerClass="terminalgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Terminalip=function(){return this.validCliEvt("Valid_Terminalip",0,function(){try{var n=gx.util.balloon.getNew("TERMINALIP");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Terminalentidadid=function(){return this.validCliEvt("Valid_Terminalentidadid",0,function(){try{var n=gx.util.balloon.getNew("TERMINALENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Terminalsucursalid=function(){return this.validCliEvt("Valid_Terminalsucursalid",0,function(){try{var n=gx.util.balloon.getNew("TERMINALSUCURSALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11d71_client=function(){return this.clearMessages(),this.call("terminal.aspx",["UPD",this.A47TerminalIp]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12d71_client=function(){return this.clearMessages(),this.call("terminal.aspx",["DLT",this.A47TerminalIp]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15d72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16d72_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];this.GXLastCtrlId=52;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Terminalip,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALIP",gxz:"Z47TerminalIp",gxold:"O47TerminalIp",gxvar:"A47TerminalIp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A47TerminalIp=n)},v2z:function(n){n!==undefined&&(gx.O.Z47TerminalIp=n)},v2c:function(){gx.fn.setControlValue("TERMINALIP",gx.O.A47TerminalIp,0)},c2v:function(){this.val()!==undefined&&(gx.O.A47TerminalIp=this.val())},val:function(){return gx.fn.getControlValue("TERMINALIP")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALEMISOR",gxz:"Z996TerminalEmisor",gxold:"O996TerminalEmisor",gxvar:"A996TerminalEmisor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A996TerminalEmisor=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z996TerminalEmisor=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TERMINALEMISOR",gx.O.A996TerminalEmisor,0)},c2v:function(){this.val()!==undefined&&(gx.O.A996TerminalEmisor=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TERMINALEMISOR",".")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALNOM",gxz:"Z995TerminalNom",gxold:"O995TerminalNom",gxvar:"A995TerminalNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A995TerminalNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z995TerminalNom=n)},v2c:function(){gx.fn.setControlValue("TERMINALNOM",gx.O.A995TerminalNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.A995TerminalNom=this.val())},val:function(){return gx.fn.getControlValue("TERMINALNOM")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Terminalentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALENTIDADID",gxz:"Z48TerminalEntidadId",gxold:"O48TerminalEntidadId",gxvar:"A48TerminalEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A48TerminalEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z48TerminalEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TERMINALENTIDADID",gx.O.A48TerminalEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A48TerminalEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TERMINALENTIDADID",".")},nac:gx.falseFn};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALENTIDADNOMBRE",gxz:"Z1147TerminalEntidadNombre",gxold:"O1147TerminalEntidadNombre",gxvar:"A1147TerminalEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1147TerminalEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1147TerminalEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("TERMINALENTIDADNOMBRE",gx.O.A1147TerminalEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1147TerminalEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("TERMINALENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Terminalsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALSUCURSALID",gxz:"Z49TerminalSucursalId",gxold:"O49TerminalSucursalId",gxvar:"A49TerminalSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A49TerminalSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z49TerminalSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TERMINALSUCURSALID",gx.O.A49TerminalSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A49TerminalSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TERMINALSUCURSALID",".")},nac:gx.falseFn};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALSUCURSALNOMBRE",gxz:"Z1148TerminalSucursalNombre",gxold:"O1148TerminalSucursalNombre",gxvar:"A1148TerminalSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1148TerminalSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1148TerminalSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("TERMINALSUCURSALNOMBRE",gx.O.A1148TerminalSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1148TerminalSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("TERMINALSUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"BTNUPDATE",grid:0,evt:"e11d71_client"};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"BTNDELETE",grid:0,evt:"e12d71_client"};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[50]={id:50,lvl:0,type:"dtime",len:10,dec:8,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINAL095",gxz:"Z998Terminal095",gxold:"O998Terminal095",gxvar:"A998Terminal095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A998Terminal095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z998Terminal095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TERMINAL095",gx.O.A998Terminal095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A998Terminal095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TERMINAL095")},nac:gx.falseFn};t[51]={id:51,lvl:0,type:"dtime",len:10,dec:8,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINAL098",gxz:"Z1000Terminal098",gxold:"O1000Terminal098",gxvar:"A1000Terminal098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1000Terminal098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1000Terminal098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TERMINAL098",gx.O.A1000Terminal098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1000Terminal098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TERMINAL098")},nac:gx.falseFn};t[52]={id:52,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TERMINALREPLI",gxz:"Z1001TerminalRepli",gxold:"O1001TerminalRepli",gxvar:"A1001TerminalRepli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1001TerminalRepli=n)},v2z:function(n){n!==undefined&&(gx.O.Z1001TerminalRepli=n)},v2c:function(){gx.fn.setControlValue("TERMINALREPLI",gx.O.A1001TerminalRepli,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1001TerminalRepli=this.val())},val:function(){return gx.fn.getControlValue("TERMINALREPLI")},nac:gx.falseFn};this.A47TerminalIp="";this.Z47TerminalIp="";this.O47TerminalIp="";this.A996TerminalEmisor=0;this.Z996TerminalEmisor=0;this.O996TerminalEmisor=0;this.A995TerminalNom="";this.Z995TerminalNom="";this.O995TerminalNom="";this.A48TerminalEntidadId=0;this.Z48TerminalEntidadId=0;this.O48TerminalEntidadId=0;this.A1147TerminalEntidadNombre="";this.Z1147TerminalEntidadNombre="";this.O1147TerminalEntidadNombre="";this.A49TerminalSucursalId=0;this.Z49TerminalSucursalId=0;this.O49TerminalSucursalId=0;this.A1148TerminalSucursalNombre="";this.Z1148TerminalSucursalNombre="";this.O1148TerminalSucursalNombre="";this.A998Terminal095=gx.date.nullDate();this.Z998Terminal095=gx.date.nullDate();this.O998Terminal095=gx.date.nullDate();this.A1000Terminal098=gx.date.nullDate();this.Z1000Terminal098=gx.date.nullDate();this.O1000Terminal098=gx.date.nullDate();this.A1001TerminalRepli="";this.Z1001TerminalRepli="";this.O1001TerminalRepli="";this.A47TerminalIp="";this.A996TerminalEmisor=0;this.A995TerminalNom="";this.A48TerminalEntidadId=0;this.A1147TerminalEntidadNombre="";this.A49TerminalSucursalId=0;this.A1148TerminalSucursalNombre="";this.A998Terminal095=gx.date.nullDate();this.A1000Terminal098=gx.date.nullDate();this.A1001TerminalRepli="";this.Events={e15d72_client:["ENTER",!0],e16d72_client:["CANCEL",!0],e11d71_client:["'DOUPDATE'",!1],e12d71_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A47TerminalIp",fld:"TERMINALIP",pic:""}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("TERMINAL095","Visible")',ctrl:"TERMINAL095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TERMINAL098","Visible")',ctrl:"TERMINAL098",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TERMINALREPLI","Visible")',ctrl:"TERMINALREPLI",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A47TerminalIp",fld:"TERMINALIP",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A47TerminalIp",fld:"TERMINALIP",pic:""}],[]];this.EvtParms.VALID_TERMINALIP=[[],[]];this.EvtParms.VALID_TERMINALENTIDADID=[[],[]];this.EvtParms.VALID_TERMINALSUCURSALID=[[],[]];this.Initialize()})