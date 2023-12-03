/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
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
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const transactionsByAccountID = /* GraphQL */ `
  query TransactionsByAccountID(
    $accountID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByAccountID(
      accountID: $accountID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const accountsByInstitutionID = /* GraphQL */ `
  query AccountsByInstitutionID(
    $institutionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByInstitutionID(
      institutionID: $institutionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getInstitution = /* GraphQL */ `
  query GetInstitution($id: ID!) {
    getInstitution(id: $id) {
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
export const listInstitutions = /* GraphQL */ `
  query ListInstitutions(
    $filter: ModelInstitutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
