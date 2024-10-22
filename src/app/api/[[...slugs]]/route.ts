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
  // TODO: metadata is too abstract we need to make it more specific to be useful.
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

  // POST /create_community Make sure to spend 4 NEAR to create a community
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
  // TODO: metadata is too abstract we need to simplify it for the agent.
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

  // TODO: .post("/update_proposal", async ({body}) => {
    // Get the proposal the user wants to update. By getting the latest from an author.
    // Then get the body and add the newly added work to the body.
    // Then return the updated proposal.
  // })

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
  // TODO: .get("/get_community_information", asyn ({}) => {
  //   // Get all community handles.
  //   // Then match the handle to the query.
  //   // Then return the community information.
  // })
  // TODO: .get("/get_proposal_information", async({}) => {
  //   // Use the query to find the proposal
  //   // If we have the rust API with search and everything we can use that to not make a call to the RPC directly but search for the proposals of a author for instance.
  //  })
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
  // GET /ping
  .get("/ping", () => {
    return { message: "pong" };
  })
  .compile();

export const GET = app.handle;
export const POST = app.handle;
