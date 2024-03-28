using System.Collections.Generic;
using UnityEngine;

namespace Assets.Script
{
	[System.Serializable]
	public class MapData
	{
		public int map_id;
		public string mapName;
		public float mapCTime;
		public MapSize mapSize = new MapSize();
		public List<string> Tags = new List<string>();
		public int objCount;
	}

	[System.Serializable]
	public class MapSize
	{
		public int horizontal;
		public int vertical;
		public int height;
	}


	[System.Serializable]
	public class ObjectData
	{
		public int map_id;
		public List<MapObject> objects = new List<MapObject>();
	}

	[System.Serializable]
	public class MapObject
	{
		public int obj_id;
		public int ast_id;
		public Transform transform = new Transform();
		public string type;
		public bool rigidbody = false;
		public bool meshcollider = false;
	}

	[System.Serializable]
	public class Transform
	{
		public Position position;
		public Rotation rotation;
		public Scale scale;
	}

	[System.Serializable]
	public class Position
	{
		public float x;
		public float y;
		public float z;
	}

	[System.Serializable]
	public class Rotation
	{
		public float x;
		public float y;
		public float z;
	}

	[System.Serializable]
	public class Scale
	{
		public float x;
		public float y;
		public float z;
	}
}