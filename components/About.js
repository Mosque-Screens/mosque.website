/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function About(props) {
  return (
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
      <div className="text-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About us</h2>
        <div>
          {props.data.about}
        </div>
      </div>
    </div>
  )
}
