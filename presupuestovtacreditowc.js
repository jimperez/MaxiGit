/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:52.12
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtacreditowc",!0,function(n){var t,i,r,u;this.ServerClass="presupuestovtacreditowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2137CreditoDescripcion=gx.fn.getControlValue("CREDITODESCRIPCION");this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2138CreditoCuotaCosto=gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",");this.A2139CreditoCuotaDesde=gx.fn.getDateValue("CREDITOCUOTADESDE");this.A2140CreditoCuotaHasta=gx.fn.getDateValue("CREDITOCUOTAHASTA");this.AV62Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV53TotPreCreditoImporte=gx.fn.getDecimalValue("vTOTPRECREDITOIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV62Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV53TotPreCreditoImporte=gx.fn.getDecimalValue("vTOTPRECREDITOIMPORTE",".",",")};this.Valid_Creditoid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Creditoid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("CREDITOID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuota=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Creditocuota",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTA",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV53TotPreCreditoImporte=0};this.e14jq2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15jq2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,43,44,45,46,47];this.GXLastCtrlId=47;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtacreditowc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(270,18,"PRECREDITODETID","Pre Credito Det Id","","PreCreditoDetId","int",0,"px",4,4,"right",null,[],270,"PreCreditoDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(266,19,"CREDITOID","Ide.","","CreditoId","int",0,"px",8,8,"right",null,[],266,"CreditoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(267,20,"CREDITOCUOTA","Cuota","","CreditoCuota","int",0,"px",4,4,"right",null,[],267,"CreditoCuota",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2136,21,"CREDITOCUOTANOMBRE","Planes Vigentes","","CreditoCuotaNombre","char",0,"px",100,80,"left",null,[],2136,"CreditoCuotaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2132,22,"PRECREDITOIMPORTEORI","Imp. Fin.","","PreCreditoImporteOri","decimal",0,"px",13,13,"right",null,[],2132,"PreCreditoImporteOri",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2149,23,"PRECREDITOCOSTO","%","","PreCreditoCosto","decimal",0,"px",6,6,"right",null,[],2149,"PreCreditoCosto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2150,24,"PRECREDITOCUOTACANTIDAD","Cantidad","","PreCreditoCuotaCantidad","int",0,"px",4,4,"right",null,[],2150,"PreCreditoCuotaCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2151,25,"PRECREDITOCUOTAIMPORTE","Cuota","","PreCreditoCuotaImporte","decimal",0,"px",13,13,"right",null,[],2151,"PreCreditoCuotaImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2178,26,"PRECREDITOCONTRATOID","Pre Credito Contrato Id","","PreCreditoContratoId","int",0,"px",8,8,"right",null,[],2178,"PreCreditoContratoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2130,27,"PRECREDITOIMPORTE","Importe","","PreCreditoImporte","decimal",0,"px",13,13,"right",null,[],2130,"PreCreditoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");r=this.DVPANEL_TABLEGRIDHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Créditos","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,48,43,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHTOTALIZERS",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITODETID",gxz:"Z270PreCreditoDetId",gxold:"O270PreCreditoDetId",gxvar:"A270PreCreditoDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A270PreCreditoDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z270PreCreditoDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRECREDITODETID",n||gx.fn.currentGridRowImpl(17),gx.O.A270PreCreditoDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A270PreCreditoDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRECREDITODETID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOID",n||gx.fn.currentGridRowImpl(17),gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(17),gx.O.A267CreditoCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A2136CreditoCuotaNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOIMPORTEORI",gxz:"Z2132PreCreditoImporteOri",gxold:"O2132PreCreditoImporteOri",gxvar:"A2132PreCreditoImporteOri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2132PreCreditoImporteOri=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2132PreCreditoImporteOri=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRECREDITOIMPORTEORI",n||gx.fn.currentGridRowImpl(17),gx.O.A2132PreCreditoImporteOri,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2132PreCreditoImporteOri=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRECREDITOIMPORTEORI",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOCOSTO",gxz:"Z2149PreCreditoCosto",gxold:"O2149PreCreditoCosto",gxvar:"A2149PreCreditoCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2149PreCreditoCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2149PreCreditoCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRECREDITOCOSTO",n||gx.fn.currentGridRowImpl(17),gx.O.A2149PreCreditoCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2149PreCreditoCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRECREDITOCOSTO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOCUOTACANTIDAD",gxz:"Z2150PreCreditoCuotaCantidad",gxold:"O2150PreCreditoCuotaCantidad",gxvar:"A2150PreCreditoCuotaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2150PreCreditoCuotaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2150PreCreditoCuotaCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRECREDITOCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(17),gx.O.A2150PreCreditoCuotaCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2150PreCreditoCuotaCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRECREDITOCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOCUOTAIMPORTE",gxz:"Z2151PreCreditoCuotaImporte",gxold:"O2151PreCreditoCuotaImporte",gxvar:"A2151PreCreditoCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2151PreCreditoCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2151PreCreditoCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRECREDITOCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A2151PreCreditoCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2151PreCreditoCuotaImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRECREDITOCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOCONTRATOID",gxz:"Z2178PreCreditoContratoId",gxold:"O2178PreCreditoContratoId",gxvar:"A2178PreCreditoContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2178PreCreditoContratoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2178PreCreditoContratoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRECREDITOCONTRATOID",n||gx.fn.currentGridRowImpl(17),gx.O.A2178PreCreditoContratoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2178PreCreditoContratoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRECREDITOCONTRATOID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECREDITOIMPORTE",gxz:"Z2130PreCreditoImporte",gxold:"O2130PreCreditoImporte",gxvar:"A2130PreCreditoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2130PreCreditoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2130PreCreditoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRECREDITOIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A2130PreCreditoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2130PreCreditoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRECREDITOIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"HTML_GRIDTOTALIZER",grid:0};t[31]={id:31,fld:"GRIDTABLETOTALIZER",grid:0};t[43]={id:43,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPRECREDITOIMPORTE",gxz:"ZV54TotValuePreCreditoImporte",gxold:"OV54TotValuePreCreditoImporte",gxvar:"AV54TotValuePreCreditoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV54TotValuePreCreditoImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV54TotValuePreCreditoImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPRECREDITOIMPORTE",gx.O.AV54TotValuePreCreditoImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV54TotValuePreCreditoImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPRECREDITOIMPORTE")},nac:gx.falseFn};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[47]={id:47,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z270PreCreditoDetId=0;this.O270PreCreditoDetId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.Z2132PreCreditoImporteOri=0;this.O2132PreCreditoImporteOri=0;this.Z2149PreCreditoCosto=0;this.O2149PreCreditoCosto=0;this.Z2150PreCreditoCuotaCantidad=0;this.O2150PreCreditoCuotaCantidad=0;this.Z2151PreCreditoCuotaImporte=0;this.O2151PreCreditoCuotaImporte=0;this.Z2178PreCreditoContratoId=0;this.O2178PreCreditoContratoId=0;this.Z2130PreCreditoImporte=0;this.O2130PreCreditoImporte=0;this.AV54TotValuePreCreditoImporte="";this.ZV54TotValuePreCreditoImporte="";this.OV54TotValuePreCreditoImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV54TotValuePreCreditoImporte="";this.A89PreId=0;this.AV7PreId=0;this.A1040PlanNombre="";this.A2137CreditoDescripcion="";this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.A119PlanId=0;this.A270PreCreditoDetId=0;this.A266CreditoId=0;this.A267CreditoCuota=0;this.A2136CreditoCuotaNombre="";this.A2132PreCreditoImporteOri=0;this.A2149PreCreditoCosto=0;this.A2150PreCreditoCuotaCantidad=0;this.A2151PreCreditoCuotaImporte=0;this.A2178PreCreditoContratoId=0;this.A2130PreCreditoImporte=0;this.AV62Pgmname="";this.AV53TotPreCreditoImporte=0;this.Events={e14jq2_client:["ENTER",!0],e15jq2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2132PreCreditoImporteOri",fld:"PRECREDITOIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2130PreCreditoImporte",fld:"PRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV54TotValuePreCreditoImporte",fld:"vTOTVALUEPRECREDITOIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2132PreCreditoImporteOri",fld:"PRECREDITOIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2130PreCreditoImporte",fld:"PRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV54TotValuePreCreditoImporte",fld:"vTOTVALUEPRECREDITOIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2132PreCreditoImporteOri",fld:"PRECREDITOIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2130PreCreditoImporte",fld:"PRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV54TotValuePreCreditoImporte",fld:"vTOTVALUEPRECREDITOIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2132PreCreditoImporteOri",fld:"PRECREDITOIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2130PreCreditoImporte",fld:"PRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV54TotValuePreCreditoImporte",fld:"vTOTVALUEPRECREDITOIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV62Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2132PreCreditoImporteOri",fld:"PRECREDITOIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2130PreCreditoImporte",fld:"PRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV53TotPreCreditoImporte",fld:"vTOTPRECREDITOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV54TotValuePreCreditoImporte",fld:"vTOTVALUEPRECREDITOIMPORTE",pic:""}]];this.EvtParms.VALID_CREDITOID=[[],[]];this.EvtParms.VALID_CREDITOCUOTA=[[],[]];this.setVCMap("A2137CreditoDescripcion","CREDITODESCRIPCION",0,"char",30,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2138CreditoCuotaCosto","CREDITOCUOTACOSTO",0,"decimal",6,2);this.setVCMap("A2139CreditoCuotaDesde","CREDITOCUOTADESDE",0,"date",8,0);this.setVCMap("A2140CreditoCuotaHasta","CREDITOCUOTAHASTA",0,"date",8,0);this.setVCMap("AV62Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV53TotPreCreditoImporte","vTOTPRECREDITOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV62Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV53TotPreCreditoImporte","vTOTPRECREDITOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV62Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV53TotPreCreditoImporte","vTOTPRECREDITOIMPORTE",0,"decimal",18,2);i.addRefreshingVar({rfrVar:"AV7PreId"});i.addRefreshingVar({rfrVar:"AV62Pgmname"});i.addRefreshingVar({rfrVar:"AV53TotPreCreditoImporte"});i.addRefreshingVar(this.GXValidFnc[47]);i.addRefreshingParm({rfrVar:"AV7PreId"});i.addRefreshingParm({rfrVar:"AV62Pgmname"});i.addRefreshingParm({rfrVar:"AV53TotPreCreditoImporte"});i.addRefreshingParm(this.GXValidFnc[47]);this.Initialize()})