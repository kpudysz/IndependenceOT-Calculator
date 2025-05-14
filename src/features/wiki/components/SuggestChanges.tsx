import React, { useRef, useState, useEffect } from 'react'
import { Box, Button, Collapse, Divider, Flex, Text } from '@chakra-ui/react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import 'styles/quill.css'
import { colors } from 'common/constants'
import { WikiMenu } from './WikiMenu'
import { Input } from 'lib/components'

type SuggestChangesProps = {
  source: WikiMenu,
  onSend?(content: string, source: WikiMenu, author?: string): void
}

export const SuggestChanges: React.FC<SuggestChangesProps> = ({ source, onSend }) => {
  const [isOpen, setIsOpen] = useState(false)
  const quillRef = useRef<HTMLDivElement>(null)
  const [quill, setQuill] = useState<Quill | null>(null)
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

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

  const handleSend = () => {
    if (onSend) {
      onSend(content, source, author)
    }

    if (quill) {
      quill.setText('')
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
      <Input onChange={value => setAuthor(value)} controlledValue={author} label="Your nickname"/>
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
        <Button colorScheme="orange" size="md" onClick={handleSend} mt={2}>
          Send
        </Button>
      </Collapse>
    </Box>
  )
}
