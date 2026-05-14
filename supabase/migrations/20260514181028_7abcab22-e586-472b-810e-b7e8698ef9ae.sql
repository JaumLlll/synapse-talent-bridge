DROP POLICY IF EXISTS "Anyone can submit a contact" ON public.contacts;

CREATE POLICY "Anyone can submit a valid contact"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND char_length(message) BETWEEN 1 AND 2000
  AND type IN ('empresa', 'jovem')
);