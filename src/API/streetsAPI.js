 export const getStreet = async (city) => {
   const streets = [
     { id: 1, value: '', label: 'Оберіть вулицю' },
     { id: 2, value: 'polyarna', label: 'Полярна' },
     { id: 3, value: 'varshavska', label: 'Варшавська' },
     { id: 4, value: 'pischana', label: 'Піщана' },
     { id: 5, value: 'kyivska', label: 'Київська' },
     { id: 6, value: 'irpinska', label: 'Ірпінська' },
     { id: 7, value: 'buchanska', label: 'Бучанська' },
     { id: 8, value: 'kontraktova', label: 'Контрактова' },
     { id: 9, value: 'boyarska', label: 'Боярська' },
     { id: 10, value: 'poshtova', label: 'Поштова' },
     { id: 11, value: 'kontraktova', label: 'Контрактова' },
     { id: 12, value: 'rudenka', label: 'Руденка' },
     { id: 13, value: 'soborna', label: 'Соборна' },
   ]

   if (city === 'kyiv') {
     return streets.filter(
       (v) => v.value === 'kontraktova' || v.value === 'kyivska'|| v.value === 'poshtova'  || v.value === ''
     );
   }
   if (city === 'boyarka') {
     return streets.filter(
       (v) => v.value === 'polyarna' || v.value === 'varshavska'|| v.value === 'boyarska'|| v.value === 'boyarskaya'  || v.value === ''
     );
   } if (city === 'irpin') {
     return streets.filter(
       (v) => v.value === 'pischana' || v.value === 'irpinska' || v.value === 'soborna'  || v.value === ''
     );
   }
   if (city === 'bucha') {
     return streets.filter(
       (v) => v.value === 'buchanska'|| v.value === 'rudenka'  || v.value === ''
     );
   }
 }