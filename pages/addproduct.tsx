import { FunctionComponent } from "react";
import { Appbar } from "../widgets/Appbar/Appbar";
import CancelButton from "../widgets/CancelButton/CancelButton";
import { UplaodForm } from "../widgets/FormWidgets/UploadForm/UploadForm";
import { SaveButton } from "../widgets/SaveButton/SaveButton";


interface UploadPageProps {
    
}
 
const UploadPage: FunctionComponent<UploadPageProps> = () => {
    
    return ( 
        <div>

            {/* // Global Appbar */}
            <Appbar title="Product List">
                <SaveButton/>
                <CancelButton/>
            </Appbar>

            {/* // Body i.e the form */}
            <div className="px-10 py-10">
                <UplaodForm/>
            </div>
        </div>
    );
}
 
export default UploadPage;