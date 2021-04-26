/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink {
    onCreateLink {
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
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink {
    onUpdateLink {
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
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink {
    onDeleteLink {
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
export const onCreateLinkList = /* GraphQL */ `
  subscription OnCreateLinkList {
    onCreateLinkList {
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
export const onUpdateLinkList = /* GraphQL */ `
  subscription OnUpdateLinkList {
    onUpdateLinkList {
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
export const onDeleteLinkList = /* GraphQL */ `
  subscription OnDeleteLinkList {
    onDeleteLinkList {
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
