export function filterFood(title: any) {
  return {
    type: 'FILTER_FOOD',
    title,
  };
}