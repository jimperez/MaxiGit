/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:2:27.82
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtapresupuestovtadetallewc",!0,function(n){var t,r,i,u,f;this.ServerClass="presupuestovtapresupuestovtadetallewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV93Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8PreId=gx.fn.getIntegerValue("vPREID",".");this.AV89TotPreDetFinalImporte=gx.fn.getDecimalValue("vTOTPREDETFINALIMPORTE",".",",");this.A1370PreDetDesPorImp=gx.fn.getDecimalValue("PREDETDESPORIMP",".",",");this.A1376PreDetDesMImp=gx.fn.getDecimalValue("PREDETDESMIMP",".",",");this.AV8PreId=gx.fn.getIntegerValue("vPREID",".");this.AV93Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV89TotPreDetFinalImporte=gx.fn.getDecimalValue("vTOTPREDETFINALIMPORTE",".",",")};this.s142_client=function(){this.AV89TotPreDetFinalImporte=0};this.e11u42_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12u42_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16u42_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17u42_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,57,58,59,61,62,63,64];this.GXLastCtrlId=64;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtapresupuestovtadetallewc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(94,18,"PREDETID","Nº","","PreDetId","int",0,"px",4,4,"right",null,[],94,"PreDetId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(8,19,"ARTID","Ide.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1360,20,"PREDETDESCRIPCION","Descripción","","PreDetDescripcion","svchar",0,"px",64,64,"left",null,[],1360,"PreDetDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1362,21,"PREDETIVAPOR","Ali","","PreDetIVAPor","decimal",0,"px",6,6,"right",null,[],1362,"PreDetIVAPor",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1361,22,"PREDETUNINETO","Neto U","","PreDetUniNeto","decimal",0,"px",13,13,"right",null,[],1361,"PreDetUniNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1363,23,"PREDETUNIIVA","IVA U","","PreDetUniIVA","decimal",0,"px",13,13,"right",null,[],1363,"PreDetUniIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1364,24,"PREDETUNIIMP","Precio","","PreDetUniImp","decimal",0,"px",13,13,"right",null,[],1364,"PreDetUniImp",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(653,25,"PREDETCANTIDAD","Cant.","","PreDetCantidad","int",0,"px",8,8,"right",null,[],653,"PreDetCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1365,26,"PREDETSUBNETO","Sub. Neto","","PreDetSubNeto","decimal",0,"px",13,13,"right",null,[],1365,"PreDetSubNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1366,27,"PREDETSUBIVA","Sub. IVA","","PreDetSubIVA","decimal",0,"px",13,13,"right",null,[],1366,"PreDetSubIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1367,28,"PREDETSUBIMP","Subtotal","","PreDetSubImp","decimal",0,"px",13,13,"right",null,[],1367,"PreDetSubImp",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit("Descuento",29,"vDESCUENTO","Desc.","","Descuento","decimal",0,"px",13,13,"right",null,[],"Descuento","Descuento",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1379,30,"PREDETDESPMIMP","Sub C/Desc","","PreDetDesPMImp","decimal",0,"px",13,13,"right",null,[],1379,"PreDetDesPMImp",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1404,31,"PREDETFINALNETO","Neto","","PreDetFinalNeto","decimal",0,"px",13,13,"right",null,[],1404,"PreDetFinalNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1405,32,"PREDETFINALIVA","IVA","","PreDetFinalIVA","decimal",0,"px",13,13,"right",null,[],1405,"PreDetFinalIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit("Recargofinanciero",33,"vRECARGOFINANCIERO","Rec/Fin.","","RecargoFinanciero","decimal",0,"px",13,13,"right",null,[],"Recargofinanciero","RecargoFinanciero",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1406,34,"PREDETFINALIMPORTE","Importe","","PreDetFinalImporte","decimal",0,"px",13,13,"right",null,[],1406,"PreDetFinalImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,60,57,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV78GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV78GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV78GridCurrentPage)});i.addV2CFunction("AV79GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV79GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV79GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11u42_client);i.addEventHandler("ChangeRowsPerPage",this.e12u42_client);this.setUserControl(i);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");u=this.DVPANEL_TABLEGRIDHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Detalle","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,65,57,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");f=this.WORKWITHPLUSUTILITIES1Container;f.setProp("Class","Class","","char");f.setProp("Enabled","Enabled",!0,"boolean");f.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");f.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");f.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");f.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");f.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");f.setProp("Visible","Visible",!0,"bool");f.setC2ShowFunction(function(n){n.show()});this.setUserControl(f);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETID",gxz:"Z94PreDetId",gxold:"O94PreDetId",gxvar:"A94PreDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A94PreDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z94PreDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREDETID",n||gx.fn.currentGridRowImpl(17),gx.O.A94PreDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A94PreDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREDETID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(17),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESCRIPCION",gxz:"Z1360PreDetDescripcion",gxold:"O1360PreDetDescripcion",gxvar:"A1360PreDetDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1360PreDetDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1360PreDetDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("PREDETDESCRIPCION",n||gx.fn.currentGridRowImpl(17),gx.O.A1360PreDetDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1360PreDetDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREDETDESCRIPCION",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETIVAPOR",gxz:"Z1362PreDetIVAPor",gxold:"O1362PreDetIVAPor",gxvar:"A1362PreDetIVAPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1362PreDetIVAPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1362PreDetIVAPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETIVAPOR",n||gx.fn.currentGridRowImpl(17),gx.O.A1362PreDetIVAPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1362PreDetIVAPor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETIVAPOR",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETUNINETO",gxz:"Z1361PreDetUniNeto",gxold:"O1361PreDetUniNeto",gxvar:"A1361PreDetUniNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1361PreDetUniNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1361PreDetUniNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETUNINETO",n||gx.fn.currentGridRowImpl(17),gx.O.A1361PreDetUniNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1361PreDetUniNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETUNINETO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETUNIIVA",gxz:"Z1363PreDetUniIVA",gxold:"O1363PreDetUniIVA",gxvar:"A1363PreDetUniIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1363PreDetUniIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1363PreDetUniIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETUNIIVA",n||gx.fn.currentGridRowImpl(17),gx.O.A1363PreDetUniIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1363PreDetUniIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETUNIIVA",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETUNIIMP",gxz:"Z1364PreDetUniImp",gxold:"O1364PreDetUniImp",gxvar:"A1364PreDetUniImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1364PreDetUniImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1364PreDetUniImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETUNIIMP",n||gx.fn.currentGridRowImpl(17),gx.O.A1364PreDetUniImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1364PreDetUniImp=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETUNIIMP",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETCANTIDAD",gxz:"Z653PreDetCantidad",gxold:"O653PreDetCantidad",gxvar:"A653PreDetCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A653PreDetCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z653PreDetCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREDETCANTIDAD",n||gx.fn.currentGridRowImpl(17),gx.O.A653PreDetCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A653PreDetCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREDETCANTIDAD",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSUBNETO",gxz:"Z1365PreDetSubNeto",gxold:"O1365PreDetSubNeto",gxvar:"A1365PreDetSubNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1365PreDetSubNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1365PreDetSubNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETSUBNETO",n||gx.fn.currentGridRowImpl(17),gx.O.A1365PreDetSubNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1365PreDetSubNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETSUBNETO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSUBIVA",gxz:"Z1366PreDetSubIVA",gxold:"O1366PreDetSubIVA",gxvar:"A1366PreDetSubIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1366PreDetSubIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1366PreDetSubIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETSUBIVA",n||gx.fn.currentGridRowImpl(17),gx.O.A1366PreDetSubIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1366PreDetSubIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETSUBIVA",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETSUBIMP",gxz:"Z1367PreDetSubImp",gxold:"O1367PreDetSubImp",gxvar:"A1367PreDetSubImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1367PreDetSubImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1367PreDetSubImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETSUBIMP",n||gx.fn.currentGridRowImpl(17),gx.O.A1367PreDetSubImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1367PreDetSubImp=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETSUBIMP",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCUENTO",gxz:"ZV87Descuento",gxold:"OV87Descuento",gxvar:"AV87Descuento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV87Descuento=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV87Descuento=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vDESCUENTO",n||gx.fn.currentGridRowImpl(17),gx.O.AV87Descuento,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV87Descuento=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vDESCUENTO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESPMIMP",gxz:"Z1379PreDetDesPMImp",gxold:"O1379PreDetDesPMImp",gxvar:"A1379PreDetDesPMImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1379PreDetDesPMImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1379PreDetDesPMImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETDESPMIMP",n||gx.fn.currentGridRowImpl(17),gx.O.A1379PreDetDesPMImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1379PreDetDesPMImp=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETDESPMIMP",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETFINALNETO",gxz:"Z1404PreDetFinalNeto",gxold:"O1404PreDetFinalNeto",gxvar:"A1404PreDetFinalNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1404PreDetFinalNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1404PreDetFinalNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETFINALNETO",n||gx.fn.currentGridRowImpl(17),gx.O.A1404PreDetFinalNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1404PreDetFinalNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETFINALNETO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETFINALIVA",gxz:"Z1405PreDetFinalIVA",gxold:"O1405PreDetFinalIVA",gxvar:"A1405PreDetFinalIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1405PreDetFinalIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1405PreDetFinalIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETFINALIVA",n||gx.fn.currentGridRowImpl(17),gx.O.A1405PreDetFinalIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1405PreDetFinalIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETFINALIVA",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRECARGOFINANCIERO",gxz:"ZV88RecargoFinanciero",gxold:"OV88RecargoFinanciero",gxvar:"AV88RecargoFinanciero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV88RecargoFinanciero=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV88RecargoFinanciero=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vRECARGOFINANCIERO",n||gx.fn.currentGridRowImpl(17),gx.O.AV88RecargoFinanciero,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV88RecargoFinanciero=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vRECARGOFINANCIERO",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETFINALIMPORTE",gxz:"Z1406PreDetFinalImporte",gxold:"O1406PreDetFinalImporte",gxvar:"A1406PreDetFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1406PreDetFinalImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1406PreDetFinalImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREDETFINALIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A1406PreDetFinalImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1406PreDetFinalImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREDETFINALIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"HTML_GRIDTOTALIZER",grid:0};t[38]={id:38,fld:"GRIDTABLETOTALIZER",grid:0};t[57]={id:57,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPREDETFINALIMPORTE",gxz:"ZV90TotValuePreDetFinalImporte",gxold:"OV90TotValuePreDetFinalImporte",gxvar:"AV90TotValuePreDetFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV90TotValuePreDetFinalImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV90TotValuePreDetFinalImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPREDETFINALIMPORTE",gx.O.AV90TotValuePreDetFinalImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV90TotValuePreDetFinalImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPREDETFINALIMPORTE")},nac:gx.falseFn};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[64]={id:64,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z94PreDetId=0;this.O94PreDetId=0;this.Z8ArtId=0;this.O8ArtId=0;this.Z1360PreDetDescripcion="";this.O1360PreDetDescripcion="";this.Z1362PreDetIVAPor=0;this.O1362PreDetIVAPor=0;this.Z1361PreDetUniNeto=0;this.O1361PreDetUniNeto=0;this.Z1363PreDetUniIVA=0;this.O1363PreDetUniIVA=0;this.Z1364PreDetUniImp=0;this.O1364PreDetUniImp=0;this.Z653PreDetCantidad=0;this.O653PreDetCantidad=0;this.Z1365PreDetSubNeto=0;this.O1365PreDetSubNeto=0;this.Z1366PreDetSubIVA=0;this.O1366PreDetSubIVA=0;this.Z1367PreDetSubImp=0;this.O1367PreDetSubImp=0;this.ZV87Descuento=0;this.OV87Descuento=0;this.Z1379PreDetDesPMImp=0;this.O1379PreDetDesPMImp=0;this.Z1404PreDetFinalNeto=0;this.O1404PreDetFinalNeto=0;this.Z1405PreDetFinalIVA=0;this.O1405PreDetFinalIVA=0;this.ZV88RecargoFinanciero=0;this.OV88RecargoFinanciero=0;this.Z1406PreDetFinalImporte=0;this.O1406PreDetFinalImporte=0;this.AV90TotValuePreDetFinalImporte="";this.ZV90TotValuePreDetFinalImporte="";this.OV90TotValuePreDetFinalImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV90TotValuePreDetFinalImporte="";this.AV78GridCurrentPage=0;this.A89PreId=0;this.AV8PreId=0;this.A1376PreDetDesMImp=0;this.A1370PreDetDesPorImp=0;this.A94PreDetId=0;this.A8ArtId=0;this.A1360PreDetDescripcion="";this.A1362PreDetIVAPor=0;this.A1361PreDetUniNeto=0;this.A1363PreDetUniIVA=0;this.A1364PreDetUniImp=0;this.A653PreDetCantidad=0;this.A1365PreDetSubNeto=0;this.A1366PreDetSubIVA=0;this.A1367PreDetSubImp=0;this.AV87Descuento=0;this.A1379PreDetDesPMImp=0;this.A1404PreDetFinalNeto=0;this.A1405PreDetFinalIVA=0;this.AV88RecargoFinanciero=0;this.A1406PreDetFinalImporte=0;this.AV93Pgmname="";this.AV89TotPreDetFinalImporte=0;this.Events={e11u42_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12u42_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16u42_client:["ENTER",!0],e17u42_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV93Pgmname",fld:"vPGMNAME",pic:""},{av:"AV89TotPreDetFinalImporte",fld:"vTOTPREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A1360PreDetDescripcion",fld:"PREDETDESCRIPCION",pic:"@!"},{av:"A1406PreDetFinalImporte",fld:"PREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV78GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV79GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV89TotPreDetFinalImporte",fld:"vTOTPREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV90TotValuePreDetFinalImporte",fld:"vTOTVALUEPREDETFINALIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV93Pgmname",fld:"vPGMNAME",pic:""},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV93Pgmname",fld:"vPGMNAME",pic:""},{av:"AV89TotPreDetFinalImporte",fld:"vTOTPREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV93Pgmname",fld:"vPGMNAME",pic:""},{av:"AV89TotPreDetFinalImporte",fld:"vTOTPREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A1370PreDetDesPorImp",fld:"PREDETDESPORIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1376PreDetDesMImp",fld:"PREDETDESMIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1406PreDetFinalImporte",fld:"PREDETFINALIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1379PreDetDesPMImp",fld:"PREDETDESPMIMP",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV87Descuento",fld:"vDESCUENTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV88RecargoFinanciero",fld:"vRECARGOFINANCIERO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.setVCMap("AV93Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV89TotPreDetFinalImporte","vTOTPREDETFINALIMPORTE",0,"decimal",18,2);this.setVCMap("A1370PreDetDesPorImp","PREDETDESPORIMP",0,"decimal",12,2);this.setVCMap("A1376PreDetDesMImp","PREDETDESMIMP",0,"decimal",12,2);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV93Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV89TotPreDetFinalImporte","vTOTPREDETFINALIMPORTE",0,"decimal",18,2);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV93Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV89TotPreDetFinalImporte","vTOTPREDETFINALIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV8PreId"});r.addRefreshingVar({rfrVar:"AV93Pgmname"});r.addRefreshingVar({rfrVar:"AV89TotPreDetFinalImporte"});r.addRefreshingVar(this.GXValidFnc[64]);r.addRefreshingParm({rfrVar:"AV8PreId"});r.addRefreshingParm({rfrVar:"AV93Pgmname"});r.addRefreshingParm({rfrVar:"AV89TotPreDetFinalImporte"});r.addRefreshingParm(this.GXValidFnc[64]);this.Initialize()})