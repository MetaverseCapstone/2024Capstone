using Assets.Scripts.Thread;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts.Clean
{
	public class Gltf_Thread_Manager : Gltf_Manager
	{
		private Coroutine _coroutine;
		private static bool ReLoad = false;

		private static readonly List<Gltf_Thread_Manager> AssetThread = new List<Gltf_Thread_Manager>(); // 쓰레드를 관리하는 리스트

		// 각 쓰레드에게 부여될 Task를 담을 리스트
		protected static List<LoadTask> DownTasks = new List<LoadTask>();
		protected static List<LoadTask> LoadTasks = new List<LoadTask>();
		protected static List<LoadTask> WearTasks = new List<LoadTask>();
		protected static List<LoadTask> EndTasks = new List<LoadTask>();

		GameObject main;

		private void Start()
		{
			main = GameObject.FindWithTag("Player");

			AssetThread.Add(main.GetComponent<AssetDownThread>());
			AssetThread.Add(main.GetComponent<AssetLoadThread>());
			AssetThread.Add(main.GetComponent<AssetWearThread>());
			AssetThread.Add(main.GetComponent<AssetEndThread>());

			glb_data = new Dictionary<int, byte[]>();

			objectDir = Path.Combine(Application.persistentDataPath, localDirectory);
			if (!Directory.Exists(objectDir)) // 디렉토리가 존재 여부 확인
			{
				Directory.CreateDirectory(objectDir);
				Debug.Log("Create Directory");
			}
		}

		// 쓰레드를 시작하는 메서드
		public void ThreadStart(Coroutine _coroutine, List<LoadTask> Tasks)
		{
			_coroutine = StartCoroutine(GltfTaskCoroutine(Tasks));
		}

		// 쓰레드를 멈추는 메서드
		public void ThreadStop()
		{
			StopCoroutine(this._coroutine);
		}

		// Down 쓰레드에게 작업을 부여하는 메서드
		public void LoadTaskInsert(string user_id, int ast_id, GameObject gltfObj)
		{
			DownTasks.Add(new LoadTask(user_id, ast_id, gltfObj));
		}

		public List<Gltf_Thread_Manager> Get_Threads()
		{
			return AssetThread;
		}

		public Coroutine GetCoroutine()
		{
			return _coroutine;
		}

		public bool Get_ReLoad()
		{
			return ReLoad;
		}

		public void Set_ReLoad()
		{
			ReLoad = !ReLoad;
		}

		// 리로드 메서드
		public IEnumerator ThreadInit()
		{
			Set_ReLoad();
			yield return new WaitUntil(() => DownTasks.Count == 0 && LoadTasks.Count == 0 && WearTasks.Count == 0); // 쓰레드의 모든 작업이 취소되기를 기다림
		}

		// Task 부여를 기다리는 메서드
		protected IEnumerator GltfTaskCoroutine(List<LoadTask> Tasks)
		{
			while (Application.isPlaying)
			{
				yield return new WaitUntil(() => (Tasks.Count != 0)); // Task가 부여되기를 기다림

				if (Tasks.Count != 0 )
				{
					LoadTask task = Tasks[0];

					yield return ProceedTask(task); // Task 수행
				}
			}
		}

		// 쓰레드의 작업 템플릿 메서드
		protected virtual IEnumerator ProceedTask(LoadTask task)
		{
			yield return null;
		}
	}
}