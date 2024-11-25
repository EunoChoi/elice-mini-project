import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { getChipsCondition } from '../functions/getChipsCondition';
import { makeUrl } from '../functions/makeUrl';

import { ChipValue } from '@/types/Chip';
import { useSearchKeywordStore } from '@/store/useSearchKeywordStore';
import { useSelectedChipsStore } from '@/store/useSelectedChipsStore';
import { useCurrentPageStore } from '@/store/useCurrentPageStore';

export default function useSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { value: searchKeyword } = useSearchKeywordStore();
  const { value: selectedChips, setValue: setSelectedChips } = useSelectedChipsStore();
  const { value: currentPage, setValue: setCurrentPage } = useCurrentPageStore();


  //새로고침 이후 query 보존
  useEffect(() => {
    setSelectedChips(getChipsCondition(searchParams));
  }, [])
  //search, chip 선택에 따른 url query 변경
  useEffect(() => {
    const url = makeUrl(pathname, searchKeyword, selectedChips);
    router.push(url);
  }, [searchKeyword, selectedChips.length, currentPage]);
  //search, chip 선택 시 1페이지로 이동 처리
  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword, selectedChips.length])

  return {
  };
}