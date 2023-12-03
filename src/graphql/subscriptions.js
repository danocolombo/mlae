/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onCreateParticipant(filter: $filter) {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onUpdateParticipant(filter: $filter) {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onDeleteParticipant(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateInstitution = /* GraphQL */ `
  subscription OnCreateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onCreateInstitution(filter: $filter) {
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
export const onUpdateInstitution = /* GraphQL */ `
  subscription OnUpdateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onUpdateInstitution(filter: $filter) {
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
export const onDeleteInstitution = /* GraphQL */ `
  subscription OnDeleteInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onDeleteInstitution(filter: $filter) {
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
