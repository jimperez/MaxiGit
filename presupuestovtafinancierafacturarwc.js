/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:47.79
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtafinancierafacturarwc",!0,function(n){var t,i,r,u;this.ServerClass="presupuestovtafinancierafacturarwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1073FinancieraDenominacion=gx.fn.getControlValue("FINANCIERADENOMINACION");this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2098FinancieraPlanCosto=gx.fn.getDecimalValue("FINANCIERAPLANCOSTO",".",",");this.A2099FinancieraPlanDesde=gx.fn.getDateValue("FINANCIERAPLANDESDE");this.A2100FinancieraPlanHasta=gx.fn.getDateValue("FINANCIERAPLANHASTA");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV18TotPreFinancieraImporte=gx.fn.getDecimalValue("vTOTPREFINANCIERAIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotPreFinancieraImporte=gx.fn.getDecimalValue("vTOTPREFINANCIERAIMPORTE",".",",")};this.Valid_Financieraid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Financieraid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieraplanid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Financieraplanid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAPLANID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV18TotPreFinancieraImporte=0};this.e14k02_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15k02_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,41,42,43,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtafinancierafacturarwc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(202,18,"PREFINANCIERADETID","Pre Financiera Det Id","","PreFinancieraDetId","int",0,"px",4,4,"right",null,[],202,"PreFinancieraDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(159,19,"FINANCIERAID","Ide.","","FinancieraId","int",0,"px",15,15,"right",null,[],159,"FinancieraId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(203,20,"FINANCIERAPLANID","Ide.","","FinancieraPlanId","int",0,"px",8,8,"right",null,[],203,"FinancieraPlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2101,21,"FINANCIERAPLANNOMBRE","Planes Vigentes","","FinancieraPlanNombre","char",0,"px",100,80,"left",null,[],2101,"FinancieraPlanNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1351,22,"PREFINANCIERACOSTO","Pre Financiera Costo","","PreFinancieraCosto","decimal",0,"px",6,6,"right",null,[],1351,"PreFinancieraCosto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1350,23,"PREFINANCIERAIMPORTEORI","Imp. Fin.","","PreFinancieraImporteOri","decimal",0,"px",13,13,"right",null,[],1350,"PreFinancieraImporteOri",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2115,24,"PREFINANCIERACUOTACANTIDAD","Cantidad","","PreFinancieraCuotaCantidad","int",0,"px",4,4,"right",null,[],2115,"PreFinancieraCuotaCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2116,25,"PREFINANCIERACUOTAIMPORTE","Cuota","","PreFinancieraCuotaImporte","decimal",0,"px",13,13,"right",null,[],2116,"PreFinancieraCuotaImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1352,26,"PREFINANCIERAIMPORTE","Importe","","PreFinancieraImporte","decimal",0,"px",13,13,"right",null,[],1352,"PreFinancieraImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");r=this.DVPANEL_TABLEGRIDHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Financieras","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,46,41,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHTOTALIZERS",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERADETID",gxz:"Z202PreFinancieraDetId",gxold:"O202PreFinancieraDetId",gxvar:"A202PreFinancieraDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A202PreFinancieraDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z202PreFinancieraDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREFINANCIERADETID",n||gx.fn.currentGridRowImpl(17),gx.O.A202PreFinancieraDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A202PreFinancieraDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREFINANCIERADETID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Financieraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAID",gxz:"Z159FinancieraId",gxold:"O159FinancieraId",gxvar:"A159FinancieraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z159FinancieraId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAID",n||gx.fn.currentGridRowImpl(17),gx.O.A159FinancieraId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FINANCIERAID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Financieraplanid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANID",gxz:"Z203FinancieraPlanId",gxold:"O203FinancieraPlanId",gxvar:"A203FinancieraPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z203FinancieraPlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANID",n||gx.fn.currentGridRowImpl(17),gx.O.A203FinancieraPlanId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FINANCIERAPLANID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"char",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANNOMBRE",gxz:"Z2101FinancieraPlanNombre",gxold:"O2101FinancieraPlanNombre",gxvar:"A2101FinancieraPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2101FinancieraPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2101FinancieraPlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANNOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A2101FinancieraPlanNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2101FinancieraPlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FINANCIERAPLANNOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERACOSTO",gxz:"Z1351PreFinancieraCosto",gxold:"O1351PreFinancieraCosto",gxvar:"A1351PreFinancieraCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1351PreFinancieraCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1351PreFinancieraCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFINANCIERACOSTO",n||gx.fn.currentGridRowImpl(17),gx.O.A1351PreFinancieraCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1351PreFinancieraCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFINANCIERACOSTO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERAIMPORTEORI",gxz:"Z1350PreFinancieraImporteOri",gxold:"O1350PreFinancieraImporteOri",gxvar:"A1350PreFinancieraImporteOri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1350PreFinancieraImporteOri=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1350PreFinancieraImporteOri=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFINANCIERAIMPORTEORI",n||gx.fn.currentGridRowImpl(17),gx.O.A1350PreFinancieraImporteOri,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1350PreFinancieraImporteOri=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFINANCIERAIMPORTEORI",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERACUOTACANTIDAD",gxz:"Z2115PreFinancieraCuotaCantidad",gxold:"O2115PreFinancieraCuotaCantidad",gxvar:"A2115PreFinancieraCuotaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2115PreFinancieraCuotaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2115PreFinancieraCuotaCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREFINANCIERACUOTACANTIDAD",n||gx.fn.currentGridRowImpl(17),gx.O.A2115PreFinancieraCuotaCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2115PreFinancieraCuotaCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREFINANCIERACUOTACANTIDAD",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERACUOTAIMPORTE",gxz:"Z2116PreFinancieraCuotaImporte",gxold:"O2116PreFinancieraCuotaImporte",gxvar:"A2116PreFinancieraCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2116PreFinancieraCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2116PreFinancieraCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFINANCIERACUOTAIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A2116PreFinancieraCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2116PreFinancieraCuotaImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFINANCIERACUOTAIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFINANCIERAIMPORTE",gxz:"Z1352PreFinancieraImporte",gxold:"O1352PreFinancieraImporte",gxvar:"A1352PreFinancieraImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1352PreFinancieraImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1352PreFinancieraImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFINANCIERAIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A1352PreFinancieraImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1352PreFinancieraImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFINANCIERAIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"HTML_GRIDTOTALIZER",grid:0};t[30]={id:30,fld:"GRIDTABLETOTALIZER",grid:0};t[41]={id:41,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPREFINANCIERAIMPORTE",gxz:"ZV19TotValuePreFinancieraImporte",gxold:"OV19TotValuePreFinancieraImporte",gxvar:"AV19TotValuePreFinancieraImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotValuePreFinancieraImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19TotValuePreFinancieraImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPREFINANCIERAIMPORTE",gx.O.AV19TotValuePreFinancieraImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotValuePreFinancieraImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPREFINANCIERAIMPORTE")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[45]={id:45,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z202PreFinancieraDetId=0;this.O202PreFinancieraDetId=0;this.Z159FinancieraId=0;this.O159FinancieraId=0;this.Z203FinancieraPlanId=0;this.O203FinancieraPlanId=0;this.Z2101FinancieraPlanNombre="";this.O2101FinancieraPlanNombre="";this.Z1351PreFinancieraCosto=0;this.O1351PreFinancieraCosto=0;this.Z1350PreFinancieraImporteOri=0;this.O1350PreFinancieraImporteOri=0;this.Z2115PreFinancieraCuotaCantidad=0;this.O2115PreFinancieraCuotaCantidad=0;this.Z2116PreFinancieraCuotaImporte=0;this.O2116PreFinancieraCuotaImporte=0;this.Z1352PreFinancieraImporte=0;this.O1352PreFinancieraImporte=0;this.AV19TotValuePreFinancieraImporte="";this.ZV19TotValuePreFinancieraImporte="";this.OV19TotValuePreFinancieraImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV19TotValuePreFinancieraImporte="";this.A89PreId=0;this.AV7PreId=0;this.A1040PlanNombre="";this.A1073FinancieraDenominacion="";this.A2100FinancieraPlanHasta=gx.date.nullDate();this.A2099FinancieraPlanDesde=gx.date.nullDate();this.A2098FinancieraPlanCosto=0;this.A119PlanId=0;this.A202PreFinancieraDetId=0;this.A159FinancieraId=0;this.A203FinancieraPlanId=0;this.A2101FinancieraPlanNombre="";this.A1351PreFinancieraCosto=0;this.A1350PreFinancieraImporteOri=0;this.A2115PreFinancieraCuotaCantidad=0;this.A2116PreFinancieraCuotaImporte=0;this.A1352PreFinancieraImporte=0;this.AV25Pgmname="";this.AV18TotPreFinancieraImporte=0;this.Events={e14k02_client:["ENTER",!0],e15k02_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A1350PreFinancieraImporteOri",fld:"PREFINANCIERAIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1352PreFinancieraImporte",fld:"PREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFinancieraImporte",fld:"vTOTVALUEPREFINANCIERAIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A1350PreFinancieraImporteOri",fld:"PREFINANCIERAIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1352PreFinancieraImporte",fld:"PREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFinancieraImporte",fld:"vTOTVALUEPREFINANCIERAIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A1350PreFinancieraImporteOri",fld:"PREFINANCIERAIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1352PreFinancieraImporte",fld:"PREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFinancieraImporte",fld:"vTOTVALUEPREFINANCIERAIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A1350PreFinancieraImporteOri",fld:"PREFINANCIERAIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1352PreFinancieraImporte",fld:"PREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFinancieraImporte",fld:"vTOTVALUEPREFINANCIERAIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A1350PreFinancieraImporteOri",fld:"PREFINANCIERAIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1352PreFinancieraImporte",fld:"PREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreFinancieraImporte",fld:"vTOTPREFINANCIERAIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFinancieraImporte",fld:"vTOTVALUEPREFINANCIERAIMPORTE",pic:""}]];this.EvtParms.VALID_FINANCIERAID=[[],[]];this.EvtParms.VALID_FINANCIERAPLANID=[[],[]];this.setVCMap("A1073FinancieraDenominacion","FINANCIERADENOMINACION",0,"svchar",64,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2098FinancieraPlanCosto","FINANCIERAPLANCOSTO",0,"decimal",6,2);this.setVCMap("A2099FinancieraPlanDesde","FINANCIERAPLANDESDE",0,"date",8,0);this.setVCMap("A2100FinancieraPlanHasta","FINANCIERAPLANHASTA",0,"date",8,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV18TotPreFinancieraImporte","vTOTPREFINANCIERAIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreFinancieraImporte","vTOTPREFINANCIERAIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreFinancieraImporte","vTOTPREFINANCIERAIMPORTE",0,"decimal",18,2);i.addRefreshingVar({rfrVar:"AV7PreId"});i.addRefreshingVar({rfrVar:"AV25Pgmname"});i.addRefreshingVar({rfrVar:"AV18TotPreFinancieraImporte"});i.addRefreshingVar(this.GXValidFnc[45]);i.addRefreshingParm({rfrVar:"AV7PreId"});i.addRefreshingParm({rfrVar:"AV25Pgmname"});i.addRefreshingParm({rfrVar:"AV18TotPreFinancieraImporte"});i.addRefreshingParm(this.GXValidFnc[45]);this.Initialize()})