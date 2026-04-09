
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
console.log('Testing connection to:', connectionString?.replace(/:([^:@]+)@/, ':****@')); // Hide password in logs

const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false } // Supabase requires SSL, sometimes this flag helps locally
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('✅ Successfully connected to the database!');
        const res = await client.query('SELECT NOW()');
        console.log('Server time:', res.rows[0]);
        client.release();
    } catch (err: any) {
        console.error('❌ Connection error:', err.message);
        if (err.code) console.error('Error Code:', err.code);
    } finally {
        await pool.end();
    }
}

testConnection();
