import { generateClient } from 'aws-amplify/api';
import {
    createParticipant,
    updateParticipant,
    deleteParticipant,
    listParticipants,
    getParticipant,
} from './graphql/mutations';

const client = generateClient();

const newParticipant = await client.graphql({
    query: createParticipant,
    variables: {
        input: {
            name: '',
            reference: '',
            address: '',
            city: '',
            stateProv: '',
            postalCode: '',
        },
    },
});
const updatedParticipant = await client.graphql({
    query: updateParticipant,
    variables: {
        input: {
            name: 'Lorem ipsum dolor sit amet',
            reference: 'Lorem ipsum dolor sit amet',
            address: 'Lorem ipsum dolor sit amet',
            city: 'Lorem ipsum dolor sit amet',
            stateProv: 'Lorem ipsum dolor sit amet',
            postalCode: 'Lorem ipsum dolor sit amet',
        },
    },
});
const deletedParticipant = await client.graphql({
    query: deleteParticipant,
    variables: {
        input: {
            id: 'YOUR_RECORD_ID',
        },
    },
});
// List all items
const allParticipants = await client.graphql({
    query: listParticipants,
});

// Get a specific item
const oneParticipant = await client.graphql({
    query: getParticipant,
    variables: { id: 'YOUR_RECORD_ID' },
});
