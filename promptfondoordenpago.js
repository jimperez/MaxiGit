/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:20:34.2
*/
gx.evt.autoSkip=!1;gx.define("promptfondoordenpago",!1,function(){var t,r,i,n;this.ServerClass="promptfondoordenpago";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutFondoId=gx.fn.getIntegerValue("vINOUTFONDOID",".")};this.e11ld2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ld2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ld2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ld2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,32,33,34,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptfondoordenpago",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",26,0,"px",17,"px","e16ld2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(38,27,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(345,28,"FONDONOMBRE","Fondo","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,31,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV12GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV12GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV12GridCurrentPage)});n.addV2CFunction("AV13GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV13GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV13GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setProp("Gx Control Type","Gxcontroltype","","int");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11ld2_client);n.addEventHandler("ChangeRowsPerPage",this.e12ld2_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vFONDONOMBRE",gxz:"ZV10FondoNombre",gxold:"OV10FondoNombre",gxvar:"AV10FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10FondoNombre=n)},v2c:function(){gx.fn.setControlValue("vFONDONOMBRE",gx.O.AV10FondoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10FondoNombre=this.val())},val:function(){return gx.fn.getControlValue("vFONDONOMBRE")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[26]={id:26,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV14Select",gxold:"OV14Select",gxvar:"AV14Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV14Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV14Select,gx.O.AV22Select_GXI)},c2v:function(n){gx.O.AV22Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV14Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(25))},gxvar_GXI:"AV22Select_GXI",nac:gx.falseFn,evt:"e16ld2_client",std:"ENTER"};t[27]={id:27,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(25),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[35]={id:35,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOID",gxz:"ZV15OrdPgoId",gxold:"OV15OrdPgoId",gxvar:"AV15OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV15OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDPGOID",gx.O.AV15OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDPGOID",".")},nac:gx.falseFn};t[36]={id:36,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV19OrderedBy",gxold:"OV19OrderedBy",gxvar:"AV19OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV19OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV19OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV10FondoNombre="";this.ZV10FondoNombre="";this.OV10FondoNombre="";this.ZV14Select="";this.OV14Select="";this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.AV15OrdPgoId=0;this.ZV15OrdPgoId=0;this.OV15OrdPgoId=0;this.AV19OrderedBy=0;this.ZV19OrderedBy=0;this.OV19OrderedBy=0;this.AV10FondoNombre="";this.AV12GridCurrentPage=0;this.AV15OrdPgoId=0;this.AV19OrderedBy=0;this.AV7InOutFondoId=0;this.A346FondoEstado="";this.A2322FondoUsable="";this.AV14Select="";this.A38FondoId=0;this.A345FondoNombre="";this.Events={e11ld2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ld2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ld2_client:["ENTER",!0],e17ld2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10FondoNombre",fld:"vFONDONOMBRE",pic:"@!"},{av:"AV19OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV15OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV12GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV13GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV19OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{av:'gx.fn.getCtrlProperty("vORDPGOID","Visible")',ctrl:"vORDPGOID",prop:"Visible"},{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV19OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10FondoNombre",fld:"vFONDONOMBRE",pic:"@!"},{av:"AV19OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV15OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10FondoNombre",fld:"vFONDONOMBRE",pic:"@!"},{av:"AV19OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV15OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV14Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"AV15OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9",hsh:!0}],[{av:"AV7InOutFondoId",fld:"vINOUTFONDOID",pic:"ZZZ9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutFondoId","vINOUTFONDOID",0,"int",4,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingVar(this.GXValidFnc[36]);r.addRefreshingVar(this.GXValidFnc[35]);r.addRefreshingParm(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[36]);r.addRefreshingParm(this.GXValidFnc[35]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptfondoordenpago)})