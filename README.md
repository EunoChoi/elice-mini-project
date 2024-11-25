# Elice Mini Project

## 사용 기술
- next.js
- axios
- styled-component

## 컨벤션
- commit
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `style`: UI/스타일 변경
  - `refactor`: 성능 및 기능 개선
  - `docs`: 문서 수정
  - `test`: 테스트 코드 추가/수정
  - `chore`: 기타 작업
- file, folder
  - component file : PascalCase
  - 일반 route file : kebab-case
- variable
  - interface, type : PascalCase
  - 컴포넌트 function : PascalCase
  - 일반 function : camelCase

## 아키텍처

<img width="525" alt="구조도" src="https://github.com/user-attachments/assets/8efb9fbf-2278-4742-9729-8de7050f9d8a">

### useSearch Hooks

useSearch Hooks를 이용해 검색, 필터 검색, 페이지 이동 기능을 모두 구현하였습니다.

1. 검색(검색어 입력, 필터 클릭)
2. hooks 내부 state가 업데이트 됩니다.
3. state 정보가 정리 query 데이터에 맞게 가공됩니다.
4. query 값이 추가된 url을 푸시합니다.

### 페이지네이션
정해진 숫자 배열을 만든 후 컴포넌트를 렌더링 하는 형태로 구현하였습니다.
현재 페이지가 항상 가운데 유지되지만 양끝단 값이 없는 경우에만 가운데에 위치하지 않습니다.

while문을 사용하더라도 적은 실행 횟수만으로 배열값이 구해집니다.

```js
  const pages = [];
  pages.push(current);
  while (pages.length < range) {
    if (pages.length >= total) break;
    if (pages[0] >= 2) pages.unshift(pages[0] - 1);
    if (pages[pages.length - 1] < total) pages.push(pages[pages.length - 1] + 1);
  }
  return pages;
```

### useInput(debounce)

엘리스 홈페이지에서 검색어만 입력해도 바뀐 state가 검색됩니다.
성능 최적화를 위해 debounce 기능을 추가해 500ms 마다 검색되도록 처리하였습니다.

### Chip 컴포넌트 중복 클릭 및 클릭 여부 파악

url에서 가져온 현재 눌린 chip들의 정보와 클릭한 chip의 정보를 비교해 중복 여부를 파악하고 state를 업데이트 합니다.

```js
const [isClicked, setIsClicked] = useState(
    () => {
      if (chips.findIndex(v => v.name === chipValue.name) === -1) {
        return false;
      }
      else return true;
    }
  );

  const onClick = () => {
    if (chips.findIndex(v => v.name === chipValue.name) === -1) {
      setChips([...chips, chipValue]);
      setIsClicked(true);
    }
    else {
      const temp = chips.filter(v => v.name !== chipValue.name);
      setChips(temp);
      setIsClicked(false);
    }
  };




