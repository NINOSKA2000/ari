import React, { useState } from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function DateRange () {
  const [value, setValue] = useState(dayjs('2022-04-17'))
  return (
    <div className='box-dates'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker label='Uncontrolled picker' defaultValue={dayjs('2022-04-17')} />
          <DatePicker
            label='Controlled picker'
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}