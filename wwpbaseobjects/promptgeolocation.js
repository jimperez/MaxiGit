/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:38.25
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.promptgeolocation', false, function () {
   this.ServerClass =  "wwpbaseobjects.promptgeolocation" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = true;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV10Latitude=gx.fn.getControlValue("vLATITUDE") ;
      this.AV7Geolocation=gx.fn.getControlValue("vGEOLOCATION") ;
      this.AV11Longitude=gx.fn.getControlValue("vLONGITUDE") ;
   };
   this.e120d2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140d1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,14,15,16];
   this.GXLastCtrlId =16;
   this.GOOGLEMAPCONTROL1Container = gx.uc.getNew(this, 11, 0, "gxMap", "GOOGLEMAPCONTROL1Container", "Googlemapcontrol1", "GOOGLEMAPCONTROL1");
   var GOOGLEMAPCONTROL1Container = this.GOOGLEMAPCONTROL1Container;
   GOOGLEMAPCONTROL1Container.setProp("Class", "Class", "", "char");
   GOOGLEMAPCONTROL1Container.setProp("Enabled", "Enabled", true, "boolean");
   GOOGLEMAPCONTROL1Container.setProp("Title", "Title", "Map Title", "str");
   GOOGLEMAPCONTROL1Container.setProp("Width", "Width", "500px", "str");
   GOOGLEMAPCONTROL1Container.setProp("Height", "Height", "350px", "str");
   GOOGLEMAPCONTROL1Container.setProp("Provider", "Provider", "GOOGLE", "str");
   GOOGLEMAPCONTROL1Container.setProp("Type", "Type", "G_NORMAL_MAP", "str");
   GOOGLEMAPCONTROL1Container.setProp("City", "City", "0,0", "str");
   GOOGLEMAPCONTROL1Container.setDynProp("Latitude", "Latitude", "-34.906275829530244", "str");
   GOOGLEMAPCONTROL1Container.setDynProp("Longitude", "Longitude", "-56.199703216552734", "str");
   GOOGLEMAPCONTROL1Container.setProp("Precision", "Precision", 15, "num");
   GOOGLEMAPCONTROL1Container.setProp("Style", "Style", "GStyle_Standard", "str");
   GOOGLEMAPCONTROL1Container.setProp("Small_Control", "Gsmall", "GSmall_True", "str");
   GOOGLEMAPCONTROL1Container.setProp("Type_Control", "Gtype", "GType_False", "str");
   GOOGLEMAPCONTROL1Container.setProp("Scale_Control", "Scale", "GScale_False", "str");
   GOOGLEMAPCONTROL1Container.setProp("OverView_Control", "Overview", "GOverviewMap_False", "str");
   GOOGLEMAPCONTROL1Container.setProp("Small_Zoom_Control", "Smallzoom", "GSmallZoom_False", "str");
   GOOGLEMAPCONTROL1Container.setProp("Large_Control", "Large", "GLarge_False", "str");
   GOOGLEMAPCONTROL1Container.setProp("MapType_Control_Style", "Maptype_control_style", "DEFAULT", "str");
   GOOGLEMAPCONTROL1Container.setProp("Navigation_Control_Style", "Navigation_control_style", "DEFAULT", "str");
   GOOGLEMAPCONTROL1Container.setProp("ScrollWheel", "Scrollwheel", true, "bool");
   GOOGLEMAPCONTROL1Container.addV2CFunction('GxMapData', "vGXMAPDATA", 'SetData');
   GOOGLEMAPCONTROL1Container.addC2VFunction(function(UC) { UC.ParentObject.GxMapData=UC.GetData();gx.fn.setControlValue("vGXMAPDATA",UC.ParentObject.GxMapData); });
   GOOGLEMAPCONTROL1Container.addV2CFunction('AV10Latitude', "vLATITUDE", 'SetClickLatitude');
   GOOGLEMAPCONTROL1Container.addC2VFunction(function(UC) { UC.ParentObject.AV10Latitude=UC.GetClickLatitude();gx.fn.setControlValue("vLATITUDE",UC.ParentObject.AV10Latitude); });
   GOOGLEMAPCONTROL1Container.addV2CFunction('AV11Longitude', "vLONGITUDE", 'SetClickLongitude');
   GOOGLEMAPCONTROL1Container.addC2VFunction(function(UC) { UC.ParentObject.AV11Longitude=UC.GetClickLongitude();gx.fn.setControlValue("vLONGITUDE",UC.ParentObject.AV11Longitude); });
   GOOGLEMAPCONTROL1Container.setProp("InformationControl", "Informationcontrol", "ControlName", "str");
   GOOGLEMAPCONTROL1Container.setProp("Icon", "Icon", "Default", "str");
   GOOGLEMAPCONTROL1Container.setProp("IconWidth", "Iconwidth", 20, "num");
   GOOGLEMAPCONTROL1Container.setProp("IconHeigth", "Iconheigth", 32, "num");
   GOOGLEMAPCONTROL1Container.setProp("AnchorLeft", "Anchorleft", 10, "num");
   GOOGLEMAPCONTROL1Container.setProp("AnchorTop", "Anchortop", 32, "num");
   GOOGLEMAPCONTROL1Container.setProp("GoogleApiKey", "Googleapikey", "", "str");
   GOOGLEMAPCONTROL1Container.setProp("OpenLinksInNewWindow", "Openlinksinnewwindow", "OpenNew_True", "str");
   GOOGLEMAPCONTROL1Container.setProp("KML", "Kml", false, "bool");
   GOOGLEMAPCONTROL1Container.setProp("KMLURL", "Kmlurl", "", "str");
   GOOGLEMAPCONTROL1Container.setProp("getIcon", "Geticon", "Orange", "str");
   GOOGLEMAPCONTROL1Container.setProp("Onclick", "Onclick", "getvalue", "str");
   GOOGLEMAPCONTROL1Container.setProp("CenterWhenClick", "Centerwhenclick", true, "bool");
   GOOGLEMAPCONTROL1Container.setProp("Clear_Overlay", "Clear_overlay", false, "bool");
   GOOGLEMAPCONTROL1Container.setProp("BaiduKey", "Baidukey", "41e051de8c41e0a4532e367c6b0e12fc", "str");
   GOOGLEMAPCONTROL1Container.setProp("Travel_Mode", "Travel_mode", "1", "str");
   GOOGLEMAPCONTROL1Container.setProp("Visible", "Visible", true, "bool");
   GOOGLEMAPCONTROL1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(GOOGLEMAPCONTROL1Container);
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[8]={ id: 8, fld:"UTGEOLOCATION",grid:0};
   GXValidFnc[14]={ id: 14, fld:"ACTIONGROUP_ACTIONS",grid:0};
   GXValidFnc[15]={ id: 15, fld:"BTNENTER",grid:0,evt:"e120d2_client",std:"ENTER"};
   GXValidFnc[16]={ id: 16, fld:"BTNCANCEL",grid:0,evt:"e140d1_client"};
   this.GxMapData = {Points:[]} ;
   this.AV7Geolocation = "" ;
   this.AV10Latitude = "" ;
   this.AV11Longitude = "" ;
   this.Events = {"e120d2_client": ["ENTER", true] ,"e140d1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV7Geolocation',fld:'vGEOLOCATION',pic:''},{av:'GxMapPoint',fld:'vGXMAPPOINT',pic:''},{av:'GxMapData',fld:'vGXMAPDATA',pic:''}],[{av:'GxMapPoint',fld:'vGXMAPPOINT',pic:''},{av:'GxMapData',fld:'vGXMAPDATA',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV10Latitude',fld:'vLATITUDE',pic:''},{av:'AV7Geolocation',fld:'vGEOLOCATION',pic:''},{av:'AV11Longitude',fld:'vLONGITUDE',pic:''}],[{av:'AV7Geolocation',fld:'vGEOLOCATION',pic:''}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV10Latitude", "vLATITUDE", 0, "svchar", 9, 0);
   this.setVCMap("AV7Geolocation", "vGEOLOCATION", 0, "svchar", 200, 0);
   this.setVCMap("AV11Longitude", "vLONGITUDE", 0, "svchar", 9, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.promptgeolocation);});
