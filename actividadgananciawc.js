/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:7.41
*/
gx.evt.autoSkip=!1;gx.define("actividadgananciawc",!0,function(n){var i,u,t,r;this.ServerClass="actividadgananciawc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7ActividadId=gx.fn.getControlValue("vACTIVIDADID");this.AV7ActividadId=gx.fn.getControlValue("vACTIVIDADID");this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e11gn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12gn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16gn2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17gn2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,27,28,29,30];this.GXLastCtrlId=30;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"actividadgananciawc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit(309,18,"ACTIVIDADGANANCIADESDE","Desde","Fecha ...","ActividadGananciaDesde","date",0,"px",10,10,"right",null,[],309,"ActividadGananciaDesde",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2685,19,"ACTIVIDADGANANCIAHASTA","Hasta","Fecha ...","ActividadGananciaHasta","date",0,"px",10,10,"right",null,[],2685,"ActividadGananciaHasta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addComboBox(2686,20,"ACTIVIDADGANANCIAPERUNIDAD","Unidad","ActividadGananciaPerUnidad","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");u.addSingleLineEdit(2687,21,"ACTIVIDADGANANCIAPERVALOR","Valor","","ActividadGananciaPerValor","int",0,"px",4,4,"right",null,[],2687,"ActividadGananciaPerValor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2689,22,"ACTIVIDADGANANCIATOPE","Mínimo","","ActividadGananciaTope","decimal",0,"px",13,13,"right",null,[],2689,"ActividadGananciaTope",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2688,23,"ACTIVIDADGANANCIAPORC","Alícuota","","ActividadGananciaPorc","decimal",0,"px",6,6,"right",null,[],2688,"ActividadGananciaPorc",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,26,18,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV31GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV31GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV31GridCurrentPage)});t.addV2CFunction("AV32GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV32GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV32GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11gn2_client);t.addEventHandler("ChangeRowsPerPage",this.e12gn2_client);this.setUserControl(t);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");r=this.DVPANEL_TABLEGRIDHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Ganancia","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};i[9]={id:9,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[12]={id:12,fld:"",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[15]={id:15,fld:"",grid:0};i[16]={id:16,fld:"",grid:0};i[18]={id:18,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIADESDE",gxz:"Z309ActividadGananciaDesde",gxold:"O309ActividadGananciaDesde",gxvar:"A309ActividadGananciaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A309ActividadGananciaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z309ActividadGananciaDesde=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("ACTIVIDADGANANCIADESDE",n||gx.fn.currentGridRowImpl(17),gx.O.A309ActividadGananciaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A309ActividadGananciaDesde=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("ACTIVIDADGANANCIADESDE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};i[19]={id:19,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIAHASTA",gxz:"Z2685ActividadGananciaHasta",gxold:"O2685ActividadGananciaHasta",gxvar:"A2685ActividadGananciaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2685ActividadGananciaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2685ActividadGananciaHasta=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("ACTIVIDADGANANCIAHASTA",n||gx.fn.currentGridRowImpl(17),gx.O.A2685ActividadGananciaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2685ActividadGananciaHasta=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("ACTIVIDADGANANCIAHASTA",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};i[20]={id:20,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIAPERUNIDAD",gxz:"Z2686ActividadGananciaPerUnidad",gxold:"O2686ActividadGananciaPerUnidad",gxvar:"A2686ActividadGananciaPerUnidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2686ActividadGananciaPerUnidad=n)},v2z:function(n){n!==undefined&&(gx.O.Z2686ActividadGananciaPerUnidad=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ACTIVIDADGANANCIAPERUNIDAD",n||gx.fn.currentGridRowImpl(17),gx.O.A2686ActividadGananciaPerUnidad);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2686ActividadGananciaPerUnidad=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ACTIVIDADGANANCIAPERUNIDAD",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};i[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIAPERVALOR",gxz:"Z2687ActividadGananciaPerValor",gxold:"O2687ActividadGananciaPerValor",gxvar:"A2687ActividadGananciaPerValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2687ActividadGananciaPerValor=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2687ActividadGananciaPerValor=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ACTIVIDADGANANCIAPERVALOR",n||gx.fn.currentGridRowImpl(17),gx.O.A2687ActividadGananciaPerValor,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2687ActividadGananciaPerValor=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ACTIVIDADGANANCIAPERVALOR",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};i[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIATOPE",gxz:"Z2689ActividadGananciaTope",gxold:"O2689ActividadGananciaTope",gxvar:"A2689ActividadGananciaTope",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2689ActividadGananciaTope=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2689ActividadGananciaTope=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ACTIVIDADGANANCIATOPE",n||gx.fn.currentGridRowImpl(17),gx.O.A2689ActividadGananciaTope,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2689ActividadGananciaTope=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ACTIVIDADGANANCIATOPE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};i[23]={id:23,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADGANANCIAPORC",gxz:"Z2688ActividadGananciaPorc",gxold:"O2688ActividadGananciaPorc",gxvar:"A2688ActividadGananciaPorc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2688ActividadGananciaPorc=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2688ActividadGananciaPorc=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ACTIVIDADGANANCIAPORC",n||gx.fn.currentGridRowImpl(17),gx.O.A2688ActividadGananciaPorc,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2688ActividadGananciaPorc=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ACTIVIDADGANANCIAPORC",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};i[24]={id:24,fld:"",grid:0};i[25]={id:25,fld:"",grid:0};i[27]={id:27,fld:"",grid:0};i[28]={id:28,fld:"",grid:0};i[29]={id:29,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[30]={id:30,lvl:0,type:"char",len:6,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADID",gxz:"Z104ActividadId",gxold:"O104ActividadId",gxvar:"A104ActividadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A104ActividadId=n)},v2z:function(n){n!==undefined&&(gx.O.Z104ActividadId=n)},v2c:function(){gx.fn.setControlValue("ACTIVIDADID",gx.O.A104ActividadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A104ActividadId=this.val())},val:function(){return gx.fn.getControlValue("ACTIVIDADID")},nac:gx.falseFn};this.Z309ActividadGananciaDesde=gx.date.nullDate();this.O309ActividadGananciaDesde=gx.date.nullDate();this.Z2685ActividadGananciaHasta=gx.date.nullDate();this.O2685ActividadGananciaHasta=gx.date.nullDate();this.Z2686ActividadGananciaPerUnidad="";this.O2686ActividadGananciaPerUnidad="";this.Z2687ActividadGananciaPerValor=0;this.O2687ActividadGananciaPerValor=0;this.Z2689ActividadGananciaTope=0;this.O2689ActividadGananciaTope=0;this.Z2688ActividadGananciaPorc=0;this.O2688ActividadGananciaPorc=0;this.A104ActividadId="";this.Z104ActividadId="";this.O104ActividadId="";this.AV31GridCurrentPage=0;this.A104ActividadId="";this.AV7ActividadId="";this.A309ActividadGananciaDesde=gx.date.nullDate();this.A2685ActividadGananciaHasta=gx.date.nullDate();this.A2686ActividadGananciaPerUnidad="";this.A2687ActividadGananciaPerValor=0;this.A2689ActividadGananciaTope=0;this.A2688ActividadGananciaPorc=0;this.AV38Pgmname="";this.Events={e11gn2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12gn2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16gn2_client:["ENTER",!0],e17gn2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ActividadId",fld:"vACTIVIDADID",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV38Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV38Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7ActividadId",fld:"vACTIVIDADID",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("ACTIVIDADID","Visible")',ctrl:"ACTIVIDADID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7ActividadId",fld:"vACTIVIDADID",pic:""},{av:"AV38Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7ActividadId",fld:"vACTIVIDADID",pic:""},{av:"AV38Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.setVCMap("AV38Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7ActividadId","vACTIVIDADID",0,"char",6,0);this.setVCMap("AV7ActividadId","vACTIVIDADID",0,"char",6,0);this.setVCMap("AV38Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7ActividadId","vACTIVIDADID",0,"char",6,0);this.setVCMap("AV38Pgmname","vPGMNAME",0,"char",129,0);u.addRefreshingVar({rfrVar:"AV7ActividadId"});u.addRefreshingVar({rfrVar:"AV38Pgmname"});u.addRefreshingParm({rfrVar:"AV7ActividadId"});u.addRefreshingParm({rfrVar:"AV38Pgmname"});this.Initialize()})