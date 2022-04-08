import Link from "next/link"

const navigation = [
 // { name: 'About us', href: '/about' },
 // { name: 'Contact', href: '/contact' },
]

export default function HeroBanner(props) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <a>
                      <span className="sr-only">{props.data.name}</span>
                      <img
                        className="h-16 w-auto"
                        src={props.data.branding.logo_url}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="xhidden md:block md:ml-10 pr-4 space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{' '}
                <span className="block mosque-website__text--brand">{props.data.name}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.data.description}
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={props.data.branding.banner_image_url}
          alt=""
        />
      </div>
    </div>
  )
}
