import {gql} from "@apollo/react-hooks";

export const MUTATION_CREATE_MAIL = gql`
    mutation createMailMutation($input: createMailInput!){
        createMail(input: $input)
    }
`