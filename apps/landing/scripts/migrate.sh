#!/bin/bash
# Script para ejecutar migraciones solo si DATABASE_URL está disponible

if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL not available, skipping migration"
  exit 0
fi

echo "Running Prisma migrations..."
bunx prisma migrate deploy
