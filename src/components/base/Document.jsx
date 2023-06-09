import React from 'react'

export const Document = ({ act }) => {
  console.log('act ', act)
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-4xl text-center font-light mt-12 m-4'>Акт № {act.act_number}</h2>
      <div className='grid grid-cols-3 grid-rows-4 gap-24'>
        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Дата та час реєстрації порушення:</p>
          {act.reg_date ? act.reg_date && (<>
            <p className='text-lg font-light'>{act.reg_date}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація по даті та часу реєстрації порушення.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Вид порушення:</p>
          {act.violation_type.violation_description ? act.violation_type.violation_description && (<>
            <p className='text-lg font-light'>{act.violation_type.violation_description}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про вид порушення.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Статус дій по порушенню:</p>
          {act.action_state.state ? act.action_state.state && (<>
            <p className='text-lg font-light'>{act.action_state.state}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутній статус дій по порушенню.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Типорозмір лічильника:</p>
          {act.counter_size.counter_size ? act.counter_size.counter_size && (<>
            <p className='text-lg font-light'>{act.counter_size.counter_size}</p>
          </>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про типорозмір.
          </h1>)}
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Область:</p>
          {act.region.region_name ? act.region.region_name &&
            <p className='text-lg font-light'>{act.region.region_name}</p> : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про область.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Віділення:</p>
          {act.department.department_name ? act.department.department_name &&
            <p className='text-lg font-light'>{act.department.department_name}</p> : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про віділення.
          </h1>)}

          <p className='text-lg font-medium mt-6'>Адреса порушення:</p>
          {act.city.city_name && act.street.street_name && act.house_number ? (<p className='text-lg font-light'>
            {`${act.city.city_name}, вул.${act.street.street_name} буд. № ${act.house_number}`}
            {act.app_number ? `, кв. ${act.app_number}` : null}
          </p>) : (<h1 className='text-red-500 mt-5'>
            Відсутня інформація про адресу порушення .
          </h1>)}
        </div>

        <div className='p-4'>
          <p className='text-lg font-medium mt-6'>Вид контрагента:</p>
          {act.contractor_type.contractor_type_name ? act.contractor_type.contractor_type_name && (
            <p className='text-lg font-light'>{act.contractor_type.contractor_type_name}</p>) : (
            <h1 className='text-red-500'>
              Відсутня інформація про тип контрагента.
            </h1>)}

          {act.contractor_type.contractor_type_name === 'Имя один' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ:</p>
            {act.fiz_name ? act.fiz_name && (<p className='text-lg font-light'>{act.fiz_name}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про ПІБ.
              </h1>)} </div>)}


          {act.contractor_type.contractor_type_name === 'Имя один' && (<div>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            {act.is_consumer ? act.is_consumer && (<p className='text-lg font-light'>{act.is_consumer}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про тип споживача.
              </h1>)} </div>)}
          fiz_name

          {act.contractor_type.contractor_type_name === 'Имя один' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ представника:</p>
            {act.fiz_name ? act.fiz_name && (<p className='text-lg font-light'>{act.fiz_name}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про ПІБ.
              </h1>)} </div>)}

          {act.contractor_type.contractor_type_name === 'Имя один' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ представника:</p>
            {act.goverment_name ? act.goverment_name && (<p className='text-lg font-light'>{act.goverment_name}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про ПІБ представника.
              </h1>)} </div>)}

          {act.contractor_type.contractor_type_name === 'Имя один' && (<div>
            <p className='text-lg font-medium mt-6'>ПІБ представника:</p>
            {act.personal_account ? act.personal_account && (
              <p className='text-lg font-light'>{act.personal_account}</p>) : (<h1 className='text-red-500'>
              Відсутня інформація про особовий рахунок .
            </h1>)} </div>)}

          {act.contractor_type.contractor_type_name === 'Имя два' && (<div>
            <p className='text-lg font-medium mt-6'>Споживач/не споживач:</p>
            {act.is_consumer ? act.is_consumer && (<p className='text-lg font-light'>{act.is_consumer}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про тип споживача.
              </h1>)} </div>)}

          {act.contractor_type.contractor_type_name === 'Имя два' && (<div>
            <p className='text-lg font-medium mt-6'>Назва юридичної особи:</p>
            {act.company_name ? act.company_name && (<p className='text-lg font-light'>{act.company_name}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про назвву юр. особи.
              </h1>)} </div>)}

          {act.contractor_type.contractor_type_name === 'Имя два' && (<div>
            <p className='text-lg font-medium mt-6'>ЕДРПО:</p>
            {act.edrpou ? act.edrpou && (<p className='text-lg font-light'>{act.edrpou}</p>) : (
              <h1 className='text-red-500'>
                Відсутня інформація про ЕДРПО.
              </h1>)} </div>)}

        </div>
      </div>
    </div>)
}
