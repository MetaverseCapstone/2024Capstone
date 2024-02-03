using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace WorldEditor
{
	public class AssetThumbnailScrollView : MonoBehaviour
	{
		[SerializeField] private AssetThumbnailElement assetThumbnailElementPrefab;
		[SerializeField] private RectTransform contentContainer;

		private AssetItem[] assetItems;

		private Queue<AssetThumbnailElement> assetThumbnailPool = new Queue<AssetThumbnailElement>();
		private List<AssetThumbnailElement> activeAssetThumbnails = new List<AssetThumbnailElement>();

		protected RectTransform _rectTransform;
		public RectTransform rectTransform { get { return _rectTransform; } }

		private void Awake()
		{
			_rectTransform = GetComponent<RectTransform>();
		}
		// Start is called before the first frame update
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{

		}

		public void SetItem(AssetItem[] _assetItems)
		{
			assetItems = _assetItems;
			activeAssetThumbnails.ForEach
				(assetItem =>
				{
					assetThumbnailPool.Enqueue (assetItem);
					assetItem.SetActive(false);
				});
			activeAssetThumbnails.Clear();

			foreach(var assetItem in assetItems)
			{
				RegisterAssetThumbnail(assetItem);
			}
		}

		public void RegisterAssetThumbnail(AssetItem assetItem)
		{
			AssetThumbnailElement element = (assetThumbnailPool.Count > 0) ? assetThumbnailPool.Dequeue() : Instantiate(assetThumbnailElementPrefab, contentContainer);

			activeAssetThumbnails.Add(element);
			element.SetAsset(assetItem);
			element.SetActive(true);
		}

	}
}

