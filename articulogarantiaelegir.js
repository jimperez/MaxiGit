/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:30.13
*/
gx.evt.autoSkip=!1;gx.define("articulogarantiaelegir",!1,function(){var n,t,i;this.ServerClass="articulogarantiaelegir";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2292ArtGarantiaNom=gx.fn.getControlValue("ARTGARANTIANOM");this.A2293ArtGarantiaMarcaNombre=gx.fn.getControlValue("ARTGARANTIAMARCANOMBRE");this.A2294ArtGarantiaGrupoNombre=gx.fn.getControlValue("ARTGARANTIAGRUPONOMBRE");this.A2295ArtGarantiaSGrupoNombre=gx.fn.getControlValue("ARTGARANTIASGRUPONOMBRE");this.AV15Modo=gx.fn.getControlValue("vMODO");this.AV8ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV18PreDetEntidadId=gx.fn.getIntegerValue("vPREDETENTIDADID",".");this.AV19PreDetSucursalId=gx.fn.getIntegerValue("vPREDETSUCURSALID",".");this.AV17PopupName=gx.fn.getControlValue("vPOPUPNAME");this.AV8ArtId=gx.fn.getIntegerValue("vARTID",".")};this.Valid_Artgarantiaid=function(){var n=gx.fn.currentGridRowImpl(20);return this.validCliEvt("Valid_Artgarantiaid",20,function(){try{if(gx.fn.currentGridRowImpl(20)===0)return!0;var n=gx.util.balloon.getNew("ARTGARANTIAID",gx.fn.currentGridRowImpl(20));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e118w2_client=function(){return this.executeServerEvent("'DOCONTINUAR'",!1,null,!1,!1)};this.e158w2_client=function(){return this.executeServerEvent("VAGREGARGARANTIA.CLICK",!0,arguments[0],!1,!1)};this.e128w2_client=function(){return this.setEventParameters([["PopupName","vPOPUPNAME","AV17PopupName"]],arguments[2]),this.executeServerEvent("GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED",!0,null,!0,!1)};this.e168w2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e178w2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];this.GXLastCtrlId=37;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",20,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"articulogarantiaelegir",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!0,1,!0,!1);t=this.GridContainer;t.addSingleLineEdit(17,21,"ARTGARANTIAID","Ide.","","ArtGarantiaId","int",0,"px",9,9,"right",null,[],17,"ArtGarantiaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(2291,22,"ARTGARANTIADESCRIPCIONGENERAL","Descrip. Completa","","ArtGarantiaDescripcionGeneral","svchar",0,"px",300,80,"left",null,[],2291,"ArtGarantiaDescripcionGeneral",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addBitmap("&Agregargarantia","vAGREGARGARANTIA",23,0,"px",17,"px","e158w2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(t);this.DVPANEL_TABLEGENERALContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEGENERALContainer","Dvpanel_tablegeneral","DVPANEL_TABLEGENERAL");i=this.DVPANEL_TABLEGENERALContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setDynProp("Title","Title","","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLEACTIONS",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEGENERAL",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[21]={id:21,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:this.Valid_Artgarantiaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTGARANTIAID",gxz:"Z17ArtGarantiaId",gxold:"O17ArtGarantiaId",gxvar:"A17ArtGarantiaId",ucs:[],op:[22],ip:[22,21],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A17ArtGarantiaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z17ArtGarantiaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTGARANTIAID",n||gx.fn.currentGridRowImpl(20),gx.O.A17ArtGarantiaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A17ArtGarantiaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTGARANTIAID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};n[22]={id:22,lvl:2,type:"svchar",len:300,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTGARANTIADESCRIPCIONGENERAL",gxz:"Z2291ArtGarantiaDescripcionGeneral",gxold:"O2291ArtGarantiaDescripcionGeneral",gxvar:"A2291ArtGarantiaDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2291ArtGarantiaDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z2291ArtGarantiaDescripcionGeneral=n)},v2c:function(n){gx.fn.setGridControlValue("ARTGARANTIADESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(20),gx.O.A2291ArtGarantiaDescripcionGeneral,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2291ArtGarantiaDescripcionGeneral=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTGARANTIADESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};n[23]={id:23,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAGREGARGARANTIA",gxz:"ZV6AgregarGarantia",gxold:"OV6AgregarGarantia",gxvar:"AV6AgregarGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV6AgregarGarantia=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6AgregarGarantia=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vAGREGARGARANTIA",n||gx.fn.currentGridRowImpl(20),gx.O.AV6AgregarGarantia,gx.O.AV25Agregargarantia_GXI)},c2v:function(n){gx.O.AV25Agregargarantia_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV6AgregarGarantia=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vAGREGARGARANTIA",n||gx.fn.currentGridRowImpl(20))},val_GXI:function(n){return gx.fn.getGridControlValue("vAGREGARGARANTIA_GXI",n||gx.fn.currentGridRowImpl(20))},gxvar_GXI:"AV25Agregargarantia_GXI",nac:gx.falseFn,evt:"e158w2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"UNNAMEDTABLE1",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"BTNCONTINUAR",grid:0,evt:"e118w2_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCANTIDAD",gxz:"ZV9Cantidad",gxold:"OV9Cantidad",gxvar:"AV9Cantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9Cantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9Cantidad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCANTIDAD",gx.O.AV9Cantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9Cantidad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCANTIDAD",".")},nac:gx.falseFn};n[36]={id:36,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPREID",gxz:"ZV5PreId",gxold:"OV5PreId",gxvar:"AV5PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV5PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPREID",gx.O.AV5PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPREID",".")},nac:gx.falseFn};n[37]={id:37,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONTADO",gxz:"ZV10Contado",gxold:"OV10Contado",gxvar:"AV10Contado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV10Contado=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10Contado=n)},v2c:function(){gx.fn.setComboBoxValue("vCONTADO",gx.O.AV10Contado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV10Contado=this.val())},val:function(){return gx.fn.getControlValue("vCONTADO")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});this.Z17ArtGarantiaId=0;this.O17ArtGarantiaId=0;this.Z2291ArtGarantiaDescripcionGeneral="";this.O2291ArtGarantiaDescripcionGeneral="";this.ZV6AgregarGarantia="";this.OV6AgregarGarantia="";this.AV9Cantidad=0;this.ZV9Cantidad=0;this.OV9Cantidad=0;this.AV5PreId=0;this.ZV5PreId=0;this.OV5PreId=0;this.AV10Contado="";this.ZV10Contado="";this.OV10Contado="";this.AV9Cantidad=0;this.AV5PreId=0;this.AV10Contado="";this.AV8ArtId=0;this.AV18PreDetEntidadId=0;this.AV19PreDetSucursalId=0;this.AV15Modo="";this.A8ArtId=0;this.A2295ArtGarantiaSGrupoNombre="";this.A2294ArtGarantiaGrupoNombre="";this.A2293ArtGarantiaMarcaNombre="";this.A2292ArtGarantiaNom="";this.A2302ArtGarantiaMarcaId=0;this.A2300ArtGarantiaGrupoId=0;this.A2307ArtGarantiaSGrupoId=0;this.A17ArtGarantiaId=0;this.A2291ArtGarantiaDescripcionGeneral="";this.AV6AgregarGarantia="";this.A361SGrupoNombre="";this.A362GrupoNombre="";this.A359MarcaNombre="";this.A356ArtTpo="";this.A16ArtNom="";this.A1534ArtDescripcionGeneral="";this.A9MarcaId=0;this.A10GrupoId=0;this.A11SGrupoId=0;this.AV17PopupName="";this.Events={e118w2_client:["'DOCONTINUAR'",!0],e158w2_client:["VAGREGARGARANTIA.CLICK",!0],e128w2_client:["GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED",!0],e168w2_client:["ENTER",!0],e178w2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"}],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:'gx.fn.getCtrlProperty("vCANTIDAD","Visible")',ctrl:"vCANTIDAD",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vPREID","Visible")',ctrl:"vPREID",prop:"Visible"},{ctrl:"vCONTADO"},{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("TABLEACTIONS","Visible")',ctrl:"TABLEACTIONS",prop:"Visible"},{av:"this.DVPANEL_TABLEGENERALContainer.Title",ctrl:"DVPANEL_TABLEGENERAL",prop:"Title"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV6AgregarGarantia",fld:"vAGREGARGARANTIA",pic:""},{av:'gx.fn.getCtrlProperty("vAGREGARGARANTIA","Tooltiptext")',ctrl:"vAGREGARGARANTIA",prop:"Tooltiptext"}]];this.EvtParms["'DOCONTINUAR'"]=[[{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms["VAGREGARGARANTIA.CLICK"]=[[{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0},{av:"A17ArtGarantiaId",fld:"ARTGARANTIAID",pic:"ZZZZZZZZ9"}],[{av:"A17ArtGarantiaId",fld:"ARTGARANTIAID",pic:"ZZZZZZZZ9"}]];this.EvtParms["GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED"]=[[{av:"AV17PopupName",fld:"vPOPUPNAME",pic:""}],[]];this.addExoEventHandler("extensions.web.popup.onpopupclosed",this.e128w2_client);this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV15Modo",fld:"vMODO",pic:"",hsh:!0},{av:"AV18PreDetEntidadId",fld:"vPREDETENTIDADID",pic:"Z9",hsh:!0},{av:"AV19PreDetSucursalId",fld:"vPREDETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9Cantidad",fld:"vCANTIDAD",pic:"ZZZ9",hsh:!0},{ctrl:"vCONTADO"},{av:"AV10Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.VALID_ARTGARANTIAID=[[{av:"A2291ArtGarantiaDescripcionGeneral",fld:"ARTGARANTIADESCRIPCIONGENERAL",pic:""},{av:"A17ArtGarantiaId",fld:"ARTGARANTIAID",pic:"ZZZZZZZZ9"}],[{av:"A2291ArtGarantiaDescripcionGeneral",fld:"ARTGARANTIADESCRIPCIONGENERAL",pic:""}]];this.setVCMap("A2292ArtGarantiaNom","ARTGARANTIANOM",0,"svchar",64,0);this.setVCMap("A2293ArtGarantiaMarcaNombre","ARTGARANTIAMARCANOMBRE",0,"svchar",64,0);this.setVCMap("A2294ArtGarantiaGrupoNombre","ARTGARANTIAGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A2295ArtGarantiaSGrupoNombre","ARTGARANTIASGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("AV15Modo","vMODO",0,"char",3,0);this.setVCMap("AV8ArtId","vARTID",0,"int",9,0);this.setVCMap("AV18PreDetEntidadId","vPREDETENTIDADID",0,"int",2,0);this.setVCMap("AV19PreDetSucursalId","vPREDETSUCURSALID",0,"int",4,0);this.setVCMap("AV17PopupName","vPOPUPNAME",0,"char",20,0);this.setVCMap("AV8ArtId","vARTID",0,"int",9,0);this.setVCMap("AV8ArtId","vARTID",0,"int",9,0);t.addRefreshingVar({rfrVar:"AV8ArtId"});t.addRefreshingVar({rfrVar:"AV15Modo"});t.addRefreshingVar({rfrVar:"AV18PreDetEntidadId"});t.addRefreshingVar({rfrVar:"AV19PreDetSucursalId"});t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[35]);t.addRefreshingVar(this.GXValidFnc[37]);t.addRefreshingParm({rfrVar:"AV8ArtId"});t.addRefreshingParm({rfrVar:"AV15Modo"});t.addRefreshingParm({rfrVar:"AV18PreDetEntidadId"});t.addRefreshingParm({rfrVar:"AV19PreDetSucursalId"});t.addRefreshingParm(this.GXValidFnc[36]);t.addRefreshingParm(this.GXValidFnc[35]);t.addRefreshingParm(this.GXValidFnc[37]);this.Initialize()});gx.wi(function(){gx.createParentObj(articulogarantiaelegir)})