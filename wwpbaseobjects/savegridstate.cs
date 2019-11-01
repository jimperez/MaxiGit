/*
               File: WWPBaseObjects.SaveGridState
        Description: Save Grid State
             Author: GeneXus C# Generator version 16_0_6-136889
       Generated on: 11/1/2019 15:36:54.4
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
   public class savegridstate : GXProcedure
   {
      public savegridstate( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public savegridstate( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( String aP0_UserCustomKey ,
                           String aP1_UserCustomValue )
      {
         this.AV8UserCustomKey = aP0_UserCustomKey;
         this.AV9UserCustomValue = aP1_UserCustomValue;
         initialize();
         executePrivate();
      }

      public void executeSubmit( String aP0_UserCustomKey ,
                                 String aP1_UserCustomValue )
      {
         savegridstate objsavegridstate;
         objsavegridstate = new savegridstate();
         objsavegridstate.AV8UserCustomKey = aP0_UserCustomKey;
         objsavegridstate.AV9UserCustomValue = aP1_UserCustomValue;
         objsavegridstate.context.SetSubmitInitialConfig(context);
         objsavegridstate.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objsavegridstate);
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((savegridstate)stateInfo).executePrivate();
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
         AV10Session.Set(AV8UserCustomKey, AV9UserCustomValue);
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
         AV10Session = context.GetSession();
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private String AV8UserCustomKey ;
      private String AV9UserCustomValue ;
      private IGxSession AV10Session ;
   }

}
