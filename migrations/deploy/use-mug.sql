-- Deploy oh:use-mug to pg

BEGIN;

CREATE FUNCTION use_mug(mug_id INT) RETURNS mug
AS
$$
    UPDATE mug SET last_usage = NOW(), clean = FALSE WHERE id = mug_id
    RETURNING *;
$$
LANGUAGE sql VOLATILE STRICT;

COMMIT;
