/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline'

export default function Contact(props) {
  return (
    <div id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 pt-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          {props.data.contact && (<div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact information</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                This is where you can get in touch with us
              </p>
            </div>
            <div className="mt-9">
              {props.data.contact && props.data.contact.addresses && props.data.contact.addresses.map( (address) => (
                <div className="flex mb-2" key={address}>
                  <div className="flex-shrink-0">
                    <HomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <address>{address}</address>
                  </div>
                </div>
              ))}
              {props.data.contact && props.data.contact.phone_numbers && props.data.contact.phone_numbers.map( (phone) => (
                <div className="flex mb-2" key={phone.number}>
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    {phone.name} - <phone tel={phone.number}>{phone.number}</phone>
                  </div>
                </div>
              ))}
              {props.data.contact && props.data.contact.email_addresses && props.data.contact.email_addresses.map( (email) => (
                <div className="flex mb-2" key={email.address}>
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    {email.name} - <a href={`mailto:${email.address}`}>{email.address}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>)}
          {props.data.charity_information && (<div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Charity Information</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Information about the charity
              </p>
            </div>
            <div className="mt-9">
              {props.data.charity_information && props.data.charity_information.map( (info) => (
                <div className="flex" key={info.label}>
                  <div className="flex-shrink-0">
                    {info.label}
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}
