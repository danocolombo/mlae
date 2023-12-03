import { generateClient } from 'aws-amplify/api';
import {
    createAccount,
    updateAccount,
    deleteAccount,
    listAccounts,
    getAccount,
} from './graphql/mutations';

const client = generateClient();

const newAccount = await client.graphql({
    query: createAccount,
    variables: {
        input: {
            reference: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            balance: 123.45,
            institutionID: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
            Transactions: [],
        },
    },
});
const updatedAccount = await client.graphql({
    query: updateAccount,
    variables: {
        input: {
            reference: 'Lorem ipsum dolor sit amet',
            type: 'Lorem ipsum dolor sit amet',
            balance: 123.45,
            institutionID: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
            Transactions: [],
        },
    },
});
const deletedAccount = await client.graphql({
    query: deleteAccount,
    variables: {
        input: {
            id: 'YOUR_RECORD_ID',
        },
    },
});
// List all items
const allAccounts = await client.graphql({
    query: listAccounts,
});

// Get a specific item
const oneAccount = await client.graphql({
    query: getAccount,
    variables: { id: 'YOUR_RECORD_ID' },
});
