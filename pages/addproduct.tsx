import { FunctionComponent } from "react";
import { Appbar } from "../widgets/Appbar/Appbar";
import CancelButton from "../widgets/CancelButton/CancelButton";
import  UplaodForm  from "../widgets/FormWidgets/UploadForm/UploadForm";
import { SaveButton } from "../widgets/SaveButton/SaveButton";
import { AlertPopup } from "../widgets/AlertPopup/AlertPopup";
import useAlert from "../hooks/useAlert";

interface UploadPageProps {
    
}
 
const UploadPage: FunctionComponent<UploadPageProps> = () => {

    const {setAlert} = useAlert();

    
    
    return ( 
        <div>
            <AlertPopup/>

            {/* // Global Appbar */}
            <Appbar title="Product Add">
                <SaveButton/>
                <CancelButton/>
            </Appbar>

            {/* // Body i.e the form */}
            <div className="px-10 py-10">
                <UplaodForm onAlert={setAlert}/>
            </div>
        </div>
    );
}
 
export default UploadPage;