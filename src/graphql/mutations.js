/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
      id
      name
      reference
      address
      city
      stateProv
      postalCode
      createdAt
      updatedAt
    }
  }
`;
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
      id
      name
      reference
      address
      city
      stateProv
      postalCode
      createdAt
      updatedAt
    }
  }
`;
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
      id
      name
      reference
      address
      city
      stateProv
      postalCode
      createdAt
      updatedAt
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      transDate
      accountID
      category
      type
      notes
      cleared
      amount
      Participant {
        id
        name
        reference
        address
        city
        stateProv
        postalCode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      transactionParticipantId
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      transDate
      accountID
      category
      type
      notes
      cleared
      amount
      Participant {
        id
        name
        reference
        address
        city
        stateProv
        postalCode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      transactionParticipantId
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      transDate
      accountID
      category
      type
      notes
      cleared
      amount
      Participant {
        id
        name
        reference
        address
        city
        stateProv
        postalCode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      transactionParticipantId
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      reference
      type
      balance
      institutionID
      Transactions {
        items {
          id
          transDate
          accountID
          category
          type
          notes
          cleared
          amount
          Participant {
            id
            name
            reference
            address
            city
            stateProv
            postalCode
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          transactionParticipantId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      reference
      type
      balance
      institutionID
      Transactions {
        items {
          id
          transDate
          accountID
          category
          type
          notes
          cleared
          amount
          Participant {
            id
            name
            reference
            address
            city
            stateProv
            postalCode
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          transactionParticipantId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      reference
      type
      balance
      institutionID
      Transactions {
        items {
          id
          transDate
          accountID
          category
          type
          notes
          cleared
          amount
          Participant {
            id
            name
            reference
            address
            city
            stateProv
            postalCode
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          transactionParticipantId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInstitution = /* GraphQL */ `
  mutation CreateInstitution(
    $input: CreateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    createInstitution(input: $input, condition: $condition) {
      id
      name
      Accounts {
        items {
          id
          reference
          type
          balance
          institutionID
          Transactions {
            items {
              id
              transDate
              accountID
              category
              type
              notes
              cleared
              amount
              Participant {
                id
                name
                reference
                address
                city
                stateProv
                postalCode
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              transactionParticipantId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateInstitution = /* GraphQL */ `
  mutation UpdateInstitution(
    $input: UpdateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    updateInstitution(input: $input, condition: $condition) {
      id
      name
      Accounts {
        items {
          id
          reference
          type
          balance
          institutionID
          Transactions {
            items {
              id
              transDate
              accountID
              category
              type
              notes
              cleared
              amount
              Participant {
                id
                name
                reference
                address
                city
                stateProv
                postalCode
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              transactionParticipantId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteInstitution = /* GraphQL */ `
  mutation DeleteInstitution(
    $input: DeleteInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    deleteInstitution(input: $input, condition: $condition) {
      id
      name
      Accounts {
        items {
          id
          reference
          type
          balance
          institutionID
          Transactions {
            items {
              id
              transDate
              accountID
              category
              type
              notes
              cleared
              amount
              Participant {
                id
                name
                reference
                address
                city
                stateProv
                postalCode
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              transactionParticipantId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
