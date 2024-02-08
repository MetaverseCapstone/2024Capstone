using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
using System.Windows.Forms;
using Ookii.Dialogs;

public class UploadPopup : MonoBehaviour
{
    public UnityEngine.UI.Button closeBtn;

    public UnityEngine.UI.Button imgUploadBtn;
    public UnityEngine.UI.Button modelUploadBtn;

    public GameSceneCanvas gameSceneCanvas;

    VistaOpenFileDialog dialog;
    Stream openStream = null;

    FileType fileType;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
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

    public void OnClickImgUpload()
    {
        fileType = FileType.Image;
        

    }

    public void OnClickModelUpload()
    {
        fileType = FileType.Model;
    }


    enum FileType
    {
        Image,
        Model
    }

    /*
    private string OpenFile()
    {
        dialog = new VistaOpenFileDialog();

        if (fileType == FileType.Image)
        {
            dialog.Filter = "jpg files (*.jpg)|*.jpg|png files (*.png)|*.png";
        }
        else if (fileType == FileType.Model)
        {
            dialog.Filter = "glb files (*.glb)|*.glb";
        }

        
        dialog.FilterIndex = 0;
        dialog.Title = "Select File";
    }
    */


}
