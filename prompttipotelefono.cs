/*
               File: PromptTipoTelefono
        Description: Selecciona Tipo Telefono
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:14:12.5
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
using GeneXus.Http.Server;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs {
   public class prompttipotelefono : GXDataArea, System.Web.SessionState.IRequiresSessionState
   {
      public prompttipotelefono( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public prompttipotelefono( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( ref int aP0_InOutTipTelId ,
                           ref String aP1_InOutTipTelNom )
      {
         this.AV20InOutTipTelId = aP0_InOutTipTelId;
         this.AV21InOutTipTelNom = aP1_InOutTipTelNom;
         executePrivate();
         aP0_InOutTipTelId=this.AV20InOutTipTelId;
         aP1_InOutTipTelNom=this.AV21InOutTipTelNom;
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
         if ( nGotPars == 0 )
         {
            entryPointCalled = false;
            gxfirstwebparm = GetNextPar( );
            gxfirstwebparm_bkp = gxfirstwebparm;
            gxfirstwebparm = DecryptAjaxCall( gxfirstwebparm);
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            if ( StringUtil.StrCmp(gxfirstwebparm, "dyncall") == 0 )
            {
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               dyncall( GetNextPar( )) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxEvt") == 0 )
            {
               setAjaxEventMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxfullajaxEvt") == 0 )
            {
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Grid") == 0 )
            {
               nRC_GXsfl_24 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_24_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_24_idx = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrGrid_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Grid") == 0 )
            {
               subGrid_Rows = (int)(NumberUtil.Val( GetNextPar( ), "."));
               AV10FilterFullText = GetNextPar( );
               AV8OrderedBy = (short)(NumberUtil.Val( GetNextPar( ), "."));
               AV9OrderedDsc = StringUtil.StrToBool( GetNextPar( ));
               AV12ddo_TipTelIdTitleControlIdToReplace = GetNextPar( );
               AV14ddo_TipTelNomTitleControlIdToReplace = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               return  ;
            }
            else
            {
               if ( ! IsValidAjaxCall( false) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = gxfirstwebparm_bkp;
            }
            if ( ! entryPointCalled && ! ( isAjaxCallMode( ) || isFullAjaxMode( ) ) )
            {
               AV20InOutTipTelId = (int)(NumberUtil.Val( gxfirstwebparm, "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV20InOutTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV20InOutTipTelId), 9, 0)));
               if ( StringUtil.StrCmp(gxfirstwebparm, "viewer") != 0 )
               {
                  AV21InOutTipTelNom = GetNextPar( );
                  context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV21InOutTipTelNom", AV21InOutTipTelNom);
               }
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
         if ( ! context.IsLocalStorageSupported( ) )
         {
            context.PushCurrentUrl();
         }
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
            MasterPageObj = (GXMasterPage) ClassLoader.GetInstance("wwpbaseobjects.workwithplusmasterpageprompt", "GeneXus.Programs.wwpbaseobjects.workwithplusmasterpageprompt", new Object[] {new GxContext( context.handle, context.DataStores, context.HttpContext)});
            MasterPageObj.setDataArea(this,true);
            ValidateSpaRequest();
            MasterPageObj.webExecute();
            if ( ( GxWebError == 0 ) && context.isAjaxRequest( ) )
            {
               enableOutput();
               if ( ! context.isAjaxRequest( ) )
               {
                  context.GX_webresponse.AppendHeader("Cache-Control", "no-store");
               }
               if ( ! context.WillRedirect( ) )
               {
                  context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               }
               else
               {
                  if ( context.isAjaxRequest( ) )
                  {
                     disableOutput();
                  }
                  RenderHtmlHeaders( ) ;
                  context.Redirect( context.wjLoc );
                  context.DispatchAjaxCommands();
               }
            }
         }
         this.cleanup();
      }

      public override short ExecuteStartEvent( )
      {
         PA0T2( ) ;
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            START0T2( ) ;
         }
         return gxajaxcallmode ;
      }

      public override void RenderHtmlHeaders( )
      {
         GxWebStd.gx_html_headers( context, 0, "", "", Form.Meta, Form.Metaequiv, true);
      }

      public override void RenderHtmlOpenForm( )
      {
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.WriteHtmlText( "<title>") ;
         context.SendWebValue( Form.Caption) ;
         context.WriteHtmlTextNl( "</title>") ;
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         if ( StringUtil.Len( sDynURL) > 0 )
         {
            context.WriteHtmlText( "<BASE href=\""+sDynURL+"\" />") ;
         }
         define_styles( ) ;
         if ( nGXWrapped != 1 )
         {
            MasterPageObj.master_styles();
         }
         if ( ( ( context.GetBrowserType( ) == 1 ) || ( context.GetBrowserType( ) == 5 ) ) && ( StringUtil.StrCmp(context.GetBrowserVersion( ), "7.0") == 0 ) )
         {
            context.AddJavascriptSource("json2.js", "?"+context.GetBuildNumber( 135614), false, true);
         }
         context.AddJavascriptSource("jquery.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxgral.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxcfg.js", "?2019103019141214", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.AddJavascriptSource("DVelop/DVPaginationBar/DVPaginationBarRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         context.WriteHtmlText( Form.Headerrawhtml) ;
         context.CloseHtmlHeader();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         FormProcess = " data-HasEnter=\"true\" data-Skiponenter=\"false\"";
         context.WriteHtmlText( "<body ") ;
         bodyStyle = "" + "background-color:" + context.BuildHTMLColor( Form.Backcolor) + ";color:" + context.BuildHTMLColor( Form.Textcolor) + ";";
         if ( nGXWrapped == 0 )
         {
            bodyStyle = bodyStyle + "-moz-opacity:0;opacity:0;";
         }
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( Form.Background)) ) )
         {
            bodyStyle = bodyStyle + " background-image:url(" + context.convertURL( Form.Background) + ")";
         }
         context.WriteHtmlText( " "+"class=\"form-horizontal FormNoBackgroundColor\""+" "+ "style='"+bodyStyle+"'") ;
         context.WriteHtmlText( FormProcess+">") ;
         context.skipLines(1);
         context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"form-horizontal FormNoBackgroundColor\" data-gx-class=\"form-horizontal FormNoBackgroundColor\" novalidate action=\""+formatLink("prompttipotelefono.aspx") + "?" + UrlEncode("" +AV20InOutTipTelId) + "," + UrlEncode(StringUtil.RTrim(AV21InOutTipTelNom))+"\">") ;
         GxWebStd.gx_hidden_field( context, "_EventName", "");
         GxWebStd.gx_hidden_field( context, "_EventGridId", "");
         GxWebStd.gx_hidden_field( context, "_EventRowId", "");
         context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Class", "form-horizontal FormNoBackgroundColor", true);
         toggleJsOutput = isJsOutputEnabled( );
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
      }

      protected void send_integrity_footer_hashes( )
      {
         GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
      }

      protected void SendCloseFormHiddens( )
      {
         /* Send hidden variables. */
         GxWebStd.gx_hidden_field( context, "GXH_vFILTERFULLTEXT", AV10FilterFullText);
         GxWebStd.gx_hidden_field( context, "GXH_vORDEREDBY", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV8OrderedBy), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GXH_vORDEREDDSC", StringUtil.BoolToStr( AV9OrderedDsc));
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_24", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_24), 8, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "vGRIDCURRENTPAGE", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV17GridCurrentPage), 10, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "vGRIDPAGECOUNT", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV18GridPageCount), 10, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vDDO_TITLESETTINGSICONS", AV15DDO_TitleSettingsIcons);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vDDO_TITLESETTINGSICONS", AV15DDO_TitleSettingsIcons);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vTIPTELIDTITLEFILTERDATA", AV11TipTelIdTitleFilterData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vTIPTELIDTITLEFILTERDATA", AV11TipTelIdTitleFilterData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vTIPTELNOMTITLEFILTERDATA", AV13TipTelNomTitleFilterData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vTIPTELNOMTITLEFILTERDATA", AV13TipTelNomTitleFilterData);
         }
         GxWebStd.gx_hidden_field( context, "vINOUTTIPTELID", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV20InOutTipTelId), 9, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "vINOUTTIPTELNOM", StringUtil.RTrim( AV21InOutTipTelNom));
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Class", StringUtil.RTrim( Gridpaginationbar_Class));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showfirst", StringUtil.BoolToStr( Gridpaginationbar_Showfirst));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showprevious", StringUtil.BoolToStr( Gridpaginationbar_Showprevious));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Shownext", StringUtil.BoolToStr( Gridpaginationbar_Shownext));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showlast", StringUtil.BoolToStr( Gridpaginationbar_Showlast));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagestoshow", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Pagestoshow), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagingbuttonsposition", StringUtil.RTrim( Gridpaginationbar_Pagingbuttonsposition));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagingcaptionposition", StringUtil.RTrim( Gridpaginationbar_Pagingcaptionposition));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Emptygridclass", StringUtil.RTrim( Gridpaginationbar_Emptygridclass));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselector", StringUtil.BoolToStr( Gridpaginationbar_Rowsperpageselector));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageoptions", StringUtil.RTrim( Gridpaginationbar_Rowsperpageoptions));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Previous", StringUtil.RTrim( Gridpaginationbar_Previous));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Next", StringUtil.RTrim( Gridpaginationbar_Next));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Caption", StringUtil.RTrim( Gridpaginationbar_Caption));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Emptygridcaption", StringUtil.RTrim( Gridpaginationbar_Emptygridcaption));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpagecaption", StringUtil.RTrim( Gridpaginationbar_Rowsperpagecaption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Caption", StringUtil.RTrim( Ddo_tiptelid_Caption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Tooltip", StringUtil.RTrim( Ddo_tiptelid_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Cls", StringUtil.RTrim( Ddo_tiptelid_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Dropdownoptionstype", StringUtil.RTrim( Ddo_tiptelid_Dropdownoptionstype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Titlecontrolidtoreplace", StringUtil.RTrim( Ddo_tiptelid_Titlecontrolidtoreplace));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includesortasc", StringUtil.BoolToStr( Ddo_tiptelid_Includesortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includesortdsc", StringUtil.BoolToStr( Ddo_tiptelid_Includesortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortedstatus", StringUtil.RTrim( Ddo_tiptelid_Sortedstatus));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includefilter", StringUtil.BoolToStr( Ddo_tiptelid_Includefilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includedatalist", StringUtil.BoolToStr( Ddo_tiptelid_Includedatalist));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortasc", StringUtil.RTrim( Ddo_tiptelid_Sortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortdsc", StringUtil.RTrim( Ddo_tiptelid_Sortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Cleanfilter", StringUtil.RTrim( Ddo_tiptelid_Cleanfilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Searchbuttontext", StringUtil.RTrim( Ddo_tiptelid_Searchbuttontext));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Caption", StringUtil.RTrim( Ddo_tiptelnom_Caption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Tooltip", StringUtil.RTrim( Ddo_tiptelnom_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Cls", StringUtil.RTrim( Ddo_tiptelnom_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Dropdownoptionstype", StringUtil.RTrim( Ddo_tiptelnom_Dropdownoptionstype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Titlecontrolidtoreplace", StringUtil.RTrim( Ddo_tiptelnom_Titlecontrolidtoreplace));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includesortasc", StringUtil.BoolToStr( Ddo_tiptelnom_Includesortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includesortdsc", StringUtil.BoolToStr( Ddo_tiptelnom_Includesortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortedstatus", StringUtil.RTrim( Ddo_tiptelnom_Sortedstatus));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includefilter", StringUtil.BoolToStr( Ddo_tiptelnom_Includefilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includedatalist", StringUtil.BoolToStr( Ddo_tiptelnom_Includedatalist));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortasc", StringUtil.RTrim( Ddo_tiptelnom_Sortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortdsc", StringUtil.RTrim( Ddo_tiptelnom_Sortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Cleanfilter", StringUtil.RTrim( Ddo_tiptelnom_Cleanfilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Searchbuttontext", StringUtil.RTrim( Ddo_tiptelnom_Searchbuttontext));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Selectedpage", StringUtil.RTrim( Gridpaginationbar_Selectedpage));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Activeeventkey", StringUtil.RTrim( Ddo_tiptelid_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Activeeventkey", StringUtil.RTrim( Ddo_tiptelnom_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Selectedpage", StringUtil.RTrim( Gridpaginationbar_Selectedpage));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Activeeventkey", StringUtil.RTrim( Ddo_tiptelid_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Activeeventkey", StringUtil.RTrim( Ddo_tiptelnom_Activeeventkey));
      }

      public override void RenderHtmlCloseForm( )
      {
         SendCloseFormHiddens( ) ;
         GxWebStd.gx_hidden_field( context, "GX_FocusControl", GX_FocusControl);
         SendAjaxEncryptionKey();
         SendSecurityToken((String)(sPrefix));
         SendComponentObjects();
         SendServerCommands();
         SendState();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         context.WriteHtmlTextNl( "</form>") ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         include_jscripts( ) ;
      }

      public override void RenderHtmlContent( )
      {
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gx-ct-body"+" "+(String.IsNullOrEmpty(StringUtil.RTrim( Form.Class)) ? "form-horizontal FormNoBackgroundColor" : Form.Class)+"-fx");
            context.WriteHtmlText( ">") ;
            WE0T2( ) ;
            context.WriteHtmlText( "</div>") ;
         }
      }

      public override void DispatchEvents( )
      {
         EVT0T2( ) ;
      }

      public override bool HasEnterEvent( )
      {
         return true ;
      }

      public override GXWebForm GetForm( )
      {
         return Form ;
      }

      public override String GetSelfLink( )
      {
         return formatLink("prompttipotelefono.aspx") + "?" + UrlEncode("" +AV20InOutTipTelId) + "," + UrlEncode(StringUtil.RTrim(AV21InOutTipTelNom)) ;
      }

      public override String GetPgmname( )
      {
         return "PromptTipoTelefono" ;
      }

      public override String GetPgmdesc( )
      {
         return "Selecciona Tipo Telefono" ;
      }

      protected void WB0T0( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            if ( nGXWrapped == 1 )
            {
               RenderHtmlHeaders( ) ;
               RenderHtmlOpenForm( ) ;
            }
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, "", "", "", "false");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "Section", "left", "top", " "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divLayoutmaintable_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablemain_Internalname, 1, 0, "px", 0, "px", "TableMainPrompt", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 WWFiltersCell", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTableheader_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-xs", "left", "top", "", "", "div");
            wb_table1_12_0T2( true) ;
         }
         else
         {
            wb_table1_12_0T2( false) ;
         }
         return  ;
      }

      protected void wb_table1_12_0T2e( bool wbgen )
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
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 CellMarginPrompt GridNoBorderCell", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divGridtablewithpaginationbar_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /*  Grid Control  */
            GridContainer.SetWrapped(nGXWrapped);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"DivS\" data-gxgridid=\"24\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGrid_Internalname, subGrid_Internalname, "", "GridWithPaginationBar GridNoBorder WorkWith", 0, "", "", 1, 2, sStyleString, "", "", 0);
               /* Subfile titles */
               context.WriteHtmlText( "<tr") ;
               context.WriteHtmlTextNl( ">") ;
               if ( subGrid_Backcolorstyle == 0 )
               {
                  subGrid_Titlebackstyle = 0;
                  if ( StringUtil.Len( subGrid_Class) > 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Title";
                  }
               }
               else
               {
                  subGrid_Titlebackstyle = 1;
                  if ( subGrid_Backcolorstyle == 1 )
                  {
                     subGrid_Titlebackcolor = subGrid_Allbackcolor;
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"UniformTitle";
                     }
                  }
                  else
                  {
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Title";
                     }
                  }
               }
               context.WriteHtmlText( "<th align=\""+""+"\" "+" nowrap=\"nowrap\" "+" class=\""+"SelectAttribute ActionBaseColorAttribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               context.SendWebValue( "") ;
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"right"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               if ( edtTipTelId_Titleformat == 0 )
               {
                  context.SendWebValue( edtTipTelId_Title) ;
               }
               else
               {
                  context.WriteHtmlText( edtTipTelId_Title) ;
               }
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"left"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               if ( edtTipTelNom_Titleformat == 0 )
               {
                  context.SendWebValue( edtTipTelNom_Title) ;
               }
               else
               {
                  context.WriteHtmlText( edtTipTelNom_Title) ;
               }
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlTextNl( "</tr>") ;
               GridContainer.AddObjectProperty("GridName", "Grid");
            }
            else
            {
               if ( isAjaxCallMode( ) )
               {
                  GridContainer = new GXWebGrid( context);
               }
               else
               {
                  GridContainer.Clear();
               }
               GridContainer.SetWrapped(nGXWrapped);
               GridContainer.AddObjectProperty("GridName", "Grid");
               GridContainer.AddObjectProperty("Header", subGrid_Header);
               GridContainer.AddObjectProperty("Class", "GridWithPaginationBar GridNoBorder WorkWith");
               GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Sortable", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Sortable), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("CmpContext", "");
               GridContainer.AddObjectProperty("InMasterPage", "false");
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", context.convertURL( AV19Select));
               GridColumn.AddObjectProperty("Tooltiptext", StringUtil.RTrim( edtavSelect_Tooltiptext));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ".", "")));
               GridColumn.AddObjectProperty("Title", StringUtil.RTrim( edtTipTelId_Title));
               GridColumn.AddObjectProperty("Titleformat", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelId_Titleformat), 4, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.RTrim( A3TipTelNom));
               GridColumn.AddObjectProperty("Title", StringUtil.RTrim( edtTipTelNom_Title));
               GridColumn.AddObjectProperty("Titleformat", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelNom_Titleformat), 4, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectedindex), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowselection), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectioncolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowhovering), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Hoveringcolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowcollapsing), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 24 )
         {
            wbEnd = 0;
            nRC_GXsfl_24 = (int)(nGXsfl_24_idx-1);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
               }
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucGridpaginationbar.SetProperty("Class", Gridpaginationbar_Class);
            ucGridpaginationbar.SetProperty("ShowFirst", Gridpaginationbar_Showfirst);
            ucGridpaginationbar.SetProperty("ShowPrevious", Gridpaginationbar_Showprevious);
            ucGridpaginationbar.SetProperty("ShowNext", Gridpaginationbar_Shownext);
            ucGridpaginationbar.SetProperty("ShowLast", Gridpaginationbar_Showlast);
            ucGridpaginationbar.SetProperty("PagesToShow", Gridpaginationbar_Pagestoshow);
            ucGridpaginationbar.SetProperty("PagingButtonsPosition", Gridpaginationbar_Pagingbuttonsposition);
            ucGridpaginationbar.SetProperty("PagingCaptionPosition", Gridpaginationbar_Pagingcaptionposition);
            ucGridpaginationbar.SetProperty("EmptyGridClass", Gridpaginationbar_Emptygridclass);
            ucGridpaginationbar.SetProperty("RowsPerPageSelector", Gridpaginationbar_Rowsperpageselector);
            ucGridpaginationbar.SetProperty("RowsPerPageOptions", Gridpaginationbar_Rowsperpageoptions);
            ucGridpaginationbar.SetProperty("Previous", Gridpaginationbar_Previous);
            ucGridpaginationbar.SetProperty("Next", Gridpaginationbar_Next);
            ucGridpaginationbar.SetProperty("Caption", Gridpaginationbar_Caption);
            ucGridpaginationbar.SetProperty("EmptyGridCaption", Gridpaginationbar_Emptygridcaption);
            ucGridpaginationbar.SetProperty("RowsPerPageCaption", Gridpaginationbar_Rowsperpagecaption);
            ucGridpaginationbar.SetProperty("CurrentPage", AV17GridCurrentPage);
            ucGridpaginationbar.SetProperty("PageCount", AV18GridPageCount);
            ucGridpaginationbar.Render(context, "dvelop.dvpaginationbar", Gridpaginationbar_Internalname, "GRIDPAGINATIONBARContainer");
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
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divHtml_bottomauxiliarcontrols_Internalname, 1, 0, "px", 0, "px", "Section", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDdo_tiptelid.SetProperty("Caption", Ddo_tiptelid_Caption);
            ucDdo_tiptelid.SetProperty("Tooltip", Ddo_tiptelid_Tooltip);
            ucDdo_tiptelid.SetProperty("Cls", Ddo_tiptelid_Cls);
            ucDdo_tiptelid.SetProperty("DropDownOptionsType", Ddo_tiptelid_Dropdownoptionstype);
            ucDdo_tiptelid.SetProperty("IncludeSortASC", Ddo_tiptelid_Includesortasc);
            ucDdo_tiptelid.SetProperty("IncludeSortDSC", Ddo_tiptelid_Includesortdsc);
            ucDdo_tiptelid.SetProperty("IncludeFilter", Ddo_tiptelid_Includefilter);
            ucDdo_tiptelid.SetProperty("IncludeDataList", Ddo_tiptelid_Includedatalist);
            ucDdo_tiptelid.SetProperty("SortASC", Ddo_tiptelid_Sortasc);
            ucDdo_tiptelid.SetProperty("SortDSC", Ddo_tiptelid_Sortdsc);
            ucDdo_tiptelid.SetProperty("CleanFilter", Ddo_tiptelid_Cleanfilter);
            ucDdo_tiptelid.SetProperty("SearchButtonText", Ddo_tiptelid_Searchbuttontext);
            ucDdo_tiptelid.SetProperty("DropDownOptionsTitleSettingsIcons", AV15DDO_TitleSettingsIcons);
            ucDdo_tiptelid.SetProperty("DropDownOptionsData", AV11TipTelIdTitleFilterData);
            ucDdo_tiptelid.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_tiptelid_Internalname, "DDO_TIPTELIDContainer");
            /* Multiple line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 35,'',false,'" + sGXsfl_24_idx + "',0)\"";
            ClassString = "Attribute";
            StyleString = "";
            ClassString = "Attribute";
            StyleString = "";
            GxWebStd.gx_html_textarea( context, edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname, AV12ddo_TipTelIdTitleControlIdToReplace, "", TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,35);\"", 0, edtavDdo_tiptelidtitlecontrolidtoreplace_Visible, 1, 0, 80, "chr", 4, "row", StyleString, ClassString, "", "", "300", -1, 0, "", "", -1, true, "", "'"+""+"'"+",false,"+"'"+""+"'", 0, "HLP_PromptTipoTelefono.htm");
            /* User Defined Control */
            ucDdo_tiptelnom.SetProperty("Caption", Ddo_tiptelnom_Caption);
            ucDdo_tiptelnom.SetProperty("Tooltip", Ddo_tiptelnom_Tooltip);
            ucDdo_tiptelnom.SetProperty("Cls", Ddo_tiptelnom_Cls);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsType", Ddo_tiptelnom_Dropdownoptionstype);
            ucDdo_tiptelnom.SetProperty("IncludeSortASC", Ddo_tiptelnom_Includesortasc);
            ucDdo_tiptelnom.SetProperty("IncludeSortDSC", Ddo_tiptelnom_Includesortdsc);
            ucDdo_tiptelnom.SetProperty("IncludeFilter", Ddo_tiptelnom_Includefilter);
            ucDdo_tiptelnom.SetProperty("IncludeDataList", Ddo_tiptelnom_Includedatalist);
            ucDdo_tiptelnom.SetProperty("SortASC", Ddo_tiptelnom_Sortasc);
            ucDdo_tiptelnom.SetProperty("SortDSC", Ddo_tiptelnom_Sortdsc);
            ucDdo_tiptelnom.SetProperty("CleanFilter", Ddo_tiptelnom_Cleanfilter);
            ucDdo_tiptelnom.SetProperty("SearchButtonText", Ddo_tiptelnom_Searchbuttontext);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsTitleSettingsIcons", AV15DDO_TitleSettingsIcons);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsData", AV13TipTelNomTitleFilterData);
            ucDdo_tiptelnom.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_tiptelnom_Internalname, "DDO_TIPTELNOMContainer");
            /* Multiple line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 37,'',false,'" + sGXsfl_24_idx + "',0)\"";
            ClassString = "Attribute";
            StyleString = "";
            ClassString = "Attribute";
            StyleString = "";
            GxWebStd.gx_html_textarea( context, edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname, AV14ddo_TipTelNomTitleControlIdToReplace, "", TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,37);\"", 0, edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible, 1, 0, 80, "chr", 4, "row", StyleString, ClassString, "", "", "300", -1, 0, "", "", -1, true, "", "'"+""+"'"+",false,"+"'"+""+"'", 0, "HLP_PromptTipoTelefono.htm");
            /* User Defined Control */
            ucWorkwithplusutilities1.Render(context, "dvelop.workwithplusutilities_f5", Workwithplusutilities1_Internalname, "WORKWITHPLUSUTILITIES1Container");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 39,'',false,'" + sGXsfl_24_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavOrderedby_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV8OrderedBy), 4, 0, ",", "")), StringUtil.LTrim( context.localUtil.Format( (decimal)(AV8OrderedBy), "ZZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,39);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavOrderedby_Jsonclick, 0, "Attribute", "", "", "", "", edtavOrderedby_Visible, 1, 0, "number", "1", 4, "chr", 1, "row", 4, 0, 0, 0, 1, -1, 0, true, "", "right", false, "HLP_PromptTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 40,'',false,'" + sGXsfl_24_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavOrdereddsc_Internalname, StringUtil.BoolToStr( AV9OrderedDsc), StringUtil.BoolToStr( AV9OrderedDsc), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,40);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavOrdereddsc_Jsonclick, 0, "Attribute", "", "", "", "", edtavOrdereddsc_Visible, 1, 0, "text", "", 4, "chr", 1, "row", 4, 0, 0, 0, 1, 0, 0, true, "", "right", false, "HLP_PromptTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
         }
         if ( wbEnd == 24 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void START0T2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( ! context.isSpaRequest( ) )
         {
            Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
            Form.Meta.addItem("description", "Selecciona Tipo Telefono", 0) ;
         }
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUP0T0( ) ;
      }

      protected void WS0T2( )
      {
         START0T2( ) ;
         EVT0T2( ) ;
      }

      protected void EVT0T2( )
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
                  if ( StringUtil.StrCmp(sEvtType, "M") != 0 )
                  {
                     if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                     {
                        sEvtType = StringUtil.Right( sEvt, 1);
                        if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                        {
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                           if ( StringUtil.StrCmp(sEvt, "RFR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                           }
                           else if ( StringUtil.StrCmp(sEvt, "GRIDPAGINATIONBAR.CHANGEPAGE") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E110T2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "GRIDPAGINATIONBAR.CHANGEROWSPERPAGE") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E120T2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "DDO_TIPTELID.ONOPTIONCLICKED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E130T2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "DDO_TIPTELNOM.ONOPTIONCLICKED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E140T2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "'DOCLEANFILTERS'") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              /* Execute user event: 'DoCleanFilters' */
                              E150T2 ();
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
                           sEvtType = StringUtil.Right( sEvt, 4);
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-4));
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 7), "REFRESH") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 9), "GRID.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 6), "CANCEL") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) )
                           {
                              nGXsfl_24_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_24_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_24_idx), 4, 0)), 4, "0");
                              SubsflControlProps_242( ) ;
                              AV19Select = cgiGet( edtavSelect_Internalname);
                              context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavSelect_Internalname, "Bitmap", (String.IsNullOrEmpty(StringUtil.RTrim( AV19Select)) ? AV24Select_GXI : context.convertURL( context.PathToRelativeUrl( AV19Select))), !bGXsfl_24_Refreshing);
                              context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavSelect_Internalname, "SrcSet", context.GetImageSrcSet( AV19Select), true);
                              A1TipTelId = (int)(context.localUtil.CToN( cgiGet( edtTipTelId_Internalname), ",", "."));
                              A3TipTelNom = cgiGet( edtTipTelNom_Internalname);
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Start */
                                    E160T2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "REFRESH") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Refresh */
                                    E170T2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "GRID.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E180T2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    if ( ! wbErr )
                                    {
                                       Rfr0gs = false;
                                       /* Set Refresh If Filterfulltext Changed */
                                       if ( StringUtil.StrCmp(cgiGet( "GXH_vFILTERFULLTEXT"), AV10FilterFullText) != 0 )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Orderedby Changed */
                                       if ( ( context.localUtil.CToN( cgiGet( "GXH_vORDEREDBY"), ",", ".") != Convert.ToDecimal( AV8OrderedBy )) )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Ordereddsc Changed */
                                       if ( StringUtil.StrToBool( cgiGet( "GXH_vORDEREDDSC")) != AV9OrderedDsc )
                                       {
                                          Rfr0gs = true;
                                       }
                                       if ( ! Rfr0gs )
                                       {
                                          /* Execute user event: Enter */
                                          E190T2 ();
                                       }
                                       dynload_actions( ) ;
                                    }
                                    /* No code required for Cancel button. It is implemented as the Reset button. */
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                 }
                              }
                              else
                              {
                              }
                           }
                        }
                     }
                     context.wbHandled = 1;
                  }
               }
            }
         }
      }

      protected void WE0T2( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               if ( nGXWrapped == 1 )
               {
                  RenderHtmlCloseForm( ) ;
               }
            }
         }
      }

      protected void PA0T2( )
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
               GX_FocusControl = edtavFilterfulltext_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrGrid_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_242( ) ;
         while ( nGXsfl_24_idx <= nRC_GXsfl_24 )
         {
            sendrow_242( ) ;
            nGXsfl_24_idx = ((subGrid_Islastpage==1)&&(nGXsfl_24_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_24_idx+1);
            sGXsfl_24_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_24_idx), 4, 0)), 4, "0");
            SubsflControlProps_242( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridContainer));
         /* End function gxnrGrid_newrow */
      }

      protected void gxgrGrid_refresh( int subGrid_Rows ,
                                       String AV10FilterFullText ,
                                       short AV8OrderedBy ,
                                       bool AV9OrderedDsc ,
                                       String AV12ddo_TipTelIdTitleControlIdToReplace ,
                                       String AV14ddo_TipTelNomTitleControlIdToReplace )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRID_nCurrentRecord = 0;
         RF0T2( ) ;
         /* End function gxgrGrid_refresh */
      }

      protected void send_integrity_hashes( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELID", GetSecureSignedToken( "", context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"), context));
         GxWebStd.gx_hidden_field( context, "TIPTELID", StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELNOM", GetSecureSignedToken( "", StringUtil.RTrim( context.localUtil.Format( A3TipTelNom, "")), context));
         GxWebStd.gx_hidden_field( context, "TIPTELNOM", StringUtil.RTrim( A3TipTelNom));
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
         RF0T2( ) ;
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

      protected void RF0T2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridContainer.ClearRows();
         }
         wbStart = 24;
         /* Execute user event: Refresh */
         E170T2 ();
         nGXsfl_24_idx = 1;
         sGXsfl_24_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_24_idx), 4, 0)), 4, "0");
         SubsflControlProps_242( ) ;
         bGXsfl_24_Refreshing = true;
         GridContainer.AddObjectProperty("GridName", "Grid");
         GridContainer.AddObjectProperty("CmpContext", "");
         GridContainer.AddObjectProperty("InMasterPage", "false");
         GridContainer.AddObjectProperty("Class", "GridWithPaginationBar GridNoBorder WorkWith");
         GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
         GridContainer.AddObjectProperty("Sortable", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Sortable), 1, 0, ".", "")));
         GridContainer.PageSize = subGrid_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_242( ) ;
            GXPagingFrom2 = (int)(((subGrid_Rows==0) ? 0 : GRID_nFirstRecordOnPage));
            GXPagingTo2 = ((subGrid_Rows==0) ? 10000 : subGrid_Recordsperpage( )+1);
            pr_default.dynParam(0, new Object[]{ new Object[]{
                                                 AV10FilterFullText ,
                                                 A1TipTelId ,
                                                 A3TipTelNom ,
                                                 AV8OrderedBy ,
                                                 AV9OrderedDsc } ,
                                                 new int[]{
                                                 TypeConstants.STRING, TypeConstants.INT, TypeConstants.STRING, TypeConstants.SHORT, TypeConstants.BOOLEAN
                                                 }
            } ) ;
            lV10FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV10FilterFullText), "%", "");
            lV10FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV10FilterFullText), "%", "");
            /* Using cursor H000T2 */
            pr_default.execute(0, new Object[] {lV10FilterFullText, lV10FilterFullText, GXPagingFrom2, GXPagingTo2, GXPagingTo2});
            nGXsfl_24_idx = 1;
            sGXsfl_24_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_24_idx), 4, 0)), 4, "0");
            SubsflControlProps_242( ) ;
            while ( ( (pr_default.getStatus(0) != 101) ) && ( ( ( subGrid_Rows == 0 ) || ( GRID_nCurrentRecord < subGrid_Recordsperpage( ) ) ) ) )
            {
               A3TipTelNom = H000T2_A3TipTelNom[0];
               A1TipTelId = H000T2_A1TipTelId[0];
               E180T2 ();
               pr_default.readNext(0);
            }
            GRID_nEOF = (short)(((pr_default.getStatus(0) == 101) ? 1 : 0));
            GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
            pr_default.close(0);
            wbEnd = 24;
            WB0T0( ) ;
         }
         bGXsfl_24_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes0T2( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELID"+"_"+sGXsfl_24_idx, GetSecureSignedToken( sGXsfl_24_idx, context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"), context));
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELNOM"+"_"+sGXsfl_24_idx, GetSecureSignedToken( sGXsfl_24_idx, StringUtil.RTrim( context.localUtil.Format( A3TipTelNom, "")), context));
      }

      protected int subGrid_Pagecount( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
         {
            return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))) ;
         }
         return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected int subGrid_Recordcount( )
      {
         pr_default.dynParam(1, new Object[]{ new Object[]{
                                              AV10FilterFullText ,
                                              A1TipTelId ,
                                              A3TipTelNom ,
                                              AV8OrderedBy ,
                                              AV9OrderedDsc } ,
                                              new int[]{
                                              TypeConstants.STRING, TypeConstants.INT, TypeConstants.STRING, TypeConstants.SHORT, TypeConstants.BOOLEAN
                                              }
         } ) ;
         lV10FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV10FilterFullText), "%", "");
         lV10FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV10FilterFullText), "%", "");
         /* Using cursor H000T3 */
         pr_default.execute(1, new Object[] {lV10FilterFullText, lV10FilterFullText});
         GRID_nRecordCount = H000T3_AGRID_nRecordCount[0];
         pr_default.close(1);
         return (int)(GRID_nRecordCount) ;
      }

      protected int subGrid_Recordsperpage( )
      {
         if ( subGrid_Rows > 0 )
         {
            return subGrid_Rows*1 ;
         }
         else
         {
            return (int)(-1) ;
         }
      }

      protected int subGrid_Currentpage( )
      {
         return (int)(NumberUtil.Int( (long)(GRID_nFirstRecordOnPage/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected short subgrid_firstpage( )
      {
         GRID_nFirstRecordOnPage = 0;
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_nextpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ( GRID_nRecordCount >= subGrid_Recordsperpage( ) ) && ( GRID_nEOF == 0 ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage+subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
         }
         send_integrity_footer_hashes( ) ;
         return (short)(((GRID_nEOF==0) ? 0 : 2)) ;
      }

      protected short subgrid_previouspage( )
      {
         if ( GRID_nFirstRecordOnPage >= subGrid_Recordsperpage( ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage-subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_lastpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( GRID_nRecordCount > subGrid_Recordsperpage( ) )
         {
            if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-subGrid_Recordsperpage( ));
            }
            else
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))));
            }
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected int subgrid_gotopage( int nPageNo )
      {
         if ( nPageNo > 0 )
         {
            GRID_nFirstRecordOnPage = (long)(subGrid_Recordsperpage( )*(nPageNo-1));
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV10FilterFullText, AV8OrderedBy, AV9OrderedDsc, AV12ddo_TipTelIdTitleControlIdToReplace, AV14ddo_TipTelNomTitleControlIdToReplace) ;
         }
         send_integrity_footer_hashes( ) ;
         return (int)(0) ;
      }

      protected void STRUP0T0( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E160T2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( "vDDO_TITLESETTINGSICONS"), AV15DDO_TitleSettingsIcons);
            ajax_req_read_hidden_sdt(cgiGet( "vTIPTELIDTITLEFILTERDATA"), AV11TipTelIdTitleFilterData);
            ajax_req_read_hidden_sdt(cgiGet( "vTIPTELNOMTITLEFILTERDATA"), AV13TipTelNomTitleFilterData);
            /* Read variables values. */
            AV10FilterFullText = cgiGet( edtavFilterfulltext_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV10FilterFullText", AV10FilterFullText);
            AV12ddo_TipTelIdTitleControlIdToReplace = cgiGet( edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12ddo_TipTelIdTitleControlIdToReplace", AV12ddo_TipTelIdTitleControlIdToReplace);
            AV14ddo_TipTelNomTitleControlIdToReplace = cgiGet( edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV14ddo_TipTelNomTitleControlIdToReplace", AV14ddo_TipTelNomTitleControlIdToReplace);
            if ( ( ( context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", ".") > Convert.ToDecimal( 9999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vORDEREDBY");
               GX_FocusControl = edtavOrderedby_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV8OrderedBy = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            }
            else
            {
               AV8OrderedBy = (short)(context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            }
            AV9OrderedDsc = StringUtil.StrToBool( cgiGet( edtavOrdereddsc_Internalname));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9OrderedDsc", AV9OrderedDsc);
            /* Read saved values. */
            nRC_GXsfl_24 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_24"), ",", "."));
            AV17GridCurrentPage = (long)(context.localUtil.CToN( cgiGet( "vGRIDCURRENTPAGE"), ",", "."));
            AV18GridPageCount = (long)(context.localUtil.CToN( cgiGet( "vGRIDPAGECOUNT"), ",", "."));
            GRID_nFirstRecordOnPage = (long)(context.localUtil.CToN( cgiGet( "GRID_nFirstRecordOnPage"), ",", "."));
            GRID_nEOF = (short)(context.localUtil.CToN( cgiGet( "GRID_nEOF"), ",", "."));
            subGrid_Rows = (int)(context.localUtil.CToN( cgiGet( "GRID_Rows"), ",", "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
            Gridpaginationbar_Class = cgiGet( "GRIDPAGINATIONBAR_Class");
            Gridpaginationbar_Showfirst = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showfirst"));
            Gridpaginationbar_Showprevious = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showprevious"));
            Gridpaginationbar_Shownext = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Shownext"));
            Gridpaginationbar_Showlast = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showlast"));
            Gridpaginationbar_Pagestoshow = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Pagestoshow"), ",", "."));
            Gridpaginationbar_Pagingbuttonsposition = cgiGet( "GRIDPAGINATIONBAR_Pagingbuttonsposition");
            Gridpaginationbar_Pagingcaptionposition = cgiGet( "GRIDPAGINATIONBAR_Pagingcaptionposition");
            Gridpaginationbar_Emptygridclass = cgiGet( "GRIDPAGINATIONBAR_Emptygridclass");
            Gridpaginationbar_Rowsperpageselector = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselector"));
            Gridpaginationbar_Rowsperpageselectedvalue = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselectedvalue"), ",", "."));
            Gridpaginationbar_Rowsperpageoptions = cgiGet( "GRIDPAGINATIONBAR_Rowsperpageoptions");
            Gridpaginationbar_Previous = cgiGet( "GRIDPAGINATIONBAR_Previous");
            Gridpaginationbar_Next = cgiGet( "GRIDPAGINATIONBAR_Next");
            Gridpaginationbar_Caption = cgiGet( "GRIDPAGINATIONBAR_Caption");
            Gridpaginationbar_Emptygridcaption = cgiGet( "GRIDPAGINATIONBAR_Emptygridcaption");
            Gridpaginationbar_Rowsperpagecaption = cgiGet( "GRIDPAGINATIONBAR_Rowsperpagecaption");
            Ddo_tiptelid_Caption = cgiGet( "DDO_TIPTELID_Caption");
            Ddo_tiptelid_Tooltip = cgiGet( "DDO_TIPTELID_Tooltip");
            Ddo_tiptelid_Cls = cgiGet( "DDO_TIPTELID_Cls");
            Ddo_tiptelid_Dropdownoptionstype = cgiGet( "DDO_TIPTELID_Dropdownoptionstype");
            Ddo_tiptelid_Titlecontrolidtoreplace = cgiGet( "DDO_TIPTELID_Titlecontrolidtoreplace");
            Ddo_tiptelid_Includesortasc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includesortasc"));
            Ddo_tiptelid_Includesortdsc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includesortdsc"));
            Ddo_tiptelid_Sortedstatus = cgiGet( "DDO_TIPTELID_Sortedstatus");
            Ddo_tiptelid_Includefilter = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includefilter"));
            Ddo_tiptelid_Includedatalist = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includedatalist"));
            Ddo_tiptelid_Sortasc = cgiGet( "DDO_TIPTELID_Sortasc");
            Ddo_tiptelid_Sortdsc = cgiGet( "DDO_TIPTELID_Sortdsc");
            Ddo_tiptelid_Cleanfilter = cgiGet( "DDO_TIPTELID_Cleanfilter");
            Ddo_tiptelid_Searchbuttontext = cgiGet( "DDO_TIPTELID_Searchbuttontext");
            Ddo_tiptelnom_Caption = cgiGet( "DDO_TIPTELNOM_Caption");
            Ddo_tiptelnom_Tooltip = cgiGet( "DDO_TIPTELNOM_Tooltip");
            Ddo_tiptelnom_Cls = cgiGet( "DDO_TIPTELNOM_Cls");
            Ddo_tiptelnom_Dropdownoptionstype = cgiGet( "DDO_TIPTELNOM_Dropdownoptionstype");
            Ddo_tiptelnom_Titlecontrolidtoreplace = cgiGet( "DDO_TIPTELNOM_Titlecontrolidtoreplace");
            Ddo_tiptelnom_Includesortasc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includesortasc"));
            Ddo_tiptelnom_Includesortdsc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includesortdsc"));
            Ddo_tiptelnom_Sortedstatus = cgiGet( "DDO_TIPTELNOM_Sortedstatus");
            Ddo_tiptelnom_Includefilter = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includefilter"));
            Ddo_tiptelnom_Includedatalist = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includedatalist"));
            Ddo_tiptelnom_Sortasc = cgiGet( "DDO_TIPTELNOM_Sortasc");
            Ddo_tiptelnom_Sortdsc = cgiGet( "DDO_TIPTELNOM_Sortdsc");
            Ddo_tiptelnom_Cleanfilter = cgiGet( "DDO_TIPTELNOM_Cleanfilter");
            Ddo_tiptelnom_Searchbuttontext = cgiGet( "DDO_TIPTELNOM_Searchbuttontext");
            Gridpaginationbar_Selectedpage = cgiGet( "GRIDPAGINATIONBAR_Selectedpage");
            Gridpaginationbar_Rowsperpageselectedvalue = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselectedvalue"), ",", "."));
            Ddo_tiptelid_Activeeventkey = cgiGet( "DDO_TIPTELID_Activeeventkey");
            Ddo_tiptelnom_Activeeventkey = cgiGet( "DDO_TIPTELNOM_Activeeventkey");
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            /* Check if conditions changed and reset current page numbers */
            if ( StringUtil.StrCmp(cgiGet( "GXH_vFILTERFULLTEXT"), AV10FilterFullText) != 0 )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( ( context.localUtil.CToN( cgiGet( "GXH_vORDEREDBY"), ",", ".") != Convert.ToDecimal( AV8OrderedBy )) )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( StringUtil.StrToBool( cgiGet( "GXH_vORDEREDDSC")) != AV9OrderedDsc )
            {
               GRID_nFirstRecordOnPage = 0;
            }
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E160T2 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
      }

      protected void E160T2( )
      {
         /* Start Routine */
         subGrid_Rows = 10;
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         Ddo_tiptelid_Titlecontrolidtoreplace = subGrid_Internalname+"_TipTelId";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "TitleControlIdToReplace", Ddo_tiptelid_Titlecontrolidtoreplace);
         AV12ddo_TipTelIdTitleControlIdToReplace = Ddo_tiptelid_Titlecontrolidtoreplace;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12ddo_TipTelIdTitleControlIdToReplace", AV12ddo_TipTelIdTitleControlIdToReplace);
         edtavDdo_tiptelidtitlecontrolidtoreplace_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavDdo_tiptelidtitlecontrolidtoreplace_Visible), 5, 0)), true);
         Ddo_tiptelnom_Titlecontrolidtoreplace = subGrid_Internalname+"_TipTelNom";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "TitleControlIdToReplace", Ddo_tiptelnom_Titlecontrolidtoreplace);
         AV14ddo_TipTelNomTitleControlIdToReplace = Ddo_tiptelnom_Titlecontrolidtoreplace;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV14ddo_TipTelNomTitleControlIdToReplace", AV14ddo_TipTelNomTitleControlIdToReplace);
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible), 5, 0)), true);
         Form.Caption = "Selecciona Tipo Telefono";
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Caption", Form.Caption, true);
         edtavOrderedby_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavOrderedby_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavOrderedby_Visible), 5, 0)), true);
         if ( AV8OrderedBy < 1 )
         {
            AV8OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            /* Execute user subroutine: 'SETDDOSORTEDSTATUS' */
            S112 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
         }
         edtavOrdereddsc_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavOrdereddsc_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavOrdereddsc_Visible), 5, 0)), true);
         GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 = AV15DDO_TitleSettingsIcons;
         new GeneXus.Programs.wwpbaseobjects.getwwptitlesettingsicons(context ).execute( out  GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1) ;
         AV15DDO_TitleSettingsIcons = GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1;
         Gridpaginationbar_Rowsperpageselectedvalue = subGrid_Rows;
         ucGridpaginationbar.SendProperty(context, "", false, Gridpaginationbar_Internalname, "RowsPerPageSelectedValue", StringUtil.LTrim( StringUtil.Str( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0)));
      }

      protected void E170T2( )
      {
         if ( gx_refresh_fired )
         {
            return  ;
         }
         gx_refresh_fired = true;
         /* Refresh Routine */
         AV11TipTelIdTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV13TipTelNomTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV6WWPContext) ;
         edtTipTelId_Titleformat = 2;
         edtTipTelId_Title = StringUtil.Format( "<div class='ColumnSettingsContainer'><span>%1</span><div id='%2'></div>", "Tel Id", AV12ddo_TipTelIdTitleControlIdToReplace, "", "", "", "", "", "", "");
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelId_Internalname, "Title", edtTipTelId_Title, !bGXsfl_24_Refreshing);
         edtTipTelNom_Titleformat = 2;
         edtTipTelNom_Title = StringUtil.Format( "<div class='ColumnSettingsContainer'><span>%1</span><div id='%2'></div>", "Tel Nom", AV14ddo_TipTelNomTitleControlIdToReplace, "", "", "", "", "", "", "");
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelNom_Internalname, "Title", edtTipTelNom_Title, !bGXsfl_24_Refreshing);
         AV17GridCurrentPage = subGrid_Currentpage( );
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV17GridCurrentPage", StringUtil.LTrim( StringUtil.Str( (decimal)(AV17GridCurrentPage), 10, 0)));
         AV18GridPageCount = subGrid_Pagecount( );
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV18GridPageCount", StringUtil.LTrim( StringUtil.Str( (decimal)(AV18GridPageCount), 10, 0)));
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV11TipTelIdTitleFilterData", AV11TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV13TipTelNomTitleFilterData", AV13TipTelNomTitleFilterData);
      }

      protected void E110T2( )
      {
         /* Gridpaginationbar_Changepage Routine */
         if ( StringUtil.StrCmp(Gridpaginationbar_Selectedpage, "Previous") == 0 )
         {
            subgrid_previouspage( ) ;
         }
         else if ( StringUtil.StrCmp(Gridpaginationbar_Selectedpage, "Next") == 0 )
         {
            subgrid_nextpage( ) ;
         }
         else
         {
            AV16PageToGo = (int)(NumberUtil.Val( Gridpaginationbar_Selectedpage, "."));
            subgrid_gotopage( AV16PageToGo) ;
         }
      }

      protected void E120T2( )
      {
         /* Gridpaginationbar_Changerowsperpage Routine */
         subGrid_Rows = Gridpaginationbar_Rowsperpageselectedvalue;
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         subgrid_firstpage( ) ;
         /*  Sending Event outputs  */
      }

      protected void E130T2( )
      {
         /* Ddo_tiptelid_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_tiptelid_Activeeventkey, "<#OrderASC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S122 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV8OrderedBy = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            AV9OrderedDsc = false;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9OrderedDsc", AV9OrderedDsc);
            Ddo_tiptelid_Sortedstatus = "ASC";
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelid_Activeeventkey, "<#OrderDSC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S122 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV8OrderedBy = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            AV9OrderedDsc = true;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9OrderedDsc", AV9OrderedDsc);
            Ddo_tiptelid_Sortedstatus = "DSC";
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV11TipTelIdTitleFilterData", AV11TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV13TipTelNomTitleFilterData", AV13TipTelNomTitleFilterData);
      }

      protected void E140T2( )
      {
         /* Ddo_tiptelnom_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_tiptelnom_Activeeventkey, "<#OrderASC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S122 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV8OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            AV9OrderedDsc = false;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9OrderedDsc", AV9OrderedDsc);
            Ddo_tiptelnom_Sortedstatus = "ASC";
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelnom_Activeeventkey, "<#OrderDSC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S122 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV8OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8OrderedBy), 4, 0)));
            AV9OrderedDsc = true;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9OrderedDsc", AV9OrderedDsc);
            Ddo_tiptelnom_Sortedstatus = "DSC";
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV11TipTelIdTitleFilterData", AV11TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV13TipTelNomTitleFilterData", AV13TipTelNomTitleFilterData);
      }

      private void E180T2( )
      {
         /* Grid_Load Routine */
         AV19Select = context.GetImagePath( "3914535b-0c03-44c5-9538-906a99cdd2bc", "", context.GetTheme( ));
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavSelect_Internalname, AV19Select);
         AV24Select_GXI = GXDbFile.PathToUrl( context.GetImagePath( "3914535b-0c03-44c5-9538-906a99cdd2bc", "", context.GetTheme( )));
         edtavSelect_Tooltiptext = "Seleccionar";
         /* Load Method */
         if ( wbStart != -1 )
         {
            wbStart = 24;
         }
         sendrow_242( ) ;
         GRID_nCurrentRecord = (long)(GRID_nCurrentRecord+1);
         if ( isFullAjaxMode( ) && ! bGXsfl_24_Refreshing )
         {
            context.DoAjaxLoad(24, GridRow);
         }
         /*  Sending Event outputs  */
      }

      public void GXEnter( )
      {
         /* Execute user event: Enter */
         E190T2 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
      }

      protected void E190T2( )
      {
         /* Enter Routine */
         AV20InOutTipTelId = A1TipTelId;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV20InOutTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV20InOutTipTelId), 9, 0)));
         AV21InOutTipTelNom = A3TipTelNom;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV21InOutTipTelNom", AV21InOutTipTelNom);
         context.setWebReturnParms(new Object[] {(int)AV20InOutTipTelId,(String)AV21InOutTipTelNom});
         context.setWebReturnParmsMetadata(new Object[] {"AV20InOutTipTelId","AV21InOutTipTelNom"});
         context.wjLocDisableFrm = 1;
         context.nUserReturn = 1;
         returnInSub = true;
         if (true) return;
         /*  Sending Event outputs  */
      }

      protected void E150T2( )
      {
         /* 'DoCleanFilters' Routine */
         /* Execute user subroutine: 'CLEANFILTERS' */
         S132 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         subgrid_firstpage( ) ;
         context.DoAjaxRefresh();
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV11TipTelIdTitleFilterData", AV11TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV13TipTelNomTitleFilterData", AV13TipTelNomTitleFilterData);
      }

      protected void S122( )
      {
         /* 'RESETDDOSORTEDSTATUS' Routine */
         Ddo_tiptelid_Sortedstatus = "";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
         Ddo_tiptelnom_Sortedstatus = "";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
      }

      protected void S112( )
      {
         /* 'SETDDOSORTEDSTATUS' Routine */
         /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
         S122 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         if ( AV8OrderedBy == 2 )
         {
            Ddo_tiptelid_Sortedstatus = (AV9OrderedDsc ? "DSC" : "ASC");
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
         }
         else if ( AV8OrderedBy == 1 )
         {
            Ddo_tiptelnom_Sortedstatus = (AV9OrderedDsc ? "DSC" : "ASC");
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
         }
      }

      protected void S132( )
      {
         /* 'CLEANFILTERS' Routine */
         AV10FilterFullText = "";
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV10FilterFullText", AV10FilterFullText);
      }

      protected void wb_table1_12_0T2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablefilters_Internalname, tblTablefilters_Internalname, "", "", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td class='CellAlignTopPaddingTop10'>") ;
            /* Active images/pictures */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 15,'',false,'',0)\"";
            ClassString = "Image";
            StyleString = "";
            sImgUrl = (String)(context.GetImagePath( "effedd9a-25cf-4497-952f-5a5ac032b8be", "", context.GetTheme( )));
            GxWebStd.gx_bitmap( context, imgCleanfilters_Internalname, sImgUrl, "", "", "", context.GetTheme( ), 1, 1, "", "Limpiar filtros", 0, 0, 0, "px", 0, "px", 0, 0, 5, imgCleanfilters_Jsonclick, "'"+""+"'"+",false,"+"'"+"E\\'DOCLEANFILTERS\\'."+"'", StyleString, ClassString, "", "", "", "", " "+"data-gx-image"+" "+TempTags, "", "", 1, false, false, context.GetImageSrcSet( sImgUrl), "HLP_PromptTipoTelefono.htm");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "<td>") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavFilterfulltext_Internalname, "Filter Full Text", "col-sm-3 AttributeLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 18,'',false,'" + sGXsfl_24_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavFilterfulltext_Internalname, AV10FilterFullText, StringUtil.RTrim( context.localUtil.Format( AV10FilterFullText, "")), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,18);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "Search", edtavFilterfulltext_Jsonclick, 0, "Attribute", "", "", "", "", 1, edtavFilterfulltext_Enabled, 0, "text", "", 80, "chr", 1, "row", 100, 0, 0, 0, 1, -1, -1, true, "WWPFullTextFilter", "left", true, "HLP_PromptTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table1_12_0T2e( true) ;
         }
         else
         {
            wb_table1_12_0T2e( false) ;
         }
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
         AV20InOutTipTelId = Convert.ToInt32(getParm(obj,0));
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV20InOutTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV20InOutTipTelId), 9, 0)));
         AV21InOutTipTelNom = (String)getParm(obj,1);
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV21InOutTipTelNom", AV21InOutTipTelNom);
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
         PA0T2( ) ;
         WS0T2( ) ;
         WE0T2( ) ;
         this.cleanup();
         context.SetWrapped(false);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
      }

      protected void define_styles( )
      {
         AddStyleSheetFile("DVelop/DVPaginationBar/DVPaginationBar.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/fontawesome_v5/css/font-awesome.min.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= Form.Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?2019103019141420", true, true);
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
         context.AddJavascriptSource("messages.spa.js", "?"+GetCacheInvalidationToken( ), false, true);
         context.AddJavascriptSource("prompttipotelefono.js", "?2019103019141421", false, true);
         context.AddJavascriptSource("DVelop/DVPaginationBar/DVPaginationBarRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_242( )
      {
         edtavSelect_Internalname = "vSELECT_"+sGXsfl_24_idx;
         edtTipTelId_Internalname = "TIPTELID_"+sGXsfl_24_idx;
         edtTipTelNom_Internalname = "TIPTELNOM_"+sGXsfl_24_idx;
      }

      protected void SubsflControlProps_fel_242( )
      {
         edtavSelect_Internalname = "vSELECT_"+sGXsfl_24_fel_idx;
         edtTipTelId_Internalname = "TIPTELID_"+sGXsfl_24_fel_idx;
         edtTipTelNom_Internalname = "TIPTELNOM_"+sGXsfl_24_fel_idx;
      }

      protected void sendrow_242( )
      {
         SubsflControlProps_242( ) ;
         WB0T0( ) ;
         if ( ( subGrid_Rows * 1 == 0 ) || ( nGXsfl_24_idx <= subGrid_Recordsperpage( ) * 1 ) )
         {
            GridRow = GXWebRow.GetNew(context,GridContainer);
            if ( subGrid_Backcolorstyle == 0 )
            {
               /* None style subfile background logic. */
               subGrid_Backstyle = 0;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
            }
            else if ( subGrid_Backcolorstyle == 1 )
            {
               /* Uniform style subfile background logic. */
               subGrid_Backstyle = 0;
               subGrid_Backcolor = subGrid_Allbackcolor;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Uniform";
               }
            }
            else if ( subGrid_Backcolorstyle == 2 )
            {
               /* Header style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
               subGrid_Backcolor = (int)(0x0);
            }
            else if ( subGrid_Backcolorstyle == 3 )
            {
               /* Report style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( ((int)((nGXsfl_24_idx) % (2))) == 0 )
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Even";
                  }
               }
               else
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Odd";
                  }
               }
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<tr ") ;
               context.WriteHtmlText( " class=\""+"GridWithPaginationBar GridNoBorder WorkWith"+"\" style=\""+""+"\"") ;
               context.WriteHtmlText( " gxrow=\""+sGXsfl_24_idx+"\">") ;
            }
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+""+"\""+" style=\""+""+"\">") ;
            }
            /* Active Bitmap Variable */
            TempTags = " " + ((edtavSelect_Enabled!=0)&&(edtavSelect_Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 25,'',false,'',24)\"" : " ");
            ClassString = "SelectAttribute ActionBaseColorAttribute";
            StyleString = "";
            AV19Select_IsBlob = (bool)((String.IsNullOrEmpty(StringUtil.RTrim( AV19Select))&&String.IsNullOrEmpty(StringUtil.RTrim( AV24Select_GXI)))||!String.IsNullOrEmpty(StringUtil.RTrim( AV19Select)));
            sImgUrl = (String.IsNullOrEmpty(StringUtil.RTrim( AV19Select)) ? AV24Select_GXI : context.PathToRelativeUrl( AV19Select));
            GridRow.AddColumnProperties("bitmap", 1, isAjaxCallMode( ), new Object[] {(String)edtavSelect_Internalname,(String)sImgUrl,(String)"",(String)"",(String)"",context.GetTheme( ),(short)-1,(short)1,(String)"",(String)edtavSelect_Tooltiptext,(short)0,(short)-1,(short)0,(String)"px",(short)0,(String)"px",(short)0,(short)0,(short)5,(String)edtavSelect_Jsonclick,"'"+""+"'"+",false,"+"'"+"EENTER."+sGXsfl_24_idx+"'",(String)StyleString,(String)ClassString,(String)"WWActionColumn",(String)"",(String)"",(String)"",(String)""+TempTags,(String)"",(String)"",(short)1,(bool)AV19Select_IsBlob,(bool)false,context.GetImageSrcSet( sImgUrl)});
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"right"+"\""+" style=\""+""+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtTipTelId_Internalname,StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ",", "")),context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"),(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtTipTelId_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn hidden-xs",(String)"",(short)-1,(short)0,(short)0,(String)"number",(String)"1",(short)0,(String)"px",(short)17,(String)"px",(short)9,(short)0,(short)0,(short)24,(short)1,(short)-1,(short)0,(bool)true,(String)"",(String)"right",(bool)false});
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"left"+"\""+" style=\""+""+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtTipTelNom_Internalname,StringUtil.RTrim( A3TipTelNom),(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtTipTelNom_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn",(String)"",(short)-1,(short)0,(short)0,(String)"text",(String)"",(short)0,(String)"px",(short)17,(String)"px",(short)20,(short)0,(short)0,(short)24,(short)1,(short)-1,(short)-1,(bool)true,(String)"",(String)"left",(bool)true});
            send_integrity_lvl_hashes0T2( ) ;
            GridContainer.AddRow(GridRow);
            nGXsfl_24_idx = ((subGrid_Islastpage==1)&&(nGXsfl_24_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_24_idx+1);
            sGXsfl_24_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_24_idx), 4, 0)), 4, "0");
            SubsflControlProps_242( ) ;
         }
         /* End function sendrow_242 */
      }

      protected void init_web_controls( )
      {
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         imgCleanfilters_Internalname = "CLEANFILTERS";
         edtavFilterfulltext_Internalname = "vFILTERFULLTEXT";
         tblTablefilters_Internalname = "TABLEFILTERS";
         divTableheader_Internalname = "TABLEHEADER";
         edtavSelect_Internalname = "vSELECT";
         edtTipTelId_Internalname = "TIPTELID";
         edtTipTelNom_Internalname = "TIPTELNOM";
         Gridpaginationbar_Internalname = "GRIDPAGINATIONBAR";
         divGridtablewithpaginationbar_Internalname = "GRIDTABLEWITHPAGINATIONBAR";
         divTablemain_Internalname = "TABLEMAIN";
         Ddo_tiptelid_Internalname = "DDO_TIPTELID";
         edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname = "vDDO_TIPTELIDTITLECONTROLIDTOREPLACE";
         Ddo_tiptelnom_Internalname = "DDO_TIPTELNOM";
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname = "vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE";
         Workwithplusutilities1_Internalname = "WORKWITHPLUSUTILITIES1";
         edtavOrderedby_Internalname = "vORDEREDBY";
         edtavOrdereddsc_Internalname = "vORDEREDDSC";
         divHtml_bottomauxiliarcontrols_Internalname = "HTML_BOTTOMAUXILIARCONTROLS";
         divLayoutmaintable_Internalname = "LAYOUTMAINTABLE";
         Form.Internalname = "FORM";
         subGrid_Internalname = "GRID";
      }

      public override void initialize_properties( )
      {
         context.SetDefaultTheme("WorkWithPlusTheme");
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         edtTipTelNom_Jsonclick = "";
         edtTipTelId_Jsonclick = "";
         edtavSelect_Jsonclick = "";
         edtavSelect_Visible = -1;
         edtavSelect_Enabled = 1;
         edtavFilterfulltext_Jsonclick = "";
         edtavFilterfulltext_Enabled = 1;
         edtavOrdereddsc_Jsonclick = "";
         edtavOrdereddsc_Visible = 1;
         edtavOrderedby_Jsonclick = "";
         edtavOrderedby_Visible = 1;
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible = 1;
         edtavDdo_tiptelidtitlecontrolidtoreplace_Visible = 1;
         subGrid_Allowcollapsing = 0;
         subGrid_Allowselection = 0;
         edtavSelect_Tooltiptext = "Seleccionar";
         subGrid_Sortable = 0;
         subGrid_Header = "";
         edtTipTelNom_Titleformat = 0;
         edtTipTelNom_Title = "Tel Nom";
         edtTipTelId_Titleformat = 0;
         edtTipTelId_Title = "Tel Id";
         subGrid_Class = "GridWithPaginationBar GridNoBorder WorkWith";
         subGrid_Backcolorstyle = 0;
         Ddo_tiptelnom_Searchbuttontext = "WWP_TSSearchButtonCaption";
         Ddo_tiptelnom_Cleanfilter = "WWP_TSCleanFilter";
         Ddo_tiptelnom_Sortdsc = "WWP_TSSortDSC";
         Ddo_tiptelnom_Sortasc = "WWP_TSSortASC";
         Ddo_tiptelnom_Includedatalist = Convert.ToBoolean( 0);
         Ddo_tiptelnom_Includefilter = Convert.ToBoolean( 0);
         Ddo_tiptelnom_Includesortdsc = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Includesortasc = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Titlecontrolidtoreplace = "";
         Ddo_tiptelnom_Dropdownoptionstype = "GridTitleSettings";
         Ddo_tiptelnom_Cls = "ColumnSettings";
         Ddo_tiptelnom_Tooltip = "WWP_TSColumnOptions";
         Ddo_tiptelnom_Caption = "";
         Ddo_tiptelid_Searchbuttontext = "WWP_TSSearchButtonCaption";
         Ddo_tiptelid_Cleanfilter = "WWP_TSCleanFilter";
         Ddo_tiptelid_Sortdsc = "WWP_TSSortDSC";
         Ddo_tiptelid_Sortasc = "WWP_TSSortASC";
         Ddo_tiptelid_Includedatalist = Convert.ToBoolean( 0);
         Ddo_tiptelid_Includefilter = Convert.ToBoolean( 0);
         Ddo_tiptelid_Includesortdsc = Convert.ToBoolean( -1);
         Ddo_tiptelid_Includesortasc = Convert.ToBoolean( -1);
         Ddo_tiptelid_Titlecontrolidtoreplace = "";
         Ddo_tiptelid_Dropdownoptionstype = "GridTitleSettings";
         Ddo_tiptelid_Cls = "ColumnSettings";
         Ddo_tiptelid_Tooltip = "WWP_TSColumnOptions";
         Ddo_tiptelid_Caption = "";
         Gridpaginationbar_Rowsperpagecaption = "WWP_PagingRowsPerPage";
         Gridpaginationbar_Emptygridcaption = "WWP_PagingEmptyGridCaption";
         Gridpaginationbar_Caption = "Página <CURRENT_PAGE> de <TOTAL_PAGES>";
         Gridpaginationbar_Next = "WWP_PagingNextCaption";
         Gridpaginationbar_Previous = "WWP_PagingPreviousCaption";
         Gridpaginationbar_Rowsperpageoptions = "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50";
         Gridpaginationbar_Rowsperpageselectedvalue = 10;
         Gridpaginationbar_Rowsperpageselector = Convert.ToBoolean( -1);
         Gridpaginationbar_Emptygridclass = "PaginationBarEmptyGrid";
         Gridpaginationbar_Pagingcaptionposition = "Left";
         Gridpaginationbar_Pagingbuttonsposition = "Right";
         Gridpaginationbar_Pagestoshow = 5;
         Gridpaginationbar_Showlast = Convert.ToBoolean( 0);
         Gridpaginationbar_Shownext = Convert.ToBoolean( -1);
         Gridpaginationbar_Showprevious = Convert.ToBoolean( -1);
         Gridpaginationbar_Showfirst = Convert.ToBoolean( 0);
         Gridpaginationbar_Class = "PaginationBar";
         Form.Headerrawhtml = "";
         Form.Background = "";
         Form.Textcolor = 0;
         Form.Backcolor = (int)(0xFFFFFF);
         Form.Caption = "Selecciona Tipo Telefono";
         subGrid_Rows = 0;
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
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''}]");
         setEventMetadata("REFRESH",",oparms:[{av:'AV11TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV13TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV17GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV18GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]}");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEPAGE","{handler:'E110T2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'Gridpaginationbar_Selectedpage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}]");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEPAGE",",oparms:[]}");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE","{handler:'E120T2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'Gridpaginationbar_Rowsperpageselectedvalue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}]");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",",oparms:[{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'}]}");
         setEventMetadata("DDO_TIPTELID.ONOPTIONCLICKED","{handler:'E130T2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'Ddo_tiptelid_Activeeventkey',ctrl:'DDO_TIPTELID',prop:'ActiveEventKey'}]");
         setEventMetadata("DDO_TIPTELID.ONOPTIONCLICKED",",oparms:[{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'AV11TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV13TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV17GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV18GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]}");
         setEventMetadata("DDO_TIPTELNOM.ONOPTIONCLICKED","{handler:'E140T2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'Ddo_tiptelnom_Activeeventkey',ctrl:'DDO_TIPTELNOM',prop:'ActiveEventKey'}]");
         setEventMetadata("DDO_TIPTELNOM.ONOPTIONCLICKED",",oparms:[{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'AV11TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV13TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV17GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV18GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]}");
         setEventMetadata("GRID.LOAD","{handler:'E180T2',iparms:[]");
         setEventMetadata("GRID.LOAD",",oparms:[{av:'AV19Select',fld:'vSELECT',pic:''},{av:'edtavSelect_Tooltiptext',ctrl:'vSELECT',prop:'Tooltiptext'}]}");
         setEventMetadata("ENTER","{handler:'E190T2',iparms:[{av:'A1TipTelId',fld:'TIPTELID',pic:'ZZZZZZZZ9',hsh:true},{av:'A3TipTelNom',fld:'TIPTELNOM',pic:'',hsh:true}]");
         setEventMetadata("ENTER",",oparms:[{av:'AV20InOutTipTelId',fld:'vINOUTTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV21InOutTipTelNom',fld:'vINOUTTIPTELNOM',pic:''}]}");
         setEventMetadata("'DOCLEANFILTERS'","{handler:'E150T2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV8OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV9OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV14ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''}]");
         setEventMetadata("'DOCLEANFILTERS'",",oparms:[{av:'AV10FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV11TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV13TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV17GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV18GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]}");
         setEventMetadata("NULL","{handler:'Valid_Tiptelnom',iparms:[]");
         setEventMetadata("NULL",",oparms:[]}");
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
         wcpOAV21InOutTipTelNom = "";
         Gridpaginationbar_Selectedpage = "";
         Ddo_tiptelid_Activeeventkey = "";
         Ddo_tiptelnom_Activeeventkey = "";
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         AV10FilterFullText = "";
         AV12ddo_TipTelIdTitleControlIdToReplace = "";
         AV14ddo_TipTelNomTitleControlIdToReplace = "";
         GXKey = "";
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         AV15DDO_TitleSettingsIcons = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons(context);
         AV11TipTelIdTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV13TipTelNomTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         Ddo_tiptelid_Sortedstatus = "";
         Ddo_tiptelnom_Sortedstatus = "";
         GX_FocusControl = "";
         Form = new GXWebForm();
         sPrefix = "";
         GridContainer = new GXWebGrid( context);
         sStyleString = "";
         subGrid_Linesclass = "";
         GridColumn = new GXWebColumn();
         AV19Select = "";
         A3TipTelNom = "";
         ucGridpaginationbar = new GXUserControl();
         ucDdo_tiptelid = new GXUserControl();
         TempTags = "";
         ClassString = "";
         StyleString = "";
         ucDdo_tiptelnom = new GXUserControl();
         ucWorkwithplusutilities1 = new GXUserControl();
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         AV24Select_GXI = "";
         scmdbuf = "";
         lV10FilterFullText = "";
         H000T2_A3TipTelNom = new String[] {""} ;
         H000T2_A1TipTelId = new int[1] ;
         H000T3_AGRID_nRecordCount = new long[1] ;
         GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons(context);
         AV6WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context);
         GridRow = new GXWebRow();
         sImgUrl = "";
         imgCleanfilters_Jsonclick = "";
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         ROClassString = "";
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.prompttipotelefono__default(),
            new Object[][] {
                new Object[] {
               H000T2_A3TipTelNom, H000T2_A1TipTelId
               }
               , new Object[] {
               H000T3_AGRID_nRecordCount
               }
            }
         );
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short GRID_nEOF ;
      private short AV8OrderedBy ;
      private short initialized ;
      private short gxajaxcallmode ;
      private short wbEnd ;
      private short wbStart ;
      private short subGrid_Backcolorstyle ;
      private short subGrid_Titlebackstyle ;
      private short edtTipTelId_Titleformat ;
      private short edtTipTelNom_Titleformat ;
      private short subGrid_Sortable ;
      private short subGrid_Allowselection ;
      private short subGrid_Allowhovering ;
      private short subGrid_Allowcollapsing ;
      private short subGrid_Collapsed ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short nGXWrapped ;
      private short subGrid_Backstyle ;
      private int AV20InOutTipTelId ;
      private int wcpOAV20InOutTipTelId ;
      private int Gridpaginationbar_Rowsperpageselectedvalue ;
      private int nRC_GXsfl_24 ;
      private int nGXsfl_24_idx=1 ;
      private int subGrid_Rows ;
      private int Gridpaginationbar_Pagestoshow ;
      private int subGrid_Titlebackcolor ;
      private int subGrid_Allbackcolor ;
      private int A1TipTelId ;
      private int subGrid_Selectedindex ;
      private int subGrid_Selectioncolor ;
      private int subGrid_Hoveringcolor ;
      private int edtavDdo_tiptelidtitlecontrolidtoreplace_Visible ;
      private int edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible ;
      private int edtavOrderedby_Visible ;
      private int edtavOrdereddsc_Visible ;
      private int subGrid_Islastpage ;
      private int GXPagingFrom2 ;
      private int GXPagingTo2 ;
      private int AV16PageToGo ;
      private int edtavFilterfulltext_Enabled ;
      private int idxLst ;
      private int subGrid_Backcolor ;
      private int edtavSelect_Enabled ;
      private int edtavSelect_Visible ;
      private long GRID_nFirstRecordOnPage ;
      private long AV17GridCurrentPage ;
      private long AV18GridPageCount ;
      private long GRID_nCurrentRecord ;
      private long GRID_nRecordCount ;
      private String AV21InOutTipTelNom ;
      private String wcpOAV21InOutTipTelNom ;
      private String Gridpaginationbar_Selectedpage ;
      private String Ddo_tiptelid_Activeeventkey ;
      private String Ddo_tiptelnom_Activeeventkey ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sGXsfl_24_idx="0001" ;
      private String GXKey ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String Gridpaginationbar_Class ;
      private String Gridpaginationbar_Pagingbuttonsposition ;
      private String Gridpaginationbar_Pagingcaptionposition ;
      private String Gridpaginationbar_Emptygridclass ;
      private String Gridpaginationbar_Rowsperpageoptions ;
      private String Gridpaginationbar_Previous ;
      private String Gridpaginationbar_Next ;
      private String Gridpaginationbar_Caption ;
      private String Gridpaginationbar_Emptygridcaption ;
      private String Gridpaginationbar_Rowsperpagecaption ;
      private String Ddo_tiptelid_Caption ;
      private String Ddo_tiptelid_Tooltip ;
      private String Ddo_tiptelid_Cls ;
      private String Ddo_tiptelid_Dropdownoptionstype ;
      private String Ddo_tiptelid_Titlecontrolidtoreplace ;
      private String Ddo_tiptelid_Sortedstatus ;
      private String Ddo_tiptelid_Sortasc ;
      private String Ddo_tiptelid_Sortdsc ;
      private String Ddo_tiptelid_Cleanfilter ;
      private String Ddo_tiptelid_Searchbuttontext ;
      private String Ddo_tiptelnom_Caption ;
      private String Ddo_tiptelnom_Tooltip ;
      private String Ddo_tiptelnom_Cls ;
      private String Ddo_tiptelnom_Dropdownoptionstype ;
      private String Ddo_tiptelnom_Titlecontrolidtoreplace ;
      private String Ddo_tiptelnom_Sortedstatus ;
      private String Ddo_tiptelnom_Sortasc ;
      private String Ddo_tiptelnom_Sortdsc ;
      private String Ddo_tiptelnom_Cleanfilter ;
      private String Ddo_tiptelnom_Searchbuttontext ;
      private String GX_FocusControl ;
      private String sPrefix ;
      private String divLayoutmaintable_Internalname ;
      private String divTablemain_Internalname ;
      private String divTableheader_Internalname ;
      private String divGridtablewithpaginationbar_Internalname ;
      private String sStyleString ;
      private String subGrid_Internalname ;
      private String subGrid_Class ;
      private String subGrid_Linesclass ;
      private String edtTipTelId_Title ;
      private String edtTipTelNom_Title ;
      private String subGrid_Header ;
      private String edtavSelect_Tooltiptext ;
      private String A3TipTelNom ;
      private String Gridpaginationbar_Internalname ;
      private String divHtml_bottomauxiliarcontrols_Internalname ;
      private String Ddo_tiptelid_Internalname ;
      private String TempTags ;
      private String ClassString ;
      private String StyleString ;
      private String edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname ;
      private String Ddo_tiptelnom_Internalname ;
      private String edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname ;
      private String Workwithplusutilities1_Internalname ;
      private String edtavOrderedby_Internalname ;
      private String edtavOrderedby_Jsonclick ;
      private String edtavOrdereddsc_Internalname ;
      private String edtavOrdereddsc_Jsonclick ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String edtavSelect_Internalname ;
      private String edtTipTelId_Internalname ;
      private String edtTipTelNom_Internalname ;
      private String edtavFilterfulltext_Internalname ;
      private String scmdbuf ;
      private String tblTablefilters_Internalname ;
      private String sImgUrl ;
      private String imgCleanfilters_Internalname ;
      private String imgCleanfilters_Jsonclick ;
      private String edtavFilterfulltext_Jsonclick ;
      private String sGXsfl_24_fel_idx="0001" ;
      private String edtavSelect_Jsonclick ;
      private String ROClassString ;
      private String edtTipTelId_Jsonclick ;
      private String edtTipTelNom_Jsonclick ;
      private bool entryPointCalled ;
      private bool AV9OrderedDsc ;
      private bool toggleJsOutput ;
      private bool Gridpaginationbar_Showfirst ;
      private bool Gridpaginationbar_Showprevious ;
      private bool Gridpaginationbar_Shownext ;
      private bool Gridpaginationbar_Showlast ;
      private bool Gridpaginationbar_Rowsperpageselector ;
      private bool Ddo_tiptelid_Includesortasc ;
      private bool Ddo_tiptelid_Includesortdsc ;
      private bool Ddo_tiptelid_Includefilter ;
      private bool Ddo_tiptelid_Includedatalist ;
      private bool Ddo_tiptelnom_Includesortasc ;
      private bool Ddo_tiptelnom_Includesortdsc ;
      private bool Ddo_tiptelnom_Includefilter ;
      private bool Ddo_tiptelnom_Includedatalist ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool bGXsfl_24_Refreshing=false ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool gx_refresh_fired ;
      private bool AV19Select_IsBlob ;
      private String AV10FilterFullText ;
      private String AV12ddo_TipTelIdTitleControlIdToReplace ;
      private String AV14ddo_TipTelNomTitleControlIdToReplace ;
      private String AV24Select_GXI ;
      private String lV10FilterFullText ;
      private String AV19Select ;
      private GXWebGrid GridContainer ;
      private GXWebRow GridRow ;
      private GXWebColumn GridColumn ;
      private GXUserControl ucGridpaginationbar ;
      private GXUserControl ucDdo_tiptelid ;
      private GXUserControl ucDdo_tiptelnom ;
      private GXUserControl ucWorkwithplusutilities1 ;
      private IGxDataStore dsDefault ;
      private int aP0_InOutTipTelId ;
      private String aP1_InOutTipTelNom ;
      private IDataStoreProvider pr_default ;
      private String[] H000T2_A3TipTelNom ;
      private int[] H000T2_A1TipTelId ;
      private long[] H000T3_AGRID_nRecordCount ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV11TipTelIdTitleFilterData ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV13TipTelNomTitleFilterData ;
      private GXWebForm Form ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV6WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons AV15DDO_TitleSettingsIcons ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 ;
   }

   public class prompttipotelefono__default : DataStoreHelperBase, IDataStoreHelper
   {
      protected Object[] conditional_H000T2( IGxContext context ,
                                             String AV10FilterFullText ,
                                             int A1TipTelId ,
                                             String A3TipTelNom ,
                                             short AV8OrderedBy ,
                                             bool AV9OrderedDsc )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int2 ;
         GXv_int2 = new short [5] ;
         Object[] GXv_Object3 ;
         GXv_Object3 = new Object [2] ;
         String sSelectString ;
         String sFromString ;
         String sOrderString ;
         sSelectString = " [TipTelNom], [TipTelId]";
         sFromString = " FROM [TipoTelefono]";
         sOrderString = "";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV10FilterFullText)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV10FilterFullText) or ( [TipTelNom] like '%' + @lV10FilterFullText))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV10FilterFullText) or ( [TipTelNom] like '%' + @lV10FilterFullText))";
            }
         }
         else
         {
            GXv_int2[0] = 1;
            GXv_int2[1] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            sWhereString = " WHERE" + sWhereString;
         }
         if ( ( AV8OrderedBy == 1 ) && ! AV9OrderedDsc )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelNom]";
         }
         else if ( ( AV8OrderedBy == 1 ) && ( AV9OrderedDsc ) )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelNom] DESC";
         }
         else if ( ( AV8OrderedBy == 2 ) && ! AV9OrderedDsc )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId]";
         }
         else if ( ( AV8OrderedBy == 2 ) && ( AV9OrderedDsc ) )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId] DESC";
         }
         else if ( true )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId]";
         }
         scmdbuf = "SELECT " + sSelectString + sFromString + sWhereString + sOrderString + "" + " OFFSET " + "@GXPagingFrom2" + " ROWS FETCH NEXT CAST((SELECT CASE WHEN " + "@GXPagingTo2" + " > 0 THEN " + "@GXPagingTo2" + " ELSE 1e9 END) AS INTEGER) ROWS ONLY";
         GXv_Object3[0] = scmdbuf;
         GXv_Object3[1] = GXv_int2;
         return GXv_Object3 ;
      }

      protected Object[] conditional_H000T3( IGxContext context ,
                                             String AV10FilterFullText ,
                                             int A1TipTelId ,
                                             String A3TipTelNom ,
                                             short AV8OrderedBy ,
                                             bool AV9OrderedDsc )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int4 ;
         GXv_int4 = new short [2] ;
         Object[] GXv_Object5 ;
         GXv_Object5 = new Object [2] ;
         scmdbuf = "SELECT COUNT(*) FROM [TipoTelefono]";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV10FilterFullText)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV10FilterFullText) or ( [TipTelNom] like '%' + @lV10FilterFullText))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV10FilterFullText) or ( [TipTelNom] like '%' + @lV10FilterFullText))";
            }
         }
         else
         {
            GXv_int4[0] = 1;
            GXv_int4[1] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            scmdbuf = scmdbuf + " WHERE" + sWhereString;
         }
         if ( ( AV8OrderedBy == 1 ) && ! AV9OrderedDsc )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV8OrderedBy == 1 ) && ( AV9OrderedDsc ) )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV8OrderedBy == 2 ) && ! AV9OrderedDsc )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV8OrderedBy == 2 ) && ( AV9OrderedDsc ) )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( true )
         {
            scmdbuf = scmdbuf + "";
         }
         GXv_Object5[0] = scmdbuf;
         GXv_Object5[1] = GXv_int4;
         return GXv_Object5 ;
      }

      public override Object [] getDynamicStatement( int cursor ,
                                                     IGxContext context ,
                                                     Object [] dynConstraints )
      {
         switch ( cursor )
         {
               case 0 :
                     return conditional_H000T2(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (String)dynConstraints[2] , (short)dynConstraints[3] , (bool)dynConstraints[4] );
               case 1 :
                     return conditional_H000T3(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (String)dynConstraints[2] , (short)dynConstraints[3] , (bool)dynConstraints[4] );
         }
         return base.getDynamicStatement(cursor, context, dynConstraints);
      }

      public ICursor[] getCursors( )
      {
         cursorDefinitions();
         return new Cursor[] {
          new ForEachCursor(def[0])
         ,new ForEachCursor(def[1])
       };
    }

    private static CursorDef[] def;
    private void cursorDefinitions( )
    {
       if ( def == null )
       {
          Object[] prmH000T2 ;
          prmH000T2 = new Object[] {
          new Object[] {"@lV10FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV10FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@GXPagingFrom2",SqlDbType.Int,9,0} ,
          new Object[] {"@GXPagingTo2",SqlDbType.Int,9,0} ,
          new Object[] {"@GXPagingTo2",SqlDbType.Int,9,0}
          } ;
          Object[] prmH000T3 ;
          prmH000T3 = new Object[] {
          new Object[] {"@lV10FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV10FilterFullText",SqlDbType.NVarChar,100,0}
          } ;
          def= new CursorDef[] {
              new CursorDef("H000T2", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmH000T2,11, GxCacheFrequency.OFF ,true,false )
             ,new CursorDef("H000T3", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmH000T3,1, GxCacheFrequency.OFF ,true,false )
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
                ((String[]) buf[0])[0] = rslt.getString(1, 20) ;
                ((int[]) buf[1])[0] = rslt.getInt(2) ;
                return;
             case 1 :
                ((long[]) buf[0])[0] = rslt.getLong(1) ;
                return;
       }
    }

    public void setParameters( int cursor ,
                               IFieldSetter stmt ,
                               Object[] parms )
    {
       short sIdx ;
       switch ( cursor )
       {
             case 0 :
                sIdx = 0;
                if ( (short)parms[0] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[5]);
                }
                if ( (short)parms[1] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[6]);
                }
                if ( (short)parms[2] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[7]);
                }
                if ( (short)parms[3] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[8]);
                }
                if ( (short)parms[4] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[9]);
                }
                return;
             case 1 :
                sIdx = 0;
                if ( (short)parms[0] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[2]);
                }
                if ( (short)parms[1] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[3]);
                }
                return;
       }
    }

 }

}
