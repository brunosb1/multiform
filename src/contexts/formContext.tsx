import { createContext, useContext, useReducer } from "react";

const initialData = {
    CurrentStep: 0,
    Name: '',
    Level: 0,
    Email: '',
    Github: '',
}
//context
const formContext = createContext(undefined);

//reducer
enum formActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const FormReducer = (state, action) => {
    switch(action.type){
        case formActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case formActions.setName: 
            return {...state, name: action.payload}
        case formActions.setLevel: 
            return {...state, level: action.payload}
        case formActions.setEmail:
            return {...state, email: action.payload}
        case formActions.setGithub:
            return {...state, github: action.payload}
    default:
        return state;
    }
}

// Provider
const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = {state, dispatch};
    return (
        <formContext.Provider value={value}>{children}</formContext.Provider>
    )
}

// Hook
const useForm = () => {
    const context = useContext(formContext);
    if(context === undefined) {
        throw new Error('useForm needs to be use inside a FormProvider')
    }
} 
