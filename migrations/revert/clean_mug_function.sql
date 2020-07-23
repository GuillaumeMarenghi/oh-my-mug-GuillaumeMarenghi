-- Revert oh:clean_mug_function from pg

BEGIN;

DROP FUNCTION clean_mug(INT);

COMMIT;
