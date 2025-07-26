import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Maskinuthyrning',
  projectId: 'wnsl6n8h',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
