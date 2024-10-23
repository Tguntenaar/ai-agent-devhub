
export interface FunctionCallAction {
  type: "FunctionCall";
  params: {
    methodName: string;
    args: object;
    gas: string;
    deposit: string;
  };
}

export type ProposalBodyV2 = {
  name: string;
  category: Category;
  summary: string;
  description: string;
  linked_proposals: number[]; // Assuming ProposalId is a number (u32 in Rust)
  requested_sponsorship_usd_amount: number; // Assuming u32 translates to number
  requested_sponsorship_paid_in_currency: ProposalFundingCurrency;
  receiver_account: string; // Assuming AccountId is a string
  requested_sponsor: string; // Assuming AccountId is a string
  supervisor?: string; // Optional AccountId
  timeline: VersionedTimelineStatus;
  linked_rfp?: number; // Optional RFPId
};

export type Category =
  "DevDAO Operations" |
  "DevDAO Platform" |
  "Events & Hackathons" |
  "Engagement & Awareness" |
  "Decentralized DevRel" |
  "Universities & Bootcamps" |
  "Tooling & Infrastructure" |
  "Other";

type ProposalFundingCurrency = 'NEAR' | 'USDT' | 'USDC' | 'OTHER';


type VersionedTimelineStatus = TimelineStatusV2


type AddProposalTimelineStatus = { status: 'DRAFT' }
| { status: 'REVIEW'; reviewStatus: ReviewStatusV2 }
type TimelineStatusV2 = 
    AddProposalTimelineStatus
    | { status: 'APPROVED'; reviewStatus: ReviewStatusV2 }
    | { status: 'REJECTED'; reviewStatus: ReviewStatusV2 }
    | { status: 'APPROVED_CONDITIONALLY'; reviewStatus: ReviewStatusV2 }
    | { status: 'PAYMENT_PROCESSING'; paymentProcessingStatus: PaymentProcessingStatusV2 }
    | { status: 'FUNDED'; fundedStatus: FundedStatusV2 }
    | { status: 'CANCELLED'; reviewStatus: ReviewStatusV2 };

// Define the types for ReviewStatusV1, ReviewStatusV2, PaymentProcessingStatusV1, PaymentProcessingStatusV2, FundedStatusV1, and FundedStatusV2
type ReviewStatusV1 = {
    sponsorRequestedReview: boolean;
    reviewerCompletedAttestation: boolean;
};

type ReviewStatusV2 = {
    sponsorRequestedReview: boolean;
    reviewerCompletedAttestation: boolean;
    kycVerified: boolean;
};

type PaymentProcessingStatusV1 = {
    reviewStatus: ReviewStatusV1;
    kycVerified: boolean;
    testTransactionSent: boolean;
    requestForTrusteesCreated: boolean;
};

type PaymentProcessingStatusV2 = {
    reviewStatus: ReviewStatusV2;
    kycVerifiedDeprecated: boolean;
    testTransactionSent: boolean;
    requestForTrusteesCreated: boolean;
};

type FundedStatusV1 = {
    paymentProcessingStatus: PaymentProcessingStatusV1;
    trusteesReleasedPayment: boolean;
    payouts: string[];
};

type FundedStatusV2 = {
    paymentProcessingStatus: PaymentProcessingStatusV2;
    trusteesReleasedPayment: boolean;
    payouts: string[];
};