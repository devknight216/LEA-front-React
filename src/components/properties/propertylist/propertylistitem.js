export default function PropertyIistItem ({item}){
    return<>      
        <div className="space-y-4 mx-4 my-10 bg-white rounded-lg shadow-xl">
            <div className="aspect-w-3 aspect-h-2 p-5">
                <img className="object-cover w-full shadow-lg rounded-lg" src={item.imageUrl} alt="" />
            </div>
            <div className="text-lg leading-6 font-medium space-y-1 px-5 pb-10">
                <h3>{item.name}</h3>
                <p className="text-indigo-600">Nightly Rate: ${item.cost}</p>
            </div>
        </div>               
    </>
}
