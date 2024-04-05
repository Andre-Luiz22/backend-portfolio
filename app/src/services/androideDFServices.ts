import dialogFlow from "@google-cloud/dialogflow";
import dotenv from "dotenv";
dotenv.config();

interface detectIntentProps {
  languageCode: string;
  queryText: string;
  sessionId: string;
}

export const detectIntentFromANDRoidE = async ({
  languageCode,
  queryText,
  sessionId,
}: detectIntentProps) => {
  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS as string);

  const PROJECTID = CREDENTIALS.project_id;

  const CONFIGURATION = {
    credentials: {
      private_key: CREDENTIALS["private_key"],
      client_email: CREDENTIALS["client_email"],
    },
  };

  const sessionClient = new dialogFlow.SessionsClient(CONFIGURATION);
  const sessionPath = sessionClient.projectAgentSessionPath(
    PROJECTID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: queryText,
        languageCode: languageCode,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return {
    result,
    response: result?.fulfillmentText,
  };
};
