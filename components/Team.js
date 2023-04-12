export default function Team(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-5 pb-10 px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our team
          </h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {props.data.team.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 bg-slate-100 lg:gap-8 lg:p-2 rounded-lg">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-contain lg:object-cover shadow-lg rounded-lg"
                      src={person.image_url}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="mosque-website__text--brand">
                          {person.role}
                        </p>
                      </div>
                      {/* <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
