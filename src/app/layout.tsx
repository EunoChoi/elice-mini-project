import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "엘카데미 | 오늘 배워서 내일 바로 적용하는 실무중심 코딩교육",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <link href="https://font.elice.io/css?family=Elice+DX+Neolli" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
