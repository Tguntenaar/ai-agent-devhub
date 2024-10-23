import { FunctionCallAction } from "@/utils/types";

const aiPlugin = {
  "/api/add_proposal": {
      "post": {
        "tags": ["Proposal"],
        "summary": "Add a new proposal",
        "description": "This endpoint adds a new proposal to the community.",
        "operationId": "add-proposal",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "body": {
                    "type": "object"
                  },
                  "labels": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "accepted_terms_and_conditions_version": {
                    "type": "integer"
                  }
                },
                "required": ["body", "labels"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "params": {
                      "type": "object",
                      "properties": {
                        "methodName": {
                          "type": "string"
                        },
                        "args": {
                          "type": "object"
                        },
                        "gas": {
                          "type": "string"
                        },
                        "deposit": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}

export async function handleAddProposalV1({body}: {body: any}): Promise<FunctionCallAction | {status: number, body: {error: string}}> {

    const { body: proposalBody, labels, accepted_terms_and_conditions_version } = body as {
      body: any;
      labels: string[];
      accepted_terms_and_conditions_version?: number;
    };

    if (!proposalBody || !labels) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "add_proposal",
        args: { body: proposalBody, labels, accepted_terms_and_conditions_version },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  
}