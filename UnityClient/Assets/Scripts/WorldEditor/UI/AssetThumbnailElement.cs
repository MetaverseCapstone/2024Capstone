using System.Runtime.InteropServices;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace WorldEditor
{
	public class AssetThumbnailElement : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IBeginDragHandler, IDragHandler, IEndDragHandler
	{
		[SerializeField] private RawImage thumbnailImage;
		[SerializeField] private TMP_Text thumbnailText;

		private AssetItem _asset;
		public AssetItem Asset
		{
			get { return _asset; }
		}

		private bool isPointerDown = false;
		private bool isLongPress = false;
		private float pressTime = 0f;

		private AssetThumbnailScrollView thumbnailScrollView;

		// Start is called before the first frame update
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{
			if (isPointerDown)
			{
				pressTime += Time.deltaTime;

				if (pressTime >= thumbnailScrollView.thumbnailLongPressDuration && !isLongPress)
				{
					// 길게 누르기 감지
					isLongPress = true;
					OnLongPress();
				}
			}
		}

		public void OnPointerDown(PointerEventData eventData)
		{
			isPointerDown = true;
			pressTime = 0f;
			isLongPress = false;
		}

		public void OnPointerUp(PointerEventData eventData)
		{
			isPointerDown = false;

			// 길게 누르는 도중에 드래그를 중지하면 여기서 처리할 수 있습니다.
			if (isLongPress)
			{
				OnLongPressEnd();
			}
		}

		public void OnDrag(PointerEventData eventData)
		{
			if(isLongPress)
			{
				Debug.Log("Dragging...");
			} else
			{
				thumbnailScrollView.ScrollRect.OnDrag(eventData);
			}

		}

		public void OnBeginDrag(PointerEventData e)

		{

			thumbnailScrollView.ScrollRect.OnBeginDrag(e);

		}

		public void OnEndDrag(PointerEventData e)

		{
			thumbnailScrollView.ScrollRect.OnEndDrag(e);

		}

		void OnLongPress()
		{

			Debug.Log("Long Pressed!");
		}

		void OnLongPressEnd()
		{
			Debug.Log("Long Press Ended!");
		}

		public AssetThumbnailElement InitScrollView(AssetThumbnailScrollView _thumbnailScrollView)
		{
			thumbnailScrollView = _thumbnailScrollView;
			return this;
		}

		public void SetAsset(AssetItem assetItem)
		{
			_asset = assetItem;
			thumbnailText.text = assetItem.name;
			if (assetItem.thumbnail != null) thumbnailImage.texture = assetItem.thumbnail;
		}

		public void SetActive(bool isActive)
		{
			gameObject.SetActive(isActive);
		}

		public bool IsActive
		{
			get { return gameObject.activeSelf == this; }
		}
	}
}
