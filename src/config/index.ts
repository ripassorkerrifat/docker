import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
   env: process.env.NODE_DEV,
   port: process.env.PORT,
   database_url: process.env.DATABASE_URL,
   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
   jwt: {
      secret_token: process.env.JWT_SECKRET_TOKEN,
      secret_expires: process.env.JWT_EXPIRE_IN,
      refresh_token: process.env.JWT_REFRESH_TOKEN,
      refresh_expires: process.env.JWT_REFRESH_EXPIRE_IN,
   },
   local_file_url: process.env.LOCAL_FILE_URL,
   facebook: {
      access_token: process.env.FACEBOOK_ACCESS_TOKEN || '',
      pixel_id: process.env.FACEBOOK_PIXEL_ID || '',
      debug: process.env.NODE_ENV === 'development',
   },
};
