/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:48.41
*/
gx.evt.autoSkip=!1;gx.define("viewpersonarol",!1,function(){var n,t;this.ServerClass="viewpersonarol";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV12LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV13SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV10EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV11RolId=gx.fn.getIntegerValue("vROLID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV10EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV11RolId=gx.fn.getIntegerValue("vROLID",".");this.AV12LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV13SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV12LoadAllTabs||this.AV13SelectedTabCode==""||this.AV13SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","PersonaRolGeneral",[this.AV9PersonaId,this.AV10EntidadId,this.AV11RolId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV13SelectedTabCode==""||this.AV13SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_CUENTA","Visible",!0);(this.AV12LoadAllTabs||this.AV13SelectedTabCode=="Cuenta")&&(this.createWebComponent("Cuentawc","PersonaRolCuentaWC",[this.AV9PersonaId,this.AV10EntidadId,this.AV11RolId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Cuenta"),this.AV13SelectedTabCode=="Cuenta"&&gx.fn.setCtrlProperty("CELL_CUENTA","Visible",!1))};this.e15a71_client=function(){return this.clearMessages(),this.AV13SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]),gx.$.Deferred().resolve()};this.e11a71_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV13SelectedTabCode="General",this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]),gx.$.Deferred().resolve()};this.e12a71_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV13SelectedTabCode="Cuenta",this.AV12LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]),gx.$.Deferred().resolve()};this.e16a72_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e17a72_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,35,36,37,38,39,40,41,42,43];this.GXLastCtrlId=43;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",2,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e15a71_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"CUENTA_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLECUENTA",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"CELL_GENERAL",grid:0};n[40]={id:40,fld:"BTNGENERAL",grid:0,evt:"e11a71_client"};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"CELL_CUENTA",grid:0};n[43]={id:43,fld:"BTNCUENTA",grid:0,evt:"e12a71_client"};this.AV9PersonaId=0;this.AV10EntidadId=0;this.AV11RolId=0;this.AV7TabCode="";this.A177RolId=0;this.A44EntidadId=0;this.A63PersonaId=0;this.A1206PersonaRolDesde=gx.date.nullDate();this.AV12LoadAllTabs=!1;this.AV13SelectedTabCode="";this.Events={e16a72_client:["ENTER",!0],e17a72_client:["CANCEL",!0],e15a71_client:["TABS.TABCHANGED",!1],e11a71_client:["'GENERAL'",!1],e12a71_client:["'CUENTA'",!1]};this.EvtParms.REFRESH=[[{av:"AV9PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV10EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV11RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV9PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9"},{av:"AV10EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"A177RolId",fld:"ROLID",pic:"ZZZ9"},{av:"AV11RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0},{av:"A1206PersonaRolDesde",fld:"PERSONAROLDESDE",pic:""},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV10EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV11RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV10EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV11RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]];this.EvtParms["'CUENTA'"]=[[{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV10EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV11RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0}],[{av:"AV13SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV12LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_CUENTA","Visible")',ctrl:"CELL_CUENTA",prop:"Visible"},{ctrl:"CUENTAWC"}]];this.setVCMap("AV12LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV13SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV10EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV11RolId","vROLID",0,"int",4,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV10EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV11RolId","vROLID",0,"int",4,0);this.setVCMap("AV12LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV13SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"CUENTAWC",GXClass:null,Prefix:"W0034",lvl:1})});gx.wi(function(){gx.createParentObj(viewpersonarol)})