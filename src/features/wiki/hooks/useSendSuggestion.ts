import { useMutation } from '@tanstack/react-query'
import axios from 'lib/api/axios'
import { WikiMenu } from '../components'

export const useSendSuggestion = () => {
  const mutation = useMutation({
    mutationFn: async ({ content, source, author }: { content: string, source: WikiMenu, author: string }) => {
      const response = await axios.post('/wiki/send-suggestion', {
        content,
        source,
        author
      }, {
        headers: { 'Content-Type': 'application/json' }
      })

      return response.data
    }
  })

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError
  }
}

