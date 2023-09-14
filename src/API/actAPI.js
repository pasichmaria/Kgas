import axios from './axios'

export const getActByNumber = async ({ id }) => {
  const response = await axios.get(`http://${window.location.host}/api/act?id=${id}`, {
    withCredentials: true, timeout: 15000
  })
  return response.data
}
export const getAllActs = async ({ currentPage, perPage, total, searchValue }) => {
  const response = await axios.get(`http://${window.location.host}/api/acts`, { withCredentials: true, timeout: 15000 })
  return response.data
}
export const getLabAct = async ({ id }) => {
  const response = await axios.get(`http://${window.location.host}/api/labAct?id=${id}`, {
    withCredentials: true, timeout: 15000
  })
  return response.data
}
export const addAct = async ({
                               act_number,
                               action_state_id,
                               app_number,
                               city_id,
                               company_name,
                               contractor_type_id,
                               counter_size_id,
                               department_id,
                               edrpou,
                               fiz_name,
                               goverment_name,
                               house_number,
                               is_central,
                               is_consumer,
                               personal_account,
                               reg_date,
                               region_id,
                               street_id,
                               unit_id,
                               violation_type_id
                             }) => {
  const response = await axios.post(`http://${window.location.host}/api/act/add`, {
    act_number,
    action_state_id,
    app_number,
    city_id,
    company_name,
    contractor_type_id,
    counter_size_id,
    department_id,
    edrpou,
    fiz_name,
    goverment_name,
    house_number,
    is_central,
    is_consumer,
    personal_account,
    reg_date,
    region_id,
    street_id,
    unit_id,
    violation_type_id
  }, {
    withCredentials: true, timeout: 15000
  })
  console.log(response.data)
  return response.data
}

export const addActAdditional = async ({
                                         photo_passport_user,
                                         photo_indef_user,
                                         photo_violation,
                                         pasport_na_zvt,
                                         act_znyattya_zvt,
                                         act_vidklychennya_objecta,
                                         tech_pasport_objecta,
                                         act_obst,
                                         passport_GSO,
                                         video_violation,
                                         storona_ZVT,
                                         date_vidpravky_ZVT,
                                         date_ostannogo_povirky,
                                         counter_type,
                                         isIntrusion,
                                         conter_number
                                       }) => {
  const response = await axios.post(`http://${window.location.host}/api/act/additional`, {
    photo_passport_user,
    photo_indef_user,
    photo_violation,
    pasport_na_zvt,
    act_znyattya_zvt,
    act_vidklychennya_objecta,
    tech_pasport_objecta,
    act_obst,
    passport_GSO,
    video_violation,
    storona_ZVT,
    date_vidpravky_ZVT,
    date_ostannogo_povirky,
    counter_type,
    isIntrusion,
    conter_number
  }, {
    withCredentials: true, timeout: 15000
  })
  console.log(response.data)
  return response.data
}
export const addActPLG = async ({ date_arrived_to_SC, meter_type_size, meter_brand,
                                  actual_expertise_date, expertise_report_issue_date, manufacturing_year, meter_serial_number, meter_readings_on_expertise_date, expertise_result,
                                  expertise_report_number, consumer_presence_at_the_commission, invalidity_certificate, power_of_attorney, video_and_photo_of_expertise, document_confirming_the_call_for_expertise
                                }) => {
  const response = await axios.post(`http://${window.location.host}/api/act/add/plg`,
    {date_arrived_to_SC, meter_type_size, meter_brand,
      actual_expertise_date, expertise_report_issue_date, manufacturing_year, meter_serial_number, meter_readings_on_expertise_date, expertise_result,
      expertise_report_number, consumer_presence_at_the_commission, invalidity_certificate, power_of_attorney, video_and_photo_of_expertise, document_confirming_the_call_for_expertise
    }, {
    withCredentials: true, timeout: 15000
  })
  return response.data
}