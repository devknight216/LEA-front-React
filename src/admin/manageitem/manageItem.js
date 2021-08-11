import React, { useState, useEffect } from 'react'
import KitchenImg from 'assets/imgs/property/kitchen.jpg';
import DetailViewComponent from 'components/admin/manageitem/detailview'
import FilterNavComponent from 'components/admin/manageitem/filternav'
import ItemsTableComponent from 'components/admin/manageitem/itemtable'

const properties = [
    {
      id: 42281900,
      name: 'Spacious Midtown/ Downtown mid rise',
      rate: 145.00,
      airbnb: 'http://www.airbnb.com/rooms/42281900',
      images: [
        KitchenImg
      ]
    },
    {
      id: 49441199,
      name: 'New Luxurious Downtown Stay!',
      rate: 80.00,
      airbnb: 'https://www.airbnb.com/rooms/49441199?guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=d16e26a8-6dc7-483e-b353-4ac54f1b0fde&amp;source=embed_widget',
      images: [
        KitchenImg
      ]
    },
    {
      id: 50027864,
      name: 'Highway Highlight in Katy',
      rate: 135.00,
      airbnb: 'https://www.airbnb.com/rooms/50027864?source_impression_id=p3_1626702751_gk0n7nVw%2Bh%2BPmS44&guests=1&adults=1',
      images: [
        KitchenImg
      ]
    },
    {
      id: 50400707,
      name: 'OCCUPIED',
      rate: 121.00,
      airbnb: 'https://www.airbnb.com/rooms/50400707?guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=30a00ddb-9489-4708-a343-7916860d7625&amp;source=embed_widget',
      images: [
        KitchenImg
      ]
    },
]
function ManageNewPropertyItemPage() {
    const [selected, setSelected] = useState(properties[0]);
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const handleFilter = ({filterText}) => {
      //Call API for filter here...
      let tempProperties = [...properties];
      tempProperties = tempProperties.filter((e) => e.name.toUpperCase().search(filterText.toUpperCase()) !== -1);
      setFilteredProperties(tempProperties);
    }

    return (
        <div>
            <FilterNavComponent handleFilter={handleFilter}/>
            <div className="border rounded-xl mt-5">
                <div className="py-6">
                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none p-4">
                            <ItemsTableComponent getSeleted = {setSelected} properties = {filteredProperties} selected = {selected}/>
                        </main>
                        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 p-4">
                            <DetailViewComponent selected={selected}/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageNewPropertyItemPage
