import React, {useEffect, useState} from 'react';
import Button from "./Button.jsx";

const Signupform = () => {
  useEffect(() => {
    alert('우측 상단 "로그인" 클릭 시 로그인으로 이동')
  },[])

  const props = '회원가입';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [repeat, SetRepeat] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangePwd = e => setPwd(e.target.value);
  const onChangeRepeat = e => SetRepeat(e.target.value);

  const onClick = () => {
    if (name == "" || email == "" || pwd == "") {
      alert('이름, 이메일 주소, 비밀번호를 올바르게 입력했는지 확인해주세요.');
    }
    else if (pwd != repeat) {
      alert('"비밀번호 재입력"란을 올바르게 입력해주세요.');
    }
    else {
      alert("이름 : " + name + "\n이메일 주소 : " + email + "\n비밀번호 : " + pwd);
    }
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }
  
  return (
    <div id="wrapper">
      <h2>회원가입</h2>
      <div className="textbox">
        <p>이름</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="textbox" id="email">
        <p>이메일 주소</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          onKeyPress={onKeyPress}
        />
        <input type="button" id="auth" value="인증하기" />
      </div>
      <div className="textbox">
        <p>비밀번호</p>
        <input
          type="password"
          name="pwd"
          value={pwd}
          onChange={onChangePwd}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="textbox">
        <p>비밀번호 재입력</p>
        <input
          type="password"
          name="repeat"
          value={repeat}
          onChange={onChangeRepeat}
          onKeyPress={onKeyPress}
        />
      </div>
      <br/>
      <div id="btn" onClick={onClick}>
        <Button text={props} />
      </div>
    </div>
  );
};

export default Signupform;
