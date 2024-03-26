using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class HttpRequests : MonoBehaviour
{
    public IEnumerator RequestPost(string url, string json, Action<string> callback)
    {
        using (UnityWebRequest request = UnityWebRequest.PostWwwForm(url, json))
        {
            byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            yield return request.SendWebRequest();
            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(request.error);
            }
            else
            {
                string result = request.downloadHandler.text;
                Debug.Log("Request Text : " + result);
                callback(result);
            }
        }
    }

    public IEnumerator RequestGet(string url, Action<string> callback)
    {
        UnityWebRequest request = UnityWebRequest.Get(url);
        // response�� �� ������ �� �ѱ�
        yield return request.SendWebRequest();
        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(request.error);
        }
        else
        {
            // response�� ������ callback�� ����
            string result = request.downloadHandler.text;
            Debug.Log("Request Text : " + result);
            callback(result);
        }
    }

}
