import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function DashboardAdmin() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth" // Hiển thị lịch theo tháng
      weekends={true} // Cho phép hiển thị cả ngày thứ 7 và chủ nhật
      select={(s) => alert('select'+s)}
      eventClick={(e) => alert('eventClick'+e)}
      events={[
        { title: 'event 1', start: '2024-02-01' , end: '2024-02-05' , color: 'red' },
        { title: 'event 2', start: '2024-03-02' }
      ]}
    />
  )
}
