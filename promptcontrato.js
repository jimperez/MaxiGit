/*!   GeneXus C# 16_0_5-135614 on 10/3/2019 15:46:18.69
*/
gx.evt.autoSkip=!1;gx.define("promptcontrato",!1,function(){var t,r,u,i,n,f;this.ServerClass="promptcontrato";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutContratoId=gx.fn.getIntegerValue("vINOUTCONTRATOID",".");this.AV20InOutContratoFecha=gx.fn.getDateValue("vINOUTCONTRATOFECHA")};this.Valid_Contratoid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Contratoid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("CONTRATOID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Clienteid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){this.s122_client();this.AV9OrderedBy==2&&(this.DDO_CONTRATOCOSTOContainer.SortedStatus=this.AV10OrderedDsc?"DSC":"ASC")};this.s122_client=function(){this.DDO_CONTRATOCOSTOContainer.SortedStatus=""};this.e11f82_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12f82_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13f82_client=function(){return this.executeServerEvent("DDO_CONTRATOCOSTO.ONOPTIONCLICKED",!1,null,!0,!0)};this.e17f82_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18f82_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,40,42,43];this.GXLastCtrlId=43;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptcontrato",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",20,0,"px",17,"px","e17f82_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(269,21,"CONTRATOID","Nº","","ContratoId","int",0,"px",8,8,"right",null,[],269,"ContratoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2144,22,"CONTRATOFECHA","Fecha","Fecha ...","ContratoFecha","date",0,"px",10,10,"right",null,[],2144,"ContratoFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2157,23,"CONTRATOORIGEN","Origen","ContratoOrigen","char",null,0,!0,!1,0,"px","WWColumn");r.addSingleLineEdit(53,24,"CLIENTEID","Cuil/Cuit","","ClienteId","int",0,"px",15,15,"right",null,[],53,"ClienteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1156,25,"CLIENTEDENOMINACION","Cliente","","ClienteDenominacion","svchar",0,"px",64,64,"left",null,[],1156,"ClienteDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2284,26,"CONTRATOCOSTO","","","ContratoCosto","decimal",0,"px",6,6,"right",null,[],2284,"ContratoCosto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2145,27,"CONTRATOIMPORTEFIN","Imp. Fin.","","ContratoImporteFin","decimal",0,"px",13,13,"right",null,[],2145,"ContratoImporteFin",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2146,28,"CONTRATOCUOTA","Cuota","","ContratoCuota","decimal",0,"px",13,13,"right",null,[],2146,"ContratoCuota",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2147,29,"CONTRATOCANTIDAD","Cantidad","","ContratoCantidad","int",0,"px",4,4,"right",null,[],2147,"ContratoCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2148,30,"CONTRATOIMPORTE","Importe","","ContratoImporte","decimal",0,"px",13,13,"right",null,[],2148,"ContratoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2143,31,"CONTRATOESTADO","Estado","ContratoEstado","char",null,0,!0,!1,0,"px","WWColumn");r.addSingleLineEdit(2285,32,"CONTRATOSALDO","Saldo","","ContratoSaldo","decimal",0,"px",13,13,"right",null,[],2285,"ContratoSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,35,20,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV17GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV17GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV17GridCurrentPage)});i.addV2CFunction("AV18GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV18GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV18GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11f82_client);i.addEventHandler("ChangeRowsPerPage",this.e12f82_client);this.setUserControl(i);this.DDO_CONTRATOCOSTOContainer=gx.uc.getNew(this,39,20,"BootstrapDropDownOptions","DDO_CONTRATOCOSTOContainer","Ddo_contratocosto","DDO_CONTRATOCOSTO");n=this.DDO_CONTRATOCOSTOContainer;n.setProp("Class","Class","","char");n.setProp("IconType","Icontype","Image","str");n.setProp("Icon","Icon","","str");n.setProp("Caption","Caption","","str");n.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");n.setProp("Cls","Cls","ColumnSettings","str");n.setProp("ActiveEventKey","Activeeventkey","","char");n.setProp("FilteredText_set","Filteredtext_set","","char");n.setProp("FilteredText_get","Filteredtext_get","","char");n.setProp("FilteredTextTo_set","Filteredtextto_set","","char");n.setProp("FilteredTextTo_get","Filteredtextto_get","","char");n.setProp("SelectedValue_set","Selectedvalue_set","","char");n.setProp("SelectedValue_get","Selectedvalue_get","","char");n.setProp("SelectedText_set","Selectedtext_set","","char");n.setProp("SelectedText_get","Selectedtext_get","","char");n.setProp("GAMOAuthToken","Gamoauthtoken","","char");n.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");n.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");n.setProp("Enabled","Enabled",!0,"bool");n.setProp("Visible","Visible",!0,"bool");n.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");n.setProp("IncludeSortASC","Includesortasc",!0,"bool");n.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");n.setDynProp("SortedStatus","Sortedstatus","","char");n.setProp("IncludeFilter","Includefilter",!1,"bool");n.setProp("FilterType","Filtertype","","char");n.setProp("FilterIsRange","Filterisrange",!1,"boolean");n.setProp("IncludeDataList","Includedatalist",!1,"bool");n.setProp("DataListType","Datalisttype","","char");n.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");n.setProp("DataListFixedValues","Datalistfixedvalues","","char");n.setProp("DataListProc","Datalistproc","","char");n.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");n.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");n.setProp("FixedFilters","Fixedfilters","","str");n.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");n.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");n.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");n.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");n.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");n.setProp("EmptyItem","Emptyitem",!1,"boolean");n.setProp("SortASC","Sortasc","WWP_TSSortASC","str");n.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");n.setProp("LoadingData","Loadingdata","","char");n.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");n.setProp("RangeFilterFrom","Rangefilterfrom","","char");n.setProp("RangeFilterTo","Rangefilterto","","char");n.setProp("NoResultsFound","Noresultsfound","","char");n.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");n.setProp("UpdateButtonText","Updatebuttontext","Update","str");n.setProp("EmptyItemText","Emptyitemtext","","char");n.setProp("OnlySelectedValues","Onlyselectedvalues","","char");n.setProp("SelectAllText","Selectalltext","","char");n.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");n.addV2CFunction("AV15DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");n.addC2VFunction(function(n){n.ParentObject.AV15DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV15DDO_TitleSettingsIcons)});n.addV2CFunction("AV63ContratoCostoTitleFilterData","vCONTRATOCOSTOTITLEFILTERDATA","SetDropDownOptionsData");n.addC2VFunction(function(n){n.ParentObject.AV63ContratoCostoTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vCONTRATOCOSTOTITLEFILTERDATA",n.ParentObject.AV63ContratoCostoTitleFilterData)});n.setProp("Gx Control Type","Gxcontroltype","","int");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("OnOptionClicked",this.e13f82_client);this.setUserControl(n);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,41,40,"DVelop_WorkWithPlusUtilities","WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");f=this.WORKWITHPLUSUTILITIES1Container;f.setProp("Class","Class","","char");f.setProp("Enabled","Enabled",!0,"boolean");f.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");f.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");f.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");f.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");f.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");f.setProp("Visible","Visible",!0,"bool");f.setC2ShowFunction(function(n){n.show()});this.setUserControl(f);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[20]={id:20,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV19Select",gxold:"OV19Select",gxvar:"AV19Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV19Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(19),gx.O.AV19Select,gx.O.AV71Select_GXI)},c2v:function(n){gx.O.AV71Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV19Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(19))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(19))},gxvar_GXI:"AV71Select_GXI",nac:gx.falseFn,evt:"e17f82_client",std:"ENTER"};t[21]={id:21,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Contratoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOID",gxz:"Z269ContratoId",gxold:"O269ContratoId",gxvar:"A269ContratoId",ucs:[],op:[32,25],ip:[32,25,21,24],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A269ContratoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z269ContratoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONTRATOID",n||gx.fn.currentGridRowImpl(19),gx.O.A269ContratoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A269ContratoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONTRATOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOFECHA",gxz:"Z2144ContratoFecha",gxold:"O2144ContratoFecha",gxvar:"A2144ContratoFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2144ContratoFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2144ContratoFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CONTRATOFECHA",n||gx.fn.currentGridRowImpl(19),gx.O.A2144ContratoFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2144ContratoFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CONTRATOFECHA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOORIGEN",gxz:"Z2157ContratoOrigen",gxold:"O2157ContratoOrigen",gxvar:"A2157ContratoOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2157ContratoOrigen=n)},v2z:function(n){n!==undefined&&(gx.O.Z2157ContratoOrigen=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CONTRATOORIGEN",n||gx.fn.currentGridRowImpl(19),gx.O.A2157ContratoOrigen);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2157ContratoOrigen=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONTRATOORIGEN",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEID",n||gx.fn.currentGridRowImpl(19),gx.O.A53ClienteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(19),gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1156ClienteDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCOSTO",gxz:"Z2284ContratoCosto",gxold:"O2284ContratoCosto",gxvar:"A2284ContratoCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2284ContratoCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2284ContratoCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONTRATOCOSTO",n||gx.fn.currentGridRowImpl(19),gx.O.A2284ContratoCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2284ContratoCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONTRATOCOSTO",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOIMPORTEFIN",gxz:"Z2145ContratoImporteFin",gxold:"O2145ContratoImporteFin",gxvar:"A2145ContratoImporteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2145ContratoImporteFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2145ContratoImporteFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONTRATOIMPORTEFIN",n||gx.fn.currentGridRowImpl(19),gx.O.A2145ContratoImporteFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2145ContratoImporteFin=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONTRATOIMPORTEFIN",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTA",gxz:"Z2146ContratoCuota",gxold:"O2146ContratoCuota",gxvar:"A2146ContratoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2146ContratoCuota=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2146ContratoCuota=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONTRATOCUOTA",n||gx.fn.currentGridRowImpl(19),gx.O.A2146ContratoCuota,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2146ContratoCuota=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONTRATOCUOTA",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCANTIDAD",gxz:"Z2147ContratoCantidad",gxold:"O2147ContratoCantidad",gxvar:"A2147ContratoCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2147ContratoCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2147ContratoCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONTRATOCANTIDAD",n||gx.fn.currentGridRowImpl(19),gx.O.A2147ContratoCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2147ContratoCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONTRATOCANTIDAD",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOIMPORTE",gxz:"Z2148ContratoImporte",gxold:"O2148ContratoImporte",gxvar:"A2148ContratoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2148ContratoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2148ContratoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONTRATOIMPORTE",n||gx.fn.currentGridRowImpl(19),gx.O.A2148ContratoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2148ContratoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONTRATOIMPORTE",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOESTADO",gxz:"Z2143ContratoEstado",gxold:"O2143ContratoEstado",gxvar:"A2143ContratoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2143ContratoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2143ContratoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CONTRATOESTADO",n||gx.fn.currentGridRowImpl(19),gx.O.A2143ContratoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2143ContratoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONTRATOESTADO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOSALDO",gxz:"Z2285ContratoSaldo",gxold:"O2285ContratoSaldo",gxvar:"A2285ContratoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2285ContratoSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2285ContratoSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONTRATOSALDO",n||gx.fn.currentGridRowImpl(19),gx.O.A2285ContratoSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2285ContratoSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONTRATOSALDO",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",gxz:"ZV64ddo_ContratoCostoTitleControlIdToReplace",gxold:"OV64ddo_ContratoCostoTitleControlIdToReplace",gxvar:"AV64ddo_ContratoCostoTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV64ddo_ContratoCostoTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV64ddo_ContratoCostoTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",gx.O.AV64ddo_ContratoCostoTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV64ddo_ContratoCostoTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};t[42]={id:42,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV9OrderedBy",gxold:"OV9OrderedBy",gxvar:"AV9OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV9OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};t[43]={id:43,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV10OrderedDsc",gxold:"OV10OrderedDsc",gxvar:"AV10OrderedDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10OrderedDsc=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10OrderedDsc=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV10OrderedDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10OrderedDsc=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};this.ZV19Select="";this.OV19Select="";this.Z269ContratoId=0;this.O269ContratoId=0;this.Z2144ContratoFecha=gx.date.nullDate();this.O2144ContratoFecha=gx.date.nullDate();this.Z2157ContratoOrigen="";this.O2157ContratoOrigen="";this.Z53ClienteId=0;this.O53ClienteId=0;this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.Z2284ContratoCosto=0;this.O2284ContratoCosto=0;this.Z2145ContratoImporteFin=0;this.O2145ContratoImporteFin=0;this.Z2146ContratoCuota=0;this.O2146ContratoCuota=0;this.Z2147ContratoCantidad=0;this.O2147ContratoCantidad=0;this.Z2148ContratoImporte=0;this.O2148ContratoImporte=0;this.Z2143ContratoEstado="";this.O2143ContratoEstado="";this.Z2285ContratoSaldo=0;this.O2285ContratoSaldo=0;this.AV64ddo_ContratoCostoTitleControlIdToReplace="";this.ZV64ddo_ContratoCostoTitleControlIdToReplace="";this.OV64ddo_ContratoCostoTitleControlIdToReplace="";this.AV9OrderedBy=0;this.ZV9OrderedBy=0;this.OV9OrderedBy=0;this.AV10OrderedDsc=!1;this.ZV10OrderedDsc=!1;this.OV10OrderedDsc=!1;this.AV17GridCurrentPage=0;this.AV15DDO_TitleSettingsIcons={Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""};this.AV64ddo_ContratoCostoTitleControlIdToReplace="";this.AV9OrderedBy=0;this.AV10OrderedDsc=!1;this.AV7InOutContratoId=0;this.AV20InOutContratoFecha=gx.date.nullDate();this.AV19Select="";this.A269ContratoId=0;this.A2144ContratoFecha=gx.date.nullDate();this.A2157ContratoOrigen="";this.A53ClienteId=0;this.A1156ClienteDenominacion="";this.A2284ContratoCosto=0;this.A2145ContratoImporteFin=0;this.A2146ContratoCuota=0;this.A2147ContratoCantidad=0;this.A2148ContratoImporte=0;this.A2143ContratoEstado="";this.A2285ContratoSaldo=0;this.Events={e11f82_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12f82_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13f82_client:["DDO_CONTRATOCOSTO.ONOPTIONCLICKED",!0],e17f82_client:["ENTER",!0],e18f82_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV64ddo_ContratoCostoTitleControlIdToReplace",fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",pic:""}],[{av:"AV63ContratoCostoTitleFilterData",fld:"vCONTRATOCOSTOTITLEFILTERDATA",pic:""},{ctrl:"CONTRATOCOSTO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("CONTRATOCOSTO","Title")',ctrl:"CONTRATOCOSTO",prop:"Title"},{av:"AV17GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV18GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"this.DDO_CONTRATOCOSTOContainer.TitleControlIdToReplace",ctrl:"DDO_CONTRATOCOSTO",prop:"TitleControlIdToReplace"},{av:"AV64ddo_ContratoCostoTitleControlIdToReplace",fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",prop:"Visible"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:"vORDEREDDSC",prop:"Visible"},{av:"AV15DDO_TitleSettingsIcons",fld:"vDDO_TITLESETTINGSICONS",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"this.DDO_CONTRATOCOSTOContainer.SortedStatus",ctrl:"DDO_CONTRATOCOSTO",prop:"SortedStatus"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV64ddo_ContratoCostoTitleControlIdToReplace",fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV64ddo_ContratoCostoTitleControlIdToReplace",fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["DDO_CONTRATOCOSTO.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV64ddo_ContratoCostoTitleControlIdToReplace",fld:"vDDO_CONTRATOCOSTOTITLECONTROLIDTOREPLACE",pic:""},{av:"this.DDO_CONTRATOCOSTOContainer.ActiveEventKey",ctrl:"DDO_CONTRATOCOSTO",prop:"ActiveEventKey"}],[{av:"AV9OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV10OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_CONTRATOCOSTOContainer.SortedStatus",ctrl:"DDO_CONTRATOCOSTO",prop:"SortedStatus"},{av:"AV63ContratoCostoTitleFilterData",fld:"vCONTRATOCOSTOTITLEFILTERDATA",pic:""},{ctrl:"CONTRATOCOSTO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("CONTRATOCOSTO","Title")',ctrl:"CONTRATOCOSTO",prop:"Title"},{av:"AV17GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV18GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV19Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A2144ContratoFecha",fld:"CONTRATOFECHA",pic:"",hsh:!0}],[{av:"AV7InOutContratoId",fld:"vINOUTCONTRATOID",pic:"ZZZZZZZ9"},{av:"AV20InOutContratoFecha",fld:"vINOUTCONTRATOFECHA",pic:""}]];this.EvtParms.VALID_CONTRATOID=[[{av:"A2285ContratoSaldo",fld:"CONTRATOSALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"},{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A53ClienteId",fld:"CLIENTEID",pic:"ZZZZZZZZZZZZZZ9"}],[{av:"A2285ContratoSaldo",fld:"CONTRATOSALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"}]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutContratoId","vINOUTCONTRATOID",0,"int",8,0);this.setVCMap("AV20InOutContratoFecha","vINOUTCONTRATOFECHA",0,"date",8,0);r.addRefreshingVar(this.GXValidFnc[42]);r.addRefreshingVar(this.GXValidFnc[43]);r.addRefreshingVar(this.GXValidFnc[40]);r.addRefreshingParm(this.GXValidFnc[42]);r.addRefreshingParm(this.GXValidFnc[43]);r.addRefreshingParm(this.GXValidFnc[40]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptcontrato)})