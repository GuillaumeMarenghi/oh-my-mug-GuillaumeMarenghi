-- Revert oh:use-mug from pg

BEGIN;

DROP FUNCTION use_mug(INT);

COMMIT;
