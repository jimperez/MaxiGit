/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:15:15.37
*/
gx.evt.autoSkip=!1;gx.define("viewtarjetaemiplansucursal",!1,function(){var n,t;this.ServerClass="viewtarjetaemiplansucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV14LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV15SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV10EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV11TrjPlanId=gx.fn.getIntegerValue("vTRJPLANID",".");this.AV12EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV13SucursalId=gx.fn.getIntegerValue("vSUCURSALID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV10EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV11TrjPlanId=gx.fn.getIntegerValue("vTRJPLANID",".");this.AV12EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV13SucursalId=gx.fn.getIntegerValue("vSUCURSALID",".");this.AV14LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV15SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV14LoadAllTabs||this.AV15SelectedTabCode==""||this.AV15SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","TarjetaEmiPlanSucursalGeneral",[this.AV9TrjId,this.AV10EmisorTrjId,this.AV11TrjPlanId,this.AV12EntidadId,this.AV13SucursalId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV15SelectedTabCode==""||this.AV15SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1))};this.e144d1_client=function(){return this.clearMessages(),this.AV15SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV14LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e114d1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV15SelectedTabCode="General",this.AV14LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e154d2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e164d2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,27,28,29,30,31,32];this.GXLastCtrlId=32;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",1,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e144d1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"CELL_GENERAL",grid:0};n[32]={id:32,fld:"BTNGENERAL",grid:0,evt:"e114d1_client"};this.AV9TrjId=0;this.AV10EmisorTrjId=0;this.AV11TrjPlanId=0;this.AV12EntidadId=0;this.AV13SucursalId=0;this.AV7TabCode="";this.A45SucursalId=0;this.A44EntidadId=0;this.A98TrjPlanId=0;this.A97EmisorTrjId=0;this.A96TrjId=0;this.A1030EmisorTrjNombre="";this.A849TrjNom="";this.A1524TarjetaEmiNombre="";this.A374SucursalNombre="";this.A858TrjPlanCosto=0;this.A1040PlanNombre="";this.A2652TrjPlanSucursalDescripcion="";this.A119PlanId=0;this.AV14LoadAllTabs=!1;this.AV15SelectedTabCode="";this.Events={e154d2_client:["ENTER",!0],e164d2_client:["CANCEL",!0],e144d1_client:["TABS.TABCHANGED",!1],e114d1_client:["'GENERAL'",!1]};this.EvtParms.REFRESH=[[{av:"AV9TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"AV10EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"AV11TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9",hsh:!0},{av:"AV12EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV13SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"AV9TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"AV10EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9"},{av:"AV11TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9"},{av:"AV12EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9"},{av:"AV13SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A2652TrjPlanSucursalDescripcion",fld:"TRJPLANSUCURSALDESCRIPCION",pic:""},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"AV10EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"AV11TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9",hsh:!0},{av:"AV12EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV13SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0},{av:"AV10EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"AV11TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9",hsh:!0},{av:"AV12EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV13SucursalId",fld:"vSUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV15SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV14LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"}]];this.setVCMap("A849TrjNom","TRJNOM",0,"svchar",64,0);this.setVCMap("A1030EmisorTrjNombre","EMISORTRJNOMBRE",0,"svchar",64,0);this.setVCMap("A1524TarjetaEmiNombre","TARJETAEMINOMBRE",0,"svchar",64,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A858TrjPlanCosto","TRJPLANCOSTO",0,"decimal",6,2);this.setVCMap("A374SucursalNombre","SUCURSALNOMBRE",0,"svchar",64,0);this.setVCMap("A2652TrjPlanSucursalDescripcion","TRJPLANSUCURSALDESCRIPCION",0,"char",100,0);this.setVCMap("AV14LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV15SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV10EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV11TrjPlanId","vTRJPLANID",0,"int",4,0);this.setVCMap("AV12EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV13SucursalId","vSUCURSALID",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV10EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV11TrjPlanId","vTRJPLANID",0,"int",4,0);this.setVCMap("AV12EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV13SucursalId","vSUCURSALID",0,"int",4,0);this.setVCMap("AV14LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV15SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1})});gx.wi(function(){gx.createParentObj(viewtarjetaemiplansucursal)})