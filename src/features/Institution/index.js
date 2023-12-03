import { generateClient } from 'aws-amplify/api';
import {
    createInstitution,
    updateInstitution,
    deleteInstitution,
    listInstitutions,
    getInstitution,
} from './graphql/mutations';

const client = generateClient();

const newInstitution = await client.graphql({
    query: createInstitution,
    variables: {
        input: {
            name: 'Lorem ipsum dolor sit amet',
            Accounts: [],
        },
    },
});
const updatedInstitution = await client.graphql({
    query: updateInstitution,
    variables: {
        input: {
            name: 'Lorem ipsum dolor sit amet',
            Accounts: [],
        },
    },
});
const deletedInstitution = await client.graphql({
    query: deleteInstitution,
    variables: {
        input: {
            id: 'YOUR_RECORD_ID',
        },
    },
});
// List all items
const allInstitutions = await client.graphql({
    query: listInstitutions,
});
// Get a specific item
const oneInstitution = await client.graphql({
    query: getInstitution,
    variables: { id: 'YOUR_RECORD_ID' },
});
