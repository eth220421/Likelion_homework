import Article from "../components/Article";

export default function News() {
  const report = [
    "로보뉴스",
    "[리포트 브피링] 삼성전자, '기회가 왔다' 목표가 94,000원",
    "[서울 = 뉴스핌] 로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해 '기회가 왔다'라며 투자의견 '매수(유지)'의 신규 리포트를 발행하였고, 목표를 94,000원으로 내놓았다...",
    "https://s3-alpha-sig.figma.com/img/bdf4/2965/7458d9a36ced3929ad84a79fa527d95c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnKfrJv6P6q2UFjvbdrFnQGJZ0~6o8Eran7otVXS3hbqtGS8XywYhrfCmsEIXGzreBH7GwjFfPcT~e1uSBzt6ZmOCSXWXARTdEaQG8PwIwE~FMcxAKlYdQoRfIXkMim3ahfgCNckdayNuFehSW7zWGkw4zOfvpgvRJsg7ZeV4WMH6-b-Z9OAixRqFFrwavdVF5lMTKraPM9U5yV-5Ehtww-TBxdAc-fgmuTKk1nLE28qvi0OwWzKh9jE2PorL3kLupA7rreygjIyXyO4rEVda5OoNcr~Qi8WSkOYz459HbgQEqV~u8vQxGM9iGuf0AFK4IQYq9qjwe5DCkZTGFSoxw__",
  ];

  return (
    <div>
      <h2>
        전체 뉴스
      </h2>
      <div>
        <Article array={report} />
        <Article array={report} />
        <Article array={report} />
        <Article array={report} />
      </div>
    </div>
  );
}
