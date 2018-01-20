import { database } from "firebase";

const db = database();

export default (formLabel, data) => {
  const timestamp = Date.now();
  db.ref(`${formLabel}/${timestamp}`).set({ ...data });
};
