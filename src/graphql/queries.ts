/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
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
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
        createdAt
        linkList {
          id
          title
          createdAt
          updatedAt
        }
        userId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLinkList = /* GraphQL */ `
  query GetLinkList($id: ID!) {
    getLinkList(id: $id) {
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
export const listLinkLists = /* GraphQL */ `
  query ListLinkLists(
    $filter: ModelLinkListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinkLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        links {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
