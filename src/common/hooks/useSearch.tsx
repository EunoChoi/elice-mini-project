import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getChipsCondition } from '../functions/getChipsCondition';
import { makeUrl } from '../functions/makeUrl';
import { getCourses } from '@/app/(elice-edu-course)/_api/getCourse';

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
  const [totalCourse, setTotalCourse] = useState<number>(0);
  const [search, setSearch] = useState<string | null>(searchParams.get("keyword"));
  const [chips, setChips] = useState<chipData[]>(
    getChipsCondition(searchParams)
  );
  const [result, setResult] = useState<any>();

  const count = 20;
  const offset = 20 * (current - 1);


  const updateCourses = async () => {
    const response = await getCourses(offset, count, search, chips);
    setResult(response);
    setTotalCourse(response?.course_count);
    setTotal(response?.course_count / 20);
  };
  console.log(result);


  // useEffect(() => {
  //   setCurrent(1);
  // }, [search, chips.length])

  useEffect(() => {
    const url = makeUrl(pathname, search, chips);
    router.push(url);
  }, [search, chips.length, current]);

  useEffect(() => {
    updateCourses();

  }, [searchParams]);

  return { search, setSearch, chips, setChips, result, current, setCurrent, total, totalCourse };
}
