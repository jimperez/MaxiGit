/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:13:31.70
*/
gx.evt.autoSkip=!1;gx.define("promptpersona",!1,function(){var n,i,r,t;this.ServerClass="promptpersona";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutPersonaId=gx.fn.getIntegerValue("vINOUTPERSONAID",".");this.AV8InOutPersonaDenominacion=gx.fn.getControlValue("vINOUTPERSONADENOMINACION")};this.Validv_Personatipo=function(){return this.validCliEvt("Validv_Personatipo",0,function(){try{var n=gx.util.balloon.getNew("vPERSONATIPO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personapadreid=function(){var n=gx.fn.currentGridRowImpl(34);return this.validCliEvt("Valid_Personapadreid",34,function(){try{if(gx.fn.currentGridRowImpl(34)===0)return!0;var n=gx.util.balloon.getNew("PERSONAPADREID",gx.fn.currentGridRowImpl(34));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e111d2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e121d2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e161d2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e171d2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,21,22,23,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];this.GXLastCtrlId=49;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptpersona",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",35,0,"px",17,"px","e161d2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(63,36,"PERSONAID","Cuil/Cuit","","PersonaId","int",0,"px",15,15,"right",null,[],63,"PersonaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(912,37,"PERSONATIPO","Tipo","PersonaTipo","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit(913,38,"PERSONADENOMINACION","Denominación","","PersonaDenominacion","svchar",0,"px",64,64,"left",null,[],913,"PersonaDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(1043,39,"PERSONAESTADO","Estado","PersonaEstado","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit(64,40,"PERSONAPADREID","Cuil/Cuit","","PersonaPadreId","int",0,"px",15,15,"right",null,[],64,"PersonaPadreId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1616,41,"PERSONAPADREDENOMINACION","Denominacion","","PersonaPadreDenominacion","svchar",0,"px",64,64,"left",null,[],1616,"PersonaPadreDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(1617,42,"PERSONAPADRETIPO","Tipo","PersonaPadreTipo","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit(914,43,"PERSONA094","Persona094","","Persona094","char",0,"px",15,15,"left",null,[],914,"Persona094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(915,44,"PERSONA095","Persona095","","Persona095","dtime",0,"px",14,14,"right",null,[],915,"Persona095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(916,45,"PERSONA097","Persona097","","Persona097","char",0,"px",15,15,"left",null,[],916,"Persona097",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(917,46,"PERSONA098","Persona098","","Persona098","dtime",0,"px",14,14,"right",null,[],917,"Persona098",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1068,47,"PERSONACLICOD","Cli Cod","","PersonaCliCod","int",0,"px",8,8,"right",null,[],1068,"PersonaCliCod",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,50,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});t.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e111d2_client);t.addEventHandler("ChangeRowsPerPage",this.e121d2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERSONAID",gxz:"ZV50PersonaId",gxold:"OV50PersonaId",gxvar:"AV50PersonaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV50PersonaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV50PersonaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERSONAID",gx.O.AV50PersonaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV50PersonaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERSONAID",".")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERSONADENOMINACION",gxz:"ZV39PersonaDenominacion",gxold:"OV39PersonaDenominacion",gxvar:"AV39PersonaDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV39PersonaDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.ZV39PersonaDenominacion=n)},v2c:function(){gx.fn.setControlValue("vPERSONADENOMINACION",gx.O.AV39PersonaDenominacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV39PersonaDenominacion=this.val())},val:function(){return gx.fn.getControlValue("vPERSONADENOMINACION")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personatipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPERSONATIPO",gxz:"ZV40PersonaTipo",gxold:"OV40PersonaTipo",gxvar:"AV40PersonaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV40PersonaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV40PersonaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("vPERSONATIPO",gx.O.AV40PersonaTipo)},c2v:function(){this.val()!==undefined&&(gx.O.AV40PersonaTipo=this.val())},val:function(){return gx.fn.getControlValue("vPERSONATIPO")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV28Select",gxold:"OV28Select",gxvar:"AV28Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV28Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV28Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(34),gx.O.AV28Select,gx.O.AV64Select_GXI)},c2v:function(n){gx.O.AV64Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV28Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV64Select_GXI",nac:gx.falseFn,evt:"e161d2_client",std:"ENTER"};n[36]={id:36,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAID",gxz:"Z63PersonaId",gxold:"O63PersonaId",gxvar:"A63PersonaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A63PersonaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z63PersonaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONAID",n||gx.fn.currentGridRowImpl(34),gx.O.A63PersonaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A63PersonaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONAID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONATIPO",gxz:"Z912PersonaTipo",gxold:"O912PersonaTipo",gxvar:"A912PersonaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A912PersonaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z912PersonaTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PERSONATIPO",n||gx.fn.currentGridRowImpl(34),gx.O.A912PersonaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A912PersonaTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONATIPO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONADENOMINACION",gxz:"Z913PersonaDenominacion",gxold:"O913PersonaDenominacion",gxvar:"A913PersonaDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A913PersonaDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z913PersonaDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONADENOMINACION",n||gx.fn.currentGridRowImpl(34),gx.O.A913PersonaDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A913PersonaDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONADENOMINACION",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAESTADO",gxz:"Z1043PersonaEstado",gxold:"O1043PersonaEstado",gxvar:"A1043PersonaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1043PersonaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1043PersonaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PERSONAESTADO",n||gx.fn.currentGridRowImpl(34),gx.O.A1043PersonaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1043PersonaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONAESTADO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Personapadreid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAPADREID",gxz:"Z64PersonaPadreId",gxold:"O64PersonaPadreId",gxvar:"A64PersonaPadreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A64PersonaPadreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z64PersonaPadreId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONAPADREID",n||gx.fn.currentGridRowImpl(34),gx.O.A64PersonaPadreId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A64PersonaPadreId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONAPADREID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAPADREDENOMINACION",gxz:"Z1616PersonaPadreDenominacion",gxold:"O1616PersonaPadreDenominacion",gxvar:"A1616PersonaPadreDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1616PersonaPadreDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1616PersonaPadreDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONAPADREDENOMINACION",n||gx.fn.currentGridRowImpl(34),gx.O.A1616PersonaPadreDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1616PersonaPadreDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONAPADREDENOMINACION",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAPADRETIPO",gxz:"Z1617PersonaPadreTipo",gxold:"O1617PersonaPadreTipo",gxvar:"A1617PersonaPadreTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1617PersonaPadreTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1617PersonaPadreTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PERSONAPADRETIPO",n||gx.fn.currentGridRowImpl(34),gx.O.A1617PersonaPadreTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1617PersonaPadreTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONAPADRETIPO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONA094",gxz:"Z914Persona094",gxold:"O914Persona094",gxvar:"A914Persona094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A914Persona094=n)},v2z:function(n){n!==undefined&&(gx.O.Z914Persona094=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONA094",n||gx.fn.currentGridRowImpl(34),gx.O.A914Persona094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A914Persona094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONA094",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONA095",gxz:"Z915Persona095",gxold:"O915Persona095",gxvar:"A915Persona095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A915Persona095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z915Persona095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONA095",n||gx.fn.currentGridRowImpl(34),gx.O.A915Persona095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A915Persona095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PERSONA095",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONA097",gxz:"Z916Persona097",gxold:"O916Persona097",gxvar:"A916Persona097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A916Persona097=n)},v2z:function(n){n!==undefined&&(gx.O.Z916Persona097=n)},v2c:function(n){gx.fn.setGridControlValue("PERSONA097",n||gx.fn.currentGridRowImpl(34),gx.O.A916Persona097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A916Persona097=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PERSONA097",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONA098",gxz:"Z917Persona098",gxold:"O917Persona098",gxvar:"A917Persona098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A917Persona098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z917Persona098=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONA098",n||gx.fn.currentGridRowImpl(34),gx.O.A917Persona098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A917Persona098=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PERSONA098",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONACLICOD",gxz:"Z1068PersonaCliCod",gxold:"O1068PersonaCliCod",gxvar:"A1068PersonaCliCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1068PersonaCliCod=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1068PersonaCliCod=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONACLICOD",n||gx.fn.currentGridRowImpl(34),gx.O.A1068PersonaCliCod,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1068PersonaCliCod=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONACLICOD",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};this.AV50PersonaId=0;this.ZV50PersonaId=0;this.OV50PersonaId=0;this.AV39PersonaDenominacion="";this.ZV39PersonaDenominacion="";this.OV39PersonaDenominacion="";this.AV40PersonaTipo="";this.ZV40PersonaTipo="";this.OV40PersonaTipo="";this.ZV28Select="";this.OV28Select="";this.Z63PersonaId=0;this.O63PersonaId=0;this.Z912PersonaTipo="";this.O912PersonaTipo="";this.Z913PersonaDenominacion="";this.O913PersonaDenominacion="";this.Z1043PersonaEstado="";this.O1043PersonaEstado="";this.Z64PersonaPadreId=0;this.O64PersonaPadreId=0;this.Z1616PersonaPadreDenominacion="";this.O1616PersonaPadreDenominacion="";this.Z1617PersonaPadreTipo="";this.O1617PersonaPadreTipo="";this.Z914Persona094="";this.O914Persona094="";this.Z915Persona095=gx.date.nullDate();this.O915Persona095=gx.date.nullDate();this.Z916Persona097="";this.O916Persona097="";this.Z917Persona098=gx.date.nullDate();this.O917Persona098=gx.date.nullDate();this.Z1068PersonaCliCod=0;this.O1068PersonaCliCod=0;this.AV50PersonaId=0;this.AV39PersonaDenominacion="";this.AV40PersonaTipo="";this.AV37GridCurrentPage=0;this.AV7InOutPersonaId=0;this.AV8InOutPersonaDenominacion="";this.AV28Select="";this.A63PersonaId=0;this.A912PersonaTipo="";this.A913PersonaDenominacion="";this.A1043PersonaEstado="";this.A64PersonaPadreId=0;this.A1616PersonaPadreDenominacion="";this.A1617PersonaPadreTipo="";this.A914Persona094="";this.A915Persona095=gx.date.nullDate();this.A916Persona097="";this.A917Persona098=gx.date.nullDate();this.A1068PersonaCliCod=0;this.Events={e111d2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e121d2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e161d2_client:["ENTER",!0],e171d2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV50PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV39PersonaDenominacion",fld:"vPERSONADENOMINACION",pic:"@!"},{ctrl:"vPERSONATIPO"},{av:"AV40PersonaTipo",fld:"vPERSONATIPO",pic:""}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{ctrl:"vPERSONATIPO"},{av:"AV40PersonaTipo",fld:"vPERSONATIPO",pic:""}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"vPERSONATIPO"},{av:"AV40PersonaTipo",fld:"vPERSONATIPO",pic:""},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV50PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV39PersonaDenominacion",fld:"vPERSONADENOMINACION",pic:"@!"},{ctrl:"vPERSONATIPO"},{av:"AV40PersonaTipo",fld:"vPERSONATIPO",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV50PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV39PersonaDenominacion",fld:"vPERSONADENOMINACION",pic:"@!"},{ctrl:"vPERSONATIPO"},{av:"AV40PersonaTipo",fld:"vPERSONATIPO",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV28Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A913PersonaDenominacion",fld:"PERSONADENOMINACION",pic:"@!",hsh:!0}],[{av:"AV7InOutPersonaId",fld:"vINOUTPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8InOutPersonaDenominacion",fld:"vINOUTPERSONADENOMINACION",pic:"@!"}]];this.EvtParms.VALIDV_PERSONATIPO=[[],[]];this.EvtParms.VALID_PERSONAPADREID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutPersonaId","vINOUTPERSONAID",0,"int",15,0);this.setVCMap("AV8InOutPersonaDenominacion","vINOUTPERSONADENOMINACION",0,"svchar",64,0);i.addRefreshingVar(this.GXValidFnc[19]);i.addRefreshingVar(this.GXValidFnc[23]);i.addRefreshingVar(this.GXValidFnc[28]);i.addRefreshingParm(this.GXValidFnc[19]);i.addRefreshingParm(this.GXValidFnc[23]);i.addRefreshingParm(this.GXValidFnc[28]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptpersona)})