export default function StatusComponent() {
    return (
      <div className="bg-yellow-400">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Enjoy and make the most of your stay</h2>
            <p className="mt-3 text-2xl text-white sm:mt-4">
              Our properties come with various amenities you can enjoy. Envision yourself taking pleasure in these facilities.  
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-100">Indulgence</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-100">Support</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-100">Experience</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }