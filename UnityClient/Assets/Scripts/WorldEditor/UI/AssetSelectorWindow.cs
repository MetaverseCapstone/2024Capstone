using UnityEngine;

namespace WorldEditor
{
	public class AssetSelectorWindow : MonoBehaviour
	{

		[SerializeField] private AssetCategoryDropBoxContainer _dropBoxContainer;
		public AssetCategoryDropBoxContainer DropBoxContainer
		{
			get { return _dropBoxContainer;}
		}

		// Start is called before the first frame update
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{

		}

		public void RequireCategoryList(string jsonText)
		{
			RawAssetCategoriesResult raw = JsonUtility.FromJson<RawAssetCategoriesResult>(jsonText);

			AssetCategory[] categories = new AssetCategory[raw.result.Length];

			int index = 0;
			foreach (RawAssetCategory lt in raw.result)
			{
				Debug.Log(lt.GetCategoryNameTree(0));
				categories[index] = new AssetCategory(lt);
				index++;
			}

			DropBoxContainer.RequireChildCategory(0, categories);
		}
	}
}

