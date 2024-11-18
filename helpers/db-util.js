import { MongoClient } from "mongodb";

let client;

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.vlexy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  client = await MongoClient.connect(connectionString);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocument(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
