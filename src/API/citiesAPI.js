
export const getCity = async (department) => {
  const cities = [
    { id: 1, value: '', label: 'Виберіть місто' },
    { id: 2, value: 'kyiv', label: 'м.Київ' },
    { id: 3, value: 'boyarka', label: 'м.Боярка' },
    { id: 4, value: 'irpin', label: 'м.Ірпінь' },
    { id: 5, value: 'bucha', label: 'м.Буча' },
    { id: 6, value: 'chernigiv', label: 'м.Чернігів' },
    { id: 7, value: 'ulyanovka', label: 'м.Уляновка' },
    { id: 8, value: 'pavlovka', label: 'м.Павловка' }
  ];
  if (department === 'kyiv') {
    return cities.filter(
      (v) => v.value === 'kyiv' || v.value === 'boyarka'  || v.value === ''
    );
  }
  if (department === 'irpin') {
    return cities.filter(
      (v) => v.value === 'irpin' || v.value === 'bucha'  || v.value === ''
    );
  }
  if (department === 'chernivgaz') {
    return cities.filter(
      (v) => v.value === 'pavlovka' || v.value === 'ulyanovka'  || v.value === ''
    );
  }
}
