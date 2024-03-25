using Assets.Scripts.Thread;
using Assets.Scripts.WorldGenerator.Thread;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts.Clean
{
	public class Gltf_Thread_Manager : MonoBehaviour
	{
		private static readonly List<GltfThread> AssetThreads = new List<GltfThread>(); // 쓰레드를 관리하는 리스트

		GameObject main;

		private void Start()
		{
			main = GameObject.FindWithTag("Player");

			GltfThread.Set_Environment();
			GltfThread.Set_Thread_Manager(main.GetComponent<Gltf_Thread_Manager>());

			AssetThreads.Add(main.AddComponent<AssetDownThread>());
			AssetThreads.Add(main.AddComponent<AssetLoadThread>());
			AssetThreads.Add(main.AddComponent<AssetWearThread>());
			AssetThreads.Add(main.AddComponent<AssetEndThread>());

			for (int i = 0; i < AssetThreads.Count; i++)
			{
				ThreadStart(Get_Thread(i));
			}
		}

		// 쓰레드를 시작하는 메서드
		public void ThreadStart(GltfThread thread)
		{
			Coroutine cor = StartCoroutine(thread.GltfTaskCoroutine());
			thread.SetCoroutine(cor);
		}

		// 쓰레드를 멈추는 메서드
		public void ThreadStop(GltfThread thread)
		{
			StopCoroutine(thread.GetCoroutine());
		}

		public GltfThread Get_Thread(int index)
		{
			return AssetThreads[index];
		}

		// 리로드 메서드
		public IEnumerator ThreadInit()
		{
			GltfThread.Set_ReLoad();
			yield return new WaitUntil(() => AssetThreads[0].TaskCount() == 0
											&& AssetThreads[0].TaskCount() == 0
											&& AssetThreads[0].TaskCount() == 0); // 쓰레드의 모든 작업이 취소되기를 기다림
		}

		public void LoadTaskInsert(LoadTask task)
		{
			Get_Thread(0).TaskInsert(task);
		}
	}
}