import { Handler } from "@netlify/functions";
import { query as q, Client } from "faunadb";

const handler: Handler = async (event, context) => {
  const client = new Client({
    secret: process.env.REACT_APP_FAUNA_KEY,
    domain: "db.us.fauna.com",
  });
  if (event.httpMethod === "GET") {
    const { data }: { data: { name: string; id: string }[] } =
      await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("category"))),
          q.Lambda(
            "categoryRef",
            q.Let(
              {
                categoryDoc: q.Get(q.Var("categoryRef")),
              },
              q.Merge(q.Select(["data"], q.Var("categoryDoc")), {
                id: q.Select(["ref", "id"], q.Var("categoryDoc")),
              })
            )
          )
        )
      );
    return {
      statusCode: 200,
      body: JSON.stringify({ categories: data }),
    };
  }
  if (event.httpMethod === "POST") {
    const body = event.body;
    const parsedBody = JSON.parse(body);

    const { category }: { category: { name: string; id: string } } =
      await client.query(
        q.Let(
          {
            categoryDoc: q.Create(q.Collection("category"), {
              data: {
                name: parsedBody.name,
              },
            }),
          },
          {
            category: q.Merge(q.Select(["data"], q.Var("categoryDoc")), {
              id: q.Select(["ref", "id"], q.Var("categoryDoc")),
            }),
          }
        )
      );
    return {
      statusCode: 200,
      body: JSON.stringify({ category }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

export { handler };
