/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:54.5
*/
gx.evt.autoSkip=!1;gx.define("ordenpagoordenpagoretencionwc",!0,function(n){var t,r,i;this.ServerClass="ordenpagoordenpagoretencionwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".");this.AV18TotOrdPgoImpuestoImporte=gx.fn.getDecimalValue("vTOTORDPGOIMPUESTOIMPORTE",".",",");this.AV7OrdPgoId=gx.fn.getIntegerValue("vORDPGOID",".");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotOrdPgoImpuestoImporte=gx.fn.getDecimalValue("vTOTORDPGOIMPUESTOIMPORTE",".",",")};this.Valid_Impuestoid=function(){var n=gx.fn.currentGridRowImpl(14);return this.validCliEvt("Valid_Impuestoid",14,function(){try{if(gx.fn.currentGridRowImpl(14)===0)return!0;var n=gx.util.balloon.getNew("IMPUESTOID",gx.fn.currentGridRowImpl(14));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV18TotOrdPgoImpuestoImporte=0};this.e14j52_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15j52_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];this.GXLastCtrlId=30;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"ordenpagoordenpagoretencionwc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(77,15,"IMPUESTOID","Ide.","","ImpuestoId","int",0,"px",4,4,"right",null,[],77,"ImpuestoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(391,16,"IMPUESTONOMBRE","Impuesto","","ImpuestoNombre","svchar",0,"px",64,64,"left",null,[],391,"ImpuestoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2697,17,"ORDPGOIMPUESTOALICUOTA","Alicuota","","OrdPgoImpuestoAlicuota","int",0,"px",4,4,"right",null,[],2697,"OrdPgoImpuestoAlicuota",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2698,18,"ORDPGOIMPUESTOIMPORTE","Importe","","OrdPgoImpuestoImporte","decimal",0,"px",13,13,"right",null,[],2698,"OrdPgoImpuestoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Retenciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"UNNAMEDTABLE1",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[15]={id:15,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:this.Valid_Impuestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOID",gxz:"Z77ImpuestoId",gxold:"O77ImpuestoId",gxvar:"A77ImpuestoId",ucs:[],op:[16],ip:[16,15],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z77ImpuestoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("IMPUESTOID",n||gx.fn.currentGridRowImpl(14),gx.O.A77ImpuestoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("IMPUESTOID",n||gx.fn.currentGridRowImpl(14),".")},nac:gx.falseFn};t[16]={id:16,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTONOMBRE",gxz:"Z391ImpuestoNombre",gxold:"O391ImpuestoNombre",gxvar:"A391ImpuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A391ImpuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z391ImpuestoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("IMPUESTONOMBRE",n||gx.fn.currentGridRowImpl(14),gx.O.A391ImpuestoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A391ImpuestoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("IMPUESTONOMBRE",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOIMPUESTOALICUOTA",gxz:"Z2697OrdPgoImpuestoAlicuota",gxold:"O2697OrdPgoImpuestoAlicuota",gxvar:"A2697OrdPgoImpuestoAlicuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2697OrdPgoImpuestoAlicuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2697OrdPgoImpuestoAlicuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOIMPUESTOALICUOTA",n||gx.fn.currentGridRowImpl(14),gx.O.A2697OrdPgoImpuestoAlicuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2697OrdPgoImpuestoAlicuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOIMPUESTOALICUOTA",n||gx.fn.currentGridRowImpl(14),".")},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOIMPUESTOIMPORTE",gxz:"Z2698OrdPgoImpuestoImporte",gxold:"O2698OrdPgoImpuestoImporte",gxvar:"A2698OrdPgoImpuestoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2698OrdPgoImpuestoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2698OrdPgoImpuestoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOIMPUESTOIMPORTE",n||gx.fn.currentGridRowImpl(14),gx.O.A2698OrdPgoImpuestoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2698OrdPgoImpuestoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOIMPUESTOIMPORTE",n||gx.fn.currentGridRowImpl(14),".",",")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"UNNAMEDTABLE2",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",gxz:"ZV19TotValueOrdPgoImpuestoImporte",gxold:"OV19TotValueOrdPgoImpuestoImporte",gxvar:"AV19TotValueOrdPgoImpuestoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotValueOrdPgoImpuestoImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19TotValueOrdPgoImpuestoImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEORDPGOIMPUESTOIMPORTE",gx.O.AV19TotValueOrdPgoImpuestoImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotValueOrdPgoImpuestoImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEORDPGOIMPUESTOIMPORTE")},nac:gx.falseFn};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[30]={id:30,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ORDPGOID",gx.O.A84OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ORDPGOID",".")},nac:gx.falseFn};this.Z77ImpuestoId=0;this.O77ImpuestoId=0;this.Z391ImpuestoNombre="";this.O391ImpuestoNombre="";this.Z2697OrdPgoImpuestoAlicuota=0;this.O2697OrdPgoImpuestoAlicuota=0;this.Z2698OrdPgoImpuestoImporte=0;this.O2698OrdPgoImpuestoImporte=0;this.AV19TotValueOrdPgoImpuestoImporte="";this.ZV19TotValueOrdPgoImpuestoImporte="";this.OV19TotValueOrdPgoImpuestoImporte="";this.A84OrdPgoId=0;this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.AV19TotValueOrdPgoImpuestoImporte="";this.A84OrdPgoId=0;this.AV7OrdPgoId=0;this.A77ImpuestoId=0;this.A391ImpuestoNombre="";this.A2697OrdPgoImpuestoAlicuota=0;this.A2698OrdPgoImpuestoImporte=0;this.AV25Pgmname="";this.AV18TotOrdPgoImpuestoImporte=0;this.Events={e14j52_client:["ENTER",!0],e15j52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"}],[{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValueOrdPgoImpuestoImporte",fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("ORDPGOID","Visible")',ctrl:"ORDPGOID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValueOrdPgoImpuestoImporte",fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValueOrdPgoImpuestoImporte",fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValueOrdPgoImpuestoImporte",fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV7OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotOrdPgoImpuestoImporte",fld:"vTOTORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValueOrdPgoImpuestoImporte",fld:"vTOTVALUEORDPGOIMPUESTOIMPORTE",pic:""}]];this.EvtParms.VALID_IMPUESTOID=[[{av:"A391ImpuestoNombre",fld:"IMPUESTONOMBRE",pic:"@!"},{av:"A77ImpuestoId",fld:"IMPUESTOID",pic:"ZZZ9"}],[{av:"A391ImpuestoNombre",fld:"IMPUESTONOMBRE",pic:"@!"}]];this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV18TotOrdPgoImpuestoImporte","vTOTORDPGOIMPUESTOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotOrdPgoImpuestoImporte","vTOTORDPGOIMPUESTOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7OrdPgoId","vORDPGOID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotOrdPgoImpuestoImporte","vTOTORDPGOIMPUESTOIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7OrdPgoId"});r.addRefreshingVar({rfrVar:"AV25Pgmname"});r.addRefreshingVar({rfrVar:"AV18TotOrdPgoImpuestoImporte"});r.addRefreshingVar(this.GXValidFnc[30]);r.addRefreshingParm({rfrVar:"AV7OrdPgoId"});r.addRefreshingParm({rfrVar:"AV25Pgmname"});r.addRefreshingParm({rfrVar:"AV18TotOrdPgoImpuestoImporte"});r.addRefreshingParm(this.GXValidFnc[30]);this.Initialize()})