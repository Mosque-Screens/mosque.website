import ReactMarkdown from 'react-markdown'

export default function ContentSection(props) {
  return (<>
    {props.data.content_sections && props.data.content_sections.map( section => (
      <div className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8" key={`section_${section.title}`}>
        <div className="text-lg max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{section.title}</h2>
          <div className="mt-6 text-gray-700 markdown">
            <ReactMarkdown>
              {section.body}
            </ReactMarkdown>
          </div>
          {section.action_button && <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <a
                href={section.action_button.link}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white mosque-website__cta-button--brand opacity-90 hover:opacity-100"
              >
                {section.action_button.label}
              </a>
            </div>
          </div>}
        </div>
      </div>
    ))}
    </>
  )
}
