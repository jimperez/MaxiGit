/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:25:17.59
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.wwppromptmasterpage', false, function () {
   this.ServerClass =  "wwpbaseobjects.wwppromptmasterpage" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.hasEnterEvent = false;
   this.skipOnEnter = true;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e130p2_client=function()
   {
      return this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e140p2_client=function()
   {
      return this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11];
   this.GXLastCtrlId =11;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"UTCONTENTHOLDER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   this.Events = {"e130p2_client": ["ENTER_MPAGE", true] ,"e140p2_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[],[]];
   this.EvtParms["START_MPAGE"] = [[],[{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE_MPAGE","Class")',ctrl:'LAYOUTMAINTABLE_MPAGE',prop:'Class'}]];
   this.Initialize( );
});
gx.wi( function() { gx.createMasterPage(wwpbaseobjects.wwppromptmasterpage);});
