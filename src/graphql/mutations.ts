/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
      id
      title
      url
      createdAt
      linkList {
        id
        title
        createdAt
        links {
          nextToken
        }
        updatedAt
      }
      userId
      updatedAt
    }
  }
`;
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
      id
      title
      url
      createdAt
      linkList {
        id
        title
        createdAt
        links {
          nextToken
        }
        updatedAt
      }
      userId
      updatedAt
    }
  }
`;
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
      id
      title
      url
      createdAt
      linkList {
        id
        title
        createdAt
        links {
          nextToken
        }
        updatedAt
      }
      userId
      updatedAt
    }
  }
`;
export const createLinkList = /* GraphQL */ `
  mutation CreateLinkList(
    $input: CreateLinkListInput!
    $condition: ModelLinkListConditionInput
  ) {
    createLinkList(input: $input, condition: $condition) {
      id
      title
      createdAt
      links {
        items {
          id
          title
          url
          createdAt
          userId
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateLinkList = /* GraphQL */ `
  mutation UpdateLinkList(
    $input: UpdateLinkListInput!
    $condition: ModelLinkListConditionInput
  ) {
    updateLinkList(input: $input, condition: $condition) {
      id
      title
      createdAt
      links {
        items {
          id
          title
          url
          createdAt
          userId
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteLinkList = /* GraphQL */ `
  mutation DeleteLinkList(
    $input: DeleteLinkListInput!
    $condition: ModelLinkListConditionInput
  ) {
    deleteLinkList(input: $input, condition: $condition) {
      id
      title
      createdAt
      links {
        items {
          id
          title
          url
          createdAt
          userId
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
