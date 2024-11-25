// import { CHIPS, CHIPS_ARRAY } from '@/constants/CHIPS';
// import { QueryKey } from '@/types/QueryKey';
// import {
//   addEachQueryValue,
//   alreadyExistQueryValue,
//   removeEachQueryValue,
// } from '@/utils/routerQueryString';


import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getChipsCondition } from '../functions/getChipsCondition';
import { makeUrl } from '../functions/makeUrl';
import { getCourses } from '@/app/(elice-edu-course)/_api/getCourse';

//여기에 stringify함수 넣고
//함수 거친 값을 router.push하면된다. 

// name: string;
// query_key: string;
// query_value: string;
// enroll_type: number;
// is_free: boolean;

interface chipData {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

export default function useSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [current, setCurrent] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string | null>(
    searchParams.get("keyword") || null
  );
  const [chips, setChips] = useState<chipData[]>(
    getChipsCondition(searchParams)
  );
  const [result, setResult] = useState<any>();

  const count = 20;
  const offset = 20 * (current - 1);



  const updateCourses = async () => {
    const response = await getCourses(offset, count, search, chips);
    setResult(response);
    setTotal(response?.course_count);
  };
  console.log(result);

  useEffect(() => {
    const url = makeUrl(pathname, search, chips);
    router.push(url);
    updateCourses();
  }, [search, chips, offset, current]);



  console.log(chips);

  // const add = (chipData: chipData) => {

  // };

  // const remove = (key: QueryKey, value: string) => {

  // };

  return { search, setSearch, chips, setChips, result, current, setCurrent, total };
}
