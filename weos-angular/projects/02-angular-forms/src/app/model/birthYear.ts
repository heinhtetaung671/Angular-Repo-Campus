export const birthYears = (): number[] => {
  const result: number[] = [];
  const year = new Date().getFullYear();

  for (let i: number = 2000; i <= year ; i++) {
    result.push(2000 + (year - i));
  }

  return result;
}
