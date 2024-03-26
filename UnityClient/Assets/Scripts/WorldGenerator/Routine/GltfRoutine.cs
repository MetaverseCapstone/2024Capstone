using Assets.Scripts.Clean;
using Assets.Scripts.Routine;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts.WorldGenerator.Routine
{
	public class GltfRoutine : Gltf_Manager
	{
		protected static Gltf_Routine_Manager RoutineManager;

		protected Coroutine _coroutine;
		protected Queue<LoadTask> Tasks;
		private static bool ReLoad = false;

		public static void Set_Environment()
		{
			glb_data = new Dictionary<int, byte[]>();

			objectDir = Path.Combine(Application.persistentDataPath, localDirectory);
			if (!Directory.Exists(objectDir)) // 디렉토리가 존재 여부 확인
			{
				Directory.CreateDirectory(objectDir);
				Debug.Log("Create Directory");
			}
		}

		public static void Set_Routine_Manager(Gltf_Routine_Manager manager)
		{
			RoutineManager = manager;
		}

		public static bool Get_ReLoad()
		{
			return ReLoad;
		}

		public static void Set_ReLoad()
		{
			ReLoad = !ReLoad;
		}

		public Coroutine GetCoroutine()
		{
			return _coroutine;
		}

		public void SetCoroutine(Coroutine coroutine)
		{
			_coroutine = coroutine;
		}

		// Routine에게 작업을 부여하는 템플릿 메서드
		public void TaskInsert(LoadTask task)
		{
			Tasks.Enqueue(task);
		}

		// Routine가 맡은 작업의 개수 반환하는 메서드
		public int TaskCount()
		{
			return Tasks.Count;
		}

		// Task 부여를 기다리는 메서드
		public IEnumerator GltfTaskCoroutine()
		{
			Set_Tasks();

			while (Application.isPlaying)
			{
				yield return new WaitUntil(() => (TaskCount() != 0)); // Task가 부여되기를 기다림

				if (TaskCount() != 0)
				{
					LoadTask task = Tasks.Dequeue();

					yield return ProceedTask(task); // Task 수행
				}
			}
		}

		protected virtual void Set_Tasks()
		{
		}

		// Routine의 작업 템플릿 메서드
		protected virtual IEnumerator ProceedTask(LoadTask task)
		{
			yield return null;
		}
	}
}