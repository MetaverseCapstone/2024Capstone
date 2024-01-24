using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using TMPro;

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
    public TMP_Text successfulTxt;
    public TMP_Text failText;

    private string id;
    private string email;
    private string pw;

    private string url = "http://localhost:4000";

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
        failText.gameObject.SetActive(false);
        successfulTxt.gameObject.SetActive(false);

        id = idField.text;
        email = emailField.text;
        pw = pwField.text;

        Debug.Log("Register Clicked");
        Debug.Log("ID : " + id + " Email : " + email + " PW : " + pw);

        UserInfo userInfo = new UserInfo
        {
            id = id,
            email = email,
            pw = pw,
        };

        string json = JsonUtility.ToJson(userInfo);


        /*
        if (!findUserID(id))
        {
            
        }
        else
        {
            failText.text = "This ID is already taken. Please enter a different ID.";
            failText.gameObject.SetActive(true);
        }
        */
        
    }

    public bool findDuplicatet(string id, string email)
    {
        string duplicateIDU = url + "/users/duplicate";

        return false;
    }

    IEnumerator RequestPost(string url, string json)
    {
        using(UnityWebRequest request = UnityWebRequest.PostWwwForm(url, json))
        {
            byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            yield return request.SendWebRequest();   
        }
    }

    IEnumerator RequestGet(string url)
    {
        UnityWebRequest request = UnityWebRequest.Get(url);
        yield return request.SendWebRequest();
        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(request.error);
        }
        else
        {
            Debug.Log(request.downloadHandler.text);
        }
    }

}
