/* This example requires Tailwind CSS v2.0+ */
const images = [
    { 
      url:'https://a0.muscache.com/im/pictures/f055dcb9-548e-4f9f-9620-10e05f420d0d.jpg?im_w=720',
      name:'Image1.png'
    },
    { 
      url:'https://a0.muscache.com/im/pictures/d9d06b6b-6180-4d67-8873-024304717d2a.jpg?im_w=960',
      name: 'Image2.png'
    },
    // More people...
  ]
  
  export default function ImageListComponent() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      URL
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {images.map((image, personIdx) => (
                    <tr key={personIdx} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}> 
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.name}</td>                    
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.url}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }