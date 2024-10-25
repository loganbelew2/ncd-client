import ContactUs from "@/app/components/Forms/ContactUs";
import LocationsLearn from "@/app/components/Locations/LocationsLearn/LocationsLearn";
import Process from "@/app/components/Process/Process";
import FullService from "@/app/components/Services/Full-Service";

function FullDetail() {
    return (
        <>
            <FullService/>
            <Process/>
            <LocationsLearn/>
        </>
    )
}
export default FullDetail;