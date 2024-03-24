using Assets.Scripts.Clean;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.Scripts.WorldGenerator
{
	public class TestMover : MonoBehaviour
	{
		private Gltf_Thread_Manager AssetThreadManager;
		public GameObject map;
		public GameObject main;
		public GameObject copyObject;

		public LayerMask instantiateMask;
		public LayerMask destroyMask;
		public int onMyHand;

		public float maxInstantiateRange = 10.0f;

		Camera cam;
		Vector3 ScreenCenter;

		void Start()
		{
			main = GameObject.FindWithTag("Player");

			cam = Camera.main;
			ScreenCenter = new Vector3(cam.pixelWidth / 2, cam.pixelHeight / 2);
			onMyHand = 1;
		}

		void Update()
		{
			if (Input.GetKeyDown(KeyCode.P))
			{
				onMyHand++;
				onMyHand %= 10;
				if (onMyHand == 0) onMyHand = 1;
			}
			if (Input.GetMouseButtonDown(0))
			{
				StartCoroutine(DestroyObject());
			}
			if (Input.GetMouseButtonDown(1))
			{
				if (AssetThreadManager == null)
				{
					AssetThreadManager = main.GetComponent<Gltf_Thread_Manager>();
				}
				StartCoroutine(CreateObject());
			}
		}

		IEnumerator CreateObject()
		{
			Ray ray = cam.ScreenPointToRay(ScreenCenter);
			bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, instantiateMask);

			Vector3 spawn_point = isHit
				? hit.point + new Vector3(0, 30, 0)
				: cam.transform.position + cam.transform.forward * maxInstantiateRange;

			copyObject = new GameObject();
			copyObject.transform.position = spawn_point;
			copyObject.transform.eulerAngles = new Vector3(Random.Range(0, 10), Random.Range(0, 10), Random.Range(0, 10));
			copyObject.transform.localScale = new Vector3(Random.Range(0.5f, 2), Random.Range(0.5f, 2), Random.Range(0.5f, 2));

			copyObject.tag = "Object";

			AssetObject asset = copyObject.AddComponent<AssetObject>();
			if (asset != null)
			{
				asset.obj_id = 1;
				asset.ast_id = onMyHand;
			}

			MeshCollider collider = copyObject.AddComponent<MeshCollider>();
			if (collider != null)
				collider.convex = true;

			//Rigidbody rb = copyObject.AddComponent<Rigidbody>();
			//if (rb != null)
			//	rb.mass = 1.0f;

			copyObject.SetActive(true);

			AssetThreadManager.LoadTaskInsert("test_user_id", onMyHand, copyObject); // 에셋 쓰레드에게 Task 부여

			yield return null;
		}

		IEnumerator DestroyObject()
		{
			Ray ray = cam.ScreenPointToRay(ScreenCenter);
			bool isHit = Physics.Raycast(ray, out RaycastHit hit, maxInstantiateRange, destroyMask);
			if (isHit)
			{
				Destroy(hit.transform.gameObject);
				yield return new WaitForSecondsRealtime(0.3f);
			}
			else
			{
				yield return null;
			}
		}
	}
}
