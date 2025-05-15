import { Box, Button, Collapse, Divider, Flex, Text } from '@chakra-ui/react'
import { colors } from 'common/constants'
import { Input } from 'lib/components'
import { useToast } from 'lib/hooks'
import { Toastify } from 'lib/types'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import React, { useEffect, useRef, useState } from 'react'
import 'styles/quill.css'
import { WikiMenu } from './WikiMenu'

type SuggestChangesProps = {
  source: WikiMenu,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  onSend?(content: string, source: WikiMenu, author: string): void
}

export const SuggestChanges: React.FC<SuggestChangesProps> = ({ source, isLoading, isSuccess, isError, onSend }) => {
  const [isOpen, setIsOpen] = useState(false)
  const quillRef = useRef<HTMLDivElement>(null)
  const [quill, setQuill] = useState<Quill | null>(null)
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const { setToast } = useToast()

  useEffect(() => {
    if (isOpen && quillRef.current && !quill) {
      const q = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image']
          ]
        }
      })
      q.on('text-change', () => {
        setContent(q.root.innerHTML)
      })
      setQuill(q)
    }
  }, [isOpen, quill])

  useEffect(() => {
    if (isSuccess) {
      quill?.setText('')
      setToast({
        text: 'Suggestion sent successfully for review. Soon it will appear on the page.',
        type: Toastify.Success
      })
    }

    if (isError) {
      setToast({
        text: 'Something went wrong. If you sent images try to make them smaller and try again.',
        type: Toastify.Error
      })
    }
  }, [isSuccess, isError])

  const handleSend = () => {
    if (onSend) {
      onSend(content, source, author)
    }
  }

  return (
    <Box mt={4} w="100%">
      <Flex align="center" cursor="pointer" onClick={() => setIsOpen(prevState => !prevState)}>
        <Text fontWeight="semibold" fontSize="lg" userSelect="none" mb="15px">
          Suggest changes
        </Text>
        <Flex ml="auto" transform={isOpen ? 'rotate(270deg)' : 'rotate(90deg)'}>
          ▶
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Divider my={2} />
        <Input onChange={value => setAuthor(value)} controlledValue={author} label="Your nickname" isClearable={false} />
        <Divider my={2} />
        <Box
          ref={quillRef}
          id="suggest-changes-quill"
          bg={colors.background}
          color={colors.text}
          borderRadius="md"
          border={`1px solid ${colors.gray}`}
          minH="120px"
          mb={2}
        />
        <Button colorScheme="orange" size="md" onClick={handleSend} mt={2} isLoading={isLoading}>
          Send
        </Button>
      </Collapse>
    </Box>
  )
}
