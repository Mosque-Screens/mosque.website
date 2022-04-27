/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'

const timetable = [
  {
    month: 'January',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'February',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'March',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'April',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'May',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'June',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'July',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'August',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'September',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'October',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'November',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
  {
    month: 'December',
    days: [
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
      { fajr: '06:00', zuhr: '01:30', asr: '04:30', maghrib: '06:00', isha: '08:00' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PrayerTimes(props) {

  const [currentMonth, setMonth] = useState(new Date().getMonth())

  return (<>
    {props.data.prayer_times && (<div id="prayertimes" className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Prayer Timetable</h1>
          <p className="mt-2 text-sm text-gray-700">
            Prayer times for the {props.data.name}
          </p>
          <div className="mt-4 max-w-sm">
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">
              Select Month
            </label>
            <select
              id="month"
              name="month"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue={currentMonth}
              onChange={(event) => setMonth(event.target.value)}
            >
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Month / Day
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Fajr
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Zuhr
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Asr
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Maghrib
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Isha
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                    <Fragment key={timetable[currentMonth].month}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={6}
                          scope="colgroup"
                          className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          {timetable[currentMonth].month}
                        </th>
                      </tr>
                      {timetable[currentMonth].days.map((day, dayIdx) => (
                        <tr
                          key={`${timetable[currentMonth].month}_${dayIdx}`}
                          className={classNames(dayIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {dayIdx+ 1}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{day.fajr}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{day.zuhr}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{day.asr}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{day.maghrib}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{day.isha}</td>
                        </tr>
                      ))}
                    </Fragment>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>)}
  </>)
}
