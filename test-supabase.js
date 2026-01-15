
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Manual .env parsing
const envPath = path.resolve(process.cwd(), '.env');
let env = {};

try {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            env[key.trim()] = value.trim();
        }
    });
} catch (e) {
    console.error('Could not read .env file. Make sure it exists!');
    process.exit(1);
}

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not found in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('Testing connection to Supabase...');
    console.log(`URL: ${supabaseUrl}`);

    try {
        const { data, error } = await supabase
            .from('portfolio_comments')
            .select('count', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Connection Failed:', error.message);
            if (error.code === 'PGRST116') {
                console.error('Hint: The table "portfolio_comments" might not exist.');
            }
        } else {
            console.log('✅ Connection Successful!');
            console.log(`Table "portfolio_comments" is accessible.`);
        }
    } catch (err) {
        console.error('❌ Unexpected Error:', err.message);
    }
}

testConnection();
