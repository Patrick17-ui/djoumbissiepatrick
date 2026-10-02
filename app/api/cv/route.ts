import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { NextResponse } from 'next/server'

export async function GET() {
  const file = await readFile(join(process.cwd(), 'public', 'cv-patrick-djoumbissie.pdf'))

  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV_Patrick_Raoul_DJOUMBISSIE.pdf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
