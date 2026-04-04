import { supabase } from '@/lib/supabase'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Verifier l'autorisation
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return Response.json(
        { error: 'Non autorise' },
        { status: 401 }
      )
    }

    const siteId = request.nextUrl.searchParams.get('site_id')
    if (!siteId) {
      return Response.json(
        { error: 'site_id requis' },
        { status: 400 }
      )
    }

    // Total des clics
    const { count: totalClicks } = await supabase
      .from('review_clicks')
      .select('*', { count: 'exact', head: true })
      .eq('site_id', siteId)

    // Clics ce mois-ci
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setHours(0, 0, 0, 0)

    const { count: monthClicks } = await supabase
      .from('review_clicks')
      .select('*', { count: 'exact', head: true })
      .eq('site_id', siteId)
      .gte('clicked_at', startOfMonth.toISOString())

    // Repartition par source
    const { data: allClicks } = await supabase
      .from('review_clicks')
      .select('source')
      .eq('site_id', siteId)

    const bySource: Record<string, number> = {}
    if (allClicks) {
      for (const click of allClicks) {
        bySource[click.source] = (bySource[click.source] || 0) + 1
      }
    }

    return Response.json({
      total: totalClicks || 0,
      this_month: monthClicks || 0,
      by_source: bySource,
    })
  } catch {
    return Response.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
