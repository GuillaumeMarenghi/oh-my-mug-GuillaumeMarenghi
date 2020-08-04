-- Revert oh:new_mug_function from pg

BEGIN;

DROP FUNCTION new_mug(JSON);

COMMIT;
