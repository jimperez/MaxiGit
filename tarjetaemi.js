/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:8:59.58
*/
gx.evt.autoSkip=!1;gx.define("tarjetaemi",!1,function(){var n,i,t;this.ServerClass="tarjetaemi";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV8EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV16Insert_TarjetaEmiPlanCuentaId=gx.fn.getIntegerValue("vINSERT_TARJETAEMIPLANCUENTAID",".");this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Trjid=function(){return this.validSrvEvt("Valid_Trjid",0).then(function(n){return n}.closure(this))};this.Valid_Emisortrjid=function(){return this.validSrvEvt("Valid_Emisortrjid",0).then(function(n){return n}.closure(this))};this.Valid_Trjnom=function(){return this.validCliEvt("Valid_Trjnom",0,function(){try{var n=gx.util.balloon.getNew("TRJNOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){return this.validCliEvt("Valid_Emisortrjnombre",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJNOMBRE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tarjetaemiplancuentaid=function(){return this.validSrvEvt("Valid_Tarjetaemiplancuentaid",0).then(function(n){return n}.closure(this))};this.Valid_Tarjetaemicomercionro=function(){var n=gx.fn.currentGridRowImpl(47);return this.validCliEvt("Valid_Tarjetaemicomercionro",47,function(){try{if(gx.fn.currentGridRowImpl(47)===0)return!0;var n=gx.util.balloon.getNew("TARJETAEMICOMERCIONRO",gx.fn.currentGridRowImpl(47));this.AnyError=0;this.sMode81=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(81,47);this.standaloneModal1U81();this.standaloneNotModal1U81();gx.fn.gridDuplicateKey(48)&&(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Comercio","","","","","","","","")),this.AnyError=gx.num.trunc(1,0))}catch(t){}try{return(this.Gx_mode=this.sMode81,n==null)?!0:n.show()}catch(t){}return!0})};this.standaloneModal1U81=function(){try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("TARJETAEMICOMERCIONRO","Enabled",0):gx.fn.setCtrlProperty("TARJETAEMICOMERCIONRO","Enabled",1)}catch(n){}};this.standaloneNotModal1U81=function(){};this.e121u2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131u80_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141u80_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67];this.GXLastCtrlId=67;this.Gridlevel_comercioContainer=new gx.grid.grid(this,81,"Comercio",47,"Gridlevel_comercio","Gridlevel_comercio","Gridlevel_comercioContainer",this.CmpContext,this.IsMasterPage,"tarjetaemi",[155],!1,1,!1,!0,5,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.Gridlevel_comercioContainer;i.addSingleLineEdit(155,48,"TARJETAEMICOMERCIONRO","Comercio Nº","","TarjetaEmiComercioNro","char",0,"px",15,15,"left",null,[],155,"TarjetaEmiComercioNro",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2608,49,"TARJETAEMICOMERCIODESCRIPCION","Comercio Descripcion","","TarjetaEmiComercioDescripcion","char",0,"px",30,30,"left",null,[],2608,"TarjetaEmiComercioDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");this.Gridlevel_comercioContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_comercioContainer],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[62,25],ip:[62,25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJID",gx.O.A96TrjId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJID",".")},nac:function(){return!(0==this.AV7TrjId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(){gx.fn.setControlValue("TRJNOM",gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A849TrjNom=this.val())},val:function(){return gx.fn.getControlValue("TRJNOM")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_comercioContainer],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[64,63,33],ip:[64,63,33,25,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJID",gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMISORTRJID",".")},nac:function(){return!(0==this.AV8EmisorTrjId)}};this.declareDomainHdlr(30,function(){});n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(){gx.fn.setControlValue("EMISORTRJNOMBRE",gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tarjetaemiplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTAID",gxz:"Z3021TarjetaEmiPlanCuentaId",gxold:"O3021TarjetaEmiPlanCuentaId",gxvar:"A3021TarjetaEmiPlanCuentaId",ucs:[],op:[41],ip:[41,38],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TARJETAEMIPLANCUENTAID",gx.O.A3021TarjetaEmiPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TARJETAEMIPLANCUENTAID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV16Insert_TarjetaEmiPlanCuentaId)}};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTANOMBRE",gxz:"Z3022TarjetaEmiPlanCuentaNombre",gxold:"O3022TarjetaEmiPlanCuentaNombre",gxvar:"A3022TarjetaEmiPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3022TarjetaEmiPlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("TARJETAEMIPLANCUENTANOMBRE",gx.O.A3022TarjetaEmiPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("TARJETAEMIPLANCUENTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"TABLELEAFLEVEL_COMERCIO",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[48]={id:48,lvl:81,type:"char",len:15,dec:0,sign:!1,ro:0,isacc:1,grid:47,gxgrid:this.Gridlevel_comercioContainer,fnc:this.Valid_Tarjetaemicomercionro,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMICOMERCIONRO",gxz:"Z155TarjetaEmiComercioNro",gxold:"O155TarjetaEmiComercioNro",gxvar:"A155TarjetaEmiComercioNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A155TarjetaEmiComercioNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z155TarjetaEmiComercioNro=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMICOMERCIONRO",n||gx.fn.currentGridRowImpl(47),gx.O.A155TarjetaEmiComercioNro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A155TarjetaEmiComercioNro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMICOMERCIONRO",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[49]={id:49,lvl:81,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:0,isacc:1,grid:47,gxgrid:this.Gridlevel_comercioContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMICOMERCIODESCRIPCION",gxz:"Z2608TarjetaEmiComercioDescripcion",gxold:"O2608TarjetaEmiComercioDescripcion",gxvar:"A2608TarjetaEmiComercioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2608TarjetaEmiComercioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2608TarjetaEmiComercioDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMICOMERCIODESCRIPCION",n||gx.fn.currentGridRowImpl(47),gx.O.A2608TarjetaEmiComercioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2608TarjetaEmiComercioDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMICOMERCIODESCRIPCION",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"BTNTRN_ENTER",grid:0,evt:"e131u80_client",std:"ENTER"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"BTNTRN_CANCEL",grid:0,evt:"e141u80_client"};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"BTNTRN_DELETE",grid:0,evt:"e151u80_client",std:"DELETE"};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[62]={id:62,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEST",gxz:"Z851TrjEst",gxold:"O851TrjEst",gxvar:"A851TrjEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A851TrjEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z851TrjEst=n)},v2c:function(){gx.fn.setComboBoxValue("TRJEST",gx.O.A851TrjEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A851TrjEst=this.val())},val:function(){return gx.fn.getControlValue("TRJEST")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[63]={id:63,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJESTADO",gxz:"Z1031EmisorTrjEstado",gxold:"O1031EmisorTrjEstado",gxvar:"A1031EmisorTrjEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1031EmisorTrjEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1031EmisorTrjEstado=n)},v2c:function(){gx.fn.setComboBoxValue("EMISORTRJESTADO",gx.O.A1031EmisorTrjEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1031EmisorTrjEstado=this.val())},val:function(){return gx.fn.getControlValue("EMISORTRJESTADO")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMINOMBRE",gxz:"Z1524TarjetaEmiNombre",gxold:"O1524TarjetaEmiNombre",gxvar:"A1524TarjetaEmiNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1524TarjetaEmiNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1524TarjetaEmiNombre=n)},v2c:function(){gx.fn.setControlValue("TARJETAEMINOMBRE",gx.O.A1524TarjetaEmiNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1524TarjetaEmiNombre=this.val())},val:function(){return gx.fn.getControlValue("TARJETAEMINOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[65]={id:65,fld:"PROMPT_96",grid:80};n[66]={id:66,fld:"PROMPT_97",grid:80};n[67]={id:67,fld:"PROMPT_3021",grid:80};this.A96TrjId=0;this.Z96TrjId=0;this.O96TrjId=0;this.A849TrjNom="";this.Z849TrjNom="";this.O849TrjNom="";this.A97EmisorTrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.A1030EmisorTrjNombre="";this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.A3021TarjetaEmiPlanCuentaId=0;this.Z3021TarjetaEmiPlanCuentaId=0;this.O3021TarjetaEmiPlanCuentaId=0;this.A3022TarjetaEmiPlanCuentaNombre="";this.Z3022TarjetaEmiPlanCuentaNombre="";this.O3022TarjetaEmiPlanCuentaNombre="";this.Z155TarjetaEmiComercioNro="";this.O155TarjetaEmiComercioNro="";this.Z2608TarjetaEmiComercioDescripcion="";this.O2608TarjetaEmiComercioDescripcion="";this.A851TrjEst="";this.Z851TrjEst="";this.O851TrjEst="";this.A1031EmisorTrjEstado="";this.Z1031EmisorTrjEstado="";this.O1031EmisorTrjEstado="";this.A1524TarjetaEmiNombre="";this.Z1524TarjetaEmiNombre="";this.O1524TarjetaEmiNombre="";this.A155TarjetaEmiComercioNro="";this.A2608TarjetaEmiComercioDescripcion="";this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV19GXV1=0;this.AV16Insert_TarjetaEmiPlanCuentaId=0;this.AV17TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7TrjId=0;this.AV8EmisorTrjId=0;this.AV11WebSession={};this.A96TrjId=0;this.A97EmisorTrjId=0;this.A3021TarjetaEmiPlanCuentaId=0;this.AV18Pgmname="";this.A1524TarjetaEmiNombre="";this.A849TrjNom="";this.A851TrjEst="";this.A1030EmisorTrjNombre="";this.A1031EmisorTrjEstado="";this.A3022TarjetaEmiPlanCuentaNombre="";this.Gx_mode="";this.Events={e121u2_client:["AFTER TRN",!0],e131u80_client:["ENTER",!0],e141u80_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""},{av:"AV19GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV17TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV16Insert_TarjetaEmiPlanCuentaId",fld:"vINSERT_TARJETAEMIPLANCUENTAID",pic:"ZZZZZZZZZ9"},{ctrl:"TRJEST"},{ctrl:"EMISORTRJESTADO"},{av:'gx.fn.getCtrlProperty("TARJETAEMINOMBRE","Visible")',ctrl:"TARJETAEMINOMBRE",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_TRJID=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"}],[{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"}]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"},{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"}],[{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"},{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"}]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[],[]];this.EvtParms.VALID_TARJETAEMIPLANCUENTAID=[[{av:"A3021TarjetaEmiPlanCuentaId",fld:"TARJETAEMIPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"}],[{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_TARJETAEMICOMERCIONRO=[[],[]];this.setPrompt("PROMPT_96",[22]);this.setPrompt("PROMPT_97",[30]);this.setPrompt("PROMPT_3021",[38]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV8EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV16Insert_TarjetaEmiPlanCuentaId","vINSERT_TARJETAEMIPLANCUENTAID",0,"int",10,0);this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);i.addPostingVar({rfrVar:"Gx_mode"});this.Initialize()});gx.wi(function(){gx.createParentObj(tarjetaemi)})