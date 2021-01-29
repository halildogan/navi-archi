import {gql, useMutation, useApolloClient} from "@apollo/react-hooks"

import {MUTATION_CREATE_SUPPORT} from "./Support"

const CreateSupportController = ({
    children
}) => {
    const client = useApolloClient();
    const [createSupport, {loading, error}] = useMutation(MUTATION_CREATE_SUPPORT)
    return children({
        createSupport,
        loading
    });
}
export default CreateSupportController;