/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:4:5.5
*/
gx.evt.autoSkip=!1;gx.define("notacreditodetallewc",!0,function(n){var i,u,r,t,f;this.ServerClass="notacreditodetallewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7NcId=gx.fn.getIntegerValue("vNCID",".");this.AV7NcId=gx.fn.getIntegerValue("vNCID",".");this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME")};this.s142_client=function(){this.DDO_FACVTADETSUCDEPOSITOIDContainer.SortedStatus=this.AV18OrderedDsc?"DSC":"ASC"};this.e11gs2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12gs2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13gs2_client=function(){return this.executeServerEvent("DDO_FACVTADETSUCDEPOSITOID.ONOPTIONCLICKED",!1,null,!0,!0)};this.e17gs2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18gs2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,40,41,43];this.GXLastCtrlId=43;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"notacreditodetallewc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit(292,16,"NCDETID","Linea","","NcDetId","int",0,"px",4,4,"right",null,[],292,"NcDetId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(218,17,"FACVTAID","Factura","","FacVtaId","int",0,"px",9,9,"right",null,[],218,"FacVtaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(222,18,"FACVTADETID","Nº","","FacVtaDetId","int",0,"px",4,4,"right",null,[],222,"FacVtaDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(227,19,"FACVTADETENTIDADID","Ide. Empresa","","FacVtaDetEntidadId","int",0,"px",2,2,"right",null,[],227,"FacVtaDetEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(228,20,"FACVTADETSUCURSALID","Ide. Sucursal","","FacVtaDetSucursalId","int",0,"px",4,4,"right",null,[],228,"FacVtaDetSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(229,21,"FACVTADETSUCDEPOSITOID","","","FacVtaDetSucDepositoId","int",0,"px",4,4,"right",null,[],229,"FacVtaDetSucDepositoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(230,22,"FACVTADETSUCITEM","Item","","FacVtaDetSucItem","int",0,"px",4,4,"right",null,[],230,"FacVtaDetSucItem",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2357,23,"NCARTID","Articulo","","NcArtId","int",0,"px",9,9,"right",null,[],2357,"NcArtId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(2359,24,"NCDETDESCRIPCION","Descripcion","","NcDetDescripcion","svchar",0,"px",64,64,"left",null,[],2359,"NcDetDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2363,25,"NCDETIVAPOR","Ali","","NcDetIVAPor","decimal",0,"px",6,6,"right",null,[],2363,"NcDetIVAPor",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2366,26,"NCDETUNINETO","Neto Unitario","","NcDetUniNeto","decimal",0,"px",13,13,"right",null,[],2366,"NcDetUniNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2365,27,"NCDETUNIIVA","IVA Unitario","","NcDetUniIVA","decimal",0,"px",13,13,"right",null,[],2365,"NcDetUniIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2364,28,"NCDETUNIIMP","Precio","","NcDetUniImp","decimal",0,"px",13,13,"right",null,[],2364,"NcDetUniImp",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2358,29,"NCDETCANTIDAD","Cantidad","","NcDetCantidad","int",0,"px",8,8,"right",null,[],2358,"NcDetCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2362,30,"NCDETIMPORTENETO","Importe Neto","","NcDetImporteNeto","decimal",0,"px",13,13,"right",null,[],2362,"NcDetImporteNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2361,31,"NCDETIMPORTEIVA","Importe IVA","","NcDetImporteIVA","decimal",0,"px",13,13,"right",null,[],2361,"NcDetImporteIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2360,32,"NCDETIMPORTE","Importe","","NcDetImporte","decimal",0,"px",13,13,"right",null,[],2360,"NcDetImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,35,16,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");r=this.GRIDPAGINATIONBARContainer;r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Class","Class","PaginationBar","str");r.setProp("ShowFirst","Showfirst",!1,"bool");r.setProp("ShowPrevious","Showprevious",!0,"bool");r.setProp("ShowNext","Shownext",!0,"bool");r.setProp("ShowLast","Showlast",!1,"bool");r.setProp("PagesToShow","Pagestoshow",5,"num");r.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");r.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");r.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");r.setProp("SelectedPage","Selectedpage","","char");r.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");r.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");r.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");r.setProp("First","First","First","str");r.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");r.setProp("Next","Next","WWP_PagingNextCaption","str");r.setProp("Last","Last","Last","str");r.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");r.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");r.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");r.addV2CFunction("AV16GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");r.addC2VFunction(function(n){n.ParentObject.AV16GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV16GridCurrentPage)});r.addV2CFunction("AV17GridPageCount","vGRIDPAGECOUNT","SetPageCount");r.addC2VFunction(function(n){n.ParentObject.AV17GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV17GridPageCount)});r.setProp("RecordCount","Recordcount","","str");r.setProp("Page","Page","","str");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});r.addEventHandler("ChangePage",this.e11gs2_client);r.addEventHandler("ChangeRowsPerPage",this.e12gs2_client);this.setUserControl(r);this.DDO_FACVTADETSUCDEPOSITOIDContainer=gx.uc.getNew(this,39,16,"BootstrapDropDownOptions",this.CmpContext+"DDO_FACVTADETSUCDEPOSITOIDContainer","Ddo_facvtadetsucdepositoid","DDO_FACVTADETSUCDEPOSITOID");t=this.DDO_FACVTADETSUCDEPOSITOIDContainer;t.setProp("Class","Class","","char");t.setProp("IconType","Icontype","Image","str");t.setProp("Icon","Icon","","str");t.setProp("Caption","Caption","","str");t.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");t.setProp("Cls","Cls","ColumnSettings","str");t.setProp("ActiveEventKey","Activeeventkey","","char");t.setProp("FilteredText_set","Filteredtext_set","","char");t.setProp("FilteredText_get","Filteredtext_get","","char");t.setProp("FilteredTextTo_set","Filteredtextto_set","","char");t.setProp("FilteredTextTo_get","Filteredtextto_get","","char");t.setProp("SelectedValue_set","Selectedvalue_set","","char");t.setProp("SelectedValue_get","Selectedvalue_get","","char");t.setProp("SelectedText_set","Selectedtext_set","","char");t.setProp("SelectedText_get","Selectedtext_get","","char");t.setProp("GAMOAuthToken","Gamoauthtoken","","char");t.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");t.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");t.setProp("Enabled","Enabled",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");t.setProp("IncludeSortASC","Includesortasc",!0,"bool");t.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");t.setDynProp("SortedStatus","Sortedstatus","","char");t.setProp("IncludeFilter","Includefilter",!1,"bool");t.setProp("FilterType","Filtertype","","char");t.setProp("FilterIsRange","Filterisrange",!1,"boolean");t.setProp("IncludeDataList","Includedatalist",!1,"bool");t.setProp("DataListType","Datalisttype","","char");t.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");t.setProp("DataListFixedValues","Datalistfixedvalues","","char");t.setProp("DataListProc","Datalistproc","","char");t.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");t.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");t.setProp("FixedFilters","Fixedfilters","","str");t.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");t.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");t.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");t.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");t.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");t.setProp("EmptyItem","Emptyitem",!1,"boolean");t.setProp("SortASC","Sortasc","WWP_TSSortASC","str");t.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");t.setProp("LoadingData","Loadingdata","","char");t.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");t.setProp("RangeFilterFrom","Rangefilterfrom","","char");t.setProp("RangeFilterTo","Rangefilterto","","char");t.setProp("NoResultsFound","Noresultsfound","","char");t.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");t.setProp("UpdateButtonText","Updatebuttontext","Update","str");t.setProp("EmptyItemText","Emptyitemtext","","char");t.setProp("OnlySelectedValues","Onlyselectedvalues","","char");t.setProp("SelectAllText","Selectalltext","","char");t.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");t.addV2CFunction("AV21DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");t.addC2VFunction(function(n){n.ParentObject.AV21DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV21DDO_TitleSettingsIcons)});t.addV2CFunction("AV19FacVtaDetSucDepositoIdTitleFilterData","vFACVTADETSUCDEPOSITOIDTITLEFILTERDATA","SetDropDownOptionsData");t.addC2VFunction(function(n){n.ParentObject.AV19FacVtaDetSucDepositoIdTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vFACVTADETSUCDEPOSITOIDTITLEFILTERDATA",n.ParentObject.AV19FacVtaDetSucDepositoIdTitleFilterData)});t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("OnOptionClicked",this.e13gs2_client);this.setUserControl(t);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,42,40,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");f=this.WORKWITHPLUSUTILITIES1Container;f.setProp("Class","Class","","char");f.setProp("Enabled","Enabled",!0,"boolean");f.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");f.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");f.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");f.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");f.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");f.setProp("Visible","Visible",!0,"bool");f.setC2ShowFunction(function(n){n.show()});this.setUserControl(f);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"",grid:0};i[16]={id:16,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETID",gxz:"Z292NcDetId",gxold:"O292NcDetId",gxvar:"A292NcDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A292NcDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z292NcDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCDETID",n||gx.fn.currentGridRowImpl(15),gx.O.A292NcDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A292NcDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCDETID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[17]={id:17,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAID",n||gx.fn.currentGridRowImpl(15),gx.O.A218FacVtaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTAID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETID",n||gx.fn.currentGridRowImpl(15),gx.O.A222FacVtaDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[19]={id:19,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETENTIDADID",gxz:"Z227FacVtaDetEntidadId",gxold:"O227FacVtaDetEntidadId",gxvar:"A227FacVtaDetEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z227FacVtaDetEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETENTIDADID",n||gx.fn.currentGridRowImpl(15),gx.O.A227FacVtaDetEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A227FacVtaDetEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETENTIDADID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[20]={id:20,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCURSALID",gxz:"Z228FacVtaDetSucursalId",gxold:"O228FacVtaDetSucursalId",gxvar:"A228FacVtaDetSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z228FacVtaDetSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETSUCURSALID",n||gx.fn.currentGridRowImpl(15),gx.O.A228FacVtaDetSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A228FacVtaDetSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETSUCURSALID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCDEPOSITOID",gxz:"Z229FacVtaDetSucDepositoId",gxold:"O229FacVtaDetSucDepositoId",gxvar:"A229FacVtaDetSucDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z229FacVtaDetSucDepositoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETSUCDEPOSITOID",n||gx.fn.currentGridRowImpl(15),gx.O.A229FacVtaDetSucDepositoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A229FacVtaDetSucDepositoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETSUCDEPOSITOID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[22]={id:22,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETSUCITEM",gxz:"Z230FacVtaDetSucItem",gxold:"O230FacVtaDetSucItem",gxvar:"A230FacVtaDetSucItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z230FacVtaDetSucItem=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTADETSUCITEM",n||gx.fn.currentGridRowImpl(15),gx.O.A230FacVtaDetSucItem,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A230FacVtaDetSucItem=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTADETSUCITEM",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[23]={id:23,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCARTID",gxz:"Z2357NcArtId",gxold:"O2357NcArtId",gxvar:"A2357NcArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2357NcArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2357NcArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCARTID",n||gx.fn.currentGridRowImpl(15),gx.O.A2357NcArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2357NcArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCARTID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[24]={id:24,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETDESCRIPCION",gxz:"Z2359NcDetDescripcion",gxold:"O2359NcDetDescripcion",gxvar:"A2359NcDetDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2359NcDetDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2359NcDetDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("NCDETDESCRIPCION",n||gx.fn.currentGridRowImpl(15),gx.O.A2359NcDetDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2359NcDetDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCDETDESCRIPCION",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[25]={id:25,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETIVAPOR",gxz:"Z2363NcDetIVAPor",gxold:"O2363NcDetIVAPor",gxvar:"A2363NcDetIVAPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2363NcDetIVAPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2363NcDetIVAPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETIVAPOR",n||gx.fn.currentGridRowImpl(15),gx.O.A2363NcDetIVAPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2363NcDetIVAPor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETIVAPOR",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[26]={id:26,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETUNINETO",gxz:"Z2366NcDetUniNeto",gxold:"O2366NcDetUniNeto",gxvar:"A2366NcDetUniNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2366NcDetUniNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2366NcDetUniNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETUNINETO",n||gx.fn.currentGridRowImpl(15),gx.O.A2366NcDetUniNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2366NcDetUniNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETUNINETO",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETUNIIVA",gxz:"Z2365NcDetUniIVA",gxold:"O2365NcDetUniIVA",gxvar:"A2365NcDetUniIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2365NcDetUniIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2365NcDetUniIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETUNIIVA",n||gx.fn.currentGridRowImpl(15),gx.O.A2365NcDetUniIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2365NcDetUniIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETUNIIVA",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETUNIIMP",gxz:"Z2364NcDetUniImp",gxold:"O2364NcDetUniImp",gxvar:"A2364NcDetUniImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2364NcDetUniImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2364NcDetUniImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETUNIIMP",n||gx.fn.currentGridRowImpl(15),gx.O.A2364NcDetUniImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2364NcDetUniImp=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETUNIIMP",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[29]={id:29,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETCANTIDAD",gxz:"Z2358NcDetCantidad",gxold:"O2358NcDetCantidad",gxvar:"A2358NcDetCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2358NcDetCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2358NcDetCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCDETCANTIDAD",n||gx.fn.currentGridRowImpl(15),gx.O.A2358NcDetCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2358NcDetCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCDETCANTIDAD",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[30]={id:30,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETIMPORTENETO",gxz:"Z2362NcDetImporteNeto",gxold:"O2362NcDetImporteNeto",gxvar:"A2362NcDetImporteNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2362NcDetImporteNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2362NcDetImporteNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETIMPORTENETO",n||gx.fn.currentGridRowImpl(15),gx.O.A2362NcDetImporteNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2362NcDetImporteNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETIMPORTENETO",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[31]={id:31,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETIMPORTEIVA",gxz:"Z2361NcDetImporteIVA",gxold:"O2361NcDetImporteIVA",gxvar:"A2361NcDetImporteIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2361NcDetImporteIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2361NcDetImporteIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETIMPORTEIVA",n||gx.fn.currentGridRowImpl(15),gx.O.A2361NcDetImporteIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2361NcDetImporteIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETIMPORTEIVA",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[32]={id:32,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCDETIMPORTE",gxz:"Z2360NcDetImporte",gxold:"O2360NcDetImporte",gxvar:"A2360NcDetImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2360NcDetImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2360NcDetImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCDETIMPORTE",n||gx.fn.currentGridRowImpl(15),gx.O.A2360NcDetImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2360NcDetImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCDETIMPORTE",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[33]={id:33,fld:"",grid:0};i[34]={id:34,fld:"",grid:0};i[36]={id:36,fld:"",grid:0};i[37]={id:37,fld:"",grid:0};i[38]={id:38,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[40]={id:40,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",gxz:"ZV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",gxold:"OV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",gxvar:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",gx.O.AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};i[41]={id:41,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCID",gxz:"Z289NcId",gxold:"O289NcId",gxvar:"A289NcId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A289NcId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z289NcId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NCID",gx.O.A289NcId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A289NcId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NCID",".")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});i[43]={id:43,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV18OrderedDsc",gxold:"OV18OrderedDsc",gxvar:"AV18OrderedDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18OrderedDsc=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV18OrderedDsc=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV18OrderedDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV18OrderedDsc=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};this.Z292NcDetId=0;this.O292NcDetId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.Z227FacVtaDetEntidadId=0;this.O227FacVtaDetEntidadId=0;this.Z228FacVtaDetSucursalId=0;this.O228FacVtaDetSucursalId=0;this.Z229FacVtaDetSucDepositoId=0;this.O229FacVtaDetSucDepositoId=0;this.Z230FacVtaDetSucItem=0;this.O230FacVtaDetSucItem=0;this.Z2357NcArtId=0;this.O2357NcArtId=0;this.Z2359NcDetDescripcion="";this.O2359NcDetDescripcion="";this.Z2363NcDetIVAPor=0;this.O2363NcDetIVAPor=0;this.Z2366NcDetUniNeto=0;this.O2366NcDetUniNeto=0;this.Z2365NcDetUniIVA=0;this.O2365NcDetUniIVA=0;this.Z2364NcDetUniImp=0;this.O2364NcDetUniImp=0;this.Z2358NcDetCantidad=0;this.O2358NcDetCantidad=0;this.Z2362NcDetImporteNeto=0;this.O2362NcDetImporteNeto=0;this.Z2361NcDetImporteIVA=0;this.O2361NcDetImporteIVA=0;this.Z2360NcDetImporte=0;this.O2360NcDetImporte=0;this.AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace="";this.ZV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace="";this.OV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace="";this.A289NcId=0;this.Z289NcId=0;this.O289NcId=0;this.AV18OrderedDsc=!1;this.ZV18OrderedDsc=!1;this.OV18OrderedDsc=!1;this.AV16GridCurrentPage=0;this.AV21DDO_TitleSettingsIcons={Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""};this.AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace="";this.A289NcId=0;this.AV18OrderedDsc=!1;this.AV7NcId=0;this.A292NcDetId=0;this.A218FacVtaId=0;this.A222FacVtaDetId=0;this.A227FacVtaDetEntidadId=0;this.A228FacVtaDetSucursalId=0;this.A229FacVtaDetSucDepositoId=0;this.A230FacVtaDetSucItem=0;this.A2357NcArtId=0;this.A2359NcDetDescripcion="";this.A2363NcDetIVAPor=0;this.A2366NcDetUniNeto=0;this.A2365NcDetUniIVA=0;this.A2364NcDetUniImp=0;this.A2358NcDetCantidad=0;this.A2362NcDetImporteNeto=0;this.A2361NcDetImporteIVA=0;this.A2360NcDetImporte=0;this.AV27Pgmname="";this.Events={e11gs2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12gs2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13gs2_client:["DDO_FACVTADETSUCDEPOSITOID.ONOPTIONCLICKED",!0],e17gs2_client:["ENTER",!0],e18gs2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7NcId",fld:"vNCID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{av:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV27Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV19FacVtaDetSucDepositoIdTitleFilterData",fld:"vFACVTADETSUCDEPOSITOIDTITLEFILTERDATA",pic:""},{ctrl:"FACVTADETSUCDEPOSITOID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("FACVTADETSUCDEPOSITOID","Title")',ctrl:"FACVTADETSUCDEPOSITOID",prop:"Title"},{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV27Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7NcId",fld:"vNCID",pic:"ZZZZZZZ9"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"this.DDO_FACVTADETSUCDEPOSITOIDContainer.TitleControlIdToReplace",ctrl:"DDO_FACVTADETSUCDEPOSITOID",prop:"TitleControlIdToReplace"},{av:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("NCID","Visible")',ctrl:"NCID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:"vORDEREDDSC",prop:"Visible"},{av:"AV21DDO_TitleSettingsIcons",fld:"vDDO_TITLESETTINGSICONS",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_FACVTADETSUCDEPOSITOIDContainer.SortedStatus",ctrl:"DDO_FACVTADETSUCDEPOSITOID",prop:"SortedStatus"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7NcId",fld:"vNCID",pic:"ZZZZZZZ9"},{av:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV27Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7NcId",fld:"vNCID",pic:"ZZZZZZZ9"},{av:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV27Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["DDO_FACVTADETSUCDEPOSITOID.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7NcId",fld:"vNCID",pic:"ZZZZZZZ9"},{av:"AV20ddo_FacVtaDetSucDepositoIdTitleControlIdToReplace",fld:"vDDO_FACVTADETSUCDEPOSITOIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV27Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.DDO_FACVTADETSUCDEPOSITOIDContainer.ActiveEventKey",ctrl:"DDO_FACVTADETSUCDEPOSITOID",prop:"ActiveEventKey"}],[{av:"AV18OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_FACVTADETSUCDEPOSITOIDContainer.SortedStatus",ctrl:"DDO_FACVTADETSUCDEPOSITOID",prop:"SortedStatus"},{av:"AV19FacVtaDetSucDepositoIdTitleFilterData",fld:"vFACVTADETSUCDEPOSITOIDTITLEFILTERDATA",pic:""},{ctrl:"FACVTADETSUCDEPOSITOID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("FACVTADETSUCDEPOSITOID","Title")',ctrl:"FACVTADETSUCDEPOSITOID",prop:"Title"},{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.setVCMap("AV27Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7NcId","vNCID",0,"int",8,0);this.setVCMap("AV7NcId","vNCID",0,"int",8,0);this.setVCMap("AV27Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7NcId","vNCID",0,"int",8,0);this.setVCMap("AV27Pgmname","vPGMNAME",0,"char",129,0);u.addRefreshingVar(this.GXValidFnc[43]);u.addRefreshingVar({rfrVar:"AV7NcId"});u.addRefreshingVar(this.GXValidFnc[40]);u.addRefreshingVar({rfrVar:"AV27Pgmname"});u.addRefreshingParm(this.GXValidFnc[43]);u.addRefreshingParm({rfrVar:"AV7NcId"});u.addRefreshingParm(this.GXValidFnc[40]);u.addRefreshingParm({rfrVar:"AV27Pgmname"});this.Initialize()})