using Assets.Scripts.Clean;
using Assets.Scripts.Routine;
using Assets.Scripts.WorldGenerator.Routine;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts.Routine
{
	public class Gltf_Routine_Manager : MonoBehaviour
	{
		private static readonly List<GltfRoutine> AssetRoutines = new List<GltfRoutine>(); // Routine를 관리하는 리스트

		GameObject main;

		private static Gltf_Routine_Manager instance = null;

		private void Awake()
		{
			if(Gltf_Routine_Manager.instance == null)
			{
				Gltf_Routine_Manager.instance = this;
			} else
			{
				GameObject.Destroy(Gltf_Routine_Manager.instance.gameObject);
			}
		}

		private void OnDestroy()
		{
			if(Gltf_Routine_Manager.instance == this) {
				Gltf_Routine_Manager.instance = null;
			}
		}

		private void Start()
		{

			GltfRoutine.Set_Environment();
			GltfRoutine.Set_Routine_Manager(GetComponent<Gltf_Routine_Manager>());

			AssetRoutines.Add(gameObject.AddComponent<AssetDownRoutine>());
			AssetRoutines.Add(gameObject.AddComponent<AssetLoadRoutine>());
			AssetRoutines.Add(gameObject.AddComponent<AssetWearRoutine>());
			AssetRoutines.Add(gameObject.AddComponent<AssetEndRoutine>());

			for (int i = 0; i < AssetRoutines.Count; i++)
			{
				RoutineStart(Get_Routine(i));
			}
		}

		public static Gltf_Routine_Manager Instance { get { return instance; } }

		// Routine를 시작하는 메서드
		public void RoutineStart(GltfRoutine Routine)
		{
			Coroutine cor = StartCoroutine(Routine.GltfTaskCoroutine());
			Routine.SetCoroutine(cor);
		}

		// Routine를 멈추는 메서드
		public void RoutineStop(GltfRoutine Routine)
		{
			StopCoroutine(Routine.GetCoroutine());
		}

		public GltfRoutine Get_Routine(int index)
		{
			return AssetRoutines[index];
		}

		// 리로드 메서드
		public IEnumerator RoutineInit()
		{
			GltfRoutine.Set_ReLoad();
			yield return new WaitUntil(() => AssetRoutines[0].TaskCount() == 0
											&& AssetRoutines[0].TaskCount() == 0
											&& AssetRoutines[0].TaskCount() == 0); // Routine의 모든 작업이 취소되기를 기다림
		}

		public void LoadTaskInsert(LoadTask task)
		{
			Get_Routine(0).TaskInsert(task);
		}

		public void CreateObject(int asset_id, Vector3 spawn_point)
		{
			CreateObject(asset_id, spawn_point, Vector3.zero);
		}
		public void CreateObject(int asset_id, Vector3 spawn_point, Vector3 eulerAngles)
		{


			var copyObject = new GameObject();
			copyObject.transform.position = spawn_point;
			//copyObject.transform.eulerAngles = new Vector3(Random.Range(0, 10), Random.Range(0, 10), Random.Range(0, 10));
			//copyObject.transform.localScale = new Vector3(Random.Range(0.5f, 2), Random.Range(0.5f, 2), Random.Range(0.5f, 2));
			copyObject.transform.eulerAngles = eulerAngles;
			copyObject.transform.localScale = Vector3.one;

			copyObject.tag = "Object";

			AssetObject asset = copyObject.AddComponent<AssetObject>();
			if (asset != null)
			{
				asset.obj_id = 1;
				asset.ast_id = asset_id;
			}

			MeshCollider collider = copyObject.AddComponent<MeshCollider>();
			if (collider != null)
				collider.convex = true;

			//Rigidbody rb = copyObject.AddComponent<Rigidbody>();
			//if (rb != null)
			//	rb.mass = 1.0f;

			copyObject.SetActive(true);

			LoadTaskInsert(new LoadTask("test_user_id", asset_id, asset)); // 에셋 Routine에게 Task 부여

		}
	}
}