using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class UserInfo
{
    public string id;
    public string email;
    public string pw;
}

public class RegisterPopup : MonoBehaviour
{
    public Button closeBtn;
    public TMP_InputField idField;
    public TMP_InputField emailField;
    public TMP_InputField pwField;
    public TMP_Text msgTxt;

    private string id;
    private string email;
    private string pw;

    private string url = "http://localhost:4000";
    private string duplicateIDUrl = "/users/duplicate?type=loginId&content=";

    public void Awake()
    {

    }

    public void Start()
    {

    }

    public void Update()
    {

    }


    public void Open()
    {
        this.gameObject.SetActive(true);
    }

    public void Close()
    {
        this.gameObject.SetActive(false);
    }

    public void OnClickRegister()
    {
        msgTxt.gameObject.SetActive(false);

        id = idField.text;
        email = emailField.text;
        pw = pwField.text;

        Debug.Log("Register Clicked");
        Debug.Log("ID : " + id + " Email : " + email + " PW : " + pw);


        // ID 중복 검사를 위한 코루틴 생성 및 실행
        StartCoroutine(RequestGet(url + duplicateIDUrl + id, (callback) =>
        {
            Debug.Log("RequestGet Callback : " + callback);
            if (callback == "true")
            {
                msgTxt.gameObject.SetActive(true);
                msgTxt.color = Color.green;
                msgTxt.text = "This ID is UNIQUE! GOOD!";
            }
            else
            {
                msgTxt.gameObject.SetActive(true);
                msgTxt.color = Color.red;
                msgTxt.text = "Register Failed. Check your ID";
            }
        }));
    }


    IEnumerator RequestPost(string url, string json, Action<string> callback)
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

    IEnumerator RequestGet(string url, Action<string> callback)
    {
        UnityWebRequest request = UnityWebRequest.Get(url);
        // response가 올 때까지 턴 넘김
        yield return request.SendWebRequest();
        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(request.error);
        }
        else
        {
            // response의 내용을 callback에 넣음
            string result = request.downloadHandler.text;
            Debug.Log("Request Text : " + result);
            callback(result);
        }
    }

}
