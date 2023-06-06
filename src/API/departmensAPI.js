 export const getDepartments = async (region) => {
    const departments = [
    { id: 1, value: '', label: 'Виберіть відділення' },
    { id: 2, value: 'irpin', label: 'Ірпінське відділення' },
    { id: 3, value: 'kyiv', label: 'Київоблгаз' },
    { id: 4, value: 'chernivgaz', label: 'Чернівгаз' },
    { id: 5, value: 'chernivgazzbut', label: 'Чернівгаззбут' },
  ];

  if (region === 'Kyiv') {
    return departments.filter(
      (v) => v.value === 'irpin' || v.value === 'kyiv' || v.value === ''
    );
  }
  if (region === 'Chernigiv') {
    return departments.filter(
      (v) => v.value === 'chernivgaz'  || v.value === ''
    );
  }
}