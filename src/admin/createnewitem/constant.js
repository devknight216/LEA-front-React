export const features = [
    {
      label: "What is the property type?",
      variableName: "propertyType",
      properties:['Apartment', 'House', 'Condo / Townhome', 'Secondary Unit', 'Unique Space', 'Bed and Breakfast', 'Boutique Hotel', 'Duplex', 'RV / Camper', 'Tiny House']
    },
    {
      label: "Choose the best option that fits the space in the property that guests will occupy.",
      variableName: "propertySpaceFeature",
      properties:['An entire place', 'A private room', 'A shared room']
    },
]
  
export const guestsNum = [
    {
      type: 'of guests',
      variableName: 'guestNum',
      description: '# of guests that the property an accomodate'
    },
    {
      type: 'of beds',
      variableName: 'bedsNum',
      description: '# of beds in the property that guests can use'
    },
    {
      type: 'of bedrooms',
      variableName: 'bedroomNum',
      description: '# of bedrooms in the property'
    },
    {
      type: 'of bathrooms',
      variableName: 'bathroomNum',
      description: '# of bathrroms in the property'
    },
  ]
  
export const lastOffer = {
    'first':[
      { lable: "Peaceful", variableName: "peaceful" },
      { lable: "Unique", variableName: "unique" },
      { lable: "Family-Friendly", variableName: "familiFriendly" },
      { lable: "Stylish", variableName: "stylish" },
      { lable: "Central", variableName: "central" },
      { lable: "Spacious", variableName: "spacious" },
    ],
    'second':[
      { lable: "Security Camera", variableName: "securityCamera" },
      { lable: "Weapons", variableName: "weapons" },
      { lable: "Dangerous", variableName: "dangerous" }
    ]
  }
export const amenities = {
    'standout': {
        title: 'Standout amenities',
        lists: [{
                label: 'Pool',
                variableName: 'amenities_pool'
            },
            {
                label: 'Hot Tub',
                variableName: 'amenities_hottub'
            },
            {
                label: 'Patio',
                variableName: 'amenities_patio'
            },
            {
                label: 'BBQ Grill',
                variableName: 'amenities_bbq_grill'
            },
            {
                label: 'Fire Pit',
                variableName: 'amenities_fire_pit'
            },
            {
                label: 'Pool Table',
                variableName: 'amenities_pool_table'
            },
            {
                label: 'Indoor Fireplace',
                variableName: 'amenities_indoor_fireplace'
            },
            {
                label: 'Outdoor Dining Area',
                variableName: 'amenities_outdoor_diningarea'
            },
            {
                label: 'Exercise Equipment',
                variableName: 'amenities_exercise_equipment'
            },
            {
                label: 'Gym',
                variableName: 'amenities_gym'
            },
            {
                label: 'Pets Allowed',
                variableName: 'amenities_pet_allowed'
            },
            {
                label: 'Self Check-in',
                variableName: 'amenities_self_check_in'
            },
        ],
    },
    'favorites': {
        title: 'Guest favorites',
        lists: [{
                label: 'Wifi',
                variableName: 'amenities_wifi'
            },
            {
                label: 'TV',
                variableName: 'amenities_tv'
            },
            {
                label: 'Kitchen',
                variableName: 'amenities_kitchen'
            },
            {
                label: 'Washer',
                variableName: 'amenities_washer'
            },
            {
                label: 'Free parking on premises',
                variableName: 'amenities_free_parking_on_premises'
            },
            {
                label: 'Paid parking on premises',
                variableName: 'amenities_paid_parking_on_premises'
            },
            {
                label: 'Air Conditioning',
                variableName: 'amenities_air_conditioning'
            },
            {
                label: 'Dedicated Workspace',
                variableName: 'amenities_dedicated_workspace'
            },
            {
                label: 'Outdoor shower',
                variableName: 'amenities_autdoor_shower'
            },
            {
                label: 'EV charger',
                variableName: 'amenities_ev_charger'
            },
        ],
    },
    'safetyItems': {
        title: 'Have any of these safety items?',
        lists: [{
                label: 'Smoke alarm',
                variableName: 'amenities_smoke_alarm'
            },
            {
                label: 'First aid kit',
                variableName: 'amenities_first_aid_kit'
            },
            {
                label: 'Carbon monoxide alarm',
                variableName: 'amenities_carbon_monoxide_alarm'
            },
            {
                label: 'Fire extinguisher',
                variableName: 'amenities_fire_extinguisher'
            },
        ]
    },
    'bathroom': {
        title: 'Bathroom',
        lists: [{
                label: 'Bathtub',
                variableName: 'amenities_bathtub'
            },
            {
                label: 'Bidet',
                variableName: 'amenities_bidet'
            },
            {
                label: 'Body Soap',
                variableName: 'amenities_body_soap'
            },
            {
                label: 'Cleaning products',
                variableName: 'amenities_cleaning_products'
            },
            {
                label: 'Conditioner',
                variableName: 'amenities_conditioner'
            },
            {
                label: 'Hair Dryer',
                variableName: 'amenities_hair_dryer'
            },
            {
                label: 'Hot water',
                variableName: 'amenities_hot_water'
            },
            {
                label: 'Shampoo',
                variableName: 'amenities_shampoo'
            },
            {
                label: 'Shower gel',
                variableName: 'amenities_shower_gel'
            },
        ]
    },
    'bedroomLaundry': {
        title: 'Bedroom and laundry',
        lists: [{
                label: 'Essentials (Towels, bed sheets, soap, toilet paper, and pillows)',
                variableName: 'amenities_bedroom_essentials'
            },
            {
                label: 'Bed linens',
                variableName: 'amenities_bed_linens'
            },
            {
                label: 'Clothing storage',
                variableName: 'amenities_clothing_storage'
            },
            {
                label: 'Dryer',
                variableName: 'amenities_dryer'
            },
            {
                label: 'Drying rack for clothing',
                variableName: 'amenities_drying_rack_for_clothing'
            },
            {
                label: 'Extra pillows and blankets',
                variableName: 'amenities_extra_pillows_and_blankets'
            },
            {
                label: 'Hangers',
                variableName: 'amenities_hangers'
            },
            {
                label: 'Iron',
                variableName: 'amenities_iron'
            },
            {
                label: 'Mosquito Net',
                variableName: 'amenities_mosquito_net'
            },
            {
                label: 'Safe',
                variableName: 'amenities_safe'
            },
        ]
    },
    'entertainment': {
        title: 'Entertainment',
        lists: [{
                label: 'Books and reading material',
                variableName: 'amenities_book_and_reading_material'
            },
            {
                label: 'Ethernet connection',
                variableName: 'amenities_ethernet_connection'
            },
            {
                label: 'Game console',
                variableName: 'amenities_game_console'
            },
            {
                label: 'Piano',
                variableName: 'amenities_piano'
            },
            {
                label: 'Ping Pong Table',
                variableName: 'amenities_ping_pong_table'
            },
            {
                label: 'Record player',
                variableName: 'amenities_record_player'
            },
            {
                label: 'Sound system',
                variableName: 'amenities_sound_system'
            },
        ],
    },
    'family': {
        title: 'Family',
        lists: [{
                label: 'Baby Bath',
                variableName: 'amenities_baby_bath'
            },
            {
                label: 'Baby monitor',
                variableName: 'amenities_baby_monitor'
            },
            {
                label: 'Baby safety gates',
                variableName: 'amenities_baby_safety_gates'
            },
            {
                label: 'Babysitter recommendations',
                variableName: 'amenities_babysitter_recommendations'
            },
            {
                label: 'Board games',
                variableName: 'amenities_board_games'
            },
            {
                label: 'Changing table',
                variableName: 'amenities_changing_table'
            },
            {
                label: "Children's books and toys",
                variableName: 'amenities_childrens_books_and_toys'
            },
            {
                label: "Children's dinnerware",
                variableName: 'amenities_childrens_dinnerware'
            },
            {
                label: 'Crib',
                variableName: 'amenities_crib'
            },
            {
                label: 'Fireplace guards',
                variableName: 'amenities_fireplace_guards'
            },
            {
                label: 'High chair',
                variableName: 'amenities_high_chair'
            },
            {
                label: 'Outlet covers',
                variableName: 'amenities_outlet_covers'
            },
            {
                label: "Pack ‘n play/Travel crib",
                variableName: 'amenities_pack_play_travel_crib'
            },
            {
                label: 'Window guards',
                variableName: 'amenities_window_guards'
            },
        ],
    },
    'heatingCooling': {
        title: 'Heating and Cooling',
        lists: [{
                label: 'Ceiling Fan',
                variableName: 'amenities_ceiling_fan'
            },
            {
                label: 'Heating',
                variableName: 'amenities_heating'
            },
            {
                label: 'Portable Fan',
                variableName: 'amenities_portable_fan'
            },
        ],
    },
    'kitchenDining': {
        title: 'Kitchen and Dining',
        lists: [{
                label: 'Baking sheet',
                variableName: 'amenities_baking_sheet'
            },
            {
                label: 'BBQ utensils',
                variableName: 'amenities_bbq_untersils'
            },
            {
                label: 'Bread maker',
                variableName: 'amenities_bread_maker'
            },
            {
                label: 'Blender',
                variableName: 'amenities_blender'
            },
            {
                label: 'Coffee',
                variableName: 'amenities_coffie'
            },
            {
                label: 'Coffee maker',
                variableName: 'amenities_coffee_maker'
            },
            {
                label: 'Cooking basics',
                variableName: 'amenities_cooking basic'
            },
            {
                label: 'Dining table',
                variableName: 'amenities_dining_table'
            },
            {
                label: 'Dishes and silverware',
                variableName: 'amenities_dishes_and_silverware'
            },
            {
                label: 'Dishwasher',
                variableName: 'ademindate_dighwasher'
            },
            {
                label: 'Freezer',
                variableName: 'amenities_freezer'
            },
            {
                label: 'Hot water Kettls',
                variableName: 'amenities_hot_water_kettles'
            },
            {
                label: 'Microwave',
                variableName: 'amenities_microwave'
            },
            {
                label: 'Mini fridge',
                variableName: 'amenities_mini_fridge'
            },
            {
                label: 'Oven',
                variableName: 'amenities_oven'
            },
            {
                label: 'Refrigerator',
                variable: 'amenities-refrigerator'
            },
            {
                label: 'Rice maker',
                variable: 'amenities_rice_maker'
            },
            {
                label: 'Stove',
                variable: 'amenities_stove'
            },
            {
                label: 'Toaster',
                variable: 'amenities_toaster'
            },
            {
                label: 'Trash compactor',
                variable: 'amenities_trash_compactor'
            },
            {
                label: 'Wine glasses',
                variable: 'amenities_wine_glasses'
            },
        ],
    },
    'locationFeature': {
        title: 'Location features',
        lists: [{
                label: 'Beach access',
                variable: 'amenities_beach access'
            },
            {
                label: 'Lake access',
                variable: 'amenities_lake_access'
            },
            {
                label: 'Private entrance',
                variable: 'amenities_private_entrance'
            },
            {
                label: 'Resort access',
                variable: 'amenities_resort_access'
            },
            {
                label: 'Ski-in/Ski-out',
                variable: 'amenities_skiin_skiout'
            },
            {
                label: 'Waterfront',
                variable: 'amenities_waterfront'
            },
        ],
    },
    'outdoor': {
        title: 'Outdoor',
        lists: [{
                label: 'Backyard',
                variable: 'amenities_backyard'
            },
            {
                label: 'BBQ grill',
                variable: 'amenities_bbg_grill'
            },
            {
                label: 'Beach essentials (Beach towels, umbrella, beach blanket, snorkeling gear)',
                variable: 'amenities_beach_essentials'
            },
            {
                label: 'Bikes',
                variable: 'amenities_bikes'
            },
            {
                label: 'Boat slip',
                variable: 'amenities_boar_slip'
            },
            {
                label: 'Fire put',
                variable: 'amenities_fire_put'
            },
            {
                label: 'Hammock',
                variable: 'amenities_hammock'
            },
            {
                label: 'Kayak',
                variable: 'amenities_kayak'
            },
            {
                label: 'Outdoor dining area',
                variable: 'amenities_outdoor_dining_area'
            },
            {
                label: 'Outdoor kitchen',
                variable: 'amenities_outdoor_kitchen'
            },
            {
                label: 'Patio or balcony',
                variable: 'amenities_patio_balcony'
            },
        ],
    },
    'parkingFacilities': {
        title: 'Parking and facilities',
        lists: [{
                label: 'Elevator',
                variable: 'amenities_elevator'
            },
            {
                label: 'Free street parking',
                variable: 'amenities_free_street_parking'
            },
            {
                label: 'Sauna',
                variable: 'amenities_sauna'
            },
            {
                label: 'Single level home',
                variable: 'amenities_single_level_home'
            },
        ],
    },
    'services': {
        title: 'Services',
        lists: [{
                label: 'Breakfast',
                variable: 'amenities_breakfast'
            },
            {
                label: 'Cleaning before checkout',
                variable: 'amenities_cleaning_before_checkout'
            },
            {
                label: 'Long term stays allowed 28 days or more',
                variable: 'amenities_long_term_stay_allowed'
            },
            {
                label: 'Luggage dropoff allowed',
                variable: 'amenities_luggage_dropoff_allowed'
            },
        ]
    }
}