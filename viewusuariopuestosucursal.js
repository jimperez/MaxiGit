/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:45.66
*/
gx.evt.autoSkip=!1;gx.define("viewusuariopuestosucursal",!1,function(){var n,t;this.ServerClass="viewusuariopuestosucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9UsuID=gx.fn.getIntegerValue("vUSUID",".");this.AV10PuestoId=gx.fn.getIntegerValue("vPUESTOID",".");this.AV13PuestoEntidadId=gx.fn.getIntegerValue("vPUESTOENTIDADID",".");this.AV14PuestoSucursalId=gx.fn.getIntegerValue("vPUESTOSUCURSALID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9UsuID=gx.fn.getIntegerValue("vUSUID",".");this.AV10PuestoId=gx.fn.getIntegerValue("vPUESTOID",".");this.AV13PuestoEntidadId=gx.fn.getIntegerValue("vPUESTOENTIDADID",".");this.AV14PuestoSucursalId=gx.fn.getIntegerValue("vPUESTOSUCURSALID",".");this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","UsuarioPuestoSucursalGeneral",[this.AV9UsuID,this.AV10PuestoId,this.AV13PuestoEntidadId,this.AV14PuestoSucursalId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1))};this.e149x1_client=function(){return this.clearMessages(),this.AV12SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e119x1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV12SelectedTabCode="General",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e159x2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e169x2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,27,28,29,30,31,32];this.GXLastCtrlId=32;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",1,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e149x1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"CELL_GENERAL",grid:0};n[32]={id:32,fld:"BTNGENERAL",grid:0,evt:"e119x1_client"};this.AV9UsuID=0;this.AV10PuestoId=0;this.AV13PuestoEntidadId=0;this.AV14PuestoSucursalId=0;this.AV7TabCode="";this.A152PuestoSucursalId=0;this.A151PuestoEntidadId=0;this.A150PuestoId=0;this.A41UsuID=0;this.A980UsuarioPuestoEstadoActual="";this.AV11LoadAllTabs=!1;this.AV12SelectedTabCode="";this.Events={e159x2_client:["ENTER",!0],e169x2_client:["CANCEL",!0],e149x1_client:["TABS.TABCHANGED",!1],e119x1_client:["'GENERAL'",!1]};this.EvtParms.REFRESH=[[{av:"AV9UsuID",fld:"vUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV10PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV13PuestoEntidadId",fld:"vPUESTOENTIDADID",pic:"Z9",hsh:!0},{av:"AV14PuestoSucursalId",fld:"vPUESTOSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A41UsuID",fld:"USUID",pic:"ZZZZZZZZZZ9"},{av:"AV9UsuID",fld:"vUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"AV10PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A151PuestoEntidadId",fld:"PUESTOENTIDADID",pic:"Z9"},{av:"AV13PuestoEntidadId",fld:"vPUESTOENTIDADID",pic:"Z9",hsh:!0},{av:"A152PuestoSucursalId",fld:"PUESTOSUCURSALID",pic:"ZZZ9"},{av:"AV14PuestoSucursalId",fld:"vPUESTOSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A980UsuarioPuestoEstadoActual",fld:"USUARIOPUESTOESTADOACTUAL",pic:""},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9UsuID",fld:"vUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV10PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV13PuestoEntidadId",fld:"vPUESTOENTIDADID",pic:"Z9",hsh:!0},{av:"AV14PuestoSucursalId",fld:"vPUESTOSUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9UsuID",fld:"vUSUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV10PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV13PuestoEntidadId",fld:"vPUESTOENTIDADID",pic:"Z9",hsh:!0},{av:"AV14PuestoSucursalId",fld:"vPUESTOSUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9UsuID","vUSUID",0,"int",11,0);this.setVCMap("AV10PuestoId","vPUESTOID",0,"int",9,0);this.setVCMap("AV13PuestoEntidadId","vPUESTOENTIDADID",0,"int",2,0);this.setVCMap("AV14PuestoSucursalId","vPUESTOSUCURSALID",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9UsuID","vUSUID",0,"int",11,0);this.setVCMap("AV10PuestoId","vPUESTOID",0,"int",9,0);this.setVCMap("AV13PuestoEntidadId","vPUESTOENTIDADID",0,"int",2,0);this.setVCMap("AV14PuestoSucursalId","vPUESTOSUCURSALID",0,"int",4,0);this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1})});gx.wi(function(){gx.createParentObj(viewusuariopuestosucursal)})