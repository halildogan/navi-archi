import {gql} from "@apollo/react-hooks";

export const MUTATION_CREATE_APP_USER = gql`
    mutation createAppUserMutation ($input: createAppUserInput!) {
        createAppUser(input: $input)
    }
`;