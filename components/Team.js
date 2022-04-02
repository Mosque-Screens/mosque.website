const people = [
  {
    name: 'Dilowar Hussain Khan',
    role: 'Director of Finance & Engagement',
    imageUrl:
      'https://www.eastlondonmosque.org.uk/GetImage.aspx?IDMF=7419cf68-52e3-41e6-84e7-11cadd6a7f4e&w=150&h=210&src=mc',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Shaykh Abdul Qayum',
    role: 'Head Imam',
    imageUrl:
      'https://www.eastlondonmosque.org.uk/GetImage.aspx?IDMF=aecf4922-e797-44a8-a2ff-0ab6b7cf5bf0&w=150&h=210&src=mc',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Shaykh Mohammed Mahmoud',
    role: 'Senior Imam',
    imageUrl:
      'https://www.eastlondonmosque.org.uk/GetImage.aspx?IDMF=5b421c6e-f311-4f5f-bd10-f5505b828541&w=150&h=210&src=mc',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Sufia Alam',
    role: 'Head of Programmes & Maryam Centre',
    imageUrl:
      'https://www.eastlondonmosque.org.uk/GetImage.aspx?IDMF=73fb7ccc-8721-4e2c-9371-1e92bb9134cf&w=150&h=210&src=mc',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="mosque-website__text--brand">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
