import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    residents: [
      {
        id: '0',
        name: '이가은',
        password: '1234',
        movies: [

        ],
      },
      {
        id: '1',
        name: '송대현',
        password: '4321',
        movies: [

        ],
      },
      {
        id: '2',
        name: '조용현',
        password: '1423',
        movies: [{ "adult": false, "backdrop_path": "/yBq4jWZLaEJIssuVx2fAysEwJnt.jpg", "genre_ids": [18, 10749], "id": 4348, "original_language": "en", "original_title": "Pride & Prejudice", "overview": "베넷 가의 다섯 자매 중 둘째인 엘리자베스는 사랑하는 사람과의 결혼을 믿는 자존심 강하고 영리한 소녀이다. 부유하고 명망있는 가문의 신사 빙리와 그의 친구 다아시가 여름 동안 대저택에 머물게 되고, 댄스 파티에서 처음 만난 엘리자베스와 다아시는 서로에게서 눈을 떼지 못한다. 다아시는 아름답고 지적인 그녀의 매력에 점점 빠져들고, 폭우가 쏟아지는 날 비바람이 몰아치는 언덕에서 가슴 속 깊은 곳에 담아둔 뜨거운 사랑을 그녀에게 고백한다. 하지만 다아시가 빙리와 제인의 결혼을 제인이 명망있는 가문 출신이 아니라는 이유로 반대한 것을 알게 되자, 그를 오만하고 편견에 가득 찬 속물로 여기며 외면하는데...", "popularity": 47.528, "poster_path": "/tQ303fQUo5Mv5Txgpl2DPS2Jq0e.jpg", "release_date": "2005-09-16", "title": "오만과 편견", "video": false, "vote_average": 8.1, "vote_count": 6828 }, { "adult": false, "backdrop_path": "/W1ffLQGHoxfAOq0ZYdPtJlvAdb.jpg", "genre_ids": [878, 18, 10749], "id": 38, "original_language": "en", "original_title": "Eternal Sunshine of the Spotless Mind", "overview": "조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.", "popularity": 49.073, "poster_path": "/6HNRo7VYpvM5x5O921bEF2BG7f4.jpg", "release_date": "2004-03-19", "title": "이터널 선샤인", "video": false, "vote_average": 8.1, "vote_count": 12792 }, { "adult": false, "backdrop_path": "/dIi0De3LzEVSQHEUlh0Q2zUpmeW.jpg", "genre_ids": [12, 28, 878], "id": 101299, "original_language": "en", "original_title": "The Hunger Games: Catching Fire", "overview": "헝거게임의 우승으로 독재국가 판엠의 절대권력을 위협하는 존재가 된 캣니스, 혁명의 불꽃이 된 그녀를 제거하기 위해 캐피톨은 75회 스페셜 헝거게임의 재출전을 강요한다. 역대 최강의 우승자들이 모인 헝거게임에 참가하게 된 캣니스는 판엠의 음모 속에서 적인지 동료인지 알 수 없는 막강한 도전자들과 맞닥뜨린다. 모두의 운명을 걸고 살아남아야 하는 캣니스, 그녀와 함께 혁명의 불꽃이 시작된다.", "popularity": 73.941, "poster_path": "/ca9M1P2F7mUGVcC5cQo0X5rf6tu.jpg", "release_date": "2013-11-15", "title": "헝거게임: 캣칭 파이어", "video": false, "vote_average": 7.4, "vote_count": 15340 }, { "adult": false, "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg", "genre_ids": [16, 10751, 14], "id": 129, "original_language": "ja", "original_title": "千と千尋の神隠し", "overview": "평범한 열 살 짜리 소녀 치히로 식구는 이사 가던 중 길을 잘못 들어 낡은 터널을 지나가게 된다. 터널 저편엔 폐허가 된 놀이공원이 있었고 그곳엔 이상한 기운이 흘렀다. 인기척 하나 없는 이 마을의 낯선 분위기에 불길한 기운을 느낀 치히로는 부모님에게 돌아가자고 조르지만 부모님은 호기심에 들떠 마을 곳곳을 돌아다니기 시작한다. 어느 음식점에 도착한 치히로의 부모님은 그 곳에 차려진 음식들을 보고 즐거워하며 허겁지겁 먹어대다가 돼지로 변해버린다. 겁에 질려 당황하는 치히로에게 낯선 소년 하쿠가 나타나 빨리 이곳을 나가라고 소리치는데...", "popularity": 73.885, "poster_path": "/u1L4qxIu5sC2P082uMHYt7Ifvnj.jpg", "release_date": "2001-07-20", "title": "센과 치히로의 행방불명", "video": false, "vote_average": 8.5, "vote_count": 13571 }, { "adult": false, "backdrop_path": "/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg", "genre_ids": [28, 9648, 878, 53], "id": 198663, "original_language": "en", "original_title": "The Maze Runner", "overview": "삭제된 기억, 거대한 미로로 둘러싸인 낯선 공간  모든 기억이 삭제된 채 의문의 장소로 보내진 ‘토마스’(딜런 오브라이언).  ‘토마스’는 미로에 갇힌 그곳에서 자신과 같은 상황의 사람들을 만난다.  그들은 매일 밤 살아 움직이는 미로에서 정체를 알 수 없는 죽음의 존재와 대립하며,  지옥으로부터 빠져나갈 탈출구인 지도를 완성해 나간다.  그러던 어느 날, 미로의 문이 열리고 그들은 마지막 선택의 기로에 놓이게 되는데…", "popularity": 161.592, "poster_path": "/bL0bBepUCLFcCj2ATFD40FbyDEl.jpg", "release_date": "2014-09-10", "title": "메이즈 러너", "video": false, "vote_average": 7.2, "vote_count": 15082 }, { "adult": false, "backdrop_path": "/mc3WEBQW13kWX8sMqRk3mXFIXXS.jpg", "genre_ids": [10749, 18], "id": 2977, "original_language": "en", "original_title": "Becoming Jane", "overview": "혼기 꽉 찬 나이에 남자보단 글 쓰는 것을 더 좋아해 부모님의 골치거리가 되고 있는 제인 오스틴. 그런 그녀 앞에 부모님의 잔소리보다 더 신경 쓰이는 존재가 나타났다! 그의 이름은 톰 리프로이. 겸손이라고는 눈곱만치도 찾아 볼 수 없는 오만함을 가진 최악의 남자다. 산책길에서, 도서관에서, 무도회에서 우연히 마주치는 그와 티격태격 신경전이 계속되지만 이 느낌이 왠지 싫지만은 않다. 게다가 그를 떠올릴 때마다 심장은 주책없이 뛰고 솟아오르는 영감으로 펜은 저절로 움직인다. 이것은 혹시 사랑?  한 편, 부와 명예 모든 조건이 완벽하게 갖춰진 귀족집안의 미스터 위슬리의 청혼으로 자신은 물론, 식구들 모두 가난이라는 숙명에서 벗어날 수 있는 기회를 얻게 되는데. 자신의 전부를 바칠 수 있을 것만 같은 운명적인 사랑을 만난 지금, 과연 어떤 선택이 그녀에게 행복을 가져다 줄 수 있을까?", "popularity": 15.623, "poster_path": "/h9mhTt94CDUtndM7O7A24x36ZKe.jpg", "release_date": "2007-03-02", "title": "비커밍 제인", "video": false, "vote_average": 7.3, "vote_count": 1023 }, { "adult": false, "backdrop_path": "/dzpO9NG28CzsYBJZ5EJ3oKEKOIG.jpg", "genre_ids": [35, 10749, 18], "id": 4951, "original_language": "en", "original_title": "10 Things I Hate About You", "overview": "상냥하고 얼굴도 예쁜 비앙카는 인기 만점의 여학생이다. 하지만 아직까지 한 번도 데이트를 해본 적이 없다. 아버지가 고교 졸업 전까지는 이성교제를 엄금했기 때문이다.  하나뿐인 언니 캣이 공동전선을 펴서 아빠를 좀 설득해주면 좋으련만, 캣은 남자 친구 따위는 관심도 없다는 투다. 그런데, 최근에 이성교제에 대한 아빠의 규칙이 약간 바뀌었다. 캣이 남자친구를 사귀면 비앙카도 데이트를 할 수 있다는 것. 이 소식을 듣고 희망에 부푼 사람은 비앙카 뿐이 아니었다. 전학 온 첫 날, 비앙카를 보고 한 눈에 반해버린 카메론은 오직 그녀를 만나고 싶다는 일념으로 비앙카와 함께 프랑스어 스터디를 하고 있었다.  카메론은 친구 마이클의 도움을 받아 캣과 교제할 사람을 찾아나선다. 캣의 오만함과 독설에 나가떨어지지 않고 그녀를 상대해줄 만한 사람이어야 했다. 이들이 점찍은 남학생은 패트릭. 독특한 호주 액센트를 구사하는 아웃사이더로서 암거래 조직의 일원이라는 둥, 화재 사건의 범인이라는 둥, 그를 둘러싼 소문은 무성했지만, 아무도 가까이 접근하지 못하는 미스터리의 터프 가이였다. 이런 패트릭이 카메론의 사랑에 감격해서 자발적으로 캣과 데이트를 해줄 리는 만무하므로, 두 사람은 그를 매수하기로 한다.  이를 위한 물주로 떠오른 이는 죠이. 학생이자 모델인 그는 빨간 스포츠카를 몰고 다니는 인기 만점의 남학생으로 돈 많고, 체격 좋고, 잘생겼지만, 머리에 든 것도 별로 없고 우쭐대기만 하는 속물인데, 오래전부터 비앙카에게 눈독을 들이고 있었다. 마이클은 캣에게 남자친구가 생기면 비앙카와 데이트할 수 있다는 정보를 슬쩍 흘리며 죠이로하여금 패트릭을 매수하도록 부추겼다. 일은 착착 진행되어, 드디어 패트릭이 캣과 함께 파티에 참석하는데 성공한다.  만남이 잦아지면서 서로의 참모습을 알게 된 두 사람은, 다른 이들의 의도와는 상관없이 정말로 사랑에 빠지지만...", "popularity": 36.434, "poster_path": "/syoeWNSLr7AMesZXM5DUAmoDRvp.jpg", "release_date": "1999-03-30", "title": "내가 널 사랑할 수 없는 10가지 이유", "video": false, "vote_average": 7.6, "vote_count": 6787 }, { "adult": false, "backdrop_path": "/yJyZRrXaYUjhOrJGga8awbw4Rud.jpg", "genre_ids": [12, 14, 10749, 10751], "id": 420817, "original_language": "en", "original_title": "Aladdin", "overview": "알라딘은 전광석화 같은 손놀림과 타고난 삼십육계 줄행랑을 고루 갖춘 아그라바 왕국의 좀도둑이다. 원숭이 친구 아부를 대동한 채 굶주림에 고통받는 아이들을 못 본 척하지 않는 게 그의 인간적인 매력. 어느 날 아그라바 왕국을 다스리는 술탄이 애지중지하는 딸 자스민 공주가 백성들을 살피기 위해 성 밖으로 나왔다가 빵을 훔쳤다는 누명을 쓰게 된다. 마침 그 광경을 목격한 알라딘은 자스민 공주를 위기에서 구해준다. 자스민 공주가 왕궁에서 일하는 시녀인 줄 알고 그녀를 보러 성 안에 들어간 알라딘은 재상 자파에게 붙잡히고 마는데...", "popularity": 95.366, "poster_path": "/hvoi0h5hX7cKjatXvbc3gYqT1Xw.jpg", "release_date": "2019-05-22", "title": "알라딘", "video": false, "vote_average": 7.1, "vote_count": 8886 }, { "adult": false, "backdrop_path": "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg", "genre_ids": [878, 12], "id": 438631, "original_language": "en", "original_title": "Dune", "overview": "10191년, 아트레이데스 가문의 후계자인 폴은 시간과 공간을 초월해 과거와 미래를 모두 볼 수 있고, 더 나은 미래를 만들 유일한 구원자인 예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스의 행성에 있는 한 여인을 만난다. 귀족들이 지지하는 아트레이데스 가문에 대한 황제의 질투는 폴과 그 일족들을 죽음이 기다리는 아라키스로 이끄는데...", "popularity": 110.603, "poster_path": "/wv22frLmCpXDRjKj4MWFwa4eTOK.jpg", "release_date": "2021-09-08", "title": "듄", "video": false, "vote_average": 7.8, "vote_count": 7992 }, { "adult": false, "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg", "genre_ids": [28, 18], "id": 361743, "original_language": "en", "original_title": "Top Gun: Maverick", "overview": "최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘 아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될지 모를 하늘 위 비행에 나서는데...", "popularity": 586.505, "poster_path": "/jeqXUwNilvNqNXqAHsdwm5pEfae.jpg", "release_date": "2022-05-24", "title": "탑건: 매버릭", "video": false, "vote_average": 8.3, "vote_count": 4815 }, { "adult": false, "backdrop_path": "/molRDQpn4BgEViBDwq3poCndVvg.jpg", "genre_ids": [18], "id": 60308, "original_language": "en", "original_title": "Moneyball", "overview": "메이저리그 만년 최하위에 그나마 실력 있는 선수들은 다른 구단에 뺏기기 일쑤인 오클랜드 애슬레틱스. 돈 없고 실력 없는 오합지졸 구단이란 오명을 벗어 던지고 싶은 단장 빌리 빈(브래드 피트)은 경제학을 전공한 피터(조나 힐)를 부단장으로 영입, 새로운 경영전략을 펼친다. 기존의 선수 선발 방식과는 전혀 다른 파격적인 머니볼 이론을 따라 새로운 도전을 시작한 그들은 경기 데이터에만 의존해 사생활 문란, 잦은 부상, 최고령 등의 이유로 다른 구단에서 외면 받던 선수들을 팀에 합류시킨다. 과연 빌리와 애슬레틱스 팀은 머니볼의 기적을 이룰 수 있을까?", "popularity": 21.108, "poster_path": "/tw3HY4u0k2kACQEyHWbFd88gsoY.jpg", "release_date": "2011-09-23", "title": "머니볼", "video": false, "vote_average": 7.2, "vote_count": 4225 }]
      },
      {
        id: '3',
        name: '이기용',
        password: '1234',
        movies: [{ "adult": false, "backdrop_path": "/aQPzzFpddeWaMuJgPDXEqVmqITA.jpg", "genre_ids": [28, 35, 80], "id": 346646, "original_language": "ko", "original_title": "베테랑", "overview": "한 번 꽂힌 것은 무조건 끝을 보는 행동파 서도철은 겁 없고, 못 잡는 것 없고, 봐주는 것 없는 특수 강력사건 담당 광역수사대. 오랫동안 쫓던 대형 범죄를 해결한 후 숨을 돌리려는 찰나, 서도철은 재벌 3세 조태오를 만나게 된다. 세상 무서울 것 없는 안하무인의 조태오와 언제나 그의 곁을 지키는 오른팔 최상무. 서도철은 의문의 사건을 쫓던 중 그들이 사건의 배후에 있음을 직감한다. 건들면 다친다는 충고에도 불구하고 포기하지 않는 서도철의 집념에 판은 걷잡을 수 없이 커져가고, 조태오는 이를 비웃기라도 하듯 유유히 포위망을 빠져 나가는데...", "popularity": 10.336, "poster_path": "/vPFqA1KxYaVJg6foIuRIawGaH5d.jpg", "release_date": "2015-08-05", "title": "베테랑", "video": false, "vote_average": 6.9, "vote_count": 159 }, { "adult": false, "backdrop_path": "/kpM7wX8K66bGZkYvfHXIrnXvDRS.jpg", "genre_ids": [80, 28], "id": 619803, "original_language": "ko", "original_title": "범죄도시 2", "overview": "가리봉동 소탕작전으로부터 4년이 지난 2008년, 금천경찰서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. 그렇게 현지를 물색하던 마석도와 전일만은 용의자에게 미심쩍음을 느껴 추궁한 끝에, 악랄한 강해상의 존재를 알게 된다. 두 형사는 수사권이 없는 상황에도 한국과 베트남을 오가며 역대급 범죄를 저지르는 그를 잡겠다는 일념 하나로 호찌민 이곳저곳을 거침없이 누빈다.", "popularity": 181.024, "poster_path": "/wxNUnSzuMgsT8DFkZjX9GtfOKJX.jpg", "release_date": "2022-05-18", "title": "범죄도시 2", "video": false, "vote_average": 7.3, "vote_count": 93 }, { "adult": false, "backdrop_path": "/rSGNonLiTSKUjT7HhQSqhpGFihs.jpg", "genre_ids": [28, 35, 80], "id": 567646, "original_language": "ko", "original_title": "극한직업", "overview": "불철주야 달리고 구르지만 실적은 바닥, 급기야 해체 위기를 맞는 마약반!  더 이상 물러설 곳이 없는 팀의 맏형 고반장은 국제 범죄조직의 국내 마약 밀반입 정황을 포착하고 장형사, 마형사, 영호, 재훈까지 4명의 팀원들과 함께 잠복 수사에 나선다.  마약반은 24시간 감시를 위해 범죄조직의 아지트 앞 치킨집을 인수해 위장 창업을 하게 되고, 뜻밖의 절대미각을 지닌 마형사의 숨은 재능으로 치킨집은 일약 맛집으로 입소문이 나기 시작한다.  수사는 뒷전, 치킨장사로 눈코 뜰 새 없이 바빠진 마약반에게 어느 날 절호의 기회가 찾아오는데…", "popularity": 13.086, "poster_path": "/jbHNkNydiZstlqhhBSvG19lm4NL.jpg", "release_date": "2019-01-23", "title": "극한직업", "video": false, "vote_average": 7.1, "vote_count": 180 }, { "adult": false, "backdrop_path": "/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg", "genre_ids": [28, 35], "id": 390043, "original_language": "en", "original_title": "The Hitman's Bodyguard", "overview": "영국 최고 실력을 자랑하는 사설 경호원 마이클 브라이스(라이언 레이놀즈)는 어이없는 실수로 의뢰인을 죽게 만든 후 하루아침에 일감이 뚝 끊긴다. 한편 역사상 최악의 독재자로 악명을 떨치던 벨라루스의 두코비치 대통령(게리 올드먼)이 인터폴에 체포되어 헤이그에서 국제사법재판을 받게 된다. 재판 시효가 다가올 때마다 범죄를 증명할 증인이 하나둘 죽어나가자, 사태의 심각성을 파악한 인터폴은 두코비치 대통령의 민간인 학살 범행을 증명할 희대의 킬러 다리우스(새뮤얼 L. 잭슨)를 교도소에서 빼내와 법정에 세울 계획을 세우는데...", "popularity": 63.904, "poster_path": "/lktHrHZBL1ihgrd4tpM6oyNvqR3.jpg", "release_date": "2017-08-16", "title": "킬러의 보디가드", "video": false, "vote_average": 6.9, "vote_count": 5370 }, { "adult": false, "backdrop_path": "/qBpup0yPaLPxmSu3TQHwchhqdFb.jpg", "genre_ids": [80, 35], "id": 38015, "original_language": "ko", "original_title": "타짜", "overview": "가구공장에서 일하며 남루한 삶을 사는 고니는 대학보다 가난을 벗어나게 해줄 돈이 우선인 청년. 어느 날 고니는 가구공장 한 켠에서 박무석 일행이 벌이는 화투판에 끼게 되지만, 고니는 그 판에서 3년 동안 모아두었던 돈 전부를 날리고 만다. 그것이 전문 도박꾼들이 짜고 친 판이었단 사실을 뒤늦게 안 고니는 박무석 일행을 찾아 나서고, 도박으로 시비가 붙은 한 창고에서 우연인 듯 필연처럼 전설의 타짜 평경장을 만난다. 그리고 잃었던 돈의 다섯 배를 따면 화투를 그만두겠단 약속을 하고, 그와 함께 본격적인 꽃싸움에 몸을 던지기 위한 동행길에 오른다.", "popularity": 5.757, "poster_path": "/qjCW5nggBaOFy2WhVraE4iSBzP3.jpg", "release_date": "2006-09-28", "title": "타짜", "video": false, "vote_average": 7, "vote_count": 66 }, { "adult": false, "backdrop_path": "/zPo7SQ20IqcZK6JPjCWg2GzOCQp.jpg", "genre_ids": [53, 80, 18], "id": 165213, "original_language": "ko", "original_title": "신세계", "overview": "경찰청 수사기획과 강과장은 국내 최대 범죄 조직 골드문이 기업형 조직으로 세력이 확장되자 신입경찰 이자성에게 잠입수사를 명한다. 그리고 8년, 자성은 골드문의 2인자 정청의 오른팔이 되기에 이른다. 골드문 회장이 갑자기 사망하자, 강과장은 후계자 결정에 직접 개입하는 신세계 작전을 설계한다. 후계자 전쟁의 한 가운데, 정청은 지금까지 친형제처럼 함께 해 온 자성에게 강한 신뢰를 보는 반면 작전의 성공만 생각하는 강과장은 자성의 목을 조여만 간다. 신분이 노출될 위기에 처한 자성은 언제 자신을 배신할지 모르는 경찰과, 형제의 의리로 대하는 정청 사이에서 갈등하게 되는데...", "popularity": 12.274, "poster_path": "/yiDQaLGF6hXVdiKodfdurUcgxWV.jpg", "release_date": "2013-02-21", "title": "신세계", "video": false, "vote_average": 7.4, "vote_count": 348 }, { "adult": false, "backdrop_path": "/ibk7vtPsirbk0wIJEmHLF0vwcyi.jpg", "genre_ids": [80, 53], "id": 89501, "original_language": "ko", "original_title": "범죄와의 전쟁", "overview": "1982년 부산, 해고될 위기에 처한 비리 세관원 최익현은 순찰 중 적발한 히로뽕을 일본으로 밀수출하기 위해 부산 최대 조직의 젊은 보스 최형배와 손을 잡는다. 익현은 탁월한 임기응변과 특유의 친화력으로 형배의 신뢰를 얻는 데 성공한다. 주먹 넘버원 형배와 로비의 신 익현은 함께 힘을 합쳐 부산을 접수하기 시작하고, 나쁜 놈들의 전성시대가 펼쳐진다. 하지만 1990년 범죄와의 전쟁이 선포되자 조직의 의리는 금이 가고 배신이 시작된다. 살아남기 위해 벌이는 치열한 한판 승부, 최후에 웃는 자는 과연 누가 될 것인가?", "popularity": 13.015, "poster_path": "/4tJYmvn7VgDsrAYHgB3qebVWTut.jpg", "release_date": "2012-02-02", "title": "범죄와의 전쟁: 나쁜놈들 전성시대", "video": false, "vote_average": 6.9, "vote_count": 135 }, { "adult": false, "backdrop_path": "/tg98JJOiswyEHErckhSXLdx9SCA.jpg", "genre_ids": [18, 80, 28], "id": 293413, "original_language": "ko", "original_title": "내부자들", "overview": "유력한 대통령 후보와 재벌 회장, 그들을 돕는 정치깡패 안상구. 뒷거래의 판을 짠 이는 대한민국 여론을 움직이는 유명 논설주간 이강희다. 더 큰 성공을 원한 안상구는 이들의 비자금 파일로 거래를 준비하다 발각되고, 이 일로 폐인이 되어 버려진다. 늘 승진을 눈 앞에 두고 주저 앉는 검사 우장훈는 마침내 대선을 앞둔 대대적인 비자금 조사의 저격수가 되는 기회를 잡는다. 그러나 비자금 파일을 가로챈 안상구 때문에 수사는 종결되고, 우장훈은 책임을 떠안고 좌천되고 마는데...", "popularity": 9.622, "poster_path": "/AvMbd9rvH6cpbhXc1YTQsdc9bAh.jpg", "release_date": "2015-11-19", "title": "내부자들", "video": false, "vote_average": 6.9, "vote_count": 91 }, { "adult": false, "backdrop_path": "/9cGSFGZVVLsrnbs0AFPDh6X2ynl.jpg", "genre_ids": [16, 10751, 12, 18, 35], "id": 150540, "original_language": "en", "original_title": "Inside Out", "overview": "모든 사람의 머릿속에 존재하는 감정 컨트롤 본부. 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들. 정든 옛 동네를 떠나 도시로 이사하는 라일리 가족. 이사 후 새로운 환경에 적응해야 하는 라일리를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 기쁨과 슬픔이 본부를 이탈하게 되자 라일리의 마음 속에 큰 변화가 찾아온다. 라일리가 예전의 모습을 되찾기 위해서는 기쁨과 슬픔이 본부로 돌아가야만 한다. 그러나 엄청난 기억들이 저장되어 있는 머릿속 세계에서 본부까지 가는 길은 험난하기만 한데...", "popularity": 181.744, "poster_path": "/qVdrpBY920kKikUmPm89wig60Kd.jpg", "release_date": "2015-06-09", "title": "인사이드 아웃", "video": false, "vote_average": 7.9, "vote_count": 18386 }, { "adult": false, "backdrop_path": "/91RykxgEXfu1vw2mfG1kNSkWJcf.jpg", "genre_ids": [28, 12, 35, 36, 14], "id": 285213, "original_language": "ko", "original_title": "해적: 바다로 간 산적", "overview": "전대미문 국새 강탈 사건으로 조정은 혼란에 빠지고, 이를 찾기 위해 조선의 난다긴다 하는 무리들이 바다로 모여든다. 바다를 호령하다 졸지에 국새 도둑으로 몰린 위기의 해적, 고래는커녕 바다도 처음이지만 의기양양 고래사냥에 나선 산적, 건국을 코앞에 두고 발등에 불이 떨어진 개국세력까지! 국새를 차지하는 자, 천하를 얻을 것이다!", "popularity": 9.508, "poster_path": "/yMydhXOFTKPxxFBJiBMKv2JM7sl.jpg", "release_date": "2014-08-06", "title": "해적: 바다로 간 산적", "video": false, "vote_average": 7, "vote_count": 168 }, { "adult": false, "backdrop_path": "/ApdZVriA4vnMJaHZYksTTkjkFbK.jpg", "genre_ids": [80, 28], "id": 438798, "original_language": "ko", "original_title": "프리즌", "overview": "밤이 되면 죄수들이 밖으로 나가 대한민국 완전범죄를 만들어내는 교도소  그 교도소의 권력 실세이자 왕으로 군림하는 익호(한석규).  그 곳에 검거율 100%로 유명한 전직 경찰 유건(김래원)이 뺑소니, 증거인멸, 경찰 매수의 죄목으로  입소하게 되고, 특유의 깡다구와 다혈질 성격으로 익호의 눈에 띄게 된다.  익호는 유건을 새로운 범죄에 앞세우며 점차 야욕을 내보이는데 …  세상을 움직이는 놈들은 따로 있다  감옥 문이 열리면 큰 판이 시작된다!", "popularity": 7.44, "poster_path": "/3DdfSeK5lsN2te3c359ewac0cBB.jpg", "release_date": "2017-03-23", "title": "프리즌", "video": false, "vote_average": 7, "vote_count": 72 }, { "adult": false, "backdrop_path": "/3dpOIKpInMSaKOUSmZdYF4YBdj0.jpg", "genre_ids": [18, 35], "id": 438623, "original_language": "ko", "original_title": "그것만이 내 세상", "overview": "한때는 WBC 웰터급 동양 챔피언이었지만  지금은 오갈 데 없어진 한물간 전직 복서 조하. 우연히 17년 만에 헤어진 엄마 인숙과 재회하고, 숙식을 해결하기 위해 따라간 집에서  듣지도 보지도 못했던 뜻밖의 동생 진태와 마주한다. 라면 끓이기, 게임도 최고로 잘하지만  무엇보다 피아노에 천재적 재능을 지닌 서번트증후군 진태. 조하는 입만 열면 \"네~\" 타령인 심상치 않은 동생을 보자 한숨부터 나온다. 하지만 캐나다로 가기 위한 경비를 마련하기 전까지만 꾹 참기로 결심한 조하는  결코 만만치 않은 불편한 동거생활을 하기 시작하는데...", "popularity": 2.946, "poster_path": "/sK9nfItvaOutyiSXOlcZ1lMO6yf.jpg", "release_date": "2018-01-17", "title": "그것만이 내 세상", "video": false, "vote_average": 8, "vote_count": 24 }]
      },
      {
        id: '4',
        name: '오태훈',
        password: '1234',
        movies: [{ "adult": false, "backdrop_path": "/t3LicFpYHeYpwqm7L5wDpd22hL5.jpg", "genre_ids": [12, 14], "id": 671, "original_language": "en", "original_title": "Harry Potter and the Philosopher's Stone", "overview": "해리 포터는 위압적인 버논 숙부와 냉담한 이모 페투니아, 욕심 많고 버릇없는 사촌 더즐리 밑에서 갖은 구박을 견디며 계단 밑 벽장에서 생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지. 이모 페투니아에겐 해리가 이상한 언니 부부에 관한 기억을 떠올리게 만드는 달갑지 않은 존재다. 11살 생일이 며칠 앞으로 다가왔지만 한번도 생일파티를 치르거나 제대로 된 생일선물을 받아 본 적이 없는 해리로서는 특별히 신날 것도 기대 할 것도 없다. 11살 생일을 며칠 앞둔 어느 날 해리에게 초록색 잉크로 쓰여진 한 통의 편지가 배달된다. 그 편지의 내용은 다름 아닌 해리의 11살 생일을 맞이하여 호그와트에서 보낸 입학 초대장이었다. 그리고 해리의 생일을 축하하러 온 거인 해그리드는 해리가 모르고 있었던 해리의 진정한 정체를 알려주는데...", "popularity": 340.348, "poster_path": "/unEtC8uWn2lcQLnwKG9PZJX0h0c.jpg", "release_date": "2001-11-16", "title": "해리 포터와 마법사의 돌", "video": false, "vote_average": 7.9, "vote_count": 23584 }, { "adult": false, "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg", "genre_ids": [28, 12, 878], "id": 634649, "original_language": "en", "original_title": "Spider-Man: No Way Home", "overview": "미스테리오의 계략으로 세상에 정체가 탄로난 스파이더맨 피터 파커는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 닥터 스트레인지를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. 닥터 옥토퍼스를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 피터 파커는 사상 최악의 위기를 맞게 되는데…", "popularity": 636.064, "poster_path": "/voddFVdjUoAtfoZZp2RUmuZILDI.jpg", "release_date": "2021-12-15", "title": "스파이더맨: 노 웨이 홈", "video": false, "vote_average": 8, "vote_count": 15887 }, { "adult": false, "backdrop_path": "/9LuL3pwJiwIWSckeCbOX8G12F4X.jpg", "genre_ids": [28, 12, 16, 878], "id": 324857, "original_language": "en", "original_title": "Spider-Man: Into the Spider-Verse", "overview": "평범한 10대 마일스 모랄레스는 우연히 방사능 거미에 물려 스파이더맨 능력을 가지게 된다. 혼란스러워하던 마일스는 악당과 싸우고 있는 피터 파커를 마주치게 되고 피터 파커는 마일스가 자신과 같은 능력을 가지고 있음을 직감한다. 여러 개의 평행세계가 존재한다는 것을 알게 된 마일스와 피터 파커는 이후 스파이더우먼 스파이더 그웬, 스파이더맨 누아르, 스파이더햄 등 평행세계 속 공존하는 모든 스파이더맨들을 만나게 되는데... 하나의 유니버스에서 만나 팀을 결성한 스파이더맨들은 과연 세계를 구할 수 있을까?", "popularity": 91.329, "poster_path": "/vnWgIIEWAvWKOI65tm6h6VRbyY8.jpg", "release_date": "2018-12-06", "title": "스파이더맨: 뉴 유니버스", "video": false, "vote_average": 8.4, "vote_count": 11975 }, { "adult": false, "backdrop_path": "/cyecB7godJ6kNHGONFjUyVN9OX5.jpg", "genre_ids": [28, 878, 12], "id": 1726, "original_language": "en", "original_title": "Iron Man", "overview": "천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 억만장자 토니 스타크. 아프가니스탄에서 자신이 개발한 신무기 발표를 성공리에 마치고 돌아가던 그는 게릴라군의 갑작스런 공격에 의해 가슴에 치명적인 부상을 입고 게릴라군에게 납치된다. 가까스로 목숨을 건진 그에게 게릴라군은 자신들을 위한 강력한 무기를 개발하라며 그를 위협한다. 그러나 그는 게릴라군을 위한 무기 대신, 탈출을 위한 무기가 장착된 철갑수트를 몰래 만드는 데 성공하고, 그의 첫 수트인 Mark 1를 입고 탈출에 성공한다.", "popularity": 94.399, "poster_path": "/318YNPBDdt4VU1nsJDdImGc8Gek.jpg", "release_date": "2008-04-30", "title": "아이언맨", "video": false, "vote_average": 7.6, "vote_count": 23535 }, { "adult": false, "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg", "genre_ids": [12, 878, 28], "id": 299534, "original_language": "en", "original_title": "Avengers: Endgame", "overview": "어벤져스의 패배 이후 지구는 초토화됐고 남은 절반의 사람들은 정신적 고통을 호소하며 하루하루를 근근이 버텨나간다. 와칸다에서 싸우다 생존한 히어로들과 우주의 타이탄 행성에서 싸우다 생존한 히어로들이 뿔뿔이 흩어졌는데, 아이언맨과 네뷸라는 우주를 떠돌고 있고 지구에 남아 있는 어벤져스 멤버들은 닉 퓨리가 마지막에 신호를 보내다 만 송신기만 들여다보며 혹시 모를 우주의 응답을 기다리는 중이다. 애초 히어로의 삶을 잠시 내려놓고 가족과 시간을 보내던 호크아이 역시 헤아릴 수 없는 마음의 상처를 입은 채 사라지고 마는데...", "popularity": 155.347, "poster_path": "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg", "release_date": "2019-04-24", "title": "어벤져스: 엔드게임", "video": false, "vote_average": 8.3, "vote_count": 22133 }, { "adult": false, "backdrop_path": "/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg", "genre_ids": [12, 35, 878], "id": 105, "original_language": "en", "original_title": "Back to the Future", "overview": "마티 맥플라이(마이클 J. 폭스)는 평범한 고등학생이다. 그런데 평소 친하게 지내던 괴상한 발명가 에메트 브라운 박사(크리스토퍼 로이드)가 스포츠카 드로리안을 개조해 타임머신을 만들고, 뜻밖의 사고로 브라운 박사가 테러범들에게 총을 맞고 위험해진 상황에서 마티는 30년 전으로 가게 된다. 극장 간판에는 2류 배우인 로널드 레이건이 보이고 청년인 아버지와 어머니를 보게 된다. 젊은 아버진 멍청하고, 어머니는 미래의 아들인 마티를 좋아해 야단이다. 마티가 미래로 가는 것을 도와 줄 사람은 30년 전인 젊은 브라운 박사뿐인데...", "popularity": 58.22, "poster_path": "/7gGicAJdHRzaUd6qLjH5bSW4Cgi.jpg", "release_date": "1985-07-03", "title": "빽 투 더 퓨쳐", "video": false, "vote_average": 8.3, "vote_count": 17186 }, { "adult": false, "backdrop_path": "/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg", "genre_ids": [35, 18, 10749, 10402], "id": 313369, "original_language": "en", "original_title": "La La Land", "overview": "차들로 빽빽이 들어찬 LA의 고속도로. 거북이 걸음이던 도로가 뚫리기 시작하지만 미아 지금 손에 든 연기 오디션 대본을 놓지 못한다. 세바스찬은 경적을 누르며 미아를 노려보고는 사라진다. 악연의 시작. 이후 미아는 감미로운 피아노 선율에 이끌려 재즈바로 향하는데, 연주자가 바로 세바스찬이다. 미아가 세바스찬에게 인사를 건네려고 다가가던 순간은 하필 그가 재즈바의 레퍼토리를 무시하고 연주한 탓에 해고된 직후. 세바스찬은 인사를 건네려 다가온 미아를 쌩하니 스쳐 지나가버린다. 세 번째로 두 사람은 파티에 온 손님과 출장 밴드의 키보드 연주자로 다시 만나는데...", "popularity": 33.503, "poster_path": "/6v4g6yW01uTmbxqwg75iEkMkrNP.jpg", "release_date": "2016-11-29", "title": "라라랜드", "video": false, "vote_average": 7.9, "vote_count": 14678 }, { "adult": false, "backdrop_path": "/lBF5UPapR8yDimjxggdYOFSxCrP.jpg", "genre_ids": [878, 53], "id": 1954, "original_language": "en", "original_title": "The Butterfly Effect", "overview": "끔찍한 어린 시절의 상처를 지닌 에반. 그에게 남은 것은 기억의 파편들과 상처입은 친구들. 에반은 과거의 기억을 되살리기 위해 정신과 치료를 받으며 어릴 적부터 매일매일 꼼꼼하게 일기를 쓴다.  대학생이 된 어느 날, 예전의 일기를 꺼내 읽다가 일기장을 통해 시공간 이동의 통로를 발견하게 되는 에반. 그것을 통해 과거로 되돌아가 미치도록 지워버리고 싶은 기억, 어린 시절의 상처 때문에 스스로 목숨을 끊은 첫사랑 켈리와의 돌이키고 싶은 과거, 그리고 사랑하는 친구들에게 닥친 끔찍한 불행들을 고쳐 나간다.  그러나 과거를 바꿀수록 더욱 충격적인 현실만이 그를 기다릴 뿐, 현재는 전혀 예상치 못한 파국으로 치닫는데 과연 그는 과거를 바꿔 그가 원하는 현재를 이룰 수 있을 것인가? 아니면 불행한 현재에 영원히 갇혀버릴 것인가?", "popularity": 32.325, "poster_path": "/zc0muUL1qMGeIvW2yNCfAus7bBO.jpg", "release_date": "2004-01-17", "title": "나비효과", "video": false, "vote_average": 7.5, "vote_count": 6391 }, { "adult": false, "backdrop_path": "/5AhpUb8CAP0jZ4Wrn7AsRUYjZxB.jpg", "genre_ids": [28, 35, 878], "id": 41154, "original_language": "en", "original_title": "Men in Black 3", "overview": "알 수 없는 사건으로 현실이 뒤바뀌고 외계인의 공격으로 위험에 빠진 지구. 게다가 MIB 소속 베테랑 요원 ‘케이(토미 리 존스)’는 하룻밤 사이에 감쪽같이 사라진다. 모든 것을 원래대로 되돌릴 수 있는 사건의 열쇠를 쥐고 있는 유일한 사람은 ‘케이’뿐인데…  사라진 파트너를 찾고 그동안 감춰졌던 우주의 비밀을 캐내기 위해 ‘제이(윌 스미스)’요원은 과거로 위험한 시간여행을 떠나게 되고, 그 곳에서 심하게 젊은(?) ‘케이(조쉬 브롤린)’와 마주하게 된다.  이제 이 둘은 24시간 안에 우주의 비밀을 풀고 현재로 돌아와야만 하는 MIB 사상 최고의 미션에 도전하게 되는데!", "popularity": 50.173, "poster_path": "/1cmJsxjV6CaWUE3Faxpk0sIHvRd.jpg", "release_date": "2012-05-23", "title": "맨 인 블랙 3", "video": false, "vote_average": 6.5, "vote_count": 9136 }, { "adult": false, "backdrop_path": "/11hLXThOT3ntF0lsRu1HHVlqGAT.jpg", "genre_ids": [10749, 18], "id": 428099, "original_language": "ja", "original_title": "ぼくは明日、昨日のきみとデートする", "overview": "스무 살의 ‘타카토시’는 지하철에서 우연히 만난 ‘에미’를 보고 순식간에 마음을 빼앗긴다. 운명 같은 끌림을 느낀 타카토시의 고백으로 두 사람은 연인이 되고, 매일 만나 행복한 데이트를 한다. 하지만, 왠지 종종 의미를 알 수 없는 눈물을 보이던 에미로부터 믿을 수 없는 비밀을 듣게 된 타카토시는 큰 혼란에 빠진다. 그 비밀은 바로 타카토시와 에미의 시간은 서로 반대로 흐르고 있고, 교차되는 시간 속에서 함께 할 수 있는 시간은 오직 30일뿐이라는 것. 30일 후에도, 이 사랑은 계속될 수 있을까?", "popularity": 16.304, "poster_path": "/rsW6wgbeFQVxqh108IWn22FCTxr.jpg", "release_date": "2016-12-17", "title": "나는 내일, 어제의 너와 만난다", "video": false, "vote_average": 7.6, "vote_count": 129 }]
      },
      {
        id: '5',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '6',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '7',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '8',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '9',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '10',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '11',
        name: '?',
        password: null,
        movies: []
      },
      {
        id: '12',
        name: '?',
        password: null,
        movies: []
      },

    ],
    addmovie: null,
  },
  getters: {
  },
  mutations: {
    ADD_TO_MOVIES(state, personId) {
      console.log(state.residents[personId])
      state.residents[personId].movies.push(state.addmovie)
      state.addmovie = null
      console.log(state.residents)
    },
    ADD_MOVIE(state, choicemovie) {
      state.addmovie = choicemovie
    }
  },
  actions: {
    AddToMovies(context, personId) {
      console.log(3)
      // const recommendMovie = {
      //   title: this.state.addmovie.title,
      //   poster_path: this.state.addmovie.poster_path,
      //   genre_ids: this.state.addmovie.genre_ids,
      //   overview: this.state.addmovie.overview,
      //   id: this.state.addmovie.id
      // }
      // context.commit('ADD_TO_MOVIES', recommendMovie)
      context.commit('ADD_TO_MOVIES', personId)
    },

  },
  modules: {
  }
})
