/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:27.30
*/
gx.evt.autoSkip=!1;gx.define("articulocaracteristica",!1,function(){var n,t;this.ServerClass="articulocaracteristica";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A16ArtNom=gx.fn.getControlValue("ARTNOM");this.A359MarcaNombre=gx.fn.getControlValue("MARCANOMBRE");this.A362GrupoNombre=gx.fn.getControlValue("GRUPONOMBRE");this.A361SGrupoNombre=gx.fn.getControlValue("SGRUPONOMBRE");this.A356ArtTpo=gx.fn.getControlValue("ARTTPO");this.AV7ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV8CaracteristicaId=gx.fn.getIntegerValue("vCARACTERISTICAID",".");this.A9MarcaId=gx.fn.getIntegerValue("MARCAID",".");this.A10GrupoId=gx.fn.getIntegerValue("GRUPOID",".");this.A11SGrupoId=gx.fn.getIntegerValue("SGRUPOID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Artid=function(){return this.validSrvEvt("Valid_Artid",0).then(function(n){return n}.closure(this))};this.Valid_Caracteristicaid=function(){return this.validSrvEvt("Valid_Caracteristicaid",0).then(function(n){return n}.closure(this))};this.e125k2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e135k236_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e145k236_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:function(){return!(0==this.AV7ArtId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:300,dec:0,sign:!1,pic:"@!",ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCIONGENERAL",gxz:"Z1534ArtDescripcionGeneral",gxold:"O1534ArtDescripcionGeneral",gxvar:"A1534ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1534ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z1534ArtDescripcionGeneral=n)},v2c:function(){gx.fn.setControlValue("ARTDESCRIPCIONGENERAL",gx.O.A1534ArtDescripcionGeneral,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1534ArtDescripcionGeneral=this.val())},val:function(){return gx.fn.getControlValue("ARTDESCRIPCIONGENERAL")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caracteristicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CARACTERISTICAID",gxz:"Z318CaracteristicaId",gxold:"O318CaracteristicaId",gxvar:"A318CaracteristicaId",ucs:[],op:[33],ip:[33,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A318CaracteristicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z318CaracteristicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CARACTERISTICAID",gx.O.A318CaracteristicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A318CaracteristicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CARACTERISTICAID",".")},nac:function(){return!(0==this.AV8CaracteristicaId)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CARACTERISTICANOMBRE",gxz:"Z2705CaracteristicaNombre",gxold:"O2705CaracteristicaNombre",gxvar:"A2705CaracteristicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2705CaracteristicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2705CaracteristicaNombre=n)},v2c:function(){gx.fn.setControlValue("CARACTERISTICANOMBRE",gx.O.A2705CaracteristicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2705CaracteristicaNombre=this.val())},val:function(){return gx.fn.getControlValue("CARACTERISTICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICAINFO",gxz:"Z2714ArticuloCaracteristicaInfo",gxold:"O2714ArticuloCaracteristicaInfo",gxvar:"A2714ArticuloCaracteristicaInfo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2714ArticuloCaracteristicaInfo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2714ArticuloCaracteristicaInfo=n)},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICAINFO",gx.O.A2714ArticuloCaracteristicaInfo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2714ArticuloCaracteristicaInfo=this.val())},val:function(){return gx.fn.getControlValue("ARTICULOCARACTERISTICAINFO")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"BTNTRN_ENTER",grid:0,evt:"e135k236_client",std:"ENTER"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"BTNTRN_CANCEL",grid:0,evt:"e145k236_client"};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"BTNTRN_DELETE",grid:0,evt:"e155k236_client",std:"DELETE"};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[51]={id:51,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICA094",gxz:"Z2712ArticuloCaracteristica094",gxold:"O2712ArticuloCaracteristica094",gxvar:"A2712ArticuloCaracteristica094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2712ArticuloCaracteristica094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2712ArticuloCaracteristica094=n)},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICA094",gx.O.A2712ArticuloCaracteristica094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2712ArticuloCaracteristica094=this.val())},val:function(){return gx.fn.getControlValue("ARTICULOCARACTERISTICA094")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[52]={id:52,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICA095",gxz:"Z2713ArticuloCaracteristica095",gxold:"O2713ArticuloCaracteristica095",gxvar:"A2713ArticuloCaracteristica095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2713ArticuloCaracteristica095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2713ArticuloCaracteristica095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICA095",gx.O.A2713ArticuloCaracteristica095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2713ArticuloCaracteristica095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTICULOCARACTERISTICA095")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});n[53]={id:53,fld:"PROMPT_8",grid:236};n[54]={id:54,fld:"PROMPT_318",grid:236};this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A1534ArtDescripcionGeneral="";this.Z1534ArtDescripcionGeneral="";this.O1534ArtDescripcionGeneral="";this.A318CaracteristicaId=0;this.Z318CaracteristicaId=0;this.O318CaracteristicaId=0;this.A2705CaracteristicaNombre="";this.Z2705CaracteristicaNombre="";this.O2705CaracteristicaNombre="";this.A2714ArticuloCaracteristicaInfo="";this.Z2714ArticuloCaracteristicaInfo="";this.O2714ArticuloCaracteristicaInfo="";this.A2712ArticuloCaracteristica094="";this.Z2712ArticuloCaracteristica094="";this.O2712ArticuloCaracteristica094="";this.A2713ArticuloCaracteristica095=gx.date.nullDate();this.Z2713ArticuloCaracteristica095=gx.date.nullDate();this.O2713ArticuloCaracteristica095=gx.date.nullDate();this.A11SGrupoId=0;this.A10GrupoId=0;this.A9MarcaId=0;this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ArtId=0;this.AV8CaracteristicaId=0;this.AV11WebSession={};this.A8ArtId=0;this.A318CaracteristicaId=0;this.A2713ArticuloCaracteristica095=gx.date.nullDate();this.A2712ArticuloCaracteristica094="";this.A1534ArtDescripcionGeneral="";this.A2705CaracteristicaNombre="";this.A2714ArticuloCaracteristicaInfo="";this.A16ArtNom="";this.A359MarcaNombre="";this.A362GrupoNombre="";this.A361SGrupoNombre="";this.A356ArtTpo="";this.Gx_mode="";this.Events={e125k2_client:["AFTER TRN",!0],e135k236_client:["ENTER",!0],e145k236_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8CaracteristicaId",fld:"vCARACTERISTICAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8CaracteristicaId",fld:"vCARACTERISTICAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("ARTICULOCARACTERISTICA094","Visible")',ctrl:"ARTICULOCARACTERISTICA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTICULOCARACTERISTICA095","Visible")',ctrl:"ARTICULOCARACTERISTICA095",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_ARTID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"}],[{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"}]];this.EvtParms.VALID_CARACTERISTICAID=[[{av:"A318CaracteristicaId",fld:"CARACTERISTICAID",pic:"ZZZ9"},{av:"A2705CaracteristicaNombre",fld:"CARACTERISTICANOMBRE",pic:"@!"}],[{av:"A2705CaracteristicaNombre",fld:"CARACTERISTICANOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_8",[22]);this.setPrompt("PROMPT_318",[30]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("A16ArtNom","ARTNOM",0,"svchar",64,0);this.setVCMap("A359MarcaNombre","MARCANOMBRE",0,"svchar",64,0);this.setVCMap("A362GrupoNombre","GRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A361SGrupoNombre","SGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A356ArtTpo","ARTTPO",0,"char",3,0);this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV8CaracteristicaId","vCARACTERISTICAID",0,"int",4,0);this.setVCMap("A9MarcaId","MARCAID",0,"int",4,0);this.setVCMap("A10GrupoId","GRUPOID",0,"int",4,0);this.setVCMap("A11SGrupoId","SGRUPOID",0,"int",4,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(articulocaracteristica)})