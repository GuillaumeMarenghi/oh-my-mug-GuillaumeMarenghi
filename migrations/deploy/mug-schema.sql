-- Deploy oh:mug-schema to pg

BEGIN;

CREATE TABLE "mug" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "capacity" INT NOT NULL DEFAULT 250, --en ml
    "description" TEXT,
    "last_usage" TIMESTAMPTZ,
    "clean" BOOLEAN NOT NULL DEFAULT TRUE,
    "state" TEXT NOT NULL DEFAULT 'good'
);

COMMIT;
