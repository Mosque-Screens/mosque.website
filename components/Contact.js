/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/outline'

export default function Contact(props) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Where to find us</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                You can find us at the following address.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <HomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>{props.data.contact_address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Administrative Information</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Information about the charity
              </p>
            </div>
            <div className="mt-9">
              {props.data.charity_information.map( (info) => (
                <div className="flex">
                  <div className="flex-shrink-0">
                    {info.label}
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
