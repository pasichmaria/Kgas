import React from 'react'

export const Document = ({ act }) => {
  return (
    <div className='w-11/12  mx-auto'>
      <h2 className='text-4xl text-center font-light mt-12 m-4'>Акт № {act.actNumber}</h2>
      <div className='grid grid-cols-3 grid-rows-4 gap-24'>
        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Дата та час реєстрації порушення:</p>
          <p className='text-lg font-light'>{act.removalAndRegistrationDate}</p>
          <p className='text-lg font-medium mt-6'>Відділеня, дільниця:</p>
          <p className='text-lg font-light'>{act.department}</p>
          <p className='text-lg font-medium mt-6'>Вид порушення:</p>
          <p className='text-lg font-light'>{act.violationType}</p>
          <p className='text-lg font-medium mt-6'>Статус дій по порушенню:</p>
          <p className='text-lg font-light'>{act.actionStatus}</p>
          <p className='text-lg font-medium mt-6'>Типорозмір лічильника:</p>
          <p className='text-lg font-light'>{act.meterSize}</p>
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Область:</p>
          <p className='text-lg font-light'>{act.region}</p>
          <p className='text-lg font-medium mt-6'>Місто:</p>
          <p className='text-lg font-light'>{act.city}</p>
          <p className='text-lg font-medium mt-6'>Адреса:</p>
          <p className='text-lg font-light'>{act.house}</p>
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Вид контрагента:</p>
          <p className='text-lg font-light'>{act.contragent.osoba_type}</p>
          {(act.contragent.osoba_type === 'Фізична особа') && (<>
            <p className='text-lg font-medium mt-6'>ПІБ:</p>
            <p className='text-lg font-light'>{act.contragent.PIB}</p>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>
            <p className='text-lg font-medium mt-6'>ПІБ представника:</p>
            <p className='text-lg font-light'>{act.contragent.PIB_predstavnyka}</p>
          </>)}
          {(act.contragent.osoba_type === 'Юридична особа') && (<>
            <p className='text-lg font-medium mt-6'>Споживач/ не споживач:</p>
            <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>
            <p className='text-lg font-medium mt-6'>Назва юридичної особи:</p>
            <p className='text-lg font-light'>{act.contragent.nazva_yuridichna_osoba}</p>
            <p className='text-lg font-medium mt-6'>ЕДРПО:</p>
            <p className='text-lg font-light'>{act.contragent.EDRPO}</p>
          </>)}
          {(act.contragent.osoba_type === 'Не встановлена особа') && (<>
            <p className='text-lg font-medium'>Споживач/ не споживач:</p>
            <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>
          </>)}
        </div>
      </div>
    </div>)
}
