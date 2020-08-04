-- Deploy oh:new_mug_function to pg

BEGIN;

CREATE FUNCTION new_mug(mug_data json) RETURNS mug
AS
$$
    INSERT INTO mug ("label", "capacity", "description")
    VALUES (mug_data->>'label', (mug_data->>'capacity')::int, mug_data->>'description') RETURNING *;
$$
LANGUAGE sql VOLATILE;

COMMIT;
