/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:2:32.43
*/
gx.evt.autoSkip=!1;gx.define("notapedidonotapedidodescuentowc",!0,function(n){var i,r,t;this.ServerClass="notapedidonotapedidodescuentowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7NtaPedId=gx.fn.getIntegerValue("vNTAPEDID",".");this.AV7NtaPedId=gx.fn.getIntegerValue("vNTAPEDID",".");this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e11mx2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12mx2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16mx2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17mx2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,30,31,32,33];this.GXLastCtrlId=33;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"notapedidonotapedidodescuentowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(338,22,"NTAPEDDESID","Orden Desc. Gral.","","NtaPedDesId","int",0,"px",2,2,"right",null,[],338,"NtaPedDesId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2848,23,"NTAPEDDESIDPROVDESC","Ide. Desc Prov.","","NtaPedDesIdProvDesc","int",0,"px",2,2,"right",null,[],2848,"NtaPedDesIdProvDesc",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2849,24,"NTAPEDDESPOR","Desc. Gral. Porc.","","NtaPedDesPor","decimal",0,"px",6,6,"right",null,[],2849,"NtaPedDesPor",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2850,25,"NTAPEDDESPORIMPORTE","Desc. Gral. Importe","","NtaPedDesPorImporte","decimal",0,"px",13,13,"right",null,[],2850,"NtaPedDesPorImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2851,26,"NTAPEDDESMOTIVO","Desc. Gral. Motivo","","NtaPedDesMotivo","svchar",0,"px",40,40,"left",null,[],2851,"NtaPedDesMotivo",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,29,22,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV29GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV29GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV29GridCurrentPage)});t.addV2CFunction("AV30GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV30GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV30GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11mx2_client);t.addEventHandler("ChangeRowsPerPage",this.e12mx2_client);this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"TABLEFILTERS",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"",grid:0};i[15]={id:15,fld:"TEXT",format:0,grid:0};i[16]={id:16,fld:"",grid:0};i[17]={id:17,fld:"",grid:0};i[18]={id:18,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[19]={id:19,fld:"",grid:0};i[20]={id:20,fld:"",grid:0};i[22]={id:22,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDDESID",gxz:"Z338NtaPedDesId",gxold:"O338NtaPedDesId",gxvar:"A338NtaPedDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A338NtaPedDesId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z338NtaPedDesId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDDESID",n||gx.fn.currentGridRowImpl(21),gx.O.A338NtaPedDesId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A338NtaPedDesId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NTAPEDDESID",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};i[23]={id:23,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDDESIDPROVDESC",gxz:"Z2848NtaPedDesIdProvDesc",gxold:"O2848NtaPedDesIdProvDesc",gxvar:"A2848NtaPedDesIdProvDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2848NtaPedDesIdProvDesc=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2848NtaPedDesIdProvDesc=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDDESIDPROVDESC",n||gx.fn.currentGridRowImpl(21),gx.O.A2848NtaPedDesIdProvDesc,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2848NtaPedDesIdProvDesc=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NTAPEDDESIDPROVDESC",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};i[24]={id:24,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDDESPOR",gxz:"Z2849NtaPedDesPor",gxold:"O2849NtaPedDesPor",gxvar:"A2849NtaPedDesPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2849NtaPedDesPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2849NtaPedDesPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NTAPEDDESPOR",n||gx.fn.currentGridRowImpl(21),gx.O.A2849NtaPedDesPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2849NtaPedDesPor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NTAPEDDESPOR",n||gx.fn.currentGridRowImpl(21),".",",")},nac:gx.falseFn};i[25]={id:25,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDDESPORIMPORTE",gxz:"Z2850NtaPedDesPorImporte",gxold:"O2850NtaPedDesPorImporte",gxvar:"A2850NtaPedDesPorImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2850NtaPedDesPorImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2850NtaPedDesPorImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NTAPEDDESPORIMPORTE",n||gx.fn.currentGridRowImpl(21),gx.O.A2850NtaPedDesPorImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2850NtaPedDesPorImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NTAPEDDESPORIMPORTE",n||gx.fn.currentGridRowImpl(21),".",",")},nac:gx.falseFn};i[26]={id:26,lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDDESMOTIVO",gxz:"Z2851NtaPedDesMotivo",gxold:"O2851NtaPedDesMotivo",gxvar:"A2851NtaPedDesMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2851NtaPedDesMotivo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2851NtaPedDesMotivo=n)},v2c:function(n){gx.fn.setGridControlValue("NTAPEDDESMOTIVO",n||gx.fn.currentGridRowImpl(21),gx.O.A2851NtaPedDesMotivo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2851NtaPedDesMotivo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NTAPEDDESMOTIVO",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};i[27]={id:27,fld:"",grid:0};i[28]={id:28,fld:"",grid:0};i[30]={id:30,fld:"",grid:0};i[31]={id:31,fld:"",grid:0};i[32]={id:32,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[33]={id:33,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDID",gxz:"Z81NtaPedId",gxold:"O81NtaPedId",gxvar:"A81NtaPedId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A81NtaPedId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z81NtaPedId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("NTAPEDID",gx.O.A81NtaPedId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A81NtaPedId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("NTAPEDID",".")},nac:gx.falseFn};this.Z338NtaPedDesId=0;this.O338NtaPedDesId=0;this.Z2848NtaPedDesIdProvDesc=0;this.O2848NtaPedDesIdProvDesc=0;this.Z2849NtaPedDesPor=0;this.O2849NtaPedDesPor=0;this.Z2850NtaPedDesPorImporte=0;this.O2850NtaPedDesPorImporte=0;this.Z2851NtaPedDesMotivo="";this.O2851NtaPedDesMotivo="";this.A81NtaPedId=0;this.Z81NtaPedId=0;this.O81NtaPedId=0;this.AV29GridCurrentPage=0;this.A81NtaPedId=0;this.AV7NtaPedId=0;this.A338NtaPedDesId=0;this.A2848NtaPedDesIdProvDesc=0;this.A2849NtaPedDesPor=0;this.A2850NtaPedDesPorImporte=0;this.A2851NtaPedDesMotivo="";this.AV36Pgmname="";this.Events={e11mx2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12mx2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16mx2_client:["ENTER",!0],e17mx2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7NtaPedId",fld:"vNTAPEDID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV29GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV30GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV36Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7NtaPedId",fld:"vNTAPEDID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("NTAPEDID","Visible")',ctrl:"NTAPEDID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7NtaPedId",fld:"vNTAPEDID",pic:"ZZZZZZZZ9"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7NtaPedId",fld:"vNTAPEDID",pic:"ZZZZZZZZ9"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7NtaPedId","vNTAPEDID",0,"int",9,0);this.setVCMap("AV7NtaPedId","vNTAPEDID",0,"int",9,0);this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7NtaPedId","vNTAPEDID",0,"int",9,0);this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV7NtaPedId"});r.addRefreshingVar({rfrVar:"AV36Pgmname"});r.addRefreshingParm({rfrVar:"AV7NtaPedId"});r.addRefreshingParm({rfrVar:"AV36Pgmname"});this.Initialize()})