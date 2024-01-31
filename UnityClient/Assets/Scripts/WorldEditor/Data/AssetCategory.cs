using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace WorldEditor
{
	public class AssetCategory
	{
		public int id;
		public string categoryName;
		public string categoryCode;
		public AssetCategory parentAssetCategory = null;
		public List<AssetCategory> childAssetCategories = null;

		AssetCategory(
			int _id,
			string _categoryName,
			string _categoryCode,
			AssetCategory _parentAssetCategory = null
		)
		{
			id = _id;
			categoryName = _categoryName;
			categoryCode = _categoryCode;

			parentAssetCategory = _parentAssetCategory;

			if(parentAssetCategory.childAssetCategories == null || parentAssetCategory.childAssetCategories.Count == 0)
				parentAssetCategory.childAssetCategories = new List<AssetCategory>();
			parentAssetCategory.childAssetCategories.Add(this);
		}
	}
}

