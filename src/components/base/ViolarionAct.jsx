import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

export const ViolarionAct = ({ act }) => {
  console.log(act)

  return (
    <Container sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      backgroundColor: '#ffffff',
      mb: 15
    }}>

      <Typography variant='h3' align='center'>
        Акт № {act.act_number}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Дата та час реєстрації порушення:
          </Typography>
          {act.reg_date ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.reg_date}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація по даті та часу реєстрації порушення.
            </Typography>
          )}
          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Вид порушення:
          </Typography>
          {act.violation_type.violation_description ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.violation_type.violation_description} {' '} {act.violation_type.violation_name}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація про вид порушення.
            </Typography>
          )}

          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Статус дій по порушенню:
          </Typography>
          {act.action_state.state ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.action_state.state}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутній статус дій по порушенню.
            </Typography>
          )}

          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Типорозмір лічильника:
          </Typography>
          {act.counter_size.counter_size ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.counter_size.counter_size}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація про типорозмір.
            </Typography>
          )}
        </Grid>

        <Grid item xs={4}>
          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Область:
          </Typography>
          {act.region.region_name ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.region.region_name}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація про область.
            </Typography>
          )}

          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Віділення:
          </Typography>
          {act.department.department_name ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.department.department_name}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація про віділення.
            </Typography>
          )}

          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Адреса порушення:
          </Typography>
          {act.city.city_name && act.street.street_name && act.house_number ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {`${act.city.city_name}, вул.${act.street.street_name} буд. № ${act.house_number}`}
              {act.app_number ? `, кв. ${act.app_number}` : null}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500', mt: 5 }}>
              Відсутня інформація про адресу порушення.
            </Typography>
          )}
        </Grid>

        <Grid item xs={4}>
          <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
            Вид контрагента:
          </Typography>
          {act.contractor_type.contractor_type_name ? (
            <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
              {act.contractor_type.contractor_type_name}
            </Typography>
          ) : (
            <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
              Відсутня інформація про тип контрагента.
            </Typography>
          )}

          {act.contractor_type.contractor_type_name === 'Имя один' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                ПІБ:
              </Typography>
              {act.fiz_name ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.fiz_name}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про ПІБ.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя один' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                Споживач/не споживач:
              </Typography>
              {act.is_consumer ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.is_consumer}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про тип споживача.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя один' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                ПІБ представника:
              </Typography>
              {act.goverment_name ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.goverment_name}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про ПІБ представника.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя один' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                Персональний рахунок:
              </Typography>
              {act.personal_account ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.personal_account}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про особовий рахунок.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя два' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                Споживач/не споживач:
              </Typography>
              {act.is_consumer ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.is_consumer}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про тип споживача.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя два' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                ПІБ представника:
              </Typography>
              {act.goverment_name ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.goverment_name}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про ПІБ представника.
                </Typography>
              )}
            </>
          )}

          {act.contractor_type.contractor_type_name === 'Имя два' && (
            <>
              <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'medium', mt: 6 }}>
                Персональний рахунок:
              </Typography>
              {act.personal_account ? (
                <Typography variant='body1' component='p' sx={{ fontSize: 'lg', fontWeight: 'light' }}>
                  {act.personal_account}
                </Typography>
              ) : (
                <Typography variant='h1' component='h1' sx={{ color: 'red.500' }}>
                  Відсутня інформація про особовий рахунок.
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}