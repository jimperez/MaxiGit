/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:55:0.36
*/
gx.evt.autoSkip=!1;gx.define("promptperiodo",!1,function(){var n,r,i,t;this.ServerClass="promptperiodo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV34InOutPeriodoAnio=gx.fn.getIntegerValue("vINOUTPERIODOANIO",".");this.AV33InOutPeriodoMes=gx.fn.getIntegerValue("vINOUTPERIODOMES",".");this.AV35InOutPeriodoDescripcion=gx.fn.getControlValue("vINOUTPERIODODESCRIPCION")};this.Validv_Periodomes=function(){return this.validCliEvt("Validv_Periodomes",0,function(){try{var n=gx.util.balloon.getNew("vPERIODOMES");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ejercicioanio=function(){var n=gx.fn.currentGridRowImpl(29);return this.validCliEvt("Valid_Ejercicioanio",29,function(){try{if(gx.fn.currentGridRowImpl(29)===0)return!0;var n=gx.util.balloon.getNew("EJERCICIOANIO",gx.fn.currentGridRowImpl(29));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11nm2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12nm2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16nm2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17nm2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,42,43,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptperiodo",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",30,0,"px",17,"px","e16nm2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(342,31,"EJERCICIOANIO","Ejercicio","","EjercicioAnio","int",0,"px",4,4,"right",null,[],342,"EjercicioAnio",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2918,32,"EJERCICIODESCRIPCION","Ejercicio","","EjercicioDescripcion","char",0,"px",30,30,"left",null,[],2918,"EjercicioDescripcion",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(343,33,"PERIODOMES","Mes","PeriodoMes","int",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(344,34,"PERIODOANIO","Año","","PeriodoAnio","int",0,"px",4,4,"right",null,[],344,"PeriodoAnio",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2924,35,"PERIODODESCRIPCION","Período","","PeriodoDescripcion","svchar",0,"px",64,64,"left",null,[],2924,"PeriodoDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2925,36,"PERIODOESTADO","Estado","PeriodoEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(2922,37,"PERIODO094","Periodo094","","Periodo094","char",0,"px",15,15,"left",null,[],2922,"Periodo094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2923,38,"PERIODO095","Periodo095","","Periodo095","dtime",0,"px",14,14,"right",null,[],2923,"Periodo095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,41,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV28GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV28GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV28GridCurrentPage)});t.addV2CFunction("AV29GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV29GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV29GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11nm2_client);t.addEventHandler("ChangeRowsPerPage",this.e12nm2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Periodomes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERIODOMES",gxz:"ZV36PeriodoMes",gxold:"OV36PeriodoMes",gxvar:"AV36PeriodoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV36PeriodoMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV36PeriodoMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vPERIODOMES",gx.O.AV36PeriodoMes)},c2v:function(){this.val()!==undefined&&(gx.O.AV36PeriodoMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERIODOMES",".")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERIODOANIO",gxz:"ZV37PeriodoAnio",gxold:"OV37PeriodoAnio",gxvar:"AV37PeriodoAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV37PeriodoAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV37PeriodoAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERIODOANIO",gx.O.AV37PeriodoAnio,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV37PeriodoAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERIODOANIO",".")},nac:gx.falseFn};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[30]={id:30,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV32Select",gxold:"OV32Select",gxvar:"AV32Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV32Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(29),gx.O.AV32Select,gx.O.AV41Select_GXI)},c2v:function(n){gx.O.AV41Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV32Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV41Select_GXI",nac:gx.falseFn,evt:"e16nm2_client",std:"ENTER"};n[31]={id:31,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Ejercicioanio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIOANIO",gxz:"Z342EjercicioAnio",gxold:"O342EjercicioAnio",gxvar:"A342EjercicioAnio",ucs:[],op:[19,32],ip:[32,19,31],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z342EjercicioAnio=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EJERCICIOANIO",n||gx.fn.currentGridRowImpl(29),gx.O.A342EjercicioAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A342EjercicioAnio=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EJERCICIOANIO",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EJERCICIODESCRIPCION",gxz:"Z2918EjercicioDescripcion",gxold:"O2918EjercicioDescripcion",gxvar:"A2918EjercicioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2918EjercicioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2918EjercicioDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("EJERCICIODESCRIPCION",n||gx.fn.currentGridRowImpl(29),gx.O.A2918EjercicioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2918EjercicioDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EJERCICIODESCRIPCION",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOMES",gxz:"Z343PeriodoMes",gxold:"O343PeriodoMes",gxvar:"A343PeriodoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z343PeriodoMes=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("PERIODOMES",n||gx.fn.currentGridRowImpl(29),gx.O.A343PeriodoMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A343PeriodoMes=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERIODOMES",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOANIO",gxz:"Z344PeriodoAnio",gxold:"O344PeriodoAnio",gxvar:"A344PeriodoAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z344PeriodoAnio=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERIODOANIO",n||gx.fn.currentGridRowImpl(29),gx.O.A344PeriodoAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A344PeriodoAnio=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERIODOANIO",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODODESCRIPCION",gxz:"Z2924PeriodoDescripcion",gxold:"O2924PeriodoDescripcion",gxvar:"A2924PeriodoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2924PeriodoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2924PeriodoDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("PERIODODESCRIPCION",n||gx.fn.currentGridRowImpl(29),gx.O.A2924PeriodoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2924PeriodoDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERIODODESCRIPCION",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOESTADO",gxz:"Z2925PeriodoEstado",gxold:"O2925PeriodoEstado",gxvar:"A2925PeriodoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2925PeriodoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2925PeriodoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PERIODOESTADO",n||gx.fn.currentGridRowImpl(29),gx.O.A2925PeriodoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2925PeriodoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERIODOESTADO",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODO094",gxz:"Z2922Periodo094",gxold:"O2922Periodo094",gxvar:"A2922Periodo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2922Periodo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2922Periodo094=n)},v2c:function(n){gx.fn.setGridControlValue("PERIODO094",n||gx.fn.currentGridRowImpl(29),gx.O.A2922Periodo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2922Periodo094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERIODO094",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODO095",gxz:"Z2923Periodo095",gxold:"O2923Periodo095",gxvar:"A2923Periodo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2923Periodo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2923Periodo095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PERIODO095",n||gx.fn.currentGridRowImpl(29),gx.O.A2923Periodo095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2923Periodo095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PERIODO095",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV36PeriodoMes=0;this.ZV36PeriodoMes=0;this.OV36PeriodoMes=0;this.AV37PeriodoAnio=0;this.ZV37PeriodoAnio=0;this.OV37PeriodoAnio=0;this.ZV32Select="";this.OV32Select="";this.Z342EjercicioAnio=0;this.O342EjercicioAnio=0;this.Z2918EjercicioDescripcion="";this.O2918EjercicioDescripcion="";this.Z343PeriodoMes=0;this.O343PeriodoMes=0;this.Z344PeriodoAnio=0;this.O344PeriodoAnio=0;this.Z2924PeriodoDescripcion="";this.O2924PeriodoDescripcion="";this.Z2925PeriodoEstado="";this.O2925PeriodoEstado="";this.Z2922Periodo094="";this.O2922Periodo094="";this.Z2923Periodo095=gx.date.nullDate();this.O2923Periodo095=gx.date.nullDate();this.AV8OrderedBy=0;this.ZV8OrderedBy=0;this.OV8OrderedBy=0;this.AV36PeriodoMes=0;this.AV37PeriodoAnio=0;this.AV28GridCurrentPage=0;this.AV8OrderedBy=0;this.AV34InOutPeriodoAnio=0;this.AV33InOutPeriodoMes=0;this.AV35InOutPeriodoDescripcion="";this.AV32Select="";this.A342EjercicioAnio=0;this.A2918EjercicioDescripcion="";this.A343PeriodoMes=0;this.A344PeriodoAnio=0;this.A2924PeriodoDescripcion="";this.A2925PeriodoEstado="";this.A2922Periodo094="";this.A2923Periodo095=gx.date.nullDate();this.Events={e11nm2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12nm2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16nm2_client:["ENTER",!0],e17nm2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERIODOMES"},{av:"AV36PeriodoMes",fld:"vPERIODOMES",pic:"Z9"},{av:"AV37PeriodoAnio",fld:"vPERIODOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{av:"AV28GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV29GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{ctrl:"vPERIODOMES"},{av:"AV36PeriodoMes",fld:"vPERIODOMES",pic:"Z9"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERIODOMES"},{av:"AV36PeriodoMes",fld:"vPERIODOMES",pic:"Z9"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERIODOMES"},{av:"AV36PeriodoMes",fld:"vPERIODOMES",pic:"Z9"},{av:"AV37PeriodoAnio",fld:"vPERIODOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERIODOMES"},{av:"AV36PeriodoMes",fld:"vPERIODOMES",pic:"Z9"},{av:"AV37PeriodoAnio",fld:"vPERIODOANIO",pic:"ZZZZ"},{av:"AV8OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV32Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A344PeriodoAnio",fld:"PERIODOANIO",pic:"ZZZZ",hsh:!0},{ctrl:"PERIODOMES"},{av:"A343PeriodoMes",fld:"PERIODOMES",pic:"Z9",hsh:!0},{av:"A2924PeriodoDescripcion",fld:"PERIODODESCRIPCION",pic:"@!",hsh:!0}],[{av:"AV34InOutPeriodoAnio",fld:"vINOUTPERIODOANIO",pic:"ZZZZ"},{av:"AV33InOutPeriodoMes",fld:"vINOUTPERIODOMES",pic:"Z9"},{av:"AV35InOutPeriodoDescripcion",fld:"vINOUTPERIODODESCRIPCION",pic:"@!"}]];this.EvtParms.VALIDV_PERIODOMES=[[],[]];this.EvtParms.VALID_EJERCICIOANIO=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV34InOutPeriodoAnio","vINOUTPERIODOANIO",0,"int",4,0);this.setVCMap("AV33InOutPeriodoMes","vINOUTPERIODOMES",0,"int",2,0);this.setVCMap("AV35InOutPeriodoDescripcion","vINOUTPERIODODESCRIPCION",0,"svchar",64,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingVar(this.GXValidFnc[23]);r.addRefreshingVar(this.GXValidFnc[45]);r.addRefreshingParm(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[23]);r.addRefreshingParm(this.GXValidFnc[45]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptperiodo)})