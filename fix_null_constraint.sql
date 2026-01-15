-- Fix NULL constraint on profile_image column

-- This will allow the 'profile_image' column to be empty (NULL) when a user doesn't upload a photo.
ALTER TABLE public.portfolio_comments 
ALTER COLUMN profile_image DROP NOT NULL;
