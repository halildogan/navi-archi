import {gql} from "@apollo/react-hooks";

export const MUTATION_CREATE_SUPPORT = gql`
    mutation createSupportMutation($input: createSupportInput!){
        createSupport(input: $input)
    }
`