/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ContractCallArgs =
  | AddMember
  | AddProposal
  | AddRfp
  | CancelRfp
  | ContractSourceMetadata
  | CreateAddon
  | CreateCommunity
  | CreateDiscussion
  | DeleteAddon
  | DeleteCommunity
  | EditMember
  | EditProposal
  | EditProposalLinkedRfp
  | EditProposalTimeline
  | EditProposalVersionedTimeline
  | EditRfp
  | EditRfpTimeline
  | FindRestrictedLabels
  | GetAccessControlInfo
  | GetAccountCommunityPermissions
  | GetAddon
  | GetAllAddons
  | GetAllAllowedProposalLabels
  | GetAllAuthors
  | GetAllCommunitiesMetadata
  | GetAllProposalAuthors
  | GetAllProposalIds
  | GetAllProposalLabels
  | GetAllRfpIds
  | GetAllowedCategories
  | GetCommunity
  | GetCommunityAddons
  | GetCommunityMetadata
  | GetFeaturedCommunities
  | GetGlobalLabels
  | GetParentToChildren
  | GetPostToParent
  | GetProposal
  | GetProposals
  | GetProposalsByAuthor
  | GetProposalsByLabel
  | GetRfp
  | GetRfpLinkedProposals
  | GetRfps
  | GetRfpsByLabel
  | GetRootMembers
  | GetStats
  | HasModerator
  | IsAllowedToEditProposal
  | IsAllowedToUseLabels
  | IsAllowedToWriteRfps
  | IsRestrictedLabel
  | New
  | RemoveMember
  | SetAllowedCategories
  | SetBlockHeightCallback
  | SetCommunityAddon
  | SetCommunityAddons
  | SetCommunitySocialdb
  | SetFeaturedCommunities
  | SetGlobalLabels
  | SetRestrictedRules
  | SetRfpBlockHeightCallback
  | SetSocialDbProfileDescription
  | UnsafeMigrate
  | UnsafeSelfUpgrade
  | UnsetRestrictedRules
  | UpdateAddon
  | UpdateCommunity
  | Web4Get;
export type Member =
  | {
      Account: AccountId;
    }
  | {
      Team: string;
    };
/**
 * NEAR Account Identifier.
 *
 * This is a unique, syntactically valid, human-readable account identifier on the NEAR network.
 *
 * [See the crate-level docs for information about validation.](index.html#account-id-rules)
 *
 * Also see [Error kind precedence](AccountId#error-kind-precedence).
 *
 * ## Examples
 *
 * ``` use near_account_id::AccountId;
 *
 * let alice: AccountId = "alice.near".parse().unwrap();
 *
 * assert!("ƒelicia.near".parse::<AccountId>().is_err()); // (ƒ is not f) ```
 */
export type AccountId = string;
export type VersionedMemberMetadata = {
  children: Member[];
  description: string;
  member_metadata_version: "V0";
  parents: Member[];
  permissions: {
    [k: string]: ActionType[];
  };
};
export type ActionType = "edit-post" | "use-labels";
export type VersionedProposalBody =
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      name: string;
      proposal_body_version: "V0";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: TimelineStatusV1;
    }
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      linked_rfp?: number | null;
      name: string;
      proposal_body_version: "V1";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: TimelineStatusV1;
    }
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      linked_rfp?: number | null;
      name: string;
      proposal_body_version: "V2";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: VersionedTimelineStatus;
    };
export type ProposalFundingCurrency = "NEAR" | "USDT" | "USDC" | "OTHER";
export type TimelineStatusV1 =
  | {
      status: "DRAFT";
    }
  | {
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "REVIEW";
    }
  | {
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "APPROVED";
    }
  | {
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "REJECTED";
    }
  | {
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "APPROVED_CONDITIONALLY";
    }
  | {
      kyc_verified: boolean;
      request_for_trustees_created: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "PAYMENT_PROCESSING";
      test_transaction_sent: boolean;
    }
  | {
      kyc_verified: boolean;
      payouts: string[];
      request_for_trustees_created: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "FUNDED";
      test_transaction_sent: boolean;
      trustees_released_payment: boolean;
    }
  | {
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "CANCELLED";
    };
export type VersionedTimelineStatus =
  | {
      status: "DRAFT";
    }
  | {
      kyc_verified: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "REVIEW";
    }
  | {
      kyc_verified: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "APPROVED";
    }
  | {
      kyc_verified: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "REJECTED";
    }
  | {
      kyc_verified: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "APPROVED_CONDITIONALLY";
    }
  | {
      kyc_verified: boolean;
      kyc_verified_deprecated?: boolean;
      request_for_trustees_created: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "PAYMENT_PROCESSING";
      test_transaction_sent: boolean;
    }
  | {
      kyc_verified: boolean;
      kyc_verified_deprecated?: boolean;
      payouts: string[];
      request_for_trustees_created: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "FUNDED";
      test_transaction_sent: boolean;
      trustees_released_payment: boolean;
    }
  | {
      kyc_verified: boolean;
      reviewer_completed_attestation: boolean;
      sponsor_requested_review: boolean;
      status: "CANCELLED";
    };
export type VersionedRFPBody = {
  description: string;
  name: string;
  rfp_body_version: "V0";
  submission_deadline: number;
  summary: string;
  timeline: TimelineStatus;
};
export type TimelineStatus =
  | {
      status: "ACCEPTING_SUBMISSIONS";
    }
  | {
      status: "EVALUATION";
    }
  | {
      status: "PROPOSAL_SELECTED";
    }
  | {
      status: "CANCELLED";
    };
export type ProposalSnapshot = {
  editor_id: AccountId;
  labels: string[];
  timestamp: number;
} & ProposalSnapshot1;
export type ProposalSnapshot1 =
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      name: string;
      proposal_body_version: "V0";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: TimelineStatusV1;
    }
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      linked_rfp?: number | null;
      name: string;
      proposal_body_version: "V1";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: TimelineStatusV1;
    }
  | {
      category: string;
      description: string;
      linked_proposals: number[];
      linked_rfp?: number | null;
      name: string;
      proposal_body_version: "V2";
      receiver_account: AccountId;
      requested_sponsor: AccountId;
      requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
      requested_sponsorship_usd_amount: number;
      summary: string;
      supervisor?: AccountId | null;
      timeline: VersionedTimelineStatus;
    };
export type RFPSnapshot = {
  block_height: number;
  editor_id: AccountId;
  labels: string[];
  linked_proposals: number[];
  timestamp: number;
} & RFPSnapshot1;
export type RFPSnapshot1 = {
  description: string;
  name: string;
  rfp_body_version: "V0";
  submission_deadline: number;
  summary: string;
  timeline: TimelineStatus;
};
export type Rule =
  | {
      ExactMatch: string;
    }
  | {
      StartsWith: string;
    }
  | {
      /**
       * @minItems 0
       * @maxItems 0
       */
      Any: [];
    };
export type Web4Response =
  | {
      body: string;
      contentType: string;
    }
  | {
      bodyUrl: string;
    }
  | {
      preloadUrls: string[];
    };

export interface AddMember {
  member: Member;
  metadata: VersionedMemberMetadata;
}
export interface AddProposal {
  body: VersionedProposalBody;
  labels: string[];
  accepted_terms_and_conditions_version: any;
}
export interface AddRfp {
  body: VersionedRFPBody;
  labels: string[];
}
export interface CancelRfp {
  id: number;
  proposals_to_cancel: number[];
  proposals_to_unlink: number[];
}
export interface ContractSourceMetadata {}
export interface CreateAddon {
  addon: AddOn;
}
export interface AddOn {
  configurator_widget: string;
  description: string;
  icon: string;
  id: string;
  title: string;
  view_widget: string;
}
export interface CreateCommunity {
  inputs: CommunityInputs;
}
export interface CommunityInputs {
  banner_url: string;
  bio_markdown?: string | null;
  description: string;
  handle: string;
  logo_url: string;
  name: string;
  tag: string;
}
export interface CreateDiscussion {
  handle: string;
  block_height: number;
}
export interface DeleteAddon {
  id: string;
}
export interface DeleteCommunity {
  handle: string;
}
export interface EditMember {
  member: Member;
  metadata: VersionedMemberMetadata;
}
export interface EditProposal {
  id: number;
  body: VersionedProposalBody;
  labels: string[];
}
export interface EditProposalLinkedRfp {
  id: number;
  rfp_id: any;
}
export interface EditProposalTimeline {
  id: number;
  timeline: TimelineStatusV1;
}
export interface EditProposalVersionedTimeline {
  id: number;
  timeline: VersionedTimelineStatus;
}
export interface EditRfp {
  id: number;
  body: VersionedRFPBody;
  labels: string[];
}
export interface EditRfpTimeline {
  id: number;
  timeline: TimelineStatus;
}
export interface FindRestrictedLabels {
  labels: string[];
}
export interface GetAccessControlInfo {}
export interface GetAccountCommunityPermissions {
  account_id: AccountId;
  community_handle: string;
}
export interface GetAddon {
  id: string;
}
export interface GetAllAddons {}
export interface GetAllAllowedProposalLabels {
  editor: AccountId;
}
export interface GetAllAuthors {}
export interface GetAllCommunitiesMetadata {}
export interface GetAllProposalAuthors {}
export interface GetAllProposalIds {}
export interface GetAllProposalLabels {}
export interface GetAllRfpIds {}
export interface GetAllowedCategories {}
export interface GetCommunity {
  handle: string;
}
export interface GetCommunityAddons {
  handle: string;
}
export interface GetCommunityMetadata {
  handle: string;
}
export interface GetFeaturedCommunities {}
export interface GetGlobalLabels {}
export interface GetParentToChildren {}
export interface GetPostToParent {}
export interface GetProposal {
  proposal_id: number;
}
export interface GetProposals {
  ids: any;
}
export interface GetProposalsByAuthor {
  author: AccountId;
}
export interface GetProposalsByLabel {
  label: string;
}
export interface GetRfp {
  rfp_id: number;
}
export interface GetRfpLinkedProposals {
  rfp_id: number;
}
export interface GetRfps {}
export interface GetRfpsByLabel {
  label: string;
}
export interface GetRootMembers {}
export interface GetStats {}
export interface HasModerator {
  account_id: AccountId;
}
export interface IsAllowedToEditProposal {
  proposal_id: number;
  editor: undefined;
}
export interface IsAllowedToUseLabels {
  editor: undefined;
  labels: string[];
}
export interface IsAllowedToWriteRfps {
  editor: AccountId;
}
export interface IsRestrictedLabel {
  label: string;
}
export interface New {}
export interface RemoveMember {
  member: Member;
}
export interface SetAllowedCategories {
  new_categories: string[];
}
export interface SetBlockHeightCallback {
  proposal: Proposal;
}
export interface Proposal {
  author_id: AccountId;
  id: number;
  snapshot: ProposalSnapshot;
  snapshot_history: ProposalSnapshot1[];
  social_db_post_block_height: number;
}
export interface SetCommunityAddon {
  handle: string;
  community_addon: CommunityAddOn;
}
export interface CommunityAddOn {
  addon_id: string;
  display_name: string;
  enabled: boolean;
  id: string;
  parameters: string;
}
export interface SetCommunityAddons {
  handle: string;
  addons: CommunityAddOn[];
}
export interface SetCommunitySocialdb {
  handle: string;
  data: undefined;
}
export interface SetFeaturedCommunities {
  handles: string[];
}
export interface SetGlobalLabels {
  labels: LabelInfoExtended[];
}
export interface LabelInfoExtended {
  /**
   * @minItems 3
   * @maxItems 3
   */
  color?: [number, number, number] | null;
  title?: string | null;
  value: string;
}
export interface SetRestrictedRules {
  rules: RulesList;
}
export interface RulesList {}
export interface SetRfpBlockHeightCallback {
  rfp: RFP;
}
export interface RFP {
  author_id: AccountId;
  id: number;
  snapshot: RFPSnapshot;
  snapshot_history: number[];
  social_db_post_block_height: number;
}
export interface SetSocialDbProfileDescription {
  description: string;
}
export interface UnsafeMigrate {}
export interface UnsafeSelfUpgrade {}
export interface UnsetRestrictedRules {
  rules: Rule[];
}
export interface UpdateAddon {
  addon: AddOn;
}
export interface UpdateCommunity {
  handle: string;
  community: Community;
}
export interface Community {
  addons: CommunityAddOn[];
  admins: AccountId[];
  banner_url: string;
  bio_markdown?: string | null;
  description: string;
  github_handle?: string | null;
  handle: string;
  logo_url: string;
  name: string;
  tag: string;
  telegram_handle?: string | null;
  twitter_handle?: string | null;
  website_url?: string | null;
}
export interface Web4Get {
  request: Web4Request;
}
export interface Web4Request {
  accountId?: string | null;
  params?: {
    [k: string]: string;
  };
  path: string;
  preloads?: {
    [k: string]: Web4Response;
  } | null;
  query?: {
    [k: string]: string[];
  };
}
