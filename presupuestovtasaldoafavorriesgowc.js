/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:30.43
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtasaldoafavorriesgowc",!0,function(n){var t,r,i,u;this.ServerClass="presupuestovtasaldoafavorriesgowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV18TotPreSdoFavImporte=gx.fn.getDecimalValue("vTOTPRESDOFAVIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotPreSdoFavImporte=gx.fn.getDecimalValue("vTOTPRESDOFAVIMPORTE",".",",")};this.Valid_Saldoafavorid=function(){var n=gx.fn.currentGridRowImpl(18);return this.validCliEvt("Valid_Saldoafavorid",18,function(){try{if(gx.fn.currentGridRowImpl(18)===0)return!0;var n=gx.util.balloon.getNew("SALDOAFAVORID",gx.fn.currentGridRowImpl(18));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){var n=gx.fn.currentGridRowImpl(18);return this.validCliEvt("Valid_Cuentaid",18,function(){try{if(gx.fn.currentGridRowImpl(18)===0)return!0;var n=gx.util.balloon.getNew("CUENTAID",gx.fn.currentGridRowImpl(18));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV18TotPreSdoFavImporte=0};this.e11kn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12kn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16kn2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17kn2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,38,39,40,42,43,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtasaldoafavorriesgowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(297,19,"PRESDOFAVDETID","Pre Sdo Fav Det Id","","PreSdoFavDetId","int",0,"px",4,4,"right",null,[],297,"PreSdoFavDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(296,20,"SALDOAFAVORID","Ide.","","SaldoAFavorId","int",0,"px",8,8,"right",null,[],296,"SaldoAFavorId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(88,21,"CUENTAID","Cuenta","","CuentaId","int",0,"px",8,8,"right",null,[],88,"CuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(196,22,"CUENTADESCRIPTOR","Cuenta Descriptor","","CuentaDescriptor","svchar",0,"px",64,64,"left",null,[],196,"CuentaDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2386,23,"SALDOAFAVORIMPORTE","Importe","","SaldoAFavorImporte","decimal",0,"px",13,13,"right",null,[],2386,"SaldoAFavorImporte",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2390,24,"SALDOAFAVORSALDO","Saldo","","SaldoAFavorSaldo","decimal",0,"px",13,13,"right",null,[],2390,"SaldoAFavorSaldo",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2392,25,"PRESDOFAVIMPORTE","Importe","","PreSdoFavImporte","decimal",0,"px",13,13,"right",null,[],2392,"PreSdoFavImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,41,38,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV16GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV16GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV16GridCurrentPage)});i.addV2CFunction("AV17GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV17GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV17GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11kn2_client);i.addEventHandler("ChangeRowsPerPage",this.e12kn2_client);this.setUserControl(i);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,46,38,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLEHEADER",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[19]={id:19,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVDETID",gxz:"Z297PreSdoFavDetId",gxold:"O297PreSdoFavDetId",gxvar:"A297PreSdoFavDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z297PreSdoFavDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PRESDOFAVDETID",n||gx.fn.currentGridRowImpl(18),gx.O.A297PreSdoFavDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PRESDOFAVDETID",n||gx.fn.currentGridRowImpl(18),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:this.Valid_Saldoafavorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORID",gxz:"Z296SaldoAFavorId",gxold:"O296SaldoAFavorId",gxvar:"A296SaldoAFavorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z296SaldoAFavorId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SALDOAFAVORID",n||gx.fn.currentGridRowImpl(18),gx.O.A296SaldoAFavorId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SALDOAFAVORID",n||gx.fn.currentGridRowImpl(18),".")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAID",n||gx.fn.currentGridRowImpl(18),gx.O.A88CuentaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CUENTAID",n||gx.fn.currentGridRowImpl(18),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTADESCRIPTOR",gxz:"Z196CuentaDescriptor",gxold:"O196CuentaDescriptor",gxvar:"A196CuentaDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A196CuentaDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.Z196CuentaDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(18),gx.O.A196CuentaDescriptor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A196CuentaDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORIMPORTE",gxz:"Z2386SaldoAFavorImporte",gxold:"O2386SaldoAFavorImporte",gxvar:"A2386SaldoAFavorImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("SALDOAFAVORIMPORTE",n||gx.fn.currentGridRowImpl(18),gx.O.A2386SaldoAFavorImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2386SaldoAFavorImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("SALDOAFAVORIMPORTE",n||gx.fn.currentGridRowImpl(18),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORSALDO",gxz:"Z2390SaldoAFavorSaldo",gxold:"O2390SaldoAFavorSaldo",gxvar:"A2390SaldoAFavorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2390SaldoAFavorSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("SALDOAFAVORSALDO",n||gx.fn.currentGridRowImpl(18),gx.O.A2390SaldoAFavorSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2390SaldoAFavorSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("SALDOAFAVORSALDO",n||gx.fn.currentGridRowImpl(18),".",",")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVIMPORTE",gxz:"Z2392PreSdoFavImporte",gxold:"O2392PreSdoFavImporte",gxvar:"A2392PreSdoFavImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2392PreSdoFavImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2392PreSdoFavImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PRESDOFAVIMPORTE",n||gx.fn.currentGridRowImpl(18),gx.O.A2392PreSdoFavImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2392PreSdoFavImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PRESDOFAVIMPORTE",n||gx.fn.currentGridRowImpl(18),".",",")},nac:gx.falseFn};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"HTML_GRIDTOTALIZER",grid:0};t[29]={id:29,fld:"GRIDTABLETOTALIZER",grid:0};t[38]={id:38,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPRESDOFAVIMPORTE",gxz:"ZV19TotValuePreSdoFavImporte",gxold:"OV19TotValuePreSdoFavImporte",gxvar:"AV19TotValuePreSdoFavImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotValuePreSdoFavImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19TotValuePreSdoFavImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPRESDOFAVIMPORTE",gx.O.AV19TotValuePreSdoFavImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotValuePreSdoFavImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPRESDOFAVIMPORTE")},nac:gx.falseFn};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[45]={id:45,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z297PreSdoFavDetId=0;this.O297PreSdoFavDetId=0;this.Z296SaldoAFavorId=0;this.O296SaldoAFavorId=0;this.Z88CuentaId=0;this.O88CuentaId=0;this.Z196CuentaDescriptor="";this.O196CuentaDescriptor="";this.Z2386SaldoAFavorImporte=0;this.O2386SaldoAFavorImporte=0;this.Z2390SaldoAFavorSaldo=0;this.O2390SaldoAFavorSaldo=0;this.Z2392PreSdoFavImporte=0;this.O2392PreSdoFavImporte=0;this.AV19TotValuePreSdoFavImporte="";this.ZV19TotValuePreSdoFavImporte="";this.OV19TotValuePreSdoFavImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV19TotValuePreSdoFavImporte="";this.AV16GridCurrentPage=0;this.A89PreId=0;this.AV7PreId=0;this.A297PreSdoFavDetId=0;this.A296SaldoAFavorId=0;this.A88CuentaId=0;this.A196CuentaDescriptor="";this.A2386SaldoAFavorImporte=0;this.A2390SaldoAFavorSaldo=0;this.A2392PreSdoFavImporte=0;this.AV25Pgmname="";this.AV18TotPreSdoFavImporte=0;this.Events={e11kn2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12kn2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16kn2_client:["ENTER",!0],e17kn2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreSdoFavImporte",fld:"vTOTVALUEPRESDOFAVIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreSdoFavImporte",fld:"vTOTPRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_SALDOAFAVORID=[[],[]];this.EvtParms.VALID_CUENTAID=[[],[]];this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreSdoFavImporte","vTOTPRESDOFAVIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7PreId"});r.addRefreshingVar({rfrVar:"AV25Pgmname"});r.addRefreshingVar({rfrVar:"AV18TotPreSdoFavImporte"});r.addRefreshingVar(this.GXValidFnc[45]);r.addRefreshingParm({rfrVar:"AV7PreId"});r.addRefreshingParm({rfrVar:"AV25Pgmname"});r.addRefreshingParm({rfrVar:"AV18TotPreSdoFavImporte"});r.addRefreshingParm(this.GXValidFnc[45]);this.Initialize()})