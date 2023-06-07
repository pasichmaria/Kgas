import React from 'react'

export const Document = ({ act }) => {
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-4xl text-center font-light mt-12 m-4'>Акт № {act.actNumber}</h2>
      <div className='grid grid-cols-3 grid-rows-4 gap-24'>
        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Дата та час реєстрації порушення:</p>
          {act.removalAndRegistrationDate ? act.removalAndRegistrationDate && (<>
            <p className='text-lg font-light'>{act.removalAndRegistrationDate}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація по даті та часу реєстрації порушення.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Вид порушення:</p>
          {act.violationType ? act.violationType && (<>
            <p className='text-lg font-light'>{act.violationType}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про вид порушення.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Статус дій по порушенню:</p>
          {act.actionStatus ? act.actionStatus && (<>
            <p className='text-lg font-light'>{act.actionStatus}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутній статус дій по порушенню.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Типорозмір лічильника:</p>
          {act.meterSize ? act.meterSize && (<>
            <p className='text-lg font-light'>{act.meterSize}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про типорозмір.
          </h1>)}
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Область:</p>
          {act.region ? act.region && <p className='text-lg font-light'>{act.region}</p> : (
            <h1 className='text-red-500 mt-5'>
              Відсутня інформація про область.
            </h1>)}

          <p className='text-lg font-medium mt-6'>Віділення:</p>
          {act.department ? act.department && <p className='text-lg font-light'>{act.department}</p> : (
            <h1 className='text-red-500 mt-5'>
              Відсутня інформація про віділення.
            </h1>)}

          <p className='text-lg font-medium mt-6'>Адреса порушення:</p>
          {act.city && act.street && act.house ? (<p className='text-lg font-light'>
            {`${act.city}, вул.${act.street} буд. № ${act.house}`}
            {act.apartment ? `, кв. ${act.apartment}` : null}
          </p>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про адресу порушення .
          </h1>)}
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Вид контрагента:</p>
          {act.contragent.osoba_type ? act.contragent.osoba_type && (
            <p className='text-lg font-light'>{act.contragent.osoba_type}</p>) : (<h1 className='text-red-500'>
            Відсутня інформація про тип контрагента.
          </h1>)}

          {act.contragent.osoba_type === 'Фізична особа' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ:</p>
            {act.contragent.PIB ? act.contragent.PIB && (<p className='text-lg font-light'>{act.contragent.PIB}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про ПІБ.
              </h1>)} </div>)}


          {act.contragent.osoba_type === 'Фізична особа' && (<div>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            {act.contragent.spozyvachtype ? act.contragent.spozyvachtype && (
              <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про тип споживача.
            </h1>)} </div>)}

          {act.contragent.osoba_type === 'Фізична особа' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ представника:</p>
            {act.contragent.PIB_predstavnyka ? act.contragent.PIB_predstavnyka && (
              <p className='text-lg font-light'>{act.contragent.PIB_predstavnyka}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про ПІБ представника.
            </h1>)} </div>)}

          {act.contragent.osoba_type === 'Юридична особа' && (<div>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            {act.contragent.spozyvachtype ? act.contragent.spozyvachtype && (
              <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про тип споживача.
            </h1>)} </div>)}

          {act.contragent.osoba_type === 'Юридична особа' && (<div>
            <p className='text-lg font-medium mt-6'>Назва юридичної особи:</p>
            {act.contragent.nazva_yuridichna_osoba ? act.contragent.nazva_yuridichna_osoba && (
              <p className='text-lg font-light'>{act.contragent.nazva_yuridichna_osoba}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про назва юр. особи.
              </h1>)} </div>)}

          {act.contragent.osoba_type === 'Юридична особа' && (<div>
            <p className='text-lg font-medium mt-6'>ЕДРПО:</p>
            {act.contragent.EDRPO ? act.contragent.EDRPO && (
              <p className='text-lg font-light'>{act.contragent.EDRPO}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про ЕДРПО.
            </h1>)} </div>)}

          {act.contragent.osoba_type === 'Юридична особа' && (<div>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            {act.contragent.spozyvachtype ? act.contragent.spozyvachtype && (
              <p className='text-lg font-light'>{act.contragent.spozyvachtype}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про тип споживача
            </h1>)} </div>)}

        </div>
      </div>
    </div>)
}
