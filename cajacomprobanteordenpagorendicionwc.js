/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:36.15
*/
gx.evt.autoSkip=!1;gx.define("cajacomprobanteordenpagorendicionwc",!0,function(n){var i,u,r,t;this.ServerClass="cajacomprobanteordenpagorendicionwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7CajaComprobanteId=gx.fn.getIntegerValue("vCAJACOMPROBANTEID",".");this.AV7CajaComprobanteId=gx.fn.getIntegerValue("vCAJACOMPROBANTEID",".");this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e11ex2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ex2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ex2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ex2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,22,23,24,25,26,28,29,30,31,32,34,35,36,37];this.GXLastCtrlId=37;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"cajacomprobanteordenpagorendicionwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit(84,28,"ORDPGOID","Nº","","OrdPgoId","int",0,"px",9,9,"right",null,[],84,"OrdPgoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(320,29,"ORDPGORENDICIONID","Linea","","OrdPgoRendicionId","int",0,"px",2,2,"right",null,[],320,"OrdPgoRendicionId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2730,30,"ORDPGORENDICIONIMPORTE","Importe","","OrdPgoRendicionImporte","decimal",0,"px",13,13,"right",null,[],2730,"OrdPgoRendicionImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(u);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,33,28,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});t.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11ex2_client);t.addEventHandler("ChangeRowsPerPage",this.e12ex2_client);this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[14]={id:14,fld:"TABLEHEADER",grid:0};i[15]={id:15,fld:"",grid:0};i[16]={id:16,fld:"",grid:0};i[17]={id:17,fld:"TABLEACTIONS",grid:0};i[18]={id:18,fld:"",grid:0};i[19]={id:19,fld:"TABLERIGHTHEADER",grid:0};i[22]={id:22,fld:"",grid:0};i[23]={id:23,fld:"",grid:0};i[24]={id:24,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[25]={id:25,fld:"",grid:0};i[26]={id:26,fld:"",grid:0};i[28]={id:28,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOID",n||gx.fn.currentGridRowImpl(27),gx.O.A84OrdPgoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOID",n||gx.fn.currentGridRowImpl(27),".")},nac:gx.falseFn};i[29]={id:29,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGORENDICIONID",gxz:"Z320OrdPgoRendicionId",gxold:"O320OrdPgoRendicionId",gxvar:"A320OrdPgoRendicionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A320OrdPgoRendicionId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z320OrdPgoRendicionId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGORENDICIONID",n||gx.fn.currentGridRowImpl(27),gx.O.A320OrdPgoRendicionId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A320OrdPgoRendicionId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGORENDICIONID",n||gx.fn.currentGridRowImpl(27),".")},nac:gx.falseFn};i[30]={id:30,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGORENDICIONIMPORTE",gxz:"Z2730OrdPgoRendicionImporte",gxold:"O2730OrdPgoRendicionImporte",gxvar:"A2730OrdPgoRendicionImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2730OrdPgoRendicionImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2730OrdPgoRendicionImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGORENDICIONIMPORTE",n||gx.fn.currentGridRowImpl(27),gx.O.A2730OrdPgoRendicionImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2730OrdPgoRendicionImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGORENDICIONIMPORTE",n||gx.fn.currentGridRowImpl(27),".",",")},nac:gx.falseFn};i[31]={id:31,fld:"",grid:0};i[32]={id:32,fld:"",grid:0};i[34]={id:34,fld:"",grid:0};i[35]={id:35,fld:"",grid:0};i[36]={id:36,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[37]={id:37,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEID",gxz:"Z36CajaComprobanteId",gxold:"O36CajaComprobanteId",gxvar:"A36CajaComprobanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A36CajaComprobanteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z36CajaComprobanteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJACOMPROBANTEID",gx.O.A36CajaComprobanteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A36CajaComprobanteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJACOMPROBANTEID",".")},nac:gx.falseFn};this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.Z320OrdPgoRendicionId=0;this.O320OrdPgoRendicionId=0;this.Z2730OrdPgoRendicionImporte=0;this.O2730OrdPgoRendicionImporte=0;this.A36CajaComprobanteId=0;this.Z36CajaComprobanteId=0;this.O36CajaComprobanteId=0;this.AV37GridCurrentPage=0;this.A36CajaComprobanteId=0;this.AV7CajaComprobanteId=0;this.A84OrdPgoId=0;this.A320OrdPgoRendicionId=0;this.A2730OrdPgoRendicionImporte=0;this.AV47Pgmname="";this.Events={e11ex2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ex2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ex2_client:["ENTER",!0],e17ex2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("CAJACOMPROBANTEID","Visible")',ctrl:"CAJACOMPROBANTEID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7CajaComprobanteId",fld:"vCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7CajaComprobanteId","vCAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("AV7CajaComprobanteId","vCAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7CajaComprobanteId","vCAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);u.addRefreshingVar({rfrVar:"AV7CajaComprobanteId"});u.addRefreshingVar({rfrVar:"AV47Pgmname"});u.addRefreshingParm({rfrVar:"AV7CajaComprobanteId"});u.addRefreshingParm({rfrVar:"AV47Pgmname"});this.Initialize()})