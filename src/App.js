import "./App.css";
import React, {useState} from 'react';

import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Article from "./components/Article.jsx";
import Loginform from "./components/Loginform.jsx";
import Signupform from "./components/Signupform.jsx";

import "./components/form.css";

function App() {
  const props01 = "로그인";
  const props02 = "내 정보";
  const props03 = "버튼";
  const props04 = [
    "이용약관",
    "개인정보처리방침",
    "고객센터",
    "사업자 정보확인",
  ];
  const props05 = [
    "로보뉴스",
    "[리포트 브피링] 삼성전자, '기회가 왔다' 목표가 94,000원",
    "[서울 = 뉴스핌] 로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해 '기회가 왔다'라며 투자의견 '매수(유지)'의 신규 리포트를 발행하였고, 목표를 94,000원으로 내놓았다...",
    "https://s3-alpha-sig.figma.com/img/bdf4/2965/7458d9a36ced3929ad84a79fa527d95c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeWDaRD1ezBQxr-urqVa4ALOcxVXL-Emfcr3X14-9bIj9hxSVQuO~plNRTxXqTzMRHrRXHr6veab4VMEXe0zUVfR~EtM8X-fkxneVam2LrEWLErCvnYmjyNekeGWnLU1c3ot5UYhXeuFX7oHLOH5-EEND9ML-W7y0vtVQWyhUy8sDTJENjMvbahc4qhFy9u4kOZxigPJ4Xn4BGwxHsaXqgTM5Yr-gr-skI52kcQ9S8kPZwx32hblrgIxz4BFhYLkBc2omgy6~X9AO0Gf-b6cc2dL921n5zYnQDaSWGTbHPqfT6KJP9ymxdMFbxp0diskhlw0sJi0U0XArW5Mykh90A__"
  ]

  // <article> 태그 내부 변경
  const [toggle, setToggle] = useState(true);
  const changeArticle = () => {
    setToggle(!toggle)
  }

  return (
    <body>
      <header>
        <Header status={props01} func={changeArticle}/>
      </header>
      <article>
        {toggle ? (<Loginform func={changeArticle} />) : (<Signupform />)}
      </article>
      <footer>
        <Footer array={props04}/>
      </footer>
    </body>
  );
}

export default App;
