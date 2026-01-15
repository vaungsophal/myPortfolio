-- Storage Policies Fix

-- 1. Ensure the bucket exists (you can't do this with SQL easily in all environments, but we can set the policy)
-- Note: You must manually create a bucket named 'profile_images' and make it PUBLIC in the dashboard if it doesn't exist.

-- 2. Drop existing policies to avoid conflicts
drop policy if exists "Give public access to profile_images" on storage.objects;
drop policy if exists "Allow public uploads to profile_images" on storage.objects;

-- 3. Re-create Policy for Reading (SELECT) - Allow everyone to see images
create policy "Give public access to profile_images"
on storage.objects
for select
using ( bucket_id = 'profile_images' );

-- 4. Re-create Policy for Writing (INSERT) - Allow everyone to upload images
-- IMPORTANT: We add 'to public' to specifically target unauthenticated users
create policy "Allow public uploads to profile_images"
on storage.objects
for insert
to public
with check ( bucket_id = 'profile_images' );
