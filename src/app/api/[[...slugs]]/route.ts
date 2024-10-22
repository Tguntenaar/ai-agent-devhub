import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";


interface FunctionCallAction {
  type: "FunctionCall";
  params: {
    methodName: string;
    args: object;
    gas: string;
    deposit: string;
  };
}

const app = new Elysia({ prefix: "/api", aot: false })
  .use(swagger())
  
  // POST /add_member
  .post("/add_member", async ({ body }) => {
    const { member, metadata } = body as { member: any; metadata: any };

    if (!member || !metadata) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "add_member",
        args: { member, metadata },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // POST /add_proposal
  .post("/add_proposal", async ({ body }) => {
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
  })

  // POST /add_rfp
  .post("/add_rfp", async ({ body }) => {
    const { body: rfpBody, labels } = body as { body: any; labels: string[] };

    if (!rfpBody || !labels) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "add_rfp",
        args: { body: rfpBody, labels },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // POST /cancel_rfp
  .post("/cancel_rfp", async ({ body }) => {
    const { id, proposals_to_cancel, proposals_to_unlink } = body as {
      id?: number;
      proposals_to_cancel: number[];
      proposals_to_unlink: number[];
    };

    if (id === undefined || !Array.isArray(proposals_to_cancel) || !Array.isArray(proposals_to_unlink)) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "cancel_rfp",
        args: { id, proposals_to_cancel, proposals_to_unlink },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // POST /create_community
  .post("/create_community", async ({ body }) => {
    const { inputs } = body as { inputs: any };

    if (!inputs) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "create_community",
        args: { inputs },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // POST /edit_member
  .post("/edit_member", async ({ body }) => {
    const { member, metadata } = body as { member: any; metadata: any };

    if (!member || !metadata) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "edit_member",
        args: { member, metadata },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // POST /edit_proposal
  .post("/edit_proposal", async ({ body }) => {
    const { id, body: proposalBody, labels } = body as {
      id?: number;
      body: any;
      labels: string[];
    };

    if (id === undefined || !proposalBody || !labels) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const functionCall: FunctionCallAction = {
      type: "FunctionCall",
      params: {
        methodName: "edit_proposal",
        args: { id, body: proposalBody, labels },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    return functionCall;
  })

  // GET /get_community
  .get("/get_community", async ({ query }) => {
    const { handle } = query as { handle: string };

    if (!handle) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    try {
      const response = await fetch("https://rpc.mainnet.near.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "dontcare",
          method: "query",
          params: {
            request_type: "call_function",
            finality: "final",
            account_id: "devhub.near",
            method_name: "get_community",
            args_base64: Buffer.from(JSON.stringify({ handle })).toString("base64"),
          },
        }),
      });

      const data = await response.json();
      let deserializedResult;

      if (Array.isArray(data.result.result)) {
        deserializedResult = String.fromCharCode(...data.result.result);
      } else {
        deserializedResult = data.result.result;
      }

      return deserializedResult;
    } catch (error) {
      return {
        status: 500,
        body: { error: "Failed to fetch community details" },
      };
    }
  })

  // GET /get_proposal
  .get("/get_proposal", async ({ query }) => {
    const { proposal_id } = query as { proposal_id?: number };

    console.log("proposal_id", proposal_id);

    if (proposal_id === undefined) {
      return {
        status: 400,
        body: { error: "Invalid input" },
      };
    }

    const bodyContent = JSON.stringify({
      jsonrpc: "2.0",
      id: "dontcare",
      method: "query",
      params: {
        request_type: "call_function",
        finality: "final",
        account_id: "devhub.near",
        method_name: "get_proposal",
        args_base64: Buffer.from(JSON.stringify({ proposal_id: Number(proposal_id) })).toString("base64"),
      },
    });

    console.log({ body: bodyContent });

    try {
      const response = await fetch("https://rpc.mainnet.near.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyContent,
      });

      const data = await response.json();
      let deserializedResult;

      if (Array.isArray(data.result.result)) {
        deserializedResult = String.fromCharCode(...data.result.result);
      } else {
        deserializedResult = data.result.result;
      }

      return deserializedResult;
    } catch (error) {
      return {
        status: 500,
        body: { error: "Failed to fetch proposal details" },
      };
    }
  })

  // GET /.well-known/ai-plugin.json
  // .get("/.well-known/ai-plugin.json", async () => {
  //   let bitteDevJson: { url?: string };
  //   try {
  //     bitteDevJson = await import("./bitte.dev.json").then(module => module.default);
  //   } catch (error) {
  //     console.warn("Failed to import bitte.dev.json, using default values");
  //     bitteDevJson = { url: undefined };
  //   }

  //   const openApiSpec = {
  //     openapi: "3.0.0",
  //     info: {
  //       title: "Devhub NEAR Protocol API",
  //       description: "API for interacting with Devhub operations including creating, updating and submitting proposals.",
  //       version: "1.0.0",
  //     },
  //     servers: [
  //       {
  //         url: bitteDevJson.url || "http://localhost:8080",
  //       },
  //     ],
  //     "x-mb": {
  //       "account-id": "thomasguntenaar.near",
  //       assistant: {
  //         name: "Devhub Assistant",
  //         description:
  //           "An assistant designed to interact with the devhub.near contract on the Near Protocol.",
  //         instructions:
  //           "You are an assistant designed to interact with the devhub.near contract on the Near Protocol. Your main functions are:\n\n1. [List all write functions]: Use the /api/[function_name] endpoints to perform write operations. These endpoints will return valid function calls which you should be able to send. Ensure all required parameters are provided by the user as described in the paths section below.\n\n2. [List all view functions]: Use the /api/[function_name] endpoints to retrieve data from the contract.\n\nWhen performing write operations:\n- Ensure all required parameters are non-empty and of the correct type.\n- Avoid using any special characters or formatting that might cause issues with the contract.\n- If the user provides invalid input, kindly ask them to provide valid data according to the parameter specifications.\n\nWhen performing view operations:\n- Simply use the appropriate /api/[function_name] endpoint and return the result to the user.\n\nImportant: For all write operations, the endpoints will return a function call object. You should clearly indicate to the user that this is a function call that needs to be sent to the blockchain, and not the final result of the operation.",
  //         tools: [
  //           {
  //             type: "generate-transaction",
  //           },
  //         ],
  //       },
  //     },
  //     paths: {
  //       "/api/add_member": {
  //         post: {
  //           tags: ["Member"],
  //           summary: "Add a new member",
  //           description: "This endpoint adds a new member to the community.",
  //           operationId: "add-member",
  //           requestBody: {
  //             required: true,
  //             content: {
  //               "application/json": {
  //                 schema: {
  //                   type: "object",
  //                   properties: {
  //                     member: { type: "object" },
  //                     metadata: { type: "object" },
  //                   },
  //                   required: ["member", "metadata"],
  //                 },
  //               },
  //             },
  //           },
  //           responses: {
  //             "200": {
  //               description: "Successful response",
  //               content: {
  //                 "application/json": {
  //                   schema: {
  //                     type: "object",
  //                     properties: {
  //                       type: { type: "string" },
  //                       params: {
  //                         type: "object",
  //                         properties: {
  //                           methodName: { type: "string" },
  //                           args: { type: "object" },
  //                           gas: { type: "string" },
  //                           deposit: { type: "string" },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //       // ... (Other path specifications remain unchanged)
  //       // Ensure all other paths from the original ai-plugin.json are included here
  //     },
  //   };

  //   return openApiSpec;
  // })

  // GET /ping
  .get("/ping", () => {
    return { message: "pong" };
  })
  
  .compile();

export const GET = app.handle;
export const POST = app.handle;
