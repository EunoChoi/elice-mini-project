export const makeWon = (amount: number): string => {
  return `₩${amount.toLocaleString('ko-KR')}`;
};