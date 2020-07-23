-- Revert oh:get-mug-function from pg

BEGIN;

DROP FUNCTION get_mugs();
DROP FUNCTION get_random_mug();

COMMIT;
