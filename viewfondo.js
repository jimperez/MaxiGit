/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:17:46.89
*/
gx.evt.autoSkip=!1;gx.define("viewfondo",!1,function(){var n,t;this.ServerClass="viewfondo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9FondoId=gx.fn.getIntegerValue("vFONDOID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9FondoId=gx.fn.getIntegerValue("vFONDOID",".");this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","FondoGeneral",[this.AV9FondoId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_TIPOCAJA","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="TipoCaja")&&(this.createWebComponent("Tipocajawc","FondoTipoCajaWC",[this.AV9FondoId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Tipo Caja"),this.AV11SelectedTabCode=="TipoCaja"&&gx.fn.setCtrlProperty("CELL_TIPOCAJA","Visible",!1))};this.e159j1_client=function(){return this.clearMessages(),this.AV11SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]),gx.$.Deferred().resolve()};this.e119j1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV11SelectedTabCode="General",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]),gx.$.Deferred().resolve()};this.e129j1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV11SelectedTabCode="TipoCaja",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]),gx.$.Deferred().resolve()};this.e169j2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e179j2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,35,36,37,38,39,40,41,42,43];this.GXLastCtrlId=43;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",2,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e159j1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"TIPOCAJA_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLETIPOCAJA",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"CELL_GENERAL",grid:0};n[40]={id:40,fld:"BTNGENERAL",grid:0,evt:"e119j1_client"};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"CELL_TIPOCAJA",grid:0};n[43]={id:43,fld:"BTNTIPOCAJA",grid:0,evt:"e129j1_client"};this.AV9FondoId=0;this.AV7TabCode="";this.A38FondoId=0;this.A345FondoNombre="";this.AV10LoadAllTabs=!1;this.AV11SelectedTabCode="";this.Events={e169j2_client:["ENTER",!0],e179j2_client:["CANCEL",!0],e159j1_client:["TABS.TABCHANGED",!1],e119j1_client:["'GENERAL'",!1],e129j1_client:["'TIPOCAJA'",!1]};this.EvtParms.REFRESH=[[{av:"AV9FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"},{av:"AV9FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0},{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]];this.EvtParms["'TIPOCAJA'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_TIPOCAJA","Visible")',ctrl:"CELL_TIPOCAJA",prop:"Visible"},{ctrl:"TIPOCAJAWC"}]];this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9FondoId","vFONDOID",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9FondoId","vFONDOID",0,"int",4,0);this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"TIPOCAJAWC",GXClass:null,Prefix:"W0034",lvl:1})});gx.wi(function(){gx.createParentObj(viewfondo)})