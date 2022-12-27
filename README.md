# REACT 규칙
1. 컴포넌트는 기존 태그들과 구분하기 위해서 제일 첫 글자는 대문자를 사용한다.
> 기존태그 : <div></div>  리액트 컴포넌트 : <Component></Component>

2. 함수형 컴포넌트에서는 state 및 부모의 props가 변경되면 원칙적으로는 리렌더링된다.
> 따라서 useMemo 혹은 useCallback Hook으로 최적화가 가능하다.