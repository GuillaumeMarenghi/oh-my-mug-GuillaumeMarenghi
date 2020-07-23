-- Revert oh:new_mug_function from pg

BEGIN;

DROP FUNCTION new_mug(TEXT, INT, TEXT);

COMMIT;
