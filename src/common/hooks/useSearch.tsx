import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getChipsCondition } from '../functions/getChipsCondition';
import { makeUrl } from '../functions/makeUrl';
import { getCourses } from '@/app/(elice-edu-course)/_api/getCourse';

import { Result } from '@/types/Result';
import { ChipValue } from '@/types/Chip';



export default function useSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string | null>(searchParams.get("keyword"));
  const [selectedChips, setSelectedChips] = useState<ChipValue[]>(
    getChipsCondition(searchParams)
  );

  const [result, setResult] = useState<Result>();

  const count = 20;
  const offset = 20 * (currentPage - 1);


  const updateCourses = async () => {
    const response = await getCourses(offset, count, searchKeyword, selectedChips);

    const resultCourses = response?.courses;
    const totalCourse = response?.course_count;
    const totalPage = response?.course_count / 20;

    setResult({ resultCourses, totalCourse, totalPage });
  };
  console.log(result?.resultCourses);


  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword, selectedChips.length])

  useEffect(() => {
    const url = makeUrl(pathname, searchKeyword, selectedChips);
    router.push(url);
  }, [searchKeyword, selectedChips.length, currentPage]);

  useEffect(() => {
    updateCourses();

  }, [searchParams]);

  return {
    searchKeyword,
    setSearchKeyword,
    selectedChips,
    setSelectedChips,
    currentPage,
    setCurrentPage,

    result,
    setResult,
  };
}
