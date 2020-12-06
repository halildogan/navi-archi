import {gql, useMutation, useApolloClient} from "@apollo/react-hooks"

import {MUTATION_CREATE_SUPPORT} from "./Support"

const CreateSupportController = ({
    children
}) => {
    const client = useApolloClient();
    const [createSupport, {loading, error}] = useMutation(MUTATION_CREATE_SUPPORT,{
        
    })
    if(loading) return null;
    if(error) console.log("error: ", error.message);
    return children({
        createSupport,
        loading
    });
}
export default CreateSupportController;