ALTER TABLE public.contacts
  ADD CONSTRAINT contacts_name_length CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT contacts_email_length CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT contacts_email_format CHECK (email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT contacts_message_length CHECK (char_length(message) BETWEEN 1 AND 2000),
  ADD CONSTRAINT contacts_type_allowed CHECK (type IN ('empresa', 'jovem'));