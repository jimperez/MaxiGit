/*
               File: WWPBaseObjects.WorkWithPlusMasterPage
        Description: Master Page
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/27/2019 11:21:58.59
       Program type: Callable routine
          Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class workwithplusmasterpage : GXMasterPage, System.Web.SessionState.IRequiresSessionState
   {
      public workwithplusmasterpage( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
      }

      public workwithplusmasterpage( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( )
      {
         executePrivate();
      }

      void executePrivate( )
      {
         isStatic = false;
         webExecute();
      }

      protected override void createObjects( )
      {
      }

      protected void INITWEB( )
      {
         initialize_properties( ) ;
      }

      public override void webExecute( )
      {
         if ( initialized == 0 )
         {
            createObjects();
            initialize();
         }
         INITWEB( ) ;
         if ( ! isAjaxCallMode( ) )
         {
            PA0L2( ) ;
            if ( ( GxWebError == 0 ) && ! isAjaxCallMode( ) )
            {
               /* GeneXus formulas. */
               context.Gx_err = 0;
               WS0L2( ) ;
               if ( ! isAjaxCallMode( ) )
               {
                  WE0L2( ) ;
               }
            }
         }
         this.cleanup();
      }

      protected void RenderHtmlHeaders( )
      {
         if ( ! isFullAjaxMode( ) )
         {
            GXWebForm.AddResponsiveMetaHeaders((getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Meta);
            getDataAreaObject().RenderHtmlHeaders();
         }
      }

      protected void RenderHtmlOpenForm( )
      {
         if ( ! isFullAjaxMode( ) )
         {
            getDataAreaObject().RenderHtmlOpenForm();
         }
      }

      protected void send_integrity_footer_hashes( )
      {
         GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
      }

      protected void SendCloseFormHiddens( )
      {
         /* Send hidden variables. */
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", true, "vADMINAGDATA_MPAGE", AV5AdminAGData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vADMINAGDATA_MPAGE", AV5AdminAGData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", true, "vDVELOP_MENU_MPAGE", AV8DVelop_Menu);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vDVELOP_MENU_MPAGE", AV8DVelop_Menu);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", true, "vDVELOP_MENU_USERDATA_MPAGE", AV33DVelop_Menu_UserData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vDVELOP_MENU_USERDATA_MPAGE", AV33DVelop_Menu_UserData);
         }
         GxWebStd.gx_hidden_field( context, "DDO_ADMINAG_MPAGE_Icon", StringUtil.RTrim( Ddo_adminag_Icon));
         GxWebStd.gx_hidden_field( context, "DDO_ADMINAG_MPAGE_Cls", StringUtil.RTrim( Ddo_adminag_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_ADMINAG_MPAGE_Titlecontrolalign", StringUtil.RTrim( Ddo_adminag_Titlecontrolalign));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Searchserviceurl", StringUtil.RTrim( Ucmenu_Searchserviceurl));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Searchminchars", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucmenu_Searchminchars), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Searchhelperdescription", StringUtil.RTrim( Ucmenu_Searchhelperdescription));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Sidebarmainclass", StringUtil.RTrim( Ucmenu_Sidebarmainclass));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Scrollwidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucmenu_Scrollwidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Scrollalwaysvisible", StringUtil.BoolToStr( Ucmenu_Scrollalwaysvisible));
         GxWebStd.gx_hidden_field( context, "UCMENU_MPAGE_Hidescrollincompactmenu", StringUtil.BoolToStr( Ucmenu_Hidescrollincompactmenu));
         GxWebStd.gx_hidden_field( context, "WWPUTILITIES_MPAGE_Enablefixobjectfitcover", StringUtil.BoolToStr( Wwputilities_Enablefixobjectfitcover));
         GxWebStd.gx_hidden_field( context, "WWPUTILITIES_MPAGE_Enableconvertcombotobootstrapselect", StringUtil.BoolToStr( Wwputilities_Enableconvertcombotobootstrapselect));
         GxWebStd.gx_hidden_field( context, "DDO_ADMINAG_MPAGE_Activeeventkey", StringUtil.RTrim( Ddo_adminag_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "FORM_MPAGE_Caption", StringUtil.RTrim( (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Caption));
         GxWebStd.gx_hidden_field( context, "DDO_ADMINAG_MPAGE_Activeeventkey", StringUtil.RTrim( Ddo_adminag_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "FORM_MPAGE_Caption", StringUtil.RTrim( (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Caption));
      }

      protected void RenderHtmlCloseForm0L2( )
      {
         SendCloseFormHiddens( ) ;
         SendSecurityToken((String)(sPrefix));
         if ( ! isFullAjaxMode( ) )
         {
            getDataAreaObject().RenderHtmlCloseForm();
         }
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/slimscroll/jquery.slimscroll.min.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/SidebarMenu/BootstrapSidebarMenuRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVMessage/pnotify.custom.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVMessage/DVMessageRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Tooltip/BootstrapTooltipRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         context.AddJavascriptSource("wwpbaseobjects/workwithplusmasterpage.js", "?2019102711215947", false, true);
         context.WriteHtmlTextNl( "</body>") ;
         context.WriteHtmlTextNl( "</html>") ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
      }

      public override String GetPgmname( )
      {
         return "WWPBaseObjects.WorkWithPlusMasterPage" ;
      }

      public override String GetPgmdesc( )
      {
         return "Master Page" ;
      }

      protected void WB0L0( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            RenderHtmlHeaders( ) ;
            RenderHtmlOpenForm( ) ;
            if ( ! ShowMPWhenPopUp( ) && context.isPopUpObject( ) )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableOutput();
               }
               if ( context.isSpaRequest( ) )
               {
                  disableJsOutput();
               }
               /* Content placeholder */
               context.WriteHtmlText( "<div") ;
               GxWebStd.ClassAttribute( context, "gx-content-placeholder");
               context.WriteHtmlText( ">") ;
               if ( ! isFullAjaxMode( ) )
               {
                  getDataAreaObject().RenderHtmlContent();
               }
               context.WriteHtmlText( "</div>") ;
               if ( context.isSpaRequest( ) )
               {
                  disableOutput();
               }
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
               wbLoad = true;
               return  ;
            }
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "Section", "left", "top", " "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divLayoutmaintable_Internalname, 1, 0, "px", 0, "px", divLayoutmaintable_Class, "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablemain_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTableheader_Internalname, 1, 0, "px", 0, "px", "TableHeaderSidebarImage", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-3", "left", "top", "", "", "div");
            wb_table1_12_0L2( true) ;
         }
         else
         {
            wb_table1_12_0L2( false) ;
         }
         return  ;
      }

      protected void wb_table1_12_0L2e( bool wbgen )
      {
         if ( wbgen )
         {
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-9 ShowMenuImageCellNotFixedRight page-content", "left", "top", "", "", "div");
            wb_table2_19_0L2( true) ;
         }
         else
         {
            wb_table2_19_0L2( false) ;
         }
         return  ;
      }

      protected void wb_table2_19_0L2e( bool wbgen )
      {
         if ( wbgen )
         {
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-4 hidden-xs col-sm-5 CellFloatRight", "left", "top", "", "", "div");
            wb_table3_26_0L2( true) ;
         }
         else
         {
            wb_table3_26_0L2( false) ;
         }
         return  ;
      }

      protected void wb_table3_26_0L2e( bool wbgen )
      {
         if ( wbgen )
         {
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divUnnamedtable1_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucUcmenu.SetProperty("SearchServiceUrl", Ucmenu_Searchserviceurl);
            ucUcmenu.SetProperty("SearchMinChars", Ucmenu_Searchminchars);
            ucUcmenu.SetProperty("SearchHelperDescription", Ucmenu_Searchhelperdescription);
            ucUcmenu.SetProperty("SidebarMainClass", Ucmenu_Sidebarmainclass);
            ucUcmenu.SetProperty("ScrollWidth", Ucmenu_Scrollwidth);
            ucUcmenu.SetProperty("ScrollAlwaysVisible", Ucmenu_Scrollalwaysvisible);
            ucUcmenu.SetProperty("HideScrollInCompactMenu", Ucmenu_Hidescrollincompactmenu);
            ucUcmenu.SetProperty("SidebarMenuOptionsData", AV8DVelop_Menu);
            ucUcmenu.SetProperty("SidebarMenuUserData", AV33DVelop_Menu_UserData);
            ucUcmenu.Render(context, "dvelop.gxbootstrap.sidebarmenu", Ucmenu_Internalname, "UCMENU_MPAGEContainer");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 page-content page-content-back-image CellTableContentWithFooter", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablecontent_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            if ( context.isSpaRequest( ) )
            {
               enableOutput();
            }
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            /* Content placeholder */
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gx-content-placeholder");
            context.WriteHtmlText( ">") ;
            if ( ! isFullAjaxMode( ) )
            {
               getDataAreaObject().RenderHtmlContent();
            }
            context.WriteHtmlText( "</div>") ;
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 MasterFooterCellVMSidebarImage page-content", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablefooter_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "Right", "top", "", "", "div");
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblTextblockfooter_Internalname, "MaxiHogar S.R.L - copyright 2019", "", "", lblTextblockfooter_Jsonclick, "'"+""+"'"+",true,"+"'"+"E_MPAGE."+"'", "", "FooterText", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\WorkWithPlusMasterPage.htm");
            GxWebStd.gx_div_end( context, "Right", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucUcmessage.Render(context, "dvelop.dvmessage", Ucmessage_Internalname, "UCMESSAGE_MPAGEContainer");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucUctooltip.Render(context, "dvelop.gxbootstrap.tooltip", Uctooltip_Internalname, "UCTOOLTIP_MPAGEContainer");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucWwputilities.SetProperty("EnableFixObjectFitCover", Wwputilities_Enablefixobjectfitcover);
            ucWwputilities.SetProperty("EnableConvertComboToBootstrapSelect", Wwputilities_Enableconvertcombotobootstrapselect);
            ucWwputilities.Render(context, "dvelop.workwithplusutilities_f5", Wwputilities_Internalname, "WWPUTILITIES_MPAGEContainer");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
         }
         wbLoad = true;
      }

      protected void START0L2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUP0L0( ) ;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            if ( getDataAreaObject().ExecuteStartEvent() != 0 )
            {
               setAjaxCallMode();
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
      }

      protected void WS0L2( )
      {
         START0L2( ) ;
         EVT0L2( ) ;
      }

      protected void EVT0L2( )
      {
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) && ! wbErr )
            {
               /* Read Web Panel buttons. */
               sEvt = cgiGet( "_EventName");
               EvtGridId = cgiGet( "_EventGridId");
               EvtRowId = cgiGet( "_EventRowId");
               if ( StringUtil.Len( sEvt) > 0 )
               {
                  sEvtType = StringUtil.Left( sEvt, 1);
                  sEvt = StringUtil.Right( sEvt, (short)(StringUtil.Len( sEvt)-1));
                  if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                  {
                     sEvtType = StringUtil.Right( sEvt, 1);
                     if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                     {
                        sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                        if ( StringUtil.StrCmp(sEvt, "RFR_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                        }
                        else if ( StringUtil.StrCmp(sEvt, "DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                           E110L2 ();
                        }
                        else if ( StringUtil.StrCmp(sEvt, "START_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                           /* Execute user event: Start */
                           E120L2 ();
                        }
                        else if ( StringUtil.StrCmp(sEvt, "REFRESH_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                           /* Execute user event: Refresh */
                           E130L2 ();
                        }
                        else if ( StringUtil.StrCmp(sEvt, "LOAD_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                           /* Execute user event: Load */
                           E140L2 ();
                        }
                        else if ( StringUtil.StrCmp(sEvt, "ENTER_MPAGE") == 0 )
                        {
                           context.wbHandled = 1;
                           if ( ! wbErr )
                           {
                              Rfr0gs = false;
                              if ( ! Rfr0gs )
                              {
                              }
                              dynload_actions( ) ;
                           }
                           /* No code required for Cancel button. It is implemented as the Reset button. */
                        }
                        else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                        {
                           context.wbHandled = 1;
                           dynload_actions( ) ;
                           dynload_actions( ) ;
                        }
                     }
                     else
                     {
                     }
                  }
                  if ( context.wbHandled == 0 )
                  {
                     getDataAreaObject().DispatchEvents();
                  }
                  context.wbHandled = 1;
               }
            }
         }
      }

      protected void WE0L2( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               RenderHtmlCloseForm0L2( ) ;
            }
         }
      }

      protected void PA0L2( )
      {
         if ( nDonePA == 0 )
         {
            if ( String.IsNullOrEmpty(StringUtil.RTrim( context.GetCookie( "GX_SESSION_ID"))) )
            {
               gxcookieaux = context.SetCookie( "GX_SESSION_ID", Encrypt64( Crypto.GetEncryptionKey( ), Crypto.GetServerKey( )), "", (DateTime)(DateTime.MinValue), "", 0);
            }
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            toggleJsOutput = isJsOutputEnabled( );
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            init_web_controls( ) ;
            if ( toggleJsOutput )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
            if ( ! context.isAjaxRequest( ) )
            {
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void send_integrity_hashes( )
      {
      }

      protected void clear_multi_value_controls( )
      {
         if ( context.isAjaxRequest( ) )
         {
            dynload_actions( ) ;
         }
      }

      protected void fix_multi_value_controls( )
      {
      }

      public void Refresh( )
      {
         send_integrity_hashes( ) ;
         RF0L2( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      protected void RF0L2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( ShowMPWhenPopUp( ) || ! context.isPopUpObject( ) )
         {
            /* Execute user event: Refresh */
            E130L2 ();
            gxdyncontrolsrefreshing = true;
            fix_multi_value_controls( ) ;
            gxdyncontrolsrefreshing = false;
         }
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            /* Execute user event: Load */
            E140L2 ();
            WB0L0( ) ;
            if ( context.isSpaRequest( ) )
            {
               enableOutput();
            }
         }
      }

      protected void send_integrity_lvl_hashes0L2( )
      {
      }

      protected void STRUP0L0( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E120L2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( "vADMINAGDATA_MPAGE"), AV5AdminAGData);
            ajax_req_read_hidden_sdt(cgiGet( "vDVELOP_MENU_MPAGE"), AV8DVelop_Menu);
            ajax_req_read_hidden_sdt(cgiGet( "vDVELOP_MENU_USERDATA_MPAGE"), AV33DVelop_Menu_UserData);
            /* Read variables values. */
            /* Read saved values. */
            Ddo_adminag_Icon = cgiGet( "DDO_ADMINAG_MPAGE_Icon");
            Ddo_adminag_Cls = cgiGet( "DDO_ADMINAG_MPAGE_Cls");
            Ddo_adminag_Titlecontrolalign = cgiGet( "DDO_ADMINAG_MPAGE_Titlecontrolalign");
            Ucmenu_Searchserviceurl = cgiGet( "UCMENU_MPAGE_Searchserviceurl");
            Ucmenu_Searchminchars = (int)(context.localUtil.CToN( cgiGet( "UCMENU_MPAGE_Searchminchars"), ",", "."));
            Ucmenu_Searchhelperdescription = cgiGet( "UCMENU_MPAGE_Searchhelperdescription");
            Ucmenu_Sidebarmainclass = cgiGet( "UCMENU_MPAGE_Sidebarmainclass");
            Ucmenu_Scrollwidth = (int)(context.localUtil.CToN( cgiGet( "UCMENU_MPAGE_Scrollwidth"), ",", "."));
            Ucmenu_Scrollalwaysvisible = StringUtil.StrToBool( cgiGet( "UCMENU_MPAGE_Scrollalwaysvisible"));
            Ucmenu_Hidescrollincompactmenu = StringUtil.StrToBool( cgiGet( "UCMENU_MPAGE_Hidescrollincompactmenu"));
            Wwputilities_Enablefixobjectfitcover = StringUtil.StrToBool( cgiGet( "WWPUTILITIES_MPAGE_Enablefixobjectfitcover"));
            Wwputilities_Enableconvertcombotobootstrapselect = StringUtil.StrToBool( cgiGet( "WWPUTILITIES_MPAGE_Enableconvertcombotobootstrapselect"));
            Ddo_adminag_Activeeventkey = cgiGet( "DDO_ADMINAG_MPAGE_Activeeventkey");
            (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Caption = cgiGet( "FORM_MPAGE_Caption");
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E120L2 ();
         if (returnInSub) return;
      }

      protected void E120L2( )
      {
         /* Start Routine */
         (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Headerrawhtml = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\""+context.convertURL( (String)(context.GetImagePath( "d76b665a-aaf7-4e2f-be20-2aacb3c49f39", "", context.GetTheme( ))))+"\">";
         divLayoutmaintable_Class = "MainContainerWithFooter";
         context.httpAjaxContext.ajax_rsp_assign_prop("", true, divLayoutmaintable_Internalname, "Class", divLayoutmaintable_Class, true);
         AV20GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context).get();
         if ( AV20GAMApplication.gxTpr_Mainmenuid == 0 )
         {
            new GeneXus.Programs.wwpbaseobjects.initializegammenuexample(context ).execute( ) ;
            CallWebObject(formatLink("wwpbaseobjects.home.aspx") );
            context.wjLocDisableFrm = 1;
         }
         AV21GAMMenuAdditionalParameters.gxTpr_Loadproperties = true;
         AV22GAMMEnuOptionList = AV20GAMApplication.getusermainmenu(AV21GAMMenuAdditionalParameters, out  AV25GAMErrorCollection);
         GXt_objcol_SdtDVelop_Menu_Item1 = AV8DVelop_Menu;
         new GeneXus.Programs.wwpbaseobjects.loadmenu_gammenunegro(context ).execute(  AV22GAMMEnuOptionList.gxTpr_Nodes,  AV20GAMApplication.gxTpr_Mainmenuid,  0, out  GXt_objcol_SdtDVelop_Menu_Item1) ;
         AV8DVelop_Menu = GXt_objcol_SdtDVelop_Menu_Item1;
         Ddo_adminag_Icon = context.convertURL( (String)(context.GetImagePath( "a8e64609-d2a6-4834-b32c-e2cbea9cf2b8", "", context.GetTheme( ))));
         ucDdo_adminag.SendProperty(context, "", true, Ddo_adminag_Internalname, "Icon", Ddo_adminag_Icon);
         AV5AdminAGData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         GXt_boolean2 = AV36TempBoolean;
         new GeneXus.Programs.wwpbaseobjects.secgamisauthbyfunctionalitykey(context ).execute(  "gamexamplechangeyourpassword_Execute", out  GXt_boolean2) ;
         AV36TempBoolean = GXt_boolean2;
         if ( AV36TempBoolean )
         {
            AV6AdminAGDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
            AV6AdminAGDataItem.gxTpr_Title = "Cambiar contraseña";
            AV6AdminAGDataItem.gxTpr_Fonticon = "fa fa-lock FontIconTopRightActions";
            AV6AdminAGDataItem.gxTpr_Link = formatLink("gamchangeyourpassword.aspx") ;
            AV6AdminAGDataItem.gxTpr_Isdivider = false;
            AV5AdminAGData.Add(AV6AdminAGDataItem, 0);
         }
         AV6AdminAGDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV6AdminAGDataItem.gxTpr_Title = "Salir";
         AV6AdminAGDataItem.gxTpr_Fonticon = "fas fa-sign-out-alt FontIconTopRightActions";
         AV6AdminAGDataItem.gxTpr_Eventkey = "ActionLogOut";
         AV6AdminAGDataItem.gxTpr_Isdivider = false;
         AV5AdminAGData.Add(AV6AdminAGDataItem, 0);
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV37WWPContext) ;
         AV41GXLvl43 = 0;
         /* Using cursor H000L2 */
         pr_default.execute(0, new Object[] {AV37WWPContext.gxTpr_User});
         while ( (pr_default.getStatus(0) != 101) )
         {
            A41UsuID = H000L2_A41UsuID[0];
            A40000UsuFoto_GXI = H000L2_A40000UsuFoto_GXI[0];
            n40000UsuFoto_GXI = H000L2_n40000UsuFoto_GXI[0];
            A992UsuFoto = H000L2_A992UsuFoto[0];
            n992UsuFoto = H000L2_n992UsuFoto[0];
            AV41GXLvl43 = 1;
            AV38UsuFoto = A992UsuFoto;
            AV42Usufoto_GXI = A40000UsuFoto_GXI;
            /* Exiting from a For First loop. */
            if (true) break;
         }
         pr_default.close(0);
         if ( AV41GXLvl43 == 0 )
         {
         }
         AV27GAMUser = new GeneXus.Programs.genexussecurity.SdtGAMUser(context).get();
         AV18UserName = (String.IsNullOrEmpty(StringUtil.RTrim( AV27GAMUser.gxTpr_Firstname)) ? AV27GAMUser.gxTpr_Name : StringUtil.Trim( AV27GAMUser.gxTpr_Firstname)+" "+StringUtil.Trim( AV27GAMUser.gxTpr_Lastname));
         AV23GAMRoleCollection = new GeneXus.Programs.genexussecurity.SdtGAMSession(context).getroles(out  AV25GAMErrorCollection);
         AV43GXV1 = 1;
         while ( AV43GXV1 <= AV23GAMRoleCollection.Count )
         {
            AV24GAMRole = ((GeneXus.Programs.genexussecurity.SdtGAMRole)AV23GAMRoleCollection.Item(AV43GXV1));
            if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV16RolesDescriptions)) )
            {
               AV16RolesDescriptions = AV16RolesDescriptions + ", ";
               context.httpAjaxContext.ajax_rsp_assign_attri("", true, "AV16RolesDescriptions", AV16RolesDescriptions);
            }
            AV16RolesDescriptions = AV16RolesDescriptions + (String.IsNullOrEmpty(StringUtil.RTrim( AV24GAMRole.gxTpr_Description)) ? AV24GAMRole.gxTpr_Name : AV24GAMRole.gxTpr_Description);
            context.httpAjaxContext.ajax_rsp_assign_attri("", true, "AV16RolesDescriptions", AV16RolesDescriptions);
            AV43GXV1 = (int)(AV43GXV1+1);
         }
         AV33DVelop_Menu_UserData.gxTpr_Firstline = AV18UserName;
         AV33DVelop_Menu_UserData.gxTpr_Secondline = AV16RolesDescriptions;
         AV33DVelop_Menu_UserData.gxTpr_Photouri = AV42Usufoto_GXI;
         Ddo_adminag_Titlecontrolalign = "Left";
         ucDdo_adminag.SendProperty(context, "", true, Ddo_adminag_Internalname, "TitleControlAlign", Ddo_adminag_Titlecontrolalign);
         AV9AdminAGDataIndex = 1;
         AV6AdminAGDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV6AdminAGDataItem.gxTpr_Title = StringUtil.Format( "<li><div class=\"ddoMenuUserInfo\"><div class=\"UserImageCell\" style=\"\"><img src=\"%3\"></div><div class=\"UserInfoNameCell\"><span class=\"UserInfoName\">%1</span></div><div class=\"UserInfoRoleCell\"><span class=\"UserInfoRole\">%2</span></div></div></li>", AV18UserName, AV16RolesDescriptions, AV33DVelop_Menu_UserData.gxTpr_Photouri, "", "", "", "", "", "");
         AV6AdminAGDataItem.gxTpr_Eventkey = "<#RawHTML#>";
         AV6AdminAGDataItem.gxTpr_Isdivider = false;
         AV5AdminAGData.Add(AV6AdminAGDataItem, AV9AdminAGDataIndex);
      }

      protected void E110L2( )
      {
         /* Ddo_adminag_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_adminag_Activeeventkey, "ActionLogOut") == 0 )
         {
            /* Execute user subroutine: 'DO ACTIONLOGOUT' */
            S112 ();
            if (returnInSub) return;
         }
      }

      protected void S112( )
      {
         /* 'DO ACTIONLOGOUT' Routine */
         AV26isOk = new GeneXus.Programs.genexussecurity.SdtGAMRepository(context).logout(out  AV25GAMErrorCollection);
         AV28WebSession.Clear();
         new GeneXus.Programs.genexussecurity.SdtGAMRepository(context).applicationgohome("8d9934db-05db-4d64-adba-5e0466c3appU") ;
      }

      protected void E130L2( )
      {
         /* Refresh Routine */
         lblTextblocktitle_Caption = (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Caption;
         context.httpAjaxContext.ajax_rsp_assign_prop("", true, lblTextblocktitle_Internalname, "Caption", lblTextblocktitle_Caption, true);
         /*  Sending Event outputs  */
      }

      protected void nextLoad( )
      {
      }

      protected void E140L2( )
      {
         /* Load Routine */
      }

      protected void wb_table3_26_0L2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTableuserrole_Internalname, tblTableuserrole_Internalname, "", "TableAlignRightMaster", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td class='MasterTopIconsCell'>") ;
            /* User Defined Control */
            ucDdo_adminag.SetProperty("Caption", Ddo_adminag_Caption);
            ucDdo_adminag.SetProperty("Cls", Ddo_adminag_Cls);
            ucDdo_adminag.SetProperty("DropDownOptionsData", AV5AdminAGData);
            ucDdo_adminag.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_adminag_Internalname, "DDO_ADMINAG_MPAGEContainer");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table3_26_0L2e( true) ;
         }
         else
         {
            wb_table3_26_0L2e( false) ;
         }
      }

      protected void wb_table2_19_0L2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblUnnamedtable3_Internalname, tblUnnamedtable3_Internalname, "", "", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td class='ShowMenuImageCellCircle'>") ;
            /* Active images/pictures */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 22,'',true,'',0)\"";
            ClassString = "ImageMenuCircle";
            StyleString = "";
            sImgUrl = (String)(context.GetImagePath( "fd4cb731-5f06-461a-b2b2-d6aa11fb2e2c", "", context.GetTheme( )));
            GxWebStd.gx_bitmap( context, imgShowmenu_Internalname, sImgUrl, "", "", "", context.GetTheme( ), 1, 1, "", "", 0, 0, 0, "px", 0, "px", 0, 0, 7, imgShowmenu_Jsonclick, "'"+""+"'"+",true,"+"'"+"e150l1_client"+"'", StyleString, ClassString, "", "", "", "", " "+"data-gx-image"+" "+TempTags, "", "", 1, false, false, context.GetImageSrcSet( sImgUrl), "HLP_WWPBaseObjects\\WorkWithPlusMasterPage.htm");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "<td>") ;
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblTextblocktitle_Internalname, lblTextblocktitle_Caption, "", "", lblTextblocktitle_Jsonclick, "'"+""+"'"+",true,"+"'"+"E_MPAGE."+"'", "", "TextBlockTitleMaterial", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\WorkWithPlusMasterPage.htm");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table2_19_0L2e( true) ;
         }
         else
         {
            wb_table2_19_0L2e( false) ;
         }
      }

      protected void wb_table1_12_0L2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblUnnamedtable2_Internalname, tblUnnamedtable2_Internalname, "", "TableLogo page-content", 0, "", "", 0, 0, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            /* Static images/pictures */
            ClassString = "ImageTopHeader";
            StyleString = "";
            sImgUrl = (String)(context.GetImagePath( "43a1711c-bbf0-4be4-9b9b-324f5e145b1c", "", context.GetTheme( )));
            GxWebStd.gx_bitmap( context, imgHeader_Internalname, sImgUrl, "", "", "", context.GetTheme( ), 1, 1, "", "", 0, 0, 0, "px", 0, "px", 0, 0, 0, "", "", StyleString, ClassString, "", "", "", "", " "+"data-gx-image"+" ", "", "", 1, false, false, context.GetImageSrcSet( sImgUrl), "HLP_WWPBaseObjects\\WorkWithPlusMasterPage.htm");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "<td>") ;
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblLogodsc_Internalname, "SiGMa", "", "", lblLogodsc_Jsonclick, "'"+""+"'"+",true,"+"'"+"E_MPAGE."+"'", "", "TextBlockLogo", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\WorkWithPlusMasterPage.htm");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table1_12_0L2e( true) ;
         }
         else
         {
            wb_table1_12_0L2e( false) ;
         }
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
      }

      public override String getresponse( String sGXDynURL )
      {
         initialize_properties( ) ;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         sDynURL = sGXDynURL;
         nGotPars = (short)(1);
         nGXWrapped = (short)(1);
         context.SetWrapped(true);
         PA0L2( ) ;
         WS0L2( ) ;
         WE0L2( ) ;
         this.cleanup();
         context.SetWrapped(false);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
      }

      public override void master_styles( )
      {
         define_styles( ) ;
      }

      protected void define_styles( )
      {
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddStyleSheetFile("DVelop/DVMessage/DVMessage.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/fontawesome_v5/css/font-awesome.min.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)(getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Jscriptsrc.Item(idxLst))), "?2019102711221119", true, true);
            idxLst = (int)(idxLst+1);
         }
         if ( ! outputEnabled )
         {
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
         }
         /* End function define_styles */
      }

      protected void include_jscripts( )
      {
         context.AddJavascriptSource("wwpbaseobjects/workwithplusmasterpage.js", "?2019102711221123", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/slimscroll/jquery.slimscroll.min.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/SidebarMenu/BootstrapSidebarMenuRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVMessage/pnotify.custom.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVMessage/DVMessageRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Tooltip/BootstrapTooltipRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         /* End function include_jscripts */
      }

      protected void init_web_controls( )
      {
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         imgHeader_Internalname = "HEADER_MPAGE";
         lblLogodsc_Internalname = "LOGODSC_MPAGE";
         tblUnnamedtable2_Internalname = "UNNAMEDTABLE2_MPAGE";
         imgShowmenu_Internalname = "SHOWMENU_MPAGE";
         lblTextblocktitle_Internalname = "TEXTBLOCKTITLE_MPAGE";
         tblUnnamedtable3_Internalname = "UNNAMEDTABLE3_MPAGE";
         Ddo_adminag_Internalname = "DDO_ADMINAG_MPAGE";
         tblTableuserrole_Internalname = "TABLEUSERROLE_MPAGE";
         divTableheader_Internalname = "TABLEHEADER_MPAGE";
         Ucmenu_Internalname = "UCMENU_MPAGE";
         divTablecontent_Internalname = "TABLECONTENT_MPAGE";
         divUnnamedtable1_Internalname = "UNNAMEDTABLE1_MPAGE";
         lblTextblockfooter_Internalname = "TEXTBLOCKFOOTER_MPAGE";
         divTablefooter_Internalname = "TABLEFOOTER_MPAGE";
         Ucmessage_Internalname = "UCMESSAGE_MPAGE";
         Uctooltip_Internalname = "UCTOOLTIP_MPAGE";
         Wwputilities_Internalname = "WWPUTILITIES_MPAGE";
         divTablemain_Internalname = "TABLEMAIN_MPAGE";
         divLayoutmaintable_Internalname = "LAYOUTMAINTABLE_MPAGE";
         (getDataAreaObject() == null ? Form : getDataAreaObject().GetForm()).Internalname = "FORM_MPAGE";
      }

      public override void initialize_properties( )
      {
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         lblTextblocktitle_Caption = " Title";
         divLayoutmaintable_Class = "Table";
         Wwputilities_Enableconvertcombotobootstrapselect = Convert.ToBoolean( -1);
         Wwputilities_Enablefixobjectfitcover = Convert.ToBoolean( -1);
         Ucmenu_Hidescrollincompactmenu = Convert.ToBoolean( 0);
         Ucmenu_Scrollalwaysvisible = Convert.ToBoolean( -1);
         Ucmenu_Scrollwidth = 5;
         Ucmenu_Sidebarmainclass = "page-sidebar sidebar-fixed sidebar-back-image";
         Ucmenu_Searchhelperdescription = "WWP_SearchMenuOption";
         Ucmenu_Searchminchars = 0;
         Ucmenu_Searchserviceurl = "xxx";
         Ddo_adminag_Titlecontrolalign = "Automatic";
         Ddo_adminag_Cls = "ActionGroupHeader";
         Ddo_adminag_Icon = "";
         Contentholder.setDataArea(getDataAreaObject());
         if ( context.isSpaRequest( ) )
         {
            enableJsOutput();
         }
      }

      public override bool SupportAjaxEvent( )
      {
         return true ;
      }

      public override void InitializeDynEvents( )
      {
         setEventMetadata("REFRESH_MPAGE","{handler:'Refresh',iparms:[{ctrl:'FORM_MPAGE',prop:'Caption'}]");
         setEventMetadata("REFRESH_MPAGE",",oparms:[{av:'lblTextblocktitle_Caption',ctrl:'TEXTBLOCKTITLE_MPAGE',prop:'Caption'}]}");
         setEventMetadata("DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE","{handler:'E110L2',iparms:[{av:'Ddo_adminag_Activeeventkey',ctrl:'DDO_ADMINAG_MPAGE',prop:'ActiveEventKey'}]");
         setEventMetadata("DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE",",oparms:[]}");
         setEventMetadata("DOSHOWMENU_MPAGE","{handler:'E150L1',iparms:[]");
         setEventMetadata("DOSHOWMENU_MPAGE",",oparms:[]}");
         return  ;
      }

      public override void cleanup( )
      {
         flushBuffer();
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         Contentholder = new GXDataAreaControl();
         Ddo_adminag_Activeeventkey = "";
         GXKey = "";
         AV5AdminAGData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV8DVelop_Menu = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA");
         AV33DVelop_Menu_UserData = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_UserData(context);
         sPrefix = "";
         ucUcmenu = new GXUserControl();
         lblTextblockfooter_Jsonclick = "";
         ucUcmessage = new GXUserControl();
         ucUctooltip = new GXUserControl();
         ucWwputilities = new GXUserControl();
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         AV20GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context);
         AV21GAMMenuAdditionalParameters = new GeneXus.Programs.genexussecurity.SdtGAMMenuAdditionalParameters(context);
         AV22GAMMEnuOptionList = new GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList(context);
         AV25GAMErrorCollection = new GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMError>( context, "GeneXus.Programs.genexussecurity.SdtGAMError", "GeneXus.Programs");
         GXt_objcol_SdtDVelop_Menu_Item1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA");
         ucDdo_adminag = new GXUserControl();
         AV6AdminAGDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV37WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context);
         scmdbuf = "";
         H000L2_A41UsuID = new long[1] ;
         H000L2_A40000UsuFoto_GXI = new String[] {""} ;
         H000L2_n40000UsuFoto_GXI = new bool[] {false} ;
         H000L2_A992UsuFoto = new String[] {""} ;
         H000L2_n992UsuFoto = new bool[] {false} ;
         A40000UsuFoto_GXI = "";
         A992UsuFoto = "";
         AV38UsuFoto = "";
         AV42Usufoto_GXI = "";
         AV27GAMUser = new GeneXus.Programs.genexussecurity.SdtGAMUser(context);
         AV18UserName = "";
         AV23GAMRoleCollection = new GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMRole>( context, "GeneXus.Programs.genexussecurity.SdtGAMRole", "GeneXus.Programs");
         AV24GAMRole = new GeneXus.Programs.genexussecurity.SdtGAMRole(context);
         AV16RolesDescriptions = "";
         AV28WebSession = context.GetSession();
         sStyleString = "";
         Ddo_adminag_Caption = "";
         TempTags = "";
         ClassString = "";
         StyleString = "";
         sImgUrl = "";
         imgShowmenu_Jsonclick = "";
         lblTextblocktitle_Jsonclick = "";
         lblLogodsc_Jsonclick = "";
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         sDynURL = "";
         Form = new GXWebForm();
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.wwpbaseobjects.workwithplusmasterpage__default(),
            new Object[][] {
                new Object[] {
               H000L2_A41UsuID, H000L2_A40000UsuFoto_GXI, H000L2_n40000UsuFoto_GXI, H000L2_A992UsuFoto, H000L2_n992UsuFoto
               }
            }
         );
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private short initialized ;
      private short GxWebError ;
      private short wbEnd ;
      private short wbStart ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short AV41GXLvl43 ;
      private short AV9AdminAGDataIndex ;
      private short nGotPars ;
      private short nGXWrapped ;
      private int Ucmenu_Searchminchars ;
      private int Ucmenu_Scrollwidth ;
      private int AV43GXV1 ;
      private int idxLst ;
      private long A41UsuID ;
      private String Ddo_adminag_Activeeventkey ;
      private String GXKey ;
      private String Ddo_adminag_Icon ;
      private String Ddo_adminag_Cls ;
      private String Ddo_adminag_Titlecontrolalign ;
      private String Ucmenu_Searchserviceurl ;
      private String Ucmenu_Searchhelperdescription ;
      private String Ucmenu_Sidebarmainclass ;
      private String sPrefix ;
      private String divLayoutmaintable_Internalname ;
      private String divLayoutmaintable_Class ;
      private String divTablemain_Internalname ;
      private String divTableheader_Internalname ;
      private String divUnnamedtable1_Internalname ;
      private String Ucmenu_Internalname ;
      private String divTablecontent_Internalname ;
      private String divTablefooter_Internalname ;
      private String lblTextblockfooter_Internalname ;
      private String lblTextblockfooter_Jsonclick ;
      private String Ucmessage_Internalname ;
      private String Uctooltip_Internalname ;
      private String Wwputilities_Internalname ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String Ddo_adminag_Internalname ;
      private String scmdbuf ;
      private String lblTextblocktitle_Caption ;
      private String lblTextblocktitle_Internalname ;
      private String sStyleString ;
      private String tblTableuserrole_Internalname ;
      private String Ddo_adminag_Caption ;
      private String tblUnnamedtable3_Internalname ;
      private String TempTags ;
      private String ClassString ;
      private String StyleString ;
      private String sImgUrl ;
      private String imgShowmenu_Internalname ;
      private String imgShowmenu_Jsonclick ;
      private String lblTextblocktitle_Jsonclick ;
      private String tblUnnamedtable2_Internalname ;
      private String imgHeader_Internalname ;
      private String lblLogodsc_Internalname ;
      private String lblLogodsc_Jsonclick ;
      private String sDynURL ;
      private bool Ucmenu_Scrollalwaysvisible ;
      private bool Ucmenu_Hidescrollincompactmenu ;
      private bool Wwputilities_Enablefixobjectfitcover ;
      private bool Wwputilities_Enableconvertcombotobootstrapselect ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool toggleJsOutput ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool AV36TempBoolean ;
      private bool GXt_boolean2 ;
      private bool n40000UsuFoto_GXI ;
      private bool n992UsuFoto ;
      private bool AV26isOk ;
      private String A40000UsuFoto_GXI ;
      private String AV42Usufoto_GXI ;
      private String AV18UserName ;
      private String AV16RolesDescriptions ;
      private String A992UsuFoto ;
      private String AV38UsuFoto ;
      private GXUserControl ucUcmenu ;
      private GXUserControl ucUcmessage ;
      private GXUserControl ucUctooltip ;
      private GXUserControl ucWwputilities ;
      private GXUserControl ucDdo_adminag ;
      private IGxDataStore dsGAM ;
      private IGxDataStore dsAFIP ;
      private IGxDataStore dsDefault ;
      private GXDataAreaControl Contentholder ;
      private IDataStoreProvider pr_default ;
      private long[] H000L2_A41UsuID ;
      private String[] H000L2_A40000UsuFoto_GXI ;
      private bool[] H000L2_n40000UsuFoto_GXI ;
      private String[] H000L2_A992UsuFoto ;
      private bool[] H000L2_n992UsuFoto ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private IGxSession AV28WebSession ;
      private GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMError> AV25GAMErrorCollection ;
      private GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMRole> AV23GAMRoleCollection ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV5AdminAGData ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> AV8DVelop_Menu ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> GXt_objcol_SdtDVelop_Menu_Item1 ;
      private GXWebForm Form ;
      private GeneXus.Programs.genexussecurity.SdtGAMApplication AV20GAMApplication ;
      private GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList AV22GAMMEnuOptionList ;
      private GeneXus.Programs.genexussecurity.SdtGAMMenuAdditionalParameters AV21GAMMenuAdditionalParameters ;
      private GeneXus.Programs.genexussecurity.SdtGAMRole AV24GAMRole ;
      private GeneXus.Programs.genexussecurity.SdtGAMUser AV27GAMUser ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_UserData AV33DVelop_Menu_UserData ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item AV6AdminAGDataItem ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV37WWPContext ;
   }

   public class workwithplusmasterpage__default : DataStoreHelperBase, IDataStoreHelper
   {
      public ICursor[] getCursors( )
      {
         cursorDefinitions();
         return new Cursor[] {
          new ForEachCursor(def[0])
       };
    }

    private static CursorDef[] def;
    private void cursorDefinitions( )
    {
       if ( def == null )
       {
          Object[] prmH000L2 ;
          prmH000L2 = new Object[] {
          new Object[] {"@AV37WWPContext__User",SqlDbType.Decimal,11,0}
          } ;
          def= new CursorDef[] {
              new CursorDef("H000L2", "SELECT [UsuID], [UsuFoto_GXI], [UsuFoto] FROM [Usuario] WHERE [UsuID] = @AV37WWPContext__User ORDER BY [UsuID] ",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmH000L2,1, GxCacheFrequency.OFF ,false,true )
          };
       }
    }

    public void getResults( int cursor ,
                            IFieldGetter rslt ,
                            Object[] buf )
    {
       switch ( cursor )
       {
             case 0 :
                ((long[]) buf[0])[0] = rslt.getLong(1) ;
                ((String[]) buf[1])[0] = rslt.getMultimediaUri(2) ;
                ((bool[]) buf[2])[0] = rslt.wasNull(2);
                ((String[]) buf[3])[0] = rslt.getMultimediaFile(3, rslt.getVarchar(2)) ;
                ((bool[]) buf[4])[0] = rslt.wasNull(3);
                return;
       }
    }

    public void setParameters( int cursor ,
                               IFieldSetter stmt ,
                               Object[] parms )
    {
       switch ( cursor )
       {
             case 0 :
                stmt.SetParameter(1, (long)parms[0]);
                return;
       }
    }

 }

}
