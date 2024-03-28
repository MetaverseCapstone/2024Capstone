using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace User.Script
{
    [System.Serializable]

    public class UserData
    {
        private int priId; // DB에서 자동 생성되는 primary key 의미
        public string id; // 아이디
        public string pw; // 비밀번호

        public UserData()
        {

        }
        public UserData(string _id, string _pw)
        {
            this.id = _id;
            this.pw = _pw;
        }

    }
}

