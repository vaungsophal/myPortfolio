-- FORCE PUBLIC ACCESS (Troubleshooting Script)

-- 1. Reset Storage Policies
drop policy if exists "Give public access to profile_images" on storage.objects;
drop policy if exists "Allow public uploads to profile_images" on storage.objects;

-- 2. Allow PUBLIC SELECT (Read)
create policy "Public Access Select"
on storage.objects for select
using ( bucket_id = 'profile_images' );

-- 3. Allow PUBLIC INSERT (Upload) - Explicitly for 'anon' and 'authenticated'
create policy "Public Access Insert"
on storage.objects for insert
with check ( bucket_id = 'profile_images' );

-- 4. Fix Table Policies (Just in case)
alter table public.portfolio_comments enable row level security;

drop policy if exists "Enable read access for all users" on public.portfolio_comments;
drop policy if exists "Enable insert access for all users" on public.portfolio_comments;

create policy "Public Read Comments"
on public.portfolio_comments for select
using (true);

create policy "Public Insert Comments"
on public.portfolio_comments for insert
with check (true);
