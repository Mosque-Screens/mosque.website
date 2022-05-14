import ReactMarkdown from 'react-markdown'

export default function About(props) {
  return (<>
    {props.data.about && (<div id="about" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8">
      <div className="text-lg max-w-4xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About us</h2>
        <div className="mt-6 text-gray-700 markdown">
          <ReactMarkdown>
            {props.data.about}
          </ReactMarkdown>
        </div>
      </div>
    </div>)}
    </>
  )
}
