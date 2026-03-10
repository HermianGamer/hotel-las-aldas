import React from 'react'
(globalThis as any).React = React
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { netlifyTool } from 'sanity-plugin-netlify'


export default defineConfig({
  name: 'default',
  title: 'las-aldas',

  projectId: 'iuu4f520',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), netlifyTool()],

  schema: {
    types: schemaTypes,
  },
})
