# Elice Mini Project

## 사용 기술
- next.js
- axios
- reactQuery
- zustand
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

## 프로젝트 구조

### 리팩토링 전

<img width="525" alt="구조도" src="https://github.com/user-attachments/assets/8efb9fbf-2278-4742-9729-8de7050f9d8a">

useSearch 커스텀훅을 중심으로 프로젝트가 동작합니다. useSearch 훅은 검색, 무료/유료 칩 선택, 페이지 정보를 담는 state를 다루고 있으며 검색어 및 칩 선택 정보 변경 시 url 변경(query 추가), 변경된 url로 데이터 요청 등의 주요 기능을 가지며 동작합니다.

#### 처리 과정
1. 선택 정보 변경(검색어 입력 or 칩 클릭)
2. 훅 내부 state 업데이트
3. 변경된 state가 적용된 url 가공
4. 가공된 url을 푸시
5. url 변화를 감지하고 데이터 요청
6. 결과를 반영하여 필터, 검색 결과, 페이지 네비게이션 컴포넌트 업데이트

#### 문제점
- 커스텀 훅의 state가 많은 컴포넌트에서 사용되어 프롭 드릴링 발생
  - 하위 컴포넌트로 갈수록 빈번한 프롭 전달 필요
  - 많은 프롭이 전달되다보니 코드가 지저분해지는 문제 발생
- 너무 빈번한 데이터 요청


### 리팩토링 후

#### 프롭 드릴링 문제 해결

프롭 드릴링 문제를 해결하기 위해 reactQuery, zustand 사용

**zustand**
url 변경 및 데이터 요청에 필요한 searchKeyword, selectedChips, currentPage 등 주요 state를 zustand를 이용하여 전역에서 사용
-> 프롭 드릴링 감소
**reactQuery**
프롭 전달 필요 없이 결과 데이터가 필요한 컴포넌트에서 바로 결과 데이터 사용하여 
totalCourse, totalPage, resultCourse state 사용성 향상


#### 빈번한 데이터 요청 문제 해결 (결과 데이터 캐싱)

리액트 쿼리의 데이터 캐싱 기능 사용
- 결과 데이터가 퀴리키로 구분되어 캐싱
- 추가적으로 데이터 불러오는 횟수 감소
- 강좌 정보가 실시간으로 업데이트 되지 않는다고 판단하여 staletime을 3600000ms(1시간)으로 설정 -> 데이터 불러오는 횟수 대폭 감소

## 기타 기능

### 페이지네이션 컴포넌트
정해진 숫자 배열을 만든 후 컴포넌트를 매핑 하는 형태로 구현하였습니다. 현재 페이지가 항상 가운데 유지되지만 양끝단 값이 더 이상 없는 경우에만 가운데에 위치하지 않고 좌우측에 쏠리게 됩니다.

이 형태의 숫자 배열을 만드는 것이 중요합니다. 현재 페이지를 가장 처음 배열에 넣고 조건에 맞는 경우 좌측에 unshift()로 우측에 push()로 값을 추가합니다. while문을 사용하더라도 적은 실행 횟수로 배열값이 구해집니다.

```ts
  const pages = [];
  pages.push(current);
  while (pages.length < range) {
    if (pages.length >= total) break;
    if (pages[0] >= 2) pages.unshift(pages[0] - 1);
    if (pages[pages.length - 1] < total) pages.push(pages[pages.length - 1] + 1);
  }
  return pages;
```

### 입력 debounce 기능

줄바꿈을 통한 검색이 아닌 입력창 내부 텍스트가 변경되면 검색되도록 구현해야합니다.

searchKeyword 변경 -> url 변경 -> 데이터 요청

위 형태의 과정이 진행되기 때문에 모든 입력 순간 데이터 요청하는 것은 비효율적이고 부하가 크다고 판단되었습니다. 따라서 디바운스 기능을 적용하였습니다.

```ts
  const [value, setValue] = useState<string | null>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<string | null>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
```


## CORS 문제

next.js api route 기능을 활용하여 CORS 문제를 해결하였습니다. api route 기능이 일종의 프록시 서버로 동작하여 CORS 문제가 해결됩니다.

**CORS 에러 발생**

localhost -> elice api로 요청

**CORS 에러 해결**

localhost -> next api로 요청 api/courses -> elice api로 요청

```ts
export const getCourses = async (
  offset: number,
  count: number,
  search: string | null,
  chips: ChipData[]
) => {
  if (!search) search = "";
  const params = chips
    .map(({ name, query_key, query_value, ...rest }) => rest);

  try {
    const response: { data: any } = await axios.get(
      getCoursesURL,
      {
        params: {
          filter_conditions: JSON.stringify({
            $and: [{ title: `%${search}%` },
            { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
            { $or: [...params] }],
          }),
          offset: offset,
          count: count,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

## 추가 기능

### SSR

초기 페이지 로딩 시 사용자가 정보를 빠르게 확인할 수 있도록 SSR을 적용, 가장 기본이 되는 검색 결과를 prefetch하여 빠르게 렌더링되도록 구현하였습니다.

```ts
const updateCourses = getCourses(0, maxLoadCount, '', []);
await queryClient.prefetchQuery({
  queryKey: ['searchKeyword', '', 'selectedChips', [], 'offset', 0, 'maxLoadCount', 20, 'currentPage', 1],
  queryFn: () => updateCourses,
  staleTime: 3600000,
  gcTime: 3600000
});
const dehydratedState = dehydrate(queryClient)

...

<RQProvider>
  <HydrationBoundary state={dehydratedState}>
    {children}
  </HydrationBoundary>
</RQProvider>
```


### 스켈레톤 컴포넌트

reactQuery로 데이터를 받아올 때 로딩이 완료되기 이전에도 이전 데이터 값이 유지되지 않습니다. 따라서 이전 컴포넌트가 사라졌다가 새롭게 로드된 데이터로 컴포넌트가 렌더링됩니다. 이전 레이아웃이 남아있을때보다 부자연스럽게 느껴져 스켈레톤 컴포넌트를 추가하였습니다.

### 이미지 URL이 없는 경우

검색 결과에 나타나는 과목 카드 데이터 값 중 이미지 url을 포함하지 않는 것들 존재해 임시 이미지를 추가해주었습니다.