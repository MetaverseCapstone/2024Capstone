using UnityEngine;

namespace WorldEditor
{
	public class AssetSelectorWindow : MonoBehaviour
	{

		[SerializeField] private AssetCategoryDropBoxContainer _dropBoxContainer;
		public AssetCategoryDropBoxContainer dropBoxContainer
		{
			get { return _dropBoxContainer;}
		}

		// Start is called before the first frame update
		void Start()
		{
			RequireCategoryList();
		}

		// Update is called once per frame
		void Update()
		{

		}

		//////////// юс╫ц

		public TextAsset textAsset;

		public void RequireCategoryList()
		{
			RawAssetCategoriesResult raw = JsonUtility.FromJson<RawAssetCategoriesResult>(textAsset.text);

			AssetCategory[] categories = new AssetCategory[raw.result.Length];

			int index = 0;
			foreach (RawAssetCategory lt in raw.result)
			{
				Debug.Log(lt.GetCategoryNameTree(0));
				categories[index] = new AssetCategory(lt);
				index++;
			}

			dropBoxContainer.RequireChildCategory(0, categories);
		}
	}
}

