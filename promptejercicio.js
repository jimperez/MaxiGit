/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:58.77
*/
gx.evt.autoSkip=!1;gx.define("promptejercicio",!1,function(){var n,r,i,t;this.ServerClass="promptejercicio";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV33InOutEjercicioAnio=gx.fn.getIntegerValue("vINOUTEJERCICIOANIO",".");this.AV34InOutEjercicioDescripcion=gx.fn.getControlValue("vINOUTEJERCICIODESCRIPCION")};this.s112_client=function(){this.AV10EjercicioDescripcionOperator=gx.num.trunc(0,0);this.AV11EjercicioDescripcion="";this.AV35EjercicioAnio=gx.num.trunc(0,0)};this.e11nl2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12nl2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e17nl2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e13nl2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e18nl2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,30,31,32,33,34,35,36,37,38,39,40,42,43,44,45,46,47,48,49,51,52,53,54];this.GXLastCtrlId=54;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptejercicio",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",42,0,"px",17,"px","e17nl2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(342,43,"EJERCICIOANIO","Año","","EjercicioAnio","int",0,"px",4,4,"right",null,[],342,"EjercicioAnio",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2918,44,"EJERCICIODESCRIPCION","Ejercicio","","EjercicioDescripcion","char",0,"px",30,30,"left",null,[],2918,"EjercicioDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2921,45,"EJERCICIOFECHAINICIO","Fecha Inicio","Fecha ...","EjercicioFechaInicio","date",0,"px",10,10,"right",null,[],2921,"EjercicioFechaInicio",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2920,46,"EJERCICIOFECHAFIN","Fecha Fin","Fecha ...","EjercicioFechaFin","date",0,"px",10,10,"right",null,[],2920,"EjercicioFechaFin",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(2919,47,"EJERCICIOESTADO","Estado","EjercicioEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,50,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV28GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV28GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV28GridCurrentPage)});t.addV2CFunction("AV29GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV29GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV29GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11nl2_client);t.addEventHandler("ChangeRowsPerPage",this.e12nl2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e13nl2_client"};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"TABLESPLITTEDFILTERTEXTEJERCICIODESCRIPCION",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"FILTERTEXTEJERCICIODESCRIPCION",format:0,grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"TABLEMERGEDEJERCICIODESCRIPCION",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vEJERCICIODESCRIPCIONOPERATOR",gxz:"ZV10EjercicioDescripcionOperator",gxold:"OV10EjercicioDescripcionOperator",gxvar:"AV10EjercicioDescripcionOperator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV10EjercicioDescripcionOperator=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10EjercicioDescripcionOperator=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vEJERCICIODESCRIPCIONOPERATOR",gx.O.AV10EjercicioDescripcionOperator)},c2v:function(){this.val()!==undefined&&(gx.O.AV10EjercicioDescripcionOperator=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vEJERCICIODESCRIPCIONOPERATOR",".")},nac:gx.falseFn};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vEJERCICIODESCRIPCION",gxz:"ZV11EjercicioDescripcion",gxold:"OV11EjercicioDescripcion",gxvar:"AV11EjercicioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11EjercicioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11EjercicioDescripcion=n)},v2c:function(){gx.fn.setControlValue("vEJERCICIODESCRIPCION",gx.O.AV11EjercicioDescripcion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11EjercicioDescripcion=this.val())},val:function(){return gx.fn.getControlValue("vEJERCICIODESCRIPCION")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vEJERCICIOANIO",gxz:"ZV35EjercicioAnio",gxold:"OV35EjercicioAnio",gxvar:"AV35EjercicioAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV35EjercicioAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV35EjercicioAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vEJERCICIOANIO",gx.O.AV35EjercicioAnio,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV35EjercicioAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vEJERCICIOANIO",".")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[42]={id:42,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV32Select",gxold:"OV32Select",gxvar:"AV32Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV32Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(41),gx.O.AV32Select,gx.O.AV39Select_GXI)},c2v:function(n){gx.O.AV39Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV32Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(41))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV39Select_GXI",nac:gx.falseFn,evt:"e17nl2_client",std:"ENTER"};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOANIO",gxz:"Z342EjercicioAnio",gxold:"O342EjercicioAnio",gxvar:"A342EjercicioAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z342EjercicioAnio=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EJERCICIOANIO",n||gx.fn.currentGridRowImpl(41),gx.O.A342EjercicioAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EJERCICIOANIO",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIODESCRIPCION",gxz:"Z2918EjercicioDescripcion",gxold:"O2918EjercicioDescripcion",gxvar:"A2918EjercicioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2918EjercicioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2918EjercicioDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("EJERCICIODESCRIPCION",n||gx.fn.currentGridRowImpl(41),gx.O.A2918EjercicioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2918EjercicioDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EJERCICIODESCRIPCION",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOFECHAINICIO",gxz:"Z2921EjercicioFechaInicio",gxold:"O2921EjercicioFechaInicio",gxvar:"A2921EjercicioFechaInicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2921EjercicioFechaInicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2921EjercicioFechaInicio=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("EJERCICIOFECHAINICIO",n||gx.fn.currentGridRowImpl(41),gx.O.A2921EjercicioFechaInicio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2921EjercicioFechaInicio=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("EJERCICIOFECHAINICIO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOFECHAFIN",gxz:"Z2920EjercicioFechaFin",gxold:"O2920EjercicioFechaFin",gxvar:"A2920EjercicioFechaFin",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2920EjercicioFechaFin=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2920EjercicioFechaFin=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("EJERCICIOFECHAFIN",n||gx.fn.currentGridRowImpl(41),gx.O.A2920EjercicioFechaFin,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2920EjercicioFechaFin=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("EJERCICIOFECHAFIN",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOESTADO",gxz:"Z2919EjercicioEstado",gxold:"O2919EjercicioEstado",gxvar:"A2919EjercicioEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2919EjercicioEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2919EjercicioEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("EJERCICIOESTADO",n||gx.fn.currentGridRowImpl(41),gx.O.A2919EjercicioEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2919EjercicioEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EJERCICIOESTADO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[54]={id:54,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV10EjercicioDescripcionOperator=0;this.ZV10EjercicioDescripcionOperator=0;this.OV10EjercicioDescripcionOperator=0;this.AV11EjercicioDescripcion="";this.ZV11EjercicioDescripcion="";this.OV11EjercicioDescripcion="";this.AV35EjercicioAnio=0;this.ZV35EjercicioAnio=0;this.OV35EjercicioAnio=0;this.ZV32Select="";this.OV32Select="";this.Z342EjercicioAnio=0;this.O342EjercicioAnio=0;this.Z2918EjercicioDescripcion="";this.O2918EjercicioDescripcion="";this.Z2921EjercicioFechaInicio=gx.date.nullDate();this.O2921EjercicioFechaInicio=gx.date.nullDate();this.Z2920EjercicioFechaFin=gx.date.nullDate();this.O2920EjercicioFechaFin=gx.date.nullDate();this.Z2919EjercicioEstado="";this.O2919EjercicioEstado="";this.AV8OrderedBy=0;this.ZV8OrderedBy=0;this.OV8OrderedBy=0;this.AV10EjercicioDescripcionOperator=0;this.AV11EjercicioDescripcion="";this.AV35EjercicioAnio=0;this.AV28GridCurrentPage=0;this.AV8OrderedBy=0;this.AV33InOutEjercicioAnio=0;this.AV34InOutEjercicioDescripcion="";this.AV32Select="";this.A342EjercicioAnio=0;this.A2918EjercicioDescripcion="";this.A2921EjercicioFechaInicio=gx.date.nullDate();this.A2920EjercicioFechaFin=gx.date.nullDate();this.A2919EjercicioEstado="";this.Events={e11nl2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12nl2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e17nl2_client:["ENTER",!0],e13nl2_client:["'DOCLEANFILTERS'",!0],e18nl2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vEJERCICIODESCRIPCIONOPERATOR"},{av:"AV10EjercicioDescripcionOperator",fld:"vEJERCICIODESCRIPCIONOPERATOR",pic:"ZZZ9"},{av:"AV11EjercicioDescripcion",fld:"vEJERCICIODESCRIPCION",pic:"@!"},{av:"AV35EjercicioAnio",fld:"vEJERCICIOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{av:"AV28GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV29GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vEJERCICIODESCRIPCIONOPERATOR"},{av:"AV10EjercicioDescripcionOperator",fld:"vEJERCICIODESCRIPCIONOPERATOR",pic:"ZZZ9"},{av:"AV11EjercicioDescripcion",fld:"vEJERCICIODESCRIPCION",pic:"@!"},{av:"AV35EjercicioAnio",fld:"vEJERCICIOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vEJERCICIODESCRIPCIONOPERATOR"},{av:"AV10EjercicioDescripcionOperator",fld:"vEJERCICIODESCRIPCIONOPERATOR",pic:"ZZZ9"},{av:"AV11EjercicioDescripcion",fld:"vEJERCICIODESCRIPCION",pic:"@!"},{av:"AV35EjercicioAnio",fld:"vEJERCICIOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV32Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A342EjercicioAnio",fld:"EJERCICIOANIO",pic:"ZZZZ",hsh:!0},{av:"A2918EjercicioDescripcion",fld:"EJERCICIODESCRIPCION",pic:"@!",hsh:!0}],[{av:"AV33InOutEjercicioAnio",fld:"vINOUTEJERCICIOANIO",pic:"ZZZZ"},{av:"AV34InOutEjercicioDescripcion",fld:"vINOUTEJERCICIODESCRIPCION",pic:"@!"}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vEJERCICIODESCRIPCIONOPERATOR"},{av:"AV10EjercicioDescripcionOperator",fld:"vEJERCICIODESCRIPCIONOPERATOR",pic:"ZZZ9"},{av:"AV11EjercicioDescripcion",fld:"vEJERCICIODESCRIPCION",pic:"@!"},{av:"AV35EjercicioAnio",fld:"vEJERCICIOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"vEJERCICIODESCRIPCIONOPERATOR"},{av:"AV10EjercicioDescripcionOperator",fld:"vEJERCICIODESCRIPCIONOPERATOR",pic:"ZZZ9"},{av:"AV11EjercicioDescripcion",fld:"vEJERCICIODESCRIPCION",pic:"@!"},{av:"AV35EjercicioAnio",fld:"vEJERCICIOANIO",pic:"ZZZZ"},{av:"AV28GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV29GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV33InOutEjercicioAnio","vINOUTEJERCICIOANIO",0,"int",4,0);this.setVCMap("AV34InOutEjercicioDescripcion","vINOUTEJERCICIODESCRIPCION",0,"char",30,0);r.addRefreshingVar(this.GXValidFnc[28]);r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingVar(this.GXValidFnc[35]);r.addRefreshingVar(this.GXValidFnc[54]);r.addRefreshingParm(this.GXValidFnc[28]);r.addRefreshingParm(this.GXValidFnc[31]);r.addRefreshingParm(this.GXValidFnc[35]);r.addRefreshingParm(this.GXValidFnc[54]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptejercicio)})