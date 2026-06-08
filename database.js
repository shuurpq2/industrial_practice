import Database from "better-sqlite3"

let db = new Database("./db.sqlite", {verbose: console.log})