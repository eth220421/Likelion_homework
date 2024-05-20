import React, {useEffect, useState} from 'react';
import Button from "./Button";

const Loginform = ({func}) => {
  useEffect(() => {
    alert('"이메일로 회원가입" 클릭 시 회원가입으로 이동')
  }, [])

  const props = "로그인";

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeEmail = e => setEmail(e.target.value);
  const onChangePwd = e => setPwd(e.target.value);
  const onClick = () => {
    if (email == "" || pwd == "") {
      alert("이메일 주소 또는 비밀번호를 올바르게 입력해주세요.");
    }
    else {
      alert("이메일 주소 : " + email + "\n비밀번호 : " + pwd)
      setEmail("");
      setPwd("");
    }
  }
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div id="wrapper">
      <h2>사용자 로그인</h2>
      <div className="textbox">
        <p>이메일 주소</p>
        <input
          type="email"
          name='email'
          value={email}
          onChange={onChangeEmail}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="textbox">
        <p>비밀번호</p>
        <input
          type="password"
          name='pwd'
          value={pwd}
          onChange={onChangePwd}
          onKeyPress={onKeyPress}
        />
      </div>
      <div id="chk">
        <input type="checkbox" />
        <span>아이디 기억하기</span>
      </div>
      <div id="btn" onClick={onClick}>
        <Button text={props} />
      </div>
      <div id="signup">
        <span onClick={func}>이메일로 회원가입</span>
      </div>
      <div id="social">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#FEE500" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 28.5C27.4183 28.5 31 25.7018 31 22.25C31 18.7982 27.4183 16 23 16C18.5817 16 15 18.7982 15 22.25C15 24.3467 16.3215 26.2023 18.3494 27.336L17.5266 31L21.6394 28.41C22.0816 28.4692 22.5362 28.5 23 28.5Z"
            fill="#331204"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#03C75A" />
          <path
            d="M24.8146 22.9578L19.9951 16H16V29H20.1854V22.0423L25.0049 29H29V16H24.8146V22.9578Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="#F0F0F0" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9363 18.6771C14.9394 18.6718 14.9424 18.6666 14.9454 18.6614C15.7634 16.9509 17.7032 15.5317 18.5708 15.0359C23.1073 12.6933 27.0612 14.8655 28.4711 16.2444L26.0541 18.6614C23.3769 16.3931 20.6934 17.4993 19.6863 18.336C18.6757 19.0637 18.0953 20.0257 17.7811 20.8967L14.9363 18.6771Z"
            fill="#FF0000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9829 26.7343C14.9695 26.7077 14.9567 26.6815 14.9444 26.6559C13.234 23.2349 14.2317 19.9008 14.9444 18.6613C14.9453 18.6595 14.9462 18.6577 14.947 18.6559L17.7996 20.8438C17.5201 21.5957 17.4399 22.2851 17.4543 22.7051C17.5129 23.4022 17.6453 24.013 17.8332 24.5473L14.9829 26.7343Z"
            fill="#FFD600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.3583 29.4957C26.0747 31.4485 23.8848 31.6011 22.0098 31.4434C18.0311 31.1088 15.6421 28.1123 14.9449 26.656C14.944 26.6543 14.9432 26.6526 14.9424 26.6509L17.7868 24.4089C18.7554 27.3828 21.4076 28.0702 22.8 28.0039C23.9669 27.9782 24.8614 27.6718 25.5378 27.2317L25.574 27.2469L28.3583 29.4957Z"
            fill="#00A839"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.372 27.3341C26.7801 26.5069 27.3166 25.1104 27.4012 24.2855H22.7996V21.0784H30.7942C31.6147 25.91 29.7978 27.9256 28.5437 29.3168C28.519 29.3442 28.4945 29.3714 28.4702 29.3983C28.4158 29.4462 28.3615 29.4931 28.3072 29.5389L25.3884 27.3398L25.372 27.3341Z"
            fill="#0085FF"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loginform;
