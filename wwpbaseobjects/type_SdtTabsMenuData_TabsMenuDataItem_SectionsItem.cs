/*
				   File: type_SdtTabsMenuData_TabsMenuDataItem_SectionsItem
			Description: Sections
				 Author: Nemo 🐠 for C# version 16.0.5.135614
		   Program type: Callable routine
			  Main DBMS: 
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using GeneXus.Http.Server;
using System.Reflection;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Web.Services.Protocols;

using GeneXus.Programs;
namespace GeneXus.Programs.wwpbaseobjects
{
	[XmlSerializerFormat]
	[XmlRoot(ElementName="TabsMenuData.TabsMenuDataItem.SectionsItem")]
	[XmlType(TypeName="TabsMenuData.TabsMenuDataItem.SectionsItem" , Namespace="SIGMA" )]
	[Serializable]
	public class SdtTabsMenuData_TabsMenuDataItem_SectionsItem : GxUserType
	{
		public SdtTabsMenuData_TabsMenuDataItem_SectionsItem( )
		{
			/* Constructor for serialization */
			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiontitle = "";

			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiondescription = "";

			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionurl = "";

		}

		public SdtTabsMenuData_TabsMenuDataItem_SectionsItem(IGxContext context)
		{
			this.context = context;
			initialize();
		}

		#region Json
		private static Hashtable mapper;
		public override String JsonMap(String value)
		{
			if (mapper == null)
			{
				mapper = new Hashtable();
			}
			return (String)mapper[value]; ;
		}

		public override void ToJSON()
		{
			ToJSON(true) ;
			return;
		}

		public override void ToJSON(bool includeState)
		{
			AddObjectProperty("SectionId", gxTpr_Sectionid, false);


			AddObjectProperty("SectionTitle", gxTpr_Sectiontitle, false);


			AddObjectProperty("SectionDescription", gxTpr_Sectiondescription, false);


			AddObjectProperty("SectionURL", gxTpr_Sectionurl, false);

			return;
		}
		#endregion

		#region Properties

		[SoapElement(ElementName="SectionId")]
		[XmlElement(ElementName="SectionId")]
		public short gxTpr_Sectionid
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionid; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionid = value;
				SetDirty("Sectionid");
			}
		}




		[SoapElement(ElementName="SectionTitle")]
		[XmlElement(ElementName="SectionTitle")]
		public String gxTpr_Sectiontitle
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiontitle; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiontitle = value;
				SetDirty("Sectiontitle");
			}
		}




		[SoapElement(ElementName="SectionDescription")]
		[XmlElement(ElementName="SectionDescription")]
		public String gxTpr_Sectiondescription
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiondescription; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiondescription = value;
				SetDirty("Sectiondescription");
			}
		}




		[SoapElement(ElementName="SectionURL")]
		[XmlElement(ElementName="SectionURL")]
		public String gxTpr_Sectionurl
		{
			get { 
				return gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionurl; 
			}
			set { 
				gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionurl = value;
				SetDirty("Sectionurl");
			}
		}




		#endregion

		#region Initialization

		public void initialize( )
		{
			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiontitle = "";
			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiondescription = "";
			gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionurl = "";
			return  ;
		}



		#endregion

		#region Declaration

		protected short gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionid;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiontitle;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectiondescription;
		 

		protected String gxTv_SdtTabsMenuData_TabsMenuDataItem_SectionsItem_Sectionurl;
		 


		#endregion
	}
	#region Rest interface
	[DataContract(Name=@"TabsMenuData.TabsMenuDataItem.SectionsItem", Namespace="SIGMA")]
	public class SdtTabsMenuData_TabsMenuDataItem_SectionsItem_RESTInterface : GxGenericCollectionItem<SdtTabsMenuData_TabsMenuDataItem_SectionsItem>, System.Web.SessionState.IRequiresSessionState
	{
		public SdtTabsMenuData_TabsMenuDataItem_SectionsItem_RESTInterface( ) : base()
		{
		}

		public SdtTabsMenuData_TabsMenuDataItem_SectionsItem_RESTInterface( SdtTabsMenuData_TabsMenuDataItem_SectionsItem psdt ) : base(psdt)
		{
		}

		#region Rest Properties
		[DataMember(Name="SectionId", Order=0)]
		public short gxTpr_Sectionid
		{
			get { 
				return sdt.gxTpr_Sectionid;

			}
			set { 
				sdt.gxTpr_Sectionid = value;
			}
		}

		[DataMember(Name="SectionTitle", Order=1)]
		public  String gxTpr_Sectiontitle
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Sectiontitle);

			}
			set { 
				 sdt.gxTpr_Sectiontitle = value;
			}
		}

		[DataMember(Name="SectionDescription", Order=2)]
		public  String gxTpr_Sectiondescription
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Sectiondescription);

			}
			set { 
				 sdt.gxTpr_Sectiondescription = value;
			}
		}

		[DataMember(Name="SectionURL", Order=3)]
		public  String gxTpr_Sectionurl
		{
			get { 
				return sdt.gxTpr_Sectionurl;

			}
			set { 
				 sdt.gxTpr_Sectionurl = value;
			}
		}


		#endregion

		public SdtTabsMenuData_TabsMenuDataItem_SectionsItem sdt
		{
			get { 
				return (SdtTabsMenuData_TabsMenuDataItem_SectionsItem)Sdt;
			}
			set { 
				Sdt = value;
			}
		}

		[OnDeserializing]
		void checkSdt( StreamingContext ctx )
		{
			if ( sdt == null )
			{
				sdt = new SdtTabsMenuData_TabsMenuDataItem_SectionsItem() ;
			}
		}
	}
	#endregion
}