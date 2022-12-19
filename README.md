# toDos-App 프로젝트 (11월 진행완료)

1. create-react-app 설치 및 사용 학습완료

2. useState 사용시 useEffect를 통해 API를 딱 한번만 호출하고 다시는 호출하지 않게 셋팅할 수도 있다는 것을 알게 되었음. 또한 특별히 지정한 dependency에 대해 변화가 생길때만 호출하게 만들수도 있음.

3. map 사용을 통해 원하는 배열을 얻을 수 있음.

프로젝트 설명: toDo, toDos에 useState, map 등을 적용하여 해야할 일들에 대한 입력을 배열에 넣어 유저에게 보여주는 기능을 구현하였습니다.

# toDos-App 프로젝트 Update 1 (12/4-5)

1. 함수형 컴포넌트의 장점 중 하나인 코드 재사용성을 높이기 위해 하나의 파일로 작성되어져 있던 코드를 각각의 컴포넌트 기능별로 분해하는 리팩토링 과정을 진행하였음.

2. 추후 active 모드와 non-active 모드 전환을 구현하기 위해 checkbox UI 추가, 삭제 기능을 구현하기 위해 react-icons를 이용하여 delete용 UI 추가 완료.

3. 각각의 toDo 별로 고유한 id를 가지게 만들기 위해서 uuid 도입.

4. 아이템 삭제, 아이템 필터링 헤더 기능 구현

5. PostCSS를 이용한 스타일링

# toDos-App 프로젝트 Update 2 (12/6)

1. Context API를 활용한 전체 배경 화이트 & 다크 모드 기능 구현

2. 새로고침해도 입력한 데이터가 저장될 수 있도록 로컬 storage 도입

# baseurl 설정으로 netlify, gh-pages 동시 배포에 성공했습니다.

Netlify Deployment: https://todolists-original.netlify.app/
