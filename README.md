# Technical Challenge Project

![TS](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![RN](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/Axios-black?style=flat-square&logoColor=white)
![Emotion](https://img.shields.io/badge/Styled-Emotion-pink?style=flat-square&logoColor=white)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)

- Email, Password 를 입력받아서 회원가입, <br />
- Email, Password 를 입력해서 유저를 식별할 수 있는 을 얻습니다. ` JWT token`을 받음 <br />
- `투자일지 목록` 과 `투자일지 작성`은 헤더에`JWT token`을 보내서 목록 조회, 일지 작성이 가능하다.<br />
- 투자일지 작성에는 제목,내용,날짜, 투자자산을 입력 할 수 있다. <br />
- 투자일지 상세페이지는 투자한 날짜,투자한 자산을 확인 할 수 있고 ,투자한 자산과 투자 일지를 삭제 할 수 있다. <br />

## :clock3: Project Period

2021.11.06 ~ 2021.11.11 (총 6일)

## :hammer: Installation

```javascript
yarn install
```

## :bell: Usage

```javascript
yarn run
```

or enter ` npx react-native run-android`

## :폴더 구조

```


└── src
    └── screen
         ├── commons
             ├──libraries
             └── Modal

         ├── units
             ├── detailPage
             ├── loginPage
             ├── mainPage
             ├── singUpPage
             └──writePage
 └── App
```

- `src`의 경우 `components`와 `units`으로 나뉜다.
- `components`에는 재사용 가능한 컴포넌트들로 구성 돼있다. -`units`에는 `container`/`presenter` 사용한 소스코드가 있다.
- `detailPage`에는 투자일지 상세 조회를 할 수있다.
- `loginPage`에는 로그인 컴포넌트
- `mainPage`투자일지 목록 조회
- `singUpPage`에는 회원가입 컴포넌트
- `writePage`에는 투지일지 작성을 할 수있다.
- `App`에는 stack navigation으로 stack을 쌓는 구조로 페이지간 이동이 가능하게 만들었고, `contextAPI`를 이용해서 전역 관리를 용이하게 만들었다.

## Preview

#### 1-1. 비로그인시 화면 , 로그인시 화면

(로그인시 나오는 Token을 async스토리지에 저장해서 Token 유무애 떠룬 조건부 렌더링을 이용)

![비로그인](https://user-images.githubusercontent.com/86825253/141153667-f5758d94-e215-42f9-ab9c-61b6df626edf.gif)
![로그인](https://user-images.githubusercontent.com/86825253/141154000-c43f0a69-f140-4e35-ad7f-b12e66f38da9.gif)
)

#### 1-2. 로그아웃

(onPress를 할때 async스토리지에 있는 token 정보가 지워 지면서 화면이 재렌더링 된다.)

![로그아웃](https://user-images.githubusercontent.com/86825253/141153907-309dc372-d4e0-40f7-95ab-c0ba2b6547de.gif)

#### 2-1. 회원가입

![화원가입](https://user-images.githubusercontent.com/86825253/141154100-ce4c000f-5ddf-4034-880f-a4f203db0b0a.gif)

#### 3-1. 투자일지 작성 - 투자하기

(저장 버튼을 누르면 투자 일지가 먼저 서버로 전송되고 반환된 id값을 곧 바로 투자 할목들을 promise all을 이용해서 동시에 순차적으로 서버에 post를 한다.)

![투자하기](https://user-images.githubusercontent.com/86825253/141154040-98f78eb6-445e-4798-bdf2-50990a743caa.gif)
![종목 리스트](https://user-images.githubusercontent.com/86825253/141153933-3daf442e-44bc-409d-ab28-a749af6834e0.gif)

#### 4-1. 투자일지 목록

![투자일지](https://user-images.githubusercontent.com/86825253/141154290-03148347-0dab-42fd-b515-cba822b0c04a.gif)

#### 4-2. 투자일지 - 투자한 종목 조회

(투지일지 목록에서 조회 하려는 일지를 선택하면 반환되는 url을 HOF을 이용해서 받아서 투자일지를 data를 뿌려주고 data에서 나온 id값고 투자종목일지 의 id 와 같은것을 찾아서 종목 조회, 투자한 종목에는, 기존 종목 리스트들 투자종목들의 data를 비교해서 수익률을 나타냄)

![투자 항목 조회](https://user-images.githubusercontent.com/86825253/141154458-49c1c407-adaf-4fbe-b59a-f912f5224fde.gif)

#### 4-2. 투자일지 삭제하기 - 투자한 종목 삭제하기

![일지 삭제](https://user-images.githubusercontent.com/86825253/141153918-5ed8b225-0f56-47c3-8f74-702df1036a8f.gif)

## Thchnical Skills

- 메인 라이브러리: ReactNative
- 메인 언어 및 문법: Typescript, RxJS, Javascript
- 사용한 패키지: <br/>
  `axios`(API를 연동하기 위해서 사용 했고, <br/>Promise 기반으로 async/await 코드를 매우 쉽게 구현할 수 있게 해주기 때문에)<br/>
  `emotion/styled`(CSS in js 라이브러리로 사용 <br/>
  스타일을 입힌 것을 component로 만들어서 어느 곳에서든 재사용이 가능, <br/>
  자바스크립트에서 쓰이는 상수, props, 함수 공유가능 하기 때문에)
- react navigation - 페이지 이동을 위해 사용 <br/>
- react.asyncstorige - 회원정보를 임시 저장 하기 위해 사용 <br/>

## by 이창묵([LeeChangMook](https://github.com/moogieon))
