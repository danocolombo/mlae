import { generateClient } from 'aws-amplify/api';
import { createTransaction, 
    updateTransaction, 
    deleteTransaction, 
    listTransactions, 
    getTransaction } from './graphql/queries';

const client = generateClient();

const newTransaction = await client.graphql({
    query: createTransaction,
    variables: {
        input: {
		"date": "1970-01-01Z",
		"accountID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"category": "Lorem ipsum dolor sit amet",
		"type": "Lorem ipsum dolor sit amet",
		"notes": "Lorem ipsum dolor sit amet",
		"cleared": true,
		"amount": 123.45,
		"Participant": /* Provide a Participant instance here */
	}
    }
});
const updatedTransaction = await client.graphql({
    query: updateTransaction,
    variables: {
        input: {
		"date": "1970-01-01Z",
		"accountID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"category": "Lorem ipsum dolor sit amet",
		"type": "Lorem ipsum dolor sit amet",
		"notes": "Lorem ipsum dolor sit amet",
		"cleared": true,
		"amount": 123.45,
		"Participant": /* Provide a Participant instance here */
	}
    }
});
const deletedTransaction = await client.graphql({
    query: deleteTransaction,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});
// List all items
const allTransactions = await client.graphql({
    query: listTransactions
});
// Get a specific item
const oneTransaction = await client.graphql({
    query: getTransaction,
    variables: { id: 'YOUR_RECORD_ID' }
});