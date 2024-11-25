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
    setCurrent(1);
  }, [search, chips.length])
  useEffect(() => {
    const url = makeUrl(pathname, search, chips);
    router.push(url);
    updateCourses();
  }, [search, chips, offset, current]);

  return { search, setSearch, chips, setChips, result, current, setCurrent, total };
}
