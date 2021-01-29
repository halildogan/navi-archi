import {gql, useMutation, useApolloClient} from "@apollo/react-hooks"

import {MUTATION_CREATE_MAIL} from "./Mail"

const CreateMailController = ({
    children
}) => {
    const client = useApolloClient();
    const [createMail, {loading, error}] = useMutation(MUTATION_CREATE_MAIL)
    return children({
        createMail,
        loading
    });
}
export default CreateMailController;