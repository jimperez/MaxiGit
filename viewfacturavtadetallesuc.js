/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:22.22
*/
gx.evt.autoSkip=!1;gx.define("viewfacturavtadetallesuc",!1,function(){var n,t;this.ServerClass="viewfacturavtadetallesuc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV15LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV16SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV10FacVtaDetId=gx.fn.getIntegerValue("vFACVTADETID",".");this.AV11FacVtaDetEntidadId=gx.fn.getIntegerValue("vFACVTADETENTIDADID",".");this.AV12FacVtaDetSucursalId=gx.fn.getIntegerValue("vFACVTADETSUCURSALID",".");this.AV13FacVtaDetSucDepositoId=gx.fn.getIntegerValue("vFACVTADETSUCDEPOSITOID",".");this.AV14FacVtaDetSucItem=gx.fn.getIntegerValue("vFACVTADETSUCITEM",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV10FacVtaDetId=gx.fn.getIntegerValue("vFACVTADETID",".");this.AV11FacVtaDetEntidadId=gx.fn.getIntegerValue("vFACVTADETENTIDADID",".");this.AV12FacVtaDetSucursalId=gx.fn.getIntegerValue("vFACVTADETSUCURSALID",".");this.AV13FacVtaDetSucDepositoId=gx.fn.getIntegerValue("vFACVTADETSUCDEPOSITOID",".");this.AV14FacVtaDetSucItem=gx.fn.getIntegerValue("vFACVTADETSUCITEM",".");this.AV15LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV16SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV15LoadAllTabs||this.AV16SelectedTabCode==""||this.AV16SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","FacturaVtaDetalleSucGeneral",[this.AV9FacVtaId,this.AV10FacVtaDetId,this.AV11FacVtaDetEntidadId,this.AV12FacVtaDetSucursalId,this.AV13FacVtaDetSucDepositoId,this.AV14FacVtaDetSucItem]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV16SelectedTabCode==""||this.AV16SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1))};this.e14jg1_client=function(){return this.clearMessages(),this.AV16SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV15LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e11jg1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV16SelectedTabCode="General",this.AV15LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e15jg2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16jg2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,27,28,29,30,31,32];this.GXLastCtrlId=32;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",1,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e14jg1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"CELL_GENERAL",grid:0};n[32]={id:32,fld:"BTNGENERAL",grid:0,evt:"e11jg1_client"};this.AV9FacVtaId=0;this.AV10FacVtaDetId=0;this.AV11FacVtaDetEntidadId=0;this.AV12FacVtaDetSucursalId=0;this.AV13FacVtaDetSucDepositoId=0;this.AV14FacVtaDetSucItem=0;this.AV7TabCode="";this.A230FacVtaDetSucItem=0;this.A229FacVtaDetSucDepositoId=0;this.A228FacVtaDetSucursalId=0;this.A227FacVtaDetEntidadId=0;this.A222FacVtaDetId=0;this.A218FacVtaId=0;this.A1654FacVtaDetEntidadNombre="";this.AV15LoadAllTabs=!1;this.AV16SelectedTabCode="";this.Events={e15jg2_client:["ENTER",!0],e16jg2_client:["CANCEL",!0],e14jg1_client:["TABS.TABCHANGED",!1],e11jg1_client:["'GENERAL'",!1]};this.EvtParms.REFRESH=[[{av:"AV9FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV10FacVtaDetId",fld:"vFACVTADETID",pic:"ZZZ9",hsh:!0},{av:"AV11FacVtaDetEntidadId",fld:"vFACVTADETENTIDADID",pic:"Z9",hsh:!0},{av:"AV12FacVtaDetSucursalId",fld:"vFACVTADETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV13FacVtaDetSucDepositoId",fld:"vFACVTADETSUCDEPOSITOID",pic:"ZZZ9",hsh:!0},{av:"AV14FacVtaDetSucItem",fld:"vFACVTADETSUCITEM",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"AV9FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"AV10FacVtaDetId",fld:"vFACVTADETID",pic:"ZZZ9",hsh:!0},{av:"A227FacVtaDetEntidadId",fld:"FACVTADETENTIDADID",pic:"Z9"},{av:"AV11FacVtaDetEntidadId",fld:"vFACVTADETENTIDADID",pic:"Z9",hsh:!0},{av:"A228FacVtaDetSucursalId",fld:"FACVTADETSUCURSALID",pic:"ZZZ9"},{av:"AV12FacVtaDetSucursalId",fld:"vFACVTADETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A229FacVtaDetSucDepositoId",fld:"FACVTADETSUCDEPOSITOID",pic:"ZZZ9"},{av:"AV13FacVtaDetSucDepositoId",fld:"vFACVTADETSUCDEPOSITOID",pic:"ZZZ9",hsh:!0},{av:"A230FacVtaDetSucItem",fld:"FACVTADETSUCITEM",pic:"ZZZ9"},{av:"AV14FacVtaDetSucItem",fld:"vFACVTADETSUCITEM",pic:"ZZZ9",hsh:!0},{av:"A1654FacVtaDetEntidadNombre",fld:"FACVTADETENTIDADNOMBRE",pic:"@!"},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV10FacVtaDetId",fld:"vFACVTADETID",pic:"ZZZ9",hsh:!0},{av:"AV11FacVtaDetEntidadId",fld:"vFACVTADETENTIDADID",pic:"Z9",hsh:!0},{av:"AV12FacVtaDetSucursalId",fld:"vFACVTADETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV13FacVtaDetSucDepositoId",fld:"vFACVTADETSUCDEPOSITOID",pic:"ZZZ9",hsh:!0},{av:"AV14FacVtaDetSucItem",fld:"vFACVTADETSUCITEM",pic:"ZZZ9",hsh:!0}],[{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV10FacVtaDetId",fld:"vFACVTADETID",pic:"ZZZ9",hsh:!0},{av:"AV11FacVtaDetEntidadId",fld:"vFACVTADETENTIDADID",pic:"Z9",hsh:!0},{av:"AV12FacVtaDetSucursalId",fld:"vFACVTADETSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV13FacVtaDetSucDepositoId",fld:"vFACVTADETSUCDEPOSITOID",pic:"ZZZ9",hsh:!0},{av:"AV14FacVtaDetSucItem",fld:"vFACVTADETSUCITEM",pic:"ZZZ9",hsh:!0}],[{av:"AV16SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV15LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.setVCMap("AV15LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV16SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV10FacVtaDetId","vFACVTADETID",0,"int",4,0);this.setVCMap("AV11FacVtaDetEntidadId","vFACVTADETENTIDADID",0,"int",2,0);this.setVCMap("AV12FacVtaDetSucursalId","vFACVTADETSUCURSALID",0,"int",4,0);this.setVCMap("AV13FacVtaDetSucDepositoId","vFACVTADETSUCDEPOSITOID",0,"int",4,0);this.setVCMap("AV14FacVtaDetSucItem","vFACVTADETSUCITEM",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV10FacVtaDetId","vFACVTADETID",0,"int",4,0);this.setVCMap("AV11FacVtaDetEntidadId","vFACVTADETENTIDADID",0,"int",2,0);this.setVCMap("AV12FacVtaDetSucursalId","vFACVTADETSUCURSALID",0,"int",4,0);this.setVCMap("AV13FacVtaDetSucDepositoId","vFACVTADETSUCDEPOSITOID",0,"int",4,0);this.setVCMap("AV14FacVtaDetSucItem","vFACVTADETSUCITEM",0,"int",4,0);this.setVCMap("AV15LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV16SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1})});gx.wi(function(){gx.createParentObj(viewfacturavtadetallesuc)})