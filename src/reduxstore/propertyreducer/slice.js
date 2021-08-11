import { createSlice } from '@reduxjs/toolkit'
import { getAllProperties } from './action'
const PREFIX = 'property'

const STATUS = {
    INITIAL: 0,
    FULFILLED: 1,
    PENDING: 2,
    REJECTED: 3
}

const isPendingAction = (action) => 
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending")
const isRejectedAction = (action) => 
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected")

export const PropertySlice = createSlice(
    {
        name: "PROPERTY",
        initialState: {
            property: {},
            properties: [],
            status: STATUS.INITIAL
        },
        reducers: {},
        extraReducers : ( builder ) => {
            builder.addCase(
                getAllProperties.fulfilled,
                ( state, action ) => {
                    state.properties = action.payload,
                    state.status = STATUS.FULFILLED
                } 
            )
            .addMatcher(
                isPendingAction,
                ( state, action ) => {
                    state.status = STATUS.PENDING
                }
            )
            .addMatcher(
                isRejectedAction,
                ( state, action ) => {
                    state.status = STATUS.REJECTED
                }
            )
        }
    }
)

export { getAllProperties  };
export default PropertySlice.reducer;