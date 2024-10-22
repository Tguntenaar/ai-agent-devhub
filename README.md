# Devhub Assistant - A Bitte Agent

<img src="https://github.com/user-attachments/assets/aa54bac4-30ef-49bb-bac7-732ff561bd95" alt="cover_image" width="0"/>

Built using Next.js 14 + Elysia.

[![Demo](https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen)](https://ref-finance-agent-next.vercel.app/)
[![Deploy](https://img.shields.io/badge/Deploy-on%20Vercel-blue)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Fref-finance-agent-next)

**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-AI-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2014-blue)](#)

## Project Walkthrough

Devhub Assistant facilitates the tracking of work through simple interface of AI-powered agents.  [Build your own agent](https://docs.mintbase.xyz/ai/assistant-plugins)

#### API Base URL

https://ai-agent-devhub.vercel.app

#### Endpoints

- Add Member `POST` `/api/add_member`

- Add Proposal `POST` `/api/add_proposal`

- Add RFP `POST` `/api/add_rfp`

- Cancel RFP `POST` `/api/cancel_rfp`

- Create Community `POST` `/api/create_community`

- Edit Member `POST` `/api/edit_member`

- Edit Proposal `POST` `/api/edit_proposal`

- Get Community `GET` `/api/get_community`

- Get Proposal `GET` `/api/get_proposal`

- Ping `GET` `/api/ping`

#### Usage


Make LLM requests to the endpoints above. Refer to the full API documentation for detailed parameter and response information.
```bash
npx make-agent dev --port 3000
```


### Installation

Set `NEAR_ENV="mainnet"` in your `.env.local` file.
Set your Bitte API key

```bash
# install dependencies
pnpm i

# start the development server
pnpm dev
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<img src="https://i.imgur.com/fgFX6BS.png" alt="detail_image" width="0"/>


