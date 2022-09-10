import { BrowserRouter, Route } from "react-router-dom"
import { FormStepOne } from "./pages/formStep1";
import { FormStepTwo } from "./pages/formStep2";
import { FormStepThree } from "./pages/formStep3";

export const Router = () => {
    return (
        <BrowserRouter>
           <Route path="/" element={<FormStepOne />} /> 
           <Route path="/step2" element={<FormStepTwo />} /> 
           <Route path="/step3" element={<FormStepThree />} /> 
        </BrowserRouter>
    );
}
