/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:17:39.29
*/
gx.evt.autoSkip=!1;gx.define("viewcajafisica",!1,function(){var n,t;this.ServerClass="viewcajafisica";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV12LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV13SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9CajaFisicaEntidadId=gx.fn.getIntegerValue("vCAJAFISICAENTIDADID",".");this.AV10CajaFisicaSucursalId=gx.fn.getIntegerValue("vCAJAFISICASUCURSALID",".");this.AV11CajaFisicaId=gx.fn.getIntegerValue("vCAJAFISICAID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9CajaFisicaEntidadId=gx.fn.getIntegerValue("vCAJAFISICAENTIDADID",".");this.AV10CajaFisicaSucursalId=gx.fn.getIntegerValue("vCAJAFISICASUCURSALID",".");this.AV11CajaFisicaId=gx.fn.getIntegerValue("vCAJAFISICAID",".");this.AV12LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV13SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV12LoadAllTabs||this.AV13SelectedTabCode==""||this.AV13SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","CajaFisicaGeneral",[this.AV9CajaFisicaEntidadId,this.AV10CajaFisicaSucursalId,this.AV11CajaFisicaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV13SelectedTabCode==""||this.AV13SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_CAJERO","Visible",!0);(this.AV12LoadAllTabs||this.AV13SelectedTabCode=="Cajero")&&(this.createWebComponent("Cajerowc","CajaFisicaCajeroWC",[this.AV9CajaFisicaEntidadId,this.AV10CajaFisicaSucursalId,this.AV11CajaFisicaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Cajero"),this.AV13SelectedTabCode=="Cajero"&&gx.fn.setCtrlProperty("CELL_CAJERO","Visible",!1));gx.fn.setCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible",!0);(this.AV12LoadAllTabs||this.AV13SelectedTabCode=="CajaFisicaPuntoVenta")&&(this.createWebComponent("Cajafisicapuntoventawc","CajaFisicaCajaFisicaPuntoVentaWC",[this.AV9CajaFisicaEntidadId,this.AV10CajaFisicaSucursalId,this.AV11CajaFisicaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Punto Venta"),this.AV13SelectedTabCode=="CajaFisicaPuntoVenta"&&gx.fn.setCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible",!1))};this.e168m1_client=function(){return this.clearMessages(),this.AV13SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]),gx.$.Deferred().resolve()};this.e118m1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV13SelectedTabCode="General",this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]),gx.$.Deferred().resolve()};this.e128m1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV13SelectedTabCode="Cajero",this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]),gx.$.Deferred().resolve()};this.e138m1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(3),this.AV13SelectedTabCode="CajaFisicaPuntoVenta",this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]),gx.$.Deferred().resolve()};this.e178m2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e188m2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,36,37,39,40,41,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",3,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e168m1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"CAJERO_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLECAJERO",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[36]={id:36,fld:"CAJAFISICAPUNTOVENTA_TITLE",format:0,grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"UNNAMEDTABLECAJAFISICAPUNTOVENTA",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"CELL_GENERAL",grid:0};n[48]={id:48,fld:"BTNGENERAL",grid:0,evt:"e118m1_client"};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"CELL_CAJERO",grid:0};n[51]={id:51,fld:"BTNCAJERO",grid:0,evt:"e128m1_client"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"CELL_CAJAFISICAPUNTOVENTA",grid:0};n[54]={id:54,fld:"BTNCAJAFISICAPUNTOVENTA",grid:0,evt:"e138m1_client"};this.AV9CajaFisicaEntidadId=0;this.AV10CajaFisicaSucursalId=0;this.AV11CajaFisicaId=0;this.AV7TabCode="";this.A33CajaFisicaId=0;this.A32CajaFisicaSucursalId=0;this.A31CajaFisicaEntidadId=0;this.A1149CajaFisicaEntidadNombre="";this.AV12LoadAllTabs=!1;this.AV13SelectedTabCode="";this.Events={e178m2_client:["ENTER",!0],e188m2_client:["CANCEL",!0],e168m1_client:["TABS.TABCHANGED",!1],e118m1_client:["'GENERAL'",!1],e128m1_client:["'CAJERO'",!1],e138m1_client:["'CAJAFISICAPUNTOVENTA'",!1]};this.EvtParms.REFRESH=[[{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"},{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A33CajaFisicaId",fld:"CAJAFISICAID",pic:"ZZZ9"},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0},{av:"A1149CajaFisicaEntidadNombre",fld:"CAJAFISICAENTIDADNOMBRE",pic:"@!"},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]];this.EvtParms["'CAJERO'"]=[[{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]];this.EvtParms["'CAJAFISICAPUNTOVENTA'"]=[[{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9",hsh:!0},{av:"AV10CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV11CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CAJERO","Visible")',ctrl:"CELL_CAJERO",prop:"Visible"},{ctrl:"CAJEROWC"},{av:'gx.fn.getCtrlProperty("CELL_CAJAFISICAPUNTOVENTA","Visible")',ctrl:"CELL_CAJAFISICAPUNTOVENTA",prop:"Visible"},{ctrl:"CAJAFISICAPUNTOVENTAWC"}]];this.setVCMap("AV12LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV13SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9CajaFisicaEntidadId","vCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV10CajaFisicaSucursalId","vCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV11CajaFisicaId","vCAJAFISICAID",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9CajaFisicaEntidadId","vCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV10CajaFisicaSucursalId","vCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV11CajaFisicaId","vCAJAFISICAID",0,"int",4,0);this.setVCMap("AV12LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV13SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"CAJEROWC",GXClass:null,Prefix:"W0034",lvl:1});this.setComponent({id:"CAJAFISICAPUNTOVENTAWC",GXClass:null,Prefix:"W0042",lvl:1})});gx.wi(function(){gx.createParentObj(viewcajafisica)})