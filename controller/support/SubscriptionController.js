import {useMutation} from "@apollo/react-hooks";

import {MUTATION_CREATE_SUPPORT} from "./Support";

const SubscriptionController = ({
    children
}) => {

    const [createSupport, {loading, error}] = useMutation(MUTATION_CREATE_SUPPORT)

    if(loading) return null;
    if(error) console.log("error: ", error);
    if(!createSupport) return null;
    return children({
        createSupport, 
        loading
    })
}

export default SubscriptionController;