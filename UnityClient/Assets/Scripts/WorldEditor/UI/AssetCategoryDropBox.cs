using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

namespace WorldEditor
{
	public class AssetCategoryDropBox : MonoBehaviour
	{
		[SerializeField] private TMP_Dropdown dropDown;
		int depth;
		AssetCategory[] assetCategories;
		AssetCategoryDropBoxContainer container;

		int _curIndex;
		public int curIndex
		{
			get { return _curIndex + 1; }
			set { _curIndex = value; dropDown.value = value + 1; }
		}
		// Start is called before the first frame update
		void Start()
		{
			dropDown.onValueChanged.AddListener(delegate
			{
				SettingCategoryDropBox();
			});
		}

		public AssetCategoryDropBox InitCategoryContainer(AssetCategoryDropBoxContainer _container)
		{
			container = _container;

			return this;
		}

		public void SetCategoryArray(AssetCategory[] _assetCategories, int _depth, int _categiryIndex = -1)
		{
			if (assetCategories.Length == 0) return;

			if(assetCategories != _assetCategories)
			{
				assetCategories = _assetCategories;
				List<TMP_Dropdown.OptionData> options = new List<TMP_Dropdown.OptionData>(assetCategories.Length + 1);
				options[0] = new TMP_Dropdown.OptionData("ÀüÃ¼");
				for (int i = 1; i < options.Count + 1; i++)
				{
					options[i] = new TMP_Dropdown.OptionData(assetCategories[i].categoryName);
				}

				dropDown.options = options;
			}

			depth = _depth;
			if(_curIndex!=_categiryIndex) curIndex = _categiryIndex;
		}

		void SettingCategoryDropBox()
		{
			var categories = (curIndex == 0) ? assetCategories : assetCategories[curIndex].child;
			if (categories != null && categories.Length > 0) container.RequireChildCategory(depth + 1, categories);
		}

		public void SetActive(bool isActive)
		{
			gameObject.SetActive(isActive);
		}
	}
}

