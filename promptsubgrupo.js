/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:46.12
*/
gx.evt.autoSkip=!1;gx.define("promptsubgrupo",!1,function(){var n,i,r,t;this.ServerClass="promptsubgrupo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV57InGrupoId=gx.fn.getIntegerValue("vINGRUPOID",".");this.AV8InOutSGrupoId=gx.fn.getIntegerValue("vINOUTSGRUPOID",".");this.AV9InOutSGrupoNombre=gx.fn.getControlValue("vINOUTSGRUPONOMBRE");this.AV57InGrupoId=gx.fn.getIntegerValue("vINGRUPOID",".")};this.Valid_Grupoid=function(){var n=gx.fn.currentGridRowImpl(29);return this.validCliEvt("Valid_Grupoid",29,function(){try{if(gx.fn.currentGridRowImpl(29)===0)return!0;var n=gx.util.balloon.getNew("GRUPOID",gx.fn.currentGridRowImpl(29));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sgrupogfkid=function(){var n=gx.fn.currentGridRowImpl(29);return this.validCliEvt("Valid_Sgrupogfkid",29,function(){try{if(gx.fn.currentGridRowImpl(29)===0)return!0;var n=gx.util.balloon.getNew("SGRUPOGFKID",gx.fn.currentGridRowImpl(29));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e110r2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e120r2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e160r2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e170r2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,41,42,43,44];this.GXLastCtrlId=44;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptsubgrupo",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",30,0,"px",17,"px","e160r2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(10,31,"GRUPOID","Ide.","","GrupoId","int",0,"px",4,4,"right",null,[],10,"GrupoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(362,32,"GRUPONOMBRE","Grupo","","GrupoNombre","svchar",0,"px",64,64,"left",null,[],362,"GrupoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(11,33,"SGRUPOID","Código","","SGrupoId","int",0,"px",4,4,"right",null,[],11,"SGrupoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(361,34,"SGRUPONOMBRE","SubGrupo","","SGrupoNombre","svchar",0,"px",64,64,"left",null,[],361,"SGrupoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(834,35,"SGRUPOESTADO","Estado","SGrupoEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(19,36,"SGRUPOGFKID","GFK","","SGrupoGFKId","int",0,"px",4,4,"right",null,[],19,"SGrupoGFKId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1527,37,"SGRUPOGFKNOMBRE","GFK","","SGrupoGFKNombre","svchar",0,"px",64,64,"left",null,[],1527,"SGrupoGFKNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,40,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});t.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e110r2_client);t.addEventHandler("ChangeRowsPerPage",this.e120r2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vGRUPONOMBRE",gxz:"ZV34GrupoNombre",gxold:"OV34GrupoNombre",gxvar:"AV34GrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV34GrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV34GrupoNombre=n)},v2c:function(){gx.fn.setControlValue("vGRUPONOMBRE",gx.O.AV34GrupoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV34GrupoNombre=this.val())},val:function(){return gx.fn.getControlValue("vGRUPONOMBRE")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSGRUPONOMBRE",gxz:"ZV35SGrupoNombre",gxold:"OV35SGrupoNombre",gxvar:"AV35SGrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV35SGrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV35SGrupoNombre=n)},v2c:function(){gx.fn.setControlValue("vSGRUPONOMBRE",gx.O.AV35SGrupoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV35SGrupoNombre=this.val())},val:function(){return gx.fn.getControlValue("vSGRUPONOMBRE")},nac:gx.falseFn};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[30]={id:30,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV32Select",gxold:"OV32Select",gxvar:"AV32Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV32Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(29),gx.O.AV32Select,gx.O.AV64Select_GXI)},c2v:function(n){gx.O.AV64Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV32Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV64Select_GXI",nac:gx.falseFn,evt:"e160r2_client",std:"ENTER"};n[31]={id:31,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Grupoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPOID",gxz:"Z10GrupoId",gxold:"O10GrupoId",gxvar:"A10GrupoId",ucs:[],op:[32,37],ip:[32,37,31,36],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A10GrupoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z10GrupoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("GRUPOID",n||gx.fn.currentGridRowImpl(29),gx.O.A10GrupoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A10GrupoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("GRUPOID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPONOMBRE",gxz:"Z362GrupoNombre",gxold:"O362GrupoNombre",gxvar:"A362GrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A362GrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z362GrupoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("GRUPONOMBRE",n||gx.fn.currentGridRowImpl(29),gx.O.A362GrupoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A362GrupoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("GRUPONOMBRE",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPOID",gxz:"Z11SGrupoId",gxold:"O11SGrupoId",gxvar:"A11SGrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A11SGrupoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z11SGrupoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SGRUPOID",n||gx.fn.currentGridRowImpl(29),gx.O.A11SGrupoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A11SGrupoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SGRUPOID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPONOMBRE",gxz:"Z361SGrupoNombre",gxold:"O361SGrupoNombre",gxvar:"A361SGrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A361SGrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z361SGrupoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SGRUPONOMBRE",n||gx.fn.currentGridRowImpl(29),gx.O.A361SGrupoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A361SGrupoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SGRUPONOMBRE",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPOESTADO",gxz:"Z834SGrupoEstado",gxold:"O834SGrupoEstado",gxvar:"A834SGrupoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A834SGrupoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z834SGrupoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("SGRUPOESTADO",n||gx.fn.currentGridRowImpl(29),gx.O.A834SGrupoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A834SGrupoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SGRUPOESTADO",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Sgrupogfkid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPOGFKID",gxz:"Z19SGrupoGFKId",gxold:"O19SGrupoGFKId",gxvar:"A19SGrupoGFKId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A19SGrupoGFKId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z19SGrupoGFKId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SGRUPOGFKID",n||gx.fn.currentGridRowImpl(29),gx.O.A19SGrupoGFKId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A19SGrupoGFKId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SGRUPOGFKID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPOGFKNOMBRE",gxz:"Z1527SGrupoGFKNombre",gxold:"O1527SGrupoGFKNombre",gxvar:"A1527SGrupoGFKNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1527SGrupoGFKNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1527SGrupoGFKNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SGRUPOGFKNOMBRE",n||gx.fn.currentGridRowImpl(29),gx.O.A1527SGrupoGFKNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1527SGrupoGFKNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SGRUPOGFKNOMBRE",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[44]={id:44,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV14OrderedBy",gxold:"OV14OrderedBy",gxvar:"AV14OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV14OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV14OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV34GrupoNombre="";this.ZV34GrupoNombre="";this.OV34GrupoNombre="";this.AV35SGrupoNombre="";this.ZV35SGrupoNombre="";this.OV35SGrupoNombre="";this.ZV32Select="";this.OV32Select="";this.Z10GrupoId=0;this.O10GrupoId=0;this.Z362GrupoNombre="";this.O362GrupoNombre="";this.Z11SGrupoId=0;this.O11SGrupoId=0;this.Z361SGrupoNombre="";this.O361SGrupoNombre="";this.Z834SGrupoEstado="";this.O834SGrupoEstado="";this.Z19SGrupoGFKId=0;this.O19SGrupoGFKId=0;this.Z1527SGrupoGFKNombre="";this.O1527SGrupoGFKNombre="";this.AV14OrderedBy=0;this.ZV14OrderedBy=0;this.OV14OrderedBy=0;this.AV34GrupoNombre="";this.AV35SGrupoNombre="";this.AV37GridCurrentPage=0;this.AV14OrderedBy=0;this.AV57InGrupoId=0;this.AV8InOutSGrupoId=0;this.AV9InOutSGrupoNombre="";this.AV32Select="";this.A10GrupoId=0;this.A362GrupoNombre="";this.A11SGrupoId=0;this.A361SGrupoNombre="";this.A834SGrupoEstado="";this.A19SGrupoGFKId=0;this.A1527SGrupoGFKNombre="";this.Events={e110r2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e120r2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e160r2_client:["ENTER",!0],e170r2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV34GrupoNombre",fld:"vGRUPONOMBRE",pic:"@!"},{av:"AV35SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV14OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV57InGrupoId",fld:"vINGRUPOID",pic:"ZZZ9"}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV14OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV14OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV34GrupoNombre",fld:"vGRUPONOMBRE",pic:"@!"},{av:"AV35SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV14OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV57InGrupoId",fld:"vINGRUPOID",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV34GrupoNombre",fld:"vGRUPONOMBRE",pic:"@!"},{av:"AV35SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV14OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV57InGrupoId",fld:"vINGRUPOID",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV32Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9",hsh:!0},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!",hsh:!0}],[{av:"AV8InOutSGrupoId",fld:"vINOUTSGRUPOID",pic:"ZZZ9"},{av:"AV9InOutSGrupoNombre",fld:"vINOUTSGRUPONOMBRE",pic:"@!"}]];this.EvtParms.VALID_GRUPOID=[[{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A1527SGrupoGFKNombre",fld:"SGRUPOGFKNOMBRE",pic:"@!"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A19SGrupoGFKId",fld:"SGRUPOGFKID",pic:"ZZZ9"}],[{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A1527SGrupoGFKNombre",fld:"SGRUPOGFKNOMBRE",pic:"@!"}]];this.EvtParms.VALID_SGRUPOGFKID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV57InGrupoId","vINGRUPOID",0,"int",4,0);this.setVCMap("AV8InOutSGrupoId","vINOUTSGRUPOID",0,"int",4,0);this.setVCMap("AV9InOutSGrupoNombre","vINOUTSGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("AV57InGrupoId","vINGRUPOID",0,"int",4,0);this.setVCMap("AV57InGrupoId","vINGRUPOID",0,"int",4,0);i.addRefreshingVar(this.GXValidFnc[19]);i.addRefreshingVar(this.GXValidFnc[23]);i.addRefreshingVar(this.GXValidFnc[44]);i.addRefreshingVar({rfrVar:"AV57InGrupoId"});i.addRefreshingParm(this.GXValidFnc[19]);i.addRefreshingParm(this.GXValidFnc[23]);i.addRefreshingParm(this.GXValidFnc[44]);i.addRefreshingParm({rfrVar:"AV57InGrupoId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptsubgrupo)})