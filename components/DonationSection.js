import ReactMarkdown from 'react-markdown'

export default function DonationSection(props) {
  return (<>
    {props.data.donation && (<div className="bg-white">
      <div id="donate" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8 md:py-16 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{props.data.donation.title}</span>
          <span className="block mosque-website__text--brand">{props.data.donation.subtitle}</span>
        </h2>
        <div className="mt-6 text-gray-700 markdown max-w-3xl">
          <ReactMarkdown>
            {props.data.donation.description}
          </ReactMarkdown>
        </div>
        <div className="mt-8 flex">
          <div className="inline-flex rounded-md shadow">
            <a
              href={props.data.donation.link}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white mosque-website__cta-button--brand opacity-90 hover:opacity-100"
            >
              {props.data.donation.link_label}
            </a>
          </div>
        </div>
      </div>
    </div>)}
  </>)
}
  