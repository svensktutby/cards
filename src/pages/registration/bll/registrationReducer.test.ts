import {registrationReducer, setError, setLoading, setSuccess, StateType} from "./registrationReducer";

let state: StateType;

beforeEach(()=>{
    state = {
        loading: false,
        success: false,
        error: '',
    };
})
test('setLoading',()=>{

    let action = setLoading(true)
    let result = registrationReducer(state,action)

    expect(result.loading).toBe(true)
})

test('setSuccess',()=>{

    let action = setSuccess(true)
    let result =registrationReducer(state,action)

    expect(result.success).toBe(true)

})
test('setError',()=>{

    let action = setError("Error")
    let result = registrationReducer(state,action)

    expect(result.error.length>1).toBe(true)
    expect(result.error).toEqual('Error')

})