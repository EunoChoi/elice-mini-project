import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry'
import RQProvider from "@/reactQuery/RQProvider";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getCourses } from "./(elice-edu-course)/_api/getCourse";
import { maxLoadCount } from "@/constants/maxLoadCount";



export const metadata: Metadata = {
  title: "엘카데미 | 오늘 배워서 내일 바로 적용하는 실무중심 코딩교육",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();


  const updateCourses = getCourses(0, maxLoadCount, '', []);
  await queryClient.prefetchQuery({
    queryKey: ['searchKeyword', '', 'selectedChips', [], 'offset', 0, 'maxLoadCount', 20, 'currentPage', 1],
    queryFn: () => updateCourses,
    staleTime: 3600000,
    gcTime: 3600000
  });
  const dehydratedState = dehydrate(queryClient)

  return (
    <html lang="kr">
      <body>
        <link href="https://font.elice.io/css?family=Elice+DX+Neolli" rel="stylesheet" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        <StyledComponentsRegistry>
          <RQProvider>
            <HydrationBoundary state={dehydratedState}>
              {children}
            </HydrationBoundary>
          </RQProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
