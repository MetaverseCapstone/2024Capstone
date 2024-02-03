using UnityEngine;

namespace WorldEditor
{
	public class WorldEditorController : MonoBehaviour
	{

		//s: 임시
		public TextAsset textAsset;

		//e: 임시

		[SerializeField] private AssetSelectorWindow _assetSelectorWindow;
		public AssetSelectorWindow AssetSelectorWindow
		{
			get { return _assetSelectorWindow; }
		}

		private static WorldEditorController instance = null;

		void Awake()
		{
			if (null == instance)
			{
				instance = this;

				DontDestroyOnLoad(this.gameObject);
			}
			else
			{
				Destroy(this.gameObject);
			}
		}

		public static WorldEditorController Instance
		{
			get
			{
				if (null == instance)
				{
					return null;
				}
				return instance;
			}
		}
		// Start is called before the first frame update
		void Start()
		{
			_assetSelectorWindow.RequireCategoryList(textAsset.text);
		}

		// Update is called once per frame
		void Update()
		{

		}

	}
}

