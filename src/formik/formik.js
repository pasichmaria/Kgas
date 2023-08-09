import * as Yup from 'yup'
export const validateAdditionalInfo = Yup.object().shape({
  photo_passport_user: Yup.mixed()
    .required('Пожалуйста, загрузите фото')
    .test(
      'fileSize',
      'Файл слишком большой',
      (value) => value && value.size <= 1024 * 1024 * 2
    )
    .test(
      'fileType',
      'Неверный тип файла. Разрешены только изображения',
      (value) => value && value.type.startsWith('image/')
    ),
photo_indef_user: Yup.mixed()
    .required('Please upload a photo')
    .test(
      'fileSize',
      'File size is too large',
      (value) => value && value.size <= 1024 * 1024 * 4
    )
    .test(
      'fileType',
      'Invalid file type. Only image files are allowed',
      (value) => value && value.type.startsWith('image/')
    ),
  photo_violation : Yup.mixed()
  .required('Please upload a photo')
  .test(
    'fileSize',
    'File size is too large',
    (value) => value && value.size <= 1024 * 1024 * 4
  )
.test(
    'fileType',
    'Invalid file type. Only image files are allowed',
    (value) => value && value.type.startsWith('image/')
  ) ,
  pasport_na_zvt: Yup.mixed()
  .required('Please upload a photo')
  .test(
    'fileSize',
    'File size is too large',
    (value) => value && value.size <= 1024 * 1024 * 4
  ).test(
    'fileType',
    'Invalid file type. Only image files are allowed',
    (value) => value && value.type.startsWith('image/')
  )
})
