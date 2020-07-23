-- Deploy oh:clean_mug_function to pg

BEGIN;

CREATE FUNCTION clean_mug(mug_id INT) RETURNS mug
AS
$$
    UPDATE mug SET clean = TRUE WHERE id = mug_id
    RETURNING *;
$$
LANGUAGE sql VOLATILE STRICT;

COMMIT;
