/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:3:39.39
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtasaldoafavorfacturarwc",!0,function(n){var t,r,i,u;this.ServerClass="presupuestovtasaldoafavorfacturarwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV18TotPreSdoFavImporte=gx.fn.getDecimalValue("vTOTPRESDOFAVIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotPreSdoFavImporte=gx.fn.getDecimalValue("vTOTPRESDOFAVIMPORTE",".",",")};this.Valid_Saldoafavorid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Saldoafavorid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("SALDOAFAVORID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Cuentaid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("CUENTAID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV18TotPreSdoFavImporte=0};this.e14k32_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15k32_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,37,38,39,40,41];this.GXLastCtrlId=41;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtasaldoafavorfacturarwc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(297,18,"PRESDOFAVDETID","Pre Sdo Fav Det Id","","PreSdoFavDetId","int",0,"px",4,4,"right",null,[],297,"PreSdoFavDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(296,19,"SALDOAFAVORID","Ide.","","SaldoAFavorId","int",0,"px",8,8,"right",null,[],296,"SaldoAFavorId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(88,20,"CUENTAID","Cuenta","","CuentaId","int",0,"px",8,8,"right",null,[],88,"CuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(196,21,"CUENTADESCRIPTOR","Cuenta Descriptor","","CuentaDescriptor","svchar",0,"px",64,64,"left",null,[],196,"CuentaDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2386,22,"SALDOAFAVORIMPORTE","Importe","","SaldoAFavorImporte","decimal",0,"px",13,13,"right",null,[],2386,"SaldoAFavorImporte",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2390,23,"SALDOAFAVORSALDO","Saldo","","SaldoAFavorSaldo","decimal",0,"px",13,13,"right",null,[],2390,"SaldoAFavorSaldo",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2392,24,"PRESDOFAVIMPORTE","Importe","","PreSdoFavImporte","decimal",0,"px",13,13,"right",null,[],2392,"PreSdoFavImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");i=this.DVPANEL_TABLEGRIDHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Saldo a Favor","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,42,37,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHTOTALIZERS",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVDETID",gxz:"Z297PreSdoFavDetId",gxold:"O297PreSdoFavDetId",gxvar:"A297PreSdoFavDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z297PreSdoFavDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRESDOFAVDETID",n||gx.fn.currentGridRowImpl(17),gx.O.A297PreSdoFavDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRESDOFAVDETID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Saldoafavorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORID",gxz:"Z296SaldoAFavorId",gxold:"O296SaldoAFavorId",gxvar:"A296SaldoAFavorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z296SaldoAFavorId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SALDOAFAVORID",n||gx.fn.currentGridRowImpl(17),gx.O.A296SaldoAFavorId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SALDOAFAVORID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAID",n||gx.fn.currentGridRowImpl(17),gx.O.A88CuentaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CUENTAID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTADESCRIPTOR",gxz:"Z196CuentaDescriptor",gxold:"O196CuentaDescriptor",gxvar:"A196CuentaDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A196CuentaDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.Z196CuentaDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(17),gx.O.A196CuentaDescriptor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A196CuentaDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORIMPORTE",gxz:"Z2386SaldoAFavorImporte",gxold:"O2386SaldoAFavorImporte",gxvar:"A2386SaldoAFavorImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("SALDOAFAVORIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A2386SaldoAFavorImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2386SaldoAFavorImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("SALDOAFAVORIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORSALDO",gxz:"Z2390SaldoAFavorSaldo",gxold:"O2390SaldoAFavorSaldo",gxvar:"A2390SaldoAFavorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("SALDOAFAVORSALDO",n||gx.fn.currentGridRowImpl(17),gx.O.A2390SaldoAFavorSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2390SaldoAFavorSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("SALDOAFAVORSALDO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVIMPORTE",gxz:"Z2392PreSdoFavImporte",gxold:"O2392PreSdoFavImporte",gxvar:"A2392PreSdoFavImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2392PreSdoFavImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2392PreSdoFavImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRESDOFAVIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A2392PreSdoFavImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2392PreSdoFavImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRESDOFAVIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"HTML_GRIDTOTALIZER",grid:0};t[28]={id:28,fld:"GRIDTABLETOTALIZER",grid:0};t[37]={id:37,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPRESDOFAVIMPORTE",gxz:"ZV19TotValuePreSdoFavImporte",gxold:"OV19TotValuePreSdoFavImporte",gxvar:"AV19TotValuePreSdoFavImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotValuePreSdoFavImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19TotValuePreSdoFavImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPRESDOFAVIMPORTE",gx.O.AV19TotValuePreSdoFavImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotValuePreSdoFavImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPRESDOFAVIMPORTE")},nac:gx.falseFn};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[41]={id:41,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z297PreSdoFavDetId=0;this.O297PreSdoFavDetId=0;this.Z296SaldoAFavorId=0;this.O296SaldoAFavorId=0;this.Z88CuentaId=0;this.O88CuentaId=0;this.Z196CuentaDescriptor="";this.O196CuentaDescriptor="";this.Z2386SaldoAFavorImporte=0;this.O2386SaldoAFavorImporte=0;this.Z2390SaldoAFavorSaldo=0;this.O2390SaldoAFavorSaldo=0;this.Z2392PreSdoFavImporte=0;this.O2392PreSdoFavImporte=0;this.AV19TotValuePreSdoFavImporte="";this.ZV19TotValuePreSdoFavImporte="";this.OV19TotValuePreSdoFavImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV19TotValuePreSdoFavImporte="";this.A89PreId=0;this.AV7PreId=0;this.A297PreSdoFavDetId=0;this.A296SaldoAFavorId=0;this.A88CuentaId=0;this.A196CuentaDescriptor="";this.A2386SaldoAFavorImporte=0;this.A2390SaldoAFavorSaldo=0;this.A2392PreSdoFavImporte=0;this.AV25Pgmname="";this.AV18TotPreSdoFavImporte=0;this.Events={e14k32_client:["ENTER",!0],e15k32_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.VALID_SALDOAFAVORID=[[],[]];this.EvtParms.VALID_CUENTAID=[[],[]];this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7PreId"});r.addRefreshingVar({rfrVar:"AV25Pgmname"});r.addRefreshingVar({rfrVar:"AV18TotPreSdoFavImporte"});r.addRefreshingVar(this.GXValidFnc[41]);r.addRefreshingParm({rfrVar:"AV7PreId"});r.addRefreshingParm({rfrVar:"AV25Pgmname"});r.addRefreshingParm({rfrVar:"AV18TotPreSdoFavImporte"});r.addRefreshingParm(this.GXValidFnc[41]);this.Initialize()})