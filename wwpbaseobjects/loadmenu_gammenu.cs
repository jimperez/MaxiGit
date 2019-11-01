/*
               File: WWPBaseObjects.LoadMenu_GAMMenu
        Description: Load Menu_GAMMenu
             Author: GeneXus C# Generator version 16_0_6-136889
       Generated on: 11/1/2019 15:36:51.85
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
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class loadmenu_gammenu : GXProcedure
   {
      public loadmenu_gammenu( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public loadmenu_gammenu( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                           long aP1_MenuId ,
                           long aP2_MinMenuId ,
                           out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol )
      {
         this.AV5GAMMenu = aP0_GAMMenu;
         this.AV9MenuId = aP1_MenuId;
         this.AV12MinMenuId = aP2_MinMenuId;
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         initialize();
         executePrivate();
         aP3_Gxm2rootcol=this.Gxm2rootcol;
      }

      public GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> executeUdp( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                                                                                               long aP1_MenuId ,
                                                                                               long aP2_MinMenuId )
      {
         this.AV5GAMMenu = aP0_GAMMenu;
         this.AV9MenuId = aP1_MenuId;
         this.AV12MinMenuId = aP2_MinMenuId;
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         initialize();
         executePrivate();
         aP3_Gxm2rootcol=this.Gxm2rootcol;
         return Gxm2rootcol ;
      }

      public void executeSubmit( GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> aP0_GAMMenu ,
                                 long aP1_MenuId ,
                                 long aP2_MinMenuId ,
                                 out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol )
      {
         loadmenu_gammenu objloadmenu_gammenu;
         objloadmenu_gammenu = new loadmenu_gammenu();
         objloadmenu_gammenu.AV5GAMMenu = aP0_GAMMenu;
         objloadmenu_gammenu.AV9MenuId = aP1_MenuId;
         objloadmenu_gammenu.AV12MinMenuId = aP2_MinMenuId;
         objloadmenu_gammenu.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA") ;
         objloadmenu_gammenu.context.SetSubmitInitialConfig(context);
         objloadmenu_gammenu.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objloadmenu_gammenu);
         aP3_Gxm2rootcol=this.Gxm2rootcol;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((loadmenu_gammenu)stateInfo).executePrivate();
         }
         catch ( Exception e )
         {
            GXUtil.SaveToEventLog( "Design", e);
            throw e ;
         }
      }

      void executePrivate( )
      {
         /* GeneXus formulas */
         /* Output device settings */
         AV8GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context).get();
         AV13MinMenuIdAux = AV12MinMenuId;
         AV20GXV1 = 1;
         while ( AV20GXV1 <= AV5GAMMenu.Count )
         {
            AV6GAMMenuItem = ((GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList)AV5GAMMenu.Item(AV20GXV1));
            Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
            Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
            AV13MinMenuIdAux = (long)(AV13MinMenuIdAux+1);
            Gxm1dvelop_menu.gxTpr_Id = StringUtil.Trim( StringUtil.Str( (decimal)(AV13MinMenuIdAux), 10, 0));
            Gxm1dvelop_menu.gxTpr_Link = AV6GAMMenuItem.gxTpr_Link;
            if ( AV6GAMMenuItem.gxTpr_Properties.Count > 0 )
            {
               Gxm1dvelop_menu.gxTpr_Iconclass = ((GeneXus.Programs.genexussecurity.SdtGAMProperty)AV6GAMMenuItem.gxTpr_Properties.Item(1)).gxTpr_Value;
            }
            else
            {
               if ( ( AV9MenuId > 0 ) && ( AV6GAMMenuItem.gxTpr_Properties.Count == 0 ) )
               {
                  Gxm1dvelop_menu.gxTpr_Iconclass = "menu-icon fa fa-bullseye";
               }
               else
               {
                  Gxm1dvelop_menu.gxTpr_Iconclass = "";
               }
            }
            if ( AV6GAMMenuItem.gxTpr_Properties.Count > 0 )
            {
               Gxm1dvelop_menu.gxTpr_Linktarget = ((GeneXus.Programs.genexussecurity.SdtGAMProperty)AV6GAMMenuItem.gxTpr_Properties.Item(2)).gxTpr_Value;
            }
            else
            {
               Gxm1dvelop_menu.gxTpr_Linktarget = "";
            }
            Gxm1dvelop_menu.gxTpr_Caption = AV6GAMMenuItem.gxTpr_Name;
            GXt_objcol_SdtDVelop_Menu_Item1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>();
            new GeneXus.Programs.wwpbaseobjects.loadmenu_gammenu(context ).execute(  AV6GAMMenuItem.gxTpr_Nodes,  0,  AV13MinMenuIdAux*100, out  GXt_objcol_SdtDVelop_Menu_Item1) ;
            Gxm1dvelop_menu.gxTpr_Subitems = GXt_objcol_SdtDVelop_Menu_Item1;
            AV20GXV1 = (int)(AV20GXV1+1);
         }
         if ( AV9MenuId > 0 )
         {
            Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
            Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
            AV13MinMenuIdAux = (long)(AV13MinMenuIdAux+1);
            Gxm1dvelop_menu.gxTpr_Id = StringUtil.Trim( StringUtil.Str( (decimal)(AV13MinMenuIdAux), 10, 0));
            Gxm1dvelop_menu.gxTpr_Tooltip = "";
            Gxm1dvelop_menu.gxTpr_Link = "gamwwappmenuoptions.aspx"+ "?" + GXUtil.UrlEncode("" +AV8GAMApplication.gxTpr_Id) + "," + GXUtil.UrlEncode("" +AV8GAMApplication.gxTpr_Mainmenuid);
            Gxm1dvelop_menu.gxTpr_Linktarget = "";
            Gxm1dvelop_menu.gxTpr_Iconclass = "menu-icon fa fa-tasks";
            Gxm1dvelop_menu.gxTpr_Caption = "Edit Menu Options";
         }
         if ( AV9MenuId > 0 )
         {
            Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
            Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
            AV13MinMenuIdAux = (long)(AV13MinMenuIdAux+1);
            Gxm1dvelop_menu.gxTpr_Id = StringUtil.Trim( StringUtil.Str( (decimal)(AV13MinMenuIdAux), 10, 0));
            Gxm1dvelop_menu.gxTpr_Tooltip = "";
            Gxm1dvelop_menu.gxTpr_Link = "";
            Gxm1dvelop_menu.gxTpr_Linktarget = "";
            Gxm1dvelop_menu.gxTpr_Iconclass = "menu-icon fa fa-edit";
            Gxm1dvelop_menu.gxTpr_Caption = "Developer Menu";
            Gxv3skipcount = 0;
            AV22GXV3 = 1;
            GXt_objcol_SdtProgramNames_ProgramName2 = AV21GXV2;
            new GeneXus.Programs.wwpbaseobjects.listwwpprograms(context ).execute( out  GXt_objcol_SdtProgramNames_ProgramName2) ;
            AV21GXV2 = GXt_objcol_SdtProgramNames_ProgramName2;
            while ( AV22GXV3 <= AV21GXV2.Count )
            {
               AV11ProgramName = ((GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName)AV21GXV2.Item(AV22GXV3));
               Gxv3skipcount = (int)(Gxv3skipcount+1);
               Gxm4dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
               Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems, 0);
               AV13MinMenuIdAux = (long)(AV13MinMenuIdAux+1);
               Gxm4dvelop_menu_subitems.gxTpr_Id = StringUtil.Trim( StringUtil.Str( (decimal)(AV13MinMenuIdAux), 10, 0));
               Gxm4dvelop_menu_subitems.gxTpr_Tooltip = "";
               Gxm4dvelop_menu_subitems.gxTpr_Link = AV11ProgramName.gxTpr_Link;
               Gxm4dvelop_menu_subitems.gxTpr_Linktarget = "";
               Gxm4dvelop_menu_subitems.gxTpr_Iconclass = "";
               Gxm4dvelop_menu_subitems.gxTpr_Caption = AV11ProgramName.gxTpr_Description;
               if ( ( 20 != 0 ) && ( Gxv3skipcount >= 20 ) )
               {
                  /* Exit For each command. Update data (if necessary), close cursors & exit. */
                  if (true) break;
               }
               AV22GXV3 = (int)(AV22GXV3+1);
            }
         }
         this.cleanup();
      }

      public override void cleanup( )
      {
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
         exitApplication();
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         AV8GAMApplication = new GeneXus.Programs.genexussecurity.SdtGAMApplication(context);
         AV6GAMMenuItem = new GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList(context);
         Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         GXt_objcol_SdtDVelop_Menu_Item1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "SIGMA");
         AV21GXV2 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA");
         GXt_objcol_SdtProgramNames_ProgramName2 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA");
         AV11ProgramName = new GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName(context);
         Gxm4dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private int AV20GXV1 ;
      private int Gxv3skipcount ;
      private int AV22GXV3 ;
      private long AV9MenuId ;
      private long AV12MinMenuId ;
      private long AV13MinMenuIdAux ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP3_Gxm2rootcol ;
      private GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList> AV5GAMMenu ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> AV21GXV2 ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> GXt_objcol_SdtProgramNames_ProgramName2 ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> Gxm2rootcol ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> GXt_objcol_SdtDVelop_Menu_Item1 ;
      private GeneXus.Programs.genexussecurity.SdtGAMMenuOptionList AV6GAMMenuItem ;
      private GeneXus.Programs.genexussecurity.SdtGAMApplication AV8GAMApplication ;
      private GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName AV11ProgramName ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm1dvelop_menu ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm4dvelop_menu_subitems ;
   }

}
