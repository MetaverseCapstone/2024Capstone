using System.Collections;
using UnityEngine;

namespace Assets.Scripts.WorldGenerator
{
	public class TestMover : MonoBehaviour
	{
		public GameObject map;
		public LayerMask instantiateMask; // 레이캐스트 생성 마스크
		public LayerMask destroyMask; // 레이캐스트 삭제 마스크
		public GameObject onMyHand; // 레이캐스트로 생성할 오브젝트 프리팹

		public float maxInstantiateRange = 10.0f; // 레이캐스트 최대 범위 
												  // Use this for initialization

		Camera cam;
		Vector3 ScreenCenter;

		void Start()
		{
			cam = Camera.main;
			ScreenCenter = new Vector3(cam.pixelWidth / 2, cam.pixelHeight / 2);
			onMyHand = (GameObject)Resources.Load("WorldGenerator/Cube");
		}

		// Update is called once per frame
		void Update()
		{

			if (Input.GetMouseButtonDown(1)) // 오브젝트 생성 (Create)
			{
				Ray ray = cam.ScreenPointToRay(ScreenCenter);
				bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, instantiateMask);

				// hit 성공 : hit 한 지점 + 물체의 높이
				// hit 실패 : 최대 raycast 길이만큼
				Vector3 spawn_point = isHit
						? hit.point + new Vector3(0, onMyHand.transform.localScale.y / 2, 0)
						: cam.transform.position + cam.transform.forward * maxInstantiateRange;


				var copyObject = Instantiate(onMyHand, spawn_point, Quaternion.identity);
				copyObject.transform.eulerAngles = new Vector3(Random.Range(0, 10), Random.Range(0, 10), Random.Range(0, 10));
				copyObject.transform.localScale = new Vector3(Random.Range(0.5f, 2), Random.Range(0.5f, 2), Random.Range(0.5f, 2));

				MeshCollider collider = copyObject.AddComponent<MeshCollider>();
				if (collider != null)
					collider.convex = true;

				//Rigidbody rb = copyObject.AddComponent<Rigidbody>();
				//if (rb != null)
				//	rb.mass = 1.0f;

				BoxCollider boxCollider = copyObject.AddComponent<BoxCollider>();

				copyObject.SetActive(true);
			}
			if (Input.GetMouseButtonDown(0))
			{
				Ray ray = cam.ScreenPointToRay(ScreenCenter);
				bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, destroyMask);
				if (isHit)
				{
					Destroy(hit.transform.gameObject);
				}
				else
				{
				}

			}
		}
	}
}