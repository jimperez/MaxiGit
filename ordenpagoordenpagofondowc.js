/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:2.2
*/
gx.evt.autoSkip=!1;gx.define("ordenpagoordenpagofondowc",!0,function(n){var t,r,i,u;this.ServerClass="ordenpagoordenpagofondowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV64Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".");this.AV57TotOrdPgoFondoImporte=gx.fn.getDecimalValue("vTOTORDPGOFONDOIMPORTE",".",",");this.AV7OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".");this.AV64Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV57TotOrdPgoFondoImporte=gx.fn.getDecimalValue("vTOTORDPGOFONDOIMPORTE",".",",")};this.Valid_Fondoid=function(){var n=gx.fn.currentGridRowImpl(20);return this.validCliEvt("Valid_Fondoid",20,function(){try{if(gx.fn.currentGridRowImpl(20)===0)return!0;var n=gx.util.balloon.getNew("FONDOID",gx.fn.currentGridRowImpl(20));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV57TotOrdPgoFondoImporte=0};this.e14j32_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15j32_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,32,33,34,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",20,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"ordenpagoordenpagofondowc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(38,21,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(345,22,"FONDONOMBRE","Fondo","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2075,23,"ORDPGOFONDOIMPORTE","Importe","","OrdPgoFondoImporte","decimal",0,"px",13,13,"right",null,[],2075,"OrdPgoFondoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Fondos","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,37,32,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"GRIDTABLEWITHTOTALIZERS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[22],ip:[22,21],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(20),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(20),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOFONDOIMPORTE",gxz:"Z2075OrdPgoFondoImporte",gxold:"O2075OrdPgoFondoImporte",gxvar:"A2075OrdPgoFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2075OrdPgoFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2075OrdPgoFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOFONDOIMPORTE",n||gx.fn.currentGridRowImpl(20),gx.O.A2075OrdPgoFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2075OrdPgoFondoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOFONDOIMPORTE",n||gx.fn.currentGridRowImpl(20),".",",")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"HTML_GRIDTOTALIZER",grid:0};t[27]={id:27,fld:"GRIDTABLETOTALIZER",grid:0};t[32]={id:32,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEORDPGOFONDOIMPORTE",gxz:"ZV58TotValueOrdPgoFondoImporte",gxold:"OV58TotValueOrdPgoFondoImporte",gxvar:"AV58TotValueOrdPgoFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV58TotValueOrdPgoFondoImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV58TotValueOrdPgoFondoImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEORDPGOFONDOIMPORTE",gx.O.AV58TotValueOrdPgoFondoImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV58TotValueOrdPgoFondoImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEORDPGOFONDOIMPORTE")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[36]={id:36,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOID",gx.O.A84OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOID",".")},nac:gx.falseFn};this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.Z2075OrdPgoFondoImporte=0;this.O2075OrdPgoFondoImporte=0;this.AV58TotValueOrdPgoFondoImporte="";this.ZV58TotValueOrdPgoFondoImporte="";this.OV58TotValueOrdPgoFondoImporte="";this.A84OrdPgoId=0;this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.AV58TotValueOrdPgoFondoImporte="";this.A84OrdPgoId=0;this.AV7OrdPgoId=0;this.A38FondoId=0;this.A345FondoNombre="";this.A2075OrdPgoFondoImporte=0;this.AV64Pgmname="";this.AV57TotOrdPgoFondoImporte=0;this.Events={e14j32_client:["ENTER",!0],e15j32_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"}],[{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV58TotValueOrdPgoFondoImporte",fld:"vTOTVALUEORDPGOFONDOIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("ORDPGOID","Visible")',ctrl:"ORDPGOID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV58TotValueOrdPgoFondoImporte",fld:"vTOTVALUEORDPGOFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV58TotValueOrdPgoFondoImporte",fld:"vTOTVALUEORDPGOFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV58TotValueOrdPgoFondoImporte",fld:"vTOTVALUEORDPGOFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV57TotOrdPgoFondoImporte",fld:"vTOTORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV58TotValueOrdPgoFondoImporte",fld:"vTOTVALUEORDPGOFONDOIMPORTE",pic:""}]];this.EvtParms.VALID_FONDOID=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"}]];this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV57TotOrdPgoFondoImporte","vTOTORDPGOFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV57TotOrdPgoFondoImporte","vTOTORDPGOFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV57TotOrdPgoFondoImporte","vTOTORDPGOFONDOIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7OrdPgoId"});r.addRefreshingVar({rfrVar:"AV64Pgmname"});r.addRefreshingVar({rfrVar:"AV57TotOrdPgoFondoImporte"});r.addRefreshingVar(this.GXValidFnc[36]);r.addRefreshingParm({rfrVar:"AV7OrdPgoId"});r.addRefreshingParm({rfrVar:"AV64Pgmname"});r.addRefreshingParm({rfrVar:"AV57TotOrdPgoFondoImporte"});r.addRefreshingParm(this.GXValidFnc[36]);this.Initialize()})