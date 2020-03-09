export type GuestListType = {
  id: number;
  firstName: string;
  lastName: string;
  alternativeName: string;
  groupId: number;
  allowedPlusOne: boolean;
};

export type SearchTermsType = {
  matchKeys: string[];
  uids: number[];
  mrmrsFlag: number;
};
