// 제출 이벤트 받음(이벤트 핸들링
// 제출된 입력 값들을 참조
// 입력값에 문제가 있는 경우 이를 감지
// 가입 환영 인사 제공

const form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault() // 기존 기능 차단(새로고침)

    let userId = e.target.id.value;
    let userPw1 = e.target.pw1.value;
    let userPw2 = e.target.pw2.value;
    let userName = e.target.name.value;
    let userPhone = e.target.phone.value;
    let userPosition = e.target.position.value;
    let userGender = e.target.gender.value;
    let userEmail = e.target.email.value;
    let userIntro = e.target.intro.value;

    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        return;
    }

    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    // 가입이 잘 되었다는 환영 인사!
    document.body.innerHTML = "";
    document.write(`<p>${userId}님 환영합니다</p>`);
})