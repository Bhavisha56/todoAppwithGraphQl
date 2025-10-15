import {Pool} from "pg"

const connectionString='postgresql://postgres:37kLtLcBr4s44ibL@db.droweyxbidrbrekukeje.supabase.co:5432/postgres'

const pool=new Pool({
    connectionString
})

const db = {
  query: (text, params) => pool.query(text, params),
};

export default db;
