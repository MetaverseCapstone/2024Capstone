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
			RawAssetCategory[] raw = JsonUtility.FromJson<RawAssetCategory[]>(textAsset.text);

			AssetCategory[] categories = new AssetCategory[raw.Length];

			for(int i = 0;i<raw.Length; i++)
			{
				Debug.Log(raw[i].GetCategoryNameTree(0));
				categories[i] = new AssetCategory(raw[i]);
			}

			dropBoxContainer.RequireChildCategory(0, categories);
		}
	}
}

