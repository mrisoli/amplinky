/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLinkInput = {
  id?: string | null,
  title: string,
  url: string,
  createdAt?: string | null,
  userId: string,
  linkLinkListId: string,
};

export type ModelLinkConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Link = {
  __typename: "Link",
  id?: string,
  title?: string,
  url?: string,
  createdAt?: string,
  linkList?: LinkList,
  userId?: string,
  updatedAt?: string,
};

export type LinkList = {
  __typename: "LinkList",
  id?: string,
  title?: string,
  createdAt?: string,
  links?: ModelLinkConnection,
  updatedAt?: string,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items?:  Array<Link | null > | null,
  nextToken?: string | null,
};

export type UpdateLinkInput = {
  id: string,
  title?: string | null,
  url?: string | null,
  createdAt?: string | null,
  userId?: string | null,
  linkLinkListId?: string | null,
};

export type DeleteLinkInput = {
  id?: string | null,
};

export type CreateLinkListInput = {
  id?: string | null,
  title: string,
  createdAt?: string | null,
};

export type ModelLinkListConditionInput = {
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLinkListConditionInput | null > | null,
  or?: Array< ModelLinkListConditionInput | null > | null,
  not?: ModelLinkListConditionInput | null,
};

export type UpdateLinkListInput = {
  id: string,
  title?: string | null,
  createdAt?: string | null,
};

export type DeleteLinkListInput = {
  id?: string | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLinkListFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLinkListFilterInput | null > | null,
  or?: Array< ModelLinkListFilterInput | null > | null,
  not?: ModelLinkListFilterInput | null,
};

export type ModelLinkListConnection = {
  __typename: "ModelLinkListConnection",
  items?:  Array<LinkList | null > | null,
  nextToken?: string | null,
};

export type CreateLinkMutationVariables = {
  input?: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input?: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input?: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type CreateLinkListMutationVariables = {
  input?: CreateLinkListInput,
  condition?: ModelLinkListConditionInput | null,
};

export type CreateLinkListMutation = {
  createLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateLinkListMutationVariables = {
  input?: UpdateLinkListInput,
  condition?: ModelLinkListConditionInput | null,
};

export type UpdateLinkListMutation = {
  updateLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteLinkListMutationVariables = {
  input?: DeleteLinkListInput,
  condition?: ModelLinkListConditionInput | null,
};

export type DeleteLinkListMutation = {
  deleteLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetLinkQueryVariables = {
  id?: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items?:  Array< {
      __typename: "Link",
      id: string,
      title: string,
      url: string,
      createdAt: string,
      linkList:  {
        __typename: "LinkList",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLinkListQueryVariables = {
  id?: string,
};

export type GetLinkListQuery = {
  getLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListLinkListsQueryVariables = {
  filter?: ModelLinkListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinkListsQuery = {
  listLinkLists?:  {
    __typename: "ModelLinkListConnection",
    items?:  Array< {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    createdAt: string,
    linkList:  {
      __typename: "LinkList",
      id: string,
      title: string,
      createdAt: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLinkListSubscription = {
  onCreateLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinkListSubscription = {
  onUpdateLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinkListSubscription = {
  onDeleteLinkList?:  {
    __typename: "LinkList",
    id: string,
    title: string,
    createdAt: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        userId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
