/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:14.24
*/
gx.evt.autoSkip=!1;gx.define("transferenciachequetransferenciachequeestadowc",!0,function(n){var i,u,t,r;this.ServerClass="transferenciachequetransferenciachequeestadowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV52Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8TrfCheId=gx.fn.getIntegerValue("vTRFCHEID",".");this.AV8TrfCheId=gx.fn.getIntegerValue("vTRFCHEID",".");this.AV52Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e11vf2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12vf2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16vf2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17vf2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,33,34,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"transferenciachequetransferenciachequeestadowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit(3265,24,"TRFCHEESTADOID","Estado Ide.","","TrfCheEstadoId","int",0,"px",2,2,"right",null,[],3265,"TrfCheEstadoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addComboBox(3296,25,"TRFCHEESTADOESTADO","Estado","TrfCheEstadoEstado","char",null,0,!0,!1,0,"px","WWColumn");u.addSingleLineEdit(3297,26,"TRFCHEESTADOMOTIVO","Motivo","","TrfCheEstadoMotivo","char",0,"px",30,30,"left",null,[],3297,"TrfCheEstadoMotivo",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3298,27,"TRFCHEESTADOUSUARIO","Usuario","","TrfCheEstadoUsuario","char",0,"px",15,15,"left",null,[],3298,"TrfCheEstadoUsuario",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3299,28,"TRFCHEESTADOFECHAHORA","IP","","TrfCheEstadoFechaHora","dtime",0,"px",14,14,"right",null,[],3299,"TrfCheEstadoFechaHora",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3300,29,"TRFCHEESTADOIP","Estado IP","","TrfCheEstadoIP","char",0,"px",15,15,"left",null,[],3300,"TrfCheEstadoIP",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,32,24,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV39GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV39GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV39GridCurrentPage)});t.addV2CFunction("AV40GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV40GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV40GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11vf2_client);t.addEventHandler("ChangeRowsPerPage",this.e12vf2_client);this.setUserControl(t);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[14]={id:14,fld:"TABLEHEADER",grid:0};i[15]={id:15,fld:"",grid:0};i[16]={id:16,fld:"",grid:0};i[17]={id:17,fld:"TABLEACTIONS",grid:0};i[18]={id:18,fld:"",grid:0};i[19]={id:19,fld:"",grid:0};i[20]={id:20,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[21]={id:21,fld:"",grid:0};i[22]={id:22,fld:"",grid:0};i[24]={id:24,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOID",gxz:"Z3265TrfCheEstadoId",gxold:"O3265TrfCheEstadoId",gxvar:"A3265TrfCheEstadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3265TrfCheEstadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3265TrfCheEstadoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRFCHEESTADOID",n||gx.fn.currentGridRowImpl(23),gx.O.A3265TrfCheEstadoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3265TrfCheEstadoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRFCHEESTADOID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};i[25]={id:25,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOESTADO",gxz:"Z3296TrfCheEstadoEstado",gxold:"O3296TrfCheEstadoEstado",gxvar:"A3296TrfCheEstadoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3296TrfCheEstadoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z3296TrfCheEstadoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRFCHEESTADOESTADO",n||gx.fn.currentGridRowImpl(23),gx.O.A3296TrfCheEstadoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3296TrfCheEstadoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRFCHEESTADOESTADO",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[26]={id:26,lvl:2,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOMOTIVO",gxz:"Z3297TrfCheEstadoMotivo",gxold:"O3297TrfCheEstadoMotivo",gxvar:"A3297TrfCheEstadoMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3297TrfCheEstadoMotivo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3297TrfCheEstadoMotivo=n)},v2c:function(n){gx.fn.setGridControlValue("TRFCHEESTADOMOTIVO",n||gx.fn.currentGridRowImpl(23),gx.O.A3297TrfCheEstadoMotivo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3297TrfCheEstadoMotivo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRFCHEESTADOMOTIVO",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[27]={id:27,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOUSUARIO",gxz:"Z3298TrfCheEstadoUsuario",gxold:"O3298TrfCheEstadoUsuario",gxvar:"A3298TrfCheEstadoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3298TrfCheEstadoUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z3298TrfCheEstadoUsuario=n)},v2c:function(n){gx.fn.setGridControlValue("TRFCHEESTADOUSUARIO",n||gx.fn.currentGridRowImpl(23),gx.O.A3298TrfCheEstadoUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3298TrfCheEstadoUsuario=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRFCHEESTADOUSUARIO",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[28]={id:28,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOFECHAHORA",gxz:"Z3299TrfCheEstadoFechaHora",gxold:"O3299TrfCheEstadoFechaHora",gxvar:"A3299TrfCheEstadoFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3299TrfCheEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3299TrfCheEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TRFCHEESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(23),gx.O.A3299TrfCheEstadoFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3299TrfCheEstadoFechaHora=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TRFCHEESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[29]={id:29,lvl:2,type:"char",len:15,dec:0,sign:!1,pic:"999.999.999",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEESTADOIP",gxz:"Z3300TrfCheEstadoIP",gxold:"O3300TrfCheEstadoIP",gxvar:"A3300TrfCheEstadoIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3300TrfCheEstadoIP=n)},v2z:function(n){n!==undefined&&(gx.O.Z3300TrfCheEstadoIP=n)},v2c:function(n){gx.fn.setGridControlValue("TRFCHEESTADOIP",n||gx.fn.currentGridRowImpl(23),gx.O.A3300TrfCheEstadoIP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3300TrfCheEstadoIP=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRFCHEESTADOIP",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[30]={id:30,fld:"",grid:0};i[31]={id:31,fld:"",grid:0};i[33]={id:33,fld:"",grid:0};i[34]={id:34,fld:"",grid:0};i[35]={id:35,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[36]={id:36,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEID",gxz:"Z3256TrfCheId",gxold:"O3256TrfCheId",gxvar:"A3256TrfCheId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3256TrfCheId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3256TrfCheId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFCHEID",gx.O.A3256TrfCheId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3256TrfCheId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFCHEID",".")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});this.Z3265TrfCheEstadoId=0;this.O3265TrfCheEstadoId=0;this.Z3296TrfCheEstadoEstado="";this.O3296TrfCheEstadoEstado="";this.Z3297TrfCheEstadoMotivo="";this.O3297TrfCheEstadoMotivo="";this.Z3298TrfCheEstadoUsuario="";this.O3298TrfCheEstadoUsuario="";this.Z3299TrfCheEstadoFechaHora=gx.date.nullDate();this.O3299TrfCheEstadoFechaHora=gx.date.nullDate();this.Z3300TrfCheEstadoIP="";this.O3300TrfCheEstadoIP="";this.A3256TrfCheId=0;this.Z3256TrfCheId=0;this.O3256TrfCheId=0;this.AV39GridCurrentPage=0;this.A3256TrfCheId=0;this.AV8TrfCheId=0;this.A3265TrfCheEstadoId=0;this.A3296TrfCheEstadoEstado="";this.A3297TrfCheEstadoMotivo="";this.A3298TrfCheEstadoUsuario="";this.A3299TrfCheEstadoFechaHora=gx.date.nullDate();this.A3300TrfCheEstadoIP="";this.AV52Pgmname="";this.Events={e11vf2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12vf2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16vf2_client:["ENTER",!0],e17vf2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV52Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV39GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV40GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV52Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("TRFCHEID","Visible")',ctrl:"TRFCHEID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"AV52Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"AV52Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.setVCMap("AV52Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV52Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV52Pgmname","vPGMNAME",0,"char",129,0);u.addRefreshingVar({rfrVar:"AV8TrfCheId"});u.addRefreshingVar({rfrVar:"AV52Pgmname"});u.addRefreshingParm({rfrVar:"AV8TrfCheId"});u.addRefreshingParm({rfrVar:"AV52Pgmname"});this.Initialize()})