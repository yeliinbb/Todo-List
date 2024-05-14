## Why?

1. **JSX 문법**이란 무엇일까요?

   : JSX란 Javascript + XML 의 약자로써 자바스크립트와 XML이 합쳐진 문법이다. html과 유사한 문법으로 js 파일 안에서 UI를 만들 수 있으며, 하나의 자바스크립트 파일 안에서 html과 js를 모두 다룰 수 있다.

<br/>

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이틀과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?

   : useState() 상태변경함수를 사용해 state(상태)를 관리해줬다.

<br/>

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

   : 컴포넌트를 선언할 때 필요한 상태 값들을 인자(props)로 넣어줬다.

<br/>

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

   : 투두리스트 삭제 기능을 구현할 때, push()메서드를 사용하면 기존 배열도 변하기 때문에 filter()함수를 통해 조건에 맞는 값들을 새로운 배열에 넣어주고 해당 배열을 다시 setTodos의 값으로 넣어 불변성을 유지해줬다.

<br/>

1. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

   : 코드의 가독성이 좋아지고 유지 보수가 편하다고 느꼈다.

<br/>
<br>

## 분리한 컴포넌트

Header, Form, ToDoList 컴포넌트
