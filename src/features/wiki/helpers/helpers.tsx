import { Toastify } from "lib/types"
import { WikiMenu } from "../components"
import { useToast } from 'lib/hooks'
import axios from "axios"

export const sendSuggestion = async (content: string, source: WikiMenu, author?: string) => {
  const { setToast } = useToast()
    const response = await axios.post('/wiki/send-suggestion', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          content,
          source,
          author
        }
      })

      if (response.status === 200) {
        return setToast({
          text: 'Suggestions sent successfully, after confirmation they will be added to the wiki',
          type: Toastify.Success
        })
      }

       setToast({
          text: 'Something went wrong when trying to send your suggestions. Try again.',
          type: Toastify.Error
        })
      }
