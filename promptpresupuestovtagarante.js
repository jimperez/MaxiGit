/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:55.89
*/
gx.evt.autoSkip=!1;gx.define("promptpresupuestovtagarante",!1,function(){var n,r,i,t;this.ServerClass="promptpresupuestovtagarante";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV26InPreId=gx.fn.getIntegerValue("vINPREID",".");this.AV27InOutPreGaranteId=gx.fn.getIntegerValue("vINOUTPREGARANTEID",".");this.AV28InOutPreGaranteNombre=gx.fn.getControlValue("vINOUTPREGARANTENOMBRE");this.AV26InPreId=gx.fn.getIntegerValue("vINPREID",".")};this.Valid_Pregaranteid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Pregaranteid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("PREGARANTEID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){this.AV11PreGaranteNombreOperator=gx.num.trunc(0,0);this.AV12PreGaranteNombre=""};this.e11ws2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ws2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e17ws2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e13ws2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e18ws2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,19,20,21,22,23,24,27,28,30,31,32,33,34,35,36,38,39,40,41,42,43];this.GXLastCtrlId=43;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptpresupuestovtagarante",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",38,0,"px",17,"px","e17ws2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(89,39,"PREID","Nº","","PreId","int",0,"px",9,9,"right",null,[],89,"PreId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3374,40,"PREGARANTEID","Cuil","","PreGaranteId","int",0,"px",15,15,"right",null,[],3374,"PreGaranteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3380,41,"PREGARANTENOMBRE","Garante","","PreGaranteNombre","svchar",0,"px",64,64,"left",null,[],3380,"PreGaranteNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,44,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV23GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV23GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV23GridCurrentPage)});t.addV2CFunction("AV24GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV24GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV24GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11ws2_client);t.addEventHandler("ChangeRowsPerPage",this.e12ws2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e13ws2_client"};n[19]={id:19,fld:"TABLESPLITTEDFILTERTEXTPREGARANTENOMBRE",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"FILTERTEXTPREGARANTENOMBRE",format:0,grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"TABLEMERGEDPREGARANTENOMBRE",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPREGARANTENOMBREOPERATOR",gxz:"ZV11PreGaranteNombreOperator",gxold:"OV11PreGaranteNombreOperator",gxvar:"AV11PreGaranteNombreOperator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV11PreGaranteNombreOperator=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11PreGaranteNombreOperator=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vPREGARANTENOMBREOPERATOR",gx.O.AV11PreGaranteNombreOperator)},c2v:function(){this.val()!==undefined&&(gx.O.AV11PreGaranteNombreOperator=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPREGARANTENOMBREOPERATOR",".")},nac:gx.falseFn};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPREGARANTENOMBRE",gxz:"ZV12PreGaranteNombre",gxold:"OV12PreGaranteNombre",gxvar:"AV12PreGaranteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12PreGaranteNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12PreGaranteNombre=n)},v2c:function(){gx.fn.setControlValue("vPREGARANTENOMBRE",gx.O.AV12PreGaranteNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12PreGaranteNombre=this.val())},val:function(){return gx.fn.getControlValue("vPREGARANTENOMBRE")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[38]={id:38,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV25Select",gxold:"OV25Select",gxvar:"AV25Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV25Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV25Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(37),gx.O.AV25Select,gx.O.AV33Select_GXI)},c2v:function(n){gx.O.AV33Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV25Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV33Select_GXI",nac:gx.falseFn,evt:"e17ws2_client",std:"ENTER"};n[39]={id:39,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREID",n||gx.fn.currentGridRowImpl(37),gx.O.A89PreId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Pregaranteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTEID",gxz:"Z3374PreGaranteId",gxold:"O3374PreGaranteId",gxvar:"A3374PreGaranteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3374PreGaranteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREGARANTEID",n||gx.fn.currentGridRowImpl(37),gx.O.A3374PreGaranteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREGARANTEID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTENOMBRE",gxz:"Z3380PreGaranteNombre",gxold:"O3380PreGaranteNombre",gxvar:"A3380PreGaranteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3380PreGaranteNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3380PreGaranteNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PREGARANTENOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A3380PreGaranteNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3380PreGaranteNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREGARANTENOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};this.AV11PreGaranteNombreOperator=0;this.ZV11PreGaranteNombreOperator=0;this.OV11PreGaranteNombreOperator=0;this.AV12PreGaranteNombre="";this.ZV12PreGaranteNombre="";this.OV12PreGaranteNombre="";this.ZV25Select="";this.OV25Select="";this.Z89PreId=0;this.O89PreId=0;this.Z3374PreGaranteId=0;this.O3374PreGaranteId=0;this.Z3380PreGaranteNombre="";this.O3380PreGaranteNombre="";this.AV11PreGaranteNombreOperator=0;this.AV12PreGaranteNombre="";this.AV23GridCurrentPage=0;this.AV26InPreId=0;this.AV27InOutPreGaranteId=0;this.AV28InOutPreGaranteNombre="";this.AV25Select="";this.A89PreId=0;this.A3374PreGaranteId=0;this.A3380PreGaranteNombre="";this.Events={e11ws2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ws2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e17ws2_client:["ENTER",!0],e13ws2_client:["'DOCLEANFILTERS'",!0],e18ws2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPREGARANTENOMBREOPERATOR"},{av:"AV11PreGaranteNombreOperator",fld:"vPREGARANTENOMBREOPERATOR",pic:"ZZZ9"},{av:"AV12PreGaranteNombre",fld:"vPREGARANTENOMBRE",pic:"@!"},{av:"AV26InPreId",fld:"vINPREID",pic:"ZZZZZZZZ9"}],[{av:"AV23GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV24GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPREGARANTENOMBREOPERATOR"},{av:"AV11PreGaranteNombreOperator",fld:"vPREGARANTENOMBREOPERATOR",pic:"ZZZ9"},{av:"AV12PreGaranteNombre",fld:"vPREGARANTENOMBRE",pic:"@!"},{av:"AV26InPreId",fld:"vINPREID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPREGARANTENOMBREOPERATOR"},{av:"AV11PreGaranteNombreOperator",fld:"vPREGARANTENOMBREOPERATOR",pic:"ZZZ9"},{av:"AV12PreGaranteNombre",fld:"vPREGARANTENOMBRE",pic:"@!"},{av:"AV26InPreId",fld:"vINPREID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV25Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A3374PreGaranteId",fld:"PREGARANTEID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A3380PreGaranteNombre",fld:"PREGARANTENOMBRE",pic:"@!"}],[{av:"AV27InOutPreGaranteId",fld:"vINOUTPREGARANTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV28InOutPreGaranteNombre",fld:"vINOUTPREGARANTENOMBRE",pic:"@!"}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vPREGARANTENOMBREOPERATOR"},{av:"AV11PreGaranteNombreOperator",fld:"vPREGARANTENOMBREOPERATOR",pic:"ZZZ9"},{av:"AV12PreGaranteNombre",fld:"vPREGARANTENOMBRE",pic:"@!"},{av:"AV26InPreId",fld:"vINPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"vPREGARANTENOMBREOPERATOR"},{av:"AV11PreGaranteNombreOperator",fld:"vPREGARANTENOMBREOPERATOR",pic:"ZZZ9"},{av:"AV12PreGaranteNombre",fld:"vPREGARANTENOMBRE",pic:"@!"},{av:"AV23GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV24GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_PREGARANTEID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV26InPreId","vINPREID",0,"int",9,0);this.setVCMap("AV27InOutPreGaranteId","vINOUTPREGARANTEID",0,"int",15,0);this.setVCMap("AV28InOutPreGaranteNombre","vINOUTPREGARANTENOMBRE",0,"svchar",64,0);this.setVCMap("AV26InPreId","vINPREID",0,"int",9,0);this.setVCMap("AV26InPreId","vINPREID",0,"int",9,0);r.addRefreshingVar(this.GXValidFnc[28]);r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingVar({rfrVar:"AV26InPreId"});r.addRefreshingParm(this.GXValidFnc[28]);r.addRefreshingParm(this.GXValidFnc[31]);r.addRefreshingParm({rfrVar:"AV26InPreId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptpresupuestovtagarante)})