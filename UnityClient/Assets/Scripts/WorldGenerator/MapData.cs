using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.Script
{
	[System.Serializable]
	public class MapData
	{
		private int mapId;
		public string mapName;
		public Time mapCTime;
		public MapSize mapSize;
		public List<string> Tags;
		public List<MapObject> objects;
	}

	[System.Serializable]
	public class MapSize
	{
		public int width;
		public int height;
	}


	[System.Serializable]
	public class MapObject
	{
		public int obj_id;
		public int ast_id;
		public Position position;
		public Rotation rotation;
		public Scale scale;
		public string type;
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