using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;


public class LoginPopup : MonoBehaviour
{

    public RegisterPopup registerPopup;
    public Button closeBtn;

    public TMP_InputField idField;
    public TMP_InputField pwField;
    public TMP_Text msgTxt;

    private string id;
    private string pw;

    private string url = "http://localhost:4000";

    public void Init()
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

    public void OnClickLogin()
    {
        msgTxt.gameObject.SetActive(false);

        id = idField.text;
        pw = pwField.text;

        Debug.Log("Login Clicked");
    }

    public void OnClickSignUp()
    {
        Debug.Log("Sign Up Clicked");
        this.registerPopup.closeBtn.onClick.AddListener(() =>
        {
            this.registerPopup.Close();
        });
        this.registerPopup.Open();
    }

    public void OnClickForgot()
    {
        Debug.Log("Forgot Password? Clicked");
    }
    
}
