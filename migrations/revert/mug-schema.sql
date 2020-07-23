-- Revert oh:mug-schema from pg

BEGIN;

DROP TABLE "mug";

COMMIT;
