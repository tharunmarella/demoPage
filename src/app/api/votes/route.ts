import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { service } = await request.json()
    
    if (!service || typeof service !== 'string') {
      return NextResponse.json(
        { error: 'Service is required' },
        { status: 400 }
      )
    }

    // First, check if the service exists
    const { data: existingService, error: fetchError } = await supabase
      .from('service_votes')
      .select('*')
      .eq('service', service)
      .single()

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "not found"
      throw fetchError
    }

    let result
    if (existingService) {
      // Update existing service
      const { data, error } = await supabase
        .from('service_votes')
        .update({ votes: existingService.votes + 1 })
        .eq('id', existingService.id)
        .select()
        .single()

      if (error) throw error
      result = data
    } else {
      // Create new service
      const { data, error } = await supabase
        .from('service_votes')
        .insert([{ service, votes: 1 }])
        .select()
        .single()

      if (error) throw error
      result = data
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Vote error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('service_votes')
      .select('*')
      .order('votes', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Get votes error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
} 