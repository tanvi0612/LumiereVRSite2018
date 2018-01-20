import { database } from "firebase";

const db = database();

export default async (formLabel, data) => {
  const timestamp = Date.now();
  await db.ref(`${formLabel}/${timestamp}`).set({ ...data });
  console.log(formLabel, "success!!");
};
