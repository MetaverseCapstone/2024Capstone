using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LoginPopup : MonoBehaviour
{

    public RegisterPopup registerPopup;
    public Button closeBtn;

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
