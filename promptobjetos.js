/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:14:46.13
*/
gx.evt.autoSkip=!1;gx.define("promptobjetos",!1,function(){var t,r,i,n;this.ServerClass="promptobjetos";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutObjID=gx.fn.getControlValue("vINOUTOBJID");this.AV8InOutObjDes=gx.fn.getControlValue("vINOUTOBJDES")};this.s112_client=function(){this.AV10ObjDes=""};this.e113w2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e123w2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e173w2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e133w2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e183w2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,20,21,22,23,24,25,26,27,29,30,31,32,33];this.GXLastCtrlId=33;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptobjetos",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",29,0,"px",17,"px","e173w2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(153,30,"OBJID","Objeto","","ObjID","char",0,"px",50,50,"left",null,[],153,"ObjID",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(994,31,"OBJDES","Objeto","","ObjDes","svchar",0,"px",130,80,"left",null,[],994,"ObjDes",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,34,22,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV12GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV12GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV12GridCurrentPage)});n.addV2CFunction("AV13GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV13GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV13GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setProp("Gx Control Type","Gxcontroltype","","int");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e113w2_client);n.addEventHandler("ChangeRowsPerPage",this.e123w2_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e133w2_client"};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vOBJDES",gxz:"ZV10ObjDes",gxold:"OV10ObjDes",gxvar:"AV10ObjDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10ObjDes=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10ObjDes=n)},v2c:function(){gx.fn.setControlValue("vOBJDES",gx.O.AV10ObjDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10ObjDes=this.val())},val:function(){return gx.fn.getControlValue("vOBJDES")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[29]={id:29,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV14Select",gxold:"OV14Select",gxvar:"AV14Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV14Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(28),gx.O.AV14Select,gx.O.AV20Select_GXI)},c2v:function(n){gx.O.AV20Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV14Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(28))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(28))},gxvar_GXI:"AV20Select_GXI",nac:gx.falseFn,evt:"e173w2_client",std:"ENTER"};t[30]={id:30,lvl:2,type:"char",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJID",gxz:"Z153ObjID",gxold:"O153ObjID",gxvar:"A153ObjID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A153ObjID=n)},v2z:function(n){n!==undefined&&(gx.O.Z153ObjID=n)},v2c:function(n){gx.fn.setGridControlValue("OBJID",n||gx.fn.currentGridRowImpl(28),gx.O.A153ObjID,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A153ObjID=this.val(n))},val:function(n){return gx.fn.getGridControlValue("OBJID",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"svchar",len:130,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJDES",gxz:"Z994ObjDes",gxold:"O994ObjDes",gxvar:"A994ObjDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A994ObjDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z994ObjDes=n)},v2c:function(n){gx.fn.setGridControlValue("OBJDES",n||gx.fn.currentGridRowImpl(28),gx.O.A994ObjDes,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A994ObjDes=this.val(n))},val:function(n){return gx.fn.getGridControlValue("OBJDES",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};this.AV10ObjDes="";this.ZV10ObjDes="";this.OV10ObjDes="";this.ZV14Select="";this.OV14Select="";this.Z153ObjID="";this.O153ObjID="";this.Z994ObjDes="";this.O994ObjDes="";this.AV10ObjDes="";this.AV12GridCurrentPage=0;this.AV7InOutObjID="";this.AV8InOutObjDes="";this.AV14Select="";this.A153ObjID="";this.A994ObjDes="";this.Events={e113w2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e123w2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e173w2_client:["ENTER",!0],e133w2_client:["'DOCLEANFILTERS'",!0],e183w2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10ObjDes",fld:"vOBJDES",pic:""}],[{av:"AV12GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV13GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10ObjDes",fld:"vOBJDES",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10ObjDes",fld:"vOBJDES",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV14Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A153ObjID",fld:"OBJID",pic:"",hsh:!0},{av:"A994ObjDes",fld:"OBJDES",pic:"",hsh:!0}],[{av:"AV7InOutObjID",fld:"vINOUTOBJID",pic:""},{av:"AV8InOutObjDes",fld:"vINOUTOBJDES",pic:""}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10ObjDes",fld:"vOBJDES",pic:""}],[{av:"AV10ObjDes",fld:"vOBJDES",pic:""},{av:"AV12GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV13GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutObjID","vINOUTOBJID",0,"char",50,0);this.setVCMap("AV8InOutObjDes","vINOUTOBJDES",0,"svchar",130,0);r.addRefreshingVar(this.GXValidFnc[22]);r.addRefreshingParm(this.GXValidFnc[22]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptobjetos)})